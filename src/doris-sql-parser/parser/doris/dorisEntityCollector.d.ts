import { EntityCollector } from '../common/entityCollector';
import { DorisParserListener } from '../../lib/doris/DorisParserListener';
import {
	CreateTableContext,
	CreateViewContext,
	FromClauseContext,
	FunctionNameIdentifierContext,
	InsertTableContext,
	MaterializedViewNameContext,
	SelectClauseContext,
	SelectColumnClauseContext,
	StatementContext,
	TableNameContext
} from '../../lib/doris/DorisParser';
export declare class DorisEntityCollector extends EntityCollector implements DorisParserListener {
	/** ====== Entity Begin */
	exitTableNameCreate(ctx: TableNameContext): void;
	exitTableName(ctx: TableNameContext): void;
	exitColumnNameCreate(ctx: SelectColumnClauseContext): void;
	exitViewNameCreate(ctx: CreateViewContext): void;
	exitViewName(ctx: CreateViewContext): void;
	exitFunctionNameCreate(ctx: FunctionNameIdentifierContext): void;
	/** ==== Statement begin */
	enterStatement(ctx: StatementContext): void;
	exitStatement(): void;
	enterCreateTableStatement(ctx: CreateTableContext): void;
	exitCreateTableStatement(): void;
	enterSelectStatement(ctx: SelectClauseContext): void;
	exitSelectStatement(ctx: SelectClauseContext): void;
	enterFromSelectStmt(ctx: FromClauseContext): void;
	exitFromSelectStmt(ctx: FromClauseContext): void;
	enterCreateViewStatement(ctx: CreateViewContext): void;
	exitCreateViewStatement(ctx: CreateViewContext): void;
	enterCreateMaterializedViewStatement(ctx: MaterializedViewNameContext): void;
	exitCreateMaterializedViewStatement(ctx: MaterializedViewNameContext): void;
	enterInsertStmt(ctx: InsertTableContext): void;
	exitInsertStmt(ctx: InsertTableContext): void;
	enterFunctionNameCreate(ctx: FunctionNameIdentifierContext): void;
	exitCreateFunctionStatement(ctx: FunctionNameIdentifierContext): void;
}
