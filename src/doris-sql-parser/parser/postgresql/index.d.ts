import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { PostgreSqlLexer } from '../../lib/postgresql/PostgreSqlLexer';
import { PostgreSqlParser, ProgramContext } from '../../lib/postgresql/PostgreSqlParser';
import { Suggestions } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { PostgreSqlEntityCollector } from './postgreEntityCollector';
import { PostgreSqlSplitListener } from './postgreSplitListener';
export { PostgreSqlEntityCollector, PostgreSqlSplitListener };
export declare class PostgreSQL extends BasicSQL<
	PostgreSqlLexer,
	ProgramContext,
	PostgreSqlParser
> {
	protected createLexerFromCharStream(charStreams: CharStream): PostgreSqlLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): PostgreSqlParser;
	protected preferredRules: Set<number>;
	protected get splitListener(): PostgreSqlSplitListener;
	protected createEntityCollector(
		input: string,
		caretTokenIndex?: number
	): PostgreSqlEntityCollector;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
