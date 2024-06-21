import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { SparkSqlLexer } from '../../lib/spark/SparkSqlLexer';
import { SparkSqlParser, ProgramContext } from '../../lib/spark/SparkSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { SparkSqlSplitListener } from './sparkSplitListener';
import { SparkEntityCollector } from './sparkEntityCollector';
export { SparkSqlSplitListener, SparkEntityCollector };
export declare class SparkSQL extends BasicSQL<SparkSqlLexer, ProgramContext, SparkSqlParser> {
	protected createLexerFromCharStream(charStreams: CharStream): SparkSqlLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): SparkSqlParser;
	protected preferredRules: Set<number>;
	protected get splitListener(): SparkSqlSplitListener;
	protected createEntityCollector(input: string, caretTokenIndex?: number): SparkEntityCollector;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
