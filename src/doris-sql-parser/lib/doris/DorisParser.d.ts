import * as antlr from 'antlr4ng';
import { Token } from 'antlr4ng';
import { DorisParserListener } from './DorisParserListener.js';
import { DorisParserVisitor } from './DorisParserVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class DorisParser extends SQLParserBase {
	static readonly SEMICOLON = 1;
	static readonly LEFT_PAREN = 2;
	static readonly RIGHT_PAREN = 3;
	static readonly COMMA = 4;
	static readonly DOT = 5;
	static readonly LEFT_BRACKET = 6;
	static readonly RIGHT_BRACKET = 7;
	static readonly LEFT_BRACE = 8;
	static readonly RIGHT_BRACE = 9;
	static readonly ACCOUNT_LOCK = 10;
	static readonly ACCOUNT_UNLOCK = 11;
	static readonly ADD = 12;
	static readonly ADDDATE = 13;
	static readonly ADMIN = 14;
	static readonly AFTER = 15;
	static readonly AGG_STATE = 16;
	static readonly AGGREGATE = 17;
	static readonly ALIAS = 18;
	static readonly ALL = 19;
	static readonly ALTER = 20;
	static readonly ANALYZE = 21;
	static readonly ANALYZED = 22;
	static readonly AND = 23;
	static readonly ANTI = 24;
	static readonly APPEND = 25;
	static readonly ARRAY = 26;
	static readonly ARRAY_RANGE = 27;
	static readonly AS = 28;
	static readonly ASC = 29;
	static readonly AT = 30;
	static readonly AUTHORS = 31;
	static readonly AUTO = 32;
	static readonly AUTO_INCREMENT = 33;
	static readonly BACKEND = 34;
	static readonly BACKENDS = 35;
	static readonly BACKUP = 36;
	static readonly BEGIN = 37;
	static readonly BELONG = 38;
	static readonly BETWEEN = 39;
	static readonly BIGINT = 40;
	static readonly BIN = 41;
	static readonly BINARY = 42;
	static readonly BINLOG = 43;
	static readonly BITAND = 44;
	static readonly BITMAP = 45;
	static readonly BITMAP_UNION = 46;
	static readonly BITOR = 47;
	static readonly BITXOR = 48;
	static readonly BLOB = 49;
	static readonly BOOLEAN = 50;
	static readonly BRIEF = 51;
	static readonly BROKER = 52;
	static readonly BUCKETS = 53;
	static readonly BUILD = 54;
	static readonly BUILTIN = 55;
	static readonly BULK = 56;
	static readonly BY = 57;
	static readonly CACHE = 58;
	static readonly CACHED = 59;
	static readonly CALL = 60;
	static readonly CANCEL = 61;
	static readonly CASE = 62;
	static readonly CAST = 63;
	static readonly CATALOG = 64;
	static readonly CATALOGS = 65;
	static readonly CHAIN = 66;
	static readonly CHAR = 67;
	static readonly CHARSET = 68;
	static readonly CHECK = 69;
	static readonly CLEAN = 70;
	static readonly CLUSTER = 71;
	static readonly CLUSTERS = 72;
	static readonly COLLATE = 73;
	static readonly COLLATION = 74;
	static readonly COLLECT = 75;
	static readonly COLOCATE = 76;
	static readonly COLUMN = 77;
	static readonly COLUMNS = 78;
	static readonly COMMENT = 79;
	static readonly COMMIT = 80;
	static readonly COMMITTED = 81;
	static readonly COMPACT = 82;
	static readonly COMPLETE = 83;
	static readonly COMPRESS_TYPE = 84;
	static readonly CONFIG = 85;
	static readonly CONNECTION = 86;
	static readonly CONNECTION_ID = 87;
	static readonly CONSISTENT = 88;
	static readonly CONSTRAINT = 89;
	static readonly CONSTRAINTS = 90;
	static readonly CONVERT = 91;
	static readonly CONVERT_LSC = 92;
	static readonly COPY = 93;
	static readonly COUNT = 94;
	static readonly CREATE = 95;
	static readonly CREATION = 96;
	static readonly CRON = 97;
	static readonly CROSS = 98;
	static readonly CUBE = 99;
	static readonly CURRENT = 100;
	static readonly CURRENT_CATALOG = 101;
	static readonly CURRENT_DATE = 102;
	static readonly CURRENT_TIME = 103;
	static readonly CURRENT_TIMESTAMP = 104;
	static readonly CURRENT_USER = 105;
	static readonly DATA = 106;
	static readonly DATABASE = 107;
	static readonly DATABASES = 108;
	static readonly DATE = 109;
	static readonly DATE_ADD = 110;
	static readonly DATE_CEIL = 111;
	static readonly DATE_DIFF = 112;
	static readonly DATE_FLOOR = 113;
	static readonly DATE_SUB = 114;
	static readonly DATEADD = 115;
	static readonly DATEDIFF = 116;
	static readonly DATETIME = 117;
	static readonly DATETIMEV2 = 118;
	static readonly DATEV2 = 119;
	static readonly DATETIMEV1 = 120;
	static readonly DATEV1 = 121;
	static readonly DAY = 122;
	static readonly DAYS_ADD = 123;
	static readonly DAYS_SUB = 124;
	static readonly DECIMAL = 125;
	static readonly DECIMALV2 = 126;
	static readonly DECIMALV3 = 127;
	static readonly DECOMMISSION = 128;
	static readonly DEFAULT = 129;
	static readonly DEFERRED = 130;
	static readonly DELETE = 131;
	static readonly DEMAND = 132;
	static readonly DESC = 133;
	static readonly DESCRIBE = 134;
	static readonly DIAGNOSE = 135;
	static readonly DISK = 136;
	static readonly DISTINCT = 137;
	static readonly DISTINCTPC = 138;
	static readonly DISTINCTPCSA = 139;
	static readonly DISTRIBUTED = 140;
	static readonly DISTRIBUTION = 141;
	static readonly DIV = 142;
	static readonly DO = 143;
	static readonly DORIS_INTERNAL_TABLE_ID = 144;
	static readonly DOUBLE = 145;
	static readonly DROP = 146;
	static readonly DROPP = 147;
	static readonly DUAL = 148;
	static readonly DUPLICATE = 149;
	static readonly DYNAMIC = 150;
	static readonly ELSE = 151;
	static readonly ENABLE = 152;
	static readonly ENCRYPTKEY = 153;
	static readonly ENCRYPTKEYS = 154;
	static readonly END = 155;
	static readonly ENDS = 156;
	static readonly ENGINE = 157;
	static readonly ENGINES = 158;
	static readonly ENTER = 159;
	static readonly ERRORS = 160;
	static readonly EVENTS = 161;
	static readonly EVERY = 162;
	static readonly EXCEPT = 163;
	static readonly EXCLUDE = 164;
	static readonly EXECUTE = 165;
	static readonly EXISTS = 166;
	static readonly EXPIRED = 167;
	static readonly EXPLAIN = 168;
	static readonly EXPORT = 169;
	static readonly EXTENDED = 170;
	static readonly EXTERNAL = 171;
	static readonly EXTRACT = 172;
	static readonly FAILED_LOGIN_ATTEMPTS = 173;
	static readonly FALSE = 174;
	static readonly FAST = 175;
	static readonly FEATURE = 176;
	static readonly FIELDS = 177;
	static readonly FILE = 178;
	static readonly FILTER = 179;
	static readonly FIRST = 180;
	static readonly FLOAT = 181;
	static readonly FOLLOWER = 182;
	static readonly FOLLOWING = 183;
	static readonly FOR = 184;
	static readonly FOREIGN = 185;
	static readonly FORCE = 186;
	static readonly FORMAT = 187;
	static readonly FREE = 188;
	static readonly FROM = 189;
	static readonly FRONTEND = 190;
	static readonly FRONTENDS = 191;
	static readonly FULL = 192;
	static readonly FUNCTION = 193;
	static readonly FUNCTIONS = 194;
	static readonly GENERIC = 195;
	static readonly GLOBAL = 196;
	static readonly GRANT = 197;
	static readonly GRANTS = 198;
	static readonly GRAPH = 199;
	static readonly GROUP = 200;
	static readonly GROUPING = 201;
	static readonly GROUPS = 202;
	static readonly HASH = 203;
	static readonly HAVING = 204;
	static readonly HDFS = 205;
	static readonly HELP = 206;
	static readonly HISTOGRAM = 207;
	static readonly HLL = 208;
	static readonly HLL_UNION = 209;
	static readonly HOSTNAME = 210;
	static readonly HOTSPOT = 211;
	static readonly HOUR = 212;
	static readonly HUB = 213;
	static readonly IDENTIFIED = 214;
	static readonly IF = 215;
	static readonly IGNORE = 216;
	static readonly IMMEDIATE = 217;
	static readonly IN = 218;
	static readonly INCREMENTAL = 219;
	static readonly INDEX = 220;
	static readonly INDEXES = 221;
	static readonly INFILE = 222;
	static readonly INNER = 223;
	static readonly INSERT = 224;
	static readonly INSTALL = 225;
	static readonly INT = 226;
	static readonly INTEGER = 227;
	static readonly INTERMEDIATE = 228;
	static readonly INTERSECT = 229;
	static readonly INTERVAL = 230;
	static readonly INTO = 231;
	static readonly INVERTED = 232;
	static readonly IPV4 = 233;
	static readonly IPV6 = 234;
	static readonly IS = 235;
	static readonly IS_NOT_NULL_PRED = 236;
	static readonly IS_NULL_PRED = 237;
	static readonly ISNULL = 238;
	static readonly ISOLATION = 239;
	static readonly JOB = 240;
	static readonly JOBS = 241;
	static readonly JOIN = 242;
	static readonly JSON = 243;
	static readonly JSONB = 244;
	static readonly KEY = 245;
	static readonly KEYS = 246;
	static readonly KILL = 247;
	static readonly LABEL = 248;
	static readonly LARGEINT = 249;
	static readonly LAST = 250;
	static readonly LATERAL = 251;
	static readonly LDAP = 252;
	static readonly LDAP_ADMIN_PASSWORD = 253;
	static readonly LEFT = 254;
	static readonly LESS = 255;
	static readonly LEVEL = 256;
	static readonly LIKE = 257;
	static readonly LIMIT = 258;
	static readonly LINES = 259;
	static readonly LINK = 260;
	static readonly LIST = 261;
	static readonly LOAD = 262;
	static readonly LOCAL = 263;
	static readonly LOCALTIME = 264;
	static readonly LOCALTIMESTAMP = 265;
	static readonly LOCATION = 266;
	static readonly LOCK = 267;
	static readonly LOGICAL = 268;
	static readonly LOW_PRIORITY = 269;
	static readonly MANUAL = 270;
	static readonly MAP = 271;
	static readonly MATCH = 272;
	static readonly MATCH_ALL = 273;
	static readonly MATCH_ANY = 274;
	static readonly MATCH_PHRASE = 275;
	static readonly MATCH_PHRASE_EDGE = 276;
	static readonly MATCH_PHRASE_PREFIX = 277;
	static readonly MATCH_REGEXP = 278;
	static readonly MATERIALIZED = 279;
	static readonly MAX = 280;
	static readonly MAXVALUE = 281;
	static readonly MEMO = 282;
	static readonly MERGE = 283;
	static readonly MIGRATE = 284;
	static readonly MIGRATIONS = 285;
	static readonly MIN = 286;
	static readonly MINUS = 287;
	static readonly MINUTE = 288;
	static readonly MODIFY = 289;
	static readonly MONTH = 290;
	static readonly MTMV = 291;
	static readonly NAME = 292;
	static readonly NAMES = 293;
	static readonly NATURAL = 294;
	static readonly NEGATIVE = 295;
	static readonly NEVER = 296;
	static readonly NEXT = 297;
	static readonly NGRAM_BF = 298;
	static readonly NO = 299;
	static readonly NON_NULLABLE = 300;
	static readonly NOT = 301;
	static readonly NULL = 302;
	static readonly NULLS = 303;
	static readonly OBSERVER = 304;
	static readonly OF = 305;
	static readonly OFFSET = 306;
	static readonly ON = 307;
	static readonly ONLY = 308;
	static readonly OPEN = 309;
	static readonly OPTIMIZED = 310;
	static readonly OR = 311;
	static readonly ORDER = 312;
	static readonly OUTER = 313;
	static readonly OUTFILE = 314;
	static readonly OVER = 315;
	static readonly OVERWRITE = 316;
	static readonly PARAMETER = 317;
	static readonly PARSED = 318;
	static readonly PARTITION = 319;
	static readonly PARTITIONS = 320;
	static readonly PASSWORD = 321;
	static readonly PASSWORD_EXPIRE = 322;
	static readonly PASSWORD_HISTORY = 323;
	static readonly PASSWORD_LOCK_TIME = 324;
	static readonly PASSWORD_REUSE = 325;
	static readonly PATH = 326;
	static readonly PAUSE = 327;
	static readonly PERCENT = 328;
	static readonly PERIOD = 329;
	static readonly PERMISSIVE = 330;
	static readonly PHYSICAL = 331;
	static readonly PLACEHOLDER = 332;
	static readonly PLAN = 333;
	static readonly PRIVILEGES = 334;
	static readonly PROCESS = 335;
	static readonly PLUGIN = 336;
	static readonly PLUGINS = 337;
	static readonly POLICY = 338;
	static readonly PRECEDING = 339;
	static readonly PREPARE = 340;
	static readonly PRIMARY = 341;
	static readonly PROC = 342;
	static readonly PROCEDURE = 343;
	static readonly PROCESSLIST = 344;
	static readonly PROFILE = 345;
	static readonly PROPERTIES = 346;
	static readonly PROPERTY = 347;
	static readonly QUANTILE_STATE = 348;
	static readonly QUANTILE_UNION = 349;
	static readonly QUERY = 350;
	static readonly QUOTA = 351;
	static readonly RANDOM = 352;
	static readonly RANGE = 353;
	static readonly READ = 354;
	static readonly REAL = 355;
	static readonly REBALANCE = 356;
	static readonly RECENT = 357;
	static readonly RECOVER = 358;
	static readonly RECYCLE = 359;
	static readonly REFRESH = 360;
	static readonly REFERENCES = 361;
	static readonly REGEXP = 362;
	static readonly RELEASE = 363;
	static readonly RENAME = 364;
	static readonly REPAIR = 365;
	static readonly REPEATABLE = 366;
	static readonly REPLACE = 367;
	static readonly REPLACE_IF_NOT_NULL = 368;
	static readonly REPLICA = 369;
	static readonly REPOSITORIES = 370;
	static readonly REPOSITORY = 371;
	static readonly RESOURCE = 372;
	static readonly RESOURCES = 373;
	static readonly RESTORE = 374;
	static readonly RESTRICTIVE = 375;
	static readonly RESUME = 376;
	static readonly RETURNS = 377;
	static readonly REVOKE = 378;
	static readonly REWRITTEN = 379;
	static readonly RIGHT = 380;
	static readonly RLIKE = 381;
	static readonly ROLE = 382;
	static readonly ROLES = 383;
	static readonly ROLLBACK = 384;
	static readonly ROLLUP = 385;
	static readonly ROUTINE = 386;
	static readonly ROW = 387;
	static readonly ROWS = 388;
	static readonly S3 = 389;
	static readonly SAMPLE = 390;
	static readonly SCHEDULE = 391;
	static readonly SCHEDULER = 392;
	static readonly SCHEMA = 393;
	static readonly SCHEMAS = 394;
	static readonly SECOND = 395;
	static readonly SELECT = 396;
	static readonly SEMI = 397;
	static readonly SEQUENCE = 398;
	static readonly SERIALIZABLE = 399;
	static readonly SESSION = 400;
	static readonly SET = 401;
	static readonly SETS = 402;
	static readonly SHAPE = 403;
	static readonly SHOW = 404;
	static readonly SIGNED = 405;
	static readonly SKEW = 406;
	static readonly SMALLINT = 407;
	static readonly SNAPSHOT = 408;
	static readonly SONAME = 409;
	static readonly SPLIT = 410;
	static readonly SQL = 411;
	static readonly SQL_BLOCK_RULE = 412;
	static readonly STAGES = 413;
	static readonly START = 414;
	static readonly STARTS = 415;
	static readonly STATS = 416;
	static readonly STATUS = 417;
	static readonly STOP = 418;
	static readonly STORAGE = 419;
	static readonly STREAM = 420;
	static readonly STREAMING = 421;
	static readonly STRING = 422;
	static readonly STRUCT = 423;
	static readonly SUBDATE = 424;
	static readonly SUM = 425;
	static readonly SUPERUSER = 426;
	static readonly SWITCH = 427;
	static readonly SYNC = 428;
	static readonly SYSTEM = 429;
	static readonly TABLE = 430;
	static readonly TABLES = 431;
	static readonly TABLESAMPLE = 432;
	static readonly TABLET = 433;
	static readonly TABLETS = 434;
	static readonly TASK = 435;
	static readonly TASKS = 436;
	static readonly TEMPORARY = 437;
	static readonly TERMINATED = 438;
	static readonly TEXT = 439;
	static readonly THAN = 440;
	static readonly THEN = 441;
	static readonly TIME = 442;
	static readonly TIMESTAMP = 443;
	static readonly TIMESTAMPADD = 444;
	static readonly TIMESTAMPDIFF = 445;
	static readonly TINYINT = 446;
	static readonly TO = 447;
	static readonly TRANSACTION = 448;
	static readonly TRASH = 449;
	static readonly TREE = 450;
	static readonly TRIGGERS = 451;
	static readonly TRIM = 452;
	static readonly TRUE = 453;
	static readonly TRUNCATE = 454;
	static readonly TYPE = 455;
	static readonly TYPECAST = 456;
	static readonly TYPES = 457;
	static readonly UNBOUNDED = 458;
	static readonly UNCOMMITTED = 459;
	static readonly UNINSTALL = 460;
	static readonly UNION = 461;
	static readonly UNIQUE = 462;
	static readonly UNLOCK = 463;
	static readonly UNSIGNED = 464;
	static readonly UP = 465;
	static readonly UPDATE = 466;
	static readonly USE = 467;
	static readonly USER = 468;
	static readonly USING = 469;
	static readonly VALUE = 470;
	static readonly VALUES = 471;
	static readonly VARCHAR = 472;
	static readonly VARIABLES = 473;
	static readonly VARIANT = 474;
	static readonly VAULT = 475;
	static readonly VERBOSE = 476;
	static readonly VERSION = 477;
	static readonly VIEW = 478;
	static readonly WARM = 479;
	static readonly WARNINGS = 480;
	static readonly WEEK = 481;
	static readonly WHEN = 482;
	static readonly WHERE = 483;
	static readonly WHITELIST = 484;
	static readonly WITH = 485;
	static readonly WORK = 486;
	static readonly WORKLOAD = 487;
	static readonly WRITE = 488;
	static readonly XOR = 489;
	static readonly YEAR = 490;
	static readonly EQ = 491;
	static readonly NSEQ = 492;
	static readonly NEQ = 493;
	static readonly LT = 494;
	static readonly LTE = 495;
	static readonly GT = 496;
	static readonly GTE = 497;
	static readonly PLUS = 498;
	static readonly SUBTRACT = 499;
	static readonly ASTERISK = 500;
	static readonly SLASH = 501;
	static readonly MOD = 502;
	static readonly TILDE = 503;
	static readonly AMPERSAND = 504;
	static readonly LOGICALAND = 505;
	static readonly LOGICALNOT = 506;
	static readonly PIPE = 507;
	static readonly DOUBLEPIPES = 508;
	static readonly HAT = 509;
	static readonly COLON = 510;
	static readonly ARROW = 511;
	static readonly HINT_START = 512;
	static readonly HINT_END = 513;
	static readonly ATSIGN = 514;
	static readonly DOUBLEATSIGN = 515;
	static readonly STRING_LITERAL = 516;
	static readonly LEADING_STRING = 517;
	static readonly BIGINT_LITERAL = 518;
	static readonly SMALLINT_LITERAL = 519;
	static readonly TINYINT_LITERAL = 520;
	static readonly INTEGER_VALUE = 521;
	static readonly EXPONENT_VALUE = 522;
	static readonly DECIMAL_VALUE = 523;
	static readonly BIGDECIMAL_LITERAL = 524;
	static readonly IDENTIFIER = 525;
	static readonly BACKQUOTED_IDENTIFIER = 526;
	static readonly SIMPLE_COMMENT = 527;
	static readonly BRACKETED_COMMENT = 528;
	static readonly FROM_DUAL = 529;
	static readonly WS = 530;
	static readonly UNRECOGNIZED = 531;
	static readonly RULE_program = 0;
	static readonly RULE_multiStatements = 1;
	static readonly RULE_singleStatement = 2;
	static readonly RULE_statement = 3;
	static readonly RULE_statementBase = 4;
	static readonly RULE_unsupportedStatement = 5;
	static readonly RULE_variable = 6;
	static readonly RULE_transactionAccessMode = 7;
	static readonly RULE_isolationLevel = 8;
	static readonly RULE_constraint = 9;
	static readonly RULE_partitionSpec = 10;
	static readonly RULE_partitionTable = 11;
	static readonly RULE_identityOrFunctionList = 12;
	static readonly RULE_identityOrFunction = 13;
	static readonly RULE_dataDesc = 14;
	static readonly RULE_buildMode = 15;
	static readonly RULE_refreshTrigger = 16;
	static readonly RULE_refreshSchedule = 17;
	static readonly RULE_refreshMethod = 18;
	static readonly RULE_mvPartition = 19;
	static readonly RULE_identifierOrStringLiteral = 20;
	static readonly RULE_identifierOrText = 21;
	static readonly RULE_userIdentify = 22;
	static readonly RULE_explain = 23;
	static readonly RULE_planType = 24;
	static readonly RULE_mergeType = 25;
	static readonly RULE_preFilterClause = 26;
	static readonly RULE_deleteOnClause = 27;
	static readonly RULE_sequenceColClause = 28;
	static readonly RULE_colFromPath = 29;
	static readonly RULE_colMappingList = 30;
	static readonly RULE_mappingExpr = 31;
	static readonly RULE_withRemoteStorageSystem = 32;
	static readonly RULE_resourceDesc = 33;
	static readonly RULE_mysqlDataDesc = 34;
	static readonly RULE_skipLines = 35;
	static readonly RULE_outFileClause = 36;
	static readonly RULE_query = 37;
	static readonly RULE_queryTerm = 38;
	static readonly RULE_setQuantifier = 39;
	static readonly RULE_queryPrimary = 40;
	static readonly RULE_querySpecification = 41;
	static readonly RULE_cte = 42;
	static readonly RULE_aliasQuery = 43;
	static readonly RULE_columnAliases = 44;
	static readonly RULE_selectClause = 45;
	static readonly RULE_selectColumnClause = 46;
	static readonly RULE_whereClause = 47;
	static readonly RULE_fromClause = 48;
	static readonly RULE_intoClause = 49;
	static readonly RULE_bulkCollectClause = 50;
	static readonly RULE_tableRow = 51;
	static readonly RULE_relations = 52;
	static readonly RULE_relation = 53;
	static readonly RULE_joinRelation = 54;
	static readonly RULE_distributeType = 55;
	static readonly RULE_relationHint = 56;
	static readonly RULE_aggClause = 57;
	static readonly RULE_groupingElement = 58;
	static readonly RULE_groupingSet = 59;
	static readonly RULE_havingClause = 60;
	static readonly RULE_selectHint = 61;
	static readonly RULE_hintStatement = 62;
	static readonly RULE_hintAssignment = 63;
	static readonly RULE_updateAssignment = 64;
	static readonly RULE_updateAssignmentSeq = 65;
	static readonly RULE_lateralView = 66;
	static readonly RULE_queryOrganization = 67;
	static readonly RULE_sortClause = 68;
	static readonly RULE_sortItem = 69;
	static readonly RULE_limitClause = 70;
	static readonly RULE_partitionClause = 71;
	static readonly RULE_joinType = 72;
	static readonly RULE_joinCriteria = 73;
	static readonly RULE_identifierList = 74;
	static readonly RULE_identifierSeq = 75;
	static readonly RULE_optScanParams = 76;
	static readonly RULE_relationPrimary = 77;
	static readonly RULE_materializedViewName = 78;
	static readonly RULE_propertyClause = 79;
	static readonly RULE_propertyItemList = 80;
	static readonly RULE_propertyItem = 81;
	static readonly RULE_propertyKey = 82;
	static readonly RULE_propertyValue = 83;
	static readonly RULE_tableAlias = 84;
	static readonly RULE_multipartIdentifier = 85;
	static readonly RULE_simpleColumnDefs = 86;
	static readonly RULE_simpleColumnDef = 87;
	static readonly RULE_columnDefs = 88;
	static readonly RULE_columnDef = 89;
	static readonly RULE_indexDefs = 90;
	static readonly RULE_indexDef = 91;
	static readonly RULE_partitionsDef = 92;
	static readonly RULE_partitionDef = 93;
	static readonly RULE_lessThanPartitionDef = 94;
	static readonly RULE_fixedPartitionDef = 95;
	static readonly RULE_stepPartitionDef = 96;
	static readonly RULE_inPartitionDef = 97;
	static readonly RULE_constantSeq = 98;
	static readonly RULE_partitionValueDef = 99;
	static readonly RULE_rollupDefs = 100;
	static readonly RULE_rollupDef = 101;
	static readonly RULE_aggTypeDef = 102;
	static readonly RULE_tabletList = 103;
	static readonly RULE_inlineTable = 104;
	static readonly RULE_namedExpression = 105;
	static readonly RULE_namedExpressionSeq = 106;
	static readonly RULE_expression = 107;
	static readonly RULE_lambdaExpression = 108;
	static readonly RULE_booleanExpression = 109;
	static readonly RULE_rowConstructor = 110;
	static readonly RULE_rowConstructorItem = 111;
	static readonly RULE_predicate = 112;
	static readonly RULE_valueExpression = 113;
	static readonly RULE_datetimeUnit = 114;
	static readonly RULE_primaryExpression = 115;
	static readonly RULE_castDataType = 116;
	static readonly RULE_functionCallExpression = 117;
	static readonly RULE_functionIdentifier = 118;
	static readonly RULE_functionNameIdentifier = 119;
	static readonly RULE_windowSpec = 120;
	static readonly RULE_windowFrame = 121;
	static readonly RULE_frameUnits = 122;
	static readonly RULE_frameBoundary = 123;
	static readonly RULE_qualifiedName = 124;
	static readonly RULE_specifiedPartition = 125;
	static readonly RULE_constant = 126;
	static readonly RULE_comparisonOperator = 127;
	static readonly RULE_booleanValue = 128;
	static readonly RULE_whenClause = 129;
	static readonly RULE_interval = 130;
	static readonly RULE_unitIdentifier = 131;
	static readonly RULE_dataTypeWithNullable = 132;
	static readonly RULE_dataType = 133;
	static readonly RULE_primitiveColType = 134;
	static readonly RULE_complexColTypeList = 135;
	static readonly RULE_complexColType = 136;
	static readonly RULE_commentSpec = 137;
	static readonly RULE_sample = 138;
	static readonly RULE_sampleMethod = 139;
	static readonly RULE_tableSnapshot = 140;
	static readonly RULE_errorCapturingIdentifier = 141;
	static readonly RULE_errorCapturingIdentifierExtra = 142;
	static readonly RULE_identifier = 143;
	static readonly RULE_strictIdentifier = 144;
	static readonly RULE_quotedIdentifier = 145;
	static readonly RULE_number = 146;
	static readonly RULE_nonReserved = 147;
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
	doris_legacy_SQL_syntax: boolean;
	constructor(input: antlr.TokenStream);
	program(): ProgramContext;
	multiStatements(): MultiStatementsContext;
	singleStatement(): SingleStatementContext;
	statement(): StatementContext;
	statementBase(): StatementBaseContext;
	unsupportedStatement(): UnsupportedStatementContext;
	variable(): VariableContext;
	transactionAccessMode(): TransactionAccessModeContext;
	isolationLevel(): IsolationLevelContext;
	constraint(): ConstraintContext;
	partitionSpec(): PartitionSpecContext;
	partitionTable(): PartitionTableContext;
	identityOrFunctionList(): IdentityOrFunctionListContext;
	identityOrFunction(): IdentityOrFunctionContext;
	dataDesc(): DataDescContext;
	buildMode(): BuildModeContext;
	refreshTrigger(): RefreshTriggerContext;
	refreshSchedule(): RefreshScheduleContext;
	refreshMethod(): RefreshMethodContext;
	mvPartition(): MvPartitionContext;
	identifierOrStringLiteral(): IdentifierOrStringLiteralContext;
	identifierOrText(): IdentifierOrTextContext;
	userIdentify(): UserIdentifyContext;
	explain(): ExplainContext;
	planType(): PlanTypeContext;
	mergeType(): MergeTypeContext;
	preFilterClause(): PreFilterClauseContext;
	deleteOnClause(): DeleteOnClauseContext;
	sequenceColClause(): SequenceColClauseContext;
	colFromPath(): ColFromPathContext;
	colMappingList(): ColMappingListContext;
	mappingExpr(): MappingExprContext;
	withRemoteStorageSystem(): WithRemoteStorageSystemContext;
	resourceDesc(): ResourceDescContext;
	mysqlDataDesc(): MysqlDataDescContext;
	skipLines(): SkipLinesContext;
	outFileClause(): OutFileClauseContext;
	query(): QueryContext;
	queryTerm(): QueryTermContext;
	queryTerm(_p: number): QueryTermContext;
	setQuantifier(): SetQuantifierContext;
	queryPrimary(): QueryPrimaryContext;
	querySpecification(): QuerySpecificationContext;
	cte(): CteContext;
	aliasQuery(): AliasQueryContext;
	columnAliases(): ColumnAliasesContext;
	selectClause(): SelectClauseContext;
	selectColumnClause(): SelectColumnClauseContext;
	whereClause(): WhereClauseContext;
	fromClause(): FromClauseContext;
	intoClause(): IntoClauseContext;
	bulkCollectClause(): BulkCollectClauseContext;
	tableRow(): TableRowContext;
	relations(): RelationsContext;
	relation(): RelationContext;
	joinRelation(): JoinRelationContext;
	distributeType(): DistributeTypeContext;
	relationHint(): RelationHintContext;
	aggClause(): AggClauseContext;
	groupingElement(): GroupingElementContext;
	groupingSet(): GroupingSetContext;
	havingClause(): HavingClauseContext;
	selectHint(): SelectHintContext;
	hintStatement(): HintStatementContext;
	hintAssignment(): HintAssignmentContext;
	updateAssignment(): UpdateAssignmentContext;
	updateAssignmentSeq(): UpdateAssignmentSeqContext;
	lateralView(): LateralViewContext;
	queryOrganization(): QueryOrganizationContext;
	sortClause(): SortClauseContext;
	sortItem(): SortItemContext;
	limitClause(): LimitClauseContext;
	partitionClause(): PartitionClauseContext;
	joinType(): JoinTypeContext;
	joinCriteria(): JoinCriteriaContext;
	identifierList(): IdentifierListContext;
	identifierSeq(): IdentifierSeqContext;
	optScanParams(): OptScanParamsContext;
	relationPrimary(): RelationPrimaryContext;
	materializedViewName(): MaterializedViewNameContext;
	propertyClause(): PropertyClauseContext;
	propertyItemList(): PropertyItemListContext;
	propertyItem(): PropertyItemContext;
	propertyKey(): PropertyKeyContext;
	propertyValue(): PropertyValueContext;
	tableAlias(): TableAliasContext;
	multipartIdentifier(): MultipartIdentifierContext;
	simpleColumnDefs(): SimpleColumnDefsContext;
	simpleColumnDef(): SimpleColumnDefContext;
	columnDefs(): ColumnDefsContext;
	columnDef(): ColumnDefContext;
	indexDefs(): IndexDefsContext;
	indexDef(): IndexDefContext;
	partitionsDef(): PartitionsDefContext;
	partitionDef(): PartitionDefContext;
	lessThanPartitionDef(): LessThanPartitionDefContext;
	fixedPartitionDef(): FixedPartitionDefContext;
	stepPartitionDef(): StepPartitionDefContext;
	inPartitionDef(): InPartitionDefContext;
	constantSeq(): ConstantSeqContext;
	partitionValueDef(): PartitionValueDefContext;
	rollupDefs(): RollupDefsContext;
	rollupDef(): RollupDefContext;
	aggTypeDef(): AggTypeDefContext;
	tabletList(): TabletListContext;
	inlineTable(): InlineTableContext;
	namedExpression(): NamedExpressionContext;
	namedExpressionSeq(): NamedExpressionSeqContext;
	expression(): ExpressionContext;
	lambdaExpression(): LambdaExpressionContext;
	booleanExpression(): BooleanExpressionContext;
	booleanExpression(_p: number): BooleanExpressionContext;
	rowConstructor(): RowConstructorContext;
	rowConstructorItem(): RowConstructorItemContext;
	predicate(): PredicateContext;
	valueExpression(): ValueExpressionContext;
	valueExpression(_p: number): ValueExpressionContext;
	datetimeUnit(): DatetimeUnitContext;
	primaryExpression(): PrimaryExpressionContext;
	primaryExpression(_p: number): PrimaryExpressionContext;
	castDataType(): CastDataTypeContext;
	functionCallExpression(): FunctionCallExpressionContext;
	functionIdentifier(): FunctionIdentifierContext;
	functionNameIdentifier(): FunctionNameIdentifierContext;
	windowSpec(): WindowSpecContext;
	windowFrame(): WindowFrameContext;
	frameUnits(): FrameUnitsContext;
	frameBoundary(): FrameBoundaryContext;
	qualifiedName(): QualifiedNameContext;
	specifiedPartition(): SpecifiedPartitionContext;
	constant(): ConstantContext;
	comparisonOperator(): ComparisonOperatorContext;
	booleanValue(): BooleanValueContext;
	whenClause(): WhenClauseContext;
	interval(): IntervalContext;
	unitIdentifier(): UnitIdentifierContext;
	dataTypeWithNullable(): DataTypeWithNullableContext;
	dataType(): DataTypeContext;
	primitiveColType(): PrimitiveColTypeContext;
	complexColTypeList(): ComplexColTypeListContext;
	complexColType(): ComplexColTypeContext;
	commentSpec(): CommentSpecContext;
	sample(): SampleContext;
	sampleMethod(): SampleMethodContext;
	tableSnapshot(): TableSnapshotContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
	identifier(): IdentifierContext;
	strictIdentifier(): StrictIdentifierContext;
	quotedIdentifier(): QuotedIdentifierContext;
	number_(): NumberContext;
	nonReserved(): NonReservedContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
	private queryTerm_sempred;
	private querySpecification_sempred;
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
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MultiStatementsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EOF(): antlr.TerminalNode;
	statement(): StatementContext[];
	statement(i: number): StatementContext | null;
	SEMICOLON(): antlr.TerminalNode[];
	SEMICOLON(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	statement(): StatementContext;
	EOF(): antlr.TerminalNode;
	SEMICOLON(): antlr.TerminalNode[];
	SEMICOLON(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: StatementContext): void;
}
export declare class ShowCreateProcedureContext extends StatementContext {
	_name?: MultipartIdentifierContext;
	constructor(ctx: StatementContext);
	SHOW(): antlr.TerminalNode;
	CREATE(): antlr.TerminalNode;
	PROCEDURE(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StatementBaseAliasContext extends StatementContext {
	constructor(ctx: StatementContext);
	statementBase(): StatementBaseContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ShowProcedureStatusContext extends StatementContext {
	_pattern?: ValueExpressionContext;
	constructor(ctx: StatementContext);
	SHOW(): antlr.TerminalNode;
	PROCEDURE(): antlr.TerminalNode;
	STATUS(): antlr.TerminalNode;
	LIKE(): antlr.TerminalNode | null;
	whereClause(): WhereClauseContext | null;
	valueExpression(): ValueExpressionContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CreateProcedureContext extends StatementContext {
	_name?: MultipartIdentifierContext;
	constructor(ctx: StatementContext);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	PROCEDURE(): antlr.TerminalNode | null;
	PROC(): antlr.TerminalNode | null;
	multipartIdentifier(): MultipartIdentifierContext;
	ALTER(): antlr.TerminalNode | null;
	CREATE(): antlr.TerminalNode | null;
	REPLACE(): antlr.TerminalNode | null;
	OR(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CallProcedureContext extends StatementContext {
	_name?: MultipartIdentifierContext;
	constructor(ctx: StatementContext);
	CALL(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DropProcedureContext extends StatementContext {
	_name?: MultipartIdentifierContext;
	constructor(ctx: StatementContext);
	DROP(): antlr.TerminalNode;
	PROCEDURE(): antlr.TerminalNode | null;
	PROC(): antlr.TerminalNode | null;
	multipartIdentifier(): MultipartIdentifierContext;
	IF(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StatementBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: StatementBaseContext): void;
}
export declare class RefreshMTMVContext extends StatementBaseContext {
	_mvName?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	REFRESH(): antlr.TerminalNode;
	MATERIALIZED(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	partitionSpec(): PartitionSpecContext | null;
	COMPLETE(): antlr.TerminalNode | null;
	AUTO(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CreateTableContext extends StatementBaseContext {
	_name?: MultipartIdentifierContext;
	_ctasCols?: IdentifierListContext;
	_engine?: IdentifierContext;
	_keys?: IdentifierListContext;
	_clusterKeys?: IdentifierListContext;
	_partition?: PartitionTableContext;
	_hashKeys?: IdentifierListContext;
	_autoBucket?: Token | null;
	_properties?: PropertyClauseContext;
	_extProperties?: PropertyClauseContext;
	constructor(ctx: StatementBaseContext);
	CREATE(): antlr.TerminalNode;
	TABLE(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	EXTERNAL(): antlr.TerminalNode | null;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	ENGINE(): antlr.TerminalNode | null;
	EQ(): antlr.TerminalNode | null;
	KEY(): antlr.TerminalNode | null;
	COMMENT(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	DISTRIBUTED(): antlr.TerminalNode | null;
	BY(): antlr.TerminalNode[];
	BY(i: number): antlr.TerminalNode | null;
	ROLLUP(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	rollupDefs(): RollupDefsContext | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	BROKER(): antlr.TerminalNode | null;
	AS(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	columnDefs(): ColumnDefsContext | null;
	identifier(): IdentifierContext | null;
	AGGREGATE(): antlr.TerminalNode | null;
	UNIQUE(): antlr.TerminalNode | null;
	DUPLICATE(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext[];
	identifierList(i: number): IdentifierListContext | null;
	partitionTable(): PartitionTableContext | null;
	propertyClause(): PropertyClauseContext[];
	propertyClause(i: number): PropertyClauseContext | null;
	HASH(): antlr.TerminalNode | null;
	RANDOM(): antlr.TerminalNode | null;
	CLUSTER(): antlr.TerminalNode | null;
	BUCKETS(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	indexDefs(): IndexDefsContext | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	AUTO(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AlterMTMVContext extends StatementBaseContext {
	_mvName?: MultipartIdentifierContext;
	_newName?: IdentifierContext;
	_fileProperties?: PropertyItemListContext;
	constructor(ctx: StatementBaseContext);
	ALTER(): antlr.TerminalNode;
	MATERIALIZED(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	RENAME(): antlr.TerminalNode | null;
	REFRESH(): antlr.TerminalNode | null;
	SET(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	propertyItemList(): PropertyItemListContext | null;
	refreshMethod(): RefreshMethodContext | null;
	refreshTrigger(): RefreshTriggerContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class InsertTableContext extends StatementBaseContext {
	_tableName?: MultipartIdentifierContext;
	_tableId?: Token | null;
	_labelName?: IdentifierContext;
	_cols?: IdentifierListContext;
	_hints?: IdentifierSeqContext;
	constructor(ctx: StatementBaseContext);
	INSERT(): antlr.TerminalNode;
	query(): QueryContext;
	INTO(): antlr.TerminalNode | null;
	OVERWRITE(): antlr.TerminalNode | null;
	TABLE(): antlr.TerminalNode | null;
	DORIS_INTERNAL_TABLE_ID(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	explain(): ExplainContext | null;
	cte(): CteContext | null;
	multipartIdentifier(): MultipartIdentifierContext | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	partitionSpec(): PartitionSpecContext | null;
	WITH(): antlr.TerminalNode | null;
	LABEL(): antlr.TerminalNode | null;
	LEFT_BRACKET(): antlr.TerminalNode | null;
	RIGHT_BRACKET(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	identifierList(): IdentifierListContext | null;
	identifierSeq(): IdentifierSeqContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DropConstraintContext extends StatementBaseContext {
	_table?: MultipartIdentifierContext;
	_constraintName?: ErrorCapturingIdentifierContext;
	constructor(ctx: StatementBaseContext);
	ALTER(): antlr.TerminalNode;
	TABLE(): antlr.TerminalNode;
	DROP(): antlr.TerminalNode;
	CONSTRAINT(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AddConstraintContext extends StatementBaseContext {
	_table?: MultipartIdentifierContext;
	_constraintName?: ErrorCapturingIdentifierContext;
	constructor(ctx: StatementBaseContext);
	ALTER(): antlr.TerminalNode;
	TABLE(): antlr.TerminalNode;
	ADD(): antlr.TerminalNode;
	CONSTRAINT(): antlr.TerminalNode;
	constraint(): ConstraintContext;
	multipartIdentifier(): MultipartIdentifierContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CreateTableLikeContext extends StatementBaseContext {
	_name?: MultipartIdentifierContext;
	_existedTable?: MultipartIdentifierContext;
	_rollupNames?: IdentifierListContext;
	constructor(ctx: StatementBaseContext);
	CREATE(): antlr.TerminalNode;
	TABLE(): antlr.TerminalNode;
	LIKE(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext[];
	multipartIdentifier(i: number): MultipartIdentifierContext | null;
	EXTERNAL(): antlr.TerminalNode | null;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	WITH(): antlr.TerminalNode | null;
	ROLLUP(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UpdateContext extends StatementBaseContext {
	_tableName?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	UPDATE(): antlr.TerminalNode;
	tableAlias(): TableAliasContext;
	SET(): antlr.TerminalNode;
	updateAssignmentSeq(): UpdateAssignmentSeqContext;
	multipartIdentifier(): MultipartIdentifierContext;
	explain(): ExplainContext | null;
	cte(): CteContext | null;
	fromClause(): FromClauseContext | null;
	whereClause(): WhereClauseContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PauseMTMVContext extends StatementBaseContext {
	_mvName?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	PAUSE(): antlr.TerminalNode;
	MATERIALIZED(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	JOB(): antlr.TerminalNode;
	ON(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DropMTMVContext extends StatementBaseContext {
	_mvName?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	DROP(): antlr.TerminalNode;
	MATERIALIZED(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	IF(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DeleteContext extends StatementBaseContext {
	_tableName?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	DELETE(): antlr.TerminalNode;
	FROM(): antlr.TerminalNode;
	tableAlias(): TableAliasContext;
	multipartIdentifier(): MultipartIdentifierContext;
	explain(): ExplainContext | null;
	cte(): CteContext | null;
	partitionSpec(): PartitionSpecContext | null;
	USING(): antlr.TerminalNode | null;
	relations(): RelationsContext | null;
	whereClause(): WhereClauseContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CreateRowPolicyContext extends StatementBaseContext {
	_name?: IdentifierContext;
	_table?: MultipartIdentifierContext;
	_type_?: Token | null;
	_user?: UserIdentifyContext;
	_roleName?: IdentifierContext;
	constructor(ctx: StatementBaseContext);
	CREATE(): antlr.TerminalNode;
	ROW(): antlr.TerminalNode;
	POLICY(): antlr.TerminalNode;
	ON(): antlr.TerminalNode;
	AS(): antlr.TerminalNode;
	TO(): antlr.TerminalNode;
	USING(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	multipartIdentifier(): MultipartIdentifierContext;
	RESTRICTIVE(): antlr.TerminalNode | null;
	PERMISSIVE(): antlr.TerminalNode | null;
	ROLE(): antlr.TerminalNode | null;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	userIdentify(): UserIdentifyContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MysqlLoadContext extends StatementBaseContext {
	_properties?: PropertyItemListContext;
	constructor(ctx: StatementBaseContext);
	LOAD(): antlr.TerminalNode;
	mysqlDataDesc(): MysqlDataDescContext;
	PROPERTIES(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	commentSpec(): CommentSpecContext | null;
	propertyItemList(): PropertyItemListContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ShowConstraintContext extends StatementBaseContext {
	_table?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	SHOW(): antlr.TerminalNode;
	CONSTRAINTS(): antlr.TerminalNode;
	FROM(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AlterViewContext extends StatementBaseContext {
	_name?: MultipartIdentifierContext;
	_cols?: SimpleColumnDefsContext;
	constructor(ctx: StatementBaseContext);
	ALTER(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	AS(): antlr.TerminalNode;
	query(): QueryContext;
	multipartIdentifier(): MultipartIdentifierContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	simpleColumnDefs(): SimpleColumnDefsContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UnsupportedContext extends StatementBaseContext {
	constructor(ctx: StatementBaseContext);
	unsupportedStatement(): UnsupportedStatementContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LoadContext extends StatementBaseContext {
	_lableName?: IdentifierContext;
	_dataDesc?: DataDescContext;
	_dataDescs: DataDescContext[];
	_properties?: PropertyItemListContext;
	constructor(ctx: StatementBaseContext);
	LOAD(): antlr.TerminalNode;
	LABEL(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	identifier(): IdentifierContext;
	dataDesc(): DataDescContext[];
	dataDesc(i: number): DataDescContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	withRemoteStorageSystem(): WithRemoteStorageSystemContext | null;
	PROPERTIES(): antlr.TerminalNode | null;
	commentSpec(): CommentSpecContext | null;
	propertyItemList(): PropertyItemListContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StatementDefaultContext extends StatementBaseContext {
	constructor(ctx: StatementBaseContext);
	query(): QueryContext;
	explain(): ExplainContext | null;
	outFileClause(): OutFileClauseContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CreateMTMVContext extends StatementBaseContext {
	_mvName?: MultipartIdentifierContext;
	_cols?: SimpleColumnDefsContext;
	_keys?: IdentifierListContext;
	_hashKeys?: IdentifierListContext;
	constructor(ctx: StatementBaseContext);
	CREATE(): antlr.TerminalNode;
	MATERIALIZED(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	AS(): antlr.TerminalNode;
	query(): QueryContext;
	multipartIdentifier(): MultipartIdentifierContext;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	buildMode(): BuildModeContext | null;
	REFRESH(): antlr.TerminalNode | null;
	KEY(): antlr.TerminalNode | null;
	COMMENT(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	PARTITION(): antlr.TerminalNode | null;
	BY(): antlr.TerminalNode[];
	BY(i: number): antlr.TerminalNode | null;
	mvPartition(): MvPartitionContext | null;
	DISTRIBUTED(): antlr.TerminalNode | null;
	propertyClause(): PropertyClauseContext | null;
	simpleColumnDefs(): SimpleColumnDefsContext | null;
	identifierList(): IdentifierListContext[];
	identifierList(i: number): IdentifierListContext | null;
	HASH(): antlr.TerminalNode | null;
	RANDOM(): antlr.TerminalNode | null;
	refreshMethod(): RefreshMethodContext | null;
	refreshTrigger(): RefreshTriggerContext | null;
	DUPLICATE(): antlr.TerminalNode | null;
	BUCKETS(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	AUTO(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ResumeMTMVContext extends StatementBaseContext {
	_mvName?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	RESUME(): antlr.TerminalNode;
	MATERIALIZED(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	JOB(): antlr.TerminalNode;
	ON(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CancelMTMVTaskContext extends StatementBaseContext {
	_taskId?: Token | null;
	_mvName?: MultipartIdentifierContext;
	constructor(ctx: StatementBaseContext);
	CANCEL(): antlr.TerminalNode;
	MATERIALIZED(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	TASK(): antlr.TerminalNode;
	ON(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CreateViewContext extends StatementBaseContext {
	_name?: MultipartIdentifierContext;
	_cols?: SimpleColumnDefsContext;
	constructor(ctx: StatementBaseContext);
	CREATE(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	AS(): antlr.TerminalNode;
	query(): QueryContext;
	multipartIdentifier(): MultipartIdentifierContext;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	COMMENT(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	simpleColumnDefs(): SimpleColumnDefsContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DropCatalogRecycleBinContext extends StatementBaseContext {
	_idType?: Token | null;
	_id?: Token | null;
	constructor(ctx: StatementBaseContext);
	DROP(): antlr.TerminalNode;
	CATALOG(): antlr.TerminalNode;
	RECYCLE(): antlr.TerminalNode;
	BIN(): antlr.TerminalNode;
	WHERE(): antlr.TerminalNode;
	EQ(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ExportContext extends StatementBaseContext {
	_tableName?: MultipartIdentifierContext;
	_partition?: IdentifierListContext;
	_filePath?: Token | null;
	constructor(ctx: StatementBaseContext);
	EXPORT(): antlr.TerminalNode;
	TABLE(): antlr.TerminalNode;
	TO(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	STRING_LITERAL(): antlr.TerminalNode;
	PARTITION(): antlr.TerminalNode | null;
	whereClause(): WhereClauseContext | null;
	propertyClause(): PropertyClauseContext | null;
	withRemoteStorageSystem(): WithRemoteStorageSystemContext | null;
	identifierList(): IdentifierListContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UnsupportedStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: UnsupportedStatementContext): void;
}
export declare class SetTransactionContext extends UnsupportedStatementContext {
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	TRANSACTION(): antlr.TerminalNode;
	transactionAccessMode(): TransactionAccessModeContext | null;
	isolationLevel(): IsolationLevelContext | null;
	COMMA(): antlr.TerminalNode | null;
	GLOBAL(): antlr.TerminalNode | null;
	LOCAL(): antlr.TerminalNode | null;
	SESSION(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UseCloudClusterContext extends UnsupportedStatementContext {
	_catalog?: IdentifierContext;
	_database?: IdentifierContext;
	_cluster?: IdentifierContext;
	constructor(ctx: UnsupportedStatementContext);
	USE(): antlr.TerminalNode;
	ATSIGN(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetCharsetContext extends UnsupportedStatementContext {
	_charsetName?: IdentifierOrTextContext;
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode[];
	SET(i: number): antlr.TerminalNode | null;
	CHAR(): antlr.TerminalNode | null;
	CHARSET(): antlr.TerminalNode | null;
	DEFAULT(): antlr.TerminalNode | null;
	identifierOrText(): IdentifierOrTextContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetNamesContext extends UnsupportedStatementContext {
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	NAMES(): antlr.TerminalNode;
	EQ(): antlr.TerminalNode;
	expression(): ExpressionContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetCollateContext extends UnsupportedStatementContext {
	_charsetName?: IdentifierOrTextContext;
	_collateName?: IdentifierOrTextContext;
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	NAMES(): antlr.TerminalNode;
	DEFAULT(): antlr.TerminalNode[];
	DEFAULT(i: number): antlr.TerminalNode | null;
	identifierOrText(): IdentifierOrTextContext[];
	identifierOrText(i: number): IdentifierOrTextContext | null;
	COLLATE(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetPasswordContext extends UnsupportedStatementContext {
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	PASSWORD(): antlr.TerminalNode[];
	PASSWORD(i: number): antlr.TerminalNode | null;
	EQ(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode | null;
	FOR(): antlr.TerminalNode | null;
	userIdentify(): UserIdentifyContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetSystemVariableWithTypeContext extends UnsupportedStatementContext {
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	EQ(): antlr.TerminalNode;
	expression(): ExpressionContext | null;
	DEFAULT(): antlr.TerminalNode | null;
	GLOBAL(): antlr.TerminalNode | null;
	LOCAL(): antlr.TerminalNode | null;
	SESSION(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetUserPropertiesContext extends UnsupportedStatementContext {
	_user?: IdentifierOrTextContext;
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	PROPERTY(): antlr.TerminalNode;
	propertyItemList(): PropertyItemListContext;
	FOR(): antlr.TerminalNode | null;
	identifierOrText(): IdentifierOrTextContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UseDatabaseContext extends UnsupportedStatementContext {
	_catalog?: IdentifierContext;
	_database?: IdentifierContext;
	constructor(ctx: UnsupportedStatementContext);
	USE(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetSystemVariableWithoutTypeContext extends UnsupportedStatementContext {
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	variable(): VariableContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetDefaultStorageVaultContext extends UnsupportedStatementContext {
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	AS(): antlr.TerminalNode;
	DEFAULT(): antlr.TerminalNode;
	STORAGE(): antlr.TerminalNode;
	VAULT(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetLdapAdminPasswordContext extends UnsupportedStatementContext {
	constructor(ctx: UnsupportedStatementContext);
	SET(): antlr.TerminalNode;
	LDAP_ADMIN_PASSWORD(): antlr.TerminalNode;
	EQ(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode | null;
	PASSWORD(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class VariableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: VariableContext): void;
}
export declare class SetUserVariableContext extends VariableContext {
	constructor(ctx: VariableContext);
	ATSIGN(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	EQ(): antlr.TerminalNode;
	expression(): ExpressionContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetSystemVariableContext extends VariableContext {
	constructor(ctx: VariableContext);
	identifier(): IdentifierContext;
	EQ(): antlr.TerminalNode;
	expression(): ExpressionContext | null;
	DEFAULT(): antlr.TerminalNode | null;
	ATSIGN(): antlr.TerminalNode[];
	ATSIGN(i: number): antlr.TerminalNode | null;
	GLOBAL(): antlr.TerminalNode | null;
	LOCAL(): antlr.TerminalNode | null;
	SESSION(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TransactionAccessModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	READ(): antlr.TerminalNode;
	ONLY(): antlr.TerminalNode | null;
	WRITE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IsolationLevelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ISOLATION(): antlr.TerminalNode;
	LEVEL(): antlr.TerminalNode;
	READ(): antlr.TerminalNode | null;
	UNCOMMITTED(): antlr.TerminalNode | null;
	COMMITTED(): antlr.TerminalNode | null;
	REPEATABLE(): antlr.TerminalNode | null;
	SERIALIZABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ConstraintContext extends antlr.ParserRuleContext {
	_slots?: IdentifierListContext;
	_referenceTable?: MultipartIdentifierContext;
	_referencedSlots?: IdentifierListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PRIMARY(): antlr.TerminalNode | null;
	KEY(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext[];
	identifierList(i: number): IdentifierListContext | null;
	UNIQUE(): antlr.TerminalNode | null;
	FOREIGN(): antlr.TerminalNode | null;
	REFERENCES(): antlr.TerminalNode | null;
	multipartIdentifier(): MultipartIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PartitionSpecContext extends antlr.ParserRuleContext {
	_partitions?: IdentifierListContext;
	_partition?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARTITION(): antlr.TerminalNode | null;
	PARTITIONS(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	TEMPORARY(): antlr.TerminalNode | null;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	ASTERISK(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PartitionTableContext extends antlr.ParserRuleContext {
	_autoPartition?: Token | null;
	_partitionList?: IdentityOrFunctionListContext;
	_partitions?: PartitionsDefContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARTITION(): antlr.TerminalNode | null;
	BY(): antlr.TerminalNode | null;
	identityOrFunctionList(): IdentityOrFunctionListContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	AUTO(): antlr.TerminalNode | null;
	RANGE(): antlr.TerminalNode | null;
	LIST(): antlr.TerminalNode | null;
	partitionsDef(): PartitionsDefContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IdentityOrFunctionListContext extends antlr.ParserRuleContext {
	_identityOrFunction?: IdentityOrFunctionContext;
	_partitions: IdentityOrFunctionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	identityOrFunction(): IdentityOrFunctionContext[];
	identityOrFunction(i: number): IdentityOrFunctionContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IdentityOrFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	functionCallExpression(): FunctionCallExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DataDescContext extends antlr.ParserRuleContext {
	_STRING_LITERAL?: Token | null;
	_filePaths: antlr.Token[];
	_filePath: antlr.Token[];
	_tableName?: MultipartIdentifierContext;
	_partition?: IdentifierListContext;
	_comma?: Token | null;
	_separator?: Token | null;
	_format?: IdentifierOrStringLiteralContext;
	_columns?: IdentifierListContext;
	_columnsFromPath?: ColFromPathContext;
	_columnMapping?: ColMappingListContext;
	_preFilter?: PreFilterClauseContext;
	_where?: WhereClauseContext;
	_deleteOn?: DeleteOnClauseContext;
	_sequenceColumn?: SequenceColClauseContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DATA(): antlr.TerminalNode;
	INFILE(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	INTO(): antlr.TerminalNode;
	TABLE(): antlr.TerminalNode[];
	TABLE(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	multipartIdentifier(): MultipartIdentifierContext[];
	multipartIdentifier(i: number): MultipartIdentifierContext | null;
	mergeType(): MergeTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	PARTITION(): antlr.TerminalNode | null;
	COLUMNS(): antlr.TerminalNode | null;
	TERMINATED(): antlr.TerminalNode[];
	TERMINATED(i: number): antlr.TerminalNode | null;
	BY(): antlr.TerminalNode[];
	BY(i: number): antlr.TerminalNode | null;
	LINES(): antlr.TerminalNode | null;
	FORMAT(): antlr.TerminalNode | null;
	AS(): antlr.TerminalNode | null;
	propertyClause(): PropertyClauseContext | null;
	identifierList(): IdentifierListContext[];
	identifierList(i: number): IdentifierListContext | null;
	identifierOrStringLiteral(): IdentifierOrStringLiteralContext | null;
	colFromPath(): ColFromPathContext | null;
	colMappingList(): ColMappingListContext | null;
	preFilterClause(): PreFilterClauseContext | null;
	whereClause(): WhereClauseContext | null;
	deleteOnClause(): DeleteOnClauseContext | null;
	sequenceColClause(): SequenceColClauseContext | null;
	WITH(): antlr.TerminalNode | null;
	FROM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class BuildModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	BUILD(): antlr.TerminalNode;
	IMMEDIATE(): antlr.TerminalNode | null;
	DEFERRED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RefreshTriggerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ON(): antlr.TerminalNode;
	MANUAL(): antlr.TerminalNode | null;
	SCHEDULE(): antlr.TerminalNode | null;
	refreshSchedule(): RefreshScheduleContext | null;
	COMMIT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RefreshScheduleContext extends antlr.ParserRuleContext {
	_refreshUnit?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EVERY(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	STARTS(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RefreshMethodContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COMPLETE(): antlr.TerminalNode | null;
	AUTO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MvPartitionContext extends antlr.ParserRuleContext {
	_partitionKey?: IdentifierContext;
	_partitionExpr?: FunctionCallExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	functionCallExpression(): FunctionCallExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IdentifierOrStringLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IdentifierOrTextContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	LEADING_STRING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UserIdentifyContext extends antlr.ParserRuleContext {
	_user?: IdentifierOrTextContext;
	_host?: IdentifierOrTextContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifierOrText(): IdentifierOrTextContext[];
	identifierOrText(i: number): IdentifierOrTextContext | null;
	ATSIGN(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ExplainContext extends antlr.ParserRuleContext {
	_level?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EXPLAIN(): antlr.TerminalNode | null;
	DESC(): antlr.TerminalNode | null;
	DESCRIBE(): antlr.TerminalNode | null;
	PROCESS(): antlr.TerminalNode | null;
	planType(): PlanTypeContext | null;
	VERBOSE(): antlr.TerminalNode | null;
	TREE(): antlr.TerminalNode | null;
	GRAPH(): antlr.TerminalNode | null;
	PLAN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PlanTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARSED(): antlr.TerminalNode | null;
	ANALYZED(): antlr.TerminalNode | null;
	REWRITTEN(): antlr.TerminalNode | null;
	LOGICAL(): antlr.TerminalNode | null;
	OPTIMIZED(): antlr.TerminalNode | null;
	PHYSICAL(): antlr.TerminalNode | null;
	SHAPE(): antlr.TerminalNode | null;
	MEMO(): antlr.TerminalNode | null;
	ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MergeTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	APPEND(): antlr.TerminalNode | null;
	DELETE(): antlr.TerminalNode | null;
	MERGE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PreFilterClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PRECEDING(): antlr.TerminalNode;
	FILTER(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DeleteOnClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DELETE(): antlr.TerminalNode;
	ON(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SequenceColClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ORDER(): antlr.TerminalNode;
	BY(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ColFromPathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COLUMNS(): antlr.TerminalNode;
	FROM(): antlr.TerminalNode;
	PATH(): antlr.TerminalNode;
	AS(): antlr.TerminalNode;
	identifierList(): IdentifierListContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ColMappingListContext extends antlr.ParserRuleContext {
	_mappingExpr?: MappingExprContext;
	_mappingSet: MappingExprContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	SET(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	mappingExpr(): MappingExprContext[];
	mappingExpr(i: number): MappingExprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MappingExprContext extends antlr.ParserRuleContext {
	_mappingCol?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class WithRemoteStorageSystemContext extends antlr.ParserRuleContext {
	_brokerProperties?: PropertyItemListContext;
	_brokerName?: IdentifierOrTextContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	resourceDesc(): ResourceDescContext | null;
	WITH(): antlr.TerminalNode | null;
	S3(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	propertyItemList(): PropertyItemListContext | null;
	HDFS(): antlr.TerminalNode | null;
	LOCAL(): antlr.TerminalNode | null;
	BROKER(): antlr.TerminalNode | null;
	identifierOrText(): IdentifierOrTextContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ResourceDescContext extends antlr.ParserRuleContext {
	_resourceName?: IdentifierOrTextContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	WITH(): antlr.TerminalNode;
	RESOURCE(): antlr.TerminalNode;
	identifierOrText(): IdentifierOrTextContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	propertyItemList(): PropertyItemListContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MysqlDataDescContext extends antlr.ParserRuleContext {
	_filePath?: Token | null;
	_tableName?: MultipartIdentifierContext;
	_partition?: IdentifierListContext;
	_comma?: Token | null;
	_separator?: Token | null;
	_columns?: IdentifierListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DATA(): antlr.TerminalNode;
	INFILE(): antlr.TerminalNode;
	INTO(): antlr.TerminalNode;
	TABLE(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	multipartIdentifier(): MultipartIdentifierContext;
	LOCAL(): antlr.TerminalNode | null;
	booleanValue(): BooleanValueContext | null;
	PARTITION(): antlr.TerminalNode | null;
	COLUMNS(): antlr.TerminalNode | null;
	TERMINATED(): antlr.TerminalNode[];
	TERMINATED(i: number): antlr.TerminalNode | null;
	BY(): antlr.TerminalNode[];
	BY(i: number): antlr.TerminalNode | null;
	LINES(): antlr.TerminalNode | null;
	skipLines(): SkipLinesContext | null;
	colMappingList(): ColMappingListContext | null;
	propertyClause(): PropertyClauseContext | null;
	identifierList(): IdentifierListContext[];
	identifierList(i: number): IdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SkipLinesContext extends antlr.ParserRuleContext {
	_lines?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	IGNORE(): antlr.TerminalNode;
	LINES(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode;
	ROWS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class OutFileClauseContext extends antlr.ParserRuleContext {
	_filePath?: ConstantContext;
	_format?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTO(): antlr.TerminalNode;
	OUTFILE(): antlr.TerminalNode;
	constant(): ConstantContext;
	FORMAT(): antlr.TerminalNode | null;
	AS(): antlr.TerminalNode | null;
	propertyClause(): PropertyClauseContext | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QueryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryTerm(): QueryTermContext;
	queryOrganization(): QueryOrganizationContext;
	cte(): CteContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QueryTermContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryTermContext): void;
}
export declare class QueryTermDefaultContext extends QueryTermContext {
	constructor(ctx: QueryTermContext);
	queryPrimary(): QueryPrimaryContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetOperationContext extends QueryTermContext {
	_left?: QueryTermContext;
	_operator?: Token | null;
	_right?: QueryTermContext;
	constructor(ctx: QueryTermContext);
	queryTerm(): QueryTermContext[];
	queryTerm(i: number): QueryTermContext | null;
	UNION(): antlr.TerminalNode | null;
	EXCEPT(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	INTERSECT(): antlr.TerminalNode | null;
	setQuantifier(): SetQuantifierContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SetQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DISTINCT(): antlr.TerminalNode | null;
	ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QueryPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QueryPrimaryContext): void;
}
export declare class SubqueryContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	LEFT_PAREN(): antlr.TerminalNode;
	query(): QueryContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ValuesTableContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	inlineTable(): InlineTableContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(ctx: QueryPrimaryContext);
	querySpecification(): QuerySpecificationContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QuerySpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: QuerySpecificationContext): void;
}
export declare class RegularQuerySpecificationContext extends QuerySpecificationContext {
	constructor(ctx: QuerySpecificationContext);
	selectClause(): SelectClauseContext;
	queryOrganization(): QueryOrganizationContext;
	intoClause(): IntoClauseContext | null;
	fromClause(): FromClauseContext | null;
	whereClause(): WhereClauseContext | null;
	aggClause(): AggClauseContext | null;
	havingClause(): HavingClauseContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CteContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	WITH(): antlr.TerminalNode;
	aliasQuery(): AliasQueryContext[];
	aliasQuery(i: number): AliasQueryContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AliasQueryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	AS(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	query(): QueryContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	columnAliases(): ColumnAliasesContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ColumnAliasesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SelectClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	SELECT(): antlr.TerminalNode;
	selectColumnClause(): SelectColumnClauseContext;
	selectHint(): SelectHintContext | null;
	DISTINCT(): antlr.TerminalNode | null;
	ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SelectColumnClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	namedExpressionSeq(): NamedExpressionSeqContext;
	ASTERISK(): antlr.TerminalNode | null;
	EXCEPT(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class WhereClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	WHERE(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	FROM(): antlr.TerminalNode;
	relations(): RelationsContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IntoClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTO(): antlr.TerminalNode;
	tableRow(): TableRowContext[];
	tableRow(i: number): TableRowContext | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	bulkCollectClause(): BulkCollectClauseContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class BulkCollectClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	BULK(): antlr.TerminalNode;
	COLLECT(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TableRowContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	LEFT_PAREN(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RelationsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	relation(): RelationContext[];
	relation(i: number): RelationContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RelationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	relationPrimary(): RelationPrimaryContext;
	joinRelation(): JoinRelationContext[];
	joinRelation(i: number): JoinRelationContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class JoinRelationContext extends antlr.ParserRuleContext {
	_right?: RelationPrimaryContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	JOIN(): antlr.TerminalNode;
	relationPrimary(): RelationPrimaryContext;
	joinType(): JoinTypeContext | null;
	distributeType(): DistributeTypeContext | null;
	joinCriteria(): JoinCriteriaContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DistributeTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: DistributeTypeContext): void;
}
export declare class CommentDistributeTypeContext extends DistributeTypeContext {
	constructor(ctx: DistributeTypeContext);
	HINT_START(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	HINT_END(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class BracketDistributeTypeContext extends DistributeTypeContext {
	constructor(ctx: DistributeTypeContext);
	LEFT_BRACKET(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	RIGHT_BRACKET(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RelationHintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RelationHintContext): void;
}
export declare class BracketRelationHintContext extends RelationHintContext {
	constructor(ctx: RelationHintContext);
	LEFT_BRACKET(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	RIGHT_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CommentRelationHintContext extends RelationHintContext {
	constructor(ctx: RelationHintContext);
	HINT_START(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	HINT_END(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AggClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	GROUP(): antlr.TerminalNode;
	BY(): antlr.TerminalNode;
	groupingElement(): GroupingElementContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class GroupingElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ROLLUP(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	CUBE(): antlr.TerminalNode | null;
	GROUPING(): antlr.TerminalNode | null;
	SETS(): antlr.TerminalNode | null;
	groupingSet(): GroupingSetContext[];
	groupingSet(i: number): GroupingSetContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class GroupingSetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	HAVING(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SelectHintContext extends antlr.ParserRuleContext {
	_hintStatement?: HintStatementContext;
	_hintStatements: HintStatementContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	HINT_START(): antlr.TerminalNode;
	HINT_END(): antlr.TerminalNode;
	hintStatement(): HintStatementContext[];
	hintStatement(i: number): HintStatementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class HintStatementContext extends antlr.ParserRuleContext {
	_hintName?: IdentifierContext;
	_hintAssignment?: HintAssignmentContext;
	_parameters: HintAssignmentContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	hintAssignment(): HintAssignmentContext[];
	hintAssignment(i: number): HintAssignmentContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class HintAssignmentContext extends antlr.ParserRuleContext {
	_key?: IdentifierOrTextContext;
	_constantValue?: ConstantContext;
	_identifierValue?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifierOrText(): IdentifierOrTextContext;
	EQ(): antlr.TerminalNode | null;
	constant(): ConstantContext | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UpdateAssignmentContext extends antlr.ParserRuleContext {
	_col?: MultipartIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode;
	multipartIdentifier(): MultipartIdentifierContext;
	expression(): ExpressionContext | null;
	DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UpdateAssignmentSeqContext extends antlr.ParserRuleContext {
	_updateAssignment?: UpdateAssignmentContext;
	_assignments: UpdateAssignmentContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	updateAssignment(): UpdateAssignmentContext[];
	updateAssignment(i: number): UpdateAssignmentContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LateralViewContext extends antlr.ParserRuleContext {
	_functionName?: IdentifierContext;
	_tableName?: IdentifierContext;
	_identifier?: IdentifierContext;
	_columnNames: IdentifierContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LATERAL(): antlr.TerminalNode;
	VIEW(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	AS(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QueryOrganizationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sortClause(): SortClauseContext | null;
	limitClause(): LimitClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SortClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ORDER(): antlr.TerminalNode;
	BY(): antlr.TerminalNode;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SortItemContext extends antlr.ParserRuleContext {
	_ordering?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	NULLS(): antlr.TerminalNode | null;
	FIRST(): antlr.TerminalNode | null;
	LAST(): antlr.TerminalNode | null;
	ASC(): antlr.TerminalNode | null;
	DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LimitClauseContext extends antlr.ParserRuleContext {
	_limit?: Token | null;
	_offset?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LIMIT(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode[];
	INTEGER_VALUE(i: number): antlr.TerminalNode | null;
	OFFSET(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PartitionClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARTITION(): antlr.TerminalNode;
	BY(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class JoinTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INNER(): antlr.TerminalNode | null;
	CROSS(): antlr.TerminalNode | null;
	LEFT(): antlr.TerminalNode | null;
	OUTER(): antlr.TerminalNode | null;
	RIGHT(): antlr.TerminalNode | null;
	FULL(): antlr.TerminalNode | null;
	SEMI(): antlr.TerminalNode | null;
	ANTI(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class JoinCriteriaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ON(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	USING(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IdentifierListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	identifierSeq(): IdentifierSeqContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
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
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class OptScanParamsContext extends antlr.ParserRuleContext {
	_funcName?: IdentifierContext;
	_properties?: PropertyItemListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ATSIGN(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	propertyItemList(): PropertyItemListContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RelationPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RelationPrimaryContext): void;
}
export declare class TableValuedFunctionContext extends RelationPrimaryContext {
	_tvfName?: IdentifierContext;
	_properties?: PropertyItemListContext;
	constructor(ctx: RelationPrimaryContext);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	tableAlias(): TableAliasContext;
	identifier(): IdentifierContext;
	propertyItemList(): PropertyItemListContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RelationListContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	LEFT_PAREN(): antlr.TerminalNode;
	relations(): RelationsContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AliasedQueryContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	LEFT_PAREN(): antlr.TerminalNode;
	query(): QueryContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	tableAlias(): TableAliasContext;
	lateralView(): LateralViewContext[];
	lateralView(i: number): LateralViewContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TableNameContext extends RelationPrimaryContext {
	constructor(ctx: RelationPrimaryContext);
	multipartIdentifier(): MultipartIdentifierContext;
	tableAlias(): TableAliasContext;
	optScanParams(): OptScanParamsContext | null;
	materializedViewName(): MaterializedViewNameContext | null;
	specifiedPartition(): SpecifiedPartitionContext | null;
	tabletList(): TabletListContext | null;
	sample(): SampleContext | null;
	tableSnapshot(): TableSnapshotContext | null;
	relationHint(): RelationHintContext | null;
	lateralView(): LateralViewContext[];
	lateralView(i: number): LateralViewContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MaterializedViewNameContext extends antlr.ParserRuleContext {
	_indexName?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INDEX(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PropertyClauseContext extends antlr.ParserRuleContext {
	_fileProperties?: PropertyItemListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PROPERTIES(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	propertyItemList(): PropertyItemListContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PropertyItemListContext extends antlr.ParserRuleContext {
	_propertyItem?: PropertyItemContext;
	_properties: PropertyItemContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	propertyItem(): PropertyItemContext[];
	propertyItem(i: number): PropertyItemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PropertyItemContext extends antlr.ParserRuleContext {
	_key?: PropertyKeyContext;
	_value?: PropertyValueContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode;
	propertyKey(): PropertyKeyContext;
	propertyValue(): PropertyValueContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PropertyKeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	constant(): ConstantContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PropertyValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	constant(): ConstantContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TableAliasContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	strictIdentifier(): StrictIdentifierContext | null;
	AS(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
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
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SimpleColumnDefsContext extends antlr.ParserRuleContext {
	_simpleColumnDef?: SimpleColumnDefContext;
	_cols: SimpleColumnDefContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	simpleColumnDef(): SimpleColumnDefContext[];
	simpleColumnDef(i: number): SimpleColumnDefContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SimpleColumnDefContext extends antlr.ParserRuleContext {
	_colName?: IdentifierContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	COMMENT(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ColumnDefsContext extends antlr.ParserRuleContext {
	_columnDef?: ColumnDefContext;
	_cols: ColumnDefContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnDef(): ColumnDefContext[];
	columnDef(i: number): ColumnDefContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ColumnDefContext extends antlr.ParserRuleContext {
	_colName?: IdentifierContext;
	_type_?: DataTypeContext;
	_aggType?: AggTypeDefContext;
	_nullable?: Token | null;
	_autoIncInitValue?: NumberContext;
	_nullValue?: Token | null;
	_stringValue?: Token | null;
	_defaultTimestamp?: Token | null;
	_defaultValuePrecision?: NumberContext;
	_onUpdateValuePrecision?: NumberContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	dataType(): DataTypeContext;
	KEY(): antlr.TerminalNode | null;
	AUTO_INCREMENT(): antlr.TerminalNode | null;
	DEFAULT(): antlr.TerminalNode | null;
	ON(): antlr.TerminalNode | null;
	UPDATE(): antlr.TerminalNode | null;
	CURRENT_TIMESTAMP(): antlr.TerminalNode[];
	CURRENT_TIMESTAMP(i: number): antlr.TerminalNode | null;
	COMMENT(): antlr.TerminalNode | null;
	aggTypeDef(): AggTypeDefContext | null;
	NULL(): antlr.TerminalNode[];
	NULL(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	DECIMAL_VALUE(): antlr.TerminalNode | null;
	CURRENT_DATE(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode[];
	LEFT_PAREN(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode[];
	RIGHT_PAREN(i: number): antlr.TerminalNode | null;
	number_(): NumberContext[];
	number_(i: number): NumberContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IndexDefsContext extends antlr.ParserRuleContext {
	_indexDef?: IndexDefContext;
	_indexes: IndexDefContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	indexDef(): IndexDefContext[];
	indexDef(i: number): IndexDefContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IndexDefContext extends antlr.ParserRuleContext {
	_indexName?: IdentifierContext;
	_cols?: IdentifierListContext;
	_indexType?: Token | null;
	_properties?: PropertyItemListContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INDEX(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	identifierList(): IdentifierListContext;
	USING(): antlr.TerminalNode | null;
	PROPERTIES(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	COMMENT(): antlr.TerminalNode | null;
	propertyItemList(): PropertyItemListContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	BITMAP(): antlr.TerminalNode | null;
	INVERTED(): antlr.TerminalNode | null;
	NGRAM_BF(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PartitionsDefContext extends antlr.ParserRuleContext {
	_partitionDef?: PartitionDefContext;
	_partitions: PartitionDefContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	partitionDef(): PartitionDefContext[];
	partitionDef(i: number): PartitionDefContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PartitionDefContext extends antlr.ParserRuleContext {
	_partitionProperties?: PropertyItemListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	lessThanPartitionDef(): LessThanPartitionDefContext | null;
	fixedPartitionDef(): FixedPartitionDefContext | null;
	stepPartitionDef(): StepPartitionDefContext | null;
	inPartitionDef(): InPartitionDefContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	propertyItemList(): PropertyItemListContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LessThanPartitionDefContext extends antlr.ParserRuleContext {
	_partitionName?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARTITION(): antlr.TerminalNode;
	VALUES(): antlr.TerminalNode;
	LESS(): antlr.TerminalNode;
	THAN(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	MAXVALUE(): antlr.TerminalNode | null;
	constantSeq(): ConstantSeqContext | null;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FixedPartitionDefContext extends antlr.ParserRuleContext {
	_partitionName?: IdentifierContext;
	_lower?: ConstantSeqContext;
	_upper?: ConstantSeqContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARTITION(): antlr.TerminalNode;
	VALUES(): antlr.TerminalNode;
	LEFT_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	constantSeq(): ConstantSeqContext[];
	constantSeq(i: number): ConstantSeqContext | null;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StepPartitionDefContext extends antlr.ParserRuleContext {
	_from_?: ConstantSeqContext;
	_to?: ConstantSeqContext;
	_unitsAmount?: Token | null;
	_unit?: DatetimeUnitContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	FROM(): antlr.TerminalNode;
	TO(): antlr.TerminalNode;
	INTERVAL(): antlr.TerminalNode;
	constantSeq(): ConstantSeqContext[];
	constantSeq(i: number): ConstantSeqContext | null;
	INTEGER_VALUE(): antlr.TerminalNode;
	datetimeUnit(): DatetimeUnitContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class InPartitionDefContext extends antlr.ParserRuleContext {
	_partitionName?: IdentifierContext;
	_constantSeq?: ConstantSeqContext;
	_constantSeqs: ConstantSeqContext[];
	_constants?: ConstantSeqContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARTITION(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	IF(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	EXISTS(): antlr.TerminalNode | null;
	VALUES(): antlr.TerminalNode | null;
	IN(): antlr.TerminalNode | null;
	constantSeq(): ConstantSeqContext[];
	constantSeq(i: number): ConstantSeqContext | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ConstantSeqContext extends antlr.ParserRuleContext {
	_partitionValueDef?: PartitionValueDefContext;
	_values: PartitionValueDefContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	partitionValueDef(): PartitionValueDefContext[];
	partitionValueDef(i: number): PartitionValueDefContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PartitionValueDefContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTEGER_VALUE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	MAXVALUE(): antlr.TerminalNode | null;
	NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RollupDefsContext extends antlr.ParserRuleContext {
	_rollupDef?: RollupDefContext;
	_rollups: RollupDefContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rollupDef(): RollupDefContext[];
	rollupDef(i: number): RollupDefContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RollupDefContext extends antlr.ParserRuleContext {
	_rollupName?: IdentifierContext;
	_rollupCols?: IdentifierListContext;
	_dupKeys?: IdentifierListContext;
	_properties?: PropertyClauseContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	identifierList(): IdentifierListContext[];
	identifierList(i: number): IdentifierListContext | null;
	DUPLICATE(): antlr.TerminalNode | null;
	KEY(): antlr.TerminalNode | null;
	propertyClause(): PropertyClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AggTypeDefContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	MAX(): antlr.TerminalNode | null;
	MIN(): antlr.TerminalNode | null;
	SUM(): antlr.TerminalNode | null;
	REPLACE(): antlr.TerminalNode | null;
	REPLACE_IF_NOT_NULL(): antlr.TerminalNode | null;
	HLL_UNION(): antlr.TerminalNode | null;
	BITMAP_UNION(): antlr.TerminalNode | null;
	QUANTILE_UNION(): antlr.TerminalNode | null;
	GENERIC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TabletListContext extends antlr.ParserRuleContext {
	_INTEGER_VALUE?: Token | null;
	_tabletIdList: antlr.Token[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	TABLET(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode[];
	INTEGER_VALUE(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class InlineTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	VALUES(): antlr.TerminalNode;
	rowConstructor(): RowConstructorContext[];
	rowConstructor(i: number): RowConstructorContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class NamedExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	identifierOrText(): IdentifierOrTextContext | null;
	AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class NamedExpressionSeqContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	namedExpression(): NamedExpressionContext[];
	namedExpression(i: number): NamedExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	booleanExpression(): BooleanExpressionContext | null;
	lambdaExpression(): LambdaExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LambdaExpressionContext extends antlr.ParserRuleContext {
	_errorCapturingIdentifier?: ErrorCapturingIdentifierContext;
	_args: ErrorCapturingIdentifierContext[];
	_body?: BooleanExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ARROW(): antlr.TerminalNode;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext[];
	errorCapturingIdentifier(i: number): ErrorCapturingIdentifierContext | null;
	booleanExpression(): BooleanExpressionContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class BooleanExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: BooleanExpressionContext): void;
}
export declare class ExistContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	EXISTS(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	query(): QueryContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LogicalNotContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	booleanExpression(): BooleanExpressionContext;
	LOGICALNOT(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PredicatedContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	valueExpression(): ValueExpressionContext;
	predicate(): PredicateContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IsnullContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	ISNULL(): antlr.TerminalNode | null;
	IS_NULL_PRED(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class Is_not_null_predContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	IS_NOT_NULL_PRED(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LogicalBinaryContext extends BooleanExpressionContext {
	_left?: BooleanExpressionContext;
	_operator?: Token | null;
	_right?: BooleanExpressionContext;
	constructor(ctx: BooleanExpressionContext);
	booleanExpression(): BooleanExpressionContext[];
	booleanExpression(i: number): BooleanExpressionContext | null;
	AND(): antlr.TerminalNode | null;
	LOGICALAND(): antlr.TerminalNode | null;
	XOR(): antlr.TerminalNode | null;
	OR(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DoublePipesContext extends BooleanExpressionContext {
	_left?: BooleanExpressionContext;
	_operator?: Token | null;
	_right?: BooleanExpressionContext;
	constructor(ctx: BooleanExpressionContext);
	booleanExpression(): BooleanExpressionContext[];
	booleanExpression(i: number): BooleanExpressionContext | null;
	DOUBLEPIPES(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RowConstructorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	rowConstructorItem(): RowConstructorItemContext[];
	rowConstructorItem(i: number): RowConstructorItemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RowConstructorItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	namedExpression(): NamedExpressionContext | null;
	DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
	_kind?: Token | null;
	_lower?: ValueExpressionContext;
	_upper?: ValueExpressionContext;
	_pattern?: ValueExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	AND(): antlr.TerminalNode | null;
	BETWEEN(): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	NOT(): antlr.TerminalNode | null;
	LIKE(): antlr.TerminalNode | null;
	REGEXP(): antlr.TerminalNode | null;
	RLIKE(): antlr.TerminalNode | null;
	MATCH(): antlr.TerminalNode | null;
	MATCH_ANY(): antlr.TerminalNode | null;
	MATCH_ALL(): antlr.TerminalNode | null;
	MATCH_PHRASE(): antlr.TerminalNode | null;
	MATCH_PHRASE_PREFIX(): antlr.TerminalNode | null;
	MATCH_REGEXP(): antlr.TerminalNode | null;
	MATCH_PHRASE_EDGE(): antlr.TerminalNode | null;
	LEFT_PAREN(): antlr.TerminalNode | null;
	query(): QueryContext | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	IN(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	IS(): antlr.TerminalNode | null;
	NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ValueExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ValueExpressionContext): void;
}
export declare class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(ctx: ValueExpressionContext);
	primaryExpression(): PrimaryExpressionContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ComparisonContext extends ValueExpressionContext {
	_left?: ValueExpressionContext;
	_right?: ValueExpressionContext;
	constructor(ctx: ValueExpressionContext);
	comparisonOperator(): ComparisonOperatorContext;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class BitOperationContext extends ValueExpressionContext {
	_operator?: Token | null;
	_left?: ValueExpressionContext;
	_right?: ValueExpressionContext;
	constructor(ctx: ValueExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	BITAND(): antlr.TerminalNode | null;
	BITOR(): antlr.TerminalNode | null;
	BITXOR(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
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
	MOD(): antlr.TerminalNode | null;
	DIV(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	SUBTRACT(): antlr.TerminalNode | null;
	HAT(): antlr.TerminalNode | null;
	PIPE(): antlr.TerminalNode | null;
	AMPERSAND(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ArithmeticUnaryContext extends ValueExpressionContext {
	_operator?: Token | null;
	constructor(ctx: ValueExpressionContext);
	valueExpression(): ValueExpressionContext;
	SUBTRACT(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	TILDE(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DatetimeUnitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	YEAR(): antlr.TerminalNode | null;
	MONTH(): antlr.TerminalNode | null;
	WEEK(): antlr.TerminalNode | null;
	DAY(): antlr.TerminalNode | null;
	HOUR(): antlr.TerminalNode | null;
	MINUTE(): antlr.TerminalNode | null;
	SECOND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PrimaryExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PrimaryExpressionContext): void;
}
export declare class DateCeilContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_timestamp?: ValueExpressionContext;
	_unitsAmount?: ValueExpressionContext;
	_unit?: DatetimeUnitContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	DATE_CEIL(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	INTERVAL(): antlr.TerminalNode | null;
	datetimeUnit(): DatetimeUnitContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DereferenceContext extends PrimaryExpressionContext {
	_base?: PrimaryExpressionContext;
	_fieldName?: IdentifierContext;
	constructor(ctx: PrimaryExpressionContext);
	DOT(): antlr.TerminalNode;
	primaryExpression(): PrimaryExpressionContext;
	identifier(): IdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CurrentDateContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	CURRENT_DATE(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TimestampaddContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_unit?: DatetimeUnitContext;
	_startTimestamp?: ValueExpressionContext;
	_endTimestamp?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	datetimeUnit(): DatetimeUnitContext;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	TIMESTAMPADD(): antlr.TerminalNode | null;
	DATEADD(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class Date_subContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_timestamp?: ValueExpressionContext;
	_unitsAmount?: ValueExpressionContext;
	_unit?: DatetimeUnitContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	SUBDATE(): antlr.TerminalNode | null;
	DAYS_SUB(): antlr.TerminalNode | null;
	DATE_SUB(): antlr.TerminalNode | null;
	INTERVAL(): antlr.TerminalNode | null;
	datetimeUnit(): DatetimeUnitContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CastContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	AS(): antlr.TerminalNode;
	castDataType(): CastDataTypeContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	CAST(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UserVariableContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	ATSIGN(): antlr.TerminalNode;
	identifierOrText(): IdentifierOrTextContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ElementAtContext extends PrimaryExpressionContext {
	_value?: PrimaryExpressionContext;
	_index?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_BRACKET(): antlr.TerminalNode;
	RIGHT_BRACKET(): antlr.TerminalNode;
	primaryExpression(): PrimaryExpressionContext;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LocalTimestampContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	LOCALTIMESTAMP(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CharFunctionContext extends PrimaryExpressionContext {
	_expression?: ExpressionContext;
	_arguments: ExpressionContext[];
	_charSet?: IdentifierOrTextContext;
	constructor(ctx: PrimaryExpressionContext);
	CHAR(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	USING(): antlr.TerminalNode | null;
	identifierOrText(): IdentifierOrTextContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IntervalLiteralContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	interval(): IntervalContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ArrayRangeContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_start?: ValueExpressionContext;
	_end?: ValueExpressionContext;
	_unitsAmount?: ValueExpressionContext;
	_unit?: DatetimeUnitContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	ARRAY_RANGE(): antlr.TerminalNode | null;
	SEQUENCE(): antlr.TerminalNode | null;
	INTERVAL(): antlr.TerminalNode | null;
	datetimeUnit(): DatetimeUnitContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SimpleCaseContext extends PrimaryExpressionContext {
	_value?: ExpressionContext;
	_elseExpression?: ExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	CASE(): antlr.TerminalNode;
	END(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	whenClause(): WhenClauseContext[];
	whenClause(i: number): WhenClauseContext | null;
	ELSE(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext;
	BINARY(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StarContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	ASTERISK(): antlr.TerminalNode;
	qualifiedName(): QualifiedNameContext | null;
	DOT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ConvertTypeContext extends PrimaryExpressionContext {
	_argument?: ExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	CONVERT(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	castDataType(): CastDataTypeContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TimestampdiffContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_unit?: DatetimeUnitContext;
	_startTimestamp?: ValueExpressionContext;
	_endTimestamp?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode;
	datetimeUnit(): DatetimeUnitContext;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	TIMESTAMPDIFF(): antlr.TerminalNode | null;
	DATEDIFF(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ConvertCharSetContext extends PrimaryExpressionContext {
	_argument?: ExpressionContext;
	_charSet?: IdentifierOrTextContext;
	constructor(ctx: PrimaryExpressionContext);
	CONVERT(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	USING(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	identifierOrText(): IdentifierOrTextContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	query(): QueryContext;
	RIGHT_PAREN(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class EncryptKeyContext extends PrimaryExpressionContext {
	_dbName?: IdentifierContext;
	_keyName?: IdentifierContext;
	constructor(ctx: PrimaryExpressionContext);
	KEY(): antlr.TerminalNode;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class Date_addContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_timestamp?: ValueExpressionContext;
	_unitsAmount?: ValueExpressionContext;
	_unit?: DatetimeUnitContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	ADDDATE(): antlr.TerminalNode | null;
	DAYS_ADD(): antlr.TerminalNode | null;
	DATE_ADD(): antlr.TerminalNode | null;
	INTERVAL(): antlr.TerminalNode | null;
	datetimeUnit(): DatetimeUnitContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CurrentTimeContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	CURRENT_TIME(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class LocalTimeContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	LOCALTIME(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SystemVariableContext extends PrimaryExpressionContext {
	_kind?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	DOUBLEATSIGN(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	DOT(): antlr.TerminalNode | null;
	GLOBAL(): antlr.TerminalNode | null;
	SESSION(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CollateContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	primaryExpression(): PrimaryExpressionContext;
	COLLATE(): antlr.TerminalNode;
	identifier(): IdentifierContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	DEFAULT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CurrentUserContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	CURRENT_USER(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ConstantDefaultContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	constant(): ConstantContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ExtractContext extends PrimaryExpressionContext {
	_field?: IdentifierContext;
	_source?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	EXTRACT(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	FROM(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	valueExpression(): ValueExpressionContext;
	DATE(): antlr.TerminalNode | null;
	TIMESTAMP(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CurrentTimestampContext extends PrimaryExpressionContext {
	_name?: Token | null;
	constructor(ctx: PrimaryExpressionContext);
	CURRENT_TIMESTAMP(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	functionCallExpression(): FunctionCallExpressionContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ArraySliceContext extends PrimaryExpressionContext {
	_value?: PrimaryExpressionContext;
	_begin?: ValueExpressionContext;
	_end?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_BRACKET(): antlr.TerminalNode;
	COLON(): antlr.TerminalNode;
	RIGHT_BRACKET(): antlr.TerminalNode;
	primaryExpression(): PrimaryExpressionContext;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DateFloorContext extends PrimaryExpressionContext {
	_name?: Token | null;
	_timestamp?: ValueExpressionContext;
	_unitsAmount?: ValueExpressionContext;
	_unit?: DatetimeUnitContext;
	constructor(ctx: PrimaryExpressionContext);
	LEFT_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	DATE_FLOOR(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	INTERVAL(): antlr.TerminalNode | null;
	datetimeUnit(): DatetimeUnitContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SearchedCaseContext extends PrimaryExpressionContext {
	_elseExpression?: ExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	CASE(): antlr.TerminalNode;
	END(): antlr.TerminalNode;
	whenClause(): WhenClauseContext[];
	whenClause(i: number): WhenClauseContext | null;
	ELSE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CastDataTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext | null;
	SIGNED(): antlr.TerminalNode | null;
	UNSIGNED(): antlr.TerminalNode | null;
	INT(): antlr.TerminalNode | null;
	INTEGER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FunctionCallExpressionContext extends antlr.ParserRuleContext {
	_expression?: ExpressionContext;
	_arguments: ExpressionContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionIdentifier(): FunctionIdentifierContext;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	OVER(): antlr.TerminalNode | null;
	windowSpec(): WindowSpecContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	ORDER(): antlr.TerminalNode | null;
	BY(): antlr.TerminalNode | null;
	sortItem(): SortItemContext[];
	sortItem(i: number): SortItemContext | null;
	DISTINCT(): antlr.TerminalNode | null;
	ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FunctionIdentifierContext extends antlr.ParserRuleContext {
	_dbName?: IdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionNameIdentifier(): FunctionNameIdentifierContext;
	DOT(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FunctionNameIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	ADD(): antlr.TerminalNode | null;
	CONNECTION_ID(): antlr.TerminalNode | null;
	CURRENT_CATALOG(): antlr.TerminalNode | null;
	CURRENT_USER(): antlr.TerminalNode | null;
	DATABASE(): antlr.TerminalNode | null;
	IF(): antlr.TerminalNode | null;
	LEFT(): antlr.TerminalNode | null;
	LIKE(): antlr.TerminalNode | null;
	PASSWORD(): antlr.TerminalNode | null;
	REGEXP(): antlr.TerminalNode | null;
	RIGHT(): antlr.TerminalNode | null;
	SCHEMA(): antlr.TerminalNode | null;
	TRIM(): antlr.TerminalNode | null;
	USER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class WindowSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	partitionClause(): PartitionClauseContext | null;
	sortClause(): SortClauseContext | null;
	windowFrame(): WindowFrameContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class WindowFrameContext extends antlr.ParserRuleContext {
	_start?: FrameBoundaryContext;
	_end?: FrameBoundaryContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	frameUnits(): FrameUnitsContext;
	frameBoundary(): FrameBoundaryContext[];
	frameBoundary(i: number): FrameBoundaryContext | null;
	BETWEEN(): antlr.TerminalNode | null;
	AND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FrameUnitsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ROWS(): antlr.TerminalNode | null;
	RANGE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class FrameBoundaryContext extends antlr.ParserRuleContext {
	_boundType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	UNBOUNDED(): antlr.TerminalNode | null;
	PRECEDING(): antlr.TerminalNode | null;
	FOLLOWING(): antlr.TerminalNode | null;
	ROW(): antlr.TerminalNode | null;
	CURRENT(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QualifiedNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SpecifiedPartitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARTITION(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	identifierList(): IdentifierListContext | null;
	TEMPORARY(): antlr.TerminalNode | null;
	PARTITIONS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ConstantContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ConstantContext): void;
}
export declare class StructLiteralContext extends ConstantContext {
	_constant?: ConstantContext;
	_items: ConstantContext[];
	constructor(ctx: ConstantContext);
	LEFT_BRACE(): antlr.TerminalNode;
	RIGHT_BRACE(): antlr.TerminalNode;
	constant(): ConstantContext[];
	constant(i: number): ConstantContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class NullLiteralContext extends ConstantContext {
	constructor(ctx: ConstantContext);
	NULL(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends ConstantContext {
	constructor(ctx: ConstantContext);
	STRING_LITERAL(): antlr.TerminalNode;
	BINARY(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TypeConstructorContext extends ConstantContext {
	_type_?: Token | null;
	constructor(ctx: ConstantContext);
	STRING_LITERAL(): antlr.TerminalNode;
	DATE(): antlr.TerminalNode | null;
	DATEV1(): antlr.TerminalNode | null;
	DATEV2(): antlr.TerminalNode | null;
	TIMESTAMP(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ArrayLiteralContext extends ConstantContext {
	_constant?: ConstantContext;
	_items: ConstantContext[];
	constructor(ctx: ConstantContext);
	LEFT_BRACKET(): antlr.TerminalNode;
	RIGHT_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	constant(): ConstantContext[];
	constant(i: number): ConstantContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PlaceholderContext extends ConstantContext {
	constructor(ctx: ConstantContext);
	PLACEHOLDER(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class MapLiteralContext extends ConstantContext {
	_constant?: ConstantContext;
	_items: ConstantContext[];
	constructor(ctx: ConstantContext);
	LEFT_BRACE(): antlr.TerminalNode;
	RIGHT_BRACE(): antlr.TerminalNode;
	COLON(): antlr.TerminalNode[];
	COLON(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	constant(): ConstantContext[];
	constant(i: number): ConstantContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class NumericLiteralContext extends ConstantContext {
	constructor(ctx: ConstantContext);
	number(): NumberContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends ConstantContext {
	constructor(ctx: ConstantContext);
	booleanValue(): BooleanValueContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQ(): antlr.TerminalNode | null;
	NEQ(): antlr.TerminalNode | null;
	LT(): antlr.TerminalNode | null;
	LTE(): antlr.TerminalNode | null;
	GT(): antlr.TerminalNode | null;
	GTE(): antlr.TerminalNode | null;
	NSEQ(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class BooleanValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	TRUE(): antlr.TerminalNode | null;
	FALSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class WhenClauseContext extends antlr.ParserRuleContext {
	_condition?: ExpressionContext;
	_result?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	WHEN(): antlr.TerminalNode;
	THEN(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IntervalContext extends antlr.ParserRuleContext {
	_value?: ExpressionContext;
	_unit?: UnitIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	INTERVAL(): antlr.TerminalNode;
	expression(): ExpressionContext;
	unitIdentifier(): UnitIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UnitIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	YEAR(): antlr.TerminalNode | null;
	MONTH(): antlr.TerminalNode | null;
	WEEK(): antlr.TerminalNode | null;
	DAY(): antlr.TerminalNode | null;
	HOUR(): antlr.TerminalNode | null;
	MINUTE(): antlr.TerminalNode | null;
	SECOND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DataTypeWithNullableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext;
	NULL(): antlr.TerminalNode | null;
	NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class DataTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: DataTypeContext): void;
}
export declare class ComplexDataTypeContext extends DataTypeContext {
	_complex?: Token | null;
	constructor(ctx: DataTypeContext);
	LT(): antlr.TerminalNode;
	dataType(): DataTypeContext[];
	dataType(i: number): DataTypeContext | null;
	GT(): antlr.TerminalNode;
	ARRAY(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	MAP(): antlr.TerminalNode | null;
	complexColTypeList(): ComplexColTypeListContext | null;
	STRUCT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class AggStateDataTypeContext extends DataTypeContext {
	_dataTypeWithNullable?: DataTypeWithNullableContext;
	_dataTypes: DataTypeWithNullableContext[];
	constructor(ctx: DataTypeContext);
	AGG_STATE(): antlr.TerminalNode;
	LT(): antlr.TerminalNode;
	functionNameIdentifier(): FunctionNameIdentifierContext;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	GT(): antlr.TerminalNode;
	dataTypeWithNullable(): DataTypeWithNullableContext[];
	dataTypeWithNullable(i: number): DataTypeWithNullableContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PrimitiveDataTypeContext extends DataTypeContext {
	constructor(ctx: DataTypeContext);
	primitiveColType(): PrimitiveColTypeContext;
	LEFT_PAREN(): antlr.TerminalNode | null;
	RIGHT_PAREN(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode[];
	INTEGER_VALUE(i: number): antlr.TerminalNode | null;
	ASTERISK(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class PrimitiveColTypeContext extends antlr.ParserRuleContext {
	_type_?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	TINYINT(): antlr.TerminalNode | null;
	SMALLINT(): antlr.TerminalNode | null;
	INT(): antlr.TerminalNode | null;
	INTEGER(): antlr.TerminalNode | null;
	BIGINT(): antlr.TerminalNode | null;
	LARGEINT(): antlr.TerminalNode | null;
	BOOLEAN(): antlr.TerminalNode | null;
	FLOAT(): antlr.TerminalNode | null;
	DOUBLE(): antlr.TerminalNode | null;
	DATE(): antlr.TerminalNode | null;
	DATETIME(): antlr.TerminalNode | null;
	TIME(): antlr.TerminalNode | null;
	DATEV2(): antlr.TerminalNode | null;
	DATETIMEV2(): antlr.TerminalNode | null;
	DATEV1(): antlr.TerminalNode | null;
	DATETIMEV1(): antlr.TerminalNode | null;
	BITMAP(): antlr.TerminalNode | null;
	QUANTILE_STATE(): antlr.TerminalNode | null;
	HLL(): antlr.TerminalNode | null;
	AGG_STATE(): antlr.TerminalNode | null;
	STRING(): antlr.TerminalNode | null;
	JSON(): antlr.TerminalNode | null;
	JSONB(): antlr.TerminalNode | null;
	TEXT(): antlr.TerminalNode | null;
	VARCHAR(): antlr.TerminalNode | null;
	CHAR(): antlr.TerminalNode | null;
	DECIMAL(): antlr.TerminalNode | null;
	DECIMALV2(): antlr.TerminalNode | null;
	DECIMALV3(): antlr.TerminalNode | null;
	IPV4(): antlr.TerminalNode | null;
	IPV6(): antlr.TerminalNode | null;
	VARIANT(): antlr.TerminalNode | null;
	ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ComplexColTypeListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	complexColType(): ComplexColTypeContext[];
	complexColType(i: number): ComplexColTypeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ComplexColTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	COLON(): antlr.TerminalNode;
	dataType(): DataTypeContext;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class CommentSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COMMENT(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SampleContext extends antlr.ParserRuleContext {
	_seed?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	TABLESAMPLE(): antlr.TerminalNode;
	LEFT_PAREN(): antlr.TerminalNode;
	RIGHT_PAREN(): antlr.TerminalNode;
	sampleMethod(): SampleMethodContext | null;
	REPEATABLE(): antlr.TerminalNode | null;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SampleMethodContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SampleMethodContext): void;
}
export declare class SampleByRowsContext extends SampleMethodContext {
	constructor(ctx: SampleMethodContext);
	INTEGER_VALUE(): antlr.TerminalNode;
	ROWS(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class SampleByPercentileContext extends SampleMethodContext {
	_percentage?: Token | null;
	constructor(ctx: SampleMethodContext);
	PERCENT(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class TableSnapshotContext extends antlr.ParserRuleContext {
	_version?: Token | null;
	_time?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	FOR(): antlr.TerminalNode;
	VERSION(): antlr.TerminalNode | null;
	AS(): antlr.TerminalNode;
	OF(): antlr.TerminalNode;
	INTEGER_VALUE(): antlr.TerminalNode | null;
	TIME(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void;
}
export declare class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx: ErrorCapturingIdentifierExtraContext);
	SUBTRACT(): antlr.TerminalNode[];
	SUBTRACT(i: number): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx: ErrorCapturingIdentifierExtraContext);
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	strictIdentifier(): StrictIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class StrictIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: StrictIdentifierContext): void;
}
export declare class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
	constructor(ctx: StrictIdentifierContext);
	quotedIdentifier(): QuotedIdentifierContext;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class UnquotedIdentifierContext extends StrictIdentifierContext {
	constructor(ctx: StrictIdentifierContext);
	IDENTIFIER(): antlr.TerminalNode | null;
	nonReserved(): NonReservedContext | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class QuotedIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	BACKQUOTED_IDENTIFIER(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class NumberContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: NumberContext): void;
}
export declare class DecimalLiteralContext extends NumberContext {
	constructor(ctx: NumberContext);
	EXPONENT_VALUE(): antlr.TerminalNode | null;
	DECIMAL_VALUE(): antlr.TerminalNode | null;
	SUBTRACT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class IntegerLiteralContext extends NumberContext {
	constructor(ctx: NumberContext);
	INTEGER_VALUE(): antlr.TerminalNode;
	SUBTRACT(): antlr.TerminalNode | null;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
export declare class NonReservedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ADDDATE(): antlr.TerminalNode | null;
	AFTER(): antlr.TerminalNode | null;
	AGG_STATE(): antlr.TerminalNode | null;
	AGGREGATE(): antlr.TerminalNode | null;
	ALIAS(): antlr.TerminalNode | null;
	ANALYZED(): antlr.TerminalNode | null;
	ARRAY(): antlr.TerminalNode | null;
	ARRAY_RANGE(): antlr.TerminalNode | null;
	AT(): antlr.TerminalNode | null;
	AUTHORS(): antlr.TerminalNode | null;
	AUTO_INCREMENT(): antlr.TerminalNode | null;
	BACKENDS(): antlr.TerminalNode | null;
	BACKUP(): antlr.TerminalNode | null;
	BEGIN(): antlr.TerminalNode | null;
	BELONG(): antlr.TerminalNode | null;
	BIN(): antlr.TerminalNode | null;
	BITAND(): antlr.TerminalNode | null;
	BITMAP(): antlr.TerminalNode | null;
	BITMAP_UNION(): antlr.TerminalNode | null;
	BITOR(): antlr.TerminalNode | null;
	BITXOR(): antlr.TerminalNode | null;
	BLOB(): antlr.TerminalNode | null;
	BOOLEAN(): antlr.TerminalNode | null;
	BRIEF(): antlr.TerminalNode | null;
	BROKER(): antlr.TerminalNode | null;
	BUCKETS(): antlr.TerminalNode | null;
	BUILD(): antlr.TerminalNode | null;
	BUILTIN(): antlr.TerminalNode | null;
	BULK(): antlr.TerminalNode | null;
	CACHE(): antlr.TerminalNode | null;
	CACHED(): antlr.TerminalNode | null;
	CALL(): antlr.TerminalNode | null;
	CATALOG(): antlr.TerminalNode | null;
	CATALOGS(): antlr.TerminalNode | null;
	CHAIN(): antlr.TerminalNode | null;
	CHAR(): antlr.TerminalNode | null;
	CHARSET(): antlr.TerminalNode | null;
	CHECK(): antlr.TerminalNode | null;
	CLUSTER(): antlr.TerminalNode | null;
	CLUSTERS(): antlr.TerminalNode | null;
	COLLATION(): antlr.TerminalNode | null;
	COLLECT(): antlr.TerminalNode | null;
	COLOCATE(): antlr.TerminalNode | null;
	COLUMNS(): antlr.TerminalNode | null;
	COMMENT(): antlr.TerminalNode | null;
	COMMIT(): antlr.TerminalNode | null;
	COMMITTED(): antlr.TerminalNode | null;
	COMPACT(): antlr.TerminalNode | null;
	COMPLETE(): antlr.TerminalNode | null;
	COMPRESS_TYPE(): antlr.TerminalNode | null;
	CONFIG(): antlr.TerminalNode | null;
	CONNECTION(): antlr.TerminalNode | null;
	CONNECTION_ID(): antlr.TerminalNode | null;
	CONSISTENT(): antlr.TerminalNode | null;
	CONSTRAINTS(): antlr.TerminalNode | null;
	CONVERT(): antlr.TerminalNode | null;
	CONVERT_LSC(): antlr.TerminalNode | null;
	COPY(): antlr.TerminalNode | null;
	COUNT(): antlr.TerminalNode | null;
	CREATION(): antlr.TerminalNode | null;
	CRON(): antlr.TerminalNode | null;
	CURRENT_CATALOG(): antlr.TerminalNode | null;
	CURRENT_DATE(): antlr.TerminalNode | null;
	CURRENT_TIME(): antlr.TerminalNode | null;
	CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	CURRENT_USER(): antlr.TerminalNode | null;
	DATA(): antlr.TerminalNode | null;
	DATE(): antlr.TerminalNode | null;
	DATE_ADD(): antlr.TerminalNode | null;
	DATE_CEIL(): antlr.TerminalNode | null;
	DATE_DIFF(): antlr.TerminalNode | null;
	DATE_FLOOR(): antlr.TerminalNode | null;
	DATE_SUB(): antlr.TerminalNode | null;
	DATEADD(): antlr.TerminalNode | null;
	DATEDIFF(): antlr.TerminalNode | null;
	DATETIME(): antlr.TerminalNode | null;
	DATETIMEV1(): antlr.TerminalNode | null;
	DATETIMEV2(): antlr.TerminalNode | null;
	DATEV1(): antlr.TerminalNode | null;
	DATEV2(): antlr.TerminalNode | null;
	DAY(): antlr.TerminalNode | null;
	DAYS_ADD(): antlr.TerminalNode | null;
	DAYS_SUB(): antlr.TerminalNode | null;
	DECIMAL(): antlr.TerminalNode | null;
	DECIMALV2(): antlr.TerminalNode | null;
	DECIMALV3(): antlr.TerminalNode | null;
	DEFERRED(): antlr.TerminalNode | null;
	DEMAND(): antlr.TerminalNode | null;
	DIAGNOSE(): antlr.TerminalNode | null;
	DISTINCTPC(): antlr.TerminalNode | null;
	DISTINCTPCSA(): antlr.TerminalNode | null;
	DO(): antlr.TerminalNode | null;
	DORIS_INTERNAL_TABLE_ID(): antlr.TerminalNode | null;
	DUAL(): antlr.TerminalNode | null;
	DYNAMIC(): antlr.TerminalNode | null;
	ENABLE(): antlr.TerminalNode | null;
	ENCRYPTKEY(): antlr.TerminalNode | null;
	ENCRYPTKEYS(): antlr.TerminalNode | null;
	END(): antlr.TerminalNode | null;
	ENDS(): antlr.TerminalNode | null;
	ENGINE(): antlr.TerminalNode | null;
	ENGINES(): antlr.TerminalNode | null;
	ERRORS(): antlr.TerminalNode | null;
	EVENTS(): antlr.TerminalNode | null;
	EVERY(): antlr.TerminalNode | null;
	EXCLUDE(): antlr.TerminalNode | null;
	EXPIRED(): antlr.TerminalNode | null;
	EXTERNAL(): antlr.TerminalNode | null;
	FAILED_LOGIN_ATTEMPTS(): antlr.TerminalNode | null;
	FAST(): antlr.TerminalNode | null;
	FEATURE(): antlr.TerminalNode | null;
	FIELDS(): antlr.TerminalNode | null;
	FILE(): antlr.TerminalNode | null;
	FILTER(): antlr.TerminalNode | null;
	FIRST(): antlr.TerminalNode | null;
	FORMAT(): antlr.TerminalNode | null;
	FREE(): antlr.TerminalNode | null;
	FRONTENDS(): antlr.TerminalNode | null;
	FUNCTION(): antlr.TerminalNode | null;
	GENERIC(): antlr.TerminalNode | null;
	GLOBAL(): antlr.TerminalNode | null;
	GRAPH(): antlr.TerminalNode | null;
	GROUPING(): antlr.TerminalNode | null;
	GROUPS(): antlr.TerminalNode | null;
	HASH(): antlr.TerminalNode | null;
	HDFS(): antlr.TerminalNode | null;
	HELP(): antlr.TerminalNode | null;
	HISTOGRAM(): antlr.TerminalNode | null;
	HLL_UNION(): antlr.TerminalNode | null;
	HOSTNAME(): antlr.TerminalNode | null;
	HOTSPOT(): antlr.TerminalNode | null;
	HOUR(): antlr.TerminalNode | null;
	HUB(): antlr.TerminalNode | null;
	IDENTIFIED(): antlr.TerminalNode | null;
	IGNORE(): antlr.TerminalNode | null;
	IMMEDIATE(): antlr.TerminalNode | null;
	INCREMENTAL(): antlr.TerminalNode | null;
	INDEXES(): antlr.TerminalNode | null;
	INVERTED(): antlr.TerminalNode | null;
	IPV4(): antlr.TerminalNode | null;
	IPV6(): antlr.TerminalNode | null;
	IS_NOT_NULL_PRED(): antlr.TerminalNode | null;
	IS_NULL_PRED(): antlr.TerminalNode | null;
	ISNULL(): antlr.TerminalNode | null;
	ISOLATION(): antlr.TerminalNode | null;
	JOB(): antlr.TerminalNode | null;
	JOBS(): antlr.TerminalNode | null;
	JSON(): antlr.TerminalNode | null;
	JSONB(): antlr.TerminalNode | null;
	LABEL(): antlr.TerminalNode | null;
	LAST(): antlr.TerminalNode | null;
	LDAP(): antlr.TerminalNode | null;
	LDAP_ADMIN_PASSWORD(): antlr.TerminalNode | null;
	LEFT_BRACE(): antlr.TerminalNode | null;
	LESS(): antlr.TerminalNode | null;
	LEVEL(): antlr.TerminalNode | null;
	LINES(): antlr.TerminalNode | null;
	LINK(): antlr.TerminalNode | null;
	LOCAL(): antlr.TerminalNode | null;
	LOCALTIME(): antlr.TerminalNode | null;
	LOCALTIMESTAMP(): antlr.TerminalNode | null;
	LOCATION(): antlr.TerminalNode | null;
	LOCK(): antlr.TerminalNode | null;
	LOGICAL(): antlr.TerminalNode | null;
	MANUAL(): antlr.TerminalNode | null;
	MAP(): antlr.TerminalNode | null;
	MATCH_ALL(): antlr.TerminalNode | null;
	MATCH_ANY(): antlr.TerminalNode | null;
	MATCH_PHRASE(): antlr.TerminalNode | null;
	MATCH_PHRASE_EDGE(): antlr.TerminalNode | null;
	MATCH_PHRASE_PREFIX(): antlr.TerminalNode | null;
	MATCH_REGEXP(): antlr.TerminalNode | null;
	MATERIALIZED(): antlr.TerminalNode | null;
	MAX(): antlr.TerminalNode | null;
	MEMO(): antlr.TerminalNode | null;
	MERGE(): antlr.TerminalNode | null;
	MIGRATE(): antlr.TerminalNode | null;
	MIGRATIONS(): antlr.TerminalNode | null;
	MIN(): antlr.TerminalNode | null;
	MINUTE(): antlr.TerminalNode | null;
	MODIFY(): antlr.TerminalNode | null;
	MONTH(): antlr.TerminalNode | null;
	MTMV(): antlr.TerminalNode | null;
	NAME(): antlr.TerminalNode | null;
	NAMES(): antlr.TerminalNode | null;
	NEGATIVE(): antlr.TerminalNode | null;
	NEVER(): antlr.TerminalNode | null;
	NEXT(): antlr.TerminalNode | null;
	NGRAM_BF(): antlr.TerminalNode | null;
	NO(): antlr.TerminalNode | null;
	NON_NULLABLE(): antlr.TerminalNode | null;
	NULLS(): antlr.TerminalNode | null;
	OF(): antlr.TerminalNode | null;
	OFFSET(): antlr.TerminalNode | null;
	ONLY(): antlr.TerminalNode | null;
	OPEN(): antlr.TerminalNode | null;
	OPTIMIZED(): antlr.TerminalNode | null;
	PARAMETER(): antlr.TerminalNode | null;
	PARSED(): antlr.TerminalNode | null;
	PASSWORD(): antlr.TerminalNode | null;
	PASSWORD_EXPIRE(): antlr.TerminalNode | null;
	PASSWORD_HISTORY(): antlr.TerminalNode | null;
	PASSWORD_LOCK_TIME(): antlr.TerminalNode | null;
	PASSWORD_REUSE(): antlr.TerminalNode | null;
	PARTITIONS(): antlr.TerminalNode | null;
	PATH(): antlr.TerminalNode | null;
	PAUSE(): antlr.TerminalNode | null;
	PERCENT(): antlr.TerminalNode | null;
	PERIOD(): antlr.TerminalNode | null;
	PERMISSIVE(): antlr.TerminalNode | null;
	PHYSICAL(): antlr.TerminalNode | null;
	PLAN(): antlr.TerminalNode | null;
	PLUGIN(): antlr.TerminalNode | null;
	PLUGINS(): antlr.TerminalNode | null;
	POLICY(): antlr.TerminalNode | null;
	PRIVILEGES(): antlr.TerminalNode | null;
	PROC(): antlr.TerminalNode | null;
	PROCESS(): antlr.TerminalNode | null;
	PROCESSLIST(): antlr.TerminalNode | null;
	PROFILE(): antlr.TerminalNode | null;
	PROPERTIES(): antlr.TerminalNode | null;
	PROPERTY(): antlr.TerminalNode | null;
	QUANTILE_STATE(): antlr.TerminalNode | null;
	QUANTILE_UNION(): antlr.TerminalNode | null;
	QUERY(): antlr.TerminalNode | null;
	QUOTA(): antlr.TerminalNode | null;
	RANDOM(): antlr.TerminalNode | null;
	RECENT(): antlr.TerminalNode | null;
	RECOVER(): antlr.TerminalNode | null;
	RECYCLE(): antlr.TerminalNode | null;
	REFRESH(): antlr.TerminalNode | null;
	REPEATABLE(): antlr.TerminalNode | null;
	REPLACE(): antlr.TerminalNode | null;
	REPLACE_IF_NOT_NULL(): antlr.TerminalNode | null;
	REPOSITORIES(): antlr.TerminalNode | null;
	REPOSITORY(): antlr.TerminalNode | null;
	RESOURCE(): antlr.TerminalNode | null;
	RESOURCES(): antlr.TerminalNode | null;
	RESTORE(): antlr.TerminalNode | null;
	RESTRICTIVE(): antlr.TerminalNode | null;
	RESUME(): antlr.TerminalNode | null;
	RETURNS(): antlr.TerminalNode | null;
	REWRITTEN(): antlr.TerminalNode | null;
	RIGHT_BRACE(): antlr.TerminalNode | null;
	RLIKE(): antlr.TerminalNode | null;
	ROLLBACK(): antlr.TerminalNode | null;
	ROLLUP(): antlr.TerminalNode | null;
	ROUTINE(): antlr.TerminalNode | null;
	S3(): antlr.TerminalNode | null;
	SAMPLE(): antlr.TerminalNode | null;
	SCHEDULE(): antlr.TerminalNode | null;
	SCHEDULER(): antlr.TerminalNode | null;
	SCHEMA(): antlr.TerminalNode | null;
	SECOND(): antlr.TerminalNode | null;
	SERIALIZABLE(): antlr.TerminalNode | null;
	SEQUENCE(): antlr.TerminalNode | null;
	SESSION(): antlr.TerminalNode | null;
	SHAPE(): antlr.TerminalNode | null;
	SKEW(): antlr.TerminalNode | null;
	SNAPSHOT(): antlr.TerminalNode | null;
	SONAME(): antlr.TerminalNode | null;
	SPLIT(): antlr.TerminalNode | null;
	SQL(): antlr.TerminalNode | null;
	STAGES(): antlr.TerminalNode | null;
	START(): antlr.TerminalNode | null;
	STARTS(): antlr.TerminalNode | null;
	STATS(): antlr.TerminalNode | null;
	STATUS(): antlr.TerminalNode | null;
	STOP(): antlr.TerminalNode | null;
	STORAGE(): antlr.TerminalNode | null;
	STREAM(): antlr.TerminalNode | null;
	STREAMING(): antlr.TerminalNode | null;
	STRING(): antlr.TerminalNode | null;
	STRUCT(): antlr.TerminalNode | null;
	SUBDATE(): antlr.TerminalNode | null;
	SUM(): antlr.TerminalNode | null;
	TABLES(): antlr.TerminalNode | null;
	TASK(): antlr.TerminalNode | null;
	TASKS(): antlr.TerminalNode | null;
	TEMPORARY(): antlr.TerminalNode | null;
	TEXT(): antlr.TerminalNode | null;
	THAN(): antlr.TerminalNode | null;
	TIME(): antlr.TerminalNode | null;
	TIMESTAMP(): antlr.TerminalNode | null;
	TIMESTAMPADD(): antlr.TerminalNode | null;
	TIMESTAMPDIFF(): antlr.TerminalNode | null;
	TRANSACTION(): antlr.TerminalNode | null;
	TREE(): antlr.TerminalNode | null;
	TRIGGERS(): antlr.TerminalNode | null;
	TRUNCATE(): antlr.TerminalNode | null;
	TYPE(): antlr.TerminalNode | null;
	TYPES(): antlr.TerminalNode | null;
	UNCOMMITTED(): antlr.TerminalNode | null;
	UNLOCK(): antlr.TerminalNode | null;
	UP(): antlr.TerminalNode | null;
	USER(): antlr.TerminalNode | null;
	VALUE(): antlr.TerminalNode | null;
	VARCHAR(): antlr.TerminalNode | null;
	VARIABLES(): antlr.TerminalNode | null;
	VARIANT(): antlr.TerminalNode | null;
	VAULT(): antlr.TerminalNode | null;
	VERBOSE(): antlr.TerminalNode | null;
	VERSION(): antlr.TerminalNode | null;
	VIEW(): antlr.TerminalNode | null;
	WARM(): antlr.TerminalNode | null;
	WARNINGS(): antlr.TerminalNode | null;
	WEEK(): antlr.TerminalNode | null;
	WORK(): antlr.TerminalNode | null;
	YEAR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: DorisParserListener): void;
	exitRule(listener: DorisParserListener): void;
	accept<Result>(visitor: DorisParserVisitor<Result>): Result | null;
}
