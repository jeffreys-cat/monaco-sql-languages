import { SplitListener } from '../common/splitListener';
export class DorisSplitListener extends SplitListener {
	exitSingleStatement(ctx) {
		this._statementsContext.push(ctx);
	}
}
