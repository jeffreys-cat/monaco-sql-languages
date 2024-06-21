import * as antlr from 'antlr4ng';
import { Token } from 'antlr4ng';
import { SparkSqlParserListener } from './SparkSqlParserListener.js';
import { SparkSqlParserVisitor } from './SparkSqlParserVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class SparkSqlParser extends SQLParserBase {
	static readonly SEMICOLON = 1;
	static readonly LEFT_PAREN = 2;
	static readonly RIGHT_PAREN = 3;
	static readonly COMMA = 4;
	static readonly DOT = 5;
	static readonly LEFT_BRACKET = 6;
	static readonly RIGHT_BRACKET = 7;
	static readonly KW_ADD = 8;
	static readonly KW_AFTER = 9;
	static readonly KW_ALL = 10;
	static readonly KW_ALTER = 11;
	static readonly KW_ALWAYS = 12;
	static readonly KW_ANALYZE = 13;
	static readonly KW_AND = 14;
	static readonly KW_ANTI = 15;
	static readonly KW_ANY = 16;
	static readonly KW_ANY_VALUE = 17;
	static readonly KW_ARCHIVE = 18;
	static readonly KW_ARRAY = 19;
	static readonly KW_AS = 20;
	static readonly KW_ASC = 21;
	static readonly KW_AT = 22;
	static readonly KW_AUTHORIZATION = 23;
	static readonly KW_BETWEEN = 24;
	static readonly KW_BIGINT = 25;
	static readonly KW_BINARY = 26;
	static readonly KW_BOOLEAN = 27;
	static readonly KW_BOTH = 28;
	static readonly KW_BUCKET = 29;
	static readonly KW_BUCKETS = 30;
	static readonly KW_BY = 31;
	static readonly KW_BYTE = 32;
	static readonly KW_CACHE = 33;
	static readonly KW_CASCADE = 34;
	static readonly KW_CASE = 35;
	static readonly KW_CAST = 36;
	static readonly KW_CATALOG = 37;
	static readonly KW_CATALOGS = 38;
	static readonly KW_CHANGE = 39;
	static readonly KW_CHAR = 40;
	static readonly KW_CHARACTER = 41;
	static readonly KW_CHECK = 42;
	static readonly KW_CLEAR = 43;
	static readonly KW_CLUSTER = 44;
	static readonly KW_CLUSTERED = 45;
	static readonly KW_CODEGEN = 46;
	static readonly KW_COLLATE = 47;
	static readonly KW_COLLECTION = 48;
	static readonly KW_COLUMN = 49;
	static readonly KW_COLUMNS = 50;
	static readonly KW_COMMENT = 51;
	static readonly KW_COMMIT = 52;
	static readonly KW_COMPACT = 53;
	static readonly KW_COMPACTIONS = 54;
	static readonly KW_COMPUTE = 55;
	static readonly KW_CONCATENATE = 56;
	static readonly KW_CONSTRAINT = 57;
	static readonly KW_COST = 58;
	static readonly KW_CREATE = 59;
	static readonly KW_CROSS = 60;
	static readonly KW_CUBE = 61;
	static readonly KW_CURRENT = 62;
	static readonly KW_CURRENT_DATE = 63;
	static readonly KW_CURRENT_TIME = 64;
	static readonly KW_CURRENT_TIMESTAMP = 65;
	static readonly KW_CURRENT_USER = 66;
	static readonly KW_DAY = 67;
	static readonly KW_DAYS = 68;
	static readonly KW_DAYOFYEAR = 69;
	static readonly KW_DATA = 70;
	static readonly KW_DATE = 71;
	static readonly KW_DATABASE = 72;
	static readonly KW_DATABASES = 73;
	static readonly KW_DATEADD = 74;
	static readonly KW_DATE_ADD = 75;
	static readonly KW_DATEDIFF = 76;
	static readonly KW_DATE_DIFF = 77;
	static readonly KW_DBPROPERTIES = 78;
	static readonly KW_DEC = 79;
	static readonly KW_DECIMAL = 80;
	static readonly KW_DECLARE = 81;
	static readonly KW_DEFAULT = 82;
	static readonly KW_DEFINED = 83;
	static readonly KW_DELETE = 84;
	static readonly KW_DELIMITED = 85;
	static readonly KW_DESC = 86;
	static readonly KW_DESCRIBE = 87;
	static readonly KW_DFS = 88;
	static readonly KW_DIRECTORIES = 89;
	static readonly KW_DIRECTORY = 90;
	static readonly KW_DISABLE = 91;
	static readonly KW_DISTINCT = 92;
	static readonly KW_DISTRIBUTE = 93;
	static readonly KW_DIV = 94;
	static readonly KW_DOUBLE = 95;
	static readonly KW_DROP = 96;
	static readonly KW_ELSE = 97;
	static readonly KW_ENABLE = 98;
	static readonly KW_END = 99;
	static readonly KW_ESCAPE = 100;
	static readonly KW_ESCAPED = 101;
	static readonly KW_EXCEPT = 102;
	static readonly KW_EXCHANGE = 103;
	static readonly KW_EXCLUDE = 104;
	static readonly KW_EXISTS = 105;
	static readonly KW_EXPLAIN = 106;
	static readonly KW_EXPORT = 107;
	static readonly KW_EXTENDED = 108;
	static readonly KW_EXTERNAL = 109;
	static readonly KW_EXTRACT = 110;
	static readonly KW_FALSE = 111;
	static readonly KW_FETCH = 112;
	static readonly KW_FIELDS = 113;
	static readonly KW_FILTER = 114;
	static readonly KW_FILEFORMAT = 115;
	static readonly KW_FIRST = 116;
	static readonly KW_FLOAT = 117;
	static readonly KW_FOLLOWING = 118;
	static readonly KW_FOR = 119;
	static readonly KW_FOREIGN = 120;
	static readonly KW_FORMAT = 121;
	static readonly KW_FORMATTED = 122;
	static readonly KW_FROM = 123;
	static readonly KW_FULL = 124;
	static readonly KW_FUNCTION = 125;
	static readonly KW_FUNCTIONS = 126;
	static readonly KW_GENERATED = 127;
	static readonly KW_GLOBAL = 128;
	static readonly KW_GRANT = 129;
	static readonly KW_GROUP = 130;
	static readonly KW_GROUPING = 131;
	static readonly KW_HAVING = 132;
	static readonly KW_BINARY_HEX = 133;
	static readonly KW_HOUR = 134;
	static readonly KW_HOURS = 135;
	static readonly KW_IDENTIFIER = 136;
	static readonly KW_IF = 137;
	static readonly KW_IGNORE = 138;
	static readonly KW_IMPORT = 139;
	static readonly KW_IN = 140;
	static readonly KW_INCLUDE = 141;
	static readonly KW_INDEX = 142;
	static readonly KW_INDEXES = 143;
	static readonly KW_INNER = 144;
	static readonly KW_INPATH = 145;
	static readonly KW_INPUTFORMAT = 146;
	static readonly KW_INSERT = 147;
	static readonly KW_INTERSECT = 148;
	static readonly KW_INTERVAL = 149;
	static readonly KW_INT = 150;
	static readonly KW_INTEGER = 151;
	static readonly KW_INTO = 152;
	static readonly KW_IS = 153;
	static readonly KW_ITEMS = 154;
	static readonly KW_JOIN = 155;
	static readonly KW_KEYS = 156;
	static readonly KW_LAST = 157;
	static readonly KW_LATERAL = 158;
	static readonly KW_LAZY = 159;
	static readonly KW_LEADING = 160;
	static readonly KW_LEFT = 161;
	static readonly KW_LIFECYCLE = 162;
	static readonly KW_LIKE = 163;
	static readonly KW_ILIKE = 164;
	static readonly KW_LIMIT = 165;
	static readonly KW_LINES = 166;
	static readonly KW_LIST = 167;
	static readonly KW_LOAD = 168;
	static readonly KW_LOCAL = 169;
	static readonly KW_LOCATION = 170;
	static readonly KW_LOCK = 171;
	static readonly KW_LOCKS = 172;
	static readonly KW_LOGICAL = 173;
	static readonly KW_LONG = 174;
	static readonly KW_MACRO = 175;
	static readonly KW_MATERIALIZED = 176;
	static readonly KW_MAP = 177;
	static readonly KW_MATCHED = 178;
	static readonly KW_MERGE = 179;
	static readonly KW_MICROSECOND = 180;
	static readonly KW_MICROSECONDS = 181;
	static readonly KW_MILLISECOND = 182;
	static readonly KW_MILLISECONDS = 183;
	static readonly KW_MINUTE = 184;
	static readonly KW_MINUTES = 185;
	static readonly KW_MONTH = 186;
	static readonly KW_MONTHS = 187;
	static readonly KW_MSCK = 188;
	static readonly KW_NAME = 189;
	static readonly KW_NAMESPACE = 190;
	static readonly KW_NAMESPACES = 191;
	static readonly KW_NANOSECOND = 192;
	static readonly KW_NANOSECONDS = 193;
	static readonly KW_NATURAL = 194;
	static readonly KW_NO = 195;
	static readonly KW_NOSCAN = 196;
	static readonly KW_NOT = 197;
	static readonly KW_NULL = 198;
	static readonly KW_NULLS = 199;
	static readonly KW_NUMERIC = 200;
	static readonly KW_OF = 201;
	static readonly KW_OFFSET = 202;
	static readonly KW_ON = 203;
	static readonly KW_ONLY = 204;
	static readonly KW_OPTIMIZE = 205;
	static readonly KW_OPTION = 206;
	static readonly KW_OPTIONS = 207;
	static readonly KW_OR = 208;
	static readonly KW_ORDER = 209;
	static readonly KW_OUT = 210;
	static readonly KW_OUTER = 211;
	static readonly KW_OUTPUTFORMAT = 212;
	static readonly KW_OVER = 213;
	static readonly KW_OVERLAPS = 214;
	static readonly KW_OVERLAY = 215;
	static readonly KW_OVERWRITE = 216;
	static readonly KW_PARTITION = 217;
	static readonly KW_PARTITIONED = 218;
	static readonly KW_PARTITIONS = 219;
	static readonly KW_PERCENTILE_CONT = 220;
	static readonly KW_PERCENTILE_DISC = 221;
	static readonly KW_PERCENTLIT = 222;
	static readonly KW_PIVOT = 223;
	static readonly KW_PLACING = 224;
	static readonly KW_POSITION = 225;
	static readonly KW_PRECEDING = 226;
	static readonly KW_PRIMARY = 227;
	static readonly KW_PRINCIPALS = 228;
	static readonly KW_PROPERTIES = 229;
	static readonly KW_PURGE = 230;
	static readonly KW_QUARTER = 231;
	static readonly KW_QUERY = 232;
	static readonly KW_RANGE = 233;
	static readonly KW_REAL = 234;
	static readonly KW_RECORDREADER = 235;
	static readonly KW_RECORDWRITER = 236;
	static readonly KW_RECOVER = 237;
	static readonly KW_REDUCE = 238;
	static readonly KW_REFERENCES = 239;
	static readonly KW_REFRESH = 240;
	static readonly KW_RENAME = 241;
	static readonly KW_REPAIR = 242;
	static readonly KW_REPEATABLE = 243;
	static readonly KW_REPLACE = 244;
	static readonly KW_RESET = 245;
	static readonly KW_RESPECT = 246;
	static readonly KW_RESTRICT = 247;
	static readonly KW_REWRITE = 248;
	static readonly KW_REVOKE = 249;
	static readonly KW_RIGHT = 250;
	static readonly KW_RLIKE = 251;
	static readonly KW_REGEXP = 252;
	static readonly KW_ROLE = 253;
	static readonly KW_ROLES = 254;
	static readonly KW_ROLLBACK = 255;
	static readonly KW_ROLLUP = 256;
	static readonly KW_ROW = 257;
	static readonly KW_ROWS = 258;
	static readonly KW_SECOND = 259;
	static readonly KW_SECONDS = 260;
	static readonly KW_SCHEMA = 261;
	static readonly KW_SCHEMAS = 262;
	static readonly KW_SELECT = 263;
	static readonly KW_SEMI = 264;
	static readonly KW_SEPARATED = 265;
	static readonly KW_SERDE = 266;
	static readonly KW_SERDEPROPERTIES = 267;
	static readonly KW_SESSION_USER = 268;
	static readonly KW_SET = 269;
	static readonly KW_MINUS = 270;
	static readonly KW_SETS = 271;
	static readonly KW_SHORT = 272;
	static readonly KW_SHOW = 273;
	static readonly KW_SINGLE = 274;
	static readonly KW_SKEWED = 275;
	static readonly KW_SMALLINT = 276;
	static readonly KW_SOME = 277;
	static readonly KW_SORT = 278;
	static readonly KW_SORTED = 279;
	static readonly KW_SOURCE = 280;
	static readonly KW_START = 281;
	static readonly KW_STATISTICS = 282;
	static readonly KW_STORED = 283;
	static readonly KW_STRATIFY = 284;
	static readonly KW_STRING = 285;
	static readonly KW_STRUCT = 286;
	static readonly KW_SUBSTR = 287;
	static readonly KW_SUBSTRING = 288;
	static readonly KW_SYNC = 289;
	static readonly KW_SYSTEM = 290;
	static readonly KW_SYSTEM_TIME = 291;
	static readonly KW_SYSTEM_VERSION = 292;
	static readonly KW_TABLE = 293;
	static readonly KW_TABLES = 294;
	static readonly KW_TABLESAMPLE = 295;
	static readonly KW_TARGET = 296;
	static readonly KW_TBLPROPERTIES = 297;
	static readonly KW_TEMPORARY = 298;
	static readonly KW_TERMINATED = 299;
	static readonly KW_THEN = 300;
	static readonly KW_TIME = 301;
	static readonly KW_TIMEDIFF = 302;
	static readonly KW_TIMESTAMP = 303;
	static readonly KW_TIMESTAMP_LTZ = 304;
	static readonly KW_TIMESTAMP_NTZ = 305;
	static readonly KW_TIMESTAMPADD = 306;
	static readonly KW_TIMESTAMPDIFF = 307;
	static readonly KW_TINYINT = 308;
	static readonly KW_TO = 309;
	static readonly KW_TOUCH = 310;
	static readonly KW_TRAILING = 311;
	static readonly KW_TRANSACTION = 312;
	static readonly KW_TRANSACTIONS = 313;
	static readonly KW_TRANSFORM = 314;
	static readonly KW_TRIM = 315;
	static readonly KW_TRUE = 316;
	static readonly KW_TRUNCATE = 317;
	static readonly KW_TRY_CAST = 318;
	static readonly KW_TYPE = 319;
	static readonly KW_UNARCHIVE = 320;
	static readonly KW_UNBOUNDED = 321;
	static readonly KW_UNCACHE = 322;
	static readonly KW_UNION = 323;
	static readonly KW_UNIQUE = 324;
	static readonly KW_UNKNOWN = 325;
	static readonly KW_UNLOCK = 326;
	static readonly KW_UNPIVOT = 327;
	static readonly KW_UNSET = 328;
	static readonly KW_UPDATE = 329;
	static readonly KW_USE = 330;
	static readonly KW_USER = 331;
	static readonly KW_USING = 332;
	static readonly KW_VALUES = 333;
	static readonly KW_VARCHAR = 334;
	static readonly KW_VAR = 335;
	static readonly KW_VARIABLE = 336;
	static readonly KW_VERSION = 337;
	static readonly KW_VIEW = 338;
	static readonly KW_VIEWS = 339;
	static readonly KW_VOID = 340;
	static readonly KW_WEEK = 341;
	static readonly KW_WEEKS = 342;
	static readonly KW_WHEN = 343;
	static readonly KW_WHERE = 344;
	static readonly KW_WINDOW = 345;
	static readonly KW_WITH = 346;
	static readonly KW_WITHIN = 347;
	static readonly KW_YEAR = 348;
	static readonly KW_YEARS = 349;
	static readonly KW_ZONE = 350;
	static readonly KW_ZORDER = 351;
	static readonly EQ = 352;
	static readonly NSEQ = 353;
	static readonly NEQ = 354;
	static readonly NEQJ = 355;
	static readonly LT = 356;
	static readonly LTE = 357;
	static readonly GT = 358;
	static readonly GTE = 359;
	static readonly NOT = 360;
	static readonly PLUS = 361;
	static readonly MINUS = 362;
	static readonly ASTERISK = 363;
	static readonly SLASH = 364;
	static readonly PERCENT = 365;
	static readonly TILDE = 366;
	static readonly AMPERSAND = 367;
	static readonly PIPE = 368;
	static readonly CONCAT_PIPE = 369;
	static readonly HAT = 370;
	static readonly COLON = 371;
	static readonly ARROW = 372;
	static readonly FAT_ARROW = 373;
	static readonly HENT_START = 374;
	static readonly HENT_END = 375;
	static readonly QUESTION = 376;
	static readonly STRING_LITERAL = 377;
	static readonly DOUBLEQUOTED_STRING = 378;
	static readonly BIGINT_LITERAL = 379;
	static readonly SMALLINT_LITERAL = 380;
	static readonly TINYINT_LITERAL = 381;
	static readonly INTEGER_VALUE = 382;
	static readonly EXPONENT_VALUE = 383;
	static readonly DECIMAL_VALUE = 384;
	static readonly FLOAT_LITERAL = 385;
	static readonly DOUBLE_LITERAL = 386;
	static readonly BIGDECIMAL_LITERAL = 387;
	static readonly IDENTIFIER = 388;
	static readonly BACKQUOTED_IDENTIFIER = 389;
	static readonly SIMPLE_COMMENT = 390;
	static readonly BRACKETED_COMMENT = 391;
	static readonly WS = 392;
	static readonly UNRECOGNIZED = 393;
	static readonly RULE_program = 0;
	static readonly RULE_singleStatement = 1;
	static readonly RULE_statement = 2;
	static readonly RULE_timezone = 3;
	static readonly RULE_configKey = 4;
	static readonly RULE_configValue = 5;
	static readonly RULE_unsupportedHiveNativeCommands = 6;
	static readonly RULE_createTableHeader = 7;
	static readonly RULE_replaceTableHeader = 8;
	static readonly RULE_bucketSpec = 9;
	static readonly RULE_skewSpec = 10;
	static readonly RULE_locationSpec = 11;
	static readonly RULE_commentSpec = 12;
	static readonly RULE_query = 13;
	static readonly RULE_insertInto = 14;
	static readonly RULE_partitionSpecLocation = 15;
	static readonly RULE_partitionSpec = 16;
	static readonly RULE_partitionVal = 17;
	static readonly RULE_namespace = 18;
	static readonly RULE_namespaces = 19;
	static readonly RULE_describeFuncName = 20;
	static readonly RULE_describeColName = 21;
	static readonly RULE_ctes = 22;
	static readonly RULE_namedQuery = 23;
	static readonly RULE_tableProvider = 24;
	static readonly RULE_createTableClauses = 25;
	static readonly RULE_tableLifecycle = 26;
	static readonly RULE_propertyList = 27;
	static readonly RULE_property = 28;
	static readonly RULE_propertyKey = 29;
	static readonly RULE_propertyValue = 30;
	static readonly RULE_expressionPropertyList = 31;
	static readonly RULE_expressionProperty = 32;
	static readonly RULE_constantList = 33;
	static readonly RULE_nestedConstantList = 34;
	static readonly RULE_createFileFormat = 35;
	static readonly RULE_fileFormat = 36;
	static readonly RULE_storageHandler = 37;
	static readonly RULE_resource = 38;
	static readonly RULE_dmlStatementNoWith = 39;
	static readonly RULE_namespaceName = 40;
	static readonly RULE_namespaceNameCreate = 41;
	static readonly RULE_tableNameCreate = 42;
	static readonly RULE_tableName = 43;
	static readonly RULE_viewNameCreate = 44;
	static readonly RULE_viewName = 45;
	static readonly RULE_columnName = 46;
	static readonly RULE_columnNameSeq = 47;
	static readonly RULE_columnNameCreate = 48;
	static readonly RULE_identifierReference = 49;
	static readonly RULE_queryOrganization = 50;
	static readonly RULE_multiInsertQueryBody = 51;
	static readonly RULE_queryTerm = 52;
	static readonly RULE_queryPrimary = 53;
	static readonly RULE_sortItem = 54;
	static readonly RULE_fromStatement = 55;
	static readonly RULE_fromStatementBody = 56;
	static readonly RULE_querySpecification = 57;
	static readonly RULE_transformClause = 58;
	static readonly RULE_selectClause = 59;
	static readonly RULE_setClause = 60;
	static readonly RULE_matchedClause = 61;
	static readonly RULE_notMatchedClause = 62;
	static readonly RULE_notMatchedBySourceClause = 63;
	static readonly RULE_matchedAction = 64;
	static readonly RULE_notMatchedAction = 65;
	static readonly RULE_notMatchedBySourceAction = 66;
	static readonly RULE_assignmentList = 67;
	static readonly RULE_assignment = 68;
	static readonly RULE_whereClause = 69;
	static readonly RULE_havingClause = 70;
	static readonly RULE_hint = 71;
	static readonly RULE_hintStatement = 72;
	static readonly RULE_fromClause = 73;
	static readonly RULE_functionKind = 74;
	static readonly RULE_temporalClause = 75;
	static readonly RULE_aggregationClause = 76;
	static readonly RULE_groupByClause = 77;
	static readonly RULE_groupingAnalytics = 78;
	static readonly RULE_groupingElement = 79;
	static readonly RULE_groupingSet = 80;
	static readonly RULE_pivotClause = 81;
	static readonly RULE_pivotColumn = 82;
	static readonly RULE_pivotValue = 83;
	static readonly RULE_unpivotClause = 84;
	static readonly RULE_unpivotNullClause = 85;
	static readonly RULE_unpivotOperator = 86;
	static readonly RULE_unpivotSingleValueColumnClause = 87;
	static readonly RULE_unpivotMultiValueColumnClause = 88;
	static readonly RULE_unpivotColumnSet = 89;
	static readonly RULE_unpivotValueColumn = 90;
	static readonly RULE_unpivotNameColumn = 91;
	static readonly RULE_unpivotColumnAndAlias = 92;
	static readonly RULE_unpivotColumn = 93;
	static readonly RULE_unpivotAlias = 94;
	static readonly RULE_ifNotExists = 95;
	static readonly RULE_ifExists = 96;
	static readonly RULE_lateralView = 97;
	static readonly RULE_setQuantifier = 98;
	static readonly RULE_relation = 99;
	static readonly RULE_relationExtension = 100;
	static readonly RULE_joinRelation = 101;
	static readonly RULE_joinType = 102;
	static readonly RULE_joinCriteria = 103;
	static readonly RULE_sample = 104;
	static readonly RULE_sampleMethod = 105;
	static readonly RULE_identifierList = 106;
	static readonly RULE_identifierSeq = 107;
	static readonly RULE_orderedIdentifierList = 108;
	static readonly RULE_orderedIdentifier = 109;
	static readonly RULE_identifierCommentList = 110;
	static readonly RULE_identifierComment = 111;
	static readonly RULE_relationPrimary = 112;
	static readonly RULE_inlineTable = 113;
	static readonly RULE_functionTableSubqueryArgument = 114;
	static readonly RULE_tableArgumentPartitioning = 115;
	static readonly RULE_functionTableNamedArgumentExpression = 116;
	static readonly RULE_functionTableReferenceArgument = 117;
	static readonly RULE_functionTableArgument = 118;
	static readonly RULE_functionTable = 119;
	static readonly RULE_tableAlias = 120;
	static readonly RULE_rowFormat = 121;
	static readonly RULE_multipartIdentifierList = 122;
	static readonly RULE_multipartIdentifier = 123;
	static readonly RULE_multipartIdentifierPropertyList = 124;
	static readonly RULE_multipartIdentifierProperty = 125;
	static readonly RULE_tableIdentifier = 126;
	static readonly RULE_viewIdentifier = 127;
	static readonly RULE_namedExpression = 128;
	static readonly RULE_namedExpressionSeq = 129;
	static readonly RULE_partitionFieldList = 130;
	static readonly RULE_partitionField = 131;
	static readonly RULE_transform = 132;
	static readonly RULE_transformArgument = 133;
	static readonly RULE_expression = 134;
	static readonly RULE_namedArgumentExpression = 135;
	static readonly RULE_functionArgument = 136;
	static readonly RULE_expressionSeq = 137;
	static readonly RULE_booleanExpression = 138;
	static readonly RULE_predicate = 139;
	static readonly RULE_valueExpression = 140;
	static readonly RULE_datetimeUnit = 141;
	static readonly RULE_primaryExpression = 142;
	static readonly RULE_literalType = 143;
	static readonly RULE_constant = 144;
	static readonly RULE_comparisonOperator = 145;
	static readonly RULE_arithmeticOperator = 146;
	static readonly RULE_predicateOperator = 147;
	static readonly RULE_booleanValue = 148;
	static readonly RULE_interval = 149;
	static readonly RULE_errorCapturingMultiUnitsInterval = 150;
	static readonly RULE_multiUnitsInterval = 151;
	static readonly RULE_errorCapturingUnitToUnitInterval = 152;
	static readonly RULE_unitToUnitInterval = 153;
	static readonly RULE_intervalValue = 154;
	static readonly RULE_unitInMultiUnits = 155;
	static readonly RULE_unitInUnitToUnit = 156;
	static readonly RULE_colPosition = 157;
	static readonly RULE_type = 158;
	static readonly RULE_dataType = 159;
	static readonly RULE_qualifiedColTypeWithPositionSeqForAdd = 160;
	static readonly RULE_qualifiedColTypeWithPositionForAdd = 161;
	static readonly RULE_qualifiedColTypeWithPositionSeqForReplace = 162;
	static readonly RULE_qualifiedColTypeWithPositionForReplace = 163;
	static readonly RULE_colDefinitionDescriptorWithPosition = 164;
	static readonly RULE_defaultExpression = 165;
	static readonly RULE_variableDefaultExpression = 166;
	static readonly RULE_colTypeList = 167;
	static readonly RULE_colType = 168;
	static readonly RULE_createOrReplaceTableColTypeList = 169;
	static readonly RULE_createOrReplaceTableColType = 170;
	static readonly RULE_colDefinitionOption = 171;
	static readonly RULE_generationExpression = 172;
	static readonly RULE_complexColTypeList = 173;
	static readonly RULE_complexColType = 174;
	static readonly RULE_whenClause = 175;
	static readonly RULE_windowClause = 176;
	static readonly RULE_zorderClause = 177;
	static readonly RULE_namedWindow = 178;
	static readonly RULE_windowSpec = 179;
	static readonly RULE_windowFrame = 180;
	static readonly RULE_frameBound = 181;
	static readonly RULE_qualifiedNameList = 182;
	static readonly RULE_functionName = 183;
	static readonly RULE_functionNameCreate = 184;
	static readonly RULE_qualifiedName = 185;
	static readonly RULE_errorCapturingIdentifier = 186;
	static readonly RULE_errorCapturingIdentifierExtra = 187;
	static readonly RULE_identifier = 188;
	static readonly RULE_strictIdentifier = 189;
	static readonly RULE_quotedIdentifier = 190;
	static readonly RULE_backQuotedIdentifier = 191;
	static readonly RULE_number = 192;
	static readonly RULE_alterColumnAction = 193;
	static readonly RULE_stringLit = 194;
	static readonly RULE_comment = 195;
	static readonly RULE_version = 196;
	static readonly RULE_ansiNonReserved = 197;
	static readonly RULE_strictNonReserved = 198;
	static readonly RULE_nonReserved = 199;
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
	statement(): StatementContext;
	timezone(): TimezoneContext;
	configKey(): ConfigKeyContext;
	configValue(): ConfigValueContext;
	unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext;
	createTableHeader(): CreateTableHeaderContext;
	replaceTableHeader(): ReplaceTableHeaderContext;
	bucketSpec(): BucketSpecContext;
	skewSpec(): SkewSpecContext;
	locationSpec(): LocationSpecContext;
	commentSpec(): CommentSpecContext;
	query(): QueryContext;
	insertInto(): InsertIntoContext;
	partitionSpecLocation(): PartitionSpecLocationContext;
	partitionSpec(): PartitionSpecContext;
	partitionVal(): PartitionValContext;
	namespace(): NamespaceContext;
	namespaces(): NamespacesContext;
	describeFuncName(): DescribeFuncNameContext;
	describeColName(): DescribeColNameContext;
	ctes(): CtesContext;
	namedQuery(): NamedQueryContext;
	tableProvider(): TableProviderContext;
	createTableClauses(): CreateTableClausesContext;
	tableLifecycle(): TableLifecycleContext;
	propertyList(): PropertyListContext;
	property(): PropertyContext;
	propertyKey(): PropertyKeyContext;
	propertyValue(): PropertyValueContext;
	expressionPropertyList(): ExpressionPropertyListContext;
	expressionProperty(): ExpressionPropertyContext;
	constantList(): ConstantListContext;
	nestedConstantList(): NestedConstantListContext;
	createFileFormat(): CreateFileFormatContext;
	fileFormat(): FileFormatContext;
	storageHandler(): StorageHandlerContext;
	resource(): ResourceContext;
	dmlStatementNoWith(): DmlStatementNoWithContext;
	namespaceName(): NamespaceNameContext;
	namespaceNameCreate(): NamespaceNameCreateContext;
	tableNameCreate(): TableNameCreateContext;
	tableName(): TableNameContext;
	viewNameCreate(): ViewNameCreateContext;
	viewName(): ViewNameContext;
	columnName(): ColumnNameContext;
	columnNameSeq(): ColumnNameSeqContext;
	columnNameCreate(): ColumnNameCreateContext;
	identifierReference(): IdentifierReferenceContext;
	queryOrganization(): QueryOrganizationContext;
	multiInsertQueryBody(): MultiInsertQueryBodyContext;
	queryTerm(): QueryTermContext;
	queryTerm(_p: number): QueryTermContext;
	queryPrimary(): QueryPrimaryContext;
	sortItem(): SortItemContext;
	fromStatement(): FromStatementContext;
	fromStatementBody(): FromStatementBodyContext;
	querySpecification(): QuerySpecificationContext;
	transformClause(): TransformClauseContext;
	selectClause(): SelectClauseContext;
	setClause(): SetClauseContext;
	matchedClause(): MatchedClauseContext;
	notMatchedClause(): NotMatchedClauseContext;
	notMatchedBySourceClause(): NotMatchedBySourceClauseContext;
	matchedAction(): MatchedActionContext;
	notMatchedAction(): NotMatchedActionContext;
	notMatchedBySourceAction(): NotMatchedBySourceActionContext;
	assignmentList(): AssignmentListContext;
	assignment(): AssignmentContext;
	whereClause(): WhereClauseContext;
	havingClause(): HavingClauseContext;
	hint(): HintContext;
	hintStatement(): HintStatementContext;
	fromClause(): FromClauseContext;
	functionKind(): FunctionKindContext;
	temporalClause(): TemporalClauseContext;
	aggregationClause(): AggregationClauseContext;
	groupByClause(): GroupByClauseContext;
	groupingAnalytics(): GroupingAnalyticsContext;
	groupingElement(): GroupingElementContext;
	groupingSet(): GroupingSetContext;
	pivotClause(): PivotClauseContext;
	pivotColumn(): PivotColumnContext;
	pivotValue(): PivotValueContext;
	unpivotClause(): UnpivotClauseContext;
	unpivotNullClause(): UnpivotNullClauseContext;
	unpivotOperator(): UnpivotOperatorContext;
	unpivotSingleValueColumnClause(): UnpivotSingleValueColumnClauseContext;
	unpivotMultiValueColumnClause(): UnpivotMultiValueColumnClauseContext;
	unpivotColumnSet(): UnpivotColumnSetContext;
	unpivotValueColumn(): UnpivotValueColumnContext;
	unpivotNameColumn(): UnpivotNameColumnContext;
	unpivotColumnAndAlias(): UnpivotColumnAndAliasContext;
	unpivotColumn(): UnpivotColumnContext;
	unpivotAlias(): UnpivotAliasContext;
	ifNotExists(): IfNotExistsContext;
	ifExists(): IfExistsContext;
	lateralView(): LateralViewContext;
	setQuantifier(): SetQuantifierContext;
	relation(): RelationContext;
	relationExtension(): RelationExtensionContext;
	joinRelation(): JoinRelationContext;
	joinType(): JoinTypeContext;
	joinCriteria(): JoinCriteriaContext;
	sample(): SampleContext;
	sampleMethod(): SampleMethodContext;
	identifierList(): IdentifierListContext;
	identifierSeq(): IdentifierSeqContext;
	orderedIdentifierList(): OrderedIdentifierListContext;
	orderedIdentifier(): OrderedIdentifierContext;
	identifierCommentList(): IdentifierCommentListContext;
	identifierComment(): IdentifierCommentContext;
	relationPrimary(): RelationPrimaryContext;
	inlineTable(): InlineTableContext;
	functionTableSubqueryArgument(): FunctionTableSubqueryArgumentContext;
	tableArgumentPartitioning(): TableArgumentPartitioningContext;
	functionTableNamedArgumentExpression(): FunctionTableNamedArgumentExpressionContext;
	functionTableReferenceArgument(): FunctionTableReferenceArgumentContext;
	functionTableArgument(): FunctionTableArgumentContext;
	functionTable(): FunctionTableContext;
	tableAlias(): TableAliasContext;
	rowFormat(): RowFormatContext;
	multipartIdentifierList(): MultipartIdentifierListContext;
	multipartIdentifier(): MultipartIdentifierContext;
	multipartIdentifierPropertyList(): MultipartIdentifierPropertyListContext;
	multipartIdentifierProperty(): MultipartIdentifierPropertyContext;
	tableIdentifier(): TableIdentifierContext;
	viewIdentifier(): ViewIdentifierContext;
	namedExpression(): NamedExpressionContext;
	namedExpressionSeq(): NamedExpressionSeqContext;
	partitionFieldList(): PartitionFieldListContext;
	partitionField(): PartitionFieldContext;
	transform(): TransformContext;
	transformArgument(): TransformArgumentContext;
	expression(): ExpressionContext;
	namedArgumentExpression(): NamedArgumentExpressionContext;
	functionArgument(): FunctionArgumentContext;
	expressionSeq(): ExpressionSeqContext;
	booleanExpression(): BooleanExpressionContext;
	booleanExpression(_p: number): BooleanExpressionContext;
	predicate(): PredicateContext;
	valueExpression(): ValueExpressionContext;
	valueExpression(_p: number): ValueExpressionContext;
	datetimeUnit(): DatetimeUnitContext;
	primaryExpression(): PrimaryExpressionContext;
	primaryExpression(_p: number): PrimaryExpressionContext;
	literalType(): LiteralTypeContext;
	constant(): ConstantContext;
	comparisonOperator(): ComparisonOperatorContext;
	arithmeticOperator(): ArithmeticOperatorContext;
	predicateOperator(): PredicateOperatorContext;
	booleanValue(): BooleanValueContext;
	interval(): IntervalContext;
	errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext;
	multiUnitsInterval(): MultiUnitsIntervalContext;
	errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext;
	unitToUnitInterval(): UnitToUnitIntervalContext;
	intervalValue(): IntervalValueContext;
	unitInMultiUnits(): UnitInMultiUnitsContext;
	unitInUnitToUnit(): UnitInUnitToUnitContext;
	colPosition(): ColPositionContext;
	type_(): TypeContext;
	dataType(): DataTypeContext;
	qualifiedColTypeWithPositionSeqForAdd(): QualifiedColTypeWithPositionSeqForAddContext;
	qualifiedColTypeWithPositionForAdd(): QualifiedColTypeWithPositionForAddContext;
	qualifiedColTypeWithPositionSeqForReplace(): QualifiedColTypeWithPositionSeqForReplaceContext;
	qualifiedColTypeWithPositionForReplace(): QualifiedColTypeWithPositionForReplaceContext;
	colDefinitionDescriptorWithPosition(): ColDefinitionDescriptorWithPositionContext;
	defaultExpression(): DefaultExpressionContext;
	variableDefaultExpression(): VariableDefaultExpressionContext;
	colTypeList(): ColTypeListContext;
	colType(): ColTypeContext;
	createOrReplaceTableColTypeList(): CreateOrReplaceTableColTypeListContext;
	createOrReplaceTableColType(): CreateOrReplaceTableColTypeContext;
	colDefinitionOption(): ColDefinitionOptionContext;
	generationExpression(): GenerationExpressionContext;
	complexColTypeList(): ComplexColTypeListContext;
	complexColType(): ComplexColTypeContext;
	whenClause(): WhenClauseContext;
	windowClause(): WindowClauseContext;
	zorderClause(): ZorderClauseContext;
	namedWindow(): NamedWindowContext;
	windowSpec(): WindowSpecContext;
	windowFrame(): WindowFrameContext;
	frameBound(): FrameBoundContext;
	qualifiedNameList(): QualifiedNameListContext;
	functionName(): FunctionNameContext;
	functionNameCreate(): FunctionNameCreateContext;
	qualifiedName(): QualifiedNameContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
	identifier(): IdentifierContext;
	strictIdentifier(): StrictIdentifierContext;
	quotedIdentifier(): QuotedIdentifierContext;
	backQuotedIdentifier(): BackQuotedIdentifierContext;
	number_(): NumberContext;
	alterColumnAction(): AlterColumnActionContext;
	stringLit(): StringLitContext;
	comment(): CommentContext;
	version(): VersionContext;
	ansiNonReserved(): AnsiNonReservedContext;
	strictNonReserved(): StrictNonReservedContext;
	nonReserved(): NonReservedContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
	private columnName_sempred;
	private queryTerm_sempred;
	private booleanExpression_sempred;
	private valueExpression_sempred;
	private primaryExpression_sempred;
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
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	statement(): StatementContext;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class StatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: StatementContext): void;
}
export declare class ResetAnyContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_RESET(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableDropColumnContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_DROP(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropMaterializedViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterViewQueryContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	query(): QueryContext;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropNamespaceContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	namespace(): NamespaceContext;
	namespaceName(): NamespaceNameContext;
	ifExists(): IfExistsContext | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTempViewUsingContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TEMPORARY(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNameCreate(): ViewNameCreateContext;
	tableProvider(): TableProviderContext;
	KW_OR(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	colTypeList(): ColTypeListContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	propertyList(): PropertyListContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RenameTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	viewName(): ViewNameContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DeclareVariableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DECLARE(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	KW_OR(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_VARIABLE(): antlr.TerminalNode | null;
	dataType(): DataTypeContext | null;
	variableDefaultExpression(): VariableDefaultExpressionContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FailNativeCommandContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetCatalogContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_CATALOG(): antlr.TerminalNode;
	identifier(): IdentifierContext | null;
	stringLit(): StringLitContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterMaterializedViewPropertiesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	KW_SET(): antlr.TerminalNode;
	KW_TBLPROPERTIES(): antlr.TerminalNode;
	propertyList(): PropertyListContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ClearCacheContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CLEAR(): antlr.TerminalNode;
	KW_CACHE(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowTablesContext extends StatementContext {
	_pattern?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_TABLES(): antlr.TerminalNode;
	namespaceName(): NamespaceNameContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RecoverPartitionsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_RECOVER(): antlr.TerminalNode;
	KW_PARTITIONS(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropIndexContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_ON(): antlr.TerminalNode;
	tableName(): TableNameContext;
	ifExists(): IfExistsContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetTimeZoneIntervalContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_TIME(): antlr.TerminalNode;
	KW_ZONE(): antlr.TerminalNode;
	interval(): IntervalContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowCatalogsContext extends StatementContext {
	_pattern?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CATALOGS(): antlr.TerminalNode;
	stringLit(): StringLitContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowCurrentNamespaceContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode;
	namespace(): NamespaceContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RenameTablePartitionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	partitionSpec(): PartitionSpecContext[];
	partitionSpec(i: number): PartitionSpecContext | null;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RepairTableContext extends StatementContext {
	_option?: Token | null;
	constructor(ctx: StatementContext);
	KW_REPAIR(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_MSCK(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_SYNC(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshResourceContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_REFRESH(): antlr.TerminalNode;
	stringLit(): StringLitContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetVariableAssignmentContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	assignmentList(): AssignmentListContext;
	KW_VARIABLE(): antlr.TerminalNode | null;
	KW_VAR(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_AS(): antlr.TerminalNode | null;
	KW_SERDE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowNamespacesContext extends StatementContext {
	_pattern?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	namespaces(): NamespacesContext;
	multipartIdentifier(): MultipartIdentifierContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowColumnsContext extends StatementContext {
	_table?: TableNameContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_COLUMNS(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode[];
	KW_FROM(i: number): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode[];
	KW_IN(i: number): antlr.TerminalNode | null;
	tableName(): TableNameContext;
	namespaceName(): NamespaceNameContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ReplaceTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	replaceTableHeader(): ReplaceTableHeaderContext;
	createTableClauses(): CreateTableClausesContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	createOrReplaceTableColTypeList(): CreateOrReplaceTableColTypeListContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	tableProvider(): TableProviderContext | null;
	query(): QueryContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzeTablesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ANALYZE(): antlr.TerminalNode;
	KW_TABLES(): antlr.TerminalNode;
	KW_COMPUTE(): antlr.TerminalNode;
	KW_STATISTICS(): antlr.TerminalNode;
	namespaceName(): NamespaceNameContext | null;
	KW_NOSCAN(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AddTablePartitionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_ADD(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	viewName(): ViewNameContext | null;
	ifNotExists(): IfNotExistsContext | null;
	partitionSpecLocation(): PartitionSpecLocationContext[];
	partitionSpecLocation(i: number): PartitionSpecLocationContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetNamespaceLocationContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	namespace(): NamespaceContext;
	namespaceName(): NamespaceNameContext;
	KW_SET(): antlr.TerminalNode;
	locationSpec(): LocationSpecContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_REFRESH(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetAnyContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ResetConfigContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_RESET(): antlr.TerminalNode;
	configKey(): ConfigKeyContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetConfigAnyKeyContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	EQ(): antlr.TerminalNode;
	configValue(): ConfigValueContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetNamespacePropertiesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	namespace(): NamespaceContext;
	namespaceName(): NamespaceNameContext;
	KW_SET(): antlr.TerminalNode;
	propertyList(): PropertyListContext;
	KW_DBPROPERTIES(): antlr.TerminalNode | null;
	KW_PROPERTIES(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ManageResourceContext extends StatementContext {
	_op?: Token | null;
	constructor(ctx: StatementContext);
	identifier(): IdentifierContext;
	KW_ADD(): antlr.TerminalNode | null;
	KW_LIST(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainStatementContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_EXPLAIN(): antlr.TerminalNode;
	statement(): StatementContext;
	KW_LOGICAL(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_CODEGEN(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzeContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ANALYZE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_COMPUTE(): antlr.TerminalNode;
	KW_STATISTICS(): antlr.TerminalNode;
	partitionSpec(): PartitionSpecContext | null;
	KW_NOSCAN(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	columnNameSeq(): ColumnNameSeqContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateFunctionContext extends StatementContext {
	_className?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNameCreate(): FunctionNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	stringLit(): StringLitContext;
	KW_OR(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_USING(): antlr.TerminalNode | null;
	resource(): ResourceContext[];
	resource(i: number): ResourceContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnCacheTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_UNCACHE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableAddColumnsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_ADD(): antlr.TerminalNode;
	KW_COLUMNS(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	qualifiedColTypeWithPositionSeqForAdd(): QualifiedColTypeWithPositionSeqForAddContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class HiveReplaceColumnsContext extends StatementContext {
	_table?: TableNameContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_REPLACE(): antlr.TerminalNode;
	KW_COLUMNS(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	qualifiedColTypeWithPositionSeqForReplace(): QualifiedColTypeWithPositionSeqForReplaceContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	tableName(): TableNameContext;
	partitionSpec(): PartitionSpecContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableAddColumnContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_ADD(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	qualifiedColTypeWithPositionForAdd(): QualifiedColTypeWithPositionForAddContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CommentNamespaceContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	namespace(): NamespaceContext;
	namespaceName(): NamespaceNameContext;
	KW_IS(): antlr.TerminalNode;
	comment(): CommentContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	createTableHeader(): CreateTableHeaderContext;
	createTableClauses(): CreateTableClausesContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	createOrReplaceTableColTypeList(): CreateOrReplaceTableColTypeListContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	tableProvider(): TableProviderContext | null;
	query(): QueryContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DmlStatementContext extends StatementContext {
	constructor(ctx: StatementContext);
	dmlStatementNoWith(): DmlStatementNoWithContext;
	ctes(): CtesContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterMaterializedViewRewriteContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	KW_REWRITE(): antlr.TerminalNode;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableLikeContext extends StatementContext {
	_target?: TableNameCreateContext;
	_source?: TableNameContext;
	_tableProps?: PropertyListContext;
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_LIKE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	tableName(): TableNameContext;
	ifNotExists(): IfNotExistsContext | null;
	tableProvider(): TableProviderContext[];
	tableProvider(i: number): TableProviderContext | null;
	rowFormat(): RowFormatContext[];
	rowFormat(i: number): RowFormatContext | null;
	createFileFormat(): CreateFileFormatContext[];
	createFileFormat(i: number): CreateFileFormatContext | null;
	locationSpec(): LocationSpecContext[];
	locationSpec(i: number): LocationSpecContext | null;
	tableLifecycle(): TableLifecycleContext[];
	tableLifecycle(i: number): TableLifecycleContext | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode[];
	KW_TBLPROPERTIES(i: number): antlr.TerminalNode | null;
	propertyList(): PropertyListContext[];
	propertyList(i: number): PropertyListContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropFunctionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetVariableMultiAssignmentContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	multipartIdentifierList(): MultipartIdentifierListContext;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	EQ(): antlr.TerminalNode;
	query(): QueryContext;
	KW_VARIABLE(): antlr.TerminalNode | null;
	KW_VAR(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeRelationContext extends StatementContext {
	_option?: Token | null;
	constructor(ctx: StatementContext);
	tableName(): TableNameContext;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	describeColName(): DescribeColNameContext | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class LoadDataContext extends StatementContext {
	_path?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_LOAD(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_INPATH(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	stringLit(): StringLitContext;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowPartitionsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_PARTITIONS(): antlr.TerminalNode;
	tableName(): TableNameContext;
	partitionSpec(): PartitionSpecContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeFunctionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_FUNCTION(): antlr.TerminalNode;
	describeFuncName(): DescribeFuncNameContext;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RenameTableColumnContext extends StatementContext {
	_table?: TableNameContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_RENAME(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	KW_TO(): antlr.TerminalNode;
	columnNameCreate(): ColumnNameCreateContext;
	tableName(): TableNameContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetConfigContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	configKey(): ConfigKeyContext;
	EQ(): antlr.TerminalNode;
	configValue(): ConfigValueContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnsupportHiveCommandsContext extends StatementContext {
	constructor(ctx: StatementContext);
	unsupportedHiveNativeCommands(): UnsupportedHiveNativeCommandsContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class StatementDefaultContext extends StatementContext {
	constructor(ctx: StatementContext);
	query(): QueryContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class HiveChangeColumnContext extends StatementContext {
	_table?: TableNameContext;
	_colName?: ColumnNameContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_CHANGE(): antlr.TerminalNode;
	colType(): ColTypeContext;
	tableName(): TableNameContext;
	columnName(): ColumnNameContext;
	partitionSpec(): PartitionSpecContext | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	colPosition(): ColPositionContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class OptimizeTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_OPTIMIZE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	zorderClause(): ZorderClauseContext;
	whereClause(): WhereClauseContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetTimeZoneContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_TIME(): antlr.TerminalNode;
	KW_ZONE(): antlr.TerminalNode;
	timezone(): TimezoneContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeQueryContext extends StatementContext {
	constructor(ctx: StatementContext);
	query(): QueryContext;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TruncateTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_TRUNCATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	partitionSpec(): PartitionSpecContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetConfigAndValueContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	configKey(): ConfigKeyContext;
	EQ(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateMaterializedViewContext extends StatementContext {
	_options?: PropertyListContext;
	_partitioning?: PartitionFieldListContext;
	_tableProps?: PropertyListContext;
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNameCreate(): ViewNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	query(): QueryContext;
	ifNotExists(): IfNotExistsContext | null;
	tableProvider(): TableProviderContext | null;
	skewSpec(): SkewSpecContext[];
	skewSpec(i: number): SkewSpecContext | null;
	bucketSpec(): BucketSpecContext[];
	bucketSpec(i: number): BucketSpecContext | null;
	rowFormat(): RowFormatContext[];
	rowFormat(i: number): RowFormatContext | null;
	createFileFormat(): CreateFileFormatContext[];
	createFileFormat(i: number): CreateFileFormatContext | null;
	locationSpec(): LocationSpecContext[];
	locationSpec(i: number): LocationSpecContext | null;
	commentSpec(): CommentSpecContext[];
	commentSpec(i: number): CommentSpecContext | null;
	KW_OPTIONS(): antlr.TerminalNode[];
	KW_OPTIONS(i: number): antlr.TerminalNode | null;
	KW_PARTITIONED(): antlr.TerminalNode[];
	KW_PARTITIONED(i: number): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode[];
	KW_TBLPROPERTIES(i: number): antlr.TerminalNode | null;
	propertyList(): PropertyListContext[];
	propertyList(i: number): PropertyListContext | null;
	partitionFieldList(): PartitionFieldListContext[];
	partitionFieldList(i: number): PartitionFieldListContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetTableSerDeContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_SET(): antlr.TerminalNode;
	KW_SERDE(): antlr.TerminalNode;
	stringLit(): StringLitContext;
	partitionSpec(): PartitionSpecContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	propertyList(): PropertyListContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
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
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	identifierCommentList(): IdentifierCommentListContext | null;
	commentSpec(): CommentSpecContext[];
	commentSpec(i: number): CommentSpecContext | null;
	KW_PARTITIONED(): antlr.TerminalNode[];
	KW_PARTITIONED(i: number): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext[];
	identifierList(i: number): IdentifierListContext | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode[];
	KW_TBLPROPERTIES(i: number): antlr.TerminalNode | null;
	propertyList(): PropertyListContext[];
	propertyList(i: number): PropertyListContext | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetTimeZoneAnyContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_TIME(): antlr.TerminalNode;
	KW_ZONE(): antlr.TerminalNode;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropTablePartitionsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_DROP(): antlr.TerminalNode;
	partitionSpec(): PartitionSpecContext[];
	partitionSpec(i: number): PartitionSpecContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	viewName(): ViewNameContext | null;
	ifExists(): IfExistsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_PURGE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	ifExists(): IfExistsContext | null;
	KW_PURGE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowTableExtendedContext extends StatementContext {
	_ns?: NamespaceNameContext;
	_pattern?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_EXTENDED(): antlr.TerminalNode;
	KW_LIKE(): antlr.TerminalNode;
	stringLit(): StringLitContext;
	partitionSpec(): PartitionSpecContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	namespaceName(): NamespaceNameContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeNamespaceContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DATABASE(): antlr.TerminalNode;
	namespaceName(): NamespaceNameContext;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableAlterColumnContext extends StatementContext {
	_table?: TableNameContext;
	_column?: ColumnNameContext;
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode[];
	KW_ALTER(i: number): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_CHANGE(): antlr.TerminalNode | null;
	columnName(): ColumnNameContext;
	KW_COLUMN(): antlr.TerminalNode | null;
	alterColumnAction(): AlterColumnActionContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshFunctionContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_REFRESH(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CommentTableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_IS(): antlr.TerminalNode;
	comment(): CommentContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowMaterializedViewsContext extends StatementContext {
	_db_name?: NamespaceNameContext;
	_pattern?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEWS(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	namespaceName(): NamespaceNameContext | null;
	stringLit(): StringLitContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateIndexContext extends StatementContext {
	_indexType?: IdentifierContext;
	_options?: PropertyListContext;
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	KW_ON(): antlr.TerminalNode;
	tableName(): TableNameContext;
	LEFT_PAREN(): antlr.TerminalNode;
	multipartIdentifierPropertyList(): MultipartIdentifierPropertyListContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	ifNotExists(): IfNotExistsContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	propertyList(): PropertyListContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UseNamespaceContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_USE(): antlr.TerminalNode;
	namespaceName(): NamespaceNameContext;
	namespace(): NamespaceContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropVariableContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_DROP(): antlr.TerminalNode;
	KW_TEMPORARY(): antlr.TerminalNode;
	KW_VARIABLE(): antlr.TerminalNode;
	tableName(): TableNameContext | null;
	viewName(): ViewNameContext | null;
	functionName(): FunctionNameContext | null;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateNamespaceContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_CREATE(): antlr.TerminalNode;
	namespace(): NamespaceContext;
	namespaceNameCreate(): NamespaceNameCreateContext;
	ifNotExists(): IfNotExistsContext | null;
	commentSpec(): CommentSpecContext[];
	commentSpec(i: number): CommentSpecContext | null;
	locationSpec(): LocationSpecContext[];
	locationSpec(i: number): LocationSpecContext | null;
	KW_WITH(): antlr.TerminalNode[];
	KW_WITH(i: number): antlr.TerminalNode | null;
	propertyList(): PropertyListContext[];
	propertyList(i: number): PropertyListContext | null;
	KW_DBPROPERTIES(): antlr.TerminalNode[];
	KW_DBPROPERTIES(i: number): antlr.TerminalNode | null;
	KW_PROPERTIES(): antlr.TerminalNode[];
	KW_PROPERTIES(i: number): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetTableSerDePropertiesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_SET(): antlr.TerminalNode;
	KW_SERDEPROPERTIES(): antlr.TerminalNode;
	propertyList(): PropertyListContext;
	partitionSpec(): PartitionSpecContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshMaterializedViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_REFRESH(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowTblPropertiesContext extends StatementContext {
	_table?: TableNameContext;
	_key?: PropertyKeyContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_TBLPROPERTIES(): antlr.TerminalNode;
	tableName(): TableNameContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	propertyKey(): PropertyKeyContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateMaterializedViewContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	KW_AS(): antlr.TerminalNode | null;
	KW_SERDE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnsetTablePropertiesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_UNSET(): antlr.TerminalNode;
	KW_TBLPROPERTIES(): antlr.TerminalNode;
	propertyList(): PropertyListContext;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	viewName(): ViewNameContext | null;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetTableLocationContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_SET(): antlr.TerminalNode;
	locationSpec(): LocationSpecContext;
	partitionSpec(): PartitionSpecContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DropTableColumnsContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_DROP(): antlr.TerminalNode;
	KW_COLUMNS(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	columnNameSeq(): ColumnNameSeqContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	ifExists(): IfExistsContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowViewsContext extends StatementContext {
	_pattern?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_VIEWS(): antlr.TerminalNode;
	namespaceName(): NamespaceNameContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowFunctionsContext extends StatementContext {
	_ns?: NamespaceNameContext;
	_legacy?: MultipartIdentifierContext;
	_pattern?: StringLitContext;
	constructor(ctx: StatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_FUNCTIONS(): antlr.TerminalNode;
	functionKind(): FunctionKindContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	namespaceName(): NamespaceNameContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	multipartIdentifier(): MultipartIdentifierContext | null;
	stringLit(): StringLitContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CacheTableContext extends StatementContext {
	_options?: PropertyListContext;
	constructor(ctx: StatementContext);
	KW_CACHE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_LAZY(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	propertyList(): PropertyListContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetTablePropertiesContext extends StatementContext {
	constructor(ctx: StatementContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_SET(): antlr.TerminalNode;
	KW_TBLPROPERTIES(): antlr.TerminalNode;
	propertyList(): PropertyListContext;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	viewName(): ViewNameContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TimezoneContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	stringLit(): StringLitContext | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ConfigKeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	quotedIdentifier(): QuotedIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ConfigValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	backQuotedIdentifier(): BackQuotedIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnsupportedHiveNativeCommandsContext extends antlr.ParserRuleContext {
	_kw1?: Token | null;
	_kw2?: Token | null;
	_kw3?: Token | null;
	_kw4?: Token | null;
	_kw5?: Token | null;
	_kw6?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_REVOKE(): antlr.TerminalNode | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_PRINCIPALS(): antlr.TerminalNode | null;
	KW_ROLES(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_EXPORT(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_IMPORT(): antlr.TerminalNode | null;
	KW_COMPACTIONS(): antlr.TerminalNode | null;
	KW_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_LOCKS(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_UNLOCK(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_MACRO(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_CLUSTERED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_SORTED(): antlr.TerminalNode | null;
	KW_SKEWED(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_DIRECTORIES(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_EXCHANGE(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_ARCHIVE(): antlr.TerminalNode | null;
	KW_UNARCHIVE(): antlr.TerminalNode | null;
	KW_TOUCH(): antlr.TerminalNode | null;
	KW_COMPACT(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	KW_CONCATENATE(): antlr.TerminalNode | null;
	KW_FILEFORMAT(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_START(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_DFS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableHeaderContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ReplaceTableHeaderContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPLACE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class BucketSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLUSTERED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext;
	KW_INTO(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode;
	KW_BUCKETS(): antlr.TerminalNode;
	KW_SORTED(): antlr.TerminalNode | null;
	orderedIdentifierList(): OrderedIdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SkewSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SKEWED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	identifierList(): IdentifierListContext;
	KW_ON(): antlr.TerminalNode;
	constantList(): ConstantListContext | null;
	nestedConstantList(): NestedConstantListContext | null;
	KW_STORED(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_DIRECTORIES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class LocationSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOCATION(): antlr.TerminalNode;
	stringLit(): StringLitContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CommentSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	stringLit(): StringLitContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QueryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryContext): void;
}
export declare class QueryStatementContext extends QueryContext {
	constructor(ctx: QueryContext);
	queryTerm(): QueryTermContext;
	queryOrganization(): QueryOrganizationContext;
	ctes(): CtesContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertIntoContext extends antlr.ParserRuleContext {
	_path?: StringLitContext;
	_options?: PropertyListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_NAME(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	columnNameSeq(): ColumnNameSeqContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	whereClause(): WhereClauseContext | null;
	KW_DIRECTORY(): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	rowFormat(): RowFormatContext | null;
	createFileFormat(): CreateFileFormatContext | null;
	tableProvider(): TableProviderContext | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	propertyList(): PropertyListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSpecLocationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	partitionSpec(): PartitionSpecContext;
	locationSpec(): LocationSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	partitionVal(): PartitionValContext[];
	partitionVal(i: number): PartitionValContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionValContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	EQ(): antlr.TerminalNode | null;
	constant(): ConstantContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamespaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NAMESPACE(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamespacesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NAMESPACES(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeFuncNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifierReference(): IdentifierReferenceContext | null;
	stringLit(): StringLitContext | null;
	comparisonOperator(): ComparisonOperatorContext | null;
	arithmeticOperator(): ArithmeticOperatorContext | null;
	predicateOperator(): PredicateOperatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeColNameContext extends antlr.ParserRuleContext {
	_identifier?: IdentifierContext;
	_nameParts: IdentifierContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CtesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	namedQuery(): NamedQueryContext[];
	namedQuery(i: number): NamedQueryContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamedQueryContext extends antlr.ParserRuleContext {
	_name?: ErrorCapturingIdentifierContext;
	_columnAliases?: IdentifierListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	query(): QueryContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	KW_AS(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TableProviderContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableClausesContext extends antlr.ParserRuleContext {
	_options?: ExpressionPropertyListContext;
	_partitioning?: PartitionFieldListContext;
	_tableProps?: PropertyListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	skewSpec(): SkewSpecContext[];
	skewSpec(i: number): SkewSpecContext | null;
	bucketSpec(): BucketSpecContext[];
	bucketSpec(i: number): BucketSpecContext | null;
	rowFormat(): RowFormatContext[];
	rowFormat(i: number): RowFormatContext | null;
	createFileFormat(): CreateFileFormatContext[];
	createFileFormat(i: number): CreateFileFormatContext | null;
	locationSpec(): LocationSpecContext[];
	locationSpec(i: number): LocationSpecContext | null;
	commentSpec(): CommentSpecContext[];
	commentSpec(i: number): CommentSpecContext | null;
	tableLifecycle(): TableLifecycleContext[];
	tableLifecycle(i: number): TableLifecycleContext | null;
	KW_OPTIONS(): antlr.TerminalNode[];
	KW_OPTIONS(i: number): antlr.TerminalNode | null;
	KW_PARTITIONED(): antlr.TerminalNode[];
	KW_PARTITIONED(i: number): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode[];
	KW_TBLPROPERTIES(i: number): antlr.TerminalNode | null;
	expressionPropertyList(): ExpressionPropertyListContext[];
	expressionPropertyList(i: number): ExpressionPropertyListContext | null;
	partitionFieldList(): PartitionFieldListContext[];
	partitionFieldList(i: number): PartitionFieldListContext | null;
	propertyList(): PropertyListContext[];
	propertyList(i: number): PropertyListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TableLifecycleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIFECYCLE(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PropertyListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	property(): PropertyContext[];
	property(i: number): PropertyContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PropertyContext extends antlr.ParserRuleContext {
	_key?: PropertyKeyContext;
	_value?: PropertyValueContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	propertyKey(): PropertyKeyContext;
	propertyValue(): PropertyValueContext | null;
	EQ(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PropertyKeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PropertyValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode | null;
	DECIMAL_VALUE(): antlr.TerminalNode | null;
	booleanValue(): BooleanValueContext | null;
	stringLit(): StringLitContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionPropertyListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	expressionProperty(): ExpressionPropertyContext[];
	expressionProperty(i: number): ExpressionPropertyContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionPropertyContext extends antlr.ParserRuleContext {
	_key?: PropertyKeyContext;
	_value?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	propertyKey(): PropertyKeyContext;
	expression(): ExpressionContext | null;
	EQ(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	constant(): ConstantContext[];
	constant(i: number): ConstantContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NestedConstantListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	constantList(): ConstantListContext[];
	constantList(i: number): ConstantListContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateFileFormatContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STORED(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode | null;
	fileFormat(): FileFormatContext | null;
	KW_BY(): antlr.TerminalNode | null;
	storageHandler(): StorageHandlerContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FileFormatContext extends antlr.ParserRuleContext {
	_inFmt?: StringLitContext;
	_outFmt?: StringLitContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INPUTFORMAT(): antlr.TerminalNode | null;
	KW_OUTPUTFORMAT(): antlr.TerminalNode | null;
	stringLit(): StringLitContext[];
	stringLit(i: number): StringLitContext | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class StorageHandlerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	stringLit(): StringLitContext;
	KW_WITH(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	propertyList(): PropertyListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ResourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	stringLit(): StringLitContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DmlStatementNoWithContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: DmlStatementNoWithContext): void;
}
export declare class DeleteFromTableContext extends DmlStatementNoWithContext {
	constructor(ctx: DmlStatementNoWithContext);
	KW_DELETE(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	tableName(): TableNameContext;
	tableAlias(): TableAliasContext;
	whereClause(): WhereClauseContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MultipleInsertContext extends DmlStatementNoWithContext {
	constructor(ctx: DmlStatementNoWithContext);
	fromClause(): FromClauseContext;
	multiInsertQueryBody(): MultiInsertQueryBodyContext[];
	multiInsertQueryBody(i: number): MultiInsertQueryBodyContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UpdateTableContext extends DmlStatementNoWithContext {
	constructor(ctx: DmlStatementNoWithContext);
	KW_UPDATE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	tableAlias(): TableAliasContext;
	setClause(): SetClauseContext;
	whereClause(): WhereClauseContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertFromQueryContext extends DmlStatementNoWithContext {
	constructor(ctx: DmlStatementNoWithContext);
	insertInto(): InsertIntoContext;
	query(): QueryContext;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MergeIntoTableContext extends DmlStatementNoWithContext {
	_target?: TableNameContext;
	_targetAlias?: TableAliasContext;
	_source?: IdentifierReferenceContext;
	_sourceQuery?: QueryContext;
	_sourceAlias?: TableAliasContext;
	_mergeCondition?: BooleanExpressionContext;
	constructor(ctx: DmlStatementNoWithContext);
	KW_MERGE(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	KW_USING(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	tableName(): TableNameContext;
	tableAlias(): TableAliasContext[];
	tableAlias(i: number): TableAliasContext | null;
	booleanExpression(): BooleanExpressionContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	identifierReference(): IdentifierReferenceContext | null;
	query(): QueryContext | null;
	matchedClause(): MatchedClauseContext[];
	matchedClause(i: number): MatchedClauseContext | null;
	notMatchedClause(): NotMatchedClauseContext[];
	notMatchedClause(i: number): NotMatchedClauseContext | null;
	notMatchedBySourceClause(): NotMatchedBySourceClauseContext[];
	notMatchedBySourceClause(i: number): NotMatchedBySourceClauseContext | null;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamespaceNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifierReference(): IdentifierReferenceContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamespaceNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifierReference(): IdentifierReferenceContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TableNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableIdentifier(): TableIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TableNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableIdentifier(): TableIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ViewNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	viewIdentifier(): ViewIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ViewNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	viewIdentifier(): ViewIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	multipartIdentifier(): MultipartIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameSeqContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierReferenceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IDENTIFIER(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	multipartIdentifier(): MultipartIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QueryOrganizationContext extends antlr.ParserRuleContext {
	_sortItem?: SortItemContext;
	_order: SortItemContext[];
	_expression?: ExpressionContext;
	_clusterBy: ExpressionContext[];
	_distributeBy: ExpressionContext[];
	_sort: SortItemContext[];
	_limit?: ExpressionContext;
	_offset?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_CLUSTER(): antlr.TerminalNode | null;
	KW_DISTRIBUTE(): antlr.TerminalNode | null;
	KW_SORT(): antlr.TerminalNode | null;
	windowClause(): WindowClauseContext | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MultiInsertQueryBodyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	insertInto(): InsertIntoContext;
	fromStatementBody(): FromStatementBodyContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QueryTermContext extends antlr.ParserRuleContext {
	_left?: QueryTermContext;
	_operator?: Token | null;
	_right?: QueryTermContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryPrimary(): QueryPrimaryContext | null;
	queryTerm(): QueryTermContext[];
	queryTerm(i: number): QueryTermContext | null;
	KW_INTERSECT(): antlr.TerminalNode | null;
	KW_UNION(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	KW_MINUS(): antlr.TerminalNode | null;
	setQuantifier(): SetQuantifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QueryPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	querySpecification(): QuerySpecificationContext | null;
	fromStatement(): FromStatementContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	inlineTable(): InlineTableContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SortItemContext extends antlr.ParserRuleContext {
	_ordering?: Token | null;
	_nullOrder?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FromStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fromClause(): FromClauseContext;
	fromStatementBody(): FromStatementBodyContext[];
	fromStatementBody(i: number): FromStatementBodyContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FromStatementBodyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	transformClause(): TransformClauseContext | null;
	queryOrganization(): QueryOrganizationContext;
	whereClause(): WhereClauseContext | null;
	selectClause(): SelectClauseContext | null;
	lateralView(): LateralViewContext[];
	lateralView(i: number): LateralViewContext | null;
	aggregationClause(): AggregationClauseContext | null;
	havingClause(): HavingClauseContext | null;
	windowClause(): WindowClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QuerySpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	transformClause(): TransformClauseContext | null;
	fromClause(): FromClauseContext | null;
	lateralView(): LateralViewContext[];
	lateralView(i: number): LateralViewContext | null;
	whereClause(): WhereClauseContext | null;
	aggregationClause(): AggregationClauseContext | null;
	havingClause(): HavingClauseContext | null;
	windowClause(): WindowClauseContext | null;
	selectClause(): SelectClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformClauseContext extends antlr.ParserRuleContext {
	_kind?: Token | null;
	_inRowFormat?: RowFormatContext;
	_recordWriter?: StringLitContext;
	_script?: StringLitContext;
	_outRowFormat?: RowFormatContext;
	_recordReader?: StringLitContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	stringLit(): StringLitContext[];
	stringLit(i: number): StringLitContext | null;
	KW_SELECT(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	expressionSeq(): ExpressionSeqContext | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_REDUCE(): antlr.TerminalNode | null;
	KW_RECORDWRITER(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_RECORDREADER(): antlr.TerminalNode | null;
	rowFormat(): RowFormatContext[];
	rowFormat(i: number): RowFormatContext | null;
	setQuantifier(): SetQuantifierContext | null;
	identifierSeq(): IdentifierSeqContext | null;
	colTypeList(): ColTypeListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectClauseContext extends antlr.ParserRuleContext {
	_hint?: HintContext;
	_hints: HintContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode;
	namedExpressionSeq(): NamedExpressionSeqContext;
	setQuantifier(): SetQuantifierContext | null;
	hint(): HintContext[];
	hint(i: number): HintContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	assignmentList(): AssignmentListContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MatchedClauseContext extends antlr.ParserRuleContext {
	_matchedCond?: BooleanExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	matchedAction(): MatchedActionContext;
	KW_AND(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NotMatchedClauseContext extends antlr.ParserRuleContext {
	_notMatchedCond?: BooleanExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	notMatchedAction(): NotMatchedActionContext;
	KW_BY(): antlr.TerminalNode | null;
	KW_TARGET(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NotMatchedBySourceClauseContext extends antlr.ParserRuleContext {
	_notMatchedBySourceCond?: BooleanExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	KW_SOURCE(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	notMatchedBySourceAction(): NotMatchedBySourceActionContext;
	KW_AND(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MatchedActionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELETE(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	ASTERISK(): antlr.TerminalNode | null;
	assignmentList(): AssignmentListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NotMatchedActionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode;
	ASTERISK(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	multipartIdentifierList(): MultipartIdentifierListContext | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	KW_VALUES(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NotMatchedBySourceActionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELETE(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	assignmentList(): AssignmentListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AssignmentListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	assignment(): AssignmentContext[];
	assignment(i: number): AssignmentContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AssignmentContext extends antlr.ParserRuleContext {
	_key?: MultipartIdentifierContext;
	_value?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class WhereClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHERE(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HAVING(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class HintContext extends antlr.ParserRuleContext {
	_hintStatement?: HintStatementContext;
	_hintStatements: HintStatementContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	HENT_START(): antlr.TerminalNode;
	HENT_END(): antlr.TerminalNode;
	hintStatement(): HintStatementContext[];
	hintStatement(i: number): HintStatementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class HintStatementContext extends antlr.ParserRuleContext {
	_hintName?: IdentifierContext;
	_primaryExpression?: PrimaryExpressionContext;
	_parameters: PrimaryExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	primaryExpression(): PrimaryExpressionContext[];
	primaryExpression(i: number): PrimaryExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode;
	relation(): RelationContext[];
	relation(i: number): RelationContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	lateralView(): LateralViewContext[];
	lateralView(i: number): LateralViewContext | null;
	pivotClause(): PivotClauseContext | null;
	unpivotClause(): UnpivotClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionKindContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USER(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TemporalClauseContext extends antlr.ParserRuleContext {
	_timestamp?: ValueExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	KW_OF(): antlr.TerminalNode;
	version(): VersionContext | null;
	KW_SYSTEM_VERSION(): antlr.TerminalNode | null;
	KW_VERSION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_SYSTEM_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AggregationClauseContext extends antlr.ParserRuleContext {
	_groupByClause?: GroupByClauseContext;
	_groupingExpressionsWithGroupingAnalytics: GroupByClauseContext[];
	_expression?: ExpressionContext;
	_groupingExpressions: ExpressionContext[];
	_kind?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GROUP(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	groupByClause(): GroupByClauseContext[];
	groupByClause(i: number): GroupByClauseContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	groupingSet(): GroupingSetContext[];
	groupingSet(i: number): GroupingSetContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_CUBE(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	groupingAnalytics(): GroupingAnalyticsContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingAnalyticsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	groupingSet(): GroupingSetContext[];
	groupingSet(i: number): GroupingSetContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_CUBE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	groupingElement(): GroupingElementContext[];
	groupingElement(i: number): GroupingElementContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	groupingAnalytics(): GroupingAnalyticsContext | null;
	groupingSet(): GroupingSetContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingSetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PivotClauseContext extends antlr.ParserRuleContext {
	_aggregates?: NamedExpressionSeqContext;
	_pivotValue?: PivotValueContext;
	_pivotValues: PivotValueContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PIVOT(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode;
	pivotColumn(): PivotColumnContext;
	KW_IN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	namedExpressionSeq(): NamedExpressionSeqContext;
	pivotValue(): PivotValueContext[];
	pivotValue(i: number): PivotValueContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PivotColumnContext extends antlr.ParserRuleContext {
	_identifier?: IdentifierContext;
	_identifiers: IdentifierContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PivotValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	identifier(): IdentifierContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotClauseContext extends antlr.ParserRuleContext {
	_nullOperator?: UnpivotNullClauseContext;
	_operator?: UnpivotOperatorContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNPIVOT(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	unpivotOperator(): UnpivotOperatorContext;
	identifier(): IdentifierContext | null;
	unpivotNullClause(): UnpivotNullClauseContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotNullClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULLS(): antlr.TerminalNode;
	KW_INCLUDE(): antlr.TerminalNode | null;
	KW_EXCLUDE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	unpivotSingleValueColumnClause(): UnpivotSingleValueColumnClauseContext | null;
	unpivotMultiValueColumnClause(): UnpivotMultiValueColumnClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotSingleValueColumnClauseContext extends antlr.ParserRuleContext {
	_unpivotColumnAndAlias?: UnpivotColumnAndAliasContext;
	_unpivotColumns: UnpivotColumnAndAliasContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	unpivotValueColumn(): UnpivotValueColumnContext;
	KW_FOR(): antlr.TerminalNode;
	unpivotNameColumn(): UnpivotNameColumnContext;
	KW_IN(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	unpivotColumnAndAlias(): UnpivotColumnAndAliasContext[];
	unpivotColumnAndAlias(i: number): UnpivotColumnAndAliasContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotMultiValueColumnClauseContext extends antlr.ParserRuleContext {
	_unpivotValueColumn?: UnpivotValueColumnContext;
	_unpivotValueColumns: UnpivotValueColumnContext[];
	_unpivotColumnSet?: UnpivotColumnSetContext;
	_unpivotColumnSets: UnpivotColumnSetContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode;
	unpivotNameColumn(): UnpivotNameColumnContext;
	KW_IN(): antlr.TerminalNode;
	unpivotValueColumn(): UnpivotValueColumnContext[];
	unpivotValueColumn(i: number): UnpivotValueColumnContext | null;
	unpivotColumnSet(): UnpivotColumnSetContext[];
	unpivotColumnSet(i: number): UnpivotColumnSetContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotColumnSetContext extends antlr.ParserRuleContext {
	_unpivotColumn?: UnpivotColumnContext;
	_unpivotColumns: UnpivotColumnContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	unpivotColumn(): UnpivotColumnContext[];
	unpivotColumn(i: number): UnpivotColumnContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	unpivotAlias(): UnpivotAliasContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotValueColumnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotNameColumnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotColumnAndAliasContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	unpivotColumn(): UnpivotColumnContext;
	unpivotAlias(): UnpivotAliasContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotColumnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	multipartIdentifier(): MultipartIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnpivotAliasContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IfNotExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IfExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class LateralViewContext extends antlr.ParserRuleContext {
	_identifier?: IdentifierContext;
	_colName: IdentifierContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LATERAL(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	tableAlias(): TableAliasContext;
	KW_OUTER(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SetQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext | null;
	relationPrimary(): RelationPrimaryContext | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	relationExtension(): RelationExtensionContext[];
	relationExtension(i: number): RelationExtensionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RelationExtensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	joinRelation(): JoinRelationContext | null;
	pivotClause(): PivotClauseContext | null;
	unpivotClause(): UnpivotClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class JoinRelationContext extends antlr.ParserRuleContext {
	_right?: RelationPrimaryContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_JOIN(): antlr.TerminalNode;
	relationPrimary(): RelationPrimaryContext;
	joinType(): JoinTypeContext | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	joinCriteria(): JoinCriteriaContext | null;
	KW_NATURAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class JoinTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INNER(): antlr.TerminalNode | null;
	KW_CROSS(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	KW_SEMI(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_ANTI(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class JoinCriteriaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	KW_USING(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SampleContext extends antlr.ParserRuleContext {
	_seed?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLESAMPLE(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	sampleMethod(): SampleMethodContext | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class SampleMethodContext extends antlr.ParserRuleContext {
	_negativeSign?: Token | null;
	_percentage?: Token | null;
	_sampleType?: Token | null;
	_numerator?: Token | null;
	_denominator?: Token | null;
	_bytes?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PERCENTLIT(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode[];
	INTEGER_VALUE(i: number): antlr.TerminalNode | null;
	DECIMAL_VALUE(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_OUT(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	KW_BUCKET(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	qualifiedName(): QualifiedNameContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	identifierSeq(): IdentifierSeqContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierSeqContext extends antlr.ParserRuleContext {
	_errorCapturingIdentifier?: ErrorCapturingIdentifierContext;
	_ident: ErrorCapturingIdentifierContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class OrderedIdentifierListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	orderedIdentifier(): OrderedIdentifierContext[];
	orderedIdentifier(i: number): OrderedIdentifierContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class OrderedIdentifierContext extends antlr.ParserRuleContext {
	_ident?: ErrorCapturingIdentifierContext;
	_ordering?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierCommentListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	identifierComment(): IdentifierCommentContext[];
	identifierComment(i: number): IdentifierCommentContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierCommentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RelationPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableAlias(): TableAliasContext | null;
	tableName(): TableNameContext | null;
	viewName(): ViewNameContext | null;
	identifierReference(): IdentifierReferenceContext | null;
	temporalClause(): TemporalClauseContext | null;
	sample(): SampleContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	relation(): RelationContext | null;
	inlineTable(): InlineTableContext | null;
	functionTable(): FunctionTableContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class InlineTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUES(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	tableAlias(): TableAliasContext;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionTableSubqueryArgumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext | null;
	tableArgumentPartitioning(): TableArgumentPartitioningContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TableArgumentPartitioningContext extends antlr.ParserRuleContext {
	_expression?: ExpressionContext;
	_partition: ExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_SINGLE(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_SORT(): antlr.TerminalNode | null;
	KW_DISTRIBUTE(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionTableNamedArgumentExpressionContext extends antlr.ParserRuleContext {
	_key?: IdentifierContext;
	_table?: FunctionTableSubqueryArgumentContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	FAT_ARROW(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	functionTableSubqueryArgument(): FunctionTableSubqueryArgumentContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionTableReferenceArgumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionTableSubqueryArgument(): FunctionTableSubqueryArgumentContext | null;
	functionTableNamedArgumentExpression(): FunctionTableNamedArgumentExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionTableArgumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionTableReferenceArgument(): FunctionTableReferenceArgumentContext | null;
	functionArgument(): FunctionArgumentContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionName(): FunctionNameContext;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	tableAlias(): TableAliasContext;
	functionTableArgument(): FunctionTableArgumentContext[];
	functionTableArgument(i: number): FunctionTableArgumentContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TableAliasContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	strictIdentifier(): StrictIdentifierContext | null;
	KW_AS(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class RowFormatContext extends antlr.ParserRuleContext {
	_name?: StringLitContext;
	_props?: PropertyListContext;
	_fieldsTerminatedBy?: StringLitContext;
	_escapedBy?: StringLitContext;
	_collectionItemsTerminatedBy?: StringLitContext;
	_keysTerminatedBy?: StringLitContext;
	_linesSeparatedBy?: StringLitContext;
	_nullDefinedAs?: StringLitContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode;
	KW_FORMAT(): antlr.TerminalNode;
	KW_SERDE(): antlr.TerminalNode | null;
	stringLit(): StringLitContext[];
	stringLit(i: number): StringLitContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	propertyList(): PropertyListContext | null;
	KW_DELIMITED(): antlr.TerminalNode | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_TERMINATED(): antlr.TerminalNode[];
	KW_TERMINATED(i: number): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	KW_COLLECTION(): antlr.TerminalNode | null;
	KW_ITEMS(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_KEYS(): antlr.TerminalNode | null;
	KW_LINES(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_DEFINED(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_ESCAPED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MultipartIdentifierListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	multipartIdentifier(): MultipartIdentifierContext[];
	multipartIdentifier(i: number): MultipartIdentifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MultipartIdentifierContext extends antlr.ParserRuleContext {
	_errorCapturingIdentifier?: ErrorCapturingIdentifierContext;
	_parts: ErrorCapturingIdentifierContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MultipartIdentifierPropertyListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	multipartIdentifierProperty(): MultipartIdentifierPropertyContext[];
	multipartIdentifierProperty(i: number): MultipartIdentifierPropertyContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MultipartIdentifierPropertyContext extends antlr.ParserRuleContext {
	_options?: PropertyListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	multipartIdentifier(): MultipartIdentifierContext;
	KW_OPTIONS(): antlr.TerminalNode | null;
	propertyList(): PropertyListContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TableIdentifierContext extends antlr.ParserRuleContext {
	_db?: ErrorCapturingIdentifierContext;
	_table?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ViewIdentifierContext extends antlr.ParserRuleContext {
	_db?: ErrorCapturingIdentifierContext;
	_view?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamedExpressionContext extends antlr.ParserRuleContext {
	_name?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	identifierList(): IdentifierListContext | null;
	KW_AS(): antlr.TerminalNode | null;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamedExpressionSeqContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	namedExpression(): NamedExpressionContext[];
	namedExpression(i: number): NamedExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFieldListContext extends antlr.ParserRuleContext {
	_partitionField?: PartitionFieldContext;
	_fields: PartitionFieldContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	partitionField(): PartitionFieldContext[];
	partitionField(i: number): PartitionFieldContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFieldContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	transform(): TransformContext | null;
	colType(): ColTypeContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformContext extends antlr.ParserRuleContext {
	_transformName?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	transformArgument(): TransformArgumentContext[];
	transformArgument(i: number): TransformArgumentContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformArgumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext | null;
	constant(): ConstantContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamedArgumentExpressionContext extends antlr.ParserRuleContext {
	_key?: IdentifierContext;
	_value?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	FAT_ARROW(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionArgumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext | null;
	namedArgumentExpression(): NamedArgumentExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionSeqContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class BooleanExpressionContext extends antlr.ParserRuleContext {
	_left?: BooleanExpressionContext;
	_operator?: Token | null;
	_right?: BooleanExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	booleanExpression(): BooleanExpressionContext[];
	booleanExpression(i: number): BooleanExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext | null;
	predicate(): PredicateContext | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
	_kind?: Token | null;
	_lower?: ValueExpressionContext;
	_upper?: ValueExpressionContext;
	_pattern?: ValueExpressionContext;
	_quantifier?: Token | null;
	_escapeChar?: StringLitContext;
	_right?: ValueExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AND(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	query(): QueryContext | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_ILIKE(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ValueExpressionContext extends antlr.ParserRuleContext {
	_left?: ValueExpressionContext;
	_operator?: Token | null;
	_right?: ValueExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	primaryExpression(): PrimaryExpressionContext | null;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	MINUS(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	TILDE(): antlr.TerminalNode | null;
	ASTERISK(): antlr.TerminalNode | null;
	SLASH(): antlr.TerminalNode | null;
	PERCENT(): antlr.TerminalNode | null;
	KW_DIV(): antlr.TerminalNode | null;
	CONCAT_PIPE(): antlr.TerminalNode | null;
	AMPERSAND(): antlr.TerminalNode | null;
	HAT(): antlr.TerminalNode | null;
	PIPE(): antlr.TerminalNode | null;
	comparisonOperator(): ComparisonOperatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DatetimeUnitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_YEAR(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYOFYEAR(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_MILLISECOND(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PrimaryExpressionContext extends antlr.ParserRuleContext {
	_value?: PrimaryExpressionContext;
	_base?: PrimaryExpressionContext;
	_name?: Token | null;
	_unit?: DatetimeUnitContext;
	_invalidUnit?: StringLitContext;
	_unitsAmount?: ValueExpressionContext;
	_timestamp?: ValueExpressionContext;
	_startTimestamp?: ValueExpressionContext;
	_endTimestamp?: ValueExpressionContext;
	_elseExpression?: ExpressionContext;
	_substr?: ValueExpressionContext;
	_str?: ValueExpressionContext;
	_where?: BooleanExpressionContext;
	_nullsOption?: Token | null;
	_field?: IdentifierContext;
	_source?: ValueExpressionContext;
	_pos?: ValueExpressionContext;
	_len?: ValueExpressionContext;
	_trimOption?: Token | null;
	_trimStr?: ValueExpressionContext;
	_srcStr?: ValueExpressionContext;
	_input?: ValueExpressionContext;
	_replace?: ValueExpressionContext;
	_position?: ValueExpressionContext;
	_length?: ValueExpressionContext;
	_percentage?: ValueExpressionContext;
	_index?: ValueExpressionContext;
	_fieldName?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_SESSION_USER(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_TIMESTAMPADD(): antlr.TerminalNode | null;
	KW_DATEADD(): antlr.TerminalNode | null;
	KW_DATE_ADD(): antlr.TerminalNode | null;
	datetimeUnit(): DatetimeUnitContext | null;
	stringLit(): StringLitContext | null;
	KW_TIMESTAMPDIFF(): antlr.TerminalNode | null;
	KW_DATEDIFF(): antlr.TerminalNode | null;
	KW_DATE_DIFF(): antlr.TerminalNode | null;
	KW_TIMEDIFF(): antlr.TerminalNode | null;
	KW_CASE(): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode | null;
	whenClause(): WhenClauseContext[];
	whenClause(i: number): WhenClauseContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_AS(): antlr.TerminalNode | null;
	dataType(): DataTypeContext | null;
	KW_CAST(): antlr.TerminalNode | null;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	namedExpression(): NamedExpressionContext[];
	namedExpression(i: number): NamedExpressionContext | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_ANY_VALUE(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_POSITION(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	constant(): ConstantContext | null;
	ASTERISK(): antlr.TerminalNode | null;
	qualifiedName(): QualifiedNameContext | null;
	DOT(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	KW_IDENTIFIER(): antlr.TerminalNode | null;
	functionName(): FunctionNameContext | null;
	functionArgument(): FunctionArgumentContext[];
	functionArgument(i: number): FunctionArgumentContext | null;
	KW_FILTER(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	KW_OVER(): antlr.TerminalNode | null;
	windowSpec(): WindowSpecContext | null;
	booleanExpression(): BooleanExpressionContext | null;
	KW_RESPECT(): antlr.TerminalNode | null;
	setQuantifier(): SetQuantifierContext | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	ARROW(): antlr.TerminalNode | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_SUBSTR(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	KW_BOTH(): antlr.TerminalNode | null;
	KW_LEADING(): antlr.TerminalNode | null;
	KW_TRAILING(): antlr.TerminalNode | null;
	KW_OVERLAY(): antlr.TerminalNode | null;
	KW_PLACING(): antlr.TerminalNode | null;
	KW_WITHIN(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	sortItem(): SortItemContext | null;
	KW_PERCENTILE_CONT(): antlr.TerminalNode | null;
	KW_PERCENTILE_DISC(): antlr.TerminalNode | null;
	LEFT_BRACKET(): antlr.TerminalNode | null;
	RIGHT_BRACKET(): antlr.TerminalNode | null;
	primaryExpression(): PrimaryExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class LiteralTypeContext extends antlr.ParserRuleContext {
	_unsupportedType?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DATE(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null;
	KW_TIMESTAMP_NTZ(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_BINARY_HEX(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULL(): antlr.TerminalNode | null;
	QUESTION(): antlr.TerminalNode | null;
	COLON(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	interval(): IntervalContext | null;
	literalType(): LiteralTypeContext | null;
	stringLit(): StringLitContext[];
	stringLit(i: number): StringLitContext | null;
	number(): NumberContext | null;
	booleanValue(): BooleanValueContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode | null;
	NEQ(): antlr.TerminalNode | null;
	NEQJ(): antlr.TerminalNode | null;
	LT(): antlr.TerminalNode | null;
	LTE(): antlr.TerminalNode | null;
	GT(): antlr.TerminalNode | null;
	GTE(): antlr.TerminalNode | null;
	NSEQ(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ArithmeticOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	ASTERISK(): antlr.TerminalNode | null;
	SLASH(): antlr.TerminalNode | null;
	PERCENT(): antlr.TerminalNode | null;
	KW_DIV(): antlr.TerminalNode | null;
	TILDE(): antlr.TerminalNode | null;
	AMPERSAND(): antlr.TerminalNode | null;
	PIPE(): antlr.TerminalNode | null;
	CONCAT_PIPE(): antlr.TerminalNode | null;
	HAT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class PredicateOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OR(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class BooleanValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INTERVAL(): antlr.TerminalNode;
	errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | null;
	errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingMultiUnitsIntervalContext extends antlr.ParserRuleContext {
	_body?: MultiUnitsIntervalContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	multiUnitsInterval(): MultiUnitsIntervalContext;
	unitToUnitInterval(): UnitToUnitIntervalContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class MultiUnitsIntervalContext extends antlr.ParserRuleContext {
	_unitInMultiUnits?: UnitInMultiUnitsContext;
	_unit: UnitInMultiUnitsContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	intervalValue(): IntervalValueContext[];
	intervalValue(i: number): IntervalValueContext | null;
	unitInMultiUnits(): UnitInMultiUnitsContext[];
	unitInMultiUnits(i: number): UnitInMultiUnitsContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingUnitToUnitIntervalContext extends antlr.ParserRuleContext {
	_body?: UnitToUnitIntervalContext;
	_error1?: MultiUnitsIntervalContext;
	_error2?: UnitToUnitIntervalContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	unitToUnitInterval(): UnitToUnitIntervalContext[];
	unitToUnitInterval(i: number): UnitToUnitIntervalContext | null;
	multiUnitsInterval(): MultiUnitsIntervalContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnitToUnitIntervalContext extends antlr.ParserRuleContext {
	_value?: IntervalValueContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	unitInUnitToUnit(): UnitInUnitToUnitContext[];
	unitInUnitToUnit(i: number): UnitInUnitToUnitContext | null;
	KW_TO(): antlr.TerminalNode;
	intervalValue(): IntervalValueContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode | null;
	DECIMAL_VALUE(): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnitInMultiUnitsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NANOSECOND(): antlr.TerminalNode | null;
	KW_NANOSECONDS(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	KW_MICROSECONDS(): antlr.TerminalNode | null;
	KW_MILLISECOND(): antlr.TerminalNode | null;
	KW_MILLISECONDS(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_WEEKS(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class UnitInUnitToUnitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SECOND(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColPositionContext extends antlr.ParserRuleContext {
	_position?: Token | null;
	_afterCol?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FIRST(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class TypeContext extends antlr.ParserRuleContext {
	_unsupportedType?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_BYTE(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_SHORT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_LONG(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIMESTAMP_NTZ(): antlr.TerminalNode | null;
	KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_DEC(): antlr.TerminalNode | null;
	KW_NUMERIC(): antlr.TerminalNode | null;
	KW_VOID(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeContext extends antlr.ParserRuleContext {
	_complex?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LT(): antlr.TerminalNode | null;
	dataType(): DataTypeContext[];
	dataType(i: number): DataTypeContext | null;
	GT(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	NEQ(): antlr.TerminalNode | null;
	complexColTypeList(): ComplexColTypeListContext | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode[];
	KW_MONTH(i: number): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode[];
	KW_HOUR(i: number): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode[];
	KW_MINUTE(i: number): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode[];
	KW_SECOND(i: number): antlr.TerminalNode | null;
	type(): TypeContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode[];
	INTEGER_VALUE(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedColTypeWithPositionSeqForAddContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedColTypeWithPositionForAdd(): QualifiedColTypeWithPositionForAddContext[];
	qualifiedColTypeWithPositionForAdd(i: number): QualifiedColTypeWithPositionForAddContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedColTypeWithPositionForAddContext extends antlr.ParserRuleContext {
	_name?: ColumnNameCreateContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext;
	columnNameCreate(): ColumnNameCreateContext;
	colDefinitionDescriptorWithPosition(): ColDefinitionDescriptorWithPositionContext[];
	colDefinitionDescriptorWithPosition(
		i: number
	): ColDefinitionDescriptorWithPositionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedColTypeWithPositionSeqForReplaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedColTypeWithPositionForReplace(): QualifiedColTypeWithPositionForReplaceContext[];
	qualifiedColTypeWithPositionForReplace(
		i: number
	): QualifiedColTypeWithPositionForReplaceContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedColTypeWithPositionForReplaceContext extends antlr.ParserRuleContext {
	_name?: ColumnNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext;
	columnName(): ColumnNameContext;
	colDefinitionDescriptorWithPosition(): ColDefinitionDescriptorWithPositionContext[];
	colDefinitionDescriptorWithPosition(
		i: number
	): ColDefinitionDescriptorWithPositionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColDefinitionDescriptorWithPositionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	defaultExpression(): DefaultExpressionContext | null;
	commentSpec(): CommentSpecContext | null;
	colPosition(): ColPositionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class DefaultExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFAULT(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class VariableDefaultExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	KW_DEFAULT(): antlr.TerminalNode | null;
	EQ(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColTypeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colType(): ColTypeContext[];
	colType(i: number): ColTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColTypeContext extends antlr.ParserRuleContext {
	_colName?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateOrReplaceTableColTypeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createOrReplaceTableColType(): CreateOrReplaceTableColTypeContext[];
	createOrReplaceTableColType(i: number): CreateOrReplaceTableColTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateOrReplaceTableColTypeContext extends antlr.ParserRuleContext {
	_colName?: ColumnNameCreateContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext;
	columnNameCreate(): ColumnNameCreateContext;
	colDefinitionOption(): ColDefinitionOptionContext[];
	colDefinitionOption(i: number): ColDefinitionOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ColDefinitionOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	defaultExpression(): DefaultExpressionContext | null;
	generationExpression(): GenerationExpressionContext | null;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class GenerationExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GENERATED(): antlr.TerminalNode;
	KW_ALWAYS(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ComplexColTypeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	complexColType(): ComplexColTypeContext[];
	complexColType(i: number): ComplexColTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ComplexColTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	dataType(): DataTypeContext;
	COLON(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WINDOW(): antlr.TerminalNode;
	namedWindow(): NamedWindowContext[];
	namedWindow(i: number): NamedWindowContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ZorderClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ZORDER(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	columnNameSeq(): ColumnNameSeqContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NamedWindowContext extends antlr.ParserRuleContext {
	_name?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	windowSpec(): WindowSpecContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowSpecContext extends antlr.ParserRuleContext {
	_name?: ErrorCapturingIdentifierContext;
	_expression?: ExpressionContext;
	_partition: ExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	KW_CLUSTER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	windowFrame(): WindowFrameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_DISTRIBUTE(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_SORT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FrameBoundContext extends antlr.ParserRuleContext {
	_boundType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedNameListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext[];
	qualifiedName(i: number): QualifiedNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IDENTIFIER(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	qualifiedName(): QualifiedNameContext | null;
	KW_FILTER(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	MINUS(): antlr.TerminalNode[];
	MINUS(i: number): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	strictIdentifier(): StrictIdentifierContext | null;
	strictNonReserved(): StrictNonReservedContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class StrictIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	IDENTIFIER(): antlr.TerminalNode | null;
	quotedIdentifier(): QuotedIdentifierContext | null;
	ansiNonReserved(): AnsiNonReservedContext | null;
	nonReserved(): NonReservedContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class QuotedIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	BACKQUOTED_IDENTIFIER(): antlr.TerminalNode | null;
	DOUBLEQUOTED_STRING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class BackQuotedIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	BACKQUOTED_IDENTIFIER(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NumberContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EXPONENT_VALUE(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	DECIMAL_VALUE(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	BIGINT_LITERAL(): antlr.TerminalNode | null;
	SMALLINT_LITERAL(): antlr.TerminalNode | null;
	TINYINT_LITERAL(): antlr.TerminalNode | null;
	DOUBLE_LITERAL(): antlr.TerminalNode | null;
	FLOAT_LITERAL(): antlr.TerminalNode | null;
	BIGDECIMAL_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterColumnActionContext extends antlr.ParserRuleContext {
	_setOrDrop?: Token | null;
	_dropDefault?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TYPE(): antlr.TerminalNode | null;
	dataType(): DataTypeContext | null;
	commentSpec(): CommentSpecContext | null;
	colPosition(): ColPositionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	defaultExpression(): DefaultExpressionContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class StringLitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode | null;
	DOUBLEQUOTED_STRING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class CommentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	stringLit(): StringLitContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class VersionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode | null;
	stringLit(): StringLitContext | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class AnsiNonReservedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_ALWAYS(): antlr.TerminalNode | null;
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_ANTI(): antlr.TerminalNode | null;
	KW_ANY_VALUE(): antlr.TerminalNode | null;
	KW_ARCHIVE(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_AT(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_BINARY_HEX(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_BUCKET(): antlr.TerminalNode | null;
	KW_BUCKETS(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_BYTE(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_CATALOG(): antlr.TerminalNode | null;
	KW_CATALOGS(): antlr.TerminalNode | null;
	KW_CHANGE(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_CLEAR(): antlr.TerminalNode | null;
	KW_CLUSTER(): antlr.TerminalNode | null;
	KW_CLUSTERED(): antlr.TerminalNode | null;
	KW_CODEGEN(): antlr.TerminalNode | null;
	KW_COLLECTION(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_COMPACT(): antlr.TerminalNode | null;
	KW_COMPACTIONS(): antlr.TerminalNode | null;
	KW_COMPUTE(): antlr.TerminalNode | null;
	KW_CONCATENATE(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	KW_CUBE(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DATEADD(): antlr.TerminalNode | null;
	KW_DATE_ADD(): antlr.TerminalNode | null;
	KW_DATEDIFF(): antlr.TerminalNode | null;
	KW_DATE_DIFF(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_DAYOFYEAR(): antlr.TerminalNode | null;
	KW_DBPROPERTIES(): antlr.TerminalNode | null;
	KW_DEC(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_DECLARE(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DEFINED(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_DELIMITED(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DFS(): antlr.TerminalNode | null;
	KW_DIRECTORIES(): antlr.TerminalNode | null;
	KW_DIRECTORY(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_DISTRIBUTE(): antlr.TerminalNode | null;
	KW_DIV(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_ESCAPED(): antlr.TerminalNode | null;
	KW_EXCHANGE(): antlr.TerminalNode | null;
	KW_EXCLUDE(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_EXPORT(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_FILEFORMAT(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	KW_IDENTIFIER(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_IMPORT(): antlr.TerminalNode | null;
	KW_INCLUDE(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_INPATH(): antlr.TerminalNode | null;
	KW_INPUTFORMAT(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_ITEMS(): antlr.TerminalNode | null;
	KW_KEYS(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LAZY(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_ILIKE(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_LINES(): antlr.TerminalNode | null;
	KW_LIST(): antlr.TerminalNode | null;
	KW_LOAD(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_LOCKS(): antlr.TerminalNode | null;
	KW_LOGICAL(): antlr.TerminalNode | null;
	KW_LONG(): antlr.TerminalNode | null;
	KW_MACRO(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_MATCHED(): antlr.TerminalNode | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	KW_MICROSECONDS(): antlr.TerminalNode | null;
	KW_MILLISECOND(): antlr.TerminalNode | null;
	KW_MILLISECONDS(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_MSCK(): antlr.TerminalNode | null;
	KW_NAME(): antlr.TerminalNode | null;
	KW_NAMESPACE(): antlr.TerminalNode | null;
	KW_NAMESPACES(): antlr.TerminalNode | null;
	KW_NANOSECOND(): antlr.TerminalNode | null;
	KW_NANOSECONDS(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_NUMERIC(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	KW_OPTIMIZE(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	KW_OUT(): antlr.TerminalNode | null;
	KW_OUTPUTFORMAT(): antlr.TerminalNode | null;
	KW_OVER(): antlr.TerminalNode | null;
	KW_OVERLAY(): antlr.TerminalNode | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_PARTITIONED(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_PERCENTLIT(): antlr.TerminalNode | null;
	KW_PIVOT(): antlr.TerminalNode | null;
	KW_PLACING(): antlr.TerminalNode | null;
	KW_POSITION(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_PRINCIPALS(): antlr.TerminalNode | null;
	KW_PROPERTIES(): antlr.TerminalNode | null;
	KW_PURGE(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_RANGE(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_RECORDREADER(): antlr.TerminalNode | null;
	KW_RECORDWRITER(): antlr.TerminalNode | null;
	KW_RECOVER(): antlr.TerminalNode | null;
	KW_REDUCE(): antlr.TerminalNode | null;
	KW_REFRESH(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_REPAIR(): antlr.TerminalNode | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_RESPECT(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_REVOKE(): antlr.TerminalNode | null;
	KW_REWRITE(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_ROLES(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	KW_SEMI(): antlr.TerminalNode | null;
	KW_SEPARATED(): antlr.TerminalNode | null;
	KW_SERDE(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_MINUS(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	KW_SHORT(): antlr.TerminalNode | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_SINGLE(): antlr.TerminalNode | null;
	KW_SKEWED(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_SORT(): antlr.TerminalNode | null;
	KW_SORTED(): antlr.TerminalNode | null;
	KW_SOURCE(): antlr.TerminalNode | null;
	KW_START(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	KW_STRATIFY(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	KW_SUBSTR(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_SYNC(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_SYSTEM_TIME(): antlr.TerminalNode | null;
	KW_SYSTEM_VERSION(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_TABLESAMPLE(): antlr.TerminalNode | null;
	KW_TARGET(): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TERMINATED(): antlr.TerminalNode | null;
	KW_TIMEDIFF(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null;
	KW_TIMESTAMP_NTZ(): antlr.TerminalNode | null;
	KW_TIMESTAMPADD(): antlr.TerminalNode | null;
	KW_TIMESTAMPDIFF(): antlr.TerminalNode | null;
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_TOUCH(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_UNARCHIVE(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_UNCACHE(): antlr.TerminalNode | null;
	KW_UNLOCK(): antlr.TerminalNode | null;
	KW_UNPIVOT(): antlr.TerminalNode | null;
	KW_UNSET(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_USE(): antlr.TerminalNode | null;
	KW_VALUES(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_VAR(): antlr.TerminalNode | null;
	KW_VARIABLE(): antlr.TerminalNode | null;
	KW_VERSION(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_VIEWS(): antlr.TerminalNode | null;
	KW_VOID(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_WEEKS(): antlr.TerminalNode | null;
	KW_WINDOW(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	KW_ZORDER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class StrictNonReservedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ANTI(): antlr.TerminalNode | null;
	KW_CROSS(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_INNER(): antlr.TerminalNode | null;
	KW_INTERSECT(): antlr.TerminalNode | null;
	KW_JOIN(): antlr.TerminalNode | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_NATURAL(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_SEMI(): antlr.TerminalNode | null;
	KW_MINUS(): antlr.TerminalNode | null;
	KW_UNION(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
export declare class NonReservedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_ALWAYS(): antlr.TerminalNode | null;
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	KW_ANY_VALUE(): antlr.TerminalNode | null;
	KW_ARCHIVE(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_AT(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_BINARY_HEX(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_BOTH(): antlr.TerminalNode | null;
	KW_BUCKET(): antlr.TerminalNode | null;
	KW_BUCKETS(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_BYTE(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_CASE(): antlr.TerminalNode | null;
	KW_CAST(): antlr.TerminalNode | null;
	KW_CATALOG(): antlr.TerminalNode | null;
	KW_CATALOGS(): antlr.TerminalNode | null;
	KW_CHANGE(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_CHECK(): antlr.TerminalNode | null;
	KW_CLEAR(): antlr.TerminalNode | null;
	KW_CLUSTER(): antlr.TerminalNode | null;
	KW_CLUSTERED(): antlr.TerminalNode | null;
	KW_CODEGEN(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	KW_COLLECTION(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_COMPACT(): antlr.TerminalNode | null;
	KW_COMPACTIONS(): antlr.TerminalNode | null;
	KW_COMPUTE(): antlr.TerminalNode | null;
	KW_CONCATENATE(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_CUBE(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DATEADD(): antlr.TerminalNode | null;
	KW_DATE_ADD(): antlr.TerminalNode | null;
	KW_DATEDIFF(): antlr.TerminalNode | null;
	KW_DATE_DIFF(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_DAYOFYEAR(): antlr.TerminalNode | null;
	KW_DBPROPERTIES(): antlr.TerminalNode | null;
	KW_DEC(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_DECLARE(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DEFINED(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_DELIMITED(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DFS(): antlr.TerminalNode | null;
	KW_DIRECTORIES(): antlr.TerminalNode | null;
	KW_DIRECTORY(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_DISTRIBUTE(): antlr.TerminalNode | null;
	KW_DIV(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_ELSE(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	KW_ESCAPED(): antlr.TerminalNode | null;
	KW_EXCHANGE(): antlr.TerminalNode | null;
	KW_EXCLUDE(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_EXPORT(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_FETCH(): antlr.TerminalNode | null;
	KW_FILTER(): antlr.TerminalNode | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_FILEFORMAT(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	KW_HAVING(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	KW_IDENTIFIER(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_IMPORT(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_INCLUDE(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_INPATH(): antlr.TerminalNode | null;
	KW_INPUTFORMAT(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_ITEMS(): antlr.TerminalNode | null;
	KW_KEYS(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LAZY(): antlr.TerminalNode | null;
	KW_LEADING(): antlr.TerminalNode | null;
	KW_LIFECYCLE(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_LONG(): antlr.TerminalNode | null;
	KW_ILIKE(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_LINES(): antlr.TerminalNode | null;
	KW_LIST(): antlr.TerminalNode | null;
	KW_LOAD(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_LOCKS(): antlr.TerminalNode | null;
	KW_LOGICAL(): antlr.TerminalNode | null;
	KW_MACRO(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_MATCHED(): antlr.TerminalNode | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	KW_MICROSECONDS(): antlr.TerminalNode | null;
	KW_MILLISECOND(): antlr.TerminalNode | null;
	KW_MILLISECONDS(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_MSCK(): antlr.TerminalNode | null;
	KW_NAME(): antlr.TerminalNode | null;
	KW_NAMESPACE(): antlr.TerminalNode | null;
	KW_NAMESPACES(): antlr.TerminalNode | null;
	KW_NANOSECOND(): antlr.TerminalNode | null;
	KW_NANOSECONDS(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_NUMERIC(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_OPTIMIZE(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_OUT(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	KW_OUTPUTFORMAT(): antlr.TerminalNode | null;
	KW_OVER(): antlr.TerminalNode | null;
	KW_OVERLAPS(): antlr.TerminalNode | null;
	KW_OVERLAY(): antlr.TerminalNode | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_PARTITIONED(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_PERCENTILE_CONT(): antlr.TerminalNode | null;
	KW_PERCENTILE_DISC(): antlr.TerminalNode | null;
	KW_PERCENTLIT(): antlr.TerminalNode | null;
	KW_PIVOT(): antlr.TerminalNode | null;
	KW_PLACING(): antlr.TerminalNode | null;
	KW_POSITION(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_PRINCIPALS(): antlr.TerminalNode | null;
	KW_PROPERTIES(): antlr.TerminalNode | null;
	KW_PURGE(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_RANGE(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_RECORDREADER(): antlr.TerminalNode | null;
	KW_RECORDWRITER(): antlr.TerminalNode | null;
	KW_RECOVER(): antlr.TerminalNode | null;
	KW_REDUCE(): antlr.TerminalNode | null;
	KW_REFERENCES(): antlr.TerminalNode | null;
	KW_REFRESH(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_REPAIR(): antlr.TerminalNode | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_RESPECT(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_REVOKE(): antlr.TerminalNode | null;
	KW_REWRITE(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_ROLES(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	KW_SEPARATED(): antlr.TerminalNode | null;
	KW_SERDE(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	KW_SESSION_USER(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	KW_SHORT(): antlr.TerminalNode | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_SINGLE(): antlr.TerminalNode | null;
	KW_SKEWED(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_SORT(): antlr.TerminalNode | null;
	KW_SORTED(): antlr.TerminalNode | null;
	KW_SOURCE(): antlr.TerminalNode | null;
	KW_START(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	KW_STRATIFY(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	KW_SUBSTR(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_SYNC(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_SYSTEM_TIME(): antlr.TerminalNode | null;
	KW_SYSTEM_VERSION(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_TABLESAMPLE(): antlr.TerminalNode | null;
	KW_TARGET(): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TERMINATED(): antlr.TerminalNode | null;
	KW_THEN(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMEDIFF(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null;
	KW_TIMESTAMP_NTZ(): antlr.TerminalNode | null;
	KW_TIMESTAMPADD(): antlr.TerminalNode | null;
	KW_TIMESTAMPDIFF(): antlr.TerminalNode | null;
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_TOUCH(): antlr.TerminalNode | null;
	KW_TRAILING(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_UNARCHIVE(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_UNCACHE(): antlr.TerminalNode | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_UNLOCK(): antlr.TerminalNode | null;
	KW_UNPIVOT(): antlr.TerminalNode | null;
	KW_UNSET(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_USE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_VALUES(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_VAR(): antlr.TerminalNode | null;
	KW_VARIABLE(): antlr.TerminalNode | null;
	KW_VERSION(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_VIEWS(): antlr.TerminalNode | null;
	KW_VOID(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_WEEKS(): antlr.TerminalNode | null;
	KW_WHEN(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	KW_WINDOW(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_WITHIN(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	KW_ZORDER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: SparkSqlParserListener): void;
	exitRule(listener: SparkSqlParserListener): void;
	accept<Result>(visitor: SparkSqlParserVisitor<Result>): Result | null;
}
