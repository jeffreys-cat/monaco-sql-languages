import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
export class DorisEntityCollector extends EntityCollector {
	/** ====== Entity Begin */
	exitTableNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
	}
	exitTableName(ctx) {
		this.pushEntity(ctx, EntityContextType.TABLE);
	}
	exitColumnNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
	}
	exitViewNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
	}
	exitViewName(ctx) {
		this.pushEntity(ctx, EntityContextType.VIEW);
	}
	// exitDbSchemaNameCreate(ctx: DbSchemaNameCreateContext) {
	//     this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
	// }
	// exitDbSchemaName(ctx: DbSchemaNameContext) {
	//     this.pushEntity(ctx, EntityContextType.DATABASE);
	// }
	exitFunctionNameCreate(ctx) {
		this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
	}
	/** ==== Statement begin */
	enterStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.COMMON_STMT);
	}
	exitStatement() {
		this.popStmt();
	}
	enterCreateTableStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
	}
	exitCreateTableStatement() {
		this.popStmt();
	}
	enterSelectStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.SELECT_STMT);
	}
	exitSelectStatement(ctx) {
		this.popStmt();
	}
	enterFromSelectStmt(ctx) {
		this.pushStmt(ctx, StmtContextType.SELECT_STMT);
	}
	exitFromSelectStmt(ctx) {
		this.popStmt();
	}
	enterCreateViewStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
	}
	exitCreateViewStatement(ctx) {
		this.popStmt();
	}
	enterCreateMaterializedViewStatement(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
	}
	exitCreateMaterializedViewStatement(ctx) {
		this.popStmt();
	}
	enterInsertStmt(ctx) {
		this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	}
	exitInsertStmt(ctx) {
		this.popStmt();
	}
	// enterFromInsertStmt(ctx: FromInsertStmtContext) {
	//     this.pushStmt(ctx, StmtContextType.INSERT_STMT);
	// }
	// exitFromInsertStmt(ctx: FromInsertStmtContext) {
	//     this.popStmt();
	// }
	// enterCreateDatabaseStatement(ctx: CreateDatabaseStatementContext) {
	//     this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
	// }
	// exitCreateDatabaseStatement(ctx: CreateDatabaseStatementContext) {
	//     this.popStmt();
	// }
	enterFunctionNameCreate(ctx) {
		this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
	}
	exitCreateFunctionStatement(ctx) {
		this.popStmt();
	}
}
