import * as antlr from 'antlr4ng';
import { Token } from 'antlr4ng';
import { FlinkSqlParserListener } from './FlinkSqlParserListener.js';
import { FlinkSqlParserVisitor } from './FlinkSqlParserVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class FlinkSqlParser extends SQLParserBase {
	static readonly SPACE = 1;
	static readonly COMMENT_INPUT = 2;
	static readonly LINE_COMMENT = 3;
	static readonly KW_ABS = 4;
	static readonly KW_ALL = 5;
	static readonly KW_ALLOCATE = 6;
	static readonly KW_ALLOW = 7;
	static readonly KW_ALTER = 8;
	static readonly KW_ANALYZE = 9;
	static readonly KW_AND = 10;
	static readonly KW_ANY = 11;
	static readonly KW_ARE = 12;
	static readonly KW_ARRAY = 13;
	static readonly KW_ARRAY_AGG = 14;
	static readonly KW_ARRAY_CONCAT_AGG = 15;
	static readonly KW_ARRAY_MAX_CARDINALITY = 16;
	static readonly KW_AS = 17;
	static readonly KW_ASENSITIVE = 18;
	static readonly KW_ASYMMETRIC = 19;
	static readonly KW_AT = 20;
	static readonly KW_ATOMIC = 21;
	static readonly KW_AUTHORIZATION = 22;
	static readonly KW_AVG = 23;
	static readonly KW_BEGIN = 24;
	static readonly KW_BEGIN_FRAME = 25;
	static readonly KW_BEGIN_PARTITION = 26;
	static readonly KW_BETWEEN = 27;
	static readonly KW_BIGINT = 28;
	static readonly KW_BINARY = 29;
	static readonly KW_BIT = 30;
	static readonly KW_BLOB = 31;
	static readonly KW_BOOLEAN = 32;
	static readonly KW_BOTH = 33;
	static readonly KW_BY = 34;
	static readonly KW_BYTES = 35;
	static readonly KW_CALL = 36;
	static readonly KW_CALLED = 37;
	static readonly KW_CARDINALITY = 38;
	static readonly KW_CASCADED = 39;
	static readonly KW_CASE = 40;
	static readonly KW_CAST = 41;
	static readonly KW_CATALOGS = 42;
	static readonly KW_CEIL = 43;
	static readonly KW_CEILING = 44;
	static readonly KW_CHANGELOG_MODE = 45;
	static readonly KW_CHAR = 46;
	static readonly KW_CHARACTER = 47;
	static readonly KW_CHARACTER_LENGTH = 48;
	static readonly KW_CHAR_LENGTH = 49;
	static readonly KW_CHECK = 50;
	static readonly KW_CLASSIFIER = 51;
	static readonly KW_CLOB = 52;
	static readonly KW_CLOSE = 53;
	static readonly KW_COALESCE = 54;
	static readonly KW_COLLATE = 55;
	static readonly KW_COLLECT = 56;
	static readonly KW_COLUMN = 57;
	static readonly KW_COLUMNS = 58;
	static readonly KW_COMMENT = 59;
	static readonly KW_COMMIT = 60;
	static readonly KW_COMPUTE = 61;
	static readonly KW_CONDITION = 62;
	static readonly KW_CONNECT = 63;
	static readonly KW_CONSTRAINT = 64;
	static readonly KW_CONTAINS = 65;
	static readonly KW_CONVERT = 66;
	static readonly KW_CORR = 67;
	static readonly KW_CORRESPONDING = 68;
	static readonly KW_COUNT = 69;
	static readonly KW_COVAR_POP = 70;
	static readonly KW_COVAR_SAMP = 71;
	static readonly KW_CREATE = 72;
	static readonly KW_CROSS = 73;
	static readonly KW_CUBE = 74;
	static readonly KW_CUME_DIST = 75;
	static readonly KW_CURRENT = 76;
	static readonly KW_CURRENT_CATALOG = 77;
	static readonly KW_CURRENT_DATE = 78;
	static readonly KW_CURRENT_DEFAULT_TRANSFORM_GROUP = 79;
	static readonly KW_CURRENT_PATH = 80;
	static readonly KW_CURRENT_ROLE = 81;
	static readonly KW_CURRENT_ROW = 82;
	static readonly KW_CURRENT_SCHEMA = 83;
	static readonly KW_CURRENT_TIME = 84;
	static readonly KW_CURRENT_TIMESTAMP = 85;
	static readonly KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE = 86;
	static readonly KW_CURRENT_USER = 87;
	static readonly KW_CURSOR = 88;
	static readonly KW_CYCLE = 89;
	static readonly KW_DATABASES = 90;
	static readonly KW_DATE = 91;
	static readonly KW_DATETIME = 92;
	static readonly KW_DATETIME_DIFF = 93;
	static readonly KW_DATETIME_TRUNC = 94;
	static readonly KW_DATE_DIFF = 95;
	static readonly KW_DATE_TRUNC = 96;
	static readonly KW_DAY = 97;
	static readonly KW_DAYOFWEEK = 98;
	static readonly KW_DAYOFYEAR = 99;
	static readonly KW_DEALLOCATE = 100;
	static readonly KW_DEC = 101;
	static readonly KW_DECIMAL = 102;
	static readonly KW_DECLARE = 103;
	static readonly KW_DEFAULT = 104;
	static readonly KW_DEFINE = 105;
	static readonly KW_DELETE = 106;
	static readonly KW_DENSE_RANK = 107;
	static readonly KW_DEREF = 108;
	static readonly KW_DESCRIBE = 109;
	static readonly KW_DETERMINISTIC = 110;
	static readonly KW_DISALLOW = 111;
	static readonly KW_DISCONNECT = 112;
	static readonly KW_DISTINCT = 113;
	static readonly KW_DOT = 114;
	static readonly KW_DOUBLE = 115;
	static readonly KW_DROP = 116;
	static readonly KW_DYNAMIC = 117;
	static readonly KW_EACH = 118;
	static readonly KW_ELEMENT = 119;
	static readonly KW_ELSE = 120;
	static readonly KW_EMPTY = 121;
	static readonly KW_END = 122;
	static readonly KW_END_FRAME = 123;
	static readonly KW_END_PARTITION = 124;
	static readonly KW_ENFORCED = 125;
	static readonly KW_EQUALS = 126;
	static readonly KW_ESCAPE = 127;
	static readonly KW_ESTIMATED_COST = 128;
	static readonly KW_EVERY = 129;
	static readonly KW_EXCEPT = 130;
	static readonly KW_EXEC = 131;
	static readonly KW_EXECUTE = 132;
	static readonly KW_EXISTS = 133;
	static readonly KW_EXP = 134;
	static readonly KW_EXPLAIN = 135;
	static readonly KW_EXTEND = 136;
	static readonly KW_EXTENDED = 137;
	static readonly KW_EXTERNAL = 138;
	static readonly KW_EXTRACT = 139;
	static readonly KW_FALSE = 140;
	static readonly KW_FETCH = 141;
	static readonly KW_FILTER = 142;
	static readonly KW_FIRST_VALUE = 143;
	static readonly KW_FLOAT = 144;
	static readonly KW_FLOOR = 145;
	static readonly KW_FOR = 146;
	static readonly KW_FOREIGN = 147;
	static readonly KW_FRAME_ROW = 148;
	static readonly KW_FREE = 149;
	static readonly KW_FRIDAY = 150;
	static readonly KW_FROM = 151;
	static readonly KW_FULL = 152;
	static readonly KW_FUNCTION = 153;
	static readonly KW_FUNCTIONS = 154;
	static readonly KW_FUSION = 155;
	static readonly KW_GET = 156;
	static readonly KW_GLOBAL = 157;
	static readonly KW_GRANT = 158;
	static readonly KW_GROUP = 159;
	static readonly KW_GROUPING = 160;
	static readonly KW_GROUPS = 161;
	static readonly KW_GROUP_CONCAT = 162;
	static readonly KW_HAVING = 163;
	static readonly KW_HOLD = 164;
	static readonly KW_HOUR = 165;
	static readonly KW_IDENTITY = 166;
	static readonly KW_IF = 167;
	static readonly KW_ILIKE = 168;
	static readonly KW_IMPORT = 169;
	static readonly KW_IN = 170;
	static readonly KW_INCLUDE = 171;
	static readonly KW_INDICATOR = 172;
	static readonly KW_INITIAL = 173;
	static readonly KW_INNER = 174;
	static readonly KW_INOUT = 175;
	static readonly KW_INSENSITIVE = 176;
	static readonly KW_INSERT = 177;
	static readonly KW_INT = 178;
	static readonly KW_INTEGER = 179;
	static readonly KW_INTERSECT = 180;
	static readonly KW_INTERSECTION = 181;
	static readonly KW_INTERVAL = 182;
	static readonly KW_INTO = 183;
	static readonly KW_IS = 184;
	static readonly KW_JOIN = 185;
	static readonly KW_JSON_ARRAY = 186;
	static readonly KW_JSON_ARRAYAGG = 187;
	static readonly KW_JSON_EXECUTION_PLAN = 188;
	static readonly KW_JSON_EXISTS = 189;
	static readonly KW_JSON_OBJECT = 190;
	static readonly KW_JSON_OBJECTAGG = 191;
	static readonly KW_JSON_QUERY = 192;
	static readonly KW_JSON_VALUE = 193;
	static readonly KW_LAG = 194;
	static readonly KW_LANGUAGE = 195;
	static readonly KW_LARGE = 196;
	static readonly KW_LAST_VALUE = 197;
	static readonly KW_LATERAL = 198;
	static readonly KW_LEAD = 199;
	static readonly KW_LEADING = 200;
	static readonly KW_LEFT = 201;
	static readonly KW_LIKE = 202;
	static readonly KW_LIKE_REGEX = 203;
	static readonly KW_LIMIT = 204;
	static readonly KW_LN = 205;
	static readonly KW_LOCAL = 206;
	static readonly KW_LOCALTIME = 207;
	static readonly KW_LOCALTIMESTAMP = 208;
	static readonly KW_LOWER = 209;
	static readonly KW_MATCH = 210;
	static readonly KW_MATCHES = 211;
	static readonly KW_MATCH_NUMBER = 212;
	static readonly KW_MATCH_RECOGNIZE = 213;
	static readonly KW_MAX = 214;
	static readonly KW_MEASURES = 215;
	static readonly KW_MEMBER = 216;
	static readonly KW_MERGE = 217;
	static readonly KW_METADATA = 218;
	static readonly KW_METHOD = 219;
	static readonly KW_MIN = 220;
	static readonly KW_MINUS = 221;
	static readonly KW_MINUTE = 222;
	static readonly KW_MOD = 223;
	static readonly KW_MODIFIES = 224;
	static readonly KW_MODIFY = 225;
	static readonly KW_MODULE = 226;
	static readonly KW_MODULES = 227;
	static readonly KW_MONDAY = 228;
	static readonly KW_MONTH = 229;
	static readonly KW_MORE = 230;
	static readonly KW_MULTISET = 231;
	static readonly KW_NATIONAL = 232;
	static readonly KW_NATURAL = 233;
	static readonly KW_NCHAR = 234;
	static readonly KW_NCLOB = 235;
	static readonly KW_NEW = 236;
	static readonly KW_NEXT = 237;
	static readonly KW_NO = 238;
	static readonly KW_NONE = 239;
	static readonly KW_NORMALIZE = 240;
	static readonly KW_NOT = 241;
	static readonly KW_NTH_VALUE = 242;
	static readonly KW_NTILE = 243;
	static readonly KW_NULL = 244;
	static readonly KW_NULLIF = 245;
	static readonly KW_NUMERIC = 246;
	static readonly KW_OCCURRENCES_REGEX = 247;
	static readonly KW_OCTET_LENGTH = 248;
	static readonly KW_OF = 249;
	static readonly KW_OFFSET = 250;
	static readonly KW_OLD = 251;
	static readonly KW_OMIT = 252;
	static readonly KW_ON = 253;
	static readonly KW_ONE = 254;
	static readonly KW_ONLY = 255;
	static readonly KW_OPEN = 256;
	static readonly KW_OR = 257;
	static readonly KW_ORDER = 258;
	static readonly KW_ORDINAL = 259;
	static readonly KW_OUT = 260;
	static readonly KW_OUTER = 261;
	static readonly KW_OVER = 262;
	static readonly KW_OVERLAPS = 263;
	static readonly KW_OVERLAY = 264;
	static readonly KW_OVERWRITE = 265;
	static readonly KW_OVERWRITING = 266;
	static readonly KW_PARAMETER = 267;
	static readonly KW_PARTITION = 268;
	static readonly KW_PARTITIONED = 269;
	static readonly KW_PARTITIONS = 270;
	static readonly KW_PATTERN = 271;
	static readonly KW_PER = 272;
	static readonly KW_PERCENT = 273;
	static readonly KW_PERCENTILE_CONT = 274;
	static readonly KW_PERCENTILE_DISC = 275;
	static readonly KW_PERCENT_RANK = 276;
	static readonly KW_PERIOD = 277;
	static readonly KW_PERMUTE = 278;
	static readonly KW_PIVOT = 279;
	static readonly KW_PORTION = 280;
	static readonly KW_POSITION = 281;
	static readonly KW_POSITION_REGEX = 282;
	static readonly KW_POWER = 283;
	static readonly KW_PRECEDES = 284;
	static readonly KW_PRECISION = 285;
	static readonly KW_PREPARE = 286;
	static readonly KW_PREV = 287;
	static readonly KW_PRIMARY = 288;
	static readonly KW_PROCEDURE = 289;
	static readonly KW_QUALIFY = 290;
	static readonly KW_QUARTERS = 291;
	static readonly KW_RANGE = 292;
	static readonly KW_RANK = 293;
	static readonly KW_RAW = 294;
	static readonly KW_READS = 295;
	static readonly KW_REAL = 296;
	static readonly KW_RECURSIVE = 297;
	static readonly KW_REF = 298;
	static readonly KW_REFERENCES = 299;
	static readonly KW_REFERENCING = 300;
	static readonly KW_REGR_AVGX = 301;
	static readonly KW_REGR_AVGY = 302;
	static readonly KW_REGR_COUNT = 303;
	static readonly KW_REGR_INTERCEPT = 304;
	static readonly KW_REGR_R2 = 305;
	static readonly KW_REGR_SLOPE = 306;
	static readonly KW_REGR_SXX = 307;
	static readonly KW_REGR_SXY = 308;
	static readonly KW_REGR_SYY = 309;
	static readonly KW_RELEASE = 310;
	static readonly KW_RENAME = 311;
	static readonly KW_RESET = 312;
	static readonly KW_RESULT = 313;
	static readonly KW_RETURN = 314;
	static readonly KW_RETURNS = 315;
	static readonly KW_REVOKE = 316;
	static readonly KW_RIGHT = 317;
	static readonly KW_RLIKE = 318;
	static readonly KW_ROLLBACK = 319;
	static readonly KW_ROLLUP = 320;
	static readonly KW_ROW = 321;
	static readonly KW_ROWS = 322;
	static readonly KW_ROW_NUMBER = 323;
	static readonly KW_RUNNING = 324;
	static readonly KW_SAFE_CAST = 325;
	static readonly KW_SAFE_OFFSET = 326;
	static readonly KW_SAFE_ORDINAL = 327;
	static readonly KW_SATURDAY = 328;
	static readonly KW_SAVEPOINT = 329;
	static readonly KW_SCALA = 330;
	static readonly KW_SCOPE = 331;
	static readonly KW_SCROLL = 332;
	static readonly KW_SEARCH = 333;
	static readonly KW_SECOND = 334;
	static readonly KW_SEEK = 335;
	static readonly KW_SELECT = 336;
	static readonly KW_SENSITIVE = 337;
	static readonly KW_SEPARATOR = 338;
	static readonly KW_SESSION_USER = 339;
	static readonly KW_SET = 340;
	static readonly KW_SHOW = 341;
	static readonly KW_SIMILAR = 342;
	static readonly KW_SKIP = 343;
	static readonly KW_SMALLINT = 344;
	static readonly KW_SOME = 345;
	static readonly KW_SPECIFIC = 346;
	static readonly KW_SPECIFICTYPE = 347;
	static readonly KW_SQL = 348;
	static readonly KW_SQLEXCEPTION = 349;
	static readonly KW_SQLSTATE = 350;
	static readonly KW_SQLWARNING = 351;
	static readonly KW_SQRT = 352;
	static readonly KW_START = 353;
	static readonly KW_STATEMENT = 354;
	static readonly KW_STATIC = 355;
	static readonly KW_STATISTICS = 356;
	static readonly KW_STDDEV_POP = 357;
	static readonly KW_STDDEV_SAMP = 358;
	static readonly KW_STREAM = 359;
	static readonly KW_STRING = 360;
	static readonly KW_STRING_AGG = 361;
	static readonly KW_SUBMULTISET = 362;
	static readonly KW_SUBSET = 363;
	static readonly KW_SUBSTRING = 364;
	static readonly KW_SUBSTRING_REGEX = 365;
	static readonly KW_SUCCEEDS = 366;
	static readonly KW_SUM = 367;
	static readonly KW_SUNDAY = 368;
	static readonly KW_SYMMETRIC = 369;
	static readonly KW_SYSTEM = 370;
	static readonly KW_SYSTEM_TIME = 371;
	static readonly KW_SYSTEM_USER = 372;
	static readonly KW_TABLE = 373;
	static readonly KW_TABLES = 374;
	static readonly KW_TABLESAMPLE = 375;
	static readonly KW_THEN = 376;
	static readonly KW_THURSDAY = 377;
	static readonly KW_TIME = 378;
	static readonly KW_TIMESTAMP = 379;
	static readonly KW_TIMESTAMP_DIFF = 380;
	static readonly KW_TIMESTAMP_LTZ = 381;
	static readonly KW_TIMESTAMP_TRUNC = 382;
	static readonly KW_TIMEZONE_HOUR = 383;
	static readonly KW_TIMEZONE_MINUTE = 384;
	static readonly KW_TIME_DIFF = 385;
	static readonly KW_TIME_TRUNC = 386;
	static readonly KW_TINYINT = 387;
	static readonly KW_TO = 388;
	static readonly KW_TRAILING = 389;
	static readonly KW_TRANSLATE = 390;
	static readonly KW_TRANSLATE_REGEX = 391;
	static readonly KW_TRANSLATION = 392;
	static readonly KW_TREAT = 393;
	static readonly KW_TRIGGER = 394;
	static readonly KW_TRIM = 395;
	static readonly KW_TRIM_ARRAY = 396;
	static readonly KW_TRUE = 397;
	static readonly KW_TRUNCATE = 398;
	static readonly KW_TRY_CAST = 399;
	static readonly KW_TUESDAY = 400;
	static readonly KW_UESCAPE = 401;
	static readonly KW_UNION = 402;
	static readonly KW_UNIQUE = 403;
	static readonly KW_UNKNOWN = 404;
	static readonly KW_UNNEST = 405;
	static readonly KW_UNPIVOT = 406;
	static readonly KW_UPDATE = 407;
	static readonly KW_UPPER = 408;
	static readonly KW_UPSERT = 409;
	static readonly KW_USE = 410;
	static readonly KW_USER = 411;
	static readonly KW_USING = 412;
	static readonly KW_VALUE = 413;
	static readonly KW_VALUES = 414;
	static readonly KW_VALUE_OF = 415;
	static readonly KW_VARBINARY = 416;
	static readonly KW_VARCHAR = 417;
	static readonly KW_VARYING = 418;
	static readonly KW_VAR_POP = 419;
	static readonly KW_VAR_SAMP = 420;
	static readonly KW_VERSIONING = 421;
	static readonly KW_VIEWS = 422;
	static readonly KW_VIRTUAL = 423;
	static readonly KW_WATERMARK = 424;
	static readonly KW_WATERMARKS = 425;
	static readonly KW_WEDNESDAY = 426;
	static readonly KW_WEEKS = 427;
	static readonly KW_WHEN = 428;
	static readonly KW_WHENEVER = 429;
	static readonly KW_WHERE = 430;
	static readonly KW_WIDTH_BUCKET = 431;
	static readonly KW_WINDOW = 432;
	static readonly KW_WITH = 433;
	static readonly KW_WITHIN = 434;
	static readonly KW_WITHOUT = 435;
	static readonly KW_YEAR = 436;
	static readonly KW_ADD = 437;
	static readonly KW_AFTER = 438;
	static readonly KW_ASC = 439;
	static readonly KW_CASCADE = 440;
	static readonly KW_CATALOG = 441;
	static readonly KW_CENTURY = 442;
	static readonly KW_CONFIG = 443;
	static readonly KW_CONSTRAINTS = 444;
	static readonly KW_CUMULATE = 445;
	static readonly KW_DATA = 446;
	static readonly KW_DATABASE = 447;
	static readonly KW_DAYS = 448;
	static readonly KW_DECADE = 449;
	static readonly KW_DESC = 450;
	static readonly KW_DESCRIPTOR = 451;
	static readonly KW_DIV = 452;
	static readonly KW_ENGINE = 453;
	static readonly KW_EPOCH = 454;
	static readonly KW_EXCLUDING = 455;
	static readonly KW_FILE = 456;
	static readonly KW_FIRST = 457;
	static readonly KW_GENERATED = 458;
	static readonly KW_HOP = 459;
	static readonly KW_HOURS = 460;
	static readonly KW_IGNORE = 461;
	static readonly KW_INCLUDING = 462;
	static readonly KW_JAR = 463;
	static readonly KW_JARS = 464;
	static readonly KW_JAVA = 465;
	static readonly KW_KEY = 466;
	static readonly KW_LAST = 467;
	static readonly KW_LOAD = 468;
	static readonly KW_MAP = 469;
	static readonly KW_MICROSECOND = 470;
	static readonly KW_MILLENNIUM = 471;
	static readonly KW_MILLISECOND = 472;
	static readonly KW_MINUTES = 473;
	static readonly KW_MONTHS = 474;
	static readonly KW_NANOSECOND = 475;
	static readonly KW_NULLS = 476;
	static readonly KW_OPTIONS = 477;
	static readonly KW_PAST = 478;
	static readonly KW_PLAN = 479;
	static readonly KW_PRECEDING = 480;
	static readonly KW_PYTHON = 481;
	static readonly KW_PYTHON_ARCHIVES = 482;
	static readonly KW_PYTHON_DEPENDENCIES = 483;
	static readonly KW_PYTHON_FILES = 484;
	static readonly KW_PYTHON_JAR = 485;
	static readonly KW_PYTHON_PARAMETER = 486;
	static readonly KW_PYTHON_REQUIREMENTS = 487;
	static readonly KW_QUARTER = 488;
	static readonly KW_REMOVE = 489;
	static readonly KW_RESTRICT = 490;
	static readonly KW_SECONDS = 491;
	static readonly KW_SESSION = 492;
	static readonly KW_SETS = 493;
	static readonly KW_SIZE = 494;
	static readonly KW_SLIDE = 495;
	static readonly KW_STEP = 496;
	static readonly KW_TEMPORARY = 497;
	static readonly KW_TIMECOL = 498;
	static readonly KW_TUMBLE = 499;
	static readonly KW_UNLOAD = 500;
	static readonly KW_VIEW = 501;
	static readonly KW_WEEK = 502;
	static readonly KW_YEARS = 503;
	static readonly KW_ZONE = 504;
	static readonly EQUAL_SYMBOL = 505;
	static readonly GREATER_SYMBOL = 506;
	static readonly LESS_SYMBOL = 507;
	static readonly EXCLAMATION_SYMBOL = 508;
	static readonly BIT_NOT_OP = 509;
	static readonly BIT_OR_OP = 510;
	static readonly BIT_AND_OP = 511;
	static readonly BIT_XOR_OP = 512;
	static readonly DOT = 513;
	static readonly LS_BRACKET = 514;
	static readonly RS_BRACKET = 515;
	static readonly LR_BRACKET = 516;
	static readonly RR_BRACKET = 517;
	static readonly LB_BRACKET = 518;
	static readonly RB_BRACKET = 519;
	static readonly COMMA = 520;
	static readonly SEMICOLON = 521;
	static readonly AT_SIGN = 522;
	static readonly SINGLE_QUOTE_SYMB = 523;
	static readonly DOUBLE_QUOTE_SYMB = 524;
	static readonly REVERSE_QUOTE_SYMB = 525;
	static readonly COLON_SYMB = 526;
	static readonly ASTERISK_SIGN = 527;
	static readonly UNDERLINE_SIGN = 528;
	static readonly HYPNEN_SIGN = 529;
	static readonly ADD_SIGN = 530;
	static readonly PENCENT_SIGN = 531;
	static readonly DOUBLE_VERTICAL_SIGN = 532;
	static readonly DOUBLE_HYPNEN_SIGN = 533;
	static readonly SLASH_SIGN = 534;
	static readonly QUESTION_MARK_SIGN = 535;
	static readonly DOUBLE_RIGHT_ARROW = 536;
	static readonly STRING_LITERAL = 537;
	static readonly DIG_LITERAL = 538;
	static readonly REAL_LITERAL = 539;
	static readonly BIT_STRING = 540;
	static readonly ID_LITERAL = 541;
	static readonly RULE_program = 0;
	static readonly RULE_singleStatement = 1;
	static readonly RULE_sqlStatement = 2;
	static readonly RULE_emptyStatement = 3;
	static readonly RULE_ddlStatement = 4;
	static readonly RULE_dmlStatement = 5;
	static readonly RULE_describeStatement = 6;
	static readonly RULE_explainStatement = 7;
	static readonly RULE_explainDetails = 8;
	static readonly RULE_explainDetail = 9;
	static readonly RULE_useStatement = 10;
	static readonly RULE_useModuleStatement = 11;
	static readonly RULE_showStatememt = 12;
	static readonly RULE_loadStatement = 13;
	static readonly RULE_unloadStatememt = 14;
	static readonly RULE_setStatememt = 15;
	static readonly RULE_resetStatememt = 16;
	static readonly RULE_jarStatememt = 17;
	static readonly RULE_dtAddStatement = 18;
	static readonly RULE_dtFilePath = 19;
	static readonly RULE_createTable = 20;
	static readonly RULE_simpleCreateTable = 21;
	static readonly RULE_createTableAsSelect = 22;
	static readonly RULE_columnOptionDefinition = 23;
	static readonly RULE_physicalColumnDefinition = 24;
	static readonly RULE_columnNameCreate = 25;
	static readonly RULE_columnName = 26;
	static readonly RULE_columnNameList = 27;
	static readonly RULE_columnType = 28;
	static readonly RULE_lengthOneDimension = 29;
	static readonly RULE_lengthTwoOptionalDimension = 30;
	static readonly RULE_lengthTwoStringDimension = 31;
	static readonly RULE_lengthOneTypeDimension = 32;
	static readonly RULE_mapTypeDimension = 33;
	static readonly RULE_rowTypeDimension = 34;
	static readonly RULE_columnConstraint = 35;
	static readonly RULE_commentSpec = 36;
	static readonly RULE_metadataColumnDefinition = 37;
	static readonly RULE_metadataKey = 38;
	static readonly RULE_computedColumnDefinition = 39;
	static readonly RULE_computedColumnExpression = 40;
	static readonly RULE_watermarkDefinition = 41;
	static readonly RULE_tableConstraint = 42;
	static readonly RULE_constraintName = 43;
	static readonly RULE_selfDefinitionClause = 44;
	static readonly RULE_partitionDefinition = 45;
	static readonly RULE_transformList = 46;
	static readonly RULE_transform = 47;
	static readonly RULE_transformArgument = 48;
	static readonly RULE_likeDefinition = 49;
	static readonly RULE_likeOption = 50;
	static readonly RULE_createCatalog = 51;
	static readonly RULE_createDatabase = 52;
	static readonly RULE_createView = 53;
	static readonly RULE_createFunction = 54;
	static readonly RULE_usingClause = 55;
	static readonly RULE_jarFileName = 56;
	static readonly RULE_alterTable = 57;
	static readonly RULE_renameDefinition = 58;
	static readonly RULE_setKeyValueDefinition = 59;
	static readonly RULE_addConstraint = 60;
	static readonly RULE_dropConstraint = 61;
	static readonly RULE_addUnique = 62;
	static readonly RULE_notForced = 63;
	static readonly RULE_alertView = 64;
	static readonly RULE_alterDatabase = 65;
	static readonly RULE_alterFunction = 66;
	static readonly RULE_dropCatalog = 67;
	static readonly RULE_dropTable = 68;
	static readonly RULE_dropDatabase = 69;
	static readonly RULE_dropView = 70;
	static readonly RULE_dropFunction = 71;
	static readonly RULE_insertStatement = 72;
	static readonly RULE_insertSimpleStatement = 73;
	static readonly RULE_insertPartitionDefinition = 74;
	static readonly RULE_valuesDefinition = 75;
	static readonly RULE_valuesRowDefinition = 76;
	static readonly RULE_insertMulStatementCompatibility = 77;
	static readonly RULE_insertMulStatement = 78;
	static readonly RULE_queryStatement = 79;
	static readonly RULE_valuesCaluse = 80;
	static readonly RULE_withClause = 81;
	static readonly RULE_withItem = 82;
	static readonly RULE_withItemName = 83;
	static readonly RULE_selectStatement = 84;
	static readonly RULE_selectClause = 85;
	static readonly RULE_projectItemDefinition = 86;
	static readonly RULE_overWindowItem = 87;
	static readonly RULE_fromClause = 88;
	static readonly RULE_tableExpression = 89;
	static readonly RULE_tableReference = 90;
	static readonly RULE_tablePrimary = 91;
	static readonly RULE_systemTimePeriod = 92;
	static readonly RULE_dateTimeExpression = 93;
	static readonly RULE_inlineDataValueClause = 94;
	static readonly RULE_windoTVFClause = 95;
	static readonly RULE_windowTVFExression = 96;
	static readonly RULE_windoTVFName = 97;
	static readonly RULE_windowTVFParam = 98;
	static readonly RULE_timeIntervalParamName = 99;
	static readonly RULE_columnDescriptor = 100;
	static readonly RULE_joinCondition = 101;
	static readonly RULE_whereClause = 102;
	static readonly RULE_groupByClause = 103;
	static readonly RULE_groupItemDefinition = 104;
	static readonly RULE_groupingSets = 105;
	static readonly RULE_groupingSetsNotaionName = 106;
	static readonly RULE_groupWindowFunction = 107;
	static readonly RULE_groupWindowFunctionName = 108;
	static readonly RULE_timeAttrColumn = 109;
	static readonly RULE_havingClause = 110;
	static readonly RULE_windowClause = 111;
	static readonly RULE_namedWindow = 112;
	static readonly RULE_windowSpec = 113;
	static readonly RULE_matchRecognizeClause = 114;
	static readonly RULE_orderByCaluse = 115;
	static readonly RULE_orderItemDefition = 116;
	static readonly RULE_limitClause = 117;
	static readonly RULE_partitionByClause = 118;
	static readonly RULE_quantifiers = 119;
	static readonly RULE_measuresClause = 120;
	static readonly RULE_patternDefination = 121;
	static readonly RULE_patternVariable = 122;
	static readonly RULE_outputMode = 123;
	static readonly RULE_afterMatchStrategy = 124;
	static readonly RULE_patternVariablesDefination = 125;
	static readonly RULE_windowFrame = 126;
	static readonly RULE_frameBound = 127;
	static readonly RULE_withinClause = 128;
	static readonly RULE_expression = 129;
	static readonly RULE_booleanExpression = 130;
	static readonly RULE_predicate = 131;
	static readonly RULE_likePredicate = 132;
	static readonly RULE_valueExpression = 133;
	static readonly RULE_primaryExpression = 134;
	static readonly RULE_functionNameCreate = 135;
	static readonly RULE_functionName = 136;
	static readonly RULE_functionParam = 137;
	static readonly RULE_dereferenceDefinition = 138;
	static readonly RULE_correlationName = 139;
	static readonly RULE_qualifiedName = 140;
	static readonly RULE_timeIntervalExpression = 141;
	static readonly RULE_errorCapturingMultiUnitsInterval = 142;
	static readonly RULE_multiUnitsInterval = 143;
	static readonly RULE_errorCapturingUnitToUnitInterval = 144;
	static readonly RULE_unitToUnitInterval = 145;
	static readonly RULE_intervalValue = 146;
	static readonly RULE_tableAlias = 147;
	static readonly RULE_errorCapturingIdentifier = 148;
	static readonly RULE_errorCapturingIdentifierExtra = 149;
	static readonly RULE_identifierList = 150;
	static readonly RULE_identifierSeq = 151;
	static readonly RULE_identifier = 152;
	static readonly RULE_unquotedIdentifier = 153;
	static readonly RULE_quotedIdentifier = 154;
	static readonly RULE_whenClause = 155;
	static readonly RULE_catalogPath = 156;
	static readonly RULE_catalogPathCreate = 157;
	static readonly RULE_databasePath = 158;
	static readonly RULE_databasePathCreate = 159;
	static readonly RULE_tablePathCreate = 160;
	static readonly RULE_tablePath = 161;
	static readonly RULE_viewPath = 162;
	static readonly RULE_viewPathCreate = 163;
	static readonly RULE_uid = 164;
	static readonly RULE_withOption = 165;
	static readonly RULE_ifNotExists = 166;
	static readonly RULE_ifExists = 167;
	static readonly RULE_tablePropertyList = 168;
	static readonly RULE_tableProperty = 169;
	static readonly RULE_tablePropertyKey = 170;
	static readonly RULE_tablePropertyValue = 171;
	static readonly RULE_logicalOperator = 172;
	static readonly RULE_comparisonOperator = 173;
	static readonly RULE_bitOperator = 174;
	static readonly RULE_mathOperator = 175;
	static readonly RULE_unaryOperator = 176;
	static readonly RULE_constant = 177;
	static readonly RULE_timePointLiteral = 178;
	static readonly RULE_stringLiteral = 179;
	static readonly RULE_decimalLiteral = 180;
	static readonly RULE_booleanLiteral = 181;
	static readonly RULE_setQuantifier = 182;
	static readonly RULE_timePointUnit = 183;
	static readonly RULE_timeIntervalUnit = 184;
	static readonly RULE_reservedKeywordsUsedAsFuncParam = 185;
	static readonly RULE_reservedKeywordsUsedAsFuncName = 186;
	static readonly RULE_nonReservedKeywords = 187;
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
	emptyStatement(): EmptyStatementContext;
	ddlStatement(): DdlStatementContext;
	dmlStatement(): DmlStatementContext;
	describeStatement(): DescribeStatementContext;
	explainStatement(): ExplainStatementContext;
	explainDetails(): ExplainDetailsContext;
	explainDetail(): ExplainDetailContext;
	useStatement(): UseStatementContext;
	useModuleStatement(): UseModuleStatementContext;
	showStatememt(): ShowStatememtContext;
	loadStatement(): LoadStatementContext;
	unloadStatememt(): UnloadStatememtContext;
	setStatememt(): SetStatememtContext;
	resetStatememt(): ResetStatememtContext;
	jarStatememt(): JarStatememtContext;
	dtAddStatement(): DtAddStatementContext;
	dtFilePath(): DtFilePathContext;
	createTable(): CreateTableContext;
	simpleCreateTable(): SimpleCreateTableContext;
	createTableAsSelect(): CreateTableAsSelectContext;
	columnOptionDefinition(): ColumnOptionDefinitionContext;
	physicalColumnDefinition(): PhysicalColumnDefinitionContext;
	columnNameCreate(): ColumnNameCreateContext;
	columnName(): ColumnNameContext;
	columnNameList(): ColumnNameListContext;
	columnType(): ColumnTypeContext;
	lengthOneDimension(): LengthOneDimensionContext;
	lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext;
	lengthTwoStringDimension(): LengthTwoStringDimensionContext;
	lengthOneTypeDimension(): LengthOneTypeDimensionContext;
	mapTypeDimension(): MapTypeDimensionContext;
	rowTypeDimension(): RowTypeDimensionContext;
	columnConstraint(): ColumnConstraintContext;
	commentSpec(): CommentSpecContext;
	metadataColumnDefinition(): MetadataColumnDefinitionContext;
	metadataKey(): MetadataKeyContext;
	computedColumnDefinition(): ComputedColumnDefinitionContext;
	computedColumnExpression(): ComputedColumnExpressionContext;
	watermarkDefinition(): WatermarkDefinitionContext;
	tableConstraint(): TableConstraintContext;
	constraintName(): ConstraintNameContext;
	selfDefinitionClause(): SelfDefinitionClauseContext;
	partitionDefinition(): PartitionDefinitionContext;
	transformList(): TransformListContext;
	transform(): TransformContext;
	transformArgument(): TransformArgumentContext;
	likeDefinition(): LikeDefinitionContext;
	likeOption(): LikeOptionContext;
	createCatalog(): CreateCatalogContext;
	createDatabase(): CreateDatabaseContext;
	createView(): CreateViewContext;
	createFunction(): CreateFunctionContext;
	usingClause(): UsingClauseContext;
	jarFileName(): JarFileNameContext;
	alterTable(): AlterTableContext;
	renameDefinition(): RenameDefinitionContext;
	setKeyValueDefinition(): SetKeyValueDefinitionContext;
	addConstraint(): AddConstraintContext;
	dropConstraint(): DropConstraintContext;
	addUnique(): AddUniqueContext;
	notForced(): NotForcedContext;
	alertView(): AlertViewContext;
	alterDatabase(): AlterDatabaseContext;
	alterFunction(): AlterFunctionContext;
	dropCatalog(): DropCatalogContext;
	dropTable(): DropTableContext;
	dropDatabase(): DropDatabaseContext;
	dropView(): DropViewContext;
	dropFunction(): DropFunctionContext;
	insertStatement(): InsertStatementContext;
	insertSimpleStatement(): InsertSimpleStatementContext;
	insertPartitionDefinition(): InsertPartitionDefinitionContext;
	valuesDefinition(): ValuesDefinitionContext;
	valuesRowDefinition(): ValuesRowDefinitionContext;
	insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext;
	insertMulStatement(): InsertMulStatementContext;
	queryStatement(): QueryStatementContext;
	queryStatement(_p: number): QueryStatementContext;
	valuesCaluse(): ValuesCaluseContext;
	withClause(): WithClauseContext;
	withItem(): WithItemContext;
	withItemName(): WithItemNameContext;
	selectStatement(): SelectStatementContext;
	selectClause(): SelectClauseContext;
	projectItemDefinition(): ProjectItemDefinitionContext;
	overWindowItem(): OverWindowItemContext;
	fromClause(): FromClauseContext;
	tableExpression(): TableExpressionContext;
	tableExpression(_p: number): TableExpressionContext;
	tableReference(): TableReferenceContext;
	tablePrimary(): TablePrimaryContext;
	systemTimePeriod(): SystemTimePeriodContext;
	dateTimeExpression(): DateTimeExpressionContext;
	inlineDataValueClause(): InlineDataValueClauseContext;
	windoTVFClause(): WindoTVFClauseContext;
	windowTVFExression(): WindowTVFExressionContext;
	windoTVFName(): WindoTVFNameContext;
	windowTVFParam(): WindowTVFParamContext;
	timeIntervalParamName(): TimeIntervalParamNameContext;
	columnDescriptor(): ColumnDescriptorContext;
	joinCondition(): JoinConditionContext;
	whereClause(): WhereClauseContext;
	groupByClause(): GroupByClauseContext;
	groupItemDefinition(): GroupItemDefinitionContext;
	groupingSets(): GroupingSetsContext;
	groupingSetsNotaionName(): GroupingSetsNotaionNameContext;
	groupWindowFunction(): GroupWindowFunctionContext;
	groupWindowFunctionName(): GroupWindowFunctionNameContext;
	timeAttrColumn(): TimeAttrColumnContext;
	havingClause(): HavingClauseContext;
	windowClause(): WindowClauseContext;
	namedWindow(): NamedWindowContext;
	windowSpec(): WindowSpecContext;
	matchRecognizeClause(): MatchRecognizeClauseContext;
	orderByCaluse(): OrderByCaluseContext;
	orderItemDefition(): OrderItemDefitionContext;
	limitClause(): LimitClauseContext;
	partitionByClause(): PartitionByClauseContext;
	quantifiers(): QuantifiersContext;
	measuresClause(): MeasuresClauseContext;
	patternDefination(): PatternDefinationContext;
	patternVariable(): PatternVariableContext;
	outputMode(): OutputModeContext;
	afterMatchStrategy(): AfterMatchStrategyContext;
	patternVariablesDefination(): PatternVariablesDefinationContext;
	windowFrame(): WindowFrameContext;
	frameBound(): FrameBoundContext;
	withinClause(): WithinClauseContext;
	expression(): ExpressionContext;
	booleanExpression(): BooleanExpressionContext;
	booleanExpression(_p: number): BooleanExpressionContext;
	predicate(): PredicateContext;
	likePredicate(): LikePredicateContext;
	valueExpression(): ValueExpressionContext;
	valueExpression(_p: number): ValueExpressionContext;
	primaryExpression(): PrimaryExpressionContext;
	primaryExpression(_p: number): PrimaryExpressionContext;
	functionNameCreate(): FunctionNameCreateContext;
	functionName(): FunctionNameContext;
	functionParam(): FunctionParamContext;
	dereferenceDefinition(): DereferenceDefinitionContext;
	correlationName(): CorrelationNameContext;
	qualifiedName(): QualifiedNameContext;
	timeIntervalExpression(): TimeIntervalExpressionContext;
	errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext;
	multiUnitsInterval(): MultiUnitsIntervalContext;
	errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext;
	unitToUnitInterval(): UnitToUnitIntervalContext;
	intervalValue(): IntervalValueContext;
	tableAlias(): TableAliasContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
	identifierList(): IdentifierListContext;
	identifierSeq(): IdentifierSeqContext;
	identifier(): IdentifierContext;
	unquotedIdentifier(): UnquotedIdentifierContext;
	quotedIdentifier(): QuotedIdentifierContext;
	whenClause(): WhenClauseContext;
	catalogPath(): CatalogPathContext;
	catalogPathCreate(): CatalogPathCreateContext;
	databasePath(): DatabasePathContext;
	databasePathCreate(): DatabasePathCreateContext;
	tablePathCreate(): TablePathCreateContext;
	tablePath(): TablePathContext;
	viewPath(): ViewPathContext;
	viewPathCreate(): ViewPathCreateContext;
	uid(): UidContext;
	withOption(): WithOptionContext;
	ifNotExists(): IfNotExistsContext;
	ifExists(): IfExistsContext;
	tablePropertyList(): TablePropertyListContext;
	tableProperty(): TablePropertyContext;
	tablePropertyKey(): TablePropertyKeyContext;
	tablePropertyValue(): TablePropertyValueContext;
	logicalOperator(): LogicalOperatorContext;
	comparisonOperator(): ComparisonOperatorContext;
	bitOperator(): BitOperatorContext;
	mathOperator(): MathOperatorContext;
	unaryOperator(): UnaryOperatorContext;
	constant(): ConstantContext;
	timePointLiteral(): TimePointLiteralContext;
	stringLiteral(): StringLiteralContext;
	decimalLiteral(): DecimalLiteralContext;
	booleanLiteral(): BooleanLiteralContext;
	setQuantifier(): SetQuantifierContext;
	timePointUnit(): TimePointUnitContext;
	timeIntervalUnit(): TimeIntervalUnitContext;
	reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext;
	reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext;
	nonReservedKeywords(): NonReservedKeywordsContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
	private columnName_sempred;
	private queryStatement_sempred;
	private tableExpression_sempred;
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
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sqlStatement(): SqlStatementContext | null;
	SEMICOLON(): antlr.TerminalNode | null;
	emptyStatement(): EmptyStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SqlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ddlStatement(): DdlStatementContext | null;
	dmlStatement(): DmlStatementContext | null;
	describeStatement(): DescribeStatementContext | null;
	explainStatement(): ExplainStatementContext | null;
	useStatement(): UseStatementContext | null;
	showStatememt(): ShowStatememtContext | null;
	loadStatement(): LoadStatementContext | null;
	unloadStatememt(): UnloadStatememtContext | null;
	setStatememt(): SetStatememtContext | null;
	resetStatememt(): ResetStatememtContext | null;
	jarStatememt(): JarStatememtContext | null;
	dtAddStatement(): DtAddStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class EmptyStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	SEMICOLON(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DdlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createTable(): CreateTableContext | null;
	createDatabase(): CreateDatabaseContext | null;
	createView(): CreateViewContext | null;
	createFunction(): CreateFunctionContext | null;
	createCatalog(): CreateCatalogContext | null;
	alterTable(): AlterTableContext | null;
	alertView(): AlertViewContext | null;
	alterDatabase(): AlterDatabaseContext | null;
	alterFunction(): AlterFunctionContext | null;
	dropCatalog(): DropCatalogContext | null;
	dropTable(): DropTableContext | null;
	dropDatabase(): DropDatabaseContext | null;
	dropView(): DropViewContext | null;
	dropFunction(): DropFunctionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DmlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryStatement(): QueryStatementContext | null;
	insertStatement(): InsertStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablePath(): TablePathContext;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXPLAIN(): antlr.TerminalNode;
	dmlStatement(): DmlStatementContext | null;
	insertSimpleStatement(): InsertSimpleStatementContext | null;
	insertMulStatement(): InsertMulStatementContext | null;
	explainDetails(): ExplainDetailsContext | null;
	KW_PLAN(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainDetailsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	explainDetail(): ExplainDetailContext[];
	explainDetail(i: number): ExplainDetailContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainDetailContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHANGELOG_MODE(): antlr.TerminalNode | null;
	KW_JSON_EXECUTION_PLAN(): antlr.TerminalNode | null;
	KW_ESTIMATED_COST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UseStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USE(): antlr.TerminalNode | null;
	KW_CATALOG(): antlr.TerminalNode | null;
	catalogPath(): CatalogPathContext | null;
	databasePath(): DatabasePathContext | null;
	useModuleStatement(): UseModuleStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UseModuleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USE(): antlr.TerminalNode;
	KW_MODULES(): antlr.TerminalNode;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowStatememtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	KW_CATALOGS(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_VIEWS(): antlr.TerminalNode | null;
	KW_JARS(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_CATALOG(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	databasePath(): DatabasePathContext | null;
	likePredicate(): LikePredicateContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	viewPath(): ViewPathContext | null;
	tablePath(): TablePathContext | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_MODULES(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LoadStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOAD(): antlr.TerminalNode;
	KW_MODULE(): antlr.TerminalNode;
	uid(): UidContext;
	KW_WITH(): antlr.TerminalNode | null;
	tablePropertyList(): TablePropertyListContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnloadStatememtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNLOAD(): antlr.TerminalNode;
	KW_MODULE(): antlr.TerminalNode;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SetStatememtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	tableProperty(): TablePropertyContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ResetStatememtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESET(): antlr.TerminalNode;
	tablePropertyKey(): TablePropertyKeyContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JarStatememtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_JAR(): antlr.TerminalNode;
	jarFileName(): JarFileNameContext;
	KW_ADD(): antlr.TerminalNode | null;
	KW_REMOVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DtAddStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode;
	KW_JAR(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	dtFilePath(): DtFilePathContext;
	KW_AS(): antlr.TerminalNode | null;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	KW_FILE(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_PYTHON_FILES(): antlr.TerminalNode | null;
	KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode | null;
	KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode | null;
	KW_PYTHON_JAR(): antlr.TerminalNode | null;
	KW_PYTHON_ARCHIVES(): antlr.TerminalNode | null;
	KW_PYTHON_PARAMETER(): antlr.TerminalNode | null;
	KW_ENGINE(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_CONFIG(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DtFilePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	SLASH_SIGN(): antlr.TerminalNode[];
	SLASH_SIGN(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	simpleCreateTable(): SimpleCreateTableContext | null;
	createTableAsSelect(): CreateTableAsSelectContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SimpleCreateTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tablePathCreate(): TablePathCreateContext;
	LR_BRACKET(): antlr.TerminalNode;
	columnOptionDefinition(): ColumnOptionDefinitionContext[];
	columnOptionDefinition(i: number): ColumnOptionDefinitionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	withOption(): WithOptionContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	watermarkDefinition(): WatermarkDefinitionContext | null;
	tableConstraint(): TableConstraintContext | null;
	selfDefinitionClause(): SelfDefinitionClauseContext | null;
	commentSpec(): CommentSpecContext | null;
	partitionDefinition(): PartitionDefinitionContext | null;
	likeDefinition(): LikeDefinitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableAsSelectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tablePathCreate(): TablePathCreateContext;
	withOption(): WithOptionContext;
	ifNotExists(): IfNotExistsContext | null;
	KW_AS(): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnOptionDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	physicalColumnDefinition(): PhysicalColumnDefinitionContext | null;
	metadataColumnDefinition(): MetadataColumnDefinitionContext | null;
	computedColumnDefinition(): ComputedColumnDefinitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PhysicalColumnDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext;
	columnType(): ColumnTypeContext;
	columnConstraint(): ColumnConstraintContext | null;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnTypeContext extends antlr.ParserRuleContext {
	_typeName?: Token | null;
	_type_?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DATE(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_VARBINARY(): antlr.TerminalNode | null;
	KW_BYTES(): antlr.TerminalNode | null;
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null;
	KW_DATETIME(): antlr.TerminalNode | null;
	lengthOneDimension(): LengthOneDimensionContext | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_DEC(): antlr.TerminalNode | null;
	KW_NUMERIC(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_MULTISET(): antlr.TerminalNode | null;
	lengthOneTypeDimension(): LengthOneTypeDimensionContext | null;
	KW_MAP(): antlr.TerminalNode | null;
	mapTypeDimension(): MapTypeDimensionContext | null;
	KW_ROW(): antlr.TerminalNode | null;
	rowTypeDimension(): RowTypeDimensionContext | null;
	KW_RAW(): antlr.TerminalNode | null;
	lengthTwoStringDimension(): LengthTwoStringDimensionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthOneDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoStringDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthOneTypeDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LESS_SYMBOL(): antlr.TerminalNode;
	columnType(): ColumnTypeContext;
	GREATER_SYMBOL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MapTypeDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LESS_SYMBOL(): antlr.TerminalNode;
	columnType(): ColumnTypeContext[];
	columnType(i: number): ColumnTypeContext | null;
	GREATER_SYMBOL(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class RowTypeDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LESS_SYMBOL(): antlr.TerminalNode;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	columnType(): ColumnTypeContext[];
	columnType(i: number): ColumnTypeContext | null;
	GREATER_SYMBOL(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintName(): ConstraintNameContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ENFORCED(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CommentSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MetadataColumnDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext;
	columnType(): ColumnTypeContext;
	KW_METADATA(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode | null;
	metadataKey(): MetadataKeyContext | null;
	KW_VIRTUAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MetadataKeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ComputedColumnDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	computedColumnExpression(): ComputedColumnExpressionContext;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ComputedColumnExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WatermarkDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WATERMARK(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	KW_AS(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRIMARY(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	KW_NOT(): antlr.TerminalNode;
	KW_ENFORCED(): antlr.TerminalNode;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	constraintName(): ConstraintNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelfDefinitionClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PERIOD(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	KW_SYSTEM_TIME(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITIONED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	transformList(): TransformListContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	transform(): TransformContext[];
	transform(i: number): TransformContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: TransformContext): void;
}
export declare class IdentityTransformContext extends TransformContext {
	constructor(ctx: TransformContext);
	columnName(): ColumnNameContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ApplyTransformContext extends TransformContext {
	constructor(ctx: TransformContext);
	LR_BRACKET(): antlr.TerminalNode;
	transformArgument(): TransformArgumentContext[];
	transformArgument(i: number): TransformArgumentContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformArgumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualifiedName(): QualifiedNameContext | null;
	constant(): ConstantContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LikeDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode;
	tablePath(): TablePathContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	likeOption(): LikeOptionContext[];
	likeOption(i: number): LikeOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LikeOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INCLUDING(): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_CONSTRAINTS(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_OVERWRITING(): antlr.TerminalNode | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	KW_WATERMARKS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateCatalogContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_CATALOG(): antlr.TerminalNode;
	catalogPathCreate(): CatalogPathCreateContext;
	withOption(): WithOptionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateDatabaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	databasePathCreate(): DatabasePathCreateContext;
	withOption(): WithOptionContext;
	ifNotExists(): IfNotExistsContext | null;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewPathCreate(): ViewPathCreateContext;
	KW_AS(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	columnNameList(): ColumnNameListContext | null;
	commentSpec(): CommentSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNameCreate(): FunctionNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	usingClause(): UsingClauseContext | null;
	KW_JAVA(): antlr.TerminalNode | null;
	KW_SCALA(): antlr.TerminalNode | null;
	KW_PYTHON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UsingClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	KW_JAR(): antlr.TerminalNode[];
	KW_JAR(i: number): antlr.TerminalNode | null;
	jarFileName(): JarFileNameContext[];
	jarFileName(i: number): JarFileNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JarFileNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tablePath(): TablePathContext;
	renameDefinition(): RenameDefinitionContext | null;
	setKeyValueDefinition(): SetKeyValueDefinitionContext | null;
	addConstraint(): AddConstraintContext | null;
	dropConstraint(): DropConstraintContext | null;
	addUnique(): AddUniqueContext | null;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class RenameDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SetKeyValueDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	tablePropertyList(): TablePropertyListContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AddConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode;
	KW_CONSTRAINT(): antlr.TerminalNode;
	constraintName(): ConstraintNameContext;
	KW_PRIMARY(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	notForced(): NotForcedContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_CONSTRAINT(): antlr.TerminalNode;
	constraintName(): ConstraintNameContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AddUniqueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode;
	KW_UNIQUE(): antlr.TerminalNode;
	columnNameList(): ColumnNameListContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NotForcedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOT(): antlr.TerminalNode;
	KW_ENFORCED(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlertViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewPath(): ViewPathContext;
	renameDefinition(): RenameDefinitionContext | null;
	KW_AS(): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterDatabaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	databasePath(): DatabasePathContext;
	setKeyValueDefinition(): SetKeyValueDefinitionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	KW_AS(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	KW_JAVA(): antlr.TerminalNode | null;
	KW_SCALA(): antlr.TerminalNode | null;
	KW_PYTHON(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropCatalogContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_CATALOG(): antlr.TerminalNode;
	catalogPath(): CatalogPathContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tablePath(): TablePathContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropDatabaseContext extends antlr.ParserRuleContext {
	_dropType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	databasePath(): DatabasePathContext;
	ifExists(): IfExistsContext | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropViewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewPath(): ViewPathContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	insertSimpleStatement(): InsertSimpleStatementContext | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext | null;
	insertMulStatement(): InsertMulStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertSimpleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode;
	tablePath(): TablePathContext;
	KW_INTO(): antlr.TerminalNode | null;
	KW_OVERWRITE(): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext | null;
	valuesDefinition(): ValuesDefinitionContext | null;
	insertPartitionDefinition(): InsertPartitionDefinitionContext | null;
	columnNameList(): ColumnNameListContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertPartitionDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	tablePropertyList(): TablePropertyListContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValuesDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUES(): antlr.TerminalNode;
	valuesRowDefinition(): ValuesRowDefinitionContext[];
	valuesRowDefinition(i: number): ValuesRowDefinitionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValuesRowDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	constant(): ConstantContext[];
	constant(i: number): ConstantContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertMulStatementCompatibilityContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BEGIN(): antlr.TerminalNode;
	KW_STATEMENT(): antlr.TerminalNode;
	KW_SET(): antlr.TerminalNode;
	SEMICOLON(): antlr.TerminalNode[];
	SEMICOLON(i: number): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode;
	insertSimpleStatement(): InsertSimpleStatementContext[];
	insertSimpleStatement(i: number): InsertSimpleStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertMulStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STATEMENT(): antlr.TerminalNode;
	KW_SET(): antlr.TerminalNode;
	KW_BEGIN(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	insertSimpleStatement(): InsertSimpleStatementContext[];
	insertSimpleStatement(i: number): InsertSimpleStatementContext | null;
	SEMICOLON(): antlr.TerminalNode[];
	SEMICOLON(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QueryStatementContext extends antlr.ParserRuleContext {
	_left?: QueryStatementContext;
	_operator?: Token | null;
	_right?: QueryStatementContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	valuesCaluse(): ValuesCaluseContext | null;
	withClause(): WithClauseContext | null;
	queryStatement(): QueryStatementContext[];
	queryStatement(i: number): QueryStatementContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	selectClause(): SelectClauseContext | null;
	orderByCaluse(): OrderByCaluseContext | null;
	limitClause(): LimitClauseContext | null;
	selectStatement(): SelectStatementContext | null;
	KW_INTERSECT(): antlr.TerminalNode | null;
	KW_UNION(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValuesCaluseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUES(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	withItem(): WithItemContext[];
	withItem(i: number): WithItemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	withItemName(): WithItemNameContext;
	KW_AS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithItemNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectClause(): SelectClauseContext;
	fromClause(): FromClauseContext | null;
	whereClause(): WhereClauseContext | null;
	groupByClause(): GroupByClauseContext | null;
	havingClause(): HavingClauseContext | null;
	windowClause(): WindowClauseContext | null;
	matchRecognizeClause(): MatchRecognizeClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode;
	ASTERISK_SIGN(): antlr.TerminalNode | null;
	projectItemDefinition(): ProjectItemDefinitionContext[];
	projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
	setQuantifier(): SetQuantifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ProjectItemDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	overWindowItem(): OverWindowItemContext | null;
	columnName(): ColumnNameContext | null;
	expression(): ExpressionContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OverWindowItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	primaryExpression(): PrimaryExpressionContext;
	KW_OVER(): antlr.TerminalNode;
	windowSpec(): WindowSpecContext | null;
	KW_AS(): antlr.TerminalNode;
	identifier(): IdentifierContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode;
	tableExpression(): TableExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableReference(): TableReferenceContext[];
	tableReference(i: number): TableReferenceContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	inlineDataValueClause(): InlineDataValueClauseContext | null;
	windoTVFClause(): WindoTVFClauseContext | null;
	tableExpression(): TableExpressionContext[];
	tableExpression(i: number): TableExpressionContext | null;
	KW_CROSS(): antlr.TerminalNode | null;
	KW_JOIN(): antlr.TerminalNode | null;
	KW_NATURAL(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	joinCondition(): JoinConditionContext | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_INNER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableReferenceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablePrimary(): TablePrimaryContext;
	tableAlias(): TableAliasContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablePath(): TablePathContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	systemTimePeriod(): SystemTimePeriodContext | null;
	correlationName(): CorrelationNameContext | null;
	KW_AS(): antlr.TerminalNode | null;
	viewPath(): ViewPathContext | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	functionName(): FunctionNameContext | null;
	functionParam(): FunctionParamContext[];
	functionParam(i: number): FunctionParamContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext | null;
	KW_UNNEST(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SystemTimePeriodContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	KW_SYSTEM_TIME(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	KW_OF(): antlr.TerminalNode;
	dateTimeExpression(): DateTimeExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DateTimeExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InlineDataValueClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	valuesDefinition(): ValuesDefinitionContext;
	RR_BRACKET(): antlr.TerminalNode;
	tableAlias(): TableAliasContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindoTVFClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	windowTVFExression(): WindowTVFExressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowTVFExressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	windoTVFName(): WindoTVFNameContext;
	LR_BRACKET(): antlr.TerminalNode;
	windowTVFParam(): WindowTVFParamContext[];
	windowTVFParam(i: number): WindowTVFParamContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindoTVFNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TUMBLE(): antlr.TerminalNode | null;
	KW_HOP(): antlr.TerminalNode | null;
	KW_CUMULATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowTVFParamContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode | null;
	timeAttrColumn(): TimeAttrColumnContext | null;
	columnDescriptor(): ColumnDescriptorContext | null;
	timeIntervalExpression(): TimeIntervalExpressionContext | null;
	KW_DATA(): antlr.TerminalNode | null;
	DOUBLE_RIGHT_ARROW(): antlr.TerminalNode | null;
	KW_TIMECOL(): antlr.TerminalNode | null;
	timeIntervalParamName(): TimeIntervalParamNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimeIntervalParamNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DATA(): antlr.TerminalNode | null;
	KW_TIMECOL(): antlr.TerminalNode | null;
	KW_SIZE(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	KW_STEP(): antlr.TerminalNode | null;
	KW_SLIDE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnDescriptorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DESCRIPTOR(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JoinConditionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode | null;
	booleanExpression(): BooleanExpressionContext | null;
	KW_USING(): antlr.TerminalNode | null;
	columnNameList(): ColumnNameListContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WhereClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHERE(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GROUP(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	groupItemDefinition(): GroupItemDefinitionContext[];
	groupItemDefinition(i: number): GroupItemDefinitionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupItemDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	groupWindowFunction(): GroupWindowFunctionContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	groupingSetsNotaionName(): GroupingSetsNotaionNameContext | null;
	groupingSets(): GroupingSetsContext | null;
	groupItemDefinition(): GroupItemDefinitionContext[];
	groupItemDefinition(i: number): GroupItemDefinitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingSetsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GROUPING(): antlr.TerminalNode;
	KW_SETS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupingSetsNotaionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CUBE(): antlr.TerminalNode | null;
	KW_ROLLUP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupWindowFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	groupWindowFunctionName(): GroupWindowFunctionNameContext;
	LR_BRACKET(): antlr.TerminalNode;
	timeAttrColumn(): TimeAttrColumnContext;
	COMMA(): antlr.TerminalNode;
	timeIntervalExpression(): TimeIntervalExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupWindowFunctionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TUMBLE(): antlr.TerminalNode | null;
	KW_HOP(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimeAttrColumnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HAVING(): antlr.TerminalNode;
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WINDOW(): antlr.TerminalNode;
	namedWindow(): NamedWindowContext[];
	namedWindow(i: number): NamedWindowContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NamedWindowContext extends antlr.ParserRuleContext {
	_name?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	windowSpec(): WindowSpecContext;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowSpecContext extends antlr.ParserRuleContext {
	_name?: ErrorCapturingIdentifierContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	partitionByClause(): PartitionByClauseContext | null;
	orderByCaluse(): OrderByCaluseContext | null;
	windowFrame(): WindowFrameContext | null;
	errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MatchRecognizeClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MATCH_RECOGNIZE(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	patternVariablesDefination(): PatternVariablesDefinationContext;
	RR_BRACKET(): antlr.TerminalNode;
	partitionByClause(): PartitionByClauseContext | null;
	orderByCaluse(): OrderByCaluseContext | null;
	measuresClause(): MeasuresClauseContext | null;
	outputMode(): OutputModeContext | null;
	afterMatchStrategy(): AfterMatchStrategyContext | null;
	patternDefination(): PatternDefinationContext | null;
	identifier(): IdentifierContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OrderByCaluseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ORDER(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	orderItemDefition(): OrderItemDefitionContext[];
	orderItemDefition(i: number): OrderItemDefitionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OrderItemDefitionContext extends antlr.ParserRuleContext {
	_ordering?: Token | null;
	_nullOrder?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LimitClauseContext extends antlr.ParserRuleContext {
	_limit?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIMIT(): antlr.TerminalNode;
	KW_ALL(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QuantifiersContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ASTERISK_SIGN(): antlr.TerminalNode | null;
	ADD_SIGN(): antlr.TerminalNode | null;
	QUESTION_MARK_SIGN(): antlr.TerminalNode | null;
	LB_BRACKET(): antlr.TerminalNode | null;
	DIG_LITERAL(): antlr.TerminalNode[];
	DIG_LITERAL(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	RB_BRACKET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MeasuresClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MEASURES(): antlr.TerminalNode;
	projectItemDefinition(): ProjectItemDefinitionContext[];
	projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PatternDefinationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PATTERN(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	patternVariable(): PatternVariableContext[];
	patternVariable(i: number): PatternVariableContext | null;
	withinClause(): WithinClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PatternVariableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	unquotedIdentifier(): UnquotedIdentifierContext;
	quantifiers(): QuantifiersContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OutputModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_PER(): antlr.TerminalNode;
	KW_MATCH(): antlr.TerminalNode;
	KW_ONE(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AfterMatchStrategyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AFTER(): antlr.TerminalNode;
	KW_MATCH(): antlr.TerminalNode;
	KW_SKIP(): antlr.TerminalNode;
	KW_PAST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	unquotedIdentifier(): UnquotedIdentifierContext | null;
	KW_FIRST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PatternVariablesDefinationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFINE(): antlr.TerminalNode;
	projectItemDefinition(): ProjectItemDefinitionContext[];
	projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowFrameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RANGE(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode;
	timeIntervalExpression(): TimeIntervalExpressionContext | null;
	frameBound(): FrameBoundContext;
	KW_ROWS(): antlr.TerminalNode | null;
	DIG_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FrameBoundContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRECEDING(): antlr.TerminalNode;
	KW_AND(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode;
	KW_ROW(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithinClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITHIN(): antlr.TerminalNode;
	timeIntervalExpression(): TimeIntervalExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	booleanExpression(): BooleanExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PredicatedContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	valueExpression(): ValueExpressionContext;
	predicate(): PredicateContext | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExistsContext extends BooleanExpressionContext {
	constructor(ctx: BooleanExpressionContext);
	KW_EXISTS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LogicalNestedContext extends BooleanExpressionContext {
	_kind?: Token | null;
	constructor(ctx: BooleanExpressionContext);
	booleanExpression(): BooleanExpressionContext;
	KW_IS(): antlr.TerminalNode;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
	_kind?: Token | null;
	_lower?: ValueExpressionContext;
	_upper?: ValueExpressionContext;
	_pattern?: ValueExpressionContext;
	_right?: ValueExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AND(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ASYMMETRIC(): antlr.TerminalNode | null;
	KW_SYMMETRIC(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	queryStatement(): QueryStatementContext | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	likePredicate(): LikePredicateContext | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_SIMILAR(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LikePredicateContext extends antlr.ParserRuleContext {
	_kind?: Token | null;
	_quantifier?: Token | null;
	_pattern?: ValueExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode;
	KW_ANY(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	valueExpression(): ValueExpressionContext | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValueExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ValueExpressionContext): void;
}
export declare class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(ctx: ValueExpressionContext);
	primaryExpression(): PrimaryExpressionContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonContext extends ValueExpressionContext {
	_left?: ValueExpressionContext;
	_right?: ValueExpressionContext;
	constructor(ctx: ValueExpressionContext);
	comparisonOperator(): ComparisonOperatorContext;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ArithmeticBinaryContext extends ValueExpressionContext {
	_left?: ValueExpressionContext;
	_operator?: Token | null;
	_right?: ValueExpressionContext;
	constructor(ctx: ValueExpressionContext);
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	ASTERISK_SIGN(): antlr.TerminalNode | null;
	SLASH_SIGN(): antlr.TerminalNode | null;
	PENCENT_SIGN(): antlr.TerminalNode | null;
	KW_DIV(): antlr.TerminalNode | null;
	ADD_SIGN(): antlr.TerminalNode | null;
	HYPNEN_SIGN(): antlr.TerminalNode | null;
	DOUBLE_VERTICAL_SIGN(): antlr.TerminalNode | null;
	BIT_AND_OP(): antlr.TerminalNode | null;
	BIT_XOR_OP(): antlr.TerminalNode | null;
	BIT_OR_OP(): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ArithmeticUnaryContext extends ValueExpressionContext {
	_operator?: Token | null;
	constructor(ctx: ValueExpressionContext);
	valueExpression(): ValueExpressionContext;
	HYPNEN_SIGN(): antlr.TerminalNode | null;
	ADD_SIGN(): antlr.TerminalNode | null;
	BIT_NOT_OP(): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PrimaryExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PrimaryExpressionContext): void;
}
export declare class DereferenceContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	dereferenceDefinition(): DereferenceDefinitionContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SimpleCaseContext extends PrimaryExpressionContext {
	_value?: ExpressionContext;
	_elseExpression?: ExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	KW_CASE(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	whenClause(): WhenClauseContext[];
	whenClause(i: number): WhenClauseContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	identifier(): IdentifierContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LastContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_LAST(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class StarContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	ASTERISK_SIGN(): antlr.TerminalNode;
	uid(): UidContext | null;
	DOT(): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SubscriptContext extends PrimaryExpressionContext {
	_value?: PrimaryExpressionContext;
	_index?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	LS_BRACKET(): antlr.TerminalNode;
	RS_BRACKET(): antlr.TerminalNode;
	primaryExpression(): PrimaryExpressionContext;
	valueExpression(): ValueExpressionContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	LR_BRACKET(): antlr.TerminalNode;
	queryStatement(): QueryStatementContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CastContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_CAST(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_AS(): antlr.TerminalNode;
	columnType(): ColumnTypeContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantDefaultContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	constant(): ConstantContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	functionName(): FunctionNameContext;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	functionParam(): FunctionParamContext[];
	functionParam(i: number): FunctionParamContext | null;
	setQuantifier(): SetQuantifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PositionContext extends PrimaryExpressionContext {
	_substr?: ValueExpressionContext;
	_str?: ValueExpressionContext;
	constructor(ctx: PrimaryExpressionContext);
	KW_POSITION(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	valueExpression(): ValueExpressionContext[];
	valueExpression(i: number): ValueExpressionContext | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DateFunctionExpressionContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FirstContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext);
	KW_FIRST(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null;
	uid(): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionParamContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext | null;
	timeIntervalUnit(): TimeIntervalUnitContext | null;
	timePointUnit(): TimePointUnitContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DereferenceDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CorrelationNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	dereferenceDefinition(): DereferenceDefinitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimeIntervalExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INTERVAL(): antlr.TerminalNode;
	errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | null;
	errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingMultiUnitsIntervalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	multiUnitsInterval(): MultiUnitsIntervalContext;
	unitToUnitInterval(): UnitToUnitIntervalContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MultiUnitsIntervalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	intervalValue(): IntervalValueContext[];
	intervalValue(i: number): IntervalValueContext | null;
	timeIntervalUnit(): TimeIntervalUnitContext[];
	timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnitToUnitIntervalContext extends antlr.ParserRuleContext {
	_value?: IntervalValueContext;
	_from_?: TimeIntervalUnitContext;
	_to?: TimeIntervalUnitContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TO(): antlr.TerminalNode;
	intervalValue(): IntervalValueContext;
	timeIntervalUnit(): TimeIntervalUnitContext[];
	timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DIG_LITERAL(): antlr.TerminalNode | null;
	REAL_LITERAL(): antlr.TerminalNode | null;
	ADD_SIGN(): antlr.TerminalNode | null;
	HYPNEN_SIGN(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableAliasContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	KW_AS(): antlr.TerminalNode | null;
	identifierList(): IdentifierListContext | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void;
}
export declare class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx: ErrorCapturingIdentifierExtraContext);
	KW_MINUS(): antlr.TerminalNode[];
	KW_MINUS(i: number): antlr.TerminalNode | null;
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx: ErrorCapturingIdentifierExtraContext);
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	identifierSeq(): IdentifierSeqContext;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierSeqContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: IdentifierContext): void;
}
export declare class QuotedIdentifierAlternativeContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	quotedIdentifier(): QuotedIdentifierContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NonReservedKeywordsAlternativeContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	nonReservedKeywords(): NonReservedKeywordsContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnquotedIdentifierAlternativeContext extends IdentifierContext {
	constructor(ctx: IdentifierContext);
	unquotedIdentifier(): UnquotedIdentifierContext;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnquotedIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DIG_LITERAL(): antlr.TerminalNode | null;
	ID_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QuotedIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CatalogPathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CatalogPathCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DatabasePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DatabasePathCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePathCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ViewPathContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ViewPathCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UidContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext[];
	identifier(i: number): IdentifierContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	tablePropertyList(): TablePropertyListContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IfNotExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IfExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	tableProperty(): TablePropertyContext[];
	tableProperty(i: number): TablePropertyContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyContext extends antlr.ParserRuleContext {
	_key?: TablePropertyKeyContext;
	_value?: TablePropertyValueContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablePropertyKey(): TablePropertyKeyContext;
	tablePropertyValue(): TablePropertyValueContext | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyKeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	dereferenceDefinition(): DereferenceDefinitionContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DIG_LITERAL(): antlr.TerminalNode | null;
	REAL_LITERAL(): antlr.TerminalNode | null;
	booleanLiteral(): BooleanLiteralContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LogicalOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AND(): antlr.TerminalNode | null;
	BIT_AND_OP(): antlr.TerminalNode[];
	BIT_AND_OP(i: number): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	BIT_OR_OP(): antlr.TerminalNode[];
	BIT_OR_OP(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	GREATER_SYMBOL(): antlr.TerminalNode | null;
	LESS_SYMBOL(): antlr.TerminalNode | null;
	EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class BitOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LESS_SYMBOL(): antlr.TerminalNode[];
	LESS_SYMBOL(i: number): antlr.TerminalNode | null;
	GREATER_SYMBOL(): antlr.TerminalNode[];
	GREATER_SYMBOL(i: number): antlr.TerminalNode | null;
	BIT_AND_OP(): antlr.TerminalNode | null;
	BIT_XOR_OP(): antlr.TerminalNode | null;
	BIT_OR_OP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MathOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ASTERISK_SIGN(): antlr.TerminalNode | null;
	SLASH_SIGN(): antlr.TerminalNode | null;
	PENCENT_SIGN(): antlr.TerminalNode | null;
	KW_DIV(): antlr.TerminalNode | null;
	ADD_SIGN(): antlr.TerminalNode | null;
	HYPNEN_SIGN(): antlr.TerminalNode | null;
	DOUBLE_HYPNEN_SIGN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnaryOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
	BIT_NOT_OP(): antlr.TerminalNode | null;
	ADD_SIGN(): antlr.TerminalNode | null;
	HYPNEN_SIGN(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	timeIntervalExpression(): TimeIntervalExpressionContext | null;
	timePointLiteral(): TimePointLiteralContext | null;
	stringLiteral(): StringLiteralContext | null;
	decimalLiteral(): DecimalLiteralContext | null;
	HYPNEN_SIGN(): antlr.TerminalNode | null;
	booleanLiteral(): BooleanLiteralContext | null;
	REAL_LITERAL(): antlr.TerminalNode | null;
	BIT_STRING(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimePointLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	timePointUnit(): TimePointUnitContext;
	stringLiteral(): StringLiteralContext;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DecimalLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DIG_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SetQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimePointUnitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_YEAR(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_MILLISECOND(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimeIntervalUnitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MILLENNIUM(): antlr.TerminalNode | null;
	KW_CENTURY(): antlr.TerminalNode | null;
	KW_DECADE(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_WEEKS(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	KW_MILLISECOND(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	KW_NANOSECOND(): antlr.TerminalNode | null;
	KW_EPOCH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ReservedKeywordsUsedAsFuncParamContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_BOTH(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_LEADING(): antlr.TerminalNode | null;
	KW_TRAILING(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	ASTERISK_SIGN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ABS(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_AVG(): antlr.TerminalNode | null;
	KW_CARDINALITY(): antlr.TerminalNode | null;
	KW_CAST(): antlr.TerminalNode | null;
	KW_CEIL(): antlr.TerminalNode | null;
	KW_CEILING(): antlr.TerminalNode | null;
	KW_COALESCE(): antlr.TerminalNode | null;
	KW_COLLECT(): antlr.TerminalNode | null;
	KW_COUNT(): antlr.TerminalNode | null;
	KW_CUME_DIST(): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DAYOFWEEK(): antlr.TerminalNode | null;
	KW_DAYOFYEAR(): antlr.TerminalNode | null;
	KW_DENSE_RANK(): antlr.TerminalNode | null;
	KW_ELEMENT(): antlr.TerminalNode | null;
	KW_EXP(): antlr.TerminalNode | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	KW_FIRST_VALUE(): antlr.TerminalNode | null;
	KW_FLOOR(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_LAG(): antlr.TerminalNode | null;
	KW_LAST_VALUE(): antlr.TerminalNode | null;
	KW_LEAD(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_LN(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
	KW_LOWER(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_MAX(): antlr.TerminalNode | null;
	KW_MIN(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MOD(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_NULLIF(): antlr.TerminalNode | null;
	KW_NTILE(): antlr.TerminalNode | null;
	KW_OVERLAY(): antlr.TerminalNode | null;
	KW_PERCENT_RANK(): antlr.TerminalNode | null;
	KW_POSITION(): antlr.TerminalNode | null;
	KW_POWER(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_ROW_NUMBER(): antlr.TerminalNode | null;
	KW_RANK(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_STDDEV_POP(): antlr.TerminalNode | null;
	KW_STDDEV_SAMP(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_SUM(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIMESTAMP_DIFF(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_TRY_CAST(): antlr.TerminalNode | null;
	KW_UPPER(): antlr.TerminalNode | null;
	KW_VAR_POP(): antlr.TerminalNode | null;
	KW_VAR_SAMP(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NonReservedKeywordsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_CATALOG(): antlr.TerminalNode | null;
	KW_CENTURY(): antlr.TerminalNode | null;
	KW_CONFIG(): antlr.TerminalNode | null;
	KW_CONSTRAINTS(): antlr.TerminalNode | null;
	KW_CUMULATE(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_DAYS(): antlr.TerminalNode | null;
	KW_DECADE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DESCRIPTOR(): antlr.TerminalNode | null;
	KW_DIV(): antlr.TerminalNode | null;
	KW_ENGINE(): antlr.TerminalNode | null;
	KW_EPOCH(): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode | null;
	KW_FILE(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	KW_HOP(): antlr.TerminalNode | null;
	KW_HOURS(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_INCLUDING(): antlr.TerminalNode | null;
	KW_JAR(): antlr.TerminalNode | null;
	KW_JARS(): antlr.TerminalNode | null;
	KW_JAVA(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LOAD(): antlr.TerminalNode | null;
	KW_MAP(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	KW_MILLENNIUM(): antlr.TerminalNode | null;
	KW_MILLISECOND(): antlr.TerminalNode | null;
	KW_MINUTES(): antlr.TerminalNode | null;
	KW_MONTHS(): antlr.TerminalNode | null;
	KW_NANOSECOND(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	KW_PAST(): antlr.TerminalNode | null;
	KW_PLAN(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_PYTHON(): antlr.TerminalNode | null;
	KW_PYTHON_ARCHIVES(): antlr.TerminalNode | null;
	KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode | null;
	KW_PYTHON_FILES(): antlr.TerminalNode | null;
	KW_PYTHON_JAR(): antlr.TerminalNode | null;
	KW_PYTHON_PARAMETER(): antlr.TerminalNode | null;
	KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_REMOVE(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_SECONDS(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	KW_SIZE(): antlr.TerminalNode | null;
	KW_SLIDE(): antlr.TerminalNode | null;
	KW_STEP(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TIMECOL(): antlr.TerminalNode | null;
	KW_TUMBLE(): antlr.TerminalNode | null;
	KW_UNLOAD(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_YEARS(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: FlinkSqlParserListener): void;
	exitRule(listener: FlinkSqlParserListener): void;
	accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
