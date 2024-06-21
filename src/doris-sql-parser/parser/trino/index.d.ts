import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { TrinoSqlLexer } from '../../lib/trino/TrinoSqlLexer';
import { TrinoSqlParser, ProgramContext } from '../../lib/trino/TrinoSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { TrinoSqlSplitListener } from './trinoSplitListener';
import { TrinoEntityCollector } from './trinoEntityCollector';
export { TrinoSqlSplitListener, TrinoEntityCollector };
export declare class TrinoSQL extends BasicSQL<TrinoSqlLexer, ProgramContext, TrinoSqlParser> {
	protected createLexerFromCharStream(charStreams: CharStream): TrinoSqlLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): TrinoSqlParser;
	protected get splitListener(): TrinoSqlSplitListener;
	protected createEntityCollector(input: string, caretTokenIndex?: number): TrinoEntityCollector;
	protected preferredRules: Set<number>;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
