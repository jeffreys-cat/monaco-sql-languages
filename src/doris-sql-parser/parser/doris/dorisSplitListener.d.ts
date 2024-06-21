import { SingleStatementContext } from '../../lib/doris/DorisParser';
import { DorisParserListener } from '../../lib/doris/DorisParserListener';
import { SplitListener } from '../common/splitListener';
export declare class DorisSplitListener
	extends SplitListener<SingleStatementContext>
	implements DorisParserListener
{
	exitSingleStatement(ctx: SingleStatementContext): void;
}
