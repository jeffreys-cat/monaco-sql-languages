import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
export class TrinoEntityCollector extends EntityCollector {
	/** ====== Entity Begin */
	exitSchemaName(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE);
	}
	exitSchemaNameCreate(ctx) {
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
	enterCreateSchema(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
	}
	exitCreateSchema(ctx) {
		this.popStmt();
	}
	enterCreateTableAsSelect(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateTableAsSelect(ctx) {
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
	enterCreateMaterializedView(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
	}
	exitCreateMaterializedView(ctx) {
		this.popStmt();
	}
	enterQueryStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.SELECT_STMT);
	}
	exitQueryStatement(ctx) {
		this.popStmt();
	}
	enterInsertInto(ctx) {
		this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	}
	exitInsertInto(ctx) {
		this.popStmt();
	}
}
