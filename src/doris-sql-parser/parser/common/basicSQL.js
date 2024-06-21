import { CharStreams, CommonTokenStream, ParseTreeWalker, PredictionMode } from 'antlr4ng';
import { CodeCompletionCore } from 'antlr4-c3';
import { findCaretTokenIndex } from './findCaretTokenIndex';
import { ctxToText, tokenToWord } from './textAndWord';
import { ParseErrorListener } from './parseErrorListener';
import { ErrorStrategy } from './errorStrategy';
/**
 * Basic SQL class, every sql needs extends it.
 */
export class BasicSQL {
	constructor() {
		this._parseErrors = [];
		/** members for cache end */
		this._errorListener = (error) => {
			this._parseErrors.push(error);
		};
	}
	/**
	 * Create an antlr4 lexer from input.
	 * @param input string
	 */
	createLexer(input, errorListener) {
		const charStreams = CharStreams.fromString(input);
		const lexer = this.createLexerFromCharStream(charStreams);
		if (errorListener) {
			lexer.removeErrorListeners();
			lexer.addErrorListener(new ParseErrorListener(errorListener));
		}
		return lexer;
	}
	/**
	 * Create an antlr4 parser from input.
	 * @param input string
	 */
	createParser(input, errorListener) {
		const lexer = this.createLexer(input, errorListener);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = this.createParserFromTokenStream(tokenStream);
		parser.interpreter.predictionMode = PredictionMode.SLL;
		if (errorListener) {
			parser.removeErrorListeners();
			parser.addErrorListener(new ParseErrorListener(errorListener));
		}
		return parser;
	}
	/**
	 * Parse input string and return parseTree.
	 * @param input string
	 * @param errorListener listen parse errors and lexer errors.
	 * @returns parseTree
	 */
	parse(input, errorListener) {
		const parser = this.createParser(input, errorListener);
		parser.buildParseTrees = true;
		parser.errorHandler = new ErrorStrategy();
		return parser.program();
	}
	/**
	 * Create an antlr4 parser from input.
	 * And the instances will be cache.
	 * @param input string
	 */
	createParserWithCache(input) {
		this._parseTree = null;
		this._charStreams = CharStreams.fromString(input);
		this._lexer = this.createLexerFromCharStream(this._charStreams);
		this._lexer.removeErrorListeners();
		this._lexer.addErrorListener(new ParseErrorListener(this._errorListener));
		this._tokenStream = new CommonTokenStream(this._lexer);
		/**
		 * All tokens are generated in advance.
		 * This can cause performance degradation, but it seems necessary for now.
		 * Because the tokens will be used multiple times.
		 */
		this._tokenStream.fill();
		this._parser = this.createParserFromTokenStream(this._tokenStream);
		this._parser.interpreter.predictionMode = PredictionMode.SLL;
		this._parser.buildParseTrees = true;
		this._parser.errorHandler = new ErrorStrategy();
		return this._parser;
	}
	/**
	 * If it is invoked multiple times in a row and the input parameters is the same,
	 * this method returns the parsing result directly for the first time
	 * unless the errorListener parameter is passed.
	 * @param input source string
	 * @param errorListener listen errors
	 * @returns parseTree
	 */
	parseWithCache(input, errorListener) {
		// Avoid parsing the same input repeatedly.
		if (this._parsedInput === input && !errorListener && this._parseTree) {
			return this._parseTree;
		}
		this._parseErrors = [];
		const parser = this.createParserWithCache(input);
		this._parsedInput = input;
		parser.removeErrorListeners();
		parser.addErrorListener(new ParseErrorListener(this._errorListener));
		this._parseTree = parser.program();
		return this._parseTree;
	}
	/**
	 * Validate input string and return syntax errors if exists.
	 * @param input source string
	 * @returns syntax errors
	 */
	validate(input) {
		this.parseWithCache(input);
		return this._parseErrors;
	}
	/**
	 * Get all Tokens of input string，'<EOF>' is not included.
	 * @param input source string
	 * @returns Token[]
	 */
	getAllTokens(input) {
		this.parseWithCache(input);
		let allTokens = this._tokenStream.getTokens();
		if (allTokens[allTokens.length - 1].text === '<EOF>') {
			allTokens = allTokens.slice(0, -1);
		}
		return allTokens;
	}
	/**
	 * @param listener Listener instance extends ParserListener
	 * @param parseTree parser Tree
	 */
	listen(listener, parseTree) {
		ParseTreeWalker.DEFAULT.walk(listener, parseTree);
	}
	/**
	 * Split input into statements.
	 * If exist syntax error it will return null.
	 * @param input source string
	 */
	splitSQLByStatement(input) {
		const errors = this.validate(input);
		if (errors.length || !this._parseTree) {
			return null;
		}
		const splitListener = this.splitListener;
		// TODO: add splitListener to all sqlParser implements and remove following if
		if (!splitListener) return null;
		this.listen(splitListener, this._parseTree);
		const res = splitListener.statementsContext
			.map((context) => {
				return ctxToText(context, this._parsedInput);
			})
			.filter(Boolean);
		return res;
	}
	/**
	 * Get suggestions of syntax and token at caretPosition
	 * @param input source string
	 * @param caretPosition caret position, such as cursor position
	 * @returns suggestion
	 */
	getSuggestionAtCaretPosition(input, caretPosition) {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j;
		const splitListener = this.splitListener;
		// TODO: add splitListener to all sqlParser implements and remove following if
		if (!splitListener) return null;
		this.parseWithCache(input);
		if (!this._parseTree) return null;
		let sqlParserIns = this._parser;
		const allTokens = this.getAllTokens(input);
		let caretTokenIndex = findCaretTokenIndex(caretPosition, allTokens);
		let c3Context = this._parseTree;
		let tokenIndexOffset = 0;
		if (!caretTokenIndex && caretTokenIndex !== 0) return null;
		/**
		 * Split sql by statement.
		 * Try to collect candidates in as small a range as possible.
		 */
		this.listen(splitListener, this._parseTree);
		const statementCount =
			(_a = splitListener.statementsContext) === null || _a === void 0 ? void 0 : _a.length;
		const statementsContext = splitListener.statementsContext;
		// If there are multiple statements.
		if (statementCount > 1) {
			/**
			 * Find a minimum valid range, reparse the fragment, and provide a new parse tree to C3.
			 * The boundaries of this range must be statements with no syntax errors.
			 * This can ensure the stable performance of the C3.
			 */
			let startStatement = null;
			let stopStatement = null;
			for (let index = 0; index < statementCount; index++) {
				const ctx = statementsContext[index];
				const isCurrentCtxValid = !ctx.exception;
				if (!isCurrentCtxValid) continue;
				/**
				 * Ensure that the statementContext before the left boundary
				 * and the last statementContext on the right boundary are qualified SQL statements.
				 */
				const isPrevCtxValid =
					index === 0 ||
					!((_b = statementsContext[index - 1]) === null || _b === void 0
						? void 0
						: _b.exception);
				const isNextCtxValid =
					index === statementCount - 1 ||
					!((_c = statementsContext[index + 1]) === null || _c === void 0
						? void 0
						: _c.exception);
				if (ctx.stop && ctx.stop.tokenIndex < caretTokenIndex && isPrevCtxValid) {
					startStatement = ctx;
				}
				if (
					ctx.start &&
					!stopStatement &&
					ctx.start.tokenIndex > caretTokenIndex &&
					isNextCtxValid
				) {
					stopStatement = ctx;
					break;
				}
			}
			// A boundary consisting of the index of the input.
			const startIndex =
				(_e =
					(_d =
						startStatement === null || startStatement === void 0
							? void 0
							: startStatement.start) === null || _d === void 0
						? void 0
						: _d.start) !== null && _e !== void 0
					? _e
					: 0;
			const stopIndex =
				(_g =
					(_f =
						stopStatement === null || stopStatement === void 0
							? void 0
							: stopStatement.stop) === null || _f === void 0
						? void 0
						: _f.stop) !== null && _g !== void 0
					? _g
					: input.length - 1;
			/**
			 * Save offset of the tokenIndex in the range of input
			 * compared to the tokenIndex in the whole input
			 */
			tokenIndexOffset =
				(_j =
					(_h =
						startStatement === null || startStatement === void 0
							? void 0
							: startStatement.start) === null || _h === void 0
						? void 0
						: _h.tokenIndex) !== null && _j !== void 0
					? _j
					: 0;
			caretTokenIndex = caretTokenIndex - tokenIndexOffset;
			/**
			 * Reparse the input fragment，
			 * and c3 will collect candidates in the newly generated parseTree.
			 */
			const inputSlice = input.slice(startIndex, stopIndex);
			const lexer = this.createLexer(inputSlice);
			lexer.removeErrorListeners();
			const tokenStream = new CommonTokenStream(lexer);
			tokenStream.fill();
			const parser = this.createParserFromTokenStream(tokenStream);
			parser.interpreter.predictionMode = PredictionMode.SLL;
			parser.removeErrorListeners();
			parser.buildParseTrees = true;
			parser.errorHandler = new ErrorStrategy();
			sqlParserIns = parser;
			c3Context = parser.program();
		}
		const core = new CodeCompletionCore(sqlParserIns);
		core.preferredRules = this.preferredRules;
		const candidates = core.collectCandidates(caretTokenIndex, c3Context);
		const originalSuggestions = this.processCandidates(
			candidates,
			allTokens,
			caretTokenIndex,
			tokenIndexOffset
		);
		const syntaxSuggestions = originalSuggestions.syntax.map((syntaxCtx) => {
			const wordRanges = syntaxCtx.wordRanges.map((token) => {
				return tokenToWord(token, this._parsedInput);
			});
			return {
				syntaxContextType: syntaxCtx.syntaxContextType,
				wordRanges
			};
		});
		return {
			syntax: syntaxSuggestions,
			keywords: originalSuggestions.keywords
		};
	}
	getAllEntities(input, caretPosition) {
		const allTokens = this.getAllTokens(input);
		const caretTokenIndex = caretPosition
			? findCaretTokenIndex(caretPosition, allTokens)
			: void 0;
		const collectListener = this.createEntityCollector(input, caretTokenIndex);
		// TODO: add entityCollector to all sqlParser implements and remove following if
		if (!collectListener) {
			return null;
		}
		// const parser = this.createParserWithCache(input);
		// parser.entityCollecting = true;
		// if(caretPosition) {
		//     const allTokens = this.getAllTokens(input);
		//     const tokenIndex = findCaretTokenIndex(caretPosition, allTokens);
		//     parser.caretTokenIndex = tokenIndex;
		// }
		// const parseTree = parser.program();
		const parseTree = this.parseWithCache(input);
		this.listen(collectListener, parseTree);
		// parser.caretTokenIndex = -1;
		// parser.entityCollecting = false;
		return collectListener.getEntities();
	}
}
