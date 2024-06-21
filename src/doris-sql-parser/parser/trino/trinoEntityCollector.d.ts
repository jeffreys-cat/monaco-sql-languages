import type {
	ColumnNameCreateContext,
	CreateMaterializedViewContext,
	CreateSchemaContext,
	CreateTableAsSelectContext,
	CreateTableContext,
	CreateViewContext,
	InsertIntoContext,
	QueryStatementContext,
	SchemaNameContext,
	SchemaNameCreateContext,
	SingleStatementContext,
	TableNameContext,
	TableNameCreateContext,
	ViewNameContext,
	ViewNameCreateContext
} from '../../lib/trino/TrinoSqlParser';
import type { TrinoSqlListener } from '../../lib/trino/TrinoSqlListener';
import { EntityCollector } from '../common/entityCollector';
export declare class TrinoEntityCollector extends EntityCollector implements TrinoSqlListener {
	/** ====== Entity Begin */
	exitSchemaName(ctx: SchemaNameContext): void;
	exitSchemaNameCreate(ctx: SchemaNameCreateContext): void;
	exitTableName(ctx: TableNameContext): void;
	exitTableNameCreate(ctx: TableNameCreateContext): void;
	exitViewName(ctx: ViewNameContext): void;
	exitViewNameCreate(ctx: ViewNameCreateContext): void;
	exitColumnNameCreate(ctx: ColumnNameCreateContext): void;
	/** ===== Statement begin */
	enterSingleStatement(ctx: SingleStatementContext): void;
	exitSingleStatement(ctx: SingleStatementContext): void;
	enterCreateSchema(ctx: CreateSchemaContext): void;
	exitCreateSchema(ctx: CreateSchemaContext): void;
	enterCreateTableAsSelect(ctx: CreateTableAsSelectContext): void;
	exitCreateTableAsSelect(ctx: CreateTableAsSelectContext): void;
	enterCreateTable(ctx: CreateTableContext): void;
	exitCreateTable(ctx: CreateTableContext): void;
	enterCreateView(ctx: CreateViewContext): void;
	exitCreateView(ctx: CreateViewContext): void;
	enterCreateMaterializedView(ctx: CreateMaterializedViewContext): void;
	exitCreateMaterializedView(ctx: CreateMaterializedViewContext): void;
	enterQueryStatement(ctx: QueryStatementContext): void;
	exitQueryStatement(ctx: QueryStatementContext): void;
	enterInsertInto(ctx: InsertIntoContext): void;
	exitInsertInto(ctx: InsertIntoContext): void;
}
