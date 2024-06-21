import * as antlr from 'antlr4ng';
import { Token } from 'antlr4ng';
import { ImpalaSqlParserListener } from './ImpalaSqlParserListener.js';
import { ImpalaSqlParserVisitor } from './ImpalaSqlParserVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class ImpalaSqlParser extends SQLParserBase {
	static readonly KW_ADD = 1;
	static readonly KW_ALL = 2;
	static readonly KW_ANALYTIC = 3;
	static readonly KW_ALTER = 4;
	static readonly KW_AND = 5;
	static readonly KW_ANY = 6;
	static readonly KW_ANTI = 7;
	static readonly KW_ARRAY = 8;
	static readonly KW_AS = 9;
	static readonly KW_ASC = 10;
	static readonly KW_AT = 11;
	static readonly KW_AGGREGATE = 12;
	static readonly KW_AUTHORIZATION = 13;
	static readonly KW_BERNOULLI = 14;
	static readonly KW_BETWEEN = 15;
	static readonly KW_BLOCK_SIZE = 16;
	static readonly KW_PARTITIONED = 17;
	static readonly KW_PREPARE_FN = 18;
	static readonly KW_EXTERNAL = 19;
	static readonly KW_CLOSEFN = 20;
	static readonly KW_SORT = 21;
	static readonly KW_PURGE = 22;
	static readonly KW_STORED = 23;
	static readonly KW_LOCATION = 24;
	static readonly KW_TBLPROPERTIES = 25;
	static readonly KW_BY = 26;
	static readonly KW_CASCADE = 27;
	static readonly KW_CASE = 28;
	static readonly KW_CAST = 29;
	static readonly KW_CACHED = 30;
	static readonly KW_CHANGE = 31;
	static readonly KW_COLUMN = 32;
	static readonly KW_COLUMNS = 33;
	static readonly KW_COMMENT = 34;
	static readonly KW_COMPRESSION = 35;
	static readonly KW_COMPUTE = 36;
	static readonly KW_CREATE = 37;
	static readonly KW_CROSS = 38;
	static readonly KW_CURRENT = 39;
	static readonly KW_CURRENT_DATE = 40;
	static readonly KW_CURRENT_PATH = 41;
	static readonly KW_CURRENT_TIME = 42;
	static readonly KW_CURRENT_TIMESTAMP = 43;
	static readonly KW_CURRENT_USER = 44;
	static readonly KW_DATA = 45;
	static readonly KW_DATABASE = 46;
	static readonly KW_DATABASES = 47;
	static readonly KW_DAY = 48;
	static readonly KW_DAYS = 49;
	static readonly KW_DELETE = 50;
	static readonly KW_DEFAULT = 51;
	static readonly KW_DELIMITED = 52;
	static readonly KW_DISABLE = 53;
	static readonly KW_UPDATE = 54;
	static readonly KW_DESC = 55;
	static readonly KW_DESCRIBE = 56;
	static readonly KW_DISTINCT = 57;
	static readonly KW_DROP = 58;
	static readonly KW_ELSE = 59;
	static readonly KW_ENCODING = 60;
	static readonly KW_END = 61;
	static readonly KW_ESCAPE = 62;
	static readonly KW_ESCAPED = 63;
	static readonly KW_EXCEPT = 64;
	static readonly KW_EXCLUDING = 65;
	static readonly KW_EXISTS = 66;
	static readonly KW_EXPLAIN = 67;
	static readonly KW_EXTRACT = 68;
	static readonly KW_EXTENDED = 69;
	static readonly KW_FALSE = 70;
	static readonly KW_FIELDS = 71;
	static readonly KW_FILEFORMAT = 72;
	static readonly KW_FILES = 73;
	static readonly KW_FILTER = 74;
	static readonly KW_FIRST = 75;
	static readonly KW_FINALIZE_FN = 76;
	static readonly KW_FOLLOWING = 77;
	static readonly KW_FOR = 78;
	static readonly KW_FORMAT = 79;
	static readonly KW_FORMATTED = 80;
	static readonly KW_FOREIGN = 81;
	static readonly KW_FROM = 82;
	static readonly KW_FULL = 83;
	static readonly KW_FUNCTION = 84;
	static readonly KW_FUNCTIONS = 85;
	static readonly KW_GRANT = 86;
	static readonly KW_GROUP = 87;
	static readonly KW_GROUPING = 88;
	static readonly KW_HASH = 89;
	static readonly KW_HAVING = 90;
	static readonly KW_HOUR = 91;
	static readonly KW_HOURS = 92;
	static readonly KW_IF = 93;
	static readonly KW_IN = 94;
	static readonly KW_INCLUDING = 95;
	static readonly KW_INCREMENTAL = 96;
	static readonly KW_INNER = 97;
	static readonly KW_INPATH = 98;
	static readonly KW_INSERT = 99;
	static readonly KW_INTERSECT = 100;
	static readonly KW_INTERVAL = 101;
	static readonly KW_INTERMEDIATE = 102;
	static readonly KW_INTO = 103;
	static readonly KW_INIT_FN = 104;
	static readonly KW_IREGEXP = 105;
	static readonly KW_ILIKE = 106;
	static readonly KW_INVALIDATE = 107;
	static readonly KW_IS = 108;
	static readonly KW_JOIN = 109;
	static readonly KW_KEY = 110;
	static readonly KW_KUDU = 111;
	static readonly KW_LAST = 112;
	static readonly KW_LATERAL = 113;
	static readonly KW_LEFT = 114;
	static readonly KW_LIKE = 115;
	static readonly KW_LIMIT = 116;
	static readonly KW_LINES = 117;
	static readonly KW_LOAD = 118;
	static readonly KW_LOCALTIME = 119;
	static readonly KW_LOCALTIMESTAMP = 120;
	static readonly KW_METADATA = 121;
	static readonly KW_MINUTE = 122;
	static readonly KW_MINUTES = 123;
	static readonly KW_MONTH = 124;
	static readonly KW_MONTHS = 125;
	static readonly KW_MERGE_FN = 126;
	static readonly KW_NFC = 127;
	static readonly KW_NFD = 128;
	static readonly KW_NFKC = 129;
	static readonly KW_NFKD = 130;
	static readonly KW_NORMALIZE = 131;
	static readonly KW_NOT = 132;
	static readonly KW_NULL = 133;
	static readonly KW_NULLS = 134;
	static readonly KW_OFFSET = 135;
	static readonly KW_ON = 136;
	static readonly KW_OPTION = 137;
	static readonly KW_OR = 138;
	static readonly KW_ORDER = 139;
	static readonly KW_ORDINALITY = 140;
	static readonly KW_OUTER = 141;
	static readonly KW_OWNER = 142;
	static readonly KW_OVER = 143;
	static readonly KW_OVERWRITE = 144;
	static readonly KW_PARTITION = 145;
	static readonly KW_PARTITIONS = 146;
	static readonly KW_PARQUET = 147;
	static readonly KW_POSITION = 148;
	static readonly KW_PRECEDING = 149;
	static readonly KW_PRIMARY = 150;
	static readonly KW_REPLICATION = 151;
	static readonly KW_PRIVILEGES = 152;
	static readonly KW_PROPERTIES = 153;
	static readonly KW_RANGE = 154;
	static readonly KW_RECOVER = 155;
	static readonly KW_RENAME = 156;
	static readonly KW_REPEATABLE = 157;
	static readonly KW_REPLACE = 158;
	static readonly KW_RESTRICT = 159;
	static readonly KW_RETURNS = 160;
	static readonly KW_REVOKE = 161;
	static readonly KW_REFRESH = 162;
	static readonly KW_REGEXP = 163;
	static readonly KW_RLIKE = 164;
	static readonly KW_RIGHT = 165;
	static readonly KW_ROLE = 166;
	static readonly KW_ROLES = 167;
	static readonly KW_ROW = 168;
	static readonly KW_ROWS = 169;
	static readonly KW_SCHEMA = 170;
	static readonly KW_SCHEMAS = 171;
	static readonly KW_SECOND = 172;
	static readonly KW_SECONDS = 173;
	static readonly KW_SELECT = 174;
	static readonly KW_SERDEPROPERTIES = 175;
	static readonly KW_SET = 176;
	static readonly KW_SEMI = 177;
	static readonly KW_SERVER = 178;
	static readonly KW_SHOW = 179;
	static readonly KW_SHUTDOWN = 180;
	static readonly KW_SOME = 181;
	static readonly KW_STATS = 182;
	static readonly KW_STRAIGHT_JOIN = 183;
	static readonly KW_SUBSTRING = 184;
	static readonly KW_SYSTEM = 185;
	static readonly KW_SYMBOL = 186;
	static readonly KW_SERIALIZE_FN = 187;
	static readonly KW_TABLE = 188;
	static readonly KW_TABLES = 189;
	static readonly KW_TABLESAMPLE = 190;
	static readonly KW_TERMINATED = 191;
	static readonly KW_THEN = 192;
	static readonly KW_TO = 193;
	static readonly KW_TRUE = 194;
	static readonly KW_TRY_CAST = 195;
	static readonly KW_TRUNCATE = 196;
	static readonly KW_UNCACHED = 197;
	static readonly KW_UESCAPE = 198;
	static readonly KW_UNBOUNDED = 199;
	static readonly KW_UNION = 200;
	static readonly KW_UNNEST = 201;
	static readonly KW_UNSET = 202;
	static readonly KW_USE = 203;
	static readonly KW_USER = 204;
	static readonly KW_USING = 205;
	static readonly KW_UPDATE_FN = 206;
	static readonly KW_UPSERT = 207;
	static readonly KW_UNKNOWN = 208;
	static readonly KW_URI = 209;
	static readonly KW_VALUE = 210;
	static readonly KW_VALUES = 211;
	static readonly KW_VIEW = 212;
	static readonly KW_VIEWS = 213;
	static readonly KW_WHEN = 214;
	static readonly KW_WHERE = 215;
	static readonly KW_WITH = 216;
	static readonly KW_YEAR = 217;
	static readonly KW_YEARS = 218;
	static readonly KW_TEXTFILE = 219;
	static readonly KW_ORC = 220;
	static readonly KW_AVRO = 221;
	static readonly KW_SEQUENCEFILE = 222;
	static readonly KW_RCFILE = 223;
	static readonly KW_REFERENCES = 224;
	static readonly KW_NOVALIDATE = 225;
	static readonly KW_RELY = 226;
	static readonly KW_BINARY = 227;
	static readonly KW_BIGINT = 228;
	static readonly KW_BOOLEAN = 229;
	static readonly KW_CHAR = 230;
	static readonly KW_DATE = 231;
	static readonly KW_DECIMAL = 232;
	static readonly KW_DOUBLE = 233;
	static readonly KW_INT = 234;
	static readonly KW_MAP = 235;
	static readonly KW_REAL = 236;
	static readonly KW_SMALLINT = 237;
	static readonly KW_FLOAT = 238;
	static readonly KW_STRING = 239;
	static readonly KW_STRUCT = 240;
	static readonly KW_TIMESTAMP = 241;
	static readonly KW_TINYINT = 242;
	static readonly KW_VARCHAR = 243;
	static readonly KW_COMPLEX = 244;
	static readonly STATS_NUMDVS = 245;
	static readonly STATS_NUMNULLS = 246;
	static readonly STATS_AVGSIZE = 247;
	static readonly STATS_MAXSIZE = 248;
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
	static readonly DOT = 261;
	static readonly SEMICOLON = 262;
	static readonly COMMA = 263;
	static readonly COLON = 264;
	static readonly LPAREN = 265;
	static readonly RPAREN = 266;
	static readonly LSQUARE = 267;
	static readonly RSQUARE = 268;
	static readonly LCURLY = 269;
	static readonly RCURLY = 270;
	static readonly BITWISEOR = 271;
	static readonly QUESTION = 272;
	static readonly RIGHT_ARROW = 273;
	static readonly STRING = 274;
	static readonly UNICODE_STRING = 275;
	static readonly BINARY_LITERAL = 276;
	static readonly INTEGER_VALUE = 277;
	static readonly DECIMAL_VALUE = 278;
	static readonly DOUBLE_VALUE = 279;
	static readonly IDENTIFIER = 280;
	static readonly DIGIT_IDENTIFIER = 281;
	static readonly QUOTED_IDENTIFIER = 282;
	static readonly BACKQUOTED_IDENTIFIER = 283;
	static readonly TIME_WITH_TIME_ZONE = 284;
	static readonly TIMESTAMP_WITH_TIME_ZONE = 285;
	static readonly DOUBLE_PRECISION = 286;
	static readonly SIMPLE_COMMENT = 287;
	static readonly BRACKETED_COMMENT = 288;
	static readonly WS = 289;
	static readonly RULE_program = 0;
	static readonly RULE_singleStatement = 1;
	static readonly RULE_sqlStatement = 2;
	static readonly RULE_useStatement = 3;
	static readonly RULE_createStatement = 4;
	static readonly RULE_createTableSelect = 5;
	static readonly RULE_createTableLike = 6;
	static readonly RULE_createKuduTableAsSelect = 7;
	static readonly RULE_createView = 8;
	static readonly RULE_createSchema = 9;
	static readonly RULE_createRole = 10;
	static readonly RULE_createAggregateFunction = 11;
	static readonly RULE_createFunction = 12;
	static readonly RULE_alterStatement = 13;
	static readonly RULE_alterDatabase = 14;
	static readonly RULE_alterStatsKey = 15;
	static readonly RULE_alterPartitionCache = 16;
	static readonly RULE_changeColumnDefine = 17;
	static readonly RULE_alterDropSingleColumn = 18;
	static readonly RULE_alterTableOwner = 19;
	static readonly RULE_replaceOrAddColumns = 20;
	static readonly RULE_addSingleColumn = 21;
	static readonly RULE_alterTableNonKuduOrKuduOnly = 22;
	static readonly RULE_addPartitionByRangeOrValue = 23;
	static readonly RULE_alterFormat = 24;
	static readonly RULE_recoverPartitions = 25;
	static readonly RULE_dropPartitionByRangeOrValue = 26;
	static readonly RULE_alterView = 27;
	static readonly RULE_renameView = 28;
	static readonly RULE_alterViewOwner = 29;
	static readonly RULE_renameTable = 30;
	static readonly RULE_alterUnSetOrSetViewTblproperties = 31;
	static readonly RULE_truncateTableStatement = 32;
	static readonly RULE_describeStatement = 33;
	static readonly RULE_computeStatement = 34;
	static readonly RULE_computeStats = 35;
	static readonly RULE_computeIncrementalStats = 36;
	static readonly RULE_dropStatement = 37;
	static readonly RULE_dropSchema = 38;
	static readonly RULE_dropView = 39;
	static readonly RULE_dropTable = 40;
	static readonly RULE_dropIncrementalStats = 41;
	static readonly RULE_dropFunction = 42;
	static readonly RULE_dropRole = 43;
	static readonly RULE_grantStatement = 44;
	static readonly RULE_grantRole = 45;
	static readonly RULE_grant = 46;
	static readonly RULE_revokeStatement = 47;
	static readonly RULE_revokeRole = 48;
	static readonly RULE_revoke = 49;
	static readonly RULE_insertStatement = 50;
	static readonly RULE_deleteStatement = 51;
	static readonly RULE_delete = 52;
	static readonly RULE_deleteTableRef = 53;
	static readonly RULE_updateStatement = 54;
	static readonly RULE_upsertStatement = 55;
	static readonly RULE_showStatement = 56;
	static readonly RULE_showSchemas = 57;
	static readonly RULE_showTables = 58;
	static readonly RULE_showFunctions = 59;
	static readonly RULE_showCreateTable = 60;
	static readonly RULE_showCreateView = 61;
	static readonly RULE_showTableStats = 62;
	static readonly RULE_showColumnStats = 63;
	static readonly RULE_showPartitions = 64;
	static readonly RULE_showFiles = 65;
	static readonly RULE_showRoles = 66;
	static readonly RULE_showRoleGrant = 67;
	static readonly RULE_showGrants = 68;
	static readonly RULE_showDatabaseGrant = 69;
	static readonly RULE_showTableGrant = 70;
	static readonly RULE_showColumnGrant = 71;
	static readonly RULE_addCommentStatement = 72;
	static readonly RULE_addDatabaseComments = 73;
	static readonly RULE_addTableComments = 74;
	static readonly RULE_addColumnComments = 75;
	static readonly RULE_explainStatement = 76;
	static readonly RULE_setStatement = 77;
	static readonly RULE_shutdownStatement = 78;
	static readonly RULE_invalidateMetaStatement = 79;
	static readonly RULE_loadDataStatement = 80;
	static readonly RULE_refreshStatement = 81;
	static readonly RULE_refreshMeta = 82;
	static readonly RULE_refreshAuth = 83;
	static readonly RULE_refreshFunction = 84;
	static readonly RULE_ifExists = 85;
	static readonly RULE_ifNotExists = 86;
	static readonly RULE_tableNameCreate = 87;
	static readonly RULE_databaseNameCreate = 88;
	static readonly RULE_viewNameCreate = 89;
	static readonly RULE_functionNameCreate = 90;
	static readonly RULE_columnNamePathCreate = 91;
	static readonly RULE_databaseNamePath = 92;
	static readonly RULE_tableNamePath = 93;
	static readonly RULE_viewNamePath = 94;
	static readonly RULE_functionNamePath = 95;
	static readonly RULE_columnNamePath = 96;
	static readonly RULE_tableOrViewPath = 97;
	static readonly RULE_createCommonItem = 98;
	static readonly RULE_assignmentList = 99;
	static readonly RULE_assignmentItem = 100;
	static readonly RULE_viewColumns = 101;
	static readonly RULE_queryStatement = 102;
	static readonly RULE_with = 103;
	static readonly RULE_constraintSpecification = 104;
	static readonly RULE_foreignKeySpecification = 105;
	static readonly RULE_columnSpec = 106;
	static readonly RULE_columnDefinition = 107;
	static readonly RULE_kuduTableElement = 108;
	static readonly RULE_kuduColumnDefinition = 109;
	static readonly RULE_columnSpecWithKudu = 110;
	static readonly RULE_createColumnSpecWithKudu = 111;
	static readonly RULE_kuduAttributes = 112;
	static readonly RULE_kuduStorageAttr = 113;
	static readonly RULE_statsKey = 114;
	static readonly RULE_fileFormat = 115;
	static readonly RULE_kuduPartitionClause = 116;
	static readonly RULE_hashClause = 117;
	static readonly RULE_rangeClause = 118;
	static readonly RULE_kuduPartitionSpec = 119;
	static readonly RULE_cacheSpec = 120;
	static readonly RULE_rangeOperator = 121;
	static readonly RULE_partitionCol = 122;
	static readonly RULE_likeClause = 123;
	static readonly RULE_properties = 124;
	static readonly RULE_partitionedBy = 125;
	static readonly RULE_sortedBy = 126;
	static readonly RULE_rowFormat = 127;
	static readonly RULE_property = 128;
	static readonly RULE_queryNoWith = 129;
	static readonly RULE_queryTerm = 130;
	static readonly RULE_queryPrimary = 131;
	static readonly RULE_sortItem = 132;
	static readonly RULE_querySpecification = 133;
	static readonly RULE_groupBy = 134;
	static readonly RULE_groupingElement = 135;
	static readonly RULE_groupingSet = 136;
	static readonly RULE_namedQuery = 137;
	static readonly RULE_setQuantifier = 138;
	static readonly RULE_selectItem = 139;
	static readonly RULE_relation = 140;
	static readonly RULE_joinType = 141;
	static readonly RULE_joinCriteria = 142;
	static readonly RULE_sampledRelation = 143;
	static readonly RULE_sampleType = 144;
	static readonly RULE_aliasedRelation = 145;
	static readonly RULE_columnAliases = 146;
	static readonly RULE_relationPrimary = 147;
	static readonly RULE_subQueryRelation = 148;
	static readonly RULE_unnest = 149;
	static readonly RULE_parenthesizedRelation = 150;
	static readonly RULE_columnItem = 151;
	static readonly RULE_expression = 152;
	static readonly RULE_booleanExpression = 153;
	static readonly RULE_predicate = 154;
	static readonly RULE_valueExpression = 155;
	static readonly RULE_primaryExpression = 156;
	static readonly RULE_stringLiteral = 157;
	static readonly RULE_comparisonOperator = 158;
	static readonly RULE_comparisonQuantifier = 159;
	static readonly RULE_booleanValue = 160;
	static readonly RULE_interval = 161;
	static readonly RULE_intervalField = 162;
	static readonly RULE_normalForm = 163;
	static readonly RULE_type = 164;
	static readonly RULE_dataType = 165;
	static readonly RULE_typeParameter = 166;
	static readonly RULE_baseType = 167;
	static readonly RULE_whenClause = 168;
	static readonly RULE_filter = 169;
	static readonly RULE_over = 170;
	static readonly RULE_windowFrame = 171;
	static readonly RULE_frameBound = 172;
	static readonly RULE_pathElement = 173;
	static readonly RULE_pathSpecification = 174;
	static readonly RULE_privilege = 175;
	static readonly RULE_objectType = 176;
	static readonly RULE_qualifiedName = 177;
	static readonly RULE_principal = 178;
	static readonly RULE_identifier = 179;
	static readonly RULE_number = 180;
	static readonly RULE_reservedKeywordsUsedAsFuncName = 181;
	static readonly RULE_nonReserved = 182;
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
	singleStatement(): SingleStatementContext;
	sqlStatement(): SqlStatementContext;
	useStatement(): UseStatementContext;
	createStatement(): CreateStatementContext;
	createTableSelect(): CreateTableSelectContext;
	createTableLike(): CreateTableLikeContext;
	createKuduTableAsSelect(): CreateKuduTableAsSelectContext;
	createView(): CreateViewContext;
	createSchema(): CreateSchemaContext;
	createRole(): CreateRoleContext;
	createAggregateFunction(): CreateAggregateFunctionContext;
	createFunction(): CreateFunctionContext;
	alterStatement(): AlterStatementContext;
	alterDatabase(): AlterDatabaseContext;
	alterStatsKey(): AlterStatsKeyContext;
	alterPartitionCache(): AlterPartitionCacheContext;
	changeColumnDefine(): ChangeColumnDefineContext;
	alterDropSingleColumn(): AlterDropSingleColumnContext;
	alterTableOwner(): AlterTableOwnerContext;
	replaceOrAddColumns(): ReplaceOrAddColumnsContext;
	addSingleColumn(): AddSingleColumnContext;
	alterTableNonKuduOrKuduOnly(): AlterTableNonKuduOrKuduOnlyContext;
	addPartitionByRangeOrValue(): AddPartitionByRangeOrValueContext;
	alterFormat(): AlterFormatContext;
	recoverPartitions(): RecoverPartitionsContext;
	dropPartitionByRangeOrValue(): DropPartitionByRangeOrValueContext;
	alterView(): AlterViewContext;
	renameView(): RenameViewContext;
	alterViewOwner(): AlterViewOwnerContext;
	renameTable(): RenameTableContext;
	alterUnSetOrSetViewTblproperties(): AlterUnSetOrSetViewTblpropertiesContext;
	truncateTableStatement(): TruncateTableStatementContext;
	describeStatement(): DescribeStatementContext;
	computeStatement(): ComputeStatementContext;
	computeStats(): ComputeStatsContext;
	computeIncrementalStats(): ComputeIncrementalStatsContext;
	dropStatement(): DropStatementContext;
	dropSchema(): DropSchemaContext;
	dropView(): DropViewContext;
	dropTable(): DropTableContext;
	dropIncrementalStats(): DropIncrementalStatsContext;
	dropFunction(): DropFunctionContext;
	dropRole(): DropRoleContext;
	grantStatement(): GrantStatementContext;
	grantRole(): GrantRoleContext;
	grant(): GrantContext;
	revokeStatement(): RevokeStatementContext;
	revokeRole(): RevokeRoleContext;
	revoke(): RevokeContext;
	insertStatement(): InsertStatementContext;
	deleteStatement(): DeleteStatementContext;
	delete_(): DeleteContext;
	deleteTableRef(): DeleteTableRefContext;
	updateStatement(): UpdateStatementContext;
	upsertStatement(): UpsertStatementContext;
	showStatement(): ShowStatementContext;
	showSchemas(): ShowSchemasContext;
	showTables(): ShowTablesContext;
	showFunctions(): ShowFunctionsContext;
	showCreateTable(): ShowCreateTableContext;
	showCreateView(): ShowCreateViewContext;
	showTableStats(): ShowTableStatsContext;
	showColumnStats(): ShowColumnStatsContext;
	showPartitions(): ShowPartitionsContext;
	showFiles(): ShowFilesContext;
	showRoles(): ShowRolesContext;
	showRoleGrant(): ShowRoleGrantContext;
	showGrants(): ShowGrantsContext;
	showDatabaseGrant(): ShowDatabaseGrantContext;
	showTableGrant(): ShowTableGrantContext;
	showColumnGrant(): ShowColumnGrantContext;
	addCommentStatement(): AddCommentStatementContext;
	addDatabaseComments(): AddDatabaseCommentsContext;
	addTableComments(): AddTableCommentsContext;
	addColumnComments(): AddColumnCommentsContext;
	explainStatement(): ExplainStatementContext;
	setStatement(): SetStatementContext;
	shutdownStatement(): ShutdownStatementContext;
	invalidateMetaStatement(): InvalidateMetaStatementContext;
	loadDataStatement(): LoadDataStatementContext;
	refreshStatement(): RefreshStatementContext;
	refreshMeta(): RefreshMetaContext;
	refreshAuth(): RefreshAuthContext;
	refreshFunction(): RefreshFunctionContext;
	ifExists(): IfExistsContext;
	ifNotExists(): IfNotExistsContext;
	tableNameCreate(): TableNameCreateContext;
	databaseNameCreate(): DatabaseNameCreateContext;
	viewNameCreate(): ViewNameCreateContext;
	functionNameCreate(): FunctionNameCreateContext;
	columnNamePathCreate(): ColumnNamePathCreateContext;
	databaseNamePath(): DatabaseNamePathContext;
	tableNamePath(): TableNamePathContext;
	viewNamePath(): ViewNamePathContext;
	functionNamePath(): FunctionNamePathContext;
	columnNamePath(): ColumnNamePathContext;
	tableOrViewPath(): TableOrViewPathContext;
	createCommonItem(): CreateCommonItemContext;
	assignmentList(): AssignmentListContext;
	assignmentItem(): AssignmentItemContext;
	viewColumns(): ViewColumnsContext;
	queryStatement(): QueryStatementContext;
	with_(): WithContext;
	constraintSpecification(): ConstraintSpecificationContext;
	foreignKeySpecification(): ForeignKeySpecificationContext;
	columnSpec(): ColumnSpecContext;
	columnDefinition(): ColumnDefinitionContext;
	kuduTableElement(): KuduTableElementContext;
	kuduColumnDefinition(): KuduColumnDefinitionContext;
	columnSpecWithKudu(): ColumnSpecWithKuduContext;
	createColumnSpecWithKudu(): CreateColumnSpecWithKuduContext;
	kuduAttributes(): KuduAttributesContext;
	kuduStorageAttr(): KuduStorageAttrContext;
	statsKey(): StatsKeyContext;
	fileFormat(): FileFormatContext;
	kuduPartitionClause(): KuduPartitionClauseContext;
	hashClause(): HashClauseContext;
	rangeClause(): RangeClauseContext;
	kuduPartitionSpec(): KuduPartitionSpecContext;
	cacheSpec(): CacheSpecContext;
	rangeOperator(): RangeOperatorContext;
	partitionCol(): PartitionColContext;
	likeClause(): LikeClauseContext;
	properties(): PropertiesContext;
	partitionedBy(): PartitionedByContext;
	sortedBy(): SortedByContext;
	rowFormat(): RowFormatContext;
	property(): PropertyContext;
	queryNoWith(): QueryNoWithContext;
	queryTerm(): QueryTermContext;
	queryTerm(_p: number): QueryTermContext;
	queryPrimary(): QueryPrimaryContext;
	sortItem(): SortItemContext;
	querySpecification(): QuerySpecificationContext;
	groupBy(): GroupByContext;
	groupingElement(): GroupingElementContext;
	groupingSet(): GroupingSetContext;
	namedQuery(): NamedQueryContext;
	setQuantifier(): SetQuantifierContext;
	selectItem(): SelectItemContext;
	relation(): RelationContext;
	relation(_p: number): RelationContext;
	joinType(): JoinTypeContext;
	joinCriteria(): JoinCriteriaContext;
	sampledRelation(): SampledRelationContext;
	sampleType(): SampleTypeContext;
	aliasedRelation(): AliasedRelationContext;
	columnAliases(): ColumnAliasesContext;
	relationPrimary(): RelationPrimaryContext;
	subQueryRelation(): SubQueryRelationContext;
	unnest(): UnnestContext;
	parenthesizedRelation(): ParenthesizedRelationContext;
	columnItem(): ColumnItemContext;
	expression(): ExpressionContext;
	booleanExpression(): BooleanExpressionContext;
	booleanExpression(_p: number): BooleanExpressionContext;
	predicate(value: antlr.ParserRuleContext): PredicateContext;
	valueExpression(): ValueExpressionContext;
	valueExpression(_p: number): ValueExpressionContext;
	primaryExpression(): PrimaryExpressionContext;
	primaryExpression(_p: number): PrimaryExpressionContext;
	stringLiteral(): StringLiteralContext;
	comparisonOperator(): ComparisonOperatorContext;
	comparisonQuantifier(): ComparisonQuantifierContext;
	booleanValue(): BooleanValueContext;
	interval(): IntervalContext;
	intervalField(): IntervalFieldContext;
	normalForm(): NormalFormContext;
	type_(): TypeContext;
	type_(_p: number): TypeContext;
	dataType(): DataTypeContext;
	typeParameter(): TypeParameterContext;
	baseType(): BaseTypeContext;
	whenClause(): WhenClauseContext;
	filter(): FilterContext;
	over(): OverContext;
	windowFrame(): WindowFrameContext;
	frameBound(): FrameBoundContext;
	pathElement(): PathElementContext;
	pathSpecification(): PathSpecificationContext;
	privilege(): PrivilegeContext;
	objectType(): ObjectTypeContext;
	qualifiedName(): QualifiedNameContext;
	principal(): PrincipalContext;
	identifier(): IdentifierContext;
	number_(): NumberContext;
	reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext;
	nonReserved(): NonReservedContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
	private columnNamePath_sempred;
	private queryTerm_sempred;
	private relation_sempred;
	private booleanExpression_sempred;
	private valueExpression_sempred;
	private primaryExpression_sempred;
	private type_sempred;
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
	singleStatement(): SingleStatementContext[];
	singleStatement(i: number): SingleStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sqlStatement(): SqlStatementContext;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SqlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryStatement(): QueryStatementContext | null;
	useStatement(): UseStatementContext | null;
	createStatement(): CreateStatementContext | null;
	alterStatement(): AlterStatementContext | null;
	truncateTableStatement(): TruncateTableStatementContext | null;
	describeStatement(): DescribeStatementContext | null;
	computeStatement(): ComputeStatementContext | null;
	dropStatement(): DropStatementContext | null;
	grantStatement(): GrantStatementContext | null;
	revokeStatement(): RevokeStatementContext | null;
	insertStatement(): InsertStatementContext | null;
	deleteStatement(): DeleteStatementContext | null;
	updateStatement(): UpdateStatementContext | null;
	upsertStatement(): UpsertStatementContext | null;
	showStatement(): ShowStatementContext | null;
	addCommentStatement(): AddCommentStatementContext | null;
	explainStatement(): ExplainStatementContext | null;
	setStatement(): SetStatementContext | null;
	shutdownStatement(): ShutdownStatementContext | null;
	invalidateMetaStatement(): InvalidateMetaStatementContext | null;
	loadDataStatement(): LoadDataStatementContext | null;
	refreshStatement(): RefreshStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UseStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USE(): antlr.TerminalNode;
	databaseNamePath(): DatabaseNamePathContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createSchema(): CreateSchemaContext | null;
	createRole(): CreateRoleContext | null;
	createAggregateFunction(): CreateAggregateFunctionContext | null;
	createFunction(): CreateFunctionContext | null;
	createView(): CreateViewContext | null;
	createKuduTableAsSelect(): CreateKuduTableAsSelectContext | null;
	createTableLike(): CreateTableLikeContext | null;
	createTableSelect(): CreateTableSelectContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableSelectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	createCommonItem(): CreateCommonItemContext;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	LPAREN(): antlr.TerminalNode | null;
	columnDefinition(): ColumnDefinitionContext[];
	columnDefinition(i: number): ColumnDefinitionContext | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_PARTITIONED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext | null;
	columnAliases(): ColumnAliasesContext | null;
	partitionedBy(): PartitionedByContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	constraintSpecification(): ConstraintSpecificationContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableLikeContext extends antlr.ParserRuleContext {
	_parquet?: StringLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	KW_LIKE(): antlr.TerminalNode;
	createCommonItem(): CreateCommonItemContext;
	tableNamePath(): TableNamePathContext | null;
	KW_PARQUET(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	stringLiteral(): StringLiteralContext | null;
	KW_PARTITIONED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	partitionedBy(): PartitionedByContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateKuduTableAsSelectContext extends antlr.ParserRuleContext {
	_tblProp?: PropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	KW_STORED(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode[];
	KW_AS(i: number): antlr.TerminalNode | null;
	KW_KUDU(): antlr.TerminalNode;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	LPAREN(): antlr.TerminalNode | null;
	kuduTableElement(): KuduTableElementContext[];
	kuduTableElement(i: number): KuduTableElementContext | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_PRIMARY(): antlr.TerminalNode[];
	KW_PRIMARY(i: number): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode[];
	KW_KEY(i: number): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	kuduPartitionClause(): KuduPartitionClauseContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext | null;
	properties(): PropertiesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext[];
	columnAliases(i: number): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateViewContext extends antlr.ParserRuleContext {
	_tblProp?: PropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNameCreate(): ViewNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	ifNotExists(): IfNotExistsContext | null;
	viewColumns(): ViewColumnsContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateSchemaContext extends antlr.ParserRuleContext {
	_comment?: StringLiteralContext;
	_location?: StringLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	databaseNameCreate(): DatabaseNameCreateContext;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateRoleContext extends antlr.ParserRuleContext {
	_name?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateAggregateFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNameCreate(): FunctionNameCreateContext;
	KW_RETURNS(): antlr.TerminalNode;
	type_(): TypeContext[];
	type_(i: number): TypeContext | null;
	KW_LOCATION(): antlr.TerminalNode;
	STRING(): antlr.TerminalNode[];
	STRING(i: number): antlr.TerminalNode | null;
	KW_UPDATE_FN(): antlr.TerminalNode;
	EQ(): antlr.TerminalNode[];
	EQ(i: number): antlr.TerminalNode | null;
	KW_MERGE_FN(): antlr.TerminalNode;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_INTERMEDIATE(): antlr.TerminalNode | null;
	KW_INIT_FN(): antlr.TerminalNode | null;
	KW_PREPARE_FN(): antlr.TerminalNode | null;
	KW_CLOSEFN(): antlr.TerminalNode | null;
	KW_SERIALIZE_FN(): antlr.TerminalNode | null;
	KW_FINALIZE_FN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateFunctionContext extends antlr.ParserRuleContext {
	_symbol_?: StringLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNameCreate(): FunctionNameCreateContext;
	KW_LOCATION(): antlr.TerminalNode;
	STRING(): antlr.TerminalNode;
	KW_SYMBOL(): antlr.TerminalNode;
	EQ(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext;
	ifNotExists(): IfNotExistsContext | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_RETURNS(): antlr.TerminalNode | null;
	type_(): TypeContext[];
	type_(i: number): TypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alterDatabase(): AlterDatabaseContext | null;
	alterUnSetOrSetViewTblproperties(): AlterUnSetOrSetViewTblpropertiesContext | null;
	renameTable(): RenameTableContext | null;
	alterViewOwner(): AlterViewOwnerContext | null;
	alterView(): AlterViewContext | null;
	renameView(): RenameViewContext | null;
	dropPartitionByRangeOrValue(): DropPartitionByRangeOrValueContext | null;
	alterFormat(): AlterFormatContext | null;
	recoverPartitions(): RecoverPartitionsContext | null;
	addPartitionByRangeOrValue(): AddPartitionByRangeOrValueContext | null;
	alterTableNonKuduOrKuduOnly(): AlterTableNonKuduOrKuduOnlyContext | null;
	addSingleColumn(): AddSingleColumnContext | null;
	replaceOrAddColumns(): ReplaceOrAddColumnsContext | null;
	changeColumnDefine(): ChangeColumnDefineContext | null;
	alterStatsKey(): AlterStatsKeyContext | null;
	alterPartitionCache(): AlterPartitionCacheContext | null;
	alterDropSingleColumn(): AlterDropSingleColumnContext | null;
	alterTableOwner(): AlterTableOwnerContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterDatabaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	databaseNamePath(): DatabaseNamePathContext;
	KW_SET(): antlr.TerminalNode;
	KW_OWNER(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_USER(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterStatsKeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_SET(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	columnNamePath(): ColumnNamePathContext;
	LPAREN(): antlr.TerminalNode;
	statsKey(): StatsKeyContext[];
	statsKey(i: number): StatsKeyContext | null;
	EQ(): antlr.TerminalNode[];
	EQ(i: number): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterPartitionCacheContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_SET(): antlr.TerminalNode;
	KW_UNCACHED(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_CACHED(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_REPLICATION(): antlr.TerminalNode | null;
	EQ(): antlr.TerminalNode | null;
	number(): NumberContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ChangeColumnDefineContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_CHANGE(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnSpecWithKudu(): ColumnSpecWithKuduContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterDropSingleColumnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_DROP(): antlr.TerminalNode;
	columnNamePath(): ColumnNamePathContext;
	KW_COLUMN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableOwnerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_SET(): antlr.TerminalNode;
	KW_OWNER(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_USER(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ReplaceOrAddColumnsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_COLUMNS(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	columnSpecWithKudu(): ColumnSpecWithKuduContext[];
	columnSpecWithKudu(i: number): ColumnSpecWithKuduContext | null;
	RPAREN(): antlr.TerminalNode;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AddSingleColumnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_ADD(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	createColumnSpecWithKudu(): CreateColumnSpecWithKuduContext;
	ifNotExists(): IfNotExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableNonKuduOrKuduOnlyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode[];
	KW_ALTER(i: number): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	columnNamePath(): ColumnNamePathContext;
	KW_SET(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	kuduStorageAttr(): KuduStorageAttrContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AddPartitionByRangeOrValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_ADD(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_RANGE(): antlr.TerminalNode | null;
	kuduPartitionSpec(): KuduPartitionSpecContext | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	cacheSpec(): CacheSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterFormatContext extends antlr.ParserRuleContext {
	_tblProp?: PropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_SET(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_FILEFORMAT(): antlr.TerminalNode | null;
	fileFormat(): FileFormatContext | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	rowFormat(): RowFormatContext | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	properties(): PropertiesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RecoverPartitionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_RECOVER(): antlr.TerminalNode;
	KW_PARTITIONS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropPartitionByRangeOrValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_DROP(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_RANGE(): antlr.TerminalNode | null;
	kuduPartitionSpec(): KuduPartitionSpecContext | null;
	ifExists(): IfExistsContext | null;
	KW_PURGE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNamePath(): ViewNamePathContext;
	KW_AS(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	viewColumns(): ViewColumnsContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RenameViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNamePath(): ViewNamePathContext[];
	viewNamePath(i: number): ViewNamePathContext | null;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterViewOwnerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNamePath(): ViewNamePathContext;
	KW_SET(): antlr.TerminalNode;
	KW_OWNER(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext;
	KW_USER(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RenameTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext[];
	tableNamePath(i: number): TableNamePathContext | null;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AlterUnSetOrSetViewTblpropertiesContext extends antlr.ParserRuleContext {
	_tblProp?: PropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNamePath(): ViewNamePathContext;
	KW_TBLPROPERTIES(): antlr.TerminalNode;
	KW_UNSET(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	properties(): PropertiesContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TruncateTableStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUNCATE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_TABLE(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DESCRIBE(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ComputeStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	computeStats(): ComputeStatsContext | null;
	computeIncrementalStats(): ComputeIncrementalStatsContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ComputeStatsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMPUTE(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	columnAliases(): ColumnAliasesContext | null;
	KW_TABLESAMPLE(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	number_(): NumberContext[];
	number_(i: number): NumberContext | null;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ComputeIncrementalStatsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMPUTE(): antlr.TerminalNode;
	KW_INCREMENTAL(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_PARTITION(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dropRole(): DropRoleContext | null;
	dropFunction(): DropFunctionContext | null;
	dropIncrementalStats(): DropIncrementalStatsContext | null;
	dropView(): DropViewContext | null;
	dropTable(): DropTableContext | null;
	dropSchema(): DropSchemaContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropSchemaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	databaseNamePath(): DatabaseNamePathContext;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNamePath(): ViewNamePathContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	ifExists(): IfExistsContext | null;
	KW_PURGE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropIncrementalStatsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_INCREMENTAL(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNamePath(): FunctionNamePathContext;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	type_(): TypeContext[];
	type_(i: number): TypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DropRoleContext extends antlr.ParserRuleContext {
	_name?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class GrantStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	grantRole(): GrantRoleContext | null;
	grant(): GrantContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class GrantRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	KW_TO(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class GrantContext extends antlr.ParserRuleContext {
	_grantee?: PrincipalContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode;
	privilege(): PrivilegeContext;
	KW_ON(): antlr.TerminalNode;
	objectType(): ObjectTypeContext;
	KW_TO(): antlr.TerminalNode;
	principal(): PrincipalContext;
	qualifiedName(): QualifiedNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RevokeStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	revokeRole(): RevokeRoleContext | null;
	revoke(): RevokeContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RevokeRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REVOKE(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	KW_FROM(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RevokeContext extends antlr.ParserRuleContext {
	_grantee?: PrincipalContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REVOKE(): antlr.TerminalNode;
	privilege(): PrivilegeContext;
	KW_ON(): antlr.TerminalNode;
	objectType(): ObjectTypeContext;
	KW_FROM(): antlr.TerminalNode;
	identifier(): IdentifierContext | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	qualifiedName(): QualifiedNameContext | null;
	principal(): PrincipalContext | null;
	KW_ROLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class InsertStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	queryStatement(): QueryStatementContext;
	KW_INTO(): antlr.TerminalNode | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	with(): WithContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DeleteStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	delete(): DeleteContext | null;
	deleteTableRef(): DeleteTableRefContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DeleteContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELETE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_FROM(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DeleteTableRefContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELETE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_FROM(): antlr.TerminalNode;
	identifier(): IdentifierContext | null;
	relation(): RelationContext[];
	relation(i: number): RelationContext | null;
	KW_WHERE(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	KW_AS(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UpdateStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UPDATE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_SET(): antlr.TerminalNode;
	assignmentList(): AssignmentListContext;
	KW_FROM(): antlr.TerminalNode | null;
	relation(): RelationContext[];
	relation(i: number): RelationContext | null;
	KW_WHERE(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UpsertStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UPSERT(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	queryStatement(): QueryStatementContext;
	KW_TABLE(): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	showRoles(): ShowRolesContext | null;
	showRoleGrant(): ShowRoleGrantContext | null;
	showGrants(): ShowGrantsContext | null;
	showFiles(): ShowFilesContext | null;
	showPartitions(): ShowPartitionsContext | null;
	showColumnStats(): ShowColumnStatsContext | null;
	showTableStats(): ShowTableStatsContext | null;
	showCreateView(): ShowCreateViewContext | null;
	showCreateTable(): ShowCreateTableContext | null;
	showFunctions(): ShowFunctionsContext | null;
	showTables(): ShowTablesContext | null;
	showSchemas(): ShowSchemasContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowSchemasContext extends antlr.ParserRuleContext {
	_pattern?: StringLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	BITWISEOR(): antlr.TerminalNode[];
	BITWISEOR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowTablesContext extends antlr.ParserRuleContext {
	_pattern?: StringLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_TABLES(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode | null;
	tableNamePath(): TableNamePathContext | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	BITWISEOR(): antlr.TerminalNode[];
	BITWISEOR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowFunctionsContext extends antlr.ParserRuleContext {
	_pattern?: StringLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_FUNCTIONS(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode | null;
	databaseNamePath(): DatabaseNamePathContext | null;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	KW_ANALYTIC(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	BITWISEOR(): antlr.TerminalNode[];
	BITWISEOR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNamePath(): ViewNamePathContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowTableStatsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowColumnStatsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	KW_STATS(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowPartitionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_PARTITIONS(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_RANGE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowFilesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_FILES(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_PARTITION(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowRolesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_ROLES(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowRoleGrantContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowGrantsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	showDatabaseGrant(): ShowDatabaseGrantContext | null;
	showTableGrant(): ShowTableGrantContext | null;
	showColumnGrant(): ShowColumnGrantContext | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_GRANT(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_URI(): antlr.TerminalNode | null;
	qualifiedName(): QualifiedNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowDatabaseGrantContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_USER(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	databaseNamePath(): DatabaseNamePathContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowTableGrantContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_USER(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableNamePath(): TableNamePathContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShowColumnGrantContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_USER(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	columnNamePath(): ColumnNamePathContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AddCommentStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	addDatabaseComments(): AddDatabaseCommentsContext | null;
	addTableComments(): AddTableCommentsContext | null;
	addColumnComments(): AddColumnCommentsContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AddDatabaseCommentsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	databaseNamePath(): DatabaseNamePathContext;
	KW_IS(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AddTableCommentsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_IS(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AddColumnCommentsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnNamePath(): ColumnNamePathContext;
	KW_IS(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXPLAIN(): antlr.TerminalNode;
	sqlStatement(): SqlStatementContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SetStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_ALL(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	EQ(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ShutdownStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COLON(): antlr.TerminalNode;
	KW_SHUTDOWN(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext | null;
	expression(): ExpressionContext | null;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class InvalidateMetaStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INVALIDATE(): antlr.TerminalNode;
	KW_METADATA(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class LoadDataStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOAD(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_INPATH(): antlr.TerminalNode;
	STRING(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	refreshMeta(): RefreshMetaContext | null;
	refreshAuth(): RefreshAuthContext | null;
	refreshFunction(): RefreshFunctionContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshMetaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFRESH(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_PARTITION(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshAuthContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFRESH(): antlr.TerminalNode;
	KW_AUTHORIZATION(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFRESH(): antlr.TerminalNode;
	KW_FUNCTIONS(): antlr.TerminalNode;
	functionNamePath(): FunctionNamePathContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class IfExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class IfNotExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TableNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DatabaseNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ViewNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNamePathCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DatabaseNamePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TableNamePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ViewNamePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNamePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null;
	qualifiedName(): QualifiedNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNamePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TableOrViewPathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableNamePath(): TableNamePathContext | null;
	viewNamePath(): ViewNamePathContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateCommonItemContext extends antlr.ParserRuleContext {
	_comment?: StringLiteralContext;
	_serdProp?: PropertiesContext;
	_location?: StringLiteralContext;
	_cacheName?: QualifiedNameContext;
	_tblProp?: PropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SORT(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	rowFormat(): RowFormatContext | null;
	KW_WITH(): antlr.TerminalNode[];
	KW_WITH(i: number): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	fileFormat(): FileFormatContext | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_CACHED(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_UNCACHED(): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	properties(): PropertiesContext[];
	properties(i: number): PropertiesContext | null;
	qualifiedName(): QualifiedNameContext | null;
	KW_REPLICATION(): antlr.TerminalNode | null;
	EQ(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AssignmentListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	assignmentItem(): AssignmentItemContext[];
	assignmentItem(i: number): AssignmentItemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AssignmentItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	EQ(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ViewColumnsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	columnNamePathCreate(): ColumnNamePathCreateContext[];
	columnNamePathCreate(i: number): ColumnNamePathCreateContext | null;
	RPAREN(): antlr.TerminalNode;
	KW_COMMENT(): antlr.TerminalNode[];
	KW_COMMENT(i: number): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QueryStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryNoWith(): QueryNoWithContext;
	with(): WithContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class WithContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	namedQuery(): NamedQueryContext[];
	namedQuery(i: number): NamedQueryContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRIMARY(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	columnAliases(): ColumnAliasesContext;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_NOVALIDATE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_RELY(): antlr.TerminalNode | null;
	foreignKeySpecification(): ForeignKeySpecificationContext[];
	foreignKeySpecification(i: number): ForeignKeySpecificationContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ForeignKeySpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOREIGN(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	columnAliases(): ColumnAliasesContext[];
	columnAliases(i: number): ColumnAliasesContext | null;
	KW_REFERENCES(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_NOVALIDATE(): antlr.TerminalNode | null;
	KW_RELY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNamePath(): ColumnNamePathContext;
	type(): TypeContext;
	KW_COMMENT(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNamePathCreate(): ColumnNamePathCreateContext;
	type(): TypeContext;
	KW_COMMENT(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class KuduTableElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	kuduColumnDefinition(): KuduColumnDefinitionContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class KuduColumnDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNamePathCreate(): ColumnNamePathCreateContext;
	type(): TypeContext;
	kuduAttributes(): KuduAttributesContext[];
	kuduAttributes(i: number): KuduAttributesContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnSpecWithKuduContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnSpec(): ColumnSpecContext | null;
	kuduAttributes(): KuduAttributesContext[];
	kuduAttributes(i: number): KuduAttributesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CreateColumnSpecWithKuduContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNamePathCreate(): ColumnNamePathCreateContext;
	type(): TypeContext;
	KW_COMMENT(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	kuduAttributes(): KuduAttributesContext[];
	kuduAttributes(i: number): KuduAttributesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class KuduAttributesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULL(): antlr.TerminalNode | null;
	kuduStorageAttr(): KuduStorageAttrContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class KuduStorageAttrContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ENCODING(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_COMPRESSION(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_BLOCK_SIZE(): antlr.TerminalNode | null;
	number(): NumberContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class StatsKeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STATS_NUMDVS(): antlr.TerminalNode | null;
	STATS_NUMNULLS(): antlr.TerminalNode | null;
	STATS_AVGSIZE(): antlr.TerminalNode | null;
	STATS_MAXSIZE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class FileFormatContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TEXTFILE(): antlr.TerminalNode | null;
	KW_PARQUET(): antlr.TerminalNode | null;
	KW_ORC(): antlr.TerminalNode | null;
	KW_AVRO(): antlr.TerminalNode | null;
	KW_SEQUENCEFILE(): antlr.TerminalNode | null;
	KW_RCFILE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class KuduPartitionClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	hashClause(): HashClauseContext[];
	hashClause(i: number): HashClauseContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	rangeClause(): RangeClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class HashClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HASH(): antlr.TerminalNode;
	KW_PARTITIONS(): antlr.TerminalNode;
	number(): NumberContext;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RangeClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RANGE(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode[];
	KW_PARTITION(i: number): antlr.TerminalNode | null;
	kuduPartitionSpec(): KuduPartitionSpecContext[];
	kuduPartitionSpec(i: number): KuduPartitionSpecContext | null;
	columnAliases(): ColumnAliasesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class KuduPartitionSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUE(): antlr.TerminalNode | null;
	partitionCol(): PartitionColContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_VALUES(): antlr.TerminalNode | null;
	rangeOperator(): RangeOperatorContext[];
	rangeOperator(i: number): RangeOperatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CacheSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CACHED(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_REPLICATION(): antlr.TerminalNode | null;
	EQ(): antlr.TerminalNode | null;
	number(): NumberContext | null;
	KW_UNCACHED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RangeOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LT(): antlr.TerminalNode | null;
	LTE(): antlr.TerminalNode | null;
	GT(): antlr.TerminalNode | null;
	GTE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionColContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode | null;
	NEQ(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	rangeOperator(): RangeOperatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class LikeClauseContext extends antlr.ParserRuleContext {
	_optionType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext;
	KW_PROPERTIES(): antlr.TerminalNode | null;
	KW_INCLUDING(): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PropertiesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	property(): PropertyContext[];
	property(i: number): PropertyContext | null;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionedByContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	columnSpec(): ColumnSpecContext[];
	columnSpec(i: number): ColumnSpecContext | null;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SortedByContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RowFormatContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELIMITED(): antlr.TerminalNode;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_TERMINATED(): antlr.TerminalNode[];
	KW_TERMINATED(i: number): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	KW_LINES(): antlr.TerminalNode | null;
	KW_ESCAPED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PropertyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	EQ(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QueryNoWithContext extends antlr.ParserRuleContext {
	_rows?: ExpressionContext;
	_offset?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryTerm(): QueryTermContext;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QueryTermContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryTermContext): void;
}
export declare class QueryTermDefaultContext extends QueryTermContext {
	constructor(ctx: QueryTermContext);
	queryPrimary(): QueryPrimaryContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QueryPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryPrimaryContext): void;
}
export declare class SubqueryContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	LPAREN(): antlr.TerminalNode;
	queryNoWith(): QueryNoWithContext;
	RPAREN(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	querySpecification(): QuerySpecificationContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TableContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	KW_TABLE(): antlr.TerminalNode;
	tableNamePath(): TableNamePathContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class InlineTableContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	KW_VALUES(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SortItemContext extends antlr.ParserRuleContext {
	_ordering?: Token | null;
	_nullOrdering?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnItem(): ColumnItemContext;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QuerySpecificationContext extends antlr.ParserRuleContext {
	_where?: BooleanExpressionContext;
	_having?: BooleanExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode;
	selectItem(): SelectItemContext[];
	selectItem(i: number): SelectItemContext | null;
	setQuantifier(): SetQuantifierContext | null;
	KW_STRAIGHT_JOIN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	relation(): RelationContext[];
	relation(i: number): RelationContext | null;
	KW_WHERE(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	groupBy(): GroupByContext | null;
	KW_HAVING(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext[];
	booleanExpression(i: number): BooleanExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class GroupByContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	groupingElement(): GroupingElementContext[];
	groupingElement(i: number): GroupingElementContext | null;
	setQuantifier(): SetQuantifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: GroupingElementContext): void;
}
export declare class SingleGroupingSetContext extends GroupingElementContext {
	constructor(ctx: GroupingElementContext);
	groupingSet(): GroupingSetContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingSetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	columnItem(): ColumnItemContext[];
	columnItem(i: number): ColumnItemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class NamedQueryContext extends antlr.ParserRuleContext {
	_name?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	subQueryRelation(): SubQueryRelationContext;
	identifier(): IdentifierContext;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SetQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SelectItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SelectItemContext): void;
}
export declare class SelectAllContext extends SelectItemContext {
	constructor(ctx: SelectItemContext);
	qualifiedName(): QualifiedNameContext | null;
	DOT(): antlr.TerminalNode | null;
	ASTERISK(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SelectSingleContext extends SelectItemContext {
	constructor(ctx: SelectItemContext);
	columnItem(): ColumnItemContext;
	identifier(): IdentifierContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RelationContext): void;
}
export declare class RelationDefaultContext extends RelationContext {
	constructor(ctx: RelationContext);
	sampledRelation(): SampledRelationContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	sampledRelation(): SampledRelationContext | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class JoinTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INNER(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_SEMI(): antlr.TerminalNode | null;
	KW_ANTI(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class JoinCriteriaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	KW_USING(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SampledRelationContext extends antlr.ParserRuleContext {
	_percentage?: ExpressionContext;
	_seed?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	aliasedRelation(): AliasedRelationContext;
	KW_TABLESAMPLE(): antlr.TerminalNode | null;
	sampleType(): SampleTypeContext | null;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SampleTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BERNOULLI(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class AliasedRelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	relationPrimary(): RelationPrimaryContext;
	identifier(): IdentifierContext | null;
	KW_AS(): antlr.TerminalNode | null;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnAliasesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	columnNamePath(): ColumnNamePathContext[];
	columnNamePath(i: number): ColumnNamePathContext | null;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RelationPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableOrViewPath(): TableOrViewPathContext | null;
	subQueryRelation(): SubQueryRelationContext | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	unnest(): UnnestContext | null;
	parenthesizedRelation(): ParenthesizedRelationContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SubQueryRelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UnnestContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNNEST(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ParenthesizedRelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	relation(): RelationContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNamePath(): ColumnNamePathContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PredicatedContext extends BooleanExpressionContext {
	_valueExpression?: ValueExpressionContext;
	constructor(ctx: BooleanExpressionContext);
	valueExpression(): ValueExpressionContext;
	predicate(): PredicateContext | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
export declare class NullOrUnKnownOrBooleanPredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	KW_IS(): antlr.TerminalNode;
	KW_NULL(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class REGEXPContext extends PredicateContext {
	_pattern?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	KW_REGEXP(): antlr.TerminalNode | null;
	KW_IREGEXP(): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonContext extends PredicateContext {
	_right?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	comparisonOperator(): ComparisonOperatorContext;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class LikeContext extends PredicateContext {
	_pattern?: ValueExpressionContext;
	_escape?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	KW_LIKE(): antlr.TerminalNode | null;
	KW_ILIKE(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class InSubqueryContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	KW_IN(): antlr.TerminalNode;
	subQueryRelation(): SubQueryRelationContext;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DistinctFromContext extends PredicateContext {
	_right?: ValueExpressionContext;
	constructor(ctx: PredicateContext);
	KW_IS(): antlr.TerminalNode;
	KW_DISTINCT(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class InListContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	KW_IN(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QuantifiedComparisonContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	comparisonOperator(): ComparisonOperatorContext;
	comparisonQuantifier(): ComparisonQuantifierContext;
	subQueryRelation(): SubQueryRelationContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ValueExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ValueExpressionContext): void;
}
export declare class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(ctx: ValueExpressionContext);
	primaryExpression(): PrimaryExpressionContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ConcatenationContext extends ValueExpressionContext {
	_left?: ValueExpressionContext;
	_right?: ValueExpressionContext;
	constructor(ctx: ValueExpressionContext);
	CONCAT(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ArithmeticUnaryContext extends ValueExpressionContext {
	_operator?: Token | null;
	constructor(ctx: ValueExpressionContext);
	valueExpression(): ValueExpressionContext;
	MINUS(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	DOT(): antlr.TerminalNode;
	primaryExpression(): PrimaryExpressionContext;
	identifier(): IdentifierContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TypeConstructorContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext | null;
	stringLiteral(): StringLiteralContext;
	DOUBLE_PRECISION(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_precision?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SubstringContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_SUBSTRING(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_FROM(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CastContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_CAST(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_AS(): antlr.TerminalNode;
	type(): TypeContext;
	RPAREN(): antlr.TerminalNode;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class LambdaContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	RIGHT_ARROW(): antlr.TerminalNode;
	expression(): ExpressionContext;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RPAREN(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class StringLiteralValuesContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	stringLiteral(): StringLiteralContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ParameterContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	QUESTION(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class NormalizeContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_NORMALIZE(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	normalForm(): NormalFormContext | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	interval(): IntervalContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class NumericLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	number(): NumberContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	booleanValue(): BooleanValueContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SimpleCaseContext extends PrimaryExpressionContext {
	_elseExpression?: ExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	KW_CASE(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	KW_END(): antlr.TerminalNode;
	whenClause(): WhenClauseContext[];
	whenClause(i: number): WhenClauseContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class NullLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_NULL(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RowConstructorContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode[];
	KW_AS(i: number): antlr.TerminalNode | null;
	type_(): TypeContext[];
	type_(i: number): TypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SubscriptContext extends PrimaryExpressionContext {
	_value?: PrimaryExpressionContext;
	_index?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	LSQUARE(): antlr.TerminalNode;
	RSQUARE(): antlr.TerminalNode;
	primaryExpression(): PrimaryExpressionContext;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CurrentPathContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_PATH(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	LPAREN(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	RPAREN(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class BinaryLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	BINARY_LITERAL(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CurrentUserContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_USER(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ExtractContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_EXTRACT(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_FROM(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	RPAREN(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ArrayConstructorContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_ARRAY(): antlr.TerminalNode;
	LSQUARE(): antlr.TerminalNode;
	RSQUARE(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	functionNamePath(): FunctionNamePathContext;
	LPAREN(): antlr.TerminalNode;
	ASTERISK(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode;
	filter(): FilterContext | null;
	over(): OverContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	setQuantifier(): SetQuantifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ExistsContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_EXISTS(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	RPAREN(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PositionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_POSITION(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_IN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingOperationContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_GROUPING(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext[];
	qualifiedName(i: number): QualifiedNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: StringLiteralContext): void;
}
export declare class UnicodeStringLiteralContext extends StringLiteralContext {
	constructor(ctx: StringLiteralContext);
	UNICODE_STRING(): antlr.TerminalNode;
	KW_UESCAPE(): antlr.TerminalNode | null;
	STRING(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class BasicStringLiteralContext extends StringLiteralContext {
	constructor(ctx: StringLiteralContext);
	STRING(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class BooleanValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode;
	intervalField(): IntervalFieldContext;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalFieldContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class NormalFormContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NFD(): antlr.TerminalNode | null;
	KW_NFC(): antlr.TerminalNode | null;
	KW_NFKD(): antlr.TerminalNode | null;
	KW_NFKC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ARRAY(): antlr.TerminalNode | null;
	LT(): antlr.TerminalNode | null;
	type_(): TypeContext[];
	type_(i: number): TypeContext | null;
	GT(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	baseType(): BaseTypeContext | null;
	dataType(): DataTypeContext | null;
	LPAREN(): antlr.TerminalNode | null;
	typeParameter(): TypeParameterContext[];
	typeParameter(i: number): TypeParameterContext | null;
	RPAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_COMPLEX(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class TypeParameterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode | null;
	type(): TypeContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class BaseTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	TIME_WITH_TIME_ZONE(): antlr.TerminalNode | null;
	TIMESTAMP_WITH_TIME_ZONE(): antlr.TerminalNode | null;
	DOUBLE_PRECISION(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class FilterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FILTER(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	KW_WHERE(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class OverContext extends antlr.ParserRuleContext {
	_expression?: ExpressionContext;
	_partition: ExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OVER(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	windowFrame(): WindowFrameContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class WindowFrameContext extends antlr.ParserRuleContext {
	_frameType?: Token | null;
	_start_?: FrameBoundContext;
	_end?: FrameBoundContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RANGE(): antlr.TerminalNode | null;
	frameBound(): FrameBoundContext[];
	frameBound(i: number): FrameBoundContext | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UnboundedFrameContext extends FrameBoundContext {
	_boundType?: Token | null;
	constructor(ctx: FrameBoundContext);
	KW_UNBOUNDED(): antlr.TerminalNode;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class CurrentRowBoundContext extends FrameBoundContext {
	constructor(ctx: FrameBoundContext);
	KW_CURRENT(): antlr.TerminalNode;
	KW_ROW(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	DOT(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UnqualifiedArgumentContext extends PathElementContext {
	constructor(ctx: PathElementContext);
	identifier(): IdentifierContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PathSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	pathElement(): PathElementContext[];
	pathElement(i: number): PathElementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeContext extends antlr.ParserRuleContext {
	_columnName?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_REFRESH(): antlr.TerminalNode | null;
	KW_SELECT(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ObjectTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SERVER(): antlr.TerminalNode | null;
	KW_URI(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class PrincipalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PrincipalContext): void;
}
export declare class GroupPrincipalContext extends PrincipalContext {
	constructor(ctx: PrincipalContext);
	KW_GROUP(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class RolePrincipalContext extends PrincipalContext {
	constructor(ctx: PrincipalContext);
	KW_ROLE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UserPrincipalContext extends PrincipalContext {
	constructor(ctx: PrincipalContext);
	KW_USER(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: IdentifierContext): void;
}
export declare class BackQuotedIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	BACKQUOTED_IDENTIFIER(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class QuotedIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	STRING(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DigitIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	DIGIT_IDENTIFIER(): antlr.TerminalNode;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class UnquotedIdentifierContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	IDENTIFIER(): antlr.TerminalNode | null;
	nonReserved(): NonReservedContext | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class DoubleLiteralContext extends NumberContext {
	constructor(ctx: NumberContext);
	DOUBLE_VALUE(): antlr.TerminalNode;
	MINUS(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class IntegerLiteralContext extends NumberContext {
	constructor(ctx: NumberContext);
	INTEGER_VALUE(): antlr.TerminalNode;
	MINUS(): antlr.TerminalNode | null;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_CAST(): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_CASE(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
export declare class NonReservedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BERNOULLI(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_INCLUDING(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_NFC(): antlr.TerminalNode | null;
	KW_NFD(): antlr.TerminalNode | null;
	KW_NFKC(): antlr.TerminalNode | null;
	KW_NFKD(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	KW_PROPERTIES(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_VIEWS(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_ORC(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_SHUTDOWN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: ImpalaSqlParserListener): void;
	exitRule(listener: ImpalaSqlParserListener): void;
	accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null;
}
