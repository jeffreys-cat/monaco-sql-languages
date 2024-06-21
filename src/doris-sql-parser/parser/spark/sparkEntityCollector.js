import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
export class SparkEntityCollector extends EntityCollector {
	/** ====== Entity Begin */
	exitNamespaceName(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE);
	}
	exitNamespaceNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
	}
	exitTableName(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE);
	}
	exitTableNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
	}
	exitViewName(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW);
	}
	exitViewNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
	}
	exitFunctionNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
	}
	exitColumnNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
	}
	/** ===== Statement begin */
	enterSingleStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.COMMON_STMT);
	}
	exitSingleStatement(ctx) {
		this.popStmt();
	}
	enterCreateTable(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateTable(ctx) {
		this.popStmt();
	}
	enterCreateTableLike(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateTableLike(ctx) {
		this.popStmt();
	}
	enterReplaceTable(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitReplaceTable(ctx) {
		this.popStmt();
	}
	enterCreateView(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
	}
	exitCreateView(ctx) {
		this.popStmt();
	}
	enterCreateTempViewUsing(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
	}
	exitCreateTempViewUsing(ctx) {
		this.popStmt();
	}
	enterQueryStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.SELECT_STMT);
	}
	exitQueryStatement(ctx) {
		this.popStmt();
	}
	enterInsertFromQuery(ctx) {
		this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	}
	exitInsertFromQuery(ctx) {
		this.popStmt();
	}
	enterMultipleInsert(ctx) {
		this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	}
	exitMultipleInsert(ctx) {
		this.popStmt();
	}
	enterCreateNamespace(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
	}
	exitCreateNamespace(ctx) {
		this.popStmt();
	}
	enterCreateFunction(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
	}
	exitCreateFunction(ctx) {
		this.popStmt();
	}
}
