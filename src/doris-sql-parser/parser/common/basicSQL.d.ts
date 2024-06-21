import {
	Lexer,
	Token,
	CommonTokenStream,
	CharStream,
	ParserRuleContext,
	ParseTreeListener
} from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { SQLParserBase } from '../../lib/SQLParserBase';
import { TextSlice } from './textAndWord';
import { CaretPosition, Suggestions } from './types';
import { ParseError, ErrorListener } from './parseErrorListener';
import type { SplitListener } from './splitListener';
import type { EntityCollector } from './entityCollector';
import { EntityContext } from './entityCollector';
/**
 * Basic SQL class, every sql needs extends it.
 */
export declare abstract class BasicSQL<
	L extends Lexer = Lexer,
	PRC extends ParserRuleContext = ParserRuleContext,
	P extends SQLParserBase<PRC> = SQLParserBase<PRC>
> {
	/** members for cache start */
	protected _charStreams: CharStream;
	protected _lexer: L;
	protected _tokenStream: CommonTokenStream;
	protected _parser: P;
	protected _parseTree: PRC | null;
	protected _parsedInput: string;
	protected _parseErrors: ParseError[];
	/** members for cache end */
	private _errorListener;
	/**
	 * PreferredRules for antlr4-c3
	 */
	protected abstract preferredRules: Set<number>;
	/**
	 * Create a antlr4 Lexer instance.
	 * @param input source string
	 */
	protected abstract createLexerFromCharStream(charStreams: CharStream): L;
	/**
	 * Create Parser by CommonTokenStream
	 * @param tokenStream CommonTokenStream
	 */
	protected abstract createParserFromTokenStream(tokenStream: CommonTokenStream): P;
	/**
	 * Convert candidates to suggestions
	 * @param candidates candidate list
	 * @param allTokens all tokens from input
	 * @param caretTokenIndex tokenIndex of caretPosition
	 * @param tokenIndexOffset offset of the tokenIndex in the candidates compared to the tokenIndex in allTokens
	 */
	protected abstract processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
	/**
	 * Get a new splitListener instance.
	 */
	protected abstract get splitListener(): SplitListener<ParserRuleContext>;
	/**
	 * Get a new entityCollector instance.
	 */
	protected abstract createEntityCollector(
		input: string,
		caretTokenIndex?: number
	): EntityCollector;
	/**
	 * Create an antlr4 lexer from input.
	 * @param input string
	 */
	createLexer(input: string, errorListener?: ErrorListener): L;
	/**
	 * Create an antlr4 parser from input.
	 * @param input string
	 */
	createParser(input: string, errorListener?: ErrorListener): P;
	/**
	 * Parse input string and return parseTree.
	 * @param input string
	 * @param errorListener listen parse errors and lexer errors.
	 * @returns parseTree
	 */
	parse(input: string, errorListener?: ErrorListener): PRC;
	/**
	 * Create an antlr4 parser from input.
	 * And the instances will be cache.
	 * @param input string
	 */
	private createParserWithCache;
	/**
	 * If it is invoked multiple times in a row and the input parameters is the same,
	 * this method returns the parsing result directly for the first time
	 * unless the errorListener parameter is passed.
	 * @param input source string
	 * @param errorListener listen errors
	 * @returns parseTree
	 */
	private parseWithCache;
	/**
	 * Validate input string and return syntax errors if exists.
	 * @param input source string
	 * @returns syntax errors
	 */
	validate(input: string): ParseError[];
	/**
	 * Get all Tokens of input string，'<EOF>' is not included.
	 * @param input source string
	 * @returns Token[]
	 */
	getAllTokens(input: string): Token[];
	/**
	 * @param listener Listener instance extends ParserListener
	 * @param parseTree parser Tree
	 */
	listen<PTL extends ParseTreeListener = ParseTreeListener>(
		listener: PTL,
		parseTree: ParserRuleContext
	): void;
	/**
	 * Split input into statements.
	 * If exist syntax error it will return null.
	 * @param input source string
	 */
	splitSQLByStatement(input: string): TextSlice[] | null;
	/**
	 * Get suggestions of syntax and token at caretPosition
	 * @param input source string
	 * @param caretPosition caret position, such as cursor position
	 * @returns suggestion
	 */
	getSuggestionAtCaretPosition(input: string, caretPosition: CaretPosition): Suggestions | null;
	getAllEntities(input: string, caretPosition?: CaretPosition): EntityContext[] | null;
}
