import { worker } from '../../fillers/monaco-editor-core';
import { Doris } from '../../doris-sql-parser/parser/doris';
import { BaseSQLWorker, ICreateData } from '../../baseSQLWorker';

export class DorisWorker extends BaseSQLWorker {
	protected _ctx: worker.IWorkerContext;
	protected parser: Doris;
	constructor(ctx: worker.IWorkerContext, createData: ICreateData) {
		super(ctx, createData);
		this._ctx = ctx;
		this.parser = new Doris();
	}
}

export function create(ctx: worker.IWorkerContext, createData: ICreateData): DorisWorker {
	return new DorisWorker(ctx, createData);
}
