import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { HiveSqlLexer } from '../../lib/hive/HiveSqlLexer';
import { HiveSqlParser, ProgramContext } from '../../lib/hive/HiveSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { HiveSqlSplitListener } from './hiveSplitListener';
import { HiveEntityCollector } from './hiveEntityCollector';
export { HiveEntityCollector, HiveSqlSplitListener };
export declare class HiveSQL extends BasicSQL<HiveSqlLexer, ProgramContext, HiveSqlParser> {
	protected createLexerFromCharStream(charStreams: CharStream): HiveSqlLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): HiveSqlParser;
	protected preferredRules: Set<number>;
	protected get splitListener(): HiveSqlSplitListener;
	protected createEntityCollector(input: string, caretTokenIndex?: number): HiveEntityCollector;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
