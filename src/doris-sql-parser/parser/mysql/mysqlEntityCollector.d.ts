import type {
	ColumnCreateTableContext,
	ColumnNameCreateContext,
	CopyCreateTableContext,
	CreateDatabaseContext,
	CreateFunctionContext,
	CreateViewContext,
	DatabaseNameContext,
	DatabaseNameCreateContext,
	FunctionNameCreateContext,
	InsertStatementContext,
	QueryCreateTableContext,
	SelectStatementContext,
	SingleStatementContext,
	TableNameContext,
	TableNameCreateContext,
	ViewNameContext,
	ViewNameCreateContext
} from '../../lib/mysql/MySqlParser';
import type { MySqlParserListener } from '../../lib/mysql/MySqlParserListener';
import { EntityCollector } from '../common/entityCollector';
export declare class MySqlEntityCollector extends EntityCollector implements MySqlParserListener {
	/** ====== Entity Begin */
	exitDatabaseName(ctx: DatabaseNameContext): void;
	exitDatabaseNameCreate(ctx: DatabaseNameCreateContext): void;
	exitTableName(ctx: TableNameContext): void;
	exitTableNameCreate(ctx: TableNameCreateContext): void;
	exitViewName(ctx: ViewNameContext): void;
	exitViewNameCreate(ctx: ViewNameCreateContext): void;
	exitFunctionNameCreate(ctx: FunctionNameCreateContext): void;
	exitColumnNameCreate(ctx: ColumnNameCreateContext): void;
	/** ===== Statement begin */
	enterSingleStatement(ctx: SingleStatementContext): void;
	exitSingleStatement(ctx: SingleStatementContext): void;
	enterQueryCreateTable(ctx: QueryCreateTableContext): void;
	exitQueryCreateTable(ctx: QueryCreateTableContext): void;
	enterColumnCreateTable(ctx: ColumnCreateTableContext): void;
	exitColumnCreateTable(ctx: ColumnCreateTableContext): void;
	enterCopyCreateTable(ctx: CopyCreateTableContext): void;
	exitCopyCreateTable(ctx: CopyCreateTableContext): void;
	enterCreateView(ctx: CreateViewContext): void;
	exitCreateView(ctx: CreateViewContext): void;
	enterSimpleSelect(ctx: SelectStatementContext): void;
	exitSimpleSelect(ctx: SelectStatementContext): void;
	enterUnionAndLateralSelect(ctx: SelectStatementContext): void;
	exitUnionAndLateralSelect(ctx: SelectStatementContext): void;
	enterSelectExpression(ctx: SelectStatementContext): void;
	exitSelectExpression(ctx: SelectStatementContext): void;
	enterInsertStatement(ctx: InsertStatementContext): void;
	exitInsertStatement(ctx: InsertStatementContext): void;
	enterCreateDatabase(ctx: CreateDatabaseContext): void;
	exitCreateDatabase(ctx: CreateDatabaseContext): void;
	enterCreateFunction(ctx: CreateFunctionContext): void;
	exitCreateFunction(ctx: CreateFunctionContext): void;
}
