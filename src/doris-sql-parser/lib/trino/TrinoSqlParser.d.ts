import * as antlr from 'antlr4ng';
import { Token } from 'antlr4ng';
import { TrinoSqlListener } from './TrinoSqlListener.js';
import { TrinoSqlVisitor } from './TrinoSqlVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class TrinoSqlParser extends SQLParserBase {
	static readonly T__0 = 1;
	static readonly T__1 = 2;
	static readonly T__2 = 3;
	static readonly T__3 = 4;
	static readonly T__4 = 5;
	static readonly T__5 = 6;
	static readonly T__6 = 7;
	static readonly T__7 = 8;
	static readonly T__8 = 9;
	static readonly T__9 = 10;
	static readonly T__10 = 11;
	static readonly T__11 = 12;
	static readonly T__12 = 13;
	static readonly T__13 = 14;
	static readonly T__14 = 15;
	static readonly T__15 = 16;
	static readonly KW_ADD = 17;
	static readonly KW_ADMIN = 18;
	static readonly KW_AFTER = 19;
	static readonly KW_ALL = 20;
	static readonly KW_ALTER = 21;
	static readonly KW_ANALYZE = 22;
	static readonly KW_AND = 23;
	static readonly KW_ANY = 24;
	static readonly KW_ARRAY = 25;
	static readonly KW_AS = 26;
	static readonly KW_ASC = 27;
	static readonly KW_AT = 28;
	static readonly KW_AUTHORIZATION = 29;
	static readonly KW_BERNOULLI = 30;
	static readonly KW_BETWEEN = 31;
	static readonly KW_BY = 32;
	static readonly KW_CALL = 33;
	static readonly KW_CASCADE = 34;
	static readonly KW_CASE = 35;
	static readonly KW_CAST = 36;
	static readonly KW_CATALOGS = 37;
	static readonly KW_COLUMN = 38;
	static readonly KW_COLUMNS = 39;
	static readonly KW_COMMENT = 40;
	static readonly KW_COMMIT = 41;
	static readonly KW_COMMITTED = 42;
	static readonly KW_CONSTRAINT = 43;
	static readonly KW_CREATE = 44;
	static readonly KW_CROSS = 45;
	static readonly KW_CUBE = 46;
	static readonly KW_CURRENT = 47;
	static readonly KW_CURRENT_CATALOG = 48;
	static readonly KW_CURRENT_DATE = 49;
	static readonly KW_CURRENT_PATH = 50;
	static readonly KW_CURRENT_ROLE = 51;
	static readonly KW_CURRENT_SCHEMA = 52;
	static readonly KW_CURRENT_TIME = 53;
	static readonly KW_CURRENT_TIMESTAMP = 54;
	static readonly KW_CURRENT_USER = 55;
	static readonly KW_DATA = 56;
	static readonly KW_DATE = 57;
	static readonly KW_DAY = 58;
	static readonly KW_DEFAULT = 59;
	static readonly KW_DEALLOCATE = 60;
	static readonly KW_DEFINER = 61;
	static readonly KW_DELETE = 62;
	static readonly KW_DESC = 63;
	static readonly KW_DESCRIBE = 64;
	static readonly KW_DEFINE = 65;
	static readonly KW_DISTINCT = 66;
	static readonly KW_DISTRIBUTED = 67;
	static readonly KW_DOUBLE = 68;
	static readonly KW_DROP = 69;
	static readonly KW_ELSE = 70;
	static readonly KW_EMPTY = 71;
	static readonly KW_END = 72;
	static readonly KW_ESCAPE = 73;
	static readonly KW_EXCEPT = 74;
	static readonly KW_EXCLUDING = 75;
	static readonly KW_EXECUTE = 76;
	static readonly KW_EXISTS = 77;
	static readonly KW_EXPLAIN = 78;
	static readonly KW_EXTRACT = 79;
	static readonly KW_FALSE = 80;
	static readonly KW_FETCH = 81;
	static readonly KW_FILTER = 82;
	static readonly KW_FINAL = 83;
	static readonly KW_FIRST = 84;
	static readonly KW_FOLLOWING = 85;
	static readonly KW_FOR = 86;
	static readonly KW_FORMAT = 87;
	static readonly KW_FROM = 88;
	static readonly KW_FULL = 89;
	static readonly KW_FUNCTIONS = 90;
	static readonly KW_GRANT = 91;
	static readonly KW_GRANTED = 92;
	static readonly KW_GRANTS = 93;
	static readonly KW_DENY = 94;
	static readonly KW_GRAPHVIZ = 95;
	static readonly KW_GROUP = 96;
	static readonly KW_GROUPING = 97;
	static readonly KW_GROUPS = 98;
	static readonly KW_HAVING = 99;
	static readonly KW_HOUR = 100;
	static readonly KW_IF = 101;
	static readonly KW_IGNORE = 102;
	static readonly KW_IN = 103;
	static readonly KW_INCLUDING = 104;
	static readonly KW_INITIAL = 105;
	static readonly KW_INNER = 106;
	static readonly KW_INPUT = 107;
	static readonly KW_INSERT = 108;
	static readonly KW_INTERSECT = 109;
	static readonly KW_INTERVAL = 110;
	static readonly KW_INTO = 111;
	static readonly KW_INVOKER = 112;
	static readonly KW_IO = 113;
	static readonly KW_IS = 114;
	static readonly KW_ISOLATION = 115;
	static readonly KW_JOIN = 116;
	static readonly KW_JSON = 117;
	static readonly KW_LAST = 118;
	static readonly KW_LATERAL = 119;
	static readonly KW_LEFT = 120;
	static readonly KW_LEVEL = 121;
	static readonly KW_LIKE = 122;
	static readonly KW_LIMIT = 123;
	static readonly KW_LOCAL = 124;
	static readonly KW_LOCALTIME = 125;
	static readonly KW_LOCALTIMESTAMP = 126;
	static readonly KW_LOGICAL = 127;
	static readonly KW_MAP = 128;
	static readonly KW_MATCH = 129;
	static readonly KW_MATCHED = 130;
	static readonly KW_MATCHES = 131;
	static readonly KW_MATCH_RECOGNIZE = 132;
	static readonly KW_MATERIALIZED = 133;
	static readonly KW_MEASURES = 134;
	static readonly KW_MERGE = 135;
	static readonly KW_MINUTE = 136;
	static readonly KW_MONTH = 137;
	static readonly KW_NATURAL = 138;
	static readonly KW_NEXT = 139;
	static readonly KW_NFC = 140;
	static readonly KW_NFD = 141;
	static readonly KW_NFKC = 142;
	static readonly KW_NFKD = 143;
	static readonly KW_NO = 144;
	static readonly KW_NONE = 145;
	static readonly KW_NORMALIZE = 146;
	static readonly KW_NOT = 147;
	static readonly KW_NULL = 148;
	static readonly KW_NULLIF = 149;
	static readonly KW_NULLS = 150;
	static readonly KW_OFFSET = 151;
	static readonly KW_OMIT = 152;
	static readonly KW_ON = 153;
	static readonly KW_ONE = 154;
	static readonly KW_ONLY = 155;
	static readonly KW_OPTION = 156;
	static readonly KW_OR = 157;
	static readonly KW_ORDER = 158;
	static readonly KW_ORDINALITY = 159;
	static readonly KW_OUTER = 160;
	static readonly KW_OUTPUT = 161;
	static readonly KW_OVER = 162;
	static readonly KW_PARTITION = 163;
	static readonly KW_PARTITIONS = 164;
	static readonly KW_PAST = 165;
	static readonly KW_PATH = 166;
	static readonly KW_PATTERN = 167;
	static readonly KW_PER = 168;
	static readonly KW_PERMUTE = 169;
	static readonly KW_POSITION = 170;
	static readonly KW_PRECEDING = 171;
	static readonly KW_PRECISION = 172;
	static readonly KW_PREPARE = 173;
	static readonly KW_PRIVILEGES = 174;
	static readonly KW_PROPERTIES = 175;
	static readonly KW_RANGE = 176;
	static readonly KW_READ = 177;
	static readonly KW_RECURSIVE = 178;
	static readonly KW_REFRESH = 179;
	static readonly KW_RENAME = 180;
	static readonly KW_REPEATABLE = 181;
	static readonly KW_REPLACE = 182;
	static readonly KW_RESET = 183;
	static readonly KW_RESPECT = 184;
	static readonly KW_RESTRICT = 185;
	static readonly KW_REVOKE = 186;
	static readonly KW_RIGHT = 187;
	static readonly KW_ROLE = 188;
	static readonly KW_ROLES = 189;
	static readonly KW_ROLLBACK = 190;
	static readonly KW_ROLLUP = 191;
	static readonly KW_ROW = 192;
	static readonly KW_ROWS = 193;
	static readonly KW_RUNNING = 194;
	static readonly KW_SCHEMA = 195;
	static readonly KW_SCHEMAS = 196;
	static readonly KW_SECOND = 197;
	static readonly KW_SECURITY = 198;
	static readonly KW_SEEK = 199;
	static readonly KW_SELECT = 200;
	static readonly KW_SERIALIZABLE = 201;
	static readonly KW_SESSION = 202;
	static readonly KW_SET = 203;
	static readonly KW_SETS = 204;
	static readonly KW_SHOW = 205;
	static readonly KW_SOME = 206;
	static readonly KW_START = 207;
	static readonly KW_STATS = 208;
	static readonly KW_SUBSET = 209;
	static readonly KW_SUBSTRING = 210;
	static readonly KW_SYSTEM = 211;
	static readonly KW_TABLE = 212;
	static readonly KW_TABLES = 213;
	static readonly KW_TABLESAMPLE = 214;
	static readonly KW_TEXT = 215;
	static readonly KW_THEN = 216;
	static readonly KW_TIES = 217;
	static readonly KW_TIME = 218;
	static readonly KW_TIMESTAMP = 219;
	static readonly KW_TO = 220;
	static readonly KW_TRANSACTION = 221;
	static readonly KW_TRUNCATE = 222;
	static readonly KW_TRUE = 223;
	static readonly KW_TRY_CAST = 224;
	static readonly KW_TYPE = 225;
	static readonly KW_UESCAPE = 226;
	static readonly KW_UNBOUNDED = 227;
	static readonly KW_UNCOMMITTED = 228;
	static readonly KW_UNION = 229;
	static readonly KW_UNMATCHED = 230;
	static readonly KW_UNNEST = 231;
	static readonly KW_UPDATE = 232;
	static readonly KW_USE = 233;
	static readonly KW_USER = 234;
	static readonly KW_USING = 235;
	static readonly KW_VALIDATE = 236;
	static readonly KW_VALUES = 237;
	static readonly KW_VERBOSE = 238;
	static readonly KW_VIEW = 239;
	static readonly KW_WHEN = 240;
	static readonly KW_WHERE = 241;
	static readonly KW_WINDOW = 242;
	static readonly KW_WITH = 243;
	static readonly KW_WITHOUT = 244;
	static readonly KW_WORK = 245;
	static readonly KW_WRITE = 246;
	static readonly KW_YEAR = 247;
	static readonly KW_ZONE = 248;
	static readonly EQ = 249;
	static readonly NEQ = 250;
	static readonly LT = 251;
	static readonly LTE = 252;
	static readonly GT = 253;
	static readonly GTE = 254;
	static readonly PLUS = 255;
	static readonly MINUS = 256;
	static readonly ASTERISK = 257;
	static readonly SLASH = 258;
	static readonly PERCENT = 259;
	static readonly CONCAT = 260;
	static readonly QUESTION_MARK = 261;
	static readonly STRING = 262;
	static readonly UNICODE_STRING = 263;
	static readonly BINARY_LITERAL = 264;
	static readonly INTEGER_VALUE = 265;
	static readonly DECIMAL_VALUE = 266;
	static readonly DOUBLE_VALUE = 267;
	static readonly IDENTIFIER = 268;
	static readonly DIGIT_IDENTIFIER = 269;
	static readonly QUOTED_IDENTIFIER = 270;
	static readonly BACKQUOTED_IDENTIFIER = 271;
	static readonly SEMICOLON = 272;
	static readonly SIMPLE_COMMENT = 273;
	static readonly BRACKETED_COMMENT = 274;
	static readonly WS = 275;
	static readonly UNRECOGNIZED = 276;
	static readonly DELIMITER = 277;
	static readonly RULE_program = 0;
	static readonly RULE_statements = 1;
	static readonly RULE_standaloneClause = 2;
	static readonly RULE_singleStatement = 3;
	static readonly RULE_standaloneExpression = 4;
	static readonly RULE_standalonePathSpecification = 5;
	static readonly RULE_standaloneType = 6;
	static readonly RULE_standaloneRowPattern = 7;
	static readonly RULE_statement = 8;
	static readonly RULE_query = 9;
	static readonly RULE_with = 10;
	static readonly RULE_tableElement = 11;
	static readonly RULE_columnDefinition = 12;
	static readonly RULE_likeClause = 13;
	static readonly RULE_properties = 14;
	static readonly RULE_propertyAssignments = 15;
	static readonly RULE_property = 16;
	static readonly RULE_propertyValue = 17;
	static readonly RULE_queryNoWith = 18;
	static readonly RULE_limitRowCount = 19;
	static readonly RULE_rowCount = 20;
	static readonly RULE_queryTerm = 21;
	static readonly RULE_queryPrimary = 22;
	static readonly RULE_sortItem = 23;
	static readonly RULE_querySpecification = 24;
	static readonly RULE_groupBy = 25;
	static readonly RULE_groupingElement = 26;
	static readonly RULE_groupingSet = 27;
	static readonly RULE_groupingTerm = 28;
	static readonly RULE_windowDefinition = 29;
	static readonly RULE_windowSpecification = 30;
	static readonly RULE_namedQuery = 31;
	static readonly RULE_setQuantifier = 32;
	static readonly RULE_selectItem = 33;
	static readonly RULE_relation = 34;
	static readonly RULE_joinType = 35;
	static readonly RULE_joinCriteria = 36;
	static readonly RULE_sampledRelation = 37;
	static readonly RULE_sampleType = 38;
	static readonly RULE_patternRecognition = 39;
	static readonly RULE_measureDefinition = 40;
	static readonly RULE_rowsPerMatch = 41;
	static readonly RULE_emptyMatchHandling = 42;
	static readonly RULE_skipTo = 43;
	static readonly RULE_subsetDefinition = 44;
	static readonly RULE_variableDefinition = 45;
	static readonly RULE_aliasedRelation = 46;
	static readonly RULE_columnListCreate = 47;
	static readonly RULE_columnList = 48;
	static readonly RULE_columnAliases = 49;
	static readonly RULE_relationPrimary = 50;
	static readonly RULE_expression = 51;
	static readonly RULE_booleanExpression = 52;
	static readonly RULE_predicate = 53;
	static readonly RULE_valueExpression = 54;
	static readonly RULE_primaryExpression = 55;
	static readonly RULE_processingMode = 56;
	static readonly RULE_nullTreatment = 57;
	static readonly RULE_string = 58;
	static readonly RULE_timeZoneSpecifier = 59;
	static readonly RULE_comparisonOperator = 60;
	static readonly RULE_comparisonQuantifier = 61;
	static readonly RULE_booleanValue = 62;
	static readonly RULE_interval = 63;
	static readonly RULE_intervalField = 64;
	static readonly RULE_normalForm = 65;
	static readonly RULE_type = 66;
	static readonly RULE_rowField = 67;
	static readonly RULE_typeParameter = 68;
	static readonly RULE_whenClause = 69;
	static readonly RULE_filter = 70;
	static readonly RULE_mergeCase = 71;
	static readonly RULE_over = 72;
	static readonly RULE_windowFrame = 73;
	static readonly RULE_frameExtent = 74;
	static readonly RULE_frameBound = 75;
	static readonly RULE_rowPattern = 76;
	static readonly RULE_patternPrimary = 77;
	static readonly RULE_patternQuantifier = 78;
	static readonly RULE_updateAssignment = 79;
	static readonly RULE_explainOption = 80;
	static readonly RULE_transactionMode = 81;
	static readonly RULE_levelOfIsolation = 82;
	static readonly RULE_callArgument = 83;
	static readonly RULE_pathElement = 84;
	static readonly RULE_pathSpecification = 85;
	static readonly RULE_privilege = 86;
	static readonly RULE_tableOrViewName = 87;
	static readonly RULE_tableName = 88;
	static readonly RULE_tableNameCreate = 89;
	static readonly RULE_viewName = 90;
	static readonly RULE_viewNameCreate = 91;
	static readonly RULE_tablePath = 92;
	static readonly RULE_viewPath = 93;
	static readonly RULE_schemaName = 94;
	static readonly RULE_schemaNameCreate = 95;
	static readonly RULE_schemaPath = 96;
	static readonly RULE_catalogName = 97;
	static readonly RULE_catalogNameCreate = 98;
	static readonly RULE_functionName = 99;
	static readonly RULE_columnName = 100;
	static readonly RULE_columnNameCreate = 101;
	static readonly RULE_qualifiedName = 102;
	static readonly RULE_grantor = 103;
	static readonly RULE_principal = 104;
	static readonly RULE_roles = 105;
	static readonly RULE_identifier = 106;
	static readonly RULE_number = 107;
	static readonly RULE_nonReserved = 108;
	static readonly literalNames: (string | null)[];
	static readonly symbolicNames: (string | null)[];
	static readonly ruleNames: string[];
	get grammarFileName(): string;
	get literalNames(): (string | null)[];
	get symbolicNames(): (string | null)[];
	get ruleNames(): string[];
	get serializedATN(): number[];
	protected createFailedPredicateException(
		predicate?: string,
		message?: string
	): antlr.FailedPredicateException;
	constructor(input: antlr.TokenStream);
	program(): ProgramContext;
	statements(): StatementsContext;
	standaloneClause(): StandaloneClauseContext;
	singleStatement(): SingleStatementContext;
	standaloneExpression(): StandaloneExpressionContext;
	standalonePathSpecification(): StandalonePathSpecificationContext;
	standaloneType(): StandaloneTypeContext;
	standaloneRowPattern(): StandaloneRowPatternContext;
	statement(): StatementContext;
	query(): QueryContext;
	with_(): WithContext;
	tableElement(): TableElementContext;
	columnDefinition(): ColumnDefinitionContext;
	likeClause(): LikeClauseContext;
	properties(): PropertiesContext;
	propertyAssignments(): PropertyAssignmentsContext;
	property(): PropertyContext;
	propertyValue(): PropertyValueContext;
	queryNoWith(): QueryNoWithContext;
	limitRowCount(): LimitRowCountContext;
	rowCount(): RowCountContext;
	queryTerm(): QueryTermContext;
	queryTerm(_p: number): QueryTermContext;
	queryPrimary(): QueryPrimaryContext;
	sortItem(): SortItemContext;
	querySpecification(): QuerySpecificationContext;
	groupBy(): GroupByContext;
	groupingElement(): GroupingElementContext;
	groupingSet(): GroupingSetContext;
	groupingTerm(): GroupingTermContext;
	windowDefinition(): WindowDefinitionContext;
	windowSpecification(): WindowSpecificationContext;
	namedQuery(): NamedQueryContext;
	setQuantifier(): SetQuantifierContext;
	selectItem(): SelectItemContext;
	relation(): RelationContext;
	relation(_p: number): RelationContext;
	joinType(): JoinTypeContext;
	joinCriteria(): JoinCriteriaContext;
	sampledRelation(): SampledRelationContext;
	sampleType(): SampleTypeContext;
	patternRecognition(): PatternRecognitionContext;
	measureDefinition(): MeasureDefinitionContext;
	rowsPerMatch(): RowsPerMatchContext;
	emptyMatchHandling(): EmptyMatchHandlingContext;
	skipTo(): SkipToContext;
	subsetDefinition(): SubsetDefinitionContext;
	variableDefinition(): VariableDefinitionContext;
	aliasedRelation(): AliasedRelationContext;
	columnListCreate(): ColumnListCreateContext;
	columnList(): ColumnListContext;
	columnAliases(): ColumnAliasesContext;
	relationPrimary(): RelationPrimaryContext;
	expression(): ExpressionContext;
	booleanExpression(): BooleanExpressionContext;
	booleanExpression(_p: number): BooleanExpressionContext;
	predicate(value: antlr.ParserRuleContext): PredicateContext;
	valueExpression(): ValueExpressionContext;
	valueExpression(_p: number): ValueExpressionContext;
	primaryExpression(): PrimaryExpressionContext;
	primaryExpression(_p: number): PrimaryExpressionContext;
	processingMode(): ProcessingModeContext;
	nullTreatment(): NullTreatmentContext;
	string_(): StringContext;
	timeZoneSpecifier(): TimeZoneSpecifierContext;
	comparisonOperator(): ComparisonOperatorContext;
	comparisonQuantifier(): ComparisonQuantifierContext;
	booleanValue(): BooleanValueContext;
	interval(): IntervalContext;
	intervalField(): IntervalFieldContext;
	normalForm(): NormalFormContext;
	type_(): TypeContext;
	type_(_p: number): TypeContext;
	rowField(): RowFieldContext;
	typeParameter(): TypeParameterContext;
	whenClause(): WhenClauseContext;
	filter(): FilterContext;
	mergeCase(): MergeCaseContext;
	over(): OverContext;
	windowFrame(): WindowFrameContext;
	frameExtent(): FrameExtentContext;
	frameBound(): FrameBoundContext;
	rowPattern(): RowPatternContext;
	rowPattern(_p: number): RowPatternContext;
	patternPrimary(): PatternPrimaryContext;
	patternQuantifier(): PatternQuantifierContext;
	updateAssignment(): UpdateAssignmentContext;
	explainOption(): ExplainOptionContext;
	transactionMode(): TransactionModeContext;
	levelOfIsolation(): LevelOfIsolationContext;
	callArgument(): CallArgumentContext;
	pathElement(): PathElementContext;
	pathSpecification(): PathSpecificationContext;
	privilege(): PrivilegeContext;
	tableOrViewName(): TableOrViewNameContext;
	tableName(): TableNameContext;
	tableNameCreate(): TableNameCreateContext;
	viewName(): ViewNameContext;
	viewNameCreate(): ViewNameCreateContext;
	tablePath(): TablePathContext;
	viewPath(): ViewPathContext;
	schemaName(): SchemaNameContext;
	schemaNameCreate(): SchemaNameCreateContext;
	schemaPath(): SchemaPathContext;
	catalogName(): CatalogNameContext;
	catalogNameCreate(): CatalogNameCreateContext;
	functionName(): FunctionNameContext;
	columnName(): ColumnNameContext;
	columnNameCreate(): ColumnNameCreateContext;
	qualifiedName(): QualifiedNameContext;
	grantor(): GrantorContext;
	principal(): PrincipalContext;
	roles(): RolesContext;
	identifier(): IdentifierContext;
	number_(): NumberContext;
	nonReserved(): NonReservedContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
	private queryTerm_sempred;
	private relation_sempred;
	private booleanExpression_sempred;
	private valueExpression_sempred;
	private primaryExpression_sempred;
	private type_sempred;
	private rowPattern_sempred;
	private columnName_sempred;
	static readonly _serializedATN: number[];
	private static __ATN;
	static get _ATN(): antlr.ATN;
	private static readonly vocabulary;
	get vocabulary(): antlr.Vocabulary;
	private static readonly decisionsToDFA;
}
export declare class ProgramContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EOF(): antlr.TerminalNode;
	statements(): StatementsContext[];
	statements(i: number): StatementsContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StatementsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	singleStatement(): SingleStatementContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StandaloneClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	standaloneExpression(): StandaloneExpressionContext | null;
	standalonePathSpecification(): StandalonePathSpecificationContext | null;
	standaloneType(): StandaloneTypeContext | null;
	standaloneRowPattern(): StandaloneRowPatternContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	statement(): StatementContext;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StandaloneExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StandalonePathSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	pathSpecification(): PathSpecificationContext;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StandaloneTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	type(): TypeContext;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StandaloneRowPatternContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rowPattern(): RowPatternContext;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: StatementContext): void;
}
export declare class ExplainContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_EXPLAIN(): antlr.TerminalNode;
	statement(): StatementContext;
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_VERBOSE(): antlr.TerminalNode | null;
	explainOption(): ExplainOptionContext[];
	explainOption(i: number): ExplainOptionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PrepareContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_PREPARE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_FROM(): antlr.TerminalNode;
	statement(): StatementContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DropMaterializedViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	KW_IF(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetMaterializedViewPropertiesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	KW_SET(): antlr.TerminalNode;
	KW_PROPERTIES(): antlr.TerminalNode;
	propertyAssignments(): PropertyAssignmentsContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UseContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_USE(): antlr.TerminalNode;
	schemaName(): SchemaNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DeallocateContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DEALLOCATE(): antlr.TerminalNode;
	KW_PREPARE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RenameTableContext extends StatementContext {
	_from_?: TableNameContext;
	_to?: TableNameCreateContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	tableName(): TableNameContext;
	tableNameCreate(): TableNameCreateContext;
	KW_IF(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CommitContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_COMMIT(): antlr.TerminalNode;
	KW_WORK(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CreateRoleContext extends StatementContext {
	_name?: IdentifierContext;
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_WITH(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	grantor(): GrantorContext | null;
	KW_IN(): antlr.TerminalNode | null;
	catalogName(): CatalogNameContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DropColumnContext extends StatementContext {
	_column?: ColumnNameContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_DROP(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	KW_IF(): antlr.TerminalNode[];
	KW_IF(i: number): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode[];
	KW_EXISTS(i: number): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DropViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	KW_IF(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowTablesContext extends StatementContext {
	_pattern?: StringContext;
	_escape?: StringContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_TABLES(): antlr.TerminalNode;
	schemaName(): SchemaNameContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	string_(): StringContext[];
	string_(i: number): StringContext | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetViewAuthorizationContext extends StatementContext {
	_from_?: ViewNameContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	KW_SET(): antlr.TerminalNode;
	KW_AUTHORIZATION(): antlr.TerminalNode;
	principal(): PrincipalContext;
	viewName(): ViewNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowTableCommentContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowCatalogsContext extends StatementContext {
	_pattern?: StringContext;
	_escape?: StringContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CATALOGS(): antlr.TerminalNode;
	KW_LIKE(): antlr.TerminalNode | null;
	string_(): StringContext[];
	string_(i: number): StringContext | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowRolesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_ROLES(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class MergeContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_MERGE(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_USING(): antlr.TerminalNode;
	relation(): RelationContext;
	KW_ON(): antlr.TerminalNode;
	expression(): ExpressionContext;
	identifier(): IdentifierContext | null;
	mergeCase(): MergeCaseContext[];
	mergeCase(i: number): MergeCaseContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RenameColumnContext extends StatementContext {
	_from_?: ColumnNameContext;
	_to?: ColumnNameCreateContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_RENAME(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	columnNameCreate(): ColumnNameCreateContext;
	KW_IF(): antlr.TerminalNode[];
	KW_IF(i: number): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode[];
	KW_EXISTS(i: number): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CommentColumnContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	KW_IS(): antlr.TerminalNode;
	string(): StringContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RevokeRolesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_REVOKE(): antlr.TerminalNode;
	roles(): RolesContext;
	KW_FROM(): antlr.TerminalNode;
	principal(): PrincipalContext[];
	principal(i: number): PrincipalContext | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_GRANTED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	grantor(): GrantorContext | null;
	KW_IN(): antlr.TerminalNode | null;
	catalogName(): CatalogNameContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowCreateTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowColumnsContext extends StatementContext {
	_pattern?: StringContext;
	_escape?: StringContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	tableOrViewName(): TableOrViewNameContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	string_(): StringContext[];
	string_(i: number): StringContext | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowRoleGrantsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	KW_GRANTS(): antlr.TerminalNode;
	identifier(): IdentifierContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class AddColumnContext extends StatementContext {
	_column?: ColumnDefinitionContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_ADD(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnDefinition(): ColumnDefinitionContext;
	KW_IF(): antlr.TerminalNode[];
	KW_IF(i: number): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode[];
	KW_EXISTS(i: number): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DenyContext extends StatementContext {
	_grantee?: PrincipalContext;
	constructor(ctx: StatementContext);
	KW_DENY(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	principal(): PrincipalContext;
	privilege(): PrivilegeContext[];
	privilege(i: number): PrivilegeContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	schemaName(): SchemaNameContext | null;
	tableName(): TableNameContext | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ResetSessionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_RESET(): antlr.TerminalNode;
	KW_SESSION(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class InsertIntoContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_INSERT(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	tableName(): TableNameContext;
	query(): QueryContext;
	columnList(): ColumnListContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowSessionContext extends StatementContext {
	_pattern?: StringContext;
	_escape?: StringContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_SESSION(): antlr.TerminalNode;
	KW_LIKE(): antlr.TerminalNode | null;
	string_(): StringContext[];
	string_(i: number): StringContext | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CreateSchemaContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	schemaNameCreate(): SchemaNameCreateContext;
	KW_IF(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	principal(): PrincipalContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ExecuteContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_EXECUTE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_USING(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RenameSchemaContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	schemaName(): SchemaNameContext;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	schemaNameCreate(): SchemaNameCreateContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DropRoleContext extends StatementContext {
	_name?: IdentifierContext;
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class AnalyzeContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ANALYZE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_WITH(): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetRoleContext extends StatementContext {
	_role?: IdentifierContext;
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	KW_ALL(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	KW_IN(): antlr.TerminalNode | null;
	catalogName(): CatalogNameContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowGrantsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_GRANTS(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DropSchemaContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	schemaName(): SchemaNameContext;
	KW_IF(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetTableAuthorizationContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_SET(): antlr.TerminalNode;
	KW_AUTHORIZATION(): antlr.TerminalNode;
	principal(): PrincipalContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowCreateViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowColumnCommentContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CreateTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	tableElement(): TableElementContext[];
	tableElement(i: number): TableElementContext | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	string(): StringContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StartTransactionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_START(): antlr.TerminalNode;
	KW_TRANSACTION(): antlr.TerminalNode;
	transactionMode(): TransactionModeContext[];
	transactionMode(i: number): TransactionModeContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CreateTableAsSelectContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	query(): QueryContext | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	columnListCreate(): ColumnListCreateContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	string(): StringContext | null;
	KW_WITH(): antlr.TerminalNode[];
	KW_WITH(i: number): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowStatsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	tableName(): TableNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowCreateSchemaContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	schemaName(): SchemaNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RevokeContext extends StatementContext {
	_grantee?: PrincipalContext;
	constructor(ctx: StatementContext);
	KW_REVOKE(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	principal(): PrincipalContext;
	privilege(): PrivilegeContext[];
	privilege(i: number): PrivilegeContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	schemaName(): SchemaNameContext | null;
	tableName(): TableNameContext | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UpdateContext extends StatementContext {
	_where?: BooleanExpressionContext;
	constructor(ctx: StatementContext);
	KW_UPDATE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_SET(): antlr.TerminalNode;
	updateAssignment(): UpdateAssignmentContext[];
	updateAssignment(i: number): UpdateAssignmentContext | null;
	KW_WHERE(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TableExecuteContext extends StatementContext {
	_procedureName?: IdentifierContext;
	_where?: BooleanExpressionContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_EXECUTE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_WHERE(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	callArgument(): CallArgumentContext[];
	callArgument(i: number): CallArgumentContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DeleteContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DELETE(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_WHERE(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DescribeInputContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DESCRIBE(): antlr.TerminalNode;
	KW_INPUT(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowStatsForQueryContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	query(): QueryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StatementDefaultContext extends StatementContext {
	constructor(ctx: StatementContext);
	query(): QueryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetTimeZoneContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_TIME(): antlr.TerminalNode;
	KW_ZONE(): antlr.TerminalNode;
	KW_LOCAL(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TruncateTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_TRUNCATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CreateMaterializedViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNameCreate(): ViewNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	query(): QueryContext;
	KW_OR(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	string(): StringContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetSessionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_SESSION(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext;
	EQ(): antlr.TerminalNode;
	expression(): ExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CreateViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNameCreate(): ViewNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	query(): QueryContext;
	KW_OR(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	string(): StringContext | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RenameMaterializedViewContext extends StatementContext {
	_from_?: ViewNameContext;
	_to?: ViewNameCreateContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	viewNameCreate(): ViewNameCreateContext;
	KW_IF(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowSchemasContext extends StatementContext {
	_pattern?: StringContext;
	_escape?: StringContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_SCHEMAS(): antlr.TerminalNode;
	catalogName(): CatalogNameContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	string_(): StringContext[];
	string_(i: number): StringContext | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DropTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_IF(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetSchemaAuthorizationContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	schemaName(): SchemaNameContext;
	KW_SET(): antlr.TerminalNode;
	KW_AUTHORIZATION(): antlr.TerminalNode;
	principal(): PrincipalContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RollbackContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ROLLBACK(): antlr.TerminalNode;
	KW_WORK(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CommentTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_IS(): antlr.TerminalNode;
	string(): StringContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RenameViewContext extends StatementContext {
	_from_?: ViewNameContext;
	_to?: ViewNameCreateContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	viewNameCreate(): ViewNameCreateContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetPathContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_PATH(): antlr.TerminalNode;
	pathSpecification(): PathSpecificationContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GrantRolesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_GRANT(): antlr.TerminalNode;
	roles(): RolesContext;
	KW_TO(): antlr.TerminalNode;
	principal(): PrincipalContext[];
	principal(i: number): PrincipalContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_GRANTED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	grantor(): GrantorContext | null;
	KW_IN(): antlr.TerminalNode | null;
	catalogName(): CatalogNameContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CallContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CALL(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	callArgument(): CallArgumentContext[];
	callArgument(i: number): CallArgumentContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RefreshMaterializedViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_REFRESH(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowCreateMaterializedViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ShowFunctionsContext extends StatementContext {
	_pattern?: StringContext;
	_escape?: StringContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_FUNCTIONS(): antlr.TerminalNode;
	KW_LIKE(): antlr.TerminalNode | null;
	string_(): StringContext[];
	string_(i: number): StringContext | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DescribeOutputContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DESCRIBE(): antlr.TerminalNode;
	KW_OUTPUT(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GrantContext extends StatementContext {
	_grantee?: PrincipalContext;
	constructor(ctx: StatementContext);
	KW_GRANT(): antlr.TerminalNode[];
	KW_GRANT(i: number): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	principal(): PrincipalContext;
	privilege(): PrivilegeContext[];
	privilege(i: number): PrivilegeContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	schemaName(): SchemaNameContext | null;
	tableName(): TableNameContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetTablePropertiesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_SET(): antlr.TerminalNode;
	KW_PROPERTIES(): antlr.TerminalNode;
	propertyAssignments(): PropertyAssignmentsContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QueryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryContext): void;
}
export declare class QueryStatementContext extends QueryContext {
	constructor(ctx: QueryContext);
	queryNoWith(): QueryNoWithContext;
	with(): WithContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class WithContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	namedQuery(): NamedQueryContext[];
	namedQuery(i: number): NamedQueryContext | null;
	KW_RECURSIVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TableElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnDefinition(): ColumnDefinitionContext | null;
	likeClause(): LikeClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ColumnDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext;
	type(): TypeContext;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	string(): StringContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LikeClauseContext extends antlr.ParserRuleContext {
	_optionType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_PROPERTIES(): antlr.TerminalNode | null;
	KW_INCLUDING(): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PropertiesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	propertyAssignments(): PropertyAssignmentsContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PropertyAssignmentsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	property(): PropertyContext[];
	property(i: number): PropertyContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PropertyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	EQ(): antlr.TerminalNode;
	propertyValue(): PropertyValueContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PropertyValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PropertyValueContext): void;
}
export declare class DefaultPropertyValueContext extends PropertyValueContext {
	constructor(ctx: PropertyValueContext);
	KW_DEFAULT(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NonDefaultPropertyValueContext extends PropertyValueContext {
	constructor(ctx: PropertyValueContext);
	expression(): ExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QueryNoWithContext extends antlr.ParserRuleContext {
	_offset?: RowCountContext;
	_limit?: LimitRowCountContext;
	_fetchFirst?: RowCountContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryTerm(): QueryTermContext;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	rowCount(): RowCountContext[];
	rowCount(i: number): RowCountContext | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_FETCH(): antlr.TerminalNode | null;
	limitRowCount(): LimitRowCountContext | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode[];
	KW_ROW(i: number): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode[];
	KW_ROWS(i: number): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_TIES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LimitRowCountContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	rowCount(): RowCountContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RowCountContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode | null;
	QUESTION_MARK(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QueryTermContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryTermContext): void;
}
export declare class QueryTermDefaultContext extends QueryTermContext {
	constructor(ctx: QueryTermContext);
	queryPrimary(): QueryPrimaryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetOperationContext extends QueryTermContext {
	_left?: QueryTermContext;
	_operator?: Token | null;
	_right?: QueryTermContext;
	constructor(ctx: QueryTermContext);
	queryTerm(): QueryTermContext[];
	queryTerm(i: number): QueryTermContext | null;
	KW_INTERSECT(): antlr.TerminalNode | null;
	setQuantifier(): SetQuantifierContext | null;
	KW_UNION(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QueryPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryPrimaryContext): void;
}
export declare class SubqueryContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	queryNoWith(): QueryNoWithContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	querySpecification(): QuerySpecificationContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TableContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class InlineTableContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	KW_VALUES(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SortItemContext extends antlr.ParserRuleContext {
	_ordering?: Token | null;
	_nullOrdering?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QuerySpecificationContext extends antlr.ParserRuleContext {
	_where?: BooleanExpressionContext;
	_having?: BooleanExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode;
	selectItem(): SelectItemContext[];
	selectItem(i: number): SelectItemContext | null;
	setQuantifier(): SetQuantifierContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	relation(): RelationContext[];
	relation(i: number): RelationContext | null;
	KW_WHERE(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	groupBy(): GroupByContext | null;
	KW_HAVING(): antlr.TerminalNode | null;
	KW_WINDOW(): antlr.TerminalNode | null;
	windowDefinition(): WindowDefinitionContext[];
	windowDefinition(i: number): WindowDefinitionContext | null;
	booleanExpression(): BooleanExpressionContext[];
	booleanExpression(i: number): BooleanExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GroupByContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	groupingElement(): GroupingElementContext[];
	groupingElement(i: number): GroupingElementContext | null;
	setQuantifier(): SetQuantifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GroupingElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: GroupingElementContext): void;
}
export declare class MultipleGroupingSetsContext extends GroupingElementContext {
	constructor(ctx: GroupingElementContext);
	KW_GROUPING(): antlr.TerminalNode;
	KW_SETS(): antlr.TerminalNode;
	groupingSet(): GroupingSetContext[];
	groupingSet(i: number): GroupingSetContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SingleGroupingSetContext extends GroupingElementContext {
	constructor(ctx: GroupingElementContext);
	groupingSet(): GroupingSetContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CubeContext extends GroupingElementContext {
	constructor(ctx: GroupingElementContext);
	KW_CUBE(): antlr.TerminalNode;
	groupingTerm(): GroupingTermContext[];
	groupingTerm(i: number): GroupingTermContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RollupContext extends GroupingElementContext {
	constructor(ctx: GroupingElementContext);
	KW_ROLLUP(): antlr.TerminalNode;
	groupingTerm(): GroupingTermContext[];
	groupingTerm(i: number): GroupingTermContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GroupingSetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	groupingTerm(): GroupingTermContext[];
	groupingTerm(i: number): GroupingTermContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GroupingTermContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class WindowDefinitionContext extends antlr.ParserRuleContext {
	_name?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	windowSpecification(): WindowSpecificationContext;
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class WindowSpecificationContext extends antlr.ParserRuleContext {
	_existingWindowName?: IdentifierContext;
	_expression?: ExpressionContext;
	_partition: ExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	windowFrame(): WindowFrameContext | null;
	identifier(): IdentifierContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NamedQueryContext extends antlr.ParserRuleContext {
	_name?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	query(): QueryContext;
	identifier(): IdentifierContext;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SetQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SelectItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SelectItemContext): void;
}
export declare class SelectAllContext extends SelectItemContext {
	constructor(ctx: SelectItemContext);
	primaryExpression(): PrimaryExpressionContext | null;
	ASTERISK(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SelectSingleContext extends SelectItemContext {
	constructor(ctx: SelectItemContext);
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	identifier(): IdentifierContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RelationContext): void;
}
export declare class RelationDefaultContext extends RelationContext {
	constructor(ctx: RelationContext);
	sampledRelation(): SampledRelationContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class JoinRelationContext extends RelationContext {
	_left?: RelationContext;
	_right?: SampledRelationContext;
	_rightRelation?: RelationContext;
	constructor(ctx: RelationContext);
	relation(): RelationContext[];
	relation(i: number): RelationContext | null;
	KW_CROSS(): antlr.TerminalNode | null;
	KW_JOIN(): antlr.TerminalNode | null;
	joinType(): JoinTypeContext | null;
	joinCriteria(): JoinCriteriaContext | null;
	KW_NATURAL(): antlr.TerminalNode | null;
	sampledRelation(): SampledRelationContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class JoinTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INNER(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class JoinCriteriaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	KW_USING(): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SampledRelationContext extends antlr.ParserRuleContext {
	_percentage?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	patternRecognition(): PatternRecognitionContext;
	KW_TABLESAMPLE(): antlr.TerminalNode | null;
	sampleType(): SampleTypeContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SampleTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BERNOULLI(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PatternRecognitionContext extends antlr.ParserRuleContext {
	_expression?: ExpressionContext;
	_partition: ExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	aliasedRelation(): AliasedRelationContext;
	KW_MATCH_RECOGNIZE(): antlr.TerminalNode | null;
	KW_PATTERN(): antlr.TerminalNode | null;
	rowPattern(): RowPatternContext | null;
	KW_DEFINE(): antlr.TerminalNode | null;
	variableDefinition(): VariableDefinitionContext[];
	variableDefinition(i: number): VariableDefinitionContext | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	KW_MEASURES(): antlr.TerminalNode | null;
	measureDefinition(): MeasureDefinitionContext[];
	measureDefinition(i: number): MeasureDefinitionContext | null;
	rowsPerMatch(): RowsPerMatchContext | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_MATCH(): antlr.TerminalNode | null;
	skipTo(): SkipToContext | null;
	KW_SUBSET(): antlr.TerminalNode | null;
	subsetDefinition(): SubsetDefinitionContext[];
	subsetDefinition(i: number): SubsetDefinitionContext | null;
	identifier(): IdentifierContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_INITIAL(): antlr.TerminalNode | null;
	KW_SEEK(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class MeasureDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	KW_AS(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RowsPerMatchContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ONE(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_PER(): antlr.TerminalNode;
	KW_MATCH(): antlr.TerminalNode;
	KW_ALL(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	emptyMatchHandling(): EmptyMatchHandlingContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class EmptyMatchHandlingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode | null;
	KW_EMPTY(): antlr.TerminalNode | null;
	KW_MATCHES(): antlr.TerminalNode | null;
	KW_OMIT(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_UNMATCHED(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SkipToContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TO(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_PAST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SubsetDefinitionContext extends antlr.ParserRuleContext {
	_name?: IdentifierContext;
	_identifier?: IdentifierContext;
	_union: IdentifierContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class VariableDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	KW_AS(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class AliasedRelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	relationPrimary(): RelationPrimaryContext;
	identifier(): IdentifierContext | null;
	KW_AS(): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ColumnListCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext[];
	columnNameCreate(i: number): ColumnNameCreateContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ColumnListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ColumnAliasesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RelationPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RelationPrimaryContext): void;
}
export declare class SubqueryRelationContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	query(): QueryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ParenthesizedRelationContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	relation(): RelationContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UnnestContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	KW_UNNEST(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TableOrViewRelationContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	tableOrViewName(): TableOrViewNameContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LateralContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	KW_LATERAL(): antlr.TerminalNode;
	query(): QueryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class BooleanExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: BooleanExpressionContext): void;
}
export declare class LogicalNotContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	KW_NOT(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PredicatedContext extends BooleanExpressionContext {
	_valueExpression?: ValueExpressionContext;
	constructor(ctx: BooleanExpressionContext);
	valueExpression(): ValueExpressionContext;
	predicate(): PredicateContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LogicalBinaryContext extends BooleanExpressionContext {
	_left?: BooleanExpressionContext;
	_operator?: Token | null;
	_right?: BooleanExpressionContext;
	constructor(ctx: BooleanExpressionContext);
	booleanExpression(): BooleanExpressionContext[];
	booleanExpression(i: number): BooleanExpressionContext | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
	value: antlr.ParserRuleContext;
	constructor(
		parent: antlr.ParserRuleContext | null,
		invokingState: number,
		value: antlr.ParserRuleContext
	);
	get ruleIndex(): number;
	copyFrom(ctx: PredicateContext): void;
}
export declare class ComparisonContext extends PredicateContext {
	_right?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	comparisonOperator(): ComparisonOperatorContext;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LikeContext extends PredicateContext {
	_pattern?: ValueExpressionContext;
	_escape?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	KW_LIKE(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class InSubqueryContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	KW_IN(): antlr.TerminalNode;
	query(): QueryContext;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DistinctFromContext extends PredicateContext {
	_right?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	KW_IS(): antlr.TerminalNode;
	KW_DISTINCT(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class InListContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	KW_IN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NullPredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	KW_IS(): antlr.TerminalNode;
	KW_NULL(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class BetweenContext extends PredicateContext {
	_lower?: ValueExpressionContext;
	_upper?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	KW_BETWEEN(): antlr.TerminalNode;
	KW_AND(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QuantifiedComparisonContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	comparisonOperator(): ComparisonOperatorContext;
	comparisonQuantifier(): ComparisonQuantifierContext;
	query(): QueryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ValueExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ValueExpressionContext): void;
}
export declare class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(ctx: ValueExpressionContext);
	primaryExpression(): PrimaryExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ConcatenationContext extends ValueExpressionContext {
	_left?: ValueExpressionContext;
	_right?: ValueExpressionContext;
	constructor(ctx: ValueExpressionContext);
	CONCAT(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ArithmeticBinaryContext extends ValueExpressionContext {
	_left?: ValueExpressionContext;
	_operator?: Token | null;
	_right?: ValueExpressionContext;
	constructor(ctx: ValueExpressionContext);
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	ASTERISK(): antlr.TerminalNode | null;
	SLASH(): antlr.TerminalNode | null;
	PERCENT(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ArithmeticUnaryContext extends ValueExpressionContext {
	_operator?: Token | null;
	constructor(ctx: ValueExpressionContext);
	valueExpression(): ValueExpressionContext;
	MINUS(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class AtTimeZoneContext extends ValueExpressionContext {
	constructor(ctx: ValueExpressionContext);
	valueExpression(): ValueExpressionContext;
	KW_AT(): antlr.TerminalNode;
	timeZoneSpecifier(): TimeZoneSpecifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PrimaryExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PrimaryExpressionContext): void;
}
export declare class DereferenceContext extends PrimaryExpressionContext {
	_base?: PrimaryExpressionContext;
	_fieldName?: IdentifierContext;
	constructor(ctx: PrimaryExpressionContext);
	primaryExpression(): PrimaryExpressionContext;
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TypeConstructorContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext | null;
	string(): StringContext;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_PRECISION(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_precision?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SubstringContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_SUBSTRING(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_FROM(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CastContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_CAST(): antlr.TerminalNode | null;
	expression(): ExpressionContext;
	KW_AS(): antlr.TerminalNode;
	type(): TypeContext;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LambdaContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	expression(): ExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	expression(): ExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ParameterContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	QUESTION_MARK(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NormalizeContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_NORMALIZE(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	normalForm(): NormalFormContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class IntervalLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	interval(): IntervalContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NumericLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	number(): NumberContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	booleanValue(): BooleanValueContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SimpleCaseContext extends PrimaryExpressionContext {
	_operand?: ExpressionContext;
	_elseExpression?: ExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	KW_CASE(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	whenClause(): WhenClauseContext[];
	whenClause(i: number): WhenClauseContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NullLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_NULL(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RowConstructorContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_ROW(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SubscriptContext extends PrimaryExpressionContext {
	_value?: PrimaryExpressionContext;
	_index?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	primaryExpression(): PrimaryExpressionContext;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CurrentPathContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_PATH(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	query(): QueryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class BinaryLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	BINARY_LITERAL(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CurrentUserContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_USER(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class MeasureContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext;
	over(): OverContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ExtractContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_EXTRACT(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_FROM(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	string(): StringContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ArrayConstructorContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_ARRAY(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	functionName(): FunctionNameContext;
	ASTERISK(): antlr.TerminalNode | null;
	filter(): FilterContext | null;
	over(): OverContext | null;
	processingMode(): ProcessingModeContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	setQuantifier(): SetQuantifierContext | null;
	nullTreatment(): NullTreatmentContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CurrentSchemaContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_SCHEMA(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ExistsContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_EXISTS(): antlr.TerminalNode;
	query(): QueryContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PositionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_POSITION(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_IN(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SearchedCaseContext extends PrimaryExpressionContext {
	_elseExpression?: ExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	KW_CASE(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	whenClause(): WhenClauseContext[];
	whenClause(i: number): WhenClauseContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CurrentCatalogContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_CATALOG(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GroupingOperationContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_GROUPING(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext[];
	qualifiedName(i: number): QualifiedNameContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ProcessingModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RUNNING(): antlr.TerminalNode | null;
	KW_FINAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NullTreatmentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode;
	KW_RESPECT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class StringContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: StringContext): void;
}
export declare class UnicodeStringLiteralContext extends StringContext {
	constructor(ctx: StringContext);
	UNICODE_STRING(): antlr.TerminalNode;
	KW_UESCAPE(): antlr.TerminalNode | null;
	STRING(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class BasicStringLiteralContext extends StringContext {
	constructor(ctx: StringContext);
	STRING(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TimeZoneSpecifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: TimeZoneSpecifierContext): void;
}
export declare class TimeZoneIntervalContext extends TimeZoneSpecifierContext {
	constructor(ctx: TimeZoneSpecifierContext);
	KW_TIME(): antlr.TerminalNode;
	KW_ZONE(): antlr.TerminalNode;
	interval(): IntervalContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TimeZoneStringContext extends TimeZoneSpecifierContext {
	constructor(ctx: TimeZoneSpecifierContext);
	KW_TIME(): antlr.TerminalNode;
	KW_ZONE(): antlr.TerminalNode;
	string(): StringContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode | null;
	NEQ(): antlr.TerminalNode | null;
	LT(): antlr.TerminalNode | null;
	LTE(): antlr.TerminalNode | null;
	GT(): antlr.TerminalNode | null;
	GTE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ComparisonQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class BooleanValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class IntervalContext extends antlr.ParserRuleContext {
	_sign?: Token | null;
	_from_?: IntervalFieldContext;
	_to?: IntervalFieldContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INTERVAL(): antlr.TerminalNode;
	string(): StringContext;
	intervalField(): IntervalFieldContext[];
	intervalField(i: number): IntervalFieldContext | null;
	KW_TO(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class IntervalFieldContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_YEAR(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NormalFormContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NFD(): antlr.TerminalNode | null;
	KW_NFC(): antlr.TerminalNode | null;
	KW_NFKD(): antlr.TerminalNode | null;
	KW_NFKC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: TypeContext): void;
}
export declare class RowTypeContext extends TypeContext {
	constructor(ctx: TypeContext);
	KW_ROW(): antlr.TerminalNode;
	rowField(): RowFieldContext[];
	rowField(i: number): RowFieldContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class IntervalTypeContext extends TypeContext {
	_from_?: IntervalFieldContext;
	_to?: IntervalFieldContext;
	constructor(ctx: TypeContext);
	KW_INTERVAL(): antlr.TerminalNode;
	intervalField(): IntervalFieldContext[];
	intervalField(i: number): IntervalFieldContext | null;
	KW_TO(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ArrayTypeContext extends TypeContext {
	constructor(ctx: TypeContext);
	type(): TypeContext;
	KW_ARRAY(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DoublePrecisionTypeContext extends TypeContext {
	constructor(ctx: TypeContext);
	KW_DOUBLE(): antlr.TerminalNode;
	KW_PRECISION(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LegacyArrayTypeContext extends TypeContext {
	constructor(ctx: TypeContext);
	KW_ARRAY(): antlr.TerminalNode;
	LT(): antlr.TerminalNode;
	type(): TypeContext;
	GT(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GenericTypeContext extends TypeContext {
	constructor(ctx: TypeContext);
	identifier(): IdentifierContext;
	typeParameter(): TypeParameterContext[];
	typeParameter(i: number): TypeParameterContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DateTimeTypeContext extends TypeContext {
	_base?: Token | null;
	_precision?: TypeParameterContext;
	constructor(ctx: TypeContext);
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode[];
	KW_TIME(i: number): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	typeParameter(): TypeParameterContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LegacyMapTypeContext extends TypeContext {
	_keyType?: TypeContext;
	_valueType?: TypeContext;
	constructor(ctx: TypeContext);
	KW_MAP(): antlr.TerminalNode;
	LT(): antlr.TerminalNode;
	GT(): antlr.TerminalNode;
	type_(): TypeContext[];
	type_(i: number): TypeContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RowFieldContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	type(): TypeContext;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TypeParameterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode | null;
	type(): TypeContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class WhenClauseContext extends antlr.ParserRuleContext {
	_condition?: ExpressionContext;
	_result?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class FilterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FILTER(): antlr.TerminalNode;
	KW_WHERE(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class MergeCaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: MergeCaseContext): void;
}
export declare class MergeInsertContext extends MergeCaseContext {
	_condition?: ExpressionContext;
	_identifier?: IdentifierContext;
	_targets: IdentifierContext[];
	_expression?: ExpressionContext;
	_values: ExpressionContext[];
	constructor(ctx: MergeCaseContext);
	KW_WHEN(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	KW_INSERT(): antlr.TerminalNode;
	KW_VALUES(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_AND(): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class MergeUpdateContext extends MergeCaseContext {
	_condition?: ExpressionContext;
	_identifier?: IdentifierContext;
	_targets: IdentifierContext[];
	_expression?: ExpressionContext;
	_values: ExpressionContext[];
	constructor(ctx: MergeCaseContext);
	KW_WHEN(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	KW_UPDATE(): antlr.TerminalNode;
	KW_SET(): antlr.TerminalNode;
	EQ(): antlr.TerminalNode[];
	EQ(i: number): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_AND(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class MergeDeleteContext extends MergeCaseContext {
	_condition?: ExpressionContext;
	constructor(ctx: MergeCaseContext);
	KW_WHEN(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	KW_DELETE(): antlr.TerminalNode;
	KW_AND(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class OverContext extends antlr.ParserRuleContext {
	_windowName?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OVER(): antlr.TerminalNode;
	windowSpecification(): WindowSpecificationContext | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class WindowFrameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	frameExtent(): FrameExtentContext;
	KW_MEASURES(): antlr.TerminalNode | null;
	measureDefinition(): MeasureDefinitionContext[];
	measureDefinition(i: number): MeasureDefinitionContext | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_MATCH(): antlr.TerminalNode | null;
	skipTo(): SkipToContext | null;
	KW_PATTERN(): antlr.TerminalNode | null;
	rowPattern(): RowPatternContext | null;
	KW_SUBSET(): antlr.TerminalNode | null;
	subsetDefinition(): SubsetDefinitionContext[];
	subsetDefinition(i: number): SubsetDefinitionContext | null;
	KW_DEFINE(): antlr.TerminalNode | null;
	variableDefinition(): VariableDefinitionContext[];
	variableDefinition(i: number): VariableDefinitionContext | null;
	KW_INITIAL(): antlr.TerminalNode | null;
	KW_SEEK(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class FrameExtentContext extends antlr.ParserRuleContext {
	_frameType?: Token | null;
	_frameStart?: FrameBoundContext;
	_end?: FrameBoundContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RANGE(): antlr.TerminalNode | null;
	frameBound(): FrameBoundContext[];
	frameBound(i: number): FrameBoundContext | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_GROUPS(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class FrameBoundContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: FrameBoundContext): void;
}
export declare class BoundedFrameContext extends FrameBoundContext {
	_boundType?: Token | null;
	constructor(ctx: FrameBoundContext);
	expression(): ExpressionContext;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UnboundedFrameContext extends FrameBoundContext {
	_boundType?: Token | null;
	constructor(ctx: FrameBoundContext);
	KW_UNBOUNDED(): antlr.TerminalNode;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CurrentRowBoundContext extends FrameBoundContext {
	constructor(ctx: FrameBoundContext);
	KW_CURRENT(): antlr.TerminalNode;
	KW_ROW(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RowPatternContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RowPatternContext): void;
}
export declare class QuantifiedPrimaryContext extends RowPatternContext {
	constructor(ctx: RowPatternContext);
	patternPrimary(): PatternPrimaryContext;
	patternQuantifier(): PatternQuantifierContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PatternConcatenationContext extends RowPatternContext {
	constructor(ctx: RowPatternContext);
	rowPattern(): RowPatternContext[];
	rowPattern(i: number): RowPatternContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PatternAlternationContext extends RowPatternContext {
	constructor(ctx: RowPatternContext);
	rowPattern(): RowPatternContext[];
	rowPattern(i: number): RowPatternContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PatternPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PatternPrimaryContext): void;
}
export declare class PatternPermutationContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext);
	KW_PERMUTE(): antlr.TerminalNode;
	rowPattern(): RowPatternContext[];
	rowPattern(i: number): RowPatternContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PartitionEndAnchorContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext);
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PatternVariableContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext);
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ExcludedPatternContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext);
	rowPattern(): RowPatternContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PartitionStartAnchorContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext);
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class EmptyPatternContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext);
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GroupedPatternContext extends PatternPrimaryContext {
	constructor(ctx: PatternPrimaryContext);
	rowPattern(): RowPatternContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PatternQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PatternQuantifierContext): void;
}
export declare class ZeroOrMoreQuantifierContext extends PatternQuantifierContext {
	_reluctant?: Token | null;
	constructor(ctx: PatternQuantifierContext);
	ASTERISK(): antlr.TerminalNode;
	QUESTION_MARK(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class OneOrMoreQuantifierContext extends PatternQuantifierContext {
	_reluctant?: Token | null;
	constructor(ctx: PatternQuantifierContext);
	PLUS(): antlr.TerminalNode;
	QUESTION_MARK(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ZeroOrOneQuantifierContext extends PatternQuantifierContext {
	_reluctant?: Token | null;
	constructor(ctx: PatternQuantifierContext);
	QUESTION_MARK(): antlr.TerminalNode[];
	QUESTION_MARK(i: number): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RangeQuantifierContext extends PatternQuantifierContext {
	_exactly?: Token | null;
	_reluctant?: Token | null;
	_atLeast?: Token | null;
	_atMost?: Token | null;
	constructor(ctx: PatternQuantifierContext);
	INTEGER_VALUE(): antlr.TerminalNode[];
	INTEGER_VALUE(i: number): antlr.TerminalNode | null;
	QUESTION_MARK(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UpdateAssignmentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	EQ(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ExplainOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ExplainOptionContext): void;
}
export declare class ExplainFormatContext extends ExplainOptionContext {
	_value?: Token | null;
	constructor(ctx: ExplainOptionContext);
	KW_FORMAT(): antlr.TerminalNode;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_GRAPHVIZ(): antlr.TerminalNode | null;
	KW_JSON(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ExplainTypeContext extends ExplainOptionContext {
	_value?: Token | null;
	constructor(ctx: ExplainOptionContext);
	KW_TYPE(): antlr.TerminalNode;
	KW_LOGICAL(): antlr.TerminalNode | null;
	KW_DISTRIBUTED(): antlr.TerminalNode | null;
	KW_VALIDATE(): antlr.TerminalNode | null;
	KW_IO(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TransactionModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: TransactionModeContext): void;
}
export declare class TransactionAccessModeContext extends TransactionModeContext {
	_accessMode?: Token | null;
	constructor(ctx: TransactionModeContext);
	KW_READ(): antlr.TerminalNode;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class IsolationLevelContext extends TransactionModeContext {
	constructor(ctx: TransactionModeContext);
	KW_ISOLATION(): antlr.TerminalNode;
	KW_LEVEL(): antlr.TerminalNode;
	levelOfIsolation(): LevelOfIsolationContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class LevelOfIsolationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: LevelOfIsolationContext): void;
}
export declare class ReadUncommittedContext extends LevelOfIsolationContext {
	constructor(ctx: LevelOfIsolationContext);
	KW_READ(): antlr.TerminalNode;
	KW_UNCOMMITTED(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SerializableContext extends LevelOfIsolationContext {
	constructor(ctx: LevelOfIsolationContext);
	KW_SERIALIZABLE(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ReadCommittedContext extends LevelOfIsolationContext {
	constructor(ctx: LevelOfIsolationContext);
	KW_READ(): antlr.TerminalNode;
	KW_COMMITTED(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RepeatableReadContext extends LevelOfIsolationContext {
	constructor(ctx: LevelOfIsolationContext);
	KW_REPEATABLE(): antlr.TerminalNode;
	KW_READ(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CallArgumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CallArgumentContext): void;
}
export declare class PositionalArgumentContext extends CallArgumentContext {
	constructor(ctx: CallArgumentContext);
	expression(): ExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NamedArgumentContext extends CallArgumentContext {
	constructor(ctx: CallArgumentContext);
	identifier(): IdentifierContext;
	expression(): ExpressionContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PathElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PathElementContext): void;
}
export declare class QualifiedArgumentContext extends PathElementContext {
	constructor(ctx: PathElementContext);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UnqualifiedArgumentContext extends PathElementContext {
	constructor(ctx: PathElementContext);
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PathSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	pathElement(): PathElementContext[];
	pathElement(i: number): PathElementContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PrivilegeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TableOrViewNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext | null;
	viewName(): ViewNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TableNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablePath(): TablePathContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TableNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablePath(): TablePathContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ViewNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	viewPath(): ViewPathContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ViewNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	viewPath(): ViewPathContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class TablePathContext extends antlr.ParserRuleContext {
	_table?: IdentifierContext;
	_schema?: IdentifierContext;
	_catalog?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ViewPathContext extends antlr.ParserRuleContext {
	_view?: IdentifierContext;
	_schema?: IdentifierContext;
	_catalog?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SchemaNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	schemaPath(): SchemaPathContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SchemaNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	schemaPath(): SchemaPathContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SchemaPathContext extends antlr.ParserRuleContext {
	_schema?: IdentifierContext;
	_catalog?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CatalogNameContext extends antlr.ParserRuleContext {
	_catalog?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CatalogNameCreateContext extends antlr.ParserRuleContext {
	_catalog?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class FunctionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class ColumnNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QualifiedNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class GrantorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: GrantorContext): void;
}
export declare class CurrentUserGrantorContext extends GrantorContext {
	constructor(ctx: GrantorContext);
	KW_CURRENT_USER(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class SpecifiedPrincipalContext extends GrantorContext {
	constructor(ctx: GrantorContext);
	principal(): PrincipalContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class CurrentRoleGrantorContext extends GrantorContext {
	constructor(ctx: GrantorContext);
	KW_CURRENT_ROLE(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class PrincipalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PrincipalContext): void;
}
export declare class UnspecifiedPrincipalContext extends PrincipalContext {
	constructor(ctx: PrincipalContext);
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UserPrincipalContext extends PrincipalContext {
	constructor(ctx: PrincipalContext);
	KW_USER(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RolePrincipalContext extends PrincipalContext {
	constructor(ctx: PrincipalContext);
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class RolesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: IdentifierContext): void;
}
export declare class BackQuotedIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	BACKQUOTED_IDENTIFIER(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class QuotedIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	QUOTED_IDENTIFIER(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DigitIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	DIGIT_IDENTIFIER(): antlr.TerminalNode;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class UnquotedIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	IDENTIFIER(): antlr.TerminalNode | null;
	nonReserved(): NonReservedContext | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NumberContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: NumberContext): void;
}
export declare class DecimalLiteralContext extends NumberContext {
	constructor(ctx: NumberContext);
	DECIMAL_VALUE(): antlr.TerminalNode;
	MINUS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class DoubleLiteralContext extends NumberContext {
	constructor(ctx: NumberContext);
	DOUBLE_VALUE(): antlr.TerminalNode;
	MINUS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class IntegerLiteralContext extends NumberContext {
	constructor(ctx: NumberContext);
	INTEGER_VALUE(): antlr.TerminalNode;
	MINUS(): antlr.TerminalNode | null;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
export declare class NonReservedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_AT(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	KW_BERNOULLI(): antlr.TerminalNode | null;
	KW_CALL(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_CATALOGS(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_COMMITTED(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DEFINE(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DISTRIBUTED(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_EMPTY(): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode | null;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_FETCH(): antlr.TerminalNode | null;
	KW_FILTER(): antlr.TerminalNode | null;
	KW_FINAL(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_GRANTED(): antlr.TerminalNode | null;
	KW_GRANTS(): antlr.TerminalNode | null;
	KW_DENY(): antlr.TerminalNode | null;
	KW_GRAPHVIZ(): antlr.TerminalNode | null;
	KW_GROUPS(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_INCLUDING(): antlr.TerminalNode | null;
	KW_INITIAL(): antlr.TerminalNode | null;
	KW_INPUT(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	KW_IO(): antlr.TerminalNode | null;
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_JSON(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_LOGICAL(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_MATCH(): antlr.TerminalNode | null;
	KW_MATCHED(): antlr.TerminalNode | null;
	KW_MATCHES(): antlr.TerminalNode | null;
	KW_MATCH_RECOGNIZE(): antlr.TerminalNode | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_MEASURES(): antlr.TerminalNode | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_NFC(): antlr.TerminalNode | null;
	KW_NFD(): antlr.TerminalNode | null;
	KW_NFKC(): antlr.TerminalNode | null;
	KW_NFKD(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	KW_NULLIF(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	KW_OMIT(): antlr.TerminalNode | null;
	KW_ONE(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	KW_OUTPUT(): antlr.TerminalNode | null;
	KW_OVER(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_PAST(): antlr.TerminalNode | null;
	KW_PATH(): antlr.TerminalNode | null;
	KW_PATTERN(): antlr.TerminalNode | null;
	KW_PER(): antlr.TerminalNode | null;
	KW_PERMUTE(): antlr.TerminalNode | null;
	KW_POSITION(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_PRECISION(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	KW_PROPERTIES(): antlr.TerminalNode | null;
	KW_RANGE(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_REFRESH(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_RESPECT(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_REVOKE(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_ROLES(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_RUNNING(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_SEEK(): antlr.TerminalNode | null;
	KW_SERIALIZABLE(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_START(): antlr.TerminalNode | null;
	KW_STATS(): antlr.TerminalNode | null;
	KW_SUBSET(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_TABLESAMPLE(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_TIES(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_UNCOMMITTED(): antlr.TerminalNode | null;
	KW_UNMATCHED(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_USE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_VALIDATE(): antlr.TerminalNode | null;
	KW_VERBOSE(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_WINDOW(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_WORK(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: TrinoSqlListener): void;
	exitRule(listener: TrinoSqlListener): void;
	accept<Result>(visitor: TrinoSqlVisitor<Result>): Result | null;
}
