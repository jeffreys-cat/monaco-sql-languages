import * as antlr from 'antlr4ng';
import { Token } from 'antlr4ng';
import { HiveSqlParserListener } from './HiveSqlParserListener.js';
import { HiveSqlParserVisitor } from './HiveSqlParserVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class HiveSqlParser extends SQLParserBase {
	static readonly KW_ABORT = 1;
	static readonly KW_ACTIVATE = 2;
	static readonly KW_ACTIVE = 3;
	static readonly KW_ADD = 4;
	static readonly KW_ADMIN = 5;
	static readonly KW_AFTER = 6;
	static readonly KW_ALL = 7;
	static readonly KW_ALLOC_FRACTION = 8;
	static readonly KW_ALTER = 9;
	static readonly KW_ANALYZE = 10;
	static readonly KW_AND = 11;
	static readonly KW_ANTI = 12;
	static readonly KW_ANY = 13;
	static readonly KW_APPLICATION = 14;
	static readonly KW_ARCHIVE = 15;
	static readonly KW_ARRAY = 16;
	static readonly KW_AS = 17;
	static readonly KW_ASC = 18;
	static readonly KW_AST = 19;
	static readonly KW_AT = 20;
	static readonly KW_AUTHORIZATION = 21;
	static readonly KW_AUTOCOMMIT = 22;
	static readonly KW_BATCH = 23;
	static readonly KW_BEFORE = 24;
	static readonly KW_BETWEEN = 25;
	static readonly KW_BIGINT = 26;
	static readonly KW_BINARY = 27;
	static readonly KW_BOOLEAN = 28;
	static readonly KW_BOTH = 29;
	static readonly KW_BUCKET = 30;
	static readonly KW_BUCKETS = 31;
	static readonly KW_BY = 32;
	static readonly KW_CACHE = 33;
	static readonly KW_CASCADE = 34;
	static readonly KW_CASE = 35;
	static readonly KW_CAST = 36;
	static readonly KW_CBO = 37;
	static readonly KW_CHANGE = 38;
	static readonly KW_CHAR = 39;
	static readonly KW_CHECK = 40;
	static readonly KW_CLUSTER = 41;
	static readonly KW_CLUSTERED = 42;
	static readonly KW_CLUSTERSTATUS = 43;
	static readonly KW_COLLECTION = 44;
	static readonly KW_COLUMN = 45;
	static readonly KW_COLUMNS = 46;
	static readonly KW_COMMENT = 47;
	static readonly KW_COMMIT = 48;
	static readonly KW_COMPACT = 49;
	static readonly KW_COMPACTIONS = 50;
	static readonly KW_COMPACT_ID = 51;
	static readonly KW_COMPUTE = 52;
	static readonly KW_CONCATENATE = 53;
	static readonly KW_CONF = 54;
	static readonly KW_CONSTRAINT = 55;
	static readonly KW_CONTINUE = 56;
	static readonly KW_COST = 57;
	static readonly KW_CREATE = 58;
	static readonly KW_CRON = 59;
	static readonly KW_CROSS = 60;
	static readonly KW_CUBE = 61;
	static readonly KW_CURRENT = 62;
	static readonly KW_CURRENT_DATE = 63;
	static readonly KW_CURRENT_TIMESTAMP = 64;
	static readonly KW_CURSOR = 65;
	static readonly KW_DATA = 66;
	static readonly KW_DATABASE = 67;
	static readonly KW_DATABASES = 68;
	static readonly KW_DATACONNECTOR = 69;
	static readonly KW_DATACONNECTORS = 70;
	static readonly KW_DATE = 71;
	static readonly KW_DATETIME = 72;
	static readonly KW_DAY = 73;
	static readonly KW_DAYS = 74;
	static readonly KW_DAYOFWEEK = 75;
	static readonly KW_DBPROPERTIES = 76;
	static readonly KW_DCPROPERTIES = 77;
	static readonly KW_DDL = 78;
	static readonly KW_DEBUG = 79;
	static readonly KW_DEC = 80;
	static readonly KW_DECIMAL = 81;
	static readonly KW_NUMERIC = 82;
	static readonly KW_DEFAULT = 83;
	static readonly KW_DEFERRED = 84;
	static readonly KW_DEFINED = 85;
	static readonly KW_DELETE = 86;
	static readonly KW_DELIMITED = 87;
	static readonly KW_DEPENDENCY = 88;
	static readonly KW_DESC = 89;
	static readonly KW_DESCRIBE = 90;
	static readonly KW_DETAIL = 91;
	static readonly KW_DIRECTORIES = 92;
	static readonly KW_DIRECTORY = 93;
	static readonly KW_DISABLE = 94;
	static readonly KW_DISABLED = 95;
	static readonly KW_DISTINCT = 96;
	static readonly KW_DISTRIBUTE = 97;
	static readonly KW_DISTRIBUTED = 98;
	static readonly KW_DO = 99;
	static readonly KW_DOUBLE = 100;
	static readonly KW_DROP = 101;
	static readonly KW_RECOVER = 102;
	static readonly KW_DUMP = 103;
	static readonly KW_ELEM_TYPE = 104;
	static readonly KW_ELSE = 105;
	static readonly KW_ENABLE = 106;
	static readonly KW_ENABLED = 107;
	static readonly KW_END = 108;
	static readonly KW_ENFORCED = 109;
	static readonly KW_ESCAPED = 110;
	static readonly KW_EVERY = 111;
	static readonly KW_EXCEPT = 112;
	static readonly KW_EXCHANGE = 113;
	static readonly KW_EXCLUSIVE = 114;
	static readonly KW_EXECUTE = 115;
	static readonly KW_EXECUTED = 116;
	static readonly KW_EXISTS = 117;
	static readonly KW_EXPIRE_SNAPSHOTS = 118;
	static readonly KW_EXPLAIN = 119;
	static readonly KW_EXPORT = 120;
	static readonly KW_EXPRESSION = 121;
	static readonly KW_EXTENDED = 122;
	static readonly KW_EXTERNAL = 123;
	static readonly KW_EXTRACT = 124;
	static readonly KW_FALSE = 125;
	static readonly KW_FETCH = 126;
	static readonly KW_FIELDS = 127;
	static readonly KW_FILE = 128;
	static readonly KW_FILEFORMAT = 129;
	static readonly KW_FIRST = 130;
	static readonly KW_FLOAT = 131;
	static readonly KW_FLOOR = 132;
	static readonly KW_FOLLOWING = 133;
	static readonly KW_FOR = 134;
	static readonly KW_FORCE = 135;
	static readonly KW_FOREIGN = 136;
	static readonly KW_FORMAT = 137;
	static readonly KW_FORMATTED = 138;
	static readonly KW_FROM = 139;
	static readonly KW_FULL = 140;
	static readonly KW_FUNCTION = 141;
	static readonly KW_FUNCTIONS = 142;
	static readonly KW_GRANT = 143;
	static readonly KW_GROUP = 144;
	static readonly KW_GROUPING = 145;
	static readonly KW_HAVING = 146;
	static readonly KW_HOLD_DDLTIME = 147;
	static readonly KW_HOUR = 148;
	static readonly KW_HOURS = 149;
	static readonly KW_IDXPROPERTIES = 150;
	static readonly KW_IF = 151;
	static readonly KW_IGNORE = 152;
	static readonly KW_IMPORT = 153;
	static readonly KW_IN = 154;
	static readonly KW_INDEX = 155;
	static readonly KW_INDEXES = 156;
	static readonly KW_INNER = 157;
	static readonly KW_INPATH = 158;
	static readonly KW_INPUTDRIVER = 159;
	static readonly KW_INPUTFORMAT = 160;
	static readonly KW_INSERT = 161;
	static readonly KW_INT = 162;
	static readonly KW_INTEGER = 163;
	static readonly KW_INTERSECT = 164;
	static readonly KW_INTERVAL = 165;
	static readonly KW_INTO = 166;
	static readonly KW_IS = 167;
	static readonly KW_ISOLATION = 168;
	static readonly KW_ITEMS = 169;
	static readonly KW_JAR = 170;
	static readonly KW_JOIN = 171;
	static readonly KW_JOINCOST = 172;
	static readonly KW_KEY = 173;
	static readonly KW_KEYS = 174;
	static readonly KW_KEY_TYPE = 175;
	static readonly KW_KILL = 176;
	static readonly KW_LAST = 177;
	static readonly KW_LATERAL = 178;
	static readonly KW_LEADING = 179;
	static readonly KW_LEFT = 180;
	static readonly KW_LESS = 181;
	static readonly KW_LEVEL = 182;
	static readonly KW_LIFECYCLE = 183;
	static readonly KW_LIKE = 184;
	static readonly KW_LIMIT = 185;
	static readonly KW_LINES = 186;
	static readonly KW_LOAD = 187;
	static readonly KW_LOCAL = 188;
	static readonly KW_LOCATION = 189;
	static readonly KW_LOCK = 190;
	static readonly KW_LOCKS = 191;
	static readonly KW_LOGICAL = 192;
	static readonly KW_LONG = 193;
	static readonly KW_MACRO = 194;
	static readonly KW_MANAGED = 195;
	static readonly KW_MANAGEDLOCATION = 196;
	static readonly KW_MANAGEMENT = 197;
	static readonly KW_MAP = 198;
	static readonly KW_MAPJOIN = 199;
	static readonly KW_MAPPING = 200;
	static readonly KW_MATCHED = 201;
	static readonly KW_MATERIALIZED = 202;
	static readonly KW_MERGE = 203;
	static readonly KW_METADATA = 204;
	static readonly KW_MINUS = 205;
	static readonly KW_MINUTE = 206;
	static readonly KW_MINUTES = 207;
	static readonly KW_MONTH = 208;
	static readonly KW_MONTHS = 209;
	static readonly KW_MORE = 210;
	static readonly KW_MOVE = 211;
	static readonly KW_MSCK = 212;
	static readonly KW_NONE = 213;
	static readonly KW_NORELY = 214;
	static readonly KW_NOSCAN = 215;
	static readonly KW_NOT = 216;
	static readonly KW_NOVALIDATE = 217;
	static readonly KW_NO_DROP = 218;
	static readonly KW_NULL = 219;
	static readonly KW_NULLS = 220;
	static readonly KW_OF = 221;
	static readonly KW_OFFLINE = 222;
	static readonly KW_OFFSET = 223;
	static readonly KW_ON = 224;
	static readonly KW_ONLY = 225;
	static readonly KW_OPERATOR = 226;
	static readonly KW_OPTION = 227;
	static readonly KW_OR = 228;
	static readonly KW_ORDER = 229;
	static readonly KW_OUT = 230;
	static readonly KW_OUTER = 231;
	static readonly KW_OUTPUTDRIVER = 232;
	static readonly KW_OUTPUTFORMAT = 233;
	static readonly KW_OVER = 234;
	static readonly KW_OVERWRITE = 235;
	static readonly KW_OWNER = 236;
	static readonly KW_PARTITION = 237;
	static readonly KW_PARTITIONED = 238;
	static readonly KW_PARTITIONS = 239;
	static readonly KW_PATH = 240;
	static readonly KW_PERCENT = 241;
	static readonly KW_PKFK_JOIN = 242;
	static readonly KW_PLAN = 243;
	static readonly KW_PLANS = 244;
	static readonly KW_PLUS = 245;
	static readonly KW_POOL = 246;
	static readonly KW_PRECEDING = 247;
	static readonly KW_PRECISION = 248;
	static readonly KW_PREPARE = 249;
	static readonly KW_PRESERVE = 250;
	static readonly KW_PRIMARY = 251;
	static readonly KW_PRINCIPALS = 252;
	static readonly KW_PROCEDURE = 253;
	static readonly KW_PROTECTION = 254;
	static readonly KW_PURGE = 255;
	static readonly KW_QUALIFY = 256;
	static readonly KW_QUARTER = 257;
	static readonly KW_QUERY = 258;
	static readonly KW_QUERY_PARALLELISM = 259;
	static readonly KW_RANGE = 260;
	static readonly KW_READ = 261;
	static readonly KW_READONLY = 262;
	static readonly KW_READS = 263;
	static readonly KW_REAL = 264;
	static readonly KW_REBUILD = 265;
	static readonly KW_RECORDREADER = 266;
	static readonly KW_RECORDWRITER = 267;
	static readonly KW_REDUCE = 268;
	static readonly KW_REFERENCES = 269;
	static readonly KW_REGEXP = 270;
	static readonly KW_RELOAD = 271;
	static readonly KW_RELY = 272;
	static readonly KW_REMOTE = 273;
	static readonly KW_RENAME = 274;
	static readonly KW_REOPTIMIZATION = 275;
	static readonly KW_REPAIR = 276;
	static readonly KW_REPL = 277;
	static readonly KW_REPLACE = 278;
	static readonly KW_REPLICATION = 279;
	static readonly KW_RESOURCE = 280;
	static readonly KW_RESPECT = 281;
	static readonly KW_RESTRICT = 282;
	static readonly KW_REVOKE = 283;
	static readonly KW_REWRITE = 284;
	static readonly KW_RIGHT = 285;
	static readonly KW_RLIKE = 286;
	static readonly KW_ROLE = 287;
	static readonly KW_ROLES = 288;
	static readonly KW_ROLLBACK = 289;
	static readonly KW_ROLLUP = 290;
	static readonly KW_ROW = 291;
	static readonly KW_ROWS = 292;
	static readonly KW_SCHEDULED = 293;
	static readonly KW_SCHEDULING_POLICY = 294;
	static readonly KW_SCHEMA = 295;
	static readonly KW_SCHEMAS = 296;
	static readonly KW_SECOND = 297;
	static readonly KW_SECONDS = 298;
	static readonly KW_SELECT = 299;
	static readonly KW_SEMI = 300;
	static readonly KW_SERDE = 301;
	static readonly KW_SERDEPROPERTIES = 302;
	static readonly KW_SERVER = 303;
	static readonly KW_SET = 304;
	static readonly KW_SETS = 305;
	static readonly KW_SET_CURRENT_SNAPSHOT = 306;
	static readonly KW_SHARED = 307;
	static readonly KW_SHOW = 308;
	static readonly KW_SHOW_DATABASE = 309;
	static readonly KW_SKEWED = 310;
	static readonly KW_SMALLINT = 311;
	static readonly KW_SNAPSHOT = 312;
	static readonly KW_SOME = 313;
	static readonly KW_SORT = 314;
	static readonly KW_SORTED = 315;
	static readonly KW_SPEC = 316;
	static readonly KW_SSL = 317;
	static readonly KW_START = 318;
	static readonly KW_STATISTICS = 319;
	static readonly KW_STATUS = 320;
	static readonly KW_STORED = 321;
	static readonly KW_STREAMTABLE = 322;
	static readonly KW_STRING = 323;
	static readonly KW_STRUCT = 324;
	static readonly KW_SUMMARY = 325;
	static readonly KW_SYNC = 326;
	static readonly KW_SYSTEM_TIME = 327;
	static readonly KW_SYSTEM_VERSION = 328;
	static readonly KW_TABLE = 329;
	static readonly KW_TABLES = 330;
	static readonly KW_TABLESAMPLE = 331;
	static readonly KW_TBLPROPERTIES = 332;
	static readonly KW_TEMPORARY = 333;
	static readonly KW_TERMINATED = 334;
	static readonly KW_THEN = 335;
	static readonly KW_TIME = 336;
	static readonly KW_TIMESTAMP = 337;
	static readonly KW_TIMESTAMPLOCALTZ = 338;
	static readonly KW_TIMESTAMPTZ = 339;
	static readonly KW_TINYINT = 340;
	static readonly KW_TO = 341;
	static readonly KW_TOUCH = 342;
	static readonly KW_TRAILING = 343;
	static readonly KW_TRANSACTION = 344;
	static readonly KW_TRANSACTIONAL = 345;
	static readonly KW_TRANSACTIONS = 346;
	static readonly KW_TRANSFORM = 347;
	static readonly KW_TRIGGER = 348;
	static readonly KW_TRIM = 349;
	static readonly KW_TRUE = 350;
	static readonly KW_TRUNCATE = 351;
	static readonly KW_TYPE = 352;
	static readonly KW_UNARCHIVE = 353;
	static readonly KW_UNBOUNDED = 354;
	static readonly KW_UNDO = 355;
	static readonly KW_UNION = 356;
	static readonly KW_UNIONTYPE = 357;
	static readonly KW_UNIQUE = 358;
	static readonly KW_UNIQUEJOIN = 359;
	static readonly KW_UNKNOWN = 360;
	static readonly KW_UNLOCK = 361;
	static readonly KW_UNMANAGED = 362;
	static readonly KW_UNSET = 363;
	static readonly KW_UNSIGNED = 364;
	static readonly KW_UPDATE = 365;
	static readonly KW_URI = 366;
	static readonly KW_URL = 367;
	static readonly KW_USE = 368;
	static readonly KW_USER = 369;
	static readonly KW_USING = 370;
	static readonly KW_UTC = 371;
	static readonly KW_UTCTIMESTAMP = 372;
	static readonly KW_VALIDATE = 373;
	static readonly KW_VALUES = 374;
	static readonly KW_VALUE_TYPE = 375;
	static readonly KW_VARCHAR = 376;
	static readonly KW_VECTORIZATION = 377;
	static readonly KW_VIEW = 378;
	static readonly KW_VIEWS = 379;
	static readonly KW_WAIT = 380;
	static readonly KW_WEEK = 381;
	static readonly KW_WEEKS = 382;
	static readonly KW_WHEN = 383;
	static readonly KW_WHERE = 384;
	static readonly KW_WHILE = 385;
	static readonly KW_WINDOW = 386;
	static readonly KW_WITH = 387;
	static readonly KW_WITHIN = 388;
	static readonly KW_WORK = 389;
	static readonly KW_WORKLOAD = 390;
	static readonly KW_WRITE = 391;
	static readonly KW_YEAR = 392;
	static readonly KW_YEARS = 393;
	static readonly KW_ZONE = 394;
	static readonly DOT = 395;
	static readonly COLON = 396;
	static readonly COMMA = 397;
	static readonly SEMICOLON = 398;
	static readonly LPAREN = 399;
	static readonly RPAREN = 400;
	static readonly LSQUARE = 401;
	static readonly RSQUARE = 402;
	static readonly LCURLY = 403;
	static readonly RCURLY = 404;
	static readonly EQUAL = 405;
	static readonly EQUAL_NS = 406;
	static readonly NOTEQUAL = 407;
	static readonly LESSTHANOREQUALTO = 408;
	static readonly LESSTHAN = 409;
	static readonly GREATERTHANOREQUALTO = 410;
	static readonly GREATERTHAN = 411;
	static readonly DIVIDE = 412;
	static readonly PLUS = 413;
	static readonly MINUS = 414;
	static readonly STAR = 415;
	static readonly MOD = 416;
	static readonly DIV = 417;
	static readonly BITWISENOT = 418;
	static readonly AMPERSAND = 419;
	static readonly TILDE = 420;
	static readonly BITWISEOR = 421;
	static readonly CONCATENATE = 422;
	static readonly BITWISEXOR = 423;
	static readonly QUESTION = 424;
	static readonly DOLLAR = 425;
	static readonly StringLiteral = 426;
	static readonly CharSetLiteral = 427;
	static readonly IntegralLiteral = 428;
	static readonly NumberLiteral = 429;
	static readonly ByteLengthLiteral = 430;
	static readonly Number = 431;
	static readonly Identifier = 432;
	static readonly CharSetName = 433;
	static readonly WHITE_SPACE = 434;
	static readonly LINE_COMMENT = 435;
	static readonly QUERY_HINT = 436;
	static readonly SHOW_HINT = 437;
	static readonly HIDDEN_HINT = 438;
	static readonly RULE_program = 0;
	static readonly RULE_statement = 1;
	static readonly RULE_explainStatement = 2;
	static readonly RULE_explainOption = 3;
	static readonly RULE_vectorizatonDetail = 4;
	static readonly RULE_execStatement = 5;
	static readonly RULE_loadStatement = 6;
	static readonly RULE_replicationClause = 7;
	static readonly RULE_exportStatement = 8;
	static readonly RULE_importStatement = 9;
	static readonly RULE_replDumpStatement = 10;
	static readonly RULE_replDbPolicy = 11;
	static readonly RULE_replLoadStatement = 12;
	static readonly RULE_replTableLevelPolicy = 13;
	static readonly RULE_ddlStatement = 14;
	static readonly RULE_ifExists = 15;
	static readonly RULE_ifNotExists = 16;
	static readonly RULE_restrictOrCascade = 17;
	static readonly RULE_rewriteEnabled = 18;
	static readonly RULE_rewriteDisabled = 19;
	static readonly RULE_storedAsDirs = 20;
	static readonly RULE_createDatabaseStatement = 21;
	static readonly RULE_dbConnectorName = 22;
	static readonly RULE_switchDatabaseStatement = 23;
	static readonly RULE_dropDatabaseStatement = 24;
	static readonly RULE_databaseComment = 25;
	static readonly RULE_truncateTableStatement = 26;
	static readonly RULE_dropTableStatement = 27;
	static readonly RULE_inputFileFormat = 28;
	static readonly RULE_tabTypeExpr = 29;
	static readonly RULE_partTypeExpr = 30;
	static readonly RULE_tabPartColTypeExpr = 31;
	static readonly RULE_descStatement = 32;
	static readonly RULE_analyzeStatement = 33;
	static readonly RULE_from_in = 34;
	static readonly RULE_db_schema = 35;
	static readonly RULE_showStatement = 36;
	static readonly RULE_showTablesFilterExpr = 37;
	static readonly RULE_lockStatement = 38;
	static readonly RULE_lockDatabase = 39;
	static readonly RULE_lockMode = 40;
	static readonly RULE_unlockStatement = 41;
	static readonly RULE_unlockDatabase = 42;
	static readonly RULE_createRoleStatement = 43;
	static readonly RULE_dropRoleStatement = 44;
	static readonly RULE_grantPrivileges = 45;
	static readonly RULE_revokePrivileges = 46;
	static readonly RULE_grantRole = 47;
	static readonly RULE_revokeRole = 48;
	static readonly RULE_showRoleGrants = 49;
	static readonly RULE_showRoles = 50;
	static readonly RULE_showCurrentRole = 51;
	static readonly RULE_setRole = 52;
	static readonly RULE_showGrants = 53;
	static readonly RULE_showRolePrincipals = 54;
	static readonly RULE_privilegeIncludeColObject = 55;
	static readonly RULE_privilegeObject = 56;
	static readonly RULE_privObject = 57;
	static readonly RULE_privObjectCols = 58;
	static readonly RULE_privilegeList = 59;
	static readonly RULE_privlegeDef = 60;
	static readonly RULE_privilegeType = 61;
	static readonly RULE_principalSpecification = 62;
	static readonly RULE_principalName = 63;
	static readonly RULE_principalAlterName = 64;
	static readonly RULE_withGrantOption = 65;
	static readonly RULE_grantOptionFor = 66;
	static readonly RULE_adminOptionFor = 67;
	static readonly RULE_withAdminOption = 68;
	static readonly RULE_metastoreCheck = 69;
	static readonly RULE_resourceList = 70;
	static readonly RULE_resource = 71;
	static readonly RULE_resourceType = 72;
	static readonly RULE_createFunctionStatement = 73;
	static readonly RULE_dropFunctionStatement = 74;
	static readonly RULE_reloadFunctionsStatement = 75;
	static readonly RULE_createMacroStatement = 76;
	static readonly RULE_dropMacroStatement = 77;
	static readonly RULE_createIndexStatement = 78;
	static readonly RULE_dropIndexStatement = 79;
	static readonly RULE_createViewStatement = 80;
	static readonly RULE_viewPartition = 81;
	static readonly RULE_viewOrganization = 82;
	static readonly RULE_viewClusterSpec = 83;
	static readonly RULE_viewComplexSpec = 84;
	static readonly RULE_viewDistSpec = 85;
	static readonly RULE_viewSortSpec = 86;
	static readonly RULE_dropViewStatement = 87;
	static readonly RULE_createMaterializedViewStatement = 88;
	static readonly RULE_dropMaterializedViewStatement = 89;
	static readonly RULE_createScheduledQueryStatement = 90;
	static readonly RULE_dropScheduledQueryStatement = 91;
	static readonly RULE_alterScheduledQueryStatement = 92;
	static readonly RULE_alterScheduledQueryChange = 93;
	static readonly RULE_scheduleSpec = 94;
	static readonly RULE_executedAsSpec = 95;
	static readonly RULE_definedAsSpec = 96;
	static readonly RULE_showStmtIdentifier = 97;
	static readonly RULE_tableComment = 98;
	static readonly RULE_tableLifecycle = 99;
	static readonly RULE_createTablePartitionSpec = 100;
	static readonly RULE_createTablePartitionColumnTypeSpec = 101;
	static readonly RULE_partitionTransformSpec = 102;
	static readonly RULE_partitionTransformType = 103;
	static readonly RULE_tableBuckets = 104;
	static readonly RULE_tableSkewed = 105;
	static readonly RULE_rowFormat = 106;
	static readonly RULE_recordReader = 107;
	static readonly RULE_recordWriter = 108;
	static readonly RULE_rowFormatSerde = 109;
	static readonly RULE_rowFormatDelimited = 110;
	static readonly RULE_tableRowFormat = 111;
	static readonly RULE_tablePropertiesPrefixed = 112;
	static readonly RULE_tableProperties = 113;
	static readonly RULE_tablePropertiesList = 114;
	static readonly RULE_keyValueProperties = 115;
	static readonly RULE_keyValuePropertyList = 116;
	static readonly RULE_keyValueProperty = 117;
	static readonly RULE_tableRowFormatFieldIdentifier = 118;
	static readonly RULE_tableRowFormatCollItemsIdentifier = 119;
	static readonly RULE_tableRowFormatMapKeysIdentifier = 120;
	static readonly RULE_tableRowFormatLinesIdentifier = 121;
	static readonly RULE_tableRowNullFormat = 122;
	static readonly RULE_tableFileFormat = 123;
	static readonly RULE_columnNameTypeList = 124;
	static readonly RULE_columnNameTypeOrConstraintList = 125;
	static readonly RULE_columnNameColonTypeList = 126;
	static readonly RULE_columnNameList = 127;
	static readonly RULE_columnName = 128;
	static readonly RULE_columnNameCreate = 129;
	static readonly RULE_extColumnName = 130;
	static readonly RULE_columnNameOrderList = 131;
	static readonly RULE_columnParenthesesList = 132;
	static readonly RULE_enableValidateSpecification = 133;
	static readonly RULE_enableSpecification = 134;
	static readonly RULE_validateSpecification = 135;
	static readonly RULE_enforcedSpecification = 136;
	static readonly RULE_relySpecification = 137;
	static readonly RULE_createConstraint = 138;
	static readonly RULE_alterConstraintWithName = 139;
	static readonly RULE_tableLevelConstraint = 140;
	static readonly RULE_pkUkConstraint = 141;
	static readonly RULE_checkConstraint = 142;
	static readonly RULE_createForeignKey = 143;
	static readonly RULE_alterForeignKeyWithName = 144;
	static readonly RULE_skewedValueElement = 145;
	static readonly RULE_skewedColumnValuePairList = 146;
	static readonly RULE_skewedColumnValuePair = 147;
	static readonly RULE_constantList = 148;
	static readonly RULE_orderSpecification = 149;
	static readonly RULE_nullOrdering = 150;
	static readonly RULE_columnNameOrder = 151;
	static readonly RULE_columnNameCommentList = 152;
	static readonly RULE_columnNameComment = 153;
	static readonly RULE_columnRefOrder = 154;
	static readonly RULE_columnNameType = 155;
	static readonly RULE_columnNameTypeOrConstraint = 156;
	static readonly RULE_tableConstraint = 157;
	static readonly RULE_columnNameTypeConstraint = 158;
	static readonly RULE_columnConstraint = 159;
	static readonly RULE_foreignKeyConstraint = 160;
	static readonly RULE_colConstraint = 161;
	static readonly RULE_alterColumnConstraint = 162;
	static readonly RULE_alterForeignKeyConstraint = 163;
	static readonly RULE_alterColConstraint = 164;
	static readonly RULE_columnConstraintType = 165;
	static readonly RULE_defaultVal = 166;
	static readonly RULE_tableConstraintType = 167;
	static readonly RULE_constraintOptsCreate = 168;
	static readonly RULE_constraintOptsAlter = 169;
	static readonly RULE_columnNameColonType = 170;
	static readonly RULE_columnType = 171;
	static readonly RULE_columnTypeList = 172;
	static readonly RULE_type = 173;
	static readonly RULE_primitiveType = 174;
	static readonly RULE_listType = 175;
	static readonly RULE_structType = 176;
	static readonly RULE_mapType = 177;
	static readonly RULE_unionType = 178;
	static readonly RULE_setOperator = 179;
	static readonly RULE_queryStatementExpression = 180;
	static readonly RULE_queryStatementExpressionBody = 181;
	static readonly RULE_withClause = 182;
	static readonly RULE_cteStatement = 183;
	static readonly RULE_fromStatement = 184;
	static readonly RULE_singleFromStatement = 185;
	static readonly RULE_regularBody = 186;
	static readonly RULE_atomSelectStatement = 187;
	static readonly RULE_selectStatement = 188;
	static readonly RULE_setOpSelectStatement = 189;
	static readonly RULE_selectStatementWithCTE = 190;
	static readonly RULE_insertClause = 191;
	static readonly RULE_destination = 192;
	static readonly RULE_limitClause = 193;
	static readonly RULE_columnAssignmentClause = 194;
	static readonly RULE_precedencePlusExpressionOrDefault = 195;
	static readonly RULE_setColumnsClause = 196;
	static readonly RULE_sqlTransactionStatement = 197;
	static readonly RULE_transactionMode = 198;
	static readonly RULE_whenClauses = 199;
	static readonly RULE_whenNotMatchedClause = 200;
	static readonly RULE_whenMatchedAndClause = 201;
	static readonly RULE_whenMatchedThenClause = 202;
	static readonly RULE_compactionPool = 203;
	static readonly RULE_compactionType = 204;
	static readonly RULE_compactionStatus = 205;
	static readonly RULE_alterStatement = 206;
	static readonly RULE_alterTableStatementSuffix = 207;
	static readonly RULE_alterTblPartitionStatementSuffix = 208;
	static readonly RULE_alterViewStatementSuffix = 209;
	static readonly RULE_alterDatabaseStatementSuffix = 210;
	static readonly RULE_alterDataConnectorStatementSuffix = 211;
	static readonly RULE_locationPath = 212;
	static readonly RULE_alterStatementSuffixDropPartitions = 213;
	static readonly RULE_skewedLocationMap = 214;
	static readonly RULE_alterStatementSuffixExecute = 215;
	static readonly RULE_fileFormat = 216;
	static readonly RULE_likeTableOrFile = 217;
	static readonly RULE_createTableStatement = 218;
	static readonly RULE_createDataConnectorStatement = 219;
	static readonly RULE_dropDataConnectorStatement = 220;
	static readonly RULE_tableAllColumns = 221;
	static readonly RULE_expressionList = 222;
	static readonly RULE_aliasList = 223;
	static readonly RULE_fromClause = 224;
	static readonly RULE_fromSource = 225;
	static readonly RULE_atomjoinSource = 226;
	static readonly RULE_joinSource = 227;
	static readonly RULE_joinSourcePart = 228;
	static readonly RULE_uniqueJoinSource = 229;
	static readonly RULE_joinToken = 230;
	static readonly RULE_lateralView = 231;
	static readonly RULE_tableAlias = 232;
	static readonly RULE_tableSample = 233;
	static readonly RULE_tableSource = 234;
	static readonly RULE_asOfClause = 235;
	static readonly RULE_dbSchemaName = 236;
	static readonly RULE_dbSchemaNameCreate = 237;
	static readonly RULE_tableOrView = 238;
	static readonly RULE_tableName = 239;
	static readonly RULE_tableNameCreate = 240;
	static readonly RULE_viewName = 241;
	static readonly RULE_viewNameCreate = 242;
	static readonly RULE_subQuerySource = 243;
	static readonly RULE_partitioningSpec = 244;
	static readonly RULE_partitionTableFunctionSource = 245;
	static readonly RULE_partitionedTableFunction = 246;
	static readonly RULE_whereClause = 247;
	static readonly RULE_valuesClause = 248;
	static readonly RULE_virtualTableSource = 249;
	static readonly RULE_selectClause = 250;
	static readonly RULE_selectTrfmClause = 251;
	static readonly RULE_selectItem = 252;
	static readonly RULE_trfmClause = 253;
	static readonly RULE_selectExpression = 254;
	static readonly RULE_selectExpressionList = 255;
	static readonly RULE_window_clause = 256;
	static readonly RULE_window_specification = 257;
	static readonly RULE_window_frame = 258;
	static readonly RULE_window_frame_boundary = 259;
	static readonly RULE_groupByClause = 260;
	static readonly RULE_rollupStandard = 261;
	static readonly RULE_rollupOldSyntax = 262;
	static readonly RULE_groupingSetExpression = 263;
	static readonly RULE_havingClause = 264;
	static readonly RULE_qualifyClause = 265;
	static readonly RULE_expressionOrDefault = 266;
	static readonly RULE_firstExpressionsWithAlias = 267;
	static readonly RULE_expressions = 268;
	static readonly RULE_expressionsInParenthesis = 269;
	static readonly RULE_expressionsNotInParenthesis = 270;
	static readonly RULE_orderByClause = 271;
	static readonly RULE_clusterByClause = 272;
	static readonly RULE_distributeByClause = 273;
	static readonly RULE_sortByClause = 274;
	static readonly RULE_function_ = 275;
	static readonly RULE_null_treatment = 276;
	static readonly RULE_functionNameCreate = 277;
	static readonly RULE_functionNameForDDL = 278;
	static readonly RULE_functionNameForInvoke = 279;
	static readonly RULE_castExpression = 280;
	static readonly RULE_caseExpression = 281;
	static readonly RULE_whenExpression = 282;
	static readonly RULE_floorExpression = 283;
	static readonly RULE_extractExpression = 284;
	static readonly RULE_timeQualifiers = 285;
	static readonly RULE_constant = 286;
	static readonly RULE_intervalValue = 287;
	static readonly RULE_intervalExpression = 288;
	static readonly RULE_intervalQualifiers = 289;
	static readonly RULE_expression = 290;
	static readonly RULE_atomExpression = 291;
	static readonly RULE_precedenceUnaryPrefixExpression = 292;
	static readonly RULE_precedenceBitwiseXorExpression = 293;
	static readonly RULE_precedenceStarExpression = 294;
	static readonly RULE_precedencePlusExpression = 295;
	static readonly RULE_precedenceConcatenateExpression = 296;
	static readonly RULE_precedenceAmpersandExpression = 297;
	static readonly RULE_precedenceBitwiseOrExpression = 298;
	static readonly RULE_precedenceSimilarOperator = 299;
	static readonly RULE_subQueryExpression = 300;
	static readonly RULE_precedenceSimilarExpression = 301;
	static readonly RULE_precedenceSimilarExpressionPart = 302;
	static readonly RULE_precedenceSimilarExpressionAtom = 303;
	static readonly RULE_precedenceSimilarExpressionIn = 304;
	static readonly RULE_precedenceSimilarExpressionPartNot = 305;
	static readonly RULE_precedenceDistinctOperator = 306;
	static readonly RULE_precedenceEqualOperator = 307;
	static readonly RULE_precedenceEqualExpression = 308;
	static readonly RULE_isCondition = 309;
	static readonly RULE_precedenceNotExpression = 310;
	static readonly RULE_precedenceAndExpression = 311;
	static readonly RULE_tableOrPartition = 312;
	static readonly RULE_partitionSpec = 313;
	static readonly RULE_partitionVal = 314;
	static readonly RULE_partitionSelectorSpec = 315;
	static readonly RULE_partitionSelectorVal = 316;
	static readonly RULE_subQuerySelectorOperator = 317;
	static readonly RULE_sysFuncNames = 318;
	static readonly RULE_id_ = 319;
	static readonly RULE_functionIdentifier = 320;
	static readonly RULE_principalIdentifier = 321;
	static readonly RULE_nonReserved = 322;
	static readonly RULE_sql11ReservedKeywordsUsedAsFunctionName = 323;
	static readonly RULE_configPropertiesItem = 324;
	static readonly RULE_resourcePlanDdlStatements = 325;
	static readonly RULE_mappingTypes = 326;
	static readonly RULE_rpAssign = 327;
	static readonly RULE_rpAssignList = 328;
	static readonly RULE_rpUnassign = 329;
	static readonly RULE_activate = 330;
	static readonly RULE_enable = 331;
	static readonly RULE_disable = 332;
	static readonly RULE_year = 333;
	static readonly RULE_month = 334;
	static readonly RULE_week = 335;
	static readonly RULE_day = 336;
	static readonly RULE_hour = 337;
	static readonly RULE_minute = 338;
	static readonly RULE_second = 339;
	static readonly RULE_decimal = 340;
	static readonly RULE_poolPath = 341;
	static readonly RULE_triggerAtomExpression = 342;
	static readonly RULE_triggerActionExpression = 343;
	static readonly RULE_poolAssign = 344;
	static readonly RULE_poolAssignList = 345;
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
	statement(): StatementContext;
	explainStatement(): ExplainStatementContext;
	explainOption(): ExplainOptionContext;
	vectorizatonDetail(): VectorizatonDetailContext;
	execStatement(): ExecStatementContext;
	loadStatement(): LoadStatementContext;
	replicationClause(): ReplicationClauseContext;
	exportStatement(): ExportStatementContext;
	importStatement(): ImportStatementContext;
	replDumpStatement(): ReplDumpStatementContext;
	replDbPolicy(): ReplDbPolicyContext;
	replLoadStatement(): ReplLoadStatementContext;
	replTableLevelPolicy(): ReplTableLevelPolicyContext;
	ddlStatement(): DdlStatementContext;
	ifExists(): IfExistsContext;
	ifNotExists(): IfNotExistsContext;
	restrictOrCascade(): RestrictOrCascadeContext;
	rewriteEnabled(): RewriteEnabledContext;
	rewriteDisabled(): RewriteDisabledContext;
	storedAsDirs(): StoredAsDirsContext;
	createDatabaseStatement(): CreateDatabaseStatementContext;
	dbConnectorName(): DbConnectorNameContext;
	switchDatabaseStatement(): SwitchDatabaseStatementContext;
	dropDatabaseStatement(): DropDatabaseStatementContext;
	databaseComment(): DatabaseCommentContext;
	truncateTableStatement(): TruncateTableStatementContext;
	dropTableStatement(): DropTableStatementContext;
	inputFileFormat(): InputFileFormatContext;
	tabTypeExpr(): TabTypeExprContext;
	partTypeExpr(): PartTypeExprContext;
	tabPartColTypeExpr(): TabPartColTypeExprContext;
	descStatement(): DescStatementContext;
	analyzeStatement(): AnalyzeStatementContext;
	from_in(): From_inContext;
	db_schema(): Db_schemaContext;
	showStatement(): ShowStatementContext;
	showTablesFilterExpr(): ShowTablesFilterExprContext;
	lockStatement(): LockStatementContext;
	lockDatabase(): LockDatabaseContext;
	lockMode(): LockModeContext;
	unlockStatement(): UnlockStatementContext;
	unlockDatabase(): UnlockDatabaseContext;
	createRoleStatement(): CreateRoleStatementContext;
	dropRoleStatement(): DropRoleStatementContext;
	grantPrivileges(): GrantPrivilegesContext;
	revokePrivileges(): RevokePrivilegesContext;
	grantRole(): GrantRoleContext;
	revokeRole(): RevokeRoleContext;
	showRoleGrants(): ShowRoleGrantsContext;
	showRoles(): ShowRolesContext;
	showCurrentRole(): ShowCurrentRoleContext;
	setRole(): SetRoleContext;
	showGrants(): ShowGrantsContext;
	showRolePrincipals(): ShowRolePrincipalsContext;
	privilegeIncludeColObject(): PrivilegeIncludeColObjectContext;
	privilegeObject(): PrivilegeObjectContext;
	privObject(): PrivObjectContext;
	privObjectCols(): PrivObjectColsContext;
	privilegeList(): PrivilegeListContext;
	privlegeDef(): PrivlegeDefContext;
	privilegeType(): PrivilegeTypeContext;
	principalSpecification(): PrincipalSpecificationContext;
	principalName(): PrincipalNameContext;
	principalAlterName(): PrincipalAlterNameContext;
	withGrantOption(): WithGrantOptionContext;
	grantOptionFor(): GrantOptionForContext;
	adminOptionFor(): AdminOptionForContext;
	withAdminOption(): WithAdminOptionContext;
	metastoreCheck(): MetastoreCheckContext;
	resourceList(): ResourceListContext;
	resource(): ResourceContext;
	resourceType(): ResourceTypeContext;
	createFunctionStatement(): CreateFunctionStatementContext;
	dropFunctionStatement(): DropFunctionStatementContext;
	reloadFunctionsStatement(): ReloadFunctionsStatementContext;
	createMacroStatement(): CreateMacroStatementContext;
	dropMacroStatement(): DropMacroStatementContext;
	createIndexStatement(): CreateIndexStatementContext;
	dropIndexStatement(): DropIndexStatementContext;
	createViewStatement(): CreateViewStatementContext;
	viewPartition(): ViewPartitionContext;
	viewOrganization(): ViewOrganizationContext;
	viewClusterSpec(): ViewClusterSpecContext;
	viewComplexSpec(): ViewComplexSpecContext;
	viewDistSpec(): ViewDistSpecContext;
	viewSortSpec(): ViewSortSpecContext;
	dropViewStatement(): DropViewStatementContext;
	createMaterializedViewStatement(): CreateMaterializedViewStatementContext;
	dropMaterializedViewStatement(): DropMaterializedViewStatementContext;
	createScheduledQueryStatement(): CreateScheduledQueryStatementContext;
	dropScheduledQueryStatement(): DropScheduledQueryStatementContext;
	alterScheduledQueryStatement(): AlterScheduledQueryStatementContext;
	alterScheduledQueryChange(): AlterScheduledQueryChangeContext;
	scheduleSpec(): ScheduleSpecContext;
	executedAsSpec(): ExecutedAsSpecContext;
	definedAsSpec(): DefinedAsSpecContext;
	showStmtIdentifier(): ShowStmtIdentifierContext;
	tableComment(): TableCommentContext;
	tableLifecycle(): TableLifecycleContext;
	createTablePartitionSpec(): CreateTablePartitionSpecContext;
	createTablePartitionColumnTypeSpec(): CreateTablePartitionColumnTypeSpecContext;
	partitionTransformSpec(): PartitionTransformSpecContext;
	partitionTransformType(): PartitionTransformTypeContext;
	tableBuckets(): TableBucketsContext;
	tableSkewed(): TableSkewedContext;
	rowFormat(): RowFormatContext;
	recordReader(): RecordReaderContext;
	recordWriter(): RecordWriterContext;
	rowFormatSerde(): RowFormatSerdeContext;
	rowFormatDelimited(): RowFormatDelimitedContext;
	tableRowFormat(): TableRowFormatContext;
	tablePropertiesPrefixed(): TablePropertiesPrefixedContext;
	tableProperties(): TablePropertiesContext;
	tablePropertiesList(): TablePropertiesListContext;
	keyValueProperties(): KeyValuePropertiesContext;
	keyValuePropertyList(): KeyValuePropertyListContext;
	keyValueProperty(): KeyValuePropertyContext;
	tableRowFormatFieldIdentifier(): TableRowFormatFieldIdentifierContext;
	tableRowFormatCollItemsIdentifier(): TableRowFormatCollItemsIdentifierContext;
	tableRowFormatMapKeysIdentifier(): TableRowFormatMapKeysIdentifierContext;
	tableRowFormatLinesIdentifier(): TableRowFormatLinesIdentifierContext;
	tableRowNullFormat(): TableRowNullFormatContext;
	tableFileFormat(): TableFileFormatContext;
	columnNameTypeList(): ColumnNameTypeListContext;
	columnNameTypeOrConstraintList(): ColumnNameTypeOrConstraintListContext;
	columnNameColonTypeList(): ColumnNameColonTypeListContext;
	columnNameList(): ColumnNameListContext;
	columnName(): ColumnNameContext;
	columnNameCreate(): ColumnNameCreateContext;
	extColumnName(): ExtColumnNameContext;
	columnNameOrderList(): ColumnNameOrderListContext;
	columnParenthesesList(): ColumnParenthesesListContext;
	enableValidateSpecification(): EnableValidateSpecificationContext;
	enableSpecification(): EnableSpecificationContext;
	validateSpecification(): ValidateSpecificationContext;
	enforcedSpecification(): EnforcedSpecificationContext;
	relySpecification(): RelySpecificationContext;
	createConstraint(): CreateConstraintContext;
	alterConstraintWithName(): AlterConstraintWithNameContext;
	tableLevelConstraint(): TableLevelConstraintContext;
	pkUkConstraint(): PkUkConstraintContext;
	checkConstraint(): CheckConstraintContext;
	createForeignKey(): CreateForeignKeyContext;
	alterForeignKeyWithName(): AlterForeignKeyWithNameContext;
	skewedValueElement(): SkewedValueElementContext;
	skewedColumnValuePairList(): SkewedColumnValuePairListContext;
	skewedColumnValuePair(): SkewedColumnValuePairContext;
	constantList(): ConstantListContext;
	orderSpecification(): OrderSpecificationContext;
	nullOrdering(): NullOrderingContext;
	columnNameOrder(): ColumnNameOrderContext;
	columnNameCommentList(): ColumnNameCommentListContext;
	columnNameComment(): ColumnNameCommentContext;
	columnRefOrder(): ColumnRefOrderContext;
	columnNameType(): ColumnNameTypeContext;
	columnNameTypeOrConstraint(): ColumnNameTypeOrConstraintContext;
	tableConstraint(): TableConstraintContext;
	columnNameTypeConstraint(): ColumnNameTypeConstraintContext;
	columnConstraint(): ColumnConstraintContext;
	foreignKeyConstraint(): ForeignKeyConstraintContext;
	colConstraint(): ColConstraintContext;
	alterColumnConstraint(): AlterColumnConstraintContext;
	alterForeignKeyConstraint(): AlterForeignKeyConstraintContext;
	alterColConstraint(): AlterColConstraintContext;
	columnConstraintType(): ColumnConstraintTypeContext;
	defaultVal(): DefaultValContext;
	tableConstraintType(): TableConstraintTypeContext;
	constraintOptsCreate(): ConstraintOptsCreateContext;
	constraintOptsAlter(): ConstraintOptsAlterContext;
	columnNameColonType(): ColumnNameColonTypeContext;
	columnType(): ColumnTypeContext;
	columnTypeList(): ColumnTypeListContext;
	type_(): TypeContext;
	primitiveType(): PrimitiveTypeContext;
	listType(): ListTypeContext;
	structType(): StructTypeContext;
	mapType(): MapTypeContext;
	unionType(): UnionTypeContext;
	setOperator(): SetOperatorContext;
	queryStatementExpression(): QueryStatementExpressionContext;
	queryStatementExpressionBody(): QueryStatementExpressionBodyContext;
	withClause(): WithClauseContext;
	cteStatement(): CteStatementContext;
	fromStatement(): FromStatementContext;
	singleFromStatement(): SingleFromStatementContext;
	regularBody(): RegularBodyContext;
	atomSelectStatement(): AtomSelectStatementContext;
	selectStatement(): SelectStatementContext;
	setOpSelectStatement(): SetOpSelectStatementContext;
	selectStatementWithCTE(): SelectStatementWithCTEContext;
	insertClause(): InsertClauseContext;
	destination(): DestinationContext;
	limitClause(): LimitClauseContext;
	columnAssignmentClause(): ColumnAssignmentClauseContext;
	precedencePlusExpressionOrDefault(): PrecedencePlusExpressionOrDefaultContext;
	setColumnsClause(): SetColumnsClauseContext;
	sqlTransactionStatement(): SqlTransactionStatementContext;
	transactionMode(): TransactionModeContext;
	whenClauses(): WhenClausesContext;
	whenNotMatchedClause(): WhenNotMatchedClauseContext;
	whenMatchedAndClause(): WhenMatchedAndClauseContext;
	whenMatchedThenClause(): WhenMatchedThenClauseContext;
	compactionPool(): CompactionPoolContext;
	compactionType(): CompactionTypeContext;
	compactionStatus(): CompactionStatusContext;
	alterStatement(): AlterStatementContext;
	alterTableStatementSuffix(): AlterTableStatementSuffixContext;
	alterTblPartitionStatementSuffix(): AlterTblPartitionStatementSuffixContext;
	alterViewStatementSuffix(): AlterViewStatementSuffixContext;
	alterDatabaseStatementSuffix(): AlterDatabaseStatementSuffixContext;
	alterDataConnectorStatementSuffix(): AlterDataConnectorStatementSuffixContext;
	locationPath(): LocationPathContext;
	alterStatementSuffixDropPartitions(): AlterStatementSuffixDropPartitionsContext;
	skewedLocationMap(): SkewedLocationMapContext;
	alterStatementSuffixExecute(): AlterStatementSuffixExecuteContext;
	fileFormat(): FileFormatContext;
	likeTableOrFile(): LikeTableOrFileContext;
	createTableStatement(): CreateTableStatementContext;
	createDataConnectorStatement(): CreateDataConnectorStatementContext;
	dropDataConnectorStatement(): DropDataConnectorStatementContext;
	tableAllColumns(): TableAllColumnsContext;
	expressionList(): ExpressionListContext;
	aliasList(): AliasListContext;
	fromClause(): FromClauseContext;
	fromSource(): FromSourceContext;
	atomjoinSource(): AtomjoinSourceContext;
	joinSource(): JoinSourceContext;
	joinSourcePart(): JoinSourcePartContext;
	uniqueJoinSource(): UniqueJoinSourceContext;
	joinToken(): JoinTokenContext;
	lateralView(): LateralViewContext;
	tableAlias(): TableAliasContext;
	tableSample(): TableSampleContext;
	tableSource(): TableSourceContext;
	asOfClause(): AsOfClauseContext;
	dbSchemaName(): DbSchemaNameContext;
	dbSchemaNameCreate(): DbSchemaNameCreateContext;
	tableOrView(): TableOrViewContext;
	tableName(): TableNameContext;
	tableNameCreate(): TableNameCreateContext;
	viewName(): ViewNameContext;
	viewNameCreate(): ViewNameCreateContext;
	subQuerySource(): SubQuerySourceContext;
	partitioningSpec(): PartitioningSpecContext;
	partitionTableFunctionSource(): PartitionTableFunctionSourceContext;
	partitionedTableFunction(): PartitionedTableFunctionContext;
	whereClause(): WhereClauseContext;
	valuesClause(): ValuesClauseContext;
	virtualTableSource(): VirtualTableSourceContext;
	selectClause(): SelectClauseContext;
	selectTrfmClause(): SelectTrfmClauseContext;
	selectItem(): SelectItemContext;
	trfmClause(): TrfmClauseContext;
	selectExpression(): SelectExpressionContext;
	selectExpressionList(): SelectExpressionListContext;
	window_clause(): Window_clauseContext;
	window_specification(): Window_specificationContext;
	window_frame(): Window_frameContext;
	window_frame_boundary(): Window_frame_boundaryContext;
	groupByClause(): GroupByClauseContext;
	rollupStandard(): RollupStandardContext;
	rollupOldSyntax(): RollupOldSyntaxContext;
	groupingSetExpression(): GroupingSetExpressionContext;
	havingClause(): HavingClauseContext;
	qualifyClause(): QualifyClauseContext;
	expressionOrDefault(): ExpressionOrDefaultContext;
	firstExpressionsWithAlias(): FirstExpressionsWithAliasContext;
	expressions(): ExpressionsContext;
	expressionsInParenthesis(): ExpressionsInParenthesisContext;
	expressionsNotInParenthesis(): ExpressionsNotInParenthesisContext;
	orderByClause(): OrderByClauseContext;
	clusterByClause(): ClusterByClauseContext;
	distributeByClause(): DistributeByClauseContext;
	sortByClause(): SortByClauseContext;
	function_(): Function_Context;
	null_treatment(): Null_treatmentContext;
	functionNameCreate(): FunctionNameCreateContext;
	functionNameForDDL(): FunctionNameForDDLContext;
	functionNameForInvoke(): FunctionNameForInvokeContext;
	castExpression(): CastExpressionContext;
	caseExpression(): CaseExpressionContext;
	whenExpression(): WhenExpressionContext;
	floorExpression(): FloorExpressionContext;
	extractExpression(): ExtractExpressionContext;
	timeQualifiers(): TimeQualifiersContext;
	constant(): ConstantContext;
	intervalValue(): IntervalValueContext;
	intervalExpression(): IntervalExpressionContext;
	intervalQualifiers(): IntervalQualifiersContext;
	expression(): ExpressionContext;
	atomExpression(): AtomExpressionContext;
	precedenceUnaryPrefixExpression(): PrecedenceUnaryPrefixExpressionContext;
	precedenceBitwiseXorExpression(): PrecedenceBitwiseXorExpressionContext;
	precedenceStarExpression(): PrecedenceStarExpressionContext;
	precedencePlusExpression(): PrecedencePlusExpressionContext;
	precedenceConcatenateExpression(): PrecedenceConcatenateExpressionContext;
	precedenceAmpersandExpression(): PrecedenceAmpersandExpressionContext;
	precedenceBitwiseOrExpression(): PrecedenceBitwiseOrExpressionContext;
	precedenceSimilarOperator(): PrecedenceSimilarOperatorContext;
	subQueryExpression(): SubQueryExpressionContext;
	precedenceSimilarExpression(): PrecedenceSimilarExpressionContext;
	precedenceSimilarExpressionPart(): PrecedenceSimilarExpressionPartContext;
	precedenceSimilarExpressionAtom(): PrecedenceSimilarExpressionAtomContext;
	precedenceSimilarExpressionIn(): PrecedenceSimilarExpressionInContext;
	precedenceSimilarExpressionPartNot(): PrecedenceSimilarExpressionPartNotContext;
	precedenceDistinctOperator(): PrecedenceDistinctOperatorContext;
	precedenceEqualOperator(): PrecedenceEqualOperatorContext;
	precedenceEqualExpression(): PrecedenceEqualExpressionContext;
	isCondition(): IsConditionContext;
	precedenceNotExpression(): PrecedenceNotExpressionContext;
	precedenceAndExpression(): PrecedenceAndExpressionContext;
	tableOrPartition(): TableOrPartitionContext;
	partitionSpec(): PartitionSpecContext;
	partitionVal(): PartitionValContext;
	partitionSelectorSpec(): PartitionSelectorSpecContext;
	partitionSelectorVal(): PartitionSelectorValContext;
	subQuerySelectorOperator(): SubQuerySelectorOperatorContext;
	sysFuncNames(): SysFuncNamesContext;
	id_(): Id_Context;
	functionIdentifier(): FunctionIdentifierContext;
	principalIdentifier(): PrincipalIdentifierContext;
	nonReserved(): NonReservedContext;
	sql11ReservedKeywordsUsedAsFunctionName(): Sql11ReservedKeywordsUsedAsFunctionNameContext;
	configPropertiesItem(): ConfigPropertiesItemContext;
	resourcePlanDdlStatements(): ResourcePlanDdlStatementsContext;
	mappingTypes(): MappingTypesContext;
	rpAssign(): RpAssignContext;
	rpAssignList(): RpAssignListContext;
	rpUnassign(): RpUnassignContext;
	activate(): ActivateContext;
	enable(): EnableContext;
	disable(): DisableContext;
	year(): YearContext;
	month(): MonthContext;
	week(): WeekContext;
	day(): DayContext;
	hour(): HourContext;
	minute(): MinuteContext;
	second(): SecondContext;
	decimal(): DecimalContext;
	poolPath(): PoolPathContext;
	triggerAtomExpression(): TriggerAtomExpressionContext;
	triggerActionExpression(): TriggerActionExpressionContext;
	poolAssign(): PoolAssignContext;
	poolAssignList(): PoolAssignListContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
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
	statement(): StatementContext[];
	statement(i: number): StatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class StatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	explainStatement(): ExplainStatementContext | null;
	execStatement(): ExecStatementContext | null;
	SEMICOLON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXPLAIN(): antlr.TerminalNode;
	execStatement(): ExecStatementContext | null;
	KW_REWRITE(): antlr.TerminalNode | null;
	queryStatementExpression(): QueryStatementExpressionContext | null;
	explainOption(): ExplainOptionContext[];
	explainOption(i: number): ExplainOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	KW_DEPENDENCY(): antlr.TerminalNode | null;
	KW_CBO(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	KW_JOINCOST(): antlr.TerminalNode | null;
	KW_LOGICAL(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_REOPTIMIZATION(): antlr.TerminalNode | null;
	KW_LOCKS(): antlr.TerminalNode | null;
	KW_AST(): antlr.TerminalNode | null;
	KW_VECTORIZATION(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	vectorizatonDetail(): VectorizatonDetailContext | null;
	KW_DEBUG(): antlr.TerminalNode | null;
	KW_DDL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class VectorizatonDetailContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SUMMARY(): antlr.TerminalNode | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	KW_EXPRESSION(): antlr.TerminalNode | null;
	KW_DETAIL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExecStatementContext extends antlr.ParserRuleContext {
	_dbName?: DbSchemaNameContext;
	_replConf?: KeyValuePropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryStatementExpression(): QueryStatementExpressionContext | null;
	loadStatement(): LoadStatementContext | null;
	exportStatement(): ExportStatementContext | null;
	importStatement(): ImportStatementContext | null;
	replDumpStatement(): ReplDumpStatementContext | null;
	replLoadStatement(): ReplLoadStatementContext | null;
	KW_REPL(): antlr.TerminalNode | null;
	KW_STATUS(): antlr.TerminalNode | null;
	dbSchemaName(): DbSchemaNameContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	keyValueProperties(): KeyValuePropertiesContext | null;
	ddlStatement(): DdlStatementContext | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	whereClause(): WhereClauseContext | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	setColumnsClause(): SetColumnsClauseContext | null;
	sqlTransactionStatement(): SqlTransactionStatementContext | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	joinSourcePart(): JoinSourcePartContext | null;
	KW_ON(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	whenClauses(): WhenClausesContext | null;
	QUERY_HINT(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_PREPARE(): antlr.TerminalNode | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	constantList(): ConstantListContext | null;
	KW_SET(): antlr.TerminalNode | null;
	configPropertiesItem(): ConfigPropertiesItemContext[];
	configPropertiesItem(i: number): ConfigPropertiesItemContext | null;
	EQUAL(): antlr.TerminalNode | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LoadStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOAD(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_INPATH(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableOrPartition(): TableOrPartitionContext;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	inputFileFormat(): InputFileFormatContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ReplicationClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	KW_REPLICATION(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	KW_METADATA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExportStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXPORT(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableOrPartition(): TableOrPartitionContext;
	KW_TO(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	replicationClause(): ReplicationClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ImportStatementContext extends antlr.ParserRuleContext {
	_path?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IMPORT(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode | null;
	tableOrPartition(): TableOrPartitionContext | null;
	locationPath(): LocationPathContext | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ReplDumpStatementContext extends antlr.ParserRuleContext {
	_dbPolicy?: ReplDbPolicyContext;
	_oldDbPolicy?: ReplDbPolicyContext;
	_replConf?: KeyValuePropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPL(): antlr.TerminalNode;
	KW_DUMP(): antlr.TerminalNode;
	replDbPolicy(): ReplDbPolicyContext[];
	replDbPolicy(i: number): ReplDbPolicyContext | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	keyValueProperties(): KeyValuePropertiesContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ReplDbPolicyContext extends antlr.ParserRuleContext {
	_dbName?: DbSchemaNameContext;
	_tablePolicy?: ReplTableLevelPolicyContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dbSchemaName(): DbSchemaNameContext;
	DOT(): antlr.TerminalNode | null;
	replTableLevelPolicy(): ReplTableLevelPolicyContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ReplLoadStatementContext extends antlr.ParserRuleContext {
	_sourceDbPolicy?: ReplDbPolicyContext;
	_dbName?: DbSchemaNameContext;
	_replConf?: KeyValuePropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPL(): antlr.TerminalNode;
	KW_LOAD(): antlr.TerminalNode;
	replDbPolicy(): ReplDbPolicyContext;
	KW_INTO(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	dbSchemaName(): DbSchemaNameContext | null;
	keyValueProperties(): KeyValuePropertiesContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ReplTableLevelPolicyContext extends antlr.ParserRuleContext {
	_replTablesIncludeList?: Token | null;
	_replTablesExcludeList?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DdlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createDatabaseStatement(): CreateDatabaseStatementContext | null;
	switchDatabaseStatement(): SwitchDatabaseStatementContext | null;
	dropDatabaseStatement(): DropDatabaseStatementContext | null;
	createTableStatement(): CreateTableStatementContext | null;
	dropTableStatement(): DropTableStatementContext | null;
	truncateTableStatement(): TruncateTableStatementContext | null;
	alterStatement(): AlterStatementContext | null;
	descStatement(): DescStatementContext | null;
	showStatement(): ShowStatementContext | null;
	metastoreCheck(): MetastoreCheckContext | null;
	createViewStatement(): CreateViewStatementContext | null;
	createMaterializedViewStatement(): CreateMaterializedViewStatementContext | null;
	createScheduledQueryStatement(): CreateScheduledQueryStatementContext | null;
	alterScheduledQueryStatement(): AlterScheduledQueryStatementContext | null;
	dropScheduledQueryStatement(): DropScheduledQueryStatementContext | null;
	dropViewStatement(): DropViewStatementContext | null;
	dropMaterializedViewStatement(): DropMaterializedViewStatementContext | null;
	createFunctionStatement(): CreateFunctionStatementContext | null;
	createMacroStatement(): CreateMacroStatementContext | null;
	dropFunctionStatement(): DropFunctionStatementContext | null;
	reloadFunctionsStatement(): ReloadFunctionsStatementContext | null;
	dropMacroStatement(): DropMacroStatementContext | null;
	createIndexStatement(): CreateIndexStatementContext | null;
	dropIndexStatement(): DropIndexStatementContext | null;
	analyzeStatement(): AnalyzeStatementContext | null;
	lockStatement(): LockStatementContext | null;
	unlockStatement(): UnlockStatementContext | null;
	lockDatabase(): LockDatabaseContext | null;
	unlockDatabase(): UnlockDatabaseContext | null;
	createRoleStatement(): CreateRoleStatementContext | null;
	dropRoleStatement(): DropRoleStatementContext | null;
	grantPrivileges(): GrantPrivilegesContext | null;
	revokePrivileges(): RevokePrivilegesContext | null;
	showGrants(): ShowGrantsContext | null;
	showRoleGrants(): ShowRoleGrantsContext | null;
	showRolePrincipals(): ShowRolePrincipalsContext | null;
	showRoles(): ShowRolesContext | null;
	grantRole(): GrantRoleContext | null;
	revokeRole(): RevokeRoleContext | null;
	setRole(): SetRoleContext | null;
	showCurrentRole(): ShowCurrentRoleContext | null;
	KW_ABORT(): antlr.TerminalNode | null;
	KW_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_COMPACTIONS(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode[];
	Number(i: number): antlr.TerminalNode | null;
	KW_KILL(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	resourcePlanDdlStatements(): ResourcePlanDdlStatementsContext | null;
	createDataConnectorStatement(): CreateDataConnectorStatementContext | null;
	dropDataConnectorStatement(): DropDataConnectorStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class IfExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class IfNotExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RestrictOrCascadeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RewriteEnabledContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	enable(): EnableContext;
	KW_REWRITE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RewriteDisabledContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	disable(): DisableContext;
	KW_REWRITE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class StoredAsDirsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STORED(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	KW_DIRECTORIES(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateDatabaseStatementContext extends antlr.ParserRuleContext {
	_name?: DbSchemaNameCreateContext;
	_locn?: Token | null;
	_dbprops?: KeyValuePropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	db_schema(): Db_schemaContext;
	dbSchemaNameCreate(): DbSchemaNameCreateContext;
	KW_REMOTE(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	databaseComment(): DatabaseCommentContext | null;
	locationPath(): LocationPathContext | null;
	KW_MANAGEDLOCATION(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_DBPROPERTIES(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	keyValueProperties(): KeyValuePropertiesContext | null;
	dbConnectorName(): DbConnectorNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DbConnectorNameContext extends antlr.ParserRuleContext {
	_dcName?: DbSchemaNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	dbSchemaName(): DbSchemaNameContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SwitchDatabaseStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USE(): antlr.TerminalNode;
	dbSchemaName(): DbSchemaNameContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropDatabaseStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	db_schema(): Db_schemaContext;
	dbSchemaName(): DbSchemaNameContext;
	ifExists(): IfExistsContext | null;
	restrictOrCascade(): RestrictOrCascadeContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DatabaseCommentContext extends antlr.ParserRuleContext {
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TruncateTableStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUNCATE(): antlr.TerminalNode;
	tableOrPartition(): TableOrPartitionContext;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	columnNameList(): ColumnNameListContext | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_FORCE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropTableStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	ifExists(): IfExistsContext | null;
	KW_PURGE(): antlr.TerminalNode | null;
	replicationClause(): ReplicationClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class InputFileFormatContext extends antlr.ParserRuleContext {
	_inFmt?: Token | null;
	_serdeCls?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INPUTFORMAT(): antlr.TerminalNode;
	KW_SERDE(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TabTypeExprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	KW_ELEM_TYPE(): antlr.TerminalNode[];
	KW_ELEM_TYPE(i: number): antlr.TerminalNode | null;
	KW_KEY_TYPE(): antlr.TerminalNode[];
	KW_KEY_TYPE(i: number): antlr.TerminalNode | null;
	KW_VALUE_TYPE(): antlr.TerminalNode[];
	KW_VALUE_TYPE(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartTypeExprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tabTypeExpr(): TabTypeExprContext;
	partitionSpec(): PartitionSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TabPartColTypeExprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableOrView(): TableOrViewContext;
	partitionSpec(): PartitionSpecContext | null;
	extColumnName(): ExtColumnNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DescStatementContext extends antlr.ParserRuleContext {
	_dbName?: DbSchemaNameContext;
	_dcName?: DbSchemaNameContext;
	_name?: FunctionNameForDDLContext;
	_descOptions?: Token | null;
	_parttype?: TabPartColTypeExprContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	db_schema(): Db_schemaContext | null;
	KW_DATACONNECTOR(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	dbSchemaName(): DbSchemaNameContext | null;
	functionNameForDDL(): FunctionNameForDDLContext | null;
	tabPartColTypeExpr(): TabPartColTypeExprContext | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzeStatementContext extends antlr.ParserRuleContext {
	_parttype?: TableOrPartitionContext;
	_noscan?: Token | null;
	_statsColumnName?: ColumnNameListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ANALYZE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableOrPartition(): TableOrPartitionContext;
	KW_COMPUTE(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_METADATA(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_NOSCAN(): antlr.TerminalNode | null;
	columnNameList(): ColumnNameListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class From_inContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Db_schemaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowStatementContext extends antlr.ParserRuleContext {
	_isExtended?: Token | null;
	_db_name?: DbSchemaNameContext;
	_filter?: ShowTablesFilterExprContext;
	_tabOrViewName?: TableOrViewContext;
	_tabName?: TableNameContext;
	_prptyName?: Token | null;
	_dbName?: DbSchemaNameContext;
	_parttype?: PartTypeExprContext;
	_compactId?: Token | null;
	_rp_name?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	showStmtIdentifier(): ShowStmtIdentifierContext | null;
	KW_TABLES(): antlr.TerminalNode | null;
	from_in(): From_inContext[];
	from_in(i: number): From_inContext | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	dbSchemaName(): DbSchemaNameContext | null;
	showTablesFilterExpr(): ShowTablesFilterExprContext | null;
	KW_VIEWS(): antlr.TerminalNode | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	tableOrView(): TableOrViewContext | null;
	KW_SORTED(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	functionNameForDDL(): FunctionNameForDDLContext | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	whereClause(): WhereClauseContext | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	KW_CREATE(): antlr.TerminalNode | null;
	db_schema(): Db_schemaContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	KW_LOCKS(): antlr.TerminalNode | null;
	partTypeExpr(): PartTypeExprContext | null;
	KW_COMPACTIONS(): antlr.TerminalNode | null;
	KW_COMPACT_ID(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	compactionPool(): CompactionPoolContext | null;
	compactionType(): CompactionTypeContext | null;
	compactionStatus(): CompactionStatusContext | null;
	KW_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_CONF(): antlr.TerminalNode | null;
	KW_RESOURCE(): antlr.TerminalNode | null;
	KW_PLAN(): antlr.TerminalNode | null;
	KW_PLANS(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	KW_DATACONNECTORS(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowTablesFilterExprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHERE(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	EQUAL(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	showStmtIdentifier(): ShowStmtIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LockStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOCK(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableOrPartition(): TableOrPartitionContext;
	lockMode(): LockModeContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LockDatabaseContext extends antlr.ParserRuleContext {
	_dbName?: DbSchemaNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOCK(): antlr.TerminalNode;
	db_schema(): Db_schemaContext;
	lockMode(): LockModeContext;
	dbSchemaName(): DbSchemaNameContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LockModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHARED(): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class UnlockStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNLOCK(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableOrPartition(): TableOrPartitionContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class UnlockDatabaseContext extends antlr.ParserRuleContext {
	_dbName?: DbSchemaNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNLOCK(): antlr.TerminalNode;
	db_schema(): Db_schemaContext;
	dbSchemaName(): DbSchemaNameContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateRoleStatementContext extends antlr.ParserRuleContext {
	_roleName?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropRoleStatementContext extends antlr.ParserRuleContext {
	_roleName?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class GrantPrivilegesContext extends antlr.ParserRuleContext {
	_privList?: PrivilegeListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	principalSpecification(): PrincipalSpecificationContext;
	privilegeList(): PrivilegeListContext;
	privilegeObject(): PrivilegeObjectContext | null;
	withGrantOption(): WithGrantOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RevokePrivilegesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REVOKE(): antlr.TerminalNode;
	privilegeList(): PrivilegeListContext;
	KW_FROM(): antlr.TerminalNode;
	principalSpecification(): PrincipalSpecificationContext;
	grantOptionFor(): GrantOptionForContext | null;
	privilegeObject(): PrivilegeObjectContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class GrantRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	KW_TO(): antlr.TerminalNode;
	principalSpecification(): PrincipalSpecificationContext;
	KW_ROLE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	withAdminOption(): WithAdminOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RevokeRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REVOKE(): antlr.TerminalNode;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	KW_FROM(): antlr.TerminalNode;
	principalSpecification(): PrincipalSpecificationContext;
	adminOptionFor(): AdminOptionForContext | null;
	KW_ROLE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowRoleGrantsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	principalName(): PrincipalNameContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowRolesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_ROLES(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowCurrentRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode;
	KW_ROLES(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SetRoleContext extends antlr.ParserRuleContext {
	_all?: Token | null;
	_none?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	id_(): Id_Context | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowGrantsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	principalName(): PrincipalNameContext | null;
	KW_ON(): antlr.TerminalNode | null;
	privilegeIncludeColObject(): PrivilegeIncludeColObjectContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowRolePrincipalsContext extends antlr.ParserRuleContext {
	_roleName?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_PRINCIPALS(): antlr.TerminalNode;
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeIncludeColObjectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	privObjectCols(): PrivObjectColsContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeObjectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode;
	privObject(): PrivObjectContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrivObjectContext extends antlr.ParserRuleContext {
	_path?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	db_schema(): Db_schemaContext | null;
	dbSchemaName(): DbSchemaNameContext | null;
	tableOrPartition(): TableOrPartitionContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_URI(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrivObjectColsContext extends antlr.ParserRuleContext {
	_cols?: ColumnNameListContext;
	_path?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	db_schema(): Db_schemaContext | null;
	dbSchemaName(): DbSchemaNameContext | null;
	tableName(): TableNameContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	columnNameList(): ColumnNameListContext | null;
	KW_URI(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	privlegeDef(): PrivlegeDefContext[];
	privlegeDef(i: number): PrivlegeDefContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrivlegeDefContext extends antlr.ParserRuleContext {
	_cols?: ColumnNameListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	privilegeType(): PrivilegeTypeContext;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	columnNameList(): ColumnNameListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_SELECT(): antlr.TerminalNode | null;
	KW_SHOW_DATABASE(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrincipalSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	principalName(): PrincipalNameContext[];
	principalName(i: number): PrincipalNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrincipalNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USER(): antlr.TerminalNode | null;
	principalIdentifier(): PrincipalIdentifierContext | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrincipalAlterNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USER(): antlr.TerminalNode | null;
	principalIdentifier(): PrincipalIdentifierContext | null;
	KW_ROLE(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WithGrantOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class GrantOptionForContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AdminOptionForContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADMIN(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WithAdminOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_ADMIN(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class MetastoreCheckContext extends antlr.ParserRuleContext {
	_repair?: Token | null;
	_opt?: Token | null;
	_parts?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MSCK(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_REPAIR(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_SYNC(): antlr.TerminalNode | null;
	partitionSelectorSpec(): PartitionSelectorSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ResourceListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	resource(): ResourceContext[];
	resource(i: number): ResourceContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ResourceContext extends antlr.ParserRuleContext {
	_resType?: ResourceTypeContext;
	_resPath?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	resourceType(): ResourceTypeContext;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ResourceTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_JAR(): antlr.TerminalNode | null;
	KW_FILE(): antlr.TerminalNode | null;
	KW_ARCHIVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateFunctionStatementContext extends antlr.ParserRuleContext {
	_temp?: Token | null;
	_rList?: ResourceListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNameCreate(): FunctionNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	KW_USING(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	resourceList(): ResourceListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropFunctionStatementContext extends antlr.ParserRuleContext {
	_temp?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNameForDDL(): FunctionNameForDDLContext;
	ifExists(): IfExistsContext | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ReloadFunctionsStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RELOAD(): antlr.TerminalNode;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateMacroStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TEMPORARY(): antlr.TerminalNode;
	KW_MACRO(): antlr.TerminalNode;
	Identifier(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	columnNameTypeList(): ColumnNameTypeListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropMacroStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TEMPORARY(): antlr.TerminalNode;
	KW_MACRO(): antlr.TerminalNode;
	Identifier(): antlr.TerminalNode;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateIndexStatementContext extends antlr.ParserRuleContext {
	_indextype?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	id_(): Id_Context;
	KW_ON(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode[];
	KW_TABLE(i: number): antlr.TerminalNode | null;
	tableName(): TableNameContext[];
	tableName(i: number): TableNameContext | null;
	columnParenthesesList(): ColumnParenthesesListContext[];
	columnParenthesesList(i: number): ColumnParenthesesListContext | null;
	KW_AS(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	KW_WITH(): antlr.TerminalNode | null;
	KW_DEFERRED(): antlr.TerminalNode | null;
	KW_REBUILD(): antlr.TerminalNode | null;
	KW_IDXPROPERTIES(): antlr.TerminalNode | null;
	tableProperties(): TablePropertiesContext | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_PARTITIONED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	tableFileFormat(): TableFileFormatContext | null;
	locationPath(): LocationPathContext | null;
	tablePropertiesPrefixed(): TablePropertiesPrefixedContext | null;
	tableComment(): TableCommentContext | null;
	tableRowFormat(): TableRowFormatContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropIndexStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	id_(): Id_Context;
	KW_ON(): antlr.TerminalNode;
	tableName(): TableNameContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateViewStatementContext extends antlr.ParserRuleContext {
	_name?: ViewNameCreateContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	selectStatementWithCTE(): SelectStatementWithCTEContext;
	viewNameCreate(): ViewNameCreateContext;
	KW_OR(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	LPAREN(): antlr.TerminalNode | null;
	columnNameCommentList(): ColumnNameCommentListContext | null;
	RPAREN(): antlr.TerminalNode | null;
	tableComment(): TableCommentContext | null;
	viewPartition(): ViewPartitionContext | null;
	tablePropertiesPrefixed(): TablePropertiesPrefixedContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewPartitionContext extends antlr.ParserRuleContext {
	_spec?: PartitionTransformSpecContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITIONED(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode | null;
	columnNameList(): ColumnNameListContext | null;
	KW_SPEC(): antlr.TerminalNode | null;
	partitionTransformSpec(): PartitionTransformSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewOrganizationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	viewClusterSpec(): ViewClusterSpecContext | null;
	viewComplexSpec(): ViewComplexSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewClusterSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLUSTERED(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewComplexSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	viewDistSpec(): ViewDistSpecContext;
	viewSortSpec(): ViewSortSpecContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewDistSpecContext extends antlr.ParserRuleContext {
	_colList?: ColumnNameListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISTRIBUTED(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewSortSpecContext extends antlr.ParserRuleContext {
	_colList?: ColumnNameListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SORTED(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropViewStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateMaterializedViewStatementContext extends antlr.ParserRuleContext {
	_name?: ViewNameCreateContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	selectStatementWithCTE(): SelectStatementWithCTEContext;
	viewNameCreate(): ViewNameCreateContext;
	ifNotExists(): IfNotExistsContext | null;
	rewriteDisabled(): RewriteDisabledContext | null;
	tableComment(): TableCommentContext | null;
	viewPartition(): ViewPartitionContext | null;
	viewOrganization(): ViewOrganizationContext | null;
	tableRowFormat(): TableRowFormatContext | null;
	tableFileFormat(): TableFileFormatContext | null;
	locationPath(): LocationPathContext | null;
	tablePropertiesPrefixed(): TablePropertiesPrefixedContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropMaterializedViewStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateScheduledQueryStatementContext extends antlr.ParserRuleContext {
	_name?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_SCHEDULED(): antlr.TerminalNode;
	KW_QUERY(): antlr.TerminalNode;
	scheduleSpec(): ScheduleSpecContext;
	definedAsSpec(): DefinedAsSpecContext;
	id_(): Id_Context;
	executedAsSpec(): ExecutedAsSpecContext | null;
	enableSpecification(): EnableSpecificationContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropScheduledQueryStatementContext extends antlr.ParserRuleContext {
	_name?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_SCHEDULED(): antlr.TerminalNode;
	KW_QUERY(): antlr.TerminalNode;
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterScheduledQueryStatementContext extends antlr.ParserRuleContext {
	_name?: Id_Context;
	_mod?: AlterScheduledQueryChangeContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_SCHEDULED(): antlr.TerminalNode;
	KW_QUERY(): antlr.TerminalNode;
	id_(): Id_Context;
	alterScheduledQueryChange(): AlterScheduledQueryChangeContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterScheduledQueryChangeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	scheduleSpec(): ScheduleSpecContext | null;
	executedAsSpec(): ExecutedAsSpecContext | null;
	enableSpecification(): EnableSpecificationContext | null;
	definedAsSpec(): DefinedAsSpecContext | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ScheduleSpecContext extends antlr.ParserRuleContext {
	_cronString?: Token | null;
	_value?: Token | null;
	_qualifier?: IntervalQualifiersContext;
	_offsetTs?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CRON(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	KW_EVERY(): antlr.TerminalNode | null;
	intervalQualifiers(): IntervalQualifiersContext | null;
	Number(): antlr.TerminalNode | null;
	KW_AT(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExecutedAsSpecContext extends antlr.ParserRuleContext {
	_executedAs?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXECUTED(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DefinedAsSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	statement(): StatementContext;
	KW_DEFINED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ShowStmtIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableCommentContext extends antlr.ParserRuleContext {
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableLifecycleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIFECYCLE(): antlr.TerminalNode;
	Number(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTablePartitionSpecContext extends antlr.ParserRuleContext {
	_opt1?: CreateTablePartitionColumnTypeSpecContext;
	_opt2?: ColumnNameListContext;
	_spec?: PartitionTransformSpecContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITIONED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode | null;
	KW_SPEC(): antlr.TerminalNode | null;
	partitionTransformSpec(): PartitionTransformSpecContext | null;
	createTablePartitionColumnTypeSpec(): CreateTablePartitionColumnTypeSpecContext | null;
	columnNameList(): ColumnNameListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTablePartitionColumnTypeSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameTypeConstraint(): ColumnNameTypeConstraintContext[];
	columnNameTypeConstraint(i: number): ColumnNameTypeConstraintContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionTransformSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	partitionTransformType(): PartitionTransformTypeContext[];
	partitionTransformType(i: number): PartitionTransformTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionTransformTypeContext extends antlr.ParserRuleContext {
	_value?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	year(): YearContext | null;
	month(): MonthContext | null;
	day(): DayContext | null;
	hour(): HourContext | null;
	COMMA(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_BUCKET(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableBucketsContext extends antlr.ParserRuleContext {
	_bucketCols?: ColumnNameListContext;
	_sortCols?: ColumnNameOrderListContext;
	_num?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLUSTERED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	KW_INTO(): antlr.TerminalNode;
	KW_BUCKETS(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	Number(): antlr.TerminalNode;
	KW_SORTED(): antlr.TerminalNode | null;
	columnNameOrderList(): ColumnNameOrderListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableSkewedContext extends antlr.ParserRuleContext {
	_skewedCols?: ColumnNameListContext;
	_skewedValues?: SkewedValueElementContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SKEWED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	skewedValueElement(): SkewedValueElementContext;
	storedAsDirs(): StoredAsDirsContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RowFormatContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rowFormatSerde(): RowFormatSerdeContext | null;
	rowFormatDelimited(): RowFormatDelimitedContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RecordReaderContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RECORDREADER(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RecordWriterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RECORDWRITER(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RowFormatSerdeContext extends antlr.ParserRuleContext {
	_name?: Token | null;
	_serdeprops?: TablePropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode;
	KW_FORMAT(): antlr.TerminalNode;
	KW_SERDE(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	KW_WITH(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	tableProperties(): TablePropertiesContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RowFormatDelimitedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode;
	KW_FORMAT(): antlr.TerminalNode;
	KW_DELIMITED(): antlr.TerminalNode;
	tableRowFormatFieldIdentifier(): TableRowFormatFieldIdentifierContext | null;
	tableRowFormatCollItemsIdentifier(): TableRowFormatCollItemsIdentifierContext | null;
	tableRowFormatMapKeysIdentifier(): TableRowFormatMapKeysIdentifierContext | null;
	tableRowFormatLinesIdentifier(): TableRowFormatLinesIdentifierContext | null;
	tableRowNullFormat(): TableRowNullFormatContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableRowFormatContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rowFormatDelimited(): RowFormatDelimitedContext | null;
	rowFormatSerde(): RowFormatSerdeContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertiesPrefixedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TBLPROPERTIES(): antlr.TerminalNode;
	tableProperties(): TablePropertiesContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertiesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	tablePropertiesList(): TablePropertiesListContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertiesListContext extends antlr.ParserRuleContext {
	_key?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	keyValuePropertyList(): KeyValuePropertyListContext | null;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class KeyValuePropertiesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	keyValuePropertyList(): KeyValuePropertyListContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class KeyValuePropertyListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	keyValueProperty(): KeyValuePropertyContext[];
	keyValueProperty(i: number): KeyValuePropertyContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class KeyValuePropertyContext extends antlr.ParserRuleContext {
	_key?: Token | null;
	_value?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableRowFormatFieldIdentifierContext extends antlr.ParserRuleContext {
	_fldIdnt?: Token | null;
	_fldEscape?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FIELDS(): antlr.TerminalNode;
	KW_TERMINATED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	KW_ESCAPED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableRowFormatCollItemsIdentifierContext extends antlr.ParserRuleContext {
	_collIdnt?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COLLECTION(): antlr.TerminalNode;
	KW_ITEMS(): antlr.TerminalNode;
	KW_TERMINATED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableRowFormatMapKeysIdentifierContext extends antlr.ParserRuleContext {
	_mapKeysIdnt?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MAP(): antlr.TerminalNode;
	KW_KEYS(): antlr.TerminalNode;
	KW_TERMINATED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableRowFormatLinesIdentifierContext extends antlr.ParserRuleContext {
	_linesIdnt?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LINES(): antlr.TerminalNode;
	KW_TERMINATED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableRowNullFormatContext extends antlr.ParserRuleContext {
	_nullIdnt?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULL(): antlr.TerminalNode;
	KW_DEFINED(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableFileFormatContext extends antlr.ParserRuleContext {
	_inFmt?: Token | null;
	_outFmt?: Token | null;
	_inDriver?: Token | null;
	_outDriver?: Token | null;
	_storageHandler?: Token | null;
	_serdeprops?: TablePropertiesContext;
	_fileformat?: Id_Context;
	_genericSpec?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STORED(): antlr.TerminalNode[];
	KW_STORED(i: number): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_INPUTFORMAT(): antlr.TerminalNode | null;
	KW_OUTPUTFORMAT(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	KW_INPUTDRIVER(): antlr.TerminalNode | null;
	KW_OUTPUTDRIVER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	tableProperties(): TablePropertiesContext | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameTypeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameType(): ColumnNameTypeContext[];
	columnNameType(i: number): ColumnNameTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameTypeOrConstraintListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameTypeOrConstraint(): ColumnNameTypeOrConstraintContext[];
	columnNameTypeOrConstraint(i: number): ColumnNameTypeOrConstraintContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameColonTypeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameColonType(): ColumnNameColonTypeContext[];
	columnNameColonType(i: number): ColumnNameColonTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	poolPath(): PoolPathContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExtColumnNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	KW_ELEM_TYPE(): antlr.TerminalNode[];
	KW_ELEM_TYPE(i: number): antlr.TerminalNode | null;
	KW_KEY_TYPE(): antlr.TerminalNode[];
	KW_KEY_TYPE(i: number): antlr.TerminalNode | null;
	KW_VALUE_TYPE(): antlr.TerminalNode[];
	KW_VALUE_TYPE(i: number): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameOrderListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameOrder(): ColumnNameOrderContext[];
	columnNameOrder(i: number): ColumnNameOrderContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnParenthesesListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class EnableValidateSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	enableSpecification(): EnableSpecificationContext | null;
	validateSpecification(): ValidateSpecificationContext | null;
	enforcedSpecification(): EnforcedSpecificationContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class EnableSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	enable(): EnableContext | null;
	disable(): DisableContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ValidateSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALIDATE(): antlr.TerminalNode | null;
	KW_NOVALIDATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class EnforcedSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ENFORCED(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RelySpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RELY(): antlr.TerminalNode | null;
	KW_NORELY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateConstraintContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableLevelConstraint(): TableLevelConstraintContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintOptsCreate(): ConstraintOptsCreateContext | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterConstraintWithNameContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CONSTRAINT(): antlr.TerminalNode;
	tableLevelConstraint(): TableLevelConstraintContext;
	id_(): Id_Context;
	constraintOptsAlter(): ConstraintOptsAlterContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableLevelConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	pkUkConstraint(): PkUkConstraintContext | null;
	checkConstraint(): CheckConstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PkUkConstraintContext extends antlr.ParserRuleContext {
	_pkCols?: ColumnParenthesesListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableConstraintType(): TableConstraintTypeContext;
	columnParenthesesList(): ColumnParenthesesListContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CheckConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHECK(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateForeignKeyContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	_fkCols?: ColumnParenthesesListContext;
	_tabName?: TableNameContext;
	_parCols?: ColumnParenthesesListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOREIGN(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	KW_REFERENCES(): antlr.TerminalNode;
	columnParenthesesList(): ColumnParenthesesListContext[];
	columnParenthesesList(i: number): ColumnParenthesesListContext | null;
	tableName(): TableNameContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintOptsCreate(): ConstraintOptsCreateContext | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterForeignKeyWithNameContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	_fkCols?: ColumnParenthesesListContext;
	_tabName?: TableNameContext;
	_parCols?: ColumnParenthesesListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CONSTRAINT(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	KW_REFERENCES(): antlr.TerminalNode;
	id_(): Id_Context;
	columnParenthesesList(): ColumnParenthesesListContext[];
	columnParenthesesList(i: number): ColumnParenthesesListContext | null;
	tableName(): TableNameContext;
	constraintOptsAlter(): ConstraintOptsAlterContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SkewedValueElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constantList(): ConstantListContext | null;
	skewedColumnValuePairList(): SkewedColumnValuePairListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SkewedColumnValuePairListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	skewedColumnValuePair(): SkewedColumnValuePairContext[];
	skewedColumnValuePair(i: number): SkewedColumnValuePairContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SkewedColumnValuePairContext extends antlr.ParserRuleContext {
	_colValues?: ConstantListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	constantList(): ConstantListContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constant(): ConstantContext[];
	constant(i: number): ConstantContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class OrderSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class NullOrderingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULLS(): antlr.TerminalNode;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameOrderContext extends antlr.ParserRuleContext {
	_orderSpec?: OrderSpecificationContext;
	_nullSpec?: NullOrderingContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext;
	orderSpecification(): OrderSpecificationContext | null;
	nullOrdering(): NullOrderingContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameCommentListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameComment(): ColumnNameCommentContext[];
	columnNameComment(i: number): ColumnNameCommentContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameCommentContext extends antlr.ParserRuleContext {
	_colName?: ColumnNameCreateContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext;
	KW_COMMENT(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnRefOrderContext extends antlr.ParserRuleContext {
	_orderSpec?: OrderSpecificationContext;
	_nullSpec?: NullOrderingContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	orderSpecification(): OrderSpecificationContext | null;
	nullOrdering(): NullOrderingContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameTypeContext extends antlr.ParserRuleContext {
	_colName?: ColumnNameCreateContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnType(): ColumnTypeContext;
	columnNameCreate(): ColumnNameCreateContext;
	KW_COMMENT(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameTypeOrConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableConstraint(): TableConstraintContext | null;
	columnNameTypeConstraint(): ColumnNameTypeConstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createForeignKey(): CreateForeignKeyContext | null;
	createConstraint(): CreateConstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameTypeConstraintContext extends antlr.ParserRuleContext {
	_colName?: ColumnNameCreateContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnType(): ColumnTypeContext;
	columnNameCreate(): ColumnNameCreateContext;
	columnConstraint(): ColumnConstraintContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	foreignKeyConstraint(): ForeignKeyConstraintContext | null;
	colConstraint(): ColConstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ForeignKeyConstraintContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	_tabName?: TableNameContext;
	_colName?: ColumnNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFERENCES(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	tableName(): TableNameContext;
	columnName(): ColumnNameContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintOptsCreate(): ConstraintOptsCreateContext | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColConstraintContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnConstraintType(): ColumnConstraintTypeContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintOptsCreate(): ConstraintOptsCreateContext | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterColumnConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alterForeignKeyConstraint(): AlterForeignKeyConstraintContext | null;
	alterColConstraint(): AlterColConstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterForeignKeyConstraintContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	_tabName?: TableNameContext;
	_colName?: ColumnNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFERENCES(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	tableName(): TableNameContext;
	columnName(): ColumnNameContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintOptsAlter(): ConstraintOptsAlterContext | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterColConstraintContext extends antlr.ParserRuleContext {
	_constraintName?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnConstraintType(): ColumnConstraintTypeContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintOptsAlter(): ConstraintOptsAlterContext | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnConstraintTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	defaultVal(): DefaultValContext | null;
	checkConstraint(): CheckConstraintContext | null;
	tableConstraintType(): TableConstraintTypeContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DefaultValContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constant(): ConstantContext | null;
	function_(): Function_Context | null;
	castExpression(): CastExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableConstraintTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintOptsCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	enableValidateSpecification(): EnableValidateSpecificationContext;
	relySpecification(): RelySpecificationContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintOptsAlterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	enableValidateSpecification(): EnableValidateSpecificationContext;
	relySpecification(): RelySpecificationContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameColonTypeContext extends antlr.ParserRuleContext {
	_colName?: ColumnNameCreateContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COLON(): antlr.TerminalNode;
	columnType(): ColumnTypeContext;
	columnNameCreate(): ColumnNameCreateContext;
	KW_COMMENT(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	type(): TypeContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnTypeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnType(): ColumnTypeContext[];
	columnType(i: number): ColumnTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	primitiveType(): PrimitiveTypeContext | null;
	listType(): ListTypeContext | null;
	structType(): StructTypeContext | null;
	mapType(): MapTypeContext | null;
	unionType(): UnionTypeContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrimitiveTypeContext extends antlr.ParserRuleContext {
	_prec?: Token | null;
	_scale?: Token | null;
	_length?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_PRECISION(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DATETIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIMESTAMPLOCALTZ(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	decimal(): DecimalContext | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode[];
	Number(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ListTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ARRAY(): antlr.TerminalNode;
	LESSTHAN(): antlr.TerminalNode;
	type(): TypeContext;
	GREATERTHAN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class StructTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STRUCT(): antlr.TerminalNode;
	LESSTHAN(): antlr.TerminalNode;
	columnNameColonTypeList(): ColumnNameColonTypeListContext;
	GREATERTHAN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class MapTypeContext extends antlr.ParserRuleContext {
	_left?: PrimitiveTypeContext;
	_right?: TypeContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MAP(): antlr.TerminalNode;
	LESSTHAN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	GREATERTHAN(): antlr.TerminalNode;
	primitiveType(): PrimitiveTypeContext;
	type(): TypeContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class UnionTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNIONTYPE(): antlr.TerminalNode;
	LESSTHAN(): antlr.TerminalNode;
	columnTypeList(): ColumnTypeListContext;
	GREATERTHAN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SetOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNION(): antlr.TerminalNode | null;
	KW_INTERSECT(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	KW_MINUS(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class QueryStatementExpressionContext extends antlr.ParserRuleContext {
	_w?: WithClauseContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryStatementExpressionBody(): QueryStatementExpressionBodyContext;
	withClause(): WithClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class QueryStatementExpressionBodyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fromStatement(): FromStatementContext | null;
	regularBody(): RegularBodyContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WithClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	cteStatement(): CteStatementContext[];
	cteStatement(i: number): CteStatementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CteStatementContext extends antlr.ParserRuleContext {
	_colAliases?: ColumnNameListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	KW_AS(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	queryStatementExpression(): QueryStatementExpressionContext;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	columnNameList(): ColumnNameListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FromStatementContext extends antlr.ParserRuleContext {
	_u?: SetOperatorContext;
	_r?: SingleFromStatementContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	singleFromStatement(): SingleFromStatementContext[];
	singleFromStatement(i: number): SingleFromStatementContext | null;
	setOperator(): SetOperatorContext[];
	setOperator(i: number): SetOperatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SingleFromStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SingleFromStatementContext): void;
}
export declare class FromSelectStmtContext extends SingleFromStatementContext {
	constructor(ctx: SingleFromStatementContext);
	fromClause(): FromClauseContext;
	selectClause(): SelectClauseContext;
	lateralView(): LateralViewContext | null;
	whereClause(): WhereClauseContext | null;
	groupByClause(): GroupByClauseContext | null;
	havingClause(): HavingClauseContext | null;
	window_clause(): Window_clauseContext | null;
	qualifyClause(): QualifyClauseContext | null;
	orderByClause(): OrderByClauseContext | null;
	clusterByClause(): ClusterByClauseContext | null;
	distributeByClause(): DistributeByClauseContext | null;
	sortByClause(): SortByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FromInsertStmtContext extends SingleFromStatementContext {
	constructor(ctx: SingleFromStatementContext);
	fromClause(): FromClauseContext;
	insertClause(): InsertClauseContext;
	selectClause(): SelectClauseContext;
	lateralView(): LateralViewContext | null;
	whereClause(): WhereClauseContext | null;
	groupByClause(): GroupByClauseContext | null;
	havingClause(): HavingClauseContext | null;
	window_clause(): Window_clauseContext | null;
	qualifyClause(): QualifyClauseContext | null;
	orderByClause(): OrderByClauseContext | null;
	clusterByClause(): ClusterByClauseContext | null;
	distributeByClause(): DistributeByClauseContext | null;
	sortByClause(): SortByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RegularBodyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RegularBodyContext): void;
}
export declare class InsertStmtContext extends RegularBodyContext {
	_i?: InsertClauseContext;
	_s?: SelectStatementContext;
	constructor(ctx: RegularBodyContext);
	insertClause(): InsertClauseContext;
	selectStatement(): SelectStatementContext;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectStmtContext extends RegularBodyContext {
	constructor(ctx: RegularBodyContext);
	selectStatement(): SelectStatementContext;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AtomSelectStatementContext extends antlr.ParserRuleContext {
	_s?: SelectClauseContext;
	_f?: FromClauseContext;
	_w?: WhereClauseContext;
	_g?: GroupByClauseContext;
	_h?: HavingClauseContext;
	_win?: Window_clauseContext;
	_q?: QualifyClauseContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectClause(): SelectClauseContext | null;
	fromClause(): FromClauseContext | null;
	whereClause(): WhereClauseContext | null;
	groupByClause(): GroupByClauseContext | null;
	havingClause(): HavingClauseContext | null;
	window_clause(): Window_clauseContext | null;
	qualifyClause(): QualifyClauseContext | null;
	LPAREN(): antlr.TerminalNode | null;
	selectStatement(): SelectStatementContext | null;
	RPAREN(): antlr.TerminalNode | null;
	valuesClause(): ValuesClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectStatementContext extends antlr.ParserRuleContext {
	_a?: AtomSelectStatementContext;
	_set_?: SetOpSelectStatementContext;
	_o?: OrderByClauseContext;
	_c?: ClusterByClauseContext;
	_d?: DistributeByClauseContext;
	_sort?: SortByClauseContext;
	_l?: LimitClauseContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	atomSelectStatement(): AtomSelectStatementContext;
	setOpSelectStatement(): SetOpSelectStatementContext | null;
	orderByClause(): OrderByClauseContext | null;
	clusterByClause(): ClusterByClauseContext | null;
	distributeByClause(): DistributeByClauseContext | null;
	sortByClause(): SortByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SetOpSelectStatementContext extends antlr.ParserRuleContext {
	_u?: SetOperatorContext;
	_b?: AtomSelectStatementContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	setOperator(): SetOperatorContext[];
	setOperator(i: number): SetOperatorContext | null;
	atomSelectStatement(): AtomSelectStatementContext[];
	atomSelectStatement(i: number): AtomSelectStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectStatementWithCTEContext extends antlr.ParserRuleContext {
	_w?: WithClauseContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectStatement(): SelectStatementContext;
	withClause(): WithClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class InsertClauseContext extends antlr.ParserRuleContext {
	_targetCols?: ColumnNameListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	destination(): DestinationContext | null;
	KW_INTO(): antlr.TerminalNode | null;
	tableOrPartition(): TableOrPartitionContext | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	columnNameList(): ColumnNameListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DestinationContext extends antlr.ParserRuleContext {
	_local?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DIRECTORY(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	tableRowFormat(): TableRowFormatContext | null;
	tableFileFormat(): TableFileFormatContext | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableOrPartition(): TableOrPartitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LimitClauseContext extends antlr.ParserRuleContext {
	_offset?: Token | null;
	_num?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIMIT(): antlr.TerminalNode;
	KW_OFFSET(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode[];
	Number(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnAssignmentClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext;
	EQUAL(): antlr.TerminalNode;
	precedencePlusExpressionOrDefault(): PrecedencePlusExpressionOrDefaultContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedencePlusExpressionOrDefaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFAULT(): antlr.TerminalNode | null;
	precedencePlusExpression(): PrecedencePlusExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SetColumnsClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	columnAssignmentClause(): ColumnAssignmentClauseContext[];
	columnAssignmentClause(i: number): ColumnAssignmentClauseContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SqlTransactionStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_START(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	transactionMode(): TransactionModeContext[];
	transactionMode(i: number): TransactionModeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_WORK(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_AUTOCOMMIT(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TransactionModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_SNAPSHOT(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WhenClausesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	whenMatchedAndClause(): WhenMatchedAndClauseContext[];
	whenMatchedAndClause(i: number): WhenMatchedAndClauseContext | null;
	whenMatchedThenClause(): WhenMatchedThenClauseContext[];
	whenMatchedThenClause(i: number): WhenMatchedThenClauseContext | null;
	whenNotMatchedClause(): WhenNotMatchedClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WhenNotMatchedClauseContext extends antlr.ParserRuleContext {
	_targetCols?: ColumnParenthesesListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	KW_INSERT(): antlr.TerminalNode;
	KW_VALUES(): antlr.TerminalNode;
	expressionsInParenthesis(): ExpressionsInParenthesisContext;
	KW_AND(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	columnParenthesesList(): ColumnParenthesesListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WhenMatchedAndClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_AND(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_THEN(): antlr.TerminalNode;
	KW_UPDATE(): antlr.TerminalNode | null;
	setColumnsClause(): SetColumnsClauseContext | null;
	KW_DELETE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WhenMatchedThenClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	KW_UPDATE(): antlr.TerminalNode | null;
	setColumnsClause(): SetColumnsClauseContext | null;
	KW_DELETE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CompactionPoolContext extends antlr.ParserRuleContext {
	_poolName?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_POOL(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CompactionTypeContext extends antlr.ParserRuleContext {
	_compactType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TYPE(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CompactionStatusContext extends antlr.ParserRuleContext {
	_status?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STATUS(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterStatementContext extends antlr.ParserRuleContext {
	_tableNameTree?: ViewNameContext;
	_mvRewriteFlag?: RewriteEnabledContext;
	_mvRewriteFlag2?: RewriteDisabledContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	alterTableStatementSuffix(): AlterTableStatementSuffixContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	viewName(): ViewNameContext | null;
	alterViewStatementSuffix(): AlterViewStatementSuffixContext | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	db_schema(): Db_schemaContext | null;
	alterDatabaseStatementSuffix(): AlterDatabaseStatementSuffixContext | null;
	KW_DATACONNECTOR(): antlr.TerminalNode | null;
	alterDataConnectorStatementSuffix(): AlterDataConnectorStatementSuffixContext | null;
	KW_INDEX(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	KW_ON(): antlr.TerminalNode | null;
	tableOrPartition(): TableOrPartitionContext | null;
	KW_REBUILD(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	rewriteEnabled(): RewriteEnabledContext | null;
	rewriteDisabled(): RewriteDisabledContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableStatementSuffixContext extends antlr.ParserRuleContext {
	_exchangename?: TableNameContext;
	_cName?: Id_Context;
	_fk?: AlterForeignKeyWithNameContext;
	_spec?: PartitionTransformSpecContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	tableNameCreate(): TableNameCreateContext | null;
	KW_RECOVER(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	alterStatementSuffixDropPartitions(): AlterStatementSuffixDropPartitionsContext | null;
	KW_ADD(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	partitionSpec(): PartitionSpecContext[];
	partitionSpec(i: number): PartitionSpecContext | null;
	locationPath(): LocationPathContext[];
	locationPath(i: number): LocationPathContext | null;
	KW_TOUCH(): antlr.TerminalNode | null;
	KW_ARCHIVE(): antlr.TerminalNode | null;
	KW_UNARCHIVE(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	tableProperties(): TablePropertiesContext | null;
	KW_UNSET(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	tableSkewed(): TableSkewedContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_SKEWED(): antlr.TerminalNode | null;
	storedAsDirs(): StoredAsDirsContext | null;
	KW_EXCHANGE(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	columnNameType(): ColumnNameTypeContext | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	alterConstraintWithName(): AlterConstraintWithNameContext | null;
	alterForeignKeyWithName(): AlterForeignKeyWithNameContext | null;
	alterTblPartitionStatementSuffix(): AlterTblPartitionStatementSuffixContext | null;
	KW_OWNER(): antlr.TerminalNode | null;
	principalName(): PrincipalNameContext | null;
	KW_SPEC(): antlr.TerminalNode | null;
	partitionTransformSpec(): PartitionTransformSpecContext | null;
	alterStatementSuffixExecute(): AlterStatementSuffixExecuteContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTblPartitionStatementSuffixContext extends antlr.ParserRuleContext {
	_newLoc?: Token | null;
	_serdeName?: Token | null;
	_num?: Token | null;
	_compactType?: Token | null;
	_colName?: ColumnNameContext;
	_comment?: Token | null;
	_oldName?: ColumnNameContext;
	_newName?: ColumnNameCreateContext;
	_first?: Token | null;
	_afterCol?: Id_Context;
	_add?: Token | null;
	_replace?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode | null;
	KW_FILEFORMAT(): antlr.TerminalNode | null;
	fileFormat(): FileFormatContext | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	KW_CONCATENATE(): antlr.TerminalNode | null;
	KW_SERDE(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	tableProperties(): TablePropertiesContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_UNSET(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_BUCKETS(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	KW_SKEWED(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	skewedLocationMap(): SkewedLocationMapContext[];
	skewedLocationMap(i: number): SkewedLocationMapContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_CLUSTERED(): antlr.TerminalNode | null;
	KW_SORTED(): antlr.TerminalNode | null;
	tableBuckets(): TableBucketsContext | null;
	KW_COMPACT(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_WAIT(): antlr.TerminalNode | null;
	orderByClause(): OrderByClauseContext | null;
	compactionPool(): CompactionPoolContext | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	columnName(): ColumnNameContext | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_CHANGE(): antlr.TerminalNode | null;
	columnType(): ColumnTypeContext | null;
	columnNameCreate(): ColumnNameCreateContext | null;
	alterColumnConstraint(): AlterColumnConstraintContext | null;
	KW_AFTER(): antlr.TerminalNode | null;
	restrictOrCascade(): RestrictOrCascadeContext | null;
	KW_FIRST(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	columnNameTypeList(): ColumnNameTypeListContext | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	enableSpecification(): EnableSpecificationContext | null;
	KW_OFFLINE(): antlr.TerminalNode | null;
	KW_NO_DROP(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterViewStatementSuffixContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	tableProperties(): TablePropertiesContext | null;
	KW_UNSET(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	tableNameCreate(): TableNameCreateContext | null;
	KW_ADD(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	partitionSpec(): PartitionSpecContext[];
	partitionSpec(i: number): PartitionSpecContext | null;
	locationPath(): LocationPathContext[];
	locationPath(i: number): LocationPathContext | null;
	alterStatementSuffixDropPartitions(): AlterStatementSuffixDropPartitionsContext | null;
	selectStatementWithCTE(): SelectStatementWithCTEContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterDatabaseStatementSuffixContext extends antlr.ParserRuleContext {
	_name?: DbSchemaNameContext;
	_dbName?: DbSchemaNameContext;
	_newLocation?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_DBPROPERTIES(): antlr.TerminalNode | null;
	keyValueProperties(): KeyValuePropertiesContext | null;
	dbSchemaName(): DbSchemaNameContext;
	KW_OWNER(): antlr.TerminalNode | null;
	principalAlterName(): PrincipalAlterNameContext | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_MANAGEDLOCATION(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterDataConnectorStatementSuffixContext extends antlr.ParserRuleContext {
	_name?: DbSchemaNameContext;
	_dcName?: DbSchemaNameContext;
	_newUri?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_DCPROPERTIES(): antlr.TerminalNode | null;
	keyValueProperties(): KeyValuePropertiesContext | null;
	dbSchemaName(): DbSchemaNameContext;
	KW_OWNER(): antlr.TerminalNode | null;
	principalAlterName(): PrincipalAlterNameContext | null;
	KW_URL(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LocationPathContext extends antlr.ParserRuleContext {
	_locn?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOCATION(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterStatementSuffixDropPartitionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode[];
	KW_PARTITION(i: number): antlr.TerminalNode | null;
	partitionSelectorSpec(): PartitionSelectorSpecContext[];
	partitionSelectorSpec(i: number): PartitionSelectorSpecContext | null;
	ifExists(): IfExistsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_PROTECTION(): antlr.TerminalNode | null;
	KW_PURGE(): antlr.TerminalNode | null;
	replicationClause(): ReplicationClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SkewedLocationMapContext extends antlr.ParserRuleContext {
	_value?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	constant(): ConstantContext | null;
	skewedColumnValuePair(): SkewedColumnValuePairContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AlterStatementSuffixExecuteContext extends antlr.ParserRuleContext {
	_rollbackParam?: Token | null;
	_expireParam?: Token | null;
	_snapshotParam?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXECUTE(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	KW_EXPIRE_SNAPSHOTS(): antlr.TerminalNode | null;
	KW_SET_CURRENT_SNAPSHOT(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FileFormatContext extends antlr.ParserRuleContext {
	_inFmt?: Token | null;
	_outFmt?: Token | null;
	_serdeCls?: Token | null;
	_inDriver?: Token | null;
	_outDriver?: Token | null;
	_genericSpec?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INPUTFORMAT(): antlr.TerminalNode | null;
	KW_OUTPUTFORMAT(): antlr.TerminalNode | null;
	KW_SERDE(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	KW_INPUTDRIVER(): antlr.TerminalNode | null;
	KW_OUTPUTDRIVER(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LikeTableOrFileContext extends antlr.ParserRuleContext {
	_format?: Id_Context;
	_uri?: Token | null;
	_likeName?: TableNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode;
	KW_FILE(): antlr.TerminalNode | null;
	id_(): Id_Context | null;
	StringLiteral(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableStatementContext extends antlr.ParserRuleContext {
	_temp?: Token | null;
	_trans?: Token | null;
	_ext?: Token | null;
	_name?: TableNameCreateContext;
	_mgd?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	likeTableOrFile(): LikeTableOrFileContext | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TRANSACTIONAL(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	createTablePartitionSpec(): CreateTablePartitionSpecContext | null;
	tableRowFormat(): TableRowFormatContext | null;
	tableFileFormat(): TableFileFormatContext | null;
	locationPath(): LocationPathContext | null;
	tablePropertiesPrefixed(): TablePropertiesPrefixedContext | null;
	tableLifecycle(): TableLifecycleContext | null;
	LPAREN(): antlr.TerminalNode | null;
	columnNameTypeOrConstraintList(): ColumnNameTypeOrConstraintListContext | null;
	RPAREN(): antlr.TerminalNode | null;
	tableComment(): TableCommentContext | null;
	tableBuckets(): TableBucketsContext | null;
	tableSkewed(): TableSkewedContext | null;
	KW_AS(): antlr.TerminalNode | null;
	selectStatementWithCTE(): SelectStatementWithCTEContext | null;
	KW_MANAGED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CreateDataConnectorStatementContext extends antlr.ParserRuleContext {
	_name?: Id_Context;
	_dcType?: Token | null;
	_url?: Token | null;
	_comment?: Token | null;
	_dcprops?: KeyValuePropertiesContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_DATACONNECTOR(): antlr.TerminalNode;
	id_(): Id_Context;
	ifNotExists(): IfNotExistsContext | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_URL(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_DCPROPERTIES(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	keyValueProperties(): KeyValuePropertiesContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DropDataConnectorStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_DATACONNECTOR(): antlr.TerminalNode;
	id_(): Id_Context;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableAllColumnsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STAR(): antlr.TerminalNode;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AliasListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode;
	fromSource(): FromSourceContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FromSourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNIQUEJOIN(): antlr.TerminalNode | null;
	uniqueJoinSource(): UniqueJoinSourceContext[];
	uniqueJoinSource(i: number): UniqueJoinSourceContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	joinSource(): JoinSourceContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AtomjoinSourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableSource(): TableSourceContext | null;
	lateralView(): LateralViewContext[];
	lateralView(i: number): LateralViewContext | null;
	virtualTableSource(): VirtualTableSourceContext | null;
	subQuerySource(): SubQuerySourceContext | null;
	partitionedTableFunction(): PartitionedTableFunctionContext | null;
	LPAREN(): antlr.TerminalNode | null;
	joinSource(): JoinSourceContext | null;
	RPAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class JoinSourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	atomjoinSource(): AtomjoinSourceContext;
	joinToken(): JoinTokenContext[];
	joinToken(i: number): JoinTokenContext | null;
	joinSourcePart(): JoinSourcePartContext[];
	joinSourcePart(i: number): JoinSourcePartContext | null;
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_USING(): antlr.TerminalNode[];
	KW_USING(i: number): antlr.TerminalNode | null;
	columnParenthesesList(): ColumnParenthesesListContext[];
	columnParenthesesList(i: number): ColumnParenthesesListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class JoinSourcePartContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableSource(): TableSourceContext | null;
	virtualTableSource(): VirtualTableSourceContext | null;
	subQuerySource(): SubQuerySourceContext | null;
	partitionedTableFunction(): PartitionedTableFunctionContext | null;
	lateralView(): LateralViewContext[];
	lateralView(i: number): LateralViewContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class UniqueJoinSourceContext extends antlr.ParserRuleContext {
	_tabname?: TableOrViewContext;
	_ts?: TableSampleContext;
	_alias?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	expressionList(): ExpressionListContext;
	RPAREN(): antlr.TerminalNode;
	tableOrView(): TableOrViewContext;
	KW_PRESERVE(): antlr.TerminalNode | null;
	tableSample(): TableSampleContext | null;
	id_(): Id_Context | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class JoinTokenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COMMA(): antlr.TerminalNode | null;
	KW_JOIN(): antlr.TerminalNode | null;
	KW_INNER(): antlr.TerminalNode | null;
	KW_CROSS(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	KW_SEMI(): antlr.TerminalNode | null;
	KW_ANTI(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class LateralViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LATERAL(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	function_(): Function_Context | null;
	tableAlias(): TableAliasContext | null;
	KW_AS(): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	valuesClause(): ValuesClauseContext | null;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableAliasContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableSampleContext extends antlr.ParserRuleContext {
	_numerator?: Token | null;
	_denominator?: Token | null;
	_expression?: ExpressionContext;
	_expr: ExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLESAMPLE(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	KW_BUCKET(): antlr.TerminalNode | null;
	KW_OUT(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode;
	Number(): antlr.TerminalNode[];
	Number(i: number): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	ByteLengthLiteral(): antlr.TerminalNode | null;
	KW_PERCENT(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceContext extends antlr.ParserRuleContext {
	_tabname?: TableOrViewContext;
	_props?: TablePropertiesContext;
	_ts?: TableSampleContext;
	_asOf?: AsOfClauseContext;
	_alias?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableOrView(): TableOrViewContext;
	tableProperties(): TablePropertiesContext | null;
	tableSample(): TableSampleContext | null;
	asOfClause(): AsOfClauseContext | null;
	id_(): Id_Context | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AsOfClauseContext extends antlr.ParserRuleContext {
	_asOfTime?: ExpressionContext;
	_asOfVersion?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode[];
	KW_FOR(i: number): antlr.TerminalNode | null;
	KW_SYSTEM_TIME(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	KW_SYSTEM_VERSION(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	Number(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DbSchemaNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DbSchemaNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableOrViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext | null;
	viewName(): ViewNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableNameContext extends antlr.ParserRuleContext {
	_db?: Id_Context;
	_tab?: Id_Context;
	_meta?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableNameCreateContext extends antlr.ParserRuleContext {
	_db?: Id_Context;
	_tab?: Id_Context;
	_meta?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewNameContext extends antlr.ParserRuleContext {
	_db?: Id_Context;
	_view?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ViewNameCreateContext extends antlr.ParserRuleContext {
	_db?: Id_Context;
	_view?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SubQuerySourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	queryStatementExpression(): QueryStatementExpressionContext;
	RPAREN(): antlr.TerminalNode;
	id_(): Id_Context;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitioningSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	expressions(): ExpressionsContext | null;
	orderByClause(): OrderByClauseContext | null;
	distributeByClause(): DistributeByClauseContext | null;
	sortByClause(): SortByClauseContext | null;
	clusterByClause(): ClusterByClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionTableFunctionSourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	subQuerySource(): SubQuerySourceContext | null;
	tableSource(): TableSourceContext | null;
	partitionedTableFunction(): PartitionedTableFunctionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionedTableFunctionContext extends antlr.ParserRuleContext {
	_n?: Id_Context;
	_ptfsrc?: PartitionTableFunctionSourceContext;
	_spec?: PartitioningSpecContext;
	_alias?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	partitionTableFunctionSource(): PartitionTableFunctionSourceContext;
	Identifier(): antlr.TerminalNode[];
	Identifier(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	partitioningSpec(): PartitioningSpecContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WhereClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHERE(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ValuesClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUES(): antlr.TerminalNode;
	expressionsInParenthesis(): ExpressionsInParenthesisContext[];
	expressionsInParenthesis(i: number): ExpressionsInParenthesisContext | null;
	LPAREN(): antlr.TerminalNode | null;
	firstExpressionsWithAlias(): FirstExpressionsWithAliasContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class VirtualTableSourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	valuesClause(): ValuesClauseContext;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	tableAlias(): TableAliasContext;
	KW_AS(): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode | null;
	selectItem(): SelectItemContext[];
	selectItem(i: number): SelectItemContext | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	selectTrfmClause(): SelectTrfmClauseContext | null;
	QUERY_HINT(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	trfmClause(): TrfmClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectTrfmClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	selectExpressionList(): SelectExpressionListContext;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	rowFormat(): RowFormatContext[];
	rowFormat(i: number): RowFormatContext | null;
	recordWriter(): RecordWriterContext;
	KW_USING(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	recordReader(): RecordReaderContext;
	KW_AS(): antlr.TerminalNode | null;
	aliasList(): AliasListContext | null;
	columnNameTypeList(): ColumnNameTypeListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableAllColumns(): TableAllColumnsContext | null;
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	KW_AS(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TrfmClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectExpressionList(): SelectExpressionListContext;
	rowFormat(): RowFormatContext[];
	rowFormat(i: number): RowFormatContext | null;
	recordWriter(): RecordWriterContext;
	KW_USING(): antlr.TerminalNode;
	StringLiteral(): antlr.TerminalNode;
	recordReader(): RecordReaderContext;
	KW_MAP(): antlr.TerminalNode | null;
	KW_REDUCE(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	aliasList(): AliasListContext | null;
	columnNameTypeList(): ColumnNameTypeListContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableAllColumns(): TableAllColumnsContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SelectExpressionListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectExpression(): SelectExpressionContext[];
	selectExpression(i: number): SelectExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Window_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WINDOW(): antlr.TerminalNode;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	KW_AS(): antlr.TerminalNode[];
	KW_AS(i: number): antlr.TerminalNode | null;
	window_specification(): Window_specificationContext[];
	window_specification(i: number): Window_specificationContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Window_specificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	partitioningSpec(): PartitioningSpecContext | null;
	window_frame(): Window_frameContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Window_frameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROWS(): antlr.TerminalNode | null;
	KW_RANGE(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	window_frame_boundary(): Window_frame_boundaryContext[];
	window_frame_boundary(i: number): Window_frame_boundaryContext | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Window_frame_boundaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class GroupByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GROUP(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	columnName(): ColumnNameContext | null;
	rollupStandard(): RollupStandardContext | null;
	rollupOldSyntax(): RollupOldSyntaxContext | null;
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RollupStandardContext extends antlr.ParserRuleContext {
	_rollup?: Token | null;
	_cube?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RPAREN(): antlr.TerminalNode;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_CUBE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RollupOldSyntaxContext extends antlr.ParserRuleContext {
	_expr?: ExpressionsNotInParenthesisContext;
	_rollup?: Token | null;
	_cube?: Token | null;
	_sets?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expressionsNotInParenthesis(): ExpressionsNotInParenthesisContext;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_CUBE(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode | null;
	groupingSetExpression(): GroupingSetExpressionContext[];
	groupingSetExpression(i: number): GroupingSetExpressionContext | null;
	RPAREN(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingSetExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HAVING(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class QualifyClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_QUALIFY(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionOrDefaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFAULT(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FirstExpressionsWithAliasContext extends antlr.ParserRuleContext {
	_first?: ExpressionContext;
	_colAlias?: Id_Context;
	_alias?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_AS(): antlr.TerminalNode[];
	KW_AS(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expressionsInParenthesis(): ExpressionsInParenthesisContext | null;
	expressionsNotInParenthesis(): ExpressionsNotInParenthesisContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionsInParenthesisContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	expressionsNotInParenthesis(): ExpressionsNotInParenthesisContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionsNotInParenthesisContext extends antlr.ParserRuleContext {
	_first?: ExpressionOrDefaultContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expressionOrDefault(): ExpressionOrDefaultContext[];
	expressionOrDefault(i: number): ExpressionOrDefaultContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class OrderByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ORDER(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	columnRefOrder(): ColumnRefOrderContext[];
	columnRefOrder(i: number): ColumnRefOrderContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ClusterByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLUSTER(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	expressions(): ExpressionsContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DistributeByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISTRIBUTE(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	expressions(): ExpressionsContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SortByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SORT(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode | null;
	columnRefOrder(): ColumnRefOrderContext[];
	columnRefOrder(i: number): ColumnRefOrderContext | null;
	RPAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Function_Context extends antlr.ParserRuleContext {
	_leading?: Token | null;
	_trailing?: Token | null;
	_trim_characters?: SelectExpressionContext;
	_str?: SelectExpressionContext;
	_star?: Token | null;
	_dist?: Token | null;
	_within?: Token | null;
	_ordBy?: OrderByClauseContext;
	_nt?: Null_treatmentContext;
	_ws?: Window_specificationContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRIM(): antlr.TerminalNode | null;
	LPAREN(): antlr.TerminalNode[];
	LPAREN(i: number): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode[];
	RPAREN(i: number): antlr.TerminalNode | null;
	selectExpression(): SelectExpressionContext[];
	selectExpression(i: number): SelectExpressionContext | null;
	KW_BOTH(): antlr.TerminalNode | null;
	KW_LEADING(): antlr.TerminalNode | null;
	KW_TRAILING(): antlr.TerminalNode | null;
	functionNameForInvoke(): FunctionNameForInvokeContext | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_OVER(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	KW_WITHIN(): antlr.TerminalNode | null;
	orderByClause(): OrderByClauseContext | null;
	window_specification(): Window_specificationContext | null;
	null_treatment(): Null_treatmentContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Null_treatmentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULLS(): antlr.TerminalNode;
	KW_RESPECT(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionIdentifier(): FunctionIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameForDDLContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionIdentifier(): FunctionIdentifierContext | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameForInvokeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionIdentifier(): FunctionIdentifierContext | null;
	sql11ReservedKeywordsUsedAsFunctionName(): Sql11ReservedKeywordsUsedAsFunctionNameContext | null;
	sysFuncNames(): SysFuncNamesContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CastExpressionContext extends antlr.ParserRuleContext {
	_toType?: PrimitiveTypeContext;
	_fmt?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CAST(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_AS(): antlr.TerminalNode;
	RPAREN(): antlr.TerminalNode;
	primitiveType(): PrimitiveTypeContext;
	StringLiteral(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class CaseExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CASE(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_END(): antlr.TerminalNode;
	KW_WHEN(): antlr.TerminalNode[];
	KW_WHEN(i: number): antlr.TerminalNode | null;
	KW_THEN(): antlr.TerminalNode[];
	KW_THEN(i: number): antlr.TerminalNode | null;
	KW_ELSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WhenExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CASE(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	KW_WHEN(): antlr.TerminalNode[];
	KW_WHEN(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_THEN(): antlr.TerminalNode[];
	KW_THEN(i: number): antlr.TerminalNode | null;
	KW_ELSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FloorExpressionContext extends antlr.ParserRuleContext {
	_floorUnit?: TimeQualifiersContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FLOOR(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RPAREN(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode | null;
	timeQualifiers(): TimeQualifiersContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExtractExpressionContext extends antlr.ParserRuleContext {
	_timeUnit?: TimeQualifiersContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXTRACT(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RPAREN(): antlr.TerminalNode;
	timeQualifiers(): TimeQualifiersContext;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TimeQualifiersContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	year(): YearContext | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	month(): MonthContext | null;
	week(): WeekContext | null;
	day(): DayContext | null;
	hour(): HourContext | null;
	minute(): MinuteContext | null;
	second(): SecondContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantContext extends antlr.ParserRuleContext {
	_value?: IntervalValueContext;
	_qualifiers?: IntervalQualifiersContext;
	_csName?: Token | null;
	_csLiteral?: Token | null;
	_p?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	intervalValue(): IntervalValueContext | null;
	intervalQualifiers(): IntervalQualifiersContext | null;
	Number(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode[];
	StringLiteral(i: number): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIMESTAMPLOCALTZ(): antlr.TerminalNode | null;
	IntegralLiteral(): antlr.TerminalNode | null;
	NumberLiteral(): antlr.TerminalNode | null;
	CharSetName(): antlr.TerminalNode | null;
	CharSetLiteral(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	QUESTION(): antlr.TerminalNode | null;
	Identifier(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	StringLiteral(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalExpressionContext extends antlr.ParserRuleContext {
	_value?: IntervalValueContext;
	_qualifiers?: IntervalQualifiersContext;
	_expr?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode | null;
	RPAREN(): antlr.TerminalNode | null;
	intervalValue(): IntervalValueContext | null;
	intervalQualifiers(): IntervalQualifiersContext;
	KW_INTERVAL(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalQualifiersContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	year(): YearContext | null;
	KW_TO(): antlr.TerminalNode | null;
	month(): MonthContext | null;
	day(): DayContext | null;
	second(): SecondContext | null;
	hour(): HourContext | null;
	minute(): MinuteContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceAndExpression(): PrecedenceAndExpressionContext[];
	precedenceAndExpression(i: number): PrecedenceAndExpressionContext | null;
	KW_OR(): antlr.TerminalNode[];
	KW_OR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class AtomExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constant(): ConstantContext | null;
	intervalExpression(): IntervalExpressionContext | null;
	castExpression(): CastExpressionContext | null;
	extractExpression(): ExtractExpressionContext | null;
	floorExpression(): FloorExpressionContext | null;
	caseExpression(): CaseExpressionContext | null;
	whenExpression(): WhenExpressionContext | null;
	subQueryExpression(): SubQueryExpressionContext | null;
	function_(): Function_Context | null;
	expressionsInParenthesis(): ExpressionsInParenthesisContext | null;
	id_(): Id_Context | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceUnaryPrefixExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	atomExpression(): AtomExpressionContext;
	LSQUARE(): antlr.TerminalNode[];
	LSQUARE(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RSQUARE(): antlr.TerminalNode[];
	RSQUARE(i: number): antlr.TerminalNode | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	PLUS(): antlr.TerminalNode[];
	PLUS(i: number): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode[];
	MINUS(i: number): antlr.TerminalNode | null;
	TILDE(): antlr.TerminalNode[];
	TILDE(i: number): antlr.TerminalNode | null;
	BITWISENOT(): antlr.TerminalNode[];
	BITWISENOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceBitwiseXorExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceUnaryPrefixExpression(): PrecedenceUnaryPrefixExpressionContext[];
	precedenceUnaryPrefixExpression(i: number): PrecedenceUnaryPrefixExpressionContext | null;
	BITWISEXOR(): antlr.TerminalNode[];
	BITWISEXOR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceStarExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceBitwiseXorExpression(): PrecedenceBitwiseXorExpressionContext[];
	precedenceBitwiseXorExpression(i: number): PrecedenceBitwiseXorExpressionContext | null;
	STAR(): antlr.TerminalNode[];
	STAR(i: number): antlr.TerminalNode | null;
	DIVIDE(): antlr.TerminalNode[];
	DIVIDE(i: number): antlr.TerminalNode | null;
	MOD(): antlr.TerminalNode[];
	MOD(i: number): antlr.TerminalNode | null;
	DIV(): antlr.TerminalNode[];
	DIV(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedencePlusExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceStarExpression(): PrecedenceStarExpressionContext[];
	precedenceStarExpression(i: number): PrecedenceStarExpressionContext | null;
	PLUS(): antlr.TerminalNode[];
	PLUS(i: number): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode[];
	MINUS(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceConcatenateExpressionContext extends antlr.ParserRuleContext {
	_plus?: PrecedencePlusExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedencePlusExpression(): PrecedencePlusExpressionContext[];
	precedencePlusExpression(i: number): PrecedencePlusExpressionContext | null;
	CONCATENATE(): antlr.TerminalNode[];
	CONCATENATE(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceAmpersandExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceConcatenateExpression(): PrecedenceConcatenateExpressionContext[];
	precedenceConcatenateExpression(i: number): PrecedenceConcatenateExpressionContext | null;
	AMPERSAND(): antlr.TerminalNode[];
	AMPERSAND(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceBitwiseOrExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceAmpersandExpression(): PrecedenceAmpersandExpressionContext[];
	precedenceAmpersandExpression(i: number): PrecedenceAmpersandExpressionContext | null;
	BITWISEOR(): antlr.TerminalNode[];
	BITWISEOR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceSimilarOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	LESSTHANOREQUALTO(): antlr.TerminalNode | null;
	LESSTHAN(): antlr.TerminalNode | null;
	GREATERTHANOREQUALTO(): antlr.TerminalNode | null;
	GREATERTHAN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SubQueryExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext;
	RPAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceSimilarExpressionContext extends antlr.ParserRuleContext {
	_a?: PrecedenceBitwiseOrExpressionContext;
	_part?: PrecedenceSimilarExpressionPartContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceBitwiseOrExpression(): PrecedenceBitwiseOrExpressionContext | null;
	precedenceSimilarExpressionPart(): PrecedenceSimilarExpressionPartContext | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	subQueryExpression(): SubQueryExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceSimilarExpressionPartContext extends antlr.ParserRuleContext {
	_equalExpr?: PrecedenceBitwiseOrExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceSimilarOperator(): PrecedenceSimilarOperatorContext | null;
	precedenceBitwiseOrExpression(): PrecedenceBitwiseOrExpressionContext | null;
	precedenceSimilarExpressionAtom(): PrecedenceSimilarExpressionAtomContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	precedenceSimilarExpressionPartNot(): PrecedenceSimilarExpressionPartNotContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceSimilarExpressionAtomContext extends antlr.ParserRuleContext {
	_min?: PrecedenceBitwiseOrExpressionContext;
	_max?: PrecedenceBitwiseOrExpressionContext;
	_expr?: ExpressionsInParenthesisContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IN(): antlr.TerminalNode | null;
	precedenceSimilarExpressionIn(): PrecedenceSimilarExpressionInContext | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	precedenceBitwiseOrExpression(): PrecedenceBitwiseOrExpressionContext[];
	precedenceBitwiseOrExpression(i: number): PrecedenceBitwiseOrExpressionContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	expressionsInParenthesis(): ExpressionsInParenthesisContext | null;
	subQuerySelectorOperator(): SubQuerySelectorOperatorContext | null;
	subQueryExpression(): SubQueryExpressionContext | null;
	KW_SOME(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceSimilarExpressionInContext extends antlr.ParserRuleContext {
	_expr?: ExpressionsInParenthesisContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	subQueryExpression(): SubQueryExpressionContext | null;
	expressionsInParenthesis(): ExpressionsInParenthesisContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceSimilarExpressionPartNotContext extends antlr.ParserRuleContext {
	_notExpr?: PrecedenceBitwiseOrExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	precedenceBitwiseOrExpression(): PrecedenceBitwiseOrExpressionContext | null;
	precedenceSimilarExpressionAtom(): PrecedenceSimilarExpressionAtomContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceDistinctOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IS(): antlr.TerminalNode;
	KW_DISTINCT(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceEqualOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL(): antlr.TerminalNode | null;
	EQUAL_NS(): antlr.TerminalNode | null;
	NOTEQUAL(): antlr.TerminalNode | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceEqualExpressionContext extends antlr.ParserRuleContext {
	_precedenceEqualOperator?: PrecedenceEqualOperatorContext;
	_equal: PrecedenceEqualOperatorContext[];
	_precedenceSimilarExpression?: PrecedenceSimilarExpressionContext;
	_p: PrecedenceSimilarExpressionContext[];
	_precedenceDistinctOperator?: PrecedenceDistinctOperatorContext;
	_dist: PrecedenceDistinctOperatorContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceSimilarExpression(): PrecedenceSimilarExpressionContext[];
	precedenceSimilarExpression(i: number): PrecedenceSimilarExpressionContext | null;
	precedenceEqualOperator(): PrecedenceEqualOperatorContext[];
	precedenceEqualOperator(i: number): PrecedenceEqualOperatorContext | null;
	precedenceDistinctOperator(): PrecedenceDistinctOperatorContext[];
	precedenceDistinctOperator(i: number): PrecedenceDistinctOperatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class IsConditionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULL(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceNotExpressionContext extends antlr.ParserRuleContext {
	_a?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceEqualExpression(): PrecedenceEqualExpressionContext;
	KW_NOT(): antlr.TerminalNode[];
	KW_NOT(i: number): antlr.TerminalNode | null;
	isCondition(): IsConditionContext | null;
	KW_IS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrecedenceAndExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	precedenceNotExpression(): PrecedenceNotExpressionContext[];
	precedenceNotExpression(i: number): PrecedenceNotExpressionContext | null;
	KW_AND(): antlr.TerminalNode[];
	KW_AND(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TableOrPartitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext;
	partitionSpec(): PartitionSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	LPAREN(): antlr.TerminalNode;
	partitionVal(): PartitionValContext[];
	partitionVal(i: number): PartitionValContext | null;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionValContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	EQUAL(): antlr.TerminalNode | null;
	constant(): ConstantContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSelectorSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LPAREN(): antlr.TerminalNode;
	partitionSelectorVal(): PartitionSelectorValContext[];
	partitionSelectorVal(i: number): PartitionSelectorValContext | null;
	RPAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSelectorValContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	constant(): ConstantContext;
	KW_LIKE(): antlr.TerminalNode | null;
	subQuerySelectorOperator(): SubQuerySelectorOperatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SubQuerySelectorOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL(): antlr.TerminalNode | null;
	NOTEQUAL(): antlr.TerminalNode | null;
	LESSTHANOREQUALTO(): antlr.TerminalNode | null;
	LESSTHAN(): antlr.TerminalNode | null;
	GREATERTHANOREQUALTO(): antlr.TerminalNode | null;
	GREATERTHAN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SysFuncNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AND(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_CASE(): antlr.TerminalNode | null;
	KW_WHEN(): antlr.TerminalNode | null;
	KW_FLOOR(): antlr.TerminalNode | null;
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	KW_UNIONTYPE(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	EQUAL_NS(): antlr.TerminalNode | null;
	NOTEQUAL(): antlr.TerminalNode | null;
	LESSTHANOREQUALTO(): antlr.TerminalNode | null;
	LESSTHAN(): antlr.TerminalNode | null;
	GREATERTHANOREQUALTO(): antlr.TerminalNode | null;
	GREATERTHAN(): antlr.TerminalNode | null;
	DIVIDE(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	MOD(): antlr.TerminalNode | null;
	DIV(): antlr.TerminalNode | null;
	AMPERSAND(): antlr.TerminalNode | null;
	TILDE(): antlr.TerminalNode | null;
	BITWISEOR(): antlr.TerminalNode | null;
	BITWISEXOR(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Id_Context extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	Identifier(): antlr.TerminalNode | null;
	nonReserved(): NonReservedContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionIdentifierContext extends antlr.ParserRuleContext {
	_fn?: Id_Context;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PrincipalIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class NonReservedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ABORT(): antlr.TerminalNode | null;
	KW_ACTIVATE(): antlr.TerminalNode | null;
	KW_ACTIVE(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_ALLOC_FRACTION(): antlr.TerminalNode | null;
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_ARCHIVE(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_AST(): antlr.TerminalNode | null;
	KW_AT(): antlr.TerminalNode | null;
	KW_AUTOCOMMIT(): antlr.TerminalNode | null;
	KW_BATCH(): antlr.TerminalNode | null;
	KW_BEFORE(): antlr.TerminalNode | null;
	KW_BUCKET(): antlr.TerminalNode | null;
	KW_BUCKETS(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_CBO(): antlr.TerminalNode | null;
	KW_CHANGE(): antlr.TerminalNode | null;
	KW_CHECK(): antlr.TerminalNode | null;
	KW_CLUSTER(): antlr.TerminalNode | null;
	KW_CLUSTERED(): antlr.TerminalNode | null;
	KW_CLUSTERSTATUS(): antlr.TerminalNode | null;
	KW_COLLECTION(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_COMPACT(): antlr.TerminalNode | null;
	KW_COMPACTIONS(): antlr.TerminalNode | null;
	KW_COMPUTE(): antlr.TerminalNode | null;
	KW_CONCATENATE(): antlr.TerminalNode | null;
	KW_CONTINUE(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	KW_CRON(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_DATETIME(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_DAYOFWEEK(): antlr.TerminalNode | null;
	KW_DBPROPERTIES(): antlr.TerminalNode | null;
	KW_DCPROPERTIES(): antlr.TerminalNode | null;
	KW_DEBUG(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DEFERRED(): antlr.TerminalNode | null;
	KW_DEFINED(): antlr.TerminalNode | null;
	KW_DELIMITED(): antlr.TerminalNode | null;
	KW_DEPENDENCY(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DETAIL(): antlr.TerminalNode | null;
	KW_DIRECTORIES(): antlr.TerminalNode | null;
	KW_DIRECTORY(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_DISABLED(): antlr.TerminalNode | null;
	KW_DISTRIBUTE(): antlr.TerminalNode | null;
	KW_DISTRIBUTED(): antlr.TerminalNode | null;
	KW_DO(): antlr.TerminalNode | null;
	KW_DUMP(): antlr.TerminalNode | null;
	KW_ELEM_TYPE(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_ENABLED(): antlr.TerminalNode | null;
	KW_ENFORCED(): antlr.TerminalNode | null;
	KW_ESCAPED(): antlr.TerminalNode | null;
	KW_EVERY(): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	KW_EXECUTED(): antlr.TerminalNode | null;
	KW_EXPIRE_SNAPSHOTS(): antlr.TerminalNode | null;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_EXPORT(): antlr.TerminalNode | null;
	KW_EXPRESSION(): antlr.TerminalNode | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_FILE(): antlr.TerminalNode | null;
	KW_FILEFORMAT(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	KW_FORMATTED(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_HOLD_DDLTIME(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	KW_IDXPROPERTIES(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_INPATH(): antlr.TerminalNode | null;
	KW_INPUTDRIVER(): antlr.TerminalNode | null;
	KW_INPUTFORMAT(): antlr.TerminalNode | null;
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_ITEMS(): antlr.TerminalNode | null;
	KW_JAR(): antlr.TerminalNode | null;
	KW_JOINCOST(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_KEYS(): antlr.TerminalNode | null;
	KW_KEY_TYPE(): antlr.TerminalNode | null;
	KW_KILL(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_LIFECYCLE(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_LINES(): antlr.TerminalNode | null;
	KW_LOAD(): antlr.TerminalNode | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_LOCKS(): antlr.TerminalNode | null;
	KW_LOGICAL(): antlr.TerminalNode | null;
	KW_LONG(): antlr.TerminalNode | null;
	KW_MANAGED(): antlr.TerminalNode | null;
	KW_MANAGEDLOCATION(): antlr.TerminalNode | null;
	KW_MANAGEMENT(): antlr.TerminalNode | null;
	KW_MAPJOIN(): antlr.TerminalNode | null;
	KW_MAPPING(): antlr.TerminalNode | null;
	KW_MATCHED(): antlr.TerminalNode | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_METADATA(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_MOVE(): antlr.TerminalNode | null;
	KW_MSCK(): antlr.TerminalNode | null;
	KW_NORELY(): antlr.TerminalNode | null;
	KW_NOSCAN(): antlr.TerminalNode | null;
	KW_NOVALIDATE(): antlr.TerminalNode | null;
	KW_NO_DROP(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_OFFLINE(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_OUTPUTDRIVER(): antlr.TerminalNode | null;
	KW_OUTPUTFORMAT(): antlr.TerminalNode | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_PARTITIONED(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_PATH(): antlr.TerminalNode | null;
	KW_PLAN(): antlr.TerminalNode | null;
	KW_PLANS(): antlr.TerminalNode | null;
	KW_PLUS(): antlr.TerminalNode | null;
	KW_POOL(): antlr.TerminalNode | null;
	KW_PRINCIPALS(): antlr.TerminalNode | null;
	KW_PROTECTION(): antlr.TerminalNode | null;
	KW_PURGE(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_QUERY_PARALLELISM(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_READONLY(): antlr.TerminalNode | null;
	KW_REBUILD(): antlr.TerminalNode | null;
	KW_RECORDREADER(): antlr.TerminalNode | null;
	KW_RECORDWRITER(): antlr.TerminalNode | null;
	KW_RELOAD(): antlr.TerminalNode | null;
	KW_RELY(): antlr.TerminalNode | null;
	KW_REMOTE(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_REOPTIMIZATION(): antlr.TerminalNode | null;
	KW_REPAIR(): antlr.TerminalNode | null;
	KW_REPL(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_REPLICATION(): antlr.TerminalNode | null;
	KW_RESOURCE(): antlr.TerminalNode | null;
	KW_RESPECT(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_REWRITE(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_ROLES(): antlr.TerminalNode | null;
	KW_SCHEDULED(): antlr.TerminalNode | null;
	KW_SCHEDULING_POLICY(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	KW_SEMI(): antlr.TerminalNode | null;
	KW_SERDE(): antlr.TerminalNode | null;
	KW_SERDEPROPERTIES(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	KW_SET_CURRENT_SNAPSHOT(): antlr.TerminalNode | null;
	KW_SHARED(): antlr.TerminalNode | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_SHOW_DATABASE(): antlr.TerminalNode | null;
	KW_SKEWED(): antlr.TerminalNode | null;
	KW_SNAPSHOT(): antlr.TerminalNode | null;
	KW_SORT(): antlr.TerminalNode | null;
	KW_SORTED(): antlr.TerminalNode | null;
	KW_SPEC(): antlr.TerminalNode | null;
	KW_SSL(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_STATUS(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	KW_STREAMTABLE(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_STRUCT(): antlr.TerminalNode | null;
	KW_SUMMARY(): antlr.TerminalNode | null;
	KW_SYSTEM_TIME(): antlr.TerminalNode | null;
	KW_SYSTEM_VERSION(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_TBLPROPERTIES(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TERMINATED(): antlr.TerminalNode | null;
	KW_TIMESTAMPTZ(): antlr.TerminalNode | null;
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_TOUCH(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_TRANSACTIONAL(): antlr.TerminalNode | null;
	KW_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_UNARCHIVE(): antlr.TerminalNode | null;
	KW_UNDO(): antlr.TerminalNode | null;
	KW_UNIONTYPE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_UNLOCK(): antlr.TerminalNode | null;
	KW_UNMANAGED(): antlr.TerminalNode | null;
	KW_UNSET(): antlr.TerminalNode | null;
	KW_UNSIGNED(): antlr.TerminalNode | null;
	KW_URI(): antlr.TerminalNode | null;
	KW_URL(): antlr.TerminalNode | null;
	KW_USE(): antlr.TerminalNode | null;
	KW_UTC(): antlr.TerminalNode | null;
	KW_UTCTIMESTAMP(): antlr.TerminalNode | null;
	KW_VALIDATE(): antlr.TerminalNode | null;
	KW_VALUE_TYPE(): antlr.TerminalNode | null;
	KW_VECTORIZATION(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_VIEWS(): antlr.TerminalNode | null;
	KW_WAIT(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_WEEKS(): antlr.TerminalNode | null;
	KW_WHILE(): antlr.TerminalNode | null;
	KW_WITHIN(): antlr.TerminalNode | null;
	KW_WORK(): antlr.TerminalNode | null;
	KW_WORKLOAD(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class Sql11ReservedKeywordsUsedAsFunctionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ConfigPropertiesItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context | null;
	KW_JOIN(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_REDUCE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_PERCENT(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_UNION(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_FETCH(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_FORCE(): antlr.TerminalNode | null;
	KW_START(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_CONF(): antlr.TerminalNode | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_REFERENCES(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	KW_DDL(): antlr.TerminalNode | null;
	KW_VALUES(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_READS(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ResourcePlanDdlStatementsContext extends antlr.ParserRuleContext {
	_name?: Id_Context;
	_likeName?: Id_Context;
	_newName?: Id_Context;
	_src?: Id_Context;
	_dest?: Id_Context;
	_rpName?: Id_Context;
	_triggerName?: Id_Context;
	_poolName?: PoolPathContext;
	_mappingType?: MappingTypesContext;
	_path?: PoolPathContext;
	_order?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode | null;
	KW_RESOURCE(): antlr.TerminalNode | null;
	KW_PLAN(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	KW_WITH(): antlr.TerminalNode | null;
	rpAssignList(): RpAssignListContext | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_VALIDATE(): antlr.TerminalNode | null;
	disable(): DisableContext | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_UNSET(): antlr.TerminalNode | null;
	rpUnassign(): RpUnassignContext[];
	rpUnassign(i: number): RpUnassignContext | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	activate(): ActivateContext | null;
	enable(): EnableContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	KW_WORKLOAD(): antlr.TerminalNode | null;
	KW_MANAGEMENT(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_ACTIVE(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	DOT(): antlr.TerminalNode | null;
	KW_WHEN(): antlr.TerminalNode | null;
	triggerAtomExpression(): TriggerAtomExpressionContext | null;
	KW_DO(): antlr.TerminalNode | null;
	triggerActionExpression(): TriggerActionExpressionContext | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_POOL(): antlr.TerminalNode | null;
	KW_UNMANAGED(): antlr.TerminalNode | null;
	poolPath(): PoolPathContext | null;
	poolAssignList(): PoolAssignListContext | null;
	KW_SCHEDULING_POLICY(): antlr.TerminalNode | null;
	KW_MAPPING(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	mappingTypes(): MappingTypesContext | null;
	KW_ORDER(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class MappingTypesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USER(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_APPLICATION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RpAssignContext extends antlr.ParserRuleContext {
	_parallelism?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_QUERY_PARALLELISM(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode;
	Number(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_POOL(): antlr.TerminalNode | null;
	poolPath(): PoolPathContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RpAssignListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rpAssign(): RpAssignContext[];
	rpAssign(i: number): RpAssignContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class RpUnassignContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_QUERY_PARALLELISM(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_POOL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class ActivateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ACTIVATE(): antlr.TerminalNode;
	KW_WITH(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class EnableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_ENABLED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DisableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_DISABLED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class YearContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class MonthContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class WeekContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WEEK(): antlr.TerminalNode | null;
	KW_WEEKS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DayContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class HourContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HOUR(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class MinuteContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class SecondContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class DecimalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEC(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_NUMERIC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PoolPathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context[];
	id_(i: number): Id_Context | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerAtomExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	id_(): Id_Context;
	GREATERTHAN(): antlr.TerminalNode;
	Number(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerActionExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_KILL(): antlr.TerminalNode | null;
	KW_MOVE(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	poolPath(): PoolPathContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PoolAssignContext extends antlr.ParserRuleContext {
	_allocFraction?: Token | null;
	_parallelism?: Token | null;
	_policy?: Token | null;
	_path?: PoolPathContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALLOC_FRACTION(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	KW_QUERY_PARALLELISM(): antlr.TerminalNode | null;
	KW_SCHEDULING_POLICY(): antlr.TerminalNode | null;
	KW_PATH(): antlr.TerminalNode | null;
	Number(): antlr.TerminalNode | null;
	StringLiteral(): antlr.TerminalNode | null;
	poolPath(): PoolPathContext | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
export declare class PoolAssignListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	poolAssign(): PoolAssignContext[];
	poolAssign(i: number): PoolAssignContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: HiveSqlParserListener): void;
	exitRule(listener: HiveSqlParserListener): void;
	accept<Result>(visitor: HiveSqlParserVisitor<Result>): Result | null;
}
