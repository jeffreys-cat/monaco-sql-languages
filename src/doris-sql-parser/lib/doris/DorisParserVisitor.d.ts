import { AbstractParseTreeVisitor } from 'antlr4ng';
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DorisParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export declare class DorisParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DorisParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.multiStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiStatements?: (ctx: MultiStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `statementBaseAlias`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementBaseAlias?: (ctx: StatementBaseAliasContext) => Result;
	/**
	 * Visit a parse tree produced by the `callProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallProcedure?: (ctx: CallProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by the `createProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateProcedure?: (ctx: CreateProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropProcedure?: (ctx: DropProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by the `showProcedureStatus`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowProcedureStatus?: (ctx: ShowProcedureStatusContext) => Result;
	/**
	 * Visit a parse tree produced by the `showCreateProcedure`
	 * labeled alternative in `DorisParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateProcedure?: (ctx: ShowCreateProcedureContext) => Result;
	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `createRowPolicy`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRowPolicy?: (ctx: CreateRowPolicyContext) => Result;
	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterView`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterView?: (ctx: AlterViewContext) => Result;
	/**
	 * Visit a parse tree produced by the `createTableLike`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;
	/**
	 * Visit a parse tree produced by the `insertTable`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertTable?: (ctx: InsertTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `update`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;
	/**
	 * Visit a parse tree produced by the `delete`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;
	/**
	 * Visit a parse tree produced by the `load`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoad?: (ctx: LoadContext) => Result;
	/**
	 * Visit a parse tree produced by the `mysqlLoad`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMysqlLoad?: (ctx: MysqlLoadContext) => Result;
	/**
	 * Visit a parse tree produced by the `export`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExport?: (ctx: ExportContext) => Result;
	/**
	 * Visit a parse tree produced by the `createMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMTMV?: (ctx: CreateMTMVContext) => Result;
	/**
	 * Visit a parse tree produced by the `refreshMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMTMV?: (ctx: RefreshMTMVContext) => Result;
	/**
	 * Visit a parse tree produced by the `alterMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMTMV?: (ctx: AlterMTMVContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMTMV?: (ctx: DropMTMVContext) => Result;
	/**
	 * Visit a parse tree produced by the `pauseMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPauseMTMV?: (ctx: PauseMTMVContext) => Result;
	/**
	 * Visit a parse tree produced by the `resumeMTMV`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResumeMTMV?: (ctx: ResumeMTMVContext) => Result;
	/**
	 * Visit a parse tree produced by the `cancelMTMVTask`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCancelMTMVTask?: (ctx: CancelMTMVTaskContext) => Result;
	/**
	 * Visit a parse tree produced by the `addConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddConstraint?: (ctx: AddConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropConstraint?: (ctx: DropConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `showConstraint`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowConstraint?: (ctx: ShowConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by the `dropCatalogRecycleBin`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropCatalogRecycleBin?: (ctx: DropCatalogRecycleBinContext) => Result;
	/**
	 * Visit a parse tree produced by the `unsupported`
	 * labeled alternative in `DorisParser.statementBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsupported?: (ctx: UnsupportedContext) => Result;
	/**
	 * Visit a parse tree produced by the `setDefaultStorageVault`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetDefaultStorageVault?: (ctx: SetDefaultStorageVaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `setUserProperties`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetUserProperties?: (ctx: SetUserPropertiesContext) => Result;
	/**
	 * Visit a parse tree produced by the `setSystemVariableWithType`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSystemVariableWithType?: (ctx: SetSystemVariableWithTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `setSystemVariableWithoutType`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSystemVariableWithoutType?: (ctx: SetSystemVariableWithoutTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `setCharset`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCharset?: (ctx: SetCharsetContext) => Result;
	/**
	 * Visit a parse tree produced by the `setNames`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetNames?: (ctx: SetNamesContext) => Result;
	/**
	 * Visit a parse tree produced by the `setTransaction`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTransaction?: (ctx: SetTransactionContext) => Result;
	/**
	 * Visit a parse tree produced by the `setCollate`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCollate?: (ctx: SetCollateContext) => Result;
	/**
	 * Visit a parse tree produced by the `setPassword`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetPassword?: (ctx: SetPasswordContext) => Result;
	/**
	 * Visit a parse tree produced by the `setLdapAdminPassword`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetLdapAdminPassword?: (ctx: SetLdapAdminPasswordContext) => Result;
	/**
	 * Visit a parse tree produced by the `useDatabase`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseDatabase?: (ctx: UseDatabaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `useCloudCluster`
	 * labeled alternative in `DorisParser.unsupportedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseCloudCluster?: (ctx: UseCloudClusterContext) => Result;
	/**
	 * Visit a parse tree produced by the `setSystemVariable`
	 * labeled alternative in `DorisParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSystemVariable?: (ctx: SetSystemVariableContext) => Result;
	/**
	 * Visit a parse tree produced by the `setUserVariable`
	 * labeled alternative in `DorisParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetUserVariable?: (ctx: SetUserVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.isolationLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint?: (ctx: ConstraintContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.partitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.partitionTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTable?: (ctx: PartitionTableContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.identityOrFunctionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentityOrFunctionList?: (ctx: IdentityOrFunctionListContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.identityOrFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentityOrFunction?: (ctx: IdentityOrFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.dataDesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataDesc?: (ctx: DataDescContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.buildMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuildMode?: (ctx: BuildModeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.refreshTrigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshTrigger?: (ctx: RefreshTriggerContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.refreshSchedule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshSchedule?: (ctx: RefreshScheduleContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.refreshMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshMethod?: (ctx: RefreshMethodContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.mvPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMvPartition?: (ctx: MvPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.identifierOrStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrStringLiteral?: (ctx: IdentifierOrStringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.identifierOrText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrText?: (ctx: IdentifierOrTextContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.userIdentify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserIdentify?: (ctx: UserIdentifyContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.explain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.planType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlanType?: (ctx: PlanTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.mergeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeType?: (ctx: MergeTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.preFilterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreFilterClause?: (ctx: PreFilterClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.deleteOnClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteOnClause?: (ctx: DeleteOnClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.sequenceColClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceColClause?: (ctx: SequenceColClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.colFromPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColFromPath?: (ctx: ColFromPathContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.colMappingList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColMappingList?: (ctx: ColMappingListContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.mappingExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMappingExpr?: (ctx: MappingExprContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.withRemoteStorageSystem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithRemoteStorageSystem?: (ctx: WithRemoteStorageSystemContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.resourceDesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceDesc?: (ctx: ResourceDescContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.mysqlDataDesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMysqlDataDesc?: (ctx: MysqlDataDescContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.skipLines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkipLines?: (ctx: SkipLinesContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.outFileClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutFileClause?: (ctx: OutFileClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `DorisParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `DorisParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `valuesTable`
	 * labeled alternative in `DorisParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesTable?: (ctx: ValuesTableContext) => Result;
	/**
	 * Visit a parse tree produced by the `regularQuerySpecification`
	 * labeled alternative in `DorisParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.cte`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCte?: (ctx: CteContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.aliasQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasQuery?: (ctx: AliasQueryContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.selectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectClause?: (ctx: SelectClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.selectColumnClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectColumnClause?: (ctx: SelectColumnClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.intoClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntoClause?: (ctx: IntoClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.bulkCollectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBulkCollectClause?: (ctx: BulkCollectClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.tableRow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRow?: (ctx: TableRowContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.relations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelations?: (ctx: RelationsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.joinRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;
	/**
	 * Visit a parse tree produced by the `bracketDistributeType`
	 * labeled alternative in `DorisParser.distributeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketDistributeType?: (ctx: BracketDistributeTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentDistributeType`
	 * labeled alternative in `DorisParser.distributeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentDistributeType?: (ctx: CommentDistributeTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `bracketRelationHint`
	 * labeled alternative in `DorisParser.relationHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketRelationHint?: (ctx: BracketRelationHintContext) => Result;
	/**
	 * Visit a parse tree produced by the `commentRelationHint`
	 * labeled alternative in `DorisParser.relationHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentRelationHint?: (ctx: CommentRelationHintContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.aggClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggClause?: (ctx: AggClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingElement?: (ctx: GroupingElementContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.selectHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectHint?: (ctx: SelectHintContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.hintStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintStatement?: (ctx: HintStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.hintAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintAssignment?: (ctx: HintAssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.updateAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.updateAssignmentSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateAssignmentSeq?: (ctx: UpdateAssignmentSeqContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.lateralView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateralView?: (ctx: LateralViewContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.queryOrganization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.sortClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortClause?: (ctx: SortClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.partitionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionClause?: (ctx: PartitionClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.identifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.optScanParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptScanParams?: (ctx: OptScanParamsContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `aliasedQuery`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedQuery?: (ctx: AliasedQueryContext) => Result;
	/**
	 * Visit a parse tree produced by the `tableValuedFunction`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableValuedFunction?: (ctx: TableValuedFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by the `relationList`
	 * labeled alternative in `DorisParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationList?: (ctx: RelationListContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.materializedViewName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaterializedViewName?: (ctx: MaterializedViewNameContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.propertyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyClause?: (ctx: PropertyClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.propertyItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyItemList?: (ctx: PropertyItemListContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.propertyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyItem?: (ctx: PropertyItemContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.propertyKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyValue?: (ctx: PropertyValueContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.multipartIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.simpleColumnDefs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleColumnDefs?: (ctx: SimpleColumnDefsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.simpleColumnDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleColumnDef?: (ctx: SimpleColumnDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.columnDefs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefs?: (ctx: ColumnDefsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.columnDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDef?: (ctx: ColumnDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.indexDefs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexDefs?: (ctx: IndexDefsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.indexDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexDef?: (ctx: IndexDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.partitionsDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionsDef?: (ctx: PartitionsDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.partitionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDef?: (ctx: PartitionDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.lessThanPartitionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanPartitionDef?: (ctx: LessThanPartitionDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.fixedPartitionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedPartitionDef?: (ctx: FixedPartitionDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.stepPartitionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStepPartitionDef?: (ctx: StepPartitionDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.inPartitionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInPartitionDef?: (ctx: InPartitionDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.constantSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantSeq?: (ctx: ConstantSeqContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.partitionValueDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionValueDef?: (ctx: PartitionValueDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.rollupDefs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupDefs?: (ctx: RollupDefsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.rollupDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupDef?: (ctx: RollupDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.aggTypeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggTypeDef?: (ctx: AggTypeDefContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.tabletList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabletList?: (ctx: TabletListContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.inlineTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.namedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.namedExpressionSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `exist`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExist?: (ctx: ExistContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;
	/**
	 * Visit a parse tree produced by the `isnull`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsnull?: (ctx: IsnullContext) => Result;
	/**
	 * Visit a parse tree produced by the `is_not_null_pred`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIs_not_null_pred?: (ctx: Is_not_null_predContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `doublePipes`
	 * labeled alternative in `DorisParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoublePipes?: (ctx: DoublePipesContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.rowConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.rowConstructorItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructorItem?: (ctx: RowConstructorItemContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;
	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitOperation`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOperation?: (ctx: BitOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `DorisParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.datetimeUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
	/**
	 * Visit a parse tree produced by the `dateCeil`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateCeil?: (ctx: DateCeilContext) => Result;
	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentDate`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentDate?: (ctx: CurrentDateContext) => Result;
	/**
	 * Visit a parse tree produced by the `timestampadd`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampadd?: (ctx: TimestampaddContext) => Result;
	/**
	 * Visit a parse tree produced by the `date_sub`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_sub?: (ctx: Date_subContext) => Result;
	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `userVariable`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserVariable?: (ctx: UserVariableContext) => Result;
	/**
	 * Visit a parse tree produced by the `elementAt`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementAt?: (ctx: ElementAtContext) => Result;
	/**
	 * Visit a parse tree produced by the `localTimestamp`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimestamp?: (ctx: LocalTimestampContext) => Result;
	/**
	 * Visit a parse tree produced by the `charFunction`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharFunction?: (ctx: CharFunctionContext) => Result;
	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayRange`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayRange?: (ctx: ArrayRangeContext) => Result;
	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `star`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar?: (ctx: StarContext) => Result;
	/**
	 * Visit a parse tree produced by the `convertType`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvertType?: (ctx: ConvertTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `timestampdiff`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampdiff?: (ctx: TimestampdiffContext) => Result;
	/**
	 * Visit a parse tree produced by the `convertCharSet`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvertCharSet?: (ctx: ConvertCharSetContext) => Result;
	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `encryptKey`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncryptKey?: (ctx: EncryptKeyContext) => Result;
	/**
	 * Visit a parse tree produced by the `date_add`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_add?: (ctx: Date_addContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentTime`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentTime?: (ctx: CurrentTimeContext) => Result;
	/**
	 * Visit a parse tree produced by the `localTime`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTime?: (ctx: LocalTimeContext) => Result;
	/**
	 * Visit a parse tree produced by the `systemVariable`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystemVariable?: (ctx: SystemVariableContext) => Result;
	/**
	 * Visit a parse tree produced by the `collate`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollate?: (ctx: CollateContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentUser`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentUser?: (ctx: CurrentUserContext) => Result;
	/**
	 * Visit a parse tree produced by the `constantDefault`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;
	/**
	 * Visit a parse tree produced by the `currentTimestamp`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentTimestamp?: (ctx: CurrentTimestampContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `arraySlice`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySlice?: (ctx: ArraySliceContext) => Result;
	/**
	 * Visit a parse tree produced by the `dateFloor`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateFloor?: (ctx: DateFloorContext) => Result;
	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `DorisParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.castDataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastDataType?: (ctx: CastDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.functionCallExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.functionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.functionNameIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionNameIdentifier?: (ctx: FunctionNameIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpec?: (ctx: WindowSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.frameUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameUnits?: (ctx: FrameUnitsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.frameBoundary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBoundary?: (ctx: FrameBoundaryContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.specifiedPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifiedPartition?: (ctx: SpecifiedPartitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `mapLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapLiteral?: (ctx: MapLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `structLiteral`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructLiteral?: (ctx: StructLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `placeholder`
	 * labeled alternative in `DorisParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaceholder?: (ctx: PlaceholderContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.unitIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitIdentifier?: (ctx: UnitIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.dataTypeWithNullable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeWithNullable?: (ctx: DataTypeWithNullableContext) => Result;
	/**
	 * Visit a parse tree produced by the `complexDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexDataType?: (ctx: ComplexDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `aggStateDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggStateDataType?: (ctx: AggStateDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `primitiveDataType`
	 * labeled alternative in `DorisParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.primitiveColType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveColType?: (ctx: PrimitiveColTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.complexColTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.complexColType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.commentSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentSpec?: (ctx: CommentSpecContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.sample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSample?: (ctx: SampleContext) => Result;
	/**
	 * Visit a parse tree produced by the `sampleByPercentile`
	 * labeled alternative in `DorisParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByPercentile?: (ctx: SampleByPercentileContext) => Result;
	/**
	 * Visit a parse tree produced by the `sampleByRows`
	 * labeled alternative in `DorisParser.sampleMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleByRows?: (ctx: SampleByRowsContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.tableSnapshot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSnapshot?: (ctx: TableSnapshotContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `errorIdent`
	 * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorIdent?: (ctx: ErrorIdentContext) => Result;
	/**
	 * Visit a parse tree produced by the `realIdent`
	 * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealIdent?: (ctx: RealIdentContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `DorisParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `DorisParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `DorisParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `DorisParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `DorisParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}
