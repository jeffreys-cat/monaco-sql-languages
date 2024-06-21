import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { FlinkSqlLexer } from '../../lib/flink/FlinkSqlLexer';
import { FlinkSqlParser, ProgramContext } from '../../lib/flink/FlinkSqlParser';
import { Suggestions } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { FlinkSqlSplitListener } from './flinkSplitListener';
import { FlinkEntityCollector } from './flinkEntityCollector';
export { FlinkSqlSplitListener, FlinkEntityCollector };
export declare class FlinkSQL extends BasicSQL<FlinkSqlLexer, ProgramContext, FlinkSqlParser> {
	protected createLexerFromCharStream(charStreams: CharStream): FlinkSqlLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): FlinkSqlParser;
	protected preferredRules: Set<number>;
	protected get splitListener(): FlinkSqlSplitListener;
	protected createEntityCollector(input: string, caretTokenIndex?: number): FlinkEntityCollector;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
