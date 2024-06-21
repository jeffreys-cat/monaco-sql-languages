import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { ImpalaSqlLexer } from '../../lib/impala/ImpalaSqlLexer';
import { ImpalaSqlParser, ProgramContext } from '../../lib/impala/ImpalaSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { ImpalaSqlSplitListener } from './impalaSplitListener';
import { ImpalaEntityCollector } from './impalaEntityCollector';
export { ImpalaEntityCollector, ImpalaSqlSplitListener };
export declare class ImpalaSQL extends BasicSQL<ImpalaSqlLexer, ProgramContext, ImpalaSqlParser> {
	protected createLexerFromCharStream(charStreams: CharStream): ImpalaSqlLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): ImpalaSqlParser;
	protected preferredRules: Set<number>;
	protected get splitListener(): ImpalaSqlSplitListener;
	protected createEntityCollector(input: string, caretTokenIndex?: number): ImpalaEntityCollector;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
