import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from 'antlr4ng';
import { ProgramContext } from './DorisParser.js';
import { MultiStatementsContext } from './DorisParser.js';
import { SingleStatementContext } from './DorisParser.js';
import { StatementBaseAliasContext } from './DorisParser.js';
import { CallProcedureContext } from './DorisParser.js';
import { CreateProcedureContext } from './DorisParser.js';
import { DropProcedureContext } from './DorisParser.js';
import { ShowProcedureStatusContext } from './DorisParser.js';
import { ShowCreateProcedureContext } from './DorisParser.js';
import { StatementDefaultContext } from './DorisParser.js';
import { CreateRowPolicyContext } from './DorisParser.js';
import { CreateTableContext } from './DorisParser.js';
import { CreateViewContext } from './DorisParser.js';
import { AlterViewContext } from './DorisParser.js';
import { CreateTableLikeContext } from './DorisParser.js';
import { InsertTableContext } from './DorisParser.js';
import { UpdateContext } from './DorisParser.js';
import { DeleteContext } from './DorisParser.js';
import { LoadContext } from './DorisParser.js';
import { MysqlLoadContext } from './DorisParser.js';
import { ExportContext } from './DorisParser.js';
import { CreateMTMVContext } from './DorisParser.js';
import { RefreshMTMVContext } from './DorisParser.js';
import { AlterMTMVContext } from './DorisParser.js';
import { DropMTMVContext } from './DorisParser.js';
import { PauseMTMVContext } from './DorisParser.js';
import { ResumeMTMVContext } from './DorisParser.js';
import { CancelMTMVTaskContext } from './DorisParser.js';
import { AddConstraintContext } from './DorisParser.js';
import { DropConstraintContext } from './DorisParser.js';
import { ShowConstraintContext } from './DorisParser.js';
import { DropCatalogRecycleBinContext } from './DorisParser.js';
import { UnsupportedContext } from './DorisParser.js';
import { SetDefaultStorageVaultContext } from './DorisParser.js';
import { SetUserPropertiesContext } from './DorisParser.js';
import { SetSystemVariableWithTypeContext } from './DorisParser.js';
import { SetSystemVariableWithoutTypeContext } from './DorisParser.js';
import { SetCharsetContext } from './DorisParser.js';
import { SetNamesContext } from './DorisParser.js';
import { SetTransactionContext } from './DorisParser.js';
import { SetCollateContext } from './DorisParser.js';
import { SetPasswordContext } from './DorisParser.js';
import { SetLdapAdminPasswordContext } from './DorisParser.js';
import { UseDatabaseContext } from './DorisParser.js';
import { UseCloudClusterContext } from './DorisParser.js';
import { SetSystemVariableContext } from './DorisParser.js';
import { SetUserVariableContext } from './DorisParser.js';
import { TransactionAccessModeContext } from './DorisParser.js';
import { IsolationLevelContext } from './DorisParser.js';
import { ConstraintContext } from './DorisParser.js';
import { PartitionSpecContext } from './DorisParser.js';
import { PartitionTableContext } from './DorisParser.js';
import { IdentityOrFunctionListContext } from './DorisParser.js';
import { IdentityOrFunctionContext } from './DorisParser.js';
import { DataDescContext } from './DorisParser.js';
import { BuildModeContext } from './DorisParser.js';
import { RefreshTriggerContext } from './DorisParser.js';
import { RefreshScheduleContext } from './DorisParser.js';
import { RefreshMethodContext } from './DorisParser.js';
import { MvPartitionContext } from './DorisParser.js';
import { IdentifierOrStringLiteralContext } from './DorisParser.js';
import { IdentifierOrTextContext } from './DorisParser.js';
import { UserIdentifyContext } from './DorisParser.js';
import { ExplainContext } from './DorisParser.js';
import { PlanTypeContext } from './DorisParser.js';
import { MergeTypeContext } from './DorisParser.js';
import { PreFilterClauseContext } from './DorisParser.js';
import { DeleteOnClauseContext } from './DorisParser.js';
import { SequenceColClauseContext } from './DorisParser.js';
import { ColFromPathContext } from './DorisParser.js';
import { ColMappingListContext } from './DorisParser.js';
import { MappingExprContext } from './DorisParser.js';
import { WithRemoteStorageSystemContext } from './DorisParser.js';
import { ResourceDescContext } from './DorisParser.js';
import { MysqlDataDescContext } from './DorisParser.js';
import { SkipLinesContext } from './DorisParser.js';
import { OutFileClauseContext } from './DorisParser.js';
import { QueryContext } from './DorisParser.js';
import { QueryTermDefaultContext } from './DorisParser.js';
import { SetOperationContext } from './DorisParser.js';
import { SetQuantifierContext } from './DorisParser.js';
import { QueryPrimaryDefaultContext } from './DorisParser.js';
import { SubqueryContext } from './DorisParser.js';
import { ValuesTableContext } from './DorisParser.js';
import { RegularQuerySpecificationContext } from './DorisParser.js';
import { CteContext } from './DorisParser.js';
import { AliasQueryContext } from './DorisParser.js';
import { ColumnAliasesContext } from './DorisParser.js';
import { SelectClauseContext } from './DorisParser.js';
import { SelectColumnClauseContext } from './DorisParser.js';
import { WhereClauseContext } from './DorisParser.js';
import { FromClauseContext } from './DorisParser.js';
import { IntoClauseContext } from './DorisParser.js';
import { BulkCollectClauseContext } from './DorisParser.js';
import { TableRowContext } from './DorisParser.js';
import { RelationsContext } from './DorisParser.js';
import { RelationContext } from './DorisParser.js';
import { JoinRelationContext } from './DorisParser.js';
import { BracketDistributeTypeContext } from './DorisParser.js';
import { CommentDistributeTypeContext } from './DorisParser.js';
import { BracketRelationHintContext } from './DorisParser.js';
import { CommentRelationHintContext } from './DorisParser.js';
import { AggClauseContext } from './DorisParser.js';
import { GroupingElementContext } from './DorisParser.js';
import { GroupingSetContext } from './DorisParser.js';
import { HavingClauseContext } from './DorisParser.js';
import { SelectHintContext } from './DorisParser.js';
import { HintStatementContext } from './DorisParser.js';
import { HintAssignmentContext } from './DorisParser.js';
import { UpdateAssignmentContext } from './DorisParser.js';
import { UpdateAssignmentSeqContext } from './DorisParser.js';
import { LateralViewContext } from './DorisParser.js';
import { QueryOrganizationContext } from './DorisParser.js';
import { SortClauseContext } from './DorisParser.js';
import { SortItemContext } from './DorisParser.js';
import { LimitClauseContext } from './DorisParser.js';
import { PartitionClauseContext } from './DorisParser.js';
import { JoinTypeContext } from './DorisParser.js';
import { JoinCriteriaContext } from './DorisParser.js';
import { IdentifierListContext } from './DorisParser.js';
import { IdentifierSeqContext } from './DorisParser.js';
import { OptScanParamsContext } from './DorisParser.js';
import { TableNameContext } from './DorisParser.js';
import { AliasedQueryContext } from './DorisParser.js';
import { TableValuedFunctionContext } from './DorisParser.js';
import { RelationListContext } from './DorisParser.js';
import { MaterializedViewNameContext } from './DorisParser.js';
import { PropertyClauseContext } from './DorisParser.js';
import { PropertyItemListContext } from './DorisParser.js';
import { PropertyItemContext } from './DorisParser.js';
import { PropertyKeyContext } from './DorisParser.js';
import { PropertyValueContext } from './DorisParser.js';
import { TableAliasContext } from './DorisParser.js';
import { MultipartIdentifierContext } from './DorisParser.js';
import { SimpleColumnDefsContext } from './DorisParser.js';
import { SimpleColumnDefContext } from './DorisParser.js';
import { ColumnDefsContext } from './DorisParser.js';
import { ColumnDefContext } from './DorisParser.js';
import { IndexDefsContext } from './DorisParser.js';
import { IndexDefContext } from './DorisParser.js';
import { PartitionsDefContext } from './DorisParser.js';
import { PartitionDefContext } from './DorisParser.js';
import { LessThanPartitionDefContext } from './DorisParser.js';
import { FixedPartitionDefContext } from './DorisParser.js';
import { StepPartitionDefContext } from './DorisParser.js';
import { InPartitionDefContext } from './DorisParser.js';
import { ConstantSeqContext } from './DorisParser.js';
import { PartitionValueDefContext } from './DorisParser.js';
import { RollupDefsContext } from './DorisParser.js';
import { RollupDefContext } from './DorisParser.js';
import { AggTypeDefContext } from './DorisParser.js';
import { TabletListContext } from './DorisParser.js';
import { InlineTableContext } from './DorisParser.js';
import { NamedExpressionContext } from './DorisParser.js';
import { NamedExpressionSeqContext } from './DorisParser.js';
import { ExpressionContext } from './DorisParser.js';
import { LambdaExpressionContext } from './DorisParser.js';
import { ExistContext } from './DorisParser.js';
import { LogicalNotContext } from './DorisParser.js';
import { PredicatedContext } from './DorisParser.js';
import { IsnullContext } from './DorisParser.js';
import { Is_not_null_predContext } from './DorisParser.js';
import { LogicalBinaryContext } from './DorisParser.js';
import { DoublePipesContext } from './DorisParser.js';
import { RowConstructorContext } from './DorisParser.js';
import { RowConstructorItemContext } from './DorisParser.js';
import { PredicateContext } from './DorisParser.js';
import { ValueExpressionDefaultContext } from './DorisParser.js';
import { ComparisonContext } from './DorisParser.js';
import { BitOperationContext } from './DorisParser.js';
import { ArithmeticBinaryContext } from './DorisParser.js';
import { ArithmeticUnaryContext } from './DorisParser.js';
import { DatetimeUnitContext } from './DorisParser.js';
import { DateCeilContext } from './DorisParser.js';
import { DereferenceContext } from './DorisParser.js';
import { CurrentDateContext } from './DorisParser.js';
import { TimestampaddContext } from './DorisParser.js';
import { Date_subContext } from './DorisParser.js';
import { CastContext } from './DorisParser.js';
import { ParenthesizedExpressionContext } from './DorisParser.js';
import { UserVariableContext } from './DorisParser.js';
import { ElementAtContext } from './DorisParser.js';
import { LocalTimestampContext } from './DorisParser.js';
import { CharFunctionContext } from './DorisParser.js';
import { IntervalLiteralContext } from './DorisParser.js';
import { ArrayRangeContext } from './DorisParser.js';
import { SimpleCaseContext } from './DorisParser.js';
import { ColumnReferenceContext } from './DorisParser.js';
import { StarContext } from './DorisParser.js';
import { ConvertTypeContext } from './DorisParser.js';
import { TimestampdiffContext } from './DorisParser.js';
import { ConvertCharSetContext } from './DorisParser.js';
import { SubqueryExpressionContext } from './DorisParser.js';
import { EncryptKeyContext } from './DorisParser.js';
import { Date_addContext } from './DorisParser.js';
import { CurrentTimeContext } from './DorisParser.js';
import { LocalTimeContext } from './DorisParser.js';
import { SystemVariableContext } from './DorisParser.js';
import { CollateContext } from './DorisParser.js';
import { CurrentUserContext } from './DorisParser.js';
import { ConstantDefaultContext } from './DorisParser.js';
import { ExtractContext } from './DorisParser.js';
import { CurrentTimestampContext } from './DorisParser.js';
import { FunctionCallContext } from './DorisParser.js';
import { ArraySliceContext } from './DorisParser.js';
import { DateFloorContext } from './DorisParser.js';
import { SearchedCaseContext } from './DorisParser.js';
import { CastDataTypeContext } from './DorisParser.js';
import { FunctionCallExpressionContext } from './DorisParser.js';
import { FunctionIdentifierContext } from './DorisParser.js';
import { FunctionNameIdentifierContext } from './DorisParser.js';
import { WindowSpecContext } from './DorisParser.js';
import { WindowFrameContext } from './DorisParser.js';
import { FrameUnitsContext } from './DorisParser.js';
import { FrameBoundaryContext } from './DorisParser.js';
import { QualifiedNameContext } from './DorisParser.js';
import { SpecifiedPartitionContext } from './DorisParser.js';
import { NullLiteralContext } from './DorisParser.js';
import { TypeConstructorContext } from './DorisParser.js';
import { NumericLiteralContext } from './DorisParser.js';
import { BooleanLiteralContext } from './DorisParser.js';
import { StringLiteralContext } from './DorisParser.js';
import { ArrayLiteralContext } from './DorisParser.js';
import { MapLiteralContext } from './DorisParser.js';
import { StructLiteralContext } from './DorisParser.js';
import { PlaceholderContext } from './DorisParser.js';
import { ComparisonOperatorContext } from './DorisParser.js';
import { BooleanValueContext } from './DorisParser.js';
import { WhenClauseContext } from './DorisParser.js';
import { IntervalContext } from './DorisParser.js';
import { UnitIdentifierContext } from './DorisParser.js';
import { DataTypeWithNullableContext } from './DorisParser.js';
import { ComplexDataTypeContext } from './DorisParser.js';
import { AggStateDataTypeContext } from './DorisParser.js';
import { PrimitiveDataTypeContext } from './DorisParser.js';
import { PrimitiveColTypeContext } from './DorisParser.js';
import { ComplexColTypeListContext } from './DorisParser.js';
import { ComplexColTypeContext } from './DorisParser.js';
import { CommentSpecContext } from './DorisParser.js';
import { SampleContext } from './DorisParser.js';
import { SampleByPercentileContext } from './DorisParser.js';
import { SampleByRowsContext } from './DorisParser.js';
import { TableSnapshotContext } from './DorisParser.js';
import { ErrorCapturingIdentifierContext } from './DorisParser.js';
import { ErrorIdentContext } from './DorisParser.js';
import { RealIdentContext } from './DorisParser.js';
import { IdentifierContext } from './DorisParser.js';
import { UnquotedIdentifierContext } from './DorisParser.js';
import { QuotedIdentifierAlternativeContext } from './DorisParser.js';
import { QuotedIdentifierContext } from './DorisParser.js';
import { IntegerLiteralContext } from './DorisParser.js';
import { DecimalLiteralContext } from './DorisParser.js';
import { NonReservedContext } from './DorisParser.js';
/**
 * This interface defines a complete listener for a parse tree produced by
 * `DorisParser`.
 */
export declare class DorisParserListener implements ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DorisParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.multiStatements`.
	 * @param ctx the parse tree
	 */
	enterMultiStatements?: (ctx: MultiStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.multiStatements`.
	 * @param ctx the parse tree
	 */
	exitMultiStatements?: (ctx: MultiStatementsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.singleStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleStatement?: (ctx: SingleStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `statementBaseAlias`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementBaseAlias?: (ctx: StatementBaseAliasContext) => void;
	/**
	 * Exit a parse tree produced by the `statementBaseAlias`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementBaseAlias?: (ctx: StatementBaseAliasContext) => void;
	/**
	 * Enter a parse tree produced by the `callProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCallProcedure?: (ctx: CallProcedureContext) => void;
	/**
	 * Exit a parse tree produced by the `callProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCallProcedure?: (ctx: CallProcedureContext) => void;
	/**
	 * Enter a parse tree produced by the `createProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCreateProcedure?: (ctx: CreateProcedureContext) => void;
	/**
	 * Exit a parse tree produced by the `createProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCreateProcedure?: (ctx: CreateProcedureContext) => void;
	/**
	 * Enter a parse tree produced by the `dropProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDropProcedure?: (ctx: DropProcedureContext) => void;
	/**
	 * Exit a parse tree produced by the `dropProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDropProcedure?: (ctx: DropProcedureContext) => void;
	/**
	 * Enter a parse tree produced by the `showProcedureStatus`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowProcedureStatus?: (ctx: ShowProcedureStatusContext) => void;
	/**
	 * Exit a parse tree produced by the `showProcedureStatus`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowProcedureStatus?: (ctx: ShowProcedureStatusContext) => void;
	/**
	 * Enter a parse tree produced by the `showCreateProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	enterShowCreateProcedure?: (ctx: ShowCreateProcedureContext) => void;
	/**
	 * Exit a parse tree produced by the `showCreateProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 */
	exitShowCreateProcedure?: (ctx: ShowCreateProcedureContext) => void;
	/**
	 * Enter a parse tree produced by the `statementDefault`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterStatementDefault?: (ctx: StatementDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `statementDefault`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitStatementDefault?: (ctx: StatementDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `createRowPolicy`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterCreateRowPolicy?: (ctx: CreateRowPolicyContext) => void;
	/**
	 * Exit a parse tree produced by the `createRowPolicy`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitCreateRowPolicy?: (ctx: CreateRowPolicyContext) => void;
	/**
	 * Enter a parse tree produced by the `createTable`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by the `createTable`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Enter a parse tree produced by the `createView`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by the `createView`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Enter a parse tree produced by the `alterView`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterAlterView?: (ctx: AlterViewContext) => void;
	/**
	 * Exit a parse tree produced by the `alterView`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitAlterView?: (ctx: AlterViewContext) => void;
	/**
	 * Enter a parse tree produced by the `createTableLike`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
	/**
	 * Exit a parse tree produced by the `createTableLike`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;
	/**
	 * Enter a parse tree produced by the `insertTable`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterInsertTable?: (ctx: InsertTableContext) => void;
	/**
	 * Exit a parse tree produced by the `insertTable`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitInsertTable?: (ctx: InsertTableContext) => void;
	/**
	 * Enter a parse tree produced by the `update`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Exit a parse tree produced by the `update`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Enter a parse tree produced by the `delete`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterDelete?: (ctx: DeleteContext) => void;
	/**
	 * Exit a parse tree produced by the `delete`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitDelete?: (ctx: DeleteContext) => void;
	/**
	 * Enter a parse tree produced by the `load`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterLoad?: (ctx: LoadContext) => void;
	/**
	 * Exit a parse tree produced by the `load`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitLoad?: (ctx: LoadContext) => void;
	/**
	 * Enter a parse tree produced by the `mysqlLoad`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterMysqlLoad?: (ctx: MysqlLoadContext) => void;
	/**
	 * Exit a parse tree produced by the `mysqlLoad`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitMysqlLoad?: (ctx: MysqlLoadContext) => void;
	/**
	 * Enter a parse tree produced by the `export`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterExport?: (ctx: ExportContext) => void;
	/**
	 * Exit a parse tree produced by the `export`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitExport?: (ctx: ExportContext) => void;
	/**
	 * Enter a parse tree produced by the `createMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterCreateMTMV?: (ctx: CreateMTMVContext) => void;
	/**
	 * Exit a parse tree produced by the `createMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitCreateMTMV?: (ctx: CreateMTMVContext) => void;
	/**
	 * Enter a parse tree produced by the `refreshMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterRefreshMTMV?: (ctx: RefreshMTMVContext) => void;
	/**
	 * Exit a parse tree produced by the `refreshMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitRefreshMTMV?: (ctx: RefreshMTMVContext) => void;
	/**
	 * Enter a parse tree produced by the `alterMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterAlterMTMV?: (ctx: AlterMTMVContext) => void;
	/**
	 * Exit a parse tree produced by the `alterMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitAlterMTMV?: (ctx: AlterMTMVContext) => void;
	/**
	 * Enter a parse tree produced by the `dropMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterDropMTMV?: (ctx: DropMTMVContext) => void;
	/**
	 * Exit a parse tree produced by the `dropMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitDropMTMV?: (ctx: DropMTMVContext) => void;
	/**
	 * Enter a parse tree produced by the `pauseMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterPauseMTMV?: (ctx: PauseMTMVContext) => void;
	/**
	 * Exit a parse tree produced by the `pauseMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitPauseMTMV?: (ctx: PauseMTMVContext) => void;
	/**
	 * Enter a parse tree produced by the `resumeMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterResumeMTMV?: (ctx: ResumeMTMVContext) => void;
	/**
	 * Exit a parse tree produced by the `resumeMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitResumeMTMV?: (ctx: ResumeMTMVContext) => void;
	/**
	 * Enter a parse tree produced by the `cancelMTMVTask`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterCancelMTMVTask?: (ctx: CancelMTMVTaskContext) => void;
	/**
	 * Exit a parse tree produced by the `cancelMTMVTask`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitCancelMTMVTask?: (ctx: CancelMTMVTaskContext) => void;
	/**
	 * Enter a parse tree produced by the `addConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterAddConstraint?: (ctx: AddConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `addConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitAddConstraint?: (ctx: AddConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `dropConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterDropConstraint?: (ctx: DropConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `dropConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitDropConstraint?: (ctx: DropConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `showConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterShowConstraint?: (ctx: ShowConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `showConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitShowConstraint?: (ctx: ShowConstraintContext) => void;
	/**
	 * Enter a parse tree produced by the `dropCatalogRecycleBin`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterDropCatalogRecycleBin?: (ctx: DropCatalogRecycleBinContext) => void;
	/**
	 * Exit a parse tree produced by the `dropCatalogRecycleBin`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitDropCatalogRecycleBin?: (ctx: DropCatalogRecycleBinContext) => void;
	/**
	 * Enter a parse tree produced by the `unsupported`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	enterUnsupported?: (ctx: UnsupportedContext) => void;
	/**
	 * Exit a parse tree produced by the `unsupported`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 */
	exitUnsupported?: (ctx: UnsupportedContext) => void;
	/**
	 * Enter a parse tree produced by the `setDefaultStorageVault`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetDefaultStorageVault?: (ctx: SetDefaultStorageVaultContext) => void;
	/**
	 * Exit a parse tree produced by the `setDefaultStorageVault`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetDefaultStorageVault?: (ctx: SetDefaultStorageVaultContext) => void;
	/**
	 * Enter a parse tree produced by the `setUserProperties`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetUserProperties?: (ctx: SetUserPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by the `setUserProperties`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetUserProperties?: (ctx: SetUserPropertiesContext) => void;
	/**
	 * Enter a parse tree produced by the `setSystemVariableWithType`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetSystemVariableWithType?: (ctx: SetSystemVariableWithTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `setSystemVariableWithType`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetSystemVariableWithType?: (ctx: SetSystemVariableWithTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `setSystemVariableWithoutType`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetSystemVariableWithoutType?: (ctx: SetSystemVariableWithoutTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `setSystemVariableWithoutType`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetSystemVariableWithoutType?: (ctx: SetSystemVariableWithoutTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `setCharset`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetCharset?: (ctx: SetCharsetContext) => void;
	/**
	 * Exit a parse tree produced by the `setCharset`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetCharset?: (ctx: SetCharsetContext) => void;
	/**
	 * Enter a parse tree produced by the `setNames`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetNames?: (ctx: SetNamesContext) => void;
	/**
	 * Exit a parse tree produced by the `setNames`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetNames?: (ctx: SetNamesContext) => void;
	/**
	 * Enter a parse tree produced by the `setTransaction`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetTransaction?: (ctx: SetTransactionContext) => void;
	/**
	 * Exit a parse tree produced by the `setTransaction`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetTransaction?: (ctx: SetTransactionContext) => void;
	/**
	 * Enter a parse tree produced by the `setCollate`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetCollate?: (ctx: SetCollateContext) => void;
	/**
	 * Exit a parse tree produced by the `setCollate`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetCollate?: (ctx: SetCollateContext) => void;
	/**
	 * Enter a parse tree produced by the `setPassword`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetPassword?: (ctx: SetPasswordContext) => void;
	/**
	 * Exit a parse tree produced by the `setPassword`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetPassword?: (ctx: SetPasswordContext) => void;
	/**
	 * Enter a parse tree produced by the `setLdapAdminPassword`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterSetLdapAdminPassword?: (ctx: SetLdapAdminPasswordContext) => void;
	/**
	 * Exit a parse tree produced by the `setLdapAdminPassword`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitSetLdapAdminPassword?: (ctx: SetLdapAdminPasswordContext) => void;
	/**
	 * Enter a parse tree produced by the `useDatabase`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterUseDatabase?: (ctx: UseDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by the `useDatabase`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitUseDatabase?: (ctx: UseDatabaseContext) => void;
	/**
	 * Enter a parse tree produced by the `useCloudCluster`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	enterUseCloudCluster?: (ctx: UseCloudClusterContext) => void;
	/**
	 * Exit a parse tree produced by the `useCloudCluster`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 */
	exitUseCloudCluster?: (ctx: UseCloudClusterContext) => void;
	/**
	 * Enter a parse tree produced by the `setSystemVariable`
	 * labeled alternative in `DorisParser.variable`.
	 * @param ctx the parse tree
	 */
	enterSetSystemVariable?: (ctx: SetSystemVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `setSystemVariable`
	 * labeled alternative in `DorisParser.variable`.
	 * @param ctx the parse tree
	 */
	exitSetSystemVariable?: (ctx: SetSystemVariableContext) => void;
	/**
	 * Enter a parse tree produced by the `setUserVariable`
	 * labeled alternative in `DorisParser.variable`.
	 * @param ctx the parse tree
	 */
	enterSetUserVariable?: (ctx: SetUserVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `setUserVariable`
	 * labeled alternative in `DorisParser.variable`.
	 * @param ctx the parse tree
	 */
	exitSetUserVariable?: (ctx: SetUserVariableContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.isolationLevel`.
	 * @param ctx the parse tree
	 */
	enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.isolationLevel`.
	 * @param ctx the parse tree
	 */
	exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.constraint`.
	 * @param ctx the parse tree
	 */
	enterConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.constraint`.
	 * @param ctx the parse tree
	 */
	exitConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.partitionTable`.
	 * @param ctx the parse tree
	 */
	enterPartitionTable?: (ctx: PartitionTableContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.partitionTable`.
	 * @param ctx the parse tree
	 */
	exitPartitionTable?: (ctx: PartitionTableContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.identityOrFunctionList`.
	 * @param ctx the parse tree
	 */
	enterIdentityOrFunctionList?: (ctx: IdentityOrFunctionListContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.identityOrFunctionList`.
	 * @param ctx the parse tree
	 */
	exitIdentityOrFunctionList?: (ctx: IdentityOrFunctionListContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.identityOrFunction`.
	 * @param ctx the parse tree
	 */
	enterIdentityOrFunction?: (ctx: IdentityOrFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.identityOrFunction`.
	 * @param ctx the parse tree
	 */
	exitIdentityOrFunction?: (ctx: IdentityOrFunctionContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.dataDesc`.
	 * @param ctx the parse tree
	 */
	enterDataDesc?: (ctx: DataDescContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.dataDesc`.
	 * @param ctx the parse tree
	 */
	exitDataDesc?: (ctx: DataDescContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.buildMode`.
	 * @param ctx the parse tree
	 */
	enterBuildMode?: (ctx: BuildModeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.buildMode`.
	 * @param ctx the parse tree
	 */
	exitBuildMode?: (ctx: BuildModeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.refreshTrigger`.
	 * @param ctx the parse tree
	 */
	enterRefreshTrigger?: (ctx: RefreshTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.refreshTrigger`.
	 * @param ctx the parse tree
	 */
	exitRefreshTrigger?: (ctx: RefreshTriggerContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.refreshSchedule`.
	 * @param ctx the parse tree
	 */
	enterRefreshSchedule?: (ctx: RefreshScheduleContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.refreshSchedule`.
	 * @param ctx the parse tree
	 */
	exitRefreshSchedule?: (ctx: RefreshScheduleContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.refreshMethod`.
	 * @param ctx the parse tree
	 */
	enterRefreshMethod?: (ctx: RefreshMethodContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.refreshMethod`.
	 * @param ctx the parse tree
	 */
	exitRefreshMethod?: (ctx: RefreshMethodContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.mvPartition`.
	 * @param ctx the parse tree
	 */
	enterMvPartition?: (ctx: MvPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.mvPartition`.
	 * @param ctx the parse tree
	 */
	exitMvPartition?: (ctx: MvPartitionContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.identifierOrStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrStringLiteral?: (ctx: IdentifierOrStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.identifierOrStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrStringLiteral?: (ctx: IdentifierOrStringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.identifierOrText`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrText?: (ctx: IdentifierOrTextContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.identifierOrText`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrText?: (ctx: IdentifierOrTextContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.userIdentify`.
	 * @param ctx the parse tree
	 */
	enterUserIdentify?: (ctx: UserIdentifyContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.userIdentify`.
	 * @param ctx the parse tree
	 */
	exitUserIdentify?: (ctx: UserIdentifyContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.explain`.
	 * @param ctx the parse tree
	 */
	enterExplain?: (ctx: ExplainContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.explain`.
	 * @param ctx the parse tree
	 */
	exitExplain?: (ctx: ExplainContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.planType`.
	 * @param ctx the parse tree
	 */
	enterPlanType?: (ctx: PlanTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.planType`.
	 * @param ctx the parse tree
	 */
	exitPlanType?: (ctx: PlanTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.mergeType`.
	 * @param ctx the parse tree
	 */
	enterMergeType?: (ctx: MergeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.mergeType`.
	 * @param ctx the parse tree
	 */
	exitMergeType?: (ctx: MergeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.preFilterClause`.
	 * @param ctx the parse tree
	 */
	enterPreFilterClause?: (ctx: PreFilterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.preFilterClause`.
	 * @param ctx the parse tree
	 */
	exitPreFilterClause?: (ctx: PreFilterClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.deleteOnClause`.
	 * @param ctx the parse tree
	 */
	enterDeleteOnClause?: (ctx: DeleteOnClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.deleteOnClause`.
	 * @param ctx the parse tree
	 */
	exitDeleteOnClause?: (ctx: DeleteOnClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.sequenceColClause`.
	 * @param ctx the parse tree
	 */
	enterSequenceColClause?: (ctx: SequenceColClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.sequenceColClause`.
	 * @param ctx the parse tree
	 */
	exitSequenceColClause?: (ctx: SequenceColClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.colFromPath`.
	 * @param ctx the parse tree
	 */
	enterColFromPath?: (ctx: ColFromPathContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.colFromPath`.
	 * @param ctx the parse tree
	 */
	exitColFromPath?: (ctx: ColFromPathContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.colMappingList`.
	 * @param ctx the parse tree
	 */
	enterColMappingList?: (ctx: ColMappingListContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.colMappingList`.
	 * @param ctx the parse tree
	 */
	exitColMappingList?: (ctx: ColMappingListContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.mappingExpr`.
	 * @param ctx the parse tree
	 */
	enterMappingExpr?: (ctx: MappingExprContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.mappingExpr`.
	 * @param ctx the parse tree
	 */
	exitMappingExpr?: (ctx: MappingExprContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.withRemoteStorageSystem`.
	 * @param ctx the parse tree
	 */
	enterWithRemoteStorageSystem?: (ctx: WithRemoteStorageSystemContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.withRemoteStorageSystem`.
	 * @param ctx the parse tree
	 */
	exitWithRemoteStorageSystem?: (ctx: WithRemoteStorageSystemContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.resourceDesc`.
	 * @param ctx the parse tree
	 */
	enterResourceDesc?: (ctx: ResourceDescContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.resourceDesc`.
	 * @param ctx the parse tree
	 */
	exitResourceDesc?: (ctx: ResourceDescContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.mysqlDataDesc`.
	 * @param ctx the parse tree
	 */
	enterMysqlDataDesc?: (ctx: MysqlDataDescContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.mysqlDataDesc`.
	 * @param ctx the parse tree
	 */
	exitMysqlDataDesc?: (ctx: MysqlDataDescContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.skipLines`.
	 * @param ctx the parse tree
	 */
	enterSkipLines?: (ctx: SkipLinesContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.skipLines`.
	 * @param ctx the parse tree
	 */
	exitSkipLines?: (ctx: SkipLinesContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.outFileClause`.
	 * @param ctx the parse tree
	 */
	enterOutFileClause?: (ctx: OutFileClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.outFileClause`.
	 * @param ctx the parse tree
	 */
	exitOutFileClause?: (ctx: OutFileClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;
	/**
	 * Enter a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `DorisParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `DorisParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `setOperation`
	 * labeled alternative in `DorisParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	enterSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `setOperation`
	 * labeled alternative in `DorisParser.queryTerm`.
	 * @param ctx the parse tree
	 */
	exitSetOperation?: (ctx: SetOperationContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Enter a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `subquery`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by the `subquery`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Enter a parse tree produced by the `valuesTable`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	enterValuesTable?: (ctx: ValuesTableContext) => void;
	/**
	 * Exit a parse tree produced by the `valuesTable`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 */
	exitValuesTable?: (ctx: ValuesTableContext) => void;
	/**
	 * Enter a parse tree produced by the `regularQuerySpecification`
	 * labeled alternative in `DorisParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	enterRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by the `regularQuerySpecification`
	 * labeled alternative in `DorisParser.querySpecification`.
	 * @param ctx the parse tree
	 */
	exitRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.cte`.
	 * @param ctx the parse tree
	 */
	enterCte?: (ctx: CteContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.cte`.
	 * @param ctx the parse tree
	 */
	exitCte?: (ctx: CteContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.aliasQuery`.
	 * @param ctx the parse tree
	 */
	enterAliasQuery?: (ctx: AliasQueryContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.aliasQuery`.
	 * @param ctx the parse tree
	 */
	exitAliasQuery?: (ctx: AliasQueryContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.columnAliases`.
	 * @param ctx the parse tree
	 */
	exitColumnAliases?: (ctx: ColumnAliasesContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.selectClause`.
	 * @param ctx the parse tree
	 */
	enterSelectClause?: (ctx: SelectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.selectClause`.
	 * @param ctx the parse tree
	 */
	exitSelectClause?: (ctx: SelectClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.selectColumnClause`.
	 * @param ctx the parse tree
	 */
	enterSelectColumnClause?: (ctx: SelectColumnClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.selectColumnClause`.
	 * @param ctx the parse tree
	 */
	exitSelectColumnClause?: (ctx: SelectColumnClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.intoClause`.
	 * @param ctx the parse tree
	 */
	enterIntoClause?: (ctx: IntoClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.intoClause`.
	 * @param ctx the parse tree
	 */
	exitIntoClause?: (ctx: IntoClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.bulkCollectClause`.
	 * @param ctx the parse tree
	 */
	enterBulkCollectClause?: (ctx: BulkCollectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.bulkCollectClause`.
	 * @param ctx the parse tree
	 */
	exitBulkCollectClause?: (ctx: BulkCollectClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.tableRow`.
	 * @param ctx the parse tree
	 */
	enterTableRow?: (ctx: TableRowContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.tableRow`.
	 * @param ctx the parse tree
	 */
	exitTableRow?: (ctx: TableRowContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.relations`.
	 * @param ctx the parse tree
	 */
	enterRelations?: (ctx: RelationsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.relations`.
	 * @param ctx the parse tree
	 */
	exitRelations?: (ctx: RelationsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.joinRelation`.
	 * @param ctx the parse tree
	 */
	enterJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.joinRelation`.
	 * @param ctx the parse tree
	 */
	exitJoinRelation?: (ctx: JoinRelationContext) => void;
	/**
	 * Enter a parse tree produced by the `bracketDistributeType`
	 * labeled alternative in `DorisParser.distributeType`.
	 * @param ctx the parse tree
	 */
	enterBracketDistributeType?: (ctx: BracketDistributeTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketDistributeType`
	 * labeled alternative in `DorisParser.distributeType`.
	 * @param ctx the parse tree
	 */
	exitBracketDistributeType?: (ctx: BracketDistributeTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `commentDistributeType`
	 * labeled alternative in `DorisParser.distributeType`.
	 * @param ctx the parse tree
	 */
	enterCommentDistributeType?: (ctx: CommentDistributeTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `commentDistributeType`
	 * labeled alternative in `DorisParser.distributeType`.
	 * @param ctx the parse tree
	 */
	exitCommentDistributeType?: (ctx: CommentDistributeTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `bracketRelationHint`
	 * labeled alternative in `DorisParser.relationHint`.
	 * @param ctx the parse tree
	 */
	enterBracketRelationHint?: (ctx: BracketRelationHintContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketRelationHint`
	 * labeled alternative in `DorisParser.relationHint`.
	 * @param ctx the parse tree
	 */
	exitBracketRelationHint?: (ctx: BracketRelationHintContext) => void;
	/**
	 * Enter a parse tree produced by the `commentRelationHint`
	 * labeled alternative in `DorisParser.relationHint`.
	 * @param ctx the parse tree
	 */
	enterCommentRelationHint?: (ctx: CommentRelationHintContext) => void;
	/**
	 * Exit a parse tree produced by the `commentRelationHint`
	 * labeled alternative in `DorisParser.relationHint`.
	 * @param ctx the parse tree
	 */
	exitCommentRelationHint?: (ctx: CommentRelationHintContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.aggClause`.
	 * @param ctx the parse tree
	 */
	enterAggClause?: (ctx: AggClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.aggClause`.
	 * @param ctx the parse tree
	 */
	exitAggClause?: (ctx: AggClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	enterGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.groupingElement`.
	 * @param ctx the parse tree
	 */
	exitGroupingElement?: (ctx: GroupingElementContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	enterGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.groupingSet`.
	 * @param ctx the parse tree
	 */
	exitGroupingSet?: (ctx: GroupingSetContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.selectHint`.
	 * @param ctx the parse tree
	 */
	enterSelectHint?: (ctx: SelectHintContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.selectHint`.
	 * @param ctx the parse tree
	 */
	exitSelectHint?: (ctx: SelectHintContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.hintStatement`.
	 * @param ctx the parse tree
	 */
	enterHintStatement?: (ctx: HintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.hintStatement`.
	 * @param ctx the parse tree
	 */
	exitHintStatement?: (ctx: HintStatementContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.hintAssignment`.
	 * @param ctx the parse tree
	 */
	enterHintAssignment?: (ctx: HintAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.hintAssignment`.
	 * @param ctx the parse tree
	 */
	exitHintAssignment?: (ctx: HintAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.updateAssignment`.
	 * @param ctx the parse tree
	 */
	enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.updateAssignment`.
	 * @param ctx the parse tree
	 */
	exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.updateAssignmentSeq`.
	 * @param ctx the parse tree
	 */
	enterUpdateAssignmentSeq?: (ctx: UpdateAssignmentSeqContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.updateAssignmentSeq`.
	 * @param ctx the parse tree
	 */
	exitUpdateAssignmentSeq?: (ctx: UpdateAssignmentSeqContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.lateralView`.
	 * @param ctx the parse tree
	 */
	enterLateralView?: (ctx: LateralViewContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.lateralView`.
	 * @param ctx the parse tree
	 */
	exitLateralView?: (ctx: LateralViewContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.queryOrganization`.
	 * @param ctx the parse tree
	 */
	enterQueryOrganization?: (ctx: QueryOrganizationContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.queryOrganization`.
	 * @param ctx the parse tree
	 */
	exitQueryOrganization?: (ctx: QueryOrganizationContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.sortClause`.
	 * @param ctx the parse tree
	 */
	enterSortClause?: (ctx: SortClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.sortClause`.
	 * @param ctx the parse tree
	 */
	exitSortClause?: (ctx: SortClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.partitionClause`.
	 * @param ctx the parse tree
	 */
	enterPartitionClause?: (ctx: PartitionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.partitionClause`.
	 * @param ctx the parse tree
	 */
	exitPartitionClause?: (ctx: PartitionClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.joinType`.
	 * @param ctx the parse tree
	 */
	enterJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.joinType`.
	 * @param ctx the parse tree
	 */
	exitJoinType?: (ctx: JoinTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.joinCriteria`.
	 * @param ctx the parse tree
	 */
	exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.optScanParams`.
	 * @param ctx the parse tree
	 */
	enterOptScanParams?: (ctx: OptScanParamsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.optScanParams`.
	 * @param ctx the parse tree
	 */
	exitOptScanParams?: (ctx: OptScanParamsContext) => void;
	/**
	 * Enter a parse tree produced by the `tableName`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by the `tableName`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;
	/**
	 * Enter a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterAliasedQuery?: (ctx: AliasedQueryContext) => void;
	/**
	 * Exit a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitAliasedQuery?: (ctx: AliasedQueryContext) => void;
	/**
	 * Enter a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;
	/**
	 * Enter a parse tree produced by the `relationList`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	enterRelationList?: (ctx: RelationListContext) => void;
	/**
	 * Exit a parse tree produced by the `relationList`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 */
	exitRelationList?: (ctx: RelationListContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.materializedViewName`.
	 * @param ctx the parse tree
	 */
	enterMaterializedViewName?: (ctx: MaterializedViewNameContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.materializedViewName`.
	 * @param ctx the parse tree
	 */
	exitMaterializedViewName?: (ctx: MaterializedViewNameContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.propertyClause`.
	 * @param ctx the parse tree
	 */
	enterPropertyClause?: (ctx: PropertyClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.propertyClause`.
	 * @param ctx the parse tree
	 */
	exitPropertyClause?: (ctx: PropertyClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.propertyItemList`.
	 * @param ctx the parse tree
	 */
	enterPropertyItemList?: (ctx: PropertyItemListContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.propertyItemList`.
	 * @param ctx the parse tree
	 */
	exitPropertyItemList?: (ctx: PropertyItemListContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.propertyItem`.
	 * @param ctx the parse tree
	 */
	enterPropertyItem?: (ctx: PropertyItemContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.propertyItem`.
	 * @param ctx the parse tree
	 */
	exitPropertyItem?: (ctx: PropertyItemContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.propertyKey`.
	 * @param ctx the parse tree
	 */
	enterPropertyKey?: (ctx: PropertyKeyContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.propertyKey`.
	 * @param ctx the parse tree
	 */
	exitPropertyKey?: (ctx: PropertyKeyContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterPropertyValue?: (ctx: PropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitPropertyValue?: (ctx: PropertyValueContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.multipartIdentifier`.
	 * @param ctx the parse tree
	 */
	enterMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.multipartIdentifier`.
	 * @param ctx the parse tree
	 */
	exitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.simpleColumnDefs`.
	 * @param ctx the parse tree
	 */
	enterSimpleColumnDefs?: (ctx: SimpleColumnDefsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.simpleColumnDefs`.
	 * @param ctx the parse tree
	 */
	exitSimpleColumnDefs?: (ctx: SimpleColumnDefsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.simpleColumnDef`.
	 * @param ctx the parse tree
	 */
	enterSimpleColumnDef?: (ctx: SimpleColumnDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.simpleColumnDef`.
	 * @param ctx the parse tree
	 */
	exitSimpleColumnDef?: (ctx: SimpleColumnDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.columnDefs`.
	 * @param ctx the parse tree
	 */
	enterColumnDefs?: (ctx: ColumnDefsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.columnDefs`.
	 * @param ctx the parse tree
	 */
	exitColumnDefs?: (ctx: ColumnDefsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.columnDef`.
	 * @param ctx the parse tree
	 */
	enterColumnDef?: (ctx: ColumnDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.columnDef`.
	 * @param ctx the parse tree
	 */
	exitColumnDef?: (ctx: ColumnDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.indexDefs`.
	 * @param ctx the parse tree
	 */
	enterIndexDefs?: (ctx: IndexDefsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.indexDefs`.
	 * @param ctx the parse tree
	 */
	exitIndexDefs?: (ctx: IndexDefsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.indexDef`.
	 * @param ctx the parse tree
	 */
	enterIndexDef?: (ctx: IndexDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.indexDef`.
	 * @param ctx the parse tree
	 */
	exitIndexDef?: (ctx: IndexDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.partitionsDef`.
	 * @param ctx the parse tree
	 */
	enterPartitionsDef?: (ctx: PartitionsDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.partitionsDef`.
	 * @param ctx the parse tree
	 */
	exitPartitionsDef?: (ctx: PartitionsDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.partitionDef`.
	 * @param ctx the parse tree
	 */
	enterPartitionDef?: (ctx: PartitionDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.partitionDef`.
	 * @param ctx the parse tree
	 */
	exitPartitionDef?: (ctx: PartitionDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.lessThanPartitionDef`.
	 * @param ctx the parse tree
	 */
	enterLessThanPartitionDef?: (ctx: LessThanPartitionDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.lessThanPartitionDef`.
	 * @param ctx the parse tree
	 */
	exitLessThanPartitionDef?: (ctx: LessThanPartitionDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.fixedPartitionDef`.
	 * @param ctx the parse tree
	 */
	enterFixedPartitionDef?: (ctx: FixedPartitionDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.fixedPartitionDef`.
	 * @param ctx the parse tree
	 */
	exitFixedPartitionDef?: (ctx: FixedPartitionDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.stepPartitionDef`.
	 * @param ctx the parse tree
	 */
	enterStepPartitionDef?: (ctx: StepPartitionDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.stepPartitionDef`.
	 * @param ctx the parse tree
	 */
	exitStepPartitionDef?: (ctx: StepPartitionDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.inPartitionDef`.
	 * @param ctx the parse tree
	 */
	enterInPartitionDef?: (ctx: InPartitionDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.inPartitionDef`.
	 * @param ctx the parse tree
	 */
	exitInPartitionDef?: (ctx: InPartitionDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.constantSeq`.
	 * @param ctx the parse tree
	 */
	enterConstantSeq?: (ctx: ConstantSeqContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.constantSeq`.
	 * @param ctx the parse tree
	 */
	exitConstantSeq?: (ctx: ConstantSeqContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.partitionValueDef`.
	 * @param ctx the parse tree
	 */
	enterPartitionValueDef?: (ctx: PartitionValueDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.partitionValueDef`.
	 * @param ctx the parse tree
	 */
	exitPartitionValueDef?: (ctx: PartitionValueDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.rollupDefs`.
	 * @param ctx the parse tree
	 */
	enterRollupDefs?: (ctx: RollupDefsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.rollupDefs`.
	 * @param ctx the parse tree
	 */
	exitRollupDefs?: (ctx: RollupDefsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.rollupDef`.
	 * @param ctx the parse tree
	 */
	enterRollupDef?: (ctx: RollupDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.rollupDef`.
	 * @param ctx the parse tree
	 */
	exitRollupDef?: (ctx: RollupDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.aggTypeDef`.
	 * @param ctx the parse tree
	 */
	enterAggTypeDef?: (ctx: AggTypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.aggTypeDef`.
	 * @param ctx the parse tree
	 */
	exitAggTypeDef?: (ctx: AggTypeDefContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.tabletList`.
	 * @param ctx the parse tree
	 */
	enterTabletList?: (ctx: TabletListContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.tabletList`.
	 * @param ctx the parse tree
	 */
	exitTabletList?: (ctx: TabletListContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.inlineTable`.
	 * @param ctx the parse tree
	 */
	enterInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.inlineTable`.
	 * @param ctx the parse tree
	 */
	exitInlineTable?: (ctx: InlineTableContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.namedExpression`.
	 * @param ctx the parse tree
	 */
	enterNamedExpression?: (ctx: NamedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.namedExpression`.
	 * @param ctx the parse tree
	 */
	exitNamedExpression?: (ctx: NamedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 */
	enterNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 */
	exitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `exist`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExist?: (ctx: ExistContext) => void;
	/**
	 * Exit a parse tree produced by the `exist`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExist?: (ctx: ExistContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Enter a parse tree produced by the `isnull`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterIsnull?: (ctx: IsnullContext) => void;
	/**
	 * Exit a parse tree produced by the `isnull`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitIsnull?: (ctx: IsnullContext) => void;
	/**
	 * Enter a parse tree produced by the `is_not_null_pred`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterIs_not_null_pred?: (ctx: Is_not_null_predContext) => void;
	/**
	 * Exit a parse tree produced by the `is_not_null_pred`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitIs_not_null_pred?: (ctx: Is_not_null_predContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Enter a parse tree produced by the `doublePipes`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterDoublePipes?: (ctx: DoublePipesContext) => void;
	/**
	 * Exit a parse tree produced by the `doublePipes`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitDoublePipes?: (ctx: DoublePipesContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.rowConstructor`.
	 * @param ctx the parse tree
	 */
	enterRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.rowConstructor`.
	 * @param ctx the parse tree
	 */
	exitRowConstructor?: (ctx: RowConstructorContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.rowConstructorItem`.
	 * @param ctx the parse tree
	 */
	enterRowConstructorItem?: (ctx: RowConstructorItemContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.rowConstructorItem`.
	 * @param ctx the parse tree
	 */
	exitRowConstructorItem?: (ctx: RowConstructorItemContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Enter a parse tree produced by the `bitOperation`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOperation?: (ctx: BitOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `bitOperation`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOperation?: (ctx: BitOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.datetimeUnit`.
	 * @param ctx the parse tree
	 */
	enterDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.datetimeUnit`.
	 * @param ctx the parse tree
	 */
	exitDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
	/**
	 * Enter a parse tree produced by the `dateCeil`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDateCeil?: (ctx: DateCeilContext) => void;
	/**
	 * Exit a parse tree produced by the `dateCeil`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDateCeil?: (ctx: DateCeilContext) => void;
	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Enter a parse tree produced by the `currentDate`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentDate?: (ctx: CurrentDateContext) => void;
	/**
	 * Exit a parse tree produced by the `currentDate`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentDate?: (ctx: CurrentDateContext) => void;
	/**
	 * Enter a parse tree produced by the `timestampadd`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTimestampadd?: (ctx: TimestampaddContext) => void;
	/**
	 * Exit a parse tree produced by the `timestampadd`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTimestampadd?: (ctx: TimestampaddContext) => void;
	/**
	 * Enter a parse tree produced by the `date_sub`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDate_sub?: (ctx: Date_subContext) => void;
	/**
	 * Exit a parse tree produced by the `date_sub`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDate_sub?: (ctx: Date_subContext) => void;
	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `userVariable`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUserVariable?: (ctx: UserVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `userVariable`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUserVariable?: (ctx: UserVariableContext) => void;
	/**
	 * Enter a parse tree produced by the `elementAt`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterElementAt?: (ctx: ElementAtContext) => void;
	/**
	 * Exit a parse tree produced by the `elementAt`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitElementAt?: (ctx: ElementAtContext) => void;
	/**
	 * Enter a parse tree produced by the `localTimestamp`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLocalTimestamp?: (ctx: LocalTimestampContext) => void;
	/**
	 * Exit a parse tree produced by the `localTimestamp`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLocalTimestamp?: (ctx: LocalTimestampContext) => void;
	/**
	 * Enter a parse tree produced by the `charFunction`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCharFunction?: (ctx: CharFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `charFunction`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCharFunction?: (ctx: CharFunctionContext) => void;
	/**
	 * Enter a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `arrayRange`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayRange?: (ctx: ArrayRangeContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayRange`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayRange?: (ctx: ArrayRangeContext) => void;
	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Enter a parse tree produced by the `star`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStar?: (ctx: StarContext) => void;
	/**
	 * Exit a parse tree produced by the `star`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStar?: (ctx: StarContext) => void;
	/**
	 * Enter a parse tree produced by the `convertType`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConvertType?: (ctx: ConvertTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `convertType`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConvertType?: (ctx: ConvertTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `timestampdiff`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTimestampdiff?: (ctx: TimestampdiffContext) => void;
	/**
	 * Exit a parse tree produced by the `timestampdiff`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTimestampdiff?: (ctx: TimestampdiffContext) => void;
	/**
	 * Enter a parse tree produced by the `convertCharSet`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConvertCharSet?: (ctx: ConvertCharSetContext) => void;
	/**
	 * Exit a parse tree produced by the `convertCharSet`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConvertCharSet?: (ctx: ConvertCharSetContext) => void;
	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `encryptKey`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterEncryptKey?: (ctx: EncryptKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `encryptKey`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitEncryptKey?: (ctx: EncryptKeyContext) => void;
	/**
	 * Enter a parse tree produced by the `date_add`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDate_add?: (ctx: Date_addContext) => void;
	/**
	 * Exit a parse tree produced by the `date_add`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDate_add?: (ctx: Date_addContext) => void;
	/**
	 * Enter a parse tree produced by the `currentTime`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentTime?: (ctx: CurrentTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `currentTime`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentTime?: (ctx: CurrentTimeContext) => void;
	/**
	 * Enter a parse tree produced by the `localTime`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLocalTime?: (ctx: LocalTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `localTime`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLocalTime?: (ctx: LocalTimeContext) => void;
	/**
	 * Enter a parse tree produced by the `systemVariable`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSystemVariable?: (ctx: SystemVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `systemVariable`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSystemVariable?: (ctx: SystemVariableContext) => void;
	/**
	 * Enter a parse tree produced by the `collate`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCollate?: (ctx: CollateContext) => void;
	/**
	 * Exit a parse tree produced by the `collate`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCollate?: (ctx: CollateContext) => void;
	/**
	 * Enter a parse tree produced by the `currentUser`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentUser?: (ctx: CurrentUserContext) => void;
	/**
	 * Exit a parse tree produced by the `currentUser`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentUser?: (ctx: CurrentUserContext) => void;
	/**
	 * Enter a parse tree produced by the `constantDefault`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `constantDefault`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantDefault?: (ctx: ConstantDefaultContext) => void;
	/**
	 * Enter a parse tree produced by the `extract`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExtract?: (ctx: ExtractContext) => void;
	/**
	 * Exit a parse tree produced by the `extract`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExtract?: (ctx: ExtractContext) => void;
	/**
	 * Enter a parse tree produced by the `currentTimestamp`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
	/**
	 * Exit a parse tree produced by the `currentTimestamp`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `arraySlice`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArraySlice?: (ctx: ArraySliceContext) => void;
	/**
	 * Exit a parse tree produced by the `arraySlice`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArraySlice?: (ctx: ArraySliceContext) => void;
	/**
	 * Enter a parse tree produced by the `dateFloor`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDateFloor?: (ctx: DateFloorContext) => void;
	/**
	 * Exit a parse tree produced by the `dateFloor`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDateFloor?: (ctx: DateFloorContext) => void;
	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.castDataType`.
	 * @param ctx the parse tree
	 */
	enterCastDataType?: (ctx: CastDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.castDataType`.
	 * @param ctx the parse tree
	 */
	exitCastDataType?: (ctx: CastDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.functionCallExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.functionCallExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.functionNameIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionNameIdentifier?: (ctx: FunctionNameIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.functionNameIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionNameIdentifier?: (ctx: FunctionNameIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowSpec?: (ctx: WindowSpecContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowSpec?: (ctx: WindowSpecContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.frameUnits`.
	 * @param ctx the parse tree
	 */
	enterFrameUnits?: (ctx: FrameUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.frameUnits`.
	 * @param ctx the parse tree
	 */
	exitFrameUnits?: (ctx: FrameUnitsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.frameBoundary`.
	 * @param ctx the parse tree
	 */
	enterFrameBoundary?: (ctx: FrameBoundaryContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.frameBoundary`.
	 * @param ctx the parse tree
	 */
	exitFrameBoundary?: (ctx: FrameBoundaryContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.specifiedPartition`.
	 * @param ctx the parse tree
	 */
	enterSpecifiedPartition?: (ctx: SpecifiedPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.specifiedPartition`.
	 * @param ctx the parse tree
	 */
	exitSpecifiedPartition?: (ctx: SpecifiedPartitionContext) => void;
	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `typeConstructor`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Exit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitTypeConstructor?: (ctx: TypeConstructorContext) => void;
	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `arrayLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `mapLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterMapLiteral?: (ctx: MapLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `mapLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitMapLiteral?: (ctx: MapLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `structLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterStructLiteral?: (ctx: StructLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `structLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitStructLiteral?: (ctx: StructLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `placeholder`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	enterPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Exit a parse tree produced by the `placeholder`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 */
	exitPlaceholder?: (ctx: PlaceholderContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.unitIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnitIdentifier?: (ctx: UnitIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.unitIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnitIdentifier?: (ctx: UnitIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.dataTypeWithNullable`.
	 * @param ctx the parse tree
	 */
	enterDataTypeWithNullable?: (ctx: DataTypeWithNullableContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.dataTypeWithNullable`.
	 * @param ctx the parse tree
	 */
	exitDataTypeWithNullable?: (ctx: DataTypeWithNullableContext) => void;
	/**
	 * Enter a parse tree produced by the `complexDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterComplexDataType?: (ctx: ComplexDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `complexDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitComplexDataType?: (ctx: ComplexDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `aggStateDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterAggStateDataType?: (ctx: AggStateDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `aggStateDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitAggStateDataType?: (ctx: AggStateDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.primitiveColType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveColType?: (ctx: PrimitiveColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.primitiveColType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveColType?: (ctx: PrimitiveColTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.complexColTypeList`.
	 * @param ctx the parse tree
	 */
	enterComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.complexColTypeList`.
	 * @param ctx the parse tree
	 */
	exitComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.complexColType`.
	 * @param ctx the parse tree
	 */
	enterComplexColType?: (ctx: ComplexColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.complexColType`.
	 * @param ctx the parse tree
	 */
	exitComplexColType?: (ctx: ComplexColTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	enterCommentSpec?: (ctx: CommentSpecContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	exitCommentSpec?: (ctx: CommentSpecContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.sample`.
	 * @param ctx the parse tree
	 */
	enterSample?: (ctx: SampleContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.sample`.
	 * @param ctx the parse tree
	 */
	exitSample?: (ctx: SampleContext) => void;
	/**
	 * Enter a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `DorisParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByPercentile?: (ctx: SampleByPercentileContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `DorisParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByPercentile?: (ctx: SampleByPercentileContext) => void;
	/**
	 * Enter a parse tree produced by the `sampleByRows`
	 * labeled alternative in `DorisParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	enterSampleByRows?: (ctx: SampleByRowsContext) => void;
	/**
	 * Exit a parse tree produced by the `sampleByRows`
	 * labeled alternative in `DorisParser.sampleMethod`.
	 * @param ctx the parse tree
	 */
	exitSampleByRows?: (ctx: SampleByRowsContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.tableSnapshot`.
	 * @param ctx the parse tree
	 */
	enterTableSnapshot?: (ctx: TableSnapshotContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.tableSnapshot`.
	 * @param ctx the parse tree
	 */
	exitTableSnapshot?: (ctx: TableSnapshotContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `errorIdent`
	 * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterErrorIdent?: (ctx: ErrorIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `errorIdent`
	 * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitErrorIdent?: (ctx: ErrorIdentContext) => void;
	/**
	 * Enter a parse tree produced by the `realIdent`
	 * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterRealIdent?: (ctx: RealIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `realIdent`
	 * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitRealIdent?: (ctx: RealIdentContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `DorisParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `DorisParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `DorisParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `DorisParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `DorisParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `DorisParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `DorisParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `DorisParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `DorisParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `DorisParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
	visitTerminal(node: TerminalNode): void;
	visitErrorNode(node: ErrorNode): void;
	enterEveryRule(node: ParserRuleContext): void;
	exitEveryRule(node: ParserRuleContext): void;
}
