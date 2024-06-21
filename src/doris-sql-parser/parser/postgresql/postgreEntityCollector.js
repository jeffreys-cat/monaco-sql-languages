import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
export class PostgreSqlEntityCollector extends EntityCollector {
	/** ====== Entity Begin */
	exitDatabaseName(ctx) {
		this.pushEntity(ctx, EntityContextType.DATABASE);
	}
	exitDatabaseNameCreate(ctx) {
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
	enterCreateDatabase(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
	}
	exitCreateDatabase(ctx) {
		this.popStmt();
	}
	enterQueryCreateTable(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitQueryCreateTable(ctx) {
		this.popStmt();
	}
	enterColumnCreateTable(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitColumnCreateTable(ctx) {
		this.popStmt();
	}
	enterCreateForeignTable(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateForeignTable(ctx) {
		this.popStmt();
	}
	enterCreatePartitionForeignTable(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreatePartitionForeignTable(ctx) {
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
	enterSelectStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.SELECT_STMT);
	}
	exitSelectStatement(ctx) {
		this.popStmt();
	}
	enterInsertStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	}
	exitInsertStatement(ctx) {
		this.popStmt();
	}
	enterCreatefunctionstmt(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
	}
	exitCreatefunctionstmt(ctx) {
		this.popStmt();
	}
}
