import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
export class FlinkEntityCollector extends EntityCollector {
	/** ====== Entity Begin */
	exitCatalogPathCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.CATALOG_CREATE);
	}
	exitCatalogPath(ctx) {
		this.pushEntity(ctx, EntityContextType.CATALOG);
	}
	exitDatabasePathCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
	}
	exitDatabasePath(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE);
	}
	exitTablePath(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE);
	}
	exitTablePathCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
	}
	exitViewPath(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW);
	}
	exitViewPathCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
	}
	exitColumnNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
	}
	exitFunctionNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
	}
	/** ===== Statement begin */
	enterSqlStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.COMMON_STMT);
	}
	exitSqlStatement(ctx) {
		this.popStmt();
	}
	enterCreateCatalog(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_CATALOG_STMT);
	}
	exitCreateCatalog(ctx) {
		this.popStmt();
	}
	enterCreateDatabase(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
	}
	exitCreateDatabase(ctx) {
		this.popStmt();
	}
	enterCreateTable(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateTable(ctx) {
		this.popStmt();
	}
	enterCreateView(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
	}
	exitCreateView(ctx) {
		this.popStmt();
	}
	enterQueryStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.SELECT_STMT);
	}
	exitQueryStatement(ctx) {
		this.popStmt();
	}
	enterCreateFunction(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
	}
	exitCreateFunction(ctx) {
		this.popStmt();
	}
	enterInsertStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	}
	exitInsertStatement(ctx) {
		this.popStmt();
	}
}
