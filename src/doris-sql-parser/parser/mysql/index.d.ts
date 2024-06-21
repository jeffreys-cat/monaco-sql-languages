import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { MySqlLexer } from '../../lib/mysql/MySqlLexer';
import { MySqlParser, ProgramContext } from '../../lib/mysql/MySqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { MysqlSplitListener } from './mysqlSplitListener';
import { MySqlEntityCollector } from './mysqlEntityCollector';
export { MySqlEntityCollector, MysqlSplitListener };
export declare class MySQL extends BasicSQL<MySqlLexer, ProgramContext, MySqlParser> {
	protected createLexerFromCharStream(charStreams: CharStream): MySqlLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): MySqlParser;
	protected preferredRules: Set<number>;
	protected get splitListener(): MysqlSplitListener;
	protected createEntityCollector(input: string, caretTokenIndex?: number): MySqlEntityCollector;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
