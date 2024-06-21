import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
export class ImpalaEntityCollector extends EntityCollector {
	/** ===== Entity begin */
	exitTableNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
	}
	exitTableNamePath(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE);
	}
	exitColumnNamePathCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
	}
	exitViewNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
	}
	exitViewNamePath(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW);
	}
	exitDatabaseNamePath(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE);
	}
	exitDatabaseNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
	}
	exitFunctionNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
	}
	/** ===== Statement begin */
	enterSingleStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.COMMON_STMT);
	}
	exitSingleStatement(ctx) {
		this.popStmt();
	}
	enterCreateTableLike(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateTableLike(ctx) {
		this.popStmt();
	}
	enterCreateTableSelect(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateTableSelect(ctx) {
		this.popStmt();
	}
	enterCreateKuduTableAsSelect(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateKuduTableAsSelect(ctx) {
		this.popStmt();
	}
	enterQueryStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.SELECT_STMT);
	}
	exitQueryStatement(ctx) {
		this.popStmt();
	}
	enterCreateView(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
	}
	exitCreateView(ctx) {
		this.popStmt();
	}
	enterInsertStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	}
	exitInsertStatement(ctx) {
		this.popStmt();
	}
	enterCreateSchema(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
	}
	exitCreateSchema(ctx) {
		this.popStmt();
	}
	enterCreateAggregateFunction(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
	}
	exitCreateAggregateFunction(ctx) {
		this.popStmt();
	}
	enterCreateFunction(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
	}
	exitCreateFunction(ctx) {
		this.popStmt();
	}
}
