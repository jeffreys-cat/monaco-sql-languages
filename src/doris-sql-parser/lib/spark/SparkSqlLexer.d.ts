import * as antlr from 'antlr4ng';
export declare class SparkSqlLexer extends antlr.Lexer {
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
	static readonly channelNames: string[];
	static readonly literalNames: (string | null)[];
	static readonly symbolicNames: (string | null)[];
	static readonly modeNames: string[];
	static readonly ruleNames: string[];
	/**
	 * When true, parser should throw ParseException for unclosed bracketed comment.
	 */
	has_unclosed_bracketed_comment: boolean;
	/**
	 * This method will be called when the character stream ends and try to find out the
	 * unclosed bracketed comment.
	 * If the method be called, it means the end of the entire character stream match,
	 * and we set the flag and fail later.
	 */
	markUnclosedComment(): void;
	constructor(input: antlr.CharStream);
	get grammarFileName(): string;
	get literalNames(): (string | null)[];
	get symbolicNames(): (string | null)[];
	get ruleNames(): string[];
	get serializedATN(): number[];
	get channelNames(): string[];
	get modeNames(): string[];
	action(localContext: antlr.RuleContext | null, ruleIndex: number, actionIndex: number): void;
	private BRACKETED_COMMENT_action;
	static readonly _serializedATN: number[];
	private static __ATN;
	static get _ATN(): antlr.ATN;
	private static readonly vocabulary;
	get vocabulary(): antlr.Vocabulary;
	private static readonly decisionsToDFA;
}
