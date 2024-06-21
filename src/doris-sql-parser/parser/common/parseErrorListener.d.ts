import {
	Token,
	Recognizer,
	ANTLRErrorListener,
	RecognitionException,
	ATNSimulator
} from 'antlr4ng';
/**
 * Converted from {@link SyntaxError}.
 */
export interface ParseError {
	/** start at 1 */
	readonly startLine: number;
	/** end at ..n */
	readonly endLine: number;
	/** start at 1 */
	readonly startColumn: number;
	/** end at ..n + 1 */
	readonly endColumn: number;
	readonly message: string;
}
/**
 * The type of error resulting from lexical parsing and parsing.
 */
export interface SyntaxError {
	readonly recognizer: Recognizer<ATNSimulator>;
	readonly offendingSymbol: Token | null;
	readonly line: number;
	readonly charPositionInLine: number;
	readonly msg: string;
	readonly e: RecognitionException;
}
/**
 * ErrorListener will be invoked when it encounters a parsing error.
 * Includes lexical errors and parsing errors.
 */
export type ErrorListener = (parseError: ParseError, originalError: SyntaxError) => void;
export declare class ParseErrorListener implements ANTLRErrorListener {
	private _errorListener;
	constructor(errorListener: ErrorListener);
	reportAmbiguity(): void;
	reportAttemptingFullContext(): void;
	reportContextSensitivity(): void;
	syntaxError(
		recognizer: Recognizer<ATNSimulator>,
		offendingSymbol: Token | null,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException
	): void;
}
