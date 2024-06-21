import type { ParserRuleContext, Token } from 'antlr4ng';
export interface WordPosition {
	/** start at 0 */
	readonly startIndex: number;
	/** end at ..n-1 */
	readonly endIndex: number;
	/** start at 1 */
	readonly line: number;
	/** start at 1 */
	readonly startColumn: number;
	/** end at ..n + 1 */
	readonly endColumn: number;
}
export interface WordRange extends WordPosition {
	/** content of word */
	readonly text: string;
}
export interface TextPosition {
	/** start at 0 */
	readonly startIndex: number;
	/** end at ..n-1 */
	readonly endIndex: number;
	/** start at 1 */
	readonly startLine: number;
	/** end at ..n */
	readonly endLine: number;
	/** start at 1 */
	readonly startColumn: number;
	/** end at ..n + 1 */
	readonly endColumn: number;
}
export interface TextSlice extends TextPosition {
	readonly text: string;
}
/**
 * Convert Token to Word
 */
export declare function tokenToWord(
	token: Token,
	input: string
): WordPosition & {
	text: string;
};
/**
 * Convert ParserRuleContext to Word
 */
export declare function ctxToWord(
	ctx: ParserRuleContext,
	input: string
):
	| (WordPosition & {
			text: string;
	  })
	| null;
/**
 * Convert ParserRuleContext to Text
 */
export declare function ctxToText(
	ctx: ParserRuleContext,
	input: string
):
	| (TextPosition & {
			text: string;
	  })
	| null;
