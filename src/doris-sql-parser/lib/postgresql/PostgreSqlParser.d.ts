import * as antlr from 'antlr4ng';
import { PostgreSqlParserListener } from './PostgreSqlParserListener.js';
import { PostgreSqlParserVisitor } from './PostgreSqlParserVisitor.js';
import { SQLParserBase } from '../SQLParserBase';
export declare class PostgreSqlParser extends SQLParserBase {
	static readonly Dollar = 1;
	static readonly OPEN_PAREN = 2;
	static readonly CLOSE_PAREN = 3;
	static readonly OPEN_BRACKET = 4;
	static readonly CLOSE_BRACKET = 5;
	static readonly COMMA = 6;
	static readonly SEMI = 7;
	static readonly COLON = 8;
	static readonly STAR = 9;
	static readonly EQUAL = 10;
	static readonly DOT = 11;
	static readonly PLUS = 12;
	static readonly MINUS = 13;
	static readonly SLASH = 14;
	static readonly CARET = 15;
	static readonly LT = 16;
	static readonly GT = 17;
	static readonly LESS_LESS = 18;
	static readonly GREATER_GREATER = 19;
	static readonly COLON_EQUALS = 20;
	static readonly LESS_EQUALS = 21;
	static readonly EQUALS_GREATER = 22;
	static readonly GREATER_EQUALS = 23;
	static readonly DOT_DOT = 24;
	static readonly NOT_EQUALS = 25;
	static readonly TYPECAST = 26;
	static readonly PERCENT = 27;
	static readonly PARAM = 28;
	static readonly Operator = 29;
	static readonly KW_ALL = 30;
	static readonly KW_ANALYSE = 31;
	static readonly KW_ANALYZE = 32;
	static readonly KW_AND = 33;
	static readonly KW_ANY = 34;
	static readonly KW_ARRAY = 35;
	static readonly KW_AS = 36;
	static readonly KW_ASC = 37;
	static readonly KW_ASYMMETRIC = 38;
	static readonly KW_BOTH = 39;
	static readonly KW_CASE = 40;
	static readonly KW_CAST = 41;
	static readonly KW_CHECK = 42;
	static readonly KW_COLLATE = 43;
	static readonly KW_COLUMN = 44;
	static readonly KW_CONSTRAINT = 45;
	static readonly KW_CREATE = 46;
	static readonly KW_CURRENT_CATALOG = 47;
	static readonly KW_CURRENT_DATE = 48;
	static readonly KW_CURRENT_ROLE = 49;
	static readonly KW_CURRENT_TIME = 50;
	static readonly KW_CURRENT_TIMESTAMP = 51;
	static readonly KW_CURRENT_USER = 52;
	static readonly KW_DEFAULT = 53;
	static readonly KW_DEFERRABLE = 54;
	static readonly KW_DESC = 55;
	static readonly KW_DISTINCT = 56;
	static readonly KW_DO = 57;
	static readonly KW_ELSE = 58;
	static readonly KW_EXCEPT = 59;
	static readonly KW_FALSE = 60;
	static readonly KW_FETCH = 61;
	static readonly KW_FOR = 62;
	static readonly KW_FOREIGN = 63;
	static readonly KW_FROM = 64;
	static readonly KW_GRANT = 65;
	static readonly KW_GROUP = 66;
	static readonly KW_HAVING = 67;
	static readonly KW_IN = 68;
	static readonly KW_INITIALLY = 69;
	static readonly KW_INTERSECT = 70;
	static readonly KW_INTO = 71;
	static readonly KW_LATERAL = 72;
	static readonly KW_LEADING = 73;
	static readonly KW_LIMIT = 74;
	static readonly KW_LOCALTIME = 75;
	static readonly KW_LOCALTIMESTAMP = 76;
	static readonly KW_NOT = 77;
	static readonly KW_NULL = 78;
	static readonly KW_OFFSET = 79;
	static readonly KW_ON = 80;
	static readonly KW_ONLY = 81;
	static readonly KW_OR = 82;
	static readonly KW_ORDER = 83;
	static readonly KW_PLACING = 84;
	static readonly KW_PRIMARY = 85;
	static readonly KW_REFERENCES = 86;
	static readonly KW_RETURNING = 87;
	static readonly KW_SELECT = 88;
	static readonly KW_SESSION_USER = 89;
	static readonly KW_SOME = 90;
	static readonly KW_SYMMETRIC = 91;
	static readonly KW_TABLE = 92;
	static readonly KW_THEN = 93;
	static readonly KW_TO = 94;
	static readonly KW_TRAILING = 95;
	static readonly KW_TRUE = 96;
	static readonly KW_UNION = 97;
	static readonly KW_UNIQUE = 98;
	static readonly KW_USER = 99;
	static readonly KW_USING = 100;
	static readonly KW_VARIADIC = 101;
	static readonly KW_WHEN = 102;
	static readonly KW_WHERE = 103;
	static readonly KW_WINDOW = 104;
	static readonly KW_WITH = 105;
	static readonly KW_AUTHORIZATION = 106;
	static readonly KW_BINARY = 107;
	static readonly KW_COLLATION = 108;
	static readonly KW_CONCURRENTLY = 109;
	static readonly KW_CROSS = 110;
	static readonly KW_CURRENT_SCHEMA = 111;
	static readonly KW_FREEZE = 112;
	static readonly KW_FULL = 113;
	static readonly KW_ILIKE = 114;
	static readonly KW_INNER = 115;
	static readonly KW_IS = 116;
	static readonly KW_ISNULL = 117;
	static readonly KW_JOIN = 118;
	static readonly KW_LEFT = 119;
	static readonly KW_LIKE = 120;
	static readonly KW_NATURAL = 121;
	static readonly KW_NOTNULL = 122;
	static readonly KW_OUTER = 123;
	static readonly KW_OVER = 124;
	static readonly KW_OVERLAPS = 125;
	static readonly KW_RIGHT = 126;
	static readonly KW_SIMILAR = 127;
	static readonly KW_VERBOSE = 128;
	static readonly KW_ABORT = 129;
	static readonly KW_ABSOLUTE = 130;
	static readonly KW_ACCESS = 131;
	static readonly KW_ACTION = 132;
	static readonly KW_ADD = 133;
	static readonly KW_ADMIN = 134;
	static readonly KW_AFTER = 135;
	static readonly KW_AGGREGATE = 136;
	static readonly KW_ALSO = 137;
	static readonly KW_ALTER = 138;
	static readonly KW_ALWAYS = 139;
	static readonly KW_ASSERTION = 140;
	static readonly KW_ASSIGNMENT = 141;
	static readonly KW_AT = 142;
	static readonly KW_ATTRIBUTE = 143;
	static readonly KW_BACKWARD = 144;
	static readonly KW_BEFORE = 145;
	static readonly KW_BEGIN = 146;
	static readonly KW_BY = 147;
	static readonly KW_CACHE = 148;
	static readonly KW_CALLED = 149;
	static readonly KW_CASCADE = 150;
	static readonly KW_CASCADED = 151;
	static readonly KW_CATALOG = 152;
	static readonly KW_CHAIN = 153;
	static readonly KW_CHARACTERISTICS = 154;
	static readonly KW_CHECKPOINT = 155;
	static readonly KW_CLASS = 156;
	static readonly KW_CLOSE = 157;
	static readonly KW_CLUSTER = 158;
	static readonly KW_COMMENT = 159;
	static readonly KW_COMMENTS = 160;
	static readonly KW_COMMIT = 161;
	static readonly KW_COMMITTED = 162;
	static readonly KW_CONFIGURATION = 163;
	static readonly KW_CONNECTION = 164;
	static readonly KW_CONSTRAINTS = 165;
	static readonly KW_CONTENT = 166;
	static readonly KW_CONTINUE = 167;
	static readonly KW_CONVERSION = 168;
	static readonly KW_COPY = 169;
	static readonly KW_COST = 170;
	static readonly KW_CSV = 171;
	static readonly KW_CURSOR = 172;
	static readonly KW_CYCLE = 173;
	static readonly KW_DATA = 174;
	static readonly KW_DATABASE = 175;
	static readonly KW_DAY = 176;
	static readonly KW_DEALLOCATE = 177;
	static readonly KW_DECLARE = 178;
	static readonly KW_DEFAULTS = 179;
	static readonly KW_DEFERRED = 180;
	static readonly KW_DEFINER = 181;
	static readonly KW_DELETE = 182;
	static readonly KW_DELIMITER = 183;
	static readonly KW_DELIMITERS = 184;
	static readonly KW_DICTIONARY = 185;
	static readonly KW_DISABLE = 186;
	static readonly KW_DISCARD = 187;
	static readonly KW_DOCUMENT = 188;
	static readonly KW_DOMAIN = 189;
	static readonly KW_DOUBLE = 190;
	static readonly KW_DROP = 191;
	static readonly KW_EACH = 192;
	static readonly KW_ENABLE = 193;
	static readonly KW_ENCODING = 194;
	static readonly KW_ENCRYPTED = 195;
	static readonly KW_ENUM = 196;
	static readonly KW_ESCAPE = 197;
	static readonly KW_EVENT = 198;
	static readonly KW_EXCLUDE = 199;
	static readonly KW_EXCLUDING = 200;
	static readonly KW_EXCLUSIVE = 201;
	static readonly KW_EXECUTE = 202;
	static readonly KW_EXPLAIN = 203;
	static readonly KW_EXTENSION = 204;
	static readonly KW_EXTERNAL = 205;
	static readonly KW_FAMILY = 206;
	static readonly KW_FIRST = 207;
	static readonly KW_FOLLOWING = 208;
	static readonly KW_FORCE = 209;
	static readonly KW_FORWARD = 210;
	static readonly KW_FUNCTION = 211;
	static readonly KW_FUNCTIONS = 212;
	static readonly KW_GLOBAL = 213;
	static readonly KW_GRANTED = 214;
	static readonly KW_HANDLER = 215;
	static readonly KW_HEADER = 216;
	static readonly KW_HOLD = 217;
	static readonly KW_HOUR = 218;
	static readonly KW_IDENTITY = 219;
	static readonly KW_IF = 220;
	static readonly KW_IMMEDIATE = 221;
	static readonly KW_IMMUTABLE = 222;
	static readonly KW_IMPLICIT = 223;
	static readonly KW_INCLUDING = 224;
	static readonly KW_INCREMENT = 225;
	static readonly KW_INDEX = 226;
	static readonly KW_INDEXES = 227;
	static readonly KW_INHERIT = 228;
	static readonly KW_NOINHERIT = 229;
	static readonly KW_SUPERUSER = 230;
	static readonly KW_NOSUPERUSER = 231;
	static readonly KW_CREATEDB = 232;
	static readonly KW_NOCREATEDB = 233;
	static readonly KW_CREATEROLE = 234;
	static readonly KW_NOCREATEROLE = 235;
	static readonly KW_CREATEUSER = 236;
	static readonly KW_NOCREATEUSER = 237;
	static readonly KW_INHERITS = 238;
	static readonly KW_INLINE = 239;
	static readonly KW_INSENSITIVE = 240;
	static readonly KW_INSERT = 241;
	static readonly KW_INSTEAD = 242;
	static readonly KW_INVOKER = 243;
	static readonly KW_ISOLATION = 244;
	static readonly KW_KEY = 245;
	static readonly KW_LABEL = 246;
	static readonly KW_LANGUAGE = 247;
	static readonly KW_LARGE = 248;
	static readonly KW_LAST = 249;
	static readonly KW_LEAKPROOF = 250;
	static readonly KW_LEVEL = 251;
	static readonly KW_LISTEN = 252;
	static readonly KW_LOAD = 253;
	static readonly KW_LOCAL = 254;
	static readonly KW_LOCATION = 255;
	static readonly KW_LOCK = 256;
	static readonly KW_MAPPING = 257;
	static readonly KW_MATCH = 258;
	static readonly KW_MATERIALIZED = 259;
	static readonly KW_MAXVALUE = 260;
	static readonly KW_MINUTE = 261;
	static readonly KW_MINVALUE = 262;
	static readonly KW_MODE = 263;
	static readonly KW_MONTH = 264;
	static readonly KW_MOVE = 265;
	static readonly KW_NAME = 266;
	static readonly KW_NAMES = 267;
	static readonly KW_NEXT = 268;
	static readonly KW_NO = 269;
	static readonly KW_NOTHING = 270;
	static readonly KW_NOTIFY = 271;
	static readonly KW_NOWAIT = 272;
	static readonly KW_NULLS = 273;
	static readonly KW_OBJECT = 274;
	static readonly KW_OF = 275;
	static readonly KW_OFF = 276;
	static readonly KW_OIDS = 277;
	static readonly KW_OPERATOR = 278;
	static readonly KW_OPTION = 279;
	static readonly KW_OPTIONS = 280;
	static readonly KW_OWNED = 281;
	static readonly KW_OWNER = 282;
	static readonly KW_PARSER = 283;
	static readonly KW_PARTIAL = 284;
	static readonly KW_PARTITION = 285;
	static readonly KW_PASSING = 286;
	static readonly KW_PASSWORD = 287;
	static readonly KW_PLANS = 288;
	static readonly KW_PRECEDING = 289;
	static readonly KW_PREPARE = 290;
	static readonly KW_PREPARED = 291;
	static readonly KW_PRESERVE = 292;
	static readonly KW_PRIOR = 293;
	static readonly KW_PRIVILEGES = 294;
	static readonly KW_PROCEDURAL = 295;
	static readonly KW_PROCEDURE = 296;
	static readonly KW_PROGRAM = 297;
	static readonly KW_QUOTE = 298;
	static readonly KW_RANGE = 299;
	static readonly KW_READ = 300;
	static readonly KW_REASSIGN = 301;
	static readonly KW_RECHECK = 302;
	static readonly KW_RECURSIVE = 303;
	static readonly KW_REF = 304;
	static readonly KW_REFRESH = 305;
	static readonly KW_REINDEX = 306;
	static readonly KW_RELATIVE = 307;
	static readonly KW_RELEASE = 308;
	static readonly KW_RENAME = 309;
	static readonly KW_REPEATABLE = 310;
	static readonly KW_REPLACE = 311;
	static readonly KW_REPLICA = 312;
	static readonly KW_RESET = 313;
	static readonly KW_RESTART = 314;
	static readonly KW_RESTRICT = 315;
	static readonly KW_RETURNS = 316;
	static readonly KW_REVOKE = 317;
	static readonly KW_ROLE = 318;
	static readonly KW_ROLLBACK = 319;
	static readonly KW_ROWS = 320;
	static readonly KW_RULE = 321;
	static readonly KW_SAVEPOINT = 322;
	static readonly KW_SCHEMA = 323;
	static readonly KW_SCROLL = 324;
	static readonly KW_SEARCH = 325;
	static readonly KW_SECOND = 326;
	static readonly KW_SECURITY = 327;
	static readonly KW_SEQUENCE = 328;
	static readonly KW_SEQUENCES = 329;
	static readonly KW_SERIALIZABLE = 330;
	static readonly KW_SERVER = 331;
	static readonly KW_SESSION = 332;
	static readonly KW_SET = 333;
	static readonly KW_SHARE = 334;
	static readonly KW_SHOW = 335;
	static readonly KW_SIMPLE = 336;
	static readonly KW_SNAPSHOT = 337;
	static readonly KW_STABLE = 338;
	static readonly KW_STANDALONE = 339;
	static readonly KW_START = 340;
	static readonly KW_STATEMENT = 341;
	static readonly KW_STATISTICS = 342;
	static readonly KW_STDIN = 343;
	static readonly KW_STDOUT = 344;
	static readonly KW_STORAGE = 345;
	static readonly KW_STRICT = 346;
	static readonly KW_STRIP = 347;
	static readonly KW_SYSID = 348;
	static readonly KW_SYSTEM = 349;
	static readonly KW_TABLES = 350;
	static readonly KW_TABLESPACE = 351;
	static readonly KW_TEMP = 352;
	static readonly KW_TEMPLATE = 353;
	static readonly KW_TEMPORARY = 354;
	static readonly KW_TEXT = 355;
	static readonly KW_TRANSACTION = 356;
	static readonly KW_TRIGGER = 357;
	static readonly KW_TRUNCATE = 358;
	static readonly KW_TRUSTED = 359;
	static readonly KW_TYPE = 360;
	static readonly KW_TYPES = 361;
	static readonly KW_UNBOUNDED = 362;
	static readonly KW_UNCOMMITTED = 363;
	static readonly KW_UNENCRYPTED = 364;
	static readonly KW_UNKNOWN = 365;
	static readonly KW_UNLISTEN = 366;
	static readonly KW_UNLOGGED = 367;
	static readonly KW_UNTIL = 368;
	static readonly KW_UPDATE = 369;
	static readonly KW_VACUUM = 370;
	static readonly KW_VALID = 371;
	static readonly KW_VALIDATE = 372;
	static readonly KW_VALIDATOR = 373;
	static readonly KW_VARYING = 374;
	static readonly KW_VERSION = 375;
	static readonly KW_VIEW = 376;
	static readonly KW_VOLATILE = 377;
	static readonly KW_WHITESPACE = 378;
	static readonly KW_WITHOUT = 379;
	static readonly KW_WORK = 380;
	static readonly KW_WRAPPER = 381;
	static readonly KW_WRITE = 382;
	static readonly KW_XML = 383;
	static readonly KW_YEAR = 384;
	static readonly KW_YES = 385;
	static readonly KW_ZONE = 386;
	static readonly KW_BETWEEN = 387;
	static readonly KW_BIGINT = 388;
	static readonly KW_BIT = 389;
	static readonly KW_BOOLEAN = 390;
	static readonly KW_CHAR = 391;
	static readonly KW_CHARACTER = 392;
	static readonly KW_COALESCE = 393;
	static readonly KW_DEC = 394;
	static readonly KW_DECIMAL = 395;
	static readonly KW_EXISTS = 396;
	static readonly KW_EXTRACT = 397;
	static readonly KW_FLOAT = 398;
	static readonly KW_GREATEST = 399;
	static readonly KW_INOUT = 400;
	static readonly KW_INT = 401;
	static readonly KW_INTEGER = 402;
	static readonly KW_INTERVAL = 403;
	static readonly KW_LEAST = 404;
	static readonly KW_NATIONAL = 405;
	static readonly KW_NCHAR = 406;
	static readonly KW_NONE = 407;
	static readonly KW_NULLIF = 408;
	static readonly KW_NUMERIC = 409;
	static readonly KW_OVERLAY = 410;
	static readonly KW_POSITION = 411;
	static readonly KW_PRECISION = 412;
	static readonly KW_REAL = 413;
	static readonly KW_ROW = 414;
	static readonly KW_SETOF = 415;
	static readonly KW_SMALLINT = 416;
	static readonly KW_SUBSTRING = 417;
	static readonly KW_TIME = 418;
	static readonly KW_TIMESTAMP = 419;
	static readonly KW_TREAT = 420;
	static readonly KW_TRIM = 421;
	static readonly KW_VALUES = 422;
	static readonly KW_VARCHAR = 423;
	static readonly KW_XMLATTRIBUTES = 424;
	static readonly KW_XMLCONCAT = 425;
	static readonly KW_XMLELEMENT = 426;
	static readonly KW_XMLEXISTS = 427;
	static readonly KW_XMLFOREST = 428;
	static readonly KW_XMLPARSE = 429;
	static readonly KW_XMLPI = 430;
	static readonly KW_XMLROOT = 431;
	static readonly KW_XMLSERIALIZE = 432;
	static readonly KW_CALL = 433;
	static readonly KW_CURRENT = 434;
	static readonly KW_ATTACH = 435;
	static readonly KW_DETACH = 436;
	static readonly KW_EXPRESSION = 437;
	static readonly KW_GENERATED = 438;
	static readonly KW_LOGGED = 439;
	static readonly KW_STORED = 440;
	static readonly KW_INCLUDE = 441;
	static readonly KW_ROUTINE = 442;
	static readonly KW_TRANSFORM = 443;
	static readonly KW_IMPORT = 444;
	static readonly KW_POLICY = 445;
	static readonly KW_METHOD = 446;
	static readonly KW_REFERENCING = 447;
	static readonly KW_NEW = 448;
	static readonly KW_OLD = 449;
	static readonly KW_VALUE = 450;
	static readonly KW_SUBSCRIPTION = 451;
	static readonly KW_PUBLICATION = 452;
	static readonly KW_OUT = 453;
	static readonly KW_END = 454;
	static readonly KW_ROUTINES = 455;
	static readonly KW_SCHEMAS = 456;
	static readonly KW_PROCEDURES = 457;
	static readonly KW_INPUT = 458;
	static readonly KW_SUPPORT = 459;
	static readonly KW_PARALLEL = 460;
	static readonly KW_SQL = 461;
	static readonly KW_DEPENDS = 462;
	static readonly KW_OVERRIDING = 463;
	static readonly KW_CONFLICT = 464;
	static readonly KW_SKIP = 465;
	static readonly KW_LOCKED = 466;
	static readonly KW_TIES = 467;
	static readonly KW_ROLLUP = 468;
	static readonly KW_CUBE = 469;
	static readonly KW_GROUPING = 470;
	static readonly KW_SETS = 471;
	static readonly KW_TABLESAMPLE = 472;
	static readonly KW_ORDINALITY = 473;
	static readonly KW_XMLTABLE = 474;
	static readonly KW_COLUMNS = 475;
	static readonly KW_XMLNAMESPACES = 476;
	static readonly KW_ROWTYPE = 477;
	static readonly KW_NORMALIZED = 478;
	static readonly KW_WITHIN = 479;
	static readonly KW_FILTER = 480;
	static readonly KW_GROUPS = 481;
	static readonly KW_OTHERS = 482;
	static readonly KW_NFC = 483;
	static readonly KW_NFD = 484;
	static readonly KW_NFKC = 485;
	static readonly KW_NFKD = 486;
	static readonly KW_UESCAPE = 487;
	static readonly KW_VIEWS = 488;
	static readonly KW_NORMALIZE = 489;
	static readonly KW_DUMP = 490;
	static readonly KW_PRINT_STRICT_PARAMS = 491;
	static readonly KW_VARIABLE_CONFLICT = 492;
	static readonly KW_ERROR = 493;
	static readonly KW_USE_VARIABLE = 494;
	static readonly KW_USE_COLUMN = 495;
	static readonly KW_ALIAS = 496;
	static readonly KW_CONSTANT = 497;
	static readonly KW_PERFORM = 498;
	static readonly KW_GET = 499;
	static readonly KW_DIAGNOSTICS = 500;
	static readonly KW_STACKED = 501;
	static readonly KW_ELSIF = 502;
	static readonly KW_WHILE = 503;
	static readonly KW_REVERSE = 504;
	static readonly KW_FOREACH = 505;
	static readonly KW_SLICE = 506;
	static readonly KW_EXIT = 507;
	static readonly KW_RETURN = 508;
	static readonly KW_QUERY = 509;
	static readonly KW_RAISE = 510;
	static readonly KW_SQLSTATE = 511;
	static readonly KW_DEBUG = 512;
	static readonly KW_LOG = 513;
	static readonly KW_INFO = 514;
	static readonly KW_NOTICE = 515;
	static readonly KW_WARNING = 516;
	static readonly KW_EXCEPTION = 517;
	static readonly KW_ASSERT = 518;
	static readonly KW_LOOP = 519;
	static readonly KW_OPEN = 520;
	static readonly KW_PEFERENCES = 521;
	static readonly KW_USAGE = 522;
	static readonly KW_CONNECT = 523;
	static readonly KW_PUBLIC = 524;
	static readonly KW_MERGE = 525;
	static readonly KW_MATCHED = 526;
	static readonly KW_BREADTH = 527;
	static readonly KW_DEPTH = 528;
	static readonly KW_UNSAFE = 529;
	static readonly KW_RESTRICTED = 530;
	static readonly KW_SAFE = 531;
	static readonly KW_FINALIZE = 532;
	static readonly KW_MODULUS = 533;
	static readonly KW_REMAINDER = 534;
	static readonly KW_LOGIN = 535;
	static readonly KW_NOLOGIN = 536;
	static readonly KW_REPLICATION = 537;
	static readonly KW_NOREPLICATION = 538;
	static readonly KW_BYPASSRLS = 539;
	static readonly KW_NOBYPASSRLS = 540;
	static readonly KW_PERMISSIVE = 541;
	static readonly KW_RESTRICTIVE = 542;
	static readonly KW_COMPRESSION = 543;
	static readonly KW_PLAIN = 544;
	static readonly KW_EXTENDED = 545;
	static readonly KW_MAIN = 546;
	static readonly KW_SKIP_LOCKED = 547;
	static readonly KW_BUFFER_USAGE_LIMIT = 548;
	static readonly Identifier = 549;
	static readonly QuotedIdentifier = 550;
	static readonly UnterminatedQuotedIdentifier = 551;
	static readonly InvalidQuotedIdentifier = 552;
	static readonly InvalidUnterminatedQuotedIdentifier = 553;
	static readonly UnicodeQuotedIdentifier = 554;
	static readonly UnterminatedUnicodeQuotedIdentifier = 555;
	static readonly InvalidUnicodeQuotedIdentifier = 556;
	static readonly InvalidUnterminatedUnicodeQuotedIdentifier = 557;
	static readonly StringConstant = 558;
	static readonly UnterminatedStringConstant = 559;
	static readonly UnicodeEscapeStringConstant = 560;
	static readonly UnterminatedUnicodeEscapeStringConstant = 561;
	static readonly BeginDollarStringConstant = 562;
	static readonly BinaryStringConstant = 563;
	static readonly UnterminatedBinaryStringConstant = 564;
	static readonly InvalidBinaryStringConstant = 565;
	static readonly InvalidUnterminatedBinaryStringConstant = 566;
	static readonly HexadecimalStringConstant = 567;
	static readonly UnterminatedHexadecimalStringConstant = 568;
	static readonly InvalidHexadecimalStringConstant = 569;
	static readonly InvalidUnterminatedHexadecimalStringConstant = 570;
	static readonly Integral = 571;
	static readonly NumericFail = 572;
	static readonly Numeric = 573;
	static readonly PLSQLVARIABLENAME = 574;
	static readonly PLSQLIDENTIFIER = 575;
	static readonly Whitespace = 576;
	static readonly Newline = 577;
	static readonly LineComment = 578;
	static readonly BlockComment = 579;
	static readonly UnterminatedBlockComment = 580;
	static readonly MetaCommand = 581;
	static readonly EndMetaCommand = 582;
	static readonly ErrorCharacter = 583;
	static readonly EscapeStringConstant = 584;
	static readonly UnterminatedEscapeStringConstant = 585;
	static readonly InvalidEscapeStringConstant = 586;
	static readonly InvalidUnterminatedEscapeStringConstant = 587;
	static readonly DollarText = 588;
	static readonly EndDollarStringConstant = 589;
	static readonly AfterEscapeStringConstantWithNewlineMode_Continued = 590;
	static readonly RULE_program = 0;
	static readonly RULE_plsqlroot = 1;
	static readonly RULE_singleStmt = 2;
	static readonly RULE_stmt = 3;
	static readonly RULE_plsqlconsolecommand = 4;
	static readonly RULE_callstmt = 5;
	static readonly RULE_createrolestmt = 6;
	static readonly RULE_opt_with = 7;
	static readonly RULE_optrolelist = 8;
	static readonly RULE_alteroptrolelist = 9;
	static readonly RULE_alteroptroleelem = 10;
	static readonly RULE_createoptroleelem = 11;
	static readonly RULE_createuserstmt = 12;
	static readonly RULE_alterrolestmt = 13;
	static readonly RULE_opt_in_database = 14;
	static readonly RULE_alterrolesetstmt = 15;
	static readonly RULE_alterroutinestmt = 16;
	static readonly RULE_alter_routine_cluase = 17;
	static readonly RULE_routine_action_list = 18;
	static readonly RULE_routine_action = 19;
	static readonly RULE_creategroupstmt = 20;
	static readonly RULE_altergroupstmt = 21;
	static readonly RULE_add_drop = 22;
	static readonly RULE_createschemastmt = 23;
	static readonly RULE_schema_name_create = 24;
	static readonly RULE_optschemaeltlist = 25;
	static readonly RULE_schema_stmt = 26;
	static readonly RULE_variablesetstmt = 27;
	static readonly RULE_set_rest = 28;
	static readonly RULE_generic_set = 29;
	static readonly RULE_set_rest_more = 30;
	static readonly RULE_var_name = 31;
	static readonly RULE_var_list = 32;
	static readonly RULE_var_value = 33;
	static readonly RULE_iso_level = 34;
	static readonly RULE_opt_boolean_or_string_column = 35;
	static readonly RULE_opt_boolean_or_string = 36;
	static readonly RULE_zone_value = 37;
	static readonly RULE_opt_encoding = 38;
	static readonly RULE_nonreservedword_or_sconst_column = 39;
	static readonly RULE_nonreservedword_or_sconst = 40;
	static readonly RULE_variableresetstmt = 41;
	static readonly RULE_reset_rest = 42;
	static readonly RULE_generic_reset = 43;
	static readonly RULE_setresetclause = 44;
	static readonly RULE_functionsetresetclause = 45;
	static readonly RULE_variableshowstmt = 46;
	static readonly RULE_constraintssetstmt = 47;
	static readonly RULE_constraints_set_list = 48;
	static readonly RULE_constraints_set_mode = 49;
	static readonly RULE_checkpointstmt = 50;
	static readonly RULE_discardstmt = 51;
	static readonly RULE_altertablestmt = 52;
	static readonly RULE_alter_table_cmds = 53;
	static readonly RULE_partition_bound_spec = 54;
	static readonly RULE_partition_bound_cluase = 55;
	static readonly RULE_partition_bound_choose = 56;
	static readonly RULE_partition_with_cluase = 57;
	static readonly RULE_partition_cmd = 58;
	static readonly RULE_index_partition_cmd = 59;
	static readonly RULE_alter_table_cmd = 60;
	static readonly RULE_alter_column_default = 61;
	static readonly RULE_opt_drop_behavior = 62;
	static readonly RULE_opt_collate_clause = 63;
	static readonly RULE_alter_using = 64;
	static readonly RULE_replica_identity = 65;
	static readonly RULE_reloptions = 66;
	static readonly RULE_opt_reloptions = 67;
	static readonly RULE_reloption_list = 68;
	static readonly RULE_reloption_elem = 69;
	static readonly RULE_alter_identity_column_option_list = 70;
	static readonly RULE_alter_identity_column_option = 71;
	static readonly RULE_partitionboundspec = 72;
	static readonly RULE_hash_partbound_elem = 73;
	static readonly RULE_hash_partbound = 74;
	static readonly RULE_altercompositetypestmt = 75;
	static readonly RULE_alter_type_cmds = 76;
	static readonly RULE_alter_type_cmd = 77;
	static readonly RULE_closeportalstmt = 78;
	static readonly RULE_copystmt = 79;
	static readonly RULE_copy_from = 80;
	static readonly RULE_opt_program = 81;
	static readonly RULE_copy_file_name = 82;
	static readonly RULE_copy_options = 83;
	static readonly RULE_copy_opt_list = 84;
	static readonly RULE_copy_opt_item = 85;
	static readonly RULE_opt_binary = 86;
	static readonly RULE_copy_delimiter = 87;
	static readonly RULE_opt_using = 88;
	static readonly RULE_copy_generic_opt_list = 89;
	static readonly RULE_copy_generic_opt_elem = 90;
	static readonly RULE_copy_generic_opt_arg = 91;
	static readonly RULE_copy_generic_opt_arg_list = 92;
	static readonly RULE_copy_generic_opt_arg_list_item = 93;
	static readonly RULE_createstmt = 94;
	static readonly RULE_opttemp = 95;
	static readonly RULE_table_column_list = 96;
	static readonly RULE_opttableelementlist = 97;
	static readonly RULE_opttypedtableelementlist = 98;
	static readonly RULE_tableelementlist = 99;
	static readonly RULE_typedtableelementlist = 100;
	static readonly RULE_tableelement = 101;
	static readonly RULE_typedtableelement = 102;
	static readonly RULE_column_def = 103;
	static readonly RULE_compressionCluase = 104;
	static readonly RULE_storageCluase = 105;
	static readonly RULE_columnOptions = 106;
	static readonly RULE_colquallist = 107;
	static readonly RULE_colconstraint = 108;
	static readonly RULE_colconstraintelem = 109;
	static readonly RULE_nulls_distinct = 110;
	static readonly RULE_generated_when = 111;
	static readonly RULE_deferrable_trigger = 112;
	static readonly RULE_initially_trigger = 113;
	static readonly RULE_tablelikeclause = 114;
	static readonly RULE_tablelikeoptionlist = 115;
	static readonly RULE_tablelikeoption = 116;
	static readonly RULE_tableconstraint = 117;
	static readonly RULE_constraintelem = 118;
	static readonly RULE_opt_no_inherit = 119;
	static readonly RULE_opt_column_list = 120;
	static readonly RULE_opt_column_list_create = 121;
	static readonly RULE_column_list = 122;
	static readonly RULE_column_list_create = 123;
	static readonly RULE_opt_c_include = 124;
	static readonly RULE_key_match = 125;
	static readonly RULE_exclusionconstraintlist = 126;
	static readonly RULE_exclusionconstraintelem = 127;
	static readonly RULE_exclusionwhereclause = 128;
	static readonly RULE_key_actions = 129;
	static readonly RULE_key_update = 130;
	static readonly RULE_key_delete = 131;
	static readonly RULE_key_action = 132;
	static readonly RULE_optinherit = 133;
	static readonly RULE_optpartitionspec = 134;
	static readonly RULE_partitionspec = 135;
	static readonly RULE_part_params = 136;
	static readonly RULE_part_elem = 137;
	static readonly RULE_table_access_method_clause = 138;
	static readonly RULE_optwith = 139;
	static readonly RULE_oncommitoption = 140;
	static readonly RULE_opttablespace = 141;
	static readonly RULE_index_paramenters_create = 142;
	static readonly RULE_optconstablespace = 143;
	static readonly RULE_existingindex = 144;
	static readonly RULE_createstatsstmt = 145;
	static readonly RULE_alterstatsstmt = 146;
	static readonly RULE_createasstmt = 147;
	static readonly RULE_create_as_target = 148;
	static readonly RULE_opt_with_data = 149;
	static readonly RULE_creatematviewstmt = 150;
	static readonly RULE_create_mv_target = 151;
	static readonly RULE_optnolog = 152;
	static readonly RULE_refreshmatviewstmt = 153;
	static readonly RULE_createseqstmt = 154;
	static readonly RULE_alterseqstmt = 155;
	static readonly RULE_optseqoptlist = 156;
	static readonly RULE_optparenthesizedseqoptlist = 157;
	static readonly RULE_seqoptlist = 158;
	static readonly RULE_seqoptelem = 159;
	static readonly RULE_opt_by = 160;
	static readonly RULE_numericonly = 161;
	static readonly RULE_numericonly_list = 162;
	static readonly RULE_createplangstmt = 163;
	static readonly RULE_opt_trusted = 164;
	static readonly RULE_handler_name = 165;
	static readonly RULE_opt_inline_handler = 166;
	static readonly RULE_validator_clause = 167;
	static readonly RULE_opt_validator = 168;
	static readonly RULE_opt_procedural = 169;
	static readonly RULE_createtablespacestmt = 170;
	static readonly RULE_opttablespaceowner = 171;
	static readonly RULE_createextensionstmt = 172;
	static readonly RULE_create_extension_opt_list = 173;
	static readonly RULE_create_extension_opt_item = 174;
	static readonly RULE_alterextensionstmt = 175;
	static readonly RULE_alter_extension_opt_list = 176;
	static readonly RULE_alter_extension_opt_item = 177;
	static readonly RULE_alterextensioncontentsstmt = 178;
	static readonly RULE_createfdwstmt = 179;
	static readonly RULE_fdw_option = 180;
	static readonly RULE_fdw_options = 181;
	static readonly RULE_opt_fdw_options = 182;
	static readonly RULE_alterfdwstmt = 183;
	static readonly RULE_create_generic_options = 184;
	static readonly RULE_generic_option_list = 185;
	static readonly RULE_alter_generic_options = 186;
	static readonly RULE_alter_generic_option_list = 187;
	static readonly RULE_alter_generic_option_elem = 188;
	static readonly RULE_generic_option_elem = 189;
	static readonly RULE_generic_option_name = 190;
	static readonly RULE_generic_option_arg = 191;
	static readonly RULE_createforeignserverstmt = 192;
	static readonly RULE_opt_type = 193;
	static readonly RULE_foreign_server_version = 194;
	static readonly RULE_opt_foreign_server_version = 195;
	static readonly RULE_alterforeignserverstmt = 196;
	static readonly RULE_createforeigntablestmt = 197;
	static readonly RULE_importforeignschemastmt = 198;
	static readonly RULE_import_qualification_type = 199;
	static readonly RULE_import_qualification = 200;
	static readonly RULE_createusermappingstmt = 201;
	static readonly RULE_auth_ident = 202;
	static readonly RULE_alterusermappingstmt = 203;
	static readonly RULE_createpolicystmt = 204;
	static readonly RULE_alterpolicystmt = 205;
	static readonly RULE_alterprocedurestmt = 206;
	static readonly RULE_procedure_cluase = 207;
	static readonly RULE_procedure_action = 208;
	static readonly RULE_rowsecurityoptionalexpr = 209;
	static readonly RULE_rowsecurityoptionalwithcheck = 210;
	static readonly RULE_rowsecuritydefaulttorole = 211;
	static readonly RULE_rowsecurityoptionaltorole = 212;
	static readonly RULE_rowsecuritydefaultpermissive = 213;
	static readonly RULE_rowsecuritydefaultforcmd = 214;
	static readonly RULE_row_security_cmd = 215;
	static readonly RULE_createamstmt = 216;
	static readonly RULE_am_type = 217;
	static readonly RULE_createtrigstmt = 218;
	static readonly RULE_triggeractiontime = 219;
	static readonly RULE_foreachrow = 220;
	static readonly RULE_roworstatment = 221;
	static readonly RULE_triggerevents = 222;
	static readonly RULE_triggeroneevent = 223;
	static readonly RULE_triggerreferencing = 224;
	static readonly RULE_triggertransitions = 225;
	static readonly RULE_triggertransition = 226;
	static readonly RULE_transitionoldornew = 227;
	static readonly RULE_transitionrowortable = 228;
	static readonly RULE_transitionrelname = 229;
	static readonly RULE_triggerforspec = 230;
	static readonly RULE_triggerforopteach = 231;
	static readonly RULE_triggerfortype = 232;
	static readonly RULE_triggerwhen = 233;
	static readonly RULE_function_or_procedure = 234;
	static readonly RULE_triggerfuncargs = 235;
	static readonly RULE_triggerfuncarg = 236;
	static readonly RULE_optconstrfromtable = 237;
	static readonly RULE_constraintattributespec = 238;
	static readonly RULE_constraintattributeElem = 239;
	static readonly RULE_createeventtrigstmt = 240;
	static readonly RULE_event_trigger_when_list = 241;
	static readonly RULE_event_trigger_when_item = 242;
	static readonly RULE_event_trigger_value_list = 243;
	static readonly RULE_altereventtrigstmt = 244;
	static readonly RULE_enable_trigger = 245;
	static readonly RULE_createassertionstmt = 246;
	static readonly RULE_definestmt = 247;
	static readonly RULE_definition = 248;
	static readonly RULE_def_list = 249;
	static readonly RULE_def_elem = 250;
	static readonly RULE_def_arg = 251;
	static readonly RULE_old_aggr_definition = 252;
	static readonly RULE_old_aggr_list = 253;
	static readonly RULE_old_aggr_elem = 254;
	static readonly RULE_opt_enum_val_list = 255;
	static readonly RULE_enum_val_list = 256;
	static readonly RULE_alterenumstmt = 257;
	static readonly RULE_opt_if_not_exists = 258;
	static readonly RULE_createopclassstmt = 259;
	static readonly RULE_opclass_item_list = 260;
	static readonly RULE_opclass_item = 261;
	static readonly RULE_opt_default = 262;
	static readonly RULE_opt_opfamily = 263;
	static readonly RULE_opclass_purpose = 264;
	static readonly RULE_opt_recheck = 265;
	static readonly RULE_createopfamilystmt = 266;
	static readonly RULE_alteropfamilystmt = 267;
	static readonly RULE_opclass_drop_list = 268;
	static readonly RULE_opclass_drop = 269;
	static readonly RULE_reassignownedstmt = 270;
	static readonly RULE_dropstmt = 271;
	static readonly RULE_view_nameList = 272;
	static readonly RULE_object_type_any_name = 273;
	static readonly RULE_object_type_name = 274;
	static readonly RULE_object_type_name_on_any_name = 275;
	static readonly RULE_any_name_list = 276;
	static readonly RULE_relation_column_name = 277;
	static readonly RULE_relation_name = 278;
	static readonly RULE_any_name = 279;
	static readonly RULE_attrs = 280;
	static readonly RULE_type_name_list = 281;
	static readonly RULE_truncatestmt = 282;
	static readonly RULE_truncate_table = 283;
	static readonly RULE_commentstmt = 284;
	static readonly RULE_comment_text = 285;
	static readonly RULE_seclabelstmt = 286;
	static readonly RULE_opt_provider = 287;
	static readonly RULE_security_label = 288;
	static readonly RULE_fetchstmt = 289;
	static readonly RULE_fetch_args = 290;
	static readonly RULE_from_in = 291;
	static readonly RULE_opt_from_in = 292;
	static readonly RULE_grantstmt = 293;
	static readonly RULE_revokestmt = 294;
	static readonly RULE_privileges = 295;
	static readonly RULE_beforeprivilegeselectlist = 296;
	static readonly RULE_beforeprivilegeselect = 297;
	static readonly RULE_privilege_list = 298;
	static readonly RULE_privilege = 299;
	static readonly RULE_privilege_target = 300;
	static readonly RULE_grantee_list = 301;
	static readonly RULE_grantee = 302;
	static readonly RULE_opt_grant_grant_option = 303;
	static readonly RULE_grantrolestmt = 304;
	static readonly RULE_revokerolestmt = 305;
	static readonly RULE_opt_grant_admin_option = 306;
	static readonly RULE_opt_granted_by = 307;
	static readonly RULE_alterdefaultprivilegesstmt = 308;
	static readonly RULE_defacloptionlist = 309;
	static readonly RULE_defacloption = 310;
	static readonly RULE_defaclaction = 311;
	static readonly RULE_defacl_privilege_target = 312;
	static readonly RULE_indexstmt = 313;
	static readonly RULE_opt_unique = 314;
	static readonly RULE_opt_concurrently = 315;
	static readonly RULE_opt_index_name = 316;
	static readonly RULE_access_method_clause = 317;
	static readonly RULE_index_params = 318;
	static readonly RULE_index_elem_options = 319;
	static readonly RULE_index_elem = 320;
	static readonly RULE_opt_include = 321;
	static readonly RULE_index_including_params = 322;
	static readonly RULE_opt_collate = 323;
	static readonly RULE_opt_class = 324;
	static readonly RULE_opt_asc_desc = 325;
	static readonly RULE_opt_nulls_order = 326;
	static readonly RULE_createfunctionstmt = 327;
	static readonly RULE_attrilist = 328;
	static readonly RULE_opt_or_replace = 329;
	static readonly RULE_func_args = 330;
	static readonly RULE_func_args_list = 331;
	static readonly RULE_routine_with_argtypes_list = 332;
	static readonly RULE_routine_with_argtypes = 333;
	static readonly RULE_procedure_with_argtypes_list = 334;
	static readonly RULE_procedure_with_argtypes = 335;
	static readonly RULE_function_with_argtypes_list = 336;
	static readonly RULE_function_with_argtypes = 337;
	static readonly RULE_func_args_with_defaults = 338;
	static readonly RULE_func_args_with_defaults_list = 339;
	static readonly RULE_func_arg = 340;
	static readonly RULE_arg_class = 341;
	static readonly RULE_param_name = 342;
	static readonly RULE_func_return = 343;
	static readonly RULE_func_type = 344;
	static readonly RULE_func_arg_with_default = 345;
	static readonly RULE_aggr_arg = 346;
	static readonly RULE_aggr_args = 347;
	static readonly RULE_aggr_args_list = 348;
	static readonly RULE_aggregate_with_argtypes = 349;
	static readonly RULE_aggregate_with_argtypes_list = 350;
	static readonly RULE_createfunc_opt_list = 351;
	static readonly RULE_common_func_opt_item = 352;
	static readonly RULE_createfunc_opt_item = 353;
	static readonly RULE_transform_type_list = 354;
	static readonly RULE_opt_definition = 355;
	static readonly RULE_table_func_column = 356;
	static readonly RULE_table_func_column_list = 357;
	static readonly RULE_alterfunctionstmt = 358;
	static readonly RULE_alterFunctionTypeClause = 359;
	static readonly RULE_alterfunc_opt_list = 360;
	static readonly RULE_opt_restrict = 361;
	static readonly RULE_removefuncstmt = 362;
	static readonly RULE_removeaggrstmt = 363;
	static readonly RULE_removeoperstmt = 364;
	static readonly RULE_oper_argtypes = 365;
	static readonly RULE_any_operator = 366;
	static readonly RULE_operator_with_argtypes_list = 367;
	static readonly RULE_operator_with_argtypes = 368;
	static readonly RULE_dostmt = 369;
	static readonly RULE_dostmt_opt_list = 370;
	static readonly RULE_dostmt_opt_item = 371;
	static readonly RULE_createcaststmt = 372;
	static readonly RULE_cast_context = 373;
	static readonly RULE_opt_if_exists = 374;
	static readonly RULE_createtransformstmt = 375;
	static readonly RULE_transform_element_list = 376;
	static readonly RULE_reindexstmt = 377;
	static readonly RULE_reindex_target_type = 378;
	static readonly RULE_reindex_target_multitable = 379;
	static readonly RULE_reindex_option_list = 380;
	static readonly RULE_reindex_option_elem = 381;
	static readonly RULE_altertblspcstmt = 382;
	static readonly RULE_renamestmt = 383;
	static readonly RULE_opt_set_data = 384;
	static readonly RULE_alterobjectdependsstmt = 385;
	static readonly RULE_opt_no = 386;
	static readonly RULE_alterobjectschemastmt = 387;
	static readonly RULE_alteroperatorstmt = 388;
	static readonly RULE_operator_def_list = 389;
	static readonly RULE_operator_def_elem = 390;
	static readonly RULE_operator_def_arg = 391;
	static readonly RULE_altertypestmt = 392;
	static readonly RULE_alterownerstmt = 393;
	static readonly RULE_createpublicationstmt = 394;
	static readonly RULE_opt_publication_for_tables = 395;
	static readonly RULE_publication_for_tables = 396;
	static readonly RULE_alterpublicationstmt = 397;
	static readonly RULE_createsubscriptionstmt = 398;
	static readonly RULE_publication_name_list = 399;
	static readonly RULE_publication_name_item = 400;
	static readonly RULE_altersubscriptionstmt = 401;
	static readonly RULE_rulestmt = 402;
	static readonly RULE_ruleactionlist = 403;
	static readonly RULE_ruleactionmulti = 404;
	static readonly RULE_ruleactionstmt = 405;
	static readonly RULE_ruleactionstmtOrEmpty = 406;
	static readonly RULE_event = 407;
	static readonly RULE_opt_instead = 408;
	static readonly RULE_notifystmt = 409;
	static readonly RULE_notify_payload = 410;
	static readonly RULE_listenstmt = 411;
	static readonly RULE_unlistenstmt = 412;
	static readonly RULE_transactionstmt = 413;
	static readonly RULE_opt_transaction = 414;
	static readonly RULE_transaction_mode_item = 415;
	static readonly RULE_transaction_mode_list = 416;
	static readonly RULE_transaction_mode_list_or_empty = 417;
	static readonly RULE_opt_transaction_chain = 418;
	static readonly RULE_viewstmt = 419;
	static readonly RULE_opt_check_option = 420;
	static readonly RULE_loadstmt = 421;
	static readonly RULE_createdbstmt = 422;
	static readonly RULE_createdb_opt_list = 423;
	static readonly RULE_createdb_opt_items = 424;
	static readonly RULE_createdb_opt_item = 425;
	static readonly RULE_createdb_opt_name = 426;
	static readonly RULE_opt_equal = 427;
	static readonly RULE_alterdatabasestmt = 428;
	static readonly RULE_alterdatabasesetstmt = 429;
	static readonly RULE_drop_option_list = 430;
	static readonly RULE_drop_option = 431;
	static readonly RULE_altercollationstmt = 432;
	static readonly RULE_altersystemstmt = 433;
	static readonly RULE_createdomainstmt = 434;
	static readonly RULE_alterdomainstmt = 435;
	static readonly RULE_opt_as = 436;
	static readonly RULE_altertsdictionarystmt = 437;
	static readonly RULE_altertsconfigurationstmt = 438;
	static readonly RULE_any_with = 439;
	static readonly RULE_createconversionstmt = 440;
	static readonly RULE_clusterstmt = 441;
	static readonly RULE_opt_verbose_list = 442;
	static readonly RULE_cluster_index_specification = 443;
	static readonly RULE_vacuumstmt = 444;
	static readonly RULE_analyzestmt = 445;
	static readonly RULE_vac_analyze_option_list = 446;
	static readonly RULE_analyze_keyword = 447;
	static readonly RULE_vac_analyze_option_elem = 448;
	static readonly RULE_vac_analyze_option_name = 449;
	static readonly RULE_vac_analyze_option_arg = 450;
	static readonly RULE_opt_analyze = 451;
	static readonly RULE_analyze_options_list = 452;
	static readonly RULE_analyze_option_elem = 453;
	static readonly RULE_opt_verbose = 454;
	static readonly RULE_opt_skiplock = 455;
	static readonly RULE_opt_buffer_usage_limit = 456;
	static readonly RULE_opt_full = 457;
	static readonly RULE_opt_freeze = 458;
	static readonly RULE_opt_name_list = 459;
	static readonly RULE_vacuum_relation = 460;
	static readonly RULE_vacuum_relation_list = 461;
	static readonly RULE_opt_vacuum_relation_list = 462;
	static readonly RULE_explainstmt = 463;
	static readonly RULE_explainablestmt = 464;
	static readonly RULE_explain_option_list = 465;
	static readonly RULE_explain_option_elem = 466;
	static readonly RULE_explain_option_name = 467;
	static readonly RULE_explain_option_arg = 468;
	static readonly RULE_preparestmt = 469;
	static readonly RULE_prep_type_clause = 470;
	static readonly RULE_preparablestmt = 471;
	static readonly RULE_executestmt = 472;
	static readonly RULE_execute_param_clause = 473;
	static readonly RULE_deallocatestmt = 474;
	static readonly RULE_insertstmt = 475;
	static readonly RULE_insert_target = 476;
	static readonly RULE_insert_rest = 477;
	static readonly RULE_override_kind = 478;
	static readonly RULE_insert_column_list = 479;
	static readonly RULE_insert_column_item = 480;
	static readonly RULE_opt_on_conflict = 481;
	static readonly RULE_opt_conf_expr = 482;
	static readonly RULE_returning_clause = 483;
	static readonly RULE_deletestmt = 484;
	static readonly RULE_using_clause = 485;
	static readonly RULE_lockstmt = 486;
	static readonly RULE_opt_lock = 487;
	static readonly RULE_lock_type = 488;
	static readonly RULE_opt_nowait = 489;
	static readonly RULE_opt_nowait_or_skip = 490;
	static readonly RULE_updatestmt = 491;
	static readonly RULE_set_clause_list = 492;
	static readonly RULE_set_clause = 493;
	static readonly RULE_set_target = 494;
	static readonly RULE_set_target_list = 495;
	static readonly RULE_declarecursorstmt = 496;
	static readonly RULE_cursor_name = 497;
	static readonly RULE_cursor_options = 498;
	static readonly RULE_opt_hold = 499;
	static readonly RULE_selectstmt = 500;
	static readonly RULE_select_with_parens = 501;
	static readonly RULE_select_no_parens = 502;
	static readonly RULE_select_clause = 503;
	static readonly RULE_simple_select = 504;
	static readonly RULE_set_operator = 505;
	static readonly RULE_set_operator_with_all_or_distinct = 506;
	static readonly RULE_with_clause = 507;
	static readonly RULE_cte_list = 508;
	static readonly RULE_common_table_expr = 509;
	static readonly RULE_search_cluase = 510;
	static readonly RULE_cycle_cluase = 511;
	static readonly RULE_opt_materialized = 512;
	static readonly RULE_opt_with_clause = 513;
	static readonly RULE_into_clause = 514;
	static readonly RULE_opt_strict = 515;
	static readonly RULE_opttempTableName = 516;
	static readonly RULE_opt_table = 517;
	static readonly RULE_all_or_distinct = 518;
	static readonly RULE_distinct_clause = 519;
	static readonly RULE_opt_all_clause = 520;
	static readonly RULE_opt_sort_clause = 521;
	static readonly RULE_sort_clause = 522;
	static readonly RULE_sortby_list = 523;
	static readonly RULE_sortby = 524;
	static readonly RULE_select_limit = 525;
	static readonly RULE_opt_select_limit = 526;
	static readonly RULE_limit_clause = 527;
	static readonly RULE_fetch_clause = 528;
	static readonly RULE_offset_clause = 529;
	static readonly RULE_select_limit_value = 530;
	static readonly RULE_select_offset_value = 531;
	static readonly RULE_select_fetch_first_value = 532;
	static readonly RULE_i_or_f_const = 533;
	static readonly RULE_row_or_rows = 534;
	static readonly RULE_first_or_next = 535;
	static readonly RULE_group_clause = 536;
	static readonly RULE_group_by_list = 537;
	static readonly RULE_group_by_item = 538;
	static readonly RULE_empty_grouping_set = 539;
	static readonly RULE_rollup_clause = 540;
	static readonly RULE_cube_clause = 541;
	static readonly RULE_grouping_sets_clause = 542;
	static readonly RULE_having_clause = 543;
	static readonly RULE_for_locking_clause = 544;
	static readonly RULE_opt_for_locking_clause = 545;
	static readonly RULE_for_locking_items = 546;
	static readonly RULE_for_locking_item = 547;
	static readonly RULE_for_locking_strength = 548;
	static readonly RULE_locked_rels_list = 549;
	static readonly RULE_values_clause = 550;
	static readonly RULE_from_clause = 551;
	static readonly RULE_from_list = 552;
	static readonly RULE_table_ref = 553;
	static readonly RULE_alias_clause = 554;
	static readonly RULE_opt_alias_clause = 555;
	static readonly RULE_func_alias_clause = 556;
	static readonly RULE_join_type = 557;
	static readonly RULE_join_qual = 558;
	static readonly RULE_relation_expr = 559;
	static readonly RULE_view_relation_expr = 560;
	static readonly RULE_publication_relation_expr = 561;
	static readonly RULE_relation_expr_list = 562;
	static readonly RULE_publication_relation_expr_list = 563;
	static readonly RULE_relation_expr_opt_alias = 564;
	static readonly RULE_tablesample_clause = 565;
	static readonly RULE_opt_repeatable_clause = 566;
	static readonly RULE_func_table = 567;
	static readonly RULE_rowsfrom_item = 568;
	static readonly RULE_rowsfrom_list = 569;
	static readonly RULE_opt_col_def_list = 570;
	static readonly RULE_opt_ordinality = 571;
	static readonly RULE_where_clause = 572;
	static readonly RULE_where_or_current_clause = 573;
	static readonly RULE_opttablefuncelementlist = 574;
	static readonly RULE_tablefuncelementlist = 575;
	static readonly RULE_tablefuncelement = 576;
	static readonly RULE_xmltable = 577;
	static readonly RULE_xmltable_column_list = 578;
	static readonly RULE_xmltable_column_el = 579;
	static readonly RULE_xmltable_column_option_list = 580;
	static readonly RULE_xmltable_column_option_el = 581;
	static readonly RULE_xml_namespace_list = 582;
	static readonly RULE_xml_namespace_el = 583;
	static readonly RULE_typename = 584;
	static readonly RULE_opt_array_bounds = 585;
	static readonly RULE_simpletypename = 586;
	static readonly RULE_consttypename = 587;
	static readonly RULE_generictype = 588;
	static readonly RULE_opt_type_modifiers = 589;
	static readonly RULE_numeric = 590;
	static readonly RULE_opt_float = 591;
	static readonly RULE_bit = 592;
	static readonly RULE_constbit = 593;
	static readonly RULE_bitwithlength = 594;
	static readonly RULE_bitwithoutlength = 595;
	static readonly RULE_character = 596;
	static readonly RULE_constcharacter = 597;
	static readonly RULE_character_c = 598;
	static readonly RULE_opt_varying = 599;
	static readonly RULE_constdatetime = 600;
	static readonly RULE_constinterval = 601;
	static readonly RULE_opt_timezone = 602;
	static readonly RULE_opt_interval = 603;
	static readonly RULE_interval_second = 604;
	static readonly RULE_opt_escape = 605;
	static readonly RULE_a_expr = 606;
	static readonly RULE_a_expr_qual = 607;
	static readonly RULE_a_expr_lessless = 608;
	static readonly RULE_a_expr_or = 609;
	static readonly RULE_a_expr_and = 610;
	static readonly RULE_a_expr_in = 611;
	static readonly RULE_a_expr_unary_not = 612;
	static readonly RULE_a_expr_isnull = 613;
	static readonly RULE_a_expr_is_not = 614;
	static readonly RULE_a_expr_compare = 615;
	static readonly RULE_a_expr_like = 616;
	static readonly RULE_a_expr_qual_op = 617;
	static readonly RULE_a_expr_unary_qualop = 618;
	static readonly RULE_a_expr_add = 619;
	static readonly RULE_a_expr_mul = 620;
	static readonly RULE_a_expr_caret = 621;
	static readonly RULE_a_expr_unary_sign = 622;
	static readonly RULE_a_expr_at_time_zone = 623;
	static readonly RULE_a_expr_collate = 624;
	static readonly RULE_a_expr_typecast = 625;
	static readonly RULE_b_expr = 626;
	static readonly RULE_c_expr = 627;
	static readonly RULE_plsqlvariablename = 628;
	static readonly RULE_func_application = 629;
	static readonly RULE_func_expr = 630;
	static readonly RULE_func_expr_windowless = 631;
	static readonly RULE_func_expr_common_subexpr = 632;
	static readonly RULE_xml_root_version = 633;
	static readonly RULE_opt_xml_root_standalone = 634;
	static readonly RULE_xml_attributes = 635;
	static readonly RULE_xml_attribute_list = 636;
	static readonly RULE_xml_attribute_el = 637;
	static readonly RULE_document_or_content = 638;
	static readonly RULE_xml_whitespace_option = 639;
	static readonly RULE_xmlexists_argument = 640;
	static readonly RULE_xml_passing_mech = 641;
	static readonly RULE_within_group_clause = 642;
	static readonly RULE_filter_clause = 643;
	static readonly RULE_window_clause = 644;
	static readonly RULE_window_definition_list = 645;
	static readonly RULE_window_definition = 646;
	static readonly RULE_over_clause = 647;
	static readonly RULE_window_specification = 648;
	static readonly RULE_opt_existing_window_name = 649;
	static readonly RULE_opt_partition_clause = 650;
	static readonly RULE_opt_frame_clause = 651;
	static readonly RULE_frame_extent = 652;
	static readonly RULE_frame_bound = 653;
	static readonly RULE_opt_window_exclusion_clause = 654;
	static readonly RULE_row = 655;
	static readonly RULE_explicit_row = 656;
	static readonly RULE_implicit_row = 657;
	static readonly RULE_sub_type = 658;
	static readonly RULE_all_op = 659;
	static readonly RULE_mathop = 660;
	static readonly RULE_qual_op = 661;
	static readonly RULE_qual_all_op = 662;
	static readonly RULE_subquery_Op = 663;
	static readonly RULE_expr_list = 664;
	static readonly RULE_column_expr_list_noparen = 665;
	static readonly RULE_column_expr_list = 666;
	static readonly RULE_column_expr = 667;
	static readonly RULE_column_expr_noparen = 668;
	static readonly RULE_func_arg_list = 669;
	static readonly RULE_func_arg_expr = 670;
	static readonly RULE_type_list = 671;
	static readonly RULE_array_expr = 672;
	static readonly RULE_array_expr_list = 673;
	static readonly RULE_extract_list = 674;
	static readonly RULE_extract_arg = 675;
	static readonly RULE_unicode_normal_form = 676;
	static readonly RULE_overlay_list = 677;
	static readonly RULE_position_list = 678;
	static readonly RULE_substr_list = 679;
	static readonly RULE_trim_list = 680;
	static readonly RULE_in_expr = 681;
	static readonly RULE_case_expr = 682;
	static readonly RULE_when_clause_list = 683;
	static readonly RULE_when_clause = 684;
	static readonly RULE_case_default = 685;
	static readonly RULE_case_arg = 686;
	static readonly RULE_columnref = 687;
	static readonly RULE_indirection_el = 688;
	static readonly RULE_opt_slice_bound = 689;
	static readonly RULE_indirection = 690;
	static readonly RULE_opt_indirection = 691;
	static readonly RULE_opt_target_list = 692;
	static readonly RULE_target_list = 693;
	static readonly RULE_target_el = 694;
	static readonly RULE_qualified_name_list = 695;
	static readonly RULE_table_name_list = 696;
	static readonly RULE_schema_name_list = 697;
	static readonly RULE_database_nameList = 698;
	static readonly RULE_procedure_name_list = 699;
	static readonly RULE_tablespace_name_create = 700;
	static readonly RULE_tablespace_name = 701;
	static readonly RULE_table_name_create = 702;
	static readonly RULE_table_name = 703;
	static readonly RULE_view_name_create = 704;
	static readonly RULE_view_name = 705;
	static readonly RULE_qualified_name = 706;
	static readonly RULE_tablespace_name_list = 707;
	static readonly RULE_name_list = 708;
	static readonly RULE_database_name_create = 709;
	static readonly RULE_database_name = 710;
	static readonly RULE_schema_name = 711;
	static readonly RULE_routine_name_create = 712;
	static readonly RULE_routine_name = 713;
	static readonly RULE_procedure_name = 714;
	static readonly RULE_procedure_name_create = 715;
	static readonly RULE_column_name = 716;
	static readonly RULE_column_name_create = 717;
	static readonly RULE_name = 718;
	static readonly RULE_attr_name = 719;
	static readonly RULE_file_name = 720;
	static readonly RULE_function_name_create = 721;
	static readonly RULE_function_name = 722;
	static readonly RULE_usual_name = 723;
	static readonly RULE_aexprconst = 724;
	static readonly RULE_xconst = 725;
	static readonly RULE_bconst = 726;
	static readonly RULE_fconst = 727;
	static readonly RULE_iconst = 728;
	static readonly RULE_sconst = 729;
	static readonly RULE_anysconst = 730;
	static readonly RULE_opt_uescape = 731;
	static readonly RULE_signediconst = 732;
	static readonly RULE_groupname = 733;
	static readonly RULE_roleid = 734;
	static readonly RULE_rolespec = 735;
	static readonly RULE_role_list = 736;
	static readonly RULE_colid = 737;
	static readonly RULE_index_method_choices = 738;
	static readonly RULE_exclude_element = 739;
	static readonly RULE_index_paramenters = 740;
	static readonly RULE_type_function_name = 741;
	static readonly RULE_type_usual_name = 742;
	static readonly RULE_nonreservedword_column = 743;
	static readonly RULE_nonreservedword = 744;
	static readonly RULE_collabel = 745;
	static readonly RULE_identifier = 746;
	static readonly RULE_plsqlidentifier = 747;
	static readonly RULE_unreserved_keyword = 748;
	static readonly RULE_col_name_keyword = 749;
	static readonly RULE_type_func_name_keyword = 750;
	static readonly RULE_reserved_keyword = 751;
	static readonly RULE_pl_function = 752;
	static readonly RULE_comp_options = 753;
	static readonly RULE_comp_option = 754;
	static readonly RULE_sharp = 755;
	static readonly RULE_option_value = 756;
	static readonly RULE_opt_semi = 757;
	static readonly RULE_pl_block = 758;
	static readonly RULE_decl_sect = 759;
	static readonly RULE_decl_start = 760;
	static readonly RULE_decl_stmts = 761;
	static readonly RULE_label_decl = 762;
	static readonly RULE_decl_stmt = 763;
	static readonly RULE_decl_statement = 764;
	static readonly RULE_opt_scrollable = 765;
	static readonly RULE_decl_cursor_query = 766;
	static readonly RULE_decl_cursor_args = 767;
	static readonly RULE_decl_cursor_arglist = 768;
	static readonly RULE_decl_cursor_arg = 769;
	static readonly RULE_decl_is_for = 770;
	static readonly RULE_decl_aliasitem = 771;
	static readonly RULE_decl_varname = 772;
	static readonly RULE_decl_const = 773;
	static readonly RULE_decl_datatype = 774;
	static readonly RULE_decl_collate = 775;
	static readonly RULE_decl_notnull = 776;
	static readonly RULE_decl_defval = 777;
	static readonly RULE_decl_defkey = 778;
	static readonly RULE_assign_operator = 779;
	static readonly RULE_proc_sect = 780;
	static readonly RULE_proc_stmt = 781;
	static readonly RULE_stmt_perform = 782;
	static readonly RULE_stmt_call = 783;
	static readonly RULE_opt_expr_list = 784;
	static readonly RULE_stmt_assign = 785;
	static readonly RULE_stmt_getdiag = 786;
	static readonly RULE_getdiag_area_opt = 787;
	static readonly RULE_getdiag_list = 788;
	static readonly RULE_getdiag_list_item = 789;
	static readonly RULE_getdiag_item = 790;
	static readonly RULE_getdiag_target = 791;
	static readonly RULE_assign_var = 792;
	static readonly RULE_stmt_if = 793;
	static readonly RULE_stmt_elsifs = 794;
	static readonly RULE_stmt_else = 795;
	static readonly RULE_stmt_case = 796;
	static readonly RULE_opt_expr_until_when = 797;
	static readonly RULE_case_when_list = 798;
	static readonly RULE_case_when = 799;
	static readonly RULE_opt_case_else = 800;
	static readonly RULE_stmt_loop = 801;
	static readonly RULE_stmt_while = 802;
	static readonly RULE_stmt_for = 803;
	static readonly RULE_for_control = 804;
	static readonly RULE_opt_for_using_expression = 805;
	static readonly RULE_opt_cursor_parameters = 806;
	static readonly RULE_opt_reverse = 807;
	static readonly RULE_opt_by_expression = 808;
	static readonly RULE_for_variable = 809;
	static readonly RULE_stmt_foreach_a = 810;
	static readonly RULE_foreach_slice = 811;
	static readonly RULE_stmt_exit = 812;
	static readonly RULE_exit_type = 813;
	static readonly RULE_stmt_return = 814;
	static readonly RULE_opt_return_result = 815;
	static readonly RULE_stmt_raise = 816;
	static readonly RULE_opt_stmt_raise_level = 817;
	static readonly RULE_opt_raise_list = 818;
	static readonly RULE_opt_raise_using = 819;
	static readonly RULE_opt_raise_using_elem = 820;
	static readonly RULE_opt_raise_using_elem_list = 821;
	static readonly RULE_stmt_assert = 822;
	static readonly RULE_opt_stmt_assert_message = 823;
	static readonly RULE_loop_body = 824;
	static readonly RULE_stmt_execsql = 825;
	static readonly RULE_stmt_dynexecute = 826;
	static readonly RULE_opt_execute_using = 827;
	static readonly RULE_opt_execute_using_list = 828;
	static readonly RULE_opt_execute_into = 829;
	static readonly RULE_stmt_open = 830;
	static readonly RULE_opt_open_bound_list_item = 831;
	static readonly RULE_opt_open_bound_list = 832;
	static readonly RULE_opt_open_using = 833;
	static readonly RULE_opt_scroll_option = 834;
	static readonly RULE_opt_scroll_option_no = 835;
	static readonly RULE_stmt_fetch = 836;
	static readonly RULE_into_target = 837;
	static readonly RULE_opt_cursor_from = 838;
	static readonly RULE_opt_fetch_direction = 839;
	static readonly RULE_stmt_move = 840;
	static readonly RULE_mergestmt = 841;
	static readonly RULE_data_source = 842;
	static readonly RULE_join_condition = 843;
	static readonly RULE_merge_when_clause = 844;
	static readonly RULE_merge_insert = 845;
	static readonly RULE_merge_update = 846;
	static readonly RULE_default_values_or_values = 847;
	static readonly RULE_exprofdefaultlist = 848;
	static readonly RULE_exprofdefault = 849;
	static readonly RULE_stmt_close = 850;
	static readonly RULE_stmt_null = 851;
	static readonly RULE_stmt_commit = 852;
	static readonly RULE_stmt_rollback = 853;
	static readonly RULE_plsql_opt_transaction_chain = 854;
	static readonly RULE_stmt_set = 855;
	static readonly RULE_cursor_variable = 856;
	static readonly RULE_exception_sect = 857;
	static readonly RULE_proc_exceptions = 858;
	static readonly RULE_proc_exception = 859;
	static readonly RULE_proc_conditions = 860;
	static readonly RULE_proc_condition = 861;
	static readonly RULE_opt_block_label = 862;
	static readonly RULE_opt_loop_label = 863;
	static readonly RULE_opt_label = 864;
	static readonly RULE_opt_exitcond = 865;
	static readonly RULE_any_identifier = 866;
	static readonly RULE_plsql_unreserved_keyword = 867;
	static readonly RULE_sql_expression = 868;
	static readonly RULE_expr_until_then = 869;
	static readonly RULE_expr_until_semi = 870;
	static readonly RULE_expr_until_rightbracket = 871;
	static readonly RULE_expr_until_loop = 872;
	static readonly RULE_make_execsql_stmt = 873;
	static readonly RULE_opt_returning_clause_into = 874;
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
	plsqlroot(): PlsqlrootContext;
	singleStmt(): SingleStmtContext;
	stmt(): StmtContext;
	plsqlconsolecommand(): PlsqlconsolecommandContext;
	callstmt(): CallstmtContext;
	createrolestmt(): CreaterolestmtContext;
	opt_with(): Opt_withContext;
	optrolelist(): OptrolelistContext;
	alteroptrolelist(): AlteroptrolelistContext;
	alteroptroleelem(): AlteroptroleelemContext;
	createoptroleelem(): CreateoptroleelemContext;
	createuserstmt(): CreateuserstmtContext;
	alterrolestmt(): AlterrolestmtContext;
	opt_in_database(): Opt_in_databaseContext;
	alterrolesetstmt(): AlterrolesetstmtContext;
	alterroutinestmt(): AlterroutinestmtContext;
	alter_routine_cluase(): Alter_routine_cluaseContext;
	routine_action_list(): Routine_action_listContext;
	routine_action(): Routine_actionContext;
	creategroupstmt(): CreategroupstmtContext;
	altergroupstmt(): AltergroupstmtContext;
	add_drop(): Add_dropContext;
	createschemastmt(): CreateschemastmtContext;
	schema_name_create(): Schema_name_createContext;
	optschemaeltlist(): OptschemaeltlistContext;
	schema_stmt(): Schema_stmtContext;
	variablesetstmt(): VariablesetstmtContext;
	set_rest(): Set_restContext;
	generic_set(): Generic_setContext;
	set_rest_more(): Set_rest_moreContext;
	var_name(): Var_nameContext;
	var_list(): Var_listContext;
	var_value(): Var_valueContext;
	iso_level(): Iso_levelContext;
	opt_boolean_or_string_column(): Opt_boolean_or_string_columnContext;
	opt_boolean_or_string(): Opt_boolean_or_stringContext;
	zone_value(): Zone_valueContext;
	opt_encoding(): Opt_encodingContext;
	nonreservedword_or_sconst_column(): Nonreservedword_or_sconst_columnContext;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext;
	variableresetstmt(): VariableresetstmtContext;
	reset_rest(): Reset_restContext;
	generic_reset(): Generic_resetContext;
	setresetclause(): SetresetclauseContext;
	functionsetresetclause(): FunctionsetresetclauseContext;
	variableshowstmt(): VariableshowstmtContext;
	constraintssetstmt(): ConstraintssetstmtContext;
	constraints_set_list(): Constraints_set_listContext;
	constraints_set_mode(): Constraints_set_modeContext;
	checkpointstmt(): CheckpointstmtContext;
	discardstmt(): DiscardstmtContext;
	altertablestmt(): AltertablestmtContext;
	alter_table_cmds(): Alter_table_cmdsContext;
	partition_bound_spec(): Partition_bound_specContext;
	partition_bound_cluase(): Partition_bound_cluaseContext;
	partition_bound_choose(): Partition_bound_chooseContext;
	partition_with_cluase(): Partition_with_cluaseContext;
	partition_cmd(): Partition_cmdContext;
	index_partition_cmd(): Index_partition_cmdContext;
	alter_table_cmd(): Alter_table_cmdContext;
	alter_column_default(): Alter_column_defaultContext;
	opt_drop_behavior(): Opt_drop_behaviorContext;
	opt_collate_clause(): Opt_collate_clauseContext;
	alter_using(): Alter_usingContext;
	replica_identity(): Replica_identityContext;
	reloptions(): ReloptionsContext;
	opt_reloptions(): Opt_reloptionsContext;
	reloption_list(): Reloption_listContext;
	reloption_elem(): Reloption_elemContext;
	alter_identity_column_option_list(): Alter_identity_column_option_listContext;
	alter_identity_column_option(): Alter_identity_column_optionContext;
	partitionboundspec(): PartitionboundspecContext;
	hash_partbound_elem(): Hash_partbound_elemContext;
	hash_partbound(): Hash_partboundContext;
	altercompositetypestmt(): AltercompositetypestmtContext;
	alter_type_cmds(): Alter_type_cmdsContext;
	alter_type_cmd(): Alter_type_cmdContext;
	closeportalstmt(): CloseportalstmtContext;
	copystmt(): CopystmtContext;
	copy_from(): Copy_fromContext;
	opt_program(): Opt_programContext;
	copy_file_name(): Copy_file_nameContext;
	copy_options(): Copy_optionsContext;
	copy_opt_list(): Copy_opt_listContext;
	copy_opt_item(): Copy_opt_itemContext;
	opt_binary(): Opt_binaryContext;
	copy_delimiter(): Copy_delimiterContext;
	opt_using(): Opt_usingContext;
	copy_generic_opt_list(): Copy_generic_opt_listContext;
	copy_generic_opt_elem(): Copy_generic_opt_elemContext;
	copy_generic_opt_arg(): Copy_generic_opt_argContext;
	copy_generic_opt_arg_list(): Copy_generic_opt_arg_listContext;
	copy_generic_opt_arg_list_item(): Copy_generic_opt_arg_list_itemContext;
	createstmt(): CreatestmtContext;
	opttemp(): OpttempContext;
	table_column_list(): Table_column_listContext;
	opttableelementlist(): OpttableelementlistContext;
	opttypedtableelementlist(): OpttypedtableelementlistContext;
	tableelementlist(): TableelementlistContext;
	typedtableelementlist(): TypedtableelementlistContext;
	tableelement(): TableelementContext;
	typedtableelement(): TypedtableelementContext;
	column_def(): Column_defContext;
	compressionCluase(): CompressionCluaseContext;
	storageCluase(): StorageCluaseContext;
	columnOptions(): ColumnOptionsContext;
	colquallist(): ColquallistContext;
	colconstraint(): ColconstraintContext;
	colconstraintelem(): ColconstraintelemContext;
	nulls_distinct(): Nulls_distinctContext;
	generated_when(): Generated_whenContext;
	deferrable_trigger(): Deferrable_triggerContext;
	initially_trigger(): Initially_triggerContext;
	tablelikeclause(): TablelikeclauseContext;
	tablelikeoptionlist(): TablelikeoptionlistContext;
	tablelikeoption(): TablelikeoptionContext;
	tableconstraint(): TableconstraintContext;
	constraintelem(): ConstraintelemContext;
	opt_no_inherit(): Opt_no_inheritContext;
	opt_column_list(): Opt_column_listContext;
	opt_column_list_create(): Opt_column_list_createContext;
	column_list(): Column_listContext;
	column_list_create(): Column_list_createContext;
	opt_c_include(): Opt_c_includeContext;
	key_match(): Key_matchContext;
	exclusionconstraintlist(): ExclusionconstraintlistContext;
	exclusionconstraintelem(): ExclusionconstraintelemContext;
	exclusionwhereclause(): ExclusionwhereclauseContext;
	key_actions(): Key_actionsContext;
	key_update(): Key_updateContext;
	key_delete(): Key_deleteContext;
	key_action(): Key_actionContext;
	optinherit(): OptinheritContext;
	optpartitionspec(): OptpartitionspecContext;
	partitionspec(): PartitionspecContext;
	part_params(): Part_paramsContext;
	part_elem(): Part_elemContext;
	table_access_method_clause(): Table_access_method_clauseContext;
	optwith(): OptwithContext;
	oncommitoption(): OncommitoptionContext;
	opttablespace(): OpttablespaceContext;
	index_paramenters_create(): Index_paramenters_createContext;
	optconstablespace(): OptconstablespaceContext;
	existingindex(): ExistingindexContext;
	createstatsstmt(): CreatestatsstmtContext;
	alterstatsstmt(): AlterstatsstmtContext;
	createasstmt(): CreateasstmtContext;
	create_as_target(): Create_as_targetContext;
	opt_with_data(): Opt_with_dataContext;
	creatematviewstmt(): CreatematviewstmtContext;
	create_mv_target(): Create_mv_targetContext;
	optnolog(): OptnologContext;
	refreshmatviewstmt(): RefreshmatviewstmtContext;
	createseqstmt(): CreateseqstmtContext;
	alterseqstmt(): AlterseqstmtContext;
	optseqoptlist(): OptseqoptlistContext;
	optparenthesizedseqoptlist(): OptparenthesizedseqoptlistContext;
	seqoptlist(): SeqoptlistContext;
	seqoptelem(): SeqoptelemContext;
	opt_by(): Opt_byContext;
	numericonly(): NumericonlyContext;
	numericonly_list(): Numericonly_listContext;
	createplangstmt(): CreateplangstmtContext;
	opt_trusted(): Opt_trustedContext;
	handler_name(): Handler_nameContext;
	opt_inline_handler(): Opt_inline_handlerContext;
	validator_clause(): Validator_clauseContext;
	opt_validator(): Opt_validatorContext;
	opt_procedural(): Opt_proceduralContext;
	createtablespacestmt(): CreatetablespacestmtContext;
	opttablespaceowner(): OpttablespaceownerContext;
	createextensionstmt(): CreateextensionstmtContext;
	create_extension_opt_list(): Create_extension_opt_listContext;
	create_extension_opt_item(): Create_extension_opt_itemContext;
	alterextensionstmt(): AlterextensionstmtContext;
	alter_extension_opt_list(): Alter_extension_opt_listContext;
	alter_extension_opt_item(): Alter_extension_opt_itemContext;
	alterextensioncontentsstmt(): AlterextensioncontentsstmtContext;
	createfdwstmt(): CreatefdwstmtContext;
	fdw_option(): Fdw_optionContext;
	fdw_options(): Fdw_optionsContext;
	opt_fdw_options(): Opt_fdw_optionsContext;
	alterfdwstmt(): AlterfdwstmtContext;
	create_generic_options(): Create_generic_optionsContext;
	generic_option_list(): Generic_option_listContext;
	alter_generic_options(): Alter_generic_optionsContext;
	alter_generic_option_list(): Alter_generic_option_listContext;
	alter_generic_option_elem(): Alter_generic_option_elemContext;
	generic_option_elem(): Generic_option_elemContext;
	generic_option_name(): Generic_option_nameContext;
	generic_option_arg(): Generic_option_argContext;
	createforeignserverstmt(): CreateforeignserverstmtContext;
	opt_type(): Opt_typeContext;
	foreign_server_version(): Foreign_server_versionContext;
	opt_foreign_server_version(): Opt_foreign_server_versionContext;
	alterforeignserverstmt(): AlterforeignserverstmtContext;
	createforeigntablestmt(): CreateforeigntablestmtContext;
	importforeignschemastmt(): ImportforeignschemastmtContext;
	import_qualification_type(): Import_qualification_typeContext;
	import_qualification(): Import_qualificationContext;
	createusermappingstmt(): CreateusermappingstmtContext;
	auth_ident(): Auth_identContext;
	alterusermappingstmt(): AlterusermappingstmtContext;
	createpolicystmt(): CreatepolicystmtContext;
	alterpolicystmt(): AlterpolicystmtContext;
	alterprocedurestmt(): AlterprocedurestmtContext;
	procedure_cluase(): Procedure_cluaseContext;
	procedure_action(): Procedure_actionContext;
	rowsecurityoptionalexpr(): RowsecurityoptionalexprContext;
	rowsecurityoptionalwithcheck(): RowsecurityoptionalwithcheckContext;
	rowsecuritydefaulttorole(): RowsecuritydefaulttoroleContext;
	rowsecurityoptionaltorole(): RowsecurityoptionaltoroleContext;
	rowsecuritydefaultpermissive(): RowsecuritydefaultpermissiveContext;
	rowsecuritydefaultforcmd(): RowsecuritydefaultforcmdContext;
	row_security_cmd(): Row_security_cmdContext;
	createamstmt(): CreateamstmtContext;
	am_type(): Am_typeContext;
	createtrigstmt(): CreatetrigstmtContext;
	triggeractiontime(): TriggeractiontimeContext;
	foreachrow(): ForeachrowContext;
	roworstatment(): RoworstatmentContext;
	triggerevents(): TriggereventsContext;
	triggeroneevent(): TriggeroneeventContext;
	triggerreferencing(): TriggerreferencingContext;
	triggertransitions(): TriggertransitionsContext;
	triggertransition(): TriggertransitionContext;
	transitionoldornew(): TransitionoldornewContext;
	transitionrowortable(): TransitionrowortableContext;
	transitionrelname(): TransitionrelnameContext;
	triggerforspec(): TriggerforspecContext;
	triggerforopteach(): TriggerforopteachContext;
	triggerfortype(): TriggerfortypeContext;
	triggerwhen(): TriggerwhenContext;
	function_or_procedure(): Function_or_procedureContext;
	triggerfuncargs(): TriggerfuncargsContext;
	triggerfuncarg(): TriggerfuncargContext;
	optconstrfromtable(): OptconstrfromtableContext;
	constraintattributespec(): ConstraintattributespecContext;
	constraintattributeElem(): ConstraintattributeElemContext;
	createeventtrigstmt(): CreateeventtrigstmtContext;
	event_trigger_when_list(): Event_trigger_when_listContext;
	event_trigger_when_item(): Event_trigger_when_itemContext;
	event_trigger_value_list(): Event_trigger_value_listContext;
	altereventtrigstmt(): AltereventtrigstmtContext;
	enable_trigger(): Enable_triggerContext;
	createassertionstmt(): CreateassertionstmtContext;
	definestmt(): DefinestmtContext;
	definition(): DefinitionContext;
	def_list(): Def_listContext;
	def_elem(): Def_elemContext;
	def_arg(): Def_argContext;
	old_aggr_definition(): Old_aggr_definitionContext;
	old_aggr_list(): Old_aggr_listContext;
	old_aggr_elem(): Old_aggr_elemContext;
	opt_enum_val_list(): Opt_enum_val_listContext;
	enum_val_list(): Enum_val_listContext;
	alterenumstmt(): AlterenumstmtContext;
	opt_if_not_exists(): Opt_if_not_existsContext;
	createopclassstmt(): CreateopclassstmtContext;
	opclass_item_list(): Opclass_item_listContext;
	opclass_item(): Opclass_itemContext;
	opt_default(): Opt_defaultContext;
	opt_opfamily(): Opt_opfamilyContext;
	opclass_purpose(): Opclass_purposeContext;
	opt_recheck(): Opt_recheckContext;
	createopfamilystmt(): CreateopfamilystmtContext;
	alteropfamilystmt(): AlteropfamilystmtContext;
	opclass_drop_list(): Opclass_drop_listContext;
	opclass_drop(): Opclass_dropContext;
	reassignownedstmt(): ReassignownedstmtContext;
	dropstmt(): DropstmtContext;
	view_nameList(): View_nameListContext;
	object_type_any_name(): Object_type_any_nameContext;
	object_type_name(): Object_type_nameContext;
	object_type_name_on_any_name(): Object_type_name_on_any_nameContext;
	any_name_list(): Any_name_listContext;
	relation_column_name(): Relation_column_nameContext;
	relation_name(): Relation_nameContext;
	any_name(): Any_nameContext;
	attrs(): AttrsContext;
	type_name_list(): Type_name_listContext;
	truncatestmt(): TruncatestmtContext;
	truncate_table(): Truncate_tableContext;
	commentstmt(): CommentstmtContext;
	comment_text(): Comment_textContext;
	seclabelstmt(): SeclabelstmtContext;
	opt_provider(): Opt_providerContext;
	security_label(): Security_labelContext;
	fetchstmt(): FetchstmtContext;
	fetch_args(): Fetch_argsContext;
	from_in(): From_inContext;
	opt_from_in(): Opt_from_inContext;
	grantstmt(): GrantstmtContext;
	revokestmt(): RevokestmtContext;
	privileges(): PrivilegesContext;
	beforeprivilegeselectlist(): BeforeprivilegeselectlistContext;
	beforeprivilegeselect(): BeforeprivilegeselectContext;
	privilege_list(): Privilege_listContext;
	privilege(): PrivilegeContext;
	privilege_target(): Privilege_targetContext;
	grantee_list(): Grantee_listContext;
	grantee(): GranteeContext;
	opt_grant_grant_option(): Opt_grant_grant_optionContext;
	grantrolestmt(): GrantrolestmtContext;
	revokerolestmt(): RevokerolestmtContext;
	opt_grant_admin_option(): Opt_grant_admin_optionContext;
	opt_granted_by(): Opt_granted_byContext;
	alterdefaultprivilegesstmt(): AlterdefaultprivilegesstmtContext;
	defacloptionlist(): DefacloptionlistContext;
	defacloption(): DefacloptionContext;
	defaclaction(): DefaclactionContext;
	defacl_privilege_target(): Defacl_privilege_targetContext;
	indexstmt(): IndexstmtContext;
	opt_unique(): Opt_uniqueContext;
	opt_concurrently(): Opt_concurrentlyContext;
	opt_index_name(): Opt_index_nameContext;
	access_method_clause(): Access_method_clauseContext;
	index_params(): Index_paramsContext;
	index_elem_options(): Index_elem_optionsContext;
	index_elem(): Index_elemContext;
	opt_include(): Opt_includeContext;
	index_including_params(): Index_including_paramsContext;
	opt_collate(): Opt_collateContext;
	opt_class(): Opt_classContext;
	opt_asc_desc(): Opt_asc_descContext;
	opt_nulls_order(): Opt_nulls_orderContext;
	createfunctionstmt(): CreatefunctionstmtContext;
	attrilist(): AttrilistContext;
	opt_or_replace(): Opt_or_replaceContext;
	func_args(): Func_argsContext;
	func_args_list(): Func_args_listContext;
	routine_with_argtypes_list(): Routine_with_argtypes_listContext;
	routine_with_argtypes(): Routine_with_argtypesContext;
	procedure_with_argtypes_list(): Procedure_with_argtypes_listContext;
	procedure_with_argtypes(): Procedure_with_argtypesContext;
	function_with_argtypes_list(): Function_with_argtypes_listContext;
	function_with_argtypes(): Function_with_argtypesContext;
	func_args_with_defaults(): Func_args_with_defaultsContext;
	func_args_with_defaults_list(): Func_args_with_defaults_listContext;
	func_arg(): Func_argContext;
	arg_class(): Arg_classContext;
	param_name(): Param_nameContext;
	func_return(): Func_returnContext;
	func_type(): Func_typeContext;
	func_arg_with_default(): Func_arg_with_defaultContext;
	aggr_arg(): Aggr_argContext;
	aggr_args(): Aggr_argsContext;
	aggr_args_list(): Aggr_args_listContext;
	aggregate_with_argtypes(): Aggregate_with_argtypesContext;
	aggregate_with_argtypes_list(): Aggregate_with_argtypes_listContext;
	createfunc_opt_list(): Createfunc_opt_listContext;
	common_func_opt_item(): Common_func_opt_itemContext;
	createfunc_opt_item(): Createfunc_opt_itemContext;
	transform_type_list(): Transform_type_listContext;
	opt_definition(): Opt_definitionContext;
	table_func_column(): Table_func_columnContext;
	table_func_column_list(): Table_func_column_listContext;
	alterfunctionstmt(): AlterfunctionstmtContext;
	alterFunctionTypeClause(): AlterFunctionTypeClauseContext;
	alterfunc_opt_list(): Alterfunc_opt_listContext;
	opt_restrict(): Opt_restrictContext;
	removefuncstmt(): RemovefuncstmtContext;
	removeaggrstmt(): RemoveaggrstmtContext;
	removeoperstmt(): RemoveoperstmtContext;
	oper_argtypes(): Oper_argtypesContext;
	any_operator(): Any_operatorContext;
	operator_with_argtypes_list(): Operator_with_argtypes_listContext;
	operator_with_argtypes(): Operator_with_argtypesContext;
	dostmt(): DostmtContext;
	dostmt_opt_list(): Dostmt_opt_listContext;
	dostmt_opt_item(): Dostmt_opt_itemContext;
	createcaststmt(): CreatecaststmtContext;
	cast_context(): Cast_contextContext;
	opt_if_exists(): Opt_if_existsContext;
	createtransformstmt(): CreatetransformstmtContext;
	transform_element_list(): Transform_element_listContext;
	reindexstmt(): ReindexstmtContext;
	reindex_target_type(): Reindex_target_typeContext;
	reindex_target_multitable(): Reindex_target_multitableContext;
	reindex_option_list(): Reindex_option_listContext;
	reindex_option_elem(): Reindex_option_elemContext;
	altertblspcstmt(): AltertblspcstmtContext;
	renamestmt(): RenamestmtContext;
	opt_set_data(): Opt_set_dataContext;
	alterobjectdependsstmt(): AlterobjectdependsstmtContext;
	opt_no(): Opt_noContext;
	alterobjectschemastmt(): AlterobjectschemastmtContext;
	alteroperatorstmt(): AlteroperatorstmtContext;
	operator_def_list(): Operator_def_listContext;
	operator_def_elem(): Operator_def_elemContext;
	operator_def_arg(): Operator_def_argContext;
	altertypestmt(): AltertypestmtContext;
	alterownerstmt(): AlterownerstmtContext;
	createpublicationstmt(): CreatepublicationstmtContext;
	opt_publication_for_tables(): Opt_publication_for_tablesContext;
	publication_for_tables(): Publication_for_tablesContext;
	alterpublicationstmt(): AlterpublicationstmtContext;
	createsubscriptionstmt(): CreatesubscriptionstmtContext;
	publication_name_list(): Publication_name_listContext;
	publication_name_item(): Publication_name_itemContext;
	altersubscriptionstmt(): AltersubscriptionstmtContext;
	rulestmt(): RulestmtContext;
	ruleactionlist(): RuleactionlistContext;
	ruleactionmulti(): RuleactionmultiContext;
	ruleactionstmt(): RuleactionstmtContext;
	ruleactionstmtOrEmpty(): RuleactionstmtOrEmptyContext;
	event(): EventContext;
	opt_instead(): Opt_insteadContext;
	notifystmt(): NotifystmtContext;
	notify_payload(): Notify_payloadContext;
	listenstmt(): ListenstmtContext;
	unlistenstmt(): UnlistenstmtContext;
	transactionstmt(): TransactionstmtContext;
	opt_transaction(): Opt_transactionContext;
	transaction_mode_item(): Transaction_mode_itemContext;
	transaction_mode_list(): Transaction_mode_listContext;
	transaction_mode_list_or_empty(): Transaction_mode_list_or_emptyContext;
	opt_transaction_chain(): Opt_transaction_chainContext;
	viewstmt(): ViewstmtContext;
	opt_check_option(): Opt_check_optionContext;
	loadstmt(): LoadstmtContext;
	createdbstmt(): CreatedbstmtContext;
	createdb_opt_list(): Createdb_opt_listContext;
	createdb_opt_items(): Createdb_opt_itemsContext;
	createdb_opt_item(): Createdb_opt_itemContext;
	createdb_opt_name(): Createdb_opt_nameContext;
	opt_equal(): Opt_equalContext;
	alterdatabasestmt(): AlterdatabasestmtContext;
	alterdatabasesetstmt(): AlterdatabasesetstmtContext;
	drop_option_list(): Drop_option_listContext;
	drop_option(): Drop_optionContext;
	altercollationstmt(): AltercollationstmtContext;
	altersystemstmt(): AltersystemstmtContext;
	createdomainstmt(): CreatedomainstmtContext;
	alterdomainstmt(): AlterdomainstmtContext;
	opt_as(): Opt_asContext;
	altertsdictionarystmt(): AltertsdictionarystmtContext;
	altertsconfigurationstmt(): AltertsconfigurationstmtContext;
	any_with(): Any_withContext;
	createconversionstmt(): CreateconversionstmtContext;
	clusterstmt(): ClusterstmtContext;
	opt_verbose_list(): Opt_verbose_listContext;
	cluster_index_specification(): Cluster_index_specificationContext;
	vacuumstmt(): VacuumstmtContext;
	analyzestmt(): AnalyzestmtContext;
	vac_analyze_option_list(): Vac_analyze_option_listContext;
	analyze_keyword(): Analyze_keywordContext;
	vac_analyze_option_elem(): Vac_analyze_option_elemContext;
	vac_analyze_option_name(): Vac_analyze_option_nameContext;
	vac_analyze_option_arg(): Vac_analyze_option_argContext;
	opt_analyze(): Opt_analyzeContext;
	analyze_options_list(): Analyze_options_listContext;
	analyze_option_elem(): Analyze_option_elemContext;
	opt_verbose(): Opt_verboseContext;
	opt_skiplock(): Opt_skiplockContext;
	opt_buffer_usage_limit(): Opt_buffer_usage_limitContext;
	opt_full(): Opt_fullContext;
	opt_freeze(): Opt_freezeContext;
	opt_name_list(): Opt_name_listContext;
	vacuum_relation(): Vacuum_relationContext;
	vacuum_relation_list(): Vacuum_relation_listContext;
	opt_vacuum_relation_list(): Opt_vacuum_relation_listContext;
	explainstmt(): ExplainstmtContext;
	explainablestmt(): ExplainablestmtContext;
	explain_option_list(): Explain_option_listContext;
	explain_option_elem(): Explain_option_elemContext;
	explain_option_name(): Explain_option_nameContext;
	explain_option_arg(): Explain_option_argContext;
	preparestmt(): PreparestmtContext;
	prep_type_clause(): Prep_type_clauseContext;
	preparablestmt(): PreparablestmtContext;
	executestmt(): ExecutestmtContext;
	execute_param_clause(): Execute_param_clauseContext;
	deallocatestmt(): DeallocatestmtContext;
	insertstmt(): InsertstmtContext;
	insert_target(): Insert_targetContext;
	insert_rest(): Insert_restContext;
	override_kind(): Override_kindContext;
	insert_column_list(): Insert_column_listContext;
	insert_column_item(): Insert_column_itemContext;
	opt_on_conflict(): Opt_on_conflictContext;
	opt_conf_expr(): Opt_conf_exprContext;
	returning_clause(): Returning_clauseContext;
	deletestmt(): DeletestmtContext;
	using_clause(): Using_clauseContext;
	lockstmt(): LockstmtContext;
	opt_lock(): Opt_lockContext;
	lock_type(): Lock_typeContext;
	opt_nowait(): Opt_nowaitContext;
	opt_nowait_or_skip(): Opt_nowait_or_skipContext;
	updatestmt(): UpdatestmtContext;
	set_clause_list(): Set_clause_listContext;
	set_clause(): Set_clauseContext;
	set_target(): Set_targetContext;
	set_target_list(): Set_target_listContext;
	declarecursorstmt(): DeclarecursorstmtContext;
	cursor_name(): Cursor_nameContext;
	cursor_options(): Cursor_optionsContext;
	opt_hold(): Opt_holdContext;
	selectstmt(): SelectstmtContext;
	select_with_parens(): Select_with_parensContext;
	select_no_parens(): Select_no_parensContext;
	select_clause(): Select_clauseContext;
	simple_select(): Simple_selectContext;
	set_operator(): Set_operatorContext;
	set_operator_with_all_or_distinct(): Set_operator_with_all_or_distinctContext;
	with_clause(): With_clauseContext;
	cte_list(): Cte_listContext;
	common_table_expr(): Common_table_exprContext;
	search_cluase(): Search_cluaseContext;
	cycle_cluase(): Cycle_cluaseContext;
	opt_materialized(): Opt_materializedContext;
	opt_with_clause(): Opt_with_clauseContext;
	into_clause(): Into_clauseContext;
	opt_strict(): Opt_strictContext;
	opttempTableName(): OpttempTableNameContext;
	opt_table(): Opt_tableContext;
	all_or_distinct(): All_or_distinctContext;
	distinct_clause(): Distinct_clauseContext;
	opt_all_clause(): Opt_all_clauseContext;
	opt_sort_clause(): Opt_sort_clauseContext;
	sort_clause(): Sort_clauseContext;
	sortby_list(): Sortby_listContext;
	sortby(): SortbyContext;
	select_limit(): Select_limitContext;
	opt_select_limit(): Opt_select_limitContext;
	limit_clause(): Limit_clauseContext;
	fetch_clause(): Fetch_clauseContext;
	offset_clause(): Offset_clauseContext;
	select_limit_value(): Select_limit_valueContext;
	select_offset_value(): Select_offset_valueContext;
	select_fetch_first_value(): Select_fetch_first_valueContext;
	i_or_f_const(): I_or_f_constContext;
	row_or_rows(): Row_or_rowsContext;
	first_or_next(): First_or_nextContext;
	group_clause(): Group_clauseContext;
	group_by_list(): Group_by_listContext;
	group_by_item(): Group_by_itemContext;
	empty_grouping_set(): Empty_grouping_setContext;
	rollup_clause(): Rollup_clauseContext;
	cube_clause(): Cube_clauseContext;
	grouping_sets_clause(): Grouping_sets_clauseContext;
	having_clause(): Having_clauseContext;
	for_locking_clause(): For_locking_clauseContext;
	opt_for_locking_clause(): Opt_for_locking_clauseContext;
	for_locking_items(): For_locking_itemsContext;
	for_locking_item(): For_locking_itemContext;
	for_locking_strength(): For_locking_strengthContext;
	locked_rels_list(): Locked_rels_listContext;
	values_clause(): Values_clauseContext;
	from_clause(): From_clauseContext;
	from_list(): From_listContext;
	table_ref(): Table_refContext;
	alias_clause(): Alias_clauseContext;
	opt_alias_clause(): Opt_alias_clauseContext;
	func_alias_clause(): Func_alias_clauseContext;
	join_type(): Join_typeContext;
	join_qual(): Join_qualContext;
	relation_expr(): Relation_exprContext;
	view_relation_expr(): View_relation_exprContext;
	publication_relation_expr(): Publication_relation_exprContext;
	relation_expr_list(): Relation_expr_listContext;
	publication_relation_expr_list(): Publication_relation_expr_listContext;
	relation_expr_opt_alias(): Relation_expr_opt_aliasContext;
	tablesample_clause(): Tablesample_clauseContext;
	opt_repeatable_clause(): Opt_repeatable_clauseContext;
	func_table(): Func_tableContext;
	rowsfrom_item(): Rowsfrom_itemContext;
	rowsfrom_list(): Rowsfrom_listContext;
	opt_col_def_list(): Opt_col_def_listContext;
	opt_ordinality(): Opt_ordinalityContext;
	where_clause(): Where_clauseContext;
	where_or_current_clause(): Where_or_current_clauseContext;
	opttablefuncelementlist(): OpttablefuncelementlistContext;
	tablefuncelementlist(): TablefuncelementlistContext;
	tablefuncelement(): TablefuncelementContext;
	xmltable(): XmltableContext;
	xmltable_column_list(): Xmltable_column_listContext;
	xmltable_column_el(): Xmltable_column_elContext;
	xmltable_column_option_list(): Xmltable_column_option_listContext;
	xmltable_column_option_el(): Xmltable_column_option_elContext;
	xml_namespace_list(): Xml_namespace_listContext;
	xml_namespace_el(): Xml_namespace_elContext;
	typename(): TypenameContext;
	opt_array_bounds(): Opt_array_boundsContext;
	simpletypename(): SimpletypenameContext;
	consttypename(): ConsttypenameContext;
	generictype(): GenerictypeContext;
	opt_type_modifiers(): Opt_type_modifiersContext;
	numeric(): NumericContext;
	opt_float(): Opt_floatContext;
	bit(): BitContext;
	constbit(): ConstbitContext;
	bitwithlength(): BitwithlengthContext;
	bitwithoutlength(): BitwithoutlengthContext;
	character(): CharacterContext;
	constcharacter(): ConstcharacterContext;
	character_c(): Character_cContext;
	opt_varying(): Opt_varyingContext;
	constdatetime(): ConstdatetimeContext;
	constinterval(): ConstintervalContext;
	opt_timezone(): Opt_timezoneContext;
	opt_interval(): Opt_intervalContext;
	interval_second(): Interval_secondContext;
	opt_escape(): Opt_escapeContext;
	a_expr(): A_exprContext;
	a_expr_qual(): A_expr_qualContext;
	a_expr_lessless(): A_expr_lesslessContext;
	a_expr_or(): A_expr_orContext;
	a_expr_and(): A_expr_andContext;
	a_expr_in(): A_expr_inContext;
	a_expr_unary_not(): A_expr_unary_notContext;
	a_expr_isnull(): A_expr_isnullContext;
	a_expr_is_not(): A_expr_is_notContext;
	a_expr_compare(): A_expr_compareContext;
	a_expr_like(): A_expr_likeContext;
	a_expr_qual_op(): A_expr_qual_opContext;
	a_expr_unary_qualop(): A_expr_unary_qualopContext;
	a_expr_add(): A_expr_addContext;
	a_expr_mul(): A_expr_mulContext;
	a_expr_caret(): A_expr_caretContext;
	a_expr_unary_sign(): A_expr_unary_signContext;
	a_expr_at_time_zone(): A_expr_at_time_zoneContext;
	a_expr_collate(): A_expr_collateContext;
	a_expr_typecast(): A_expr_typecastContext;
	b_expr(): B_exprContext;
	b_expr(_p: number): B_exprContext;
	c_expr(): C_exprContext;
	plsqlvariablename(): PlsqlvariablenameContext;
	func_application(): Func_applicationContext;
	func_expr(): Func_exprContext;
	func_expr_windowless(): Func_expr_windowlessContext;
	func_expr_common_subexpr(): Func_expr_common_subexprContext;
	xml_root_version(): Xml_root_versionContext;
	opt_xml_root_standalone(): Opt_xml_root_standaloneContext;
	xml_attributes(): Xml_attributesContext;
	xml_attribute_list(): Xml_attribute_listContext;
	xml_attribute_el(): Xml_attribute_elContext;
	document_or_content(): Document_or_contentContext;
	xml_whitespace_option(): Xml_whitespace_optionContext;
	xmlexists_argument(): Xmlexists_argumentContext;
	xml_passing_mech(): Xml_passing_mechContext;
	within_group_clause(): Within_group_clauseContext;
	filter_clause(): Filter_clauseContext;
	window_clause(): Window_clauseContext;
	window_definition_list(): Window_definition_listContext;
	window_definition(): Window_definitionContext;
	over_clause(): Over_clauseContext;
	window_specification(): Window_specificationContext;
	opt_existing_window_name(): Opt_existing_window_nameContext;
	opt_partition_clause(): Opt_partition_clauseContext;
	opt_frame_clause(): Opt_frame_clauseContext;
	frame_extent(): Frame_extentContext;
	frame_bound(): Frame_boundContext;
	opt_window_exclusion_clause(): Opt_window_exclusion_clauseContext;
	row(): RowContext;
	explicit_row(): Explicit_rowContext;
	implicit_row(): Implicit_rowContext;
	sub_type(): Sub_typeContext;
	all_op(): All_opContext;
	mathop(): MathopContext;
	qual_op(): Qual_opContext;
	qual_all_op(): Qual_all_opContext;
	subquery_Op(): Subquery_OpContext;
	expr_list(): Expr_listContext;
	column_expr_list_noparen(): Column_expr_list_noparenContext;
	column_expr_list(): Column_expr_listContext;
	column_expr(): Column_exprContext;
	column_expr_noparen(): Column_expr_noparenContext;
	func_arg_list(): Func_arg_listContext;
	func_arg_expr(): Func_arg_exprContext;
	type_list(): Type_listContext;
	array_expr(): Array_exprContext;
	array_expr_list(): Array_expr_listContext;
	extract_list(): Extract_listContext;
	extract_arg(): Extract_argContext;
	unicode_normal_form(): Unicode_normal_formContext;
	overlay_list(): Overlay_listContext;
	position_list(): Position_listContext;
	substr_list(): Substr_listContext;
	trim_list(): Trim_listContext;
	in_expr(): In_exprContext;
	case_expr(): Case_exprContext;
	when_clause_list(): When_clause_listContext;
	when_clause(): When_clauseContext;
	case_default(): Case_defaultContext;
	case_arg(): Case_argContext;
	columnref(): ColumnrefContext;
	indirection_el(): Indirection_elContext;
	opt_slice_bound(): Opt_slice_boundContext;
	indirection(): IndirectionContext;
	opt_indirection(): Opt_indirectionContext;
	opt_target_list(): Opt_target_listContext;
	target_list(): Target_listContext;
	target_el(): Target_elContext;
	qualified_name_list(): Qualified_name_listContext;
	table_name_list(): Table_name_listContext;
	schema_name_list(): Schema_name_listContext;
	database_nameList(): Database_nameListContext;
	procedure_name_list(): Procedure_name_listContext;
	tablespace_name_create(): Tablespace_name_createContext;
	tablespace_name(): Tablespace_nameContext;
	table_name_create(): Table_name_createContext;
	table_name(): Table_nameContext;
	view_name_create(): View_name_createContext;
	view_name(): View_nameContext;
	qualified_name(): Qualified_nameContext;
	tablespace_name_list(): Tablespace_name_listContext;
	name_list(): Name_listContext;
	database_name_create(): Database_name_createContext;
	database_name(): Database_nameContext;
	schema_name(): Schema_nameContext;
	routine_name_create(): Routine_name_createContext;
	routine_name(): Routine_nameContext;
	procedure_name(): Procedure_nameContext;
	procedure_name_create(): Procedure_name_createContext;
	column_name(): Column_nameContext;
	column_name_create(): Column_name_createContext;
	name(): NameContext;
	attr_name(): Attr_nameContext;
	file_name(): File_nameContext;
	function_name_create(): Function_name_createContext;
	function_name(): Function_nameContext;
	usual_name(): Usual_nameContext;
	aexprconst(): AexprconstContext;
	xconst(): XconstContext;
	bconst(): BconstContext;
	fconst(): FconstContext;
	iconst(): IconstContext;
	sconst(): SconstContext;
	anysconst(): AnysconstContext;
	opt_uescape(): Opt_uescapeContext;
	signediconst(): SignediconstContext;
	groupname(): GroupnameContext;
	roleid(): RoleidContext;
	rolespec(): RolespecContext;
	role_list(): Role_listContext;
	colid(): ColidContext;
	index_method_choices(): Index_method_choicesContext;
	exclude_element(): Exclude_elementContext;
	index_paramenters(): Index_paramentersContext;
	type_function_name(): Type_function_nameContext;
	type_usual_name(): Type_usual_nameContext;
	nonreservedword_column(): Nonreservedword_columnContext;
	nonreservedword(): NonreservedwordContext;
	collabel(): CollabelContext;
	identifier(): IdentifierContext;
	plsqlidentifier(): PlsqlidentifierContext;
	unreserved_keyword(): Unreserved_keywordContext;
	col_name_keyword(): Col_name_keywordContext;
	type_func_name_keyword(): Type_func_name_keywordContext;
	reserved_keyword(): Reserved_keywordContext;
	pl_function(): Pl_functionContext;
	comp_options(): Comp_optionsContext;
	comp_option(): Comp_optionContext;
	sharp(): SharpContext;
	option_value(): Option_valueContext;
	opt_semi(): Opt_semiContext;
	pl_block(): Pl_blockContext;
	decl_sect(): Decl_sectContext;
	decl_start(): Decl_startContext;
	decl_stmts(): Decl_stmtsContext;
	label_decl(): Label_declContext;
	decl_stmt(): Decl_stmtContext;
	decl_statement(): Decl_statementContext;
	opt_scrollable(): Opt_scrollableContext;
	decl_cursor_query(): Decl_cursor_queryContext;
	decl_cursor_args(): Decl_cursor_argsContext;
	decl_cursor_arglist(): Decl_cursor_arglistContext;
	decl_cursor_arg(): Decl_cursor_argContext;
	decl_is_for(): Decl_is_forContext;
	decl_aliasitem(): Decl_aliasitemContext;
	decl_varname(): Decl_varnameContext;
	decl_const(): Decl_constContext;
	decl_datatype(): Decl_datatypeContext;
	decl_collate(): Decl_collateContext;
	decl_notnull(): Decl_notnullContext;
	decl_defval(): Decl_defvalContext;
	decl_defkey(): Decl_defkeyContext;
	assign_operator(): Assign_operatorContext;
	proc_sect(): Proc_sectContext;
	proc_stmt(): Proc_stmtContext;
	stmt_perform(): Stmt_performContext;
	stmt_call(): Stmt_callContext;
	opt_expr_list(): Opt_expr_listContext;
	stmt_assign(): Stmt_assignContext;
	stmt_getdiag(): Stmt_getdiagContext;
	getdiag_area_opt(): Getdiag_area_optContext;
	getdiag_list(): Getdiag_listContext;
	getdiag_list_item(): Getdiag_list_itemContext;
	getdiag_item(): Getdiag_itemContext;
	getdiag_target(): Getdiag_targetContext;
	assign_var(): Assign_varContext;
	stmt_if(): Stmt_ifContext;
	stmt_elsifs(): Stmt_elsifsContext;
	stmt_else(): Stmt_elseContext;
	stmt_case(): Stmt_caseContext;
	opt_expr_until_when(): Opt_expr_until_whenContext;
	case_when_list(): Case_when_listContext;
	case_when(): Case_whenContext;
	opt_case_else(): Opt_case_elseContext;
	stmt_loop(): Stmt_loopContext;
	stmt_while(): Stmt_whileContext;
	stmt_for(): Stmt_forContext;
	for_control(): For_controlContext;
	opt_for_using_expression(): Opt_for_using_expressionContext;
	opt_cursor_parameters(): Opt_cursor_parametersContext;
	opt_reverse(): Opt_reverseContext;
	opt_by_expression(): Opt_by_expressionContext;
	for_variable(): For_variableContext;
	stmt_foreach_a(): Stmt_foreach_aContext;
	foreach_slice(): Foreach_sliceContext;
	stmt_exit(): Stmt_exitContext;
	exit_type(): Exit_typeContext;
	stmt_return(): Stmt_returnContext;
	opt_return_result(): Opt_return_resultContext;
	stmt_raise(): Stmt_raiseContext;
	opt_stmt_raise_level(): Opt_stmt_raise_levelContext;
	opt_raise_list(): Opt_raise_listContext;
	opt_raise_using(): Opt_raise_usingContext;
	opt_raise_using_elem(): Opt_raise_using_elemContext;
	opt_raise_using_elem_list(): Opt_raise_using_elem_listContext;
	stmt_assert(): Stmt_assertContext;
	opt_stmt_assert_message(): Opt_stmt_assert_messageContext;
	loop_body(): Loop_bodyContext;
	stmt_execsql(): Stmt_execsqlContext;
	stmt_dynexecute(): Stmt_dynexecuteContext;
	opt_execute_using(): Opt_execute_usingContext;
	opt_execute_using_list(): Opt_execute_using_listContext;
	opt_execute_into(): Opt_execute_intoContext;
	stmt_open(): Stmt_openContext;
	opt_open_bound_list_item(): Opt_open_bound_list_itemContext;
	opt_open_bound_list(): Opt_open_bound_listContext;
	opt_open_using(): Opt_open_usingContext;
	opt_scroll_option(): Opt_scroll_optionContext;
	opt_scroll_option_no(): Opt_scroll_option_noContext;
	stmt_fetch(): Stmt_fetchContext;
	into_target(): Into_targetContext;
	opt_cursor_from(): Opt_cursor_fromContext;
	opt_fetch_direction(): Opt_fetch_directionContext;
	stmt_move(): Stmt_moveContext;
	mergestmt(): MergestmtContext;
	data_source(): Data_sourceContext;
	join_condition(): Join_conditionContext;
	merge_when_clause(): Merge_when_clauseContext;
	merge_insert(): Merge_insertContext;
	merge_update(): Merge_updateContext;
	default_values_or_values(): Default_values_or_valuesContext;
	exprofdefaultlist(): ExprofdefaultlistContext;
	exprofdefault(): ExprofdefaultContext;
	stmt_close(): Stmt_closeContext;
	stmt_null(): Stmt_nullContext;
	stmt_commit(): Stmt_commitContext;
	stmt_rollback(): Stmt_rollbackContext;
	plsql_opt_transaction_chain(): Plsql_opt_transaction_chainContext;
	stmt_set(): Stmt_setContext;
	cursor_variable(): Cursor_variableContext;
	exception_sect(): Exception_sectContext;
	proc_exceptions(): Proc_exceptionsContext;
	proc_exception(): Proc_exceptionContext;
	proc_conditions(): Proc_conditionsContext;
	proc_condition(): Proc_conditionContext;
	opt_block_label(): Opt_block_labelContext;
	opt_loop_label(): Opt_loop_labelContext;
	opt_label(): Opt_labelContext;
	opt_exitcond(): Opt_exitcondContext;
	any_identifier(): Any_identifierContext;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext;
	sql_expression(): Sql_expressionContext;
	expr_until_then(): Expr_until_thenContext;
	expr_until_semi(): Expr_until_semiContext;
	expr_until_rightbracket(): Expr_until_rightbracketContext;
	expr_until_loop(): Expr_until_loopContext;
	make_execsql_stmt(): Make_execsql_stmtContext;
	opt_returning_clause_into(): Opt_returning_clause_intoContext;
	sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
	private b_expr_sempred;
	private column_name_sempred;
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
	singleStmt(): SingleStmtContext[];
	singleStmt(i: number): SingleStmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PlsqlrootContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	pl_function(): Pl_functionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SingleStmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	stmt(): StmtContext;
	SEMI(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class StmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	altereventtrigstmt(): AltereventtrigstmtContext | null;
	altercollationstmt(): AltercollationstmtContext | null;
	alterdatabasestmt(): AlterdatabasestmtContext | null;
	alterdatabasesetstmt(): AlterdatabasesetstmtContext | null;
	alterdefaultprivilegesstmt(): AlterdefaultprivilegesstmtContext | null;
	alterdomainstmt(): AlterdomainstmtContext | null;
	alterenumstmt(): AlterenumstmtContext | null;
	alterextensionstmt(): AlterextensionstmtContext | null;
	alterextensioncontentsstmt(): AlterextensioncontentsstmtContext | null;
	alterfdwstmt(): AlterfdwstmtContext | null;
	alterforeignserverstmt(): AlterforeignserverstmtContext | null;
	alterfunctionstmt(): AlterfunctionstmtContext | null;
	altergroupstmt(): AltergroupstmtContext | null;
	alterobjectdependsstmt(): AlterobjectdependsstmtContext | null;
	alterobjectschemastmt(): AlterobjectschemastmtContext | null;
	alterownerstmt(): AlterownerstmtContext | null;
	alteroperatorstmt(): AlteroperatorstmtContext | null;
	altertypestmt(): AltertypestmtContext | null;
	alterpolicystmt(): AlterpolicystmtContext | null;
	alterprocedurestmt(): AlterprocedurestmtContext | null;
	alterseqstmt(): AlterseqstmtContext | null;
	altersystemstmt(): AltersystemstmtContext | null;
	altertablestmt(): AltertablestmtContext | null;
	altertblspcstmt(): AltertblspcstmtContext | null;
	altercompositetypestmt(): AltercompositetypestmtContext | null;
	alterpublicationstmt(): AlterpublicationstmtContext | null;
	alterrolesetstmt(): AlterrolesetstmtContext | null;
	alterroutinestmt(): AlterroutinestmtContext | null;
	alterrolestmt(): AlterrolestmtContext | null;
	altersubscriptionstmt(): AltersubscriptionstmtContext | null;
	alterstatsstmt(): AlterstatsstmtContext | null;
	altertsconfigurationstmt(): AltertsconfigurationstmtContext | null;
	altertsdictionarystmt(): AltertsdictionarystmtContext | null;
	alterusermappingstmt(): AlterusermappingstmtContext | null;
	analyzestmt(): AnalyzestmtContext | null;
	callstmt(): CallstmtContext | null;
	checkpointstmt(): CheckpointstmtContext | null;
	closeportalstmt(): CloseportalstmtContext | null;
	clusterstmt(): ClusterstmtContext | null;
	commentstmt(): CommentstmtContext | null;
	constraintssetstmt(): ConstraintssetstmtContext | null;
	copystmt(): CopystmtContext | null;
	createamstmt(): CreateamstmtContext | null;
	createasstmt(): CreateasstmtContext | null;
	createassertionstmt(): CreateassertionstmtContext | null;
	createcaststmt(): CreatecaststmtContext | null;
	createconversionstmt(): CreateconversionstmtContext | null;
	createdomainstmt(): CreatedomainstmtContext | null;
	createextensionstmt(): CreateextensionstmtContext | null;
	createfdwstmt(): CreatefdwstmtContext | null;
	createforeignserverstmt(): CreateforeignserverstmtContext | null;
	createforeigntablestmt(): CreateforeigntablestmtContext | null;
	createfunctionstmt(): CreatefunctionstmtContext | null;
	creategroupstmt(): CreategroupstmtContext | null;
	creatematviewstmt(): CreatematviewstmtContext | null;
	createopclassstmt(): CreateopclassstmtContext | null;
	createopfamilystmt(): CreateopfamilystmtContext | null;
	createpublicationstmt(): CreatepublicationstmtContext | null;
	alteropfamilystmt(): AlteropfamilystmtContext | null;
	createpolicystmt(): CreatepolicystmtContext | null;
	createplangstmt(): CreateplangstmtContext | null;
	createschemastmt(): CreateschemastmtContext | null;
	createseqstmt(): CreateseqstmtContext | null;
	createstmt(): CreatestmtContext | null;
	createsubscriptionstmt(): CreatesubscriptionstmtContext | null;
	createstatsstmt(): CreatestatsstmtContext | null;
	createtablespacestmt(): CreatetablespacestmtContext | null;
	createtransformstmt(): CreatetransformstmtContext | null;
	createtrigstmt(): CreatetrigstmtContext | null;
	createeventtrigstmt(): CreateeventtrigstmtContext | null;
	createrolestmt(): CreaterolestmtContext | null;
	createuserstmt(): CreateuserstmtContext | null;
	createusermappingstmt(): CreateusermappingstmtContext | null;
	createdbstmt(): CreatedbstmtContext | null;
	deallocatestmt(): DeallocatestmtContext | null;
	declarecursorstmt(): DeclarecursorstmtContext | null;
	definestmt(): DefinestmtContext | null;
	deletestmt(): DeletestmtContext | null;
	discardstmt(): DiscardstmtContext | null;
	dostmt(): DostmtContext | null;
	dropstmt(): DropstmtContext | null;
	executestmt(): ExecutestmtContext | null;
	explainstmt(): ExplainstmtContext | null;
	fetchstmt(): FetchstmtContext | null;
	grantstmt(): GrantstmtContext | null;
	grantrolestmt(): GrantrolestmtContext | null;
	mergestmt(): MergestmtContext | null;
	importforeignschemastmt(): ImportforeignschemastmtContext | null;
	indexstmt(): IndexstmtContext | null;
	insertstmt(): InsertstmtContext | null;
	listenstmt(): ListenstmtContext | null;
	refreshmatviewstmt(): RefreshmatviewstmtContext | null;
	loadstmt(): LoadstmtContext | null;
	lockstmt(): LockstmtContext | null;
	notifystmt(): NotifystmtContext | null;
	preparestmt(): PreparestmtContext | null;
	reassignownedstmt(): ReassignownedstmtContext | null;
	reindexstmt(): ReindexstmtContext | null;
	removeaggrstmt(): RemoveaggrstmtContext | null;
	removefuncstmt(): RemovefuncstmtContext | null;
	removeoperstmt(): RemoveoperstmtContext | null;
	renamestmt(): RenamestmtContext | null;
	revokestmt(): RevokestmtContext | null;
	revokerolestmt(): RevokerolestmtContext | null;
	rulestmt(): RulestmtContext | null;
	seclabelstmt(): SeclabelstmtContext | null;
	selectstmt(): SelectstmtContext | null;
	transactionstmt(): TransactionstmtContext | null;
	truncatestmt(): TruncatestmtContext | null;
	unlistenstmt(): UnlistenstmtContext | null;
	updatestmt(): UpdatestmtContext | null;
	vacuumstmt(): VacuumstmtContext | null;
	variableresetstmt(): VariableresetstmtContext | null;
	variablesetstmt(): VariablesetstmtContext | null;
	variableshowstmt(): VariableshowstmtContext | null;
	viewstmt(): ViewstmtContext | null;
	plsqlconsolecommand(): PlsqlconsolecommandContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PlsqlconsolecommandContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	MetaCommand(): antlr.TerminalNode;
	EndMetaCommand(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CallstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CALL(): antlr.TerminalNode;
	func_application(): Func_applicationContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreaterolestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_ROLE(): antlr.TerminalNode;
	roleid(): RoleidContext;
	optrolelist(): OptrolelistContext;
	opt_with(): Opt_withContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_withContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptrolelistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createoptroleelem(): CreateoptroleelemContext[];
	createoptroleelem(i: number): CreateoptroleelemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlteroptrolelistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alteroptroleelem(): AlteroptroleelemContext[];
	alteroptroleelem(i: number): AlteroptroleelemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlteroptroleelemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PASSWORD(): antlr.TerminalNode | null;
	sconst(): SconstContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_ENCRYPTED(): antlr.TerminalNode | null;
	KW_UNENCRYPTED(): antlr.TerminalNode | null;
	KW_INHERIT(): antlr.TerminalNode | null;
	KW_NOINHERIT(): antlr.TerminalNode | null;
	KW_CREATEUSER(): antlr.TerminalNode | null;
	KW_NOCREATEUSER(): antlr.TerminalNode | null;
	KW_CREATEROLE(): antlr.TerminalNode | null;
	KW_NOCREATEROLE(): antlr.TerminalNode | null;
	KW_CREATEDB(): antlr.TerminalNode | null;
	KW_NOCREATEDB(): antlr.TerminalNode | null;
	KW_SUPERUSER(): antlr.TerminalNode | null;
	KW_NOSUPERUSER(): antlr.TerminalNode | null;
	KW_LOGIN(): antlr.TerminalNode | null;
	KW_NOLOGIN(): antlr.TerminalNode | null;
	KW_REPLICATION(): antlr.TerminalNode | null;
	KW_NOREPLICATION(): antlr.TerminalNode | null;
	KW_BYPASSRLS(): antlr.TerminalNode | null;
	KW_NOBYPASSRLS(): antlr.TerminalNode | null;
	KW_CONNECTION(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	signediconst(): SignediconstContext | null;
	KW_VALID(): antlr.TerminalNode | null;
	KW_UNTIL(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	name_list(): Name_listContext | null;
	KW_GROUP(): antlr.TerminalNode | null;
	role_list(): Role_listContext | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateoptroleelemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alteroptroleelem(): AlteroptroleelemContext | null;
	KW_SYSID(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	role_list(): Role_listContext | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateuserstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	roleid(): RoleidContext;
	optrolelist(): OptrolelistContext;
	opt_with(): Opt_withContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterrolestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	rolespec(): RolespecContext;
	alteroptrolelist(): AlteroptrolelistContext;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	opt_with(): Opt_withContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_in_databaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IN(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	database_name(): Database_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterrolesetstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	opt_in_database(): Opt_in_databaseContext;
	setresetclause(): SetresetclauseContext;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	rolespec(): RolespecContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterroutinestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_ROUTINE(): antlr.TerminalNode;
	routine_name(): Routine_nameContext;
	alter_routine_cluase(): Alter_routine_cluaseContext;
	func_args(): Func_argsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_routine_cluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	routine_action_list(): Routine_action_listContext | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	routine_name_create(): Routine_name_createContext | null;
	KW_OWNER(): antlr.TerminalNode | null;
	rolespec(): RolespecContext | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name_create(): Schema_name_createContext | null;
	KW_DEPENDS(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_EXTENSION(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Routine_action_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	routine_action(): Routine_actionContext[];
	routine_action(i: number): Routine_actionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Routine_actionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IMMUTABLE(): antlr.TerminalNode | null;
	KW_STABLE(): antlr.TerminalNode | null;
	KW_VOLATILE(): antlr.TerminalNode | null;
	KW_LEAKPROOF(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	KW_PARALLEL(): antlr.TerminalNode | null;
	KW_UNSAFE(): antlr.TerminalNode | null;
	KW_RESTRICTED(): antlr.TerminalNode | null;
	KW_SAFE(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	attr_name(): Attr_nameContext | null;
	KW_ROWS(): antlr.TerminalNode | null;
	name(): NameContext[];
	name(i: number): NameContext | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreategroupstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	groupname(): GroupnameContext;
	optrolelist(): OptrolelistContext;
	opt_with(): Opt_withContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltergroupstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	rolespec(): RolespecContext;
	add_drop(): Add_dropContext;
	KW_USER(): antlr.TerminalNode;
	role_list(): Role_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Add_dropContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateschemastmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	optschemaeltlist(): OptschemaeltlistContext;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	rolespec(): RolespecContext | null;
	schema_name_create(): Schema_name_createContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Schema_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Schema_name_createContext): void;
}
export declare class SchemaNameCreateContext extends Schema_name_createContext {
	constructor(ctx: Schema_name_createContext);
	colid(): ColidContext;
	attrs(): AttrsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptschemaeltlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	schema_stmt(): Schema_stmtContext[];
	schema_stmt(i: number): Schema_stmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Schema_stmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createstmt(): CreatestmtContext | null;
	indexstmt(): IndexstmtContext | null;
	createseqstmt(): CreateseqstmtContext | null;
	createtrigstmt(): CreatetrigstmtContext | null;
	grantstmt(): GrantstmtContext | null;
	viewstmt(): ViewstmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class VariablesetstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	set_rest(): Set_restContext;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_restContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRANSACTION(): antlr.TerminalNode | null;
	transaction_mode_list(): Transaction_mode_listContext | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_CHARACTERISTICS(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	set_rest_more(): Set_rest_moreContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Generic_setContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	var_name(): Var_nameContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	var_list(): Var_listContext | null;
	KW_TO(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_rest_moreContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TIME(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	zone_value(): Zone_valueContext | null;
	KW_CATALOG(): antlr.TerminalNode | null;
	sconst(): SconstContext | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	KW_NAMES(): antlr.TerminalNode | null;
	opt_encoding(): Opt_encodingContext | null;
	KW_ROLE(): antlr.TerminalNode | null;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	KW_XML(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	document_or_content(): Document_or_contentContext | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_SNAPSHOT(): antlr.TerminalNode | null;
	var_name(): Var_nameContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	generic_set(): Generic_setContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Var_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext[];
	colid(i: number): ColidContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Var_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	var_value(): Var_valueContext[];
	var_value(i: number): Var_valueContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Var_valueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_boolean_or_string(): Opt_boolean_or_stringContext | null;
	numericonly(): NumericonlyContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Iso_levelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_READ(): antlr.TerminalNode | null;
	KW_UNCOMMITTED(): antlr.TerminalNode | null;
	KW_COMMITTED(): antlr.TerminalNode | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	KW_SERIALIZABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_boolean_or_string_columnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	nonreservedword_or_sconst_column(): Nonreservedword_or_sconst_columnContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_boolean_or_stringContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Zone_valueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext | null;
	identifier(): IdentifierContext | null;
	constinterval(): ConstintervalContext | null;
	opt_interval(): Opt_intervalContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	numericonly(): NumericonlyContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_encodingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Nonreservedword_or_sconst_columnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	nonreservedword_column(): Nonreservedword_columnContext | null;
	sconst(): SconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Nonreservedword_or_sconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	nonreservedword(): NonreservedwordContext | null;
	sconst(): SconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class VariableresetstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESET(): antlr.TerminalNode;
	reset_rest(): Reset_restContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reset_restContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TIME(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	generic_reset(): Generic_resetContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Generic_resetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	var_name(): Var_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SetresetclauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode | null;
	set_rest(): Set_restContext | null;
	variableresetstmt(): VariableresetstmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionsetresetclauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode | null;
	set_rest_more(): Set_rest_moreContext | null;
	variableresetstmt(): VariableresetstmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class VariableshowstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SHOW(): antlr.TerminalNode;
	var_name(): Var_nameContext | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintssetstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_CONSTRAINTS(): antlr.TerminalNode;
	constraints_set_list(): Constraints_set_listContext;
	constraints_set_mode(): Constraints_set_modeContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Constraints_set_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	qualified_name_list(): Qualified_name_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Constraints_set_modeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFERRED(): antlr.TerminalNode | null;
	KW_IMMEDIATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CheckpointstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHECKPOINT(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DiscardstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISCARD(): antlr.TerminalNode;
	KW_ALL(): antlr.TerminalNode | null;
	KW_TEMP(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_PLANS(): antlr.TerminalNode | null;
	KW_SEQUENCES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltertablestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode | null;
	relation_expr(): Relation_exprContext | null;
	alter_table_cmds(): Alter_table_cmdsContext | null;
	partition_cmd(): Partition_cmdContext | null;
	opt_if_exists(): Opt_if_existsContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode[];
	KW_TABLESPACE(i: number): antlr.TerminalNode | null;
	tablespace_name(): Tablespace_nameContext[];
	tablespace_name(i: number): Tablespace_nameContext | null;
	KW_SET(): antlr.TerminalNode | null;
	tablespace_name_create(): Tablespace_name_createContext | null;
	KW_OWNED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	role_list(): Role_listContext | null;
	opt_nowait(): Opt_nowaitContext | null;
	table_name(): Table_nameContext | null;
	KW_ATTACH(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_VALUES(): antlr.TerminalNode | null;
	partition_bound_spec(): Partition_bound_specContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DETACH(): antlr.TerminalNode | null;
	KW_CONCURRENTLY(): antlr.TerminalNode | null;
	KW_FINALIZE(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	index_partition_cmd(): Index_partition_cmdContext | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	view_name(): View_nameContext | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_table_cmdsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alter_table_cmd(): Alter_table_cmdContext[];
	alter_table_cmd(i: number): Alter_table_cmdContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Partition_bound_specContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IN(): antlr.TerminalNode | null;
	opt_type_modifiers(): Opt_type_modifiersContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	partition_bound_cluase(): Partition_bound_cluaseContext[];
	partition_bound_cluase(i: number): Partition_bound_cluaseContext | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	partition_with_cluase(): Partition_with_cluaseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Partition_bound_cluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	partition_bound_choose(): Partition_bound_chooseContext[];
	partition_bound_choose(i: number): Partition_bound_chooseContext | null;
	CLOSE_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Partition_bound_chooseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_type_modifiers(): Opt_type_modifiersContext | null;
	KW_MINVALUE(): antlr.TerminalNode | null;
	KW_MAXVALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Partition_with_cluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	KW_MODULUS(): antlr.TerminalNode;
	numericonly(): NumericonlyContext[];
	numericonly(i: number): NumericonlyContext | null;
	COMMA(): antlr.TerminalNode;
	KW_REMAINDER(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Partition_cmdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ATTACH(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	partitionboundspec(): PartitionboundspecContext | null;
	KW_DETACH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_partition_cmdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ATTACH(): antlr.TerminalNode;
	KW_PARTITION(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_table_cmdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode | null;
	constraintelem(): ConstraintelemContext | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_ALTER(): antlr.TerminalNode | null;
	constraintattributespec(): ConstraintattributespecContext | null;
	KW_VALIDATE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	opt_if_exists(): Opt_if_existsContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_OIDS(): antlr.TerminalNode | null;
	KW_CLUSTER(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_LOGGED(): antlr.TerminalNode | null;
	KW_UNLOGGED(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_REPLICA(): antlr.TerminalNode | null;
	KW_ALWAYS(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_RULE(): antlr.TerminalNode | null;
	KW_INHERIT(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	rolespec(): RolespecContext | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespace_name_create(): Tablespace_name_createContext | null;
	reloptions(): ReloptionsContext | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_IDENTITY(): antlr.TerminalNode | null;
	replica_identity(): Replica_identityContext | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_FORCE(): antlr.TerminalNode | null;
	column_name(): Column_nameContext | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	column_def(): Column_defContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	alter_column_default(): Alter_column_defaultContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_EXPRESSION(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	signediconst(): SignediconstContext | null;
	KW_STORAGE(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	generated_when(): Generated_whenContext | null;
	KW_AS(): antlr.TerminalNode | null;
	optparenthesizedseqoptlist(): OptparenthesizedseqoptlistContext | null;
	alter_identity_column_option_list(): Alter_identity_column_option_listContext | null;
	KW_TYPE(): antlr.TerminalNode | null;
	typename(): TypenameContext | null;
	opt_set_data(): Opt_set_dataContext | null;
	opt_collate_clause(): Opt_collate_clauseContext | null;
	alter_using(): Alter_usingContext | null;
	alter_generic_options(): Alter_generic_optionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_column_defaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode;
	a_expr(): A_exprContext | null;
	KW_DROP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_drop_behaviorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_collate_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COLLATE(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_usingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Replica_identityContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOTHING(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	name(): NameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ReloptionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	reloption_list(): Reloption_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_reloptionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	reloptions(): ReloptionsContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reloption_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	reloption_elem(): Reloption_elemContext[];
	reloption_elem(i: number): Reloption_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reloption_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	collabel(): CollabelContext[];
	collabel(i: number): CollabelContext | null;
	EQUAL(): antlr.TerminalNode | null;
	def_arg(): Def_argContext | null;
	DOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_identity_column_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alter_identity_column_option(): Alter_identity_column_optionContext[];
	alter_identity_column_option(i: number): Alter_identity_column_optionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_identity_column_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESTART(): antlr.TerminalNode | null;
	numericonly(): NumericonlyContext | null;
	opt_with(): Opt_withContext | null;
	KW_SET(): antlr.TerminalNode | null;
	seqoptelem(): SeqoptelemContext | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	generated_when(): Generated_whenContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionboundspecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode | null;
	KW_VALUES(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode[];
	OPEN_PAREN(i: number): antlr.TerminalNode | null;
	hash_partbound(): Hash_partboundContext | null;
	CLOSE_PAREN(): antlr.TerminalNode[];
	CLOSE_PAREN(i: number): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext[];
	expr_list(i: number): Expr_listContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Hash_partbound_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	nonreservedword(): NonreservedwordContext;
	iconst(): IconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Hash_partboundContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	hash_partbound_elem(): Hash_partbound_elemContext[];
	hash_partbound_elem(i: number): Hash_partbound_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltercompositetypestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TYPE(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	alter_type_cmds(): Alter_type_cmdsContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_type_cmdsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alter_type_cmd(): Alter_type_cmdContext[];
	alter_type_cmd(i: number): Alter_type_cmdContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_type_cmdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ADD(): antlr.TerminalNode | null;
	KW_ATTRIBUTE(): antlr.TerminalNode;
	tablefuncelement(): TablefuncelementContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_DROP(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	opt_if_exists(): Opt_if_existsContext | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	typename(): TypenameContext | null;
	opt_set_data(): Opt_set_dataContext | null;
	opt_collate_clause(): Opt_collate_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CloseportalstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLOSE(): antlr.TerminalNode;
	cursor_name(): Cursor_nameContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CopystmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COPY(): antlr.TerminalNode;
	table_name(): Table_nameContext | null;
	copy_from(): Copy_fromContext | null;
	copy_file_name(): Copy_file_nameContext;
	copy_options(): Copy_optionsContext;
	opt_binary(): Opt_binaryContext | null;
	opt_column_list(): Opt_column_listContext | null;
	opt_program(): Opt_programContext | null;
	copy_delimiter(): Copy_delimiterContext | null;
	opt_with(): Opt_withContext | null;
	where_clause(): Where_clauseContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	preparablestmt(): PreparablestmtContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_fromContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_programContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PROGRAM(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_file_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext | null;
	KW_STDIN(): antlr.TerminalNode | null;
	KW_STDOUT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	copy_opt_list(): Copy_opt_listContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	copy_generic_opt_list(): Copy_generic_opt_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	copy_opt_item(): Copy_opt_itemContext[];
	copy_opt_item(i: number): Copy_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_opt_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BINARY(): antlr.TerminalNode | null;
	KW_FREEZE(): antlr.TerminalNode | null;
	KW_DELIMITER(): antlr.TerminalNode | null;
	sconst(): SconstContext | null;
	opt_as(): Opt_asContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_CSV(): antlr.TerminalNode | null;
	KW_HEADER(): antlr.TerminalNode | null;
	KW_QUOTE(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	KW_FORCE(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	STAR(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ENCODING(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_binaryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BINARY(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_delimiterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELIMITERS(): antlr.TerminalNode;
	sconst(): SconstContext;
	opt_using(): Opt_usingContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_usingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_generic_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	copy_generic_opt_elem(): Copy_generic_opt_elemContext[];
	copy_generic_opt_elem(i: number): Copy_generic_opt_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_generic_opt_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	collabel(): CollabelContext;
	copy_generic_opt_arg(): Copy_generic_opt_argContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_generic_opt_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_boolean_or_string(): Opt_boolean_or_stringContext | null;
	numericonly(): NumericonlyContext | null;
	STAR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	copy_generic_opt_arg_list(): Copy_generic_opt_arg_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_generic_opt_arg_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	copy_generic_opt_arg_list_item(): Copy_generic_opt_arg_list_itemContext[];
	copy_generic_opt_arg_list_item(i: number): Copy_generic_opt_arg_list_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Copy_generic_opt_arg_list_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_boolean_or_string_column(): Opt_boolean_or_string_columnContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CreatestmtContext): void;
}
export declare class ColumnCreateTableContext extends CreatestmtContext {
	constructor(ctx: CreatestmtContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	table_name_create(): Table_name_createContext;
	OPEN_PAREN(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	partitionboundspec(): PartitionboundspecContext | null;
	opttemp(): OpttempContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	table_column_list(): Table_column_listContext | null;
	optinherit(): OptinheritContext | null;
	optpartitionspec(): OptpartitionspecContext | null;
	table_access_method_clause(): Table_access_method_clauseContext | null;
	optwith(): OptwithContext | null;
	oncommitoption(): OncommitoptionContext | null;
	opttablespace(): OpttablespaceContext | null;
	opttypedtableelementlist(): OpttypedtableelementlistContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OpttempContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TEMP(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_UNLOGGED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_column_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableelementlist(): TableelementlistContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OpttableelementlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableelementlist(): TableelementlistContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OpttypedtableelementlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	typedtableelementlist(): TypedtableelementlistContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TableelementlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tableelement(): TableelementContext[];
	tableelement(i: number): TableelementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TypedtableelementlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	typedtableelement(): TypedtableelementContext[];
	typedtableelement(i: number): TypedtableelementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TableelementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_def(): Column_defContext | null;
	tablelikeclause(): TablelikeclauseContext | null;
	tableconstraint(): TableconstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TypedtableelementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	columnOptions(): ColumnOptionsContext | null;
	tableconstraint(): TableconstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_defContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name_create(): Column_name_createContext;
	typename(): TypenameContext;
	colquallist(): ColquallistContext;
	create_generic_options(): Create_generic_optionsContext | null;
	storageCluase(): StorageCluaseContext | null;
	compressionCluase(): CompressionCluaseContext | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CompressionCluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMPRESSION(): antlr.TerminalNode;
	colid(): ColidContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class StorageCluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STORAGE(): antlr.TerminalNode;
	KW_PLAIN(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	KW_EXTENDED(): antlr.TerminalNode | null;
	KW_MAIN(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnOptionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name_create(): Column_name_createContext;
	colquallist(): ColquallistContext;
	KW_WITH(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ColquallistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colconstraint(): ColconstraintContext[];
	colconstraint(i: number): ColconstraintContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ColconstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colconstraintelem(): ColconstraintelemContext;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	name(): NameContext | null;
	deferrable_trigger(): Deferrable_triggerContext | null;
	initially_trigger(): Initially_triggerContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ColconstraintelemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	opt_definition(): Opt_definitionContext | null;
	optconstablespace(): OptconstablespaceContext | null;
	index_paramenters_create(): Index_paramenters_createContext | null;
	nulls_distinct(): Nulls_distinctContext | null;
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_CHECK(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	opt_no_inherit(): Opt_no_inheritContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	b_expr(): B_exprContext | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	generated_when(): Generated_whenContext | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_IDENTITY(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	optparenthesizedseqoptlist(): OptparenthesizedseqoptlistContext | null;
	KW_REFERENCES(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	opt_column_list(): Opt_column_listContext | null;
	key_match(): Key_matchContext | null;
	key_actions(): Key_actionsContext | null;
	opt_collate(): Opt_collateContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Nulls_distinctContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULLS(): antlr.TerminalNode;
	KW_DISTINCT(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Generated_whenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALWAYS(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Deferrable_triggerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFERRABLE(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Initially_triggerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INITIALLY(): antlr.TerminalNode;
	KW_DEFERRED(): antlr.TerminalNode | null;
	KW_IMMEDIATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TablelikeclauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIKE(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	tablelikeoptionlist(): TablelikeoptionlistContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TablelikeoptionlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablelikeoption(): TablelikeoptionContext[];
	tablelikeoption(i: number): TablelikeoptionContext | null;
	KW_INCLUDING(): antlr.TerminalNode[];
	KW_INCLUDING(i: number): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode[];
	KW_EXCLUDING(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TablelikeoptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENTS(): antlr.TerminalNode | null;
	KW_CONSTRAINTS(): antlr.TerminalNode | null;
	KW_DEFAULTS(): antlr.TerminalNode | null;
	KW_IDENTITY(): antlr.TerminalNode | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_STORAGE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TableconstraintContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	name(): NameContext | null;
	constraintelem(): ConstraintelemContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintelemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHECK(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	constraintattributespec(): ConstraintattributespecContext | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	existingindex(): ExistingindexContext | null;
	opt_c_include(): Opt_c_includeContext | null;
	opt_definition(): Opt_definitionContext | null;
	optconstablespace(): OptconstablespaceContext | null;
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_EXCLUDE(): antlr.TerminalNode | null;
	exclusionconstraintlist(): ExclusionconstraintlistContext | null;
	access_method_clause(): Access_method_clauseContext | null;
	exclusionwhereclause(): ExclusionwhereclauseContext | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_REFERENCES(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	opt_column_list(): Opt_column_listContext | null;
	key_match(): Key_matchContext | null;
	key_actions(): Key_actionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_no_inheritContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NO(): antlr.TerminalNode;
	KW_INHERIT(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_column_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	column_list(): Column_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_column_list_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	column_list_create(): Column_list_createContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name(): Column_nameContext[];
	column_name(i: number): Column_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_list_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name_create(): Column_name_createContext[];
	column_name_create(i: number): Column_name_createContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_c_includeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INCLUDE(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	column_list(): Column_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Key_matchContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MATCH(): antlr.TerminalNode;
	KW_FULL(): antlr.TerminalNode | null;
	KW_PARTIAL(): antlr.TerminalNode | null;
	KW_SIMPLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExclusionconstraintlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	exclusionconstraintelem(): ExclusionconstraintelemContext[];
	exclusionconstraintelem(i: number): ExclusionconstraintelemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExclusionconstraintelemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	index_elem(): Index_elemContext;
	KW_WITH(): antlr.TerminalNode;
	any_operator(): Any_operatorContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExclusionwhereclauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHERE(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Key_actionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	key_update(): Key_updateContext | null;
	key_delete(): Key_deleteContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Key_updateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode;
	KW_UPDATE(): antlr.TerminalNode;
	key_action(): Key_actionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Key_deleteContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode;
	KW_DELETE(): antlr.TerminalNode;
	key_action(): Key_actionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Key_actionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NO(): antlr.TerminalNode | null;
	KW_ACTION(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptinheritContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INHERITS(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	qualified_name_list(): Qualified_name_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptpartitionspecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	partitionspec(): PartitionspecContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionspecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	colid(): ColidContext;
	OPEN_PAREN(): antlr.TerminalNode;
	part_params(): Part_paramsContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Part_paramsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	part_elem(): Part_elemContext[];
	part_elem(i: number): Part_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Part_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name(): Column_nameContext | null;
	opt_collate(): Opt_collateContext | null;
	opt_class(): Opt_classContext | null;
	func_expr_windowless(): Func_expr_windowlessContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_access_method_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	name(): NameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptwithContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode | null;
	reloptions(): ReloptionsContext | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_OIDS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OncommitoptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode;
	KW_COMMIT(): antlr.TerminalNode;
	KW_DROP(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_PRESERVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OpttablespaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespace_name(): Tablespace_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_paramenters_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_include(): Opt_includeContext | null;
	with_clause(): With_clauseContext | null;
	optconstablespace(): OptconstablespaceContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptconstablespaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespace_name(): Tablespace_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExistingindexContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	name(): NameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatestatsstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_STATISTICS(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	from_list(): From_listContext;
	column_expr_list(): Column_expr_listContext | null;
	expr_list(): Expr_listContext | null;
	any_name(): Any_nameContext | null;
	opt_name_list(): Opt_name_listContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterstatsstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_STATISTICS(): antlr.TerminalNode[];
	KW_STATISTICS(i: number): antlr.TerminalNode | null;
	any_name(): Any_nameContext;
	KW_SET(): antlr.TerminalNode;
	signediconst(): SignediconstContext;
	opt_if_exists(): Opt_if_existsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateasstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CreateasstmtContext): void;
}
export declare class QueryCreateTableContext extends CreateasstmtContext {
	constructor(ctx: CreateasstmtContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	create_as_target(): Create_as_targetContext;
	KW_AS(): antlr.TerminalNode;
	selectstmt(): SelectstmtContext;
	opttemp(): OpttempContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opt_with_data(): Opt_with_dataContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Create_as_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name_create(): Table_name_createContext;
	opt_column_list_create(): Opt_column_list_createContext | null;
	table_access_method_clause(): Table_access_method_clauseContext | null;
	optwith(): OptwithContext | null;
	oncommitoption(): OncommitoptionContext | null;
	opttablespace(): OpttablespaceContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_with_dataContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatematviewstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CreatematviewstmtContext): void;
}
export declare class CreateMaterializedViewContext extends CreatematviewstmtContext {
	constructor(ctx: CreatematviewstmtContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	create_mv_target(): Create_mv_targetContext;
	KW_AS(): antlr.TerminalNode;
	selectstmt(): SelectstmtContext;
	optnolog(): OptnologContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opt_with_data(): Opt_with_dataContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Create_mv_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	view_name_create(): View_name_createContext;
	opt_column_list_create(): Opt_column_list_createContext | null;
	table_access_method_clause(): Table_access_method_clauseContext | null;
	opt_reloptions(): Opt_reloptionsContext | null;
	opttablespace(): OpttablespaceContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptnologContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNLOGGED(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RefreshmatviewstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFRESH(): antlr.TerminalNode;
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_VIEW(): antlr.TerminalNode;
	view_name(): View_nameContext;
	opt_concurrently(): Opt_concurrentlyContext | null;
	opt_with_data(): Opt_with_dataContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateseqstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_SEQUENCE(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	opttemp(): OpttempContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	optseqoptlist(): OptseqoptlistContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterseqstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_SEQUENCE(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	seqoptlist(): SeqoptlistContext;
	opt_if_exists(): Opt_if_existsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptseqoptlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	seqoptlist(): SeqoptlistContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptparenthesizedseqoptlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	seqoptlist(): SeqoptlistContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SeqoptlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	seqoptelem(): SeqoptelemContext[];
	seqoptelem(i: number): SeqoptelemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SeqoptelemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode | null;
	simpletypename(): SimpletypenameContext | null;
	KW_CACHE(): antlr.TerminalNode | null;
	numericonly(): NumericonlyContext | null;
	KW_CYCLE(): antlr.TerminalNode | null;
	KW_INCREMENT(): antlr.TerminalNode | null;
	opt_by(): Opt_byContext | null;
	KW_MAXVALUE(): antlr.TerminalNode | null;
	KW_MINVALUE(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_OWNED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	column_name(): Column_nameContext | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	KW_NAME(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_START(): antlr.TerminalNode | null;
	opt_with(): Opt_withContext | null;
	KW_RESTART(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_byContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BY(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class NumericonlyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fconst(): FconstContext | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	signediconst(): SignediconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Numericonly_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	numericonly(): NumericonlyContext[];
	numericonly(i: number): NumericonlyContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateplangstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_LANGUAGE(): antlr.TerminalNode;
	name(): NameContext;
	opt_or_replace(): Opt_or_replaceContext | null;
	opt_trusted(): Opt_trustedContext | null;
	opt_procedural(): Opt_proceduralContext | null;
	KW_HANDLER(): antlr.TerminalNode | null;
	handler_name(): Handler_nameContext | null;
	opt_inline_handler(): Opt_inline_handlerContext | null;
	opt_validator(): Opt_validatorContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_trustedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUSTED(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Handler_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	name(): NameContext;
	attrs(): AttrsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_inline_handlerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INLINE(): antlr.TerminalNode;
	handler_name(): Handler_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Validator_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALIDATOR(): antlr.TerminalNode;
	handler_name(): Handler_nameContext | null;
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_validatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	validator_clause(): Validator_clauseContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_proceduralContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PROCEDURAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatetablespacestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespace_name(): Tablespace_nameContext;
	KW_LOCATION(): antlr.TerminalNode;
	sconst(): SconstContext;
	opttablespaceowner(): OpttablespaceownerContext | null;
	opt_reloptions(): Opt_reloptionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OpttablespaceownerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OWNER(): antlr.TerminalNode;
	rolespec(): RolespecContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateextensionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_EXTENSION(): antlr.TerminalNode;
	name(): NameContext;
	create_extension_opt_list(): Create_extension_opt_listContext;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opt_with(): Opt_withContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Create_extension_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	create_extension_opt_item(): Create_extension_opt_itemContext[];
	create_extension_opt_item(i: number): Create_extension_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Create_extension_opt_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	KW_VERSION(): antlr.TerminalNode | null;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterextensionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_EXTENSION(): antlr.TerminalNode;
	name(): NameContext;
	KW_UPDATE(): antlr.TerminalNode;
	alter_extension_opt_list(): Alter_extension_opt_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_extension_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alter_extension_opt_item(): Alter_extension_opt_itemContext[];
	alter_extension_opt_item(i: number): Alter_extension_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_extension_opt_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TO(): antlr.TerminalNode;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterextensioncontentsstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_EXTENSION(): antlr.TerminalNode;
	name(): NameContext[];
	name(i: number): NameContext | null;
	add_drop(): Add_dropContext;
	object_type_name(): Object_type_nameContext | null;
	object_type_any_name(): Object_type_any_nameContext | null;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	aggregate_with_argtypes(): Aggregate_with_argtypesContext | null;
	KW_CAST(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	KW_AS(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	operator_with_argtypes(): Operator_with_argtypesContext | null;
	KW_CLASS(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_FAMILY(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatefdwstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_WRAPPER(): antlr.TerminalNode;
	name(): NameContext;
	opt_fdw_options(): Opt_fdw_optionsContext | null;
	create_generic_options(): Create_generic_optionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Fdw_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HANDLER(): antlr.TerminalNode | null;
	handler_name(): Handler_nameContext | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_VALIDATOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Fdw_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fdw_option(): Fdw_optionContext[];
	fdw_option(i: number): Fdw_optionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_fdw_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	fdw_options(): Fdw_optionsContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterfdwstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_WRAPPER(): antlr.TerminalNode;
	name(): NameContext;
	alter_generic_options(): Alter_generic_optionsContext | null;
	opt_fdw_options(): Opt_fdw_optionsContext | null;
	fdw_options(): Fdw_optionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Create_generic_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OPTIONS(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	generic_option_list(): Generic_option_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Generic_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	generic_option_elem(): Generic_option_elemContext[];
	generic_option_elem(i: number): Generic_option_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_generic_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OPTIONS(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	alter_generic_option_list(): Alter_generic_option_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_generic_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alter_generic_option_elem(): Alter_generic_option_elemContext[];
	alter_generic_option_elem(i: number): Alter_generic_option_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alter_generic_option_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	generic_option_elem(): Generic_option_elemContext;
	KW_SET(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Generic_option_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	generic_option_name(): Generic_option_nameContext;
	generic_option_arg(): Generic_option_argContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Generic_option_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	collabel(): CollabelContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Generic_option_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateforeignserverstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_SERVER(): antlr.TerminalNode;
	name(): NameContext[];
	name(i: number): NameContext | null;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	KW_WRAPPER(): antlr.TerminalNode;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opt_type(): Opt_typeContext | null;
	opt_foreign_server_version(): Opt_foreign_server_versionContext | null;
	create_generic_options(): Create_generic_optionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TYPE(): antlr.TerminalNode;
	sconst(): SconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Foreign_server_versionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VERSION(): antlr.TerminalNode;
	sconst(): SconstContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_foreign_server_versionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	foreign_server_version(): Foreign_server_versionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterforeignserverstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_SERVER(): antlr.TerminalNode;
	name(): NameContext;
	alter_generic_options(): Alter_generic_optionsContext | null;
	foreign_server_version(): Foreign_server_versionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateforeigntablestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CreateforeigntablestmtContext): void;
}
export declare class CreateForeignTableContext extends CreateforeigntablestmtContext {
	constructor(ctx: CreateforeigntablestmtContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	table_name_create(): Table_name_createContext;
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	KW_SERVER(): antlr.TerminalNode;
	name(): NameContext;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opttableelementlist(): OpttableelementlistContext | null;
	optinherit(): OptinheritContext | null;
	create_generic_options(): Create_generic_optionsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatePartitionForeignTableContext extends CreateforeigntablestmtContext {
	constructor(ctx: CreateforeigntablestmtContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode;
	table_name_create(): Table_name_createContext;
	KW_PARTITION(): antlr.TerminalNode;
	KW_OF(): antlr.TerminalNode;
	table_name(): Table_nameContext;
	partitionboundspec(): PartitionboundspecContext;
	KW_SERVER(): antlr.TerminalNode;
	name(): NameContext;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opttypedtableelementlist(): OpttypedtableelementlistContext | null;
	create_generic_options(): Create_generic_optionsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ImportforeignschemastmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IMPORT(): antlr.TerminalNode;
	KW_FOREIGN(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	schema_name(): Schema_nameContext;
	KW_FROM(): antlr.TerminalNode;
	KW_SERVER(): antlr.TerminalNode;
	name(): NameContext[];
	name(i: number): NameContext | null;
	KW_INTO(): antlr.TerminalNode;
	import_qualification(): Import_qualificationContext | null;
	create_generic_options(): Create_generic_optionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Import_qualification_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Import_qualificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	import_qualification_type(): Import_qualification_typeContext;
	OPEN_PAREN(): antlr.TerminalNode;
	relation_expr_list(): Relation_expr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateusermappingstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	KW_MAPPING(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	auth_ident(): Auth_identContext;
	KW_SERVER(): antlr.TerminalNode;
	name(): NameContext;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	create_generic_options(): Create_generic_optionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Auth_identContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rolespec(): RolespecContext | null;
	KW_USER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterusermappingstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_USER(): antlr.TerminalNode;
	KW_MAPPING(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	auth_ident(): Auth_identContext;
	KW_SERVER(): antlr.TerminalNode;
	name(): NameContext;
	alter_generic_options(): Alter_generic_optionsContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatepolicystmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_POLICY(): antlr.TerminalNode;
	name(): NameContext;
	KW_ON(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	rowsecuritydefaultpermissive(): RowsecuritydefaultpermissiveContext | null;
	rowsecuritydefaultforcmd(): RowsecuritydefaultforcmdContext | null;
	rowsecuritydefaulttorole(): RowsecuritydefaulttoroleContext | null;
	rowsecurityoptionalexpr(): RowsecurityoptionalexprContext | null;
	rowsecurityoptionalwithcheck(): RowsecurityoptionalwithcheckContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterpolicystmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_POLICY(): antlr.TerminalNode;
	name(): NameContext;
	KW_ON(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	rowsecurityoptionaltorole(): RowsecurityoptionaltoroleContext | null;
	rowsecurityoptionalexpr(): RowsecurityoptionalexprContext | null;
	rowsecurityoptionalwithcheck(): RowsecurityoptionalwithcheckContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterprocedurestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_PROCEDURE(): antlr.TerminalNode;
	procedure_name(): Procedure_nameContext;
	procedure_cluase(): Procedure_cluaseContext;
	func_args(): Func_argsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Procedure_cluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	procedure_action(): Procedure_actionContext[];
	procedure_action(i: number): Procedure_actionContext | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	procedure_name_create(): Procedure_name_createContext | null;
	KW_OWNER(): antlr.TerminalNode | null;
	rolespec(): RolespecContext | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name_create(): Schema_name_createContext | null;
	KW_DEPENDS(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_EXTENSION(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Procedure_actionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	name(): NameContext[];
	name(i: number): NameContext | null;
	KW_TO(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RowsecurityoptionalexprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RowsecurityoptionalwithcheckContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_CHECK(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RowsecuritydefaulttoroleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TO(): antlr.TerminalNode;
	role_list(): Role_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RowsecurityoptionaltoroleContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TO(): antlr.TerminalNode;
	role_list(): Role_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RowsecuritydefaultpermissiveContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	KW_PERMISSIVE(): antlr.TerminalNode | null;
	KW_RESTRICTIVE(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RowsecuritydefaultforcmdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	row_security_cmd(): Row_security_cmdContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Row_security_cmdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_SELECT(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateamstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_ACCESS(): antlr.TerminalNode;
	KW_METHOD(): antlr.TerminalNode;
	name(): NameContext;
	KW_TYPE(): antlr.TerminalNode;
	am_type(): Am_typeContext;
	KW_HANDLER(): antlr.TerminalNode;
	handler_name(): Handler_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Am_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INDEX(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatetrigstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TRIGGER(): antlr.TerminalNode;
	name(): NameContext;
	triggeractiontime(): TriggeractiontimeContext;
	triggerevents(): TriggereventsContext;
	KW_ON(): antlr.TerminalNode;
	table_name(): Table_nameContext;
	KW_EXECUTE(): antlr.TerminalNode;
	function_or_procedure(): Function_or_procedureContext;
	OPEN_PAREN(): antlr.TerminalNode;
	triggerfuncargs(): TriggerfuncargsContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	opt_or_replace(): Opt_or_replaceContext | null;
	triggerreferencing(): TriggerreferencingContext | null;
	triggerforspec(): TriggerforspecContext | null;
	triggerwhen(): TriggerwhenContext | null;
	constraintattributespec(): ConstraintattributespecContext | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	optconstrfromtable(): OptconstrfromtableContext | null;
	foreachrow(): ForeachrowContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggeractiontimeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BEFORE(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_INSTEAD(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ForeachrowContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	roworstatment(): RoworstatmentContext;
	KW_EACH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RoworstatmentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode | null;
	KW_STATEMENT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggereventsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	triggeroneevent(): TriggeroneeventContext[];
	triggeroneevent(i: number): TriggeroneeventContext | null;
	KW_OR(): antlr.TerminalNode[];
	KW_OR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggeroneeventContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerreferencingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REFERENCING(): antlr.TerminalNode;
	triggertransitions(): TriggertransitionsContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggertransitionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	triggertransition(): TriggertransitionContext[];
	triggertransition(i: number): TriggertransitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggertransitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	transitionoldornew(): TransitionoldornewContext;
	transitionrowortable(): TransitionrowortableContext;
	transitionrelname(): TransitionrelnameContext;
	opt_as(): Opt_asContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TransitionoldornewContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NEW(): antlr.TerminalNode | null;
	KW_OLD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TransitionrowortableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TransitionrelnameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerforspecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	triggerfortype(): TriggerfortypeContext;
	triggerforopteach(): TriggerforopteachContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerforopteachContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EACH(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerfortypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode | null;
	KW_STATEMENT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerwhenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Function_or_procedureContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_name(): Function_nameContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_name(): Procedure_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerfuncargsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	triggerfuncarg(): TriggerfuncargContext[];
	triggerfuncarg(i: number): TriggerfuncargContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TriggerfuncargContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	iconst(): IconstContext | null;
	fconst(): FconstContext | null;
	sconst(): SconstContext | null;
	collabel(): CollabelContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OptconstrfromtableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintattributespecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	constraintattributeElem(): ConstraintattributeElemContext[];
	constraintattributeElem(i: number): ConstraintattributeElemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintattributeElemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOT(): antlr.TerminalNode | null;
	KW_DEFERRABLE(): antlr.TerminalNode | null;
	KW_INITIALLY(): antlr.TerminalNode | null;
	KW_IMMEDIATE(): antlr.TerminalNode | null;
	KW_DEFERRED(): antlr.TerminalNode | null;
	KW_VALID(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_INHERIT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateeventtrigstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_EVENT(): antlr.TerminalNode;
	KW_TRIGGER(): antlr.TerminalNode;
	name(): NameContext;
	KW_ON(): antlr.TerminalNode;
	collabel(): CollabelContext;
	KW_EXECUTE(): antlr.TerminalNode;
	function_or_procedure(): Function_or_procedureContext;
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	KW_WHEN(): antlr.TerminalNode | null;
	event_trigger_when_list(): Event_trigger_when_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Event_trigger_when_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	event_trigger_when_item(): Event_trigger_when_itemContext[];
	event_trigger_when_item(i: number): Event_trigger_when_itemContext | null;
	KW_AND(): antlr.TerminalNode[];
	KW_AND(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Event_trigger_when_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	KW_IN(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	event_trigger_value_list(): Event_trigger_value_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Event_trigger_value_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext[];
	sconst(i: number): SconstContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltereventtrigstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_EVENT(): antlr.TerminalNode;
	KW_TRIGGER(): antlr.TerminalNode;
	name(): NameContext;
	enable_trigger(): Enable_triggerContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Enable_triggerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_REPLICA(): antlr.TerminalNode | null;
	KW_ALWAYS(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateassertionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_ASSERTION(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	KW_CHECK(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	constraintattributespec(): ConstraintattributespecContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DefinestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	function_name(): Function_nameContext | null;
	aggr_args(): Aggr_argsContext | null;
	definition(): DefinitionContext | null;
	opt_or_replace(): Opt_or_replaceContext | null;
	old_aggr_definition(): Old_aggr_definitionContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	any_operator(): Any_operatorContext | null;
	KW_TYPE(): antlr.TerminalNode | null;
	any_name(): Any_nameContext[];
	any_name(i: number): Any_nameContext | null;
	KW_AS(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	opttablefuncelementlist(): OpttablefuncelementlistContext | null;
	KW_ENUM(): antlr.TerminalNode | null;
	opt_enum_val_list(): Opt_enum_val_listContext | null;
	KW_RANGE(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	KW_DICTIONARY(): antlr.TerminalNode | null;
	KW_TEMPLATE(): antlr.TerminalNode | null;
	KW_CONFIGURATION(): antlr.TerminalNode | null;
	KW_COLLATION(): antlr.TerminalNode | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DefinitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	def_list(): Def_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Def_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	def_elem(): Def_elemContext[];
	def_elem(i: number): Def_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Def_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	collabel(): CollabelContext;
	EQUAL(): antlr.TerminalNode | null;
	def_arg(): Def_argContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Def_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_type(): Func_typeContext | null;
	reserved_keyword(): Reserved_keywordContext | null;
	qual_all_op(): Qual_all_opContext | null;
	numericonly(): NumericonlyContext | null;
	sconst(): SconstContext | null;
	KW_NONE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Old_aggr_definitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	old_aggr_list(): Old_aggr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Old_aggr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	old_aggr_elem(): Old_aggr_elemContext[];
	old_aggr_elem(i: number): Old_aggr_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Old_aggr_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	EQUAL(): antlr.TerminalNode;
	def_arg(): Def_argContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_enum_val_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	enum_val_list(): Enum_val_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Enum_val_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext[];
	sconst(i: number): SconstContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterenumstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TYPE(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	KW_ADD(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode;
	sconst(): SconstContext[];
	sconst(i: number): SconstContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	KW_BEFORE(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_if_not_existsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateopclassstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_OPERATOR(): antlr.TerminalNode;
	KW_CLASS(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	KW_FOR(): antlr.TerminalNode;
	KW_TYPE(): antlr.TerminalNode;
	typename(): TypenameContext;
	KW_USING(): antlr.TerminalNode;
	name(): NameContext;
	KW_AS(): antlr.TerminalNode;
	opclass_item_list(): Opclass_item_listContext;
	opt_default(): Opt_defaultContext | null;
	opt_opfamily(): Opt_opfamilyContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opclass_item_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opclass_item(): Opclass_itemContext[];
	opclass_item(i: number): Opclass_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opclass_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OPERATOR(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	any_operator(): Any_operatorContext | null;
	opclass_purpose(): Opclass_purposeContext | null;
	opt_recheck(): Opt_recheckContext | null;
	operator_with_argtypes(): Operator_with_argtypesContext | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	type_list(): Type_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_STORAGE(): antlr.TerminalNode | null;
	typename(): TypenameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_defaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFAULT(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_opfamilyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FAMILY(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opclass_purposeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_recheckContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RECHECK(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateopfamilystmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_OPERATOR(): antlr.TerminalNode;
	KW_FAMILY(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	KW_USING(): antlr.TerminalNode;
	name(): NameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlteropfamilystmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_OPERATOR(): antlr.TerminalNode;
	KW_FAMILY(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	KW_USING(): antlr.TerminalNode;
	name(): NameContext;
	KW_ADD(): antlr.TerminalNode | null;
	opclass_item_list(): Opclass_item_listContext | null;
	KW_DROP(): antlr.TerminalNode | null;
	opclass_drop_list(): Opclass_drop_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opclass_drop_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opclass_drop(): Opclass_dropContext[];
	opclass_drop(i: number): Opclass_dropContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opclass_dropContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OPERATOR(): antlr.TerminalNode | null;
	iconst(): IconstContext;
	OPEN_PAREN(): antlr.TerminalNode;
	type_list(): Type_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ReassignownedstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REASSIGN(): antlr.TerminalNode;
	KW_OWNED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	role_list(): Role_listContext;
	KW_TO(): antlr.TerminalNode;
	rolespec(): RolespecContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DropstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode | null;
	table_name_list(): Table_name_listContext | null;
	opt_if_exists(): Opt_if_existsContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	name_list(): Name_listContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	view_nameList(): View_nameListContext | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_COLLATION(): antlr.TerminalNode | null;
	KW_CONVERSION(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	KW_DICTIONARY(): antlr.TerminalNode | null;
	KW_TEMPLATE(): antlr.TerminalNode | null;
	KW_CONFIGURATION(): antlr.TerminalNode | null;
	KW_ACCESS(): antlr.TerminalNode | null;
	KW_METHOD(): antlr.TerminalNode | null;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_EXTENSION(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_WRAPPER(): antlr.TerminalNode | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	opt_procedural(): Opt_proceduralContext | null;
	KW_PUBLICATION(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name_list(): Schema_name_listContext | null;
	KW_POLICY(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_ON(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_RULE(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	type_name_list(): Type_name_listContext | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_CONCURRENTLY(): antlr.TerminalNode | null;
	any_name_list(): Any_name_listContext | null;
	KW_CAST(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	KW_AS(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	KW_CLASS(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_FAMILY(): antlr.TerminalNode | null;
	KW_OWNED(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	role_list(): Role_listContext | null;
	KW_SUBSCRIPTION(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespace_name(): Tablespace_nameContext | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_MAPPING(): antlr.TerminalNode | null;
	auth_ident(): Auth_identContext | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	database_name(): Database_nameContext | null;
	drop_option_list(): Drop_option_listContext | null;
	opt_with(): Opt_withContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class View_nameListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	view_name(): View_nameContext[];
	view_name(i: number): View_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Object_type_any_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode | null;
	table_name(): Table_nameContext | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	view_name(): View_nameContext | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_COLLATION(): antlr.TerminalNode | null;
	KW_CONVERSION(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	KW_DICTIONARY(): antlr.TerminalNode | null;
	KW_TEMPLATE(): antlr.TerminalNode | null;
	KW_CONFIGURATION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Object_type_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ACCESS(): antlr.TerminalNode | null;
	KW_METHOD(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_EXTENSION(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_WRAPPER(): antlr.TerminalNode | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	opt_procedural(): Opt_proceduralContext | null;
	KW_PUBLICATION(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	database_name(): Database_nameContext | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_SUBSCRIPTION(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespace_name(): Tablespace_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Object_type_name_on_any_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_POLICY(): antlr.TerminalNode | null;
	KW_RULE(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Any_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_name(): Any_nameContext[];
	any_name(i: number): Any_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Relation_column_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	relation_name(): Relation_nameContext;
	DOT(): antlr.TerminalNode;
	column_name(): Column_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Relation_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	attrs(): AttrsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Any_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	attrs(): AttrsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AttrsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	attr_name(): Attr_nameContext[];
	attr_name(i: number): Attr_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Type_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TruncatestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TRUNCATE(): antlr.TerminalNode;
	truncate_table(): Truncate_tableContext[];
	truncate_table(i: number): Truncate_tableContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	KW_IDENTITY(): antlr.TerminalNode | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_CONTINUE(): antlr.TerminalNode | null;
	KW_RESTART(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Truncate_tableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name(): Table_nameContext;
	KW_ONLY(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CommentstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMENT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	object_type_any_name(): Object_type_any_nameContext | null;
	KW_IS(): antlr.TerminalNode;
	comment_text(): Comment_textContext;
	KW_COLUMN(): antlr.TerminalNode | null;
	relation_column_name(): Relation_column_nameContext | null;
	object_type_name(): Object_type_nameContext | null;
	KW_TYPE(): antlr.TerminalNode | null;
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	aggregate_with_argtypes(): Aggregate_with_argtypesContext | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	operator_with_argtypes(): Operator_with_argtypesContext | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	name(): NameContext | null;
	table_name(): Table_nameContext | null;
	any_name(): Any_nameContext | null;
	KW_POLICY(): antlr.TerminalNode | null;
	KW_RULE(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	KW_CLASS(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_FAMILY(): antlr.TerminalNode | null;
	KW_LARGE(): antlr.TerminalNode | null;
	KW_OBJECT(): antlr.TerminalNode | null;
	numericonly(): NumericonlyContext | null;
	KW_CAST(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Comment_textContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SeclabelstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SECURITY(): antlr.TerminalNode;
	KW_LABEL(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	KW_COLUMN(): antlr.TerminalNode | null;
	column_name(): Column_nameContext | null;
	KW_IS(): antlr.TerminalNode;
	security_label(): Security_labelContext;
	opt_provider(): Opt_providerContext | null;
	KW_TYPE(): antlr.TerminalNode | null;
	typename(): TypenameContext | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	aggregate_with_argtypes(): Aggregate_with_argtypesContext | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	KW_LARGE(): antlr.TerminalNode | null;
	KW_OBJECT(): antlr.TerminalNode | null;
	numericonly(): NumericonlyContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	object_type_any_name(): Object_type_any_nameContext | null;
	object_type_name(): Object_type_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_providerContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Security_labelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class FetchstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FETCH(): antlr.TerminalNode | null;
	fetch_args(): Fetch_argsContext;
	KW_MOVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Fetch_argsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	cursor_name(): Cursor_nameContext;
	from_in(): From_inContext | null;
	KW_NEXT(): antlr.TerminalNode | null;
	opt_from_in(): Opt_from_inContext | null;
	KW_PRIOR(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_ABSOLUTE(): antlr.TerminalNode | null;
	signediconst(): SignediconstContext | null;
	KW_RELATIVE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_FORWARD(): antlr.TerminalNode | null;
	KW_BACKWARD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class From_inContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_from_inContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	from_in(): From_inContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class GrantstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode;
	privileges(): PrivilegesContext;
	KW_ON(): antlr.TerminalNode;
	privilege_target(): Privilege_targetContext;
	KW_TO(): antlr.TerminalNode;
	grantee_list(): Grantee_listContext;
	opt_grant_grant_option(): Opt_grant_grant_optionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RevokestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REVOKE(): antlr.TerminalNode;
	privileges(): PrivilegesContext;
	KW_ON(): antlr.TerminalNode;
	privilege_target(): Privilege_targetContext;
	KW_FROM(): antlr.TerminalNode;
	grantee_list(): Grantee_listContext;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	privilege_list(): Privilege_listContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	beforeprivilegeselectlist(): BeforeprivilegeselectlistContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class BeforeprivilegeselectlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	beforeprivilegeselect(): BeforeprivilegeselectContext[];
	beforeprivilegeselect(i: number): BeforeprivilegeselectContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class BeforeprivilegeselectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_PEFERENCES(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_USAGE(): antlr.TerminalNode | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_CONNECT(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TEMP(): antlr.TerminalNode | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Privilege_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	privilege(): PrivilegeContext[];
	privilege(i: number): PrivilegeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PrivilegeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode | null;
	opt_column_list(): Opt_column_listContext | null;
	KW_REFERENCES(): antlr.TerminalNode | null;
	KW_CREATE(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Privilege_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualified_name_list(): Qualified_name_listContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	table_name_list(): Table_name_listContext | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_WRAPPER(): antlr.TerminalNode | null;
	name_list(): Name_listContext | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes_list(): Function_with_argtypes_listContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes_list(): Procedure_with_argtypes_listContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes_list(): Routine_with_argtypes_listContext | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	database_nameList(): Database_nameListContext | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	any_name_list(): Any_name_listContext | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	KW_LARGE(): antlr.TerminalNode | null;
	KW_OBJECT(): antlr.TerminalNode | null;
	numericonly_list(): Numericonly_listContext | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name_list(): Schema_name_listContext | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespace_name_list(): Tablespace_name_listContext | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_SEQUENCES(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_PROCEDURES(): antlr.TerminalNode | null;
	KW_ROUTINES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Grantee_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	grantee(): GranteeContext[];
	grantee(i: number): GranteeContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class GranteeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rolespec(): RolespecContext;
	KW_GROUP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_grant_grant_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_GRANT(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class GrantrolestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode;
	privilege_list(): Privilege_listContext;
	KW_TO(): antlr.TerminalNode;
	role_list(): Role_listContext;
	opt_grant_admin_option(): Opt_grant_admin_optionContext | null;
	opt_granted_by(): Opt_granted_byContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RevokerolestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REVOKE(): antlr.TerminalNode;
	privilege_list(): Privilege_listContext;
	KW_FROM(): antlr.TerminalNode;
	role_list(): Role_listContext;
	opt_granted_by(): Opt_granted_byContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_grant_admin_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_ADMIN(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_granted_byContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANTED(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	rolespec(): RolespecContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterdefaultprivilegesstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_DEFAULT(): antlr.TerminalNode;
	KW_PRIVILEGES(): antlr.TerminalNode;
	defacloptionlist(): DefacloptionlistContext;
	defaclaction(): DefaclactionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DefacloptionlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	defacloption(): DefacloptionContext[];
	defacloption(i: number): DefacloptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DefacloptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IN(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name_list(): Schema_name_listContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	role_list(): Role_listContext | null;
	KW_USER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DefaclactionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GRANT(): antlr.TerminalNode | null;
	privileges(): PrivilegesContext;
	KW_ON(): antlr.TerminalNode;
	defacl_privilege_target(): Defacl_privilege_targetContext;
	KW_TO(): antlr.TerminalNode | null;
	grantee_list(): Grantee_listContext;
	opt_grant_grant_option(): Opt_grant_grant_optionContext | null;
	KW_REVOKE(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Defacl_privilege_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLES(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_ROUTINES(): antlr.TerminalNode | null;
	KW_SEQUENCES(): antlr.TerminalNode | null;
	KW_TYPES(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class IndexstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_INDEX(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	relation_expr(): Relation_exprContext;
	OPEN_PAREN(): antlr.TerminalNode;
	index_params(): Index_paramsContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	opt_unique(): Opt_uniqueContext | null;
	opt_concurrently(): Opt_concurrentlyContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opt_index_name(): Opt_index_nameContext | null;
	access_method_clause(): Access_method_clauseContext | null;
	opt_include(): Opt_includeContext | null;
	nulls_distinct(): Nulls_distinctContext | null;
	opt_reloptions(): Opt_reloptionsContext | null;
	opttablespace(): OpttablespaceContext | null;
	where_clause(): Where_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_uniqueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNIQUE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_concurrentlyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CONCURRENTLY(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_index_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	name(): NameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Access_method_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	name(): NameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_paramsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	index_elem(): Index_elemContext[];
	index_elem(i: number): Index_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_elem_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_collate(): Opt_collateContext | null;
	opt_class(): Opt_classContext | null;
	opt_asc_desc(): Opt_asc_descContext | null;
	opt_nulls_order(): Opt_nulls_orderContext | null;
	any_name(): Any_nameContext | null;
	reloptions(): ReloptionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name(): Column_nameContext | null;
	index_elem_options(): Index_elem_optionsContext;
	func_expr_windowless(): Func_expr_windowlessContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_includeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INCLUDE(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	index_including_params(): Index_including_paramsContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_including_paramsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	index_elem(): Index_elemContext[];
	index_elem(i: number): Index_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_collateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COLLATE(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_classContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_name(): Any_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_asc_descContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ASC(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_nulls_orderContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULLS(): antlr.TerminalNode;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatefunctionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	func_args_with_defaults(): Func_args_with_defaultsContext;
	createfunc_opt_list(): Createfunc_opt_listContext;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_name_create(): Function_name_createContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_name_create(): Procedure_name_createContext | null;
	opt_or_replace(): Opt_or_replaceContext | null;
	KW_RETURNS(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	attrilist(): AttrilistContext | null;
	func_return(): Func_returnContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	table_func_column_list(): Table_func_column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AttrilistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	colid(): ColidContext[];
	colid(i: number): ColidContext | null;
	CLOSE_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_or_replaceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OR(): antlr.TerminalNode;
	KW_REPLACE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_argsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	func_args_list(): Func_args_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_args_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_arg(): Func_argContext[];
	func_arg(i: number): Func_argContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Routine_with_argtypes_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	routine_with_argtypes(): Routine_with_argtypesContext[];
	routine_with_argtypes(i: number): Routine_with_argtypesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Routine_with_argtypesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	routine_name(): Routine_nameContext | null;
	func_args(): Func_argsContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Procedure_with_argtypes_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	procedure_with_argtypes(): Procedure_with_argtypesContext[];
	procedure_with_argtypes(i: number): Procedure_with_argtypesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Procedure_with_argtypesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	procedure_name(): Procedure_nameContext | null;
	func_args(): Func_argsContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Function_with_argtypes_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	function_with_argtypes(): Function_with_argtypesContext[];
	function_with_argtypes(i: number): Function_with_argtypesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Function_with_argtypesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	function_name(): Function_nameContext | null;
	func_args(): Func_argsContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_args_with_defaultsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	func_args_with_defaults_list(): Func_args_with_defaults_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_args_with_defaults_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_arg_with_default(): Func_arg_with_defaultContext[];
	func_arg_with_default(i: number): Func_arg_with_defaultContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	arg_class(): Arg_classContext | null;
	func_type(): Func_typeContext;
	param_name(): Param_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Arg_classContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IN(): antlr.TerminalNode | null;
	KW_OUT(): antlr.TerminalNode | null;
	KW_INOUT(): antlr.TerminalNode | null;
	KW_VARIADIC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Param_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	type_function_name(): Type_function_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_returnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_type(): Func_typeContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	typename(): TypenameContext | null;
	type_function_name(): Type_function_nameContext | null;
	attrs(): AttrsContext | null;
	PERCENT(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_SETOF(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_arg_with_defaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_arg(): Func_argContext;
	a_expr(): A_exprContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Aggr_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_arg(): Func_argContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Aggr_argsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	STAR(): antlr.TerminalNode | null;
	aggr_args_list(): Aggr_args_listContext[];
	aggr_args_list(i: number): Aggr_args_listContext | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Aggr_args_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	aggr_arg(): Aggr_argContext[];
	aggr_arg(i: number): Aggr_argContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Aggregate_with_argtypesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	function_name(): Function_nameContext;
	aggr_args(): Aggr_argsContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Aggregate_with_argtypes_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	aggregate_with_argtypes(): Aggregate_with_argtypesContext[];
	aggregate_with_argtypes(i: number): Aggregate_with_argtypesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Createfunc_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createfunc_opt_item(): Createfunc_opt_itemContext[];
	createfunc_opt_item(i: number): Createfunc_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Common_func_opt_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CALLED(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode[];
	KW_NULL(i: number): antlr.TerminalNode | null;
	KW_INPUT(): antlr.TerminalNode | null;
	KW_RETURNS(): antlr.TerminalNode | null;
	KW_STRICT(): antlr.TerminalNode | null;
	KW_IMMUTABLE(): antlr.TerminalNode | null;
	KW_STABLE(): antlr.TerminalNode | null;
	KW_VOLATILE(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	KW_LEAKPROOF(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	numericonly(): NumericonlyContext | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_SUPPORT(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	functionsetresetclause(): FunctionsetresetclauseContext | null;
	KW_PARALLEL(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Createfunc_opt_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode | null;
	sconst(): SconstContext[];
	sconst(i: number): SconstContext | null;
	COMMA(): antlr.TerminalNode | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	transform_type_list(): Transform_type_listContext | null;
	KW_WINDOW(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	colid(): ColidContext[];
	colid(i: number): ColidContext | null;
	KW_TO(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	stmt(): StmtContext | null;
	common_func_opt_item(): Common_func_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Transform_type_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode[];
	KW_FOR(i: number): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode[];
	KW_TYPE(i: number): antlr.TerminalNode | null;
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_definitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	definition(): DefinitionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_func_columnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name(): Column_nameContext;
	func_type(): Func_typeContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_func_column_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_func_column(): Table_func_columnContext[];
	table_func_column(i: number): Table_func_columnContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterfunctionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	alterFunctionTypeClause(): AlterFunctionTypeClauseContext;
	alterfunc_opt_list(): Alterfunc_opt_listContext;
	opt_restrict(): Opt_restrictContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterFunctionTypeClauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alterfunc_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	common_func_opt_item(): Common_func_opt_itemContext[];
	common_func_opt_item(i: number): Common_func_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_restrictContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RESTRICT(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RemovefuncstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes_list(): Function_with_argtypes_listContext | null;
	opt_if_exists(): Opt_if_existsContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes_list(): Procedure_with_argtypes_listContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes_list(): Routine_with_argtypes_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RemoveaggrstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_AGGREGATE(): antlr.TerminalNode;
	aggregate_with_argtypes_list(): Aggregate_with_argtypes_listContext;
	opt_if_exists(): Opt_if_existsContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RemoveoperstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DROP(): antlr.TerminalNode;
	KW_OPERATOR(): antlr.TerminalNode;
	operator_with_argtypes_list(): Operator_with_argtypes_listContext;
	opt_if_exists(): Opt_if_existsContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Oper_argtypesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	CLOSE_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Any_operatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	all_op(): All_opContext;
	colid(): ColidContext[];
	colid(i: number): ColidContext | null;
	DOT(): antlr.TerminalNode[];
	DOT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Operator_with_argtypes_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	operator_with_argtypes(): Operator_with_argtypesContext[];
	operator_with_argtypes(i: number): Operator_with_argtypesContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Operator_with_argtypesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_operator(): Any_operatorContext;
	oper_argtypes(): Oper_argtypesContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DostmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DO(): antlr.TerminalNode;
	dostmt_opt_list(): Dostmt_opt_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Dostmt_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	dostmt_opt_item(): Dostmt_opt_itemContext[];
	dostmt_opt_item(i: number): Dostmt_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Dostmt_opt_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	nonreservedword_or_sconst(): Nonreservedword_or_sconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatecaststmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_CAST(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	KW_AS(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	KW_WITH(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	cast_context(): Cast_contextContext | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_INOUT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cast_contextContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	KW_IMPLICIT(): antlr.TerminalNode | null;
	KW_ASSIGNMENT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_if_existsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode;
	KW_EXISTS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatetransformstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_TRANSFORM(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode;
	typename(): TypenameContext;
	KW_LANGUAGE(): antlr.TerminalNode;
	name(): NameContext;
	OPEN_PAREN(): antlr.TerminalNode;
	transform_element_list(): Transform_element_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	opt_or_replace(): Opt_or_replaceContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Transform_element_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode | null;
	KW_SQL(): antlr.TerminalNode[];
	KW_SQL(i: number): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode[];
	KW_WITH(i: number): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode[];
	KW_FUNCTION(i: number): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext[];
	function_with_argtypes(i: number): Function_with_argtypesContext | null;
	COMMA(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ReindexstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REINDEX(): antlr.TerminalNode;
	reindex_target_type(): Reindex_target_typeContext | null;
	reindex_target_multitable(): Reindex_target_multitableContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	reindex_option_list(): Reindex_option_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reindex_target_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INDEX(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	opt_concurrently(): Opt_concurrentlyContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	table_name(): Table_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reindex_target_multitableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	opt_concurrently(): Opt_concurrentlyContext | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	database_name(): Database_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reindex_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	reindex_option_elem(): Reindex_option_elemContext[];
	reindex_option_elem(i: number): Reindex_option_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reindex_option_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VERBOSE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltertblspcstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TABLESPACE(): antlr.TerminalNode;
	tablespace_name(): Tablespace_nameContext;
	KW_SET(): antlr.TerminalNode | null;
	reloptions(): ReloptionsContext;
	KW_RESET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RenamestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	aggregate_with_argtypes(): Aggregate_with_argtypesContext | null;
	KW_RENAME(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	name(): NameContext[];
	name(i: number): NameContext | null;
	KW_COLLATION(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_CONVERSION(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	database_name(): Database_nameContext | null;
	database_name_create(): Database_name_createContext | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_WRAPPER(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	function_name_create(): Function_name_createContext | null;
	KW_GROUP(): antlr.TerminalNode | null;
	roleid(): RoleidContext[];
	roleid(i: number): RoleidContext | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	opt_procedural(): Opt_proceduralContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	KW_CLASS(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_FAMILY(): antlr.TerminalNode | null;
	KW_POLICY(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	opt_if_exists(): Opt_if_existsContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	procedure_name_create(): Procedure_name_createContext | null;
	KW_PUBLICATION(): antlr.TerminalNode | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	schema_name_create(): Schema_name_createContext | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_SUBSCRIPTION(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	relation_expr(): Relation_exprContext | null;
	table_name_create(): Table_name_createContext | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	view_name(): View_nameContext | null;
	view_name_create(): View_name_createContext | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	column_name(): Column_nameContext | null;
	column_name_create(): Column_name_createContext | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_RULE(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespace_name(): Tablespace_nameContext | null;
	tablespace_name_create(): Tablespace_name_createContext | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	KW_DICTIONARY(): antlr.TerminalNode | null;
	KW_TEMPLATE(): antlr.TerminalNode | null;
	KW_CONFIGURATION(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_ATTRIBUTE(): antlr.TerminalNode | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_set_dataContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode;
	KW_DATA(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterobjectdependsstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	KW_DEPENDS(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode[];
	KW_ON(i: number): antlr.TerminalNode | null;
	KW_EXTENSION(): antlr.TerminalNode;
	name(): NameContext[];
	name(i: number): NameContext | null;
	opt_no(): Opt_noContext | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	view_name(): View_nameContext | null;
	KW_INDEX(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_noContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NO(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterobjectschemastmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	aggregate_with_argtypes(): Aggregate_with_argtypesContext | null;
	KW_SET(): antlr.TerminalNode;
	KW_SCHEMA(): antlr.TerminalNode;
	schema_name(): Schema_nameContext;
	KW_COLLATION(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_CONVERSION(): antlr.TerminalNode | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_EXTENSION(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	operator_with_argtypes(): Operator_with_argtypesContext | null;
	KW_CLASS(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_FAMILY(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	relation_expr(): Relation_exprContext | null;
	opt_if_exists(): Opt_if_existsContext | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	KW_DICTIONARY(): antlr.TerminalNode | null;
	KW_TEMPLATE(): antlr.TerminalNode | null;
	KW_CONFIGURATION(): antlr.TerminalNode | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	KW_VIEW(): antlr.TerminalNode | null;
	view_name(): View_nameContext | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlteroperatorstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_OPERATOR(): antlr.TerminalNode;
	operator_with_argtypes(): Operator_with_argtypesContext;
	KW_SET(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	operator_def_list(): Operator_def_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Operator_def_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	operator_def_elem(): Operator_def_elemContext[];
	operator_def_elem(i: number): Operator_def_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Operator_def_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	collabel(): CollabelContext;
	EQUAL(): antlr.TerminalNode;
	KW_NONE(): antlr.TerminalNode | null;
	operator_def_arg(): Operator_def_argContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Operator_def_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_type(): Func_typeContext | null;
	reserved_keyword(): Reserved_keywordContext | null;
	qual_all_op(): Qual_all_opContext | null;
	numericonly(): NumericonlyContext | null;
	sconst(): SconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltertypestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TYPE(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	KW_SET(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	operator_def_list(): Operator_def_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterownerstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	aggregate_with_argtypes(): Aggregate_with_argtypesContext | null;
	KW_OWNER(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode;
	rolespec(): RolespecContext;
	KW_COLLATION(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_CONVERSION(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	database_name(): Database_nameContext | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	function_with_argtypes(): Function_with_argtypesContext | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	name(): NameContext | null;
	opt_procedural(): Opt_proceduralContext | null;
	KW_LARGE(): antlr.TerminalNode | null;
	KW_OBJECT(): antlr.TerminalNode | null;
	numericonly(): NumericonlyContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	operator_with_argtypes(): Operator_with_argtypesContext | null;
	KW_CLASS(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_FAMILY(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	procedure_with_argtypes(): Procedure_with_argtypesContext | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	routine_with_argtypes(): Routine_with_argtypesContext | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespace_name(): Tablespace_nameContext | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_DICTIONARY(): antlr.TerminalNode | null;
	KW_CONFIGURATION(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_WRAPPER(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_PUBLICATION(): antlr.TerminalNode | null;
	KW_SUBSCRIPTION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatepublicationstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_PUBLICATION(): antlr.TerminalNode;
	name(): NameContext;
	opt_publication_for_tables(): Opt_publication_for_tablesContext | null;
	opt_definition(): Opt_definitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_publication_for_tablesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	publication_for_tables(): Publication_for_tablesContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Publication_for_tablesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	KW_TABLE(): antlr.TerminalNode | null;
	relation_expr_list(): Relation_expr_listContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterpublicationstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_PUBLICATION(): antlr.TerminalNode;
	name(): NameContext[];
	name(i: number): NameContext | null;
	KW_SET(): antlr.TerminalNode | null;
	definition(): DefinitionContext | null;
	KW_ADD(): antlr.TerminalNode | null;
	publication_relation_expr_list(): Publication_relation_expr_listContext | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	rolespec(): RolespecContext | null;
	KW_RENAME(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatesubscriptionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_SUBSCRIPTION(): antlr.TerminalNode;
	name(): NameContext;
	KW_CONNECTION(): antlr.TerminalNode;
	sconst(): SconstContext;
	KW_PUBLICATION(): antlr.TerminalNode;
	publication_name_list(): Publication_name_listContext;
	opt_definition(): Opt_definitionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Publication_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	publication_name_item(): Publication_name_itemContext[];
	publication_name_item(i: number): Publication_name_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Publication_name_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	collabel(): CollabelContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltersubscriptionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_SUBSCRIPTION(): antlr.TerminalNode;
	name(): NameContext;
	KW_SET(): antlr.TerminalNode | null;
	definition(): DefinitionContext | null;
	KW_CONNECTION(): antlr.TerminalNode | null;
	sconst(): SconstContext | null;
	KW_REFRESH(): antlr.TerminalNode | null;
	KW_PUBLICATION(): antlr.TerminalNode | null;
	opt_definition(): Opt_definitionContext | null;
	publication_name_list(): Publication_name_listContext | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_SKIP(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	old_aggr_elem(): Old_aggr_elemContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	rolespec(): RolespecContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RulestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_RULE(): antlr.TerminalNode;
	name(): NameContext;
	KW_AS(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode;
	event(): EventContext;
	KW_TO(): antlr.TerminalNode;
	qualified_name(): Qualified_nameContext;
	KW_DO(): antlr.TerminalNode;
	ruleactionlist(): RuleactionlistContext;
	opt_or_replace(): Opt_or_replaceContext | null;
	where_clause(): Where_clauseContext | null;
	opt_instead(): Opt_insteadContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RuleactionlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOTHING(): antlr.TerminalNode | null;
	ruleactionstmt(): RuleactionstmtContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	ruleactionmulti(): RuleactionmultiContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RuleactionmultiContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ruleactionstmtOrEmpty(): RuleactionstmtOrEmptyContext[];
	ruleactionstmtOrEmpty(i: number): RuleactionstmtOrEmptyContext | null;
	SEMI(): antlr.TerminalNode[];
	SEMI(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RuleactionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectstmt(): SelectstmtContext | null;
	insertstmt(): InsertstmtContext | null;
	updatestmt(): UpdatestmtContext | null;
	deletestmt(): DeletestmtContext | null;
	notifystmt(): NotifystmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RuleactionstmtOrEmptyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	ruleactionstmt(): RuleactionstmtContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class EventContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_insteadContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSTEAD(): antlr.TerminalNode | null;
	KW_ALSO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class NotifystmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOTIFY(): antlr.TerminalNode;
	colid(): ColidContext;
	notify_payload(): Notify_payloadContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Notify_payloadContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COMMA(): antlr.TerminalNode;
	sconst(): SconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ListenstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LISTEN(): antlr.TerminalNode;
	colid(): ColidContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class UnlistenstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNLISTEN(): antlr.TerminalNode;
	colid(): ColidContext | null;
	STAR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TransactionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ABORT(): antlr.TerminalNode | null;
	opt_transaction(): Opt_transactionContext | null;
	opt_transaction_chain(): Opt_transaction_chainContext | null;
	KW_BEGIN(): antlr.TerminalNode | null;
	transaction_mode_list_or_empty(): Transaction_mode_list_or_emptyContext | null;
	KW_START(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode | null;
	KW_SAVEPOINT(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	KW_RELEASE(): antlr.TerminalNode | null;
	KW_PREPARE(): antlr.TerminalNode | null;
	sconst(): SconstContext | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_PREPARED(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_transactionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WORK(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Transaction_mode_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	iso_level(): Iso_levelContext | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	KW_DEFERRABLE(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Transaction_mode_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	transaction_mode_item(): Transaction_mode_itemContext[];
	transaction_mode_item(i: number): Transaction_mode_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Transaction_mode_list_or_emptyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	transaction_mode_list(): Transaction_mode_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_transaction_chainContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AND(): antlr.TerminalNode;
	KW_CHAIN(): antlr.TerminalNode;
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ViewstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: ViewstmtContext): void;
}
export declare class CreateViewContext extends ViewstmtContext {
	constructor(ctx: ViewstmtContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_AS(): antlr.TerminalNode;
	selectstmt(): SelectstmtContext;
	KW_VIEW(): antlr.TerminalNode | null;
	view_name_create(): View_name_createContext | null;
	KW_RECURSIVE(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	opttemp(): OpttempContext | null;
	opt_check_option(): Opt_check_optionContext | null;
	opt_column_list_create(): Opt_column_list_createContext | null;
	opt_reloptions(): Opt_reloptionsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_check_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_CHECK(): antlr.TerminalNode;
	KW_OPTION(): antlr.TerminalNode;
	KW_CASCADED(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class LoadstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOAD(): antlr.TerminalNode;
	file_name(): File_nameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatedbstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: CreatedbstmtContext): void;
}
export declare class CreateDatabaseContext extends CreatedbstmtContext {
	constructor(ctx: CreatedbstmtContext);
	KW_CREATE(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	database_name_create(): Database_name_createContext;
	opt_with(): Opt_withContext | null;
	createdb_opt_list(): Createdb_opt_listContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Createdb_opt_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createdb_opt_items(): Createdb_opt_itemsContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Createdb_opt_itemsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createdb_opt_item(): Createdb_opt_itemContext[];
	createdb_opt_item(i: number): Createdb_opt_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Createdb_opt_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	createdb_opt_name(): Createdb_opt_nameContext;
	signediconst(): SignediconstContext | null;
	opt_boolean_or_string(): Opt_boolean_or_stringContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	opt_equal(): Opt_equalContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Createdb_opt_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CONNECTION(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_ENCODING(): antlr.TerminalNode | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	KW_TEMPLATE(): antlr.TerminalNode | null;
	identifier(): IdentifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_equalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterdatabasestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	database_name(): Database_nameContext;
	KW_SET(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	tablespace_name_create(): Tablespace_name_createContext | null;
	createdb_opt_list(): Createdb_opt_listContext | null;
	KW_WITH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterdatabasesetstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_DATABASE(): antlr.TerminalNode;
	database_name(): Database_nameContext;
	setresetclause(): SetresetclauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Drop_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	drop_option(): Drop_optionContext[];
	drop_option(i: number): Drop_optionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Drop_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FORCE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltercollationstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_COLLATION(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	KW_REFRESH(): antlr.TerminalNode;
	KW_VERSION(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltersystemstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_SYSTEM(): antlr.TerminalNode;
	generic_set(): Generic_setContext;
	KW_SET(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreatedomainstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_DOMAIN(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	typename(): TypenameContext;
	colquallist(): ColquallistContext;
	opt_as(): Opt_asContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AlterdomainstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_DOMAIN(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	alter_column_default(): Alter_column_defaultContext | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	tableconstraint(): TableconstraintContext | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	name(): NameContext | null;
	KW_VALIDATE(): antlr.TerminalNode | null;
	opt_if_exists(): Opt_if_existsContext | null;
	opt_drop_behavior(): Opt_drop_behaviorContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_asContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltertsdictionarystmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode;
	KW_TEXT(): antlr.TerminalNode;
	KW_SEARCH(): antlr.TerminalNode;
	KW_DICTIONARY(): antlr.TerminalNode;
	any_name(): Any_nameContext;
	definition(): DefinitionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AltertsconfigurationstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALTER(): antlr.TerminalNode[];
	KW_ALTER(i: number): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode;
	KW_SEARCH(): antlr.TerminalNode;
	KW_CONFIGURATION(): antlr.TerminalNode;
	any_name(): Any_nameContext[];
	any_name(i: number): Any_nameContext | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_MAPPING(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode | null;
	name_list(): Name_listContext | null;
	any_with(): Any_withContext | null;
	any_name_list(): Any_name_listContext | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	opt_if_exists(): Opt_if_existsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Any_withContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CreateconversionstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CREATE(): antlr.TerminalNode;
	KW_CONVERSION(): antlr.TerminalNode;
	any_name(): Any_nameContext[];
	any_name(i: number): Any_nameContext | null;
	KW_FOR(): antlr.TerminalNode;
	sconst(): SconstContext[];
	sconst(i: number): SconstContext | null;
	KW_TO(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	opt_default(): Opt_defaultContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ClusterstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLUSTER(): antlr.TerminalNode;
	table_name(): Table_nameContext | null;
	opt_verbose(): Opt_verboseContext | null;
	cluster_index_specification(): Cluster_index_specificationContext | null;
	opt_verbose_list(): Opt_verbose_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_verbose_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	opt_verbose(): Opt_verboseContext[];
	opt_verbose(i: number): Opt_verboseContext | null;
	CLOSE_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cluster_index_specificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	name(): NameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class VacuumstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VACUUM(): antlr.TerminalNode;
	opt_full(): Opt_fullContext | null;
	opt_freeze(): Opt_freezeContext | null;
	opt_verbose(): Opt_verboseContext | null;
	opt_analyze(): Opt_analyzeContext | null;
	opt_vacuum_relation_list(): Opt_vacuum_relation_listContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	vac_analyze_option_list(): Vac_analyze_option_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	analyze_keyword(): Analyze_keywordContext;
	opt_verbose(): Opt_verboseContext | null;
	opt_vacuum_relation_list(): Opt_vacuum_relation_listContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	analyze_options_list(): Analyze_options_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Vac_analyze_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	vac_analyze_option_elem(): Vac_analyze_option_elemContext[];
	vac_analyze_option_elem(i: number): Vac_analyze_option_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Analyze_keywordContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_ANALYSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Vac_analyze_option_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	vac_analyze_option_name(): Vac_analyze_option_nameContext;
	vac_analyze_option_arg(): Vac_analyze_option_argContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Vac_analyze_option_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	nonreservedword(): NonreservedwordContext | null;
	analyze_keyword(): Analyze_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Vac_analyze_option_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_boolean_or_string(): Opt_boolean_or_stringContext | null;
	numericonly(): NumericonlyContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_analyzeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	analyze_keyword(): Analyze_keywordContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Analyze_options_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	analyze_option_elem(): Analyze_option_elemContext[];
	analyze_option_elem(i: number): Analyze_option_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Analyze_option_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_verbose(): Opt_verboseContext | null;
	opt_skiplock(): Opt_skiplockContext | null;
	opt_buffer_usage_limit(): Opt_buffer_usage_limitContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_verboseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VERBOSE(): antlr.TerminalNode;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_skiplockContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SKIP_LOCKED(): antlr.TerminalNode;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_buffer_usage_limitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BUFFER_USAGE_LIMIT(): antlr.TerminalNode;
	numericonly(): NumericonlyContext | null;
	sconst(): SconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_fullContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FULL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_freezeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FREEZE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	column_list(): Column_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Vacuum_relationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name(): Table_nameContext;
	opt_name_list(): Opt_name_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Vacuum_relation_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	vacuum_relation(): Vacuum_relationContext[];
	vacuum_relation(i: number): Vacuum_relationContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_vacuum_relation_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	vacuum_relation_list(): Vacuum_relation_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXPLAIN(): antlr.TerminalNode;
	explainablestmt(): ExplainablestmtContext;
	analyze_keyword(): Analyze_keywordContext | null;
	opt_verbose(): Opt_verboseContext | null;
	KW_VERBOSE(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	explain_option_list(): Explain_option_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainablestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectstmt(): SelectstmtContext | null;
	insertstmt(): InsertstmtContext | null;
	updatestmt(): UpdatestmtContext | null;
	deletestmt(): DeletestmtContext | null;
	declarecursorstmt(): DeclarecursorstmtContext | null;
	createasstmt(): CreateasstmtContext | null;
	creatematviewstmt(): CreatematviewstmtContext | null;
	refreshmatviewstmt(): RefreshmatviewstmtContext | null;
	executestmt(): ExecutestmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Explain_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	explain_option_elem(): Explain_option_elemContext[];
	explain_option_elem(i: number): Explain_option_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Explain_option_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	explain_option_name(): Explain_option_nameContext;
	explain_option_arg(): Explain_option_argContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Explain_option_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	nonreservedword(): NonreservedwordContext | null;
	analyze_keyword(): Analyze_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Explain_option_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_boolean_or_string(): Opt_boolean_or_stringContext | null;
	numericonly(): NumericonlyContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PreparestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PREPARE(): antlr.TerminalNode;
	name(): NameContext;
	KW_AS(): antlr.TerminalNode;
	preparablestmt(): PreparablestmtContext;
	prep_type_clause(): Prep_type_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Prep_type_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	type_list(): Type_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PreparablestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectstmt(): SelectstmtContext | null;
	insertstmt(): InsertstmtContext | null;
	updatestmt(): UpdatestmtContext | null;
	deletestmt(): DeletestmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExecutestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXECUTE(): antlr.TerminalNode;
	name(): NameContext;
	execute_param_clause(): Execute_param_clauseContext | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	create_as_target(): Create_as_targetContext | null;
	KW_AS(): antlr.TerminalNode | null;
	opttemp(): OpttempContext | null;
	opt_if_not_exists(): Opt_if_not_existsContext | null;
	opt_with_data(): Opt_with_dataContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Execute_param_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DeallocatestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEALLOCATE(): antlr.TerminalNode;
	name(): NameContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_PREPARE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class InsertstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: InsertstmtContext): void;
}
export declare class InsertStatementContext extends InsertstmtContext {
	constructor(ctx: InsertstmtContext);
	KW_INSERT(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	insert_target(): Insert_targetContext;
	insert_rest(): Insert_restContext;
	opt_with_clause(): Opt_with_clauseContext | null;
	opt_on_conflict(): Opt_on_conflictContext | null;
	returning_clause(): Returning_clauseContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Insert_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name(): Table_nameContext;
	KW_AS(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Insert_restContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	default_values_or_values(): Default_values_or_valuesContext | null;
	selectstmt(): SelectstmtContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	insert_column_list(): Insert_column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_OVERRIDING(): antlr.TerminalNode | null;
	override_kind(): Override_kindContext | null;
	KW_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Override_kindContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USER(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Insert_column_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	insert_column_item(): Insert_column_itemContext[];
	insert_column_item(i: number): Insert_column_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Insert_column_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name(): Column_nameContext;
	opt_indirection(): Opt_indirectionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_on_conflictContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ON(): antlr.TerminalNode;
	KW_CONFLICT(): antlr.TerminalNode;
	KW_DO(): antlr.TerminalNode;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	set_clause_list(): Set_clause_listContext | null;
	KW_NOTHING(): antlr.TerminalNode | null;
	opt_conf_expr(): Opt_conf_exprContext | null;
	where_clause(): Where_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_conf_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode | null;
	index_params(): Index_paramsContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	where_clause(): Where_clauseContext | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	name(): NameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Returning_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RETURNING(): antlr.TerminalNode;
	target_list(): Target_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DeletestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DELETE(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	relation_expr_opt_alias(): Relation_expr_opt_aliasContext;
	opt_with_clause(): Opt_with_clauseContext | null;
	using_clause(): Using_clauseContext | null;
	where_or_current_clause(): Where_or_current_clauseContext | null;
	returning_clause(): Returning_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Using_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode;
	from_list(): From_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class LockstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOCK(): antlr.TerminalNode;
	relation_expr_list(): Relation_expr_listContext;
	opt_table(): Opt_tableContext | null;
	opt_lock(): Opt_lockContext | null;
	opt_nowait(): Opt_nowaitContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_lockContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IN(): antlr.TerminalNode;
	lock_type(): Lock_typeContext;
	KW_MODE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Lock_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ACCESS(): antlr.TerminalNode | null;
	KW_SHARE(): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_nowaitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOWAIT(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_nowait_or_skipContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOWAIT(): antlr.TerminalNode | null;
	KW_SKIP(): antlr.TerminalNode | null;
	KW_LOCKED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class UpdatestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UPDATE(): antlr.TerminalNode;
	relation_expr_opt_alias(): Relation_expr_opt_aliasContext;
	KW_SET(): antlr.TerminalNode;
	set_clause_list(): Set_clause_listContext;
	opt_with_clause(): Opt_with_clauseContext | null;
	from_clause(): From_clauseContext | null;
	where_or_current_clause(): Where_or_current_clauseContext | null;
	returning_clause(): Returning_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_clause_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	set_clause(): Set_clauseContext[];
	set_clause(i: number): Set_clauseContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	set_target(): Set_targetContext | null;
	EQUAL(): antlr.TerminalNode;
	a_expr(): A_exprContext | null;
	OPEN_PAREN(): antlr.TerminalNode[];
	OPEN_PAREN(i: number): antlr.TerminalNode | null;
	set_target_list(): Set_target_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode[];
	CLOSE_PAREN(i: number): antlr.TerminalNode | null;
	select_clause(): Select_clauseContext | null;
	KW_ROW(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name(): Column_nameContext;
	opt_indirection(): Opt_indirectionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_target_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	set_target(): Set_targetContext[];
	set_target(i: number): Set_targetContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class DeclarecursorstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DECLARE(): antlr.TerminalNode;
	cursor_name(): Cursor_nameContext;
	cursor_options(): Cursor_optionsContext;
	KW_CURSOR(): antlr.TerminalNode;
	opt_hold(): Opt_holdContext;
	KW_FOR(): antlr.TerminalNode;
	selectstmt(): SelectstmtContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cursor_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	name(): NameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cursor_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NO(): antlr.TerminalNode[];
	KW_NO(i: number): antlr.TerminalNode | null;
	KW_SCROLL(): antlr.TerminalNode[];
	KW_SCROLL(i: number): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode[];
	KW_BINARY(i: number): antlr.TerminalNode | null;
	KW_INSENSITIVE(): antlr.TerminalNode[];
	KW_INSENSITIVE(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_holdContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode | null;
	KW_HOLD(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SelectstmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: SelectstmtContext): void;
}
export declare class SelectStatementContext extends SelectstmtContext {
	constructor(ctx: SelectstmtContext);
	select_no_parens(): Select_no_parensContext | null;
	select_with_parens(): Select_with_parensContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Select_with_parensContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	select_no_parens(): Select_no_parensContext | null;
	CLOSE_PAREN(): antlr.TerminalNode;
	select_with_parens(): Select_with_parensContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Select_no_parensContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	select_clause(): Select_clauseContext;
	opt_sort_clause(): Opt_sort_clauseContext | null;
	for_locking_clause(): For_locking_clauseContext | null;
	select_limit(): Select_limitContext | null;
	opt_select_limit(): Opt_select_limitContext | null;
	opt_for_locking_clause(): Opt_for_locking_clauseContext | null;
	with_clause(): With_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Select_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	simple_select(): Simple_selectContext | null;
	select_with_parens(): Select_with_parensContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Simple_selectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SELECT(): antlr.TerminalNode | null;
	values_clause(): Values_clauseContext | null;
	KW_TABLE(): antlr.TerminalNode | null;
	relation_expr(): Relation_exprContext | null;
	select_with_parens(): Select_with_parensContext[];
	select_with_parens(i: number): Select_with_parensContext | null;
	set_operator_with_all_or_distinct(): Set_operator_with_all_or_distinctContext[];
	set_operator_with_all_or_distinct(i: number): Set_operator_with_all_or_distinctContext | null;
	simple_select(): Simple_selectContext[];
	simple_select(i: number): Simple_selectContext | null;
	into_clause(): Into_clauseContext[];
	into_clause(i: number): Into_clauseContext | null;
	from_clause(): From_clauseContext | null;
	where_clause(): Where_clauseContext | null;
	group_clause(): Group_clauseContext | null;
	having_clause(): Having_clauseContext | null;
	window_clause(): Window_clauseContext | null;
	opt_all_clause(): Opt_all_clauseContext | null;
	opt_target_list(): Opt_target_listContext | null;
	distinct_clause(): Distinct_clauseContext | null;
	target_list(): Target_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_operatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Set_operatorContext): void;
}
export declare class IntersectContext extends Set_operatorContext {
	constructor(ctx: Set_operatorContext);
	KW_INTERSECT(): antlr.TerminalNode;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExceptContext extends Set_operatorContext {
	constructor(ctx: Set_operatorContext);
	KW_EXCEPT(): antlr.TerminalNode;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class UnionContext extends Set_operatorContext {
	constructor(ctx: Set_operatorContext);
	KW_UNION(): antlr.TerminalNode;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Set_operator_with_all_or_distinctContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	set_operator(): Set_operatorContext;
	all_or_distinct(): All_or_distinctContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class With_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	cte_list(): Cte_listContext;
	KW_RECURSIVE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cte_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	common_table_expr(): Common_table_exprContext[];
	common_table_expr(i: number): Common_table_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Common_table_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	name(): NameContext;
	KW_AS(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	preparablestmt(): PreparablestmtContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	opt_name_list(): Opt_name_listContext | null;
	opt_materialized(): Opt_materializedContext | null;
	search_cluase(): Search_cluaseContext | null;
	cycle_cluase(): Cycle_cluaseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Search_cluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SEARCH(): antlr.TerminalNode;
	KW_FIRST(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	column_list(): Column_listContext;
	KW_SET(): antlr.TerminalNode;
	column_name(): Column_nameContext;
	KW_BREADTH(): antlr.TerminalNode | null;
	KW_DEPTH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cycle_cluaseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CYCLE(): antlr.TerminalNode;
	column_list(): Column_listContext;
	KW_SET(): antlr.TerminalNode;
	column_name(): Column_nameContext[];
	column_name(i: number): Column_nameContext | null;
	KW_USING(): antlr.TerminalNode;
	KW_TO(): antlr.TerminalNode | null;
	name(): NameContext[];
	name(i: number): NameContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_materializedContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MATERIALIZED(): antlr.TerminalNode;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_with_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	with_clause(): With_clauseContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Into_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INTO(): antlr.TerminalNode;
	opt_strict(): Opt_strictContext | null;
	opttempTableName(): OpttempTableNameContext | null;
	into_target(): Into_targetContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_strictContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_STRICT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OpttempTableNameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name_create(): Table_name_createContext;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TEMP(): antlr.TerminalNode | null;
	opt_table(): Opt_tableContext | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_UNLOGGED(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_tableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class All_or_distinctContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Distinct_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DISTINCT(): antlr.TerminalNode;
	KW_ON(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_all_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_sort_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sort_clause(): Sort_clauseContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Sort_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ORDER(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	sortby_list(): Sortby_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Sortby_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sortby(): SortbyContext[];
	sortby(i: number): SortbyContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SortbyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_expr_noparen(): Column_expr_noparenContext;
	KW_USING(): antlr.TerminalNode | null;
	qual_all_op(): Qual_all_opContext | null;
	opt_asc_desc(): Opt_asc_descContext | null;
	opt_nulls_order(): Opt_nulls_orderContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Select_limitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	limit_clause(): Limit_clauseContext | null;
	offset_clause(): Offset_clauseContext | null;
	fetch_clause(): Fetch_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_select_limitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	select_limit(): Select_limitContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Limit_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LIMIT(): antlr.TerminalNode;
	select_limit_value(): Select_limit_valueContext;
	COMMA(): antlr.TerminalNode | null;
	select_offset_value(): Select_offset_valueContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Fetch_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FETCH(): antlr.TerminalNode;
	first_or_next(): First_or_nextContext;
	select_fetch_first_value(): Select_fetch_first_valueContext | null;
	row_or_rows(): Row_or_rowsContext | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	KW_TIES(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Offset_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OFFSET(): antlr.TerminalNode;
	select_fetch_first_value(): Select_fetch_first_valueContext | null;
	row_or_rows(): Row_or_rowsContext | null;
	select_offset_value(): Select_offset_valueContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Select_limit_valueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Select_offset_valueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Select_fetch_first_valueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PLUS(): antlr.TerminalNode | null;
	i_or_f_const(): I_or_f_constContext | null;
	MINUS(): antlr.TerminalNode | null;
	c_expr(): C_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class I_or_f_constContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	iconst(): IconstContext | null;
	fconst(): FconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Row_or_rowsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class First_or_nextContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FIRST(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Group_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GROUP(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	group_by_list(): Group_by_listContext;
	all_or_distinct(): All_or_distinctContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Group_by_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	group_by_item(): Group_by_itemContext[];
	group_by_item(i: number): Group_by_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Group_by_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_expr_noparen(): Column_expr_noparenContext | null;
	empty_grouping_set(): Empty_grouping_setContext | null;
	cube_clause(): Cube_clauseContext | null;
	rollup_clause(): Rollup_clauseContext | null;
	grouping_sets_clause(): Grouping_sets_clauseContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	column_expr_list_noparen(): Column_expr_list_noparenContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Empty_grouping_setContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Rollup_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROLLUP(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	column_expr_list_noparen(): Column_expr_list_noparenContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cube_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CUBE(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	column_expr_list_noparen(): Column_expr_list_noparenContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Grouping_sets_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GROUPING(): antlr.TerminalNode;
	KW_SETS(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	group_by_list(): Group_by_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Having_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_HAVING(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class For_locking_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	for_locking_items(): For_locking_itemsContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_for_locking_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	for_locking_clause(): For_locking_clauseContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class For_locking_itemsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	for_locking_item(): For_locking_itemContext[];
	for_locking_item(i: number): For_locking_itemContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class For_locking_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	for_locking_strength(): For_locking_strengthContext;
	locked_rels_list(): Locked_rels_listContext | null;
	opt_nowait_or_skip(): Opt_nowait_or_skipContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class For_locking_strengthContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FOR(): antlr.TerminalNode;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_SHARE(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Locked_rels_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OF(): antlr.TerminalNode;
	qualified_name_list(): Qualified_name_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Values_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUES(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode[];
	OPEN_PAREN(i: number): antlr.TerminalNode | null;
	expr_list(): Expr_listContext[];
	expr_list(i: number): Expr_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode[];
	CLOSE_PAREN(i: number): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class From_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode;
	from_list(): From_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class From_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_ref(): Table_refContext[];
	table_ref(i: number): Table_refContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_refContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_table(): Func_tableContext | null;
	xmltable(): XmltableContext | null;
	select_with_parens(): Select_with_parensContext | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	table_ref(): Table_refContext[];
	table_ref(i: number): Table_refContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_CROSS(): antlr.TerminalNode[];
	KW_CROSS(i: number): antlr.TerminalNode | null;
	KW_JOIN(): antlr.TerminalNode[];
	KW_JOIN(i: number): antlr.TerminalNode | null;
	KW_NATURAL(): antlr.TerminalNode[];
	KW_NATURAL(i: number): antlr.TerminalNode | null;
	join_qual(): Join_qualContext[];
	join_qual(i: number): Join_qualContext | null;
	relation_expr(): Relation_exprContext | null;
	view_relation_expr(): View_relation_exprContext | null;
	opt_alias_clause(): Opt_alias_clauseContext | null;
	tablesample_clause(): Tablesample_clauseContext | null;
	func_alias_clause(): Func_alias_clauseContext | null;
	join_type(): Join_typeContext[];
	join_type(i: number): Join_typeContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Alias_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	KW_AS(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	name_list(): Name_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_alias_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alias_clause(): Alias_clauseContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_alias_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	alias_clause(): Alias_clauseContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	tablefuncelementlist(): TablefuncelementlistContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Join_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FULL(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_INNER(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Join_qualContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Relation_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name(): Table_nameContext | null;
	KW_ONLY(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	KW_CURRENT_SCHEMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class View_relation_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	view_name(): View_nameContext;
	KW_ONLY(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	where_clause(): Where_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Publication_relation_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLE(): antlr.TerminalNode | null;
	table_name(): Table_nameContext | null;
	KW_ONLY(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	where_clause(): Where_clauseContext | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	schema_name(): Schema_nameContext | null;
	KW_CURRENT_SCHEMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Relation_expr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	relation_expr(): Relation_exprContext[];
	relation_expr(i: number): Relation_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Publication_relation_expr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	publication_relation_expr(): Publication_relation_exprContext[];
	publication_relation_expr(i: number): Publication_relation_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Relation_expr_opt_aliasContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	relation_expr(): Relation_exprContext;
	colid(): ColidContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Tablesample_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TABLESAMPLE(): antlr.TerminalNode;
	function_name(): Function_nameContext;
	OPEN_PAREN(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	opt_repeatable_clause(): Opt_repeatable_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_repeatable_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REPEATABLE(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_tableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_expr_windowless(): Func_expr_windowlessContext | null;
	opt_ordinality(): Opt_ordinalityContext | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	rowsfrom_list(): Rowsfrom_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Rowsfrom_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_expr_windowless(): Func_expr_windowlessContext;
	opt_col_def_list(): Opt_col_def_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Rowsfrom_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rowsfrom_item(): Rowsfrom_itemContext[];
	rowsfrom_item(i: number): Rowsfrom_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_col_def_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AS(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	tablefuncelementlist(): TablefuncelementlistContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_ordinalityContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode;
	KW_ORDINALITY(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Where_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHERE(): antlr.TerminalNode;
	column_expr_noparen(): Column_expr_noparenContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Where_or_current_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHERE(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	cursor_name(): Cursor_nameContext | null;
	a_expr(): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class OpttablefuncelementlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablefuncelementlist(): TablefuncelementlistContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TablefuncelementlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablefuncelement(): TablefuncelementContext[];
	tablefuncelement(i: number): TablefuncelementContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TablefuncelementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	typename(): TypenameContext;
	opt_collate_clause(): Opt_collate_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class XmltableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XMLTABLE(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode[];
	OPEN_PAREN(i: number): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode[];
	CLOSE_PAREN(i: number): antlr.TerminalNode | null;
	c_expr(): C_exprContext | null;
	xmlexists_argument(): Xmlexists_argumentContext | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	xmltable_column_list(): Xmltable_column_listContext | null;
	KW_XMLNAMESPACES(): antlr.TerminalNode | null;
	xml_namespace_list(): Xml_namespace_listContext | null;
	COMMA(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xmltable_column_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	xmltable_column_el(): Xmltable_column_elContext[];
	xmltable_column_el(i: number): Xmltable_column_elContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xmltable_column_elContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	typename(): TypenameContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	xmltable_column_option_list(): Xmltable_column_option_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xmltable_column_option_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	xmltable_column_option_el(): Xmltable_column_option_elContext[];
	xmltable_column_option_el(i: number): Xmltable_column_option_elContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xmltable_column_option_elContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEFAULT(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	identifier(): IdentifierContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_namespace_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	xml_namespace_el(): Xml_namespace_elContext[];
	xml_namespace_el(i: number): Xml_namespace_elContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_namespace_elContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	b_expr(): B_exprContext;
	KW_AS(): antlr.TerminalNode | null;
	collabel(): CollabelContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class TypenameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	simpletypename(): SimpletypenameContext | null;
	opt_array_bounds(): Opt_array_boundsContext | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_SETOF(): antlr.TerminalNode | null;
	OPEN_BRACKET(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	CLOSE_BRACKET(): antlr.TerminalNode | null;
	qualified_name(): Qualified_nameContext | null;
	PERCENT(): antlr.TerminalNode | null;
	KW_ROWTYPE(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_array_boundsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_BRACKET(): antlr.TerminalNode[];
	OPEN_BRACKET(i: number): antlr.TerminalNode | null;
	CLOSE_BRACKET(): antlr.TerminalNode[];
	CLOSE_BRACKET(i: number): antlr.TerminalNode | null;
	iconst(): IconstContext[];
	iconst(i: number): IconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SimpletypenameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	generictype(): GenerictypeContext | null;
	numeric(): NumericContext | null;
	bit(): BitContext | null;
	character(): CharacterContext | null;
	constdatetime(): ConstdatetimeContext | null;
	constinterval(): ConstintervalContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	opt_interval(): Opt_intervalContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConsttypenameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	numeric(): NumericContext | null;
	constbit(): ConstbitContext | null;
	constcharacter(): ConstcharacterContext | null;
	constdatetime(): ConstdatetimeContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class GenerictypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	type_function_name(): Type_function_nameContext;
	attrs(): AttrsContext | null;
	opt_type_modifiers(): Opt_type_modifiersContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_type_modifiersContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class NumericContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	opt_float(): Opt_floatContext | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_PRECISION(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	opt_type_modifiers(): Opt_type_modifiersContext | null;
	KW_DEC(): antlr.TerminalNode | null;
	KW_NUMERIC(): antlr.TerminalNode | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_floatContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	iconst(): IconstContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class BitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	bitwithlength(): BitwithlengthContext | null;
	bitwithoutlength(): BitwithoutlengthContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstbitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	bitwithlength(): BitwithlengthContext | null;
	bitwithoutlength(): BitwithoutlengthContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class BitwithlengthContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BIT(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	opt_varying(): Opt_varyingContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class BitwithoutlengthContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BIT(): antlr.TerminalNode;
	opt_varying(): Opt_varyingContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CharacterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	character_c(): Character_cContext;
	OPEN_PAREN(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstcharacterContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	character_c(): Character_cContext;
	OPEN_PAREN(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Character_cContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CHARACTER(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	KW_NCHAR(): antlr.TerminalNode | null;
	opt_varying(): Opt_varyingContext | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_NATIONAL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_varyingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VARYING(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstdatetimeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	opt_timezone(): Opt_timezoneContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ConstintervalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INTERVAL(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_timezoneContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode;
	KW_ZONE(): antlr.TerminalNode;
	KW_WITHOUT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_intervalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_YEAR(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	interval_second(): Interval_secondContext | null;
	KW_TO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Interval_secondContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SECOND(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_escapeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ESCAPE(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_qual(): A_expr_qualContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_qualContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_lessless(): A_expr_lesslessContext;
	qual_op(): Qual_opContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_lesslessContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_or(): A_expr_orContext[];
	a_expr_or(i: number): A_expr_orContext | null;
	LESS_LESS(): antlr.TerminalNode[];
	LESS_LESS(i: number): antlr.TerminalNode | null;
	GREATER_GREATER(): antlr.TerminalNode[];
	GREATER_GREATER(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_orContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_and(): A_expr_andContext[];
	a_expr_and(i: number): A_expr_andContext | null;
	KW_OR(): antlr.TerminalNode[];
	KW_OR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_andContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_in(): A_expr_inContext[];
	a_expr_in(i: number): A_expr_inContext | null;
	KW_AND(): antlr.TerminalNode[];
	KW_AND(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_inContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_unary_not(): A_expr_unary_notContext;
	KW_IN(): antlr.TerminalNode | null;
	in_expr(): In_exprContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_unary_notContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_isnull(): A_expr_isnullContext;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_isnullContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_is_not(): A_expr_is_notContext;
	KW_ISNULL(): antlr.TerminalNode | null;
	KW_NOTNULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_is_notContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_compare(): A_expr_compareContext;
	KW_IS(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	KW_OF(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	type_list(): Type_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_DOCUMENT(): antlr.TerminalNode | null;
	KW_NORMALIZED(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	unicode_normal_form(): Unicode_normal_formContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_compareContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_like(): A_expr_likeContext[];
	a_expr_like(i: number): A_expr_likeContext | null;
	subquery_Op(): Subquery_OpContext | null;
	sub_type(): Sub_typeContext | null;
	LT(): antlr.TerminalNode | null;
	GT(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	LESS_EQUALS(): antlr.TerminalNode | null;
	GREATER_EQUALS(): antlr.TerminalNode | null;
	NOT_EQUALS(): antlr.TerminalNode | null;
	select_with_parens(): Select_with_parensContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_likeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_qual_op(): A_expr_qual_opContext[];
	a_expr_qual_op(i: number): A_expr_qual_opContext | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_ILIKE(): antlr.TerminalNode | null;
	KW_SIMILAR(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	opt_escape(): Opt_escapeContext | null;
	KW_SYMMETRIC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_qual_opContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_unary_qualop(): A_expr_unary_qualopContext[];
	a_expr_unary_qualop(i: number): A_expr_unary_qualopContext | null;
	qual_op(): Qual_opContext[];
	qual_op(i: number): Qual_opContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_unary_qualopContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_add(): A_expr_addContext;
	qual_op(): Qual_opContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_addContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_mul(): A_expr_mulContext[];
	a_expr_mul(i: number): A_expr_mulContext | null;
	MINUS(): antlr.TerminalNode[];
	MINUS(i: number): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode[];
	PLUS(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_mulContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_caret(): A_expr_caretContext[];
	a_expr_caret(i: number): A_expr_caretContext | null;
	STAR(): antlr.TerminalNode[];
	STAR(i: number): antlr.TerminalNode | null;
	SLASH(): antlr.TerminalNode[];
	SLASH(i: number): antlr.TerminalNode | null;
	PERCENT(): antlr.TerminalNode[];
	PERCENT(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_caretContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_unary_sign(): A_expr_unary_signContext;
	CARET(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_unary_signContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_at_time_zone(): A_expr_at_time_zoneContext;
	MINUS(): antlr.TerminalNode | null;
	PLUS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_at_time_zoneContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_collate(): A_expr_collateContext;
	KW_AT(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_collateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr_typecast(): A_expr_typecastContext;
	KW_COLLATE(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class A_expr_typecastContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	c_expr(): C_exprContext;
	TYPECAST(): antlr.TerminalNode[];
	TYPECAST(i: number): antlr.TerminalNode | null;
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class B_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	c_expr(): C_exprContext | null;
	b_expr(): B_exprContext[];
	b_expr(i: number): B_exprContext | null;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	qual_op(): Qual_opContext | null;
	CARET(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	SLASH(): antlr.TerminalNode | null;
	PERCENT(): antlr.TerminalNode | null;
	LT(): antlr.TerminalNode | null;
	GT(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	LESS_EQUALS(): antlr.TerminalNode | null;
	GREATER_EQUALS(): antlr.TerminalNode | null;
	NOT_EQUALS(): antlr.TerminalNode | null;
	TYPECAST(): antlr.TerminalNode | null;
	typename(): TypenameContext | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	type_list(): Type_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_DOCUMENT(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class C_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: C_exprContext): void;
}
export declare class C_expr_existsContext extends C_exprContext {
	constructor(ctx: C_exprContext);
	KW_EXISTS(): antlr.TerminalNode;
	select_with_parens(): Select_with_parensContext;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class C_expr_caseContext extends C_exprContext {
	constructor(ctx: C_exprContext);
	case_expr(): Case_exprContext;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class C_expr_exprContext extends C_exprContext {
	_a_expr_in_parens?: A_exprContext;
	constructor(ctx: C_exprContext);
	KW_ARRAY(): antlr.TerminalNode | null;
	select_with_parens(): Select_with_parensContext | null;
	array_expr(): Array_exprContext | null;
	PARAM(): antlr.TerminalNode | null;
	opt_indirection(): Opt_indirectionContext | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	aexprconst(): AexprconstContext | null;
	plsqlvariablename(): PlsqlvariablenameContext | null;
	a_expr(): A_exprContext | null;
	func_expr(): Func_exprContext | null;
	indirection(): IndirectionContext | null;
	explicit_row(): Explicit_rowContext | null;
	implicit_row(): Implicit_rowContext | null;
	row(): RowContext[];
	row(i: number): RowContext | null;
	KW_OVERLAPS(): antlr.TerminalNode | null;
	columnref(): ColumnrefContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PlsqlvariablenameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PLSQLVARIABLENAME(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_applicationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	function_name(): Function_nameContext;
	OPEN_PAREN(): antlr.TerminalNode | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	func_arg_list(): Func_arg_listContext | null;
	KW_VARIADIC(): antlr.TerminalNode | null;
	func_arg_expr(): Func_arg_exprContext | null;
	STAR(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	opt_sort_clause(): Opt_sort_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_application(): Func_applicationContext | null;
	within_group_clause(): Within_group_clauseContext | null;
	filter_clause(): Filter_clauseContext | null;
	over_clause(): Over_clauseContext | null;
	func_expr_common_subexpr(): Func_expr_common_subexprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_expr_windowlessContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_application(): Func_applicationContext | null;
	func_expr_common_subexpr(): Func_expr_common_subexprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_expr_common_subexprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COLLATION(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
	KW_CURRENT_ROLE(): antlr.TerminalNode | null;
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_SESSION_USER(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_CURRENT_CATALOG(): antlr.TerminalNode | null;
	KW_CURRENT_SCHEMA(): antlr.TerminalNode | null;
	KW_CAST(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	typename(): TypenameContext | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	extract_list(): Extract_listContext | null;
	KW_NORMALIZE(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode | null;
	unicode_normal_form(): Unicode_normal_formContext | null;
	KW_OVERLAY(): antlr.TerminalNode | null;
	overlay_list(): Overlay_listContext | null;
	KW_POSITION(): antlr.TerminalNode | null;
	position_list(): Position_listContext | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	substr_list(): Substr_listContext | null;
	KW_TREAT(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	trim_list(): Trim_listContext | null;
	KW_BOTH(): antlr.TerminalNode | null;
	KW_LEADING(): antlr.TerminalNode | null;
	KW_TRAILING(): antlr.TerminalNode | null;
	KW_NULLIF(): antlr.TerminalNode | null;
	KW_COALESCE(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext | null;
	KW_GREATEST(): antlr.TerminalNode | null;
	KW_LEAST(): antlr.TerminalNode | null;
	KW_XMLCONCAT(): antlr.TerminalNode | null;
	KW_XMLELEMENT(): antlr.TerminalNode | null;
	KW_NAME(): antlr.TerminalNode | null;
	collabel(): CollabelContext | null;
	xml_attributes(): Xml_attributesContext | null;
	KW_XMLEXISTS(): antlr.TerminalNode | null;
	c_expr(): C_exprContext | null;
	xmlexists_argument(): Xmlexists_argumentContext | null;
	KW_XMLFOREST(): antlr.TerminalNode | null;
	xml_attribute_list(): Xml_attribute_listContext | null;
	KW_XMLPARSE(): antlr.TerminalNode | null;
	document_or_content(): Document_or_contentContext | null;
	xml_whitespace_option(): Xml_whitespace_optionContext | null;
	KW_XMLPI(): antlr.TerminalNode | null;
	KW_XMLROOT(): antlr.TerminalNode | null;
	KW_XML(): antlr.TerminalNode | null;
	xml_root_version(): Xml_root_versionContext | null;
	opt_xml_root_standalone(): Opt_xml_root_standaloneContext | null;
	KW_XMLSERIALIZE(): antlr.TerminalNode | null;
	simpletypename(): SimpletypenameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_root_versionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VERSION(): antlr.TerminalNode;
	a_expr(): A_exprContext | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_xml_root_standaloneContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COMMA(): antlr.TerminalNode;
	KW_STANDALONE(): antlr.TerminalNode;
	KW_YES(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_attributesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_XMLATTRIBUTES(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	xml_attribute_list(): Xml_attribute_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_attribute_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	xml_attribute_el(): Xml_attribute_elContext[];
	xml_attribute_el(i: number): Xml_attribute_elContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_attribute_elContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	KW_AS(): antlr.TerminalNode | null;
	collabel(): CollabelContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Document_or_contentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DOCUMENT(): antlr.TerminalNode | null;
	KW_CONTENT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_whitespace_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PRESERVE(): antlr.TerminalNode | null;
	KW_WHITESPACE(): antlr.TerminalNode;
	KW_STRIP(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xmlexists_argumentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PASSING(): antlr.TerminalNode;
	c_expr(): C_exprContext;
	xml_passing_mech(): Xml_passing_mechContext[];
	xml_passing_mech(i: number): Xml_passing_mechContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Xml_passing_mechContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BY(): antlr.TerminalNode;
	KW_REF(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Within_group_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITHIN(): antlr.TerminalNode;
	KW_GROUP(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	sort_clause(): Sort_clauseContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Filter_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FILTER(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	KW_WHERE(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Window_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WINDOW(): antlr.TerminalNode;
	window_definition_list(): Window_definition_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Window_definition_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	window_definition(): Window_definitionContext[];
	window_definition(i: number): Window_definitionContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Window_definitionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	KW_AS(): antlr.TerminalNode;
	window_specification(): Window_specificationContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Over_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OVER(): antlr.TerminalNode;
	window_specification(): Window_specificationContext | null;
	colid(): ColidContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Window_specificationContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	opt_existing_window_name(): Opt_existing_window_nameContext | null;
	opt_partition_clause(): Opt_partition_clauseContext | null;
	opt_sort_clause(): Opt_sort_clauseContext | null;
	opt_frame_clause(): Opt_frame_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_existing_window_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_partition_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PARTITION(): antlr.TerminalNode;
	KW_BY(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_frame_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RANGE(): antlr.TerminalNode | null;
	frame_extent(): Frame_extentContext;
	opt_window_exclusion_clause(): Opt_window_exclusion_clauseContext | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_GROUPS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Frame_extentContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	frame_bound(): Frame_boundContext[];
	frame_bound(i: number): Frame_boundContext | null;
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Frame_boundContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_window_exclusion_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXCLUDE(): antlr.TerminalNode;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_TIES(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_OTHERS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RowContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	expr_list(): Expr_listContext | null;
	COMMA(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Explicit_rowContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROW(): antlr.TerminalNode;
	OPEN_PAREN(): antlr.TerminalNode;
	CLOSE_PAREN(): antlr.TerminalNode;
	expr_list(): Expr_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Implicit_rowContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	COMMA(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Sub_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ANY(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class All_opContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	Operator(): antlr.TerminalNode | null;
	mathop(): MathopContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class MathopContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	SLASH(): antlr.TerminalNode | null;
	PERCENT(): antlr.TerminalNode | null;
	CARET(): antlr.TerminalNode | null;
	LT(): antlr.TerminalNode | null;
	GT(): antlr.TerminalNode | null;
	EQUAL(): antlr.TerminalNode | null;
	LESS_EQUALS(): antlr.TerminalNode | null;
	GREATER_EQUALS(): antlr.TerminalNode | null;
	NOT_EQUALS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Qual_opContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	Operator(): antlr.TerminalNode | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	any_operator(): Any_operatorContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Qual_all_opContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	all_op(): All_opContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	any_operator(): Any_operatorContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Subquery_OpContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	all_op(): All_opContext | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	any_operator(): Any_operatorContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_ILIKE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Expr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_expr_list_noparenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_expr_noparen(): Column_expr_noparenContext[];
	column_expr_noparen(i: number): Column_expr_noparenContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_expr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_expr(): Column_exprContext[];
	column_expr(i: number): Column_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	column_name(): Column_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_expr_noparenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext | null;
	column_name(): Column_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_arg_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	func_arg_expr(): Func_arg_exprContext[];
	func_arg_expr(i: number): Func_arg_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Func_arg_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	param_name(): Param_nameContext | null;
	COLON_EQUALS(): antlr.TerminalNode | null;
	EQUALS_GREATER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Type_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	typename(): TypenameContext[];
	typename(i: number): TypenameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Array_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_BRACKET(): antlr.TerminalNode;
	CLOSE_BRACKET(): antlr.TerminalNode;
	expr_list(): Expr_listContext | null;
	array_expr_list(): Array_expr_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Array_expr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	array_expr(): Array_exprContext[];
	array_expr(i: number): Array_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Extract_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	extract_arg(): Extract_argContext;
	KW_FROM(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Extract_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	sconst(): SconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Unicode_normal_formContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NFC(): antlr.TerminalNode | null;
	KW_NFD(): antlr.TerminalNode | null;
	KW_NFKC(): antlr.TerminalNode | null;
	KW_NFKD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Overlay_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	KW_PLACING(): antlr.TerminalNode;
	KW_FROM(): antlr.TerminalNode;
	KW_FOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Position_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	b_expr(): B_exprContext[];
	b_expr(i: number): B_exprContext | null;
	KW_IN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Substr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_SIMILAR(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Trim_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext | null;
	KW_FROM(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class In_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: In_exprContext): void;
}
export declare class In_expr_listContext extends In_exprContext {
	constructor(ctx: In_exprContext);
	OPEN_PAREN(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	CLOSE_PAREN(): antlr.TerminalNode;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class In_expr_selectContext extends In_exprContext {
	constructor(ctx: In_exprContext);
	select_with_parens(): Select_with_parensContext;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Case_exprContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CASE(): antlr.TerminalNode;
	when_clause_list(): When_clause_listContext;
	KW_END(): antlr.TerminalNode;
	case_arg(): Case_argContext | null;
	case_default(): Case_defaultContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class When_clause_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	when_clause(): When_clauseContext[];
	when_clause(i: number): When_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class When_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	KW_THEN(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Case_defaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ELSE(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Case_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnrefContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	indirection(): IndirectionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Indirection_elContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	DOT(): antlr.TerminalNode | null;
	attr_name(): Attr_nameContext | null;
	STAR(): antlr.TerminalNode | null;
	OPEN_BRACKET(): antlr.TerminalNode | null;
	CLOSE_BRACKET(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	COLON(): antlr.TerminalNode | null;
	opt_slice_bound(): Opt_slice_boundContext[];
	opt_slice_bound(i: number): Opt_slice_boundContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_slice_boundContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class IndirectionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	indirection_el(): Indirection_elContext[];
	indirection_el(i: number): Indirection_elContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_indirectionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	indirection_el(): Indirection_elContext[];
	indirection_el(i: number): Indirection_elContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_target_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	target_list(): Target_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Target_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	target_el(): Target_elContext[];
	target_el(i: number): Target_elContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Target_elContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Target_elContext): void;
}
export declare class Target_labelContext extends Target_elContext {
	constructor(ctx: Target_elContext);
	column_expr_noparen(): Column_expr_noparenContext;
	KW_AS(): antlr.TerminalNode | null;
	collabel(): CollabelContext | null;
	identifier(): IdentifierContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Target_starContext extends Target_elContext {
	constructor(ctx: Target_elContext);
	STAR(): antlr.TerminalNode;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Qualified_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	qualified_name(): Qualified_nameContext[];
	qualified_name(i: number): Qualified_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name(): Table_nameContext[];
	table_name(i: number): Table_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Schema_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	schema_name(): Schema_nameContext[];
	schema_name(i: number): Schema_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Database_nameListContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	database_name(): Database_nameContext[];
	database_name(i: number): Database_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Procedure_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	procedure_name(): Procedure_nameContext[];
	procedure_name(i: number): Procedure_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Tablespace_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Tablespace_name_createContext): void;
}
export declare class TablespaceNameCreateContext extends Tablespace_name_createContext {
	constructor(ctx: Tablespace_name_createContext);
	colid(): ColidContext;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Tablespace_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Tablespace_nameContext): void;
}
export declare class TablespaceNameContext extends Tablespace_nameContext {
	constructor(ctx: Tablespace_nameContext);
	colid(): ColidContext;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Table_name_createContext): void;
}
export declare class TableNameCreateContext extends Table_name_createContext {
	constructor(ctx: Table_name_createContext);
	colid(): ColidContext;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Table_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Table_nameContext): void;
}
export declare class TableNameContext extends Table_nameContext {
	constructor(ctx: Table_nameContext);
	colid(): ColidContext;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class View_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: View_name_createContext): void;
}
export declare class ViewNameCreateContext extends View_name_createContext {
	constructor(ctx: View_name_createContext);
	colid(): ColidContext;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class View_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: View_nameContext): void;
}
export declare class ViewNameContext extends View_nameContext {
	constructor(ctx: View_nameContext);
	colid(): ColidContext;
	attrs(): AttrsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Qualified_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	indirection(): IndirectionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Tablespace_name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	tablespace_name(): Tablespace_nameContext[];
	tablespace_name(i: number): Tablespace_nameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Name_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	name(): NameContext[];
	name(i: number): NameContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Database_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Database_name_createContext): void;
}
export declare class DatabaseNameCreateContext extends Database_name_createContext {
	constructor(ctx: Database_name_createContext);
	colid(): ColidContext;
	attrs(): AttrsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Database_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Database_nameContext): void;
}
export declare class DatabaseNameContext extends Database_nameContext {
	constructor(ctx: Database_nameContext);
	colid(): ColidContext;
	attrs(): AttrsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Schema_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Schema_nameContext): void;
}
export declare class SchemaNameContext extends Schema_nameContext {
	constructor(ctx: Schema_nameContext);
	colid(): ColidContext;
	attrs(): AttrsContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Routine_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Routine_name_createContext): void;
}
export declare class RoutineNameCreateContext extends Routine_name_createContext {
	constructor(ctx: Routine_name_createContext);
	colid(): ColidContext;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Routine_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Routine_nameContext): void;
}
export declare class RoutineNameContext extends Routine_nameContext {
	constructor(ctx: Routine_nameContext);
	colid(): ColidContext;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Procedure_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Procedure_nameContext): void;
}
export declare class ProcedureNameContext extends Procedure_nameContext {
	constructor(ctx: Procedure_nameContext);
	type_function_name(): Type_function_nameContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Procedure_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Procedure_name_createContext): void;
}
export declare class ProcedureNameCreateContext extends Procedure_name_createContext {
	constructor(ctx: Procedure_name_createContext);
	type_function_name(): Type_function_nameContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Column_nameContext): void;
}
export declare class ColumnNameMatchContext extends Column_nameContext {
	constructor(ctx: Column_nameContext);
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends Column_nameContext {
	constructor(ctx: Column_nameContext);
	colid(): ColidContext;
	indirection_el(): Indirection_elContext[];
	indirection_el(i: number): Indirection_elContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Column_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Column_name_createContext): void;
}
export declare class ColumnNameCreateContext extends Column_name_createContext {
	constructor(ctx: Column_name_createContext);
	colid(): ColidContext;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class NameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Attr_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	collabel(): CollabelContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class File_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Function_name_createContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Function_name_createContext): void;
}
export declare class FunctionNameCreateContext extends Function_name_createContext {
	constructor(ctx: Function_name_createContext);
	type_function_name(): Type_function_nameContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Function_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	get ruleIndex(): number;
	copyFrom(ctx: Function_nameContext): void;
}
export declare class FunctionNameContext extends Function_nameContext {
	constructor(ctx: Function_nameContext);
	type_function_name(): Type_function_nameContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Usual_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	type_usual_name(): Type_usual_nameContext | null;
	colid(): ColidContext | null;
	indirection(): IndirectionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AexprconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	iconst(): IconstContext | null;
	fconst(): FconstContext | null;
	sconst(): SconstContext | null;
	bconst(): BconstContext | null;
	xconst(): XconstContext | null;
	function_name(): Function_nameContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	func_arg_list(): Func_arg_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	opt_sort_clause(): Opt_sort_clauseContext | null;
	consttypename(): ConsttypenameContext | null;
	constinterval(): ConstintervalContext | null;
	opt_interval(): Opt_intervalContext | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class XconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	HexadecimalStringConstant(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class BconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	BinaryStringConstant(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class FconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	Numeric(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class IconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	Integral(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	anysconst(): AnysconstContext;
	opt_uescape(): Opt_uescapeContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class AnysconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	StringConstant(): antlr.TerminalNode | null;
	UnicodeEscapeStringConstant(): antlr.TerminalNode | null;
	BeginDollarStringConstant(): antlr.TerminalNode | null;
	EndDollarStringConstant(): antlr.TerminalNode | null;
	DollarText(): antlr.TerminalNode[];
	DollarText(i: number): antlr.TerminalNode | null;
	EscapeStringConstant(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_uescapeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UESCAPE(): antlr.TerminalNode;
	anysconst(): AnysconstContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SignediconstContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	iconst(): IconstContext;
	PLUS(): antlr.TerminalNode | null;
	MINUS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class GroupnameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rolespec(): RolespecContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RoleidContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rolespec(): RolespecContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class RolespecContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	nonreservedword(): NonreservedwordContext | null;
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_CURRENT_ROLE(): antlr.TerminalNode | null;
	KW_SESSION_USER(): antlr.TerminalNode | null;
	KW_PUBLIC(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Role_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	rolespec(): RolespecContext[];
	rolespec(i: number): RolespecContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ColidContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	unreserved_keyword(): Unreserved_keywordContext | null;
	col_name_keyword(): Col_name_keywordContext | null;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_method_choicesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Exclude_elementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_definition(): Opt_definitionContext | null;
	identifier(): IdentifierContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	opt_asc_desc(): Opt_asc_descContext | null;
	opt_nulls_order(): Opt_nulls_orderContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Index_paramentersContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WITH(): antlr.TerminalNode | null;
	reloptions(): ReloptionsContext | null;
	optconstablespace(): OptconstablespaceContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Type_function_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	unreserved_keyword(): Unreserved_keywordContext | null;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Type_usual_nameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	unreserved_keyword(): Unreserved_keywordContext | null;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Nonreservedword_columnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	column_name(): Column_nameContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class NonreservedwordContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	unreserved_keyword(): Unreserved_keywordContext | null;
	col_name_keyword(): Col_name_keywordContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class CollabelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext | null;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext | null;
	unreserved_keyword(): Unreserved_keywordContext | null;
	col_name_keyword(): Col_name_keywordContext | null;
	type_func_name_keyword(): Type_func_name_keywordContext | null;
	reserved_keyword(): Reserved_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	Identifier(): antlr.TerminalNode | null;
	opt_uescape(): Opt_uescapeContext | null;
	sconst(): SconstContext | null;
	QuotedIdentifier(): antlr.TerminalNode | null;
	UnicodeQuotedIdentifier(): antlr.TerminalNode | null;
	plsqlvariablename(): PlsqlvariablenameContext | null;
	plsqlidentifier(): PlsqlidentifierContext | null;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class PlsqlidentifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PLSQLIDENTIFIER(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Unreserved_keywordContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ABORT(): antlr.TerminalNode | null;
	KW_ABSOLUTE(): antlr.TerminalNode | null;
	KW_ACCESS(): antlr.TerminalNode | null;
	KW_ACTION(): antlr.TerminalNode | null;
	KW_ADD(): antlr.TerminalNode | null;
	KW_ADMIN(): antlr.TerminalNode | null;
	KW_AFTER(): antlr.TerminalNode | null;
	KW_AGGREGATE(): antlr.TerminalNode | null;
	KW_ALSO(): antlr.TerminalNode | null;
	KW_ALTER(): antlr.TerminalNode | null;
	KW_ALWAYS(): antlr.TerminalNode | null;
	KW_ASSERTION(): antlr.TerminalNode | null;
	KW_ASSIGNMENT(): antlr.TerminalNode | null;
	KW_AT(): antlr.TerminalNode | null;
	KW_ATTACH(): antlr.TerminalNode | null;
	KW_ATTRIBUTE(): antlr.TerminalNode | null;
	KW_BACKWARD(): antlr.TerminalNode | null;
	KW_BEFORE(): antlr.TerminalNode | null;
	KW_BEGIN(): antlr.TerminalNode | null;
	KW_BUFFER_USAGE_LIMIT(): antlr.TerminalNode | null;
	KW_BY(): antlr.TerminalNode | null;
	KW_CACHE(): antlr.TerminalNode | null;
	KW_CALL(): antlr.TerminalNode | null;
	KW_CALLED(): antlr.TerminalNode | null;
	KW_CASCADE(): antlr.TerminalNode | null;
	KW_CASCADED(): antlr.TerminalNode | null;
	KW_CATALOG(): antlr.TerminalNode | null;
	KW_CHAIN(): antlr.TerminalNode | null;
	KW_CHARACTERISTICS(): antlr.TerminalNode | null;
	KW_CHECKPOINT(): antlr.TerminalNode | null;
	KW_CLASS(): antlr.TerminalNode | null;
	KW_CLOSE(): antlr.TerminalNode | null;
	KW_CLUSTER(): antlr.TerminalNode | null;
	KW_COLUMNS(): antlr.TerminalNode | null;
	KW_COMMENT(): antlr.TerminalNode | null;
	KW_COMMENTS(): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_COMMITTED(): antlr.TerminalNode | null;
	KW_CONFIGURATION(): antlr.TerminalNode | null;
	KW_CONFLICT(): antlr.TerminalNode | null;
	KW_CONNECTION(): antlr.TerminalNode | null;
	KW_CONSTRAINTS(): antlr.TerminalNode | null;
	KW_CONTENT(): antlr.TerminalNode | null;
	KW_CONTINUE(): antlr.TerminalNode | null;
	KW_CONVERSION(): antlr.TerminalNode | null;
	KW_COPY(): antlr.TerminalNode | null;
	KW_COST(): antlr.TerminalNode | null;
	KW_CSV(): antlr.TerminalNode | null;
	KW_CUBE(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_CURSOR(): antlr.TerminalNode | null;
	KW_CYCLE(): antlr.TerminalNode | null;
	KW_DATA(): antlr.TerminalNode | null;
	KW_DATABASE(): antlr.TerminalNode | null;
	KW_DAY(): antlr.TerminalNode | null;
	KW_DEALLOCATE(): antlr.TerminalNode | null;
	KW_DECLARE(): antlr.TerminalNode | null;
	KW_DEFAULTS(): antlr.TerminalNode | null;
	KW_DEFERRED(): antlr.TerminalNode | null;
	KW_DEFINER(): antlr.TerminalNode | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_DELIMITER(): antlr.TerminalNode | null;
	KW_DELIMITERS(): antlr.TerminalNode | null;
	KW_DEPENDS(): antlr.TerminalNode | null;
	KW_DETACH(): antlr.TerminalNode | null;
	KW_DICTIONARY(): antlr.TerminalNode | null;
	KW_DISABLE(): antlr.TerminalNode | null;
	KW_DISCARD(): antlr.TerminalNode | null;
	KW_DOCUMENT(): antlr.TerminalNode | null;
	KW_DOMAIN(): antlr.TerminalNode | null;
	KW_DOUBLE(): antlr.TerminalNode | null;
	KW_DROP(): antlr.TerminalNode | null;
	KW_EACH(): antlr.TerminalNode | null;
	KW_ENABLE(): antlr.TerminalNode | null;
	KW_ENCODING(): antlr.TerminalNode | null;
	KW_ENCRYPTED(): antlr.TerminalNode | null;
	KW_ENUM(): antlr.TerminalNode | null;
	KW_ESCAPE(): antlr.TerminalNode | null;
	KW_EVENT(): antlr.TerminalNode | null;
	KW_EXCLUDE(): antlr.TerminalNode | null;
	KW_EXCLUDING(): antlr.TerminalNode | null;
	KW_EXCLUSIVE(): antlr.TerminalNode | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	KW_EXPLAIN(): antlr.TerminalNode | null;
	KW_EXPRESSION(): antlr.TerminalNode | null;
	KW_EXTENSION(): antlr.TerminalNode | null;
	KW_EXTERNAL(): antlr.TerminalNode | null;
	KW_FAMILY(): antlr.TerminalNode | null;
	KW_FILTER(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_FOLLOWING(): antlr.TerminalNode | null;
	KW_FORCE(): antlr.TerminalNode | null;
	KW_FORWARD(): antlr.TerminalNode | null;
	KW_FUNCTION(): antlr.TerminalNode | null;
	KW_FUNCTIONS(): antlr.TerminalNode | null;
	KW_GENERATED(): antlr.TerminalNode | null;
	KW_GLOBAL(): antlr.TerminalNode | null;
	KW_GRANTED(): antlr.TerminalNode | null;
	KW_GROUPS(): antlr.TerminalNode | null;
	KW_HANDLER(): antlr.TerminalNode | null;
	KW_HEADER(): antlr.TerminalNode | null;
	KW_HOLD(): antlr.TerminalNode | null;
	KW_HOUR(): antlr.TerminalNode | null;
	KW_IDENTITY(): antlr.TerminalNode | null;
	KW_IF(): antlr.TerminalNode | null;
	KW_IMMEDIATE(): antlr.TerminalNode | null;
	KW_IMMUTABLE(): antlr.TerminalNode | null;
	KW_IMPLICIT(): antlr.TerminalNode | null;
	KW_IMPORT(): antlr.TerminalNode | null;
	KW_INCLUDE(): antlr.TerminalNode | null;
	KW_INCLUDING(): antlr.TerminalNode | null;
	KW_INCREMENT(): antlr.TerminalNode | null;
	KW_INDEX(): antlr.TerminalNode | null;
	KW_INDEXES(): antlr.TerminalNode | null;
	KW_INHERIT(): antlr.TerminalNode | null;
	KW_INHERITS(): antlr.TerminalNode | null;
	KW_INLINE(): antlr.TerminalNode | null;
	KW_INPUT(): antlr.TerminalNode | null;
	KW_INSENSITIVE(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_INSTEAD(): antlr.TerminalNode | null;
	KW_INVOKER(): antlr.TerminalNode | null;
	KW_ISOLATION(): antlr.TerminalNode | null;
	KW_KEY(): antlr.TerminalNode | null;
	KW_LABEL(): antlr.TerminalNode | null;
	KW_LANGUAGE(): antlr.TerminalNode | null;
	KW_LARGE(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LEAKPROOF(): antlr.TerminalNode | null;
	KW_LEVEL(): antlr.TerminalNode | null;
	KW_LISTEN(): antlr.TerminalNode | null;
	KW_LOAD(): antlr.TerminalNode | null;
	KW_LOCAL(): antlr.TerminalNode | null;
	KW_LOCATION(): antlr.TerminalNode | null;
	KW_LOCK(): antlr.TerminalNode | null;
	KW_LOCKED(): antlr.TerminalNode | null;
	KW_LOGGED(): antlr.TerminalNode | null;
	KW_MAPPING(): antlr.TerminalNode | null;
	KW_MATCH(): antlr.TerminalNode | null;
	KW_MATERIALIZED(): antlr.TerminalNode | null;
	KW_MAXVALUE(): antlr.TerminalNode | null;
	KW_METHOD(): antlr.TerminalNode | null;
	KW_MINUTE(): antlr.TerminalNode | null;
	KW_MINVALUE(): antlr.TerminalNode | null;
	KW_MODE(): antlr.TerminalNode | null;
	KW_MONTH(): antlr.TerminalNode | null;
	KW_MOVE(): antlr.TerminalNode | null;
	KW_NAME(): antlr.TerminalNode | null;
	KW_NAMES(): antlr.TerminalNode | null;
	KW_NEW(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_NFC(): antlr.TerminalNode | null;
	KW_NFD(): antlr.TerminalNode | null;
	KW_NFKC(): antlr.TerminalNode | null;
	KW_NFKD(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_NORMALIZED(): antlr.TerminalNode | null;
	KW_NOTHING(): antlr.TerminalNode | null;
	KW_NOTIFY(): antlr.TerminalNode | null;
	KW_NOWAIT(): antlr.TerminalNode | null;
	KW_NULLS(): antlr.TerminalNode | null;
	KW_OBJECT(): antlr.TerminalNode | null;
	KW_OF(): antlr.TerminalNode | null;
	KW_OFF(): antlr.TerminalNode | null;
	KW_OIDS(): antlr.TerminalNode | null;
	KW_OLD(): antlr.TerminalNode | null;
	KW_OPERATOR(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_OPTIONS(): antlr.TerminalNode | null;
	KW_ORDINALITY(): antlr.TerminalNode | null;
	KW_OTHERS(): antlr.TerminalNode | null;
	KW_OVER(): antlr.TerminalNode | null;
	KW_OVERRIDING(): antlr.TerminalNode | null;
	KW_OWNED(): antlr.TerminalNode | null;
	KW_OWNER(): antlr.TerminalNode | null;
	KW_PARALLEL(): antlr.TerminalNode | null;
	KW_PARSER(): antlr.TerminalNode | null;
	KW_PARTIAL(): antlr.TerminalNode | null;
	KW_PARTITION(): antlr.TerminalNode | null;
	KW_PASSING(): antlr.TerminalNode | null;
	KW_PASSWORD(): antlr.TerminalNode | null;
	KW_PLANS(): antlr.TerminalNode | null;
	KW_POLICY(): antlr.TerminalNode | null;
	KW_PRECEDING(): antlr.TerminalNode | null;
	KW_PREPARE(): antlr.TerminalNode | null;
	KW_PREPARED(): antlr.TerminalNode | null;
	KW_PRESERVE(): antlr.TerminalNode | null;
	KW_PRIOR(): antlr.TerminalNode | null;
	KW_PRIVILEGES(): antlr.TerminalNode | null;
	KW_PROCEDURAL(): antlr.TerminalNode | null;
	KW_PROCEDURE(): antlr.TerminalNode | null;
	KW_PROCEDURES(): antlr.TerminalNode | null;
	KW_PROGRAM(): antlr.TerminalNode | null;
	KW_PUBLICATION(): antlr.TerminalNode | null;
	KW_QUOTE(): antlr.TerminalNode | null;
	KW_RANGE(): antlr.TerminalNode | null;
	KW_READ(): antlr.TerminalNode | null;
	KW_REASSIGN(): antlr.TerminalNode | null;
	KW_RECHECK(): antlr.TerminalNode | null;
	KW_RECURSIVE(): antlr.TerminalNode | null;
	KW_REF(): antlr.TerminalNode | null;
	KW_REFERENCING(): antlr.TerminalNode | null;
	KW_REFRESH(): antlr.TerminalNode | null;
	KW_REINDEX(): antlr.TerminalNode | null;
	KW_RELATIVE(): antlr.TerminalNode | null;
	KW_RELEASE(): antlr.TerminalNode | null;
	KW_RENAME(): antlr.TerminalNode | null;
	KW_REPEATABLE(): antlr.TerminalNode | null;
	KW_REPLACE(): antlr.TerminalNode | null;
	KW_REPLICA(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_RESTART(): antlr.TerminalNode | null;
	KW_RESTRICT(): antlr.TerminalNode | null;
	KW_RETURNS(): antlr.TerminalNode | null;
	KW_REVOKE(): antlr.TerminalNode | null;
	KW_ROLE(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_ROLLUP(): antlr.TerminalNode | null;
	KW_ROUTINE(): antlr.TerminalNode | null;
	KW_ROUTINES(): antlr.TerminalNode | null;
	KW_ROWS(): antlr.TerminalNode | null;
	KW_RULE(): antlr.TerminalNode | null;
	KW_SAVEPOINT(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_SCHEMAS(): antlr.TerminalNode | null;
	KW_SCROLL(): antlr.TerminalNode | null;
	KW_SEARCH(): antlr.TerminalNode | null;
	KW_SECOND(): antlr.TerminalNode | null;
	KW_SECURITY(): antlr.TerminalNode | null;
	KW_SEQUENCE(): antlr.TerminalNode | null;
	KW_SEQUENCES(): antlr.TerminalNode | null;
	KW_SERIALIZABLE(): antlr.TerminalNode | null;
	KW_SERVER(): antlr.TerminalNode | null;
	KW_SESSION(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_SETS(): antlr.TerminalNode | null;
	KW_SHARE(): antlr.TerminalNode | null;
	KW_SHOW(): antlr.TerminalNode | null;
	KW_SIMPLE(): antlr.TerminalNode | null;
	KW_SKIP(): antlr.TerminalNode | null;
	KW_SKIP_LOCKED(): antlr.TerminalNode | null;
	KW_SNAPSHOT(): antlr.TerminalNode | null;
	KW_SQL(): antlr.TerminalNode | null;
	KW_STABLE(): antlr.TerminalNode | null;
	KW_STANDALONE(): antlr.TerminalNode | null;
	KW_START(): antlr.TerminalNode | null;
	KW_STATEMENT(): antlr.TerminalNode | null;
	KW_STATISTICS(): antlr.TerminalNode | null;
	KW_STDIN(): antlr.TerminalNode | null;
	KW_STDOUT(): antlr.TerminalNode | null;
	KW_STORAGE(): antlr.TerminalNode | null;
	KW_STORED(): antlr.TerminalNode | null;
	KW_STRICT(): antlr.TerminalNode | null;
	KW_STRIP(): antlr.TerminalNode | null;
	KW_SUBSCRIPTION(): antlr.TerminalNode | null;
	KW_SUPPORT(): antlr.TerminalNode | null;
	KW_SYSID(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_TABLES(): antlr.TerminalNode | null;
	KW_TABLESPACE(): antlr.TerminalNode | null;
	KW_TEMP(): antlr.TerminalNode | null;
	KW_TEMPLATE(): antlr.TerminalNode | null;
	KW_TEMPORARY(): antlr.TerminalNode | null;
	KW_TEXT(): antlr.TerminalNode | null;
	KW_TIES(): antlr.TerminalNode | null;
	KW_TRANSACTION(): antlr.TerminalNode | null;
	KW_TRANSFORM(): antlr.TerminalNode | null;
	KW_TRIGGER(): antlr.TerminalNode | null;
	KW_TRUNCATE(): antlr.TerminalNode | null;
	KW_TRUSTED(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_TYPES(): antlr.TerminalNode | null;
	KW_UESCAPE(): antlr.TerminalNode | null;
	KW_UNBOUNDED(): antlr.TerminalNode | null;
	KW_UNCOMMITTED(): antlr.TerminalNode | null;
	KW_UNENCRYPTED(): antlr.TerminalNode | null;
	KW_UNKNOWN(): antlr.TerminalNode | null;
	KW_UNLISTEN(): antlr.TerminalNode | null;
	KW_UNLOGGED(): antlr.TerminalNode | null;
	KW_UNTIL(): antlr.TerminalNode | null;
	KW_UPDATE(): antlr.TerminalNode | null;
	KW_VACUUM(): antlr.TerminalNode | null;
	KW_VALID(): antlr.TerminalNode | null;
	KW_VALIDATE(): antlr.TerminalNode | null;
	KW_VALIDATOR(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	KW_VARYING(): antlr.TerminalNode | null;
	KW_VERSION(): antlr.TerminalNode | null;
	KW_VIEW(): antlr.TerminalNode | null;
	KW_VIEWS(): antlr.TerminalNode | null;
	KW_VOLATILE(): antlr.TerminalNode | null;
	KW_WHITESPACE(): antlr.TerminalNode | null;
	KW_WITHIN(): antlr.TerminalNode | null;
	KW_WITHOUT(): antlr.TerminalNode | null;
	KW_WORK(): antlr.TerminalNode | null;
	KW_WRAPPER(): antlr.TerminalNode | null;
	KW_WRITE(): antlr.TerminalNode | null;
	KW_XML(): antlr.TerminalNode | null;
	KW_YEAR(): antlr.TerminalNode | null;
	KW_YES(): antlr.TerminalNode | null;
	KW_ZONE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Col_name_keywordContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BETWEEN(): antlr.TerminalNode | null;
	KW_BIGINT(): antlr.TerminalNode | null;
	bit(): BitContext | null;
	KW_BOOLEAN(): antlr.TerminalNode | null;
	KW_CHAR(): antlr.TerminalNode | null;
	character(): CharacterContext | null;
	KW_COALESCE(): antlr.TerminalNode | null;
	KW_DEC(): antlr.TerminalNode | null;
	KW_DECIMAL(): antlr.TerminalNode | null;
	KW_EXISTS(): antlr.TerminalNode | null;
	KW_EXTRACT(): antlr.TerminalNode | null;
	KW_FLOAT(): antlr.TerminalNode | null;
	KW_GREATEST(): antlr.TerminalNode | null;
	KW_GROUPING(): antlr.TerminalNode | null;
	KW_INOUT(): antlr.TerminalNode | null;
	KW_INT(): antlr.TerminalNode | null;
	KW_INTEGER(): antlr.TerminalNode | null;
	KW_INTERVAL(): antlr.TerminalNode | null;
	KW_LEAST(): antlr.TerminalNode | null;
	KW_NATIONAL(): antlr.TerminalNode | null;
	KW_NCHAR(): antlr.TerminalNode | null;
	KW_NONE(): antlr.TerminalNode | null;
	KW_NORMALIZE(): antlr.TerminalNode | null;
	KW_NULLIF(): antlr.TerminalNode | null;
	numeric(): NumericContext | null;
	KW_OUT(): antlr.TerminalNode | null;
	KW_OVERLAY(): antlr.TerminalNode | null;
	KW_POSITION(): antlr.TerminalNode | null;
	KW_PRECISION(): antlr.TerminalNode | null;
	KW_REAL(): antlr.TerminalNode | null;
	KW_ROW(): antlr.TerminalNode | null;
	KW_SETOF(): antlr.TerminalNode | null;
	KW_SMALLINT(): antlr.TerminalNode | null;
	KW_SUBSTRING(): antlr.TerminalNode | null;
	KW_TIME(): antlr.TerminalNode | null;
	KW_TIMESTAMP(): antlr.TerminalNode | null;
	KW_TREAT(): antlr.TerminalNode | null;
	KW_TRIM(): antlr.TerminalNode | null;
	KW_VALUES(): antlr.TerminalNode | null;
	KW_VARCHAR(): antlr.TerminalNode | null;
	KW_XMLATTRIBUTES(): antlr.TerminalNode | null;
	KW_XMLCONCAT(): antlr.TerminalNode | null;
	KW_XMLELEMENT(): antlr.TerminalNode | null;
	KW_XMLEXISTS(): antlr.TerminalNode | null;
	KW_XMLFOREST(): antlr.TerminalNode | null;
	KW_XMLNAMESPACES(): antlr.TerminalNode | null;
	KW_XMLPARSE(): antlr.TerminalNode | null;
	KW_XMLPI(): antlr.TerminalNode | null;
	KW_XMLROOT(): antlr.TerminalNode | null;
	KW_XMLSERIALIZE(): antlr.TerminalNode | null;
	KW_XMLTABLE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Type_func_name_keywordContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AUTHORIZATION(): antlr.TerminalNode | null;
	KW_BINARY(): antlr.TerminalNode | null;
	KW_COLLATION(): antlr.TerminalNode | null;
	KW_CONCURRENTLY(): antlr.TerminalNode | null;
	KW_CROSS(): antlr.TerminalNode | null;
	KW_CURRENT_SCHEMA(): antlr.TerminalNode | null;
	KW_FREEZE(): antlr.TerminalNode | null;
	KW_FULL(): antlr.TerminalNode | null;
	KW_ILIKE(): antlr.TerminalNode | null;
	KW_INNER(): antlr.TerminalNode | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_ISNULL(): antlr.TerminalNode | null;
	KW_JOIN(): antlr.TerminalNode | null;
	KW_LEFT(): antlr.TerminalNode | null;
	KW_LIKE(): antlr.TerminalNode | null;
	KW_NATURAL(): antlr.TerminalNode | null;
	KW_NOTNULL(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	KW_OVERLAPS(): antlr.TerminalNode | null;
	KW_RIGHT(): antlr.TerminalNode | null;
	KW_SIMILAR(): antlr.TerminalNode | null;
	KW_TABLESAMPLE(): antlr.TerminalNode | null;
	KW_VERBOSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Reserved_keywordContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ALL(): antlr.TerminalNode | null;
	KW_ANALYSE(): antlr.TerminalNode | null;
	KW_ANALYZE(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_ANY(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	KW_ASC(): antlr.TerminalNode | null;
	KW_ASYMMETRIC(): antlr.TerminalNode | null;
	KW_BOTH(): antlr.TerminalNode | null;
	KW_CASE(): antlr.TerminalNode | null;
	KW_CAST(): antlr.TerminalNode | null;
	KW_CHECK(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	KW_COLUMN(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	KW_CREATE(): antlr.TerminalNode | null;
	KW_CURRENT_CATALOG(): antlr.TerminalNode | null;
	KW_CURRENT_DATE(): antlr.TerminalNode | null;
	KW_CURRENT_ROLE(): antlr.TerminalNode | null;
	KW_CURRENT_TIME(): antlr.TerminalNode | null;
	KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
	KW_CURRENT_USER(): antlr.TerminalNode | null;
	KW_DEFERRABLE(): antlr.TerminalNode | null;
	KW_DESC(): antlr.TerminalNode | null;
	KW_DISTINCT(): antlr.TerminalNode | null;
	KW_DO(): antlr.TerminalNode | null;
	KW_ELSE(): antlr.TerminalNode | null;
	KW_END(): antlr.TerminalNode | null;
	KW_EXCEPT(): antlr.TerminalNode | null;
	KW_FALSE(): antlr.TerminalNode | null;
	KW_FETCH(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	KW_FOREIGN(): antlr.TerminalNode | null;
	KW_FROM(): antlr.TerminalNode | null;
	KW_GRANT(): antlr.TerminalNode | null;
	KW_GROUP(): antlr.TerminalNode | null;
	KW_HAVING(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	KW_INITIALLY(): antlr.TerminalNode | null;
	KW_INTERSECT(): antlr.TerminalNode | null;
	KW_LATERAL(): antlr.TerminalNode | null;
	KW_LEADING(): antlr.TerminalNode | null;
	KW_LIMIT(): antlr.TerminalNode | null;
	KW_LOCALTIME(): antlr.TerminalNode | null;
	KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	KW_OFFSET(): antlr.TerminalNode | null;
	KW_ON(): antlr.TerminalNode | null;
	KW_ONLY(): antlr.TerminalNode | null;
	KW_OR(): antlr.TerminalNode | null;
	KW_ORDER(): antlr.TerminalNode | null;
	KW_PLACING(): antlr.TerminalNode | null;
	KW_PRIMARY(): antlr.TerminalNode | null;
	KW_REFERENCES(): antlr.TerminalNode | null;
	KW_RETURNING(): antlr.TerminalNode | null;
	KW_SELECT(): antlr.TerminalNode | null;
	KW_SESSION_USER(): antlr.TerminalNode | null;
	KW_SOME(): antlr.TerminalNode | null;
	KW_SYMMETRIC(): antlr.TerminalNode | null;
	KW_TABLE(): antlr.TerminalNode | null;
	KW_THEN(): antlr.TerminalNode | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_TRAILING(): antlr.TerminalNode | null;
	KW_TRUE(): antlr.TerminalNode | null;
	KW_UNION(): antlr.TerminalNode | null;
	KW_UNIQUE(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	KW_USING(): antlr.TerminalNode | null;
	KW_VARIADIC(): antlr.TerminalNode | null;
	KW_WHEN(): antlr.TerminalNode | null;
	KW_WHERE(): antlr.TerminalNode | null;
	KW_WINDOW(): antlr.TerminalNode | null;
	KW_WITH(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Pl_functionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	comp_options(): Comp_optionsContext;
	pl_block(): Pl_blockContext;
	opt_semi(): Opt_semiContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Comp_optionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	comp_option(): Comp_optionContext[];
	comp_option(i: number): Comp_optionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Comp_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sharp(): SharpContext;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_DUMP(): antlr.TerminalNode | null;
	KW_PRINT_STRICT_PARAMS(): antlr.TerminalNode | null;
	option_value(): Option_valueContext | null;
	KW_VARIABLE_CONFLICT(): antlr.TerminalNode | null;
	KW_ERROR(): antlr.TerminalNode | null;
	KW_USE_VARIABLE(): antlr.TerminalNode | null;
	KW_USE_COLUMN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class SharpContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	Operator(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Option_valueContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sconst(): SconstContext | null;
	reserved_keyword(): Reserved_keywordContext | null;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext | null;
	unreserved_keyword(): Unreserved_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_semiContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	SEMI(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Pl_blockContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decl_sect(): Decl_sectContext;
	KW_BEGIN(): antlr.TerminalNode;
	proc_sect(): Proc_sectContext;
	exception_sect(): Exception_sectContext;
	KW_END(): antlr.TerminalNode;
	opt_label(): Opt_labelContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_sectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_block_label(): Opt_block_labelContext;
	decl_start(): Decl_startContext | null;
	decl_stmts(): Decl_stmtsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_startContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DECLARE(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_stmtsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decl_stmt(): Decl_stmtContext[];
	decl_stmt(i: number): Decl_stmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Label_declContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	LESS_LESS(): antlr.TerminalNode;
	any_identifier(): Any_identifierContext;
	GREATER_GREATER(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_stmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decl_statement(): Decl_statementContext | null;
	KW_DECLARE(): antlr.TerminalNode | null;
	label_decl(): Label_declContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_statementContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decl_varname(): Decl_varnameContext;
	SEMI(): antlr.TerminalNode;
	KW_ALIAS(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	decl_aliasitem(): Decl_aliasitemContext | null;
	decl_const(): Decl_constContext | null;
	decl_datatype(): Decl_datatypeContext | null;
	decl_collate(): Decl_collateContext | null;
	decl_notnull(): Decl_notnullContext | null;
	decl_defval(): Decl_defvalContext | null;
	opt_scrollable(): Opt_scrollableContext | null;
	KW_CURSOR(): antlr.TerminalNode | null;
	decl_cursor_args(): Decl_cursor_argsContext | null;
	decl_is_for(): Decl_is_forContext | null;
	decl_cursor_query(): Decl_cursor_queryContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_scrollableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NO(): antlr.TerminalNode | null;
	KW_SCROLL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_cursor_queryContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	selectstmt(): SelectstmtContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_cursor_argsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode | null;
	decl_cursor_arglist(): Decl_cursor_arglistContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_cursor_arglistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decl_cursor_arg(): Decl_cursor_argContext[];
	decl_cursor_arg(i: number): Decl_cursor_argContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_cursor_argContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decl_varname(): Decl_varnameContext;
	decl_datatype(): Decl_datatypeContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_is_forContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IS(): antlr.TerminalNode | null;
	KW_FOR(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_aliasitemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	PARAM(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_varnameContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_identifier(): Any_identifierContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_constContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CONSTANT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_datatypeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	typename(): TypenameContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_collateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COLLATE(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_notnullContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NOT(): antlr.TerminalNode | null;
	KW_NULL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_defvalContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	decl_defkey(): Decl_defkeyContext | null;
	sql_expression(): Sql_expressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Decl_defkeyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	assign_operator(): Assign_operatorContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Assign_operatorContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	EQUAL(): antlr.TerminalNode | null;
	COLON_EQUALS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Proc_sectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	proc_stmt(): Proc_stmtContext[];
	proc_stmt(i: number): Proc_stmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Proc_stmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	pl_block(): Pl_blockContext | null;
	SEMI(): antlr.TerminalNode | null;
	stmt_return(): Stmt_returnContext | null;
	stmt_raise(): Stmt_raiseContext | null;
	stmt_assign(): Stmt_assignContext | null;
	stmt_if(): Stmt_ifContext | null;
	stmt_case(): Stmt_caseContext | null;
	stmt_loop(): Stmt_loopContext | null;
	stmt_while(): Stmt_whileContext | null;
	stmt_for(): Stmt_forContext | null;
	stmt_foreach_a(): Stmt_foreach_aContext | null;
	stmt_exit(): Stmt_exitContext | null;
	stmt_assert(): Stmt_assertContext | null;
	stmt_execsql(): Stmt_execsqlContext | null;
	stmt_dynexecute(): Stmt_dynexecuteContext | null;
	stmt_perform(): Stmt_performContext | null;
	stmt_call(): Stmt_callContext | null;
	stmt_getdiag(): Stmt_getdiagContext | null;
	stmt_open(): Stmt_openContext | null;
	stmt_fetch(): Stmt_fetchContext | null;
	stmt_move(): Stmt_moveContext | null;
	stmt_close(): Stmt_closeContext | null;
	stmt_null(): Stmt_nullContext | null;
	stmt_commit(): Stmt_commitContext | null;
	stmt_rollback(): Stmt_rollbackContext | null;
	stmt_set(): Stmt_setContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_performContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_PERFORM(): antlr.TerminalNode;
	expr_until_semi(): Expr_until_semiContext;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_callContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CALL(): antlr.TerminalNode | null;
	any_identifier(): Any_identifierContext;
	OPEN_PAREN(): antlr.TerminalNode | null;
	opt_expr_list(): Opt_expr_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	SEMI(): antlr.TerminalNode | null;
	KW_DO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_expr_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expr_list(): Expr_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_assignContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	assign_var(): Assign_varContext;
	assign_operator(): Assign_operatorContext;
	sql_expression(): Sql_expressionContext;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_getdiagContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_GET(): antlr.TerminalNode;
	getdiag_area_opt(): Getdiag_area_optContext;
	KW_DIAGNOSTICS(): antlr.TerminalNode;
	getdiag_list(): Getdiag_listContext;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Getdiag_area_optContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_STACKED(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Getdiag_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	getdiag_list_item(): Getdiag_list_itemContext[];
	getdiag_list_item(i: number): Getdiag_list_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Getdiag_list_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	getdiag_target(): Getdiag_targetContext;
	assign_operator(): Assign_operatorContext;
	getdiag_item(): Getdiag_itemContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Getdiag_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Getdiag_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	assign_var(): Assign_varContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Assign_varContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_name(): Any_nameContext | null;
	PARAM(): antlr.TerminalNode | null;
	OPEN_BRACKET(): antlr.TerminalNode[];
	OPEN_BRACKET(i: number): antlr.TerminalNode | null;
	expr_until_rightbracket(): Expr_until_rightbracketContext[];
	expr_until_rightbracket(i: number): Expr_until_rightbracketContext | null;
	CLOSE_BRACKET(): antlr.TerminalNode[];
	CLOSE_BRACKET(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_ifContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_IF(): antlr.TerminalNode[];
	KW_IF(i: number): antlr.TerminalNode | null;
	expr_until_then(): Expr_until_thenContext;
	KW_THEN(): antlr.TerminalNode;
	proc_sect(): Proc_sectContext;
	stmt_elsifs(): Stmt_elsifsContext;
	stmt_else(): Stmt_elseContext;
	KW_END(): antlr.TerminalNode;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_elsifsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ELSIF(): antlr.TerminalNode[];
	KW_ELSIF(i: number): antlr.TerminalNode | null;
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	KW_THEN(): antlr.TerminalNode[];
	KW_THEN(i: number): antlr.TerminalNode | null;
	proc_sect(): Proc_sectContext[];
	proc_sect(i: number): Proc_sectContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_elseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ELSE(): antlr.TerminalNode | null;
	proc_sect(): Proc_sectContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_caseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CASE(): antlr.TerminalNode[];
	KW_CASE(i: number): antlr.TerminalNode | null;
	opt_expr_until_when(): Opt_expr_until_whenContext;
	case_when_list(): Case_when_listContext;
	opt_case_else(): Opt_case_elseContext;
	KW_END(): antlr.TerminalNode;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_expr_until_whenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sql_expression(): Sql_expressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Case_when_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	case_when(): Case_whenContext[];
	case_when(i: number): Case_whenContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Case_whenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	expr_list(): Expr_listContext;
	KW_THEN(): antlr.TerminalNode;
	proc_sect(): Proc_sectContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_case_elseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ELSE(): antlr.TerminalNode | null;
	proc_sect(): Proc_sectContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_loopContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_loop_label(): Opt_loop_labelContext;
	loop_body(): Loop_bodyContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_whileContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_loop_label(): Opt_loop_labelContext;
	KW_WHILE(): antlr.TerminalNode;
	expr_until_loop(): Expr_until_loopContext;
	loop_body(): Loop_bodyContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_forContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_loop_label(): Opt_loop_labelContext;
	KW_FOR(): antlr.TerminalNode;
	for_control(): For_controlContext;
	loop_body(): Loop_bodyContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class For_controlContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	for_variable(): For_variableContext;
	KW_IN(): antlr.TerminalNode;
	cursor_name(): Cursor_nameContext | null;
	opt_cursor_parameters(): Opt_cursor_parametersContext | null;
	selectstmt(): SelectstmtContext | null;
	explainstmt(): ExplainstmtContext | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	opt_for_using_expression(): Opt_for_using_expressionContext | null;
	opt_reverse(): Opt_reverseContext | null;
	DOT_DOT(): antlr.TerminalNode | null;
	opt_by_expression(): Opt_by_expressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_for_using_expressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_cursor_parametersContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode | null;
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_reverseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_REVERSE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_by_expressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_BY(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class For_variableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_name_list(): Any_name_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_foreach_aContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_loop_label(): Opt_loop_labelContext;
	KW_FOREACH(): antlr.TerminalNode;
	for_variable(): For_variableContext;
	foreach_slice(): Foreach_sliceContext;
	KW_IN(): antlr.TerminalNode;
	KW_ARRAY(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	loop_body(): Loop_bodyContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Foreach_sliceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SLICE(): antlr.TerminalNode | null;
	iconst(): IconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_exitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	exit_type(): Exit_typeContext;
	opt_label(): Opt_labelContext;
	SEMI(): antlr.TerminalNode;
	opt_exitcond(): Opt_exitcondContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Exit_typeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXIT(): antlr.TerminalNode | null;
	KW_CONTINUE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_returnContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RETURN(): antlr.TerminalNode;
	SEMI(): antlr.TerminalNode;
	KW_NEXT(): antlr.TerminalNode | null;
	sql_expression(): Sql_expressionContext | null;
	KW_QUERY(): antlr.TerminalNode | null;
	opt_return_result(): Opt_return_resultContext | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	opt_for_using_expression(): Opt_for_using_expressionContext | null;
	selectstmt(): SelectstmtContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_return_resultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sql_expression(): Sql_expressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_raiseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_RAISE(): antlr.TerminalNode;
	sconst(): SconstContext | null;
	opt_raise_list(): Opt_raise_listContext | null;
	opt_raise_using(): Opt_raise_usingContext | null;
	SEMI(): antlr.TerminalNode | null;
	opt_stmt_raise_level(): Opt_stmt_raise_levelContext | null;
	identifier(): IdentifierContext | null;
	KW_SQLSTATE(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_stmt_raise_levelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_DEBUG(): antlr.TerminalNode | null;
	KW_LOG(): antlr.TerminalNode | null;
	KW_INFO(): antlr.TerminalNode | null;
	KW_NOTICE(): antlr.TerminalNode | null;
	KW_WARNING(): antlr.TerminalNode | null;
	KW_EXCEPTION(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_raise_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_raise_usingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode | null;
	opt_raise_using_elem_list(): Opt_raise_using_elem_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_raise_using_elemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	identifier(): IdentifierContext;
	EQUAL(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_raise_using_elem_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_raise_using_elem(): Opt_raise_using_elemContext[];
	opt_raise_using_elem(i: number): Opt_raise_using_elemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_assertContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ASSERT(): antlr.TerminalNode;
	sql_expression(): Sql_expressionContext;
	opt_stmt_assert_message(): Opt_stmt_assert_messageContext;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_stmt_assert_messageContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	COMMA(): antlr.TerminalNode | null;
	sql_expression(): Sql_expressionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Loop_bodyContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_LOOP(): antlr.TerminalNode[];
	KW_LOOP(i: number): antlr.TerminalNode | null;
	proc_sect(): Proc_sectContext;
	KW_END(): antlr.TerminalNode;
	opt_label(): Opt_labelContext;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_execsqlContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	make_execsql_stmt(): Make_execsql_stmtContext;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_dynexecuteContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXECUTE(): antlr.TerminalNode;
	a_expr(): A_exprContext;
	SEMI(): antlr.TerminalNode;
	opt_execute_into(): Opt_execute_intoContext | null;
	opt_execute_using(): Opt_execute_usingContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_execute_usingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode | null;
	opt_execute_using_list(): Opt_execute_using_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_execute_using_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext[];
	a_expr(i: number): A_exprContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_execute_intoContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INTO(): antlr.TerminalNode | null;
	into_target(): Into_targetContext | null;
	KW_STRICT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_openContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_OPEN(): antlr.TerminalNode;
	SEMI(): antlr.TerminalNode;
	cursor_variable(): Cursor_variableContext | null;
	opt_scroll_option(): Opt_scroll_optionContext | null;
	KW_FOR(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	selectstmt(): SelectstmtContext | null;
	KW_EXECUTE(): antlr.TerminalNode | null;
	sql_expression(): Sql_expressionContext | null;
	opt_open_using(): Opt_open_usingContext | null;
	OPEN_PAREN(): antlr.TerminalNode | null;
	opt_open_bound_list(): Opt_open_bound_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_open_bound_list_itemContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext | null;
	COLON_EQUALS(): antlr.TerminalNode | null;
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_open_bound_listContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_open_bound_list_item(): Opt_open_bound_list_itemContext[];
	opt_open_bound_list_item(i: number): Opt_open_bound_list_itemContext | null;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_open_usingContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_USING(): antlr.TerminalNode | null;
	expr_list(): Expr_listContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_scroll_optionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_scroll_option_no(): Opt_scroll_option_noContext | null;
	KW_SCROLL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_scroll_option_noContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_fetchContext extends antlr.ParserRuleContext {
	_direction?: Opt_fetch_directionContext;
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FETCH(): antlr.TerminalNode;
	opt_cursor_from(): Opt_cursor_fromContext;
	cursor_variable(): Cursor_variableContext;
	KW_INTO(): antlr.TerminalNode;
	into_target(): Into_targetContext;
	SEMI(): antlr.TerminalNode;
	opt_fetch_direction(): Opt_fetch_directionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Into_targetContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	expr_list(): Expr_listContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_cursor_fromContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_FROM(): antlr.TerminalNode | null;
	KW_IN(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_fetch_directionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NEXT(): antlr.TerminalNode | null;
	KW_PRIOR(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_ABSOLUTE(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	KW_RELATIVE(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	KW_FORWARD(): antlr.TerminalNode | null;
	KW_BACKWARD(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_moveContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MOVE(): antlr.TerminalNode;
	cursor_variable(): Cursor_variableContext;
	SEMI(): antlr.TerminalNode;
	opt_fetch_direction(): Opt_fetch_directionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class MergestmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_MERGE(): antlr.TerminalNode;
	KW_INTO(): antlr.TerminalNode;
	table_name(): Table_nameContext;
	KW_USING(): antlr.TerminalNode;
	data_source(): Data_sourceContext;
	KW_ON(): antlr.TerminalNode;
	join_condition(): Join_conditionContext;
	with_clause(): With_clauseContext | null;
	KW_ONLY(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	colid(): ColidContext | null;
	merge_when_clause(): Merge_when_clauseContext[];
	merge_when_clause(i: number): Merge_when_clauseContext | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Data_sourceContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	table_name(): Table_nameContext | null;
	colid(): ColidContext | null;
	select_no_parens(): Select_no_parensContext | null;
	values_clause(): Values_clauseContext | null;
	KW_ONLY(): antlr.TerminalNode | null;
	STAR(): antlr.TerminalNode | null;
	KW_AS(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Join_conditionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Merge_when_clauseContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	KW_MATCHED(): antlr.TerminalNode;
	KW_THEN(): antlr.TerminalNode;
	merge_update(): Merge_updateContext | null;
	KW_DELETE(): antlr.TerminalNode | null;
	KW_DO(): antlr.TerminalNode | null;
	KW_NOTHING(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	a_expr(): A_exprContext | null;
	KW_NOT(): antlr.TerminalNode | null;
	merge_insert(): Merge_insertContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Merge_insertContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INSERT(): antlr.TerminalNode;
	default_values_or_values(): Default_values_or_valuesContext;
	OPEN_PAREN(): antlr.TerminalNode | null;
	column_list(): Column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode | null;
	KW_OVERRIDING(): antlr.TerminalNode | null;
	KW_VALUE(): antlr.TerminalNode | null;
	KW_SYSTEM(): antlr.TerminalNode | null;
	KW_USER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Merge_updateContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_UPDATE(): antlr.TerminalNode;
	KW_SET(): antlr.TerminalNode;
	column_name(): Column_nameContext[];
	column_name(i: number): Column_nameContext | null;
	EQUAL(): antlr.TerminalNode[];
	EQUAL(i: number): antlr.TerminalNode | null;
	exprofdefault(): ExprofdefaultContext[];
	exprofdefault(i: number): ExprofdefaultContext | null;
	OPEN_PAREN(): antlr.TerminalNode[];
	OPEN_PAREN(i: number): antlr.TerminalNode | null;
	column_list(): Column_listContext[];
	column_list(i: number): Column_listContext | null;
	CLOSE_PAREN(): antlr.TerminalNode[];
	CLOSE_PAREN(i: number): antlr.TerminalNode | null;
	exprofdefaultlist(): ExprofdefaultlistContext[];
	exprofdefaultlist(i: number): ExprofdefaultlistContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Default_values_or_valuesContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_VALUES(): antlr.TerminalNode;
	exprofdefaultlist(): ExprofdefaultlistContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExprofdefaultlistContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	OPEN_PAREN(): antlr.TerminalNode;
	exprofdefault(): ExprofdefaultContext[];
	exprofdefault(i: number): ExprofdefaultContext | null;
	CLOSE_PAREN(): antlr.TerminalNode;
	COMMA(): antlr.TerminalNode[];
	COMMA(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class ExprofdefaultContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sortby(): SortbyContext | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_closeContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_CLOSE(): antlr.TerminalNode;
	cursor_variable(): Cursor_variableContext;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_nullContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_NULL(): antlr.TerminalNode;
	SEMI(): antlr.TerminalNode;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_commitContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_COMMIT(): antlr.TerminalNode;
	SEMI(): antlr.TerminalNode;
	plsql_opt_transaction_chain(): Plsql_opt_transaction_chainContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_rollbackContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ROLLBACK(): antlr.TerminalNode;
	SEMI(): antlr.TerminalNode;
	plsql_opt_transaction_chain(): Plsql_opt_transaction_chainContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Plsql_opt_transaction_chainContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_AND(): antlr.TerminalNode;
	KW_CHAIN(): antlr.TerminalNode;
	KW_NO(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Stmt_setContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_SET(): antlr.TerminalNode | null;
	any_name(): Any_nameContext | null;
	KW_TO(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	SEMI(): antlr.TerminalNode;
	KW_RESET(): antlr.TerminalNode | null;
	KW_ALL(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Cursor_variableContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext | null;
	PARAM(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Exception_sectContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_EXCEPTION(): antlr.TerminalNode | null;
	proc_exceptions(): Proc_exceptionsContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Proc_exceptionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	proc_exception(): Proc_exceptionContext[];
	proc_exception(i: number): Proc_exceptionContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Proc_exceptionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	proc_conditions(): Proc_conditionsContext;
	KW_THEN(): antlr.TerminalNode;
	proc_sect(): Proc_sectContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Proc_conditionsContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	proc_condition(): Proc_conditionContext[];
	proc_condition(i: number): Proc_conditionContext | null;
	KW_OR(): antlr.TerminalNode[];
	KW_OR(i: number): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Proc_conditionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_identifier(): Any_identifierContext | null;
	KW_SQLSTATE(): antlr.TerminalNode | null;
	sconst(): SconstContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_block_labelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	label_decl(): Label_declContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_loop_labelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	label_decl(): Label_declContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_labelContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	any_identifier(): Any_identifierContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_exitcondContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_WHEN(): antlr.TerminalNode;
	expr_until_semi(): Expr_until_semiContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Any_identifierContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	colid(): ColidContext | null;
	plsql_unreserved_keyword(): Plsql_unreserved_keywordContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Plsql_unreserved_keywordContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_ABSOLUTE(): antlr.TerminalNode | null;
	KW_ALIAS(): antlr.TerminalNode | null;
	KW_AND(): antlr.TerminalNode | null;
	KW_ARRAY(): antlr.TerminalNode | null;
	KW_ASSERT(): antlr.TerminalNode | null;
	KW_BACKWARD(): antlr.TerminalNode | null;
	KW_CALL(): antlr.TerminalNode | null;
	KW_CHAIN(): antlr.TerminalNode | null;
	KW_CLOSE(): antlr.TerminalNode | null;
	KW_COLLATE(): antlr.TerminalNode | null;
	KW_COMMIT(): antlr.TerminalNode | null;
	KW_CONSTANT(): antlr.TerminalNode | null;
	KW_CONSTRAINT(): antlr.TerminalNode | null;
	KW_CONTINUE(): antlr.TerminalNode | null;
	KW_CURRENT(): antlr.TerminalNode | null;
	KW_CURSOR(): antlr.TerminalNode | null;
	KW_DEBUG(): antlr.TerminalNode | null;
	KW_DEFAULT(): antlr.TerminalNode | null;
	KW_DIAGNOSTICS(): antlr.TerminalNode | null;
	KW_DO(): antlr.TerminalNode | null;
	KW_DUMP(): antlr.TerminalNode | null;
	KW_ELSIF(): antlr.TerminalNode | null;
	KW_ERROR(): antlr.TerminalNode | null;
	KW_EXCEPTION(): antlr.TerminalNode | null;
	KW_EXIT(): antlr.TerminalNode | null;
	KW_FETCH(): antlr.TerminalNode | null;
	KW_FIRST(): antlr.TerminalNode | null;
	KW_FORWARD(): antlr.TerminalNode | null;
	KW_GET(): antlr.TerminalNode | null;
	KW_INFO(): antlr.TerminalNode | null;
	KW_INSERT(): antlr.TerminalNode | null;
	KW_IS(): antlr.TerminalNode | null;
	KW_LAST(): antlr.TerminalNode | null;
	KW_LOG(): antlr.TerminalNode | null;
	KW_MOVE(): antlr.TerminalNode | null;
	KW_NEXT(): antlr.TerminalNode | null;
	KW_NO(): antlr.TerminalNode | null;
	KW_NOTICE(): antlr.TerminalNode | null;
	KW_OPEN(): antlr.TerminalNode | null;
	KW_OPTION(): antlr.TerminalNode | null;
	KW_PERFORM(): antlr.TerminalNode | null;
	KW_PRINT_STRICT_PARAMS(): antlr.TerminalNode | null;
	KW_PRIOR(): antlr.TerminalNode | null;
	KW_QUERY(): antlr.TerminalNode | null;
	KW_RAISE(): antlr.TerminalNode | null;
	KW_RELATIVE(): antlr.TerminalNode | null;
	KW_RESET(): antlr.TerminalNode | null;
	KW_RETURN(): antlr.TerminalNode | null;
	KW_REVERSE(): antlr.TerminalNode | null;
	KW_ROLLBACK(): antlr.TerminalNode | null;
	KW_ROWTYPE(): antlr.TerminalNode | null;
	KW_SCHEMA(): antlr.TerminalNode | null;
	KW_SCROLL(): antlr.TerminalNode | null;
	KW_SET(): antlr.TerminalNode | null;
	KW_SLICE(): antlr.TerminalNode | null;
	KW_SQLSTATE(): antlr.TerminalNode | null;
	KW_STACKED(): antlr.TerminalNode | null;
	KW_TYPE(): antlr.TerminalNode | null;
	KW_USE_COLUMN(): antlr.TerminalNode | null;
	KW_USE_VARIABLE(): antlr.TerminalNode | null;
	KW_VARIABLE_CONFLICT(): antlr.TerminalNode | null;
	KW_WARNING(): antlr.TerminalNode | null;
	KW_OUTER(): antlr.TerminalNode | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Sql_expressionContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	opt_target_list(): Opt_target_listContext | null;
	into_clause(): Into_clauseContext | null;
	from_clause(): From_clauseContext | null;
	where_clause(): Where_clauseContext | null;
	group_clause(): Group_clauseContext | null;
	having_clause(): Having_clauseContext | null;
	window_clause(): Window_clauseContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Expr_until_thenContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sql_expression(): Sql_expressionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Expr_until_semiContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	sql_expression(): Sql_expressionContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Expr_until_rightbracketContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Expr_until_loopContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	a_expr(): A_exprContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Make_execsql_stmtContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	stmt(): StmtContext;
	opt_returning_clause_into(): Opt_returning_clause_intoContext | null;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
export declare class Opt_returning_clause_intoContext extends antlr.ParserRuleContext {
	constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
	KW_INTO(): antlr.TerminalNode;
	opt_strict(): Opt_strictContext;
	into_target(): Into_targetContext;
	get ruleIndex(): number;
	enterRule(listener: PostgreSqlParserListener): void;
	exitRule(listener: PostgreSqlParserListener): void;
	accept<Result>(visitor: PostgreSqlParserVisitor<Result>): Result | null;
}
