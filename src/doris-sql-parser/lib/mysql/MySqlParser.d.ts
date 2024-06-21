import * as antlr from 'antlr4ng';
import { Token } from 'antlr4ng';
import { MySqlParserListener } from './MySqlParserListener.js';
import { MySqlParserVisitor } from './MySqlParserVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class MySqlParser extends SQLParserBase {
	static readonly SPACE = 1;
	static readonly SPEC_MYSQL_COMMENT = 2;
	static readonly COMMENT_INPUT = 3;
	static readonly LINE_COMMENT = 4;
	static readonly KW_ACTIVE = 5;
	static readonly KW_ADD = 6;
	static readonly KW_ALL = 7;
	static readonly KW_ALTER = 8;
	static readonly KW_ALWAYS = 9;
	static readonly KW_ANALYZE = 10;
	static readonly KW_AND = 11;
	static readonly KW_ARRAY = 12;
	static readonly KW_AS = 13;
	static readonly KW_ASC = 14;
	static readonly KW_ATTRIBUTE = 15;
	static readonly KW_BEFORE = 16;
	static readonly KW_BETWEEN = 17;
	static readonly KW_BOTH = 18;
	static readonly KW_BUCKETS = 19;
	static readonly KW_BY = 20;
	static readonly KW_CALL = 21;
	static readonly KW_CASCADE = 22;
	static readonly KW_CASE = 23;
	static readonly KW_CAST = 24;
	static readonly KW_CHANGE = 25;
	static readonly KW_CHARACTER = 26;
	static readonly KW_CHECK = 27;
	static readonly KW_COLLATE = 28;
	static readonly KW_COLUMN = 29;
	static readonly KW_CONDITION = 30;
	static readonly KW_CONSTRAINT = 31;
	static readonly KW_CONTINUE = 32;
	static readonly KW_CONVERT = 33;
	static readonly KW_CREATE = 34;
	static readonly KW_CROSS = 35;
	static readonly KW_CURRENT = 36;
	static readonly KW_CURRENT_USER = 37;
	static readonly KW_CURSOR = 38;
	static readonly KW_DATABASE = 39;
	static readonly KW_DATABASES = 40;
	static readonly KW_DECLARE = 41;
	static readonly KW_DEFAULT = 42;
	static readonly KW_DELAYED = 43;
	static readonly KW_DELETE = 44;
	static readonly KW_DESC = 45;
	static readonly KW_DESCRIBE = 46;
	static readonly KW_DETERMINISTIC = 47;
	static readonly KW_DIAGNOSTICS = 48;
	static readonly KW_DISTINCT = 49;
	static readonly KW_DISTINCTROW = 50;
	static readonly KW_DROP = 51;
	static readonly KW_EACH = 52;
	static readonly KW_ELSE = 53;
	static readonly KW_ELSEIF = 54;
	static readonly KW_EMPTY = 55;
	static readonly KW_ENCLOSED = 56;
	static readonly KW_ENFORCED = 57;
	static readonly KW_ESCAPED = 58;
	static readonly KW_EXCEPT = 59;
	static readonly KW_EXISTS = 60;
	static readonly KW_EXIT = 61;
	static readonly KW_EXPLAIN = 62;
	static readonly KW_FALSE = 63;
	static readonly KW_FETCH = 64;
	static readonly KW_FOR = 65;
	static readonly KW_FORCE = 66;
	static readonly KW_FOREIGN = 67;
	static readonly KW_FROM = 68;
	static readonly KW_FULLTEXT = 69;
	static readonly KW_GENERATE = 70;
	static readonly KW_GENERATED = 71;
	static readonly KW_GET = 72;
	static readonly KW_GRANT = 73;
	static readonly KW_GROUP = 74;
	static readonly KW_HAVING = 75;
	static readonly KW_HIGH_PRIORITY = 76;
	static readonly KW_HISTOGRAM = 77;
	static readonly KW_IF = 78;
	static readonly KW_IGNORE = 79;
	static readonly KW_IN = 80;
	static readonly KW_INACTIVE = 81;
	static readonly KW_INDEX = 82;
	static readonly KW_INFILE = 83;
	static readonly KW_INNER = 84;
	static readonly KW_INOUT = 85;
	static readonly KW_INSERT = 86;
	static readonly KW_INTERVAL = 87;
	static readonly KW_INTO = 88;
	static readonly KW_IS = 89;
	static readonly KW_ITERATE = 90;
	static readonly KW_JOIN = 91;
	static readonly KW_KEY = 92;
	static readonly KW_KEYS = 93;
	static readonly KW_KILL = 94;
	static readonly KW_LATERAL = 95;
	static readonly KW_LEADING = 96;
	static readonly KW_LEAVE = 97;
	static readonly KW_LEFT = 98;
	static readonly KW_LIKE = 99;
	static readonly KW_LIMIT = 100;
	static readonly KW_LINEAR = 101;
	static readonly KW_LINES = 102;
	static readonly KW_LOAD = 103;
	static readonly KW_LOCK = 104;
	static readonly KW_LOCKED = 105;
	static readonly KW_LOOP = 106;
	static readonly KW_LOW_PRIORITY = 107;
	static readonly KW_MASTER_BIND = 108;
	static readonly KW_MASTER_SSL_VERIFY_SERVER_CERT = 109;
	static readonly KW_MATCH = 110;
	static readonly KW_MAXVALUE = 111;
	static readonly KW_MODIFIES = 112;
	static readonly KW_NATURAL = 113;
	static readonly KW_NOT = 114;
	static readonly KW_NO_WRITE_TO_BINLOG = 115;
	static readonly KW_NULL_LITERAL = 116;
	static readonly KW_NUMBER = 117;
	static readonly KW_STREAM = 118;
	static readonly KW_ON = 119;
	static readonly KW_OPTIMIZE = 120;
	static readonly KW_OPTION = 121;
	static readonly KW_OPTIONAL = 122;
	static readonly KW_OPTIONALLY = 123;
	static readonly KW_OR = 124;
	static readonly KW_ORDER = 125;
	static readonly KW_OUT = 126;
	static readonly KW_OUTER = 127;
	static readonly KW_OUTFILE = 128;
	static readonly KW_OVER = 129;
	static readonly KW_PARTITION = 130;
	static readonly KW_PRIMARY = 131;
	static readonly KW_PROCEDURE = 132;
	static readonly KW_PURGE = 133;
	static readonly KW_RANGE = 134;
	static readonly KW_READ = 135;
	static readonly KW_READS = 136;
	static readonly KW_REFERENCE = 137;
	static readonly KW_REFERENCES = 138;
	static readonly KW_REGEXP = 139;
	static readonly KW_RELEASE = 140;
	static readonly KW_RENAME = 141;
	static readonly KW_REPEAT = 142;
	static readonly KW_REPLACE = 143;
	static readonly KW_REQUIRE = 144;
	static readonly KW_RESIGNAL = 145;
	static readonly KW_RESTRICT = 146;
	static readonly KW_RETAIN = 147;
	static readonly KW_RETURN = 148;
	static readonly KW_REVOKE = 149;
	static readonly KW_RIGHT = 150;
	static readonly KW_RLIKE = 151;
	static readonly KW_SCHEMA = 152;
	static readonly KW_SCHEMAS = 153;
	static readonly KW_SELECT = 154;
	static readonly KW_SET = 155;
	static readonly KW_SEPARATOR = 156;
	static readonly KW_SHOW = 157;
	static readonly KW_SIGNAL = 158;
	static readonly KW_SKIP = 159;
	static readonly KW_SKIP_QUERY_REWRITE = 160;
	static readonly KW_SPATIAL = 161;
	static readonly KW_SQL = 162;
	static readonly KW_SQLEXCEPTION = 163;
	static readonly KW_SQLSTATE = 164;
	static readonly KW_SQLWARNING = 165;
	static readonly KW_SQL_BIG_RESULT = 166;
	static readonly KW_SQL_CALC_FOUND_ROWS = 167;
	static readonly KW_SQL_SMALL_RESULT = 168;
	static readonly KW_SSL = 169;
	static readonly KW_STACKED = 170;
	static readonly KW_STARTING = 171;
	static readonly KW_STRAIGHT_JOIN = 172;
	static readonly KW_TABLE = 173;
	static readonly KW_TERMINATED = 174;
	static readonly KW_THEN = 175;
	static readonly KW_TO = 176;
	static readonly KW_TRAILING = 177;
	static readonly KW_TRIGGER = 178;
	static readonly KW_TRUE = 179;
	static readonly KW_UNDO = 180;
	static readonly KW_UNION = 181;
	static readonly KW_UNIQUE = 182;
	static readonly KW_UNLOCK = 183;
	static readonly KW_UNSIGNED = 184;
	static readonly KW_UPDATE = 185;
	static readonly KW_USAGE = 186;
	static readonly KW_USE = 187;
	static readonly KW_USING = 188;
	static readonly KW_VALUES = 189;
	static readonly KW_VCPU = 190;
	static readonly KW_WHEN = 191;
	static readonly KW_WHERE = 192;
	static readonly KW_WHILE = 193;
	static readonly KW_WITH = 194;
	static readonly KW_WRITE = 195;
	static readonly KW_XOR = 196;
	static readonly KW_ZEROFILL = 197;
	static readonly KW_TINYINT = 198;
	static readonly KW_SMALLINT = 199;
	static readonly KW_MEDIUMINT = 200;
	static readonly KW_MIDDLEINT = 201;
	static readonly KW_INT = 202;
	static readonly KW_INT1 = 203;
	static readonly KW_INT2 = 204;
	static readonly KW_INT3 = 205;
	static readonly KW_INT4 = 206;
	static readonly KW_INT8 = 207;
	static readonly KW_INTEGER = 208;
	static readonly KW_BIGINT = 209;
	static readonly KW_REAL = 210;
	static readonly KW_DOUBLE = 211;
	static readonly KW_PRECISION = 212;
	static readonly KW_FLOAT = 213;
	static readonly KW_FLOAT4 = 214;
	static readonly KW_FLOAT8 = 215;
	static readonly KW_DECIMAL = 216;
	static readonly KW_DEC = 217;
	static readonly KW_NUMERIC = 218;
	static readonly KW_DATE = 219;
	static readonly KW_TIME = 220;
	static readonly KW_TIMESTAMP = 221;
	static readonly KW_DATETIME = 222;
	static readonly KW_YEAR = 223;
	static readonly KW_CHAR = 224;
	static readonly KW_VARCHAR = 225;
	static readonly KW_NVARCHAR = 226;
	static readonly KW_NATIONAL = 227;
	static readonly KW_BINARY = 228;
	static readonly KW_VARBINARY = 229;
	static readonly KW_TINYBLOB = 230;
	static readonly KW_BLOB = 231;
	static readonly KW_MEDIUMBLOB = 232;
	static readonly KW_LONG = 233;
	static readonly KW_LONGBLOB = 234;
	static readonly KW_TINYTEXT = 235;
	static readonly KW_TEXT = 236;
	static readonly KW_MEDIUMTEXT = 237;
	static readonly KW_LONGTEXT = 238;
	static readonly KW_ENUM = 239;
	static readonly KW_VARYING = 240;
	static readonly KW_SERIAL = 241;
	static readonly KW_YEAR_MONTH = 242;
	static readonly KW_DAY_HOUR = 243;
	static readonly KW_DAY_MINUTE = 244;
	static readonly KW_DAY_SECOND = 245;
	static readonly KW_HOUR_MINUTE = 246;
	static readonly KW_HOUR_SECOND = 247;
	static readonly KW_MINUTE_SECOND = 248;
	static readonly KW_SECOND_MICROSECOND = 249;
	static readonly KW_MINUTE_MICROSECOND = 250;
	static readonly KW_HOUR_MICROSECOND = 251;
	static readonly KW_DAY_MICROSECOND = 252;
	static readonly KW_JSON_TABLE = 253;
	static readonly KW_JSON_VALUE = 254;
	static readonly KW_NESTED = 255;
	static readonly KW_ORDINALITY = 256;
	static readonly KW_PATH = 257;
	static readonly KW_AVG = 258;
	static readonly KW_BIT_AND = 259;
	static readonly KW_BIT_OR = 260;
	static readonly KW_BIT_XOR = 261;
	static readonly KW_COUNT = 262;
	static readonly KW_CUME_DIST = 263;
	static readonly KW_DENSE_RANK = 264;
	static readonly KW_FIRST_VALUE = 265;
	static readonly KW_GROUP_CONCAT = 266;
	static readonly KW_LAG = 267;
	static readonly KW_LAST_VALUE = 268;
	static readonly KW_LEAD = 269;
	static readonly KW_MAX = 270;
	static readonly KW_MIN = 271;
	static readonly KW_NTILE = 272;
	static readonly KW_NTH_VALUE = 273;
	static readonly KW_PERCENT_RANK = 274;
	static readonly KW_RANK = 275;
	static readonly KW_ROW_NUMBER = 276;
	static readonly KW_STD = 277;
	static readonly KW_STDDEV = 278;
	static readonly KW_STDDEV_POP = 279;
	static readonly KW_STDDEV_SAMP = 280;
	static readonly KW_SUM = 281;
	static readonly KW_VAR_POP = 282;
	static readonly KW_VAR_SAMP = 283;
	static readonly KW_VARIANCE = 284;
	static readonly KW_CURRENT_DATE = 285;
	static readonly KW_CURRENT_TIME = 286;
	static readonly KW_CURRENT_TIMESTAMP = 287;
	static readonly KW_LOCALTIME = 288;
	static readonly KW_CURDATE = 289;
	static readonly KW_CURTIME = 290;
	static readonly KW_DATE_ADD = 291;
	static readonly KW_DATE_SUB = 292;
	static readonly KW_EXTRACT = 293;
	static readonly KW_LOCALTIMESTAMP = 294;
	static readonly KW_NOW = 295;
	static readonly KW_POSITION = 296;
	static readonly KW_SUBSTR = 297;
	static readonly KW_SUBSTRING = 298;
	static readonly KW_SYSDATE = 299;
	static readonly KW_TRIM = 300;
	static readonly KW_UTC_DATE = 301;
	static readonly KW_UTC_TIME = 302;
	static readonly KW_UTC_TIMESTAMP = 303;
	static readonly KW_ACCOUNT = 304;
	static readonly KW_ACTION = 305;
	static readonly KW_AFTER = 306;
	static readonly KW_AGGREGATE = 307;
	static readonly KW_ALGORITHM = 308;
	static readonly KW_ANY = 309;
	static readonly KW_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS = 310;
	static readonly KW_AT = 311;
	static readonly KW_AUTHORS = 312;
	static readonly KW_AUTOCOMMIT = 313;
	static readonly KW_AUTOEXTEND_SIZE = 314;
	static readonly KW_AUTO_INCREMENT = 315;
	static readonly KW_AVG_ROW_LENGTH = 316;
	static readonly KW_BEGIN = 317;
	static readonly KW_BINLOG = 318;
	static readonly KW_BIT = 319;
	static readonly KW_BLOCK = 320;
	static readonly KW_BOOL = 321;
	static readonly KW_BOOLEAN = 322;
	static readonly KW_BTREE = 323;
	static readonly KW_CACHE = 324;
	static readonly KW_CASCADED = 325;
	static readonly KW_CHAIN = 326;
	static readonly KW_CHANGED = 327;
	static readonly KW_CHANNEL = 328;
	static readonly KW_CHECKSUM = 329;
	static readonly KW_CHALLENGE_RESPONSE = 330;
	static readonly KW_CIPHER = 331;
	static readonly KW_CLASS_ORIGIN = 332;
	static readonly KW_CLIENT = 333;
	static readonly KW_CLOSE = 334;
	static readonly KW_COALESCE = 335;
	static readonly KW_CODE = 336;
	static readonly KW_COLUMNS = 337;
	static readonly KW_COLUMN_FORMAT = 338;
	static readonly KW_COLUMN_NAME = 339;
	static readonly KW_COMMENT = 340;
	static readonly KW_COMMIT = 341;
	static readonly KW_COMPACT = 342;
	static readonly KW_COMPLETION = 343;
	static readonly KW_COMPONENT = 344;
	static readonly KW_COMPRESSED = 345;
	static readonly KW_COMPRESSION = 346;
	static readonly KW_CONCURRENT = 347;
	static readonly KW_CONNECT = 348;
	static readonly KW_CONNECTION = 349;
	static readonly KW_CONSISTENT = 350;
	static readonly KW_CONSTRAINT_CATALOG = 351;
	static readonly KW_CONSTRAINT_SCHEMA = 352;
	static readonly KW_CONSTRAINT_NAME = 353;
	static readonly KW_CONTAINS = 354;
	static readonly KW_CONTEXT = 355;
	static readonly KW_CONTRIBUTORS = 356;
	static readonly KW_COPY = 357;
	static readonly KW_CPU = 358;
	static readonly KW_CURSOR_NAME = 359;
	static readonly KW_DATA = 360;
	static readonly KW_DATAFILE = 361;
	static readonly KW_DEALLOCATE = 362;
	static readonly KW_DEFAULT_AUTH = 363;
	static readonly KW_DEFINER = 364;
	static readonly KW_DELAY_KEY_WRITE = 365;
	static readonly KW_DES_KEY_FILE = 366;
	static readonly KW_DIRECTORY = 367;
	static readonly KW_DISABLE = 368;
	static readonly KW_DISCARD = 369;
	static readonly KW_DISK = 370;
	static readonly KW_DO = 371;
	static readonly KW_DUMPFILE = 372;
	static readonly KW_DUPLICATE = 373;
	static readonly KW_DYNAMIC = 374;
	static readonly KW_ENABLE = 375;
	static readonly KW_ENCRYPTION = 376;
	static readonly KW_ENCRYPTION_KEY_ID = 377;
	static readonly KW_END = 378;
	static readonly KW_ENDS = 379;
	static readonly KW_ENGINE = 380;
	static readonly KW_ENGINES = 381;
	static readonly KW_ERROR = 382;
	static readonly KW_ERRORS = 383;
	static readonly KW_ESCAPE = 384;
	static readonly KW_EVENT = 385;
	static readonly KW_EVENTS = 386;
	static readonly KW_EVERY = 387;
	static readonly KW_EXCHANGE = 388;
	static readonly KW_EXCLUSIVE = 389;
	static readonly KW_EXPIRE = 390;
	static readonly KW_EXPORT = 391;
	static readonly KW_EXTENDED = 392;
	static readonly KW_EXTENT_SIZE = 393;
	static readonly KW_FACTOR = 394;
	static readonly KW_FAILED_LOGIN_ATTEMPTS = 395;
	static readonly KW_FAST = 396;
	static readonly KW_FAULTS = 397;
	static readonly KW_FIELDS = 398;
	static readonly KW_FILE_BLOCK_SIZE = 399;
	static readonly KW_FILTER = 400;
	static readonly KW_FINISH = 401;
	static readonly KW_FIRST = 402;
	static readonly KW_FIXED = 403;
	static readonly KW_FLUSH = 404;
	static readonly KW_FOLLOWING = 405;
	static readonly KW_FOLLOWS = 406;
	static readonly KW_FOUND = 407;
	static readonly KW_FULL = 408;
	static readonly KW_FUNCTION = 409;
	static readonly KW_GENERAL = 410;
	static readonly KW_GET_MASTER_PUBLIC_KEY = 411;
	static readonly KW_GET_SOURCE_PUBLIC_KEY = 412;
	static readonly KW_GLOBAL = 413;
	static readonly KW_GRANTS = 414;
	static readonly KW_GROUP_REPLICATION = 415;
	static readonly KW_GTID_ONLY = 416;
	static readonly KW_HANDLER = 417;
	static readonly KW_HASH = 418;
	static readonly KW_HELP = 419;
	static readonly KW_HISTORY = 420;
	static readonly KW_HOST = 421;
	static readonly KW_HOSTS = 422;
	static readonly KW_IDENTIFIED = 423;
	static readonly KW_IGNORE_SERVER_IDS = 424;
	static readonly KW_IMPORT = 425;
	static readonly KW_INDEXES = 426;
	static readonly KW_INITIAL = 427;
	static readonly KW_INITIAL_SIZE = 428;
	static readonly KW_INITIATE = 429;
	static readonly KW_INPLACE = 430;
	static readonly KW_INSERT_METHOD = 431;
	static readonly KW_INSTALL = 432;
	static readonly KW_INSTANCE = 433;
	static readonly KW_INSTANT = 434;
	static readonly KW_INVISIBLE = 435;
	static readonly KW_INVOKER = 436;
	static readonly KW_IO = 437;
	static readonly KW_IO_THREAD = 438;
	static readonly KW_IPC = 439;
	static readonly KW_ISOLATION = 440;
	static readonly KW_ISSUER = 441;
	static readonly KW_JSON = 442;
	static readonly KW_KEY_BLOCK_SIZE = 443;
	static readonly KW_LANGUAGE = 444;
	static readonly KW_LAST = 445;
	static readonly KW_LEAVES = 446;
	static readonly KW_LESS = 447;
	static readonly KW_LEVEL = 448;
	static readonly KW_LIST = 449;
	static readonly KW_LOCAL = 450;
	static readonly KW_LOGFILE = 451;
	static readonly KW_LOGS = 452;
	static readonly KW_MASTER = 453;
	static readonly KW_MASTER_AUTO_POSITION = 454;
	static readonly KW_MASTER_COMPRESSION_ALGORITHMS = 455;
	static readonly KW_MASTER_CONNECT_RETRY = 456;
	static readonly KW_MASTER_DELAY = 457;
	static readonly KW_MASTER_HEARTBEAT_PERIOD = 458;
	static readonly KW_MASTER_HOST = 459;
	static readonly KW_MASTER_LOG_FILE = 460;
	static readonly KW_MASTER_LOG_POS = 461;
	static readonly KW_MASTER_PASSWORD = 462;
	static readonly KW_MASTER_PORT = 463;
	static readonly KW_MASTER_PUBLIC_KEY_PATH = 464;
	static readonly KW_MASTER_RETRY_COUNT = 465;
	static readonly KW_MASTER_SSL = 466;
	static readonly KW_MASTER_SSL_CA = 467;
	static readonly KW_MASTER_SSL_CAPATH = 468;
	static readonly KW_MASTER_SSL_CERT = 469;
	static readonly KW_MASTER_SSL_CIPHER = 470;
	static readonly KW_MASTER_SSL_CRL = 471;
	static readonly KW_MASTER_SSL_CRLPATH = 472;
	static readonly KW_MASTER_SSL_KEY = 473;
	static readonly KW_MASTER_TLS_CIPHERSUITES = 474;
	static readonly KW_MASTER_TLS_VERSION = 475;
	static readonly KW_MASTER_USER = 476;
	static readonly KW_MASTER_ZSTD_COMPRESSION_LEVEL = 477;
	static readonly KW_MAX_CONNECTIONS_PER_HOUR = 478;
	static readonly KW_MAX_QUERIES_PER_HOUR = 479;
	static readonly KW_MAX_ROWS = 480;
	static readonly KW_MAX_SIZE = 481;
	static readonly KW_MAX_UPDATES_PER_HOUR = 482;
	static readonly KW_MAX_USER_CONNECTIONS = 483;
	static readonly KW_MEDIUM = 484;
	static readonly KW_MEMBER = 485;
	static readonly KW_MERGE = 486;
	static readonly KW_MESSAGE_TEXT = 487;
	static readonly KW_MID = 488;
	static readonly KW_MIGRATE = 489;
	static readonly KW_MIN_ROWS = 490;
	static readonly KW_MODE = 491;
	static readonly KW_MODIFY = 492;
	static readonly KW_MUTEX = 493;
	static readonly KW_MYSQL = 494;
	static readonly KW_MYSQL_ERRNO = 495;
	static readonly KW_NAME = 496;
	static readonly KW_NAMES = 497;
	static readonly KW_NCHAR = 498;
	static readonly KW_NETWORK_NAMESPACE = 499;
	static readonly KW_NEVER = 500;
	static readonly KW_NEXT = 501;
	static readonly KW_NO = 502;
	static readonly KW_NOWAIT = 503;
	static readonly KW_NODEGROUP = 504;
	static readonly KW_NONE = 505;
	static readonly KW_ODBC = 506;
	static readonly KW_OFF = 507;
	static readonly KW_OFFLINE = 508;
	static readonly KW_OFFSET = 509;
	static readonly KW_OF = 510;
	static readonly KW_OLD = 511;
	static readonly KW_OLD_PASSWORD = 512;
	static readonly KW_ONE = 513;
	static readonly KW_ONLINE = 514;
	static readonly KW_ONLY = 515;
	static readonly KW_OPEN = 516;
	static readonly KW_OPTIMIZER_COSTS = 517;
	static readonly KW_OPTIONS = 518;
	static readonly KW_OWNER = 519;
	static readonly KW_PACK_KEYS = 520;
	static readonly KW_PAGE = 521;
	static readonly KW_PAGE_CHECKSUM = 522;
	static readonly KW_PAGE_COMPRESSED = 523;
	static readonly KW_PAGE_COMPRESSION_LEVEL = 524;
	static readonly KW_PARSER = 525;
	static readonly KW_PARTIAL = 526;
	static readonly KW_PARTITIONING = 527;
	static readonly KW_PARTITIONS = 528;
	static readonly KW_PASSWORD = 529;
	static readonly KW_PASSWORD_LOCK_TIME = 530;
	static readonly KW_PERSIST = 531;
	static readonly KW_PERSIST_ONLY = 532;
	static readonly KW_PHASE = 533;
	static readonly KW_PLUGIN = 534;
	static readonly KW_PLUGIN_DIR = 535;
	static readonly KW_PLUGINS = 536;
	static readonly KW_PORT = 537;
	static readonly KW_PRECEDES = 538;
	static readonly KW_PRECEDING = 539;
	static readonly KW_PREPARE = 540;
	static readonly KW_PRESERVE = 541;
	static readonly KW_PREV = 542;
	static readonly KW_PRIVILEGE_CHECKS_USER = 543;
	static readonly KW_PROCESSLIST = 544;
	static readonly KW_PROFILE = 545;
	static readonly KW_PROFILES = 546;
	static readonly KW_PROXY = 547;
	static readonly KW_QUERY = 548;
	static readonly KW_QUICK = 549;
	static readonly KW_REBUILD = 550;
	static readonly KW_RECOVER = 551;
	static readonly KW_RECURSIVE = 552;
	static readonly KW_REDO_BUFFER_SIZE = 553;
	static readonly KW_REDUNDANT = 554;
	static readonly KW_REGISTRATION = 555;
	static readonly KW_RELAY = 556;
	static readonly KW_RELAY_LOG_FILE = 557;
	static readonly KW_RELAY_LOG_POS = 558;
	static readonly KW_RELAYLOG = 559;
	static readonly KW_REMOVE = 560;
	static readonly KW_REORGANIZE = 561;
	static readonly KW_REPAIR = 562;
	static readonly KW_REPLICA = 563;
	static readonly KW_REPLICAS = 564;
	static readonly KW_REPLICATE_DO_DB = 565;
	static readonly KW_REPLICATE_DO_TABLE = 566;
	static readonly KW_REPLICATE_IGNORE_DB = 567;
	static readonly KW_REPLICATE_IGNORE_TABLE = 568;
	static readonly KW_REPLICATE_REWRITE_DB = 569;
	static readonly KW_REPLICATE_WILD_DO_TABLE = 570;
	static readonly KW_REPLICATE_WILD_IGNORE_TABLE = 571;
	static readonly KW_REPLICATION = 572;
	static readonly KW_REQUIRE_ROW_FORMAT = 573;
	static readonly KW_REQUIRE_TABLE_PRIMARY_KEY_CHECK = 574;
	static readonly KW_RESET = 575;
	static readonly KW_RESTART = 576;
	static readonly KW_RESUME = 577;
	static readonly KW_RETURNED_SQLSTATE = 578;
	static readonly KW_RETURNING = 579;
	static readonly KW_RETURNS = 580;
	static readonly KW_REUSE = 581;
	static readonly KW_ROLE = 582;
	static readonly KW_ROLLBACK = 583;
	static readonly KW_ROLLUP = 584;
	static readonly KW_ROTATE = 585;
	static readonly KW_ROW = 586;
	static readonly KW_ROWS = 587;
	static readonly KW_ROW_FORMAT = 588;
	static readonly KW_SAVEPOINT = 589;
	static readonly KW_SCHEDULE = 590;
	static readonly KW_SECURITY = 591;
	static readonly KW_SERVER = 592;
	static readonly KW_SESSION = 593;
	static readonly KW_SHARE = 594;
	static readonly KW_SHARED = 595;
	static readonly KW_SIGNED = 596;
	static readonly KW_SIMPLE = 597;
	static readonly KW_SLAVE = 598;
	static readonly KW_SLOW = 599;
	static readonly KW_SNAPSHOT = 600;
	static readonly KW_SOCKET = 601;
	static readonly KW_SOME = 602;
	static readonly KW_SONAME = 603;
	static readonly KW_SOUNDS = 604;
	static readonly KW_SOURCE = 605;
	static readonly KW_SOURCE_BIND = 606;
	static readonly KW_SOURCE_HOST = 607;
	static readonly KW_SOURCE_USER = 608;
	static readonly KW_SOURCE_PASSWORD = 609;
	static readonly KW_SOURCE_PORT = 610;
	static readonly KW_SOURCE_LOG_FILE = 611;
	static readonly KW_SOURCE_LOG_POS = 612;
	static readonly KW_SOURCE_AUTO_POSITION = 613;
	static readonly KW_SOURCE_HEARTBEAT_PERIOD = 614;
	static readonly KW_SOURCE_CONNECT_RETRY = 615;
	static readonly KW_SOURCE_RETRY_COUNT = 616;
	static readonly KW_SOURCE_CONNECTION_AUTO_FAILOVER = 617;
	static readonly KW_SOURCE_DELAY = 618;
	static readonly KW_SOURCE_COMPRESSION_ALGORITHMS = 619;
	static readonly KW_SOURCE_ZSTD_COMPRESSION_LEVEL = 620;
	static readonly KW_SOURCE_SSL = 621;
	static readonly KW_SOURCE_SSL_CA = 622;
	static readonly KW_SOURCE_SSL_CAPATH = 623;
	static readonly KW_SOURCE_SSL_CERT = 624;
	static readonly KW_SOURCE_SSL_CRL = 625;
	static readonly KW_SOURCE_SSL_CRLPATH = 626;
	static readonly KW_SOURCE_SSL_KEY = 627;
	static readonly KW_SOURCE_SSL_CIPHER = 628;
	static readonly KW_SOURCE_SSL_VERIFY_SERVER_CERT = 629;
	static readonly KW_SOURCE_TLS_VERSION = 630;
	static readonly KW_SOURCE_TLS_CIPHERSUITES = 631;
	static readonly KW_SOURCE_PUBLIC_KEY_PATH = 632;
	static readonly KW_SQL_AFTER_GTIDS = 633;
	static readonly KW_SQL_AFTER_MTS_GAPS = 634;
	static readonly KW_SQL_BEFORE_GTIDS = 635;
	static readonly KW_SQL_BUFFER_RESULT = 636;
	static readonly KW_SQL_CACHE = 637;
	static readonly KW_SQL_NO_CACHE = 638;
	static readonly KW_SQL_THREAD = 639;
	static readonly KW_START = 640;
	static readonly KW_STARTS = 641;
	static readonly KW_STATS_AUTO_RECALC = 642;
	static readonly KW_STATS_PERSISTENT = 643;
	static readonly KW_STATS_SAMPLE_PAGES = 644;
	static readonly KW_STATUS = 645;
	static readonly KW_STOP = 646;
	static readonly KW_STORAGE = 647;
	static readonly KW_STORED = 648;
	static readonly KW_STRING = 649;
	static readonly KW_SUBCLASS_ORIGIN = 650;
	static readonly KW_SUBJECT = 651;
	static readonly KW_SUBPARTITION = 652;
	static readonly KW_SUBPARTITIONS = 653;
	static readonly KW_SUSPEND = 654;
	static readonly KW_SWAPS = 655;
	static readonly KW_SWITCHES = 656;
	static readonly KW_TABLE_NAME = 657;
	static readonly KW_TABLESPACE = 658;
	static readonly KW_TABLE_TYPE = 659;
	static readonly KW_TEMPORARY = 660;
	static readonly KW_TEMPTABLE = 661;
	static readonly KW_THAN = 662;
	static readonly KW_TRADITIONAL = 663;
	static readonly KW_TRANSACTION = 664;
	static readonly KW_TRANSACTIONAL = 665;
	static readonly KW_TREE = 666;
	static readonly KW_TRIGGERS = 667;
	static readonly KW_TRUNCATE = 668;
	static readonly KW_UNBOUNDED = 669;
	static readonly KW_UNDEFINED = 670;
	static readonly KW_UNDOFILE = 671;
	static readonly KW_UNDO_BUFFER_SIZE = 672;
	static readonly KW_UNINSTALL = 673;
	static readonly KW_UNKNOWN = 674;
	static readonly KW_UNREGISTER = 675;
	static readonly KW_UNTIL = 676;
	static readonly KW_UPGRADE = 677;
	static readonly KW_USER = 678;
	static readonly KW_USE_FRM = 679;
	static readonly KW_USER_RESOURCES = 680;
	static readonly KW_VALIDATION = 681;
	static readonly KW_VALUE = 682;
	static readonly KW_VARIABLES = 683;
	static readonly KW_VIEW = 684;
	static readonly KW_VIRTUAL = 685;
	static readonly KW_VISIBLE = 686;
	static readonly KW_WAIT = 687;
	static readonly KW_WARNINGS = 688;
	static readonly KW_WINDOW = 689;
	static readonly KW_WITHOUT = 690;
	static readonly KW_WORK = 691;
	static readonly KW_WRAPPER = 692;
	static readonly KW_X509 = 693;
	static readonly KW_XA = 694;
	static readonly KW_XML = 695;
	static readonly KW_QUARTER = 696;
	static readonly KW_MONTH = 697;
	static readonly KW_DAY = 698;
	static readonly KW_HOUR = 699;
	static readonly KW_MINUTE = 700;
	static readonly KW_WEEK = 701;
	static readonly KW_SECOND = 702;
	static readonly KW_MICROSECOND = 703;
	static readonly KW_ADMIN = 704;
	static readonly KW_APPLICATION_PASSWORD_ADMIN = 705;
	static readonly KW_AUDIT_ABORT_EXEMPT = 706;
	static readonly KW_AUDIT_ADMIN = 707;
	static readonly KW_AUTHENTICATION = 708;
	static readonly KW_AUTHENTICATION_POLICY_ADMIN = 709;
	static readonly KW_BACKUP_ADMIN = 710;
	static readonly KW_BINLOG_ADMIN = 711;
	static readonly KW_BINLOG_ENCRYPTION_ADMIN = 712;
	static readonly KW_CLONE = 713;
	static readonly KW_CLONE_ADMIN = 714;
	static readonly KW_CONNECTION_ADMIN = 715;
	static readonly KW_ENCRYPTION_KEY_ADMIN = 716;
	static readonly KW_EXECUTE = 717;
	static readonly KW_FILE = 718;
	static readonly KW_FIREWALL_ADMIN = 719;
	static readonly KW_FIREWALL_EXEMPT = 720;
	static readonly KW_FIREWALL_USER = 721;
	static readonly KW_FLUSH_OPTIMIZER_COSTS = 722;
	static readonly KW_FLUSH_STATUS = 723;
	static readonly KW_FLUSH_TABLES = 724;
	static readonly KW_FLUSH_USER_RESOURCES = 725;
	static readonly KW_GROUP_REPLICATION_ADMIN = 726;
	static readonly KW_INNODB_REDO_LOG_ARCHIVE = 727;
	static readonly KW_INNODB_REDO_LOG_ENABLE = 728;
	static readonly KW_INVOKE = 729;
	static readonly KW_LAMBDA = 730;
	static readonly KW_NDB_STORED_USER = 731;
	static readonly KW_PASSWORDLESS_USER_ADMIN = 732;
	static readonly KW_PERSIST_RO_VARIABLES_ADMIN = 733;
	static readonly KW_PRIVILEGES = 734;
	static readonly KW_PROCESS = 735;
	static readonly KW_RELOAD = 736;
	static readonly KW_REPLICATION_APPLIER = 737;
	static readonly KW_REPLICATION_SLAVE_ADMIN = 738;
	static readonly KW_RESOURCE = 739;
	static readonly KW_RESOURCE_GROUP_ADMIN = 740;
	static readonly KW_RESOURCE_GROUP_USER = 741;
	static readonly KW_ROLE_ADMIN = 742;
	static readonly KW_ROUTINE = 743;
	static readonly KW_S3 = 744;
	static readonly KW_SERVICE_CONNECTION_ADMIN = 745;
	static readonly KW_SESSION_VARIABLES_ADMIN = 746;
	static readonly KW_SET_USER_ID = 747;
	static readonly KW_SHOW_ROUTINE = 748;
	static readonly KW_SHUTDOWN = 749;
	static readonly KW_SUPER = 750;
	static readonly KW_SYSTEM_VARIABLES_ADMIN = 751;
	static readonly KW_TABLES = 752;
	static readonly KW_TABLE_ENCRYPTION_ADMIN = 753;
	static readonly KW_VERSION_TOKEN_ADMIN = 754;
	static readonly KW_XA_RECOVER_ADMIN = 755;
	static readonly KW_ARMSCII8 = 756;
	static readonly KW_ASCII = 757;
	static readonly KW_BIG5 = 758;
	static readonly KW_CP1250 = 759;
	static readonly KW_CP1251 = 760;
	static readonly KW_CP1256 = 761;
	static readonly KW_CP1257 = 762;
	static readonly KW_CP850 = 763;
	static readonly KW_CP852 = 764;
	static readonly KW_CP866 = 765;
	static readonly KW_CP932 = 766;
	static readonly KW_DEC8 = 767;
	static readonly KW_EUCJPMS = 768;
	static readonly KW_EUCKR = 769;
	static readonly KW_GB18030 = 770;
	static readonly KW_GB2312 = 771;
	static readonly KW_GBK = 772;
	static readonly KW_GEOSTD8 = 773;
	static readonly KW_GREEK = 774;
	static readonly KW_HEBREW = 775;
	static readonly KW_HP8 = 776;
	static readonly KW_KEYBCS2 = 777;
	static readonly KW_KOI8R = 778;
	static readonly KW_KOI8U = 779;
	static readonly KW_LATIN1 = 780;
	static readonly KW_LATIN2 = 781;
	static readonly KW_LATIN5 = 782;
	static readonly KW_LATIN7 = 783;
	static readonly KW_MACCE = 784;
	static readonly KW_MACROMAN = 785;
	static readonly KW_SJIS = 786;
	static readonly KW_SWE7 = 787;
	static readonly KW_TIS620 = 788;
	static readonly KW_UCS2 = 789;
	static readonly KW_UJIS = 790;
	static readonly KW_UTF16 = 791;
	static readonly KW_UTF16LE = 792;
	static readonly KW_UTF32 = 793;
	static readonly KW_UTF8 = 794;
	static readonly KW_UTF8MB3 = 795;
	static readonly KW_UTF8MB4 = 796;
	static readonly KW_ARCHIVE = 797;
	static readonly KW_BLACKHOLE = 798;
	static readonly KW_CSV = 799;
	static readonly KW_FEDERATED = 800;
	static readonly KW_INNODB = 801;
	static readonly KW_MEMORY = 802;
	static readonly KW_MRG_MYISAM = 803;
	static readonly KW_MYISAM = 804;
	static readonly KW_NDB = 805;
	static readonly KW_NDBCLUSTER = 806;
	static readonly KW_PERFORMANCE_SCHEMA = 807;
	static readonly KW_TOKUDB = 808;
	static readonly KW_REPEATABLE = 809;
	static readonly KW_COMMITTED = 810;
	static readonly KW_UNCOMMITTED = 811;
	static readonly KW_SERIALIZABLE = 812;
	static readonly KW_GEOMETRYCOLLECTION = 813;
	static readonly KW_GEOMCOLLECTION = 814;
	static readonly KW_GEOMETRY = 815;
	static readonly KW_LINESTRING = 816;
	static readonly KW_MULTILINESTRING = 817;
	static readonly KW_MULTIPOINT = 818;
	static readonly KW_MULTIPOLYGON = 819;
	static readonly KW_POINT = 820;
	static readonly KW_POLYGON = 821;
	static readonly KW_CATALOG_NAME = 822;
	static readonly KW_CHARSET = 823;
	static readonly KW_COLLATION = 824;
	static readonly KW_ENGINE_ATTRIBUTE = 825;
	static readonly KW_FORMAT = 826;
	static readonly KW_GET_FORMAT = 827;
	static readonly KW_INTERSECT = 828;
	static readonly KW_RANDOM = 829;
	static readonly KW_REVERSE = 830;
	static readonly KW_ROW_COUNT = 831;
	static readonly KW_SCHEMA_NAME = 832;
	static readonly KW_SECONDARY_ENGINE_ATTRIBUTE = 833;
	static readonly KW_SRID = 834;
	static readonly KW_SYSTEM = 835;
	static readonly KW_SYSTEM_USER = 836;
	static readonly KW_THREAD_PRIORITY = 837;
	static readonly KW_TP_CONNECTION_ADMIN = 838;
	static readonly KW_TYPE = 839;
	static readonly KW_WEIGHT_STRING = 840;
	static readonly VAR_ASSIGN = 841;
	static readonly PLUS_ASSIGN = 842;
	static readonly MINUS_ASSIGN = 843;
	static readonly MULT_ASSIGN = 844;
	static readonly DIV_ASSIGN = 845;
	static readonly MOD_ASSIGN = 846;
	static readonly AND_ASSIGN = 847;
	static readonly XOR_ASSIGN = 848;
	static readonly OR_ASSIGN = 849;
	static readonly STAR = 850;
	static readonly DIVIDE = 851;
	static readonly MODULE = 852;
	static readonly PLUS = 853;
	static readonly MINUS = 854;
	static readonly DIV = 855;
	static readonly MOD = 856;
	static readonly EQUAL_SYMBOL = 857;
	static readonly GREATER_SYMBOL = 858;
	static readonly LESS_SYMBOL = 859;
	static readonly EXCLAMATION_SYMBOL = 860;
	static readonly BIT_NOT_OP = 861;
	static readonly BIT_OR_OP = 862;
	static readonly BIT_AND_OP = 863;
	static readonly BIT_XOR_OP = 864;
	static readonly DOT = 865;
	static readonly LR_BRACKET = 866;
	static readonly RR_BRACKET = 867;
	static readonly COMMA = 868;
	static readonly SEMI = 869;
	static readonly AT_SIGN = 870;
	static readonly ZERO_DECIMAL = 871;
	static readonly ONE_DECIMAL = 872;
	static readonly TWO_DECIMAL = 873;
	static readonly THREE_DECIMAL = 874;
	static readonly SINGLE_QUOTE_SYMB = 875;
	static readonly DOUBLE_QUOTE_SYMB = 876;
	static readonly REVERSE_QUOTE_SYMB = 877;
	static readonly COLON_SYMB = 878;
	static readonly CHARSET_REVERSE_QOUTE_STRING = 879;
	static readonly FILESIZE_LITERAL = 880;
	static readonly START_NATIONAL_STRING_LITERAL = 881;
	static readonly STRING_LITERAL = 882;
	static readonly DECIMAL_LITERAL = 883;
	static readonly HEXADECIMAL_LITERAL = 884;
	static readonly REAL_LITERAL = 885;
	static readonly NULL_SPEC_LITERAL = 886;
	static readonly BIT_STRING = 887;
	static readonly STRING_CHARSET_NAME = 888;
	static readonly ID = 889;
	static readonly REVERSE_QUOTE_ID = 890;
	static readonly HOST_IP_ADDRESS = 891;
	static readonly LOCAL_ID = 892;
	static readonly GLOBAL_ID = 893;
	static readonly PERSIST_ID = 894;
	static readonly ERROR_RECONGNIGION = 895;
	static readonly RULE_program = 0;
	static readonly RULE_singleStatement = 1;
	static readonly RULE_sqlStatement = 2;
	static readonly RULE_emptyStatement_ = 3;
	static readonly RULE_ddlStatement = 4;
	static readonly RULE_dmlStatement = 5;
	static readonly RULE_transactionStatement = 6;
	static readonly RULE_replicationStatement = 7;
	static readonly RULE_preparedStatement = 8;
	static readonly RULE_compoundStatement = 9;
	static readonly RULE_administrationStatement = 10;
	static readonly RULE_utilityStatement = 11;
	static readonly RULE_createDatabase = 12;
	static readonly RULE_createEvent = 13;
	static readonly RULE_createIndex = 14;
	static readonly RULE_createLogfileGroup = 15;
	static readonly RULE_createProcedure = 16;
	static readonly RULE_createRole = 17;
	static readonly RULE_createServer = 18;
	static readonly RULE_createTable = 19;
	static readonly RULE_createTablespaceInnodb = 20;
	static readonly RULE_createTablespaceNdb = 21;
	static readonly RULE_createTrigger = 22;
	static readonly RULE_withClause = 23;
	static readonly RULE_commonTableExpressions = 24;
	static readonly RULE_createView = 25;
	static readonly RULE_createDatabaseOption = 26;
	static readonly RULE_charSet = 27;
	static readonly RULE_currentUserExpression = 28;
	static readonly RULE_ownerStatement = 29;
	static readonly RULE_scheduleExpression = 30;
	static readonly RULE_timestampValue = 31;
	static readonly RULE_intervalExpr = 32;
	static readonly RULE_intervalType = 33;
	static readonly RULE_enableType = 34;
	static readonly RULE_indexType = 35;
	static readonly RULE_indexOption = 36;
	static readonly RULE_procedureParameter = 37;
	static readonly RULE_routineOption = 38;
	static readonly RULE_serverOption = 39;
	static readonly RULE_createDefinitions = 40;
	static readonly RULE_createDefinition = 41;
	static readonly RULE_checkConstraintDefinition = 42;
	static readonly RULE_constraintSymbol = 43;
	static readonly RULE_columnDefinition = 44;
	static readonly RULE_columnConstraint = 45;
	static readonly RULE_referenceDefinition = 46;
	static readonly RULE_referenceAction = 47;
	static readonly RULE_referenceControlType = 48;
	static readonly RULE_tableOption = 49;
	static readonly RULE_tableType = 50;
	static readonly RULE_tablespaceStorage = 51;
	static readonly RULE_partitionDefinitions = 52;
	static readonly RULE_partitionFunctionDefinition = 53;
	static readonly RULE_subpartitionFunctionDefinition = 54;
	static readonly RULE_partitionDefinition = 55;
	static readonly RULE_partitionDefinerAtom = 56;
	static readonly RULE_partitionDefinerVector = 57;
	static readonly RULE_subpartitionDefinition = 58;
	static readonly RULE_partitionOption = 59;
	static readonly RULE_alterDatabase = 60;
	static readonly RULE_alterEvent = 61;
	static readonly RULE_alterFunction = 62;
	static readonly RULE_alterInstance = 63;
	static readonly RULE_alterLogfileGroup = 64;
	static readonly RULE_alterProcedure = 65;
	static readonly RULE_alterServer = 66;
	static readonly RULE_alterTable = 67;
	static readonly RULE_alterTablespace = 68;
	static readonly RULE_alterView = 69;
	static readonly RULE_alterOption = 70;
	static readonly RULE_alterPartitionSpecification = 71;
	static readonly RULE_dropDatabase = 72;
	static readonly RULE_dropEvent = 73;
	static readonly RULE_dropIndex = 74;
	static readonly RULE_dropLogfileGroup = 75;
	static readonly RULE_dropProcedure = 76;
	static readonly RULE_dropFunction = 77;
	static readonly RULE_dropServer = 78;
	static readonly RULE_dropSpatial = 79;
	static readonly RULE_dropTable = 80;
	static readonly RULE_dropTablespace = 81;
	static readonly RULE_dropTrigger = 82;
	static readonly RULE_dropView = 83;
	static readonly RULE_dropRole = 84;
	static readonly RULE_setRole = 85;
	static readonly RULE_renameTable = 86;
	static readonly RULE_renameTableClause = 87;
	static readonly RULE_truncateTable = 88;
	static readonly RULE_callStatement = 89;
	static readonly RULE_deleteStatement = 90;
	static readonly RULE_doStatement = 91;
	static readonly RULE_handlerStatement = 92;
	static readonly RULE_insertStatement = 93;
	static readonly RULE_asRowAlias = 94;
	static readonly RULE_selectOrTableOrValues = 95;
	static readonly RULE_interSectStatement = 96;
	static readonly RULE_interSectQuery = 97;
	static readonly RULE_loadDataStatement = 98;
	static readonly RULE_loadXmlStatement = 99;
	static readonly RULE_parenthesizedQuery = 100;
	static readonly RULE_replaceStatement = 101;
	static readonly RULE_selectStatement = 102;
	static readonly RULE_setOperations = 103;
	static readonly RULE_queryExpressionBody = 104;
	static readonly RULE_queryItem = 105;
	static readonly RULE_queryPrimary = 106;
	static readonly RULE_updateStatement = 107;
	static readonly RULE_valuesStatement = 108;
	static readonly RULE_parenthesizedQueryExpression = 109;
	static readonly RULE_queryBlock = 110;
	static readonly RULE_replaceStatementValuesOrSelectOrTable = 111;
	static readonly RULE_rowValuesList = 112;
	static readonly RULE_setAssignmentList = 113;
	static readonly RULE_updatedElement = 114;
	static readonly RULE_assignmentField = 115;
	static readonly RULE_lockClause = 116;
	static readonly RULE_singleDeleteStatement = 117;
	static readonly RULE_multipleDeleteStatement = 118;
	static readonly RULE_handlerOpenStatement = 119;
	static readonly RULE_handlerReadIndexStatement = 120;
	static readonly RULE_handlerReadStatement = 121;
	static readonly RULE_handlerCloseStatement = 122;
	static readonly RULE_importTableStatement = 123;
	static readonly RULE_singleUpdateStatement = 124;
	static readonly RULE_multipleUpdateStatement = 125;
	static readonly RULE_orderByClause = 126;
	static readonly RULE_orderByExpression = 127;
	static readonly RULE_tableSources = 128;
	static readonly RULE_tableSource = 129;
	static readonly RULE_tableSourceItem = 130;
	static readonly RULE_fullColumnNames = 131;
	static readonly RULE_indexHint = 132;
	static readonly RULE_indexHintType = 133;
	static readonly RULE_joinPart = 134;
	static readonly RULE_joinSpec = 135;
	static readonly RULE_queryExpression = 136;
	static readonly RULE_querySpecification = 137;
	static readonly RULE_unionStatement = 138;
	static readonly RULE_lateralStatement = 139;
	static readonly RULE_jsonTable = 140;
	static readonly RULE_jsonColumnList = 141;
	static readonly RULE_jsonColumn = 142;
	static readonly RULE_jsonOnEmpty = 143;
	static readonly RULE_jsonOnError = 144;
	static readonly RULE_selectSpec = 145;
	static readonly RULE_selectElements = 146;
	static readonly RULE_selectElement = 147;
	static readonly RULE_intoClause = 148;
	static readonly RULE_selectFieldsInto = 149;
	static readonly RULE_selectLinesInto = 150;
	static readonly RULE_fromClause = 151;
	static readonly RULE_groupByClause = 152;
	static readonly RULE_havingClause = 153;
	static readonly RULE_windowClause = 154;
	static readonly RULE_groupByItem = 155;
	static readonly RULE_limitClause = 156;
	static readonly RULE_limitClauseAtom = 157;
	static readonly RULE_startTransaction = 158;
	static readonly RULE_beginWork = 159;
	static readonly RULE_commitWork = 160;
	static readonly RULE_rollbackWork = 161;
	static readonly RULE_savepointStatement = 162;
	static readonly RULE_rollbackStatement = 163;
	static readonly RULE_releaseStatement = 164;
	static readonly RULE_lockTables = 165;
	static readonly RULE_unlockTables = 166;
	static readonly RULE_setAutocommitStatement = 167;
	static readonly RULE_setTransactionStatement = 168;
	static readonly RULE_transactionMode = 169;
	static readonly RULE_lockTableElement = 170;
	static readonly RULE_lockAction = 171;
	static readonly RULE_transactionOption = 172;
	static readonly RULE_transactionLevel = 173;
	static readonly RULE_changeMaster = 174;
	static readonly RULE_changeReplicationFilter = 175;
	static readonly RULE_changeReplicationSource = 176;
	static readonly RULE_purgeBinaryLogs = 177;
	static readonly RULE_startSlaveOrReplica = 178;
	static readonly RULE_stopSlaveOrReplica = 179;
	static readonly RULE_startGroupReplication = 180;
	static readonly RULE_stopGroupReplication = 181;
	static readonly RULE_masterOption = 182;
	static readonly RULE_stringMasterOption = 183;
	static readonly RULE_decimalMasterOption = 184;
	static readonly RULE_boolMasterOption = 185;
	static readonly RULE_v8NewMasterOption = 186;
	static readonly RULE_replicationSourceOption = 187;
	static readonly RULE_stringSourceOption = 188;
	static readonly RULE_decimalSourceOption = 189;
	static readonly RULE_boolSourceOption = 190;
	static readonly RULE_otherSourceOption = 191;
	static readonly RULE_channelOption = 192;
	static readonly RULE_replicationFilter = 193;
	static readonly RULE_tablePair = 194;
	static readonly RULE_threadType = 195;
	static readonly RULE_untilOption = 196;
	static readonly RULE_connectionOptions = 197;
	static readonly RULE_gtuidSet = 198;
	static readonly RULE_xaStartTransaction = 199;
	static readonly RULE_xaEndTransaction = 200;
	static readonly RULE_xaPrepareStatement = 201;
	static readonly RULE_xaCommitWork = 202;
	static readonly RULE_xaRollbackWork = 203;
	static readonly RULE_xaRecoverWork = 204;
	static readonly RULE_prepareStatement = 205;
	static readonly RULE_executeStatement = 206;
	static readonly RULE_deallocatePrepare = 207;
	static readonly RULE_routineBody = 208;
	static readonly RULE_blockStatement = 209;
	static readonly RULE_caseStatement = 210;
	static readonly RULE_ifStatement = 211;
	static readonly RULE_iterateStatement = 212;
	static readonly RULE_leaveStatement = 213;
	static readonly RULE_loopStatement = 214;
	static readonly RULE_repeatStatement = 215;
	static readonly RULE_returnStatement = 216;
	static readonly RULE_whileStatement = 217;
	static readonly RULE_cursorStatement = 218;
	static readonly RULE_declareVariable = 219;
	static readonly RULE_declareCondition = 220;
	static readonly RULE_declareCursor = 221;
	static readonly RULE_declareHandler = 222;
	static readonly RULE_handlerConditionValue = 223;
	static readonly RULE_procedureSqlStatement = 224;
	static readonly RULE_caseAlternative = 225;
	static readonly RULE_elifAlternative = 226;
	static readonly RULE_alterUser = 227;
	static readonly RULE_createUser = 228;
	static readonly RULE_dropUser = 229;
	static readonly RULE_grantStatement = 230;
	static readonly RULE_roleOption = 231;
	static readonly RULE_grantProxy = 232;
	static readonly RULE_alterResourceGroup = 233;
	static readonly RULE_createResourceGroup = 234;
	static readonly RULE_dropResourceGroup = 235;
	static readonly RULE_setResourceGroup = 236;
	static readonly RULE_resourceGroupVcpuSpec = 237;
	static readonly RULE_renameUser = 238;
	static readonly RULE_revokeStatement = 239;
	static readonly RULE_ignoreUnknownUser = 240;
	static readonly RULE_privilegeObjectType = 241;
	static readonly RULE_setPasswordStatement = 242;
	static readonly RULE_userSpecification = 243;
	static readonly RULE_alterUserAuthOption = 244;
	static readonly RULE_createUserAuthOption = 245;
	static readonly RULE_createUserInitialAuthOption = 246;
	static readonly RULE_userAuthOption = 247;
	static readonly RULE_authOptionClause = 248;
	static readonly RULE_authenticationRule = 249;
	static readonly RULE_tlsOption = 250;
	static readonly RULE_userResourceOption = 251;
	static readonly RULE_userPasswordOption = 252;
	static readonly RULE_userLockOption = 253;
	static readonly RULE_factorAuthOption = 254;
	static readonly RULE_registrationOption = 255;
	static readonly RULE_factor = 256;
	static readonly RULE_privelegeClause = 257;
	static readonly RULE_privilege = 258;
	static readonly RULE_privilegeLevel = 259;
	static readonly RULE_renameUserClause = 260;
	static readonly RULE_analyzeTable = 261;
	static readonly RULE_checkTable = 262;
	static readonly RULE_checksumTable = 263;
	static readonly RULE_optimizeTable = 264;
	static readonly RULE_repairTable = 265;
	static readonly RULE_tableActionOption = 266;
	static readonly RULE_checkTableOption = 267;
	static readonly RULE_createFunction = 268;
	static readonly RULE_installComponent = 269;
	static readonly RULE_variableExpr = 270;
	static readonly RULE_uninstallComponent = 271;
	static readonly RULE_installPlugin = 272;
	static readonly RULE_uninstallPlugin = 273;
	static readonly RULE_cloneStatement = 274;
	static readonly RULE_setStatement = 275;
	static readonly RULE_showStatement = 276;
	static readonly RULE_variableClause = 277;
	static readonly RULE_showCommonEntity = 278;
	static readonly RULE_showFilter = 279;
	static readonly RULE_showGlobalInfoClause = 280;
	static readonly RULE_showSchemaEntity = 281;
	static readonly RULE_showProfileType = 282;
	static readonly RULE_binlogStatement = 283;
	static readonly RULE_cacheIndexStatement = 284;
	static readonly RULE_flushStatement = 285;
	static readonly RULE_killStatement = 286;
	static readonly RULE_loadIndexIntoCache = 287;
	static readonly RULE_resetStatement = 288;
	static readonly RULE_resetOption = 289;
	static readonly RULE_resetPersist = 290;
	static readonly RULE_resetAllChannel = 291;
	static readonly RULE_reStartStatement = 292;
	static readonly RULE_shutdownStatement = 293;
	static readonly RULE_tableIndex = 294;
	static readonly RULE_flushOption = 295;
	static readonly RULE_flushTableOption = 296;
	static readonly RULE_loadedTableIndexes = 297;
	static readonly RULE_simpleDescribeStatement = 298;
	static readonly RULE_fullDescribeStatement = 299;
	static readonly RULE_analyzeDescribeStatement = 300;
	static readonly RULE_helpStatement = 301;
	static readonly RULE_useStatement = 302;
	static readonly RULE_signalStatement = 303;
	static readonly RULE_resignalStatement = 304;
	static readonly RULE_signalConditionInformation = 305;
	static readonly RULE_withStatement = 306;
	static readonly RULE_tableStatement = 307;
	static readonly RULE_diagnosticsStatement = 308;
	static readonly RULE_diagnosticsConditionInformationName = 309;
	static readonly RULE_describeObjectClause = 310;
	static readonly RULE_databaseNameCreate = 311;
	static readonly RULE_databaseName = 312;
	static readonly RULE_functionNameCreate = 313;
	static readonly RULE_functionName = 314;
	static readonly RULE_viewNameCreate = 315;
	static readonly RULE_viewName = 316;
	static readonly RULE_indexNameCreate = 317;
	static readonly RULE_indexNames = 318;
	static readonly RULE_indexName = 319;
	static readonly RULE_groupNameCreate = 320;
	static readonly RULE_groupName = 321;
	static readonly RULE_tableNameCreate = 322;
	static readonly RULE_tableNames = 323;
	static readonly RULE_tableName = 324;
	static readonly RULE_userOrRoleNames = 325;
	static readonly RULE_userOrRoleName = 326;
	static readonly RULE_columnNameCreate = 327;
	static readonly RULE_columnNames = 328;
	static readonly RULE_columnName = 329;
	static readonly RULE_tablespaceNameCreate = 330;
	static readonly RULE_tablespaceName = 331;
	static readonly RULE_partitionNameCreate = 332;
	static readonly RULE_partitionNames = 333;
	static readonly RULE_partitionName = 334;
	static readonly RULE_indexColumnName = 335;
	static readonly RULE_userHostPort = 336;
	static readonly RULE_userAtHost = 337;
	static readonly RULE_simpleUserName = 338;
	static readonly RULE_hostName = 339;
	static readonly RULE_userName = 340;
	static readonly RULE_mysqlVariable = 341;
	static readonly RULE_charsetName = 342;
	static readonly RULE_collationName = 343;
	static readonly RULE_engineName = 344;
	static readonly RULE_engineNameBase = 345;
	static readonly RULE_uuidSet = 346;
	static readonly RULE_xid = 347;
	static readonly RULE_xuidStringId = 348;
	static readonly RULE_fullId = 349;
	static readonly RULE_uidList = 350;
	static readonly RULE_uid = 351;
	static readonly RULE_simpleId = 352;
	static readonly RULE_dottedId = 353;
	static readonly RULE_decimalLiteral = 354;
	static readonly RULE_fileSizeLiteral = 355;
	static readonly RULE_stringLiteral = 356;
	static readonly RULE_booleanLiteral = 357;
	static readonly RULE_hexadecimalLiteral = 358;
	static readonly RULE_nullNotnull = 359;
	static readonly RULE_constant = 360;
	static readonly RULE_dataType = 361;
	static readonly RULE_collectionOptions = 362;
	static readonly RULE_convertedDataType = 363;
	static readonly RULE_lengthOneDimension = 364;
	static readonly RULE_lengthTwoDimension = 365;
	static readonly RULE_lengthTwoOptionalDimension = 366;
	static readonly RULE_indexColumnNames = 367;
	static readonly RULE_expressions = 368;
	static readonly RULE_valuesOrValueList = 369;
	static readonly RULE_expressionsWithDefaults = 370;
	static readonly RULE_expressionOrDefault = 371;
	static readonly RULE_constants = 372;
	static readonly RULE_simpleStrings = 373;
	static readonly RULE_userVariables = 374;
	static readonly RULE_defaultValue = 375;
	static readonly RULE_currentTimestamp = 376;
	static readonly RULE_ifExists = 377;
	static readonly RULE_ifNotExists = 378;
	static readonly RULE_orReplace = 379;
	static readonly RULE_functionCall = 380;
	static readonly RULE_specificFunction = 381;
	static readonly RULE_caseFuncAlternative = 382;
	static readonly RULE_levelsInWeightString = 383;
	static readonly RULE_levelInWeightListElement = 384;
	static readonly RULE_aggregateWindowedFunction = 385;
	static readonly RULE_nonAggregateWindowedFunction = 386;
	static readonly RULE_overClause = 387;
	static readonly RULE_windowSpec = 388;
	static readonly RULE_windowName = 389;
	static readonly RULE_frameClause = 390;
	static readonly RULE_frameUnits = 391;
	static readonly RULE_frameExtent = 392;
	static readonly RULE_frameBetween = 393;
	static readonly RULE_frameRange = 394;
	static readonly RULE_partitionClause = 395;
	static readonly RULE_scalarFunctionName = 396;
	static readonly RULE_passwordFunctionClause = 397;
	static readonly RULE_functionArgs = 398;
	static readonly RULE_functionArg = 399;
	static readonly RULE_expression = 400;
	static readonly RULE_predicate = 401;
	static readonly RULE_expressionAtom = 402;
	static readonly RULE_unaryOperator = 403;
	static readonly RULE_comparisonOperator = 404;
	static readonly RULE_comparisonBase = 405;
	static readonly RULE_logicalOperator = 406;
	static readonly RULE_bitOperator = 407;
	static readonly RULE_mathOperator = 408;
	static readonly RULE_jsonOperator = 409;
	static readonly RULE_charsetNameBase = 410;
	static readonly RULE_transactionLevelBase = 411;
	static readonly RULE_privilegesBase = 412;
	static readonly RULE_intervalTypeBase = 413;
	static readonly RULE_dataTypeBase = 414;
	static readonly RULE_keywordsCanBeId = 415;
	static readonly RULE_functionNameBase = 416;
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
	emptyStatement_(): EmptyStatement_Context;
	ddlStatement(): DdlStatementContext;
	dmlStatement(): DmlStatementContext;
	transactionStatement(): TransactionStatementContext;
	replicationStatement(): ReplicationStatementContext;
	preparedStatement(): PreparedStatementContext;
	compoundStatement(): CompoundStatementContext;
	administrationStatement(): AdministrationStatementContext;
	utilityStatement(): UtilityStatementContext;
	createDatabase(): CreateDatabaseContext;
	createEvent(): CreateEventContext;
	createIndex(): CreateIndexContext;
	createLogfileGroup(): CreateLogfileGroupContext;
	createProcedure(): CreateProcedureContext;
	createRole(): CreateRoleContext;
	createServer(): CreateServerContext;
	createTable(): CreateTableContext;
	createTablespaceInnodb(): CreateTablespaceInnodbContext;
	createTablespaceNdb(): CreateTablespaceNdbContext;
	createTrigger(): CreateTriggerContext;
	withClause(): WithClauseContext;
	commonTableExpressions(): CommonTableExpressionsContext;
	createView(): CreateViewContext;
	createDatabaseOption(): CreateDatabaseOptionContext;
	charSet(): CharSetContext;
	currentUserExpression(): CurrentUserExpressionContext;
	ownerStatement(): OwnerStatementContext;
	scheduleExpression(): ScheduleExpressionContext;
	timestampValue(): TimestampValueContext;
	intervalExpr(): IntervalExprContext;
	intervalType(): IntervalTypeContext;
	enableType(): EnableTypeContext;
	indexType(): IndexTypeContext;
	indexOption(): IndexOptionContext;
	procedureParameter(): ProcedureParameterContext;
	routineOption(): RoutineOptionContext;
	serverOption(): ServerOptionContext;
	createDefinitions(): CreateDefinitionsContext;
	createDefinition(): CreateDefinitionContext;
	checkConstraintDefinition(): CheckConstraintDefinitionContext;
	constraintSymbol(): ConstraintSymbolContext;
	columnDefinition(): ColumnDefinitionContext;
	columnConstraint(): ColumnConstraintContext;
	referenceDefinition(): ReferenceDefinitionContext;
	referenceAction(): ReferenceActionContext;
	referenceControlType(): ReferenceControlTypeContext;
	tableOption(): TableOptionContext;
	tableType(): TableTypeContext;
	tablespaceStorage(): TablespaceStorageContext;
	partitionDefinitions(): PartitionDefinitionsContext;
	partitionFunctionDefinition(): PartitionFunctionDefinitionContext;
	subpartitionFunctionDefinition(): SubpartitionFunctionDefinitionContext;
	partitionDefinition(): PartitionDefinitionContext;
	partitionDefinerAtom(): PartitionDefinerAtomContext;
	partitionDefinerVector(): PartitionDefinerVectorContext;
	subpartitionDefinition(): SubpartitionDefinitionContext;
	partitionOption(): PartitionOptionContext;
	alterDatabase(): AlterDatabaseContext;
	alterEvent(): AlterEventContext;
	alterFunction(): AlterFunctionContext;
	alterInstance(): AlterInstanceContext;
	alterLogfileGroup(): AlterLogfileGroupContext;
	alterProcedure(): AlterProcedureContext;
	alterServer(): AlterServerContext;
	alterTable(): AlterTableContext;
	alterTablespace(): AlterTablespaceContext;
	alterView(): AlterViewContext;
	alterOption(): AlterOptionContext;
	alterPartitionSpecification(): AlterPartitionSpecificationContext;
	dropDatabase(): DropDatabaseContext;
	dropEvent(): DropEventContext;
	dropIndex(): DropIndexContext;
	dropLogfileGroup(): DropLogfileGroupContext;
	dropProcedure(): DropProcedureContext;
	dropFunction(): DropFunctionContext;
	dropServer(): DropServerContext;
	dropSpatial(): DropSpatialContext;
	dropTable(): DropTableContext;
	dropTablespace(): DropTablespaceContext;
	dropTrigger(): DropTriggerContext;
	dropView(): DropViewContext;
	dropRole(): DropRoleContext;
	setRole(): SetRoleContext;
	renameTable(): RenameTableContext;
	renameTableClause(): RenameTableClauseContext;
	truncateTable(): TruncateTableContext;
	callStatement(): CallStatementContext;
	deleteStatement(): DeleteStatementContext;
	doStatement(): DoStatementContext;
	handlerStatement(): HandlerStatementContext;
	insertStatement(): InsertStatementContext;
	asRowAlias(): AsRowAliasContext;
	selectOrTableOrValues(): SelectOrTableOrValuesContext;
	interSectStatement(): InterSectStatementContext;
	interSectQuery(): InterSectQueryContext;
	loadDataStatement(): LoadDataStatementContext;
	loadXmlStatement(): LoadXmlStatementContext;
	parenthesizedQuery(): ParenthesizedQueryContext;
	replaceStatement(): ReplaceStatementContext;
	selectStatement(): SelectStatementContext;
	setOperations(): SetOperationsContext;
	queryExpressionBody(): QueryExpressionBodyContext;
	queryExpressionBody(_p: number): QueryExpressionBodyContext;
	queryItem(): QueryItemContext;
	queryItem(_p: number): QueryItemContext;
	queryPrimary(): QueryPrimaryContext;
	updateStatement(): UpdateStatementContext;
	valuesStatement(): ValuesStatementContext;
	parenthesizedQueryExpression(): ParenthesizedQueryExpressionContext;
	queryBlock(): QueryBlockContext;
	replaceStatementValuesOrSelectOrTable(): ReplaceStatementValuesOrSelectOrTableContext;
	rowValuesList(): RowValuesListContext;
	setAssignmentList(): SetAssignmentListContext;
	updatedElement(): UpdatedElementContext;
	assignmentField(): AssignmentFieldContext;
	lockClause(): LockClauseContext;
	singleDeleteStatement(): SingleDeleteStatementContext;
	multipleDeleteStatement(): MultipleDeleteStatementContext;
	handlerOpenStatement(): HandlerOpenStatementContext;
	handlerReadIndexStatement(): HandlerReadIndexStatementContext;
	handlerReadStatement(): HandlerReadStatementContext;
	handlerCloseStatement(): HandlerCloseStatementContext;
	importTableStatement(): ImportTableStatementContext;
	singleUpdateStatement(): SingleUpdateStatementContext;
	multipleUpdateStatement(): MultipleUpdateStatementContext;
	orderByClause(): OrderByClauseContext;
	orderByExpression(): OrderByExpressionContext;
	tableSources(): TableSourcesContext;
	tableSource(): TableSourceContext;
	tableSourceItem(): TableSourceItemContext;
	fullColumnNames(): FullColumnNamesContext;
	indexHint(): IndexHintContext;
	indexHintType(): IndexHintTypeContext;
	joinPart(): JoinPartContext;
	joinSpec(): JoinSpecContext;
	queryExpression(): QueryExpressionContext;
	querySpecification(): QuerySpecificationContext;
	unionStatement(): UnionStatementContext;
	lateralStatement(): LateralStatementContext;
	jsonTable(): JsonTableContext;
	jsonColumnList(): JsonColumnListContext;
	jsonColumn(): JsonColumnContext;
	jsonOnEmpty(): JsonOnEmptyContext;
	jsonOnError(): JsonOnErrorContext;
	selectSpec(): SelectSpecContext;
	selectElements(): SelectElementsContext;
	selectElement(): SelectElementContext;
	intoClause(): IntoClauseContext;
	selectFieldsInto(): SelectFieldsIntoContext;
	selectLinesInto(): SelectLinesIntoContext;
	fromClause(): FromClauseContext;
	groupByClause(): GroupByClauseContext;
	havingClause(): HavingClauseContext;
	windowClause(): WindowClauseContext;
	groupByItem(): GroupByItemContext;
	limitClause(): LimitClauseContext;
	limitClauseAtom(): LimitClauseAtomContext;
	startTransaction(): StartTransactionContext;
	beginWork(): BeginWorkContext;
	commitWork(): CommitWorkContext;
	rollbackWork(): RollbackWorkContext;
	savepointStatement(): SavepointStatementContext;
	rollbackStatement(): RollbackStatementContext;
	releaseStatement(): ReleaseStatementContext;
	lockTables(): LockTablesContext;
	unlockTables(): UnlockTablesContext;
	setAutocommitStatement(): SetAutocommitStatementContext;
	setTransactionStatement(): SetTransactionStatementContext;
	transactionMode(): TransactionModeContext;
	lockTableElement(): LockTableElementContext;
	lockAction(): LockActionContext;
	transactionOption(): TransactionOptionContext;
	transactionLevel(): TransactionLevelContext;
	changeMaster(): ChangeMasterContext;
	changeReplicationFilter(): ChangeReplicationFilterContext;
	changeReplicationSource(): ChangeReplicationSourceContext;
	purgeBinaryLogs(): PurgeBinaryLogsContext;
	startSlaveOrReplica(): StartSlaveOrReplicaContext;
	stopSlaveOrReplica(): StopSlaveOrReplicaContext;
	startGroupReplication(): StartGroupReplicationContext;
	stopGroupReplication(): StopGroupReplicationContext;
	masterOption(): MasterOptionContext;
	stringMasterOption(): StringMasterOptionContext;
	decimalMasterOption(): DecimalMasterOptionContext;
	boolMasterOption(): BoolMasterOptionContext;
	v8NewMasterOption(): V8NewMasterOptionContext;
	replicationSourceOption(): ReplicationSourceOptionContext;
	stringSourceOption(): StringSourceOptionContext;
	decimalSourceOption(): DecimalSourceOptionContext;
	boolSourceOption(): BoolSourceOptionContext;
	otherSourceOption(): OtherSourceOptionContext;
	channelOption(): ChannelOptionContext;
	replicationFilter(): ReplicationFilterContext;
	tablePair(): TablePairContext;
	threadType(): ThreadTypeContext;
	untilOption(): UntilOptionContext;
	connectionOptions(): ConnectionOptionsContext;
	gtuidSet(): GtuidSetContext;
	xaStartTransaction(): XaStartTransactionContext;
	xaEndTransaction(): XaEndTransactionContext;
	xaPrepareStatement(): XaPrepareStatementContext;
	xaCommitWork(): XaCommitWorkContext;
	xaRollbackWork(): XaRollbackWorkContext;
	xaRecoverWork(): XaRecoverWorkContext;
	prepareStatement(): PrepareStatementContext;
	executeStatement(): ExecuteStatementContext;
	deallocatePrepare(): DeallocatePrepareContext;
	routineBody(): RoutineBodyContext;
	blockStatement(): BlockStatementContext;
	caseStatement(): CaseStatementContext;
	ifStatement(): IfStatementContext;
	iterateStatement(): IterateStatementContext;
	leaveStatement(): LeaveStatementContext;
	loopStatement(): LoopStatementContext;
	repeatStatement(): RepeatStatementContext;
	returnStatement(): ReturnStatementContext;
	whileStatement(): WhileStatementContext;
	cursorStatement(): CursorStatementContext;
	declareVariable(): DeclareVariableContext;
	declareCondition(): DeclareConditionContext;
	declareCursor(): DeclareCursorContext;
	declareHandler(): DeclareHandlerContext;
	handlerConditionValue(): HandlerConditionValueContext;
	procedureSqlStatement(): ProcedureSqlStatementContext;
	caseAlternative(): CaseAlternativeContext;
	elifAlternative(): ElifAlternativeContext;
	alterUser(): AlterUserContext;
	createUser(): CreateUserContext;
	dropUser(): DropUserContext;
	grantStatement(): GrantStatementContext;
	roleOption(): RoleOptionContext;
	grantProxy(): GrantProxyContext;
	alterResourceGroup(): AlterResourceGroupContext;
	createResourceGroup(): CreateResourceGroupContext;
	dropResourceGroup(): DropResourceGroupContext;
	setResourceGroup(): SetResourceGroupContext;
	resourceGroupVcpuSpec(): ResourceGroupVcpuSpecContext;
	renameUser(): RenameUserContext;
	revokeStatement(): RevokeStatementContext;
	ignoreUnknownUser(): IgnoreUnknownUserContext;
	privilegeObjectType(): PrivilegeObjectTypeContext;
	setPasswordStatement(): SetPasswordStatementContext;
	userSpecification(): UserSpecificationContext;
	alterUserAuthOption(): AlterUserAuthOptionContext;
	createUserAuthOption(): CreateUserAuthOptionContext;
	createUserInitialAuthOption(): CreateUserInitialAuthOptionContext;
	userAuthOption(): UserAuthOptionContext;
	authOptionClause(): AuthOptionClauseContext;
	authenticationRule(): AuthenticationRuleContext;
	tlsOption(): TlsOptionContext;
	userResourceOption(): UserResourceOptionContext;
	userPasswordOption(): UserPasswordOptionContext;
	userLockOption(): UserLockOptionContext;
	factorAuthOption(): FactorAuthOptionContext;
	registrationOption(): RegistrationOptionContext;
	factor(): FactorContext;
	privelegeClause(): PrivelegeClauseContext;
	privilege(): PrivilegeContext;
	privilegeLevel(): PrivilegeLevelContext;
	renameUserClause(): RenameUserClauseContext;
	analyzeTable(): AnalyzeTableContext;
	checkTable(): CheckTableContext;
	checksumTable(): ChecksumTableContext;
	optimizeTable(): OptimizeTableContext;
	repairTable(): RepairTableContext;
	tableActionOption(): TableActionOptionContext;
	checkTableOption(): CheckTableOptionContext;
	createFunction(): CreateFunctionContext;
	installComponent(): InstallComponentContext;
	variableExpr(): VariableExprContext;
	uninstallComponent(): UninstallComponentContext;
	installPlugin(): InstallPluginContext;
	uninstallPlugin(): UninstallPluginContext;
	cloneStatement(): CloneStatementContext;
	setStatement(): SetStatementContext;
	showStatement(): ShowStatementContext;
	variableClause(): VariableClauseContext;
	showCommonEntity(): ShowCommonEntityContext;
	showFilter(): ShowFilterContext;
	showGlobalInfoClause(): ShowGlobalInfoClauseContext;
	showSchemaEntity(): ShowSchemaEntityContext;
	showProfileType(): ShowProfileTypeContext;
	binlogStatement(): BinlogStatementContext;
	cacheIndexStatement(): CacheIndexStatementContext;
	flushStatement(): FlushStatementContext;
	killStatement(): KillStatementContext;
	loadIndexIntoCache(): LoadIndexIntoCacheContext;
	resetStatement(): ResetStatementContext;
	resetOption(): ResetOptionContext;
	resetPersist(): ResetPersistContext;
	resetAllChannel(): ResetAllChannelContext;
	reStartStatement(): ReStartStatementContext;
	shutdownStatement(): ShutdownStatementContext;
	tableIndex(): TableIndexContext;
	flushOption(): FlushOptionContext;
	flushTableOption(): FlushTableOptionContext;
	loadedTableIndexes(): LoadedTableIndexesContext;
	simpleDescribeStatement(): SimpleDescribeStatementContext;
	fullDescribeStatement(): FullDescribeStatementContext;
	analyzeDescribeStatement(): AnalyzeDescribeStatementContext;
	helpStatement(): HelpStatementContext;
	useStatement(): UseStatementContext;
	signalStatement(): SignalStatementContext;
	resignalStatement(): ResignalStatementContext;
	signalConditionInformation(): SignalConditionInformationContext;
	withStatement(): WithStatementContext;
	tableStatement(): TableStatementContext;
	diagnosticsStatement(): DiagnosticsStatementContext;
	diagnosticsConditionInformationName(): DiagnosticsConditionInformationNameContext;
	describeObjectClause(): DescribeObjectClauseContext;
	databaseNameCreate(): DatabaseNameCreateContext;
	databaseName(): DatabaseNameContext;
	functionNameCreate(): FunctionNameCreateContext;
	functionName(): FunctionNameContext;
	viewNameCreate(): ViewNameCreateContext;
	viewName(): ViewNameContext;
	indexNameCreate(): IndexNameCreateContext;
	indexNames(): IndexNamesContext;
	indexName(): IndexNameContext;
	groupNameCreate(): GroupNameCreateContext;
	groupName(): GroupNameContext;
	tableNameCreate(): TableNameCreateContext;
	tableNames(): TableNamesContext;
	tableName(): TableNameContext;
	userOrRoleNames(): UserOrRoleNamesContext;
	userOrRoleName(): UserOrRoleNameContext;
	columnNameCreate(): ColumnNameCreateContext;
	columnNames(): ColumnNamesContext;
	columnName(): ColumnNameContext;
	tablespaceNameCreate(): TablespaceNameCreateContext;
	tablespaceName(): TablespaceNameContext;
	partitionNameCreate(): PartitionNameCreateContext;
	partitionNames(): PartitionNamesContext;
	partitionName(): PartitionNameContext;
	indexColumnName(): IndexColumnNameContext;
	userHostPort(): UserHostPortContext;
	userAtHost(): UserAtHostContext;
	simpleUserName(): SimpleUserNameContext;
	hostName(): HostNameContext;
	userName(): UserNameContext;
	mysqlVariable(): MysqlVariableContext;
	charsetName(): CharsetNameContext;
	collationName(): CollationNameContext;
	engineName(): EngineNameContext;
	engineNameBase(): EngineNameBaseContext;
	uuidSet(): UuidSetContext;
	xid(): XidContext;
	xuidStringId(): XuidStringIdContext;
	fullId(): FullIdContext;
	uidList(): UidListContext;
	uid(): UidContext;
	simpleId(): SimpleIdContext;
	dottedId(): DottedIdContext;
	decimalLiteral(): DecimalLiteralContext;
	fileSizeLiteral(): FileSizeLiteralContext;
	stringLiteral(): StringLiteralContext;
	booleanLiteral(): BooleanLiteralContext;
	hexadecimalLiteral(): HexadecimalLiteralContext;
	nullNotnull(): NullNotnullContext;
	constant(): ConstantContext;
	dataType(): DataTypeContext;
	collectionOptions(): CollectionOptionsContext;
	convertedDataType(): ConvertedDataTypeContext;
	lengthOneDimension(): LengthOneDimensionContext;
	lengthTwoDimension(): LengthTwoDimensionContext;
	lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext;
	indexColumnNames(): IndexColumnNamesContext;
	expressions(): ExpressionsContext;
	valuesOrValueList(): ValuesOrValueListContext;
	expressionsWithDefaults(): ExpressionsWithDefaultsContext;
	expressionOrDefault(): ExpressionOrDefaultContext;
	constants(): ConstantsContext;
	simpleStrings(): SimpleStringsContext;
	userVariables(): UserVariablesContext;
	defaultValue(): DefaultValueContext;
	currentTimestamp(): CurrentTimestampContext;
	ifExists(): IfExistsContext;
	ifNotExists(): IfNotExistsContext;
	orReplace(): OrReplaceContext;
	functionCall(): FunctionCallContext;
	specificFunction(): SpecificFunctionContext;
	caseFuncAlternative(): CaseFuncAlternativeContext;
	levelsInWeightString(): LevelsInWeightStringContext;
	levelInWeightListElement(): LevelInWeightListElementContext;
	aggregateWindowedFunction(): AggregateWindowedFunctionContext;
	nonAggregateWindowedFunction(): NonAggregateWindowedFunctionContext;
	overClause(): OverClauseContext;
	windowSpec(): WindowSpecContext;
	windowName(): WindowNameContext;
	frameClause(): FrameClauseContext;
	frameUnits(): FrameUnitsContext;
	frameExtent(): FrameExtentContext;
	frameBetween(): FrameBetweenContext;
	frameRange(): FrameRangeContext;
	partitionClause(): PartitionClauseContext;
	scalarFunctionName(): ScalarFunctionNameContext;
	passwordFunctionClause(): PasswordFunctionClauseContext;
	functionArgs(): FunctionArgsContext;
	functionArg(): FunctionArgContext;
	expression(): ExpressionContext;
	expression(_p: number): ExpressionContext;
	predicate(): PredicateContext;
	predicate(_p: number): PredicateContext;
	expressionAtom(): ExpressionAtomContext;
	expressionAtom(_p: number): ExpressionAtomContext;
	unaryOperator(): UnaryOperatorContext;
	comparisonOperator(): ComparisonOperatorContext;
	comparisonBase(): ComparisonBaseContext;
	logicalOperator(): LogicalOperatorContext;
	bitOperator(): BitOperatorContext;
	mathOperator(): MathOperatorContext;
	jsonOperator(): JsonOperatorContext;
	charsetNameBase(): CharsetNameBaseContext;
	transactionLevelBase(): TransactionLevelBaseContext;
	privilegesBase(): PrivilegesBaseContext;
	intervalTypeBase(): IntervalTypeBaseContext;
	dataTypeBase(): DataTypeBaseContext;
	keywordsCanBeId(): KeywordsCanBeIdContext;
	functionNameBase(): FunctionNameBaseContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
	private queryExpressionBody_sempred;
	private queryItem_sempred;
	private columnName_sempred;
	private expression_sempred;
	private predicate_sempred;
	private expressionAtom_sempred;
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
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sqlStatement(): SqlStatementContext | null;
	SEMI(): antlr.TerminalNode | null;
	emptyStatement_(): EmptyStatement_Context | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SqlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ddlStatement(): DdlStatementContext | null;
	dmlStatement(): DmlStatementContext | null;
	transactionStatement(): TransactionStatementContext | null;
	replicationStatement(): ReplicationStatementContext | null;
	preparedStatement(): PreparedStatementContext | null;
	administrationStatement(): AdministrationStatementContext | null;
	utilityStatement(): UtilityStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EmptyStatement_Context extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DdlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createDatabase(): CreateDatabaseContext | null;
	createEvent(): CreateEventContext | null;
	createIndex(): CreateIndexContext | null;
	createLogfileGroup(): CreateLogfileGroupContext | null;
	createProcedure(): CreateProcedureContext | null;
	createFunction(): CreateFunctionContext | null;
	createServer(): CreateServerContext | null;
	createTable(): CreateTableContext | null;
	createTablespaceInnodb(): CreateTablespaceInnodbContext | null;
	createTablespaceNdb(): CreateTablespaceNdbContext | null;
	createTrigger(): CreateTriggerContext | null;
	createView(): CreateViewContext | null;
	createRole(): CreateRoleContext | null;
	alterDatabase(): AlterDatabaseContext | null;
	alterEvent(): AlterEventContext | null;
	alterFunction(): AlterFunctionContext | null;
	alterInstance(): AlterInstanceContext | null;
	alterLogfileGroup(): AlterLogfileGroupContext | null;
	alterProcedure(): AlterProcedureContext | null;
	alterServer(): AlterServerContext | null;
	alterTable(): AlterTableContext | null;
	alterTablespace(): AlterTablespaceContext | null;
	alterView(): AlterViewContext | null;
	dropDatabase(): DropDatabaseContext | null;
	dropEvent(): DropEventContext | null;
	dropIndex(): DropIndexContext | null;
	dropLogfileGroup(): DropLogfileGroupContext | null;
	dropProcedure(): DropProcedureContext | null;
	dropFunction(): DropFunctionContext | null;
	dropServer(): DropServerContext | null;
	dropSpatial(): DropSpatialContext | null;
	dropTable(): DropTableContext | null;
	dropTablespace(): DropTablespaceContext | null;
	dropTrigger(): DropTriggerContext | null;
	dropView(): DropViewContext | null;
	dropRole(): DropRoleContext | null;
	setRole(): SetRoleContext | null;
	renameTable(): RenameTableContext | null;
	truncateTable(): TruncateTableContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DmlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectStatement(): SelectStatementContext | null;
	setOperations(): SetOperationsContext | null;
	insertStatement(): InsertStatementContext | null;
	updateStatement(): UpdateStatementContext | null;
	deleteStatement(): DeleteStatementContext | null;
	replaceStatement(): ReplaceStatementContext | null;
	callStatement(): CallStatementContext | null;
	interSectStatement(): InterSectStatementContext | null;
	loadDataStatement(): LoadDataStatementContext | null;
	loadXmlStatement(): LoadXmlStatementContext | null;
	parenthesizedQuery(): ParenthesizedQueryContext | null;
	doStatement(): DoStatementContext | null;
	handlerStatement(): HandlerStatementContext | null;
	importTableStatement(): ImportTableStatementContext | null;
	valuesStatement(): ValuesStatementContext | null;
	withStatement(): WithStatementContext | null;
	tableStatement(): TableStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	startTransaction(): StartTransactionContext | null;
	beginWork(): BeginWorkContext | null;
	commitWork(): CommitWorkContext | null;
	rollbackWork(): RollbackWorkContext | null;
	savepointStatement(): SavepointStatementContext | null;
	rollbackStatement(): RollbackStatementContext | null;
	releaseStatement(): ReleaseStatementContext | null;
	lockTables(): LockTablesContext | null;
	unlockTables(): UnlockTablesContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplicationStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	changeMaster(): ChangeMasterContext | null;
	changeReplicationFilter(): ChangeReplicationFilterContext | null;
	changeReplicationSource(): ChangeReplicationSourceContext | null;
	purgeBinaryLogs(): PurgeBinaryLogsContext | null;
	startSlaveOrReplica(): StartSlaveOrReplicaContext | null;
	stopSlaveOrReplica(): StopSlaveOrReplicaContext | null;
	startGroupReplication(): StartGroupReplicationContext | null;
	stopGroupReplication(): StopGroupReplicationContext | null;
	xaStartTransaction(): XaStartTransactionContext | null;
	xaEndTransaction(): XaEndTransactionContext | null;
	xaPrepareStatement(): XaPrepareStatementContext | null;
	xaCommitWork(): XaCommitWorkContext | null;
	xaRollbackWork(): XaRollbackWorkContext | null;
	xaRecoverWork(): XaRecoverWorkContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PreparedStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	prepareStatement(): PrepareStatementContext | null;
	executeStatement(): ExecuteStatementContext | null;
	deallocatePrepare(): DeallocatePrepareContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CompoundStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	blockStatement(): BlockStatementContext | null;
	caseStatement(): CaseStatementContext | null;
	ifStatement(): IfStatementContext | null;
	leaveStatement(): LeaveStatementContext | null;
	loopStatement(): LoopStatementContext | null;
	repeatStatement(): RepeatStatementContext | null;
	whileStatement(): WhileStatementContext | null;
	iterateStatement(): IterateStatementContext | null;
	returnStatement(): ReturnStatementContext | null;
	cursorStatement(): CursorStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AdministrationStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alterUser(): AlterUserContext | null;
	createUser(): CreateUserContext | null;
	dropUser(): DropUserContext | null;
	grantStatement(): GrantStatementContext | null;
	grantProxy(): GrantProxyContext | null;
	renameUser(): RenameUserContext | null;
	revokeStatement(): RevokeStatementContext | null;
	alterResourceGroup(): AlterResourceGroupContext | null;
	createResourceGroup(): CreateResourceGroupContext | null;
	dropResourceGroup(): DropResourceGroupContext | null;
	setResourceGroup(): SetResourceGroupContext | null;
	analyzeTable(): AnalyzeTableContext | null;
	checkTable(): CheckTableContext | null;
	checksumTable(): ChecksumTableContext | null;
	optimizeTable(): OptimizeTableContext | null;
	repairTable(): RepairTableContext | null;
	installComponent(): InstallComponentContext | null;
	uninstallComponent(): UninstallComponentContext | null;
	installPlugin(): InstallPluginContext | null;
	uninstallPlugin(): UninstallPluginContext | null;
	cloneStatement(): CloneStatementContext | null;
	setStatement(): SetStatementContext | null;
	showStatement(): ShowStatementContext | null;
	binlogStatement(): BinlogStatementContext | null;
	cacheIndexStatement(): CacheIndexStatementContext | null;
	flushStatement(): FlushStatementContext | null;
	killStatement(): KillStatementContext | null;
	loadIndexIntoCache(): LoadIndexIntoCacheContext | null;
	resetStatement(): ResetStatementContext | null;
	resetPersist(): ResetPersistContext | null;
	resetAllChannel(): ResetAllChannelContext | null;
	reStartStatement(): ReStartStatementContext | null;
	shutdownStatement(): ShutdownStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UtilityStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullDescribeStatement(): FullDescribeStatementContext | null;
	simpleDescribeStatement(): SimpleDescribeStatementContext | null;
	analyzeDescribeStatement(): AnalyzeDescribeStatementContext | null;
	helpStatement(): HelpStatementContext | null;
	useStatement(): UseStatementContext | null;
	signalStatement(): SignalStatementContext | null;
	resignalStatement(): ResignalStatementContext | null;
	diagnosticsStatement(): DiagnosticsStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDatabaseContext extends antlr.ParserRuleContext {
	_dbFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	databaseNameCreate(): DatabaseNameCreateContext;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	createDatabaseOption(): CreateDatabaseOptionContext[];
	createDatabaseOption(i: number): CreateDatabaseOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateEventContext extends antlr.ParserRuleContext {
	_event_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_EVENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	KW_SCHEDULE(): antlr.TerminalNode;
	scheduleExpression(): ScheduleExpressionContext;
	KW_DO(): antlr.TerminalNode;
	routineBody(): RoutineBodyContext;
	fullId(): FullIdContext;
	ownerStatement(): OwnerStatementContext | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_COMPLETION(): antlr.TerminalNode | null;
	KW_PRESERVE(): antlr.TerminalNode | null;
	enableType(): EnableTypeContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateIndexContext extends antlr.ParserRuleContext {
	_intimeAction?: Token | null;
	_indexCategory?: Token | null;
	_algType?: Token | null;
	_lockType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	indexNameCreate(): IndexNameCreateContext;
	KW_ON(): antlr.TerminalNode;
	tableName(): TableNameContext;
	indexColumnNames(): IndexColumnNamesContext;
	indexType(): IndexTypeContext | null;
	indexOption(): IndexOptionContext[];
	indexOption(i: number): IndexOptionContext | null;
	KW_ALGORITHM(): antlr.TerminalNode[];
	KW_ALGORITHM(i: number): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode[];
	KW_LOCK(i: number): antlr.TerminalNode | null;
	KW_ONLINE(): antlr.TerminalNode | null;
	KW_OFFLINE(): antlr.TerminalNode | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	KW_FULLTEXT(): antlr.TerminalNode | null;
	KW_SPATIAL(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode[];
	KW_DEFAULT(i: number): antlr.TerminalNode | null;
	KW_INPLACE(): antlr.TerminalNode[];
	KW_INPLACE(i: number): antlr.TerminalNode | null;
	KW_COPY(): antlr.TerminalNode[];
	KW_COPY(i: number): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode[];
	KW_NONE(i: number): antlr.TerminalNode | null;
	KW_SHARED(): antlr.TerminalNode[];
	KW_SHARED(i: number): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode[];
	KW_EXCLUSIVE(i: number): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateLogfileGroupContext extends antlr.ParserRuleContext {
	_logfileGroupName?: UidContext;
	_undoFile?: Token | null;
	_initSize?: FileSizeLiteralContext;
	_undoSize?: FileSizeLiteralContext;
	_redoSize?: FileSizeLiteralContext;
	_nodegroup?: UidContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_LOGFILE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	KW_ADD(): antlr.TerminalNode;
	KW_UNDOFILE(): antlr.TerminalNode;
	KW_ENGINE(): antlr.TerminalNode;
	engineName(): EngineNameContext;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	KW_INITIAL_SIZE(): antlr.TerminalNode | null;
	KW_UNDO_BUFFER_SIZE(): antlr.TerminalNode | null;
	KW_REDO_BUFFER_SIZE(): antlr.TerminalNode | null;
	KW_NODEGROUP(): antlr.TerminalNode | null;
	KW_WAIT(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	fileSizeLiteral(): FileSizeLiteralContext[];
	fileSizeLiteral(i: number): FileSizeLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateProcedureContext extends antlr.ParserRuleContext {
	_sp_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_PROCEDURE(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	routineBody(): RoutineBodyContext;
	fullId(): FullIdContext;
	ownerStatement(): OwnerStatementContext | null;
	ifNotExists(): IfNotExistsContext | null;
	procedureParameter(): ProcedureParameterContext[];
	procedureParameter(i: number): ProcedureParameterContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	routineOption(): RoutineOptionContext[];
	routineOption(i: number): RoutineOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	userOrRoleNames(): UserOrRoleNamesContext;
	ifNotExists(): IfNotExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateServerContext extends antlr.ParserRuleContext {
	_servername?: UidContext;
	_wrapperName?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_SERVER(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_WRAPPER(): antlr.TerminalNode;
	KW_OPTIONS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	serverOption(): ServerOptionContext[];
	serverOption(i: number): ServerOptionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	uid(): UidContext;
	KW_MYSQL(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CreateTableContext): void;
}
export declare class CopyCreateTableContext extends CreateTableContext {
	constructor(ctx: CreateTableContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	KW_LIKE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnCreateTableContext extends CreateTableContext {
	constructor(ctx: CreateTableContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	createDefinitions(): CreateDefinitionsContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	tableOption(): TableOptionContext[];
	tableOption(i: number): TableOptionContext | null;
	partitionDefinitions(): PartitionDefinitionsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryCreateTableContext extends CreateTableContext {
	_tb?: TableNameCreateContext;
	_col?: CreateDefinitionsContext;
	constructor(ctx: CreateTableContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext;
	tableNameCreate(): TableNameCreateContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	tableOption(): TableOptionContext[];
	tableOption(i: number): TableOptionContext | null;
	partitionDefinitions(): PartitionDefinitionsContext | null;
	KW_AS(): antlr.TerminalNode | null;
	createDefinitions(): CreateDefinitionsContext | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTablespaceInnodbContext extends antlr.ParserRuleContext {
	_datafile?: Token | null;
	_autoextendSize?: FileSizeLiteralContext;
	_fileBlockSize?: FileSizeLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespaceNameCreate(): TablespaceNameCreateContext;
	KW_UNDO(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_DATAFILE(): antlr.TerminalNode | null;
	KW_AUTOEXTEND_SIZE(): antlr.TerminalNode | null;
	KW_FILE_BLOCK_SIZE(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	KW_ENGINE(): antlr.TerminalNode | null;
	engineName(): EngineNameContext | null;
	KW_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	fileSizeLiteral(): FileSizeLiteralContext[];
	fileSizeLiteral(i: number): FileSizeLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTablespaceNdbContext extends antlr.ParserRuleContext {
	_datafile?: Token | null;
	_logfileGroupName?: UidContext;
	_extentSize?: FileSizeLiteralContext;
	_initialSize?: FileSizeLiteralContext;
	_autoextendSize?: FileSizeLiteralContext;
	_maxSize?: FileSizeLiteralContext;
	_nodegroup?: UidContext;
	_comment?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespaceNameCreate(): TablespaceNameCreateContext;
	KW_ADD(): antlr.TerminalNode;
	KW_DATAFILE(): antlr.TerminalNode;
	KW_USE(): antlr.TerminalNode;
	KW_LOGFILE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	KW_ENGINE(): antlr.TerminalNode;
	engineName(): EngineNameContext;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	KW_UNDO(): antlr.TerminalNode | null;
	KW_EXTENT_SIZE(): antlr.TerminalNode | null;
	KW_INITIAL_SIZE(): antlr.TerminalNode | null;
	KW_AUTOEXTEND_SIZE(): antlr.TerminalNode | null;
	KW_MAX_SIZE(): antlr.TerminalNode | null;
	KW_NODEGROUP(): antlr.TerminalNode | null;
	KW_WAIT(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	fileSizeLiteral(): FileSizeLiteralContext[];
	fileSizeLiteral(i: number): FileSizeLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateTriggerContext extends antlr.ParserRuleContext {
	_trigger_name?: FullIdContext;
	_triggerTime?: Token | null;
	_triggerEvent?: Token | null;
	_triggerPlace?: Token | null;
	_other_trigger_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TRIGGER(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_FOR(): antlr.TerminalNode;
	KW_EACH(): antlr.TerminalNode;
	KW_ROW(): antlr.TerminalNode;
	routineBody(): RoutineBodyContext;
	fullId(): FullIdContext[];
	fullId(i: number): FullIdContext | null;
	KW_BEFORE(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	ownerStatement(): OwnerStatementContext | null;
	ifNotExists(): IfNotExistsContext | null;
	KW_FOLLOWS(): antlr.TerminalNode | null;
	KW_PRECEDES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WithClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	commonTableExpressions(): CommonTableExpressionsContext;
	KW_RECURSIVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CommonTableExpressionsContext extends antlr.ParserRuleContext {
	_cteName?: UidContext;
	_cteColumnName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	dmlStatement(): DmlStatementContext;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	commonTableExpressions(): CommonTableExpressionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateViewContext extends antlr.ParserRuleContext {
	_algType?: Token | null;
	_secContext?: Token | null;
	_checkOption?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewNameCreate(): ViewNameCreateContext;
	KW_AS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	selectStatement(): SelectStatementContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	orReplace(): OrReplaceContext | null;
	KW_ALGORITHM(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	ownerStatement(): OwnerStatementContext | null;
	KW_SQL(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	columnNameCreate(): ColumnNameCreateContext[];
	columnNameCreate(i: number): ColumnNameCreateContext | null;
	KW_UNDEFINED(): antlr.TerminalNode | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_TEMPTABLE(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	withClause(): WithClauseContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_CHECK(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_CASCADED(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDatabaseOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	charSet(): CharSetContext | null;
	charsetName(): CharsetNameContext | null;
	KW_DEFAULT(): antlr.TerminalNode[];
	KW_DEFAULT(i: number): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	collationName(): CollationNameContext | null;
	KW_ENCRYPTION(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharSetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_CHARSET(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentUserExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OwnerStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFINER(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	userName(): UserNameContext | null;
	currentUserExpression(): CurrentUserExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ScheduleExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ScheduleExpressionContext): void;
}
export declare class PreciseScheduleContext extends ScheduleExpressionContext {
	constructor(ctx: ScheduleExpressionContext);
	KW_AT(): antlr.TerminalNode;
	timestampValue(): TimestampValueContext;
	intervalExpr(): IntervalExprContext[];
	intervalExpr(i: number): IntervalExprContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalScheduleContext extends ScheduleExpressionContext {
	_startTimestamp?: TimestampValueContext;
	_intervalExpr?: IntervalExprContext;
	_startIntervals: IntervalExprContext[];
	_endTimestamp?: TimestampValueContext;
	_endIntervals: IntervalExprContext[];
	constructor(ctx: ScheduleExpressionContext);
	KW_EVERY(): antlr.TerminalNode;
	intervalType(): IntervalTypeContext;
	decimalLiteral(): DecimalLiteralContext | null;
	expression(): ExpressionContext | null;
	KW_STARTS(): antlr.TerminalNode | null;
	KW_ENDS(): antlr.TerminalNode | null;
	timestampValue(): TimestampValueContext[];
	timestampValue(i: number): TimestampValueContext | null;
	intervalExpr(): IntervalExprContext[];
	intervalExpr(i: number): IntervalExprContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TimestampValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	decimalLiteral(): DecimalLiteralContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalExprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PLUS(): antlr.TerminalNode;
	KW_INTERVAL(): antlr.TerminalNode;
	intervalType(): IntervalTypeContext;
	decimalLiteral(): DecimalLiteralContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	intervalTypeBase(): IntervalTypeBaseContext | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YEAR_MONTH(): antlr.TerminalNode | null;
	KW_DAY_HOUR(): antlr.TerminalNode | null;
	KW_DAY_MINUTE(): antlr.TerminalNode | null;
	KW_DAY_SECOND(): antlr.TerminalNode | null;
	KW_HOUR_MINUTE(): antlr.TerminalNode | null;
	KW_HOUR_SECOND(): antlr.TerminalNode | null;
	KW_MINUTE_SECOND(): antlr.TerminalNode | null;
	KW_SECOND_MICROSECOND(): antlr.TerminalNode | null;
	KW_MINUTE_MICROSECOND(): antlr.TerminalNode | null;
	KW_HOUR_MICROSECOND(): antlr.TerminalNode | null;
	KW_DAY_MICROSECOND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EnableTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_SLAVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	KW_BTREE(): antlr.TerminalNode | null;
	KW_HASH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexOptionContext extends antlr.ParserRuleContext {
	_parserName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_KEY_BLOCK_SIZE(): antlr.TerminalNode | null;
	fileSizeLiteral(): FileSizeLiteralContext | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	indexType(): IndexTypeContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_VISIBLE(): antlr.TerminalNode | null;
	KW_INVISIBLE(): antlr.TerminalNode | null;
	KW_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_SECONDARY_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ProcedureParameterContext extends antlr.ParserRuleContext {
	_direction?: Token | null;
	_paramName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext;
	uid(): UidContext;
	KW_IN(): antlr.TerminalNode | null;
	KW_OUT(): antlr.TerminalNode | null;
	KW_INOUT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RoutineOptionContext): void;
}
export declare class RoutineBehaviorContext extends RoutineOptionContext {
	constructor(ctx: RoutineOptionContext);
	KW_DETERMINISTIC(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineLanguageContext extends RoutineOptionContext {
	constructor(ctx: RoutineOptionContext);
	KW_LANGUAGE(): antlr.TerminalNode;
	KW_SQL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineCommentContext extends RoutineOptionContext {
	constructor(ctx: RoutineOptionContext);
	KW_COMMENT(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineSecurityContext extends RoutineOptionContext {
	_context?: Token | null;
	constructor(ctx: RoutineOptionContext);
	KW_SQL(): antlr.TerminalNode;
	KW_SECURITY(): antlr.TerminalNode;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineDataContext extends RoutineOptionContext {
	constructor(ctx: RoutineOptionContext);
	KW_CONTAINS(): antlr.TerminalNode | null;
	KW_SQL(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_READS(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_MODIFIES(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ServerOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HOST(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_SOCKET(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_PORT(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDefinitionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	createDefinition(): CreateDefinitionContext[];
	createDefinition(i: number): CreateDefinitionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnNameCreate(): ColumnNameCreateContext | null;
	columnDefinition(): ColumnDefinitionContext | null;
	indexColumnNames(): IndexColumnNamesContext | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	indexName(): IndexNameContext | null;
	indexType(): IndexTypeContext | null;
	indexOption(): IndexOptionContext[];
	indexOption(i: number): IndexOptionContext | null;
	KW_FULLTEXT(): antlr.TerminalNode | null;
	KW_SPATIAL(): antlr.TerminalNode | null;
	KW_PRIMARY(): antlr.TerminalNode | null;
	constraintSymbol(): ConstraintSymbolContext | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	referenceDefinition(): ReferenceDefinitionContext | null;
	KW_CHECK(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	checkConstraintDefinition(): CheckConstraintDefinitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckConstraintDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHECK(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	constraintSymbol(): ConstraintSymbolContext | null;
	KW_ENFORCED(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintSymbolContext extends antlr.ParserRuleContext {
	_symbol_?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CONSTRAINT(): antlr.TerminalNode;
	uid(): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dataType(): DataTypeContext;
	columnConstraint(): ColumnConstraintContext[];
	columnConstraint(i: number): ColumnConstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnConstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ColumnConstraintContext): void;
}
export declare class StorageColumnConstraintContext extends ColumnConstraintContext {
	_storageval?: Token | null;
	constructor(ctx: ColumnConstraintContext);
	KW_STORAGE(): antlr.TerminalNode;
	KW_DISK(): antlr.TerminalNode | null;
	KW_MEMORY(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class VisibilityColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_VISIBLE(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AutoIncrementColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_AUTO_INCREMENT(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	currentTimestamp(): CurrentTimestampContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CommentColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_COMMENT(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckExprContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	checkConstraintDefinition(): CheckConstraintDefinitionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UniqueKeyColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_UNIQUE(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SerialDefaultColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_SERIAL(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode;
	KW_VALUE(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GeneratedColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_AS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_GENERATED(): antlr.TerminalNode | null;
	KW_ALWAYS(): antlr.TerminalNode | null;
	KW_VIRTUAL(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FormatColumnConstraintContext extends ColumnConstraintContext {
	_colformat?: Token | null;
	constructor(ctx: ColumnConstraintContext);
	KW_COLUMN_FORMAT(): antlr.TerminalNode;
	KW_FIXED(): antlr.TerminalNode | null;
	KW_DYNAMIC(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollateColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_COLLATE(): antlr.TerminalNode;
	collationName(): CollationNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrimaryKeyColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_KEY(): antlr.TerminalNode;
	KW_PRIMARY(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NullColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	nullNotnull(): NullNotnullContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefaultColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_DEFAULT(): antlr.TerminalNode;
	defaultValue(): DefaultValueContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	referenceDefinition(): ReferenceDefinitionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InvisibilityColumnConstraintContext extends ColumnConstraintContext {
	constructor(ctx: ColumnConstraintContext);
	KW_INVISIBLE(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceDefinitionContext extends antlr.ParserRuleContext {
	_matchType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFERENCES(): antlr.TerminalNode;
	tableName(): TableNameContext;
	indexColumnNames(): IndexColumnNamesContext | null;
	KW_MATCH(): antlr.TerminalNode | null;
	referenceAction(): ReferenceActionContext | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_PARTIAL(): antlr.TerminalNode | null;
	KW_SIMPLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceActionContext extends antlr.ParserRuleContext {
	_onDelete?: ReferenceControlTypeContext;
	_onUpdate?: ReferenceControlTypeContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	referenceControlType(): ReferenceControlTypeContext[];
	referenceControlType(i: number): ReferenceControlTypeContext | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReferenceControlTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_ACTION(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: TableOptionContext): void;
}
export declare class TableOptionEngineContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_ENGINE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	engineName(): EngineNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionMaxRowsContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_MAX_ROWS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCollateContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_COLLATE(): antlr.TerminalNode;
	collationName(): CollationNameContext;
	KW_DEFAULT(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPersistentContext extends TableOptionContext {
	_extBoolValue?: Token | null;
	constructor(ctx: TableOptionContext);
	KW_STATS_PERSISTENT(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode | null;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionTablespaceContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespaceName(): TablespaceNameContext | null;
	tablespaceStorage(): TablespaceStorageContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionAutoextendSizeContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_AUTOEXTEND_SIZE(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPageCompressedContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_PAGE_COMPRESSED(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionStartTransactionContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_START(): antlr.TerminalNode;
	KW_TRANSACTION(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPackKeysContext extends TableOptionContext {
	_extBoolValue?: Token | null;
	constructor(ctx: TableOptionContext);
	KW_PACK_KEYS(): antlr.TerminalNode;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPasswordContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_PASSWORD(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionUnionContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_UNION(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	RR_BRACKET(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionSamplePageContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_STATS_SAMPLE_PAGES(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCharsetContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	charSet(): CharSetContext;
	charsetName(): CharsetNameContext | null;
	KW_DEFAULT(): antlr.TerminalNode[];
	KW_DEFAULT(i: number): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionIndexDirectoryContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_INDEX(): antlr.TerminalNode;
	KW_DIRECTORY(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionTableTypeContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_TABLE_TYPE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	tableType(): TableTypeContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionKeyBlockSizeContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_KEY_BLOCK_SIZE(): antlr.TerminalNode;
	fileSizeLiteral(): FileSizeLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionEncryptionContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_ENCRYPTION(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionDataDirectoryContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_DIRECTORY(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionRecalculationContext extends TableOptionContext {
	_extBoolValue?: Token | null;
	constructor(ctx: TableOptionContext);
	KW_STATS_AUTO_RECALC(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode | null;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionAutoIncrementContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_AUTO_INCREMENT(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionEncryptionKeyIdContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_ENCRYPTION_KEY_ID(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionChecksumContext extends TableOptionContext {
	_boolValue?: Token | null;
	constructor(ctx: TableOptionContext);
	KW_CHECKSUM(): antlr.TerminalNode | null;
	KW_PAGE_CHECKSUM(): antlr.TerminalNode | null;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionDelayContext extends TableOptionContext {
	_boolValue?: Token | null;
	constructor(ctx: TableOptionContext);
	KW_DELAY_KEY_WRITE(): antlr.TerminalNode;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionConnectionContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_CONNECTION(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionTransactionalContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_TRANSACTIONAL(): antlr.TerminalNode;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionPageCompressionLevelContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	decimalLiteral(): DecimalLiteralContext;
	KW_PAGE_COMPRESSION_LEVEL(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionSecondaryEngineAttributeContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_SECONDARY_ENGINE_ATTRIBUTE(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCommentContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_COMMENT(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionAverageContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_AVG_ROW_LENGTH(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionRowFormatContext extends TableOptionContext {
	_rowFormat?: Token | null;
	constructor(ctx: TableOptionContext);
	KW_ROW_FORMAT(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DYNAMIC(): antlr.TerminalNode | null;
	KW_FIXED(): antlr.TerminalNode | null;
	KW_COMPRESSED(): antlr.TerminalNode | null;
	KW_REDUNDANT(): antlr.TerminalNode | null;
	KW_COMPACT(): antlr.TerminalNode | null;
	ID(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionCompressionContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_COMPRESSION(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode | null;
	ID(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionInsertMethodContext extends TableOptionContext {
	_insertMethod?: Token | null;
	constructor(ctx: TableOptionContext);
	KW_INSERT_METHOD(): antlr.TerminalNode;
	KW_NO(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionEngineAttributeContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_ENGINE_ATTRIBUTE(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableOptionMinRowsContext extends TableOptionContext {
	constructor(ctx: TableOptionContext);
	KW_MIN_ROWS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MYSQL(): antlr.TerminalNode | null;
	KW_ODBC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TablespaceStorageContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STORAGE(): antlr.TerminalNode;
	KW_DISK(): antlr.TerminalNode | null;
	KW_MEMORY(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinitionsContext extends antlr.ParserRuleContext {
	_count?: DecimalLiteralContext;
	_subCount?: DecimalLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode[];
	KW_BY(i: number): antlr.TerminalNode | null;
	partitionFunctionDefinition(): PartitionFunctionDefinitionContext;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_SUBPARTITION(): antlr.TerminalNode | null;
	subpartitionFunctionDefinition(): SubpartitionFunctionDefinitionContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	partitionDefinition(): PartitionDefinitionContext[];
	partitionDefinition(i: number): PartitionDefinitionContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	KW_SUBPARTITIONS(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PartitionFunctionDefinitionContext): void;
}
export declare class PartitionFunctionKeyContext extends PartitionFunctionDefinitionContext {
	_algType?: Token | null;
	constructor(ctx: PartitionFunctionDefinitionContext);
	KW_KEY(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	KW_LINEAR(): antlr.TerminalNode | null;
	KW_ALGORITHM(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	TWO_DECIMAL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionHashContext extends PartitionFunctionDefinitionContext {
	constructor(ctx: PartitionFunctionDefinitionContext);
	KW_HASH(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_LINEAR(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionListContext extends PartitionFunctionDefinitionContext {
	constructor(ctx: PartitionFunctionDefinitionContext);
	KW_LIST(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionFunctionRangeContext extends PartitionFunctionDefinitionContext {
	constructor(ctx: PartitionFunctionDefinitionContext);
	KW_RANGE(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubpartitionFunctionDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SubpartitionFunctionDefinitionContext): void;
}
export declare class SubPartitionFunctionHashContext extends SubpartitionFunctionDefinitionContext {
	constructor(ctx: SubpartitionFunctionDefinitionContext);
	KW_HASH(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_LINEAR(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubPartitionFunctionKeyContext extends SubpartitionFunctionDefinitionContext {
	_algType?: Token | null;
	constructor(ctx: SubpartitionFunctionDefinitionContext);
	KW_KEY(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	columnNames(): ColumnNamesContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_LINEAR(): antlr.TerminalNode | null;
	KW_ALGORITHM(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	TWO_DECIMAL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PartitionDefinitionContext): void;
}
export declare class PartitionComparisonContext extends PartitionDefinitionContext {
	constructor(ctx: PartitionDefinitionContext);
	KW_PARTITION(): antlr.TerminalNode;
	partitionName(): PartitionNameContext;
	KW_VALUES(): antlr.TerminalNode;
	KW_LESS(): antlr.TerminalNode;
	KW_THAN(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	partitionDefinerAtom(): PartitionDefinerAtomContext[];
	partitionDefinerAtom(i: number): PartitionDefinerAtomContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	partitionOption(): PartitionOptionContext[];
	partitionOption(i: number): PartitionOptionContext | null;
	subpartitionDefinition(): SubpartitionDefinitionContext[];
	subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionListAtomContext extends PartitionDefinitionContext {
	constructor(ctx: PartitionDefinitionContext);
	KW_PARTITION(): antlr.TerminalNode;
	partitionName(): PartitionNameContext;
	KW_VALUES(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	partitionDefinerAtom(): PartitionDefinerAtomContext[];
	partitionDefinerAtom(i: number): PartitionDefinerAtomContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	partitionOption(): PartitionOptionContext[];
	partitionOption(i: number): PartitionOptionContext | null;
	subpartitionDefinition(): SubpartitionDefinitionContext[];
	subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionListVectorContext extends PartitionDefinitionContext {
	constructor(ctx: PartitionDefinitionContext);
	KW_PARTITION(): antlr.TerminalNode;
	partitionName(): PartitionNameContext;
	KW_VALUES(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	partitionDefinerVector(): PartitionDefinerVectorContext[];
	partitionDefinerVector(i: number): PartitionDefinerVectorContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	partitionOption(): PartitionOptionContext[];
	partitionOption(i: number): PartitionOptionContext | null;
	subpartitionDefinition(): SubpartitionDefinitionContext[];
	subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSimpleContext extends PartitionDefinitionContext {
	constructor(ctx: PartitionDefinitionContext);
	KW_PARTITION(): antlr.TerminalNode;
	partitionName(): PartitionNameContext;
	partitionOption(): PartitionOptionContext[];
	partitionOption(i: number): PartitionOptionContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	subpartitionDefinition(): SubpartitionDefinitionContext[];
	subpartitionDefinition(i: number): SubpartitionDefinitionContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinerAtomContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constant(): ConstantContext | null;
	expression(): ExpressionContext | null;
	KW_MAXVALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionDefinerVectorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	partitionDefinerAtom(): PartitionDefinerAtomContext[];
	partitionDefinerAtom(i: number): PartitionDefinerAtomContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubpartitionDefinitionContext extends antlr.ParserRuleContext {
	_logicalName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SUBPARTITION(): antlr.TerminalNode;
	uid(): UidContext;
	partitionOption(): PartitionOptionContext[];
	partitionOption(i: number): PartitionOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PartitionOptionContext): void;
}
export declare class PartitionOptionCommentContext extends PartitionOptionContext {
	_comment?: Token | null;
	constructor(ctx: PartitionOptionContext);
	KW_COMMENT(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionNodeGroupContext extends PartitionOptionContext {
	_nodegroup?: UidContext;
	constructor(ctx: PartitionOptionContext);
	KW_NODEGROUP(): antlr.TerminalNode;
	uid(): UidContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionIndexDirectoryContext extends PartitionOptionContext {
	_indexDirectory?: Token | null;
	constructor(ctx: PartitionOptionContext);
	KW_INDEX(): antlr.TerminalNode;
	KW_DIRECTORY(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionMaxRowsContext extends PartitionOptionContext {
	_maxRows?: DecimalLiteralContext;
	constructor(ctx: PartitionOptionContext);
	KW_MAX_ROWS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionTablespaceContext extends PartitionOptionContext {
	constructor(ctx: PartitionOptionContext);
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespaceName(): TablespaceNameContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionEngineContext extends PartitionOptionContext {
	constructor(ctx: PartitionOptionContext);
	KW_ENGINE(): antlr.TerminalNode;
	engineName(): EngineNameContext;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_STORAGE(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionMinRowsContext extends PartitionOptionContext {
	_minRows?: DecimalLiteralContext;
	constructor(ctx: PartitionOptionContext);
	KW_MIN_ROWS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionOptionDataDirectoryContext extends PartitionOptionContext {
	_dataDirectory?: Token | null;
	constructor(ctx: PartitionOptionContext);
	KW_DATA(): antlr.TerminalNode;
	KW_DIRECTORY(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterDatabaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: AlterDatabaseContext): void;
}
export declare class AlterUpgradeNameContext extends AlterDatabaseContext {
	_dbFormat?: Token | null;
	constructor(ctx: AlterDatabaseContext);
	KW_ALTER(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext;
	KW_UPGRADE(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_DIRECTORY(): antlr.TerminalNode;
	KW_NAME(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterSimpleDatabaseContext extends AlterDatabaseContext {
	_dbFormat?: Token | null;
	constructor(ctx: AlterDatabaseContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	databaseName(): DatabaseNameContext | null;
	createDatabaseOption(): CreateDatabaseOptionContext[];
	createDatabaseOption(i: number): CreateDatabaseOptionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterEventContext extends antlr.ParserRuleContext {
	_event_name?: FullIdContext;
	_new_event_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_EVENT(): antlr.TerminalNode;
	fullId(): FullIdContext[];
	fullId(i: number): FullIdContext | null;
	ownerStatement(): OwnerStatementContext | null;
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	KW_SCHEDULE(): antlr.TerminalNode | null;
	scheduleExpression(): ScheduleExpressionContext | null;
	KW_COMPLETION(): antlr.TerminalNode | null;
	KW_PRESERVE(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	enableType(): EnableTypeContext | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_DO(): antlr.TerminalNode | null;
	routineBody(): RoutineBodyContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	routineOption(): RoutineOptionContext[];
	routineOption(i: number): RoutineOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterInstanceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_INSTANCE(): antlr.TerminalNode;
	KW_ROTATE(): antlr.TerminalNode;
	KW_INNODB(): antlr.TerminalNode;
	KW_MASTER(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterLogfileGroupContext extends antlr.ParserRuleContext {
	_logfileGroupName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_LOGFILE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	KW_ADD(): antlr.TerminalNode;
	KW_UNDOFILE(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	KW_ENGINE(): antlr.TerminalNode;
	engineName(): EngineNameContext;
	uid(): UidContext;
	KW_INITIAL_SIZE(): antlr.TerminalNode | null;
	fileSizeLiteral(): FileSizeLiteralContext | null;
	KW_WAIT(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterProcedureContext extends antlr.ParserRuleContext {
	_proc_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_PROCEDURE(): antlr.TerminalNode;
	fullId(): FullIdContext;
	routineOption(): RoutineOptionContext[];
	routineOption(i: number): RoutineOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterServerContext extends antlr.ParserRuleContext {
	_serverName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_SERVER(): antlr.TerminalNode;
	KW_OPTIONS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	serverOption(): ServerOptionContext[];
	serverOption(i: number): ServerOptionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	uid(): UidContext;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	alterOption(): AlterOptionContext[];
	alterOption(i: number): AlterOptionContext | null;
	alterPartitionSpecification(): AlterPartitionSpecificationContext[];
	alterPartitionSpecification(i: number): AlterPartitionSpecificationContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterTablespaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespaceName(): TablespaceNameContext;
	KW_DATAFILE(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_UNDO(): antlr.TerminalNode | null;
	KW_INITIAL_SIZE(): antlr.TerminalNode | null;
	fileSizeLiteral(): FileSizeLiteralContext[];
	fileSizeLiteral(i: number): FileSizeLiteralContext | null;
	KW_WAIT(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	tablespaceNameCreate(): TablespaceNameCreateContext | null;
	KW_AUTOEXTEND_SIZE(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_ENCRYPTION(): antlr.TerminalNode | null;
	KW_ENGINE(): antlr.TerminalNode | null;
	engineName(): EngineNameContext | null;
	KW_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_ACTIVE(): antlr.TerminalNode | null;
	KW_INACTIVE(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterViewContext extends antlr.ParserRuleContext {
	_algType?: Token | null;
	_secContext?: Token | null;
	_checkOpt?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	KW_AS(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext;
	KW_ALGORITHM(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	ownerStatement(): OwnerStatementContext | null;
	KW_SQL(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_CHECK(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_UNDEFINED(): antlr.TerminalNode | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_TEMPTABLE(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	KW_CASCADED(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: AlterOptionContext): void;
}
export declare class AlterByAlterColumnDefaultContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ALTER(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	KW_SET(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	defaultValue(): DefaultValueContext | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_VISIBLE(): antlr.TerminalNode | null;
	KW_INVISIBLE(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDefaultCharsetContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_CHARACTER(): antlr.TerminalNode;
	KW_SET(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	charsetName(): CharsetNameContext;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	collationName(): CollationNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByConvertCharsetContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_CONVERT(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	charsetName(): CharsetNameContext;
	KW_CHARSET(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	collationName(): CollationNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRenameColumnContext extends AlterOptionContext {
	_olcdColumn?: ColumnNameContext;
	_newColumn?: ColumnNameCreateContext;
	constructor(ctx: AlterOptionContext);
	KW_RENAME(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	columnNameCreate(): ColumnNameCreateContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddForeignKeyContext extends AlterOptionContext {
	_symbol_?: UidContext;
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	indexColumnNames(): IndexColumnNamesContext;
	referenceDefinition(): ReferenceDefinitionContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	indexName(): IndexNameContext | null;
	uid(): UidContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRenameIndexContext extends AlterOptionContext {
	_indexFormat?: Token | null;
	constructor(ctx: AlterOptionContext);
	KW_RENAME(): antlr.TerminalNode;
	indexName(): IndexNameContext;
	KW_TO(): antlr.TerminalNode;
	indexNameCreate(): IndexNameCreateContext;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterTablespaceOptionContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_TABLESPACE(): antlr.TerminalNode;
	KW_DISCARD(): antlr.TerminalNode | null;
	KW_IMPORT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRenameContext extends AlterOptionContext {
	_renameFormat?: Token | null;
	constructor(ctx: AlterOptionContext);
	KW_RENAME(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	KW_TO(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropConstraintCheckContext extends AlterOptionContext {
	_symbol_?: UidContext;
	constructor(ctx: AlterOptionContext);
	KW_DROP(): antlr.TerminalNode;
	KW_CHECK(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAlterCheckTableConstraintContext extends AlterOptionContext {
	_symbol_?: UidContext;
	constructor(ctx: AlterOptionContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_CHECK(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	uid(): UidContext;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ENFORCED(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddColumnsContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	columnDefinition(): ColumnDefinitionContext[];
	columnDefinition(i: number): ColumnDefinitionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAlterIndexVisibilityContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ALTER(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	indexName(): IndexNameContext;
	KW_VISIBLE(): antlr.TerminalNode | null;
	KW_INVISIBLE(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropForeignKeyContext extends AlterOptionContext {
	_fk_symbol?: UidContext;
	constructor(ctx: AlterOptionContext);
	KW_DROP(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddCheckTableConstraintContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	checkConstraintDefinition(): CheckConstraintDefinitionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterPartitionContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	alterPartitionSpecification(): AlterPartitionSpecificationContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddIndexContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	indexColumnNames(): IndexColumnNamesContext;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	indexName(): IndexNameContext | null;
	indexType(): IndexTypeContext | null;
	indexOption(): IndexOptionContext[];
	indexOption(i: number): IndexOptionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropColumnContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_DROP(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	KW_COLUMN(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByForceContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_FORCE(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddSpecialIndexContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	indexColumnNames(): IndexColumnNamesContext;
	KW_FULLTEXT(): antlr.TerminalNode | null;
	KW_SPATIAL(): antlr.TerminalNode | null;
	indexName(): IndexNameContext | null;
	indexOption(): IndexOptionContext[];
	indexOption(i: number): IndexOptionContext | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByModifyColumnContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_MODIFY(): antlr.TerminalNode;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	columnDefinition(): ColumnDefinitionContext;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByTableOptionContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	tableOption(): TableOptionContext[];
	tableOption(i: number): TableOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropPrimaryKeyContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_DROP(): antlr.TerminalNode;
	KW_PRIMARY(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByLockContext extends AlterOptionContext {
	_lockType?: Token | null;
	constructor(ctx: AlterOptionContext);
	KW_LOCK(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	KW_SHARED(): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterKeysContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_KEYS(): antlr.TerminalNode;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByValidateContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_VALIDATION(): antlr.TerminalNode;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddPrimaryKeyContext extends AlterOptionContext {
	_symbol_?: UidContext;
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	KW_PRIMARY(): antlr.TerminalNode;
	KW_KEY(): antlr.TerminalNode;
	indexColumnNames(): IndexColumnNamesContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	indexType(): IndexTypeContext | null;
	indexOption(): IndexOptionContext[];
	indexOption(i: number): IndexOptionContext | null;
	uid(): UidContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterBySetAlgorithmContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ALGORITHM(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_INSTANT(): antlr.TerminalNode | null;
	KW_INPLACE(): antlr.TerminalNode | null;
	KW_COPY(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByChangeColumnContext extends AlterOptionContext {
	_oldColumn?: ColumnNameContext;
	_newColumn?: ColumnNameCreateContext;
	constructor(ctx: AlterOptionContext);
	KW_CHANGE(): antlr.TerminalNode;
	columnDefinition(): ColumnDefinitionContext;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	columnNameCreate(): ColumnNameCreateContext;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddUniqueKeyContext extends AlterOptionContext {
	_symbol_?: UidContext;
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	KW_UNIQUE(): antlr.TerminalNode;
	indexColumnNames(): IndexColumnNamesContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	indexName(): IndexNameContext | null;
	indexType(): IndexTypeContext | null;
	indexOption(): IndexOptionContext[];
	indexOption(i: number): IndexOptionContext | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropIndexContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_DROP(): antlr.TerminalNode;
	indexName(): IndexNameContext;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddColumnContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ADD(): antlr.TerminalNode;
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	columnDefinition(): ColumnDefinitionContext;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByOrderContext extends AlterOptionContext {
	constructor(ctx: AlterOptionContext);
	KW_ORDER(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	columnNames(): ColumnNamesContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterPartitionSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: AlterPartitionSpecificationContext): void;
}
export declare class AlterByImportPartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_IMPORT(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDropPartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_DROP(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByDiscardPartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_DISCARD(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAddPartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_ADD(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	partitionDefinition(): PartitionDefinitionContext[];
	partitionDefinition(i: number): PartitionDefinitionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRemovePartitioningContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_REMOVE(): antlr.TerminalNode;
	KW_PARTITIONING(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByOptimizePartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_OPTIMIZE(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByCheckPartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_CHECK(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByCoalescePartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_COALESCE(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByReorganizePartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_REORGANIZE(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext;
	KW_INTO(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	partitionDefinition(): PartitionDefinitionContext[];
	partitionDefinition(i: number): PartitionDefinitionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByAnalyzePartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_ANALYZE(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRebuildPartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_REBUILD(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByUpgradePartitioningContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_UPGRADE(): antlr.TerminalNode;
	KW_PARTITIONING(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByTruncatePartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_TRUNCATE(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByRepairPartitionContext extends AlterPartitionSpecificationContext {
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_REPAIR(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterByExchangePartitionContext extends AlterPartitionSpecificationContext {
	_validationFormat?: Token | null;
	constructor(ctx: AlterPartitionSpecificationContext);
	KW_EXCHANGE(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	partitionName(): PartitionNameContext;
	KW_WITH(): antlr.TerminalNode[];
	KW_WITH(i: number): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_VALIDATION(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropDatabaseContext extends antlr.ParserRuleContext {
	_dbFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropEventContext extends antlr.ParserRuleContext {
	_event_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_EVENT(): antlr.TerminalNode;
	fullId(): FullIdContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropIndexContext extends antlr.ParserRuleContext {
	_intimeAction?: Token | null;
	_algType?: Token | null;
	_lockType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	indexName(): IndexNameContext;
	KW_ON(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_ALGORITHM(): antlr.TerminalNode[];
	KW_ALGORITHM(i: number): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode[];
	KW_LOCK(i: number): antlr.TerminalNode | null;
	KW_ONLINE(): antlr.TerminalNode | null;
	KW_OFFLINE(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode[];
	KW_DEFAULT(i: number): antlr.TerminalNode | null;
	KW_INPLACE(): antlr.TerminalNode[];
	KW_INPLACE(i: number): antlr.TerminalNode | null;
	KW_COPY(): antlr.TerminalNode[];
	KW_COPY(i: number): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode[];
	KW_NONE(i: number): antlr.TerminalNode | null;
	KW_SHARED(): antlr.TerminalNode[];
	KW_SHARED(i: number): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode[];
	KW_EXCLUSIVE(i: number): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropLogfileGroupContext extends antlr.ParserRuleContext {
	_logfileGroupName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_LOGFILE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	KW_ENGINE(): antlr.TerminalNode;
	engineName(): EngineNameContext;
	uid(): UidContext;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropProcedureContext extends antlr.ParserRuleContext {
	_sp_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_PROCEDURE(): antlr.TerminalNode;
	fullId(): FullIdContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropServerContext extends antlr.ParserRuleContext {
	_serverName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_SERVER(): antlr.TerminalNode;
	uid(): UidContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropSpatialContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_SPATIAL(): antlr.TerminalNode;
	KW_REFERENCE(): antlr.TerminalNode;
	KW_SYSTEM(): antlr.TerminalNode;
	DECIMAL_LITERAL(): antlr.TerminalNode;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropTableContext extends antlr.ParserRuleContext {
	_dropType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	ifExists(): IfExistsContext | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropTablespaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespaceName(): TablespaceNameContext;
	KW_UNDO(): antlr.TerminalNode | null;
	KW_ENGINE(): antlr.TerminalNode | null;
	engineName(): EngineNameContext | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropTriggerContext extends antlr.ParserRuleContext {
	_trigger_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TRIGGER(): antlr.TerminalNode;
	fullId(): FullIdContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropViewContext extends antlr.ParserRuleContext {
	_dropType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext[];
	viewName(i: number): ViewNameContext | null;
	ifExists(): IfExistsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	userOrRoleNames(): UserOrRoleNamesContext;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetRoleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	userOrRoleNames(): UserOrRoleNamesContext | null;
	userOrRoleName(): UserOrRoleNameContext[];
	userOrRoleName(i: number): UserOrRoleNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	roleOption(): RoleOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RENAME(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	renameTableClause(): RenameTableClauseContext[];
	renameTableClause(i: number): RenameTableClauseContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameTableClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext;
	KW_TO(): antlr.TerminalNode;
	tableNameCreate(): TableNameCreateContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TruncateTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUNCATE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_TABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CallStatementContext extends antlr.ParserRuleContext {
	_sp_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CALL(): antlr.TerminalNode;
	fullId(): FullIdContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	constants(): ConstantsContext | null;
	expressions(): ExpressionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeleteStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	singleDeleteStatement(): SingleDeleteStatementContext | null;
	multipleDeleteStatement(): MultipleDeleteStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DoStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DO(): antlr.TerminalNode;
	expressions(): ExpressionsContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	handlerOpenStatement(): HandlerOpenStatementContext | null;
	handlerReadIndexStatement(): HandlerReadIndexStatementContext | null;
	handlerReadStatement(): HandlerReadStatementContext | null;
	handlerCloseStatement(): HandlerCloseStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InsertStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	_duplicatedFirst?: UpdatedElementContext;
	_updatedElement?: UpdatedElementContext;
	_duplicatedElements: UpdatedElementContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode;
	tableName(): TableNameContext;
	setAssignmentList(): SetAssignmentListContext | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	asRowAlias(): AsRowAliasContext[];
	asRowAlias(i: number): AsRowAliasContext | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_DUPLICATE(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	updatedElement(): UpdatedElementContext[];
	updatedElement(i: number): UpdatedElementContext | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	KW_DELAYED(): antlr.TerminalNode | null;
	KW_HIGH_PRIORITY(): antlr.TerminalNode | null;
	fullColumnNames(): FullColumnNamesContext | null;
	valuesOrValueList(): ValuesOrValueListContext | null;
	selectOrTableOrValues(): SelectOrTableOrValuesContext | null;
	partitionNames(): PartitionNamesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AsRowAliasContext extends antlr.ParserRuleContext {
	_rowAlias?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	uid(): UidContext;
	fullColumnNames(): FullColumnNamesContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectOrTableOrValuesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectStatement(): SelectStatementContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	rowValuesList(): RowValuesListContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InterSectStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	interSectQuery(): InterSectQueryContext[];
	interSectQuery(i: number): InterSectQueryContext | null;
	KW_INTERSECT(): antlr.TerminalNode[];
	KW_INTERSECT(i: number): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode[];
	KW_ALL(i: number): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode[];
	KW_DISTINCT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InterSectQueryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	querySpecification(): QuerySpecificationContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadDataStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	_filename?: Token | null;
	_violation?: Token | null;
	_charset?: CharsetNameContext;
	_fieldsFormat?: Token | null;
	_linesFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOAD(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_INFILE(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	STRING_LITERAL(): antlr.TerminalNode;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	partitionNames(): PartitionNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode[];
	KW_SET(i: number): antlr.TerminalNode | null;
	KW_LINES(): antlr.TerminalNode[];
	KW_LINES(i: number): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode[];
	KW_IGNORE(i: number): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	assignmentField(): AssignmentFieldContext[];
	assignmentField(i: number): AssignmentFieldContext | null;
	updatedElement(): UpdatedElementContext[];
	updatedElement(i: number): UpdatedElementContext | null;
	charsetName(): CharsetNameContext | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	KW_CONCURRENT(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	selectFieldsInto(): SelectFieldsIntoContext[];
	selectFieldsInto(i: number): SelectFieldsIntoContext | null;
	selectLinesInto(): SelectLinesIntoContext[];
	selectLinesInto(i: number): SelectLinesIntoContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadXmlStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	_filename?: Token | null;
	_violation?: Token | null;
	_charset?: CharsetNameContext;
	_tag?: Token | null;
	_linesFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOAD(): antlr.TerminalNode;
	KW_XML(): antlr.TerminalNode;
	KW_INFILE(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode[];
	KW_SET(i: number): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode[];
	KW_ROWS(i: number): antlr.TerminalNode | null;
	KW_IDENTIFIED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode[];
	KW_IGNORE(i: number): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	assignmentField(): AssignmentFieldContext[];
	assignmentField(i: number): AssignmentFieldContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	updatedElement(): UpdatedElementContext[];
	updatedElement(i: number): UpdatedElementContext | null;
	charsetName(): CharsetNameContext | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	KW_CONCURRENT(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_LINES(): antlr.TerminalNode | null;
	LESS_SYMBOL(): antlr.TerminalNode | null;
	GREATER_SYMBOL(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ParenthesizedQueryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	parenthesizedQueryExpression(): ParenthesizedQueryExpressionContext;
	RR_BRACKET(): antlr.TerminalNode;
	orderByClause(): OrderByClauseContext[];
	orderByClause(i: number): OrderByClauseContext | null;
	limitClause(): LimitClauseContext[];
	limitClause(i: number): LimitClauseContext | null;
	intoClause(): IntoClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplaceStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPLACE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	replaceStatementValuesOrSelectOrTable(): ReplaceStatementValuesOrSelectOrTableContext | null;
	setAssignmentList(): SetAssignmentListContext | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	partitionNames(): PartitionNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	KW_DELAYED(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SelectStatementContext): void;
}
export declare class UnionAndLateralSelectContext extends SelectStatementContext {
	_unionType?: Token | null;
	constructor(ctx: SelectStatementContext);
	querySpecification(): QuerySpecificationContext[];
	querySpecification(i: number): QuerySpecificationContext | null;
	unionStatement(): UnionStatementContext[];
	unionStatement(i: number): UnionStatementContext | null;
	KW_UNION(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	lateralStatement(): LateralStatementContext[];
	lateralStatement(i: number): LateralStatementContext | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	lockClause(): LockClauseContext | null;
	intoClause(): IntoClauseContext | null;
	queryExpression(): QueryExpressionContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectExpressionContext extends SelectStatementContext {
	_unionType?: Token | null;
	constructor(ctx: SelectStatementContext);
	queryExpression(): QueryExpressionContext[];
	queryExpression(i: number): QueryExpressionContext | null;
	unionStatement(): UnionStatementContext[];
	unionStatement(i: number): UnionStatementContext | null;
	KW_UNION(): antlr.TerminalNode | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	lockClause(): LockClauseContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetOperationsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryExpressionBody(): QueryExpressionBodyContext;
	withClause(): WithClauseContext | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	intoClause(): IntoClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryExpressionBodyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryItem(): QueryItemContext;
	queryExpressionBody(): QueryExpressionBodyContext | null;
	KW_UNION(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryPrimary(): QueryPrimaryContext;
	queryItem(): QueryItemContext | null;
	KW_INTERSECT(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryBlock(): QueryBlockContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	queryExpressionBody(): QueryExpressionBodyContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	intoClause(): IntoClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UpdateStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	singleUpdateStatement(): SingleUpdateStatementContext | null;
	multipleUpdateStatement(): MultipleUpdateStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ValuesStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rowValuesList(): RowValuesListContext;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	indexColumnName(): IndexColumnNameContext | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	limitClauseAtom(): LimitClauseAtomContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ParenthesizedQueryExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	queryBlock(): QueryBlockContext[];
	queryBlock(i: number): QueryBlockContext | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	intoClause(): IntoClauseContext | null;
	KW_UNION(): antlr.TerminalNode[];
	KW_UNION(i: number): antlr.TerminalNode | null;
	KW_INTERSECT(): antlr.TerminalNode[];
	KW_INTERSECT(i: number): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode[];
	KW_EXCEPT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryBlockContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectStatement(): SelectStatementContext | null;
	tableStatement(): TableStatementContext | null;
	valuesStatement(): ValuesStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplaceStatementValuesOrSelectOrTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectStatement(): SelectStatementContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	tableName(): TableNameContext | null;
	valuesOrValueList(): ValuesOrValueListContext | null;
	rowValuesList(): RowValuesListContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RowValuesListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUES(): antlr.TerminalNode;
	KW_ROW(): antlr.TerminalNode[];
	KW_ROW(i: number): antlr.TerminalNode | null;
	expressionsWithDefaults(): ExpressionsWithDefaultsContext[];
	expressionsWithDefaults(i: number): ExpressionsWithDefaultsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetAssignmentListContext extends antlr.ParserRuleContext {
	_setFirst?: UpdatedElementContext;
	_updatedElement?: UpdatedElementContext;
	_setElements: UpdatedElementContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	updatedElement(): UpdatedElementContext[];
	updatedElement(i: number): UpdatedElementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UpdatedElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	expressionOrDefault(): ExpressionOrDefaultContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AssignmentFieldContext extends antlr.ParserRuleContext {
	_var_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext | null;
	LOCAL_ID(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_SHARE(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	tableName(): TableNameContext[];
	tableName(i: number): TableNameContext | null;
	KW_LOCKED(): antlr.TerminalNode | null;
	KW_NOWAIT(): antlr.TerminalNode | null;
	KW_SKIP(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_MODE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SingleDeleteStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	_table_alias?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELETE(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_QUICK(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	partitionNames(): PartitionNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	orderByClause(): OrderByClauseContext | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	limitClauseAtom(): LimitClauseAtomContext | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MultipleDeleteStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELETE(): antlr.TerminalNode;
	tableName(): TableNameContext[];
	tableName(i: number): TableNameContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	tableSources(): TableSourcesContext | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_QUICK(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode[];
	STAR(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerOpenStatementContext extends antlr.ParserRuleContext {
	_table_alias?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HANDLER(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_OPEN(): antlr.TerminalNode;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerReadIndexStatementContext extends antlr.ParserRuleContext {
	_moveOrder?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HANDLER(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_READ(): antlr.TerminalNode;
	indexName(): IndexNameContext;
	comparisonBase(): ComparisonBaseContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	constants(): ConstantsContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	limitClauseAtom(): LimitClauseAtomContext | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_PREV(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerReadStatementContext extends antlr.ParserRuleContext {
	_moveOrder?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HANDLER(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_READ(): antlr.TerminalNode;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	limitClauseAtom(): LimitClauseAtomContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerCloseStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HANDLER(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_CLOSE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ImportTableStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IMPORT(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SingleUpdateStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	_table_alias?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UPDATE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_SET(): antlr.TerminalNode;
	updatedElement(): UpdatedElementContext[];
	updatedElement(i: number): UpdatedElementContext | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MultipleUpdateStatementContext extends antlr.ParserRuleContext {
	_priority?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UPDATE(): antlr.TerminalNode;
	tableSources(): TableSourcesContext;
	KW_SET(): antlr.TerminalNode;
	updatedElement(): UpdatedElementContext[];
	updatedElement(i: number): UpdatedElementContext | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OrderByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ORDER(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	orderByExpression(): OrderByExpressionContext[];
	orderByExpression(i: number): OrderByExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OrderByExpressionContext extends antlr.ParserRuleContext {
	_order?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourcesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableSource(): TableSourceContext[];
	tableSource(i: number): TableSourceContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: TableSourceContext): void;
}
export declare class TableJsonContext extends TableSourceContext {
	constructor(ctx: TableSourceContext);
	jsonTable(): JsonTableContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceNestedContext extends TableSourceContext {
	constructor(ctx: TableSourceContext);
	LR_BRACKET(): antlr.TerminalNode;
	tableSourceItem(): TableSourceItemContext;
	RR_BRACKET(): antlr.TerminalNode;
	joinPart(): JoinPartContext[];
	joinPart(i: number): JoinPartContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceBaseContext extends TableSourceContext {
	constructor(ctx: TableSourceContext);
	tableSourceItem(): TableSourceItemContext;
	joinPart(): JoinPartContext[];
	joinPart(i: number): JoinPartContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourceItemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: TableSourceItemContext): void;
}
export declare class SubqueryTableItemContext extends TableSourceItemContext {
	_parenthesisSubquery?: SelectStatementContext;
	_alias?: UidContext;
	constructor(ctx: TableSourceItemContext);
	uid(): UidContext;
	selectStatement(): SelectStatementContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	fullColumnNames(): FullColumnNamesContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AtomTableItemContext extends TableSourceItemContext {
	_alias?: UidContext;
	constructor(ctx: TableSourceItemContext);
	tableName(): TableNameContext;
	KW_PARTITION(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	partitionNames(): PartitionNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	indexHint(): IndexHintContext[];
	indexHint(i: number): IndexHintContext | null;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableSourcesItemContext extends TableSourceItemContext {
	constructor(ctx: TableSourceItemContext);
	LR_BRACKET(): antlr.TerminalNode;
	tableSources(): TableSourcesContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullColumnNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	columnNames(): ColumnNamesContext;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexHintContext extends antlr.ParserRuleContext {
	_indexHintAction?: Token | null;
	_keyFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	KW_USE(): antlr.TerminalNode | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_FORCE(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	indexHintType(): IndexHintTypeContext | null;
	indexNames(): IndexNamesContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexHintTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_JOIN(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JoinPartContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: JoinPartContext): void;
}
export declare class InnerJoinContext extends JoinPartContext {
	constructor(ctx: JoinPartContext);
	KW_JOIN(): antlr.TerminalNode;
	tableSourceItem(): TableSourceItemContext;
	KW_LATERAL(): antlr.TerminalNode | null;
	joinSpec(): JoinSpecContext[];
	joinSpec(i: number): JoinSpecContext | null;
	KW_INNER(): antlr.TerminalNode | null;
	KW_CROSS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NaturalJoinContext extends JoinPartContext {
	constructor(ctx: JoinPartContext);
	KW_NATURAL(): antlr.TerminalNode;
	KW_JOIN(): antlr.TerminalNode;
	tableSourceItem(): TableSourceItemContext;
	KW_INNER(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OuterJoinContext extends JoinPartContext {
	constructor(ctx: JoinPartContext);
	KW_JOIN(): antlr.TerminalNode;
	tableSourceItem(): TableSourceItemContext;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	joinSpec(): JoinSpecContext[];
	joinSpec(i: number): JoinSpecContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StraightJoinContext extends JoinPartContext {
	constructor(ctx: JoinPartContext);
	KW_STRAIGHT_JOIN(): antlr.TerminalNode;
	tableSourceItem(): TableSourceItemContext;
	joinSpec(): JoinSpecContext[];
	joinSpec(i: number): JoinSpecContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JoinSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_USING(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QueryExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	querySpecification(): QuerySpecificationContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	queryExpression(): QueryExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class QuerySpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode;
	selectElements(): SelectElementsContext;
	fromClause(): FromClauseContext;
	selectSpec(): SelectSpecContext[];
	selectSpec(i: number): SelectSpecContext | null;
	intoClause(): IntoClauseContext[];
	intoClause(i: number): IntoClauseContext | null;
	groupByClause(): GroupByClauseContext | null;
	havingClause(): HavingClauseContext | null;
	windowClause(): WindowClauseContext | null;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnionStatementContext extends antlr.ParserRuleContext {
	_unionType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNION(): antlr.TerminalNode;
	querySpecification(): QuerySpecificationContext | null;
	queryExpression(): QueryExpressionContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LateralStatementContext extends antlr.ParserRuleContext {
	_alias?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LATERAL(): antlr.TerminalNode;
	querySpecification(): QuerySpecificationContext | null;
	queryExpression(): QueryExpressionContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonTableContext extends antlr.ParserRuleContext {
	_alias?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_JSON_TABLE(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode;
	KW_COLUMNS(): antlr.TerminalNode;
	jsonColumnList(): JsonColumnListContext;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonColumnListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	jsonColumn(): JsonColumnContext[];
	jsonColumn(i: number): JsonColumnContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonColumnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	dataType(): DataTypeContext | null;
	KW_PATH(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	jsonOnEmpty(): JsonOnEmptyContext | null;
	jsonOnError(): JsonOnErrorContext | null;
	KW_NESTED(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	jsonColumnList(): JsonColumnListContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonOnEmptyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode;
	KW_EMPTY(): antlr.TerminalNode;
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	KW_ERROR(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	defaultValue(): DefaultValueContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonOnErrorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode;
	KW_ERROR(): antlr.TerminalNode[];
	KW_ERROR(i: number): antlr.TerminalNode | null;
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	defaultValue(): DefaultValueContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_DISTINCTROW(): antlr.TerminalNode | null;
	KW_HIGH_PRIORITY(): antlr.TerminalNode | null;
	KW_STRAIGHT_JOIN(): antlr.TerminalNode | null;
	KW_SQL_SMALL_RESULT(): antlr.TerminalNode | null;
	KW_SQL_BIG_RESULT(): antlr.TerminalNode | null;
	KW_SQL_BUFFER_RESULT(): antlr.TerminalNode | null;
	KW_SQL_CACHE(): antlr.TerminalNode | null;
	KW_SQL_NO_CACHE(): antlr.TerminalNode | null;
	KW_SQL_CALC_FOUND_ROWS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectElementsContext extends antlr.ParserRuleContext {
	_star?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectElement(): SelectElementContext[];
	selectElement(i: number): SelectElementContext | null;
	STAR(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectElementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SelectElementContext): void;
}
export declare class SelectExpressionElementContext extends SelectElementContext {
	_alias?: UidContext;
	constructor(ctx: SelectElementContext);
	expression(): ExpressionContext;
	LOCAL_ID(): antlr.TerminalNode | null;
	VAR_ASSIGN(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectFunctionElementContext extends SelectElementContext {
	_alias?: UidContext;
	constructor(ctx: SelectElementContext);
	functionCall(): FunctionCallContext;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectStarElementContext extends SelectElementContext {
	_select_element?: FullIdContext;
	constructor(ctx: SelectElementContext);
	DOT(): antlr.TerminalNode;
	STAR(): antlr.TerminalNode;
	fullId(): FullIdContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectColumnElementContext extends SelectElementContext {
	_alias?: UidContext;
	constructor(ctx: SelectElementContext);
	columnName(): ColumnNameContext;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntoClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: IntoClauseContext): void;
}
export declare class SelectIntoVariablesContext extends IntoClauseContext {
	constructor(ctx: IntoClauseContext);
	KW_INTO(): antlr.TerminalNode;
	assignmentField(): AssignmentFieldContext[];
	assignmentField(i: number): AssignmentFieldContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectIntoTextFileContext extends IntoClauseContext {
	_filename?: Token | null;
	_charset?: CharsetNameContext;
	_fieldsFormat?: Token | null;
	constructor(ctx: IntoClauseContext);
	KW_INTO(): antlr.TerminalNode | null;
	KW_OUTFILE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_LINES(): antlr.TerminalNode | null;
	charsetName(): CharsetNameContext | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	selectFieldsInto(): SelectFieldsIntoContext[];
	selectFieldsInto(i: number): SelectFieldsIntoContext | null;
	selectLinesInto(): SelectLinesIntoContext[];
	selectLinesInto(i: number): SelectLinesIntoContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectIntoDumpFileContext extends IntoClauseContext {
	constructor(ctx: IntoClauseContext);
	KW_INTO(): antlr.TerminalNode;
	KW_DUMPFILE(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectFieldsIntoContext extends antlr.ParserRuleContext {
	_terminationField?: Token | null;
	_enclosion?: Token | null;
	_escaping?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TERMINATED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	KW_ENCLOSED(): antlr.TerminalNode | null;
	KW_OPTIONALLY(): antlr.TerminalNode | null;
	KW_ESCAPED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SelectLinesIntoContext extends antlr.ParserRuleContext {
	_starting?: Token | null;
	_terminationLine?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STARTING(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	KW_TERMINATED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
	_whereExpr?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode | null;
	tableSources(): TableSourcesContext | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GroupByClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GROUP(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	groupByItem(): GroupByItemContext[];
	groupByItem(i: number): GroupByItemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_ROLLUP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
	_havingExpr?: ExpressionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HAVING(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WindowClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WINDOW(): antlr.TerminalNode;
	windowName(): WindowNameContext[];
	windowName(i: number): WindowNameContext | null;
	KW_AS(): antlr.TerminalNode[];
	KW_AS(i: number): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	windowSpec(): WindowSpecContext[];
	windowSpec(i: number): WindowSpecContext | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GroupByItemContext extends antlr.ParserRuleContext {
	_order?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LimitClauseContext extends antlr.ParserRuleContext {
	_offset?: LimitClauseAtomContext;
	_limit?: LimitClauseAtomContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIMIT(): antlr.TerminalNode;
	KW_OFFSET(): antlr.TerminalNode | null;
	limitClauseAtom(): LimitClauseAtomContext[];
	limitClauseAtom(i: number): LimitClauseAtomContext | null;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LimitClauseAtomContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decimalLiteral(): DecimalLiteralContext | null;
	mysqlVariable(): MysqlVariableContext | null;
	simpleId(): SimpleIdContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StartTransactionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_START(): antlr.TerminalNode;
	KW_TRANSACTION(): antlr.TerminalNode;
	transactionMode(): TransactionModeContext[];
	transactionMode(i: number): TransactionModeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BeginWorkContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BEGIN(): antlr.TerminalNode;
	KW_WORK(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CommitWorkContext extends antlr.ParserRuleContext {
	_nochain?: Token | null;
	_norelease?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMIT(): antlr.TerminalNode;
	KW_WORK(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_CHAIN(): antlr.TerminalNode | null;
	KW_RELEASE(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode[];
	KW_NO(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RollbackWorkContext extends antlr.ParserRuleContext {
	_nochain?: Token | null;
	_norelease?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROLLBACK(): antlr.TerminalNode;
	KW_WORK(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_CHAIN(): antlr.TerminalNode | null;
	KW_RELEASE(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode[];
	KW_NO(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SavepointStatementContext extends antlr.ParserRuleContext {
	_identifier?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SAVEPOINT(): antlr.TerminalNode;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RollbackStatementContext extends antlr.ParserRuleContext {
	_identifier?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROLLBACK(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	uid(): UidContext;
	KW_WORK(): antlr.TerminalNode | null;
	KW_SAVEPOINT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReleaseStatementContext extends antlr.ParserRuleContext {
	_identifier?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RELEASE(): antlr.TerminalNode;
	KW_SAVEPOINT(): antlr.TerminalNode;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockTablesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOCK(): antlr.TerminalNode;
	lockTableElement(): LockTableElementContext[];
	lockTableElement(i: number): LockTableElementContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnlockTablesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNLOCK(): antlr.TerminalNode;
	KW_TABLES(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetAutocommitStatementContext extends antlr.ParserRuleContext {
	_autocommitValue?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_AUTOCOMMIT(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetTransactionStatementContext extends antlr.ParserRuleContext {
	_transactionContext?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_TRANSACTION(): antlr.TerminalNode;
	transactionOption(): TransactionOptionContext[];
	transactionOption(i: number): TransactionOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionModeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode | null;
	KW_CONSISTENT(): antlr.TerminalNode | null;
	KW_SNAPSHOT(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockTableElementContext extends antlr.ParserRuleContext {
	_alias?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext;
	lockAction(): LockActionContext;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LockActionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_READ(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	KW_LOW_PRIORITY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	transactionLevel(): TransactionLevelContext | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionLevelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPEATABLE(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_COMMITTED(): antlr.TerminalNode | null;
	KW_UNCOMMITTED(): antlr.TerminalNode | null;
	KW_SERIALIZABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChangeMasterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHANGE(): antlr.TerminalNode;
	KW_MASTER(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	masterOption(): MasterOptionContext[];
	masterOption(i: number): MasterOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	channelOption(): ChannelOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChangeReplicationFilterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHANGE(): antlr.TerminalNode;
	KW_REPLICATION(): antlr.TerminalNode;
	KW_FILTER(): antlr.TerminalNode;
	replicationFilter(): ReplicationFilterContext[];
	replicationFilter(i: number): ReplicationFilterContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	channelOption(): ChannelOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChangeReplicationSourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHANGE(): antlr.TerminalNode;
	KW_REPLICATION(): antlr.TerminalNode;
	KW_SOURCE(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	replicationSourceOption(): ReplicationSourceOptionContext[];
	replicationSourceOption(i: number): ReplicationSourceOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	channelOption(): ChannelOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PurgeBinaryLogsContext extends antlr.ParserRuleContext {
	_purgeFormat?: Token | null;
	_fileName?: Token | null;
	_timeValue?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PURGE(): antlr.TerminalNode;
	KW_LOGS(): antlr.TerminalNode;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_MASTER(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_BEFORE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StartSlaveOrReplicaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_START(): antlr.TerminalNode;
	KW_SLAVE(): antlr.TerminalNode | null;
	KW_REPLICA(): antlr.TerminalNode | null;
	threadType(): ThreadTypeContext[];
	threadType(i: number): ThreadTypeContext | null;
	KW_UNTIL(): antlr.TerminalNode | null;
	untilOption(): UntilOptionContext | null;
	connectionOptions(): ConnectionOptionsContext[];
	connectionOptions(i: number): ConnectionOptionsContext | null;
	channelOption(): ChannelOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StopSlaveOrReplicaContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STOP(): antlr.TerminalNode;
	KW_SLAVE(): antlr.TerminalNode | null;
	KW_REPLICA(): antlr.TerminalNode | null;
	threadType(): ThreadTypeContext[];
	threadType(i: number): ThreadTypeContext | null;
	channelOption(): ChannelOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StartGroupReplicationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_START(): antlr.TerminalNode;
	KW_GROUP_REPLICATION(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_DEFAULT_AUTH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StopGroupReplicationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STOP(): antlr.TerminalNode;
	KW_GROUP_REPLICATION(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: MasterOptionContext): void;
}
export declare class MasterStringOptionContext extends MasterOptionContext {
	constructor(ctx: MasterOptionContext);
	stringMasterOption(): StringMasterOptionContext;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class V8AddMasterOptionContext extends MasterOptionContext {
	constructor(ctx: MasterOptionContext);
	v8NewMasterOption(): V8NewMasterOptionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterBoolOptionContext extends MasterOptionContext {
	_boolVal?: Token | null;
	constructor(ctx: MasterOptionContext);
	boolMasterOption(): BoolMasterOptionContext;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterUidListOptionContext extends MasterOptionContext {
	_server_id?: UidContext;
	constructor(ctx: MasterOptionContext);
	KW_IGNORE_SERVER_IDS(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterDecimalOptionContext extends MasterOptionContext {
	constructor(ctx: MasterOptionContext);
	decimalMasterOption(): DecimalMasterOptionContext;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringMasterOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MASTER_BIND(): antlr.TerminalNode | null;
	KW_MASTER_HOST(): antlr.TerminalNode | null;
	KW_MASTER_USER(): antlr.TerminalNode | null;
	KW_MASTER_PASSWORD(): antlr.TerminalNode | null;
	KW_MASTER_LOG_FILE(): antlr.TerminalNode | null;
	KW_RELAY_LOG_FILE(): antlr.TerminalNode | null;
	KW_MASTER_COMPRESSION_ALGORITHMS(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CA(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CAPATH(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CERT(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CRL(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CRLPATH(): antlr.TerminalNode | null;
	KW_MASTER_SSL_KEY(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CIPHER(): antlr.TerminalNode | null;
	KW_MASTER_TLS_VERSION(): antlr.TerminalNode | null;
	KW_MASTER_TLS_CIPHERSUITES(): antlr.TerminalNode | null;
	KW_MASTER_PUBLIC_KEY_PATH(): antlr.TerminalNode | null;
	KW_NETWORK_NAMESPACE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DecimalMasterOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MASTER_PORT(): antlr.TerminalNode | null;
	KW_MASTER_LOG_POS(): antlr.TerminalNode | null;
	KW_RELAY_LOG_POS(): antlr.TerminalNode | null;
	KW_MASTER_HEARTBEAT_PERIOD(): antlr.TerminalNode | null;
	KW_MASTER_CONNECT_RETRY(): antlr.TerminalNode | null;
	KW_MASTER_RETRY_COUNT(): antlr.TerminalNode | null;
	KW_MASTER_DELAY(): antlr.TerminalNode | null;
	KW_MASTER_ZSTD_COMPRESSION_LEVEL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BoolMasterOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REQUIRE_ROW_FORMAT(): antlr.TerminalNode | null;
	KW_MASTER_AUTO_POSITION(): antlr.TerminalNode | null;
	KW_SOURCE_CONNECTION_AUTO_FAILOVER(): antlr.TerminalNode | null;
	KW_MASTER_SSL(): antlr.TerminalNode | null;
	KW_MASTER_SSL_VERIFY_SERVER_CERT(): antlr.TerminalNode | null;
	KW_GET_MASTER_PUBLIC_KEY(): antlr.TerminalNode | null;
	KW_GTID_ONLY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class V8NewMasterOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRIVILEGE_CHECKS_USER(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	KW_REQUIRE_TABLE_PRIMARY_KEY_CHECK(): antlr.TerminalNode | null;
	KW_STREAM(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_OFF(): antlr.TerminalNode | null;
	KW_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	gtuidSet(): GtuidSetContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplicationSourceOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ReplicationSourceOptionContext): void;
}
export declare class SourceBoolOptionContext extends ReplicationSourceOptionContext {
	_boolVal?: Token | null;
	constructor(ctx: ReplicationSourceOptionContext);
	boolSourceOption(): BoolSourceOptionContext;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SourceUidListOptionContext extends ReplicationSourceOptionContext {
	_server_id?: UidContext;
	constructor(ctx: ReplicationSourceOptionContext);
	KW_IGNORE_SERVER_IDS(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SourceOtherOptionContext extends ReplicationSourceOptionContext {
	constructor(ctx: ReplicationSourceOptionContext);
	otherSourceOption(): OtherSourceOptionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SourceStringOptionContext extends ReplicationSourceOptionContext {
	constructor(ctx: ReplicationSourceOptionContext);
	stringSourceOption(): StringSourceOptionContext;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SourceDecimalOptionContext extends ReplicationSourceOptionContext {
	constructor(ctx: ReplicationSourceOptionContext);
	decimalSourceOption(): DecimalSourceOptionContext;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringSourceOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SOURCE_BIND(): antlr.TerminalNode | null;
	KW_SOURCE_HOST(): antlr.TerminalNode | null;
	KW_SOURCE_USER(): antlr.TerminalNode | null;
	KW_SOURCE_PASSWORD(): antlr.TerminalNode | null;
	KW_SOURCE_LOG_FILE(): antlr.TerminalNode | null;
	KW_RELAY_LOG_FILE(): antlr.TerminalNode | null;
	KW_SOURCE_COMPRESSION_ALGORITHMS(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_CA(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_CAPATH(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_CERT(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_CRL(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_CRLPATH(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_KEY(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_CIPHER(): antlr.TerminalNode | null;
	KW_SOURCE_TLS_VERSION(): antlr.TerminalNode | null;
	KW_SOURCE_TLS_CIPHERSUITES(): antlr.TerminalNode | null;
	KW_SOURCE_PUBLIC_KEY_PATH(): antlr.TerminalNode | null;
	KW_NETWORK_NAMESPACE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DecimalSourceOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SOURCE_PORT(): antlr.TerminalNode | null;
	KW_SOURCE_LOG_POS(): antlr.TerminalNode | null;
	KW_RELAY_LOG_POS(): antlr.TerminalNode | null;
	KW_SOURCE_HEARTBEAT_PERIOD(): antlr.TerminalNode | null;
	KW_SOURCE_CONNECT_RETRY(): antlr.TerminalNode | null;
	KW_SOURCE_RETRY_COUNT(): antlr.TerminalNode | null;
	KW_SOURCE_DELAY(): antlr.TerminalNode | null;
	KW_SOURCE_ZSTD_COMPRESSION_LEVEL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BoolSourceOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REQUIRE_ROW_FORMAT(): antlr.TerminalNode | null;
	KW_SOURCE_AUTO_POSITION(): antlr.TerminalNode | null;
	KW_SOURCE_CONNECTION_AUTO_FAILOVER(): antlr.TerminalNode | null;
	KW_SOURCE_SSL(): antlr.TerminalNode | null;
	KW_SOURCE_SSL_VERIFY_SERVER_CERT(): antlr.TerminalNode | null;
	KW_GET_SOURCE_PUBLIC_KEY(): antlr.TerminalNode | null;
	KW_GTID_ONLY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OtherSourceOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRIVILEGE_CHECKS_USER(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	KW_REQUIRE_TABLE_PRIMARY_KEY_CHECK(): antlr.TerminalNode | null;
	KW_STREAM(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_OFF(): antlr.TerminalNode | null;
	KW_GENERATE(): antlr.TerminalNode | null;
	KW_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	gtuidSet(): GtuidSetContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChannelOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	KW_CHANNEL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReplicationFilterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ReplicationFilterContext): void;
}
export declare class WildIgnoreTableReplicationContext extends ReplicationFilterContext {
	constructor(ctx: ReplicationFilterContext);
	KW_REPLICATE_WILD_IGNORE_TABLE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	simpleStrings(): SimpleStringsContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DoTableReplicationContext extends ReplicationFilterContext {
	constructor(ctx: ReplicationFilterContext);
	KW_REPLICATE_DO_TABLE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IgnoreTableReplicationContext extends ReplicationFilterContext {
	constructor(ctx: ReplicationFilterContext);
	KW_REPLICATE_IGNORE_TABLE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RewriteDbReplicationContext extends ReplicationFilterContext {
	constructor(ctx: ReplicationFilterContext);
	KW_REPLICATE_REWRITE_DB(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	tablePair(): TablePairContext[];
	tablePair(i: number): TablePairContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DoDbReplicationContext extends ReplicationFilterContext {
	constructor(ctx: ReplicationFilterContext);
	KW_REPLICATE_DO_DB(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext[];
	databaseName(i: number): DatabaseNameContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IgnoreDbReplicationContext extends ReplicationFilterContext {
	constructor(ctx: ReplicationFilterContext);
	KW_REPLICATE_IGNORE_DB(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext[];
	databaseName(i: number): DatabaseNameContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WildDoTableReplicationContext extends ReplicationFilterContext {
	constructor(ctx: ReplicationFilterContext);
	KW_REPLICATE_WILD_DO_TABLE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	simpleStrings(): SimpleStringsContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TablePairContext extends antlr.ParserRuleContext {
	_firstTable?: TableNameContext;
	_secondTable?: TableNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	tableName(): TableNameContext[];
	tableName(i: number): TableNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ThreadTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IO_THREAD(): antlr.TerminalNode | null;
	KW_SQL_THREAD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UntilOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: UntilOptionContext): void;
}
export declare class SourceLogUntilOptionContext extends UntilOptionContext {
	constructor(ctx: UntilOptionContext);
	KW_SOURCE_LOG_FILE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	KW_SOURCE_LOG_POS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GtidsUntilOptionContext extends UntilOptionContext {
	_gtids?: Token | null;
	constructor(ctx: UntilOptionContext);
	EQUAL_SYMBOL(): antlr.TerminalNode;
	gtuidSet(): GtuidSetContext;
	KW_SQL_BEFORE_GTIDS(): antlr.TerminalNode | null;
	KW_SQL_AFTER_GTIDS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SqlGapsUntilOptionContext extends UntilOptionContext {
	constructor(ctx: UntilOptionContext);
	KW_SQL_AFTER_MTS_GAPS(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MasterLogUntilOptionContext extends UntilOptionContext {
	constructor(ctx: UntilOptionContext);
	KW_MASTER_LOG_FILE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	KW_MASTER_LOG_POS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RelayLogUntilOptionContext extends UntilOptionContext {
	constructor(ctx: UntilOptionContext);
	KW_RELAY_LOG_FILE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	KW_RELAY_LOG_POS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConnectionOptionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ConnectionOptionsContext): void;
}
export declare class PluginDirConnectionOptionContext extends ConnectionOptionsContext {
	_conOptPluginDir?: Token | null;
	constructor(ctx: ConnectionOptionsContext);
	KW_PLUGIN_DIR(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserConnectionOptionContext extends ConnectionOptionsContext {
	_conOptUser?: Token | null;
	constructor(ctx: ConnectionOptionsContext);
	KW_USER(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefaultAuthConnectionOptionContext extends ConnectionOptionsContext {
	_conOptDefAuth?: Token | null;
	constructor(ctx: ConnectionOptionsContext);
	KW_DEFAULT_AUTH(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PasswordConnectionOptionContext extends ConnectionOptionsContext {
	_conOptPassword?: Token | null;
	constructor(ctx: ConnectionOptionsContext);
	KW_PASSWORD(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GtuidSetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uuidSet(): UuidSetContext[];
	uuidSet(i: number): UuidSetContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaStartTransactionContext extends antlr.ParserRuleContext {
	_xaStart?: Token | null;
	_xaAction?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XA(): antlr.TerminalNode;
	xid(): XidContext;
	KW_START(): antlr.TerminalNode | null;
	KW_BEGIN(): antlr.TerminalNode | null;
	KW_JOIN(): antlr.TerminalNode | null;
	KW_RESUME(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaEndTransactionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XA(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	xid(): XidContext;
	KW_SUSPEND(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_MIGRATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaPrepareStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XA(): antlr.TerminalNode;
	KW_PREPARE(): antlr.TerminalNode;
	xid(): XidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaCommitWorkContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XA(): antlr.TerminalNode;
	KW_COMMIT(): antlr.TerminalNode;
	xid(): XidContext;
	KW_ONE(): antlr.TerminalNode | null;
	KW_PHASE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaRollbackWorkContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XA(): antlr.TerminalNode;
	KW_ROLLBACK(): antlr.TerminalNode;
	xid(): XidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XaRecoverWorkContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XA(): antlr.TerminalNode;
	KW_RECOVER(): antlr.TerminalNode;
	KW_CONVERT(): antlr.TerminalNode | null;
	xid(): XidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrepareStatementContext extends antlr.ParserRuleContext {
	_stmt_name?: UidContext;
	_query?: Token | null;
	_variable?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PREPARE(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	uid(): UidContext;
	STRING_LITERAL(): antlr.TerminalNode | null;
	LOCAL_ID(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExecuteStatementContext extends antlr.ParserRuleContext {
	_stmt_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXECUTE(): antlr.TerminalNode;
	uid(): UidContext;
	KW_USING(): antlr.TerminalNode | null;
	userVariables(): UserVariablesContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeallocatePrepareContext extends antlr.ParserRuleContext {
	_dropFormat?: Token | null;
	_stmt_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PREPARE(): antlr.TerminalNode;
	uid(): UidContext;
	KW_DEALLOCATE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoutineBodyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	blockStatement(): BlockStatementContext | null;
	sqlStatement(): SqlStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BlockStatementContext extends antlr.ParserRuleContext {
	_begin?: UidContext;
	_end?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BEGIN(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	COLON_SYMB(): antlr.TerminalNode | null;
	declareVariable(): DeclareVariableContext[];
	declareVariable(i: number): DeclareVariableContext | null;
	SEMI(): antlr.TerminalNode[];
	SEMI(i: number): antlr.TerminalNode | null;
	declareCondition(): DeclareConditionContext[];
	declareCondition(i: number): DeclareConditionContext | null;
	declareCursor(): DeclareCursorContext[];
	declareCursor(i: number): DeclareCursorContext | null;
	declareHandler(): DeclareHandlerContext[];
	declareHandler(i: number): DeclareHandlerContext | null;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseStatementContext extends antlr.ParserRuleContext {
	_case_value?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CASE(): antlr.TerminalNode[];
	KW_CASE(i: number): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode;
	expression(): ExpressionContext | null;
	caseAlternative(): CaseAlternativeContext[];
	caseAlternative(i: number): CaseAlternativeContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IfStatementContext extends antlr.ParserRuleContext {
	_procedureSqlStatement?: ProcedureSqlStatementContext;
	_thenStatements: ProcedureSqlStatementContext[];
	_elseStatements: ProcedureSqlStatementContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode[];
	KW_IF(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext;
	KW_THEN(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	elifAlternative(): ElifAlternativeContext[];
	elifAlternative(i: number): ElifAlternativeContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IterateStatementContext extends antlr.ParserRuleContext {
	_label?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ITERATE(): antlr.TerminalNode;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LeaveStatementContext extends antlr.ParserRuleContext {
	_label?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LEAVE(): antlr.TerminalNode;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoopStatementContext extends antlr.ParserRuleContext {
	_begin_label?: UidContext;
	_end_label?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOOP(): antlr.TerminalNode[];
	KW_LOOP(i: number): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode;
	COLON_SYMB(): antlr.TerminalNode | null;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RepeatStatementContext extends antlr.ParserRuleContext {
	_begin_label?: UidContext;
	_end_label?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPEAT(): antlr.TerminalNode[];
	KW_REPEAT(i: number): antlr.TerminalNode | null;
	KW_UNTIL(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_END(): antlr.TerminalNode;
	COLON_SYMB(): antlr.TerminalNode | null;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReturnStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RETURN(): antlr.TerminalNode;
	expression(): ExpressionContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WhileStatementContext extends antlr.ParserRuleContext {
	_begin_label?: UidContext;
	_end_label?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHILE(): antlr.TerminalNode[];
	KW_WHILE(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext;
	KW_DO(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	COLON_SYMB(): antlr.TerminalNode | null;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CursorStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CursorStatementContext): void;
}
export declare class CloseCursorContext extends CursorStatementContext {
	_cursor_name?: UidContext;
	constructor(ctx: CursorStatementContext);
	KW_CLOSE(): antlr.TerminalNode;
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OpenCursorContext extends CursorStatementContext {
	_cursor_name?: UidContext;
	constructor(ctx: CursorStatementContext);
	KW_OPEN(): antlr.TerminalNode;
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FetchCursorContext extends CursorStatementContext {
	_cursor_name?: UidContext;
	_var_names?: UidListContext;
	constructor(ctx: CursorStatementContext);
	KW_FETCH(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	uid(): UidContext;
	uidList(): UidListContext;
	KW_FROM(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareVariableContext extends antlr.ParserRuleContext {
	_var_names?: UidListContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DECLARE(): antlr.TerminalNode;
	dataType(): DataTypeContext;
	uidList(): UidListContext;
	KW_DEFAULT(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareConditionContext extends antlr.ParserRuleContext {
	_condition_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DECLARE(): antlr.TerminalNode;
	KW_CONDITION(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	uid(): UidContext;
	decimalLiteral(): DecimalLiteralContext | null;
	KW_SQLSTATE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareCursorContext extends antlr.ParserRuleContext {
	_condition_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DECLARE(): antlr.TerminalNode;
	KW_CURSOR(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DeclareHandlerContext extends antlr.ParserRuleContext {
	_handlerAction?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DECLARE(): antlr.TerminalNode;
	KW_HANDLER(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	handlerConditionValue(): HandlerConditionValueContext[];
	handlerConditionValue(i: number): HandlerConditionValueContext | null;
	routineBody(): RoutineBodyContext;
	KW_CONTINUE(): antlr.TerminalNode | null;
	KW_EXIT(): antlr.TerminalNode | null;
	KW_UNDO(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: HandlerConditionValueContext): void;
}
export declare class HandlerConditionWarningContext extends HandlerConditionValueContext {
	constructor(ctx: HandlerConditionValueContext);
	KW_SQLWARNING(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionCodeContext extends HandlerConditionValueContext {
	constructor(ctx: HandlerConditionValueContext);
	decimalLiteral(): DecimalLiteralContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionNotfoundContext extends HandlerConditionValueContext {
	constructor(ctx: HandlerConditionValueContext);
	KW_NOT(): antlr.TerminalNode;
	KW_FOUND(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionStateContext extends HandlerConditionValueContext {
	constructor(ctx: HandlerConditionValueContext);
	KW_SQLSTATE(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	KW_VALUE(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionExceptionContext extends HandlerConditionValueContext {
	constructor(ctx: HandlerConditionValueContext);
	KW_SQLEXCEPTION(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HandlerConditionNameContext extends HandlerConditionValueContext {
	_condition_name?: UidContext;
	constructor(ctx: HandlerConditionValueContext);
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ProcedureSqlStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	SEMI(): antlr.TerminalNode;
	compoundStatement(): CompoundStatementContext | null;
	sqlStatement(): SqlStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseAlternativeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	constant(): ConstantContext | null;
	expression(): ExpressionContext | null;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ElifAlternativeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ELSEIF(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_THEN(): antlr.TerminalNode;
	procedureSqlStatement(): ProcedureSqlStatementContext[];
	procedureSqlStatement(i: number): ProcedureSqlStatementContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterUserContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	ifExists(): IfExistsContext | null;
	userSpecification(): UserSpecificationContext[];
	userSpecification(i: number): UserSpecificationContext | null;
	alterUserAuthOption(): AlterUserAuthOptionContext[];
	alterUserAuthOption(i: number): AlterUserAuthOptionContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	roleOption(): RoleOptionContext | null;
	userOrRoleName(): UserOrRoleNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_REQUIRE(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	userPasswordOption(): UserPasswordOptionContext[];
	userPasswordOption(i: number): UserPasswordOptionContext | null;
	userLockOption(): UserLockOptionContext[];
	userLockOption(i: number): UserLockOptionContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	tlsOption(): TlsOptionContext[];
	tlsOption(i: number): TlsOptionContext | null;
	userResourceOption(): UserResourceOptionContext[];
	userResourceOption(i: number): UserResourceOptionContext | null;
	KW_AND(): antlr.TerminalNode[];
	KW_AND(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateUserContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	userName(): UserNameContext[];
	userName(i: number): UserNameContext | null;
	ifNotExists(): IfNotExistsContext | null;
	createUserAuthOption(): CreateUserAuthOptionContext[];
	createUserAuthOption(i: number): CreateUserAuthOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	roleOption(): RoleOptionContext | null;
	KW_REQUIRE(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	userPasswordOption(): UserPasswordOptionContext[];
	userPasswordOption(i: number): UserPasswordOptionContext | null;
	userLockOption(): UserLockOptionContext[];
	userLockOption(i: number): UserLockOptionContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	tlsOption(): TlsOptionContext[];
	tlsOption(i: number): TlsOptionContext | null;
	userResourceOption(): UserResourceOptionContext[];
	userResourceOption(i: number): UserResourceOptionContext | null;
	KW_AND(): antlr.TerminalNode[];
	KW_AND(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropUserContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	userName(): UserNameContext[];
	userName(i: number): UserNameContext | null;
	ifExists(): IfExistsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GrantStatementContext extends antlr.ParserRuleContext {
	_tlsNone?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode[];
	KW_GRANT(i: number): antlr.TerminalNode | null;
	privelegeClause(): PrivelegeClauseContext[];
	privelegeClause(i: number): PrivelegeClauseContext | null;
	KW_ON(): antlr.TerminalNode | null;
	privilegeLevel(): PrivilegeLevelContext | null;
	KW_TO(): antlr.TerminalNode;
	userOrRoleNames(): UserOrRoleNamesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	privilegeObjectType(): PrivilegeObjectTypeContext | null;
	KW_REQUIRE(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode[];
	KW_WITH(i: number): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	userName(): UserNameContext | null;
	userAuthOption(): UserAuthOptionContext[];
	userAuthOption(i: number): UserAuthOptionContext | null;
	tlsOption(): TlsOptionContext[];
	tlsOption(i: number): TlsOptionContext | null;
	KW_NONE(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode[];
	KW_OPTION(i: number): antlr.TerminalNode | null;
	userResourceOption(): UserResourceOptionContext[];
	userResourceOption(i: number): UserResourceOptionContext | null;
	KW_ROLE(): antlr.TerminalNode | null;
	roleOption(): RoleOptionContext | null;
	KW_AND(): antlr.TerminalNode[];
	KW_AND(i: number): antlr.TerminalNode | null;
	userOrRoleName(): UserOrRoleNameContext[];
	userOrRoleName(i: number): UserOrRoleNameContext | null;
	KW_PROXY(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RoleOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	userOrRoleNames(): UserOrRoleNamesContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GrantProxyContext extends antlr.ParserRuleContext {
	_fromFirst?: UserNameContext;
	_toFirst?: UserNameContext;
	_userName?: UserNameContext;
	_toOther: UserNameContext[];
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode[];
	KW_GRANT(i: number): antlr.TerminalNode | null;
	KW_PROXY(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	userName(): UserNameContext[];
	userName(i: number): UserNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterResourceGroupContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_RESOURCE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	groupName(): GroupNameContext;
	KW_VCPU(): antlr.TerminalNode | null;
	resourceGroupVcpuSpec(): ResourceGroupVcpuSpecContext | null;
	KW_THREAD_PRIORITY(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	KW_FORCE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateResourceGroupContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_RESOURCE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	groupNameCreate(): GroupNameCreateContext;
	KW_TYPE(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_VCPU(): antlr.TerminalNode | null;
	resourceGroupVcpuSpec(): ResourceGroupVcpuSpecContext | null;
	KW_THREAD_PRIORITY(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DropResourceGroupContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_RESOURCE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	groupName(): GroupNameContext;
	KW_FORCE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetResourceGroupContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_RESOURCE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	groupName(): GroupNameContext;
	KW_FOR(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResourceGroupVcpuSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	MINUS(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	resourceGroupVcpuSpec(): ResourceGroupVcpuSpecContext[];
	resourceGroupVcpuSpec(i: number): ResourceGroupVcpuSpecContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameUserContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RENAME(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	renameUserClause(): RenameUserClauseContext[];
	renameUserClause(i: number): RenameUserClauseContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RevokeStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: RevokeStatementContext): void;
}
export declare class DetailRevokeContext extends RevokeStatementContext {
	constructor(ctx: RevokeStatementContext);
	KW_REVOKE(): antlr.TerminalNode;
	privelegeClause(): PrivelegeClauseContext[];
	privelegeClause(i: number): PrivelegeClauseContext | null;
	KW_ON(): antlr.TerminalNode;
	privilegeLevel(): PrivilegeLevelContext;
	KW_FROM(): antlr.TerminalNode;
	userOrRoleNames(): UserOrRoleNamesContext;
	ifExists(): IfExistsContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	privilegeObjectType(): PrivilegeObjectTypeContext | null;
	ignoreUnknownUser(): IgnoreUnknownUserContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShortRevokeContext extends RevokeStatementContext {
	constructor(ctx: RevokeStatementContext);
	KW_REVOKE(): antlr.TerminalNode;
	KW_ALL(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	userOrRoleNames(): UserOrRoleNamesContext;
	ifExists(): IfExistsContext | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	ignoreUnknownUser(): IgnoreUnknownUserContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ProxyAndRoleRevokeContext extends RevokeStatementContext {
	constructor(ctx: RevokeStatementContext);
	KW_REVOKE(): antlr.TerminalNode;
	userOrRoleNames(): UserOrRoleNamesContext[];
	userOrRoleNames(i: number): UserOrRoleNamesContext | null;
	KW_FROM(): antlr.TerminalNode;
	ifExists(): IfExistsContext | null;
	KW_PROXY(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	ignoreUnknownUser(): IgnoreUnknownUserContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IgnoreUnknownUserContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IGNORE(): antlr.TerminalNode;
	KW_UNKNOWN(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeObjectTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetPasswordStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SetPasswordStatementContext): void;
}
export declare class V57Context extends SetPasswordStatementContext {
	constructor(ctx: SetPasswordStatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_PASSWORD(): antlr.TerminalNode;
	EQUAL_SYMBOL(): antlr.TerminalNode;
	passwordFunctionClause(): PasswordFunctionClauseContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	userName(): UserNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class V80Context extends SetPasswordStatementContext {
	constructor(ctx: SetPasswordStatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_PASSWORD(): antlr.TerminalNode[];
	KW_PASSWORD(i: number): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_RANDOM(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	userName(): UserNameContext | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_RETAIN(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserSpecificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	userName(): UserNameContext;
	userPasswordOption(): UserPasswordOptionContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AlterUserAuthOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	userName(): UserNameContext;
	KW_IDENTIFIED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	authOptionClause(): AuthOptionClauseContext | null;
	KW_RANDOM(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	authenticationRule(): AuthenticationRuleContext | null;
	KW_DISCARD(): antlr.TerminalNode | null;
	KW_OLD(): antlr.TerminalNode | null;
	registrationOption(): RegistrationOptionContext | null;
	factor(): FactorContext[];
	factor(i: number): FactorContext | null;
	KW_ADD(): antlr.TerminalNode[];
	KW_ADD(i: number): antlr.TerminalNode | null;
	KW_MODIFY(): antlr.TerminalNode[];
	KW_MODIFY(i: number): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode[];
	KW_DROP(i: number): antlr.TerminalNode | null;
	factorAuthOption(): FactorAuthOptionContext[];
	factorAuthOption(i: number): FactorAuthOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateUserAuthOptionContext extends antlr.ParserRuleContext {
	_authPlugin?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IDENTIFIED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	createUserAuthOption(): CreateUserAuthOptionContext | null;
	KW_RANDOM(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	createUserInitialAuthOption(): CreateUserInitialAuthOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateUserInitialAuthOptionContext extends antlr.ParserRuleContext {
	_authPlugin?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INITIAL(): antlr.TerminalNode;
	KW_AUTHENTICATION(): antlr.TerminalNode;
	KW_IDENTIFIED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_RANDOM(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserAuthOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: UserAuthOptionContext): void;
}
export declare class SimpleAuthOptionContext extends UserAuthOptionContext {
	constructor(ctx: UserAuthOptionContext);
	userName(): UserNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ModuleAuthOptionContext extends UserAuthOptionContext {
	constructor(ctx: UserAuthOptionContext);
	userName(): UserNameContext;
	KW_IDENTIFIED(): antlr.TerminalNode;
	KW_WITH(): antlr.TerminalNode;
	authenticationRule(): AuthenticationRuleContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RandomAuthOptionContext extends UserAuthOptionContext {
	constructor(ctx: UserAuthOptionContext);
	userName(): UserNameContext;
	KW_IDENTIFIED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	KW_RANDOM(): antlr.TerminalNode;
	KW_PASSWORD(): antlr.TerminalNode;
	authOptionClause(): AuthOptionClauseContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringAuthOptionContext extends UserAuthOptionContext {
	constructor(ctx: UserAuthOptionContext);
	userName(): UserNameContext;
	KW_IDENTIFIED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	authOptionClause(): AuthOptionClauseContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HashAuthOptionContext extends UserAuthOptionContext {
	_hashed?: Token | null;
	constructor(ctx: UserAuthOptionContext);
	userName(): UserNameContext;
	KW_IDENTIFIED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	KW_PASSWORD(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AuthOptionClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPLACE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_RETAIN(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AuthenticationRuleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: AuthenticationRuleContext): void;
}
export declare class PasswordModuleOptionContext extends AuthenticationRuleContext {
	_authPlugin?: UidContext;
	constructor(ctx: AuthenticationRuleContext);
	KW_USING(): antlr.TerminalNode;
	passwordFunctionClause(): PasswordFunctionClauseContext;
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ModuleContext extends AuthenticationRuleContext {
	_authPlugin?: UidContext;
	constructor(ctx: AuthenticationRuleContext);
	uid(): UidContext;
	authOptionClause(): AuthOptionClauseContext | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_RANDOM(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TlsOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SSL(): antlr.TerminalNode | null;
	KW_X509(): antlr.TerminalNode | null;
	KW_CIPHER(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_ISSUER(): antlr.TerminalNode | null;
	KW_SUBJECT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserResourceOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MAX_QUERIES_PER_HOUR(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext;
	KW_MAX_UPDATES_PER_HOUR(): antlr.TerminalNode | null;
	KW_MAX_CONNECTIONS_PER_HOUR(): antlr.TerminalNode | null;
	KW_MAX_USER_CONNECTIONS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserPasswordOptionContext extends antlr.ParserRuleContext {
	_expireType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_EXPIRE(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_NEVER(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_HISTORY(): antlr.TerminalNode | null;
	KW_REUSE(): antlr.TerminalNode | null;
	KW_REQUIRE(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_OPTIONAL(): antlr.TerminalNode | null;
	KW_FAILED_LOGIN_ATTEMPTS(): antlr.TerminalNode | null;
	KW_PASSWORD_LOCK_TIME(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserLockOptionContext extends antlr.ParserRuleContext {
	_lockType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ACCOUNT(): antlr.TerminalNode;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_UNLOCK(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FactorAuthOptionContext extends antlr.ParserRuleContext {
	_authPlugin?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IDENTIFIED(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_RANDOM(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RegistrationOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	factor(): FactorContext;
	KW_INITIATE(): antlr.TerminalNode | null;
	KW_REGISTRATION(): antlr.TerminalNode | null;
	KW_FINISH(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_CHALLENGE_RESPONSE(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_UNREGISTER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FactorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FACTOR(): antlr.TerminalNode;
	TWO_DECIMAL(): antlr.TerminalNode | null;
	THREE_DECIMAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivelegeClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	privilege(): PrivilegeContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	KW_FILE(): antlr.TerminalNode | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_PROCESS(): antlr.TerminalNode | null;
	KW_PROXY(): antlr.TerminalNode | null;
	KW_REFERENCES(): antlr.TerminalNode | null;
	KW_RELOAD(): antlr.TerminalNode | null;
	KW_REPLICATION(): antlr.TerminalNode | null;
	KW_CLIENT(): antlr.TerminalNode | null;
	KW_SLAVE(): antlr.TerminalNode | null;
	KW_SELECT(): antlr.TerminalNode | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_SHUTDOWN(): antlr.TerminalNode | null;
	KW_SUPER(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_USAGE(): antlr.TerminalNode | null;
	KW_APPLICATION_PASSWORD_ADMIN(): antlr.TerminalNode | null;
	KW_AUDIT_ABORT_EXEMPT(): antlr.TerminalNode | null;
	KW_AUDIT_ADMIN(): antlr.TerminalNode | null;
	KW_AUTHENTICATION_POLICY_ADMIN(): antlr.TerminalNode | null;
	KW_BACKUP_ADMIN(): antlr.TerminalNode | null;
	KW_BINLOG_ADMIN(): antlr.TerminalNode | null;
	KW_BINLOG_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
	KW_CLONE_ADMIN(): antlr.TerminalNode | null;
	KW_CONNECTION_ADMIN(): antlr.TerminalNode | null;
	KW_ENCRYPTION_KEY_ADMIN(): antlr.TerminalNode | null;
	KW_FIREWALL_ADMIN(): antlr.TerminalNode | null;
	KW_FIREWALL_EXEMPT(): antlr.TerminalNode | null;
	KW_FIREWALL_USER(): antlr.TerminalNode | null;
	KW_FLUSH_OPTIMIZER_COSTS(): antlr.TerminalNode | null;
	KW_FLUSH_STATUS(): antlr.TerminalNode | null;
	KW_FLUSH_TABLES(): antlr.TerminalNode | null;
	KW_FLUSH_USER_RESOURCES(): antlr.TerminalNode | null;
	KW_GROUP_REPLICATION_ADMIN(): antlr.TerminalNode | null;
	KW_INNODB_REDO_LOG_ARCHIVE(): antlr.TerminalNode | null;
	KW_INNODB_REDO_LOG_ENABLE(): antlr.TerminalNode | null;
	KW_NDB_STORED_USER(): antlr.TerminalNode | null;
	KW_PASSWORDLESS_USER_ADMIN(): antlr.TerminalNode | null;
	KW_PERSIST_RO_VARIABLES_ADMIN(): antlr.TerminalNode | null;
	KW_REPLICATION_APPLIER(): antlr.TerminalNode | null;
	KW_REPLICATION_SLAVE_ADMIN(): antlr.TerminalNode | null;
	KW_RESOURCE_GROUP_ADMIN(): antlr.TerminalNode | null;
	KW_RESOURCE_GROUP_USER(): antlr.TerminalNode | null;
	KW_ROLE_ADMIN(): antlr.TerminalNode | null;
	KW_SERVICE_CONNECTION_ADMIN(): antlr.TerminalNode | null;
	KW_SESSION_VARIABLES_ADMIN(): antlr.TerminalNode | null;
	KW_SET_USER_ID(): antlr.TerminalNode | null;
	KW_SKIP_QUERY_REWRITE(): antlr.TerminalNode | null;
	KW_SHOW_ROUTINE(): antlr.TerminalNode | null;
	KW_SYSTEM_USER(): antlr.TerminalNode | null;
	KW_SYSTEM_VARIABLES_ADMIN(): antlr.TerminalNode | null;
	KW_TABLE_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
	KW_TP_CONNECTION_ADMIN(): antlr.TerminalNode | null;
	KW_VERSION_TOKEN_ADMIN(): antlr.TerminalNode | null;
	KW_XA_RECOVER_ADMIN(): antlr.TerminalNode | null;
	KW_LOAD(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_S3(): antlr.TerminalNode | null;
	KW_INTO(): antlr.TerminalNode | null;
	KW_INVOKE(): antlr.TerminalNode | null;
	KW_LAMBDA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeLevelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PrivilegeLevelContext): void;
}
export declare class DefiniteSchemaPrivLevelContext extends PrivilegeLevelContext {
	constructor(ctx: PrivilegeLevelContext);
	uid(): UidContext;
	DOT(): antlr.TerminalNode;
	STAR(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefiniteFullTablePrivLevel2Context extends PrivilegeLevelContext {
	constructor(ctx: PrivilegeLevelContext);
	uid(): UidContext;
	dottedId(): DottedIdContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefiniteFullTablePrivLevelContext extends PrivilegeLevelContext {
	constructor(ctx: PrivilegeLevelContext);
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	DOT(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GlobalPrivLevelContext extends PrivilegeLevelContext {
	constructor(ctx: PrivilegeLevelContext);
	STAR(): antlr.TerminalNode[];
	STAR(i: number): antlr.TerminalNode | null;
	DOT(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefiniteTablePrivLevelContext extends PrivilegeLevelContext {
	constructor(ctx: PrivilegeLevelContext);
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentSchemaPriviLevelContext extends PrivilegeLevelContext {
	constructor(ctx: PrivilegeLevelContext);
	STAR(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RenameUserClauseContext extends antlr.ParserRuleContext {
	_fromFirst?: UserNameContext;
	_toFirst?: UserNameContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TO(): antlr.TerminalNode;
	userName(): UserNameContext[];
	userName(i: number): UserNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzeTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ANALYZE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNames(): TableNamesContext | null;
	tableActionOption(): TableActionOptionContext | null;
	tableName(): TableNameContext | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_HISTOGRAM(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	columnNames(): ColumnNamesContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	KW_BUCKETS(): antlr.TerminalNode | null;
	columnName(): ColumnNameContext | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHECK(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	checkTableOption(): CheckTableOptionContext[];
	checkTableOption(i: number): CheckTableOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChecksumTableContext extends antlr.ParserRuleContext {
	_actionOption?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHECKSUM(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	KW_QUICK(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OptimizeTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OPTIMIZE(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	tableActionOption(): TableActionOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RepairTableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPAIR(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableNames(): TableNamesContext;
	tableActionOption(): TableActionOptionContext | null;
	KW_QUICK(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_USE_FRM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableActionOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NO_WRITE_TO_BINLOG(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CheckTableOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode | null;
	KW_UPGRADE(): antlr.TerminalNode | null;
	KW_QUICK(): antlr.TerminalNode | null;
	KW_FAST(): antlr.TerminalNode | null;
	KW_MEDIUM(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_CHANGED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CreateFunctionContext extends antlr.ParserRuleContext {
	_returnType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionNameCreate(): FunctionNameCreateContext;
	KW_RETURNS(): antlr.TerminalNode;
	KW_SONAME(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	KW_STRING(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InstallComponentContext extends antlr.ParserRuleContext {
	_component_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSTALL(): antlr.TerminalNode;
	KW_COMPONENT(): antlr.TerminalNode;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	variableExpr(): VariableExprContext[];
	variableExpr(i: number): VariableExprContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class VariableExprContext extends antlr.ParserRuleContext {
	_system_var_name?: FullIdContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL_SYMBOL(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_GLOBAL(): antlr.TerminalNode | null;
	GLOBAL_ID(): antlr.TerminalNode | null;
	KW_PERSIST(): antlr.TerminalNode | null;
	PERSIST_ID(): antlr.TerminalNode | null;
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UninstallComponentContext extends antlr.ParserRuleContext {
	_component_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNINSTALL(): antlr.TerminalNode;
	KW_COMPONENT(): antlr.TerminalNode;
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InstallPluginContext extends antlr.ParserRuleContext {
	_pluginName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSTALL(): antlr.TerminalNode;
	KW_PLUGIN(): antlr.TerminalNode;
	KW_SONAME(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UninstallPluginContext extends antlr.ParserRuleContext {
	_pluginName?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNINSTALL(): antlr.TerminalNode;
	KW_PLUGIN(): antlr.TerminalNode;
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CloneStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLONE(): antlr.TerminalNode;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DIRECTORY(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	KW_INSTANCE(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	userHostPort(): UserHostPortContext | null;
	KW_IDENTIFIED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_REQUIRE(): antlr.TerminalNode | null;
	KW_SSL(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SetStatementContext): void;
}
export declare class SetTransactionContext extends SetStatementContext {
	constructor(ctx: SetStatementContext);
	setTransactionStatement(): SetTransactionStatementContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetCharsetContext extends SetStatementContext {
	constructor(ctx: SetStatementContext);
	KW_SET(): antlr.TerminalNode;
	charSet(): CharSetContext;
	charsetName(): CharsetNameContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetNamesContext extends SetStatementContext {
	constructor(ctx: SetStatementContext);
	KW_SET(): antlr.TerminalNode;
	KW_NAMES(): antlr.TerminalNode;
	charsetName(): CharsetNameContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	collationName(): CollationNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetPasswordContext extends SetStatementContext {
	constructor(ctx: SetStatementContext);
	setPasswordStatement(): SetPasswordStatementContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetAutocommitContext extends SetStatementContext {
	constructor(ctx: SetStatementContext);
	setAutocommitStatement(): SetAutocommitStatementContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetNewValueInsideTriggerContext extends SetStatementContext {
	_system_var_name?: FullIdContext;
	constructor(ctx: SetStatementContext);
	KW_SET(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	fullId(): FullIdContext[];
	fullId(i: number): FullIdContext | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	VAR_ASSIGN(): antlr.TerminalNode[];
	VAR_ASSIGN(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SetVariableContext extends SetStatementContext {
	constructor(ctx: SetStatementContext);
	KW_SET(): antlr.TerminalNode;
	variableClause(): VariableClauseContext[];
	variableClause(i: number): VariableClauseContext | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	VAR_ASSIGN(): antlr.TerminalNode[];
	VAR_ASSIGN(i: number): antlr.TerminalNode | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ShowStatementContext): void;
}
export declare class ShowOpenTablesContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_OPEN(): antlr.TerminalNode;
	KW_TABLES(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext | null;
	showFilter(): ShowFilterContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowGlobalInfoContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	showGlobalInfoClause(): ShowGlobalInfoClauseContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateFullIdObjectContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	fullId(): FullIdContext;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateUserContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	userName(): UserNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowErrorsContext extends ShowStatementContext {
	_errorFormat?: Token | null;
	_offset?: DecimalLiteralContext;
	_rowCount?: DecimalLiteralContext;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_ERRORS(): antlr.TerminalNode | null;
	KW_WARNINGS(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	COMMA(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateFunctionContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowPercedureCodeContext extends ShowStatementContext {
	_proc_name?: FullIdContext;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_PROCEDURE(): antlr.TerminalNode;
	KW_CODE(): antlr.TerminalNode;
	fullId(): FullIdContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCountErrorsContext extends ShowStatementContext {
	_errorFormat?: Token | null;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_COUNT(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	STAR(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	KW_ERRORS(): antlr.TerminalNode | null;
	KW_WARNINGS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowFunctionCodeContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode;
	KW_CODE(): antlr.TerminalNode;
	functionName(): FunctionNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowObjectFilterContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	showCommonEntity(): ShowCommonEntityContext;
	showFilter(): ShowFilterContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowReplicasContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_REPLICAS(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateDbContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	ifNotExists(): IfNotExistsContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowEngineContext extends ShowStatementContext {
	_engineOption?: Token | null;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_ENGINE(): antlr.TerminalNode;
	engineName(): EngineNameContext;
	KW_STATUS(): antlr.TerminalNode | null;
	KW_MUTEX(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowSchemaFilterContext extends ShowStatementContext {
	_schemaFormat?: Token | null;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	showSchemaEntity(): ShowSchemaEntityContext;
	databaseName(): DatabaseNameContext | null;
	showFilter(): ShowFilterContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowIndexesContext extends ShowStatementContext {
	_indexFormat?: Token | null;
	_tableFormat?: Token | null;
	_schemaFormat?: Token | null;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_KEYS(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode[];
	KW_FROM(i: number): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode[];
	KW_IN(i: number): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	databaseName(): DatabaseNameContext | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowLogEventsContext extends ShowStatementContext {
	_logFormat?: Token | null;
	_filename?: Token | null;
	_fromPosition?: DecimalLiteralContext;
	_offset?: DecimalLiteralContext;
	_rowCount?: DecimalLiteralContext;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_EVENTS(): antlr.TerminalNode;
	KW_BINLOG(): antlr.TerminalNode | null;
	KW_RELAYLOG(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	channelOption(): ChannelOptionContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	COMMA(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowMasterLogsContext extends ShowStatementContext {
	_logFormat?: Token | null;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_LOGS(): antlr.TerminalNode;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_MASTER(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowGrantsContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_GRANTS(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode | null;
	userOrRoleName(): UserOrRoleNameContext | null;
	KW_USING(): antlr.TerminalNode | null;
	userOrRoleNames(): UserOrRoleNamesContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowSlaveStatusContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_STATUS(): antlr.TerminalNode;
	KW_REPLICA(): antlr.TerminalNode | null;
	KW_SLAVE(): antlr.TerminalNode | null;
	channelOption(): ChannelOptionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateTableContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowProfileContext extends ShowStatementContext {
	_queryCount?: DecimalLiteralContext;
	_rowCount?: DecimalLiteralContext;
	_offset?: DecimalLiteralContext;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_PROFILE(): antlr.TerminalNode;
	showProfileType(): ShowProfileTypeContext[];
	showProfileType(i: number): ShowProfileTypeContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowColumnsContext extends ShowStatementContext {
	_columnsFormat?: Token | null;
	_tableFormat?: Token | null;
	_schemaFormat?: Token | null;
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	tableName(): TableNameContext;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode[];
	KW_FROM(i: number): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode[];
	KW_IN(i: number): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	databaseName(): DatabaseNameContext | null;
	showFilter(): ShowFilterContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCreateViewContext extends ShowStatementContext {
	constructor(ctx: ShowStatementContext);
	KW_SHOW(): antlr.TerminalNode;
	KW_CREATE(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	viewName(): ViewNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class VariableClauseContext extends antlr.ParserRuleContext {
	_target?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LOCAL_ID(): antlr.TerminalNode | null;
	GLOBAL_ID(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_PERSIST(): antlr.TerminalNode | null;
	KW_PERSIST_ONLY(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	AT_SIGN(): antlr.TerminalNode[];
	AT_SIGN(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowCommonEntityContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_CHARSET(): antlr.TerminalNode | null;
	KW_COLLATION(): antlr.TerminalNode | null;
	KW_DATABASES(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	KW_STATUS(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	KW_VARIABLES(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowFilterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowGlobalInfoClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ENGINES(): antlr.TerminalNode | null;
	KW_STORAGE(): antlr.TerminalNode | null;
	KW_MASTER(): antlr.TerminalNode | null;
	KW_STATUS(): antlr.TerminalNode | null;
	KW_PLUGINS(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	KW_PROCESSLIST(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_PROFILES(): antlr.TerminalNode | null;
	KW_SLAVE(): antlr.TerminalNode | null;
	KW_HOSTS(): antlr.TerminalNode | null;
	KW_AUTHORS(): antlr.TerminalNode | null;
	KW_CONTRIBUTORS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowSchemaEntityContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EVENTS(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_STATUS(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_TRIGGERS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShowProfileTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_BLOCK(): antlr.TerminalNode | null;
	KW_IO(): antlr.TerminalNode | null;
	KW_CONTEXT(): antlr.TerminalNode | null;
	KW_SWITCHES(): antlr.TerminalNode | null;
	KW_CPU(): antlr.TerminalNode | null;
	KW_IPC(): antlr.TerminalNode | null;
	KW_MEMORY(): antlr.TerminalNode | null;
	KW_PAGE(): antlr.TerminalNode | null;
	KW_FAULTS(): antlr.TerminalNode | null;
	KW_SOURCE(): antlr.TerminalNode | null;
	KW_SWAPS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BinlogStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BINLOG(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CacheIndexStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CACHE(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext;
	tableIndex(): TableIndexContext[];
	tableIndex(i: number): TableIndexContext | null;
	tableName(): TableNameContext | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FlushStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FLUSH(): antlr.TerminalNode;
	flushOption(): FlushOptionContext[];
	flushOption(i: number): FlushOptionContext | null;
	tableActionOption(): TableActionOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class KillStatementContext extends antlr.ParserRuleContext {
	_connectionFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_KILL(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_CONNECTION(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadIndexIntoCacheContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOAD(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	KW_CACHE(): antlr.TerminalNode;
	loadedTableIndexes(): LoadedTableIndexesContext[];
	loadedTableIndexes(i: number): LoadedTableIndexesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResetStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESET(): antlr.TerminalNode;
	resetOption(): ResetOptionContext[];
	resetOption(i: number): ResetOptionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResetOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MASTER(): antlr.TerminalNode | null;
	KW_REPLICA(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_SLAVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResetPersistContext extends antlr.ParserRuleContext {
	_system_var_name?: UidContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESET(): antlr.TerminalNode;
	KW_PERSIST(): antlr.TerminalNode;
	uid(): UidContext | null;
	ifExists(): IfExistsContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResetAllChannelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESET(): antlr.TerminalNode;
	KW_REPLICA(): antlr.TerminalNode | null;
	KW_SLAVE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	channelOption(): ChannelOptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ReStartStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESTART(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ShutdownStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHUTDOWN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableIndexContext extends antlr.ParserRuleContext {
	_indexFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	indexNames(): IndexNamesContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FlushOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: FlushOptionContext): void;
}
export declare class TableFlushOptionContext extends FlushOptionContext {
	constructor(ctx: FlushOptionContext);
	KW_TABLE(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	tableNames(): TableNamesContext | null;
	flushTableOption(): FlushTableOptionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ChannelFlushOptionContext extends FlushOptionContext {
	constructor(ctx: FlushOptionContext);
	KW_RELAY(): antlr.TerminalNode;
	KW_LOGS(): antlr.TerminalNode;
	channelOption(): ChannelOptionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleFlushOptionContext extends FlushOptionContext {
	constructor(ctx: FlushOptionContext);
	KW_DES_KEY_FILE(): antlr.TerminalNode | null;
	KW_HOSTS(): antlr.TerminalNode | null;
	KW_LOGS(): antlr.TerminalNode | null;
	KW_OPTIMIZER_COSTS(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_STATUS(): antlr.TerminalNode | null;
	KW_USER_RESOURCES(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_ENGINE(): antlr.TerminalNode | null;
	KW_ERROR(): antlr.TerminalNode | null;
	KW_GENERAL(): antlr.TerminalNode | null;
	KW_RELAY(): antlr.TerminalNode | null;
	KW_SLOW(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FlushTableOptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_EXPORT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LoadedTableIndexesContext extends antlr.ParserRuleContext {
	_indexFormat?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext;
	KW_PARTITION(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	indexNames(): IndexNamesContext | null;
	KW_IGNORE(): antlr.TerminalNode | null;
	KW_LEAVES(): antlr.TerminalNode | null;
	partitionNames(): PartitionNamesContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleDescribeStatementContext extends antlr.ParserRuleContext {
	_command?: Token | null;
	_column?: ColumnNameContext;
	_pattern?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	columnName(): ColumnNameContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullDescribeStatementContext extends antlr.ParserRuleContext {
	_command?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	describeObjectClause(): DescribeObjectClauseContext;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	KW_TRADITIONAL(): antlr.TerminalNode | null;
	KW_JSON(): antlr.TerminalNode | null;
	KW_TREE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzeDescribeStatementContext extends antlr.ParserRuleContext {
	_command?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ANALYZE(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_DESCRIBE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	KW_TREE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HelpStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HELP(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UseStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USE(): antlr.TerminalNode;
	databaseName(): DatabaseNameContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SignalStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SIGNAL(): antlr.TerminalNode;
	ID(): antlr.TerminalNode | null;
	REVERSE_QUOTE_ID(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	signalConditionInformation(): SignalConditionInformationContext[];
	signalConditionInformation(i: number): SignalConditionInformationContext | null;
	KW_SQLSTATE(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ResignalStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESIGNAL(): antlr.TerminalNode;
	ID(): antlr.TerminalNode | null;
	REVERSE_QUOTE_ID(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	signalConditionInformation(): SignalConditionInformationContext[];
	signalConditionInformation(i: number): SignalConditionInformationContext | null;
	KW_SQLSTATE(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SignalConditionInformationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL_SYMBOL(): antlr.TerminalNode;
	KW_CLASS_ORIGIN(): antlr.TerminalNode | null;
	KW_SUBCLASS_ORIGIN(): antlr.TerminalNode | null;
	KW_MESSAGE_TEXT(): antlr.TerminalNode | null;
	KW_MYSQL_ERRNO(): antlr.TerminalNode | null;
	KW_CONSTRAINT_CATALOG(): antlr.TerminalNode | null;
	KW_CONSTRAINT_SCHEMA(): antlr.TerminalNode | null;
	KW_CONSTRAINT_NAME(): antlr.TerminalNode | null;
	KW_CATALOG_NAME(): antlr.TerminalNode | null;
	KW_SCHEMA_NAME(): antlr.TerminalNode | null;
	KW_TABLE_NAME(): antlr.TerminalNode | null;
	KW_COLUMN_NAME(): antlr.TerminalNode | null;
	KW_CURSOR_NAME(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	DECIMAL_LITERAL(): antlr.TerminalNode | null;
	mysqlVariable(): MysqlVariableContext | null;
	simpleId(): SimpleIdContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WithStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	commonTableExpressions(): CommonTableExpressionsContext[];
	commonTableExpressions(i: number): CommonTableExpressionsContext | null;
	KW_RECURSIVE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode;
	tableName(): TableNameContext;
	orderByClause(): OrderByClauseContext | null;
	limitClause(): LimitClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DiagnosticsStatementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GET(): antlr.TerminalNode;
	KW_DIAGNOSTICS(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_STACKED(): antlr.TerminalNode | null;
	variableClause(): VariableClauseContext[];
	variableClause(i: number): VariableClauseContext | null;
	EQUAL_SYMBOL(): antlr.TerminalNode[];
	EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
	KW_CONDITION(): antlr.TerminalNode | null;
	diagnosticsConditionInformationName(): DiagnosticsConditionInformationNameContext[];
	diagnosticsConditionInformationName(
		i: number
	): DiagnosticsConditionInformationNameContext | null;
	KW_NUMBER(): antlr.TerminalNode[];
	KW_NUMBER(i: number): antlr.TerminalNode | null;
	KW_ROW_COUNT(): antlr.TerminalNode[];
	KW_ROW_COUNT(i: number): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DiagnosticsConditionInformationNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLASS_ORIGIN(): antlr.TerminalNode | null;
	KW_SUBCLASS_ORIGIN(): antlr.TerminalNode | null;
	KW_RETURNED_SQLSTATE(): antlr.TerminalNode | null;
	KW_MESSAGE_TEXT(): antlr.TerminalNode | null;
	KW_MYSQL_ERRNO(): antlr.TerminalNode | null;
	KW_CONSTRAINT_CATALOG(): antlr.TerminalNode | null;
	KW_CONSTRAINT_SCHEMA(): antlr.TerminalNode | null;
	KW_CONSTRAINT_NAME(): antlr.TerminalNode | null;
	KW_CATALOG_NAME(): antlr.TerminalNode | null;
	KW_SCHEMA_NAME(): antlr.TerminalNode | null;
	KW_TABLE_NAME(): antlr.TerminalNode | null;
	KW_COLUMN_NAME(): antlr.TerminalNode | null;
	KW_CURSOR_NAME(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DescribeObjectClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: DescribeObjectClauseContext): void;
}
export declare class DescribeStatementsContext extends DescribeObjectClauseContext {
	constructor(ctx: DescribeObjectClauseContext);
	selectStatement(): SelectStatementContext | null;
	deleteStatement(): DeleteStatementContext | null;
	insertStatement(): InsertStatementContext | null;
	replaceStatement(): ReplaceStatementContext | null;
	updateStatement(): UpdateStatementContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DescribeConnectionContext extends DescribeObjectClauseContext {
	_connection_id?: UidContext;
	constructor(ctx: DescribeObjectClauseContext);
	KW_FOR(): antlr.TerminalNode;
	KW_CONNECTION(): antlr.TerminalNode;
	uid(): UidContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DatabaseNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DatabaseNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ViewNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ViewNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	indexName(): IndexNameContext[];
	indexName(i: number): IndexNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GroupNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GroupNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableName(): TableNameContext[];
	tableName(i: number): TableNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TableNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fullId(): FullIdContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserOrRoleNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	userOrRoleName(): UserOrRoleNameContext[];
	userOrRoleName(i: number): UserOrRoleNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserOrRoleNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	userName(): UserNameContext | null;
	uid(): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext | null;
	dottedId(): DottedIdContext[];
	dottedId(i: number): DottedIdContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnName(): ColumnNameContext[];
	columnName(i: number): ColumnNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext | null;
	dottedId(): DottedIdContext[];
	dottedId(i: number): DottedIdContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TablespaceNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TablespaceNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionNameCreateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	partitionName(): PartitionNameContext[];
	partitionName(i: number): PartitionNameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexColumnNameContext extends antlr.ParserRuleContext {
	_sortType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext | null;
	expression(): ExpressionContext | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserHostPortContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	userAtHost(): UserAtHostContext;
	COLON_SYMB(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserAtHostContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	simpleUserName(): SimpleUserNameContext;
	HOST_IP_ADDRESS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleUserNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode | null;
	ID(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	keywordsCanBeId(): KeywordsCanBeIdContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HostNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LOCAL_ID(): antlr.TerminalNode | null;
	HOST_IP_ADDRESS(): antlr.TerminalNode | null;
	AT_SIGN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	simpleUserName(): SimpleUserNameContext | null;
	hostName(): HostNameContext | null;
	currentUserExpression(): CurrentUserExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MysqlVariableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LOCAL_ID(): antlr.TerminalNode | null;
	GLOBAL_ID(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharsetNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BINARY(): antlr.TerminalNode | null;
	charsetNameBase(): CharsetNameBaseContext | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	CHARSET_REVERSE_QOUTE_STRING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollationNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EngineNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	engineNameBase(): EngineNameBaseContext | null;
	ID(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class EngineNameBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ARCHIVE(): antlr.TerminalNode | null;
	KW_BLACKHOLE(): antlr.TerminalNode | null;
	KW_CONNECT(): antlr.TerminalNode | null;
	KW_CSV(): antlr.TerminalNode | null;
	KW_FEDERATED(): antlr.TerminalNode | null;
	KW_INNODB(): antlr.TerminalNode | null;
	KW_MEMORY(): antlr.TerminalNode | null;
	KW_MRG_MYISAM(): antlr.TerminalNode | null;
	KW_MYISAM(): antlr.TerminalNode | null;
	KW_NDB(): antlr.TerminalNode | null;
	KW_NDBCLUSTER(): antlr.TerminalNode | null;
	KW_PERFORMANCE_SCHEMA(): antlr.TerminalNode | null;
	KW_TOKUDB(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UuidSetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	MINUS(): antlr.TerminalNode[];
	MINUS(i: number): antlr.TerminalNode | null;
	COLON_SYMB(): antlr.TerminalNode[];
	COLON_SYMB(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XidContext extends antlr.ParserRuleContext {
	_globalTableUid?: XuidStringIdContext;
	_qualifier?: XuidStringIdContext;
	_idFormat?: DecimalLiteralContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	xuidStringId(): XuidStringIdContext[];
	xuidStringId(i: number): XuidStringIdContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class XuidStringIdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode | null;
	BIT_STRING(): antlr.TerminalNode | null;
	HEXADECIMAL_LITERAL(): antlr.TerminalNode[];
	HEXADECIMAL_LITERAL(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FullIdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	dottedId(): DottedIdContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UidListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext[];
	uid(i: number): UidContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UidContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	simpleId(): SimpleIdContext | null;
	CHARSET_REVERSE_QOUTE_STRING(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleIdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ID(): antlr.TerminalNode | null;
	charsetNameBase(): CharsetNameBaseContext | null;
	transactionLevelBase(): TransactionLevelBaseContext | null;
	engineNameBase(): EngineNameBaseContext | null;
	privilegesBase(): PrivilegesBaseContext | null;
	intervalTypeBase(): IntervalTypeBaseContext | null;
	dataTypeBase(): DataTypeBaseContext | null;
	keywordsCanBeId(): KeywordsCanBeIdContext | null;
	scalarFunctionName(): ScalarFunctionNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DottedIdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DOT(): antlr.TerminalNode;
	ID(): antlr.TerminalNode | null;
	uid(): UidContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DecimalLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DECIMAL_LITERAL(): antlr.TerminalNode | null;
	ZERO_DECIMAL(): antlr.TerminalNode | null;
	ONE_DECIMAL(): antlr.TerminalNode | null;
	TWO_DECIMAL(): antlr.TerminalNode | null;
	THREE_DECIMAL(): antlr.TerminalNode | null;
	REAL_LITERAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FileSizeLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	FILESIZE_LITERAL(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	START_NATIONAL_STRING_LITERAL(): antlr.TerminalNode | null;
	STRING_CHARSET_NAME(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	collationName(): CollationNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class HexadecimalLiteralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	HEXADECIMAL_LITERAL(): antlr.TerminalNode;
	STRING_CHARSET_NAME(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NullNotnullContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	NULL_SPEC_LITERAL(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstantContext extends antlr.ParserRuleContext {
	_nullLiteral?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	stringLiteral(): StringLiteralContext | null;
	decimalLiteral(): DecimalLiteralContext | null;
	MINUS(): antlr.TerminalNode | null;
	hexadecimalLiteral(): HexadecimalLiteralContext | null;
	booleanLiteral(): BooleanLiteralContext | null;
	REAL_LITERAL(): antlr.TerminalNode | null;
	BIT_STRING(): antlr.TerminalNode | null;
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	NULL_SPEC_LITERAL(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: DataTypeContext): void;
}
export declare class SpatialDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	KW_GEOMETRYCOLLECTION(): antlr.TerminalNode | null;
	KW_GEOMCOLLECTION(): antlr.TerminalNode | null;
	KW_LINESTRING(): antlr.TerminalNode | null;
	KW_MULTILINESTRING(): antlr.TerminalNode | null;
	KW_MULTIPOINT(): antlr.TerminalNode | null;
	KW_MULTIPOLYGON(): antlr.TerminalNode | null;
	KW_POINT(): antlr.TerminalNode | null;
	KW_POLYGON(): antlr.TerminalNode | null;
	KW_JSON(): antlr.TerminalNode | null;
	KW_GEOMETRY(): antlr.TerminalNode | null;
	KW_SRID(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LongVarbinaryDataTypeContext extends DataTypeContext {
	constructor(ctx: DataTypeContext);
	KW_LONG(): antlr.TerminalNode;
	KW_VARBINARY(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollectionDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	collectionOptions(): CollectionOptionsContext;
	KW_ENUM(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	charSet(): CharSetContext | null;
	charsetName(): CharsetNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NationalVaryingStringDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	KW_NATIONAL(): antlr.TerminalNode;
	KW_VARYING(): antlr.TerminalNode;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	lengthOneDimension(): LengthOneDimensionContext | null;
	KW_BINARY(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DimensionDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	KW_TINYINT(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_MEDIUMINT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_MIDDLEINT(): antlr.TerminalNode | null;
	KW_INT1(): antlr.TerminalNode | null;
	KW_INT2(): antlr.TerminalNode | null;
	KW_INT3(): antlr.TerminalNode | null;
	KW_INT4(): antlr.TerminalNode | null;
	KW_INT8(): antlr.TerminalNode | null;
	lengthOneDimension(): LengthOneDimensionContext | null;
	KW_SIGNED(): antlr.TerminalNode[];
	KW_SIGNED(i: number): antlr.TerminalNode | null;
	KW_UNSIGNED(): antlr.TerminalNode[];
	KW_UNSIGNED(i: number): antlr.TerminalNode | null;
	KW_ZEROFILL(): antlr.TerminalNode[];
	KW_ZEROFILL(i: number): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	lengthTwoDimension(): LengthTwoDimensionContext | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_PRECISION(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_DEC(): antlr.TerminalNode | null;
	KW_FIXED(): antlr.TerminalNode | null;
	KW_NUMERIC(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_FLOAT4(): antlr.TerminalNode | null;
	KW_FLOAT8(): antlr.TerminalNode | null;
	lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null;
	KW_BIT(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_DATETIME(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_VARBINARY(): antlr.TerminalNode | null;
	KW_BLOB(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class StringDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	KW_CHAR(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_TINYTEXT(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_MEDIUMTEXT(): antlr.TerminalNode | null;
	KW_LONGTEXT(): antlr.TerminalNode | null;
	KW_NCHAR(): antlr.TerminalNode | null;
	KW_NVARCHAR(): antlr.TerminalNode | null;
	KW_LONG(): antlr.TerminalNode | null;
	KW_VARYING(): antlr.TerminalNode | null;
	lengthOneDimension(): LengthOneDimensionContext | null;
	KW_BINARY(): antlr.TerminalNode[];
	KW_BINARY(i: number): antlr.TerminalNode | null;
	charSet(): CharSetContext | null;
	charsetName(): CharsetNameContext | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	collationName(): CollationNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LongVarcharDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	KW_LONG(): antlr.TerminalNode;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	charSet(): CharSetContext | null;
	charsetName(): CharsetNameContext | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	collationName(): CollationNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NationalStringDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	KW_NATIONAL(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	lengthOneDimension(): LengthOneDimensionContext | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_NCHAR(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleDataTypeContext extends DataTypeContext {
	_typeName?: Token | null;
	constructor(ctx: DataTypeContext);
	KW_DATE(): antlr.TerminalNode | null;
	KW_TINYBLOB(): antlr.TerminalNode | null;
	KW_MEDIUMBLOB(): antlr.TerminalNode | null;
	KW_LONGBLOB(): antlr.TerminalNode | null;
	KW_BOOL(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_SERIAL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollectionOptionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConvertedDataTypeContext extends antlr.ParserRuleContext {
	_typeName?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHAR(): antlr.TerminalNode | null;
	KW_SIGNED(): antlr.TerminalNode | null;
	KW_UNSIGNED(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_NCHAR(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DATETIME(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_JSON(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_DEC(): antlr.TerminalNode | null;
	lengthOneDimension(): LengthOneDimensionContext | null;
	charSet(): CharSetContext | null;
	charsetName(): CharsetNameContext | null;
	lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LengthOneDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	COMMA(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IndexColumnNamesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	indexColumnName(): IndexColumnNameContext[];
	indexColumnName(i: number): IndexColumnNameContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ValuesOrValueListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expressionsWithDefaults(): ExpressionsWithDefaultsContext[];
	expressionsWithDefaults(i: number): ExpressionsWithDefaultsContext | null;
	KW_VALUES(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionsWithDefaultsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	expressionOrDefault(): ExpressionOrDefaultContext[];
	expressionOrDefault(i: number): ExpressionOrDefaultContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionOrDefaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expression(): ExpressionContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstantsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constant(): ConstantContext[];
	constant(i: number): ConstantContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleStringsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STRING_LITERAL(): antlr.TerminalNode[];
	STRING_LITERAL(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UserVariablesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LOCAL_ID(): antlr.TerminalNode[];
	LOCAL_ID(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DefaultValueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULL_LITERAL(): antlr.TerminalNode | null;
	KW_CAST(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	KW_AS(): antlr.TerminalNode | null;
	convertedDataType(): ConvertedDataTypeContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	constant(): ConstantContext | null;
	unaryOperator(): UnaryOperatorContext | null;
	currentTimestamp(): CurrentTimestampContext[];
	currentTimestamp(i: number): CurrentTimestampContext | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	fullId(): FullIdContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentTimestampContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOW(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IfExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IfNotExistsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OrReplaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OR(): antlr.TerminalNode;
	KW_REPLACE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: FunctionCallContext): void;
}
export declare class SpecificFunctionCallContext extends FunctionCallContext {
	constructor(ctx: FunctionCallContext);
	specificFunction(): SpecificFunctionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PasswordFunctionCallContext extends FunctionCallContext {
	constructor(ctx: FunctionCallContext);
	passwordFunctionClause(): PasswordFunctionClauseContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UdfFunctionCallContext extends FunctionCallContext {
	constructor(ctx: FunctionCallContext);
	functionName(): FunctionNameContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	functionArgs(): FunctionArgsContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NonAggregateFunctionCallContext extends FunctionCallContext {
	constructor(ctx: FunctionCallContext);
	nonAggregateWindowedFunction(): NonAggregateWindowedFunctionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AggregateFunctionCallContext extends FunctionCallContext {
	constructor(ctx: FunctionCallContext);
	aggregateWindowedFunction(): AggregateWindowedFunctionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ScalarFunctionCallContext extends FunctionCallContext {
	constructor(ctx: FunctionCallContext);
	scalarFunctionName(): ScalarFunctionNameContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	functionArgs(): FunctionArgsContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SpecificFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SpecificFunctionContext): void;
}
export declare class PositionFunctionCallContext extends SpecificFunctionContext {
	_positionString?: StringLiteralContext;
	_positionExpression?: ExpressionContext;
	_inString?: StringLiteralContext;
	_inExpression?: ExpressionContext;
	constructor(ctx: SpecificFunctionContext);
	KW_POSITION(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	KW_IN(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TrimFunctionCallContext extends SpecificFunctionContext {
	_positioinForm?: Token | null;
	_sourceString?: StringLiteralContext;
	_sourceExpression?: ExpressionContext;
	_fromString?: StringLiteralContext;
	_fromExpression?: ExpressionContext;
	constructor(ctx: SpecificFunctionContext);
	KW_TRIM(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	KW_BOTH(): antlr.TerminalNode | null;
	KW_LEADING(): antlr.TerminalNode | null;
	KW_TRAILING(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext[];
	stringLiteral(i: number): StringLiteralContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonValueFunctionCallContext extends SpecificFunctionContext {
	constructor(ctx: SpecificFunctionContext);
	KW_JSON_VALUE(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	KW_RETURNING(): antlr.TerminalNode | null;
	convertedDataType(): ConvertedDataTypeContext | null;
	jsonOnEmpty(): JsonOnEmptyContext | null;
	jsonOnError(): JsonOnErrorContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseFunctionCallContext extends SpecificFunctionContext {
	_elseArg?: FunctionArgContext;
	constructor(ctx: SpecificFunctionContext);
	KW_CASE(): antlr.TerminalNode;
	KW_END(): antlr.TerminalNode;
	caseFuncAlternative(): CaseFuncAlternativeContext[];
	caseFuncAlternative(i: number): CaseFuncAlternativeContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	functionArg(): FunctionArgContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExtractFunctionCallContext extends SpecificFunctionContext {
	_sourceString?: StringLiteralContext;
	_sourceExpression?: ExpressionContext;
	constructor(ctx: SpecificFunctionContext);
	KW_EXTRACT(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	intervalType(): IntervalTypeContext;
	KW_FROM(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext | null;
	expression(): ExpressionContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeFunctionCallContext extends SpecificFunctionContext {
	_separator?: Token | null;
	constructor(ctx: SpecificFunctionContext);
	KW_CONVERT(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext;
	convertedDataType(): ConvertedDataTypeContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	charsetName(): CharsetNameContext | null;
	KW_CAST(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ValuesFunctionCallContext extends SpecificFunctionContext {
	constructor(ctx: SpecificFunctionContext);
	KW_VALUES(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	columnName(): ColumnNameContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseExpressionFunctionCallContext extends SpecificFunctionContext {
	_elseArg?: FunctionArgContext;
	constructor(ctx: SpecificFunctionContext);
	KW_CASE(): antlr.TerminalNode;
	expression(): ExpressionContext;
	KW_END(): antlr.TerminalNode;
	caseFuncAlternative(): CaseFuncAlternativeContext[];
	caseFuncAlternative(i: number): CaseFuncAlternativeContext | null;
	KW_ELSE(): antlr.TerminalNode | null;
	functionArg(): FunctionArgContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CurrentUserContext extends SpecificFunctionContext {
	constructor(ctx: SpecificFunctionContext);
	currentUserExpression(): CurrentUserExpressionContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SimpleFunctionCallContext extends SpecificFunctionContext {
	constructor(ctx: SpecificFunctionContext);
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_UTC_TIMESTAMP(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharFunctionCallContext extends SpecificFunctionContext {
	constructor(ctx: SpecificFunctionContext);
	KW_CHAR(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	functionArgs(): FunctionArgsContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_USING(): antlr.TerminalNode | null;
	charsetName(): CharsetNameContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WeightFunctionCallContext extends SpecificFunctionContext {
	_stringFormat?: Token | null;
	constructor(ctx: SpecificFunctionContext);
	KW_WEIGHT_STRING(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode[];
	LR_BRACKET(i: number): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode[];
	RR_BRACKET(i: number): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	expression(): ExpressionContext | null;
	KW_AS(): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext | null;
	levelsInWeightString(): LevelsInWeightStringContext | null;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class GetFormatFunctionCallContext extends SpecificFunctionContext {
	_datetimeFormat?: Token | null;
	constructor(ctx: SpecificFunctionContext);
	KW_GET_FORMAT(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode;
	stringLiteral(): StringLiteralContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_DATE(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_DATETIME(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubstrFunctionCallContext extends SpecificFunctionContext {
	_sourceString?: StringLiteralContext;
	_sourceExpression?: ExpressionContext;
	_fromDecimal?: DecimalLiteralContext;
	_fromExpression?: ExpressionContext;
	_forDecimal?: DecimalLiteralContext;
	_forExpression?: ExpressionContext;
	constructor(ctx: SpecificFunctionContext);
	LR_BRACKET(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	KW_SUBSTR(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	stringLiteral(): StringLiteralContext | null;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CaseFuncAlternativeContext extends antlr.ParserRuleContext {
	_condition?: FunctionArgContext;
	_consequent?: FunctionArgContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	functionArg(): FunctionArgContext[];
	functionArg(i: number): FunctionArgContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LevelsInWeightStringContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: LevelsInWeightStringContext): void;
}
export declare class LevelWeightRangeContext extends LevelsInWeightStringContext {
	_firstLevel?: DecimalLiteralContext;
	_lastLevel?: DecimalLiteralContext;
	constructor(ctx: LevelsInWeightStringContext);
	KW_LEVEL(): antlr.TerminalNode;
	MINUS(): antlr.TerminalNode;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LevelWeightListContext extends LevelsInWeightStringContext {
	constructor(ctx: LevelsInWeightStringContext);
	KW_LEVEL(): antlr.TerminalNode;
	levelInWeightListElement(): LevelInWeightListElementContext[];
	levelInWeightListElement(i: number): LevelInWeightListElementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LevelInWeightListElementContext extends antlr.ParserRuleContext {
	_orderType?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decimalLiteral(): DecimalLiteralContext;
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_REVERSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class AggregateWindowedFunctionContext extends antlr.ParserRuleContext {
	_aggregator?: Token | null;
	_starArg?: Token | null;
	_separator?: Token | null;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	functionArg(): FunctionArgContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	KW_AVG(): antlr.TerminalNode | null;
	KW_MAX(): antlr.TerminalNode | null;
	KW_MIN(): antlr.TerminalNode | null;
	KW_SUM(): antlr.TerminalNode | null;
	overClause(): OverClauseContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_COUNT(): antlr.TerminalNode | null;
	functionArgs(): FunctionArgsContext | null;
	STAR(): antlr.TerminalNode | null;
	KW_BIT_AND(): antlr.TerminalNode | null;
	KW_BIT_OR(): antlr.TerminalNode | null;
	KW_BIT_XOR(): antlr.TerminalNode | null;
	KW_STD(): antlr.TerminalNode | null;
	KW_STDDEV(): antlr.TerminalNode | null;
	KW_STDDEV_POP(): antlr.TerminalNode | null;
	KW_STDDEV_SAMP(): antlr.TerminalNode | null;
	KW_VAR_POP(): antlr.TerminalNode | null;
	KW_VAR_SAMP(): antlr.TerminalNode | null;
	KW_VARIANCE(): antlr.TerminalNode | null;
	KW_GROUP_CONCAT(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	orderByExpression(): OrderByExpressionContext[];
	orderByExpression(i: number): OrderByExpressionContext | null;
	KW_SEPARATOR(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NonAggregateWindowedFunctionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	overClause(): OverClauseContext;
	KW_LAG(): antlr.TerminalNode | null;
	KW_LEAD(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	decimalLiteral(): DecimalLiteralContext[];
	decimalLiteral(i: number): DecimalLiteralContext | null;
	KW_FIRST_VALUE(): antlr.TerminalNode | null;
	KW_LAST_VALUE(): antlr.TerminalNode | null;
	KW_CUME_DIST(): antlr.TerminalNode | null;
	KW_DENSE_RANK(): antlr.TerminalNode | null;
	KW_PERCENT_RANK(): antlr.TerminalNode | null;
	KW_RANK(): antlr.TerminalNode | null;
	KW_ROW_NUMBER(): antlr.TerminalNode | null;
	KW_NTH_VALUE(): antlr.TerminalNode | null;
	KW_NTILE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class OverClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OVER(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode | null;
	windowSpec(): WindowSpecContext | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	windowName(): WindowNameContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WindowSpecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	windowName(): WindowNameContext | null;
	partitionClause(): PartitionClauseContext | null;
	orderByClause(): OrderByClauseContext | null;
	frameClause(): FrameClauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class WindowNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	uid(): UidContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	frameUnits(): FrameUnitsContext;
	frameExtent(): FrameExtentContext;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameUnitsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROWS(): antlr.TerminalNode | null;
	KW_RANGE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameExtentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	frameRange(): FrameRangeContext | null;
	frameBetween(): FrameBetweenContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameBetweenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BETWEEN(): antlr.TerminalNode;
	frameRange(): FrameRangeContext[];
	frameRange(i: number): FrameRangeContext | null;
	KW_AND(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FrameRangeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PartitionClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ScalarFunctionNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionNameBase(): FunctionNameBaseContext | null;
	KW_ASCII(): antlr.TerminalNode | null;
	KW_CURDATE(): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_CURTIME(): antlr.TerminalNode | null;
	KW_DATE_ADD(): antlr.TerminalNode | null;
	KW_DATE_SUB(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
	KW_MID(): antlr.TerminalNode | null;
	KW_NOW(): antlr.TerminalNode | null;
	KW_REPEAT(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_SUBSTR(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_SYSDATE(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	KW_UTC_DATE(): antlr.TerminalNode | null;
	KW_UTC_TIME(): antlr.TerminalNode | null;
	KW_UTC_TIMESTAMP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PasswordFunctionClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LR_BRACKET(): antlr.TerminalNode;
	functionArg(): FunctionArgContext;
	RR_BRACKET(): antlr.TerminalNode;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_OLD_PASSWORD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionArgsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	functionArg(): FunctionArgContext[];
	functionArg(i: number): FunctionArgContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionArgContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constant(): ConstantContext | null;
	functionCall(): FunctionCallContext | null;
	expression(): ExpressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ExpressionContext): void;
}
export declare class IsExpressionContext extends ExpressionContext {
	_testValue?: Token | null;
	constructor(ctx: ExpressionContext);
	predicate(): PredicateContext;
	KW_IS(): antlr.TerminalNode;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NotExpressionContext extends ExpressionContext {
	_notOperator?: Token | null;
	constructor(ctx: ExpressionContext);
	expression(): ExpressionContext;
	KW_NOT(): antlr.TerminalNode | null;
	EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LogicalExpressionContext extends ExpressionContext {
	constructor(ctx: ExpressionContext);
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	logicalOperator(): LogicalOperatorContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PredicateExpressionContext extends ExpressionContext {
	constructor(ctx: ExpressionContext);
	predicate(): PredicateContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: PredicateContext): void;
}
export declare class SoundsLikePredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext[];
	predicate(i: number): PredicateContext | null;
	KW_SOUNDS(): antlr.TerminalNode;
	KW_LIKE(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionAtomPredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	expressionAtom(): ExpressionAtomContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonMemberOfPredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext[];
	predicate(i: number): PredicateContext | null;
	KW_MEMBER(): antlr.TerminalNode;
	KW_OF(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BinaryComparisonPredicateContext extends PredicateContext {
	_quantifier?: Token | null;
	_subQuery?: SelectStatementContext;
	_right?: PredicateContext;
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext[];
	predicate(i: number): PredicateContext | null;
	comparisonOperator(): ComparisonOperatorContext;
	LR_BRACKET(): antlr.TerminalNode | null;
	RR_BRACKET(): antlr.TerminalNode | null;
	selectStatement(): SelectStatementContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class InPredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext;
	KW_IN(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	RR_BRACKET(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext | null;
	expressions(): ExpressionsContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BetweenPredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext[];
	predicate(i: number): PredicateContext | null;
	KW_BETWEEN(): antlr.TerminalNode;
	KW_AND(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IsNullPredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext;
	KW_IS(): antlr.TerminalNode;
	nullNotnull(): NullNotnullContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LikePredicateContext extends PredicateContext {
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext[];
	predicate(i: number): PredicateContext | null;
	KW_LIKE(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	STRING_LITERAL(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class RegexpPredicateContext extends PredicateContext {
	_regex?: Token | null;
	constructor(ctx: PredicateContext);
	predicate(): PredicateContext[];
	predicate(i: number): PredicateContext | null;
	KW_REGEXP(): antlr.TerminalNode | null;
	KW_RLIKE(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionAtomContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ExpressionAtomContext): void;
}
export declare class UnaryExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	unaryOperator(): UnaryOperatorContext;
	expressionAtom(): ExpressionAtomContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CollateExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	expressionAtom(): ExpressionAtomContext;
	KW_COLLATE(): antlr.TerminalNode;
	collationName(): CollationNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	columnName(): ColumnNameContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class VariableAssignExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	LOCAL_ID(): antlr.TerminalNode;
	VAR_ASSIGN(): antlr.TerminalNode;
	expressionAtom(): ExpressionAtomContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MysqlVariableExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	mysqlVariable(): MysqlVariableContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NestedExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class NestedRowExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	KW_ROW(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	expression(): ExpressionContext[];
	expression(i: number): ExpressionContext | null;
	RR_BRACKET(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MathExpressionAtomContext extends ExpressionAtomContext {
	_left?: ExpressionAtomContext;
	_right?: ExpressionAtomContext;
	constructor(ctx: ExpressionAtomContext);
	mathOperator(): MathOperatorContext;
	expressionAtom(): ExpressionAtomContext[];
	expressionAtom(i: number): ExpressionAtomContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ExistsExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	KW_EXISTS(): antlr.TerminalNode;
	LR_BRACKET(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	KW_INTERVAL(): antlr.TerminalNode;
	expression(): ExpressionContext;
	intervalType(): IntervalTypeContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonExpressionAtomContext extends ExpressionAtomContext {
	_left?: ExpressionAtomContext;
	_right?: ExpressionAtomContext;
	constructor(ctx: ExpressionAtomContext);
	jsonOperator(): JsonOperatorContext;
	expressionAtom(): ExpressionAtomContext[];
	expressionAtom(i: number): ExpressionAtomContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	LR_BRACKET(): antlr.TerminalNode;
	selectStatement(): SelectStatementContext;
	RR_BRACKET(): antlr.TerminalNode;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ConstantExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	constant(): ConstantContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	functionCall(): FunctionCallContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BinaryExpressionAtomContext extends ExpressionAtomContext {
	constructor(ctx: ExpressionAtomContext);
	KW_BINARY(): antlr.TerminalNode;
	expressionAtom(): ExpressionAtomContext;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class BitExpressionAtomContext extends ExpressionAtomContext {
	_left?: ExpressionAtomContext;
	_right?: ExpressionAtomContext;
	constructor(ctx: ExpressionAtomContext);
	bitOperator(): BitOperatorContext;
	expressionAtom(): ExpressionAtomContext[];
	expressionAtom(i: number): ExpressionAtomContext | null;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class UnaryOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
	BIT_NOT_OP(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LESS_SYMBOL(): antlr.TerminalNode | null;
	GREATER_SYMBOL(): antlr.TerminalNode | null;
	EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	comparisonBase(): ComparisonBaseContext | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LESS_SYMBOL(): antlr.TerminalNode | null;
	EQUAL_SYMBOL(): antlr.TerminalNode | null;
	GREATER_SYMBOL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class LogicalOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AND(): antlr.TerminalNode | null;
	BIT_AND_OP(): antlr.TerminalNode[];
	BIT_AND_OP(i: number): antlr.TerminalNode | null;
	KW_XOR(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	BIT_OR_OP(): antlr.TerminalNode[];
	BIT_OR_OP(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
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
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class MathOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	STAR(): antlr.TerminalNode | null;
	DIVIDE(): antlr.TerminalNode | null;
	MODULE(): antlr.TerminalNode | null;
	DIV(): antlr.TerminalNode | null;
	MOD(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class JsonOperatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	MINUS(): antlr.TerminalNode;
	GREATER_SYMBOL(): antlr.TerminalNode[];
	GREATER_SYMBOL(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class CharsetNameBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ARMSCII8(): antlr.TerminalNode | null;
	KW_ASCII(): antlr.TerminalNode | null;
	KW_BIG5(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_CP1250(): antlr.TerminalNode | null;
	KW_CP1251(): antlr.TerminalNode | null;
	KW_CP1256(): antlr.TerminalNode | null;
	KW_CP1257(): antlr.TerminalNode | null;
	KW_CP850(): antlr.TerminalNode | null;
	KW_CP852(): antlr.TerminalNode | null;
	KW_CP866(): antlr.TerminalNode | null;
	KW_CP932(): antlr.TerminalNode | null;
	KW_DEC8(): antlr.TerminalNode | null;
	KW_EUCJPMS(): antlr.TerminalNode | null;
	KW_EUCKR(): antlr.TerminalNode | null;
	KW_GB18030(): antlr.TerminalNode | null;
	KW_GB2312(): antlr.TerminalNode | null;
	KW_GBK(): antlr.TerminalNode | null;
	KW_GEOSTD8(): antlr.TerminalNode | null;
	KW_GREEK(): antlr.TerminalNode | null;
	KW_HEBREW(): antlr.TerminalNode | null;
	KW_HP8(): antlr.TerminalNode | null;
	KW_KEYBCS2(): antlr.TerminalNode | null;
	KW_KOI8R(): antlr.TerminalNode | null;
	KW_KOI8U(): antlr.TerminalNode | null;
	KW_LATIN1(): antlr.TerminalNode | null;
	KW_LATIN2(): antlr.TerminalNode | null;
	KW_LATIN5(): antlr.TerminalNode | null;
	KW_LATIN7(): antlr.TerminalNode | null;
	KW_MACCE(): antlr.TerminalNode | null;
	KW_MACROMAN(): antlr.TerminalNode | null;
	KW_SJIS(): antlr.TerminalNode | null;
	KW_SWE7(): antlr.TerminalNode | null;
	KW_TIS620(): antlr.TerminalNode | null;
	KW_UCS2(): antlr.TerminalNode | null;
	KW_UJIS(): antlr.TerminalNode | null;
	KW_UTF16(): antlr.TerminalNode | null;
	KW_UTF16LE(): antlr.TerminalNode | null;
	KW_UTF32(): antlr.TerminalNode | null;
	KW_UTF8(): antlr.TerminalNode | null;
	KW_UTF8MB3(): antlr.TerminalNode | null;
	KW_UTF8MB4(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class TransactionLevelBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPEATABLE(): antlr.TerminalNode | null;
	KW_COMMITTED(): antlr.TerminalNode | null;
	KW_UNCOMMITTED(): antlr.TerminalNode | null;
	KW_SERIALIZABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegesBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLES(): antlr.TerminalNode | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	KW_FILE(): antlr.TerminalNode | null;
	KW_PROCESS(): antlr.TerminalNode | null;
	KW_RELOAD(): antlr.TerminalNode | null;
	KW_SHUTDOWN(): antlr.TerminalNode | null;
	KW_SUPER(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class IntervalTypeBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class DataTypeBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DATE(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_DATETIME(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_ENUM(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class KeywordsCanBeIdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ACCOUNT(): antlr.TerminalNode | null;
	KW_ACTION(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	KW_ALGORITHM(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_AT(): antlr.TerminalNode | null;
	KW_AUDIT_ADMIN(): antlr.TerminalNode | null;
	KW_AUDIT_ABORT_EXEMPT(): antlr.TerminalNode | null;
	KW_AUTHORS(): antlr.TerminalNode | null;
	KW_AUTOCOMMIT(): antlr.TerminalNode | null;
	KW_AUTOEXTEND_SIZE(): antlr.TerminalNode | null;
	KW_AUTO_INCREMENT(): antlr.TerminalNode | null;
	KW_AUTHENTICATION_POLICY_ADMIN(): antlr.TerminalNode | null;
	KW_AVG(): antlr.TerminalNode | null;
	KW_AVG_ROW_LENGTH(): antlr.TerminalNode | null;
	KW_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_BACKUP_ADMIN(): antlr.TerminalNode | null;
	KW_BEGIN(): antlr.TerminalNode | null;
	KW_BINLOG(): antlr.TerminalNode | null;
	KW_BINLOG_ADMIN(): antlr.TerminalNode | null;
	KW_BINLOG_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
	KW_BIT(): antlr.TerminalNode | null;
	KW_BIT_AND(): antlr.TerminalNode | null;
	KW_BIT_OR(): antlr.TerminalNode | null;
	KW_BIT_XOR(): antlr.TerminalNode | null;
	KW_BLOCK(): antlr.TerminalNode | null;
	KW_BOOL(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_BTREE(): antlr.TerminalNode | null;
	KW_BUCKETS(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_CASCADED(): antlr.TerminalNode | null;
	KW_CHAIN(): antlr.TerminalNode | null;
	KW_CHANGED(): antlr.TerminalNode | null;
	KW_CHANNEL(): antlr.TerminalNode | null;
	KW_CHECKSUM(): antlr.TerminalNode | null;
	KW_PAGE_CHECKSUM(): antlr.TerminalNode | null;
	KW_CATALOG_NAME(): antlr.TerminalNode | null;
	KW_CIPHER(): antlr.TerminalNode | null;
	KW_CLASS_ORIGIN(): antlr.TerminalNode | null;
	KW_CLIENT(): antlr.TerminalNode | null;
	KW_CLONE_ADMIN(): antlr.TerminalNode | null;
	KW_CLOSE(): antlr.TerminalNode | null;
	KW_COALESCE(): antlr.TerminalNode | null;
	KW_CODE(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_COLUMN_FORMAT(): antlr.TerminalNode | null;
	KW_COLUMN_NAME(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_COMPACT(): antlr.TerminalNode | null;
	KW_COMPLETION(): antlr.TerminalNode | null;
	KW_COMPRESSED(): antlr.TerminalNode | null;
	KW_COMPRESSION(): antlr.TerminalNode | null;
	KW_CONCURRENT(): antlr.TerminalNode | null;
	KW_CONDITION(): antlr.TerminalNode | null;
	KW_CONNECT(): antlr.TerminalNode | null;
	KW_CONNECTION(): antlr.TerminalNode | null;
	KW_CONNECTION_ADMIN(): antlr.TerminalNode | null;
	KW_CONSISTENT(): antlr.TerminalNode | null;
	KW_CONSTRAINT_CATALOG(): antlr.TerminalNode | null;
	KW_CONSTRAINT_NAME(): antlr.TerminalNode | null;
	KW_CONSTRAINT_SCHEMA(): antlr.TerminalNode | null;
	KW_CONTAINS(): antlr.TerminalNode | null;
	KW_CONTEXT(): antlr.TerminalNode | null;
	KW_CONTRIBUTORS(): antlr.TerminalNode | null;
	KW_COPY(): antlr.TerminalNode | null;
	KW_COUNT(): antlr.TerminalNode | null;
	KW_CPU(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_CURSOR_NAME(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DATAFILE(): antlr.TerminalNode | null;
	KW_DEALLOCATE(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DEFAULT_AUTH(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_DELAY_KEY_WRITE(): antlr.TerminalNode | null;
	KW_DES_KEY_FILE(): antlr.TerminalNode | null;
	KW_DIAGNOSTICS(): antlr.TerminalNode | null;
	KW_DIRECTORY(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_DISCARD(): antlr.TerminalNode | null;
	KW_DISK(): antlr.TerminalNode | null;
	KW_DO(): antlr.TerminalNode | null;
	KW_DUMPFILE(): antlr.TerminalNode | null;
	KW_DUPLICATE(): antlr.TerminalNode | null;
	KW_DYNAMIC(): antlr.TerminalNode | null;
	KW_EMPTY(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_ENCRYPTION(): antlr.TerminalNode | null;
	KW_ENCRYPTION_KEY_ADMIN(): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode | null;
	KW_ENDS(): antlr.TerminalNode | null;
	KW_ENGINE(): antlr.TerminalNode | null;
	KW_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_ENGINES(): antlr.TerminalNode | null;
	KW_ENFORCED(): antlr.TerminalNode | null;
	KW_ERROR(): antlr.TerminalNode | null;
	KW_ERRORS(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_EVENTS(): antlr.TerminalNode | null;
	KW_EVERY(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	KW_EXCHANGE(): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode | null;
	KW_EXPIRE(): antlr.TerminalNode | null;
	KW_EXPORT(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_EXTENT_SIZE(): antlr.TerminalNode | null;
	KW_FAILED_LOGIN_ATTEMPTS(): antlr.TerminalNode | null;
	KW_FAST(): antlr.TerminalNode | null;
	KW_FAULTS(): antlr.TerminalNode | null;
	KW_FIELDS(): antlr.TerminalNode | null;
	KW_FILE_BLOCK_SIZE(): antlr.TerminalNode | null;
	KW_FILTER(): antlr.TerminalNode | null;
	KW_FIREWALL_ADMIN(): antlr.TerminalNode | null;
	KW_FIREWALL_EXEMPT(): antlr.TerminalNode | null;
	KW_FIREWALL_USER(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_FIXED(): antlr.TerminalNode | null;
	KW_FLUSH(): antlr.TerminalNode | null;
	KW_FOLLOWS(): antlr.TerminalNode | null;
	KW_FOUND(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	KW_GENERAL(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_GRANTS(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_GROUP_CONCAT(): antlr.TerminalNode | null;
	KW_GROUP_REPLICATION(): antlr.TerminalNode | null;
	KW_GROUP_REPLICATION_ADMIN(): antlr.TerminalNode | null;
	KW_HANDLER(): antlr.TerminalNode | null;
	KW_HASH(): antlr.TerminalNode | null;
	KW_HELP(): antlr.TerminalNode | null;
	KW_HISTORY(): antlr.TerminalNode | null;
	KW_HOST(): antlr.TerminalNode | null;
	KW_HOSTS(): antlr.TerminalNode | null;
	KW_IDENTIFIED(): antlr.TerminalNode | null;
	KW_IGNORE_SERVER_IDS(): antlr.TerminalNode | null;
	KW_IMPORT(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_INITIAL_SIZE(): antlr.TerminalNode | null;
	KW_INNODB_REDO_LOG_ARCHIVE(): antlr.TerminalNode | null;
	KW_INPLACE(): antlr.TerminalNode | null;
	KW_INSERT_METHOD(): antlr.TerminalNode | null;
	KW_INSTALL(): antlr.TerminalNode | null;
	KW_INSTANCE(): antlr.TerminalNode | null;
	KW_INSTANT(): antlr.TerminalNode | null;
	KW_INVOKE(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	KW_IO(): antlr.TerminalNode | null;
	KW_IO_THREAD(): antlr.TerminalNode | null;
	KW_IPC(): antlr.TerminalNode | null;
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_ISSUER(): antlr.TerminalNode | null;
	KW_JSON(): antlr.TerminalNode | null;
	KW_KEY_BLOCK_SIZE(): antlr.TerminalNode | null;
	KW_LAMBDA(): antlr.TerminalNode | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	KW_LEAVES(): antlr.TerminalNode | null;
	KW_LESS(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_LIST(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_LOGFILE(): antlr.TerminalNode | null;
	KW_LOGS(): antlr.TerminalNode | null;
	KW_MASTER(): antlr.TerminalNode | null;
	KW_MASTER_AUTO_POSITION(): antlr.TerminalNode | null;
	KW_MASTER_CONNECT_RETRY(): antlr.TerminalNode | null;
	KW_MASTER_DELAY(): antlr.TerminalNode | null;
	KW_MASTER_HEARTBEAT_PERIOD(): antlr.TerminalNode | null;
	KW_MASTER_HOST(): antlr.TerminalNode | null;
	KW_MASTER_LOG_FILE(): antlr.TerminalNode | null;
	KW_MASTER_LOG_POS(): antlr.TerminalNode | null;
	KW_MASTER_PASSWORD(): antlr.TerminalNode | null;
	KW_MASTER_PORT(): antlr.TerminalNode | null;
	KW_MASTER_RETRY_COUNT(): antlr.TerminalNode | null;
	KW_MASTER_SSL(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CA(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CAPATH(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CERT(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CIPHER(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CRL(): antlr.TerminalNode | null;
	KW_MASTER_SSL_CRLPATH(): antlr.TerminalNode | null;
	KW_MASTER_SSL_KEY(): antlr.TerminalNode | null;
	KW_MASTER_TLS_VERSION(): antlr.TerminalNode | null;
	KW_MASTER_USER(): antlr.TerminalNode | null;
	KW_MAX_CONNECTIONS_PER_HOUR(): antlr.TerminalNode | null;
	KW_MAX_QUERIES_PER_HOUR(): antlr.TerminalNode | null;
	KW_MAX(): antlr.TerminalNode | null;
	KW_MAX_ROWS(): antlr.TerminalNode | null;
	KW_MAX_SIZE(): antlr.TerminalNode | null;
	KW_MAX_UPDATES_PER_HOUR(): antlr.TerminalNode | null;
	KW_MAX_USER_CONNECTIONS(): antlr.TerminalNode | null;
	KW_MEDIUM(): antlr.TerminalNode | null;
	KW_MEMBER(): antlr.TerminalNode | null;
	KW_MEMORY(): antlr.TerminalNode | null;
	KW_MERGE(): antlr.TerminalNode | null;
	KW_MESSAGE_TEXT(): antlr.TerminalNode | null;
	KW_MID(): antlr.TerminalNode | null;
	KW_MIGRATE(): antlr.TerminalNode | null;
	KW_MIN(): antlr.TerminalNode | null;
	KW_MIN_ROWS(): antlr.TerminalNode | null;
	KW_MODE(): antlr.TerminalNode | null;
	KW_MODIFY(): antlr.TerminalNode | null;
	KW_MUTEX(): antlr.TerminalNode | null;
	KW_MYSQL(): antlr.TerminalNode | null;
	KW_MYSQL_ERRNO(): antlr.TerminalNode | null;
	KW_NAME(): antlr.TerminalNode | null;
	KW_NAMES(): antlr.TerminalNode | null;
	KW_NCHAR(): antlr.TerminalNode | null;
	KW_NDB_STORED_USER(): antlr.TerminalNode | null;
	KW_NESTED(): antlr.TerminalNode | null;
	KW_NEVER(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_NODEGROUP(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	KW_NOWAIT(): antlr.TerminalNode | null;
	KW_NUMBER(): antlr.TerminalNode | null;
	KW_ODBC(): antlr.TerminalNode | null;
	KW_OFFLINE(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	KW_OLD_PASSWORD(): antlr.TerminalNode | null;
	KW_ONE(): antlr.TerminalNode | null;
	KW_ONLINE(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_OPEN(): antlr.TerminalNode | null;
	KW_OPTIMIZER_COSTS(): antlr.TerminalNode | null;
	KW_OPTIONAL(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_PACK_KEYS(): antlr.TerminalNode | null;
	KW_PAGE(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	KW_PARTIAL(): antlr.TerminalNode | null;
	KW_PARTITIONING(): antlr.TerminalNode | null;
	KW_PARTITIONS(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_PASSWORDLESS_USER_ADMIN(): antlr.TerminalNode | null;
	KW_PASSWORD_LOCK_TIME(): antlr.TerminalNode | null;
	KW_PATH(): antlr.TerminalNode | null;
	KW_PERSIST_RO_VARIABLES_ADMIN(): antlr.TerminalNode | null;
	KW_PHASE(): antlr.TerminalNode | null;
	KW_PLUGINS(): antlr.TerminalNode | null;
	KW_PLUGIN_DIR(): antlr.TerminalNode | null;
	KW_PLUGIN(): antlr.TerminalNode | null;
	KW_PORT(): antlr.TerminalNode | null;
	KW_PRECEDES(): antlr.TerminalNode | null;
	KW_PREPARE(): antlr.TerminalNode | null;
	KW_PRESERVE(): antlr.TerminalNode | null;
	KW_PREV(): antlr.TerminalNode | null;
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_PROCESSLIST(): antlr.TerminalNode | null;
	KW_PROFILE(): antlr.TerminalNode | null;
	KW_PROFILES(): antlr.TerminalNode | null;
	KW_PROXY(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_QUICK(): antlr.TerminalNode | null;
	KW_REBUILD(): antlr.TerminalNode | null;
	KW_RECOVER(): antlr.TerminalNode | null;
	KW_RECURSIVE(): antlr.TerminalNode | null;
	KW_REDO_BUFFER_SIZE(): antlr.TerminalNode | null;
	KW_REDUNDANT(): antlr.TerminalNode | null;
	KW_RELAY(): antlr.TerminalNode | null;
	KW_RELAYLOG(): antlr.TerminalNode | null;
	KW_RELAY_LOG_FILE(): antlr.TerminalNode | null;
	KW_RELAY_LOG_POS(): antlr.TerminalNode | null;
	KW_REMOVE(): antlr.TerminalNode | null;
	KW_REORGANIZE(): antlr.TerminalNode | null;
	KW_REPAIR(): antlr.TerminalNode | null;
	KW_REPLICATE_DO_DB(): antlr.TerminalNode | null;
	KW_REPLICATE_DO_TABLE(): antlr.TerminalNode | null;
	KW_REPLICATE_IGNORE_DB(): antlr.TerminalNode | null;
	KW_REPLICATE_IGNORE_TABLE(): antlr.TerminalNode | null;
	KW_REPLICATE_REWRITE_DB(): antlr.TerminalNode | null;
	KW_REPLICATE_WILD_DO_TABLE(): antlr.TerminalNode | null;
	KW_REPLICATE_WILD_IGNORE_TABLE(): antlr.TerminalNode | null;
	KW_REPLICATION(): antlr.TerminalNode | null;
	KW_REPLICATION_APPLIER(): antlr.TerminalNode | null;
	KW_REPLICATION_SLAVE_ADMIN(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_RESOURCE_GROUP_ADMIN(): antlr.TerminalNode | null;
	KW_RESOURCE_GROUP_USER(): antlr.TerminalNode | null;
	KW_RESUME(): antlr.TerminalNode | null;
	KW_RETURNED_SQLSTATE(): antlr.TerminalNode | null;
	KW_RETURNS(): antlr.TerminalNode | null;
	KW_REUSE(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_ROLE_ADMIN(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_ROTATE(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_ROW_FORMAT(): antlr.TerminalNode | null;
	KW_S3(): antlr.TerminalNode | null;
	KW_SAVEPOINT(): antlr.TerminalNode | null;
	KW_SCHEDULE(): antlr.TerminalNode | null;
	KW_SCHEMA_NAME(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_SECONDARY_ENGINE_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_SERIAL(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_SESSION_VARIABLES_ADMIN(): antlr.TerminalNode | null;
	KW_SET_USER_ID(): antlr.TerminalNode | null;
	KW_SHARE(): antlr.TerminalNode | null;
	KW_SHARED(): antlr.TerminalNode | null;
	KW_SHOW_ROUTINE(): antlr.TerminalNode | null;
	KW_SIGNED(): antlr.TerminalNode | null;
	KW_SIMPLE(): antlr.TerminalNode | null;
	KW_SLAVE(): antlr.TerminalNode | null;
	KW_SLOW(): antlr.TerminalNode | null;
	KW_SKIP_QUERY_REWRITE(): antlr.TerminalNode | null;
	KW_SNAPSHOT(): antlr.TerminalNode | null;
	KW_SOCKET(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_SONAME(): antlr.TerminalNode | null;
	KW_SOUNDS(): antlr.TerminalNode | null;
	KW_SOURCE(): antlr.TerminalNode | null;
	KW_SQL_AFTER_GTIDS(): antlr.TerminalNode | null;
	KW_SQL_AFTER_MTS_GAPS(): antlr.TerminalNode | null;
	KW_SQL_BEFORE_GTIDS(): antlr.TerminalNode | null;
	KW_SQL_BUFFER_RESULT(): antlr.TerminalNode | null;
	KW_SQL_CACHE(): antlr.TerminalNode | null;
	KW_SQL_NO_CACHE(): antlr.TerminalNode | null;
	KW_SQL_THREAD(): antlr.TerminalNode | null;
	KW_STACKED(): antlr.TerminalNode | null;
	KW_START(): antlr.TerminalNode | null;
	KW_STARTS(): antlr.TerminalNode | null;
	KW_STATS_AUTO_RECALC(): antlr.TerminalNode | null;
	KW_STATS_PERSISTENT(): antlr.TerminalNode | null;
	KW_STATS_SAMPLE_PAGES(): antlr.TerminalNode | null;
	KW_STATUS(): antlr.TerminalNode | null;
	KW_STD(): antlr.TerminalNode | null;
	KW_STDDEV(): antlr.TerminalNode | null;
	KW_STDDEV_POP(): antlr.TerminalNode | null;
	KW_STDDEV_SAMP(): antlr.TerminalNode | null;
	KW_STOP(): antlr.TerminalNode | null;
	KW_STORAGE(): antlr.TerminalNode | null;
	KW_STRING(): antlr.TerminalNode | null;
	KW_SUBCLASS_ORIGIN(): antlr.TerminalNode | null;
	KW_SUBJECT(): antlr.TerminalNode | null;
	KW_SUBPARTITION(): antlr.TerminalNode | null;
	KW_SUBPARTITIONS(): antlr.TerminalNode | null;
	KW_SUM(): antlr.TerminalNode | null;
	KW_SUSPEND(): antlr.TerminalNode | null;
	KW_SWAPS(): antlr.TerminalNode | null;
	KW_SWITCHES(): antlr.TerminalNode | null;
	KW_SYSTEM_VARIABLES_ADMIN(): antlr.TerminalNode | null;
	KW_TABLE_NAME(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	KW_TABLE_ENCRYPTION_ADMIN(): antlr.TerminalNode | null;
	KW_TABLE_TYPE(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TEMPTABLE(): antlr.TerminalNode | null;
	KW_THAN(): antlr.TerminalNode | null;
	KW_TP_CONNECTION_ADMIN(): antlr.TerminalNode | null;
	KW_TRADITIONAL(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_TRANSACTIONAL(): antlr.TerminalNode | null;
	KW_TRIGGERS(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_UNDEFINED(): antlr.TerminalNode | null;
	KW_UNDOFILE(): antlr.TerminalNode | null;
	KW_UNDO_BUFFER_SIZE(): antlr.TerminalNode | null;
	KW_UNINSTALL(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_UNTIL(): antlr.TerminalNode | null;
	KW_UPGRADE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_USE_FRM(): antlr.TerminalNode | null;
	KW_USER_RESOURCES(): antlr.TerminalNode | null;
	KW_VALIDATION(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	KW_VAR_POP(): antlr.TerminalNode | null;
	KW_VAR_SAMP(): antlr.TerminalNode | null;
	KW_VARIABLES(): antlr.TerminalNode | null;
	KW_VARIANCE(): antlr.TerminalNode | null;
	KW_VERSION_TOKEN_ADMIN(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_VIRTUAL(): antlr.TerminalNode | null;
	KW_WAIT(): antlr.TerminalNode | null;
	KW_WARNINGS(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_WORK(): antlr.TerminalNode | null;
	KW_WRAPPER(): antlr.TerminalNode | null;
	KW_X509(): antlr.TerminalNode | null;
	KW_XA(): antlr.TerminalNode | null;
	KW_XA_RECOVER_ADMIN(): antlr.TerminalNode | null;
	KW_XML(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameBaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHARSET(): antlr.TerminalNode | null;
	KW_COLLATION(): antlr.TerminalNode | null;
	KW_COUNT(): antlr.TerminalNode | null;
	KW_CUME_DIST(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_DATE(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DENSE_RANK(): antlr.TerminalNode | null;
	KW_FIRST_VALUE(): antlr.TerminalNode | null;
	KW_FORMAT(): antlr.TerminalNode | null;
	KW_GEOMETRYCOLLECTION(): antlr.TerminalNode | null;
	KW_GET_FORMAT(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_INVISIBLE(): antlr.TerminalNode | null;
	KW_LAG(): antlr.TerminalNode | null;
	KW_LAST_VALUE(): antlr.TerminalNode | null;
	KW_LEAD(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_LINESTRING(): antlr.TerminalNode | null;
	KW_MICROSECOND(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	MOD(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MULTILINESTRING(): antlr.TerminalNode | null;
	KW_MULTIPOINT(): antlr.TerminalNode | null;
	KW_MULTIPOLYGON(): antlr.TerminalNode | null;
	KW_NTH_VALUE(): antlr.TerminalNode | null;
	KW_NTILE(): antlr.TerminalNode | null;
	KW_PERCENT_RANK(): antlr.TerminalNode | null;
	KW_POINT(): antlr.TerminalNode | null;
	KW_POLYGON(): antlr.TerminalNode | null;
	KW_POSITION(): antlr.TerminalNode | null;
	KW_QUARTER(): antlr.TerminalNode | null;
	KW_RANDOM(): antlr.TerminalNode | null;
	KW_RANK(): antlr.TerminalNode | null;
	KW_REVERSE(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_ROW_COUNT(): antlr.TerminalNode | null;
	KW_ROW_NUMBER(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SESSION_VARIABLES_ADMIN(): antlr.TerminalNode | null;
	KW_SRID(): antlr.TerminalNode | null;
	KW_SYSTEM_USER(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_VISIBLE(): antlr.TerminalNode | null;
	KW_WEEK(): antlr.TerminalNode | null;
	KW_WEIGHT_STRING(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_JSON_VALUE(): antlr.TerminalNode | null;
	KW_JSON_TABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: MySqlParserListener): void;
	exitRule(listener: MySqlParserListener): void;
	accept<Result>(visitor: MySqlParserVisitor<Result>): Result | null;
}
