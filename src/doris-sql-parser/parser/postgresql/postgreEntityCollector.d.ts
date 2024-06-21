import type {
	ColumnCreateTableContext,
	ColumnNameCreateContext,
	CreateDatabaseContext,
	CreateForeignTableContext,
	CreateMaterializedViewContext,
	CreatePartitionForeignTableContext,
	CreateViewContext,
	CreatefunctionstmtContext,
	DatabaseNameContext,
	DatabaseNameCreateContext,
	FunctionNameCreateContext,
	InsertStatementContext,
	QueryCreateTableContext,
	SelectStatementContext,
	SingleStmtContext,
	TableNameContext,
	TableNameCreateContext,
	ViewNameContext,
	ViewNameCreateContext
} from '../../lib/postgresql/PostgreSqlParser';
import type { PostgreSqlParserListener } from '../../lib/postgresql/PostgreSqlParserListener';
import { EntityCollector } from '../common/entityCollector';
export declare class PostgreSqlEntityCollector
	extends EntityCollector
	implements PostgreSqlParserListener
{
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
	enterSingleStatement(ctx: SingleStmtContext): void;
	exitSingleStatement(ctx: SingleStmtContext): void;
	enterCreateDatabase(ctx: CreateDatabaseContext): void;
	exitCreateDatabase(ctx: CreateDatabaseContext): void;
	enterQueryCreateTable(ctx: QueryCreateTableContext): void;
	exitQueryCreateTable(ctx: QueryCreateTableContext): void;
	enterColumnCreateTable(ctx: ColumnCreateTableContext): void;
	exitColumnCreateTable(ctx: ColumnCreateTableContext): void;
	enterCreateForeignTable(ctx: CreateForeignTableContext): void;
	exitCreateForeignTable(ctx: CreateForeignTableContext): void;
	enterCreatePartitionForeignTable(ctx: CreatePartitionForeignTableContext): void;
	exitCreatePartitionForeignTable(ctx: CreatePartitionForeignTableContext): void;
	enterCreateView(ctx: CreateViewContext): void;
	exitCreateView(ctx: CreateViewContext): void;
	enterCreateMaterializedView(ctx: CreateMaterializedViewContext): void;
	exitCreateMaterializedView(ctx: CreateMaterializedViewContext): void;
	enterSelectStatement(ctx: SelectStatementContext): void;
	exitSelectStatement(ctx: SelectStatementContext): void;
	enterInsertStatement(ctx: InsertStatementContext): void;
	exitInsertStatement(ctx: InsertStatementContext): void;
	enterCreatefunctionstmt(ctx: CreatefunctionstmtContext): void;
	exitCreatefunctionstmt(ctx: CreatefunctionstmtContext): void;
}
