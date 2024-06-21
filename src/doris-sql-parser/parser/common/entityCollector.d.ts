import { ParserRuleContext } from 'antlr4ng';
import { EntityContextType } from './types';
import { WordPosition, TextPosition } from './textAndWord';
/**
 * TODO: more stmt type should be supported.
 */
export declare enum StmtContextType {
	/** A self-contained and complete statement */
	COMMON_STMT = 'commonStmt',
	CREATE_CATALOG_STMT = 'createCatalogStmt',
	CREATE_DATABASE_STMT = 'createDatabaseStmt',
	CREATE_TABLE_STMT = 'createTableStmt',
	CREATE_VIEW_STMT = 'createViewStmt',
	SELECT_STMT = 'selectStmt',
	INSERT_STMT = 'insertStmt',
	CREATE_FUNCTION_STMT = 'createFunctionStmt'
}
export interface StmtContext {
	readonly stmtContextType: StmtContextType;
	readonly position: TextPosition;
	readonly rootStmt: StmtContext | null;
	readonly parentStmt: StmtContext | null;
	readonly isContainCaret?: boolean;
}
export declare function toStmtContext(
	ctx: ParserRuleContext,
	type: StmtContextType,
	input: string,
	rootStmt: StmtContext | null,
	parentStmt: StmtContext | null,
	isContainCaret?: boolean
): StmtContext | null;
export interface BaseAliasContext {
	readonly isAlias: boolean;
	alias?: string | EntityContext | null;
	origin?: string | EntityContext | StmtContext | null;
}
export interface EntityContext extends BaseAliasContext {
	readonly entityContextType: EntityContextType;
	readonly text: string;
	readonly position: WordPosition;
	readonly belongStmt: StmtContext;
	relatedEntities: EntityContext[] | null;
	columns: EntityContext[] | null;
}
export declare function toEntityContext(
	ctx: ParserRuleContext,
	type: EntityContextType,
	input: string,
	belongStmt: StmtContext,
	alias?: BaseAliasContext
): EntityContext | null;
/**
 * @todo: Handle alias, includes column alias, table alias, query as alias and so on.
 * @todo: [may be need] Combine the entities in each clause.
 */
export declare abstract class EntityCollector {
	constructor(input: string, caretTokenIndex?: number);
	private readonly _input;
	private readonly _caretTokenIndex;
	private readonly _entitiesSet;
	/** Staging statements that have already entered. */
	private readonly _stmtStack;
	/** Staging entities inside a single statement or clause. */
	private readonly _entityStack;
	/**
	 * Always point to the first non-commonStmt at the bottom of the _stmtStack,
	 * unless there are only commonStmts in the _stmtStack.
	 * */
	private _rootStmt;
	visitTerminal(): void;
	visitErrorNode(): void;
	enterEveryRule(): void;
	exitEveryRule(): void;
	getEntities(): EntityContext[];
	enterProgram(): void;
	protected pushStmt(ctx: ParserRuleContext, type: StmtContextType): StmtContext | null;
	protected popStmt(): StmtContext;
	protected pushEntity(
		ctx: ParserRuleContext,
		type: EntityContextType,
		alias?: BaseAliasContext
	): EntityContext | null;
	/**
	 * Combine entities that inside a single statement.
	 * e.g. combine tableName and column if they are inside a same createTableStatement.
	 * Then add combined entities into result.
	 */
	private combineEntitiesAndAdd;
	/**
	 * Combined all entities under a rootStmt.
	 */
	protected combineRootStmtEntities(
		stmtContext: StmtContext,
		entitiesInsideStmt: EntityContext[]
	): EntityContext[];
	protected combineCreateTableOrViewStmtEntities(
		stmtContext: StmtContext,
		entitiesInsideStmt: EntityContext[]
	): EntityContext[];
}
