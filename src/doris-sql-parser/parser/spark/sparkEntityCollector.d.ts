import type {
	NamespaceNameContext,
	NamespaceNameCreateContext,
	SingleStatementContext,
	TableNameContext,
	TableNameCreateContext,
	ViewNameContext,
	ViewNameCreateContext,
	FunctionNameCreateContext,
	ColumnNameCreateContext,
	CreateTableContext,
	CreateTableLikeContext,
	ReplaceTableContext,
	QueryStatementContext,
	InsertFromQueryContext,
	MultipleInsertContext,
	CreateViewContext,
	CreateTempViewUsingContext,
	CreateNamespaceContext,
	CreateFunctionContext
} from '../../lib/spark/SparkSqlParser';
import type { SparkSqlParserListener } from '../../lib/spark/SparkSqlParserListener';
import { EntityCollector } from '../common/entityCollector';
export declare class SparkEntityCollector
	extends EntityCollector
	implements SparkSqlParserListener
{
	/** ====== Entity Begin */
	exitNamespaceName(ctx: NamespaceNameContext): void;
	exitNamespaceNameCreate(ctx: NamespaceNameCreateContext): void;
	exitTableName(ctx: TableNameContext): void;
	exitTableNameCreate(ctx: TableNameCreateContext): void;
	exitViewName(ctx: ViewNameContext): void;
	exitViewNameCreate(ctx: ViewNameCreateContext): void;
	exitFunctionNameCreate(ctx: FunctionNameCreateContext): void;
	exitColumnNameCreate(ctx: ColumnNameCreateContext): void;
	/** ===== Statement begin */
	enterSingleStatement(ctx: SingleStatementContext): void;
	exitSingleStatement(ctx: SingleStatementContext): void;
	enterCreateTable(ctx: CreateTableContext): void;
	exitCreateTable(ctx: CreateTableContext): void;
	enterCreateTableLike(ctx: CreateTableLikeContext): void;
	exitCreateTableLike(ctx: CreateTableLikeContext): void;
	enterReplaceTable(ctx: ReplaceTableContext): void;
	exitReplaceTable(ctx: ReplaceTableContext): void;
	enterCreateView(ctx: CreateViewContext): void;
	exitCreateView(ctx: CreateViewContext): void;
	enterCreateTempViewUsing(ctx: CreateTempViewUsingContext): void;
	exitCreateTempViewUsing(ctx: CreateTempViewUsingContext): void;
	enterQueryStatement(ctx: QueryStatementContext): void;
	exitQueryStatement(ctx: QueryStatementContext): void;
	enterInsertFromQuery(ctx: InsertFromQueryContext): void;
	exitInsertFromQuery(ctx: InsertFromQueryContext): void;
	enterMultipleInsert(ctx: MultipleInsertContext): void;
	exitMultipleInsert(ctx: MultipleInsertContext): void;
	enterCreateNamespace(ctx: CreateNamespaceContext): void;
	exitCreateNamespace(ctx: CreateNamespaceContext): void;
	enterCreateFunction(ctx: CreateFunctionContext): void;
	exitCreateFunction(ctx: CreateFunctionContext): void;
}
