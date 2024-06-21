import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { DorisSplitListener } from './dorisSplitListener';
import { DorisLexer } from '../../lib/doris/DorisLexer';
import { DorisParser, ProgramContext } from '../../lib/doris/DorisParser';
import { DorisEntityCollector } from './dorisEntityCollector';
export { DorisEntityCollector, DorisSplitListener };
export declare class Doris extends BasicSQL<DorisLexer, ProgramContext, DorisParser> {
	protected createLexerFromCharStream(charStreams: CharStream): DorisLexer;
	protected createParserFromTokenStream(tokenStream: CommonTokenStream): DorisParser;
	protected preferredRules: Set<number>;
	protected get splitListener(): DorisSplitListener;
	protected createEntityCollector(input: string, caretTokenIndex?: number): DorisEntityCollector;
	protected processCandidates(
		candidates: CandidatesCollection,
		allTokens: Token[],
		caretTokenIndex: number,
		tokenIndexOffset: number
	): Suggestions<Token>;
}
