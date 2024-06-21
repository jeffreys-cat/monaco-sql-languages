// Generated from dt-sql-parser/src/grammar/doris/DorisParser.g4 by ANTLR 4.13.1
// @ts-nocheck
import * as antlr from 'antlr4ng';
import { SQLParserBase } from '../SQLParserBase';
class DorisParser extends SQLParserBase {
	get grammarFileName() {
		return 'DorisParser.g4';
	}
	get literalNames() {
		return DorisParser.literalNames;
	}
	get symbolicNames() {
		return DorisParser.symbolicNames;
	}
	get ruleNames() {
		return DorisParser.ruleNames;
	}
	get serializedATN() {
		return DorisParser._serializedATN;
	}
	createFailedPredicateException(predicate, message) {
		return new antlr.FailedPredicateException(this, predicate, message);
	}
	constructor(input) {
		super(input);
		this.doris_legacy_SQL_syntax = true;
		this.interpreter = new antlr.ParserATNSimulator(
			this,
			DorisParser._ATN,
			DorisParser.decisionsToDFA,
			new antlr.PredictionContextCache()
		);
	}
	program() {
		let localContext = new ProgramContext(this.context, this.state);
		this.enterRule(localContext, 0, DorisParser.RULE_program);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 299;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (
					_la === 2 ||
					_la === 20 ||
					_la === 60 ||
					_la === 61 ||
					_la === 95 ||
					(((_la - 131) & ~0x1f) === 0 && ((1 << (_la - 131)) & 32781) !== 0) ||
					_la === 168 ||
					_la === 169 ||
					_la === 224 ||
					_la === 262 ||
					_la === 327 ||
					(((_la - 360) & ~0x1f) === 0 && ((1 << (_la - 360)) & 65665) !== 0) ||
					(((_la - 396) & ~0x1f) === 0 && ((1 << (_la - 396)) & 289) !== 0) ||
					(((_la - 466) & ~0x1f) === 0 && ((1 << (_la - 466)) & 524323) !== 0)
				) {
					{
						{
							this.state = 296;
							this.singleStatement();
						}
					}
					this.state = 301;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 302;
				this.match(DorisParser.EOF);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	multiStatements() {
		let localContext = new MultiStatementsContext(this.context, this.state);
		this.enterRule(localContext, 2, DorisParser.RULE_multiStatements);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 311;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				do {
					{
						{
							this.state = 304;
							this.statement();
							this.state = 308;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							while (_la === 1) {
								{
									{
										this.state = 305;
										this.match(DorisParser.SEMICOLON);
									}
								}
								this.state = 310;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
							}
						}
					}
					this.state = 313;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				} while (
					_la === 2 ||
					_la === 20 ||
					_la === 60 ||
					_la === 61 ||
					_la === 95 ||
					(((_la - 131) & ~0x1f) === 0 && ((1 << (_la - 131)) & 32781) !== 0) ||
					_la === 168 ||
					_la === 169 ||
					_la === 224 ||
					_la === 262 ||
					_la === 327 ||
					(((_la - 360) & ~0x1f) === 0 && ((1 << (_la - 360)) & 65665) !== 0) ||
					(((_la - 396) & ~0x1f) === 0 && ((1 << (_la - 396)) & 289) !== 0) ||
					(((_la - 466) & ~0x1f) === 0 && ((1 << (_la - 466)) & 524323) !== 0)
				);
				this.state = 315;
				this.match(DorisParser.EOF);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	singleStatement() {
		let localContext = new SingleStatementContext(this.context, this.state);
		this.enterRule(localContext, 4, DorisParser.RULE_singleStatement);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 317;
				this.statement();
				this.state = 321;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 1) {
					{
						{
							this.state = 318;
							this.match(DorisParser.SEMICOLON);
						}
					}
					this.state = 323;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 324;
				this.match(DorisParser.EOF);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	statement() {
		let localContext = new StatementContext(this.context, this.state);
		this.enterRule(localContext, 6, DorisParser.RULE_statement);
		let _la;
		try {
			let alternative;
			this.state = 386;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context)) {
				case 1:
					localContext = new StatementBaseAliasContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 326;
						this.statementBase();
					}
					break;
				case 2:
					localContext = new CallProcedureContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 327;
						this.match(DorisParser.CALL);
						this.state = 328;
						localContext._name = this.multipartIdentifier();
						this.state = 329;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 338;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (
							((_la & ~0x1f) === 0 && ((1 << _la) & 3427251012) !== 0) ||
							(((_la - 33) & ~0x1f) === 0 &&
								((1 << (_la - 33)) & 4009753405) !== 0) ||
							(((_la - 65) & ~0x1f) === 0 &&
								((1 << (_la - 65)) & 3204443871) !== 0) ||
							(((_la - 97) & ~0x1f) === 0 &&
								((1 << (_la - 97)) & 2147481585) !== 0) ||
							(((_la - 130) & ~0x1f) === 0 &&
								((1 << (_la - 130)) & 3755238181) !== 0) ||
							(((_la - 162) & ~0x1f) === 0 &&
								((1 << (_la - 162)) & 2785541685) !== 0) ||
							(((_la - 195) & ~0x1f) === 0 &&
								((1 << (_la - 195)) & 92265939) !== 0) ||
							(((_la - 230) & ~0x1f) === 0 &&
								((1 << (_la - 230)) & 1876226013) !== 0) ||
							(((_la - 263) & ~0x1f) === 0 &&
								((1 << (_la - 263)) & 2130443711) !== 0) ||
							(((_la - 295) & ~0x1f) === 0 &&
								((1 << (_la - 295)) & 4274056703) !== 0) ||
							(((_la - 327) & ~0x1f) === 0 &&
								((1 << (_la - 327)) & 3288240127) !== 0) ||
							(((_la - 359) & ~0x1f) === 0 &&
								((1 << (_la - 359)) & 3463969675) !== 0) ||
							(((_la - 391) & ~0x1f) === 0 &&
								((1 << (_la - 391)) & 4292776855) !== 0) ||
							(((_la - 423) & ~0x1f) === 0 &&
								((1 << (_la - 423)) & 4202393863) !== 0) ||
							(((_la - 455) & ~0x1f) === 0 &&
								((1 << (_la - 455)) & 2281612565) !== 0) ||
							(((_la - 490) & ~0x1f) === 0 &&
								((1 << (_la - 490)) & 2264999681) !== 0) ||
							(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
						) {
							{
								this.state = 330;
								this.expression();
								this.state = 335;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								while (_la === 4) {
									{
										{
											this.state = 331;
											this.match(DorisParser.COMMA);
											this.state = 332;
											this.expression();
										}
									}
									this.state = 337;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
								}
							}
						}
						this.state = 340;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 3:
					localContext = new CreateProcedureContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 349;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.ALTER:
								{
									this.state = 342;
									this.match(DorisParser.ALTER);
								}
								break;
							case DorisParser.CREATE:
								{
									this.state = 343;
									this.match(DorisParser.CREATE);
									this.state = 346;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
									if (_la === 311) {
										{
											this.state = 344;
											this.match(DorisParser.OR);
											this.state = 345;
											this.match(DorisParser.REPLACE);
										}
									}
								}
								break;
							case DorisParser.REPLACE:
								{
									this.state = 348;
									this.match(DorisParser.REPLACE);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
						this.state = 351;
						_la = this.tokenStream.LA(1);
						if (!(_la === 342 || _la === 343)) {
							this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 352;
						localContext._name = this.multipartIdentifier();
						this.state = 353;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 357;
						this.errorHandler.sync(this);
						alternative = this.interpreter.adaptivePredict(
							this.tokenStream,
							8,
							this.context
						);
						while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
							if (alternative === 1 + 1) {
								{
									{
										this.state = 354;
										this.matchWildcard();
									}
								}
							}
							this.state = 359;
							this.errorHandler.sync(this);
							alternative = this.interpreter.adaptivePredict(
								this.tokenStream,
								8,
								this.context
							);
						}
						this.state = 360;
						this.match(DorisParser.RIGHT_PAREN);
						this.state = 364;
						this.errorHandler.sync(this);
						alternative = this.interpreter.adaptivePredict(
							this.tokenStream,
							9,
							this.context
						);
						while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
							if (alternative === 1 + 1) {
								{
									{
										this.state = 361;
										this.matchWildcard();
									}
								}
							}
							this.state = 366;
							this.errorHandler.sync(this);
							alternative = this.interpreter.adaptivePredict(
								this.tokenStream,
								9,
								this.context
							);
						}
					}
					break;
				case 4:
					localContext = new DropProcedureContext(localContext);
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 367;
						this.match(DorisParser.DROP);
						this.state = 368;
						_la = this.tokenStream.LA(1);
						if (!(_la === 342 || _la === 343)) {
							this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 371;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 215) {
							{
								this.state = 369;
								this.match(DorisParser.IF);
								this.state = 370;
								this.match(DorisParser.EXISTS);
							}
						}
						this.state = 373;
						localContext._name = this.multipartIdentifier();
					}
					break;
				case 5:
					localContext = new ShowProcedureStatusContext(localContext);
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 374;
						this.match(DorisParser.SHOW);
						this.state = 375;
						this.match(DorisParser.PROCEDURE);
						this.state = 376;
						this.match(DorisParser.STATUS);
						this.state = 380;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LIKE:
								{
									this.state = 377;
									this.match(DorisParser.LIKE);
									this.state = 378;
									localContext._pattern = this.valueExpression(0);
								}
								break;
							case DorisParser.WHERE:
								{
									this.state = 379;
									this.whereClause();
								}
								break;
							case DorisParser.EOF:
							case DorisParser.SEMICOLON:
							case DorisParser.LEFT_PAREN:
							case DorisParser.ALTER:
							case DorisParser.CALL:
							case DorisParser.CANCEL:
							case DorisParser.CREATE:
							case DorisParser.DELETE:
							case DorisParser.DESC:
							case DorisParser.DESCRIBE:
							case DorisParser.DROP:
							case DorisParser.EXPLAIN:
							case DorisParser.EXPORT:
							case DorisParser.INSERT:
							case DorisParser.LOAD:
							case DorisParser.PAUSE:
							case DorisParser.REFRESH:
							case DorisParser.REPLACE:
							case DorisParser.RESUME:
							case DorisParser.SELECT:
							case DorisParser.SET:
							case DorisParser.SHOW:
							case DorisParser.UPDATE:
							case DorisParser.USE:
							case DorisParser.VALUES:
							case DorisParser.WITH:
								break;
							default:
								break;
						}
					}
					break;
				case 6:
					localContext = new ShowCreateProcedureContext(localContext);
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 382;
						this.match(DorisParser.SHOW);
						this.state = 383;
						this.match(DorisParser.CREATE);
						this.state = 384;
						this.match(DorisParser.PROCEDURE);
						this.state = 385;
						localContext._name = this.multipartIdentifier();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	statementBase() {
		let localContext = new StatementBaseContext(this.context, this.state);
		this.enterRule(localContext, 8, DorisParser.RULE_statementBase);
		let _la;
		try {
			this.state = 835;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context)) {
				case 1:
					localContext = new StatementDefaultContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 389;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 133 || _la === 134 || _la === 168) {
							{
								this.state = 388;
								this.explain();
							}
						}
						this.state = 391;
						this.query();
						this.state = 393;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 231) {
							{
								this.state = 392;
								this.outFileClause();
							}
						}
					}
					break;
				case 2:
					localContext = new CreateRowPolicyContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 395;
						this.match(DorisParser.CREATE);
						this.state = 396;
						this.match(DorisParser.ROW);
						this.state = 397;
						this.match(DorisParser.POLICY);
						this.state = 401;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 215) {
							{
								this.state = 398;
								this.match(DorisParser.IF);
								this.state = 399;
								this.match(DorisParser.NOT);
								this.state = 400;
								this.match(DorisParser.EXISTS);
							}
						}
						this.state = 403;
						localContext._name = this.identifier();
						this.state = 404;
						this.match(DorisParser.ON);
						this.state = 405;
						localContext._table = this.multipartIdentifier();
						this.state = 406;
						this.match(DorisParser.AS);
						this.state = 407;
						localContext._type_ = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(_la === 330 || _la === 375)) {
							localContext._type_ = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 408;
						this.match(DorisParser.TO);
						this.state = 412;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LEFT_BRACE:
							case DorisParser.RIGHT_BRACE:
							case DorisParser.ADDDATE:
							case DorisParser.AFTER:
							case DorisParser.AGG_STATE:
							case DorisParser.AGGREGATE:
							case DorisParser.ALIAS:
							case DorisParser.ANALYZED:
							case DorisParser.ARRAY:
							case DorisParser.ARRAY_RANGE:
							case DorisParser.AT:
							case DorisParser.AUTHORS:
							case DorisParser.AUTO_INCREMENT:
							case DorisParser.BACKENDS:
							case DorisParser.BACKUP:
							case DorisParser.BEGIN:
							case DorisParser.BELONG:
							case DorisParser.BIN:
							case DorisParser.BITAND:
							case DorisParser.BITMAP:
							case DorisParser.BITMAP_UNION:
							case DorisParser.BITOR:
							case DorisParser.BITXOR:
							case DorisParser.BLOB:
							case DorisParser.BOOLEAN:
							case DorisParser.BRIEF:
							case DorisParser.BROKER:
							case DorisParser.BUCKETS:
							case DorisParser.BUILD:
							case DorisParser.BUILTIN:
							case DorisParser.BULK:
							case DorisParser.CACHE:
							case DorisParser.CACHED:
							case DorisParser.CALL:
							case DorisParser.CATALOG:
							case DorisParser.CATALOGS:
							case DorisParser.CHAIN:
							case DorisParser.CHAR:
							case DorisParser.CHARSET:
							case DorisParser.CHECK:
							case DorisParser.CLUSTER:
							case DorisParser.CLUSTERS:
							case DorisParser.COLLATION:
							case DorisParser.COLLECT:
							case DorisParser.COLOCATE:
							case DorisParser.COLUMNS:
							case DorisParser.COMMENT:
							case DorisParser.COMMIT:
							case DorisParser.COMMITTED:
							case DorisParser.COMPACT:
							case DorisParser.COMPLETE:
							case DorisParser.COMPRESS_TYPE:
							case DorisParser.CONFIG:
							case DorisParser.CONNECTION:
							case DorisParser.CONNECTION_ID:
							case DorisParser.CONSISTENT:
							case DorisParser.CONSTRAINTS:
							case DorisParser.CONVERT:
							case DorisParser.CONVERT_LSC:
							case DorisParser.COPY:
							case DorisParser.COUNT:
							case DorisParser.CREATION:
							case DorisParser.CRON:
							case DorisParser.CURRENT_CATALOG:
							case DorisParser.CURRENT_DATE:
							case DorisParser.CURRENT_TIME:
							case DorisParser.CURRENT_TIMESTAMP:
							case DorisParser.CURRENT_USER:
							case DorisParser.DATA:
							case DorisParser.DATE:
							case DorisParser.DATE_ADD:
							case DorisParser.DATE_CEIL:
							case DorisParser.DATE_DIFF:
							case DorisParser.DATE_FLOOR:
							case DorisParser.DATE_SUB:
							case DorisParser.DATEADD:
							case DorisParser.DATEDIFF:
							case DorisParser.DATETIME:
							case DorisParser.DATETIMEV2:
							case DorisParser.DATEV2:
							case DorisParser.DATETIMEV1:
							case DorisParser.DATEV1:
							case DorisParser.DAY:
							case DorisParser.DAYS_ADD:
							case DorisParser.DAYS_SUB:
							case DorisParser.DECIMAL:
							case DorisParser.DECIMALV2:
							case DorisParser.DECIMALV3:
							case DorisParser.DEFERRED:
							case DorisParser.DEMAND:
							case DorisParser.DIAGNOSE:
							case DorisParser.DISTINCTPC:
							case DorisParser.DISTINCTPCSA:
							case DorisParser.DO:
							case DorisParser.DORIS_INTERNAL_TABLE_ID:
							case DorisParser.DUAL:
							case DorisParser.DYNAMIC:
							case DorisParser.ENABLE:
							case DorisParser.ENCRYPTKEY:
							case DorisParser.ENCRYPTKEYS:
							case DorisParser.END:
							case DorisParser.ENDS:
							case DorisParser.ENGINE:
							case DorisParser.ENGINES:
							case DorisParser.ERRORS:
							case DorisParser.EVENTS:
							case DorisParser.EVERY:
							case DorisParser.EXCLUDE:
							case DorisParser.EXPIRED:
							case DorisParser.EXTERNAL:
							case DorisParser.FAILED_LOGIN_ATTEMPTS:
							case DorisParser.FAST:
							case DorisParser.FEATURE:
							case DorisParser.FIELDS:
							case DorisParser.FILE:
							case DorisParser.FILTER:
							case DorisParser.FIRST:
							case DorisParser.FORMAT:
							case DorisParser.FREE:
							case DorisParser.FRONTENDS:
							case DorisParser.FUNCTION:
							case DorisParser.GENERIC:
							case DorisParser.GLOBAL:
							case DorisParser.GRAPH:
							case DorisParser.GROUPING:
							case DorisParser.GROUPS:
							case DorisParser.HASH:
							case DorisParser.HDFS:
							case DorisParser.HELP:
							case DorisParser.HISTOGRAM:
							case DorisParser.HLL_UNION:
							case DorisParser.HOSTNAME:
							case DorisParser.HOTSPOT:
							case DorisParser.HOUR:
							case DorisParser.HUB:
							case DorisParser.IDENTIFIED:
							case DorisParser.IGNORE:
							case DorisParser.IMMEDIATE:
							case DorisParser.INCREMENTAL:
							case DorisParser.INDEXES:
							case DorisParser.INVERTED:
							case DorisParser.IPV4:
							case DorisParser.IPV6:
							case DorisParser.IS_NOT_NULL_PRED:
							case DorisParser.IS_NULL_PRED:
							case DorisParser.ISNULL:
							case DorisParser.ISOLATION:
							case DorisParser.JOB:
							case DorisParser.JOBS:
							case DorisParser.JSON:
							case DorisParser.JSONB:
							case DorisParser.LABEL:
							case DorisParser.LAST:
							case DorisParser.LDAP:
							case DorisParser.LDAP_ADMIN_PASSWORD:
							case DorisParser.LESS:
							case DorisParser.LEVEL:
							case DorisParser.LINES:
							case DorisParser.LINK:
							case DorisParser.LOCAL:
							case DorisParser.LOCALTIME:
							case DorisParser.LOCALTIMESTAMP:
							case DorisParser.LOCATION:
							case DorisParser.LOCK:
							case DorisParser.LOGICAL:
							case DorisParser.MANUAL:
							case DorisParser.MAP:
							case DorisParser.MATCH_ALL:
							case DorisParser.MATCH_ANY:
							case DorisParser.MATCH_PHRASE:
							case DorisParser.MATCH_PHRASE_EDGE:
							case DorisParser.MATCH_PHRASE_PREFIX:
							case DorisParser.MATCH_REGEXP:
							case DorisParser.MATERIALIZED:
							case DorisParser.MAX:
							case DorisParser.MEMO:
							case DorisParser.MERGE:
							case DorisParser.MIGRATE:
							case DorisParser.MIGRATIONS:
							case DorisParser.MIN:
							case DorisParser.MINUTE:
							case DorisParser.MODIFY:
							case DorisParser.MONTH:
							case DorisParser.MTMV:
							case DorisParser.NAME:
							case DorisParser.NAMES:
							case DorisParser.NEGATIVE:
							case DorisParser.NEVER:
							case DorisParser.NEXT:
							case DorisParser.NGRAM_BF:
							case DorisParser.NO:
							case DorisParser.NON_NULLABLE:
							case DorisParser.NULLS:
							case DorisParser.OF:
							case DorisParser.OFFSET:
							case DorisParser.ONLY:
							case DorisParser.OPEN:
							case DorisParser.OPTIMIZED:
							case DorisParser.PARAMETER:
							case DorisParser.PARSED:
							case DorisParser.PARTITIONS:
							case DorisParser.PASSWORD:
							case DorisParser.PASSWORD_EXPIRE:
							case DorisParser.PASSWORD_HISTORY:
							case DorisParser.PASSWORD_LOCK_TIME:
							case DorisParser.PASSWORD_REUSE:
							case DorisParser.PATH:
							case DorisParser.PAUSE:
							case DorisParser.PERCENT:
							case DorisParser.PERIOD:
							case DorisParser.PERMISSIVE:
							case DorisParser.PHYSICAL:
							case DorisParser.PLAN:
							case DorisParser.PRIVILEGES:
							case DorisParser.PROCESS:
							case DorisParser.PLUGIN:
							case DorisParser.PLUGINS:
							case DorisParser.POLICY:
							case DorisParser.PROC:
							case DorisParser.PROCESSLIST:
							case DorisParser.PROFILE:
							case DorisParser.PROPERTIES:
							case DorisParser.PROPERTY:
							case DorisParser.QUANTILE_STATE:
							case DorisParser.QUANTILE_UNION:
							case DorisParser.QUERY:
							case DorisParser.QUOTA:
							case DorisParser.RANDOM:
							case DorisParser.RECENT:
							case DorisParser.RECOVER:
							case DorisParser.RECYCLE:
							case DorisParser.REFRESH:
							case DorisParser.REPEATABLE:
							case DorisParser.REPLACE:
							case DorisParser.REPLACE_IF_NOT_NULL:
							case DorisParser.REPOSITORIES:
							case DorisParser.REPOSITORY:
							case DorisParser.RESOURCE:
							case DorisParser.RESOURCES:
							case DorisParser.RESTORE:
							case DorisParser.RESTRICTIVE:
							case DorisParser.RESUME:
							case DorisParser.RETURNS:
							case DorisParser.REWRITTEN:
							case DorisParser.RLIKE:
							case DorisParser.ROLLBACK:
							case DorisParser.ROLLUP:
							case DorisParser.ROUTINE:
							case DorisParser.S3:
							case DorisParser.SAMPLE:
							case DorisParser.SCHEDULE:
							case DorisParser.SCHEDULER:
							case DorisParser.SCHEMA:
							case DorisParser.SECOND:
							case DorisParser.SEQUENCE:
							case DorisParser.SERIALIZABLE:
							case DorisParser.SESSION:
							case DorisParser.SHAPE:
							case DorisParser.SKEW:
							case DorisParser.SNAPSHOT:
							case DorisParser.SONAME:
							case DorisParser.SPLIT:
							case DorisParser.SQL:
							case DorisParser.STAGES:
							case DorisParser.START:
							case DorisParser.STARTS:
							case DorisParser.STATS:
							case DorisParser.STATUS:
							case DorisParser.STOP:
							case DorisParser.STORAGE:
							case DorisParser.STREAM:
							case DorisParser.STREAMING:
							case DorisParser.STRING:
							case DorisParser.STRUCT:
							case DorisParser.SUBDATE:
							case DorisParser.SUM:
							case DorisParser.TABLES:
							case DorisParser.TASK:
							case DorisParser.TASKS:
							case DorisParser.TEMPORARY:
							case DorisParser.TEXT:
							case DorisParser.THAN:
							case DorisParser.TIME:
							case DorisParser.TIMESTAMP:
							case DorisParser.TIMESTAMPADD:
							case DorisParser.TIMESTAMPDIFF:
							case DorisParser.TRANSACTION:
							case DorisParser.TREE:
							case DorisParser.TRIGGERS:
							case DorisParser.TRUNCATE:
							case DorisParser.TYPE:
							case DorisParser.TYPES:
							case DorisParser.UNCOMMITTED:
							case DorisParser.UNLOCK:
							case DorisParser.UP:
							case DorisParser.USER:
							case DorisParser.VALUE:
							case DorisParser.VARCHAR:
							case DorisParser.VARIABLES:
							case DorisParser.VARIANT:
							case DorisParser.VAULT:
							case DorisParser.VERBOSE:
							case DorisParser.VERSION:
							case DorisParser.VIEW:
							case DorisParser.WARM:
							case DorisParser.WARNINGS:
							case DorisParser.WEEK:
							case DorisParser.WORK:
							case DorisParser.YEAR:
							case DorisParser.STRING_LITERAL:
							case DorisParser.LEADING_STRING:
							case DorisParser.IDENTIFIER:
							case DorisParser.BACKQUOTED_IDENTIFIER:
								{
									this.state = 409;
									localContext._user = this.userIdentify();
								}
								break;
							case DorisParser.ROLE:
								{
									this.state = 410;
									this.match(DorisParser.ROLE);
									this.state = 411;
									localContext._roleName = this.identifier();
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
						this.state = 414;
						this.match(DorisParser.USING);
						this.state = 415;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 416;
						this.booleanExpression(0);
						this.state = 417;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 3:
					localContext = new CreateTableContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 419;
						this.match(DorisParser.CREATE);
						this.state = 421;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 171) {
							{
								this.state = 420;
								this.match(DorisParser.EXTERNAL);
							}
						}
						this.state = 423;
						this.match(DorisParser.TABLE);
						this.state = 427;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 215) {
							{
								this.state = 424;
								this.match(DorisParser.IF);
								this.state = 425;
								this.match(DorisParser.NOT);
								this.state = 426;
								this.match(DorisParser.EXISTS);
							}
						}
						this.state = 429;
						localContext._name = this.multipartIdentifier();
						this.state = 444;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 22, this.context)
						) {
							case 1:
								{
									this.state = 431;
									this.errorHandler.sync(this);
									switch (
										this.interpreter.adaptivePredict(
											this.tokenStream,
											19,
											this.context
										)
									) {
										case 1:
											{
												this.state = 430;
												localContext._ctasCols = this.identifierList();
											}
											break;
									}
								}
								break;
							case 2:
								{
									{
										this.state = 433;
										this.match(DorisParser.LEFT_PAREN);
										this.state = 434;
										this.columnDefs();
										this.state = 437;
										this.errorHandler.sync(this);
										switch (
											this.interpreter.adaptivePredict(
												this.tokenStream,
												20,
												this.context
											)
										) {
											case 1:
												{
													this.state = 435;
													this.match(DorisParser.COMMA);
													this.state = 436;
													this.indexDefs();
												}
												break;
										}
										this.state = 440;
										this.errorHandler.sync(this);
										_la = this.tokenStream.LA(1);
										if (_la === 4) {
											{
												this.state = 439;
												this.match(DorisParser.COMMA);
											}
										}
										this.state = 442;
										this.match(DorisParser.RIGHT_PAREN);
									}
								}
								break;
						}
						this.state = 449;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 157) {
							{
								this.state = 446;
								this.match(DorisParser.ENGINE);
								this.state = 447;
								this.match(DorisParser.EQ);
								this.state = 448;
								localContext._engine = this.identifier();
							}
						}
						this.state = 459;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 17 || _la === 149 || _la === 462) {
							{
								this.state = 451;
								_la = this.tokenStream.LA(1);
								if (!(_la === 17 || _la === 149 || _la === 462)) {
									this.errorHandler.recoverInline(this);
								} else {
									this.errorHandler.reportMatch(this);
									this.consume();
								}
								this.state = 452;
								this.match(DorisParser.KEY);
								this.state = 453;
								localContext._keys = this.identifierList();
								this.state = 457;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 71) {
									{
										this.state = 454;
										this.match(DorisParser.CLUSTER);
										this.state = 455;
										this.match(DorisParser.BY);
										this.state = 456;
										localContext._clusterKeys = this.identifierList();
									}
								}
							}
						}
						this.state = 463;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 79) {
							{
								this.state = 461;
								this.match(DorisParser.COMMENT);
								this.state = 462;
								this.match(DorisParser.STRING_LITERAL);
							}
						}
						this.state = 466;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 32 || _la === 319) {
							{
								this.state = 465;
								localContext._partition = this.partitionTable();
							}
						}
						this.state = 482;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 140) {
							{
								this.state = 468;
								this.match(DorisParser.DISTRIBUTED);
								this.state = 469;
								this.match(DorisParser.BY);
								this.state = 473;
								this.errorHandler.sync(this);
								switch (this.tokenStream.LA(1)) {
									case DorisParser.HASH:
										{
											this.state = 470;
											this.match(DorisParser.HASH);
											this.state = 471;
											localContext._hashKeys = this.identifierList();
										}
										break;
									case DorisParser.RANDOM:
										{
											this.state = 472;
											this.match(DorisParser.RANDOM);
										}
										break;
									default:
										throw new antlr.NoViableAltException(this);
								}
								this.state = 480;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 53) {
									{
										this.state = 475;
										this.match(DorisParser.BUCKETS);
										this.state = 478;
										this.errorHandler.sync(this);
										switch (this.tokenStream.LA(1)) {
											case DorisParser.INTEGER_VALUE:
												{
													this.state = 476;
													this.match(DorisParser.INTEGER_VALUE);
												}
												break;
											case DorisParser.AUTO:
												{
													this.state = 477;
													localContext._autoBucket = this.match(
														DorisParser.AUTO
													);
												}
												break;
											default:
												throw new antlr.NoViableAltException(this);
										}
									}
								}
							}
						}
						this.state = 489;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 385) {
							{
								this.state = 484;
								this.match(DorisParser.ROLLUP);
								this.state = 485;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 486;
								this.rollupDefs();
								this.state = 487;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
						this.state = 492;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 346) {
							{
								this.state = 491;
								localContext._properties = this.propertyClause();
							}
						}
						this.state = 496;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 52) {
							{
								this.state = 494;
								this.match(DorisParser.BROKER);
								this.state = 495;
								localContext._extProperties = this.propertyClause();
							}
						}
						this.state = 500;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 28) {
							{
								this.state = 498;
								this.match(DorisParser.AS);
								this.state = 499;
								this.query();
							}
						}
					}
					break;
				case 4:
					localContext = new CreateViewContext(localContext);
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 502;
						this.match(DorisParser.CREATE);
						this.state = 503;
						this.match(DorisParser.VIEW);
						this.state = 507;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 215) {
							{
								this.state = 504;
								this.match(DorisParser.IF);
								this.state = 505;
								this.match(DorisParser.NOT);
								this.state = 506;
								this.match(DorisParser.EXISTS);
							}
						}
						this.state = 509;
						localContext._name = this.multipartIdentifier();
						this.state = 514;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 2) {
							{
								this.state = 510;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 511;
								localContext._cols = this.simpleColumnDefs();
								this.state = 512;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
						this.state = 518;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 79) {
							{
								this.state = 516;
								this.match(DorisParser.COMMENT);
								this.state = 517;
								this.match(DorisParser.STRING_LITERAL);
							}
						}
						this.state = 520;
						this.match(DorisParser.AS);
						this.state = 521;
						this.query();
					}
					break;
				case 5:
					localContext = new AlterViewContext(localContext);
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 523;
						this.match(DorisParser.ALTER);
						this.state = 524;
						this.match(DorisParser.VIEW);
						this.state = 525;
						localContext._name = this.multipartIdentifier();
						this.state = 530;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 2) {
							{
								this.state = 526;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 527;
								localContext._cols = this.simpleColumnDefs();
								this.state = 528;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
						this.state = 532;
						this.match(DorisParser.AS);
						this.state = 533;
						this.query();
					}
					break;
				case 6:
					localContext = new CreateTableLikeContext(localContext);
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 535;
						this.match(DorisParser.CREATE);
						this.state = 537;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 171) {
							{
								this.state = 536;
								this.match(DorisParser.EXTERNAL);
							}
						}
						this.state = 539;
						this.match(DorisParser.TABLE);
						this.state = 543;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 215) {
							{
								this.state = 540;
								this.match(DorisParser.IF);
								this.state = 541;
								this.match(DorisParser.NOT);
								this.state = 542;
								this.match(DorisParser.EXISTS);
							}
						}
						this.state = 545;
						localContext._name = this.multipartIdentifier();
						this.state = 546;
						this.match(DorisParser.LIKE);
						this.state = 547;
						localContext._existedTable = this.multipartIdentifier();
						this.state = 553;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 43, this.context)
						) {
							case 1:
								{
									this.state = 548;
									this.match(DorisParser.WITH);
									this.state = 549;
									this.match(DorisParser.ROLLUP);
									this.state = 551;
									this.errorHandler.sync(this);
									switch (
										this.interpreter.adaptivePredict(
											this.tokenStream,
											42,
											this.context
										)
									) {
										case 1:
											{
												this.state = 550;
												localContext._rollupNames = this.identifierList();
											}
											break;
									}
								}
								break;
						}
					}
					break;
				case 7:
					localContext = new InsertTableContext(localContext);
					this.enterOuterAlt(localContext, 7);
					{
						this.state = 556;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 133 || _la === 134 || _la === 168) {
							{
								this.state = 555;
								this.explain();
							}
						}
						this.state = 559;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 485) {
							{
								this.state = 558;
								this.cte();
							}
						}
						this.state = 561;
						this.match(DorisParser.INSERT);
						this.state = 565;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.INTO:
								{
									this.state = 562;
									this.match(DorisParser.INTO);
								}
								break;
							case DorisParser.OVERWRITE:
								{
									this.state = 563;
									this.match(DorisParser.OVERWRITE);
									this.state = 564;
									this.match(DorisParser.TABLE);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
						this.state = 572;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 47, this.context)
						) {
							case 1:
								{
									this.state = 567;
									localContext._tableName = this.multipartIdentifier();
								}
								break;
							case 2:
								{
									this.state = 568;
									this.match(DorisParser.DORIS_INTERNAL_TABLE_ID);
									this.state = 569;
									this.match(DorisParser.LEFT_PAREN);
									this.state = 570;
									localContext._tableId = this.match(DorisParser.INTEGER_VALUE);
									this.state = 571;
									this.match(DorisParser.RIGHT_PAREN);
								}
								break;
						}
						this.state = 575;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 319 || _la === 320 || _la === 437) {
							{
								this.state = 574;
								this.partitionSpec();
							}
						}
						this.state = 580;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 49, this.context)
						) {
							case 1:
								{
									this.state = 577;
									this.match(DorisParser.WITH);
									this.state = 578;
									this.match(DorisParser.LABEL);
									this.state = 579;
									localContext._labelName = this.identifier();
								}
								break;
						}
						this.state = 583;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 50, this.context)
						) {
							case 1:
								{
									this.state = 582;
									localContext._cols = this.identifierList();
								}
								break;
						}
						this.state = 589;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 6) {
							{
								this.state = 585;
								this.match(DorisParser.LEFT_BRACKET);
								this.state = 586;
								localContext._hints = this.identifierSeq();
								this.state = 587;
								this.match(DorisParser.RIGHT_BRACKET);
							}
						}
						this.state = 591;
						this.query();
					}
					break;
				case 8:
					localContext = new UpdateContext(localContext);
					this.enterOuterAlt(localContext, 8);
					{
						this.state = 593;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 133 || _la === 134 || _la === 168) {
							{
								this.state = 592;
								this.explain();
							}
						}
						this.state = 596;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 485) {
							{
								this.state = 595;
								this.cte();
							}
						}
						this.state = 598;
						this.match(DorisParser.UPDATE);
						this.state = 599;
						localContext._tableName = this.multipartIdentifier();
						this.state = 600;
						this.tableAlias();
						this.state = 601;
						this.match(DorisParser.SET);
						this.state = 602;
						this.updateAssignmentSeq();
						this.state = 604;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 189) {
							{
								this.state = 603;
								this.fromClause();
							}
						}
						this.state = 607;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 483) {
							{
								this.state = 606;
								this.whereClause();
							}
						}
					}
					break;
				case 9:
					localContext = new DeleteContext(localContext);
					this.enterOuterAlt(localContext, 9);
					{
						this.state = 610;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 133 || _la === 134 || _la === 168) {
							{
								this.state = 609;
								this.explain();
							}
						}
						this.state = 613;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 485) {
							{
								this.state = 612;
								this.cte();
							}
						}
						this.state = 615;
						this.match(DorisParser.DELETE);
						this.state = 616;
						this.match(DorisParser.FROM);
						this.state = 617;
						localContext._tableName = this.multipartIdentifier();
						this.state = 619;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 58, this.context)
						) {
							case 1:
								{
									this.state = 618;
									this.partitionSpec();
								}
								break;
						}
						this.state = 621;
						this.tableAlias();
						this.state = 624;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 469) {
							{
								this.state = 622;
								this.match(DorisParser.USING);
								this.state = 623;
								this.relations();
							}
						}
						this.state = 627;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 483) {
							{
								this.state = 626;
								this.whereClause();
							}
						}
					}
					break;
				case 10:
					localContext = new LoadContext(localContext);
					this.enterOuterAlt(localContext, 10);
					{
						this.state = 629;
						this.match(DorisParser.LOAD);
						this.state = 630;
						this.match(DorisParser.LABEL);
						this.state = 631;
						localContext._lableName = this.identifier();
						this.state = 632;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 633;
						localContext._dataDesc = this.dataDesc();
						localContext._dataDescs.push(localContext._dataDesc);
						this.state = 638;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 634;
									this.match(DorisParser.COMMA);
									this.state = 635;
									localContext._dataDesc = this.dataDesc();
									localContext._dataDescs.push(localContext._dataDesc);
								}
							}
							this.state = 640;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 641;
						this.match(DorisParser.RIGHT_PAREN);
						this.state = 643;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 62, this.context)
						) {
							case 1:
								{
									this.state = 642;
									this.withRemoteStorageSystem();
								}
								break;
						}
						this.state = 650;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 346) {
							{
								this.state = 645;
								this.match(DorisParser.PROPERTIES);
								this.state = 646;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 647;
								localContext._properties = this.propertyItemList();
								this.state = 648;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
						this.state = 653;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 79) {
							{
								this.state = 652;
								this.commentSpec();
							}
						}
					}
					break;
				case 11:
					localContext = new MysqlLoadContext(localContext);
					this.enterOuterAlt(localContext, 11);
					{
						this.state = 655;
						this.match(DorisParser.LOAD);
						this.state = 656;
						this.mysqlDataDesc();
						this.state = 662;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 346) {
							{
								this.state = 657;
								this.match(DorisParser.PROPERTIES);
								this.state = 658;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 659;
								localContext._properties = this.propertyItemList();
								this.state = 660;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
						this.state = 665;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 79) {
							{
								this.state = 664;
								this.commentSpec();
							}
						}
					}
					break;
				case 12:
					localContext = new ExportContext(localContext);
					this.enterOuterAlt(localContext, 12);
					{
						this.state = 667;
						this.match(DorisParser.EXPORT);
						this.state = 668;
						this.match(DorisParser.TABLE);
						this.state = 669;
						localContext._tableName = this.multipartIdentifier();
						this.state = 672;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 319) {
							{
								this.state = 670;
								this.match(DorisParser.PARTITION);
								this.state = 671;
								localContext._partition = this.identifierList();
							}
						}
						this.state = 675;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 483) {
							{
								this.state = 674;
								this.whereClause();
							}
						}
						this.state = 677;
						this.match(DorisParser.TO);
						this.state = 678;
						localContext._filePath = this.match(DorisParser.STRING_LITERAL);
						this.state = 680;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 346) {
							{
								this.state = 679;
								this.propertyClause();
							}
						}
						this.state = 683;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 70, this.context)
						) {
							case 1:
								{
									this.state = 682;
									this.withRemoteStorageSystem();
								}
								break;
						}
					}
					break;
				case 13:
					localContext = new CreateMTMVContext(localContext);
					this.enterOuterAlt(localContext, 13);
					{
						this.state = 685;
						this.match(DorisParser.CREATE);
						this.state = 686;
						this.match(DorisParser.MATERIALIZED);
						this.state = 687;
						this.match(DorisParser.VIEW);
						this.state = 691;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 215) {
							{
								this.state = 688;
								this.match(DorisParser.IF);
								this.state = 689;
								this.match(DorisParser.NOT);
								this.state = 690;
								this.match(DorisParser.EXISTS);
							}
						}
						this.state = 693;
						localContext._mvName = this.multipartIdentifier();
						this.state = 698;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 2) {
							{
								this.state = 694;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 695;
								localContext._cols = this.simpleColumnDefs();
								this.state = 696;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
						this.state = 701;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 54) {
							{
								this.state = 700;
								this.buildMode();
							}
						}
						this.state = 710;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 360) {
							{
								this.state = 703;
								this.match(DorisParser.REFRESH);
								this.state = 705;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 32 || _la === 83) {
									{
										this.state = 704;
										this.refreshMethod();
									}
								}
								this.state = 708;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 307) {
									{
										this.state = 707;
										this.refreshTrigger();
									}
								}
							}
						}
						this.state = 717;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 149 || _la === 245) {
							{
								this.state = 713;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 149) {
									{
										this.state = 712;
										this.match(DorisParser.DUPLICATE);
									}
								}
								this.state = 715;
								this.match(DorisParser.KEY);
								this.state = 716;
								localContext._keys = this.identifierList();
							}
						}
						this.state = 721;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 79) {
							{
								this.state = 719;
								this.match(DorisParser.COMMENT);
								this.state = 720;
								this.match(DorisParser.STRING_LITERAL);
							}
						}
						this.state = 729;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 319) {
							{
								this.state = 723;
								this.match(DorisParser.PARTITION);
								this.state = 724;
								this.match(DorisParser.BY);
								this.state = 725;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 726;
								this.mvPartition();
								this.state = 727;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
						this.state = 742;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 140) {
							{
								this.state = 731;
								this.match(DorisParser.DISTRIBUTED);
								this.state = 732;
								this.match(DorisParser.BY);
								this.state = 736;
								this.errorHandler.sync(this);
								switch (this.tokenStream.LA(1)) {
									case DorisParser.HASH:
										{
											this.state = 733;
											this.match(DorisParser.HASH);
											this.state = 734;
											localContext._hashKeys = this.identifierList();
										}
										break;
									case DorisParser.RANDOM:
										{
											this.state = 735;
											this.match(DorisParser.RANDOM);
										}
										break;
									default:
										throw new antlr.NoViableAltException(this);
								}
								this.state = 740;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 53) {
									{
										this.state = 738;
										this.match(DorisParser.BUCKETS);
										this.state = 739;
										_la = this.tokenStream.LA(1);
										if (!(_la === 32 || _la === 521)) {
											this.errorHandler.recoverInline(this);
										} else {
											this.errorHandler.reportMatch(this);
											this.consume();
										}
									}
								}
							}
						}
						this.state = 745;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 346) {
							{
								this.state = 744;
								this.propertyClause();
							}
						}
						this.state = 747;
						this.match(DorisParser.AS);
						this.state = 748;
						this.query();
					}
					break;
				case 14:
					localContext = new RefreshMTMVContext(localContext);
					this.enterOuterAlt(localContext, 14);
					{
						this.state = 750;
						this.match(DorisParser.REFRESH);
						this.state = 751;
						this.match(DorisParser.MATERIALIZED);
						this.state = 752;
						this.match(DorisParser.VIEW);
						this.state = 753;
						localContext._mvName = this.multipartIdentifier();
						this.state = 757;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.PARTITION:
							case DorisParser.PARTITIONS:
							case DorisParser.TEMPORARY:
								{
									this.state = 754;
									this.partitionSpec();
								}
								break;
							case DorisParser.COMPLETE:
								{
									this.state = 755;
									this.match(DorisParser.COMPLETE);
								}
								break;
							case DorisParser.AUTO:
								{
									this.state = 756;
									this.match(DorisParser.AUTO);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 15:
					localContext = new AlterMTMVContext(localContext);
					this.enterOuterAlt(localContext, 15);
					{
						this.state = 759;
						this.match(DorisParser.ALTER);
						this.state = 760;
						this.match(DorisParser.MATERIALIZED);
						this.state = 761;
						this.match(DorisParser.VIEW);
						this.state = 762;
						localContext._mvName = this.multipartIdentifier();
						this.state = 778;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.RENAME:
								{
									{
										this.state = 763;
										this.match(DorisParser.RENAME);
										this.state = 764;
										localContext._newName = this.identifier();
									}
								}
								break;
							case DorisParser.REFRESH:
								{
									{
										this.state = 765;
										this.match(DorisParser.REFRESH);
										this.state = 771;
										this.errorHandler.sync(this);
										switch (
											this.interpreter.adaptivePredict(
												this.tokenStream,
												86,
												this.context
											)
										) {
											case 1:
												{
													this.state = 766;
													this.refreshMethod();
												}
												break;
											case 2:
												{
													this.state = 767;
													this.refreshTrigger();
												}
												break;
											case 3:
												{
													this.state = 768;
													this.refreshMethod();
													this.state = 769;
													this.refreshTrigger();
												}
												break;
										}
									}
								}
								break;
							case DorisParser.SET:
								{
									{
										this.state = 773;
										this.match(DorisParser.SET);
										this.state = 774;
										this.match(DorisParser.LEFT_PAREN);
										this.state = 775;
										localContext._fileProperties = this.propertyItemList();
										this.state = 776;
										this.match(DorisParser.RIGHT_PAREN);
									}
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 16:
					localContext = new DropMTMVContext(localContext);
					this.enterOuterAlt(localContext, 16);
					{
						this.state = 780;
						this.match(DorisParser.DROP);
						this.state = 781;
						this.match(DorisParser.MATERIALIZED);
						this.state = 782;
						this.match(DorisParser.VIEW);
						this.state = 785;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 215) {
							{
								this.state = 783;
								this.match(DorisParser.IF);
								this.state = 784;
								this.match(DorisParser.EXISTS);
							}
						}
						this.state = 787;
						localContext._mvName = this.multipartIdentifier();
					}
					break;
				case 17:
					localContext = new PauseMTMVContext(localContext);
					this.enterOuterAlt(localContext, 17);
					{
						this.state = 788;
						this.match(DorisParser.PAUSE);
						this.state = 789;
						this.match(DorisParser.MATERIALIZED);
						this.state = 790;
						this.match(DorisParser.VIEW);
						this.state = 791;
						this.match(DorisParser.JOB);
						this.state = 792;
						this.match(DorisParser.ON);
						this.state = 793;
						localContext._mvName = this.multipartIdentifier();
					}
					break;
				case 18:
					localContext = new ResumeMTMVContext(localContext);
					this.enterOuterAlt(localContext, 18);
					{
						this.state = 794;
						this.match(DorisParser.RESUME);
						this.state = 795;
						this.match(DorisParser.MATERIALIZED);
						this.state = 796;
						this.match(DorisParser.VIEW);
						this.state = 797;
						this.match(DorisParser.JOB);
						this.state = 798;
						this.match(DorisParser.ON);
						this.state = 799;
						localContext._mvName = this.multipartIdentifier();
					}
					break;
				case 19:
					localContext = new CancelMTMVTaskContext(localContext);
					this.enterOuterAlt(localContext, 19);
					{
						this.state = 800;
						this.match(DorisParser.CANCEL);
						this.state = 801;
						this.match(DorisParser.MATERIALIZED);
						this.state = 802;
						this.match(DorisParser.VIEW);
						this.state = 803;
						this.match(DorisParser.TASK);
						this.state = 804;
						localContext._taskId = this.match(DorisParser.INTEGER_VALUE);
						this.state = 805;
						this.match(DorisParser.ON);
						this.state = 806;
						localContext._mvName = this.multipartIdentifier();
					}
					break;
				case 20:
					localContext = new AddConstraintContext(localContext);
					this.enterOuterAlt(localContext, 20);
					{
						this.state = 807;
						this.match(DorisParser.ALTER);
						this.state = 808;
						this.match(DorisParser.TABLE);
						this.state = 809;
						localContext._table = this.multipartIdentifier();
						this.state = 810;
						this.match(DorisParser.ADD);
						this.state = 811;
						this.match(DorisParser.CONSTRAINT);
						this.state = 812;
						localContext._constraintName = this.errorCapturingIdentifier();
						this.state = 813;
						this.constraint();
					}
					break;
				case 21:
					localContext = new DropConstraintContext(localContext);
					this.enterOuterAlt(localContext, 21);
					{
						this.state = 815;
						this.match(DorisParser.ALTER);
						this.state = 816;
						this.match(DorisParser.TABLE);
						this.state = 817;
						localContext._table = this.multipartIdentifier();
						this.state = 818;
						this.match(DorisParser.DROP);
						this.state = 819;
						this.match(DorisParser.CONSTRAINT);
						this.state = 820;
						localContext._constraintName = this.errorCapturingIdentifier();
					}
					break;
				case 22:
					localContext = new ShowConstraintContext(localContext);
					this.enterOuterAlt(localContext, 22);
					{
						this.state = 822;
						this.match(DorisParser.SHOW);
						this.state = 823;
						this.match(DorisParser.CONSTRAINTS);
						this.state = 824;
						this.match(DorisParser.FROM);
						this.state = 825;
						localContext._table = this.multipartIdentifier();
					}
					break;
				case 23:
					localContext = new DropCatalogRecycleBinContext(localContext);
					this.enterOuterAlt(localContext, 23);
					{
						this.state = 826;
						this.match(DorisParser.DROP);
						this.state = 827;
						this.match(DorisParser.CATALOG);
						this.state = 828;
						this.match(DorisParser.RECYCLE);
						this.state = 829;
						this.match(DorisParser.BIN);
						this.state = 830;
						this.match(DorisParser.WHERE);
						this.state = 831;
						localContext._idType = this.match(DorisParser.STRING_LITERAL);
						this.state = 832;
						this.match(DorisParser.EQ);
						this.state = 833;
						localContext._id = this.match(DorisParser.INTEGER_VALUE);
					}
					break;
				case 24:
					localContext = new UnsupportedContext(localContext);
					this.enterOuterAlt(localContext, 24);
					{
						this.state = 834;
						this.unsupportedStatement();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	unsupportedStatement() {
		let localContext = new UnsupportedStatementContext(this.context, this.state);
		this.enterRule(localContext, 10, DorisParser.RULE_unsupportedStatement);
		let _la;
		try {
			this.state = 947;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context)) {
				case 1:
					localContext = new SetDefaultStorageVaultContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 837;
						this.match(DorisParser.SET);
						this.state = 838;
						this.identifier();
						this.state = 839;
						this.match(DorisParser.AS);
						this.state = 840;
						this.match(DorisParser.DEFAULT);
						this.state = 841;
						this.match(DorisParser.STORAGE);
						this.state = 842;
						this.match(DorisParser.VAULT);
					}
					break;
				case 2:
					localContext = new SetUserPropertiesContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 844;
						this.match(DorisParser.SET);
						this.state = 845;
						this.match(DorisParser.PROPERTY);
						this.state = 848;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 184) {
							{
								this.state = 846;
								this.match(DorisParser.FOR);
								this.state = 847;
								localContext._user = this.identifierOrText();
							}
						}
						this.state = 850;
						this.propertyItemList();
					}
					break;
				case 3:
					localContext = new SetSystemVariableWithTypeContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 851;
						this.match(DorisParser.SET);
						this.state = 853;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 91, this.context)
						) {
							case 1:
								{
									this.state = 852;
									_la = this.tokenStream.LA(1);
									if (!(_la === 196 || _la === 263 || _la === 400)) {
										this.errorHandler.recoverInline(this);
									} else {
										this.errorHandler.reportMatch(this);
										this.consume();
									}
								}
								break;
						}
						this.state = 855;
						this.identifier();
						this.state = 856;
						this.match(DorisParser.EQ);
						this.state = 859;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LEFT_PAREN:
							case DorisParser.LEFT_BRACKET:
							case DorisParser.LEFT_BRACE:
							case DorisParser.RIGHT_BRACE:
							case DorisParser.ADD:
							case DorisParser.ADDDATE:
							case DorisParser.AFTER:
							case DorisParser.AGG_STATE:
							case DorisParser.AGGREGATE:
							case DorisParser.ALIAS:
							case DorisParser.ANALYZED:
							case DorisParser.ARRAY:
							case DorisParser.ARRAY_RANGE:
							case DorisParser.AT:
							case DorisParser.AUTHORS:
							case DorisParser.AUTO_INCREMENT:
							case DorisParser.BACKENDS:
							case DorisParser.BACKUP:
							case DorisParser.BEGIN:
							case DorisParser.BELONG:
							case DorisParser.BIN:
							case DorisParser.BINARY:
							case DorisParser.BITAND:
							case DorisParser.BITMAP:
							case DorisParser.BITMAP_UNION:
							case DorisParser.BITOR:
							case DorisParser.BITXOR:
							case DorisParser.BLOB:
							case DorisParser.BOOLEAN:
							case DorisParser.BRIEF:
							case DorisParser.BROKER:
							case DorisParser.BUCKETS:
							case DorisParser.BUILD:
							case DorisParser.BUILTIN:
							case DorisParser.BULK:
							case DorisParser.CACHE:
							case DorisParser.CACHED:
							case DorisParser.CALL:
							case DorisParser.CASE:
							case DorisParser.CAST:
							case DorisParser.CATALOG:
							case DorisParser.CATALOGS:
							case DorisParser.CHAIN:
							case DorisParser.CHAR:
							case DorisParser.CHARSET:
							case DorisParser.CHECK:
							case DorisParser.CLUSTER:
							case DorisParser.CLUSTERS:
							case DorisParser.COLLATION:
							case DorisParser.COLLECT:
							case DorisParser.COLOCATE:
							case DorisParser.COLUMNS:
							case DorisParser.COMMENT:
							case DorisParser.COMMIT:
							case DorisParser.COMMITTED:
							case DorisParser.COMPACT:
							case DorisParser.COMPLETE:
							case DorisParser.COMPRESS_TYPE:
							case DorisParser.CONFIG:
							case DorisParser.CONNECTION:
							case DorisParser.CONNECTION_ID:
							case DorisParser.CONSISTENT:
							case DorisParser.CONSTRAINTS:
							case DorisParser.CONVERT:
							case DorisParser.CONVERT_LSC:
							case DorisParser.COPY:
							case DorisParser.COUNT:
							case DorisParser.CREATION:
							case DorisParser.CRON:
							case DorisParser.CURRENT_CATALOG:
							case DorisParser.CURRENT_DATE:
							case DorisParser.CURRENT_TIME:
							case DorisParser.CURRENT_TIMESTAMP:
							case DorisParser.CURRENT_USER:
							case DorisParser.DATA:
							case DorisParser.DATABASE:
							case DorisParser.DATE:
							case DorisParser.DATE_ADD:
							case DorisParser.DATE_CEIL:
							case DorisParser.DATE_DIFF:
							case DorisParser.DATE_FLOOR:
							case DorisParser.DATE_SUB:
							case DorisParser.DATEADD:
							case DorisParser.DATEDIFF:
							case DorisParser.DATETIME:
							case DorisParser.DATETIMEV2:
							case DorisParser.DATEV2:
							case DorisParser.DATETIMEV1:
							case DorisParser.DATEV1:
							case DorisParser.DAY:
							case DorisParser.DAYS_ADD:
							case DorisParser.DAYS_SUB:
							case DorisParser.DECIMAL:
							case DorisParser.DECIMALV2:
							case DorisParser.DECIMALV3:
							case DorisParser.DEFERRED:
							case DorisParser.DEMAND:
							case DorisParser.DIAGNOSE:
							case DorisParser.DISTINCTPC:
							case DorisParser.DISTINCTPCSA:
							case DorisParser.DO:
							case DorisParser.DORIS_INTERNAL_TABLE_ID:
							case DorisParser.DUAL:
							case DorisParser.DYNAMIC:
							case DorisParser.ENABLE:
							case DorisParser.ENCRYPTKEY:
							case DorisParser.ENCRYPTKEYS:
							case DorisParser.END:
							case DorisParser.ENDS:
							case DorisParser.ENGINE:
							case DorisParser.ENGINES:
							case DorisParser.ERRORS:
							case DorisParser.EVENTS:
							case DorisParser.EVERY:
							case DorisParser.EXCLUDE:
							case DorisParser.EXISTS:
							case DorisParser.EXPIRED:
							case DorisParser.EXTERNAL:
							case DorisParser.EXTRACT:
							case DorisParser.FAILED_LOGIN_ATTEMPTS:
							case DorisParser.FALSE:
							case DorisParser.FAST:
							case DorisParser.FEATURE:
							case DorisParser.FIELDS:
							case DorisParser.FILE:
							case DorisParser.FILTER:
							case DorisParser.FIRST:
							case DorisParser.FORMAT:
							case DorisParser.FREE:
							case DorisParser.FRONTENDS:
							case DorisParser.FUNCTION:
							case DorisParser.GENERIC:
							case DorisParser.GLOBAL:
							case DorisParser.GRAPH:
							case DorisParser.GROUPING:
							case DorisParser.GROUPS:
							case DorisParser.HASH:
							case DorisParser.HDFS:
							case DorisParser.HELP:
							case DorisParser.HISTOGRAM:
							case DorisParser.HLL_UNION:
							case DorisParser.HOSTNAME:
							case DorisParser.HOTSPOT:
							case DorisParser.HOUR:
							case DorisParser.HUB:
							case DorisParser.IDENTIFIED:
							case DorisParser.IF:
							case DorisParser.IGNORE:
							case DorisParser.IMMEDIATE:
							case DorisParser.INCREMENTAL:
							case DorisParser.INDEXES:
							case DorisParser.INTERVAL:
							case DorisParser.INVERTED:
							case DorisParser.IPV4:
							case DorisParser.IPV6:
							case DorisParser.IS_NOT_NULL_PRED:
							case DorisParser.IS_NULL_PRED:
							case DorisParser.ISNULL:
							case DorisParser.ISOLATION:
							case DorisParser.JOB:
							case DorisParser.JOBS:
							case DorisParser.JSON:
							case DorisParser.JSONB:
							case DorisParser.KEY:
							case DorisParser.LABEL:
							case DorisParser.LAST:
							case DorisParser.LDAP:
							case DorisParser.LDAP_ADMIN_PASSWORD:
							case DorisParser.LEFT:
							case DorisParser.LESS:
							case DorisParser.LEVEL:
							case DorisParser.LIKE:
							case DorisParser.LINES:
							case DorisParser.LINK:
							case DorisParser.LOCAL:
							case DorisParser.LOCALTIME:
							case DorisParser.LOCALTIMESTAMP:
							case DorisParser.LOCATION:
							case DorisParser.LOCK:
							case DorisParser.LOGICAL:
							case DorisParser.MANUAL:
							case DorisParser.MAP:
							case DorisParser.MATCH_ALL:
							case DorisParser.MATCH_ANY:
							case DorisParser.MATCH_PHRASE:
							case DorisParser.MATCH_PHRASE_EDGE:
							case DorisParser.MATCH_PHRASE_PREFIX:
							case DorisParser.MATCH_REGEXP:
							case DorisParser.MATERIALIZED:
							case DorisParser.MAX:
							case DorisParser.MEMO:
							case DorisParser.MERGE:
							case DorisParser.MIGRATE:
							case DorisParser.MIGRATIONS:
							case DorisParser.MIN:
							case DorisParser.MINUTE:
							case DorisParser.MODIFY:
							case DorisParser.MONTH:
							case DorisParser.MTMV:
							case DorisParser.NAME:
							case DorisParser.NAMES:
							case DorisParser.NEGATIVE:
							case DorisParser.NEVER:
							case DorisParser.NEXT:
							case DorisParser.NGRAM_BF:
							case DorisParser.NO:
							case DorisParser.NON_NULLABLE:
							case DorisParser.NOT:
							case DorisParser.NULL:
							case DorisParser.NULLS:
							case DorisParser.OF:
							case DorisParser.OFFSET:
							case DorisParser.ONLY:
							case DorisParser.OPEN:
							case DorisParser.OPTIMIZED:
							case DorisParser.PARAMETER:
							case DorisParser.PARSED:
							case DorisParser.PARTITIONS:
							case DorisParser.PASSWORD:
							case DorisParser.PASSWORD_EXPIRE:
							case DorisParser.PASSWORD_HISTORY:
							case DorisParser.PASSWORD_LOCK_TIME:
							case DorisParser.PASSWORD_REUSE:
							case DorisParser.PATH:
							case DorisParser.PAUSE:
							case DorisParser.PERCENT:
							case DorisParser.PERIOD:
							case DorisParser.PERMISSIVE:
							case DorisParser.PHYSICAL:
							case DorisParser.PLACEHOLDER:
							case DorisParser.PLAN:
							case DorisParser.PRIVILEGES:
							case DorisParser.PROCESS:
							case DorisParser.PLUGIN:
							case DorisParser.PLUGINS:
							case DorisParser.POLICY:
							case DorisParser.PROC:
							case DorisParser.PROCESSLIST:
							case DorisParser.PROFILE:
							case DorisParser.PROPERTIES:
							case DorisParser.PROPERTY:
							case DorisParser.QUANTILE_STATE:
							case DorisParser.QUANTILE_UNION:
							case DorisParser.QUERY:
							case DorisParser.QUOTA:
							case DorisParser.RANDOM:
							case DorisParser.RECENT:
							case DorisParser.RECOVER:
							case DorisParser.RECYCLE:
							case DorisParser.REFRESH:
							case DorisParser.REGEXP:
							case DorisParser.REPEATABLE:
							case DorisParser.REPLACE:
							case DorisParser.REPLACE_IF_NOT_NULL:
							case DorisParser.REPOSITORIES:
							case DorisParser.REPOSITORY:
							case DorisParser.RESOURCE:
							case DorisParser.RESOURCES:
							case DorisParser.RESTORE:
							case DorisParser.RESTRICTIVE:
							case DorisParser.RESUME:
							case DorisParser.RETURNS:
							case DorisParser.REWRITTEN:
							case DorisParser.RIGHT:
							case DorisParser.RLIKE:
							case DorisParser.ROLLBACK:
							case DorisParser.ROLLUP:
							case DorisParser.ROUTINE:
							case DorisParser.S3:
							case DorisParser.SAMPLE:
							case DorisParser.SCHEDULE:
							case DorisParser.SCHEDULER:
							case DorisParser.SCHEMA:
							case DorisParser.SECOND:
							case DorisParser.SEQUENCE:
							case DorisParser.SERIALIZABLE:
							case DorisParser.SESSION:
							case DorisParser.SHAPE:
							case DorisParser.SKEW:
							case DorisParser.SNAPSHOT:
							case DorisParser.SONAME:
							case DorisParser.SPLIT:
							case DorisParser.SQL:
							case DorisParser.STAGES:
							case DorisParser.START:
							case DorisParser.STARTS:
							case DorisParser.STATS:
							case DorisParser.STATUS:
							case DorisParser.STOP:
							case DorisParser.STORAGE:
							case DorisParser.STREAM:
							case DorisParser.STREAMING:
							case DorisParser.STRING:
							case DorisParser.STRUCT:
							case DorisParser.SUBDATE:
							case DorisParser.SUM:
							case DorisParser.TABLES:
							case DorisParser.TASK:
							case DorisParser.TASKS:
							case DorisParser.TEMPORARY:
							case DorisParser.TEXT:
							case DorisParser.THAN:
							case DorisParser.TIME:
							case DorisParser.TIMESTAMP:
							case DorisParser.TIMESTAMPADD:
							case DorisParser.TIMESTAMPDIFF:
							case DorisParser.TRANSACTION:
							case DorisParser.TREE:
							case DorisParser.TRIGGERS:
							case DorisParser.TRIM:
							case DorisParser.TRUE:
							case DorisParser.TRUNCATE:
							case DorisParser.TYPE:
							case DorisParser.TYPES:
							case DorisParser.UNCOMMITTED:
							case DorisParser.UNLOCK:
							case DorisParser.UP:
							case DorisParser.USER:
							case DorisParser.VALUE:
							case DorisParser.VARCHAR:
							case DorisParser.VARIABLES:
							case DorisParser.VARIANT:
							case DorisParser.VAULT:
							case DorisParser.VERBOSE:
							case DorisParser.VERSION:
							case DorisParser.VIEW:
							case DorisParser.WARM:
							case DorisParser.WARNINGS:
							case DorisParser.WEEK:
							case DorisParser.WORK:
							case DorisParser.YEAR:
							case DorisParser.PLUS:
							case DorisParser.SUBTRACT:
							case DorisParser.ASTERISK:
							case DorisParser.TILDE:
							case DorisParser.LOGICALNOT:
							case DorisParser.ATSIGN:
							case DorisParser.DOUBLEATSIGN:
							case DorisParser.STRING_LITERAL:
							case DorisParser.INTEGER_VALUE:
							case DorisParser.EXPONENT_VALUE:
							case DorisParser.DECIMAL_VALUE:
							case DorisParser.IDENTIFIER:
							case DorisParser.BACKQUOTED_IDENTIFIER:
								{
									this.state = 857;
									this.expression();
								}
								break;
							case DorisParser.DEFAULT:
								{
									this.state = 858;
									this.match(DorisParser.DEFAULT);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 4:
					localContext = new SetSystemVariableWithoutTypeContext(localContext);
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 861;
						this.match(DorisParser.SET);
						this.state = 862;
						this.variable();
					}
					break;
				case 5:
					localContext = new SetCharsetContext(localContext);
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 863;
						this.match(DorisParser.SET);
						this.state = 867;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.CHAR:
								{
									this.state = 864;
									this.match(DorisParser.CHAR);
									this.state = 865;
									this.match(DorisParser.SET);
								}
								break;
							case DorisParser.CHARSET:
								{
									this.state = 866;
									this.match(DorisParser.CHARSET);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
						this.state = 871;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LEFT_BRACE:
							case DorisParser.RIGHT_BRACE:
							case DorisParser.ADDDATE:
							case DorisParser.AFTER:
							case DorisParser.AGG_STATE:
							case DorisParser.AGGREGATE:
							case DorisParser.ALIAS:
							case DorisParser.ANALYZED:
							case DorisParser.ARRAY:
							case DorisParser.ARRAY_RANGE:
							case DorisParser.AT:
							case DorisParser.AUTHORS:
							case DorisParser.AUTO_INCREMENT:
							case DorisParser.BACKENDS:
							case DorisParser.BACKUP:
							case DorisParser.BEGIN:
							case DorisParser.BELONG:
							case DorisParser.BIN:
							case DorisParser.BITAND:
							case DorisParser.BITMAP:
							case DorisParser.BITMAP_UNION:
							case DorisParser.BITOR:
							case DorisParser.BITXOR:
							case DorisParser.BLOB:
							case DorisParser.BOOLEAN:
							case DorisParser.BRIEF:
							case DorisParser.BROKER:
							case DorisParser.BUCKETS:
							case DorisParser.BUILD:
							case DorisParser.BUILTIN:
							case DorisParser.BULK:
							case DorisParser.CACHE:
							case DorisParser.CACHED:
							case DorisParser.CALL:
							case DorisParser.CATALOG:
							case DorisParser.CATALOGS:
							case DorisParser.CHAIN:
							case DorisParser.CHAR:
							case DorisParser.CHARSET:
							case DorisParser.CHECK:
							case DorisParser.CLUSTER:
							case DorisParser.CLUSTERS:
							case DorisParser.COLLATION:
							case DorisParser.COLLECT:
							case DorisParser.COLOCATE:
							case DorisParser.COLUMNS:
							case DorisParser.COMMENT:
							case DorisParser.COMMIT:
							case DorisParser.COMMITTED:
							case DorisParser.COMPACT:
							case DorisParser.COMPLETE:
							case DorisParser.COMPRESS_TYPE:
							case DorisParser.CONFIG:
							case DorisParser.CONNECTION:
							case DorisParser.CONNECTION_ID:
							case DorisParser.CONSISTENT:
							case DorisParser.CONSTRAINTS:
							case DorisParser.CONVERT:
							case DorisParser.CONVERT_LSC:
							case DorisParser.COPY:
							case DorisParser.COUNT:
							case DorisParser.CREATION:
							case DorisParser.CRON:
							case DorisParser.CURRENT_CATALOG:
							case DorisParser.CURRENT_DATE:
							case DorisParser.CURRENT_TIME:
							case DorisParser.CURRENT_TIMESTAMP:
							case DorisParser.CURRENT_USER:
							case DorisParser.DATA:
							case DorisParser.DATE:
							case DorisParser.DATE_ADD:
							case DorisParser.DATE_CEIL:
							case DorisParser.DATE_DIFF:
							case DorisParser.DATE_FLOOR:
							case DorisParser.DATE_SUB:
							case DorisParser.DATEADD:
							case DorisParser.DATEDIFF:
							case DorisParser.DATETIME:
							case DorisParser.DATETIMEV2:
							case DorisParser.DATEV2:
							case DorisParser.DATETIMEV1:
							case DorisParser.DATEV1:
							case DorisParser.DAY:
							case DorisParser.DAYS_ADD:
							case DorisParser.DAYS_SUB:
							case DorisParser.DECIMAL:
							case DorisParser.DECIMALV2:
							case DorisParser.DECIMALV3:
							case DorisParser.DEFERRED:
							case DorisParser.DEMAND:
							case DorisParser.DIAGNOSE:
							case DorisParser.DISTINCTPC:
							case DorisParser.DISTINCTPCSA:
							case DorisParser.DO:
							case DorisParser.DORIS_INTERNAL_TABLE_ID:
							case DorisParser.DUAL:
							case DorisParser.DYNAMIC:
							case DorisParser.ENABLE:
							case DorisParser.ENCRYPTKEY:
							case DorisParser.ENCRYPTKEYS:
							case DorisParser.END:
							case DorisParser.ENDS:
							case DorisParser.ENGINE:
							case DorisParser.ENGINES:
							case DorisParser.ERRORS:
							case DorisParser.EVENTS:
							case DorisParser.EVERY:
							case DorisParser.EXCLUDE:
							case DorisParser.EXPIRED:
							case DorisParser.EXTERNAL:
							case DorisParser.FAILED_LOGIN_ATTEMPTS:
							case DorisParser.FAST:
							case DorisParser.FEATURE:
							case DorisParser.FIELDS:
							case DorisParser.FILE:
							case DorisParser.FILTER:
							case DorisParser.FIRST:
							case DorisParser.FORMAT:
							case DorisParser.FREE:
							case DorisParser.FRONTENDS:
							case DorisParser.FUNCTION:
							case DorisParser.GENERIC:
							case DorisParser.GLOBAL:
							case DorisParser.GRAPH:
							case DorisParser.GROUPING:
							case DorisParser.GROUPS:
							case DorisParser.HASH:
							case DorisParser.HDFS:
							case DorisParser.HELP:
							case DorisParser.HISTOGRAM:
							case DorisParser.HLL_UNION:
							case DorisParser.HOSTNAME:
							case DorisParser.HOTSPOT:
							case DorisParser.HOUR:
							case DorisParser.HUB:
							case DorisParser.IDENTIFIED:
							case DorisParser.IGNORE:
							case DorisParser.IMMEDIATE:
							case DorisParser.INCREMENTAL:
							case DorisParser.INDEXES:
							case DorisParser.INVERTED:
							case DorisParser.IPV4:
							case DorisParser.IPV6:
							case DorisParser.IS_NOT_NULL_PRED:
							case DorisParser.IS_NULL_PRED:
							case DorisParser.ISNULL:
							case DorisParser.ISOLATION:
							case DorisParser.JOB:
							case DorisParser.JOBS:
							case DorisParser.JSON:
							case DorisParser.JSONB:
							case DorisParser.LABEL:
							case DorisParser.LAST:
							case DorisParser.LDAP:
							case DorisParser.LDAP_ADMIN_PASSWORD:
							case DorisParser.LESS:
							case DorisParser.LEVEL:
							case DorisParser.LINES:
							case DorisParser.LINK:
							case DorisParser.LOCAL:
							case DorisParser.LOCALTIME:
							case DorisParser.LOCALTIMESTAMP:
							case DorisParser.LOCATION:
							case DorisParser.LOCK:
							case DorisParser.LOGICAL:
							case DorisParser.MANUAL:
							case DorisParser.MAP:
							case DorisParser.MATCH_ALL:
							case DorisParser.MATCH_ANY:
							case DorisParser.MATCH_PHRASE:
							case DorisParser.MATCH_PHRASE_EDGE:
							case DorisParser.MATCH_PHRASE_PREFIX:
							case DorisParser.MATCH_REGEXP:
							case DorisParser.MATERIALIZED:
							case DorisParser.MAX:
							case DorisParser.MEMO:
							case DorisParser.MERGE:
							case DorisParser.MIGRATE:
							case DorisParser.MIGRATIONS:
							case DorisParser.MIN:
							case DorisParser.MINUTE:
							case DorisParser.MODIFY:
							case DorisParser.MONTH:
							case DorisParser.MTMV:
							case DorisParser.NAME:
							case DorisParser.NAMES:
							case DorisParser.NEGATIVE:
							case DorisParser.NEVER:
							case DorisParser.NEXT:
							case DorisParser.NGRAM_BF:
							case DorisParser.NO:
							case DorisParser.NON_NULLABLE:
							case DorisParser.NULLS:
							case DorisParser.OF:
							case DorisParser.OFFSET:
							case DorisParser.ONLY:
							case DorisParser.OPEN:
							case DorisParser.OPTIMIZED:
							case DorisParser.PARAMETER:
							case DorisParser.PARSED:
							case DorisParser.PARTITIONS:
							case DorisParser.PASSWORD:
							case DorisParser.PASSWORD_EXPIRE:
							case DorisParser.PASSWORD_HISTORY:
							case DorisParser.PASSWORD_LOCK_TIME:
							case DorisParser.PASSWORD_REUSE:
							case DorisParser.PATH:
							case DorisParser.PAUSE:
							case DorisParser.PERCENT:
							case DorisParser.PERIOD:
							case DorisParser.PERMISSIVE:
							case DorisParser.PHYSICAL:
							case DorisParser.PLAN:
							case DorisParser.PRIVILEGES:
							case DorisParser.PROCESS:
							case DorisParser.PLUGIN:
							case DorisParser.PLUGINS:
							case DorisParser.POLICY:
							case DorisParser.PROC:
							case DorisParser.PROCESSLIST:
							case DorisParser.PROFILE:
							case DorisParser.PROPERTIES:
							case DorisParser.PROPERTY:
							case DorisParser.QUANTILE_STATE:
							case DorisParser.QUANTILE_UNION:
							case DorisParser.QUERY:
							case DorisParser.QUOTA:
							case DorisParser.RANDOM:
							case DorisParser.RECENT:
							case DorisParser.RECOVER:
							case DorisParser.RECYCLE:
							case DorisParser.REFRESH:
							case DorisParser.REPEATABLE:
							case DorisParser.REPLACE:
							case DorisParser.REPLACE_IF_NOT_NULL:
							case DorisParser.REPOSITORIES:
							case DorisParser.REPOSITORY:
							case DorisParser.RESOURCE:
							case DorisParser.RESOURCES:
							case DorisParser.RESTORE:
							case DorisParser.RESTRICTIVE:
							case DorisParser.RESUME:
							case DorisParser.RETURNS:
							case DorisParser.REWRITTEN:
							case DorisParser.RLIKE:
							case DorisParser.ROLLBACK:
							case DorisParser.ROLLUP:
							case DorisParser.ROUTINE:
							case DorisParser.S3:
							case DorisParser.SAMPLE:
							case DorisParser.SCHEDULE:
							case DorisParser.SCHEDULER:
							case DorisParser.SCHEMA:
							case DorisParser.SECOND:
							case DorisParser.SEQUENCE:
							case DorisParser.SERIALIZABLE:
							case DorisParser.SESSION:
							case DorisParser.SHAPE:
							case DorisParser.SKEW:
							case DorisParser.SNAPSHOT:
							case DorisParser.SONAME:
							case DorisParser.SPLIT:
							case DorisParser.SQL:
							case DorisParser.STAGES:
							case DorisParser.START:
							case DorisParser.STARTS:
							case DorisParser.STATS:
							case DorisParser.STATUS:
							case DorisParser.STOP:
							case DorisParser.STORAGE:
							case DorisParser.STREAM:
							case DorisParser.STREAMING:
							case DorisParser.STRING:
							case DorisParser.STRUCT:
							case DorisParser.SUBDATE:
							case DorisParser.SUM:
							case DorisParser.TABLES:
							case DorisParser.TASK:
							case DorisParser.TASKS:
							case DorisParser.TEMPORARY:
							case DorisParser.TEXT:
							case DorisParser.THAN:
							case DorisParser.TIME:
							case DorisParser.TIMESTAMP:
							case DorisParser.TIMESTAMPADD:
							case DorisParser.TIMESTAMPDIFF:
							case DorisParser.TRANSACTION:
							case DorisParser.TREE:
							case DorisParser.TRIGGERS:
							case DorisParser.TRUNCATE:
							case DorisParser.TYPE:
							case DorisParser.TYPES:
							case DorisParser.UNCOMMITTED:
							case DorisParser.UNLOCK:
							case DorisParser.UP:
							case DorisParser.USER:
							case DorisParser.VALUE:
							case DorisParser.VARCHAR:
							case DorisParser.VARIABLES:
							case DorisParser.VARIANT:
							case DorisParser.VAULT:
							case DorisParser.VERBOSE:
							case DorisParser.VERSION:
							case DorisParser.VIEW:
							case DorisParser.WARM:
							case DorisParser.WARNINGS:
							case DorisParser.WEEK:
							case DorisParser.WORK:
							case DorisParser.YEAR:
							case DorisParser.STRING_LITERAL:
							case DorisParser.LEADING_STRING:
							case DorisParser.IDENTIFIER:
							case DorisParser.BACKQUOTED_IDENTIFIER:
								{
									this.state = 869;
									localContext._charsetName = this.identifierOrText();
								}
								break;
							case DorisParser.DEFAULT:
								{
									this.state = 870;
									this.match(DorisParser.DEFAULT);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 6:
					localContext = new SetNamesContext(localContext);
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 873;
						this.match(DorisParser.SET);
						this.state = 874;
						this.match(DorisParser.NAMES);
						this.state = 875;
						this.match(DorisParser.EQ);
						this.state = 876;
						this.expression();
					}
					break;
				case 7:
					localContext = new SetTransactionContext(localContext);
					this.enterOuterAlt(localContext, 7);
					{
						this.state = 877;
						this.match(DorisParser.SET);
						this.state = 879;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 196 || _la === 263 || _la === 400) {
							{
								this.state = 878;
								_la = this.tokenStream.LA(1);
								if (!(_la === 196 || _la === 263 || _la === 400)) {
									this.errorHandler.recoverInline(this);
								} else {
									this.errorHandler.reportMatch(this);
									this.consume();
								}
							}
						}
						this.state = 881;
						this.match(DorisParser.TRANSACTION);
						this.state = 892;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 96, this.context)
						) {
							case 1:
								{
									this.state = 882;
									this.transactionAccessMode();
								}
								break;
							case 2:
								{
									this.state = 883;
									this.isolationLevel();
								}
								break;
							case 3:
								{
									this.state = 884;
									this.transactionAccessMode();
									this.state = 885;
									this.match(DorisParser.COMMA);
									this.state = 886;
									this.isolationLevel();
								}
								break;
							case 4:
								{
									this.state = 888;
									this.isolationLevel();
									this.state = 889;
									this.match(DorisParser.COMMA);
									this.state = 890;
									this.transactionAccessMode();
								}
								break;
						}
					}
					break;
				case 8:
					localContext = new SetCollateContext(localContext);
					this.enterOuterAlt(localContext, 8);
					{
						this.state = 894;
						this.match(DorisParser.SET);
						this.state = 895;
						this.match(DorisParser.NAMES);
						this.state = 898;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LEFT_BRACE:
							case DorisParser.RIGHT_BRACE:
							case DorisParser.ADDDATE:
							case DorisParser.AFTER:
							case DorisParser.AGG_STATE:
							case DorisParser.AGGREGATE:
							case DorisParser.ALIAS:
							case DorisParser.ANALYZED:
							case DorisParser.ARRAY:
							case DorisParser.ARRAY_RANGE:
							case DorisParser.AT:
							case DorisParser.AUTHORS:
							case DorisParser.AUTO_INCREMENT:
							case DorisParser.BACKENDS:
							case DorisParser.BACKUP:
							case DorisParser.BEGIN:
							case DorisParser.BELONG:
							case DorisParser.BIN:
							case DorisParser.BITAND:
							case DorisParser.BITMAP:
							case DorisParser.BITMAP_UNION:
							case DorisParser.BITOR:
							case DorisParser.BITXOR:
							case DorisParser.BLOB:
							case DorisParser.BOOLEAN:
							case DorisParser.BRIEF:
							case DorisParser.BROKER:
							case DorisParser.BUCKETS:
							case DorisParser.BUILD:
							case DorisParser.BUILTIN:
							case DorisParser.BULK:
							case DorisParser.CACHE:
							case DorisParser.CACHED:
							case DorisParser.CALL:
							case DorisParser.CATALOG:
							case DorisParser.CATALOGS:
							case DorisParser.CHAIN:
							case DorisParser.CHAR:
							case DorisParser.CHARSET:
							case DorisParser.CHECK:
							case DorisParser.CLUSTER:
							case DorisParser.CLUSTERS:
							case DorisParser.COLLATION:
							case DorisParser.COLLECT:
							case DorisParser.COLOCATE:
							case DorisParser.COLUMNS:
							case DorisParser.COMMENT:
							case DorisParser.COMMIT:
							case DorisParser.COMMITTED:
							case DorisParser.COMPACT:
							case DorisParser.COMPLETE:
							case DorisParser.COMPRESS_TYPE:
							case DorisParser.CONFIG:
							case DorisParser.CONNECTION:
							case DorisParser.CONNECTION_ID:
							case DorisParser.CONSISTENT:
							case DorisParser.CONSTRAINTS:
							case DorisParser.CONVERT:
							case DorisParser.CONVERT_LSC:
							case DorisParser.COPY:
							case DorisParser.COUNT:
							case DorisParser.CREATION:
							case DorisParser.CRON:
							case DorisParser.CURRENT_CATALOG:
							case DorisParser.CURRENT_DATE:
							case DorisParser.CURRENT_TIME:
							case DorisParser.CURRENT_TIMESTAMP:
							case DorisParser.CURRENT_USER:
							case DorisParser.DATA:
							case DorisParser.DATE:
							case DorisParser.DATE_ADD:
							case DorisParser.DATE_CEIL:
							case DorisParser.DATE_DIFF:
							case DorisParser.DATE_FLOOR:
							case DorisParser.DATE_SUB:
							case DorisParser.DATEADD:
							case DorisParser.DATEDIFF:
							case DorisParser.DATETIME:
							case DorisParser.DATETIMEV2:
							case DorisParser.DATEV2:
							case DorisParser.DATETIMEV1:
							case DorisParser.DATEV1:
							case DorisParser.DAY:
							case DorisParser.DAYS_ADD:
							case DorisParser.DAYS_SUB:
							case DorisParser.DECIMAL:
							case DorisParser.DECIMALV2:
							case DorisParser.DECIMALV3:
							case DorisParser.DEFERRED:
							case DorisParser.DEMAND:
							case DorisParser.DIAGNOSE:
							case DorisParser.DISTINCTPC:
							case DorisParser.DISTINCTPCSA:
							case DorisParser.DO:
							case DorisParser.DORIS_INTERNAL_TABLE_ID:
							case DorisParser.DUAL:
							case DorisParser.DYNAMIC:
							case DorisParser.ENABLE:
							case DorisParser.ENCRYPTKEY:
							case DorisParser.ENCRYPTKEYS:
							case DorisParser.END:
							case DorisParser.ENDS:
							case DorisParser.ENGINE:
							case DorisParser.ENGINES:
							case DorisParser.ERRORS:
							case DorisParser.EVENTS:
							case DorisParser.EVERY:
							case DorisParser.EXCLUDE:
							case DorisParser.EXPIRED:
							case DorisParser.EXTERNAL:
							case DorisParser.FAILED_LOGIN_ATTEMPTS:
							case DorisParser.FAST:
							case DorisParser.FEATURE:
							case DorisParser.FIELDS:
							case DorisParser.FILE:
							case DorisParser.FILTER:
							case DorisParser.FIRST:
							case DorisParser.FORMAT:
							case DorisParser.FREE:
							case DorisParser.FRONTENDS:
							case DorisParser.FUNCTION:
							case DorisParser.GENERIC:
							case DorisParser.GLOBAL:
							case DorisParser.GRAPH:
							case DorisParser.GROUPING:
							case DorisParser.GROUPS:
							case DorisParser.HASH:
							case DorisParser.HDFS:
							case DorisParser.HELP:
							case DorisParser.HISTOGRAM:
							case DorisParser.HLL_UNION:
							case DorisParser.HOSTNAME:
							case DorisParser.HOTSPOT:
							case DorisParser.HOUR:
							case DorisParser.HUB:
							case DorisParser.IDENTIFIED:
							case DorisParser.IGNORE:
							case DorisParser.IMMEDIATE:
							case DorisParser.INCREMENTAL:
							case DorisParser.INDEXES:
							case DorisParser.INVERTED:
							case DorisParser.IPV4:
							case DorisParser.IPV6:
							case DorisParser.IS_NOT_NULL_PRED:
							case DorisParser.IS_NULL_PRED:
							case DorisParser.ISNULL:
							case DorisParser.ISOLATION:
							case DorisParser.JOB:
							case DorisParser.JOBS:
							case DorisParser.JSON:
							case DorisParser.JSONB:
							case DorisParser.LABEL:
							case DorisParser.LAST:
							case DorisParser.LDAP:
							case DorisParser.LDAP_ADMIN_PASSWORD:
							case DorisParser.LESS:
							case DorisParser.LEVEL:
							case DorisParser.LINES:
							case DorisParser.LINK:
							case DorisParser.LOCAL:
							case DorisParser.LOCALTIME:
							case DorisParser.LOCALTIMESTAMP:
							case DorisParser.LOCATION:
							case DorisParser.LOCK:
							case DorisParser.LOGICAL:
							case DorisParser.MANUAL:
							case DorisParser.MAP:
							case DorisParser.MATCH_ALL:
							case DorisParser.MATCH_ANY:
							case DorisParser.MATCH_PHRASE:
							case DorisParser.MATCH_PHRASE_EDGE:
							case DorisParser.MATCH_PHRASE_PREFIX:
							case DorisParser.MATCH_REGEXP:
							case DorisParser.MATERIALIZED:
							case DorisParser.MAX:
							case DorisParser.MEMO:
							case DorisParser.MERGE:
							case DorisParser.MIGRATE:
							case DorisParser.MIGRATIONS:
							case DorisParser.MIN:
							case DorisParser.MINUTE:
							case DorisParser.MODIFY:
							case DorisParser.MONTH:
							case DorisParser.MTMV:
							case DorisParser.NAME:
							case DorisParser.NAMES:
							case DorisParser.NEGATIVE:
							case DorisParser.NEVER:
							case DorisParser.NEXT:
							case DorisParser.NGRAM_BF:
							case DorisParser.NO:
							case DorisParser.NON_NULLABLE:
							case DorisParser.NULLS:
							case DorisParser.OF:
							case DorisParser.OFFSET:
							case DorisParser.ONLY:
							case DorisParser.OPEN:
							case DorisParser.OPTIMIZED:
							case DorisParser.PARAMETER:
							case DorisParser.PARSED:
							case DorisParser.PARTITIONS:
							case DorisParser.PASSWORD:
							case DorisParser.PASSWORD_EXPIRE:
							case DorisParser.PASSWORD_HISTORY:
							case DorisParser.PASSWORD_LOCK_TIME:
							case DorisParser.PASSWORD_REUSE:
							case DorisParser.PATH:
							case DorisParser.PAUSE:
							case DorisParser.PERCENT:
							case DorisParser.PERIOD:
							case DorisParser.PERMISSIVE:
							case DorisParser.PHYSICAL:
							case DorisParser.PLAN:
							case DorisParser.PRIVILEGES:
							case DorisParser.PROCESS:
							case DorisParser.PLUGIN:
							case DorisParser.PLUGINS:
							case DorisParser.POLICY:
							case DorisParser.PROC:
							case DorisParser.PROCESSLIST:
							case DorisParser.PROFILE:
							case DorisParser.PROPERTIES:
							case DorisParser.PROPERTY:
							case DorisParser.QUANTILE_STATE:
							case DorisParser.QUANTILE_UNION:
							case DorisParser.QUERY:
							case DorisParser.QUOTA:
							case DorisParser.RANDOM:
							case DorisParser.RECENT:
							case DorisParser.RECOVER:
							case DorisParser.RECYCLE:
							case DorisParser.REFRESH:
							case DorisParser.REPEATABLE:
							case DorisParser.REPLACE:
							case DorisParser.REPLACE_IF_NOT_NULL:
							case DorisParser.REPOSITORIES:
							case DorisParser.REPOSITORY:
							case DorisParser.RESOURCE:
							case DorisParser.RESOURCES:
							case DorisParser.RESTORE:
							case DorisParser.RESTRICTIVE:
							case DorisParser.RESUME:
							case DorisParser.RETURNS:
							case DorisParser.REWRITTEN:
							case DorisParser.RLIKE:
							case DorisParser.ROLLBACK:
							case DorisParser.ROLLUP:
							case DorisParser.ROUTINE:
							case DorisParser.S3:
							case DorisParser.SAMPLE:
							case DorisParser.SCHEDULE:
							case DorisParser.SCHEDULER:
							case DorisParser.SCHEMA:
							case DorisParser.SECOND:
							case DorisParser.SEQUENCE:
							case DorisParser.SERIALIZABLE:
							case DorisParser.SESSION:
							case DorisParser.SHAPE:
							case DorisParser.SKEW:
							case DorisParser.SNAPSHOT:
							case DorisParser.SONAME:
							case DorisParser.SPLIT:
							case DorisParser.SQL:
							case DorisParser.STAGES:
							case DorisParser.START:
							case DorisParser.STARTS:
							case DorisParser.STATS:
							case DorisParser.STATUS:
							case DorisParser.STOP:
							case DorisParser.STORAGE:
							case DorisParser.STREAM:
							case DorisParser.STREAMING:
							case DorisParser.STRING:
							case DorisParser.STRUCT:
							case DorisParser.SUBDATE:
							case DorisParser.SUM:
							case DorisParser.TABLES:
							case DorisParser.TASK:
							case DorisParser.TASKS:
							case DorisParser.TEMPORARY:
							case DorisParser.TEXT:
							case DorisParser.THAN:
							case DorisParser.TIME:
							case DorisParser.TIMESTAMP:
							case DorisParser.TIMESTAMPADD:
							case DorisParser.TIMESTAMPDIFF:
							case DorisParser.TRANSACTION:
							case DorisParser.TREE:
							case DorisParser.TRIGGERS:
							case DorisParser.TRUNCATE:
							case DorisParser.TYPE:
							case DorisParser.TYPES:
							case DorisParser.UNCOMMITTED:
							case DorisParser.UNLOCK:
							case DorisParser.UP:
							case DorisParser.USER:
							case DorisParser.VALUE:
							case DorisParser.VARCHAR:
							case DorisParser.VARIABLES:
							case DorisParser.VARIANT:
							case DorisParser.VAULT:
							case DorisParser.VERBOSE:
							case DorisParser.VERSION:
							case DorisParser.VIEW:
							case DorisParser.WARM:
							case DorisParser.WARNINGS:
							case DorisParser.WEEK:
							case DorisParser.WORK:
							case DorisParser.YEAR:
							case DorisParser.STRING_LITERAL:
							case DorisParser.LEADING_STRING:
							case DorisParser.IDENTIFIER:
							case DorisParser.BACKQUOTED_IDENTIFIER:
								{
									this.state = 896;
									localContext._charsetName = this.identifierOrText();
								}
								break;
							case DorisParser.DEFAULT:
								{
									this.state = 897;
									this.match(DorisParser.DEFAULT);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
						this.state = 903;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.COLLATE:
								{
									this.state = 900;
									this.match(DorisParser.COLLATE);
									this.state = 901;
									localContext._collateName = this.identifierOrText();
								}
								break;
							case DorisParser.DEFAULT:
								{
									this.state = 902;
									this.match(DorisParser.DEFAULT);
								}
								break;
							case DorisParser.EOF:
							case DorisParser.SEMICOLON:
							case DorisParser.LEFT_PAREN:
							case DorisParser.ALTER:
							case DorisParser.CALL:
							case DorisParser.CANCEL:
							case DorisParser.CREATE:
							case DorisParser.DELETE:
							case DorisParser.DESC:
							case DorisParser.DESCRIBE:
							case DorisParser.DROP:
							case DorisParser.EXPLAIN:
							case DorisParser.EXPORT:
							case DorisParser.INSERT:
							case DorisParser.LOAD:
							case DorisParser.PAUSE:
							case DorisParser.REFRESH:
							case DorisParser.REPLACE:
							case DorisParser.RESUME:
							case DorisParser.SELECT:
							case DorisParser.SET:
							case DorisParser.SHOW:
							case DorisParser.UPDATE:
							case DorisParser.USE:
							case DorisParser.VALUES:
							case DorisParser.WITH:
								break;
							default:
								break;
						}
					}
					break;
				case 9:
					localContext = new SetPasswordContext(localContext);
					this.enterOuterAlt(localContext, 9);
					{
						this.state = 905;
						this.match(DorisParser.SET);
						this.state = 906;
						this.match(DorisParser.PASSWORD);
						this.state = 909;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 184) {
							{
								this.state = 907;
								this.match(DorisParser.FOR);
								this.state = 908;
								this.userIdentify();
							}
						}
						this.state = 911;
						this.match(DorisParser.EQ);
						this.state = 917;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.STRING_LITERAL:
								{
									this.state = 912;
									this.match(DorisParser.STRING_LITERAL);
								}
								break;
							case DorisParser.PASSWORD:
								{
									{
										this.state = 913;
										this.match(DorisParser.PASSWORD);
										this.state = 914;
										this.match(DorisParser.LEFT_PAREN);
										this.state = 915;
										this.match(DorisParser.STRING_LITERAL);
										this.state = 916;
										this.match(DorisParser.RIGHT_PAREN);
									}
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 10:
					localContext = new SetLdapAdminPasswordContext(localContext);
					this.enterOuterAlt(localContext, 10);
					{
						this.state = 919;
						this.match(DorisParser.SET);
						this.state = 920;
						this.match(DorisParser.LDAP_ADMIN_PASSWORD);
						this.state = 921;
						this.match(DorisParser.EQ);
						this.state = 927;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.STRING_LITERAL:
								{
									this.state = 922;
									this.match(DorisParser.STRING_LITERAL);
								}
								break;
							case DorisParser.PASSWORD:
								{
									{
										this.state = 923;
										this.match(DorisParser.PASSWORD);
										this.state = 924;
										this.match(DorisParser.LEFT_PAREN);
										this.state = 925;
										this.match(DorisParser.STRING_LITERAL);
										this.state = 926;
										this.match(DorisParser.RIGHT_PAREN);
									}
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 11:
					localContext = new UseDatabaseContext(localContext);
					this.enterOuterAlt(localContext, 11);
					{
						this.state = 929;
						this.match(DorisParser.USE);
						this.state = 933;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 102, this.context)
						) {
							case 1:
								{
									this.state = 930;
									localContext._catalog = this.identifier();
									this.state = 931;
									this.match(DorisParser.DOT);
								}
								break;
						}
						this.state = 935;
						localContext._database = this.identifier();
					}
					break;
				case 12:
					localContext = new UseCloudClusterContext(localContext);
					this.enterOuterAlt(localContext, 12);
					{
						this.state = 936;
						this.match(DorisParser.USE);
						this.state = 943;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (
							(((_la - 8) & ~0x1f) === 0 && ((1 << (_la - 8)) & 2060208035) !== 0) ||
							(((_la - 41) & ~0x1f) === 0 &&
								((1 << (_la - 41)) & 3750690809) !== 0) ||
							(((_la - 74) & ~0x1f) === 0 &&
								((1 << (_la - 74)) & 4175396855) !== 0) ||
							(((_la - 106) & ~0x1f) === 0 &&
								((1 << (_la - 106)) & 624951289) !== 0) ||
							(((_la - 138) & ~0x1f) === 0 &&
								((1 << (_la - 138)) & 635425891) !== 0) ||
							(((_la - 171) & ~0x1f) === 0 &&
								((1 << (_la - 171)) & 3545433077) !== 0) ||
							(((_la - 203) & ~0x1f) === 0 &&
								((1 << (_la - 203)) & 3758452701) !== 0) ||
							(((_la - 236) & ~0x1f) === 0 &&
								((1 << (_la - 236)) & 4187705791) !== 0) ||
							(((_la - 268) & ~0x1f) === 0 &&
								((1 << (_la - 268)) & 4227325933) !== 0) ||
							(((_la - 300) & ~0x1f) === 0 &&
								((1 << (_la - 300)) & 4294313833) !== 0) ||
							(((_la - 333) & ~0x1f) === 0 &&
								((1 << (_la - 333)) & 252705343) !== 0) ||
							(((_la - 366) & ~0x1f) === 0 &&
								((1 << (_la - 366)) & 798797815) !== 0) ||
							(((_la - 398) & ~0x1f) === 0 &&
								((1 << (_la - 398)) & 268418343) !== 0) ||
							(((_la - 431) & ~0x1f) === 0 &&
								((1 << (_la - 431)) & 362445681) !== 0) ||
							(((_la - 463) & ~0x1f) === 0 &&
								((1 << (_la - 463)) & 143130277) !== 0) ||
							_la === 525 ||
							_la === 526
						) {
							{
								this.state = 940;
								this.errorHandler.sync(this);
								switch (
									this.interpreter.adaptivePredict(
										this.tokenStream,
										103,
										this.context
									)
								) {
									case 1:
										{
											this.state = 937;
											localContext._catalog = this.identifier();
											this.state = 938;
											this.match(DorisParser.DOT);
										}
										break;
								}
								this.state = 942;
								localContext._database = this.identifier();
							}
						}
						this.state = 945;
						this.match(DorisParser.ATSIGN);
						this.state = 946;
						localContext._cluster = this.identifier();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	variable() {
		let localContext = new VariableContext(this.context, this.state);
		this.enterRule(localContext, 12, DorisParser.RULE_variable);
		let _la;
		try {
			this.state = 967;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 109, this.context)) {
				case 1:
					localContext = new SetSystemVariableContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 954;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 514) {
							{
								this.state = 949;
								this.match(DorisParser.ATSIGN);
								this.state = 950;
								this.match(DorisParser.ATSIGN);
								this.state = 952;
								this.errorHandler.sync(this);
								switch (
									this.interpreter.adaptivePredict(
										this.tokenStream,
										106,
										this.context
									)
								) {
									case 1:
										{
											this.state = 951;
											_la = this.tokenStream.LA(1);
											if (!(_la === 196 || _la === 263 || _la === 400)) {
												this.errorHandler.recoverInline(this);
											} else {
												this.errorHandler.reportMatch(this);
												this.consume();
											}
										}
										break;
								}
							}
						}
						this.state = 956;
						this.identifier();
						this.state = 957;
						this.match(DorisParser.EQ);
						this.state = 960;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LEFT_PAREN:
							case DorisParser.LEFT_BRACKET:
							case DorisParser.LEFT_BRACE:
							case DorisParser.RIGHT_BRACE:
							case DorisParser.ADD:
							case DorisParser.ADDDATE:
							case DorisParser.AFTER:
							case DorisParser.AGG_STATE:
							case DorisParser.AGGREGATE:
							case DorisParser.ALIAS:
							case DorisParser.ANALYZED:
							case DorisParser.ARRAY:
							case DorisParser.ARRAY_RANGE:
							case DorisParser.AT:
							case DorisParser.AUTHORS:
							case DorisParser.AUTO_INCREMENT:
							case DorisParser.BACKENDS:
							case DorisParser.BACKUP:
							case DorisParser.BEGIN:
							case DorisParser.BELONG:
							case DorisParser.BIN:
							case DorisParser.BINARY:
							case DorisParser.BITAND:
							case DorisParser.BITMAP:
							case DorisParser.BITMAP_UNION:
							case DorisParser.BITOR:
							case DorisParser.BITXOR:
							case DorisParser.BLOB:
							case DorisParser.BOOLEAN:
							case DorisParser.BRIEF:
							case DorisParser.BROKER:
							case DorisParser.BUCKETS:
							case DorisParser.BUILD:
							case DorisParser.BUILTIN:
							case DorisParser.BULK:
							case DorisParser.CACHE:
							case DorisParser.CACHED:
							case DorisParser.CALL:
							case DorisParser.CASE:
							case DorisParser.CAST:
							case DorisParser.CATALOG:
							case DorisParser.CATALOGS:
							case DorisParser.CHAIN:
							case DorisParser.CHAR:
							case DorisParser.CHARSET:
							case DorisParser.CHECK:
							case DorisParser.CLUSTER:
							case DorisParser.CLUSTERS:
							case DorisParser.COLLATION:
							case DorisParser.COLLECT:
							case DorisParser.COLOCATE:
							case DorisParser.COLUMNS:
							case DorisParser.COMMENT:
							case DorisParser.COMMIT:
							case DorisParser.COMMITTED:
							case DorisParser.COMPACT:
							case DorisParser.COMPLETE:
							case DorisParser.COMPRESS_TYPE:
							case DorisParser.CONFIG:
							case DorisParser.CONNECTION:
							case DorisParser.CONNECTION_ID:
							case DorisParser.CONSISTENT:
							case DorisParser.CONSTRAINTS:
							case DorisParser.CONVERT:
							case DorisParser.CONVERT_LSC:
							case DorisParser.COPY:
							case DorisParser.COUNT:
							case DorisParser.CREATION:
							case DorisParser.CRON:
							case DorisParser.CURRENT_CATALOG:
							case DorisParser.CURRENT_DATE:
							case DorisParser.CURRENT_TIME:
							case DorisParser.CURRENT_TIMESTAMP:
							case DorisParser.CURRENT_USER:
							case DorisParser.DATA:
							case DorisParser.DATABASE:
							case DorisParser.DATE:
							case DorisParser.DATE_ADD:
							case DorisParser.DATE_CEIL:
							case DorisParser.DATE_DIFF:
							case DorisParser.DATE_FLOOR:
							case DorisParser.DATE_SUB:
							case DorisParser.DATEADD:
							case DorisParser.DATEDIFF:
							case DorisParser.DATETIME:
							case DorisParser.DATETIMEV2:
							case DorisParser.DATEV2:
							case DorisParser.DATETIMEV1:
							case DorisParser.DATEV1:
							case DorisParser.DAY:
							case DorisParser.DAYS_ADD:
							case DorisParser.DAYS_SUB:
							case DorisParser.DECIMAL:
							case DorisParser.DECIMALV2:
							case DorisParser.DECIMALV3:
							case DorisParser.DEFERRED:
							case DorisParser.DEMAND:
							case DorisParser.DIAGNOSE:
							case DorisParser.DISTINCTPC:
							case DorisParser.DISTINCTPCSA:
							case DorisParser.DO:
							case DorisParser.DORIS_INTERNAL_TABLE_ID:
							case DorisParser.DUAL:
							case DorisParser.DYNAMIC:
							case DorisParser.ENABLE:
							case DorisParser.ENCRYPTKEY:
							case DorisParser.ENCRYPTKEYS:
							case DorisParser.END:
							case DorisParser.ENDS:
							case DorisParser.ENGINE:
							case DorisParser.ENGINES:
							case DorisParser.ERRORS:
							case DorisParser.EVENTS:
							case DorisParser.EVERY:
							case DorisParser.EXCLUDE:
							case DorisParser.EXISTS:
							case DorisParser.EXPIRED:
							case DorisParser.EXTERNAL:
							case DorisParser.EXTRACT:
							case DorisParser.FAILED_LOGIN_ATTEMPTS:
							case DorisParser.FALSE:
							case DorisParser.FAST:
							case DorisParser.FEATURE:
							case DorisParser.FIELDS:
							case DorisParser.FILE:
							case DorisParser.FILTER:
							case DorisParser.FIRST:
							case DorisParser.FORMAT:
							case DorisParser.FREE:
							case DorisParser.FRONTENDS:
							case DorisParser.FUNCTION:
							case DorisParser.GENERIC:
							case DorisParser.GLOBAL:
							case DorisParser.GRAPH:
							case DorisParser.GROUPING:
							case DorisParser.GROUPS:
							case DorisParser.HASH:
							case DorisParser.HDFS:
							case DorisParser.HELP:
							case DorisParser.HISTOGRAM:
							case DorisParser.HLL_UNION:
							case DorisParser.HOSTNAME:
							case DorisParser.HOTSPOT:
							case DorisParser.HOUR:
							case DorisParser.HUB:
							case DorisParser.IDENTIFIED:
							case DorisParser.IF:
							case DorisParser.IGNORE:
							case DorisParser.IMMEDIATE:
							case DorisParser.INCREMENTAL:
							case DorisParser.INDEXES:
							case DorisParser.INTERVAL:
							case DorisParser.INVERTED:
							case DorisParser.IPV4:
							case DorisParser.IPV6:
							case DorisParser.IS_NOT_NULL_PRED:
							case DorisParser.IS_NULL_PRED:
							case DorisParser.ISNULL:
							case DorisParser.ISOLATION:
							case DorisParser.JOB:
							case DorisParser.JOBS:
							case DorisParser.JSON:
							case DorisParser.JSONB:
							case DorisParser.KEY:
							case DorisParser.LABEL:
							case DorisParser.LAST:
							case DorisParser.LDAP:
							case DorisParser.LDAP_ADMIN_PASSWORD:
							case DorisParser.LEFT:
							case DorisParser.LESS:
							case DorisParser.LEVEL:
							case DorisParser.LIKE:
							case DorisParser.LINES:
							case DorisParser.LINK:
							case DorisParser.LOCAL:
							case DorisParser.LOCALTIME:
							case DorisParser.LOCALTIMESTAMP:
							case DorisParser.LOCATION:
							case DorisParser.LOCK:
							case DorisParser.LOGICAL:
							case DorisParser.MANUAL:
							case DorisParser.MAP:
							case DorisParser.MATCH_ALL:
							case DorisParser.MATCH_ANY:
							case DorisParser.MATCH_PHRASE:
							case DorisParser.MATCH_PHRASE_EDGE:
							case DorisParser.MATCH_PHRASE_PREFIX:
							case DorisParser.MATCH_REGEXP:
							case DorisParser.MATERIALIZED:
							case DorisParser.MAX:
							case DorisParser.MEMO:
							case DorisParser.MERGE:
							case DorisParser.MIGRATE:
							case DorisParser.MIGRATIONS:
							case DorisParser.MIN:
							case DorisParser.MINUTE:
							case DorisParser.MODIFY:
							case DorisParser.MONTH:
							case DorisParser.MTMV:
							case DorisParser.NAME:
							case DorisParser.NAMES:
							case DorisParser.NEGATIVE:
							case DorisParser.NEVER:
							case DorisParser.NEXT:
							case DorisParser.NGRAM_BF:
							case DorisParser.NO:
							case DorisParser.NON_NULLABLE:
							case DorisParser.NOT:
							case DorisParser.NULL:
							case DorisParser.NULLS:
							case DorisParser.OF:
							case DorisParser.OFFSET:
							case DorisParser.ONLY:
							case DorisParser.OPEN:
							case DorisParser.OPTIMIZED:
							case DorisParser.PARAMETER:
							case DorisParser.PARSED:
							case DorisParser.PARTITIONS:
							case DorisParser.PASSWORD:
							case DorisParser.PASSWORD_EXPIRE:
							case DorisParser.PASSWORD_HISTORY:
							case DorisParser.PASSWORD_LOCK_TIME:
							case DorisParser.PASSWORD_REUSE:
							case DorisParser.PATH:
							case DorisParser.PAUSE:
							case DorisParser.PERCENT:
							case DorisParser.PERIOD:
							case DorisParser.PERMISSIVE:
							case DorisParser.PHYSICAL:
							case DorisParser.PLACEHOLDER:
							case DorisParser.PLAN:
							case DorisParser.PRIVILEGES:
							case DorisParser.PROCESS:
							case DorisParser.PLUGIN:
							case DorisParser.PLUGINS:
							case DorisParser.POLICY:
							case DorisParser.PROC:
							case DorisParser.PROCESSLIST:
							case DorisParser.PROFILE:
							case DorisParser.PROPERTIES:
							case DorisParser.PROPERTY:
							case DorisParser.QUANTILE_STATE:
							case DorisParser.QUANTILE_UNION:
							case DorisParser.QUERY:
							case DorisParser.QUOTA:
							case DorisParser.RANDOM:
							case DorisParser.RECENT:
							case DorisParser.RECOVER:
							case DorisParser.RECYCLE:
							case DorisParser.REFRESH:
							case DorisParser.REGEXP:
							case DorisParser.REPEATABLE:
							case DorisParser.REPLACE:
							case DorisParser.REPLACE_IF_NOT_NULL:
							case DorisParser.REPOSITORIES:
							case DorisParser.REPOSITORY:
							case DorisParser.RESOURCE:
							case DorisParser.RESOURCES:
							case DorisParser.RESTORE:
							case DorisParser.RESTRICTIVE:
							case DorisParser.RESUME:
							case DorisParser.RETURNS:
							case DorisParser.REWRITTEN:
							case DorisParser.RIGHT:
							case DorisParser.RLIKE:
							case DorisParser.ROLLBACK:
							case DorisParser.ROLLUP:
							case DorisParser.ROUTINE:
							case DorisParser.S3:
							case DorisParser.SAMPLE:
							case DorisParser.SCHEDULE:
							case DorisParser.SCHEDULER:
							case DorisParser.SCHEMA:
							case DorisParser.SECOND:
							case DorisParser.SEQUENCE:
							case DorisParser.SERIALIZABLE:
							case DorisParser.SESSION:
							case DorisParser.SHAPE:
							case DorisParser.SKEW:
							case DorisParser.SNAPSHOT:
							case DorisParser.SONAME:
							case DorisParser.SPLIT:
							case DorisParser.SQL:
							case DorisParser.STAGES:
							case DorisParser.START:
							case DorisParser.STARTS:
							case DorisParser.STATS:
							case DorisParser.STATUS:
							case DorisParser.STOP:
							case DorisParser.STORAGE:
							case DorisParser.STREAM:
							case DorisParser.STREAMING:
							case DorisParser.STRING:
							case DorisParser.STRUCT:
							case DorisParser.SUBDATE:
							case DorisParser.SUM:
							case DorisParser.TABLES:
							case DorisParser.TASK:
							case DorisParser.TASKS:
							case DorisParser.TEMPORARY:
							case DorisParser.TEXT:
							case DorisParser.THAN:
							case DorisParser.TIME:
							case DorisParser.TIMESTAMP:
							case DorisParser.TIMESTAMPADD:
							case DorisParser.TIMESTAMPDIFF:
							case DorisParser.TRANSACTION:
							case DorisParser.TREE:
							case DorisParser.TRIGGERS:
							case DorisParser.TRIM:
							case DorisParser.TRUE:
							case DorisParser.TRUNCATE:
							case DorisParser.TYPE:
							case DorisParser.TYPES:
							case DorisParser.UNCOMMITTED:
							case DorisParser.UNLOCK:
							case DorisParser.UP:
							case DorisParser.USER:
							case DorisParser.VALUE:
							case DorisParser.VARCHAR:
							case DorisParser.VARIABLES:
							case DorisParser.VARIANT:
							case DorisParser.VAULT:
							case DorisParser.VERBOSE:
							case DorisParser.VERSION:
							case DorisParser.VIEW:
							case DorisParser.WARM:
							case DorisParser.WARNINGS:
							case DorisParser.WEEK:
							case DorisParser.WORK:
							case DorisParser.YEAR:
							case DorisParser.PLUS:
							case DorisParser.SUBTRACT:
							case DorisParser.ASTERISK:
							case DorisParser.TILDE:
							case DorisParser.LOGICALNOT:
							case DorisParser.ATSIGN:
							case DorisParser.DOUBLEATSIGN:
							case DorisParser.STRING_LITERAL:
							case DorisParser.INTEGER_VALUE:
							case DorisParser.EXPONENT_VALUE:
							case DorisParser.DECIMAL_VALUE:
							case DorisParser.IDENTIFIER:
							case DorisParser.BACKQUOTED_IDENTIFIER:
								{
									this.state = 958;
									this.expression();
								}
								break;
							case DorisParser.DEFAULT:
								{
									this.state = 959;
									this.match(DorisParser.DEFAULT);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 2:
					localContext = new SetUserVariableContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 962;
						this.match(DorisParser.ATSIGN);
						this.state = 963;
						this.identifier();
						this.state = 964;
						this.match(DorisParser.EQ);
						this.state = 965;
						this.expression();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	transactionAccessMode() {
		let localContext = new TransactionAccessModeContext(this.context, this.state);
		this.enterRule(localContext, 14, DorisParser.RULE_transactionAccessMode);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 969;
				this.match(DorisParser.READ);
				this.state = 970;
				_la = this.tokenStream.LA(1);
				if (!(_la === 308 || _la === 488)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	isolationLevel() {
		let localContext = new IsolationLevelContext(this.context, this.state);
		this.enterRule(localContext, 16, DorisParser.RULE_isolationLevel);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 972;
				this.match(DorisParser.ISOLATION);
				this.state = 973;
				this.match(DorisParser.LEVEL);
				this.state = 981;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 110, this.context)) {
					case 1:
						{
							{
								this.state = 974;
								this.match(DorisParser.READ);
								this.state = 975;
								this.match(DorisParser.UNCOMMITTED);
							}
						}
						break;
					case 2:
						{
							{
								this.state = 976;
								this.match(DorisParser.READ);
								this.state = 977;
								this.match(DorisParser.COMMITTED);
							}
						}
						break;
					case 3:
						{
							{
								this.state = 978;
								this.match(DorisParser.REPEATABLE);
								this.state = 979;
								this.match(DorisParser.READ);
							}
						}
						break;
					case 4:
						{
							{
								this.state = 980;
								this.match(DorisParser.SERIALIZABLE);
							}
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	constraint() {
		let localContext = new ConstraintContext(this.context, this.state);
		this.enterRule(localContext, 18, DorisParser.RULE_constraint);
		try {
			this.state = 995;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.PRIMARY:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 983;
						this.match(DorisParser.PRIMARY);
						this.state = 984;
						this.match(DorisParser.KEY);
						this.state = 985;
						localContext._slots = this.identifierList();
					}
					break;
				case DorisParser.UNIQUE:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 986;
						this.match(DorisParser.UNIQUE);
						this.state = 987;
						localContext._slots = this.identifierList();
					}
					break;
				case DorisParser.FOREIGN:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 988;
						this.match(DorisParser.FOREIGN);
						this.state = 989;
						this.match(DorisParser.KEY);
						this.state = 990;
						localContext._slots = this.identifierList();
						this.state = 991;
						this.match(DorisParser.REFERENCES);
						this.state = 992;
						localContext._referenceTable = this.multipartIdentifier();
						this.state = 993;
						localContext._referencedSlots = this.identifierList();
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	partitionSpec() {
		let localContext = new PartitionSpecContext(this.context, this.state);
		this.enterRule(localContext, 20, DorisParser.RULE_partitionSpec);
		let _la;
		try {
			this.state = 1011;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 998;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 437) {
							{
								this.state = 997;
								this.match(DorisParser.TEMPORARY);
							}
						}
						this.state = 1000;
						_la = this.tokenStream.LA(1);
						if (!(_la === 319 || _la === 320)) {
							this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1001;
						localContext._partitions = this.identifierList();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1003;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 437) {
							{
								this.state = 1002;
								this.match(DorisParser.TEMPORARY);
							}
						}
						this.state = 1005;
						this.match(DorisParser.PARTITION);
						this.state = 1006;
						localContext._partition = this.errorCapturingIdentifier();
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1007;
						_la = this.tokenStream.LA(1);
						if (!(_la === 319 || _la === 320)) {
							this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1008;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1009;
						this.match(DorisParser.ASTERISK);
						this.state = 1010;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	partitionTable() {
		let localContext = new PartitionTableContext(this.context, this.state);
		this.enterRule(localContext, 22, DorisParser.RULE_partitionTable);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				{
					this.state = 1014;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
					if (_la === 32) {
						{
							this.state = 1013;
							localContext._autoPartition = this.match(DorisParser.AUTO);
						}
					}
					this.state = 1016;
					this.match(DorisParser.PARTITION);
					this.state = 1017;
					this.match(DorisParser.BY);
					this.state = 1019;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
					if (_la === 261 || _la === 353) {
						{
							this.state = 1018;
							_la = this.tokenStream.LA(1);
							if (!(_la === 261 || _la === 353)) {
								this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
						}
					}
					this.state = 1021;
					localContext._partitionList = this.identityOrFunctionList();
					{
						this.state = 1022;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1024;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 189 || _la === 319) {
							{
								this.state = 1023;
								localContext._partitions = this.partitionsDef();
							}
						}
						this.state = 1026;
						this.match(DorisParser.RIGHT_PAREN);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	identityOrFunctionList() {
		let localContext = new IdentityOrFunctionListContext(this.context, this.state);
		this.enterRule(localContext, 24, DorisParser.RULE_identityOrFunctionList);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1028;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1029;
				this.identityOrFunction();
				this.state = 1034;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1030;
							this.match(DorisParser.COMMA);
							this.state = 1031;
							localContext._identityOrFunction = this.identityOrFunction();
							localContext._partitions.push(localContext._identityOrFunction);
						}
					}
					this.state = 1036;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 1037;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	identityOrFunction() {
		let localContext = new IdentityOrFunctionContext(this.context, this.state);
		this.enterRule(localContext, 26, DorisParser.RULE_identityOrFunction);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1041;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context)) {
					case 1:
						{
							this.state = 1039;
							this.identifier();
						}
						break;
					case 2:
						{
							this.state = 1040;
							this.functionCallExpression();
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	dataDesc() {
		let localContext = new DataDescContext(this.context, this.state);
		this.enterRule(localContext, 28, DorisParser.RULE_dataDesc);
		let _la;
		try {
			this.state = 1138;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 142, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1047;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 25 || _la === 131 || _la === 283 || _la === 485) {
							{
								this.state = 1044;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 485) {
									{
										this.state = 1043;
										this.match(DorisParser.WITH);
									}
								}
								this.state = 1046;
								this.mergeType();
							}
						}
						this.state = 1049;
						this.match(DorisParser.DATA);
						this.state = 1050;
						this.match(DorisParser.INFILE);
						this.state = 1051;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1052;
						localContext._STRING_LITERAL = this.match(DorisParser.STRING_LITERAL);
						localContext._filePaths.push(localContext._STRING_LITERAL);
						this.state = 1057;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 1053;
									this.match(DorisParser.COMMA);
									this.state = 1054;
									localContext._STRING_LITERAL = this.match(
										DorisParser.STRING_LITERAL
									);
									localContext._filePath.push(localContext._STRING_LITERAL);
								}
							}
							this.state = 1059;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 1060;
						this.match(DorisParser.RIGHT_PAREN);
						this.state = 1061;
						this.match(DorisParser.INTO);
						this.state = 1062;
						this.match(DorisParser.TABLE);
						this.state = 1063;
						localContext._tableName = this.multipartIdentifier();
						this.state = 1066;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 319) {
							{
								this.state = 1064;
								this.match(DorisParser.PARTITION);
								this.state = 1065;
								localContext._partition = this.identifierList();
							}
						}
						this.state = 1072;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 124, this.context)
						) {
							case 1:
								{
									this.state = 1068;
									this.match(DorisParser.COLUMNS);
									this.state = 1069;
									this.match(DorisParser.TERMINATED);
									this.state = 1070;
									this.match(DorisParser.BY);
									this.state = 1071;
									localContext._comma = this.match(DorisParser.STRING_LITERAL);
								}
								break;
						}
						this.state = 1078;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 259) {
							{
								this.state = 1074;
								this.match(DorisParser.LINES);
								this.state = 1075;
								this.match(DorisParser.TERMINATED);
								this.state = 1076;
								this.match(DorisParser.BY);
								this.state = 1077;
								localContext._separator = this.match(DorisParser.STRING_LITERAL);
							}
						}
						this.state = 1083;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 187) {
							{
								this.state = 1080;
								this.match(DorisParser.FORMAT);
								this.state = 1081;
								this.match(DorisParser.AS);
								this.state = 1082;
								localContext._format = this.identifierOrStringLiteral();
							}
						}
						this.state = 1086;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 2) {
							{
								this.state = 1085;
								localContext._columns = this.identifierList();
							}
						}
						this.state = 1089;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 78) {
							{
								this.state = 1088;
								localContext._columnsFromPath = this.colFromPath();
							}
						}
						this.state = 1092;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 401) {
							{
								this.state = 1091;
								localContext._columnMapping = this.colMappingList();
							}
						}
						this.state = 1095;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 339) {
							{
								this.state = 1094;
								localContext._preFilter = this.preFilterClause();
							}
						}
						this.state = 1098;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 483) {
							{
								this.state = 1097;
								localContext._where = this.whereClause();
							}
						}
						this.state = 1101;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 131) {
							{
								this.state = 1100;
								localContext._deleteOn = this.deleteOnClause();
							}
						}
						this.state = 1104;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 312) {
							{
								this.state = 1103;
								localContext._sequenceColumn = this.sequenceColClause();
							}
						}
						this.state = 1107;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 346) {
							{
								this.state = 1106;
								this.propertyClause();
							}
						}
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1113;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 25 || _la === 131 || _la === 283 || _la === 485) {
							{
								this.state = 1110;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 485) {
									{
										this.state = 1109;
										this.match(DorisParser.WITH);
									}
								}
								this.state = 1112;
								this.mergeType();
							}
						}
						this.state = 1115;
						this.match(DorisParser.DATA);
						this.state = 1116;
						this.match(DorisParser.FROM);
						this.state = 1117;
						this.match(DorisParser.TABLE);
						this.state = 1118;
						localContext._tableName = this.multipartIdentifier();
						this.state = 1119;
						this.match(DorisParser.INTO);
						this.state = 1120;
						this.match(DorisParser.TABLE);
						this.state = 1121;
						localContext._tableName = this.multipartIdentifier();
						this.state = 1124;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 319) {
							{
								this.state = 1122;
								this.match(DorisParser.PARTITION);
								this.state = 1123;
								localContext._partition = this.identifierList();
							}
						}
						this.state = 1127;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 401) {
							{
								this.state = 1126;
								localContext._columnMapping = this.colMappingList();
							}
						}
						this.state = 1130;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 483) {
							{
								this.state = 1129;
								localContext._where = this.whereClause();
							}
						}
						this.state = 1133;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 131) {
							{
								this.state = 1132;
								localContext._deleteOn = this.deleteOnClause();
							}
						}
						this.state = 1136;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 346) {
							{
								this.state = 1135;
								this.propertyClause();
							}
						}
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	buildMode() {
		let localContext = new BuildModeContext(this.context, this.state);
		this.enterRule(localContext, 30, DorisParser.RULE_buildMode);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1140;
				this.match(DorisParser.BUILD);
				this.state = 1141;
				_la = this.tokenStream.LA(1);
				if (!(_la === 130 || _la === 217)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	refreshTrigger() {
		let localContext = new RefreshTriggerContext(this.context, this.state);
		this.enterRule(localContext, 32, DorisParser.RULE_refreshTrigger);
		try {
			this.state = 1150;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 143, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1143;
						this.match(DorisParser.ON);
						this.state = 1144;
						this.match(DorisParser.MANUAL);
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1145;
						this.match(DorisParser.ON);
						this.state = 1146;
						this.match(DorisParser.SCHEDULE);
						this.state = 1147;
						this.refreshSchedule();
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1148;
						this.match(DorisParser.ON);
						this.state = 1149;
						this.match(DorisParser.COMMIT);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	refreshSchedule() {
		let localContext = new RefreshScheduleContext(this.context, this.state);
		this.enterRule(localContext, 34, DorisParser.RULE_refreshSchedule);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1152;
				this.match(DorisParser.EVERY);
				this.state = 1153;
				this.match(DorisParser.INTEGER_VALUE);
				this.state = 1154;
				localContext._refreshUnit = this.identifier();
				this.state = 1157;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 415) {
					{
						this.state = 1155;
						this.match(DorisParser.STARTS);
						this.state = 1156;
						this.match(DorisParser.STRING_LITERAL);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	refreshMethod() {
		let localContext = new RefreshMethodContext(this.context, this.state);
		this.enterRule(localContext, 36, DorisParser.RULE_refreshMethod);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1159;
				_la = this.tokenStream.LA(1);
				if (!(_la === 32 || _la === 83)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	mvPartition() {
		let localContext = new MvPartitionContext(this.context, this.state);
		this.enterRule(localContext, 38, DorisParser.RULE_mvPartition);
		try {
			this.state = 1163;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1161;
						localContext._partitionKey = this.identifier();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1162;
						localContext._partitionExpr = this.functionCallExpression();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	identifierOrStringLiteral() {
		let localContext = new IdentifierOrStringLiteralContext(this.context, this.state);
		this.enterRule(localContext, 40, DorisParser.RULE_identifierOrStringLiteral);
		try {
			this.state = 1167;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_BRACE:
				case DorisParser.RIGHT_BRACE:
				case DorisParser.ADDDATE:
				case DorisParser.AFTER:
				case DorisParser.AGG_STATE:
				case DorisParser.AGGREGATE:
				case DorisParser.ALIAS:
				case DorisParser.ANALYZED:
				case DorisParser.ARRAY:
				case DorisParser.ARRAY_RANGE:
				case DorisParser.AT:
				case DorisParser.AUTHORS:
				case DorisParser.AUTO_INCREMENT:
				case DorisParser.BACKENDS:
				case DorisParser.BACKUP:
				case DorisParser.BEGIN:
				case DorisParser.BELONG:
				case DorisParser.BIN:
				case DorisParser.BITAND:
				case DorisParser.BITMAP:
				case DorisParser.BITMAP_UNION:
				case DorisParser.BITOR:
				case DorisParser.BITXOR:
				case DorisParser.BLOB:
				case DorisParser.BOOLEAN:
				case DorisParser.BRIEF:
				case DorisParser.BROKER:
				case DorisParser.BUCKETS:
				case DorisParser.BUILD:
				case DorisParser.BUILTIN:
				case DorisParser.BULK:
				case DorisParser.CACHE:
				case DorisParser.CACHED:
				case DorisParser.CALL:
				case DorisParser.CATALOG:
				case DorisParser.CATALOGS:
				case DorisParser.CHAIN:
				case DorisParser.CHAR:
				case DorisParser.CHARSET:
				case DorisParser.CHECK:
				case DorisParser.CLUSTER:
				case DorisParser.CLUSTERS:
				case DorisParser.COLLATION:
				case DorisParser.COLLECT:
				case DorisParser.COLOCATE:
				case DorisParser.COLUMNS:
				case DorisParser.COMMENT:
				case DorisParser.COMMIT:
				case DorisParser.COMMITTED:
				case DorisParser.COMPACT:
				case DorisParser.COMPLETE:
				case DorisParser.COMPRESS_TYPE:
				case DorisParser.CONFIG:
				case DorisParser.CONNECTION:
				case DorisParser.CONNECTION_ID:
				case DorisParser.CONSISTENT:
				case DorisParser.CONSTRAINTS:
				case DorisParser.CONVERT:
				case DorisParser.CONVERT_LSC:
				case DorisParser.COPY:
				case DorisParser.COUNT:
				case DorisParser.CREATION:
				case DorisParser.CRON:
				case DorisParser.CURRENT_CATALOG:
				case DorisParser.CURRENT_DATE:
				case DorisParser.CURRENT_TIME:
				case DorisParser.CURRENT_TIMESTAMP:
				case DorisParser.CURRENT_USER:
				case DorisParser.DATA:
				case DorisParser.DATE:
				case DorisParser.DATE_ADD:
				case DorisParser.DATE_CEIL:
				case DorisParser.DATE_DIFF:
				case DorisParser.DATE_FLOOR:
				case DorisParser.DATE_SUB:
				case DorisParser.DATEADD:
				case DorisParser.DATEDIFF:
				case DorisParser.DATETIME:
				case DorisParser.DATETIMEV2:
				case DorisParser.DATEV2:
				case DorisParser.DATETIMEV1:
				case DorisParser.DATEV1:
				case DorisParser.DAY:
				case DorisParser.DAYS_ADD:
				case DorisParser.DAYS_SUB:
				case DorisParser.DECIMAL:
				case DorisParser.DECIMALV2:
				case DorisParser.DECIMALV3:
				case DorisParser.DEFERRED:
				case DorisParser.DEMAND:
				case DorisParser.DIAGNOSE:
				case DorisParser.DISTINCTPC:
				case DorisParser.DISTINCTPCSA:
				case DorisParser.DO:
				case DorisParser.DORIS_INTERNAL_TABLE_ID:
				case DorisParser.DUAL:
				case DorisParser.DYNAMIC:
				case DorisParser.ENABLE:
				case DorisParser.ENCRYPTKEY:
				case DorisParser.ENCRYPTKEYS:
				case DorisParser.END:
				case DorisParser.ENDS:
				case DorisParser.ENGINE:
				case DorisParser.ENGINES:
				case DorisParser.ERRORS:
				case DorisParser.EVENTS:
				case DorisParser.EVERY:
				case DorisParser.EXCLUDE:
				case DorisParser.EXPIRED:
				case DorisParser.EXTERNAL:
				case DorisParser.FAILED_LOGIN_ATTEMPTS:
				case DorisParser.FAST:
				case DorisParser.FEATURE:
				case DorisParser.FIELDS:
				case DorisParser.FILE:
				case DorisParser.FILTER:
				case DorisParser.FIRST:
				case DorisParser.FORMAT:
				case DorisParser.FREE:
				case DorisParser.FRONTENDS:
				case DorisParser.FUNCTION:
				case DorisParser.GENERIC:
				case DorisParser.GLOBAL:
				case DorisParser.GRAPH:
				case DorisParser.GROUPING:
				case DorisParser.GROUPS:
				case DorisParser.HASH:
				case DorisParser.HDFS:
				case DorisParser.HELP:
				case DorisParser.HISTOGRAM:
				case DorisParser.HLL_UNION:
				case DorisParser.HOSTNAME:
				case DorisParser.HOTSPOT:
				case DorisParser.HOUR:
				case DorisParser.HUB:
				case DorisParser.IDENTIFIED:
				case DorisParser.IGNORE:
				case DorisParser.IMMEDIATE:
				case DorisParser.INCREMENTAL:
				case DorisParser.INDEXES:
				case DorisParser.INVERTED:
				case DorisParser.IPV4:
				case DorisParser.IPV6:
				case DorisParser.IS_NOT_NULL_PRED:
				case DorisParser.IS_NULL_PRED:
				case DorisParser.ISNULL:
				case DorisParser.ISOLATION:
				case DorisParser.JOB:
				case DorisParser.JOBS:
				case DorisParser.JSON:
				case DorisParser.JSONB:
				case DorisParser.LABEL:
				case DorisParser.LAST:
				case DorisParser.LDAP:
				case DorisParser.LDAP_ADMIN_PASSWORD:
				case DorisParser.LESS:
				case DorisParser.LEVEL:
				case DorisParser.LINES:
				case DorisParser.LINK:
				case DorisParser.LOCAL:
				case DorisParser.LOCALTIME:
				case DorisParser.LOCALTIMESTAMP:
				case DorisParser.LOCATION:
				case DorisParser.LOCK:
				case DorisParser.LOGICAL:
				case DorisParser.MANUAL:
				case DorisParser.MAP:
				case DorisParser.MATCH_ALL:
				case DorisParser.MATCH_ANY:
				case DorisParser.MATCH_PHRASE:
				case DorisParser.MATCH_PHRASE_EDGE:
				case DorisParser.MATCH_PHRASE_PREFIX:
				case DorisParser.MATCH_REGEXP:
				case DorisParser.MATERIALIZED:
				case DorisParser.MAX:
				case DorisParser.MEMO:
				case DorisParser.MERGE:
				case DorisParser.MIGRATE:
				case DorisParser.MIGRATIONS:
				case DorisParser.MIN:
				case DorisParser.MINUTE:
				case DorisParser.MODIFY:
				case DorisParser.MONTH:
				case DorisParser.MTMV:
				case DorisParser.NAME:
				case DorisParser.NAMES:
				case DorisParser.NEGATIVE:
				case DorisParser.NEVER:
				case DorisParser.NEXT:
				case DorisParser.NGRAM_BF:
				case DorisParser.NO:
				case DorisParser.NON_NULLABLE:
				case DorisParser.NULLS:
				case DorisParser.OF:
				case DorisParser.OFFSET:
				case DorisParser.ONLY:
				case DorisParser.OPEN:
				case DorisParser.OPTIMIZED:
				case DorisParser.PARAMETER:
				case DorisParser.PARSED:
				case DorisParser.PARTITIONS:
				case DorisParser.PASSWORD:
				case DorisParser.PASSWORD_EXPIRE:
				case DorisParser.PASSWORD_HISTORY:
				case DorisParser.PASSWORD_LOCK_TIME:
				case DorisParser.PASSWORD_REUSE:
				case DorisParser.PATH:
				case DorisParser.PAUSE:
				case DorisParser.PERCENT:
				case DorisParser.PERIOD:
				case DorisParser.PERMISSIVE:
				case DorisParser.PHYSICAL:
				case DorisParser.PLAN:
				case DorisParser.PRIVILEGES:
				case DorisParser.PROCESS:
				case DorisParser.PLUGIN:
				case DorisParser.PLUGINS:
				case DorisParser.POLICY:
				case DorisParser.PROC:
				case DorisParser.PROCESSLIST:
				case DorisParser.PROFILE:
				case DorisParser.PROPERTIES:
				case DorisParser.PROPERTY:
				case DorisParser.QUANTILE_STATE:
				case DorisParser.QUANTILE_UNION:
				case DorisParser.QUERY:
				case DorisParser.QUOTA:
				case DorisParser.RANDOM:
				case DorisParser.RECENT:
				case DorisParser.RECOVER:
				case DorisParser.RECYCLE:
				case DorisParser.REFRESH:
				case DorisParser.REPEATABLE:
				case DorisParser.REPLACE:
				case DorisParser.REPLACE_IF_NOT_NULL:
				case DorisParser.REPOSITORIES:
				case DorisParser.REPOSITORY:
				case DorisParser.RESOURCE:
				case DorisParser.RESOURCES:
				case DorisParser.RESTORE:
				case DorisParser.RESTRICTIVE:
				case DorisParser.RESUME:
				case DorisParser.RETURNS:
				case DorisParser.REWRITTEN:
				case DorisParser.RLIKE:
				case DorisParser.ROLLBACK:
				case DorisParser.ROLLUP:
				case DorisParser.ROUTINE:
				case DorisParser.S3:
				case DorisParser.SAMPLE:
				case DorisParser.SCHEDULE:
				case DorisParser.SCHEDULER:
				case DorisParser.SCHEMA:
				case DorisParser.SECOND:
				case DorisParser.SEQUENCE:
				case DorisParser.SERIALIZABLE:
				case DorisParser.SESSION:
				case DorisParser.SHAPE:
				case DorisParser.SKEW:
				case DorisParser.SNAPSHOT:
				case DorisParser.SONAME:
				case DorisParser.SPLIT:
				case DorisParser.SQL:
				case DorisParser.STAGES:
				case DorisParser.START:
				case DorisParser.STARTS:
				case DorisParser.STATS:
				case DorisParser.STATUS:
				case DorisParser.STOP:
				case DorisParser.STORAGE:
				case DorisParser.STREAM:
				case DorisParser.STREAMING:
				case DorisParser.STRING:
				case DorisParser.STRUCT:
				case DorisParser.SUBDATE:
				case DorisParser.SUM:
				case DorisParser.TABLES:
				case DorisParser.TASK:
				case DorisParser.TASKS:
				case DorisParser.TEMPORARY:
				case DorisParser.TEXT:
				case DorisParser.THAN:
				case DorisParser.TIME:
				case DorisParser.TIMESTAMP:
				case DorisParser.TIMESTAMPADD:
				case DorisParser.TIMESTAMPDIFF:
				case DorisParser.TRANSACTION:
				case DorisParser.TREE:
				case DorisParser.TRIGGERS:
				case DorisParser.TRUNCATE:
				case DorisParser.TYPE:
				case DorisParser.TYPES:
				case DorisParser.UNCOMMITTED:
				case DorisParser.UNLOCK:
				case DorisParser.UP:
				case DorisParser.USER:
				case DorisParser.VALUE:
				case DorisParser.VARCHAR:
				case DorisParser.VARIABLES:
				case DorisParser.VARIANT:
				case DorisParser.VAULT:
				case DorisParser.VERBOSE:
				case DorisParser.VERSION:
				case DorisParser.VIEW:
				case DorisParser.WARM:
				case DorisParser.WARNINGS:
				case DorisParser.WEEK:
				case DorisParser.WORK:
				case DorisParser.YEAR:
				case DorisParser.IDENTIFIER:
				case DorisParser.BACKQUOTED_IDENTIFIER:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1165;
						this.identifier();
					}
					break;
				case DorisParser.STRING_LITERAL:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1166;
						this.match(DorisParser.STRING_LITERAL);
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	identifierOrText() {
		let localContext = new IdentifierOrTextContext(this.context, this.state);
		this.enterRule(localContext, 42, DorisParser.RULE_identifierOrText);
		try {
			this.state = 1172;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_BRACE:
				case DorisParser.RIGHT_BRACE:
				case DorisParser.ADDDATE:
				case DorisParser.AFTER:
				case DorisParser.AGG_STATE:
				case DorisParser.AGGREGATE:
				case DorisParser.ALIAS:
				case DorisParser.ANALYZED:
				case DorisParser.ARRAY:
				case DorisParser.ARRAY_RANGE:
				case DorisParser.AT:
				case DorisParser.AUTHORS:
				case DorisParser.AUTO_INCREMENT:
				case DorisParser.BACKENDS:
				case DorisParser.BACKUP:
				case DorisParser.BEGIN:
				case DorisParser.BELONG:
				case DorisParser.BIN:
				case DorisParser.BITAND:
				case DorisParser.BITMAP:
				case DorisParser.BITMAP_UNION:
				case DorisParser.BITOR:
				case DorisParser.BITXOR:
				case DorisParser.BLOB:
				case DorisParser.BOOLEAN:
				case DorisParser.BRIEF:
				case DorisParser.BROKER:
				case DorisParser.BUCKETS:
				case DorisParser.BUILD:
				case DorisParser.BUILTIN:
				case DorisParser.BULK:
				case DorisParser.CACHE:
				case DorisParser.CACHED:
				case DorisParser.CALL:
				case DorisParser.CATALOG:
				case DorisParser.CATALOGS:
				case DorisParser.CHAIN:
				case DorisParser.CHAR:
				case DorisParser.CHARSET:
				case DorisParser.CHECK:
				case DorisParser.CLUSTER:
				case DorisParser.CLUSTERS:
				case DorisParser.COLLATION:
				case DorisParser.COLLECT:
				case DorisParser.COLOCATE:
				case DorisParser.COLUMNS:
				case DorisParser.COMMENT:
				case DorisParser.COMMIT:
				case DorisParser.COMMITTED:
				case DorisParser.COMPACT:
				case DorisParser.COMPLETE:
				case DorisParser.COMPRESS_TYPE:
				case DorisParser.CONFIG:
				case DorisParser.CONNECTION:
				case DorisParser.CONNECTION_ID:
				case DorisParser.CONSISTENT:
				case DorisParser.CONSTRAINTS:
				case DorisParser.CONVERT:
				case DorisParser.CONVERT_LSC:
				case DorisParser.COPY:
				case DorisParser.COUNT:
				case DorisParser.CREATION:
				case DorisParser.CRON:
				case DorisParser.CURRENT_CATALOG:
				case DorisParser.CURRENT_DATE:
				case DorisParser.CURRENT_TIME:
				case DorisParser.CURRENT_TIMESTAMP:
				case DorisParser.CURRENT_USER:
				case DorisParser.DATA:
				case DorisParser.DATE:
				case DorisParser.DATE_ADD:
				case DorisParser.DATE_CEIL:
				case DorisParser.DATE_DIFF:
				case DorisParser.DATE_FLOOR:
				case DorisParser.DATE_SUB:
				case DorisParser.DATEADD:
				case DorisParser.DATEDIFF:
				case DorisParser.DATETIME:
				case DorisParser.DATETIMEV2:
				case DorisParser.DATEV2:
				case DorisParser.DATETIMEV1:
				case DorisParser.DATEV1:
				case DorisParser.DAY:
				case DorisParser.DAYS_ADD:
				case DorisParser.DAYS_SUB:
				case DorisParser.DECIMAL:
				case DorisParser.DECIMALV2:
				case DorisParser.DECIMALV3:
				case DorisParser.DEFERRED:
				case DorisParser.DEMAND:
				case DorisParser.DIAGNOSE:
				case DorisParser.DISTINCTPC:
				case DorisParser.DISTINCTPCSA:
				case DorisParser.DO:
				case DorisParser.DORIS_INTERNAL_TABLE_ID:
				case DorisParser.DUAL:
				case DorisParser.DYNAMIC:
				case DorisParser.ENABLE:
				case DorisParser.ENCRYPTKEY:
				case DorisParser.ENCRYPTKEYS:
				case DorisParser.END:
				case DorisParser.ENDS:
				case DorisParser.ENGINE:
				case DorisParser.ENGINES:
				case DorisParser.ERRORS:
				case DorisParser.EVENTS:
				case DorisParser.EVERY:
				case DorisParser.EXCLUDE:
				case DorisParser.EXPIRED:
				case DorisParser.EXTERNAL:
				case DorisParser.FAILED_LOGIN_ATTEMPTS:
				case DorisParser.FAST:
				case DorisParser.FEATURE:
				case DorisParser.FIELDS:
				case DorisParser.FILE:
				case DorisParser.FILTER:
				case DorisParser.FIRST:
				case DorisParser.FORMAT:
				case DorisParser.FREE:
				case DorisParser.FRONTENDS:
				case DorisParser.FUNCTION:
				case DorisParser.GENERIC:
				case DorisParser.GLOBAL:
				case DorisParser.GRAPH:
				case DorisParser.GROUPING:
				case DorisParser.GROUPS:
				case DorisParser.HASH:
				case DorisParser.HDFS:
				case DorisParser.HELP:
				case DorisParser.HISTOGRAM:
				case DorisParser.HLL_UNION:
				case DorisParser.HOSTNAME:
				case DorisParser.HOTSPOT:
				case DorisParser.HOUR:
				case DorisParser.HUB:
				case DorisParser.IDENTIFIED:
				case DorisParser.IGNORE:
				case DorisParser.IMMEDIATE:
				case DorisParser.INCREMENTAL:
				case DorisParser.INDEXES:
				case DorisParser.INVERTED:
				case DorisParser.IPV4:
				case DorisParser.IPV6:
				case DorisParser.IS_NOT_NULL_PRED:
				case DorisParser.IS_NULL_PRED:
				case DorisParser.ISNULL:
				case DorisParser.ISOLATION:
				case DorisParser.JOB:
				case DorisParser.JOBS:
				case DorisParser.JSON:
				case DorisParser.JSONB:
				case DorisParser.LABEL:
				case DorisParser.LAST:
				case DorisParser.LDAP:
				case DorisParser.LDAP_ADMIN_PASSWORD:
				case DorisParser.LESS:
				case DorisParser.LEVEL:
				case DorisParser.LINES:
				case DorisParser.LINK:
				case DorisParser.LOCAL:
				case DorisParser.LOCALTIME:
				case DorisParser.LOCALTIMESTAMP:
				case DorisParser.LOCATION:
				case DorisParser.LOCK:
				case DorisParser.LOGICAL:
				case DorisParser.MANUAL:
				case DorisParser.MAP:
				case DorisParser.MATCH_ALL:
				case DorisParser.MATCH_ANY:
				case DorisParser.MATCH_PHRASE:
				case DorisParser.MATCH_PHRASE_EDGE:
				case DorisParser.MATCH_PHRASE_PREFIX:
				case DorisParser.MATCH_REGEXP:
				case DorisParser.MATERIALIZED:
				case DorisParser.MAX:
				case DorisParser.MEMO:
				case DorisParser.MERGE:
				case DorisParser.MIGRATE:
				case DorisParser.MIGRATIONS:
				case DorisParser.MIN:
				case DorisParser.MINUTE:
				case DorisParser.MODIFY:
				case DorisParser.MONTH:
				case DorisParser.MTMV:
				case DorisParser.NAME:
				case DorisParser.NAMES:
				case DorisParser.NEGATIVE:
				case DorisParser.NEVER:
				case DorisParser.NEXT:
				case DorisParser.NGRAM_BF:
				case DorisParser.NO:
				case DorisParser.NON_NULLABLE:
				case DorisParser.NULLS:
				case DorisParser.OF:
				case DorisParser.OFFSET:
				case DorisParser.ONLY:
				case DorisParser.OPEN:
				case DorisParser.OPTIMIZED:
				case DorisParser.PARAMETER:
				case DorisParser.PARSED:
				case DorisParser.PARTITIONS:
				case DorisParser.PASSWORD:
				case DorisParser.PASSWORD_EXPIRE:
				case DorisParser.PASSWORD_HISTORY:
				case DorisParser.PASSWORD_LOCK_TIME:
				case DorisParser.PASSWORD_REUSE:
				case DorisParser.PATH:
				case DorisParser.PAUSE:
				case DorisParser.PERCENT:
				case DorisParser.PERIOD:
				case DorisParser.PERMISSIVE:
				case DorisParser.PHYSICAL:
				case DorisParser.PLAN:
				case DorisParser.PRIVILEGES:
				case DorisParser.PROCESS:
				case DorisParser.PLUGIN:
				case DorisParser.PLUGINS:
				case DorisParser.POLICY:
				case DorisParser.PROC:
				case DorisParser.PROCESSLIST:
				case DorisParser.PROFILE:
				case DorisParser.PROPERTIES:
				case DorisParser.PROPERTY:
				case DorisParser.QUANTILE_STATE:
				case DorisParser.QUANTILE_UNION:
				case DorisParser.QUERY:
				case DorisParser.QUOTA:
				case DorisParser.RANDOM:
				case DorisParser.RECENT:
				case DorisParser.RECOVER:
				case DorisParser.RECYCLE:
				case DorisParser.REFRESH:
				case DorisParser.REPEATABLE:
				case DorisParser.REPLACE:
				case DorisParser.REPLACE_IF_NOT_NULL:
				case DorisParser.REPOSITORIES:
				case DorisParser.REPOSITORY:
				case DorisParser.RESOURCE:
				case DorisParser.RESOURCES:
				case DorisParser.RESTORE:
				case DorisParser.RESTRICTIVE:
				case DorisParser.RESUME:
				case DorisParser.RETURNS:
				case DorisParser.REWRITTEN:
				case DorisParser.RLIKE:
				case DorisParser.ROLLBACK:
				case DorisParser.ROLLUP:
				case DorisParser.ROUTINE:
				case DorisParser.S3:
				case DorisParser.SAMPLE:
				case DorisParser.SCHEDULE:
				case DorisParser.SCHEDULER:
				case DorisParser.SCHEMA:
				case DorisParser.SECOND:
				case DorisParser.SEQUENCE:
				case DorisParser.SERIALIZABLE:
				case DorisParser.SESSION:
				case DorisParser.SHAPE:
				case DorisParser.SKEW:
				case DorisParser.SNAPSHOT:
				case DorisParser.SONAME:
				case DorisParser.SPLIT:
				case DorisParser.SQL:
				case DorisParser.STAGES:
				case DorisParser.START:
				case DorisParser.STARTS:
				case DorisParser.STATS:
				case DorisParser.STATUS:
				case DorisParser.STOP:
				case DorisParser.STORAGE:
				case DorisParser.STREAM:
				case DorisParser.STREAMING:
				case DorisParser.STRING:
				case DorisParser.STRUCT:
				case DorisParser.SUBDATE:
				case DorisParser.SUM:
				case DorisParser.TABLES:
				case DorisParser.TASK:
				case DorisParser.TASKS:
				case DorisParser.TEMPORARY:
				case DorisParser.TEXT:
				case DorisParser.THAN:
				case DorisParser.TIME:
				case DorisParser.TIMESTAMP:
				case DorisParser.TIMESTAMPADD:
				case DorisParser.TIMESTAMPDIFF:
				case DorisParser.TRANSACTION:
				case DorisParser.TREE:
				case DorisParser.TRIGGERS:
				case DorisParser.TRUNCATE:
				case DorisParser.TYPE:
				case DorisParser.TYPES:
				case DorisParser.UNCOMMITTED:
				case DorisParser.UNLOCK:
				case DorisParser.UP:
				case DorisParser.USER:
				case DorisParser.VALUE:
				case DorisParser.VARCHAR:
				case DorisParser.VARIABLES:
				case DorisParser.VARIANT:
				case DorisParser.VAULT:
				case DorisParser.VERBOSE:
				case DorisParser.VERSION:
				case DorisParser.VIEW:
				case DorisParser.WARM:
				case DorisParser.WARNINGS:
				case DorisParser.WEEK:
				case DorisParser.WORK:
				case DorisParser.YEAR:
				case DorisParser.IDENTIFIER:
				case DorisParser.BACKQUOTED_IDENTIFIER:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1169;
						this.errorCapturingIdentifier();
					}
					break;
				case DorisParser.STRING_LITERAL:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1170;
						this.match(DorisParser.STRING_LITERAL);
					}
					break;
				case DorisParser.LEADING_STRING:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1171;
						this.match(DorisParser.LEADING_STRING);
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	userIdentify() {
		let localContext = new UserIdentifyContext(this.context, this.state);
		this.enterRule(localContext, 44, DorisParser.RULE_userIdentify);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1174;
				localContext._user = this.identifierOrText();
				this.state = 1183;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 514) {
					{
						this.state = 1175;
						this.match(DorisParser.ATSIGN);
						this.state = 1181;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LEFT_BRACE:
							case DorisParser.RIGHT_BRACE:
							case DorisParser.ADDDATE:
							case DorisParser.AFTER:
							case DorisParser.AGG_STATE:
							case DorisParser.AGGREGATE:
							case DorisParser.ALIAS:
							case DorisParser.ANALYZED:
							case DorisParser.ARRAY:
							case DorisParser.ARRAY_RANGE:
							case DorisParser.AT:
							case DorisParser.AUTHORS:
							case DorisParser.AUTO_INCREMENT:
							case DorisParser.BACKENDS:
							case DorisParser.BACKUP:
							case DorisParser.BEGIN:
							case DorisParser.BELONG:
							case DorisParser.BIN:
							case DorisParser.BITAND:
							case DorisParser.BITMAP:
							case DorisParser.BITMAP_UNION:
							case DorisParser.BITOR:
							case DorisParser.BITXOR:
							case DorisParser.BLOB:
							case DorisParser.BOOLEAN:
							case DorisParser.BRIEF:
							case DorisParser.BROKER:
							case DorisParser.BUCKETS:
							case DorisParser.BUILD:
							case DorisParser.BUILTIN:
							case DorisParser.BULK:
							case DorisParser.CACHE:
							case DorisParser.CACHED:
							case DorisParser.CALL:
							case DorisParser.CATALOG:
							case DorisParser.CATALOGS:
							case DorisParser.CHAIN:
							case DorisParser.CHAR:
							case DorisParser.CHARSET:
							case DorisParser.CHECK:
							case DorisParser.CLUSTER:
							case DorisParser.CLUSTERS:
							case DorisParser.COLLATION:
							case DorisParser.COLLECT:
							case DorisParser.COLOCATE:
							case DorisParser.COLUMNS:
							case DorisParser.COMMENT:
							case DorisParser.COMMIT:
							case DorisParser.COMMITTED:
							case DorisParser.COMPACT:
							case DorisParser.COMPLETE:
							case DorisParser.COMPRESS_TYPE:
							case DorisParser.CONFIG:
							case DorisParser.CONNECTION:
							case DorisParser.CONNECTION_ID:
							case DorisParser.CONSISTENT:
							case DorisParser.CONSTRAINTS:
							case DorisParser.CONVERT:
							case DorisParser.CONVERT_LSC:
							case DorisParser.COPY:
							case DorisParser.COUNT:
							case DorisParser.CREATION:
							case DorisParser.CRON:
							case DorisParser.CURRENT_CATALOG:
							case DorisParser.CURRENT_DATE:
							case DorisParser.CURRENT_TIME:
							case DorisParser.CURRENT_TIMESTAMP:
							case DorisParser.CURRENT_USER:
							case DorisParser.DATA:
							case DorisParser.DATE:
							case DorisParser.DATE_ADD:
							case DorisParser.DATE_CEIL:
							case DorisParser.DATE_DIFF:
							case DorisParser.DATE_FLOOR:
							case DorisParser.DATE_SUB:
							case DorisParser.DATEADD:
							case DorisParser.DATEDIFF:
							case DorisParser.DATETIME:
							case DorisParser.DATETIMEV2:
							case DorisParser.DATEV2:
							case DorisParser.DATETIMEV1:
							case DorisParser.DATEV1:
							case DorisParser.DAY:
							case DorisParser.DAYS_ADD:
							case DorisParser.DAYS_SUB:
							case DorisParser.DECIMAL:
							case DorisParser.DECIMALV2:
							case DorisParser.DECIMALV3:
							case DorisParser.DEFERRED:
							case DorisParser.DEMAND:
							case DorisParser.DIAGNOSE:
							case DorisParser.DISTINCTPC:
							case DorisParser.DISTINCTPCSA:
							case DorisParser.DO:
							case DorisParser.DORIS_INTERNAL_TABLE_ID:
							case DorisParser.DUAL:
							case DorisParser.DYNAMIC:
							case DorisParser.ENABLE:
							case DorisParser.ENCRYPTKEY:
							case DorisParser.ENCRYPTKEYS:
							case DorisParser.END:
							case DorisParser.ENDS:
							case DorisParser.ENGINE:
							case DorisParser.ENGINES:
							case DorisParser.ERRORS:
							case DorisParser.EVENTS:
							case DorisParser.EVERY:
							case DorisParser.EXCLUDE:
							case DorisParser.EXPIRED:
							case DorisParser.EXTERNAL:
							case DorisParser.FAILED_LOGIN_ATTEMPTS:
							case DorisParser.FAST:
							case DorisParser.FEATURE:
							case DorisParser.FIELDS:
							case DorisParser.FILE:
							case DorisParser.FILTER:
							case DorisParser.FIRST:
							case DorisParser.FORMAT:
							case DorisParser.FREE:
							case DorisParser.FRONTENDS:
							case DorisParser.FUNCTION:
							case DorisParser.GENERIC:
							case DorisParser.GLOBAL:
							case DorisParser.GRAPH:
							case DorisParser.GROUPING:
							case DorisParser.GROUPS:
							case DorisParser.HASH:
							case DorisParser.HDFS:
							case DorisParser.HELP:
							case DorisParser.HISTOGRAM:
							case DorisParser.HLL_UNION:
							case DorisParser.HOSTNAME:
							case DorisParser.HOTSPOT:
							case DorisParser.HOUR:
							case DorisParser.HUB:
							case DorisParser.IDENTIFIED:
							case DorisParser.IGNORE:
							case DorisParser.IMMEDIATE:
							case DorisParser.INCREMENTAL:
							case DorisParser.INDEXES:
							case DorisParser.INVERTED:
							case DorisParser.IPV4:
							case DorisParser.IPV6:
							case DorisParser.IS_NOT_NULL_PRED:
							case DorisParser.IS_NULL_PRED:
							case DorisParser.ISNULL:
							case DorisParser.ISOLATION:
							case DorisParser.JOB:
							case DorisParser.JOBS:
							case DorisParser.JSON:
							case DorisParser.JSONB:
							case DorisParser.LABEL:
							case DorisParser.LAST:
							case DorisParser.LDAP:
							case DorisParser.LDAP_ADMIN_PASSWORD:
							case DorisParser.LESS:
							case DorisParser.LEVEL:
							case DorisParser.LINES:
							case DorisParser.LINK:
							case DorisParser.LOCAL:
							case DorisParser.LOCALTIME:
							case DorisParser.LOCALTIMESTAMP:
							case DorisParser.LOCATION:
							case DorisParser.LOCK:
							case DorisParser.LOGICAL:
							case DorisParser.MANUAL:
							case DorisParser.MAP:
							case DorisParser.MATCH_ALL:
							case DorisParser.MATCH_ANY:
							case DorisParser.MATCH_PHRASE:
							case DorisParser.MATCH_PHRASE_EDGE:
							case DorisParser.MATCH_PHRASE_PREFIX:
							case DorisParser.MATCH_REGEXP:
							case DorisParser.MATERIALIZED:
							case DorisParser.MAX:
							case DorisParser.MEMO:
							case DorisParser.MERGE:
							case DorisParser.MIGRATE:
							case DorisParser.MIGRATIONS:
							case DorisParser.MIN:
							case DorisParser.MINUTE:
							case DorisParser.MODIFY:
							case DorisParser.MONTH:
							case DorisParser.MTMV:
							case DorisParser.NAME:
							case DorisParser.NAMES:
							case DorisParser.NEGATIVE:
							case DorisParser.NEVER:
							case DorisParser.NEXT:
							case DorisParser.NGRAM_BF:
							case DorisParser.NO:
							case DorisParser.NON_NULLABLE:
							case DorisParser.NULLS:
							case DorisParser.OF:
							case DorisParser.OFFSET:
							case DorisParser.ONLY:
							case DorisParser.OPEN:
							case DorisParser.OPTIMIZED:
							case DorisParser.PARAMETER:
							case DorisParser.PARSED:
							case DorisParser.PARTITIONS:
							case DorisParser.PASSWORD:
							case DorisParser.PASSWORD_EXPIRE:
							case DorisParser.PASSWORD_HISTORY:
							case DorisParser.PASSWORD_LOCK_TIME:
							case DorisParser.PASSWORD_REUSE:
							case DorisParser.PATH:
							case DorisParser.PAUSE:
							case DorisParser.PERCENT:
							case DorisParser.PERIOD:
							case DorisParser.PERMISSIVE:
							case DorisParser.PHYSICAL:
							case DorisParser.PLAN:
							case DorisParser.PRIVILEGES:
							case DorisParser.PROCESS:
							case DorisParser.PLUGIN:
							case DorisParser.PLUGINS:
							case DorisParser.POLICY:
							case DorisParser.PROC:
							case DorisParser.PROCESSLIST:
							case DorisParser.PROFILE:
							case DorisParser.PROPERTIES:
							case DorisParser.PROPERTY:
							case DorisParser.QUANTILE_STATE:
							case DorisParser.QUANTILE_UNION:
							case DorisParser.QUERY:
							case DorisParser.QUOTA:
							case DorisParser.RANDOM:
							case DorisParser.RECENT:
							case DorisParser.RECOVER:
							case DorisParser.RECYCLE:
							case DorisParser.REFRESH:
							case DorisParser.REPEATABLE:
							case DorisParser.REPLACE:
							case DorisParser.REPLACE_IF_NOT_NULL:
							case DorisParser.REPOSITORIES:
							case DorisParser.REPOSITORY:
							case DorisParser.RESOURCE:
							case DorisParser.RESOURCES:
							case DorisParser.RESTORE:
							case DorisParser.RESTRICTIVE:
							case DorisParser.RESUME:
							case DorisParser.RETURNS:
							case DorisParser.REWRITTEN:
							case DorisParser.RLIKE:
							case DorisParser.ROLLBACK:
							case DorisParser.ROLLUP:
							case DorisParser.ROUTINE:
							case DorisParser.S3:
							case DorisParser.SAMPLE:
							case DorisParser.SCHEDULE:
							case DorisParser.SCHEDULER:
							case DorisParser.SCHEMA:
							case DorisParser.SECOND:
							case DorisParser.SEQUENCE:
							case DorisParser.SERIALIZABLE:
							case DorisParser.SESSION:
							case DorisParser.SHAPE:
							case DorisParser.SKEW:
							case DorisParser.SNAPSHOT:
							case DorisParser.SONAME:
							case DorisParser.SPLIT:
							case DorisParser.SQL:
							case DorisParser.STAGES:
							case DorisParser.START:
							case DorisParser.STARTS:
							case DorisParser.STATS:
							case DorisParser.STATUS:
							case DorisParser.STOP:
							case DorisParser.STORAGE:
							case DorisParser.STREAM:
							case DorisParser.STREAMING:
							case DorisParser.STRING:
							case DorisParser.STRUCT:
							case DorisParser.SUBDATE:
							case DorisParser.SUM:
							case DorisParser.TABLES:
							case DorisParser.TASK:
							case DorisParser.TASKS:
							case DorisParser.TEMPORARY:
							case DorisParser.TEXT:
							case DorisParser.THAN:
							case DorisParser.TIME:
							case DorisParser.TIMESTAMP:
							case DorisParser.TIMESTAMPADD:
							case DorisParser.TIMESTAMPDIFF:
							case DorisParser.TRANSACTION:
							case DorisParser.TREE:
							case DorisParser.TRIGGERS:
							case DorisParser.TRUNCATE:
							case DorisParser.TYPE:
							case DorisParser.TYPES:
							case DorisParser.UNCOMMITTED:
							case DorisParser.UNLOCK:
							case DorisParser.UP:
							case DorisParser.USER:
							case DorisParser.VALUE:
							case DorisParser.VARCHAR:
							case DorisParser.VARIABLES:
							case DorisParser.VARIANT:
							case DorisParser.VAULT:
							case DorisParser.VERBOSE:
							case DorisParser.VERSION:
							case DorisParser.VIEW:
							case DorisParser.WARM:
							case DorisParser.WARNINGS:
							case DorisParser.WEEK:
							case DorisParser.WORK:
							case DorisParser.YEAR:
							case DorisParser.STRING_LITERAL:
							case DorisParser.LEADING_STRING:
							case DorisParser.IDENTIFIER:
							case DorisParser.BACKQUOTED_IDENTIFIER:
								{
									this.state = 1176;
									localContext._host = this.identifierOrText();
								}
								break;
							case DorisParser.LEFT_PAREN:
								{
									this.state = 1177;
									this.match(DorisParser.LEFT_PAREN);
									this.state = 1178;
									localContext._host = this.identifierOrText();
									this.state = 1179;
									this.match(DorisParser.RIGHT_PAREN);
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	explain() {
		let localContext = new ExplainContext(this.context, this.state);
		this.enterRule(localContext, 46, DorisParser.RULE_explain);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1191;
				this.errorHandler.sync(this);
				switch (this.tokenStream.LA(1)) {
					case DorisParser.EXPLAIN:
						{
							this.state = 1185;
							this.match(DorisParser.EXPLAIN);
							this.state = 1187;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (
								_la === 19 ||
								_la === 22 ||
								_la === 268 ||
								_la === 282 ||
								(((_la - 310) & ~0x1f) === 0 &&
									((1 << (_la - 310)) & 2097409) !== 0) ||
								_la === 379 ||
								_la === 403
							) {
								{
									this.state = 1186;
									this.planType();
								}
							}
						}
						break;
					case DorisParser.DESC:
						{
							this.state = 1189;
							this.match(DorisParser.DESC);
						}
						break;
					case DorisParser.DESCRIBE:
						{
							this.state = 1190;
							this.match(DorisParser.DESCRIBE);
						}
						break;
					default:
						throw new antlr.NoViableAltException(this);
				}
				this.state = 1194;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 199 || _la === 333 || _la === 450 || _la === 476) {
					{
						this.state = 1193;
						localContext._level = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(_la === 199 || _la === 333 || _la === 450 || _la === 476)) {
							localContext._level = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
					}
				}
				this.state = 1197;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 335) {
					{
						this.state = 1196;
						this.match(DorisParser.PROCESS);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	planType() {
		let localContext = new PlanTypeContext(this.context, this.state);
		this.enterRule(localContext, 48, DorisParser.RULE_planType);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1199;
				_la = this.tokenStream.LA(1);
				if (
					!(
						_la === 19 ||
						_la === 22 ||
						_la === 268 ||
						_la === 282 ||
						(((_la - 310) & ~0x1f) === 0 && ((1 << (_la - 310)) & 2097409) !== 0) ||
						_la === 379 ||
						_la === 403
					)
				) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	mergeType() {
		let localContext = new MergeTypeContext(this.context, this.state);
		this.enterRule(localContext, 50, DorisParser.RULE_mergeType);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1201;
				_la = this.tokenStream.LA(1);
				if (!(_la === 25 || _la === 131 || _la === 283)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	preFilterClause() {
		let localContext = new PreFilterClauseContext(this.context, this.state);
		this.enterRule(localContext, 52, DorisParser.RULE_preFilterClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1203;
				this.match(DorisParser.PRECEDING);
				this.state = 1204;
				this.match(DorisParser.FILTER);
				this.state = 1205;
				this.expression();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	deleteOnClause() {
		let localContext = new DeleteOnClauseContext(this.context, this.state);
		this.enterRule(localContext, 54, DorisParser.RULE_deleteOnClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1207;
				this.match(DorisParser.DELETE);
				this.state = 1208;
				this.match(DorisParser.ON);
				this.state = 1209;
				this.expression();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	sequenceColClause() {
		let localContext = new SequenceColClauseContext(this.context, this.state);
		this.enterRule(localContext, 56, DorisParser.RULE_sequenceColClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1211;
				this.match(DorisParser.ORDER);
				this.state = 1212;
				this.match(DorisParser.BY);
				this.state = 1213;
				this.identifier();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	colFromPath() {
		let localContext = new ColFromPathContext(this.context, this.state);
		this.enterRule(localContext, 58, DorisParser.RULE_colFromPath);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1215;
				this.match(DorisParser.COLUMNS);
				this.state = 1216;
				this.match(DorisParser.FROM);
				this.state = 1217;
				this.match(DorisParser.PATH);
				this.state = 1218;
				this.match(DorisParser.AS);
				this.state = 1219;
				this.identifierList();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	colMappingList() {
		let localContext = new ColMappingListContext(this.context, this.state);
		this.enterRule(localContext, 60, DorisParser.RULE_colMappingList);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1221;
				this.match(DorisParser.SET);
				this.state = 1222;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1223;
				localContext._mappingExpr = this.mappingExpr();
				localContext._mappingSet.push(localContext._mappingExpr);
				this.state = 1228;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1224;
							this.match(DorisParser.COMMA);
							this.state = 1225;
							localContext._mappingExpr = this.mappingExpr();
							localContext._mappingSet.push(localContext._mappingExpr);
						}
					}
					this.state = 1230;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 1231;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	mappingExpr() {
		let localContext = new MappingExprContext(this.context, this.state);
		this.enterRule(localContext, 62, DorisParser.RULE_mappingExpr);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				{
					this.state = 1233;
					localContext._mappingCol = this.identifier();
					this.state = 1234;
					this.match(DorisParser.EQ);
					this.state = 1235;
					this.expression();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	withRemoteStorageSystem() {
		let localContext = new WithRemoteStorageSystemContext(this.context, this.state);
		this.enterRule(localContext, 64, DorisParser.RULE_withRemoteStorageSystem);
		try {
			this.state = 1265;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 156, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1237;
						this.resourceDesc();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1238;
						this.match(DorisParser.WITH);
						this.state = 1239;
						this.match(DorisParser.S3);
						this.state = 1240;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1241;
						localContext._brokerProperties = this.propertyItemList();
						this.state = 1242;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1244;
						this.match(DorisParser.WITH);
						this.state = 1245;
						this.match(DorisParser.HDFS);
						this.state = 1246;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1247;
						localContext._brokerProperties = this.propertyItemList();
						this.state = 1248;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 4:
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 1250;
						this.match(DorisParser.WITH);
						this.state = 1251;
						this.match(DorisParser.LOCAL);
						this.state = 1252;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1253;
						localContext._brokerProperties = this.propertyItemList();
						this.state = 1254;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 5:
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 1256;
						this.match(DorisParser.WITH);
						this.state = 1257;
						this.match(DorisParser.BROKER);
						this.state = 1258;
						localContext._brokerName = this.identifierOrText();
						this.state = 1263;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 155, this.context)
						) {
							case 1:
								{
									this.state = 1259;
									this.match(DorisParser.LEFT_PAREN);
									this.state = 1260;
									localContext._brokerProperties = this.propertyItemList();
									this.state = 1261;
									this.match(DorisParser.RIGHT_PAREN);
								}
								break;
						}
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	resourceDesc() {
		let localContext = new ResourceDescContext(this.context, this.state);
		this.enterRule(localContext, 66, DorisParser.RULE_resourceDesc);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1267;
				this.match(DorisParser.WITH);
				this.state = 1268;
				this.match(DorisParser.RESOURCE);
				this.state = 1269;
				localContext._resourceName = this.identifierOrText();
				this.state = 1274;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context)) {
					case 1:
						{
							this.state = 1270;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 1271;
							this.propertyItemList();
							this.state = 1272;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	mysqlDataDesc() {
		let localContext = new MysqlDataDescContext(this.context, this.state);
		this.enterRule(localContext, 68, DorisParser.RULE_mysqlDataDesc);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1276;
				this.match(DorisParser.DATA);
				this.state = 1279;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 263) {
					{
						this.state = 1277;
						this.match(DorisParser.LOCAL);
						this.state = 1278;
						this.booleanValue();
					}
				}
				this.state = 1281;
				this.match(DorisParser.INFILE);
				this.state = 1282;
				localContext._filePath = this.match(DorisParser.STRING_LITERAL);
				this.state = 1283;
				this.match(DorisParser.INTO);
				this.state = 1284;
				this.match(DorisParser.TABLE);
				this.state = 1285;
				localContext._tableName = this.multipartIdentifier();
				this.state = 1288;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 319) {
					{
						this.state = 1286;
						this.match(DorisParser.PARTITION);
						this.state = 1287;
						localContext._partition = this.identifierList();
					}
				}
				this.state = 1294;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 78) {
					{
						this.state = 1290;
						this.match(DorisParser.COLUMNS);
						this.state = 1291;
						this.match(DorisParser.TERMINATED);
						this.state = 1292;
						this.match(DorisParser.BY);
						this.state = 1293;
						localContext._comma = this.match(DorisParser.STRING_LITERAL);
					}
				}
				this.state = 1300;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 259) {
					{
						this.state = 1296;
						this.match(DorisParser.LINES);
						this.state = 1297;
						this.match(DorisParser.TERMINATED);
						this.state = 1298;
						this.match(DorisParser.BY);
						this.state = 1299;
						localContext._separator = this.match(DorisParser.STRING_LITERAL);
					}
				}
				this.state = 1303;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 216) {
					{
						this.state = 1302;
						this.skipLines();
					}
				}
				this.state = 1306;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context)) {
					case 1:
						{
							this.state = 1305;
							localContext._columns = this.identifierList();
						}
						break;
				}
				this.state = 1309;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context)) {
					case 1:
						{
							this.state = 1308;
							this.colMappingList();
						}
						break;
				}
				this.state = 1312;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context)) {
					case 1:
						{
							this.state = 1311;
							this.propertyClause();
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	skipLines() {
		let localContext = new SkipLinesContext(this.context, this.state);
		this.enterRule(localContext, 70, DorisParser.RULE_skipLines);
		try {
			this.state = 1320;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1314;
						this.match(DorisParser.IGNORE);
						this.state = 1315;
						localContext._lines = this.match(DorisParser.INTEGER_VALUE);
						this.state = 1316;
						this.match(DorisParser.LINES);
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1317;
						this.match(DorisParser.IGNORE);
						this.state = 1318;
						localContext._lines = this.match(DorisParser.INTEGER_VALUE);
						this.state = 1319;
						this.match(DorisParser.ROWS);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	outFileClause() {
		let localContext = new OutFileClauseContext(this.context, this.state);
		this.enterRule(localContext, 72, DorisParser.RULE_outFileClause);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1322;
				this.match(DorisParser.INTO);
				this.state = 1323;
				this.match(DorisParser.OUTFILE);
				this.state = 1324;
				localContext._filePath = this.constant();
				this.state = 1328;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 187) {
					{
						this.state = 1325;
						this.match(DorisParser.FORMAT);
						this.state = 1326;
						this.match(DorisParser.AS);
						this.state = 1327;
						localContext._format = this.identifier();
					}
				}
				this.state = 1331;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 346) {
					{
						this.state = 1330;
						this.propertyClause();
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	query() {
		let localContext = new QueryContext(this.context, this.state);
		this.enterRule(localContext, 74, DorisParser.RULE_query);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1334;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 485) {
					{
						this.state = 1333;
						this.cte();
					}
				}
				this.state = 1336;
				this.queryTerm(0);
				this.state = 1337;
				this.queryOrganization();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	queryTerm(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		let parentContext = this.context;
		let parentState = this.state;
		let localContext = new QueryTermContext(this.context, parentState);
		let previousContext = localContext;
		let _startState = 76;
		this.enterRecursionRule(localContext, 76, DorisParser.RULE_queryTerm, _p);
		let _la;
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				{
					localContext = new QueryTermDefaultContext(localContext);
					this.context = localContext;
					previousContext = localContext;
					this.state = 1340;
					this.queryPrimary();
				}
				this.context.stop = this.tokenStream.LT(-1);
				this.state = 1350;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 171, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						previousContext = localContext;
						{
							{
								localContext = new SetOperationContext(
									new QueryTermContext(parentContext, parentState)
								);
								localContext._left = previousContext;
								this.pushNewRecursionContext(
									localContext,
									_startState,
									DorisParser.RULE_queryTerm
								);
								this.state = 1342;
								if (!this.precpred(this.context, 1)) {
									throw this.createFailedPredicateException(
										'this.precpred(this.context, 1)'
									);
								}
								this.state = 1343;
								localContext._operator = this.tokenStream.LT(1);
								_la = this.tokenStream.LA(1);
								if (!(_la === 163 || _la === 229 || _la === 287 || _la === 461)) {
									localContext._operator = this.errorHandler.recoverInline(this);
								} else {
									this.errorHandler.reportMatch(this);
									this.consume();
								}
								this.state = 1345;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								if (_la === 19 || _la === 137) {
									{
										this.state = 1344;
										this.setQuantifier();
									}
								}
								this.state = 1347;
								localContext._right = this.queryTerm(2);
							}
						}
					}
					this.state = 1352;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						171,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(parentContext);
		}
		return localContext;
	}
	setQuantifier() {
		let localContext = new SetQuantifierContext(this.context, this.state);
		this.enterRule(localContext, 78, DorisParser.RULE_setQuantifier);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1353;
				_la = this.tokenStream.LA(1);
				if (!(_la === 19 || _la === 137)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	queryPrimary() {
		let localContext = new QueryPrimaryContext(this.context, this.state);
		this.enterRule(localContext, 80, DorisParser.RULE_queryPrimary);
		try {
			this.state = 1361;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.SELECT:
					localContext = new QueryPrimaryDefaultContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1355;
						this.querySpecification();
					}
					break;
				case DorisParser.LEFT_PAREN:
					localContext = new SubqueryContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1356;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1357;
						this.query();
						this.state = 1358;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case DorisParser.VALUES:
					localContext = new ValuesTableContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1360;
						this.inlineTable();
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	querySpecification() {
		let localContext = new QuerySpecificationContext(this.context, this.state);
		this.enterRule(localContext, 82, DorisParser.RULE_querySpecification);
		try {
			localContext = new RegularQuerySpecificationContext(localContext);
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1363;
				this.selectClause();
				this.state = 1365;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 173, this.context)) {
					case 1:
						{
							this.state = 1364;
							this.intoClause();
						}
						break;
				}
				this.state = 1368;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 174, this.context)) {
					case 1:
						{
							this.state = 1367;
							this.fromClause();
						}
						break;
				}
				this.state = 1371;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 175, this.context)) {
					case 1:
						{
							this.state = 1370;
							this.whereClause();
						}
						break;
				}
				this.state = 1374;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 176, this.context)) {
					case 1:
						{
							this.state = 1373;
							this.aggClause();
						}
						break;
				}
				this.state = 1377;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 177, this.context)) {
					case 1:
						{
							this.state = 1376;
							this.havingClause();
						}
						break;
				}
				this.state = 1379;
				if (!this.doris_legacy_SQL_syntax) {
					throw this.createFailedPredicateException('doris_legacy_SQL_syntax');
				}
				this.state = 1380;
				this.queryOrganization();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	cte() {
		let localContext = new CteContext(this.context, this.state);
		this.enterRule(localContext, 84, DorisParser.RULE_cte);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1382;
				this.match(DorisParser.WITH);
				this.state = 1383;
				this.aliasQuery();
				this.state = 1388;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1384;
							this.match(DorisParser.COMMA);
							this.state = 1385;
							this.aliasQuery();
						}
					}
					this.state = 1390;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	aliasQuery() {
		let localContext = new AliasQueryContext(this.context, this.state);
		this.enterRule(localContext, 86, DorisParser.RULE_aliasQuery);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1391;
				this.identifier();
				this.state = 1393;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 2) {
					{
						this.state = 1392;
						this.columnAliases();
					}
				}
				this.state = 1395;
				this.match(DorisParser.AS);
				this.state = 1396;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1397;
				this.query();
				this.state = 1398;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	columnAliases() {
		let localContext = new ColumnAliasesContext(this.context, this.state);
		this.enterRule(localContext, 88, DorisParser.RULE_columnAliases);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1400;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1401;
				this.identifier();
				this.state = 1406;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1402;
							this.match(DorisParser.COMMA);
							this.state = 1403;
							this.identifier();
						}
					}
					this.state = 1408;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 1409;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	selectClause() {
		let localContext = new SelectClauseContext(this.context, this.state);
		this.enterRule(localContext, 90, DorisParser.RULE_selectClause);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1411;
				this.match(DorisParser.SELECT);
				this.state = 1413;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 512) {
					{
						this.state = 1412;
						this.selectHint();
					}
				}
				this.state = 1416;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 19 || _la === 137) {
					{
						this.state = 1415;
						_la = this.tokenStream.LA(1);
						if (!(_la === 19 || _la === 137)) {
							this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
					}
				}
				this.state = 1418;
				this.selectColumnClause();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	selectColumnClause() {
		let localContext = new SelectColumnClauseContext(this.context, this.state);
		this.enterRule(localContext, 92, DorisParser.RULE_selectColumnClause);
		try {
			this.state = 1427;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1420;
						this.namedExpressionSeq();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1421;
						this.match(DorisParser.ASTERISK);
						this.state = 1422;
						this.match(DorisParser.EXCEPT);
						this.state = 1423;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1424;
						this.namedExpressionSeq();
						this.state = 1425;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	whereClause() {
		let localContext = new WhereClauseContext(this.context, this.state);
		this.enterRule(localContext, 94, DorisParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1429;
				this.match(DorisParser.WHERE);
				this.state = 1430;
				this.booleanExpression(0);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	fromClause() {
		let localContext = new FromClauseContext(this.context, this.state);
		this.enterRule(localContext, 96, DorisParser.RULE_fromClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1432;
				this.match(DorisParser.FROM);
				this.state = 1433;
				this.relations();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	intoClause() {
		let localContext = new IntoClauseContext(this.context, this.state);
		this.enterRule(localContext, 98, DorisParser.RULE_intoClause);
		let _la;
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1436;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 56) {
					{
						this.state = 1435;
						this.bulkCollectClause();
					}
				}
				this.state = 1438;
				this.match(DorisParser.INTO);
				this.state = 1441;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 185, this.context)) {
					case 1:
						{
							this.state = 1439;
							this.tableRow();
						}
						break;
					case 2:
						{
							this.state = 1440;
							this.identifier();
						}
						break;
				}
				this.state = 1450;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 187, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1443;
								this.match(DorisParser.COMMA);
								this.state = 1446;
								this.errorHandler.sync(this);
								switch (
									this.interpreter.adaptivePredict(
										this.tokenStream,
										186,
										this.context
									)
								) {
									case 1:
										{
											this.state = 1444;
											this.tableRow();
										}
										break;
									case 2:
										{
											this.state = 1445;
											this.identifier();
										}
										break;
								}
							}
						}
					}
					this.state = 1452;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						187,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	bulkCollectClause() {
		let localContext = new BulkCollectClauseContext(this.context, this.state);
		this.enterRule(localContext, 100, DorisParser.RULE_bulkCollectClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1453;
				this.match(DorisParser.BULK);
				this.state = 1454;
				this.match(DorisParser.COLLECT);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	tableRow() {
		let localContext = new TableRowContext(this.context, this.state);
		this.enterRule(localContext, 102, DorisParser.RULE_tableRow);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1456;
				this.identifier();
				this.state = 1457;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1458;
				this.match(DorisParser.INTEGER_VALUE);
				this.state = 1459;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	relations() {
		let localContext = new RelationsContext(this.context, this.state);
		this.enterRule(localContext, 104, DorisParser.RULE_relations);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1461;
				this.relation();
				this.state = 1466;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 188, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1462;
								this.match(DorisParser.COMMA);
								this.state = 1463;
								this.relation();
							}
						}
					}
					this.state = 1468;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						188,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	relation() {
		let localContext = new RelationContext(this.context, this.state);
		this.enterRule(localContext, 106, DorisParser.RULE_relation);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1469;
				this.relationPrimary();
				this.state = 1473;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 189, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1470;
								this.joinRelation();
							}
						}
					}
					this.state = 1475;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						189,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	joinRelation() {
		let localContext = new JoinRelationContext(this.context, this.state);
		this.enterRule(localContext, 108, DorisParser.RULE_joinRelation);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				{
					this.state = 1476;
					this.joinType();
				}
				this.state = 1477;
				this.match(DorisParser.JOIN);
				this.state = 1479;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 6 || _la === 512) {
					{
						this.state = 1478;
						this.distributeType();
					}
				}
				this.state = 1481;
				localContext._right = this.relationPrimary();
				this.state = 1483;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context)) {
					case 1:
						{
							this.state = 1482;
							this.joinCriteria();
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	distributeType() {
		let localContext = new DistributeTypeContext(this.context, this.state);
		this.enterRule(localContext, 110, DorisParser.RULE_distributeType);
		try {
			this.state = 1493;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_BRACKET:
					localContext = new BracketDistributeTypeContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1485;
						this.match(DorisParser.LEFT_BRACKET);
						this.state = 1486;
						this.identifier();
						this.state = 1487;
						this.match(DorisParser.RIGHT_BRACKET);
					}
					break;
				case DorisParser.HINT_START:
					localContext = new CommentDistributeTypeContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1489;
						this.match(DorisParser.HINT_START);
						this.state = 1490;
						this.identifier();
						this.state = 1491;
						this.match(DorisParser.HINT_END);
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	relationHint() {
		let localContext = new RelationHintContext(this.context, this.state);
		this.enterRule(localContext, 112, DorisParser.RULE_relationHint);
		let _la;
		try {
			this.state = 1517;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_BRACKET:
					localContext = new BracketRelationHintContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1495;
						this.match(DorisParser.LEFT_BRACKET);
						this.state = 1496;
						this.identifier();
						this.state = 1501;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 1497;
									this.match(DorisParser.COMMA);
									this.state = 1498;
									this.identifier();
								}
							}
							this.state = 1503;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 1504;
						this.match(DorisParser.RIGHT_BRACKET);
					}
					break;
				case DorisParser.HINT_START:
					localContext = new CommentRelationHintContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1506;
						this.match(DorisParser.HINT_START);
						this.state = 1507;
						this.identifier();
						this.state = 1512;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 1508;
									this.match(DorisParser.COMMA);
									this.state = 1509;
									this.identifier();
								}
							}
							this.state = 1514;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 1515;
						this.match(DorisParser.HINT_END);
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	aggClause() {
		let localContext = new AggClauseContext(this.context, this.state);
		this.enterRule(localContext, 114, DorisParser.RULE_aggClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1519;
				this.match(DorisParser.GROUP);
				this.state = 1520;
				this.match(DorisParser.BY);
				this.state = 1521;
				this.groupingElement();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	groupingElement() {
		let localContext = new GroupingElementContext(this.context, this.state);
		this.enterRule(localContext, 116, DorisParser.RULE_groupingElement);
		let _la;
		try {
			let alternative;
			this.state = 1570;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1523;
						this.match(DorisParser.ROLLUP);
						this.state = 1524;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1533;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (
							((_la & ~0x1f) === 0 && ((1 << _la) & 3427251012) !== 0) ||
							(((_la - 33) & ~0x1f) === 0 &&
								((1 << (_la - 33)) & 4009753405) !== 0) ||
							(((_la - 65) & ~0x1f) === 0 &&
								((1 << (_la - 65)) & 3204443871) !== 0) ||
							(((_la - 97) & ~0x1f) === 0 &&
								((1 << (_la - 97)) & 2147481585) !== 0) ||
							(((_la - 130) & ~0x1f) === 0 &&
								((1 << (_la - 130)) & 3755238181) !== 0) ||
							(((_la - 162) & ~0x1f) === 0 &&
								((1 << (_la - 162)) & 2785541685) !== 0) ||
							(((_la - 195) & ~0x1f) === 0 &&
								((1 << (_la - 195)) & 92265939) !== 0) ||
							(((_la - 230) & ~0x1f) === 0 &&
								((1 << (_la - 230)) & 1876226013) !== 0) ||
							(((_la - 263) & ~0x1f) === 0 &&
								((1 << (_la - 263)) & 2130443711) !== 0) ||
							(((_la - 295) & ~0x1f) === 0 &&
								((1 << (_la - 295)) & 4274056703) !== 0) ||
							(((_la - 327) & ~0x1f) === 0 &&
								((1 << (_la - 327)) & 3288240127) !== 0) ||
							(((_la - 359) & ~0x1f) === 0 &&
								((1 << (_la - 359)) & 3463969675) !== 0) ||
							(((_la - 391) & ~0x1f) === 0 &&
								((1 << (_la - 391)) & 4292776855) !== 0) ||
							(((_la - 423) & ~0x1f) === 0 &&
								((1 << (_la - 423)) & 4202393863) !== 0) ||
							(((_la - 455) & ~0x1f) === 0 &&
								((1 << (_la - 455)) & 2281612565) !== 0) ||
							(((_la - 490) & ~0x1f) === 0 &&
								((1 << (_la - 490)) & 2264999681) !== 0) ||
							(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
						) {
							{
								this.state = 1525;
								this.expression();
								this.state = 1530;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								while (_la === 4) {
									{
										{
											this.state = 1526;
											this.match(DorisParser.COMMA);
											this.state = 1527;
											this.expression();
										}
									}
									this.state = 1532;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
								}
							}
						}
						this.state = 1535;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1536;
						this.match(DorisParser.CUBE);
						this.state = 1537;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1546;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (
							((_la & ~0x1f) === 0 && ((1 << _la) & 3427251012) !== 0) ||
							(((_la - 33) & ~0x1f) === 0 &&
								((1 << (_la - 33)) & 4009753405) !== 0) ||
							(((_la - 65) & ~0x1f) === 0 &&
								((1 << (_la - 65)) & 3204443871) !== 0) ||
							(((_la - 97) & ~0x1f) === 0 &&
								((1 << (_la - 97)) & 2147481585) !== 0) ||
							(((_la - 130) & ~0x1f) === 0 &&
								((1 << (_la - 130)) & 3755238181) !== 0) ||
							(((_la - 162) & ~0x1f) === 0 &&
								((1 << (_la - 162)) & 2785541685) !== 0) ||
							(((_la - 195) & ~0x1f) === 0 &&
								((1 << (_la - 195)) & 92265939) !== 0) ||
							(((_la - 230) & ~0x1f) === 0 &&
								((1 << (_la - 230)) & 1876226013) !== 0) ||
							(((_la - 263) & ~0x1f) === 0 &&
								((1 << (_la - 263)) & 2130443711) !== 0) ||
							(((_la - 295) & ~0x1f) === 0 &&
								((1 << (_la - 295)) & 4274056703) !== 0) ||
							(((_la - 327) & ~0x1f) === 0 &&
								((1 << (_la - 327)) & 3288240127) !== 0) ||
							(((_la - 359) & ~0x1f) === 0 &&
								((1 << (_la - 359)) & 3463969675) !== 0) ||
							(((_la - 391) & ~0x1f) === 0 &&
								((1 << (_la - 391)) & 4292776855) !== 0) ||
							(((_la - 423) & ~0x1f) === 0 &&
								((1 << (_la - 423)) & 4202393863) !== 0) ||
							(((_la - 455) & ~0x1f) === 0 &&
								((1 << (_la - 455)) & 2281612565) !== 0) ||
							(((_la - 490) & ~0x1f) === 0 &&
								((1 << (_la - 490)) & 2264999681) !== 0) ||
							(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
						) {
							{
								this.state = 1538;
								this.expression();
								this.state = 1543;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								while (_la === 4) {
									{
										{
											this.state = 1539;
											this.match(DorisParser.COMMA);
											this.state = 1540;
											this.expression();
										}
									}
									this.state = 1545;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
								}
							}
						}
						this.state = 1548;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1549;
						this.match(DorisParser.GROUPING);
						this.state = 1550;
						this.match(DorisParser.SETS);
						this.state = 1551;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1552;
						this.groupingSet();
						this.state = 1557;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 1553;
									this.match(DorisParser.COMMA);
									this.state = 1554;
									this.groupingSet();
								}
							}
							this.state = 1559;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 1560;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 4:
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 1562;
						this.expression();
						this.state = 1567;
						this.errorHandler.sync(this);
						alternative = this.interpreter.adaptivePredict(
							this.tokenStream,
							201,
							this.context
						);
						while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
							if (alternative === 1) {
								{
									{
										this.state = 1563;
										this.match(DorisParser.COMMA);
										this.state = 1564;
										this.expression();
									}
								}
							}
							this.state = 1569;
							this.errorHandler.sync(this);
							alternative = this.interpreter.adaptivePredict(
								this.tokenStream,
								201,
								this.context
							);
						}
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	groupingSet() {
		let localContext = new GroupingSetContext(this.context, this.state);
		this.enterRule(localContext, 118, DorisParser.RULE_groupingSet);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1572;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1581;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (
					((_la & ~0x1f) === 0 && ((1 << _la) & 3427251012) !== 0) ||
					(((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4009753405) !== 0) ||
					(((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 3204443871) !== 0) ||
					(((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 2147481585) !== 0) ||
					(((_la - 130) & ~0x1f) === 0 && ((1 << (_la - 130)) & 3755238181) !== 0) ||
					(((_la - 162) & ~0x1f) === 0 && ((1 << (_la - 162)) & 2785541685) !== 0) ||
					(((_la - 195) & ~0x1f) === 0 && ((1 << (_la - 195)) & 92265939) !== 0) ||
					(((_la - 230) & ~0x1f) === 0 && ((1 << (_la - 230)) & 1876226013) !== 0) ||
					(((_la - 263) & ~0x1f) === 0 && ((1 << (_la - 263)) & 2130443711) !== 0) ||
					(((_la - 295) & ~0x1f) === 0 && ((1 << (_la - 295)) & 4274056703) !== 0) ||
					(((_la - 327) & ~0x1f) === 0 && ((1 << (_la - 327)) & 3288240127) !== 0) ||
					(((_la - 359) & ~0x1f) === 0 && ((1 << (_la - 359)) & 3463969675) !== 0) ||
					(((_la - 391) & ~0x1f) === 0 && ((1 << (_la - 391)) & 4292776855) !== 0) ||
					(((_la - 423) & ~0x1f) === 0 && ((1 << (_la - 423)) & 4202393863) !== 0) ||
					(((_la - 455) & ~0x1f) === 0 && ((1 << (_la - 455)) & 2281612565) !== 0) ||
					(((_la - 490) & ~0x1f) === 0 && ((1 << (_la - 490)) & 2264999681) !== 0) ||
					(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
				) {
					{
						this.state = 1573;
						this.expression();
						this.state = 1578;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 1574;
									this.match(DorisParser.COMMA);
									this.state = 1575;
									this.expression();
								}
							}
							this.state = 1580;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
					}
				}
				this.state = 1583;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	havingClause() {
		let localContext = new HavingClauseContext(this.context, this.state);
		this.enterRule(localContext, 120, DorisParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1585;
				this.match(DorisParser.HAVING);
				this.state = 1586;
				this.booleanExpression(0);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	selectHint() {
		let localContext = new SelectHintContext(this.context, this.state);
		this.enterRule(localContext, 122, DorisParser.RULE_selectHint);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1588;
				this.match(DorisParser.HINT_START);
				this.state = 1589;
				localContext._hintStatement = this.hintStatement();
				localContext._hintStatements.push(localContext._hintStatement);
				this.state = 1596;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (
					((_la & ~0x1f) === 0 && ((1 << _la) & 3427246864) !== 0) ||
					(((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 2399140157) !== 0) ||
					(((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 3204443871) !== 0) ||
					(((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 2147480561) !== 0) ||
					(((_la - 130) & ~0x1f) === 0 && ((1 << (_la - 130)) & 3755238181) !== 0) ||
					(((_la - 162) & ~0x1f) === 0 && ((1 << (_la - 162)) & 2785536549) !== 0) ||
					(((_la - 195) & ~0x1f) === 0 && ((1 << (_la - 195)) & 91217363) !== 0) ||
					(((_la - 232) & ~0x1f) === 0 && ((1 << (_la - 232)) & 2578783223) !== 0) ||
					(((_la - 264) & ~0x1f) === 0 && ((1 << (_la - 264)) & 3212705503) !== 0) ||
					(((_la - 296) & ~0x1f) === 0 && ((1 << (_la - 296)) & 4284511903) !== 0) ||
					(((_la - 328) & ~0x1f) === 0 && ((1 << (_la - 328)) & 3791603695) !== 0) ||
					(((_la - 360) & ~0x1f) === 0 && ((1 << (_la - 360)) & 3878419905) !== 0) ||
					(((_la - 392) & ~0x1f) === 0 && ((1 << (_la - 392)) & 4293872075) !== 0) ||
					(((_la - 424) & ~0x1f) === 0 && ((1 << (_la - 424)) & 3443374211) !== 0) ||
					(((_la - 457) & ~0x1f) === 0 && ((1 << (_la - 457)) & 570403141) !== 0) ||
					_la === 490 ||
					_la === 525 ||
					_la === 526
				) {
					{
						{
							this.state = 1591;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (_la === 4) {
								{
									this.state = 1590;
									this.match(DorisParser.COMMA);
								}
							}
							this.state = 1593;
							localContext._hintStatement = this.hintStatement();
							localContext._hintStatements.push(localContext._hintStatement);
						}
					}
					this.state = 1598;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 1599;
				this.match(DorisParser.HINT_END);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	hintStatement() {
		let localContext = new HintStatementContext(this.context, this.state);
		this.enterRule(localContext, 124, DorisParser.RULE_hintStatement);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1601;
				localContext._hintName = this.identifier();
				this.state = 1615;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 2) {
					{
						this.state = 1602;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1603;
						localContext._hintAssignment = this.hintAssignment();
						localContext._parameters.push(localContext._hintAssignment);
						this.state = 1610;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (
							((_la & ~0x1f) === 0 && ((1 << _la) & 3427246864) !== 0) ||
							(((_la - 33) & ~0x1f) === 0 &&
								((1 << (_la - 33)) & 2399140157) !== 0) ||
							(((_la - 65) & ~0x1f) === 0 &&
								((1 << (_la - 65)) & 3204443871) !== 0) ||
							(((_la - 97) & ~0x1f) === 0 &&
								((1 << (_la - 97)) & 2147480561) !== 0) ||
							(((_la - 130) & ~0x1f) === 0 &&
								((1 << (_la - 130)) & 3755238181) !== 0) ||
							(((_la - 162) & ~0x1f) === 0 &&
								((1 << (_la - 162)) & 2785536549) !== 0) ||
							(((_la - 195) & ~0x1f) === 0 &&
								((1 << (_la - 195)) & 91217363) !== 0) ||
							(((_la - 232) & ~0x1f) === 0 &&
								((1 << (_la - 232)) & 2578783223) !== 0) ||
							(((_la - 264) & ~0x1f) === 0 &&
								((1 << (_la - 264)) & 3212705503) !== 0) ||
							(((_la - 296) & ~0x1f) === 0 &&
								((1 << (_la - 296)) & 4284511903) !== 0) ||
							(((_la - 328) & ~0x1f) === 0 &&
								((1 << (_la - 328)) & 3791603695) !== 0) ||
							(((_la - 360) & ~0x1f) === 0 &&
								((1 << (_la - 360)) & 3878419905) !== 0) ||
							(((_la - 392) & ~0x1f) === 0 &&
								((1 << (_la - 392)) & 4293872075) !== 0) ||
							(((_la - 424) & ~0x1f) === 0 &&
								((1 << (_la - 424)) & 3443374211) !== 0) ||
							(((_la - 457) & ~0x1f) === 0 &&
								((1 << (_la - 457)) & 570403141) !== 0) ||
							(((_la - 490) & ~0x1f) === 0 &&
								((1 << (_la - 490)) & 201326593) !== 0) ||
							_la === 525 ||
							_la === 526
						) {
							{
								{
									this.state = 1605;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
									if (_la === 4) {
										{
											this.state = 1604;
											this.match(DorisParser.COMMA);
										}
									}
									this.state = 1607;
									localContext._hintAssignment = this.hintAssignment();
									localContext._parameters.push(localContext._hintAssignment);
								}
							}
							this.state = 1612;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 1613;
						this.match(DorisParser.RIGHT_PAREN);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	hintAssignment() {
		let localContext = new HintAssignmentContext(this.context, this.state);
		this.enterRule(localContext, 126, DorisParser.RULE_hintAssignment);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1617;
				localContext._key = this.identifierOrText();
				this.state = 1623;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 491) {
					{
						this.state = 1618;
						this.match(DorisParser.EQ);
						this.state = 1621;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 210, this.context)
						) {
							case 1:
								{
									this.state = 1619;
									localContext._constantValue = this.constant();
								}
								break;
							case 2:
								{
									this.state = 1620;
									localContext._identifierValue = this.identifier();
								}
								break;
						}
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	updateAssignment() {
		let localContext = new UpdateAssignmentContext(this.context, this.state);
		this.enterRule(localContext, 128, DorisParser.RULE_updateAssignment);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1625;
				localContext._col = this.multipartIdentifier();
				this.state = 1626;
				this.match(DorisParser.EQ);
				this.state = 1629;
				this.errorHandler.sync(this);
				switch (this.tokenStream.LA(1)) {
					case DorisParser.LEFT_PAREN:
					case DorisParser.LEFT_BRACKET:
					case DorisParser.LEFT_BRACE:
					case DorisParser.RIGHT_BRACE:
					case DorisParser.ADD:
					case DorisParser.ADDDATE:
					case DorisParser.AFTER:
					case DorisParser.AGG_STATE:
					case DorisParser.AGGREGATE:
					case DorisParser.ALIAS:
					case DorisParser.ANALYZED:
					case DorisParser.ARRAY:
					case DorisParser.ARRAY_RANGE:
					case DorisParser.AT:
					case DorisParser.AUTHORS:
					case DorisParser.AUTO_INCREMENT:
					case DorisParser.BACKENDS:
					case DorisParser.BACKUP:
					case DorisParser.BEGIN:
					case DorisParser.BELONG:
					case DorisParser.BIN:
					case DorisParser.BINARY:
					case DorisParser.BITAND:
					case DorisParser.BITMAP:
					case DorisParser.BITMAP_UNION:
					case DorisParser.BITOR:
					case DorisParser.BITXOR:
					case DorisParser.BLOB:
					case DorisParser.BOOLEAN:
					case DorisParser.BRIEF:
					case DorisParser.BROKER:
					case DorisParser.BUCKETS:
					case DorisParser.BUILD:
					case DorisParser.BUILTIN:
					case DorisParser.BULK:
					case DorisParser.CACHE:
					case DorisParser.CACHED:
					case DorisParser.CALL:
					case DorisParser.CASE:
					case DorisParser.CAST:
					case DorisParser.CATALOG:
					case DorisParser.CATALOGS:
					case DorisParser.CHAIN:
					case DorisParser.CHAR:
					case DorisParser.CHARSET:
					case DorisParser.CHECK:
					case DorisParser.CLUSTER:
					case DorisParser.CLUSTERS:
					case DorisParser.COLLATION:
					case DorisParser.COLLECT:
					case DorisParser.COLOCATE:
					case DorisParser.COLUMNS:
					case DorisParser.COMMENT:
					case DorisParser.COMMIT:
					case DorisParser.COMMITTED:
					case DorisParser.COMPACT:
					case DorisParser.COMPLETE:
					case DorisParser.COMPRESS_TYPE:
					case DorisParser.CONFIG:
					case DorisParser.CONNECTION:
					case DorisParser.CONNECTION_ID:
					case DorisParser.CONSISTENT:
					case DorisParser.CONSTRAINTS:
					case DorisParser.CONVERT:
					case DorisParser.CONVERT_LSC:
					case DorisParser.COPY:
					case DorisParser.COUNT:
					case DorisParser.CREATION:
					case DorisParser.CRON:
					case DorisParser.CURRENT_CATALOG:
					case DorisParser.CURRENT_DATE:
					case DorisParser.CURRENT_TIME:
					case DorisParser.CURRENT_TIMESTAMP:
					case DorisParser.CURRENT_USER:
					case DorisParser.DATA:
					case DorisParser.DATABASE:
					case DorisParser.DATE:
					case DorisParser.DATE_ADD:
					case DorisParser.DATE_CEIL:
					case DorisParser.DATE_DIFF:
					case DorisParser.DATE_FLOOR:
					case DorisParser.DATE_SUB:
					case DorisParser.DATEADD:
					case DorisParser.DATEDIFF:
					case DorisParser.DATETIME:
					case DorisParser.DATETIMEV2:
					case DorisParser.DATEV2:
					case DorisParser.DATETIMEV1:
					case DorisParser.DATEV1:
					case DorisParser.DAY:
					case DorisParser.DAYS_ADD:
					case DorisParser.DAYS_SUB:
					case DorisParser.DECIMAL:
					case DorisParser.DECIMALV2:
					case DorisParser.DECIMALV3:
					case DorisParser.DEFERRED:
					case DorisParser.DEMAND:
					case DorisParser.DIAGNOSE:
					case DorisParser.DISTINCTPC:
					case DorisParser.DISTINCTPCSA:
					case DorisParser.DO:
					case DorisParser.DORIS_INTERNAL_TABLE_ID:
					case DorisParser.DUAL:
					case DorisParser.DYNAMIC:
					case DorisParser.ENABLE:
					case DorisParser.ENCRYPTKEY:
					case DorisParser.ENCRYPTKEYS:
					case DorisParser.END:
					case DorisParser.ENDS:
					case DorisParser.ENGINE:
					case DorisParser.ENGINES:
					case DorisParser.ERRORS:
					case DorisParser.EVENTS:
					case DorisParser.EVERY:
					case DorisParser.EXCLUDE:
					case DorisParser.EXISTS:
					case DorisParser.EXPIRED:
					case DorisParser.EXTERNAL:
					case DorisParser.EXTRACT:
					case DorisParser.FAILED_LOGIN_ATTEMPTS:
					case DorisParser.FALSE:
					case DorisParser.FAST:
					case DorisParser.FEATURE:
					case DorisParser.FIELDS:
					case DorisParser.FILE:
					case DorisParser.FILTER:
					case DorisParser.FIRST:
					case DorisParser.FORMAT:
					case DorisParser.FREE:
					case DorisParser.FRONTENDS:
					case DorisParser.FUNCTION:
					case DorisParser.GENERIC:
					case DorisParser.GLOBAL:
					case DorisParser.GRAPH:
					case DorisParser.GROUPING:
					case DorisParser.GROUPS:
					case DorisParser.HASH:
					case DorisParser.HDFS:
					case DorisParser.HELP:
					case DorisParser.HISTOGRAM:
					case DorisParser.HLL_UNION:
					case DorisParser.HOSTNAME:
					case DorisParser.HOTSPOT:
					case DorisParser.HOUR:
					case DorisParser.HUB:
					case DorisParser.IDENTIFIED:
					case DorisParser.IF:
					case DorisParser.IGNORE:
					case DorisParser.IMMEDIATE:
					case DorisParser.INCREMENTAL:
					case DorisParser.INDEXES:
					case DorisParser.INTERVAL:
					case DorisParser.INVERTED:
					case DorisParser.IPV4:
					case DorisParser.IPV6:
					case DorisParser.IS_NOT_NULL_PRED:
					case DorisParser.IS_NULL_PRED:
					case DorisParser.ISNULL:
					case DorisParser.ISOLATION:
					case DorisParser.JOB:
					case DorisParser.JOBS:
					case DorisParser.JSON:
					case DorisParser.JSONB:
					case DorisParser.KEY:
					case DorisParser.LABEL:
					case DorisParser.LAST:
					case DorisParser.LDAP:
					case DorisParser.LDAP_ADMIN_PASSWORD:
					case DorisParser.LEFT:
					case DorisParser.LESS:
					case DorisParser.LEVEL:
					case DorisParser.LIKE:
					case DorisParser.LINES:
					case DorisParser.LINK:
					case DorisParser.LOCAL:
					case DorisParser.LOCALTIME:
					case DorisParser.LOCALTIMESTAMP:
					case DorisParser.LOCATION:
					case DorisParser.LOCK:
					case DorisParser.LOGICAL:
					case DorisParser.MANUAL:
					case DorisParser.MAP:
					case DorisParser.MATCH_ALL:
					case DorisParser.MATCH_ANY:
					case DorisParser.MATCH_PHRASE:
					case DorisParser.MATCH_PHRASE_EDGE:
					case DorisParser.MATCH_PHRASE_PREFIX:
					case DorisParser.MATCH_REGEXP:
					case DorisParser.MATERIALIZED:
					case DorisParser.MAX:
					case DorisParser.MEMO:
					case DorisParser.MERGE:
					case DorisParser.MIGRATE:
					case DorisParser.MIGRATIONS:
					case DorisParser.MIN:
					case DorisParser.MINUTE:
					case DorisParser.MODIFY:
					case DorisParser.MONTH:
					case DorisParser.MTMV:
					case DorisParser.NAME:
					case DorisParser.NAMES:
					case DorisParser.NEGATIVE:
					case DorisParser.NEVER:
					case DorisParser.NEXT:
					case DorisParser.NGRAM_BF:
					case DorisParser.NO:
					case DorisParser.NON_NULLABLE:
					case DorisParser.NOT:
					case DorisParser.NULL:
					case DorisParser.NULLS:
					case DorisParser.OF:
					case DorisParser.OFFSET:
					case DorisParser.ONLY:
					case DorisParser.OPEN:
					case DorisParser.OPTIMIZED:
					case DorisParser.PARAMETER:
					case DorisParser.PARSED:
					case DorisParser.PARTITIONS:
					case DorisParser.PASSWORD:
					case DorisParser.PASSWORD_EXPIRE:
					case DorisParser.PASSWORD_HISTORY:
					case DorisParser.PASSWORD_LOCK_TIME:
					case DorisParser.PASSWORD_REUSE:
					case DorisParser.PATH:
					case DorisParser.PAUSE:
					case DorisParser.PERCENT:
					case DorisParser.PERIOD:
					case DorisParser.PERMISSIVE:
					case DorisParser.PHYSICAL:
					case DorisParser.PLACEHOLDER:
					case DorisParser.PLAN:
					case DorisParser.PRIVILEGES:
					case DorisParser.PROCESS:
					case DorisParser.PLUGIN:
					case DorisParser.PLUGINS:
					case DorisParser.POLICY:
					case DorisParser.PROC:
					case DorisParser.PROCESSLIST:
					case DorisParser.PROFILE:
					case DorisParser.PROPERTIES:
					case DorisParser.PROPERTY:
					case DorisParser.QUANTILE_STATE:
					case DorisParser.QUANTILE_UNION:
					case DorisParser.QUERY:
					case DorisParser.QUOTA:
					case DorisParser.RANDOM:
					case DorisParser.RECENT:
					case DorisParser.RECOVER:
					case DorisParser.RECYCLE:
					case DorisParser.REFRESH:
					case DorisParser.REGEXP:
					case DorisParser.REPEATABLE:
					case DorisParser.REPLACE:
					case DorisParser.REPLACE_IF_NOT_NULL:
					case DorisParser.REPOSITORIES:
					case DorisParser.REPOSITORY:
					case DorisParser.RESOURCE:
					case DorisParser.RESOURCES:
					case DorisParser.RESTORE:
					case DorisParser.RESTRICTIVE:
					case DorisParser.RESUME:
					case DorisParser.RETURNS:
					case DorisParser.REWRITTEN:
					case DorisParser.RIGHT:
					case DorisParser.RLIKE:
					case DorisParser.ROLLBACK:
					case DorisParser.ROLLUP:
					case DorisParser.ROUTINE:
					case DorisParser.S3:
					case DorisParser.SAMPLE:
					case DorisParser.SCHEDULE:
					case DorisParser.SCHEDULER:
					case DorisParser.SCHEMA:
					case DorisParser.SECOND:
					case DorisParser.SEQUENCE:
					case DorisParser.SERIALIZABLE:
					case DorisParser.SESSION:
					case DorisParser.SHAPE:
					case DorisParser.SKEW:
					case DorisParser.SNAPSHOT:
					case DorisParser.SONAME:
					case DorisParser.SPLIT:
					case DorisParser.SQL:
					case DorisParser.STAGES:
					case DorisParser.START:
					case DorisParser.STARTS:
					case DorisParser.STATS:
					case DorisParser.STATUS:
					case DorisParser.STOP:
					case DorisParser.STORAGE:
					case DorisParser.STREAM:
					case DorisParser.STREAMING:
					case DorisParser.STRING:
					case DorisParser.STRUCT:
					case DorisParser.SUBDATE:
					case DorisParser.SUM:
					case DorisParser.TABLES:
					case DorisParser.TASK:
					case DorisParser.TASKS:
					case DorisParser.TEMPORARY:
					case DorisParser.TEXT:
					case DorisParser.THAN:
					case DorisParser.TIME:
					case DorisParser.TIMESTAMP:
					case DorisParser.TIMESTAMPADD:
					case DorisParser.TIMESTAMPDIFF:
					case DorisParser.TRANSACTION:
					case DorisParser.TREE:
					case DorisParser.TRIGGERS:
					case DorisParser.TRIM:
					case DorisParser.TRUE:
					case DorisParser.TRUNCATE:
					case DorisParser.TYPE:
					case DorisParser.TYPES:
					case DorisParser.UNCOMMITTED:
					case DorisParser.UNLOCK:
					case DorisParser.UP:
					case DorisParser.USER:
					case DorisParser.VALUE:
					case DorisParser.VARCHAR:
					case DorisParser.VARIABLES:
					case DorisParser.VARIANT:
					case DorisParser.VAULT:
					case DorisParser.VERBOSE:
					case DorisParser.VERSION:
					case DorisParser.VIEW:
					case DorisParser.WARM:
					case DorisParser.WARNINGS:
					case DorisParser.WEEK:
					case DorisParser.WORK:
					case DorisParser.YEAR:
					case DorisParser.PLUS:
					case DorisParser.SUBTRACT:
					case DorisParser.ASTERISK:
					case DorisParser.TILDE:
					case DorisParser.LOGICALNOT:
					case DorisParser.ATSIGN:
					case DorisParser.DOUBLEATSIGN:
					case DorisParser.STRING_LITERAL:
					case DorisParser.INTEGER_VALUE:
					case DorisParser.EXPONENT_VALUE:
					case DorisParser.DECIMAL_VALUE:
					case DorisParser.IDENTIFIER:
					case DorisParser.BACKQUOTED_IDENTIFIER:
						{
							this.state = 1627;
							this.expression();
						}
						break;
					case DorisParser.DEFAULT:
						{
							this.state = 1628;
							this.match(DorisParser.DEFAULT);
						}
						break;
					default:
						throw new antlr.NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	updateAssignmentSeq() {
		let localContext = new UpdateAssignmentSeqContext(this.context, this.state);
		this.enterRule(localContext, 130, DorisParser.RULE_updateAssignmentSeq);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1631;
				localContext._updateAssignment = this.updateAssignment();
				localContext._assignments.push(localContext._updateAssignment);
				this.state = 1636;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1632;
							this.match(DorisParser.COMMA);
							this.state = 1633;
							localContext._updateAssignment = this.updateAssignment();
							localContext._assignments.push(localContext._updateAssignment);
						}
					}
					this.state = 1638;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	lateralView() {
		let localContext = new LateralViewContext(this.context, this.state);
		this.enterRule(localContext, 132, DorisParser.RULE_lateralView);
		let _la;
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1639;
				this.match(DorisParser.LATERAL);
				this.state = 1640;
				this.match(DorisParser.VIEW);
				this.state = 1641;
				localContext._functionName = this.identifier();
				this.state = 1642;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1651;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (
					((_la & ~0x1f) === 0 && ((1 << _la) & 3427251012) !== 0) ||
					(((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4009753405) !== 0) ||
					(((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 3204443871) !== 0) ||
					(((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 2147481585) !== 0) ||
					(((_la - 130) & ~0x1f) === 0 && ((1 << (_la - 130)) & 3755238181) !== 0) ||
					(((_la - 162) & ~0x1f) === 0 && ((1 << (_la - 162)) & 2785541685) !== 0) ||
					(((_la - 195) & ~0x1f) === 0 && ((1 << (_la - 195)) & 92265939) !== 0) ||
					(((_la - 230) & ~0x1f) === 0 && ((1 << (_la - 230)) & 1876226013) !== 0) ||
					(((_la - 263) & ~0x1f) === 0 && ((1 << (_la - 263)) & 2130443711) !== 0) ||
					(((_la - 295) & ~0x1f) === 0 && ((1 << (_la - 295)) & 4274056703) !== 0) ||
					(((_la - 327) & ~0x1f) === 0 && ((1 << (_la - 327)) & 3288240127) !== 0) ||
					(((_la - 359) & ~0x1f) === 0 && ((1 << (_la - 359)) & 3463969675) !== 0) ||
					(((_la - 391) & ~0x1f) === 0 && ((1 << (_la - 391)) & 4292776855) !== 0) ||
					(((_la - 423) & ~0x1f) === 0 && ((1 << (_la - 423)) & 4202393863) !== 0) ||
					(((_la - 455) & ~0x1f) === 0 && ((1 << (_la - 455)) & 2281612565) !== 0) ||
					(((_la - 490) & ~0x1f) === 0 && ((1 << (_la - 490)) & 2264999681) !== 0) ||
					(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
				) {
					{
						this.state = 1643;
						this.expression();
						this.state = 1648;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 1644;
									this.match(DorisParser.COMMA);
									this.state = 1645;
									this.expression();
								}
							}
							this.state = 1650;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
					}
				}
				this.state = 1653;
				this.match(DorisParser.RIGHT_PAREN);
				this.state = 1654;
				localContext._tableName = this.identifier();
				this.state = 1655;
				this.match(DorisParser.AS);
				this.state = 1656;
				localContext._identifier = this.identifier();
				localContext._columnNames.push(localContext._identifier);
				this.state = 1661;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 216, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1657;
								this.match(DorisParser.COMMA);
								this.state = 1658;
								localContext._identifier = this.identifier();
								localContext._columnNames.push(localContext._identifier);
							}
						}
					}
					this.state = 1663;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						216,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	queryOrganization() {
		let localContext = new QueryOrganizationContext(this.context, this.state);
		this.enterRule(localContext, 134, DorisParser.RULE_queryOrganization);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1665;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 217, this.context)) {
					case 1:
						{
							this.state = 1664;
							this.sortClause();
						}
						break;
				}
				this.state = 1668;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context)) {
					case 1:
						{
							this.state = 1667;
							this.limitClause();
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	sortClause() {
		let localContext = new SortClauseContext(this.context, this.state);
		this.enterRule(localContext, 136, DorisParser.RULE_sortClause);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1670;
				this.match(DorisParser.ORDER);
				this.state = 1671;
				this.match(DorisParser.BY);
				this.state = 1672;
				this.sortItem();
				this.state = 1677;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1673;
								this.match(DorisParser.COMMA);
								this.state = 1674;
								this.sortItem();
							}
						}
					}
					this.state = 1679;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						219,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	sortItem() {
		let localContext = new SortItemContext(this.context, this.state);
		this.enterRule(localContext, 138, DorisParser.RULE_sortItem);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1680;
				this.expression();
				this.state = 1682;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context)) {
					case 1:
						{
							this.state = 1681;
							localContext._ordering = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(_la === 29 || _la === 133)) {
								localContext._ordering = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
						}
						break;
				}
				this.state = 1686;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 221, this.context)) {
					case 1:
						{
							this.state = 1684;
							this.match(DorisParser.NULLS);
							this.state = 1685;
							_la = this.tokenStream.LA(1);
							if (!(_la === 180 || _la === 250)) {
								this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	limitClause() {
		let localContext = new LimitClauseContext(this.context, this.state);
		this.enterRule(localContext, 140, DorisParser.RULE_limitClause);
		try {
			this.state = 1698;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 222, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						{
							this.state = 1688;
							this.match(DorisParser.LIMIT);
							this.state = 1689;
							localContext._limit = this.match(DorisParser.INTEGER_VALUE);
						}
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						{
							this.state = 1690;
							this.match(DorisParser.LIMIT);
							this.state = 1691;
							localContext._limit = this.match(DorisParser.INTEGER_VALUE);
							this.state = 1692;
							this.match(DorisParser.OFFSET);
							this.state = 1693;
							localContext._offset = this.match(DorisParser.INTEGER_VALUE);
						}
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						{
							this.state = 1694;
							this.match(DorisParser.LIMIT);
							this.state = 1695;
							localContext._offset = this.match(DorisParser.INTEGER_VALUE);
							this.state = 1696;
							this.match(DorisParser.COMMA);
							this.state = 1697;
							localContext._limit = this.match(DorisParser.INTEGER_VALUE);
						}
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	partitionClause() {
		let localContext = new PartitionClauseContext(this.context, this.state);
		this.enterRule(localContext, 142, DorisParser.RULE_partitionClause);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1700;
				this.match(DorisParser.PARTITION);
				this.state = 1701;
				this.match(DorisParser.BY);
				this.state = 1702;
				this.expression();
				this.state = 1707;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1703;
							this.match(DorisParser.COMMA);
							this.state = 1704;
							this.expression();
						}
					}
					this.state = 1709;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	joinType() {
		let localContext = new JoinTypeContext(this.context, this.state);
		this.enterRule(localContext, 144, DorisParser.RULE_joinType);
		let _la;
		try {
			this.state = 1734;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 228, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1711;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 223) {
							{
								this.state = 1710;
								this.match(DorisParser.INNER);
							}
						}
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1713;
						this.match(DorisParser.CROSS);
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1714;
						this.match(DorisParser.LEFT);
						this.state = 1716;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 313) {
							{
								this.state = 1715;
								this.match(DorisParser.OUTER);
							}
						}
					}
					break;
				case 4:
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 1718;
						this.match(DorisParser.RIGHT);
						this.state = 1720;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 313) {
							{
								this.state = 1719;
								this.match(DorisParser.OUTER);
							}
						}
					}
					break;
				case 5:
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 1722;
						this.match(DorisParser.FULL);
						this.state = 1724;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 313) {
							{
								this.state = 1723;
								this.match(DorisParser.OUTER);
							}
						}
					}
					break;
				case 6:
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 1726;
						this.match(DorisParser.LEFT);
						this.state = 1727;
						this.match(DorisParser.SEMI);
					}
					break;
				case 7:
					this.enterOuterAlt(localContext, 7);
					{
						this.state = 1728;
						this.match(DorisParser.RIGHT);
						this.state = 1729;
						this.match(DorisParser.SEMI);
					}
					break;
				case 8:
					this.enterOuterAlt(localContext, 8);
					{
						this.state = 1730;
						this.match(DorisParser.LEFT);
						this.state = 1731;
						this.match(DorisParser.ANTI);
					}
					break;
				case 9:
					this.enterOuterAlt(localContext, 9);
					{
						this.state = 1732;
						this.match(DorisParser.RIGHT);
						this.state = 1733;
						this.match(DorisParser.ANTI);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	joinCriteria() {
		let localContext = new JoinCriteriaContext(this.context, this.state);
		this.enterRule(localContext, 146, DorisParser.RULE_joinCriteria);
		try {
			this.state = 1740;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.ON:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1736;
						this.match(DorisParser.ON);
						this.state = 1737;
						this.booleanExpression(0);
					}
					break;
				case DorisParser.USING:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1738;
						this.match(DorisParser.USING);
						this.state = 1739;
						this.identifierList();
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	identifierList() {
		let localContext = new IdentifierListContext(this.context, this.state);
		this.enterRule(localContext, 148, DorisParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1742;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1743;
				this.identifierSeq();
				this.state = 1744;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	identifierSeq() {
		let localContext = new IdentifierSeqContext(this.context, this.state);
		this.enterRule(localContext, 150, DorisParser.RULE_identifierSeq);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1746;
				localContext._errorCapturingIdentifier = this.errorCapturingIdentifier();
				localContext._ident.push(localContext._errorCapturingIdentifier);
				this.state = 1751;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1747;
							this.match(DorisParser.COMMA);
							this.state = 1748;
							localContext._errorCapturingIdentifier =
								this.errorCapturingIdentifier();
							localContext._ident.push(localContext._errorCapturingIdentifier);
						}
					}
					this.state = 1753;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	optScanParams() {
		let localContext = new OptScanParamsContext(this.context, this.state);
		this.enterRule(localContext, 152, DorisParser.RULE_optScanParams);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1754;
				this.match(DorisParser.ATSIGN);
				this.state = 1755;
				localContext._funcName = this.identifier();
				this.state = 1756;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1758;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (
					((_la & ~0x1f) === 0 && ((1 << _la) & 3427246912) !== 0) ||
					(((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 2399140669) !== 0) ||
					(((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 3204443871) !== 0) ||
					(((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 2147480561) !== 0) ||
					(((_la - 130) & ~0x1f) === 0 && ((1 << (_la - 130)) & 3755238181) !== 0) ||
					(((_la - 162) & ~0x1f) === 0 && ((1 << (_la - 162)) & 2785540645) !== 0) ||
					(((_la - 195) & ~0x1f) === 0 && ((1 << (_la - 195)) & 91217363) !== 0) ||
					(((_la - 232) & ~0x1f) === 0 && ((1 << (_la - 232)) & 2578783223) !== 0) ||
					(((_la - 264) & ~0x1f) === 0 && ((1 << (_la - 264)) & 3212705503) !== 0) ||
					(((_la - 296) & ~0x1f) === 0 && ((1 << (_la - 296)) & 4284511967) !== 0) ||
					(((_la - 328) & ~0x1f) === 0 && ((1 << (_la - 328)) & 3791603711) !== 0) ||
					(((_la - 360) & ~0x1f) === 0 && ((1 << (_la - 360)) & 3878419905) !== 0) ||
					(((_la - 392) & ~0x1f) === 0 && ((1 << (_la - 392)) & 4293872075) !== 0) ||
					(((_la - 424) & ~0x1f) === 0 && ((1 << (_la - 424)) & 3980245123) !== 0) ||
					(((_la - 457) & ~0x1f) === 0 && ((1 << (_la - 457)) & 570403141) !== 0) ||
					(((_la - 490) & ~0x1f) === 0 && ((1 << (_la - 490)) & 2214593025) !== 0) ||
					(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
				) {
					{
						this.state = 1757;
						localContext._properties = this.propertyItemList();
					}
				}
				this.state = 1760;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	relationPrimary() {
		let localContext = new RelationPrimaryContext(this.context, this.state);
		this.enterRule(localContext, 154, DorisParser.RULE_relationPrimary);
		let _la;
		try {
			let alternative;
			this.state = 1813;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context)) {
				case 1:
					localContext = new TableNameContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1762;
						this.multipartIdentifier();
						this.state = 1764;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 232, this.context)
						) {
							case 1:
								{
									this.state = 1763;
									this.optScanParams();
								}
								break;
						}
						this.state = 1767;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 233, this.context)
						) {
							case 1:
								{
									this.state = 1766;
									this.materializedViewName();
								}
								break;
						}
						this.state = 1770;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 234, this.context)
						) {
							case 1:
								{
									this.state = 1769;
									this.specifiedPartition();
								}
								break;
						}
						this.state = 1773;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 235, this.context)
						) {
							case 1:
								{
									this.state = 1772;
									this.tabletList();
								}
								break;
						}
						this.state = 1775;
						this.tableAlias();
						this.state = 1777;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 236, this.context)
						) {
							case 1:
								{
									this.state = 1776;
									this.sample();
								}
								break;
						}
						this.state = 1780;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 237, this.context)
						) {
							case 1:
								{
									this.state = 1779;
									this.tableSnapshot();
								}
								break;
						}
						this.state = 1783;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 238, this.context)
						) {
							case 1:
								{
									this.state = 1782;
									this.relationHint();
								}
								break;
						}
						this.state = 1788;
						this.errorHandler.sync(this);
						alternative = this.interpreter.adaptivePredict(
							this.tokenStream,
							239,
							this.context
						);
						while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
							if (alternative === 1) {
								{
									{
										this.state = 1785;
										this.lateralView();
									}
								}
							}
							this.state = 1790;
							this.errorHandler.sync(this);
							alternative = this.interpreter.adaptivePredict(
								this.tokenStream,
								239,
								this.context
							);
						}
					}
					break;
				case 2:
					localContext = new AliasedQueryContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1791;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1792;
						this.query();
						this.state = 1793;
						this.match(DorisParser.RIGHT_PAREN);
						this.state = 1794;
						this.tableAlias();
						this.state = 1798;
						this.errorHandler.sync(this);
						alternative = this.interpreter.adaptivePredict(
							this.tokenStream,
							240,
							this.context
						);
						while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
							if (alternative === 1) {
								{
									{
										this.state = 1795;
										this.lateralView();
									}
								}
							}
							this.state = 1800;
							this.errorHandler.sync(this);
							alternative = this.interpreter.adaptivePredict(
								this.tokenStream,
								240,
								this.context
							);
						}
					}
					break;
				case 3:
					localContext = new TableValuedFunctionContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 1801;
						localContext._tvfName = this.identifier();
						this.state = 1802;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1804;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (
							((_la & ~0x1f) === 0 && ((1 << _la) & 3427246912) !== 0) ||
							(((_la - 33) & ~0x1f) === 0 &&
								((1 << (_la - 33)) & 2399140669) !== 0) ||
							(((_la - 65) & ~0x1f) === 0 &&
								((1 << (_la - 65)) & 3204443871) !== 0) ||
							(((_la - 97) & ~0x1f) === 0 &&
								((1 << (_la - 97)) & 2147480561) !== 0) ||
							(((_la - 130) & ~0x1f) === 0 &&
								((1 << (_la - 130)) & 3755238181) !== 0) ||
							(((_la - 162) & ~0x1f) === 0 &&
								((1 << (_la - 162)) & 2785540645) !== 0) ||
							(((_la - 195) & ~0x1f) === 0 &&
								((1 << (_la - 195)) & 91217363) !== 0) ||
							(((_la - 232) & ~0x1f) === 0 &&
								((1 << (_la - 232)) & 2578783223) !== 0) ||
							(((_la - 264) & ~0x1f) === 0 &&
								((1 << (_la - 264)) & 3212705503) !== 0) ||
							(((_la - 296) & ~0x1f) === 0 &&
								((1 << (_la - 296)) & 4284511967) !== 0) ||
							(((_la - 328) & ~0x1f) === 0 &&
								((1 << (_la - 328)) & 3791603711) !== 0) ||
							(((_la - 360) & ~0x1f) === 0 &&
								((1 << (_la - 360)) & 3878419905) !== 0) ||
							(((_la - 392) & ~0x1f) === 0 &&
								((1 << (_la - 392)) & 4293872075) !== 0) ||
							(((_la - 424) & ~0x1f) === 0 &&
								((1 << (_la - 424)) & 3980245123) !== 0) ||
							(((_la - 457) & ~0x1f) === 0 &&
								((1 << (_la - 457)) & 570403141) !== 0) ||
							(((_la - 490) & ~0x1f) === 0 &&
								((1 << (_la - 490)) & 2214593025) !== 0) ||
							(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
						) {
							{
								this.state = 1803;
								localContext._properties = this.propertyItemList();
							}
						}
						this.state = 1806;
						this.match(DorisParser.RIGHT_PAREN);
						this.state = 1807;
						this.tableAlias();
					}
					break;
				case 4:
					localContext = new RelationListContext(localContext);
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 1809;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1810;
						this.relations();
						this.state = 1811;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	materializedViewName() {
		let localContext = new MaterializedViewNameContext(this.context, this.state);
		this.enterRule(localContext, 156, DorisParser.RULE_materializedViewName);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1815;
				this.match(DorisParser.INDEX);
				this.state = 1816;
				localContext._indexName = this.identifier();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	propertyClause() {
		let localContext = new PropertyClauseContext(this.context, this.state);
		this.enterRule(localContext, 158, DorisParser.RULE_propertyClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1818;
				this.match(DorisParser.PROPERTIES);
				this.state = 1819;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 1820;
				localContext._fileProperties = this.propertyItemList();
				this.state = 1821;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	propertyItemList() {
		let localContext = new PropertyItemListContext(this.context, this.state);
		this.enterRule(localContext, 160, DorisParser.RULE_propertyItemList);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1823;
				localContext._propertyItem = this.propertyItem();
				localContext._properties.push(localContext._propertyItem);
				this.state = 1828;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1824;
							this.match(DorisParser.COMMA);
							this.state = 1825;
							localContext._propertyItem = this.propertyItem();
							localContext._properties.push(localContext._propertyItem);
						}
					}
					this.state = 1830;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	propertyItem() {
		let localContext = new PropertyItemContext(this.context, this.state);
		this.enterRule(localContext, 162, DorisParser.RULE_propertyItem);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1831;
				localContext._key = this.propertyKey();
				this.state = 1832;
				this.match(DorisParser.EQ);
				this.state = 1833;
				localContext._value = this.propertyValue();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	propertyKey() {
		let localContext = new PropertyKeyContext(this.context, this.state);
		this.enterRule(localContext, 164, DorisParser.RULE_propertyKey);
		try {
			this.state = 1837;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1835;
						this.identifier();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1836;
						this.constant();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	propertyValue() {
		let localContext = new PropertyValueContext(this.context, this.state);
		this.enterRule(localContext, 166, DorisParser.RULE_propertyValue);
		try {
			this.state = 1841;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 1839;
						this.identifier();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 1840;
						this.constant();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	tableAlias() {
		let localContext = new TableAliasContext(this.context, this.state);
		this.enterRule(localContext, 168, DorisParser.RULE_tableAlias);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1850;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context)) {
					case 1:
						{
							this.state = 1844;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (_la === 28) {
								{
									this.state = 1843;
									this.match(DorisParser.AS);
								}
							}
							this.state = 1846;
							this.strictIdentifier();
							this.state = 1848;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									247,
									this.context
								)
							) {
								case 1:
									{
										this.state = 1847;
										this.identifierList();
									}
									break;
							}
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	multipartIdentifier() {
		let localContext = new MultipartIdentifierContext(this.context, this.state);
		this.enterRule(localContext, 170, DorisParser.RULE_multipartIdentifier);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1852;
				localContext._errorCapturingIdentifier = this.errorCapturingIdentifier();
				localContext._parts.push(localContext._errorCapturingIdentifier);
				this.state = 1857;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 249, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1853;
								this.match(DorisParser.DOT);
								this.state = 1854;
								localContext._errorCapturingIdentifier =
									this.errorCapturingIdentifier();
								localContext._parts.push(localContext._errorCapturingIdentifier);
							}
						}
					}
					this.state = 1859;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						249,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	simpleColumnDefs() {
		let localContext = new SimpleColumnDefsContext(this.context, this.state);
		this.enterRule(localContext, 172, DorisParser.RULE_simpleColumnDefs);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1860;
				localContext._simpleColumnDef = this.simpleColumnDef();
				localContext._cols.push(localContext._simpleColumnDef);
				this.state = 1865;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1861;
							this.match(DorisParser.COMMA);
							this.state = 1862;
							localContext._simpleColumnDef = this.simpleColumnDef();
							localContext._cols.push(localContext._simpleColumnDef);
						}
					}
					this.state = 1867;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	simpleColumnDef() {
		let localContext = new SimpleColumnDefContext(this.context, this.state);
		this.enterRule(localContext, 174, DorisParser.RULE_simpleColumnDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1868;
				localContext._colName = this.identifier();
				this.state = 1871;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 79) {
					{
						this.state = 1869;
						this.match(DorisParser.COMMENT);
						this.state = 1870;
						localContext._comment = this.match(DorisParser.STRING_LITERAL);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	columnDefs() {
		let localContext = new ColumnDefsContext(this.context, this.state);
		this.enterRule(localContext, 176, DorisParser.RULE_columnDefs);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1873;
				localContext._columnDef = this.columnDef();
				localContext._cols.push(localContext._columnDef);
				this.state = 1878;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 252, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1874;
								this.match(DorisParser.COMMA);
								this.state = 1875;
								localContext._columnDef = this.columnDef();
								localContext._cols.push(localContext._columnDef);
							}
						}
					}
					this.state = 1880;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						252,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	columnDef() {
		let localContext = new ColumnDefContext(this.context, this.state);
		this.enterRule(localContext, 178, DorisParser.RULE_columnDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1881;
				localContext._colName = this.identifier();
				this.state = 1882;
				localContext._type_ = this.dataType();
				this.state = 1884;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 245) {
					{
						this.state = 1883;
						this.match(DorisParser.KEY);
					}
				}
				this.state = 1887;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (
					_la === 46 ||
					_la === 195 ||
					_la === 209 ||
					_la === 280 ||
					_la === 286 ||
					(((_la - 349) & ~0x1f) === 0 && ((1 << (_la - 349)) & 786433) !== 0) ||
					_la === 425
				) {
					{
						this.state = 1886;
						localContext._aggType = this.aggTypeDef();
					}
				}
				this.state = 1893;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 301 || _la === 302) {
					{
						this.state = 1890;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 1889;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 1892;
						localContext._nullable = this.match(DorisParser.NULL);
					}
				}
				this.state = 1902;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 33) {
					{
						this.state = 1895;
						this.match(DorisParser.AUTO_INCREMENT);
						this.state = 1900;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 2) {
							{
								this.state = 1896;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 1897;
								localContext._autoIncInitValue = this.number_();
								this.state = 1898;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
					}
				}
				this.state = 1919;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 129) {
					{
						this.state = 1904;
						this.match(DorisParser.DEFAULT);
						this.state = 1917;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.NULL:
								{
									this.state = 1905;
									localContext._nullValue = this.match(DorisParser.NULL);
								}
								break;
							case DorisParser.INTEGER_VALUE:
								{
									this.state = 1906;
									this.match(DorisParser.INTEGER_VALUE);
								}
								break;
							case DorisParser.DECIMAL_VALUE:
								{
									this.state = 1907;
									this.match(DorisParser.DECIMAL_VALUE);
								}
								break;
							case DorisParser.STRING_LITERAL:
								{
									this.state = 1908;
									localContext._stringValue = this.match(
										DorisParser.STRING_LITERAL
									);
								}
								break;
							case DorisParser.CURRENT_DATE:
								{
									this.state = 1909;
									this.match(DorisParser.CURRENT_DATE);
								}
								break;
							case DorisParser.CURRENT_TIMESTAMP:
								{
									this.state = 1910;
									localContext._defaultTimestamp = this.match(
										DorisParser.CURRENT_TIMESTAMP
									);
									this.state = 1915;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
									if (_la === 2) {
										{
											this.state = 1911;
											this.match(DorisParser.LEFT_PAREN);
											this.state = 1912;
											localContext._defaultValuePrecision = this.number_();
											this.state = 1913;
											this.match(DorisParser.RIGHT_PAREN);
										}
									}
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
				}
				this.state = 1930;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 307) {
					{
						this.state = 1921;
						this.match(DorisParser.ON);
						this.state = 1922;
						this.match(DorisParser.UPDATE);
						this.state = 1923;
						this.match(DorisParser.CURRENT_TIMESTAMP);
						this.state = 1928;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 2) {
							{
								this.state = 1924;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 1925;
								localContext._onUpdateValuePrecision = this.number_();
								this.state = 1926;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
					}
				}
				this.state = 1934;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 79) {
					{
						this.state = 1932;
						this.match(DorisParser.COMMENT);
						this.state = 1933;
						localContext._comment = this.match(DorisParser.STRING_LITERAL);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	indexDefs() {
		let localContext = new IndexDefsContext(this.context, this.state);
		this.enterRule(localContext, 180, DorisParser.RULE_indexDefs);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1936;
				localContext._indexDef = this.indexDef();
				localContext._indexes.push(localContext._indexDef);
				this.state = 1941;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 265, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 1937;
								this.match(DorisParser.COMMA);
								this.state = 1938;
								localContext._indexDef = this.indexDef();
								localContext._indexes.push(localContext._indexDef);
							}
						}
					}
					this.state = 1943;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						265,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	indexDef() {
		let localContext = new IndexDefContext(this.context, this.state);
		this.enterRule(localContext, 182, DorisParser.RULE_indexDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1944;
				this.match(DorisParser.INDEX);
				this.state = 1945;
				localContext._indexName = this.identifier();
				this.state = 1946;
				localContext._cols = this.identifierList();
				this.state = 1949;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 469) {
					{
						this.state = 1947;
						this.match(DorisParser.USING);
						this.state = 1948;
						localContext._indexType = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(_la === 45 || _la === 232 || _la === 298)) {
							localContext._indexType = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
					}
				}
				this.state = 1956;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 346) {
					{
						this.state = 1951;
						this.match(DorisParser.PROPERTIES);
						this.state = 1952;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1953;
						localContext._properties = this.propertyItemList();
						this.state = 1954;
						this.match(DorisParser.RIGHT_PAREN);
					}
				}
				this.state = 1960;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 79) {
					{
						this.state = 1958;
						this.match(DorisParser.COMMENT);
						this.state = 1959;
						localContext._comment = this.match(DorisParser.STRING_LITERAL);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	partitionsDef() {
		let localContext = new PartitionsDefContext(this.context, this.state);
		this.enterRule(localContext, 184, DorisParser.RULE_partitionsDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1962;
				localContext._partitionDef = this.partitionDef();
				localContext._partitions.push(localContext._partitionDef);
				this.state = 1967;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 1963;
							this.match(DorisParser.COMMA);
							this.state = 1964;
							localContext._partitionDef = this.partitionDef();
							localContext._partitions.push(localContext._partitionDef);
						}
					}
					this.state = 1969;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	partitionDef() {
		let localContext = new PartitionDefContext(this.context, this.state);
		this.enterRule(localContext, 186, DorisParser.RULE_partitionDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1974;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 270, this.context)) {
					case 1:
						{
							this.state = 1970;
							this.lessThanPartitionDef();
						}
						break;
					case 2:
						{
							this.state = 1971;
							this.fixedPartitionDef();
						}
						break;
					case 3:
						{
							this.state = 1972;
							this.stepPartitionDef();
						}
						break;
					case 4:
						{
							this.state = 1973;
							this.inPartitionDef();
						}
						break;
				}
				this.state = 1980;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 2) {
					{
						this.state = 1976;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 1977;
						localContext._partitionProperties = this.propertyItemList();
						this.state = 1978;
						this.match(DorisParser.RIGHT_PAREN);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	lessThanPartitionDef() {
		let localContext = new LessThanPartitionDefContext(this.context, this.state);
		this.enterRule(localContext, 188, DorisParser.RULE_lessThanPartitionDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1982;
				this.match(DorisParser.PARTITION);
				this.state = 1986;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 215) {
					{
						this.state = 1983;
						this.match(DorisParser.IF);
						this.state = 1984;
						this.match(DorisParser.NOT);
						this.state = 1985;
						this.match(DorisParser.EXISTS);
					}
				}
				this.state = 1988;
				localContext._partitionName = this.identifier();
				this.state = 1989;
				this.match(DorisParser.VALUES);
				this.state = 1990;
				this.match(DorisParser.LESS);
				this.state = 1991;
				this.match(DorisParser.THAN);
				this.state = 1994;
				this.errorHandler.sync(this);
				switch (this.tokenStream.LA(1)) {
					case DorisParser.MAXVALUE:
						{
							this.state = 1992;
							this.match(DorisParser.MAXVALUE);
						}
						break;
					case DorisParser.LEFT_PAREN:
						{
							this.state = 1993;
							this.constantSeq();
						}
						break;
					default:
						throw new antlr.NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	fixedPartitionDef() {
		let localContext = new FixedPartitionDefContext(this.context, this.state);
		this.enterRule(localContext, 190, DorisParser.RULE_fixedPartitionDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 1996;
				this.match(DorisParser.PARTITION);
				this.state = 2000;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 215) {
					{
						this.state = 1997;
						this.match(DorisParser.IF);
						this.state = 1998;
						this.match(DorisParser.NOT);
						this.state = 1999;
						this.match(DorisParser.EXISTS);
					}
				}
				this.state = 2002;
				localContext._partitionName = this.identifier();
				this.state = 2003;
				this.match(DorisParser.VALUES);
				this.state = 2004;
				this.match(DorisParser.LEFT_BRACKET);
				this.state = 2005;
				localContext._lower = this.constantSeq();
				this.state = 2006;
				this.match(DorisParser.COMMA);
				this.state = 2007;
				localContext._upper = this.constantSeq();
				this.state = 2008;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	stepPartitionDef() {
		let localContext = new StepPartitionDefContext(this.context, this.state);
		this.enterRule(localContext, 192, DorisParser.RULE_stepPartitionDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2010;
				this.match(DorisParser.FROM);
				this.state = 2011;
				localContext._from_ = this.constantSeq();
				this.state = 2012;
				this.match(DorisParser.TO);
				this.state = 2013;
				localContext._to = this.constantSeq();
				this.state = 2014;
				this.match(DorisParser.INTERVAL);
				this.state = 2015;
				localContext._unitsAmount = this.match(DorisParser.INTEGER_VALUE);
				this.state = 2017;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (
					_la === 122 ||
					_la === 212 ||
					_la === 288 ||
					_la === 290 ||
					_la === 395 ||
					_la === 481 ||
					_la === 490
				) {
					{
						this.state = 2016;
						localContext._unit = this.datetimeUnit();
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	inPartitionDef() {
		let localContext = new InPartitionDefContext(this.context, this.state);
		this.enterRule(localContext, 194, DorisParser.RULE_inPartitionDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2019;
				this.match(DorisParser.PARTITION);
				this.state = 2023;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 215) {
					{
						this.state = 2020;
						this.match(DorisParser.IF);
						this.state = 2021;
						this.match(DorisParser.NOT);
						this.state = 2022;
						this.match(DorisParser.EXISTS);
					}
				}
				this.state = 2025;
				localContext._partitionName = this.identifier();
				this.state = 2042;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 471) {
					{
						this.state = 2026;
						this.match(DorisParser.VALUES);
						this.state = 2027;
						this.match(DorisParser.IN);
						this.state = 2040;
						this.errorHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this.tokenStream, 278, this.context)
						) {
							case 1:
								{
									{
										this.state = 2028;
										this.match(DorisParser.LEFT_PAREN);
										this.state = 2029;
										localContext._constantSeq = this.constantSeq();
										localContext._constantSeqs.push(localContext._constantSeq);
										this.state = 2034;
										this.errorHandler.sync(this);
										_la = this.tokenStream.LA(1);
										while (_la === 4) {
											{
												{
													this.state = 2030;
													this.match(DorisParser.COMMA);
													this.state = 2031;
													localContext._constantSeq = this.constantSeq();
													localContext._constantSeqs.push(
														localContext._constantSeq
													);
												}
											}
											this.state = 2036;
											this.errorHandler.sync(this);
											_la = this.tokenStream.LA(1);
										}
										this.state = 2037;
										this.match(DorisParser.RIGHT_PAREN);
									}
								}
								break;
							case 2:
								{
									this.state = 2039;
									localContext._constants = this.constantSeq();
								}
								break;
						}
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	constantSeq() {
		let localContext = new ConstantSeqContext(this.context, this.state);
		this.enterRule(localContext, 196, DorisParser.RULE_constantSeq);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2044;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 2045;
				localContext._partitionValueDef = this.partitionValueDef();
				localContext._values.push(localContext._partitionValueDef);
				this.state = 2050;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 2046;
							this.match(DorisParser.COMMA);
							this.state = 2047;
							localContext._partitionValueDef = this.partitionValueDef();
							localContext._values.push(localContext._partitionValueDef);
						}
					}
					this.state = 2052;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 2053;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	partitionValueDef() {
		let localContext = new PartitionValueDefContext(this.context, this.state);
		this.enterRule(localContext, 198, DorisParser.RULE_partitionValueDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2055;
				_la = this.tokenStream.LA(1);
				if (!(_la === 281 || _la === 302 || _la === 516 || _la === 521)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	rollupDefs() {
		let localContext = new RollupDefsContext(this.context, this.state);
		this.enterRule(localContext, 200, DorisParser.RULE_rollupDefs);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2057;
				localContext._rollupDef = this.rollupDef();
				localContext._rollups.push(localContext._rollupDef);
				this.state = 2062;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 2058;
							this.match(DorisParser.COMMA);
							this.state = 2059;
							localContext._rollupDef = this.rollupDef();
							localContext._rollups.push(localContext._rollupDef);
						}
					}
					this.state = 2064;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	rollupDef() {
		let localContext = new RollupDefContext(this.context, this.state);
		this.enterRule(localContext, 202, DorisParser.RULE_rollupDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2065;
				localContext._rollupName = this.identifier();
				this.state = 2066;
				localContext._rollupCols = this.identifierList();
				this.state = 2070;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 149) {
					{
						this.state = 2067;
						this.match(DorisParser.DUPLICATE);
						this.state = 2068;
						this.match(DorisParser.KEY);
						this.state = 2069;
						localContext._dupKeys = this.identifierList();
					}
				}
				this.state = 2073;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 346) {
					{
						this.state = 2072;
						localContext._properties = this.propertyClause();
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	aggTypeDef() {
		let localContext = new AggTypeDefContext(this.context, this.state);
		this.enterRule(localContext, 204, DorisParser.RULE_aggTypeDef);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2075;
				_la = this.tokenStream.LA(1);
				if (
					!(
						_la === 46 ||
						_la === 195 ||
						_la === 209 ||
						_la === 280 ||
						_la === 286 ||
						(((_la - 349) & ~0x1f) === 0 && ((1 << (_la - 349)) & 786433) !== 0) ||
						_la === 425
					)
				) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	tabletList() {
		let localContext = new TabletListContext(this.context, this.state);
		this.enterRule(localContext, 206, DorisParser.RULE_tabletList);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2077;
				this.match(DorisParser.TABLET);
				this.state = 2078;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 2079;
				localContext._INTEGER_VALUE = this.match(DorisParser.INTEGER_VALUE);
				localContext._tabletIdList.push(localContext._INTEGER_VALUE);
				this.state = 2084;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 2080;
							this.match(DorisParser.COMMA);
							this.state = 2081;
							localContext._INTEGER_VALUE = this.match(DorisParser.INTEGER_VALUE);
							localContext._tabletIdList.push(localContext._INTEGER_VALUE);
						}
					}
					this.state = 2086;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
				this.state = 2087;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	inlineTable() {
		let localContext = new InlineTableContext(this.context, this.state);
		this.enterRule(localContext, 208, DorisParser.RULE_inlineTable);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2089;
				this.match(DorisParser.VALUES);
				this.state = 2090;
				this.rowConstructor();
				this.state = 2095;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 285, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 2091;
								this.match(DorisParser.COMMA);
								this.state = 2092;
								this.rowConstructor();
							}
						}
					}
					this.state = 2097;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						285,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	namedExpression() {
		let localContext = new NamedExpressionContext(this.context, this.state);
		this.enterRule(localContext, 210, DorisParser.RULE_namedExpression);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2098;
				this.expression();
				this.state = 2103;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 287, this.context)) {
					case 1:
						{
							this.state = 2100;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (_la === 28) {
								{
									this.state = 2099;
									this.match(DorisParser.AS);
								}
							}
							{
								this.state = 2102;
								this.identifierOrText();
							}
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	namedExpressionSeq() {
		let localContext = new NamedExpressionSeqContext(this.context, this.state);
		this.enterRule(localContext, 212, DorisParser.RULE_namedExpressionSeq);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2105;
				this.namedExpression();
				this.state = 2110;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 288, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 2106;
								this.match(DorisParser.COMMA);
								this.state = 2107;
								this.namedExpression();
							}
						}
					}
					this.state = 2112;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						288,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	expression() {
		let localContext = new ExpressionContext(this.context, this.state);
		this.enterRule(localContext, 214, DorisParser.RULE_expression);
		try {
			this.state = 2115;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 289, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2113;
						this.booleanExpression(0);
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2114;
						this.lambdaExpression();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	lambdaExpression() {
		let localContext = new LambdaExpressionContext(this.context, this.state);
		this.enterRule(localContext, 216, DorisParser.RULE_lambdaExpression);
		let _la;
		try {
			this.state = 2133;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_BRACE:
				case DorisParser.RIGHT_BRACE:
				case DorisParser.ADDDATE:
				case DorisParser.AFTER:
				case DorisParser.AGG_STATE:
				case DorisParser.AGGREGATE:
				case DorisParser.ALIAS:
				case DorisParser.ANALYZED:
				case DorisParser.ARRAY:
				case DorisParser.ARRAY_RANGE:
				case DorisParser.AT:
				case DorisParser.AUTHORS:
				case DorisParser.AUTO_INCREMENT:
				case DorisParser.BACKENDS:
				case DorisParser.BACKUP:
				case DorisParser.BEGIN:
				case DorisParser.BELONG:
				case DorisParser.BIN:
				case DorisParser.BITAND:
				case DorisParser.BITMAP:
				case DorisParser.BITMAP_UNION:
				case DorisParser.BITOR:
				case DorisParser.BITXOR:
				case DorisParser.BLOB:
				case DorisParser.BOOLEAN:
				case DorisParser.BRIEF:
				case DorisParser.BROKER:
				case DorisParser.BUCKETS:
				case DorisParser.BUILD:
				case DorisParser.BUILTIN:
				case DorisParser.BULK:
				case DorisParser.CACHE:
				case DorisParser.CACHED:
				case DorisParser.CALL:
				case DorisParser.CATALOG:
				case DorisParser.CATALOGS:
				case DorisParser.CHAIN:
				case DorisParser.CHAR:
				case DorisParser.CHARSET:
				case DorisParser.CHECK:
				case DorisParser.CLUSTER:
				case DorisParser.CLUSTERS:
				case DorisParser.COLLATION:
				case DorisParser.COLLECT:
				case DorisParser.COLOCATE:
				case DorisParser.COLUMNS:
				case DorisParser.COMMENT:
				case DorisParser.COMMIT:
				case DorisParser.COMMITTED:
				case DorisParser.COMPACT:
				case DorisParser.COMPLETE:
				case DorisParser.COMPRESS_TYPE:
				case DorisParser.CONFIG:
				case DorisParser.CONNECTION:
				case DorisParser.CONNECTION_ID:
				case DorisParser.CONSISTENT:
				case DorisParser.CONSTRAINTS:
				case DorisParser.CONVERT:
				case DorisParser.CONVERT_LSC:
				case DorisParser.COPY:
				case DorisParser.COUNT:
				case DorisParser.CREATION:
				case DorisParser.CRON:
				case DorisParser.CURRENT_CATALOG:
				case DorisParser.CURRENT_DATE:
				case DorisParser.CURRENT_TIME:
				case DorisParser.CURRENT_TIMESTAMP:
				case DorisParser.CURRENT_USER:
				case DorisParser.DATA:
				case DorisParser.DATE:
				case DorisParser.DATE_ADD:
				case DorisParser.DATE_CEIL:
				case DorisParser.DATE_DIFF:
				case DorisParser.DATE_FLOOR:
				case DorisParser.DATE_SUB:
				case DorisParser.DATEADD:
				case DorisParser.DATEDIFF:
				case DorisParser.DATETIME:
				case DorisParser.DATETIMEV2:
				case DorisParser.DATEV2:
				case DorisParser.DATETIMEV1:
				case DorisParser.DATEV1:
				case DorisParser.DAY:
				case DorisParser.DAYS_ADD:
				case DorisParser.DAYS_SUB:
				case DorisParser.DECIMAL:
				case DorisParser.DECIMALV2:
				case DorisParser.DECIMALV3:
				case DorisParser.DEFERRED:
				case DorisParser.DEMAND:
				case DorisParser.DIAGNOSE:
				case DorisParser.DISTINCTPC:
				case DorisParser.DISTINCTPCSA:
				case DorisParser.DO:
				case DorisParser.DORIS_INTERNAL_TABLE_ID:
				case DorisParser.DUAL:
				case DorisParser.DYNAMIC:
				case DorisParser.ENABLE:
				case DorisParser.ENCRYPTKEY:
				case DorisParser.ENCRYPTKEYS:
				case DorisParser.END:
				case DorisParser.ENDS:
				case DorisParser.ENGINE:
				case DorisParser.ENGINES:
				case DorisParser.ERRORS:
				case DorisParser.EVENTS:
				case DorisParser.EVERY:
				case DorisParser.EXCLUDE:
				case DorisParser.EXPIRED:
				case DorisParser.EXTERNAL:
				case DorisParser.FAILED_LOGIN_ATTEMPTS:
				case DorisParser.FAST:
				case DorisParser.FEATURE:
				case DorisParser.FIELDS:
				case DorisParser.FILE:
				case DorisParser.FILTER:
				case DorisParser.FIRST:
				case DorisParser.FORMAT:
				case DorisParser.FREE:
				case DorisParser.FRONTENDS:
				case DorisParser.FUNCTION:
				case DorisParser.GENERIC:
				case DorisParser.GLOBAL:
				case DorisParser.GRAPH:
				case DorisParser.GROUPING:
				case DorisParser.GROUPS:
				case DorisParser.HASH:
				case DorisParser.HDFS:
				case DorisParser.HELP:
				case DorisParser.HISTOGRAM:
				case DorisParser.HLL_UNION:
				case DorisParser.HOSTNAME:
				case DorisParser.HOTSPOT:
				case DorisParser.HOUR:
				case DorisParser.HUB:
				case DorisParser.IDENTIFIED:
				case DorisParser.IGNORE:
				case DorisParser.IMMEDIATE:
				case DorisParser.INCREMENTAL:
				case DorisParser.INDEXES:
				case DorisParser.INVERTED:
				case DorisParser.IPV4:
				case DorisParser.IPV6:
				case DorisParser.IS_NOT_NULL_PRED:
				case DorisParser.IS_NULL_PRED:
				case DorisParser.ISNULL:
				case DorisParser.ISOLATION:
				case DorisParser.JOB:
				case DorisParser.JOBS:
				case DorisParser.JSON:
				case DorisParser.JSONB:
				case DorisParser.LABEL:
				case DorisParser.LAST:
				case DorisParser.LDAP:
				case DorisParser.LDAP_ADMIN_PASSWORD:
				case DorisParser.LESS:
				case DorisParser.LEVEL:
				case DorisParser.LINES:
				case DorisParser.LINK:
				case DorisParser.LOCAL:
				case DorisParser.LOCALTIME:
				case DorisParser.LOCALTIMESTAMP:
				case DorisParser.LOCATION:
				case DorisParser.LOCK:
				case DorisParser.LOGICAL:
				case DorisParser.MANUAL:
				case DorisParser.MAP:
				case DorisParser.MATCH_ALL:
				case DorisParser.MATCH_ANY:
				case DorisParser.MATCH_PHRASE:
				case DorisParser.MATCH_PHRASE_EDGE:
				case DorisParser.MATCH_PHRASE_PREFIX:
				case DorisParser.MATCH_REGEXP:
				case DorisParser.MATERIALIZED:
				case DorisParser.MAX:
				case DorisParser.MEMO:
				case DorisParser.MERGE:
				case DorisParser.MIGRATE:
				case DorisParser.MIGRATIONS:
				case DorisParser.MIN:
				case DorisParser.MINUTE:
				case DorisParser.MODIFY:
				case DorisParser.MONTH:
				case DorisParser.MTMV:
				case DorisParser.NAME:
				case DorisParser.NAMES:
				case DorisParser.NEGATIVE:
				case DorisParser.NEVER:
				case DorisParser.NEXT:
				case DorisParser.NGRAM_BF:
				case DorisParser.NO:
				case DorisParser.NON_NULLABLE:
				case DorisParser.NULLS:
				case DorisParser.OF:
				case DorisParser.OFFSET:
				case DorisParser.ONLY:
				case DorisParser.OPEN:
				case DorisParser.OPTIMIZED:
				case DorisParser.PARAMETER:
				case DorisParser.PARSED:
				case DorisParser.PARTITIONS:
				case DorisParser.PASSWORD:
				case DorisParser.PASSWORD_EXPIRE:
				case DorisParser.PASSWORD_HISTORY:
				case DorisParser.PASSWORD_LOCK_TIME:
				case DorisParser.PASSWORD_REUSE:
				case DorisParser.PATH:
				case DorisParser.PAUSE:
				case DorisParser.PERCENT:
				case DorisParser.PERIOD:
				case DorisParser.PERMISSIVE:
				case DorisParser.PHYSICAL:
				case DorisParser.PLAN:
				case DorisParser.PRIVILEGES:
				case DorisParser.PROCESS:
				case DorisParser.PLUGIN:
				case DorisParser.PLUGINS:
				case DorisParser.POLICY:
				case DorisParser.PROC:
				case DorisParser.PROCESSLIST:
				case DorisParser.PROFILE:
				case DorisParser.PROPERTIES:
				case DorisParser.PROPERTY:
				case DorisParser.QUANTILE_STATE:
				case DorisParser.QUANTILE_UNION:
				case DorisParser.QUERY:
				case DorisParser.QUOTA:
				case DorisParser.RANDOM:
				case DorisParser.RECENT:
				case DorisParser.RECOVER:
				case DorisParser.RECYCLE:
				case DorisParser.REFRESH:
				case DorisParser.REPEATABLE:
				case DorisParser.REPLACE:
				case DorisParser.REPLACE_IF_NOT_NULL:
				case DorisParser.REPOSITORIES:
				case DorisParser.REPOSITORY:
				case DorisParser.RESOURCE:
				case DorisParser.RESOURCES:
				case DorisParser.RESTORE:
				case DorisParser.RESTRICTIVE:
				case DorisParser.RESUME:
				case DorisParser.RETURNS:
				case DorisParser.REWRITTEN:
				case DorisParser.RLIKE:
				case DorisParser.ROLLBACK:
				case DorisParser.ROLLUP:
				case DorisParser.ROUTINE:
				case DorisParser.S3:
				case DorisParser.SAMPLE:
				case DorisParser.SCHEDULE:
				case DorisParser.SCHEDULER:
				case DorisParser.SCHEMA:
				case DorisParser.SECOND:
				case DorisParser.SEQUENCE:
				case DorisParser.SERIALIZABLE:
				case DorisParser.SESSION:
				case DorisParser.SHAPE:
				case DorisParser.SKEW:
				case DorisParser.SNAPSHOT:
				case DorisParser.SONAME:
				case DorisParser.SPLIT:
				case DorisParser.SQL:
				case DorisParser.STAGES:
				case DorisParser.START:
				case DorisParser.STARTS:
				case DorisParser.STATS:
				case DorisParser.STATUS:
				case DorisParser.STOP:
				case DorisParser.STORAGE:
				case DorisParser.STREAM:
				case DorisParser.STREAMING:
				case DorisParser.STRING:
				case DorisParser.STRUCT:
				case DorisParser.SUBDATE:
				case DorisParser.SUM:
				case DorisParser.TABLES:
				case DorisParser.TASK:
				case DorisParser.TASKS:
				case DorisParser.TEMPORARY:
				case DorisParser.TEXT:
				case DorisParser.THAN:
				case DorisParser.TIME:
				case DorisParser.TIMESTAMP:
				case DorisParser.TIMESTAMPADD:
				case DorisParser.TIMESTAMPDIFF:
				case DorisParser.TRANSACTION:
				case DorisParser.TREE:
				case DorisParser.TRIGGERS:
				case DorisParser.TRUNCATE:
				case DorisParser.TYPE:
				case DorisParser.TYPES:
				case DorisParser.UNCOMMITTED:
				case DorisParser.UNLOCK:
				case DorisParser.UP:
				case DorisParser.USER:
				case DorisParser.VALUE:
				case DorisParser.VARCHAR:
				case DorisParser.VARIABLES:
				case DorisParser.VARIANT:
				case DorisParser.VAULT:
				case DorisParser.VERBOSE:
				case DorisParser.VERSION:
				case DorisParser.VIEW:
				case DorisParser.WARM:
				case DorisParser.WARNINGS:
				case DorisParser.WEEK:
				case DorisParser.WORK:
				case DorisParser.YEAR:
				case DorisParser.IDENTIFIER:
				case DorisParser.BACKQUOTED_IDENTIFIER:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2117;
						localContext._errorCapturingIdentifier = this.errorCapturingIdentifier();
						localContext._args.push(localContext._errorCapturingIdentifier);
						this.state = 2118;
						this.match(DorisParser.ARROW);
						this.state = 2119;
						localContext._body = this.booleanExpression(0);
					}
					break;
				case DorisParser.LEFT_PAREN:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2121;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 2122;
						localContext._errorCapturingIdentifier = this.errorCapturingIdentifier();
						localContext._args.push(localContext._errorCapturingIdentifier);
						this.state = 2125;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						do {
							{
								{
									this.state = 2123;
									this.match(DorisParser.COMMA);
									this.state = 2124;
									localContext._errorCapturingIdentifier =
										this.errorCapturingIdentifier();
									localContext._args.push(localContext._errorCapturingIdentifier);
								}
							}
							this.state = 2127;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						} while (_la === 4);
						this.state = 2129;
						this.match(DorisParser.RIGHT_PAREN);
						this.state = 2130;
						this.match(DorisParser.ARROW);
						this.state = 2131;
						localContext._body = this.booleanExpression(0);
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	booleanExpression(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		let parentContext = this.context;
		let parentState = this.state;
		let localContext = new BooleanExpressionContext(this.context, parentState);
		let previousContext = localContext;
		let _startState = 218;
		this.enterRecursionRule(localContext, 218, DorisParser.RULE_booleanExpression, _p);
		let _la;
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2157;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 293, this.context)) {
					case 1:
						{
							localContext = new LogicalNotContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2136;
							_la = this.tokenStream.LA(1);
							if (!(_la === 301 || _la === 506)) {
								this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2137;
							this.booleanExpression(9);
						}
						break;
					case 2:
						{
							localContext = new ExistContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2138;
							this.match(DorisParser.EXISTS);
							this.state = 2139;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2140;
							this.query();
							this.state = 2141;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 3:
						{
							localContext = new IsnullContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2143;
							_la = this.tokenStream.LA(1);
							if (!(_la === 237 || _la === 238)) {
								this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2144;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2145;
							this.valueExpression(0);
							this.state = 2146;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 4:
						{
							localContext = new Is_not_null_predContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2148;
							this.match(DorisParser.IS_NOT_NULL_PRED);
							this.state = 2149;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2150;
							this.valueExpression(0);
							this.state = 2151;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 5:
						{
							localContext = new PredicatedContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2153;
							this.valueExpression(0);
							this.state = 2155;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									292,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2154;
										this.predicate();
									}
									break;
							}
						}
						break;
				}
				this.context.stop = this.tokenStream.LT(-1);
				this.state = 2173;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 295, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						previousContext = localContext;
						{
							this.state = 2171;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									294,
									this.context
								)
							) {
								case 1:
									{
										localContext = new LogicalBinaryContext(
											new BooleanExpressionContext(parentContext, parentState)
										);
										localContext._left = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_booleanExpression
										);
										this.state = 2159;
										if (!this.precpred(this.context, 4)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 4)'
											);
										}
										this.state = 2160;
										localContext._operator = this.tokenStream.LT(1);
										_la = this.tokenStream.LA(1);
										if (!(_la === 23 || _la === 505)) {
											localContext._operator =
												this.errorHandler.recoverInline(this);
										} else {
											this.errorHandler.reportMatch(this);
											this.consume();
										}
										this.state = 2161;
										localContext._right = this.booleanExpression(5);
									}
									break;
								case 2:
									{
										localContext = new LogicalBinaryContext(
											new BooleanExpressionContext(parentContext, parentState)
										);
										localContext._left = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_booleanExpression
										);
										this.state = 2162;
										if (!this.precpred(this.context, 3)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 3)'
											);
										}
										this.state = 2163;
										localContext._operator = this.match(DorisParser.XOR);
										this.state = 2164;
										localContext._right = this.booleanExpression(4);
									}
									break;
								case 3:
									{
										localContext = new LogicalBinaryContext(
											new BooleanExpressionContext(parentContext, parentState)
										);
										localContext._left = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_booleanExpression
										);
										this.state = 2165;
										if (!this.precpred(this.context, 2)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 2)'
											);
										}
										this.state = 2166;
										localContext._operator = this.match(DorisParser.OR);
										this.state = 2167;
										localContext._right = this.booleanExpression(3);
									}
									break;
								case 4:
									{
										localContext = new DoublePipesContext(
											new BooleanExpressionContext(parentContext, parentState)
										);
										localContext._left = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_booleanExpression
										);
										this.state = 2168;
										if (!this.precpred(this.context, 1)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 1)'
											);
										}
										this.state = 2169;
										localContext._operator = this.match(
											DorisParser.DOUBLEPIPES
										);
										this.state = 2170;
										localContext._right = this.booleanExpression(2);
									}
									break;
							}
						}
					}
					this.state = 2175;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						295,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(parentContext);
		}
		return localContext;
	}
	rowConstructor() {
		let localContext = new RowConstructorContext(this.context, this.state);
		this.enterRule(localContext, 220, DorisParser.RULE_rowConstructor);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2176;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 2185;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (
					((_la & ~0x1f) === 0 && ((1 << _la) & 3427251012) !== 0) ||
					(((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4009753405) !== 0) ||
					(((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 3204443871) !== 0) ||
					(((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 2147481585) !== 0) ||
					(((_la - 129) & ~0x1f) === 0 && ((1 << (_la - 129)) & 3215509067) !== 0) ||
					(((_la - 161) & ~0x1f) === 0 && ((1 << (_la - 161)) & 1276116075) !== 0) ||
					(((_la - 193) & ~0x1f) === 0 && ((1 << (_la - 193)) & 369063757) !== 0) ||
					(((_la - 230) & ~0x1f) === 0 && ((1 << (_la - 230)) & 1876226013) !== 0) ||
					(((_la - 263) & ~0x1f) === 0 && ((1 << (_la - 263)) & 2130443711) !== 0) ||
					(((_la - 295) & ~0x1f) === 0 && ((1 << (_la - 295)) & 4274056703) !== 0) ||
					(((_la - 327) & ~0x1f) === 0 && ((1 << (_la - 327)) & 3288240127) !== 0) ||
					(((_la - 359) & ~0x1f) === 0 && ((1 << (_la - 359)) & 3463969675) !== 0) ||
					(((_la - 391) & ~0x1f) === 0 && ((1 << (_la - 391)) & 4292776855) !== 0) ||
					(((_la - 423) & ~0x1f) === 0 && ((1 << (_la - 423)) & 4202393863) !== 0) ||
					(((_la - 455) & ~0x1f) === 0 && ((1 << (_la - 455)) & 2281612565) !== 0) ||
					(((_la - 490) & ~0x1f) === 0 && ((1 << (_la - 490)) & 2264999681) !== 0) ||
					(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
				) {
					{
						this.state = 2177;
						this.rowConstructorItem();
						this.state = 2182;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 2178;
									this.match(DorisParser.COMMA);
									this.state = 2179;
									this.rowConstructorItem();
								}
							}
							this.state = 2184;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
					}
				}
				this.state = 2187;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	rowConstructorItem() {
		let localContext = new RowConstructorItemContext(this.context, this.state);
		this.enterRule(localContext, 222, DorisParser.RULE_rowConstructorItem);
		try {
			this.state = 2191;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_PAREN:
				case DorisParser.LEFT_BRACKET:
				case DorisParser.LEFT_BRACE:
				case DorisParser.RIGHT_BRACE:
				case DorisParser.ADD:
				case DorisParser.ADDDATE:
				case DorisParser.AFTER:
				case DorisParser.AGG_STATE:
				case DorisParser.AGGREGATE:
				case DorisParser.ALIAS:
				case DorisParser.ANALYZED:
				case DorisParser.ARRAY:
				case DorisParser.ARRAY_RANGE:
				case DorisParser.AT:
				case DorisParser.AUTHORS:
				case DorisParser.AUTO_INCREMENT:
				case DorisParser.BACKENDS:
				case DorisParser.BACKUP:
				case DorisParser.BEGIN:
				case DorisParser.BELONG:
				case DorisParser.BIN:
				case DorisParser.BINARY:
				case DorisParser.BITAND:
				case DorisParser.BITMAP:
				case DorisParser.BITMAP_UNION:
				case DorisParser.BITOR:
				case DorisParser.BITXOR:
				case DorisParser.BLOB:
				case DorisParser.BOOLEAN:
				case DorisParser.BRIEF:
				case DorisParser.BROKER:
				case DorisParser.BUCKETS:
				case DorisParser.BUILD:
				case DorisParser.BUILTIN:
				case DorisParser.BULK:
				case DorisParser.CACHE:
				case DorisParser.CACHED:
				case DorisParser.CALL:
				case DorisParser.CASE:
				case DorisParser.CAST:
				case DorisParser.CATALOG:
				case DorisParser.CATALOGS:
				case DorisParser.CHAIN:
				case DorisParser.CHAR:
				case DorisParser.CHARSET:
				case DorisParser.CHECK:
				case DorisParser.CLUSTER:
				case DorisParser.CLUSTERS:
				case DorisParser.COLLATION:
				case DorisParser.COLLECT:
				case DorisParser.COLOCATE:
				case DorisParser.COLUMNS:
				case DorisParser.COMMENT:
				case DorisParser.COMMIT:
				case DorisParser.COMMITTED:
				case DorisParser.COMPACT:
				case DorisParser.COMPLETE:
				case DorisParser.COMPRESS_TYPE:
				case DorisParser.CONFIG:
				case DorisParser.CONNECTION:
				case DorisParser.CONNECTION_ID:
				case DorisParser.CONSISTENT:
				case DorisParser.CONSTRAINTS:
				case DorisParser.CONVERT:
				case DorisParser.CONVERT_LSC:
				case DorisParser.COPY:
				case DorisParser.COUNT:
				case DorisParser.CREATION:
				case DorisParser.CRON:
				case DorisParser.CURRENT_CATALOG:
				case DorisParser.CURRENT_DATE:
				case DorisParser.CURRENT_TIME:
				case DorisParser.CURRENT_TIMESTAMP:
				case DorisParser.CURRENT_USER:
				case DorisParser.DATA:
				case DorisParser.DATABASE:
				case DorisParser.DATE:
				case DorisParser.DATE_ADD:
				case DorisParser.DATE_CEIL:
				case DorisParser.DATE_DIFF:
				case DorisParser.DATE_FLOOR:
				case DorisParser.DATE_SUB:
				case DorisParser.DATEADD:
				case DorisParser.DATEDIFF:
				case DorisParser.DATETIME:
				case DorisParser.DATETIMEV2:
				case DorisParser.DATEV2:
				case DorisParser.DATETIMEV1:
				case DorisParser.DATEV1:
				case DorisParser.DAY:
				case DorisParser.DAYS_ADD:
				case DorisParser.DAYS_SUB:
				case DorisParser.DECIMAL:
				case DorisParser.DECIMALV2:
				case DorisParser.DECIMALV3:
				case DorisParser.DEFERRED:
				case DorisParser.DEMAND:
				case DorisParser.DIAGNOSE:
				case DorisParser.DISTINCTPC:
				case DorisParser.DISTINCTPCSA:
				case DorisParser.DO:
				case DorisParser.DORIS_INTERNAL_TABLE_ID:
				case DorisParser.DUAL:
				case DorisParser.DYNAMIC:
				case DorisParser.ENABLE:
				case DorisParser.ENCRYPTKEY:
				case DorisParser.ENCRYPTKEYS:
				case DorisParser.END:
				case DorisParser.ENDS:
				case DorisParser.ENGINE:
				case DorisParser.ENGINES:
				case DorisParser.ERRORS:
				case DorisParser.EVENTS:
				case DorisParser.EVERY:
				case DorisParser.EXCLUDE:
				case DorisParser.EXISTS:
				case DorisParser.EXPIRED:
				case DorisParser.EXTERNAL:
				case DorisParser.EXTRACT:
				case DorisParser.FAILED_LOGIN_ATTEMPTS:
				case DorisParser.FALSE:
				case DorisParser.FAST:
				case DorisParser.FEATURE:
				case DorisParser.FIELDS:
				case DorisParser.FILE:
				case DorisParser.FILTER:
				case DorisParser.FIRST:
				case DorisParser.FORMAT:
				case DorisParser.FREE:
				case DorisParser.FRONTENDS:
				case DorisParser.FUNCTION:
				case DorisParser.GENERIC:
				case DorisParser.GLOBAL:
				case DorisParser.GRAPH:
				case DorisParser.GROUPING:
				case DorisParser.GROUPS:
				case DorisParser.HASH:
				case DorisParser.HDFS:
				case DorisParser.HELP:
				case DorisParser.HISTOGRAM:
				case DorisParser.HLL_UNION:
				case DorisParser.HOSTNAME:
				case DorisParser.HOTSPOT:
				case DorisParser.HOUR:
				case DorisParser.HUB:
				case DorisParser.IDENTIFIED:
				case DorisParser.IF:
				case DorisParser.IGNORE:
				case DorisParser.IMMEDIATE:
				case DorisParser.INCREMENTAL:
				case DorisParser.INDEXES:
				case DorisParser.INTERVAL:
				case DorisParser.INVERTED:
				case DorisParser.IPV4:
				case DorisParser.IPV6:
				case DorisParser.IS_NOT_NULL_PRED:
				case DorisParser.IS_NULL_PRED:
				case DorisParser.ISNULL:
				case DorisParser.ISOLATION:
				case DorisParser.JOB:
				case DorisParser.JOBS:
				case DorisParser.JSON:
				case DorisParser.JSONB:
				case DorisParser.KEY:
				case DorisParser.LABEL:
				case DorisParser.LAST:
				case DorisParser.LDAP:
				case DorisParser.LDAP_ADMIN_PASSWORD:
				case DorisParser.LEFT:
				case DorisParser.LESS:
				case DorisParser.LEVEL:
				case DorisParser.LIKE:
				case DorisParser.LINES:
				case DorisParser.LINK:
				case DorisParser.LOCAL:
				case DorisParser.LOCALTIME:
				case DorisParser.LOCALTIMESTAMP:
				case DorisParser.LOCATION:
				case DorisParser.LOCK:
				case DorisParser.LOGICAL:
				case DorisParser.MANUAL:
				case DorisParser.MAP:
				case DorisParser.MATCH_ALL:
				case DorisParser.MATCH_ANY:
				case DorisParser.MATCH_PHRASE:
				case DorisParser.MATCH_PHRASE_EDGE:
				case DorisParser.MATCH_PHRASE_PREFIX:
				case DorisParser.MATCH_REGEXP:
				case DorisParser.MATERIALIZED:
				case DorisParser.MAX:
				case DorisParser.MEMO:
				case DorisParser.MERGE:
				case DorisParser.MIGRATE:
				case DorisParser.MIGRATIONS:
				case DorisParser.MIN:
				case DorisParser.MINUTE:
				case DorisParser.MODIFY:
				case DorisParser.MONTH:
				case DorisParser.MTMV:
				case DorisParser.NAME:
				case DorisParser.NAMES:
				case DorisParser.NEGATIVE:
				case DorisParser.NEVER:
				case DorisParser.NEXT:
				case DorisParser.NGRAM_BF:
				case DorisParser.NO:
				case DorisParser.NON_NULLABLE:
				case DorisParser.NOT:
				case DorisParser.NULL:
				case DorisParser.NULLS:
				case DorisParser.OF:
				case DorisParser.OFFSET:
				case DorisParser.ONLY:
				case DorisParser.OPEN:
				case DorisParser.OPTIMIZED:
				case DorisParser.PARAMETER:
				case DorisParser.PARSED:
				case DorisParser.PARTITIONS:
				case DorisParser.PASSWORD:
				case DorisParser.PASSWORD_EXPIRE:
				case DorisParser.PASSWORD_HISTORY:
				case DorisParser.PASSWORD_LOCK_TIME:
				case DorisParser.PASSWORD_REUSE:
				case DorisParser.PATH:
				case DorisParser.PAUSE:
				case DorisParser.PERCENT:
				case DorisParser.PERIOD:
				case DorisParser.PERMISSIVE:
				case DorisParser.PHYSICAL:
				case DorisParser.PLACEHOLDER:
				case DorisParser.PLAN:
				case DorisParser.PRIVILEGES:
				case DorisParser.PROCESS:
				case DorisParser.PLUGIN:
				case DorisParser.PLUGINS:
				case DorisParser.POLICY:
				case DorisParser.PROC:
				case DorisParser.PROCESSLIST:
				case DorisParser.PROFILE:
				case DorisParser.PROPERTIES:
				case DorisParser.PROPERTY:
				case DorisParser.QUANTILE_STATE:
				case DorisParser.QUANTILE_UNION:
				case DorisParser.QUERY:
				case DorisParser.QUOTA:
				case DorisParser.RANDOM:
				case DorisParser.RECENT:
				case DorisParser.RECOVER:
				case DorisParser.RECYCLE:
				case DorisParser.REFRESH:
				case DorisParser.REGEXP:
				case DorisParser.REPEATABLE:
				case DorisParser.REPLACE:
				case DorisParser.REPLACE_IF_NOT_NULL:
				case DorisParser.REPOSITORIES:
				case DorisParser.REPOSITORY:
				case DorisParser.RESOURCE:
				case DorisParser.RESOURCES:
				case DorisParser.RESTORE:
				case DorisParser.RESTRICTIVE:
				case DorisParser.RESUME:
				case DorisParser.RETURNS:
				case DorisParser.REWRITTEN:
				case DorisParser.RIGHT:
				case DorisParser.RLIKE:
				case DorisParser.ROLLBACK:
				case DorisParser.ROLLUP:
				case DorisParser.ROUTINE:
				case DorisParser.S3:
				case DorisParser.SAMPLE:
				case DorisParser.SCHEDULE:
				case DorisParser.SCHEDULER:
				case DorisParser.SCHEMA:
				case DorisParser.SECOND:
				case DorisParser.SEQUENCE:
				case DorisParser.SERIALIZABLE:
				case DorisParser.SESSION:
				case DorisParser.SHAPE:
				case DorisParser.SKEW:
				case DorisParser.SNAPSHOT:
				case DorisParser.SONAME:
				case DorisParser.SPLIT:
				case DorisParser.SQL:
				case DorisParser.STAGES:
				case DorisParser.START:
				case DorisParser.STARTS:
				case DorisParser.STATS:
				case DorisParser.STATUS:
				case DorisParser.STOP:
				case DorisParser.STORAGE:
				case DorisParser.STREAM:
				case DorisParser.STREAMING:
				case DorisParser.STRING:
				case DorisParser.STRUCT:
				case DorisParser.SUBDATE:
				case DorisParser.SUM:
				case DorisParser.TABLES:
				case DorisParser.TASK:
				case DorisParser.TASKS:
				case DorisParser.TEMPORARY:
				case DorisParser.TEXT:
				case DorisParser.THAN:
				case DorisParser.TIME:
				case DorisParser.TIMESTAMP:
				case DorisParser.TIMESTAMPADD:
				case DorisParser.TIMESTAMPDIFF:
				case DorisParser.TRANSACTION:
				case DorisParser.TREE:
				case DorisParser.TRIGGERS:
				case DorisParser.TRIM:
				case DorisParser.TRUE:
				case DorisParser.TRUNCATE:
				case DorisParser.TYPE:
				case DorisParser.TYPES:
				case DorisParser.UNCOMMITTED:
				case DorisParser.UNLOCK:
				case DorisParser.UP:
				case DorisParser.USER:
				case DorisParser.VALUE:
				case DorisParser.VARCHAR:
				case DorisParser.VARIABLES:
				case DorisParser.VARIANT:
				case DorisParser.VAULT:
				case DorisParser.VERBOSE:
				case DorisParser.VERSION:
				case DorisParser.VIEW:
				case DorisParser.WARM:
				case DorisParser.WARNINGS:
				case DorisParser.WEEK:
				case DorisParser.WORK:
				case DorisParser.YEAR:
				case DorisParser.PLUS:
				case DorisParser.SUBTRACT:
				case DorisParser.ASTERISK:
				case DorisParser.TILDE:
				case DorisParser.LOGICALNOT:
				case DorisParser.ATSIGN:
				case DorisParser.DOUBLEATSIGN:
				case DorisParser.STRING_LITERAL:
				case DorisParser.INTEGER_VALUE:
				case DorisParser.EXPONENT_VALUE:
				case DorisParser.DECIMAL_VALUE:
				case DorisParser.IDENTIFIER:
				case DorisParser.BACKQUOTED_IDENTIFIER:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2189;
						this.namedExpression();
					}
					break;
				case DorisParser.DEFAULT:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2190;
						this.match(DorisParser.DEFAULT);
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	predicate() {
		let localContext = new PredicateContext(this.context, this.state);
		this.enterRule(localContext, 224, DorisParser.RULE_predicate);
		let _la;
		try {
			this.state = 2239;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 306, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2194;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 2193;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 2196;
						localContext._kind = this.match(DorisParser.BETWEEN);
						this.state = 2197;
						localContext._lower = this.valueExpression(0);
						this.state = 2198;
						this.match(DorisParser.AND);
						this.state = 2199;
						localContext._upper = this.valueExpression(0);
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2202;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 2201;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 2204;
						localContext._kind = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(_la === 257 || _la === 362 || _la === 381)) {
							localContext._kind = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2205;
						localContext._pattern = this.valueExpression(0);
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 2207;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 2206;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 2209;
						localContext._kind = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(((_la - 272) & ~0x1f) === 0 && ((1 << (_la - 272)) & 127) !== 0)) {
							localContext._kind = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2210;
						localContext._pattern = this.valueExpression(0);
					}
					break;
				case 4:
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 2212;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 2211;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 2214;
						localContext._kind = this.match(DorisParser.IN);
						this.state = 2215;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 2216;
						this.query();
						this.state = 2217;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 5:
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 2220;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 2219;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 2222;
						localContext._kind = this.match(DorisParser.IN);
						this.state = 2223;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 2224;
						this.expression();
						this.state = 2229;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 2225;
									this.match(DorisParser.COMMA);
									this.state = 2226;
									this.expression();
								}
							}
							this.state = 2231;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 2232;
						this.match(DorisParser.RIGHT_PAREN);
					}
					break;
				case 6:
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 2234;
						this.match(DorisParser.IS);
						this.state = 2236;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 2235;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 2238;
						localContext._kind = this.match(DorisParser.NULL);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	valueExpression(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		let parentContext = this.context;
		let parentState = this.state;
		let localContext = new ValueExpressionContext(this.context, parentState);
		let previousContext = localContext;
		let _startState = 226;
		this.enterRecursionRule(localContext, 226, DorisParser.RULE_valueExpression, _p);
		let _la;
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2252;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 307, this.context)) {
					case 1:
						{
							localContext = new ValueExpressionDefaultContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2242;
							this.primaryExpression(0);
						}
						break;
					case 2:
						{
							localContext = new ArithmeticUnaryContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2243;
							localContext._operator = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(((_la - 498) & ~0x1f) === 0 && ((1 << (_la - 498)) & 35) !== 0)) {
								localContext._operator = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2244;
							this.valueExpression(5);
						}
						break;
					case 3:
						{
							localContext = new BitOperationContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2245;
							localContext._operator = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(((_la - 44) & ~0x1f) === 0 && ((1 << (_la - 44)) & 25) !== 0)) {
								localContext._operator = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2246;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2247;
							localContext._left = this.valueExpression(0);
							this.state = 2248;
							this.match(DorisParser.COMMA);
							this.state = 2249;
							localContext._right = this.valueExpression(0);
							this.state = 2250;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
				}
				this.context.stop = this.tokenStream.LT(-1);
				this.state = 2266;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						previousContext = localContext;
						{
							this.state = 2264;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									308,
									this.context
								)
							) {
								case 1:
									{
										localContext = new ArithmeticBinaryContext(
											new ValueExpressionContext(parentContext, parentState)
										);
										localContext._left = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_valueExpression
										);
										this.state = 2254;
										if (!this.precpred(this.context, 4)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 4)'
											);
										}
										this.state = 2255;
										localContext._operator = this.tokenStream.LT(1);
										_la = this.tokenStream.LA(1);
										if (
											!(
												_la === 142 ||
												(((_la - 500) & ~0x1f) === 0 &&
													((1 << (_la - 500)) & 7) !== 0)
											)
										) {
											localContext._operator =
												this.errorHandler.recoverInline(this);
										} else {
											this.errorHandler.reportMatch(this);
											this.consume();
										}
										this.state = 2256;
										localContext._right = this.valueExpression(5);
									}
									break;
								case 2:
									{
										localContext = new ArithmeticBinaryContext(
											new ValueExpressionContext(parentContext, parentState)
										);
										localContext._left = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_valueExpression
										);
										this.state = 2257;
										if (!this.precpred(this.context, 3)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 3)'
											);
										}
										this.state = 2258;
										localContext._operator = this.tokenStream.LT(1);
										_la = this.tokenStream.LA(1);
										if (
											!(
												((_la - 498) & ~0x1f) === 0 &&
												((1 << (_la - 498)) & 2627) !== 0
											)
										) {
											localContext._operator =
												this.errorHandler.recoverInline(this);
										} else {
											this.errorHandler.reportMatch(this);
											this.consume();
										}
										this.state = 2259;
										localContext._right = this.valueExpression(4);
									}
									break;
								case 3:
									{
										localContext = new ComparisonContext(
											new ValueExpressionContext(parentContext, parentState)
										);
										localContext._left = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_valueExpression
										);
										this.state = 2260;
										if (!this.precpred(this.context, 2)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 2)'
											);
										}
										this.state = 2261;
										this.comparisonOperator();
										this.state = 2262;
										localContext._right = this.valueExpression(3);
									}
									break;
							}
						}
					}
					this.state = 2268;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						309,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(parentContext);
		}
		return localContext;
	}
	datetimeUnit() {
		let localContext = new DatetimeUnitContext(this.context, this.state);
		this.enterRule(localContext, 228, DorisParser.RULE_datetimeUnit);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2269;
				_la = this.tokenStream.LA(1);
				if (
					!(
						_la === 122 ||
						_la === 212 ||
						_la === 288 ||
						_la === 290 ||
						_la === 395 ||
						_la === 481 ||
						_la === 490
					)
				) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	primaryExpression(_p) {
		if (_p === undefined) {
			_p = 0;
		}
		let parentContext = this.context;
		let parentState = this.state;
		let localContext = new PrimaryExpressionContext(this.context, parentState);
		let previousContext = localContext;
		let _startState = 230;
		this.enterRecursionRule(localContext, 230, DorisParser.RULE_primaryExpression, _p);
		let _la;
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2470;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 325, this.context)) {
					case 1:
						{
							localContext = new TimestampdiffContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2272;
							localContext._name = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(_la === 116 || _la === 445)) {
								localContext._name = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2273;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2274;
							localContext._unit = this.datetimeUnit();
							this.state = 2275;
							this.match(DorisParser.COMMA);
							this.state = 2276;
							localContext._startTimestamp = this.valueExpression(0);
							this.state = 2277;
							this.match(DorisParser.COMMA);
							this.state = 2278;
							localContext._endTimestamp = this.valueExpression(0);
							this.state = 2279;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 2:
						{
							localContext = new TimestampaddContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2281;
							localContext._name = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(_la === 115 || _la === 444)) {
								localContext._name = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2282;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2283;
							localContext._unit = this.datetimeUnit();
							this.state = 2284;
							this.match(DorisParser.COMMA);
							this.state = 2285;
							localContext._startTimestamp = this.valueExpression(0);
							this.state = 2286;
							this.match(DorisParser.COMMA);
							this.state = 2287;
							localContext._endTimestamp = this.valueExpression(0);
							this.state = 2288;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 3:
						{
							localContext = new Date_addContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2290;
							localContext._name = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(_la === 13 || _la === 110 || _la === 123)) {
								localContext._name = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2291;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2292;
							localContext._timestamp = this.valueExpression(0);
							this.state = 2293;
							this.match(DorisParser.COMMA);
							this.state = 2299;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									310,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2294;
										this.match(DorisParser.INTERVAL);
										this.state = 2295;
										localContext._unitsAmount = this.valueExpression(0);
										this.state = 2296;
										localContext._unit = this.datetimeUnit();
									}
									break;
								case 2:
									{
										this.state = 2298;
										localContext._unitsAmount = this.valueExpression(0);
									}
									break;
							}
							this.state = 2301;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 4:
						{
							localContext = new Date_subContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2303;
							localContext._name = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(_la === 114 || _la === 124 || _la === 424)) {
								localContext._name = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2304;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2305;
							localContext._timestamp = this.valueExpression(0);
							this.state = 2306;
							this.match(DorisParser.COMMA);
							this.state = 2312;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									311,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2307;
										this.match(DorisParser.INTERVAL);
										this.state = 2308;
										localContext._unitsAmount = this.valueExpression(0);
										this.state = 2309;
										localContext._unit = this.datetimeUnit();
									}
									break;
								case 2:
									{
										this.state = 2311;
										localContext._unitsAmount = this.valueExpression(0);
									}
									break;
							}
							this.state = 2314;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 5:
						{
							localContext = new DateFloorContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2316;
							localContext._name = this.match(DorisParser.DATE_FLOOR);
							this.state = 2317;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2318;
							localContext._timestamp = this.valueExpression(0);
							this.state = 2319;
							this.match(DorisParser.COMMA);
							this.state = 2325;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									312,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2320;
										this.match(DorisParser.INTERVAL);
										this.state = 2321;
										localContext._unitsAmount = this.valueExpression(0);
										this.state = 2322;
										localContext._unit = this.datetimeUnit();
									}
									break;
								case 2:
									{
										this.state = 2324;
										localContext._unitsAmount = this.valueExpression(0);
									}
									break;
							}
							this.state = 2327;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 6:
						{
							localContext = new DateCeilContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2329;
							localContext._name = this.match(DorisParser.DATE_CEIL);
							this.state = 2330;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2331;
							localContext._timestamp = this.valueExpression(0);
							this.state = 2332;
							this.match(DorisParser.COMMA);
							this.state = 2338;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									313,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2333;
										this.match(DorisParser.INTERVAL);
										this.state = 2334;
										localContext._unitsAmount = this.valueExpression(0);
										this.state = 2335;
										localContext._unit = this.datetimeUnit();
									}
									break;
								case 2:
									{
										this.state = 2337;
										localContext._unitsAmount = this.valueExpression(0);
									}
									break;
							}
							this.state = 2340;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 7:
						{
							localContext = new ArrayRangeContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2342;
							localContext._name = this.tokenStream.LT(1);
							_la = this.tokenStream.LA(1);
							if (!(_la === 27 || _la === 398)) {
								localContext._name = this.errorHandler.recoverInline(this);
							} else {
								this.errorHandler.reportMatch(this);
								this.consume();
							}
							this.state = 2343;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2344;
							localContext._start = this.valueExpression(0);
							this.state = 2345;
							this.match(DorisParser.COMMA);
							this.state = 2346;
							localContext._end = this.valueExpression(0);
							this.state = 2347;
							this.match(DorisParser.COMMA);
							this.state = 2353;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									314,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2348;
										this.match(DorisParser.INTERVAL);
										this.state = 2349;
										localContext._unitsAmount = this.valueExpression(0);
										this.state = 2350;
										localContext._unit = this.datetimeUnit();
									}
									break;
								case 2:
									{
										this.state = 2352;
										localContext._unitsAmount = this.valueExpression(0);
									}
									break;
							}
							this.state = 2355;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 8:
						{
							localContext = new CurrentDateContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2357;
							localContext._name = this.match(DorisParser.CURRENT_DATE);
						}
						break;
					case 9:
						{
							localContext = new CurrentTimeContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2358;
							localContext._name = this.match(DorisParser.CURRENT_TIME);
						}
						break;
					case 10:
						{
							localContext = new CurrentTimestampContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2359;
							localContext._name = this.match(DorisParser.CURRENT_TIMESTAMP);
						}
						break;
					case 11:
						{
							localContext = new LocalTimeContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2360;
							localContext._name = this.match(DorisParser.LOCALTIME);
						}
						break;
					case 12:
						{
							localContext = new LocalTimestampContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2361;
							localContext._name = this.match(DorisParser.LOCALTIMESTAMP);
						}
						break;
					case 13:
						{
							localContext = new CurrentUserContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2362;
							localContext._name = this.match(DorisParser.CURRENT_USER);
						}
						break;
					case 14:
						{
							localContext = new SearchedCaseContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2363;
							this.match(DorisParser.CASE);
							this.state = 2365;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							do {
								{
									{
										this.state = 2364;
										this.whenClause();
									}
								}
								this.state = 2367;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
							} while (_la === 482);
							this.state = 2371;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (_la === 151) {
								{
									this.state = 2369;
									this.match(DorisParser.ELSE);
									this.state = 2370;
									localContext._elseExpression = this.expression();
								}
							}
							this.state = 2373;
							this.match(DorisParser.END);
						}
						break;
					case 15:
						{
							localContext = new SimpleCaseContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2375;
							this.match(DorisParser.CASE);
							this.state = 2376;
							localContext._value = this.expression();
							this.state = 2378;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							do {
								{
									{
										this.state = 2377;
										this.whenClause();
									}
								}
								this.state = 2380;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
							} while (_la === 482);
							this.state = 2384;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (_la === 151) {
								{
									this.state = 2382;
									this.match(DorisParser.ELSE);
									this.state = 2383;
									localContext._elseExpression = this.expression();
								}
							}
							this.state = 2386;
							this.match(DorisParser.END);
						}
						break;
					case 16:
						{
							localContext = new CastContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2388;
							localContext._name = this.match(DorisParser.CAST);
							this.state = 2389;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2390;
							this.expression();
							this.state = 2391;
							this.match(DorisParser.AS);
							this.state = 2392;
							this.castDataType();
							this.state = 2393;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 17:
						{
							localContext = new ConstantDefaultContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2395;
							this.constant();
						}
						break;
					case 18:
						{
							localContext = new IntervalLiteralContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2396;
							this.interval();
						}
						break;
					case 19:
						{
							localContext = new StarContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2397;
							this.match(DorisParser.ASTERISK);
						}
						break;
					case 20:
						{
							localContext = new StarContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2398;
							this.qualifiedName();
							this.state = 2399;
							this.match(DorisParser.DOT);
							this.state = 2400;
							this.match(DorisParser.ASTERISK);
						}
						break;
					case 21:
						{
							localContext = new CharFunctionContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2402;
							this.match(DorisParser.CHAR);
							this.state = 2403;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2404;
							localContext._expression = this.expression();
							localContext._arguments.push(localContext._expression);
							this.state = 2409;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							while (_la === 4) {
								{
									{
										this.state = 2405;
										this.match(DorisParser.COMMA);
										this.state = 2406;
										localContext._expression = this.expression();
										localContext._arguments.push(localContext._expression);
									}
								}
								this.state = 2411;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
							}
							this.state = 2414;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (_la === 469) {
								{
									this.state = 2412;
									this.match(DorisParser.USING);
									this.state = 2413;
									localContext._charSet = this.identifierOrText();
								}
							}
							this.state = 2416;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 22:
						{
							localContext = new ConvertCharSetContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2418;
							this.match(DorisParser.CONVERT);
							this.state = 2419;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2420;
							localContext._argument = this.expression();
							this.state = 2421;
							this.match(DorisParser.USING);
							this.state = 2422;
							localContext._charSet = this.identifierOrText();
							this.state = 2423;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 23:
						{
							localContext = new ConvertTypeContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2425;
							this.match(DorisParser.CONVERT);
							this.state = 2426;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2427;
							localContext._argument = this.expression();
							this.state = 2428;
							this.match(DorisParser.COMMA);
							this.state = 2429;
							this.castDataType();
							this.state = 2430;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 24:
						{
							localContext = new FunctionCallContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2432;
							this.functionCallExpression();
						}
						break;
					case 25:
						{
							localContext = new SubqueryExpressionContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2433;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2434;
							this.query();
							this.state = 2435;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 26:
						{
							localContext = new UserVariableContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2437;
							this.match(DorisParser.ATSIGN);
							this.state = 2438;
							this.identifierOrText();
						}
						break;
					case 27:
						{
							localContext = new SystemVariableContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2439;
							this.match(DorisParser.DOUBLEATSIGN);
							this.state = 2442;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									321,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2440;
										localContext._kind = this.tokenStream.LT(1);
										_la = this.tokenStream.LA(1);
										if (!(_la === 196 || _la === 400)) {
											localContext._kind =
												this.errorHandler.recoverInline(this);
										} else {
											this.errorHandler.reportMatch(this);
											this.consume();
										}
										this.state = 2441;
										this.match(DorisParser.DOT);
									}
									break;
							}
							this.state = 2444;
							this.identifier();
						}
						break;
					case 28:
						{
							localContext = new ColumnReferenceContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2446;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
							if (_la === 42) {
								{
									this.state = 2445;
									this.match(DorisParser.BINARY);
								}
							}
							this.state = 2448;
							this.identifier();
						}
						break;
					case 29:
						{
							localContext = new ParenthesizedExpressionContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2449;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2450;
							this.expression();
							this.state = 2451;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
					case 30:
						{
							localContext = new EncryptKeyContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2453;
							this.match(DorisParser.KEY);
							this.state = 2457;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									323,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2454;
										localContext._dbName = this.identifier();
										this.state = 2455;
										this.match(DorisParser.DOT);
									}
									break;
							}
							this.state = 2459;
							localContext._keyName = this.identifier();
						}
						break;
					case 31:
						{
							localContext = new ExtractContext(localContext);
							this.context = localContext;
							previousContext = localContext;
							this.state = 2460;
							this.match(DorisParser.EXTRACT);
							this.state = 2461;
							this.match(DorisParser.LEFT_PAREN);
							this.state = 2462;
							localContext._field = this.identifier();
							this.state = 2463;
							this.match(DorisParser.FROM);
							this.state = 2465;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									324,
									this.context
								)
							) {
								case 1:
									{
										this.state = 2464;
										_la = this.tokenStream.LA(1);
										if (!(_la === 109 || _la === 443)) {
											this.errorHandler.recoverInline(this);
										} else {
											this.errorHandler.reportMatch(this);
											this.consume();
										}
									}
									break;
							}
							this.state = 2467;
							localContext._source = this.valueExpression(0);
							this.state = 2468;
							this.match(DorisParser.RIGHT_PAREN);
						}
						break;
				}
				this.context.stop = this.tokenStream.LT(-1);
				this.state = 2498;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 329, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						previousContext = localContext;
						{
							this.state = 2496;
							this.errorHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(
									this.tokenStream,
									328,
									this.context
								)
							) {
								case 1:
									{
										localContext = new ElementAtContext(
											new PrimaryExpressionContext(parentContext, parentState)
										);
										localContext._value = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_primaryExpression
										);
										this.state = 2472;
										if (!this.precpred(this.context, 11)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 11)'
											);
										}
										this.state = 2473;
										this.match(DorisParser.LEFT_BRACKET);
										this.state = 2474;
										localContext._index = this.valueExpression(0);
										this.state = 2475;
										this.match(DorisParser.RIGHT_BRACKET);
									}
									break;
								case 2:
									{
										localContext = new ArraySliceContext(
											new PrimaryExpressionContext(parentContext, parentState)
										);
										localContext._value = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_primaryExpression
										);
										this.state = 2477;
										if (!this.precpred(this.context, 10)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 10)'
											);
										}
										this.state = 2478;
										this.match(DorisParser.LEFT_BRACKET);
										this.state = 2479;
										localContext._begin = this.valueExpression(0);
										this.state = 2480;
										this.match(DorisParser.COLON);
										this.state = 2482;
										this.errorHandler.sync(this);
										_la = this.tokenStream.LA(1);
										if (
											((_la & ~0x1f) === 0 &&
												((1 << _la) & 3427251012) !== 0) ||
											(((_la - 33) & ~0x1f) === 0 &&
												((1 << (_la - 33)) & 4009753405) !== 0) ||
											(((_la - 65) & ~0x1f) === 0 &&
												((1 << (_la - 65)) & 3204443871) !== 0) ||
											(((_la - 97) & ~0x1f) === 0 &&
												((1 << (_la - 97)) & 2147481585) !== 0) ||
											(((_la - 130) & ~0x1f) === 0 &&
												((1 << (_la - 130)) & 3755238181) !== 0) ||
											(((_la - 162) & ~0x1f) === 0 &&
												((1 << (_la - 162)) & 2785541669) !== 0) ||
											(((_la - 195) & ~0x1f) === 0 &&
												((1 << (_la - 195)) & 92265939) !== 0) ||
											(((_la - 230) & ~0x1f) === 0 &&
												((1 << (_la - 230)) & 1876226013) !== 0) ||
											(((_la - 263) & ~0x1f) === 0 &&
												((1 << (_la - 263)) & 2130443711) !== 0) ||
											(((_la - 295) & ~0x1f) === 0 &&
												((1 << (_la - 295)) & 4274056639) !== 0) ||
											(((_la - 327) & ~0x1f) === 0 &&
												((1 << (_la - 327)) & 3288240127) !== 0) ||
											(((_la - 359) & ~0x1f) === 0 &&
												((1 << (_la - 359)) & 3463969675) !== 0) ||
											(((_la - 391) & ~0x1f) === 0 &&
												((1 << (_la - 391)) & 4292776855) !== 0) ||
											(((_la - 423) & ~0x1f) === 0 &&
												((1 << (_la - 423)) & 4202393863) !== 0) ||
											(((_la - 455) & ~0x1f) === 0 &&
												((1 << (_la - 455)) & 2281612565) !== 0) ||
											(((_la - 490) & ~0x1f) === 0 &&
												((1 << (_la - 490)) & 2264934145) !== 0) ||
											(((_la - 522) & ~0x1f) === 0 &&
												((1 << (_la - 522)) & 27) !== 0)
										) {
											{
												this.state = 2481;
												localContext._end = this.valueExpression(0);
											}
										}
										this.state = 2484;
										this.match(DorisParser.RIGHT_BRACKET);
									}
									break;
								case 3:
									{
										localContext = new DereferenceContext(
											new PrimaryExpressionContext(parentContext, parentState)
										);
										localContext._base = previousContext;
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_primaryExpression
										);
										this.state = 2486;
										if (!this.precpred(this.context, 5)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 5)'
											);
										}
										this.state = 2487;
										this.match(DorisParser.DOT);
										this.state = 2488;
										localContext._fieldName = this.identifier();
									}
									break;
								case 4:
									{
										localContext = new CollateContext(
											new PrimaryExpressionContext(parentContext, parentState)
										);
										this.pushNewRecursionContext(
											localContext,
											_startState,
											DorisParser.RULE_primaryExpression
										);
										this.state = 2489;
										if (!this.precpred(this.context, 1)) {
											throw this.createFailedPredicateException(
												'this.precpred(this.context, 1)'
											);
										}
										this.state = 2490;
										this.match(DorisParser.COLLATE);
										this.state = 2494;
										this.errorHandler.sync(this);
										switch (this.tokenStream.LA(1)) {
											case DorisParser.LEFT_BRACE:
											case DorisParser.RIGHT_BRACE:
											case DorisParser.ADDDATE:
											case DorisParser.AFTER:
											case DorisParser.AGG_STATE:
											case DorisParser.AGGREGATE:
											case DorisParser.ALIAS:
											case DorisParser.ANALYZED:
											case DorisParser.ARRAY:
											case DorisParser.ARRAY_RANGE:
											case DorisParser.AT:
											case DorisParser.AUTHORS:
											case DorisParser.AUTO_INCREMENT:
											case DorisParser.BACKENDS:
											case DorisParser.BACKUP:
											case DorisParser.BEGIN:
											case DorisParser.BELONG:
											case DorisParser.BIN:
											case DorisParser.BITAND:
											case DorisParser.BITMAP:
											case DorisParser.BITMAP_UNION:
											case DorisParser.BITOR:
											case DorisParser.BITXOR:
											case DorisParser.BLOB:
											case DorisParser.BOOLEAN:
											case DorisParser.BRIEF:
											case DorisParser.BROKER:
											case DorisParser.BUCKETS:
											case DorisParser.BUILD:
											case DorisParser.BUILTIN:
											case DorisParser.BULK:
											case DorisParser.CACHE:
											case DorisParser.CACHED:
											case DorisParser.CALL:
											case DorisParser.CATALOG:
											case DorisParser.CATALOGS:
											case DorisParser.CHAIN:
											case DorisParser.CHAR:
											case DorisParser.CHARSET:
											case DorisParser.CHECK:
											case DorisParser.CLUSTER:
											case DorisParser.CLUSTERS:
											case DorisParser.COLLATION:
											case DorisParser.COLLECT:
											case DorisParser.COLOCATE:
											case DorisParser.COLUMNS:
											case DorisParser.COMMENT:
											case DorisParser.COMMIT:
											case DorisParser.COMMITTED:
											case DorisParser.COMPACT:
											case DorisParser.COMPLETE:
											case DorisParser.COMPRESS_TYPE:
											case DorisParser.CONFIG:
											case DorisParser.CONNECTION:
											case DorisParser.CONNECTION_ID:
											case DorisParser.CONSISTENT:
											case DorisParser.CONSTRAINTS:
											case DorisParser.CONVERT:
											case DorisParser.CONVERT_LSC:
											case DorisParser.COPY:
											case DorisParser.COUNT:
											case DorisParser.CREATION:
											case DorisParser.CRON:
											case DorisParser.CURRENT_CATALOG:
											case DorisParser.CURRENT_DATE:
											case DorisParser.CURRENT_TIME:
											case DorisParser.CURRENT_TIMESTAMP:
											case DorisParser.CURRENT_USER:
											case DorisParser.DATA:
											case DorisParser.DATE:
											case DorisParser.DATE_ADD:
											case DorisParser.DATE_CEIL:
											case DorisParser.DATE_DIFF:
											case DorisParser.DATE_FLOOR:
											case DorisParser.DATE_SUB:
											case DorisParser.DATEADD:
											case DorisParser.DATEDIFF:
											case DorisParser.DATETIME:
											case DorisParser.DATETIMEV2:
											case DorisParser.DATEV2:
											case DorisParser.DATETIMEV1:
											case DorisParser.DATEV1:
											case DorisParser.DAY:
											case DorisParser.DAYS_ADD:
											case DorisParser.DAYS_SUB:
											case DorisParser.DECIMAL:
											case DorisParser.DECIMALV2:
											case DorisParser.DECIMALV3:
											case DorisParser.DEFERRED:
											case DorisParser.DEMAND:
											case DorisParser.DIAGNOSE:
											case DorisParser.DISTINCTPC:
											case DorisParser.DISTINCTPCSA:
											case DorisParser.DO:
											case DorisParser.DORIS_INTERNAL_TABLE_ID:
											case DorisParser.DUAL:
											case DorisParser.DYNAMIC:
											case DorisParser.ENABLE:
											case DorisParser.ENCRYPTKEY:
											case DorisParser.ENCRYPTKEYS:
											case DorisParser.END:
											case DorisParser.ENDS:
											case DorisParser.ENGINE:
											case DorisParser.ENGINES:
											case DorisParser.ERRORS:
											case DorisParser.EVENTS:
											case DorisParser.EVERY:
											case DorisParser.EXCLUDE:
											case DorisParser.EXPIRED:
											case DorisParser.EXTERNAL:
											case DorisParser.FAILED_LOGIN_ATTEMPTS:
											case DorisParser.FAST:
											case DorisParser.FEATURE:
											case DorisParser.FIELDS:
											case DorisParser.FILE:
											case DorisParser.FILTER:
											case DorisParser.FIRST:
											case DorisParser.FORMAT:
											case DorisParser.FREE:
											case DorisParser.FRONTENDS:
											case DorisParser.FUNCTION:
											case DorisParser.GENERIC:
											case DorisParser.GLOBAL:
											case DorisParser.GRAPH:
											case DorisParser.GROUPING:
											case DorisParser.GROUPS:
											case DorisParser.HASH:
											case DorisParser.HDFS:
											case DorisParser.HELP:
											case DorisParser.HISTOGRAM:
											case DorisParser.HLL_UNION:
											case DorisParser.HOSTNAME:
											case DorisParser.HOTSPOT:
											case DorisParser.HOUR:
											case DorisParser.HUB:
											case DorisParser.IDENTIFIED:
											case DorisParser.IGNORE:
											case DorisParser.IMMEDIATE:
											case DorisParser.INCREMENTAL:
											case DorisParser.INDEXES:
											case DorisParser.INVERTED:
											case DorisParser.IPV4:
											case DorisParser.IPV6:
											case DorisParser.IS_NOT_NULL_PRED:
											case DorisParser.IS_NULL_PRED:
											case DorisParser.ISNULL:
											case DorisParser.ISOLATION:
											case DorisParser.JOB:
											case DorisParser.JOBS:
											case DorisParser.JSON:
											case DorisParser.JSONB:
											case DorisParser.LABEL:
											case DorisParser.LAST:
											case DorisParser.LDAP:
											case DorisParser.LDAP_ADMIN_PASSWORD:
											case DorisParser.LESS:
											case DorisParser.LEVEL:
											case DorisParser.LINES:
											case DorisParser.LINK:
											case DorisParser.LOCAL:
											case DorisParser.LOCALTIME:
											case DorisParser.LOCALTIMESTAMP:
											case DorisParser.LOCATION:
											case DorisParser.LOCK:
											case DorisParser.LOGICAL:
											case DorisParser.MANUAL:
											case DorisParser.MAP:
											case DorisParser.MATCH_ALL:
											case DorisParser.MATCH_ANY:
											case DorisParser.MATCH_PHRASE:
											case DorisParser.MATCH_PHRASE_EDGE:
											case DorisParser.MATCH_PHRASE_PREFIX:
											case DorisParser.MATCH_REGEXP:
											case DorisParser.MATERIALIZED:
											case DorisParser.MAX:
											case DorisParser.MEMO:
											case DorisParser.MERGE:
											case DorisParser.MIGRATE:
											case DorisParser.MIGRATIONS:
											case DorisParser.MIN:
											case DorisParser.MINUTE:
											case DorisParser.MODIFY:
											case DorisParser.MONTH:
											case DorisParser.MTMV:
											case DorisParser.NAME:
											case DorisParser.NAMES:
											case DorisParser.NEGATIVE:
											case DorisParser.NEVER:
											case DorisParser.NEXT:
											case DorisParser.NGRAM_BF:
											case DorisParser.NO:
											case DorisParser.NON_NULLABLE:
											case DorisParser.NULLS:
											case DorisParser.OF:
											case DorisParser.OFFSET:
											case DorisParser.ONLY:
											case DorisParser.OPEN:
											case DorisParser.OPTIMIZED:
											case DorisParser.PARAMETER:
											case DorisParser.PARSED:
											case DorisParser.PARTITIONS:
											case DorisParser.PASSWORD:
											case DorisParser.PASSWORD_EXPIRE:
											case DorisParser.PASSWORD_HISTORY:
											case DorisParser.PASSWORD_LOCK_TIME:
											case DorisParser.PASSWORD_REUSE:
											case DorisParser.PATH:
											case DorisParser.PAUSE:
											case DorisParser.PERCENT:
											case DorisParser.PERIOD:
											case DorisParser.PERMISSIVE:
											case DorisParser.PHYSICAL:
											case DorisParser.PLAN:
											case DorisParser.PRIVILEGES:
											case DorisParser.PROCESS:
											case DorisParser.PLUGIN:
											case DorisParser.PLUGINS:
											case DorisParser.POLICY:
											case DorisParser.PROC:
											case DorisParser.PROCESSLIST:
											case DorisParser.PROFILE:
											case DorisParser.PROPERTIES:
											case DorisParser.PROPERTY:
											case DorisParser.QUANTILE_STATE:
											case DorisParser.QUANTILE_UNION:
											case DorisParser.QUERY:
											case DorisParser.QUOTA:
											case DorisParser.RANDOM:
											case DorisParser.RECENT:
											case DorisParser.RECOVER:
											case DorisParser.RECYCLE:
											case DorisParser.REFRESH:
											case DorisParser.REPEATABLE:
											case DorisParser.REPLACE:
											case DorisParser.REPLACE_IF_NOT_NULL:
											case DorisParser.REPOSITORIES:
											case DorisParser.REPOSITORY:
											case DorisParser.RESOURCE:
											case DorisParser.RESOURCES:
											case DorisParser.RESTORE:
											case DorisParser.RESTRICTIVE:
											case DorisParser.RESUME:
											case DorisParser.RETURNS:
											case DorisParser.REWRITTEN:
											case DorisParser.RLIKE:
											case DorisParser.ROLLBACK:
											case DorisParser.ROLLUP:
											case DorisParser.ROUTINE:
											case DorisParser.S3:
											case DorisParser.SAMPLE:
											case DorisParser.SCHEDULE:
											case DorisParser.SCHEDULER:
											case DorisParser.SCHEMA:
											case DorisParser.SECOND:
											case DorisParser.SEQUENCE:
											case DorisParser.SERIALIZABLE:
											case DorisParser.SESSION:
											case DorisParser.SHAPE:
											case DorisParser.SKEW:
											case DorisParser.SNAPSHOT:
											case DorisParser.SONAME:
											case DorisParser.SPLIT:
											case DorisParser.SQL:
											case DorisParser.STAGES:
											case DorisParser.START:
											case DorisParser.STARTS:
											case DorisParser.STATS:
											case DorisParser.STATUS:
											case DorisParser.STOP:
											case DorisParser.STORAGE:
											case DorisParser.STREAM:
											case DorisParser.STREAMING:
											case DorisParser.STRING:
											case DorisParser.STRUCT:
											case DorisParser.SUBDATE:
											case DorisParser.SUM:
											case DorisParser.TABLES:
											case DorisParser.TASK:
											case DorisParser.TASKS:
											case DorisParser.TEMPORARY:
											case DorisParser.TEXT:
											case DorisParser.THAN:
											case DorisParser.TIME:
											case DorisParser.TIMESTAMP:
											case DorisParser.TIMESTAMPADD:
											case DorisParser.TIMESTAMPDIFF:
											case DorisParser.TRANSACTION:
											case DorisParser.TREE:
											case DorisParser.TRIGGERS:
											case DorisParser.TRUNCATE:
											case DorisParser.TYPE:
											case DorisParser.TYPES:
											case DorisParser.UNCOMMITTED:
											case DorisParser.UNLOCK:
											case DorisParser.UP:
											case DorisParser.USER:
											case DorisParser.VALUE:
											case DorisParser.VARCHAR:
											case DorisParser.VARIABLES:
											case DorisParser.VARIANT:
											case DorisParser.VAULT:
											case DorisParser.VERBOSE:
											case DorisParser.VERSION:
											case DorisParser.VIEW:
											case DorisParser.WARM:
											case DorisParser.WARNINGS:
											case DorisParser.WEEK:
											case DorisParser.WORK:
											case DorisParser.YEAR:
											case DorisParser.IDENTIFIER:
											case DorisParser.BACKQUOTED_IDENTIFIER:
												{
													this.state = 2491;
													this.identifier();
												}
												break;
											case DorisParser.STRING_LITERAL:
												{
													this.state = 2492;
													this.match(DorisParser.STRING_LITERAL);
												}
												break;
											case DorisParser.DEFAULT:
												{
													this.state = 2493;
													this.match(DorisParser.DEFAULT);
												}
												break;
											default:
												throw new antlr.NoViableAltException(this);
										}
									}
									break;
							}
						}
					}
					this.state = 2500;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						329,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(parentContext);
		}
		return localContext;
	}
	castDataType() {
		let localContext = new CastDataTypeContext(this.context, this.state);
		this.enterRule(localContext, 232, DorisParser.RULE_castDataType);
		let _la;
		try {
			this.state = 2506;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_PAREN:
				case DorisParser.RIGHT_PAREN:
				case DorisParser.AGG_STATE:
				case DorisParser.ALL:
				case DorisParser.ARRAY:
				case DorisParser.BIGINT:
				case DorisParser.BITMAP:
				case DorisParser.BOOLEAN:
				case DorisParser.CHAR:
				case DorisParser.DATE:
				case DorisParser.DATETIME:
				case DorisParser.DATETIMEV2:
				case DorisParser.DATEV2:
				case DorisParser.DATETIMEV1:
				case DorisParser.DATEV1:
				case DorisParser.DECIMAL:
				case DorisParser.DECIMALV2:
				case DorisParser.DECIMALV3:
				case DorisParser.DOUBLE:
				case DorisParser.FLOAT:
				case DorisParser.HLL:
				case DorisParser.INT:
				case DorisParser.INTEGER:
				case DorisParser.IPV4:
				case DorisParser.IPV6:
				case DorisParser.JSON:
				case DorisParser.JSONB:
				case DorisParser.LARGEINT:
				case DorisParser.MAP:
				case DorisParser.QUANTILE_STATE:
				case DorisParser.SMALLINT:
				case DorisParser.STRING:
				case DorisParser.STRUCT:
				case DorisParser.TEXT:
				case DorisParser.TIME:
				case DorisParser.TINYINT:
				case DorisParser.VARCHAR:
				case DorisParser.VARIANT:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2501;
						this.dataType();
					}
					break;
				case DorisParser.SIGNED:
				case DorisParser.UNSIGNED:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2502;
						_la = this.tokenStream.LA(1);
						if (!(_la === 405 || _la === 464)) {
							this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2504;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 226 || _la === 227) {
							{
								this.state = 2503;
								_la = this.tokenStream.LA(1);
								if (!(_la === 226 || _la === 227)) {
									this.errorHandler.recoverInline(this);
								} else {
									this.errorHandler.reportMatch(this);
									this.consume();
								}
							}
						}
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	functionCallExpression() {
		let localContext = new FunctionCallExpressionContext(this.context, this.state);
		this.enterRule(localContext, 234, DorisParser.RULE_functionCallExpression);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2508;
				this.functionIdentifier();
				this.state = 2509;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 2533;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (
					((_la & ~0x1f) === 0 && ((1 << _la) & 3427775300) !== 0) ||
					(((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4009753405) !== 0) ||
					(((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 3204443871) !== 0) ||
					(((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 2147481585) !== 0) ||
					(((_la - 130) & ~0x1f) === 0 && ((1 << (_la - 130)) & 3755238309) !== 0) ||
					(((_la - 162) & ~0x1f) === 0 && ((1 << (_la - 162)) & 2785541685) !== 0) ||
					(((_la - 195) & ~0x1f) === 0 && ((1 << (_la - 195)) & 92265939) !== 0) ||
					(((_la - 230) & ~0x1f) === 0 && ((1 << (_la - 230)) & 1876226013) !== 0) ||
					(((_la - 263) & ~0x1f) === 0 && ((1 << (_la - 263)) & 2130443711) !== 0) ||
					(((_la - 295) & ~0x1f) === 0 && ((1 << (_la - 295)) & 4274056703) !== 0) ||
					(((_la - 327) & ~0x1f) === 0 && ((1 << (_la - 327)) & 3288240127) !== 0) ||
					(((_la - 359) & ~0x1f) === 0 && ((1 << (_la - 359)) & 3463969675) !== 0) ||
					(((_la - 391) & ~0x1f) === 0 && ((1 << (_la - 391)) & 4292776855) !== 0) ||
					(((_la - 423) & ~0x1f) === 0 && ((1 << (_la - 423)) & 4202393863) !== 0) ||
					(((_la - 455) & ~0x1f) === 0 && ((1 << (_la - 455)) & 2281612565) !== 0) ||
					(((_la - 490) & ~0x1f) === 0 && ((1 << (_la - 490)) & 2264999681) !== 0) ||
					(((_la - 522) & ~0x1f) === 0 && ((1 << (_la - 522)) & 27) !== 0)
				) {
					{
						this.state = 2511;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 19 || _la === 137) {
							{
								this.state = 2510;
								_la = this.tokenStream.LA(1);
								if (!(_la === 19 || _la === 137)) {
									this.errorHandler.recoverInline(this);
								} else {
									this.errorHandler.reportMatch(this);
									this.consume();
								}
							}
						}
						this.state = 2513;
						localContext._expression = this.expression();
						localContext._arguments.push(localContext._expression);
						this.state = 2518;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 2514;
									this.match(DorisParser.COMMA);
									this.state = 2515;
									localContext._expression = this.expression();
									localContext._arguments.push(localContext._expression);
								}
							}
							this.state = 2520;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 2531;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 312) {
							{
								this.state = 2521;
								this.match(DorisParser.ORDER);
								this.state = 2522;
								this.match(DorisParser.BY);
								this.state = 2523;
								this.sortItem();
								this.state = 2528;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								while (_la === 4) {
									{
										{
											this.state = 2524;
											this.match(DorisParser.COMMA);
											this.state = 2525;
											this.sortItem();
										}
									}
									this.state = 2530;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
								}
							}
						}
					}
				}
				this.state = 2535;
				this.match(DorisParser.RIGHT_PAREN);
				this.state = 2538;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 337, this.context)) {
					case 1:
						{
							this.state = 2536;
							this.match(DorisParser.OVER);
							this.state = 2537;
							this.windowSpec();
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	functionIdentifier() {
		let localContext = new FunctionIdentifierContext(this.context, this.state);
		this.enterRule(localContext, 236, DorisParser.RULE_functionIdentifier);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2543;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 338, this.context)) {
					case 1:
						{
							this.state = 2540;
							localContext._dbName = this.identifier();
							this.state = 2541;
							this.match(DorisParser.DOT);
						}
						break;
				}
				this.state = 2545;
				this.functionNameIdentifier();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	functionNameIdentifier() {
		let localContext = new FunctionNameIdentifierContext(this.context, this.state);
		this.enterRule(localContext, 238, DorisParser.RULE_functionNameIdentifier);
		try {
			this.state = 2562;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 339, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2547;
						this.identifier();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2548;
						this.match(DorisParser.ADD);
					}
					break;
				case 3:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 2549;
						this.match(DorisParser.CONNECTION_ID);
					}
					break;
				case 4:
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 2550;
						this.match(DorisParser.CURRENT_CATALOG);
					}
					break;
				case 5:
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 2551;
						this.match(DorisParser.CURRENT_USER);
					}
					break;
				case 6:
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 2552;
						this.match(DorisParser.DATABASE);
					}
					break;
				case 7:
					this.enterOuterAlt(localContext, 7);
					{
						this.state = 2553;
						this.match(DorisParser.IF);
					}
					break;
				case 8:
					this.enterOuterAlt(localContext, 8);
					{
						this.state = 2554;
						this.match(DorisParser.LEFT);
					}
					break;
				case 9:
					this.enterOuterAlt(localContext, 9);
					{
						this.state = 2555;
						this.match(DorisParser.LIKE);
					}
					break;
				case 10:
					this.enterOuterAlt(localContext, 10);
					{
						this.state = 2556;
						this.match(DorisParser.PASSWORD);
					}
					break;
				case 11:
					this.enterOuterAlt(localContext, 11);
					{
						this.state = 2557;
						this.match(DorisParser.REGEXP);
					}
					break;
				case 12:
					this.enterOuterAlt(localContext, 12);
					{
						this.state = 2558;
						this.match(DorisParser.RIGHT);
					}
					break;
				case 13:
					this.enterOuterAlt(localContext, 13);
					{
						this.state = 2559;
						this.match(DorisParser.SCHEMA);
					}
					break;
				case 14:
					this.enterOuterAlt(localContext, 14);
					{
						this.state = 2560;
						this.match(DorisParser.TRIM);
					}
					break;
				case 15:
					this.enterOuterAlt(localContext, 15);
					{
						this.state = 2561;
						this.match(DorisParser.USER);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	windowSpec() {
		let localContext = new WindowSpecContext(this.context, this.state);
		this.enterRule(localContext, 240, DorisParser.RULE_windowSpec);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2564;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 2566;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 319) {
					{
						this.state = 2565;
						this.partitionClause();
					}
				}
				this.state = 2569;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 312) {
					{
						this.state = 2568;
						this.sortClause();
					}
				}
				this.state = 2572;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 353 || _la === 388) {
					{
						this.state = 2571;
						this.windowFrame();
					}
				}
				this.state = 2574;
				this.match(DorisParser.RIGHT_PAREN);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	windowFrame() {
		let localContext = new WindowFrameContext(this.context, this.state);
		this.enterRule(localContext, 242, DorisParser.RULE_windowFrame);
		try {
			this.state = 2585;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 343, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2576;
						this.frameUnits();
						this.state = 2577;
						localContext._start = this.frameBoundary();
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2579;
						this.frameUnits();
						this.state = 2580;
						this.match(DorisParser.BETWEEN);
						this.state = 2581;
						localContext._start = this.frameBoundary();
						this.state = 2582;
						this.match(DorisParser.AND);
						this.state = 2583;
						localContext._end = this.frameBoundary();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	frameUnits() {
		let localContext = new FrameUnitsContext(this.context, this.state);
		this.enterRule(localContext, 244, DorisParser.RULE_frameUnits);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2587;
				_la = this.tokenStream.LA(1);
				if (!(_la === 353 || _la === 388)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	frameBoundary() {
		let localContext = new FrameBoundaryContext(this.context, this.state);
		this.enterRule(localContext, 246, DorisParser.RULE_frameBoundary);
		let _la;
		try {
			this.state = 2596;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.UNBOUNDED:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2589;
						this.match(DorisParser.UNBOUNDED);
						this.state = 2590;
						localContext._boundType = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(_la === 183 || _la === 339)) {
							localContext._boundType = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				case DorisParser.CURRENT:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2591;
						localContext._boundType = this.match(DorisParser.CURRENT);
						this.state = 2592;
						this.match(DorisParser.ROW);
					}
					break;
				case DorisParser.LEFT_PAREN:
				case DorisParser.LEFT_BRACKET:
				case DorisParser.LEFT_BRACE:
				case DorisParser.RIGHT_BRACE:
				case DorisParser.ADD:
				case DorisParser.ADDDATE:
				case DorisParser.AFTER:
				case DorisParser.AGG_STATE:
				case DorisParser.AGGREGATE:
				case DorisParser.ALIAS:
				case DorisParser.ANALYZED:
				case DorisParser.ARRAY:
				case DorisParser.ARRAY_RANGE:
				case DorisParser.AT:
				case DorisParser.AUTHORS:
				case DorisParser.AUTO_INCREMENT:
				case DorisParser.BACKENDS:
				case DorisParser.BACKUP:
				case DorisParser.BEGIN:
				case DorisParser.BELONG:
				case DorisParser.BIN:
				case DorisParser.BINARY:
				case DorisParser.BITAND:
				case DorisParser.BITMAP:
				case DorisParser.BITMAP_UNION:
				case DorisParser.BITOR:
				case DorisParser.BITXOR:
				case DorisParser.BLOB:
				case DorisParser.BOOLEAN:
				case DorisParser.BRIEF:
				case DorisParser.BROKER:
				case DorisParser.BUCKETS:
				case DorisParser.BUILD:
				case DorisParser.BUILTIN:
				case DorisParser.BULK:
				case DorisParser.CACHE:
				case DorisParser.CACHED:
				case DorisParser.CALL:
				case DorisParser.CASE:
				case DorisParser.CAST:
				case DorisParser.CATALOG:
				case DorisParser.CATALOGS:
				case DorisParser.CHAIN:
				case DorisParser.CHAR:
				case DorisParser.CHARSET:
				case DorisParser.CHECK:
				case DorisParser.CLUSTER:
				case DorisParser.CLUSTERS:
				case DorisParser.COLLATION:
				case DorisParser.COLLECT:
				case DorisParser.COLOCATE:
				case DorisParser.COLUMNS:
				case DorisParser.COMMENT:
				case DorisParser.COMMIT:
				case DorisParser.COMMITTED:
				case DorisParser.COMPACT:
				case DorisParser.COMPLETE:
				case DorisParser.COMPRESS_TYPE:
				case DorisParser.CONFIG:
				case DorisParser.CONNECTION:
				case DorisParser.CONNECTION_ID:
				case DorisParser.CONSISTENT:
				case DorisParser.CONSTRAINTS:
				case DorisParser.CONVERT:
				case DorisParser.CONVERT_LSC:
				case DorisParser.COPY:
				case DorisParser.COUNT:
				case DorisParser.CREATION:
				case DorisParser.CRON:
				case DorisParser.CURRENT_CATALOG:
				case DorisParser.CURRENT_DATE:
				case DorisParser.CURRENT_TIME:
				case DorisParser.CURRENT_TIMESTAMP:
				case DorisParser.CURRENT_USER:
				case DorisParser.DATA:
				case DorisParser.DATABASE:
				case DorisParser.DATE:
				case DorisParser.DATE_ADD:
				case DorisParser.DATE_CEIL:
				case DorisParser.DATE_DIFF:
				case DorisParser.DATE_FLOOR:
				case DorisParser.DATE_SUB:
				case DorisParser.DATEADD:
				case DorisParser.DATEDIFF:
				case DorisParser.DATETIME:
				case DorisParser.DATETIMEV2:
				case DorisParser.DATEV2:
				case DorisParser.DATETIMEV1:
				case DorisParser.DATEV1:
				case DorisParser.DAY:
				case DorisParser.DAYS_ADD:
				case DorisParser.DAYS_SUB:
				case DorisParser.DECIMAL:
				case DorisParser.DECIMALV2:
				case DorisParser.DECIMALV3:
				case DorisParser.DEFERRED:
				case DorisParser.DEMAND:
				case DorisParser.DIAGNOSE:
				case DorisParser.DISTINCTPC:
				case DorisParser.DISTINCTPCSA:
				case DorisParser.DO:
				case DorisParser.DORIS_INTERNAL_TABLE_ID:
				case DorisParser.DUAL:
				case DorisParser.DYNAMIC:
				case DorisParser.ENABLE:
				case DorisParser.ENCRYPTKEY:
				case DorisParser.ENCRYPTKEYS:
				case DorisParser.END:
				case DorisParser.ENDS:
				case DorisParser.ENGINE:
				case DorisParser.ENGINES:
				case DorisParser.ERRORS:
				case DorisParser.EVENTS:
				case DorisParser.EVERY:
				case DorisParser.EXCLUDE:
				case DorisParser.EXISTS:
				case DorisParser.EXPIRED:
				case DorisParser.EXTERNAL:
				case DorisParser.EXTRACT:
				case DorisParser.FAILED_LOGIN_ATTEMPTS:
				case DorisParser.FALSE:
				case DorisParser.FAST:
				case DorisParser.FEATURE:
				case DorisParser.FIELDS:
				case DorisParser.FILE:
				case DorisParser.FILTER:
				case DorisParser.FIRST:
				case DorisParser.FORMAT:
				case DorisParser.FREE:
				case DorisParser.FRONTENDS:
				case DorisParser.FUNCTION:
				case DorisParser.GENERIC:
				case DorisParser.GLOBAL:
				case DorisParser.GRAPH:
				case DorisParser.GROUPING:
				case DorisParser.GROUPS:
				case DorisParser.HASH:
				case DorisParser.HDFS:
				case DorisParser.HELP:
				case DorisParser.HISTOGRAM:
				case DorisParser.HLL_UNION:
				case DorisParser.HOSTNAME:
				case DorisParser.HOTSPOT:
				case DorisParser.HOUR:
				case DorisParser.HUB:
				case DorisParser.IDENTIFIED:
				case DorisParser.IF:
				case DorisParser.IGNORE:
				case DorisParser.IMMEDIATE:
				case DorisParser.INCREMENTAL:
				case DorisParser.INDEXES:
				case DorisParser.INTERVAL:
				case DorisParser.INVERTED:
				case DorisParser.IPV4:
				case DorisParser.IPV6:
				case DorisParser.IS_NOT_NULL_PRED:
				case DorisParser.IS_NULL_PRED:
				case DorisParser.ISNULL:
				case DorisParser.ISOLATION:
				case DorisParser.JOB:
				case DorisParser.JOBS:
				case DorisParser.JSON:
				case DorisParser.JSONB:
				case DorisParser.KEY:
				case DorisParser.LABEL:
				case DorisParser.LAST:
				case DorisParser.LDAP:
				case DorisParser.LDAP_ADMIN_PASSWORD:
				case DorisParser.LEFT:
				case DorisParser.LESS:
				case DorisParser.LEVEL:
				case DorisParser.LIKE:
				case DorisParser.LINES:
				case DorisParser.LINK:
				case DorisParser.LOCAL:
				case DorisParser.LOCALTIME:
				case DorisParser.LOCALTIMESTAMP:
				case DorisParser.LOCATION:
				case DorisParser.LOCK:
				case DorisParser.LOGICAL:
				case DorisParser.MANUAL:
				case DorisParser.MAP:
				case DorisParser.MATCH_ALL:
				case DorisParser.MATCH_ANY:
				case DorisParser.MATCH_PHRASE:
				case DorisParser.MATCH_PHRASE_EDGE:
				case DorisParser.MATCH_PHRASE_PREFIX:
				case DorisParser.MATCH_REGEXP:
				case DorisParser.MATERIALIZED:
				case DorisParser.MAX:
				case DorisParser.MEMO:
				case DorisParser.MERGE:
				case DorisParser.MIGRATE:
				case DorisParser.MIGRATIONS:
				case DorisParser.MIN:
				case DorisParser.MINUTE:
				case DorisParser.MODIFY:
				case DorisParser.MONTH:
				case DorisParser.MTMV:
				case DorisParser.NAME:
				case DorisParser.NAMES:
				case DorisParser.NEGATIVE:
				case DorisParser.NEVER:
				case DorisParser.NEXT:
				case DorisParser.NGRAM_BF:
				case DorisParser.NO:
				case DorisParser.NON_NULLABLE:
				case DorisParser.NOT:
				case DorisParser.NULL:
				case DorisParser.NULLS:
				case DorisParser.OF:
				case DorisParser.OFFSET:
				case DorisParser.ONLY:
				case DorisParser.OPEN:
				case DorisParser.OPTIMIZED:
				case DorisParser.PARAMETER:
				case DorisParser.PARSED:
				case DorisParser.PARTITIONS:
				case DorisParser.PASSWORD:
				case DorisParser.PASSWORD_EXPIRE:
				case DorisParser.PASSWORD_HISTORY:
				case DorisParser.PASSWORD_LOCK_TIME:
				case DorisParser.PASSWORD_REUSE:
				case DorisParser.PATH:
				case DorisParser.PAUSE:
				case DorisParser.PERCENT:
				case DorisParser.PERIOD:
				case DorisParser.PERMISSIVE:
				case DorisParser.PHYSICAL:
				case DorisParser.PLACEHOLDER:
				case DorisParser.PLAN:
				case DorisParser.PRIVILEGES:
				case DorisParser.PROCESS:
				case DorisParser.PLUGIN:
				case DorisParser.PLUGINS:
				case DorisParser.POLICY:
				case DorisParser.PROC:
				case DorisParser.PROCESSLIST:
				case DorisParser.PROFILE:
				case DorisParser.PROPERTIES:
				case DorisParser.PROPERTY:
				case DorisParser.QUANTILE_STATE:
				case DorisParser.QUANTILE_UNION:
				case DorisParser.QUERY:
				case DorisParser.QUOTA:
				case DorisParser.RANDOM:
				case DorisParser.RECENT:
				case DorisParser.RECOVER:
				case DorisParser.RECYCLE:
				case DorisParser.REFRESH:
				case DorisParser.REGEXP:
				case DorisParser.REPEATABLE:
				case DorisParser.REPLACE:
				case DorisParser.REPLACE_IF_NOT_NULL:
				case DorisParser.REPOSITORIES:
				case DorisParser.REPOSITORY:
				case DorisParser.RESOURCE:
				case DorisParser.RESOURCES:
				case DorisParser.RESTORE:
				case DorisParser.RESTRICTIVE:
				case DorisParser.RESUME:
				case DorisParser.RETURNS:
				case DorisParser.REWRITTEN:
				case DorisParser.RIGHT:
				case DorisParser.RLIKE:
				case DorisParser.ROLLBACK:
				case DorisParser.ROLLUP:
				case DorisParser.ROUTINE:
				case DorisParser.S3:
				case DorisParser.SAMPLE:
				case DorisParser.SCHEDULE:
				case DorisParser.SCHEDULER:
				case DorisParser.SCHEMA:
				case DorisParser.SECOND:
				case DorisParser.SEQUENCE:
				case DorisParser.SERIALIZABLE:
				case DorisParser.SESSION:
				case DorisParser.SHAPE:
				case DorisParser.SKEW:
				case DorisParser.SNAPSHOT:
				case DorisParser.SONAME:
				case DorisParser.SPLIT:
				case DorisParser.SQL:
				case DorisParser.STAGES:
				case DorisParser.START:
				case DorisParser.STARTS:
				case DorisParser.STATS:
				case DorisParser.STATUS:
				case DorisParser.STOP:
				case DorisParser.STORAGE:
				case DorisParser.STREAM:
				case DorisParser.STREAMING:
				case DorisParser.STRING:
				case DorisParser.STRUCT:
				case DorisParser.SUBDATE:
				case DorisParser.SUM:
				case DorisParser.TABLES:
				case DorisParser.TASK:
				case DorisParser.TASKS:
				case DorisParser.TEMPORARY:
				case DorisParser.TEXT:
				case DorisParser.THAN:
				case DorisParser.TIME:
				case DorisParser.TIMESTAMP:
				case DorisParser.TIMESTAMPADD:
				case DorisParser.TIMESTAMPDIFF:
				case DorisParser.TRANSACTION:
				case DorisParser.TREE:
				case DorisParser.TRIGGERS:
				case DorisParser.TRIM:
				case DorisParser.TRUE:
				case DorisParser.TRUNCATE:
				case DorisParser.TYPE:
				case DorisParser.TYPES:
				case DorisParser.UNCOMMITTED:
				case DorisParser.UNLOCK:
				case DorisParser.UP:
				case DorisParser.USER:
				case DorisParser.VALUE:
				case DorisParser.VARCHAR:
				case DorisParser.VARIABLES:
				case DorisParser.VARIANT:
				case DorisParser.VAULT:
				case DorisParser.VERBOSE:
				case DorisParser.VERSION:
				case DorisParser.VIEW:
				case DorisParser.WARM:
				case DorisParser.WARNINGS:
				case DorisParser.WEEK:
				case DorisParser.WORK:
				case DorisParser.YEAR:
				case DorisParser.PLUS:
				case DorisParser.SUBTRACT:
				case DorisParser.ASTERISK:
				case DorisParser.TILDE:
				case DorisParser.LOGICALNOT:
				case DorisParser.ATSIGN:
				case DorisParser.DOUBLEATSIGN:
				case DorisParser.STRING_LITERAL:
				case DorisParser.INTEGER_VALUE:
				case DorisParser.EXPONENT_VALUE:
				case DorisParser.DECIMAL_VALUE:
				case DorisParser.IDENTIFIER:
				case DorisParser.BACKQUOTED_IDENTIFIER:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 2593;
						this.expression();
						this.state = 2594;
						localContext._boundType = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(_la === 183 || _la === 339)) {
							localContext._boundType = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	qualifiedName() {
		let localContext = new QualifiedNameContext(this.context, this.state);
		this.enterRule(localContext, 248, DorisParser.RULE_qualifiedName);
		try {
			let alternative;
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2598;
				this.identifier();
				this.state = 2603;
				this.errorHandler.sync(this);
				alternative = this.interpreter.adaptivePredict(this.tokenStream, 345, this.context);
				while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
					if (alternative === 1) {
						{
							{
								this.state = 2599;
								this.match(DorisParser.DOT);
								this.state = 2600;
								this.identifier();
							}
						}
					}
					this.state = 2605;
					this.errorHandler.sync(this);
					alternative = this.interpreter.adaptivePredict(
						this.tokenStream,
						345,
						this.context
					);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	specifiedPartition() {
		let localContext = new SpecifiedPartitionContext(this.context, this.state);
		this.enterRule(localContext, 250, DorisParser.RULE_specifiedPartition);
		let _la;
		try {
			this.state = 2619;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 349, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2607;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 437) {
							{
								this.state = 2606;
								this.match(DorisParser.TEMPORARY);
							}
						}
						this.state = 2609;
						this.match(DorisParser.PARTITION);
						this.state = 2612;
						this.errorHandler.sync(this);
						switch (this.tokenStream.LA(1)) {
							case DorisParser.LEFT_BRACE:
							case DorisParser.RIGHT_BRACE:
							case DorisParser.ADDDATE:
							case DorisParser.AFTER:
							case DorisParser.AGG_STATE:
							case DorisParser.AGGREGATE:
							case DorisParser.ALIAS:
							case DorisParser.ANALYZED:
							case DorisParser.ARRAY:
							case DorisParser.ARRAY_RANGE:
							case DorisParser.AT:
							case DorisParser.AUTHORS:
							case DorisParser.AUTO_INCREMENT:
							case DorisParser.BACKENDS:
							case DorisParser.BACKUP:
							case DorisParser.BEGIN:
							case DorisParser.BELONG:
							case DorisParser.BIN:
							case DorisParser.BITAND:
							case DorisParser.BITMAP:
							case DorisParser.BITMAP_UNION:
							case DorisParser.BITOR:
							case DorisParser.BITXOR:
							case DorisParser.BLOB:
							case DorisParser.BOOLEAN:
							case DorisParser.BRIEF:
							case DorisParser.BROKER:
							case DorisParser.BUCKETS:
							case DorisParser.BUILD:
							case DorisParser.BUILTIN:
							case DorisParser.BULK:
							case DorisParser.CACHE:
							case DorisParser.CACHED:
							case DorisParser.CALL:
							case DorisParser.CATALOG:
							case DorisParser.CATALOGS:
							case DorisParser.CHAIN:
							case DorisParser.CHAR:
							case DorisParser.CHARSET:
							case DorisParser.CHECK:
							case DorisParser.CLUSTER:
							case DorisParser.CLUSTERS:
							case DorisParser.COLLATION:
							case DorisParser.COLLECT:
							case DorisParser.COLOCATE:
							case DorisParser.COLUMNS:
							case DorisParser.COMMENT:
							case DorisParser.COMMIT:
							case DorisParser.COMMITTED:
							case DorisParser.COMPACT:
							case DorisParser.COMPLETE:
							case DorisParser.COMPRESS_TYPE:
							case DorisParser.CONFIG:
							case DorisParser.CONNECTION:
							case DorisParser.CONNECTION_ID:
							case DorisParser.CONSISTENT:
							case DorisParser.CONSTRAINTS:
							case DorisParser.CONVERT:
							case DorisParser.CONVERT_LSC:
							case DorisParser.COPY:
							case DorisParser.COUNT:
							case DorisParser.CREATION:
							case DorisParser.CRON:
							case DorisParser.CURRENT_CATALOG:
							case DorisParser.CURRENT_DATE:
							case DorisParser.CURRENT_TIME:
							case DorisParser.CURRENT_TIMESTAMP:
							case DorisParser.CURRENT_USER:
							case DorisParser.DATA:
							case DorisParser.DATE:
							case DorisParser.DATE_ADD:
							case DorisParser.DATE_CEIL:
							case DorisParser.DATE_DIFF:
							case DorisParser.DATE_FLOOR:
							case DorisParser.DATE_SUB:
							case DorisParser.DATEADD:
							case DorisParser.DATEDIFF:
							case DorisParser.DATETIME:
							case DorisParser.DATETIMEV2:
							case DorisParser.DATEV2:
							case DorisParser.DATETIMEV1:
							case DorisParser.DATEV1:
							case DorisParser.DAY:
							case DorisParser.DAYS_ADD:
							case DorisParser.DAYS_SUB:
							case DorisParser.DECIMAL:
							case DorisParser.DECIMALV2:
							case DorisParser.DECIMALV3:
							case DorisParser.DEFERRED:
							case DorisParser.DEMAND:
							case DorisParser.DIAGNOSE:
							case DorisParser.DISTINCTPC:
							case DorisParser.DISTINCTPCSA:
							case DorisParser.DO:
							case DorisParser.DORIS_INTERNAL_TABLE_ID:
							case DorisParser.DUAL:
							case DorisParser.DYNAMIC:
							case DorisParser.ENABLE:
							case DorisParser.ENCRYPTKEY:
							case DorisParser.ENCRYPTKEYS:
							case DorisParser.END:
							case DorisParser.ENDS:
							case DorisParser.ENGINE:
							case DorisParser.ENGINES:
							case DorisParser.ERRORS:
							case DorisParser.EVENTS:
							case DorisParser.EVERY:
							case DorisParser.EXCLUDE:
							case DorisParser.EXPIRED:
							case DorisParser.EXTERNAL:
							case DorisParser.FAILED_LOGIN_ATTEMPTS:
							case DorisParser.FAST:
							case DorisParser.FEATURE:
							case DorisParser.FIELDS:
							case DorisParser.FILE:
							case DorisParser.FILTER:
							case DorisParser.FIRST:
							case DorisParser.FORMAT:
							case DorisParser.FREE:
							case DorisParser.FRONTENDS:
							case DorisParser.FUNCTION:
							case DorisParser.GENERIC:
							case DorisParser.GLOBAL:
							case DorisParser.GRAPH:
							case DorisParser.GROUPING:
							case DorisParser.GROUPS:
							case DorisParser.HASH:
							case DorisParser.HDFS:
							case DorisParser.HELP:
							case DorisParser.HISTOGRAM:
							case DorisParser.HLL_UNION:
							case DorisParser.HOSTNAME:
							case DorisParser.HOTSPOT:
							case DorisParser.HOUR:
							case DorisParser.HUB:
							case DorisParser.IDENTIFIED:
							case DorisParser.IGNORE:
							case DorisParser.IMMEDIATE:
							case DorisParser.INCREMENTAL:
							case DorisParser.INDEXES:
							case DorisParser.INVERTED:
							case DorisParser.IPV4:
							case DorisParser.IPV6:
							case DorisParser.IS_NOT_NULL_PRED:
							case DorisParser.IS_NULL_PRED:
							case DorisParser.ISNULL:
							case DorisParser.ISOLATION:
							case DorisParser.JOB:
							case DorisParser.JOBS:
							case DorisParser.JSON:
							case DorisParser.JSONB:
							case DorisParser.LABEL:
							case DorisParser.LAST:
							case DorisParser.LDAP:
							case DorisParser.LDAP_ADMIN_PASSWORD:
							case DorisParser.LESS:
							case DorisParser.LEVEL:
							case DorisParser.LINES:
							case DorisParser.LINK:
							case DorisParser.LOCAL:
							case DorisParser.LOCALTIME:
							case DorisParser.LOCALTIMESTAMP:
							case DorisParser.LOCATION:
							case DorisParser.LOCK:
							case DorisParser.LOGICAL:
							case DorisParser.MANUAL:
							case DorisParser.MAP:
							case DorisParser.MATCH_ALL:
							case DorisParser.MATCH_ANY:
							case DorisParser.MATCH_PHRASE:
							case DorisParser.MATCH_PHRASE_EDGE:
							case DorisParser.MATCH_PHRASE_PREFIX:
							case DorisParser.MATCH_REGEXP:
							case DorisParser.MATERIALIZED:
							case DorisParser.MAX:
							case DorisParser.MEMO:
							case DorisParser.MERGE:
							case DorisParser.MIGRATE:
							case DorisParser.MIGRATIONS:
							case DorisParser.MIN:
							case DorisParser.MINUTE:
							case DorisParser.MODIFY:
							case DorisParser.MONTH:
							case DorisParser.MTMV:
							case DorisParser.NAME:
							case DorisParser.NAMES:
							case DorisParser.NEGATIVE:
							case DorisParser.NEVER:
							case DorisParser.NEXT:
							case DorisParser.NGRAM_BF:
							case DorisParser.NO:
							case DorisParser.NON_NULLABLE:
							case DorisParser.NULLS:
							case DorisParser.OF:
							case DorisParser.OFFSET:
							case DorisParser.ONLY:
							case DorisParser.OPEN:
							case DorisParser.OPTIMIZED:
							case DorisParser.PARAMETER:
							case DorisParser.PARSED:
							case DorisParser.PARTITIONS:
							case DorisParser.PASSWORD:
							case DorisParser.PASSWORD_EXPIRE:
							case DorisParser.PASSWORD_HISTORY:
							case DorisParser.PASSWORD_LOCK_TIME:
							case DorisParser.PASSWORD_REUSE:
							case DorisParser.PATH:
							case DorisParser.PAUSE:
							case DorisParser.PERCENT:
							case DorisParser.PERIOD:
							case DorisParser.PERMISSIVE:
							case DorisParser.PHYSICAL:
							case DorisParser.PLAN:
							case DorisParser.PRIVILEGES:
							case DorisParser.PROCESS:
							case DorisParser.PLUGIN:
							case DorisParser.PLUGINS:
							case DorisParser.POLICY:
							case DorisParser.PROC:
							case DorisParser.PROCESSLIST:
							case DorisParser.PROFILE:
							case DorisParser.PROPERTIES:
							case DorisParser.PROPERTY:
							case DorisParser.QUANTILE_STATE:
							case DorisParser.QUANTILE_UNION:
							case DorisParser.QUERY:
							case DorisParser.QUOTA:
							case DorisParser.RANDOM:
							case DorisParser.RECENT:
							case DorisParser.RECOVER:
							case DorisParser.RECYCLE:
							case DorisParser.REFRESH:
							case DorisParser.REPEATABLE:
							case DorisParser.REPLACE:
							case DorisParser.REPLACE_IF_NOT_NULL:
							case DorisParser.REPOSITORIES:
							case DorisParser.REPOSITORY:
							case DorisParser.RESOURCE:
							case DorisParser.RESOURCES:
							case DorisParser.RESTORE:
							case DorisParser.RESTRICTIVE:
							case DorisParser.RESUME:
							case DorisParser.RETURNS:
							case DorisParser.REWRITTEN:
							case DorisParser.RLIKE:
							case DorisParser.ROLLBACK:
							case DorisParser.ROLLUP:
							case DorisParser.ROUTINE:
							case DorisParser.S3:
							case DorisParser.SAMPLE:
							case DorisParser.SCHEDULE:
							case DorisParser.SCHEDULER:
							case DorisParser.SCHEMA:
							case DorisParser.SECOND:
							case DorisParser.SEQUENCE:
							case DorisParser.SERIALIZABLE:
							case DorisParser.SESSION:
							case DorisParser.SHAPE:
							case DorisParser.SKEW:
							case DorisParser.SNAPSHOT:
							case DorisParser.SONAME:
							case DorisParser.SPLIT:
							case DorisParser.SQL:
							case DorisParser.STAGES:
							case DorisParser.START:
							case DorisParser.STARTS:
							case DorisParser.STATS:
							case DorisParser.STATUS:
							case DorisParser.STOP:
							case DorisParser.STORAGE:
							case DorisParser.STREAM:
							case DorisParser.STREAMING:
							case DorisParser.STRING:
							case DorisParser.STRUCT:
							case DorisParser.SUBDATE:
							case DorisParser.SUM:
							case DorisParser.TABLES:
							case DorisParser.TASK:
							case DorisParser.TASKS:
							case DorisParser.TEMPORARY:
							case DorisParser.TEXT:
							case DorisParser.THAN:
							case DorisParser.TIME:
							case DorisParser.TIMESTAMP:
							case DorisParser.TIMESTAMPADD:
							case DorisParser.TIMESTAMPDIFF:
							case DorisParser.TRANSACTION:
							case DorisParser.TREE:
							case DorisParser.TRIGGERS:
							case DorisParser.TRUNCATE:
							case DorisParser.TYPE:
							case DorisParser.TYPES:
							case DorisParser.UNCOMMITTED:
							case DorisParser.UNLOCK:
							case DorisParser.UP:
							case DorisParser.USER:
							case DorisParser.VALUE:
							case DorisParser.VARCHAR:
							case DorisParser.VARIABLES:
							case DorisParser.VARIANT:
							case DorisParser.VAULT:
							case DorisParser.VERBOSE:
							case DorisParser.VERSION:
							case DorisParser.VIEW:
							case DorisParser.WARM:
							case DorisParser.WARNINGS:
							case DorisParser.WEEK:
							case DorisParser.WORK:
							case DorisParser.YEAR:
							case DorisParser.IDENTIFIER:
							case DorisParser.BACKQUOTED_IDENTIFIER:
								{
									this.state = 2610;
									this.identifier();
								}
								break;
							case DorisParser.LEFT_PAREN:
								{
									this.state = 2611;
									this.identifierList();
								}
								break;
							default:
								throw new antlr.NoViableAltException(this);
						}
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2615;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 437) {
							{
								this.state = 2614;
								this.match(DorisParser.TEMPORARY);
							}
						}
						this.state = 2617;
						this.match(DorisParser.PARTITIONS);
						this.state = 2618;
						this.identifierList();
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	constant() {
		let localContext = new ConstantContext(this.context, this.state);
		this.enterRule(localContext, 252, DorisParser.RULE_constant);
		let _la;
		try {
			this.state = 2672;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 356, this.context)) {
				case 1:
					localContext = new NullLiteralContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2621;
						this.match(DorisParser.NULL);
					}
					break;
				case 2:
					localContext = new TypeConstructorContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2622;
						localContext._type_ = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (
							!(
								(((_la - 109) & ~0x1f) === 0 &&
									((1 << (_la - 109)) & 5121) !== 0) ||
								_la === 443
							)
						) {
							localContext._type_ = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2623;
						this.match(DorisParser.STRING_LITERAL);
					}
					break;
				case 3:
					localContext = new NumericLiteralContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 2624;
						this.number_();
					}
					break;
				case 4:
					localContext = new BooleanLiteralContext(localContext);
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 2625;
						this.booleanValue();
					}
					break;
				case 5:
					localContext = new StringLiteralContext(localContext);
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 2627;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 42) {
							{
								this.state = 2626;
								this.match(DorisParser.BINARY);
							}
						}
						this.state = 2629;
						this.match(DorisParser.STRING_LITERAL);
					}
					break;
				case 6:
					localContext = new ArrayLiteralContext(localContext);
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 2630;
						this.match(DorisParser.LEFT_BRACKET);
						this.state = 2632;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (
							_la === 6 ||
							_la === 8 ||
							_la === 42 ||
							(((_la - 109) & ~0x1f) === 0 && ((1 << (_la - 109)) & 5121) !== 0) ||
							_la === 174 ||
							_la === 302 ||
							_la === 332 ||
							_la === 443 ||
							_la === 453 ||
							(((_la - 499) & ~0x1f) === 0 && ((1 << (_la - 499)) & 29491201) !== 0)
						) {
							{
								this.state = 2631;
								localContext._constant = this.constant();
								localContext._items.push(localContext._constant);
							}
						}
						this.state = 2638;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 2634;
									this.match(DorisParser.COMMA);
									this.state = 2635;
									localContext._constant = this.constant();
									localContext._items.push(localContext._constant);
								}
							}
							this.state = 2640;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 2641;
						this.match(DorisParser.RIGHT_BRACKET);
					}
					break;
				case 7:
					localContext = new MapLiteralContext(localContext);
					this.enterOuterAlt(localContext, 7);
					{
						this.state = 2642;
						this.match(DorisParser.LEFT_BRACE);
						this.state = 2647;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (
							_la === 6 ||
							_la === 8 ||
							_la === 42 ||
							(((_la - 109) & ~0x1f) === 0 && ((1 << (_la - 109)) & 5121) !== 0) ||
							_la === 174 ||
							_la === 302 ||
							_la === 332 ||
							_la === 443 ||
							_la === 453 ||
							(((_la - 499) & ~0x1f) === 0 && ((1 << (_la - 499)) & 29491201) !== 0)
						) {
							{
								this.state = 2643;
								localContext._constant = this.constant();
								localContext._items.push(localContext._constant);
								this.state = 2644;
								this.match(DorisParser.COLON);
								this.state = 2645;
								localContext._constant = this.constant();
								localContext._items.push(localContext._constant);
							}
						}
						this.state = 2656;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 2649;
									this.match(DorisParser.COMMA);
									this.state = 2650;
									localContext._constant = this.constant();
									localContext._items.push(localContext._constant);
									this.state = 2651;
									this.match(DorisParser.COLON);
									this.state = 2652;
									localContext._constant = this.constant();
									localContext._items.push(localContext._constant);
								}
							}
							this.state = 2658;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 2659;
						this.match(DorisParser.RIGHT_BRACE);
					}
					break;
				case 8:
					localContext = new StructLiteralContext(localContext);
					this.enterOuterAlt(localContext, 8);
					{
						this.state = 2660;
						this.match(DorisParser.LEFT_BRACE);
						this.state = 2661;
						localContext._constant = this.constant();
						localContext._items.push(localContext._constant);
						this.state = 2666;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 2662;
									this.match(DorisParser.COMMA);
									this.state = 2663;
									localContext._constant = this.constant();
									localContext._items.push(localContext._constant);
								}
							}
							this.state = 2668;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 2669;
						this.match(DorisParser.RIGHT_BRACE);
					}
					break;
				case 9:
					localContext = new PlaceholderContext(localContext);
					this.enterOuterAlt(localContext, 9);
					{
						this.state = 2671;
						this.match(DorisParser.PLACEHOLDER);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	comparisonOperator() {
		let localContext = new ComparisonOperatorContext(this.context, this.state);
		this.enterRule(localContext, 254, DorisParser.RULE_comparisonOperator);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2674;
				_la = this.tokenStream.LA(1);
				if (!(((_la - 491) & ~0x1f) === 0 && ((1 << (_la - 491)) & 127) !== 0)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	booleanValue() {
		let localContext = new BooleanValueContext(this.context, this.state);
		this.enterRule(localContext, 256, DorisParser.RULE_booleanValue);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2676;
				_la = this.tokenStream.LA(1);
				if (!(_la === 174 || _la === 453)) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	whenClause() {
		let localContext = new WhenClauseContext(this.context, this.state);
		this.enterRule(localContext, 258, DorisParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2678;
				this.match(DorisParser.WHEN);
				this.state = 2679;
				localContext._condition = this.expression();
				this.state = 2680;
				this.match(DorisParser.THEN);
				this.state = 2681;
				localContext._result = this.expression();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	interval() {
		let localContext = new IntervalContext(this.context, this.state);
		this.enterRule(localContext, 260, DorisParser.RULE_interval);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2683;
				this.match(DorisParser.INTERVAL);
				this.state = 2684;
				localContext._value = this.expression();
				this.state = 2685;
				localContext._unit = this.unitIdentifier();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	unitIdentifier() {
		let localContext = new UnitIdentifierContext(this.context, this.state);
		this.enterRule(localContext, 262, DorisParser.RULE_unitIdentifier);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2687;
				_la = this.tokenStream.LA(1);
				if (
					!(
						_la === 122 ||
						_la === 212 ||
						_la === 288 ||
						_la === 290 ||
						_la === 395 ||
						_la === 481 ||
						_la === 490
					)
				) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	dataTypeWithNullable() {
		let localContext = new DataTypeWithNullableContext(this.context, this.state);
		this.enterRule(localContext, 264, DorisParser.RULE_dataTypeWithNullable);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2689;
				this.dataType();
				this.state = 2694;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 301 || _la === 302) {
					{
						this.state = 2691;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 301) {
							{
								this.state = 2690;
								this.match(DorisParser.NOT);
							}
						}
						this.state = 2693;
						this.match(DorisParser.NULL);
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	dataType() {
		let localContext = new DataTypeContext(this.context, this.state);
		this.enterRule(localContext, 266, DorisParser.RULE_dataType);
		let _la;
		try {
			this.state = 2741;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 362, this.context)) {
				case 1:
					localContext = new ComplexDataTypeContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2696;
						localContext._complex = this.match(DorisParser.ARRAY);
						this.state = 2697;
						this.match(DorisParser.LT);
						this.state = 2698;
						this.dataType();
						this.state = 2699;
						this.match(DorisParser.GT);
					}
					break;
				case 2:
					localContext = new ComplexDataTypeContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2701;
						localContext._complex = this.match(DorisParser.MAP);
						this.state = 2702;
						this.match(DorisParser.LT);
						this.state = 2703;
						this.dataType();
						this.state = 2704;
						this.match(DorisParser.COMMA);
						this.state = 2705;
						this.dataType();
						this.state = 2706;
						this.match(DorisParser.GT);
					}
					break;
				case 3:
					localContext = new ComplexDataTypeContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 2708;
						localContext._complex = this.match(DorisParser.STRUCT);
						this.state = 2709;
						this.match(DorisParser.LT);
						this.state = 2710;
						this.complexColTypeList();
						this.state = 2711;
						this.match(DorisParser.GT);
					}
					break;
				case 4:
					localContext = new AggStateDataTypeContext(localContext);
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 2713;
						this.match(DorisParser.AGG_STATE);
						this.state = 2714;
						this.match(DorisParser.LT);
						this.state = 2715;
						this.functionNameIdentifier();
						this.state = 2716;
						this.match(DorisParser.LEFT_PAREN);
						this.state = 2717;
						localContext._dataTypeWithNullable = this.dataTypeWithNullable();
						localContext._dataTypes.push(localContext._dataTypeWithNullable);
						this.state = 2722;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						while (_la === 4) {
							{
								{
									this.state = 2718;
									this.match(DorisParser.COMMA);
									this.state = 2719;
									localContext._dataTypeWithNullable =
										this.dataTypeWithNullable();
									localContext._dataTypes.push(
										localContext._dataTypeWithNullable
									);
								}
							}
							this.state = 2724;
							this.errorHandler.sync(this);
							_la = this.tokenStream.LA(1);
						}
						this.state = 2725;
						this.match(DorisParser.RIGHT_PAREN);
						this.state = 2726;
						this.match(DorisParser.GT);
					}
					break;
				case 5:
					localContext = new PrimitiveDataTypeContext(localContext);
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 2728;
						this.primitiveColType();
						this.state = 2739;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 2) {
							{
								this.state = 2729;
								this.match(DorisParser.LEFT_PAREN);
								this.state = 2730;
								_la = this.tokenStream.LA(1);
								if (!(_la === 500 || _la === 521)) {
									this.errorHandler.recoverInline(this);
								} else {
									this.errorHandler.reportMatch(this);
									this.consume();
								}
								this.state = 2735;
								this.errorHandler.sync(this);
								_la = this.tokenStream.LA(1);
								while (_la === 4) {
									{
										{
											this.state = 2731;
											this.match(DorisParser.COMMA);
											this.state = 2732;
											this.match(DorisParser.INTEGER_VALUE);
										}
									}
									this.state = 2737;
									this.errorHandler.sync(this);
									_la = this.tokenStream.LA(1);
								}
								this.state = 2738;
								this.match(DorisParser.RIGHT_PAREN);
							}
						}
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	primitiveColType() {
		let localContext = new PrimitiveColTypeContext(this.context, this.state);
		this.enterRule(localContext, 268, DorisParser.RULE_primitiveColType);
		let _la;
		try {
			this.state = 2776;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.LEFT_PAREN:
				case DorisParser.RIGHT_PAREN:
				case DorisParser.COMMA:
				case DorisParser.AUTO_INCREMENT:
				case DorisParser.BITMAP_UNION:
				case DorisParser.COMMENT:
				case DorisParser.DEFAULT:
				case DorisParser.GENERIC:
				case DorisParser.HLL_UNION:
				case DorisParser.KEY:
				case DorisParser.MAX:
				case DorisParser.MIN:
				case DorisParser.NOT:
				case DorisParser.NULL:
				case DorisParser.ON:
				case DorisParser.QUANTILE_UNION:
				case DorisParser.REPLACE:
				case DorisParser.REPLACE_IF_NOT_NULL:
				case DorisParser.SUM:
				case DorisParser.GT:
					this.enterOuterAlt(localContext, 1);
					// tslint:disable-next-line:no-empty
					{
					}
					break;
				case DorisParser.TINYINT:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2744;
						localContext._type_ = this.match(DorisParser.TINYINT);
					}
					break;
				case DorisParser.SMALLINT:
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 2745;
						localContext._type_ = this.match(DorisParser.SMALLINT);
					}
					break;
				case DorisParser.INT:
				case DorisParser.INTEGER:
					this.enterOuterAlt(localContext, 4);
					{
						this.state = 2746;
						localContext._type_ = this.tokenStream.LT(1);
						_la = this.tokenStream.LA(1);
						if (!(_la === 226 || _la === 227)) {
							localContext._type_ = this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				case DorisParser.BIGINT:
					this.enterOuterAlt(localContext, 5);
					{
						this.state = 2747;
						localContext._type_ = this.match(DorisParser.BIGINT);
					}
					break;
				case DorisParser.LARGEINT:
					this.enterOuterAlt(localContext, 6);
					{
						this.state = 2748;
						localContext._type_ = this.match(DorisParser.LARGEINT);
					}
					break;
				case DorisParser.BOOLEAN:
					this.enterOuterAlt(localContext, 7);
					{
						this.state = 2749;
						localContext._type_ = this.match(DorisParser.BOOLEAN);
					}
					break;
				case DorisParser.FLOAT:
					this.enterOuterAlt(localContext, 8);
					{
						this.state = 2750;
						localContext._type_ = this.match(DorisParser.FLOAT);
					}
					break;
				case DorisParser.DOUBLE:
					this.enterOuterAlt(localContext, 9);
					{
						this.state = 2751;
						localContext._type_ = this.match(DorisParser.DOUBLE);
					}
					break;
				case DorisParser.DATE:
					this.enterOuterAlt(localContext, 10);
					{
						this.state = 2752;
						localContext._type_ = this.match(DorisParser.DATE);
					}
					break;
				case DorisParser.DATETIME:
					this.enterOuterAlt(localContext, 11);
					{
						this.state = 2753;
						localContext._type_ = this.match(DorisParser.DATETIME);
					}
					break;
				case DorisParser.TIME:
					this.enterOuterAlt(localContext, 12);
					{
						this.state = 2754;
						localContext._type_ = this.match(DorisParser.TIME);
					}
					break;
				case DorisParser.DATEV2:
					this.enterOuterAlt(localContext, 13);
					{
						this.state = 2755;
						localContext._type_ = this.match(DorisParser.DATEV2);
					}
					break;
				case DorisParser.DATETIMEV2:
					this.enterOuterAlt(localContext, 14);
					{
						this.state = 2756;
						localContext._type_ = this.match(DorisParser.DATETIMEV2);
					}
					break;
				case DorisParser.DATEV1:
					this.enterOuterAlt(localContext, 15);
					{
						this.state = 2757;
						localContext._type_ = this.match(DorisParser.DATEV1);
					}
					break;
				case DorisParser.DATETIMEV1:
					this.enterOuterAlt(localContext, 16);
					{
						this.state = 2758;
						localContext._type_ = this.match(DorisParser.DATETIMEV1);
					}
					break;
				case DorisParser.BITMAP:
					this.enterOuterAlt(localContext, 17);
					{
						this.state = 2759;
						localContext._type_ = this.match(DorisParser.BITMAP);
					}
					break;
				case DorisParser.QUANTILE_STATE:
					this.enterOuterAlt(localContext, 18);
					{
						this.state = 2760;
						localContext._type_ = this.match(DorisParser.QUANTILE_STATE);
					}
					break;
				case DorisParser.HLL:
					this.enterOuterAlt(localContext, 19);
					{
						this.state = 2761;
						localContext._type_ = this.match(DorisParser.HLL);
					}
					break;
				case DorisParser.AGG_STATE:
					this.enterOuterAlt(localContext, 20);
					{
						this.state = 2762;
						localContext._type_ = this.match(DorisParser.AGG_STATE);
					}
					break;
				case DorisParser.STRING:
					this.enterOuterAlt(localContext, 21);
					{
						this.state = 2763;
						localContext._type_ = this.match(DorisParser.STRING);
					}
					break;
				case DorisParser.JSON:
					this.enterOuterAlt(localContext, 22);
					{
						this.state = 2764;
						localContext._type_ = this.match(DorisParser.JSON);
					}
					break;
				case DorisParser.JSONB:
					this.enterOuterAlt(localContext, 23);
					{
						this.state = 2765;
						localContext._type_ = this.match(DorisParser.JSONB);
					}
					break;
				case DorisParser.TEXT:
					this.enterOuterAlt(localContext, 24);
					{
						this.state = 2766;
						localContext._type_ = this.match(DorisParser.TEXT);
					}
					break;
				case DorisParser.VARCHAR:
					this.enterOuterAlt(localContext, 25);
					{
						this.state = 2767;
						localContext._type_ = this.match(DorisParser.VARCHAR);
					}
					break;
				case DorisParser.CHAR:
					this.enterOuterAlt(localContext, 26);
					{
						this.state = 2768;
						localContext._type_ = this.match(DorisParser.CHAR);
					}
					break;
				case DorisParser.DECIMAL:
					this.enterOuterAlt(localContext, 27);
					{
						this.state = 2769;
						localContext._type_ = this.match(DorisParser.DECIMAL);
					}
					break;
				case DorisParser.DECIMALV2:
					this.enterOuterAlt(localContext, 28);
					{
						this.state = 2770;
						localContext._type_ = this.match(DorisParser.DECIMALV2);
					}
					break;
				case DorisParser.DECIMALV3:
					this.enterOuterAlt(localContext, 29);
					{
						this.state = 2771;
						localContext._type_ = this.match(DorisParser.DECIMALV3);
					}
					break;
				case DorisParser.IPV4:
					this.enterOuterAlt(localContext, 30);
					{
						this.state = 2772;
						localContext._type_ = this.match(DorisParser.IPV4);
					}
					break;
				case DorisParser.IPV6:
					this.enterOuterAlt(localContext, 31);
					{
						this.state = 2773;
						localContext._type_ = this.match(DorisParser.IPV6);
					}
					break;
				case DorisParser.VARIANT:
					this.enterOuterAlt(localContext, 32);
					{
						this.state = 2774;
						localContext._type_ = this.match(DorisParser.VARIANT);
					}
					break;
				case DorisParser.ALL:
					this.enterOuterAlt(localContext, 33);
					{
						this.state = 2775;
						localContext._type_ = this.match(DorisParser.ALL);
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	complexColTypeList() {
		let localContext = new ComplexColTypeListContext(this.context, this.state);
		this.enterRule(localContext, 270, DorisParser.RULE_complexColTypeList);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2778;
				this.complexColType();
				this.state = 2783;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				while (_la === 4) {
					{
						{
							this.state = 2779;
							this.match(DorisParser.COMMA);
							this.state = 2780;
							this.complexColType();
						}
					}
					this.state = 2785;
					this.errorHandler.sync(this);
					_la = this.tokenStream.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	complexColType() {
		let localContext = new ComplexColTypeContext(this.context, this.state);
		this.enterRule(localContext, 272, DorisParser.RULE_complexColType);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2786;
				this.identifier();
				this.state = 2787;
				this.match(DorisParser.COLON);
				this.state = 2788;
				this.dataType();
				this.state = 2790;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 79) {
					{
						this.state = 2789;
						this.commentSpec();
					}
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	commentSpec() {
		let localContext = new CommentSpecContext(this.context, this.state);
		this.enterRule(localContext, 274, DorisParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2792;
				this.match(DorisParser.COMMENT);
				this.state = 2793;
				this.match(DorisParser.STRING_LITERAL);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	sample() {
		let localContext = new SampleContext(this.context, this.state);
		this.enterRule(localContext, 276, DorisParser.RULE_sample);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2795;
				this.match(DorisParser.TABLESAMPLE);
				this.state = 2796;
				this.match(DorisParser.LEFT_PAREN);
				this.state = 2798;
				this.errorHandler.sync(this);
				_la = this.tokenStream.LA(1);
				if (_la === 521) {
					{
						this.state = 2797;
						this.sampleMethod();
					}
				}
				this.state = 2800;
				this.match(DorisParser.RIGHT_PAREN);
				this.state = 2803;
				this.errorHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this.tokenStream, 367, this.context)) {
					case 1:
						{
							this.state = 2801;
							this.match(DorisParser.REPEATABLE);
							this.state = 2802;
							localContext._seed = this.match(DorisParser.INTEGER_VALUE);
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	sampleMethod() {
		let localContext = new SampleMethodContext(this.context, this.state);
		this.enterRule(localContext, 278, DorisParser.RULE_sampleMethod);
		try {
			this.state = 2809;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 368, this.context)) {
				case 1:
					localContext = new SampleByPercentileContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2805;
						localContext._percentage = this.match(DorisParser.INTEGER_VALUE);
						this.state = 2806;
						this.match(DorisParser.PERCENT);
					}
					break;
				case 2:
					localContext = new SampleByRowsContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2807;
						this.match(DorisParser.INTEGER_VALUE);
						this.state = 2808;
						this.match(DorisParser.ROWS);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	tableSnapshot() {
		let localContext = new TableSnapshotContext(this.context, this.state);
		this.enterRule(localContext, 280, DorisParser.RULE_tableSnapshot);
		try {
			this.state = 2821;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 369, this.context)) {
				case 1:
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2811;
						this.match(DorisParser.FOR);
						this.state = 2812;
						this.match(DorisParser.VERSION);
						this.state = 2813;
						this.match(DorisParser.AS);
						this.state = 2814;
						this.match(DorisParser.OF);
						this.state = 2815;
						localContext._version = this.match(DorisParser.INTEGER_VALUE);
					}
					break;
				case 2:
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2816;
						this.match(DorisParser.FOR);
						this.state = 2817;
						this.match(DorisParser.TIME);
						this.state = 2818;
						this.match(DorisParser.AS);
						this.state = 2819;
						this.match(DorisParser.OF);
						this.state = 2820;
						localContext._time = this.match(DorisParser.STRING_LITERAL);
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	errorCapturingIdentifier() {
		let localContext = new ErrorCapturingIdentifierContext(this.context, this.state);
		this.enterRule(localContext, 282, DorisParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2823;
				this.identifier();
				this.state = 2824;
				this.errorCapturingIdentifierExtra();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	errorCapturingIdentifierExtra() {
		let localContext = new ErrorCapturingIdentifierExtraContext(this.context, this.state);
		this.enterRule(localContext, 284, DorisParser.RULE_errorCapturingIdentifierExtra);
		try {
			let alternative;
			this.state = 2833;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 371, this.context)) {
				case 1:
					localContext = new ErrorIdentContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2828;
						this.errorHandler.sync(this);
						alternative = 1;
						do {
							switch (alternative) {
								case 1:
									{
										{
											this.state = 2826;
											this.match(DorisParser.SUBTRACT);
											this.state = 2827;
											this.identifier();
										}
									}
									break;
								default:
									throw new antlr.NoViableAltException(this);
							}
							this.state = 2830;
							this.errorHandler.sync(this);
							alternative = this.interpreter.adaptivePredict(
								this.tokenStream,
								370,
								this.context
							);
						} while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
					}
					break;
				case 2:
					localContext = new RealIdentContext(localContext);
					this.enterOuterAlt(localContext, 2);
					// tslint:disable-next-line:no-empty
					{
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	identifier() {
		let localContext = new IdentifierContext(this.context, this.state);
		this.enterRule(localContext, 286, DorisParser.RULE_identifier);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2835;
				this.strictIdentifier();
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	strictIdentifier() {
		let localContext = new StrictIdentifierContext(this.context, this.state);
		this.enterRule(localContext, 288, DorisParser.RULE_strictIdentifier);
		try {
			this.state = 2840;
			this.errorHandler.sync(this);
			switch (this.tokenStream.LA(1)) {
				case DorisParser.IDENTIFIER:
					localContext = new UnquotedIdentifierContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2837;
						this.match(DorisParser.IDENTIFIER);
					}
					break;
				case DorisParser.BACKQUOTED_IDENTIFIER:
					localContext = new QuotedIdentifierAlternativeContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2838;
						this.quotedIdentifier();
					}
					break;
				case DorisParser.LEFT_BRACE:
				case DorisParser.RIGHT_BRACE:
				case DorisParser.ADDDATE:
				case DorisParser.AFTER:
				case DorisParser.AGG_STATE:
				case DorisParser.AGGREGATE:
				case DorisParser.ALIAS:
				case DorisParser.ANALYZED:
				case DorisParser.ARRAY:
				case DorisParser.ARRAY_RANGE:
				case DorisParser.AT:
				case DorisParser.AUTHORS:
				case DorisParser.AUTO_INCREMENT:
				case DorisParser.BACKENDS:
				case DorisParser.BACKUP:
				case DorisParser.BEGIN:
				case DorisParser.BELONG:
				case DorisParser.BIN:
				case DorisParser.BITAND:
				case DorisParser.BITMAP:
				case DorisParser.BITMAP_UNION:
				case DorisParser.BITOR:
				case DorisParser.BITXOR:
				case DorisParser.BLOB:
				case DorisParser.BOOLEAN:
				case DorisParser.BRIEF:
				case DorisParser.BROKER:
				case DorisParser.BUCKETS:
				case DorisParser.BUILD:
				case DorisParser.BUILTIN:
				case DorisParser.BULK:
				case DorisParser.CACHE:
				case DorisParser.CACHED:
				case DorisParser.CALL:
				case DorisParser.CATALOG:
				case DorisParser.CATALOGS:
				case DorisParser.CHAIN:
				case DorisParser.CHAR:
				case DorisParser.CHARSET:
				case DorisParser.CHECK:
				case DorisParser.CLUSTER:
				case DorisParser.CLUSTERS:
				case DorisParser.COLLATION:
				case DorisParser.COLLECT:
				case DorisParser.COLOCATE:
				case DorisParser.COLUMNS:
				case DorisParser.COMMENT:
				case DorisParser.COMMIT:
				case DorisParser.COMMITTED:
				case DorisParser.COMPACT:
				case DorisParser.COMPLETE:
				case DorisParser.COMPRESS_TYPE:
				case DorisParser.CONFIG:
				case DorisParser.CONNECTION:
				case DorisParser.CONNECTION_ID:
				case DorisParser.CONSISTENT:
				case DorisParser.CONSTRAINTS:
				case DorisParser.CONVERT:
				case DorisParser.CONVERT_LSC:
				case DorisParser.COPY:
				case DorisParser.COUNT:
				case DorisParser.CREATION:
				case DorisParser.CRON:
				case DorisParser.CURRENT_CATALOG:
				case DorisParser.CURRENT_DATE:
				case DorisParser.CURRENT_TIME:
				case DorisParser.CURRENT_TIMESTAMP:
				case DorisParser.CURRENT_USER:
				case DorisParser.DATA:
				case DorisParser.DATE:
				case DorisParser.DATE_ADD:
				case DorisParser.DATE_CEIL:
				case DorisParser.DATE_DIFF:
				case DorisParser.DATE_FLOOR:
				case DorisParser.DATE_SUB:
				case DorisParser.DATEADD:
				case DorisParser.DATEDIFF:
				case DorisParser.DATETIME:
				case DorisParser.DATETIMEV2:
				case DorisParser.DATEV2:
				case DorisParser.DATETIMEV1:
				case DorisParser.DATEV1:
				case DorisParser.DAY:
				case DorisParser.DAYS_ADD:
				case DorisParser.DAYS_SUB:
				case DorisParser.DECIMAL:
				case DorisParser.DECIMALV2:
				case DorisParser.DECIMALV3:
				case DorisParser.DEFERRED:
				case DorisParser.DEMAND:
				case DorisParser.DIAGNOSE:
				case DorisParser.DISTINCTPC:
				case DorisParser.DISTINCTPCSA:
				case DorisParser.DO:
				case DorisParser.DORIS_INTERNAL_TABLE_ID:
				case DorisParser.DUAL:
				case DorisParser.DYNAMIC:
				case DorisParser.ENABLE:
				case DorisParser.ENCRYPTKEY:
				case DorisParser.ENCRYPTKEYS:
				case DorisParser.END:
				case DorisParser.ENDS:
				case DorisParser.ENGINE:
				case DorisParser.ENGINES:
				case DorisParser.ERRORS:
				case DorisParser.EVENTS:
				case DorisParser.EVERY:
				case DorisParser.EXCLUDE:
				case DorisParser.EXPIRED:
				case DorisParser.EXTERNAL:
				case DorisParser.FAILED_LOGIN_ATTEMPTS:
				case DorisParser.FAST:
				case DorisParser.FEATURE:
				case DorisParser.FIELDS:
				case DorisParser.FILE:
				case DorisParser.FILTER:
				case DorisParser.FIRST:
				case DorisParser.FORMAT:
				case DorisParser.FREE:
				case DorisParser.FRONTENDS:
				case DorisParser.FUNCTION:
				case DorisParser.GENERIC:
				case DorisParser.GLOBAL:
				case DorisParser.GRAPH:
				case DorisParser.GROUPING:
				case DorisParser.GROUPS:
				case DorisParser.HASH:
				case DorisParser.HDFS:
				case DorisParser.HELP:
				case DorisParser.HISTOGRAM:
				case DorisParser.HLL_UNION:
				case DorisParser.HOSTNAME:
				case DorisParser.HOTSPOT:
				case DorisParser.HOUR:
				case DorisParser.HUB:
				case DorisParser.IDENTIFIED:
				case DorisParser.IGNORE:
				case DorisParser.IMMEDIATE:
				case DorisParser.INCREMENTAL:
				case DorisParser.INDEXES:
				case DorisParser.INVERTED:
				case DorisParser.IPV4:
				case DorisParser.IPV6:
				case DorisParser.IS_NOT_NULL_PRED:
				case DorisParser.IS_NULL_PRED:
				case DorisParser.ISNULL:
				case DorisParser.ISOLATION:
				case DorisParser.JOB:
				case DorisParser.JOBS:
				case DorisParser.JSON:
				case DorisParser.JSONB:
				case DorisParser.LABEL:
				case DorisParser.LAST:
				case DorisParser.LDAP:
				case DorisParser.LDAP_ADMIN_PASSWORD:
				case DorisParser.LESS:
				case DorisParser.LEVEL:
				case DorisParser.LINES:
				case DorisParser.LINK:
				case DorisParser.LOCAL:
				case DorisParser.LOCALTIME:
				case DorisParser.LOCALTIMESTAMP:
				case DorisParser.LOCATION:
				case DorisParser.LOCK:
				case DorisParser.LOGICAL:
				case DorisParser.MANUAL:
				case DorisParser.MAP:
				case DorisParser.MATCH_ALL:
				case DorisParser.MATCH_ANY:
				case DorisParser.MATCH_PHRASE:
				case DorisParser.MATCH_PHRASE_EDGE:
				case DorisParser.MATCH_PHRASE_PREFIX:
				case DorisParser.MATCH_REGEXP:
				case DorisParser.MATERIALIZED:
				case DorisParser.MAX:
				case DorisParser.MEMO:
				case DorisParser.MERGE:
				case DorisParser.MIGRATE:
				case DorisParser.MIGRATIONS:
				case DorisParser.MIN:
				case DorisParser.MINUTE:
				case DorisParser.MODIFY:
				case DorisParser.MONTH:
				case DorisParser.MTMV:
				case DorisParser.NAME:
				case DorisParser.NAMES:
				case DorisParser.NEGATIVE:
				case DorisParser.NEVER:
				case DorisParser.NEXT:
				case DorisParser.NGRAM_BF:
				case DorisParser.NO:
				case DorisParser.NON_NULLABLE:
				case DorisParser.NULLS:
				case DorisParser.OF:
				case DorisParser.OFFSET:
				case DorisParser.ONLY:
				case DorisParser.OPEN:
				case DorisParser.OPTIMIZED:
				case DorisParser.PARAMETER:
				case DorisParser.PARSED:
				case DorisParser.PARTITIONS:
				case DorisParser.PASSWORD:
				case DorisParser.PASSWORD_EXPIRE:
				case DorisParser.PASSWORD_HISTORY:
				case DorisParser.PASSWORD_LOCK_TIME:
				case DorisParser.PASSWORD_REUSE:
				case DorisParser.PATH:
				case DorisParser.PAUSE:
				case DorisParser.PERCENT:
				case DorisParser.PERIOD:
				case DorisParser.PERMISSIVE:
				case DorisParser.PHYSICAL:
				case DorisParser.PLAN:
				case DorisParser.PRIVILEGES:
				case DorisParser.PROCESS:
				case DorisParser.PLUGIN:
				case DorisParser.PLUGINS:
				case DorisParser.POLICY:
				case DorisParser.PROC:
				case DorisParser.PROCESSLIST:
				case DorisParser.PROFILE:
				case DorisParser.PROPERTIES:
				case DorisParser.PROPERTY:
				case DorisParser.QUANTILE_STATE:
				case DorisParser.QUANTILE_UNION:
				case DorisParser.QUERY:
				case DorisParser.QUOTA:
				case DorisParser.RANDOM:
				case DorisParser.RECENT:
				case DorisParser.RECOVER:
				case DorisParser.RECYCLE:
				case DorisParser.REFRESH:
				case DorisParser.REPEATABLE:
				case DorisParser.REPLACE:
				case DorisParser.REPLACE_IF_NOT_NULL:
				case DorisParser.REPOSITORIES:
				case DorisParser.REPOSITORY:
				case DorisParser.RESOURCE:
				case DorisParser.RESOURCES:
				case DorisParser.RESTORE:
				case DorisParser.RESTRICTIVE:
				case DorisParser.RESUME:
				case DorisParser.RETURNS:
				case DorisParser.REWRITTEN:
				case DorisParser.RLIKE:
				case DorisParser.ROLLBACK:
				case DorisParser.ROLLUP:
				case DorisParser.ROUTINE:
				case DorisParser.S3:
				case DorisParser.SAMPLE:
				case DorisParser.SCHEDULE:
				case DorisParser.SCHEDULER:
				case DorisParser.SCHEMA:
				case DorisParser.SECOND:
				case DorisParser.SEQUENCE:
				case DorisParser.SERIALIZABLE:
				case DorisParser.SESSION:
				case DorisParser.SHAPE:
				case DorisParser.SKEW:
				case DorisParser.SNAPSHOT:
				case DorisParser.SONAME:
				case DorisParser.SPLIT:
				case DorisParser.SQL:
				case DorisParser.STAGES:
				case DorisParser.START:
				case DorisParser.STARTS:
				case DorisParser.STATS:
				case DorisParser.STATUS:
				case DorisParser.STOP:
				case DorisParser.STORAGE:
				case DorisParser.STREAM:
				case DorisParser.STREAMING:
				case DorisParser.STRING:
				case DorisParser.STRUCT:
				case DorisParser.SUBDATE:
				case DorisParser.SUM:
				case DorisParser.TABLES:
				case DorisParser.TASK:
				case DorisParser.TASKS:
				case DorisParser.TEMPORARY:
				case DorisParser.TEXT:
				case DorisParser.THAN:
				case DorisParser.TIME:
				case DorisParser.TIMESTAMP:
				case DorisParser.TIMESTAMPADD:
				case DorisParser.TIMESTAMPDIFF:
				case DorisParser.TRANSACTION:
				case DorisParser.TREE:
				case DorisParser.TRIGGERS:
				case DorisParser.TRUNCATE:
				case DorisParser.TYPE:
				case DorisParser.TYPES:
				case DorisParser.UNCOMMITTED:
				case DorisParser.UNLOCK:
				case DorisParser.UP:
				case DorisParser.USER:
				case DorisParser.VALUE:
				case DorisParser.VARCHAR:
				case DorisParser.VARIABLES:
				case DorisParser.VARIANT:
				case DorisParser.VAULT:
				case DorisParser.VERBOSE:
				case DorisParser.VERSION:
				case DorisParser.VIEW:
				case DorisParser.WARM:
				case DorisParser.WARNINGS:
				case DorisParser.WEEK:
				case DorisParser.WORK:
				case DorisParser.YEAR:
					localContext = new UnquotedIdentifierContext(localContext);
					this.enterOuterAlt(localContext, 3);
					{
						this.state = 2839;
						this.nonReserved();
					}
					break;
				default:
					throw new antlr.NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	quotedIdentifier() {
		let localContext = new QuotedIdentifierContext(this.context, this.state);
		this.enterRule(localContext, 290, DorisParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2842;
				this.match(DorisParser.BACKQUOTED_IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	number_() {
		let localContext = new NumberContext(this.context, this.state);
		this.enterRule(localContext, 292, DorisParser.RULE_number);
		let _la;
		try {
			this.state = 2852;
			this.errorHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this.tokenStream, 375, this.context)) {
				case 1:
					localContext = new IntegerLiteralContext(localContext);
					this.enterOuterAlt(localContext, 1);
					{
						this.state = 2845;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 499) {
							{
								this.state = 2844;
								this.match(DorisParser.SUBTRACT);
							}
						}
						this.state = 2847;
						this.match(DorisParser.INTEGER_VALUE);
					}
					break;
				case 2:
					localContext = new DecimalLiteralContext(localContext);
					this.enterOuterAlt(localContext, 2);
					{
						this.state = 2849;
						this.errorHandler.sync(this);
						_la = this.tokenStream.LA(1);
						if (_la === 499) {
							{
								this.state = 2848;
								this.match(DorisParser.SUBTRACT);
							}
						}
						this.state = 2851;
						_la = this.tokenStream.LA(1);
						if (!(_la === 522 || _la === 523)) {
							this.errorHandler.recoverInline(this);
						} else {
							this.errorHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	nonReserved() {
		let localContext = new NonReservedContext(this.context, this.state);
		this.enterRule(localContext, 294, DorisParser.RULE_nonReserved);
		let _la;
		try {
			this.enterOuterAlt(localContext, 1);
			{
				this.state = 2854;
				_la = this.tokenStream.LA(1);
				if (
					!(
						(((_la - 8) & ~0x1f) === 0 && ((1 << (_la - 8)) & 2060208035) !== 0) ||
						(((_la - 41) & ~0x1f) === 0 && ((1 << (_la - 41)) & 3750690809) !== 0) ||
						(((_la - 74) & ~0x1f) === 0 && ((1 << (_la - 74)) & 4175396855) !== 0) ||
						(((_la - 106) & ~0x1f) === 0 && ((1 << (_la - 106)) & 624951289) !== 0) ||
						(((_la - 138) & ~0x1f) === 0 && ((1 << (_la - 138)) & 635425891) !== 0) ||
						(((_la - 171) & ~0x1f) === 0 && ((1 << (_la - 171)) & 3545433077) !== 0) ||
						(((_la - 203) & ~0x1f) === 0 && ((1 << (_la - 203)) & 3758452701) !== 0) ||
						(((_la - 236) & ~0x1f) === 0 && ((1 << (_la - 236)) & 4187705791) !== 0) ||
						(((_la - 268) & ~0x1f) === 0 && ((1 << (_la - 268)) & 4227325933) !== 0) ||
						(((_la - 300) & ~0x1f) === 0 && ((1 << (_la - 300)) & 4294313833) !== 0) ||
						(((_la - 333) & ~0x1f) === 0 && ((1 << (_la - 333)) & 252705343) !== 0) ||
						(((_la - 366) & ~0x1f) === 0 && ((1 << (_la - 366)) & 798797815) !== 0) ||
						(((_la - 398) & ~0x1f) === 0 && ((1 << (_la - 398)) & 268418343) !== 0) ||
						(((_la - 431) & ~0x1f) === 0 && ((1 << (_la - 431)) & 362445681) !== 0) ||
						(((_la - 463) & ~0x1f) === 0 && ((1 << (_la - 463)) & 143130277) !== 0)
					)
				) {
					this.errorHandler.recoverInline(this);
				} else {
					this.errorHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof antlr.RecognitionException) {
				localContext.exception = re;
				this.errorHandler.reportError(this, re);
				this.errorHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localContext;
	}
	sempred(localContext, ruleIndex, predIndex) {
		switch (ruleIndex) {
			case 38:
				return this.queryTerm_sempred(localContext, predIndex);
			case 41:
				return this.querySpecification_sempred(localContext, predIndex);
			case 109:
				return this.booleanExpression_sempred(localContext, predIndex);
			case 113:
				return this.valueExpression_sempred(localContext, predIndex);
			case 115:
				return this.primaryExpression_sempred(localContext, predIndex);
		}
		return true;
	}
	queryTerm_sempred(localContext, predIndex) {
		switch (predIndex) {
			case 0:
				return this.precpred(this.context, 1);
		}
		return true;
	}
	querySpecification_sempred(localContext, predIndex) {
		switch (predIndex) {
			case 1:
				return this.doris_legacy_SQL_syntax;
		}
		return true;
	}
	booleanExpression_sempred(localContext, predIndex) {
		switch (predIndex) {
			case 2:
				return this.precpred(this.context, 4);
			case 3:
				return this.precpred(this.context, 3);
			case 4:
				return this.precpred(this.context, 2);
			case 5:
				return this.precpred(this.context, 1);
		}
		return true;
	}
	valueExpression_sempred(localContext, predIndex) {
		switch (predIndex) {
			case 6:
				return this.precpred(this.context, 4);
			case 7:
				return this.precpred(this.context, 3);
			case 8:
				return this.precpred(this.context, 2);
		}
		return true;
	}
	primaryExpression_sempred(localContext, predIndex) {
		switch (predIndex) {
			case 9:
				return this.precpred(this.context, 11);
			case 10:
				return this.precpred(this.context, 10);
			case 11:
				return this.precpred(this.context, 5);
			case 12:
				return this.precpred(this.context, 1);
		}
		return true;
	}
	static get _ATN() {
		if (!DorisParser.__ATN) {
			DorisParser.__ATN = new antlr.ATNDeserializer().deserialize(DorisParser._serializedATN);
		}
		return DorisParser.__ATN;
	}
	get vocabulary() {
		return DorisParser.vocabulary;
	}
}
DorisParser.SEMICOLON = 1;
DorisParser.LEFT_PAREN = 2;
DorisParser.RIGHT_PAREN = 3;
DorisParser.COMMA = 4;
DorisParser.DOT = 5;
DorisParser.LEFT_BRACKET = 6;
DorisParser.RIGHT_BRACKET = 7;
DorisParser.LEFT_BRACE = 8;
DorisParser.RIGHT_BRACE = 9;
DorisParser.ACCOUNT_LOCK = 10;
DorisParser.ACCOUNT_UNLOCK = 11;
DorisParser.ADD = 12;
DorisParser.ADDDATE = 13;
DorisParser.ADMIN = 14;
DorisParser.AFTER = 15;
DorisParser.AGG_STATE = 16;
DorisParser.AGGREGATE = 17;
DorisParser.ALIAS = 18;
DorisParser.ALL = 19;
DorisParser.ALTER = 20;
DorisParser.ANALYZE = 21;
DorisParser.ANALYZED = 22;
DorisParser.AND = 23;
DorisParser.ANTI = 24;
DorisParser.APPEND = 25;
DorisParser.ARRAY = 26;
DorisParser.ARRAY_RANGE = 27;
DorisParser.AS = 28;
DorisParser.ASC = 29;
DorisParser.AT = 30;
DorisParser.AUTHORS = 31;
DorisParser.AUTO = 32;
DorisParser.AUTO_INCREMENT = 33;
DorisParser.BACKEND = 34;
DorisParser.BACKENDS = 35;
DorisParser.BACKUP = 36;
DorisParser.BEGIN = 37;
DorisParser.BELONG = 38;
DorisParser.BETWEEN = 39;
DorisParser.BIGINT = 40;
DorisParser.BIN = 41;
DorisParser.BINARY = 42;
DorisParser.BINLOG = 43;
DorisParser.BITAND = 44;
DorisParser.BITMAP = 45;
DorisParser.BITMAP_UNION = 46;
DorisParser.BITOR = 47;
DorisParser.BITXOR = 48;
DorisParser.BLOB = 49;
DorisParser.BOOLEAN = 50;
DorisParser.BRIEF = 51;
DorisParser.BROKER = 52;
DorisParser.BUCKETS = 53;
DorisParser.BUILD = 54;
DorisParser.BUILTIN = 55;
DorisParser.BULK = 56;
DorisParser.BY = 57;
DorisParser.CACHE = 58;
DorisParser.CACHED = 59;
DorisParser.CALL = 60;
DorisParser.CANCEL = 61;
DorisParser.CASE = 62;
DorisParser.CAST = 63;
DorisParser.CATALOG = 64;
DorisParser.CATALOGS = 65;
DorisParser.CHAIN = 66;
DorisParser.CHAR = 67;
DorisParser.CHARSET = 68;
DorisParser.CHECK = 69;
DorisParser.CLEAN = 70;
DorisParser.CLUSTER = 71;
DorisParser.CLUSTERS = 72;
DorisParser.COLLATE = 73;
DorisParser.COLLATION = 74;
DorisParser.COLLECT = 75;
DorisParser.COLOCATE = 76;
DorisParser.COLUMN = 77;
DorisParser.COLUMNS = 78;
DorisParser.COMMENT = 79;
DorisParser.COMMIT = 80;
DorisParser.COMMITTED = 81;
DorisParser.COMPACT = 82;
DorisParser.COMPLETE = 83;
DorisParser.COMPRESS_TYPE = 84;
DorisParser.CONFIG = 85;
DorisParser.CONNECTION = 86;
DorisParser.CONNECTION_ID = 87;
DorisParser.CONSISTENT = 88;
DorisParser.CONSTRAINT = 89;
DorisParser.CONSTRAINTS = 90;
DorisParser.CONVERT = 91;
DorisParser.CONVERT_LSC = 92;
DorisParser.COPY = 93;
DorisParser.COUNT = 94;
DorisParser.CREATE = 95;
DorisParser.CREATION = 96;
DorisParser.CRON = 97;
DorisParser.CROSS = 98;
DorisParser.CUBE = 99;
DorisParser.CURRENT = 100;
DorisParser.CURRENT_CATALOG = 101;
DorisParser.CURRENT_DATE = 102;
DorisParser.CURRENT_TIME = 103;
DorisParser.CURRENT_TIMESTAMP = 104;
DorisParser.CURRENT_USER = 105;
DorisParser.DATA = 106;
DorisParser.DATABASE = 107;
DorisParser.DATABASES = 108;
DorisParser.DATE = 109;
DorisParser.DATE_ADD = 110;
DorisParser.DATE_CEIL = 111;
DorisParser.DATE_DIFF = 112;
DorisParser.DATE_FLOOR = 113;
DorisParser.DATE_SUB = 114;
DorisParser.DATEADD = 115;
DorisParser.DATEDIFF = 116;
DorisParser.DATETIME = 117;
DorisParser.DATETIMEV2 = 118;
DorisParser.DATEV2 = 119;
DorisParser.DATETIMEV1 = 120;
DorisParser.DATEV1 = 121;
DorisParser.DAY = 122;
DorisParser.DAYS_ADD = 123;
DorisParser.DAYS_SUB = 124;
DorisParser.DECIMAL = 125;
DorisParser.DECIMALV2 = 126;
DorisParser.DECIMALV3 = 127;
DorisParser.DECOMMISSION = 128;
DorisParser.DEFAULT = 129;
DorisParser.DEFERRED = 130;
DorisParser.DELETE = 131;
DorisParser.DEMAND = 132;
DorisParser.DESC = 133;
DorisParser.DESCRIBE = 134;
DorisParser.DIAGNOSE = 135;
DorisParser.DISK = 136;
DorisParser.DISTINCT = 137;
DorisParser.DISTINCTPC = 138;
DorisParser.DISTINCTPCSA = 139;
DorisParser.DISTRIBUTED = 140;
DorisParser.DISTRIBUTION = 141;
DorisParser.DIV = 142;
DorisParser.DO = 143;
DorisParser.DORIS_INTERNAL_TABLE_ID = 144;
DorisParser.DOUBLE = 145;
DorisParser.DROP = 146;
DorisParser.DROPP = 147;
DorisParser.DUAL = 148;
DorisParser.DUPLICATE = 149;
DorisParser.DYNAMIC = 150;
DorisParser.ELSE = 151;
DorisParser.ENABLE = 152;
DorisParser.ENCRYPTKEY = 153;
DorisParser.ENCRYPTKEYS = 154;
DorisParser.END = 155;
DorisParser.ENDS = 156;
DorisParser.ENGINE = 157;
DorisParser.ENGINES = 158;
DorisParser.ENTER = 159;
DorisParser.ERRORS = 160;
DorisParser.EVENTS = 161;
DorisParser.EVERY = 162;
DorisParser.EXCEPT = 163;
DorisParser.EXCLUDE = 164;
DorisParser.EXECUTE = 165;
DorisParser.EXISTS = 166;
DorisParser.EXPIRED = 167;
DorisParser.EXPLAIN = 168;
DorisParser.EXPORT = 169;
DorisParser.EXTENDED = 170;
DorisParser.EXTERNAL = 171;
DorisParser.EXTRACT = 172;
DorisParser.FAILED_LOGIN_ATTEMPTS = 173;
DorisParser.FALSE = 174;
DorisParser.FAST = 175;
DorisParser.FEATURE = 176;
DorisParser.FIELDS = 177;
DorisParser.FILE = 178;
DorisParser.FILTER = 179;
DorisParser.FIRST = 180;
DorisParser.FLOAT = 181;
DorisParser.FOLLOWER = 182;
DorisParser.FOLLOWING = 183;
DorisParser.FOR = 184;
DorisParser.FOREIGN = 185;
DorisParser.FORCE = 186;
DorisParser.FORMAT = 187;
DorisParser.FREE = 188;
DorisParser.FROM = 189;
DorisParser.FRONTEND = 190;
DorisParser.FRONTENDS = 191;
DorisParser.FULL = 192;
DorisParser.FUNCTION = 193;
DorisParser.FUNCTIONS = 194;
DorisParser.GENERIC = 195;
DorisParser.GLOBAL = 196;
DorisParser.GRANT = 197;
DorisParser.GRANTS = 198;
DorisParser.GRAPH = 199;
DorisParser.GROUP = 200;
DorisParser.GROUPING = 201;
DorisParser.GROUPS = 202;
DorisParser.HASH = 203;
DorisParser.HAVING = 204;
DorisParser.HDFS = 205;
DorisParser.HELP = 206;
DorisParser.HISTOGRAM = 207;
DorisParser.HLL = 208;
DorisParser.HLL_UNION = 209;
DorisParser.HOSTNAME = 210;
DorisParser.HOTSPOT = 211;
DorisParser.HOUR = 212;
DorisParser.HUB = 213;
DorisParser.IDENTIFIED = 214;
DorisParser.IF = 215;
DorisParser.IGNORE = 216;
DorisParser.IMMEDIATE = 217;
DorisParser.IN = 218;
DorisParser.INCREMENTAL = 219;
DorisParser.INDEX = 220;
DorisParser.INDEXES = 221;
DorisParser.INFILE = 222;
DorisParser.INNER = 223;
DorisParser.INSERT = 224;
DorisParser.INSTALL = 225;
DorisParser.INT = 226;
DorisParser.INTEGER = 227;
DorisParser.INTERMEDIATE = 228;
DorisParser.INTERSECT = 229;
DorisParser.INTERVAL = 230;
DorisParser.INTO = 231;
DorisParser.INVERTED = 232;
DorisParser.IPV4 = 233;
DorisParser.IPV6 = 234;
DorisParser.IS = 235;
DorisParser.IS_NOT_NULL_PRED = 236;
DorisParser.IS_NULL_PRED = 237;
DorisParser.ISNULL = 238;
DorisParser.ISOLATION = 239;
DorisParser.JOB = 240;
DorisParser.JOBS = 241;
DorisParser.JOIN = 242;
DorisParser.JSON = 243;
DorisParser.JSONB = 244;
DorisParser.KEY = 245;
DorisParser.KEYS = 246;
DorisParser.KILL = 247;
DorisParser.LABEL = 248;
DorisParser.LARGEINT = 249;
DorisParser.LAST = 250;
DorisParser.LATERAL = 251;
DorisParser.LDAP = 252;
DorisParser.LDAP_ADMIN_PASSWORD = 253;
DorisParser.LEFT = 254;
DorisParser.LESS = 255;
DorisParser.LEVEL = 256;
DorisParser.LIKE = 257;
DorisParser.LIMIT = 258;
DorisParser.LINES = 259;
DorisParser.LINK = 260;
DorisParser.LIST = 261;
DorisParser.LOAD = 262;
DorisParser.LOCAL = 263;
DorisParser.LOCALTIME = 264;
DorisParser.LOCALTIMESTAMP = 265;
DorisParser.LOCATION = 266;
DorisParser.LOCK = 267;
DorisParser.LOGICAL = 268;
DorisParser.LOW_PRIORITY = 269;
DorisParser.MANUAL = 270;
DorisParser.MAP = 271;
DorisParser.MATCH = 272;
DorisParser.MATCH_ALL = 273;
DorisParser.MATCH_ANY = 274;
DorisParser.MATCH_PHRASE = 275;
DorisParser.MATCH_PHRASE_EDGE = 276;
DorisParser.MATCH_PHRASE_PREFIX = 277;
DorisParser.MATCH_REGEXP = 278;
DorisParser.MATERIALIZED = 279;
DorisParser.MAX = 280;
DorisParser.MAXVALUE = 281;
DorisParser.MEMO = 282;
DorisParser.MERGE = 283;
DorisParser.MIGRATE = 284;
DorisParser.MIGRATIONS = 285;
DorisParser.MIN = 286;
DorisParser.MINUS = 287;
DorisParser.MINUTE = 288;
DorisParser.MODIFY = 289;
DorisParser.MONTH = 290;
DorisParser.MTMV = 291;
DorisParser.NAME = 292;
DorisParser.NAMES = 293;
DorisParser.NATURAL = 294;
DorisParser.NEGATIVE = 295;
DorisParser.NEVER = 296;
DorisParser.NEXT = 297;
DorisParser.NGRAM_BF = 298;
DorisParser.NO = 299;
DorisParser.NON_NULLABLE = 300;
DorisParser.NOT = 301;
DorisParser.NULL = 302;
DorisParser.NULLS = 303;
DorisParser.OBSERVER = 304;
DorisParser.OF = 305;
DorisParser.OFFSET = 306;
DorisParser.ON = 307;
DorisParser.ONLY = 308;
DorisParser.OPEN = 309;
DorisParser.OPTIMIZED = 310;
DorisParser.OR = 311;
DorisParser.ORDER = 312;
DorisParser.OUTER = 313;
DorisParser.OUTFILE = 314;
DorisParser.OVER = 315;
DorisParser.OVERWRITE = 316;
DorisParser.PARAMETER = 317;
DorisParser.PARSED = 318;
DorisParser.PARTITION = 319;
DorisParser.PARTITIONS = 320;
DorisParser.PASSWORD = 321;
DorisParser.PASSWORD_EXPIRE = 322;
DorisParser.PASSWORD_HISTORY = 323;
DorisParser.PASSWORD_LOCK_TIME = 324;
DorisParser.PASSWORD_REUSE = 325;
DorisParser.PATH = 326;
DorisParser.PAUSE = 327;
DorisParser.PERCENT = 328;
DorisParser.PERIOD = 329;
DorisParser.PERMISSIVE = 330;
DorisParser.PHYSICAL = 331;
DorisParser.PLACEHOLDER = 332;
DorisParser.PLAN = 333;
DorisParser.PRIVILEGES = 334;
DorisParser.PROCESS = 335;
DorisParser.PLUGIN = 336;
DorisParser.PLUGINS = 337;
DorisParser.POLICY = 338;
DorisParser.PRECEDING = 339;
DorisParser.PREPARE = 340;
DorisParser.PRIMARY = 341;
DorisParser.PROC = 342;
DorisParser.PROCEDURE = 343;
DorisParser.PROCESSLIST = 344;
DorisParser.PROFILE = 345;
DorisParser.PROPERTIES = 346;
DorisParser.PROPERTY = 347;
DorisParser.QUANTILE_STATE = 348;
DorisParser.QUANTILE_UNION = 349;
DorisParser.QUERY = 350;
DorisParser.QUOTA = 351;
DorisParser.RANDOM = 352;
DorisParser.RANGE = 353;
DorisParser.READ = 354;
DorisParser.REAL = 355;
DorisParser.REBALANCE = 356;
DorisParser.RECENT = 357;
DorisParser.RECOVER = 358;
DorisParser.RECYCLE = 359;
DorisParser.REFRESH = 360;
DorisParser.REFERENCES = 361;
DorisParser.REGEXP = 362;
DorisParser.RELEASE = 363;
DorisParser.RENAME = 364;
DorisParser.REPAIR = 365;
DorisParser.REPEATABLE = 366;
DorisParser.REPLACE = 367;
DorisParser.REPLACE_IF_NOT_NULL = 368;
DorisParser.REPLICA = 369;
DorisParser.REPOSITORIES = 370;
DorisParser.REPOSITORY = 371;
DorisParser.RESOURCE = 372;
DorisParser.RESOURCES = 373;
DorisParser.RESTORE = 374;
DorisParser.RESTRICTIVE = 375;
DorisParser.RESUME = 376;
DorisParser.RETURNS = 377;
DorisParser.REVOKE = 378;
DorisParser.REWRITTEN = 379;
DorisParser.RIGHT = 380;
DorisParser.RLIKE = 381;
DorisParser.ROLE = 382;
DorisParser.ROLES = 383;
DorisParser.ROLLBACK = 384;
DorisParser.ROLLUP = 385;
DorisParser.ROUTINE = 386;
DorisParser.ROW = 387;
DorisParser.ROWS = 388;
DorisParser.S3 = 389;
DorisParser.SAMPLE = 390;
DorisParser.SCHEDULE = 391;
DorisParser.SCHEDULER = 392;
DorisParser.SCHEMA = 393;
DorisParser.SCHEMAS = 394;
DorisParser.SECOND = 395;
DorisParser.SELECT = 396;
DorisParser.SEMI = 397;
DorisParser.SEQUENCE = 398;
DorisParser.SERIALIZABLE = 399;
DorisParser.SESSION = 400;
DorisParser.SET = 401;
DorisParser.SETS = 402;
DorisParser.SHAPE = 403;
DorisParser.SHOW = 404;
DorisParser.SIGNED = 405;
DorisParser.SKEW = 406;
DorisParser.SMALLINT = 407;
DorisParser.SNAPSHOT = 408;
DorisParser.SONAME = 409;
DorisParser.SPLIT = 410;
DorisParser.SQL = 411;
DorisParser.SQL_BLOCK_RULE = 412;
DorisParser.STAGES = 413;
DorisParser.START = 414;
DorisParser.STARTS = 415;
DorisParser.STATS = 416;
DorisParser.STATUS = 417;
DorisParser.STOP = 418;
DorisParser.STORAGE = 419;
DorisParser.STREAM = 420;
DorisParser.STREAMING = 421;
DorisParser.STRING = 422;
DorisParser.STRUCT = 423;
DorisParser.SUBDATE = 424;
DorisParser.SUM = 425;
DorisParser.SUPERUSER = 426;
DorisParser.SWITCH = 427;
DorisParser.SYNC = 428;
DorisParser.SYSTEM = 429;
DorisParser.TABLE = 430;
DorisParser.TABLES = 431;
DorisParser.TABLESAMPLE = 432;
DorisParser.TABLET = 433;
DorisParser.TABLETS = 434;
DorisParser.TASK = 435;
DorisParser.TASKS = 436;
DorisParser.TEMPORARY = 437;
DorisParser.TERMINATED = 438;
DorisParser.TEXT = 439;
DorisParser.THAN = 440;
DorisParser.THEN = 441;
DorisParser.TIME = 442;
DorisParser.TIMESTAMP = 443;
DorisParser.TIMESTAMPADD = 444;
DorisParser.TIMESTAMPDIFF = 445;
DorisParser.TINYINT = 446;
DorisParser.TO = 447;
DorisParser.TRANSACTION = 448;
DorisParser.TRASH = 449;
DorisParser.TREE = 450;
DorisParser.TRIGGERS = 451;
DorisParser.TRIM = 452;
DorisParser.TRUE = 453;
DorisParser.TRUNCATE = 454;
DorisParser.TYPE = 455;
DorisParser.TYPECAST = 456;
DorisParser.TYPES = 457;
DorisParser.UNBOUNDED = 458;
DorisParser.UNCOMMITTED = 459;
DorisParser.UNINSTALL = 460;
DorisParser.UNION = 461;
DorisParser.UNIQUE = 462;
DorisParser.UNLOCK = 463;
DorisParser.UNSIGNED = 464;
DorisParser.UP = 465;
DorisParser.UPDATE = 466;
DorisParser.USE = 467;
DorisParser.USER = 468;
DorisParser.USING = 469;
DorisParser.VALUE = 470;
DorisParser.VALUES = 471;
DorisParser.VARCHAR = 472;
DorisParser.VARIABLES = 473;
DorisParser.VARIANT = 474;
DorisParser.VAULT = 475;
DorisParser.VERBOSE = 476;
DorisParser.VERSION = 477;
DorisParser.VIEW = 478;
DorisParser.WARM = 479;
DorisParser.WARNINGS = 480;
DorisParser.WEEK = 481;
DorisParser.WHEN = 482;
DorisParser.WHERE = 483;
DorisParser.WHITELIST = 484;
DorisParser.WITH = 485;
DorisParser.WORK = 486;
DorisParser.WORKLOAD = 487;
DorisParser.WRITE = 488;
DorisParser.XOR = 489;
DorisParser.YEAR = 490;
DorisParser.EQ = 491;
DorisParser.NSEQ = 492;
DorisParser.NEQ = 493;
DorisParser.LT = 494;
DorisParser.LTE = 495;
DorisParser.GT = 496;
DorisParser.GTE = 497;
DorisParser.PLUS = 498;
DorisParser.SUBTRACT = 499;
DorisParser.ASTERISK = 500;
DorisParser.SLASH = 501;
DorisParser.MOD = 502;
DorisParser.TILDE = 503;
DorisParser.AMPERSAND = 504;
DorisParser.LOGICALAND = 505;
DorisParser.LOGICALNOT = 506;
DorisParser.PIPE = 507;
DorisParser.DOUBLEPIPES = 508;
DorisParser.HAT = 509;
DorisParser.COLON = 510;
DorisParser.ARROW = 511;
DorisParser.HINT_START = 512;
DorisParser.HINT_END = 513;
DorisParser.ATSIGN = 514;
DorisParser.DOUBLEATSIGN = 515;
DorisParser.STRING_LITERAL = 516;
DorisParser.LEADING_STRING = 517;
DorisParser.BIGINT_LITERAL = 518;
DorisParser.SMALLINT_LITERAL = 519;
DorisParser.TINYINT_LITERAL = 520;
DorisParser.INTEGER_VALUE = 521;
DorisParser.EXPONENT_VALUE = 522;
DorisParser.DECIMAL_VALUE = 523;
DorisParser.BIGDECIMAL_LITERAL = 524;
DorisParser.IDENTIFIER = 525;
DorisParser.BACKQUOTED_IDENTIFIER = 526;
DorisParser.SIMPLE_COMMENT = 527;
DorisParser.BRACKETED_COMMENT = 528;
DorisParser.FROM_DUAL = 529;
DorisParser.WS = 530;
DorisParser.UNRECOGNIZED = 531;
DorisParser.RULE_program = 0;
DorisParser.RULE_multiStatements = 1;
DorisParser.RULE_singleStatement = 2;
DorisParser.RULE_statement = 3;
DorisParser.RULE_statementBase = 4;
DorisParser.RULE_unsupportedStatement = 5;
DorisParser.RULE_variable = 6;
DorisParser.RULE_transactionAccessMode = 7;
DorisParser.RULE_isolationLevel = 8;
DorisParser.RULE_constraint = 9;
DorisParser.RULE_partitionSpec = 10;
DorisParser.RULE_partitionTable = 11;
DorisParser.RULE_identityOrFunctionList = 12;
DorisParser.RULE_identityOrFunction = 13;
DorisParser.RULE_dataDesc = 14;
DorisParser.RULE_buildMode = 15;
DorisParser.RULE_refreshTrigger = 16;
DorisParser.RULE_refreshSchedule = 17;
DorisParser.RULE_refreshMethod = 18;
DorisParser.RULE_mvPartition = 19;
DorisParser.RULE_identifierOrStringLiteral = 20;
DorisParser.RULE_identifierOrText = 21;
DorisParser.RULE_userIdentify = 22;
DorisParser.RULE_explain = 23;
DorisParser.RULE_planType = 24;
DorisParser.RULE_mergeType = 25;
DorisParser.RULE_preFilterClause = 26;
DorisParser.RULE_deleteOnClause = 27;
DorisParser.RULE_sequenceColClause = 28;
DorisParser.RULE_colFromPath = 29;
DorisParser.RULE_colMappingList = 30;
DorisParser.RULE_mappingExpr = 31;
DorisParser.RULE_withRemoteStorageSystem = 32;
DorisParser.RULE_resourceDesc = 33;
DorisParser.RULE_mysqlDataDesc = 34;
DorisParser.RULE_skipLines = 35;
DorisParser.RULE_outFileClause = 36;
DorisParser.RULE_query = 37;
DorisParser.RULE_queryTerm = 38;
DorisParser.RULE_setQuantifier = 39;
DorisParser.RULE_queryPrimary = 40;
DorisParser.RULE_querySpecification = 41;
DorisParser.RULE_cte = 42;
DorisParser.RULE_aliasQuery = 43;
DorisParser.RULE_columnAliases = 44;
DorisParser.RULE_selectClause = 45;
DorisParser.RULE_selectColumnClause = 46;
DorisParser.RULE_whereClause = 47;
DorisParser.RULE_fromClause = 48;
DorisParser.RULE_intoClause = 49;
DorisParser.RULE_bulkCollectClause = 50;
DorisParser.RULE_tableRow = 51;
DorisParser.RULE_relations = 52;
DorisParser.RULE_relation = 53;
DorisParser.RULE_joinRelation = 54;
DorisParser.RULE_distributeType = 55;
DorisParser.RULE_relationHint = 56;
DorisParser.RULE_aggClause = 57;
DorisParser.RULE_groupingElement = 58;
DorisParser.RULE_groupingSet = 59;
DorisParser.RULE_havingClause = 60;
DorisParser.RULE_selectHint = 61;
DorisParser.RULE_hintStatement = 62;
DorisParser.RULE_hintAssignment = 63;
DorisParser.RULE_updateAssignment = 64;
DorisParser.RULE_updateAssignmentSeq = 65;
DorisParser.RULE_lateralView = 66;
DorisParser.RULE_queryOrganization = 67;
DorisParser.RULE_sortClause = 68;
DorisParser.RULE_sortItem = 69;
DorisParser.RULE_limitClause = 70;
DorisParser.RULE_partitionClause = 71;
DorisParser.RULE_joinType = 72;
DorisParser.RULE_joinCriteria = 73;
DorisParser.RULE_identifierList = 74;
DorisParser.RULE_identifierSeq = 75;
DorisParser.RULE_optScanParams = 76;
DorisParser.RULE_relationPrimary = 77;
DorisParser.RULE_materializedViewName = 78;
DorisParser.RULE_propertyClause = 79;
DorisParser.RULE_propertyItemList = 80;
DorisParser.RULE_propertyItem = 81;
DorisParser.RULE_propertyKey = 82;
DorisParser.RULE_propertyValue = 83;
DorisParser.RULE_tableAlias = 84;
DorisParser.RULE_multipartIdentifier = 85;
DorisParser.RULE_simpleColumnDefs = 86;
DorisParser.RULE_simpleColumnDef = 87;
DorisParser.RULE_columnDefs = 88;
DorisParser.RULE_columnDef = 89;
DorisParser.RULE_indexDefs = 90;
DorisParser.RULE_indexDef = 91;
DorisParser.RULE_partitionsDef = 92;
DorisParser.RULE_partitionDef = 93;
DorisParser.RULE_lessThanPartitionDef = 94;
DorisParser.RULE_fixedPartitionDef = 95;
DorisParser.RULE_stepPartitionDef = 96;
DorisParser.RULE_inPartitionDef = 97;
DorisParser.RULE_constantSeq = 98;
DorisParser.RULE_partitionValueDef = 99;
DorisParser.RULE_rollupDefs = 100;
DorisParser.RULE_rollupDef = 101;
DorisParser.RULE_aggTypeDef = 102;
DorisParser.RULE_tabletList = 103;
DorisParser.RULE_inlineTable = 104;
DorisParser.RULE_namedExpression = 105;
DorisParser.RULE_namedExpressionSeq = 106;
DorisParser.RULE_expression = 107;
DorisParser.RULE_lambdaExpression = 108;
DorisParser.RULE_booleanExpression = 109;
DorisParser.RULE_rowConstructor = 110;
DorisParser.RULE_rowConstructorItem = 111;
DorisParser.RULE_predicate = 112;
DorisParser.RULE_valueExpression = 113;
DorisParser.RULE_datetimeUnit = 114;
DorisParser.RULE_primaryExpression = 115;
DorisParser.RULE_castDataType = 116;
DorisParser.RULE_functionCallExpression = 117;
DorisParser.RULE_functionIdentifier = 118;
DorisParser.RULE_functionNameIdentifier = 119;
DorisParser.RULE_windowSpec = 120;
DorisParser.RULE_windowFrame = 121;
DorisParser.RULE_frameUnits = 122;
DorisParser.RULE_frameBoundary = 123;
DorisParser.RULE_qualifiedName = 124;
DorisParser.RULE_specifiedPartition = 125;
DorisParser.RULE_constant = 126;
DorisParser.RULE_comparisonOperator = 127;
DorisParser.RULE_booleanValue = 128;
DorisParser.RULE_whenClause = 129;
DorisParser.RULE_interval = 130;
DorisParser.RULE_unitIdentifier = 131;
DorisParser.RULE_dataTypeWithNullable = 132;
DorisParser.RULE_dataType = 133;
DorisParser.RULE_primitiveColType = 134;
DorisParser.RULE_complexColTypeList = 135;
DorisParser.RULE_complexColType = 136;
DorisParser.RULE_commentSpec = 137;
DorisParser.RULE_sample = 138;
DorisParser.RULE_sampleMethod = 139;
DorisParser.RULE_tableSnapshot = 140;
DorisParser.RULE_errorCapturingIdentifier = 141;
DorisParser.RULE_errorCapturingIdentifierExtra = 142;
DorisParser.RULE_identifier = 143;
DorisParser.RULE_strictIdentifier = 144;
DorisParser.RULE_quotedIdentifier = 145;
DorisParser.RULE_number = 146;
DorisParser.RULE_nonReserved = 147;
DorisParser.literalNames = [
	null,
	"';'",
	"'('",
	"')'",
	"','",
	"'.'",
	"'['",
	"']'",
	"'{'",
	"'}'",
	"'ACCOUNT_LOCK'",
	"'ACCOUNT_UNLOCK'",
	"'ADD'",
	"'ADDDATE'",
	"'ADMIN'",
	"'AFTER'",
	"'AGG_STATE'",
	"'AGGREGATE'",
	"'ALIAS'",
	"'ALL'",
	"'ALTER'",
	"'ANALYZE'",
	"'ANALYZED'",
	"'AND'",
	"'ANTI'",
	"'APPEND'",
	"'ARRAY'",
	"'ARRAY_RANGE'",
	"'AS'",
	"'ASC'",
	"'AT'",
	"'AUTHORS'",
	"'AUTO'",
	"'AUTO_INCREMENT'",
	"'BACKEND'",
	"'BACKENDS'",
	"'BACKUP'",
	"'BEGIN'",
	"'BELONG'",
	"'BETWEEN'",
	"'BIGINT'",
	"'BIN'",
	"'BINARY'",
	"'BINLOG'",
	"'BITAND'",
	"'BITMAP'",
	"'BITMAP_UNION'",
	"'BITOR'",
	"'BITXOR'",
	"'BLOB'",
	"'BOOLEAN'",
	"'BRIEF'",
	"'BROKER'",
	"'BUCKETS'",
	"'BUILD'",
	"'BUILTIN'",
	"'BULK'",
	"'BY'",
	"'CACHE'",
	"'CACHED'",
	"'CALL'",
	"'CANCEL'",
	"'CASE'",
	"'CAST'",
	"'CATALOG'",
	"'CATALOGS'",
	"'CHAIN'",
	null,
	"'CHARSET'",
	"'CHECK'",
	"'CLEAN'",
	"'CLUSTER'",
	"'CLUSTERS'",
	"'COLLATE'",
	"'COLLATION'",
	"'COLLECT'",
	"'COLOCATE'",
	"'COLUMN'",
	"'COLUMNS'",
	"'COMMENT'",
	"'COMMIT'",
	"'COMMITTED'",
	"'COMPACT'",
	"'COMPLETE'",
	"'COMPRESS_TYPE'",
	"'CONFIG'",
	"'CONNECTION'",
	"'CONNECTION_ID'",
	"'CONSISTENT'",
	"'CONSTRAINT'",
	"'CONSTRAINTS'",
	"'CONVERT'",
	"'CONVERT_LSC'",
	"'COPY'",
	"'COUNT'",
	"'CREATE'",
	"'CREATION'",
	"'CRON'",
	"'CROSS'",
	"'CUBE'",
	"'CURRENT'",
	"'CURRENT_CATALOG'",
	"'CURRENT_DATE'",
	"'CURRENT_TIME'",
	"'CURRENT_TIMESTAMP'",
	"'CURRENT_USER'",
	"'DATA'",
	"'DATABASE'",
	"'DATABASES'",
	"'DATE'",
	"'DATE_ADD'",
	"'DATE_CEIL'",
	"'DATE_DIFF'",
	"'DATE_FLOOR'",
	"'DATE_SUB'",
	"'DATEADD'",
	"'DATEDIFF'",
	"'DATETIME'",
	"'DATETIMEV2'",
	"'DATEV2'",
	"'DATETIMEV1'",
	"'DATEV1'",
	"'DAY'",
	"'DAYS_ADD'",
	"'DAYS_SUB'",
	"'DECIMAL'",
	"'DECIMALV2'",
	"'DECIMALV3'",
	"'DECOMMISSION'",
	"'DEFAULT'",
	"'DEFERRED'",
	"'DELETE'",
	"'DEMAND'",
	"'DESC'",
	"'DESCRIBE'",
	"'DIAGNOSE'",
	"'DISK'",
	"'DISTINCT'",
	"'DISTINCTPC'",
	"'DISTINCTPCSA'",
	"'DISTRIBUTED'",
	"'DISTRIBUTION'",
	"'DIV'",
	"'DO'",
	"'DORIS_INTERNAL_TABLE_ID'",
	"'DOUBLE'",
	"'DROP'",
	"'DROPP'",
	"'DUAL'",
	"'DUPLICATE'",
	"'DYNAMIC'",
	"'ELSE'",
	"'ENABLE'",
	"'ENCRYPTKEY'",
	"'ENCRYPTKEYS'",
	"'END'",
	"'ENDS'",
	"'ENGINE'",
	"'ENGINES'",
	"'ENTER'",
	"'ERRORS'",
	"'EVENTS'",
	"'EVERY'",
	"'EXCEPT'",
	"'EXCLUDE'",
	"'EXECUTE'",
	"'EXISTS'",
	"'EXPIRED'",
	"'EXPLAIN'",
	"'EXPORT'",
	"'EXTENDED'",
	"'EXTERNAL'",
	"'EXTRACT'",
	"'FAILED_LOGIN_ATTEMPTS'",
	"'FALSE'",
	"'FAST'",
	"'FEATURE'",
	"'FIELDS'",
	"'FILE'",
	"'FILTER'",
	"'FIRST'",
	"'FLOAT'",
	"'FOLLOWER'",
	"'FOLLOWING'",
	"'FOR'",
	"'FOREIGN'",
	"'FORCE'",
	"'FORMAT'",
	"'FREE'",
	"'FROM'",
	"'FRONTEND'",
	"'FRONTENDS'",
	"'FULL'",
	"'FUNCTION'",
	"'FUNCTIONS'",
	"'GENERIC'",
	"'GLOBAL'",
	"'GRANT'",
	"'GRANTS'",
	"'GRAPH'",
	"'GROUP'",
	"'GROUPING'",
	"'GROUPS'",
	"'HASH'",
	"'HAVING'",
	"'HDFS'",
	"'HELP'",
	"'HISTOGRAM'",
	"'HLL'",
	"'HLL_UNION'",
	"'HOSTNAME'",
	"'HOTSPOT'",
	"'HOUR'",
	"'HUB'",
	"'IDENTIFIED'",
	"'IF'",
	"'IGNORE'",
	"'IMMEDIATE'",
	"'IN'",
	"'INCREMENTAL'",
	"'INDEX'",
	"'INDEXES'",
	"'INFILE'",
	"'INNER'",
	"'INSERT'",
	"'INSTALL'",
	"'INT'",
	"'INTEGER'",
	"'INTERMEDIATE'",
	"'INTERSECT'",
	"'INTERVAL'",
	"'INTO'",
	"'INVERTED'",
	"'IPV4'",
	"'IPV6'",
	"'IS'",
	"'IS_NOT_NULL_PRED'",
	"'IS_NULL_PRED'",
	"'ISNULL'",
	"'ISOLATION'",
	"'JOB'",
	"'JOBS'",
	"'JOIN'",
	"'JSON'",
	"'JSONB'",
	"'KEY'",
	"'KEYS'",
	"'KILL'",
	"'LABEL'",
	"'LARGEINT'",
	"'LAST'",
	"'LATERAL'",
	"'LDAP'",
	"'LDAP_ADMIN_PASSWORD'",
	"'LEFT'",
	"'LESS'",
	"'LEVEL'",
	"'LIKE'",
	"'LIMIT'",
	"'LINES'",
	"'LINK'",
	"'LIST'",
	"'LOAD'",
	"'LOCAL'",
	"'LOCALTIME'",
	"'LOCALTIMESTAMP'",
	"'LOCATION'",
	"'LOCK'",
	"'LOGICAL'",
	"'LOW_PRIORITY'",
	"'MANUAL'",
	"'MAP'",
	"'MATCH'",
	"'MATCH_ALL'",
	"'MATCH_ANY'",
	"'MATCH_PHRASE'",
	"'MATCH_PHRASE_EDGE'",
	"'MATCH_PHRASE_PREFIX'",
	"'MATCH_REGEXP'",
	"'MATERIALIZED'",
	"'MAX'",
	"'MAXVALUE'",
	"'MEMO'",
	"'MERGE'",
	"'MIGRATE'",
	"'MIGRATIONS'",
	"'MIN'",
	"'MINUS'",
	"'MINUTE'",
	"'MODIFY'",
	"'MONTH'",
	"'MTMV'",
	"'NAME'",
	"'NAMES'",
	"'NATURAL'",
	"'NEGATIVE'",
	"'NEVER'",
	"'NEXT'",
	"'NGRAM_BF'",
	"'NO'",
	"'NON_NULLABLE'",
	"'NOT'",
	"'NULL'",
	"'NULLS'",
	"'OBSERVER'",
	"'OF'",
	"'OFFSET'",
	"'ON'",
	"'ONLY'",
	"'OPEN'",
	"'OPTIMIZED'",
	"'OR'",
	"'ORDER'",
	"'OUTER'",
	"'OUTFILE'",
	"'OVER'",
	"'OVERWRITE'",
	"'PARAMETER'",
	"'PARSED'",
	"'PARTITION'",
	"'PARTITIONS'",
	"'PASSWORD'",
	"'PASSWORD_EXPIRE'",
	"'PASSWORD_HISTORY'",
	"'PASSWORD_LOCK_TIME'",
	"'PASSWORD_REUSE'",
	"'PATH'",
	"'PAUSE'",
	"'PERCENT'",
	"'PERIOD'",
	"'PERMISSIVE'",
	"'PHYSICAL'",
	"'?'",
	"'PLAN'",
	"'PRIVILEGES'",
	"'PROCESS'",
	"'PLUGIN'",
	"'PLUGINS'",
	"'POLICY'",
	"'PRECEDING'",
	"'PREPARE'",
	"'PRIMARY'",
	"'PROC'",
	"'PROCEDURE'",
	"'PROCESSLIST'",
	"'PROFILE'",
	"'PROPERTIES'",
	"'PROPERTY'",
	"'QUANTILE_STATE'",
	"'QUANTILE_UNION'",
	"'QUERY'",
	"'QUOTA'",
	"'RANDOM'",
	"'RANGE'",
	"'READ'",
	"'REAL'",
	"'REBALANCE'",
	"'RECENT'",
	"'RECOVER'",
	"'RECYCLE'",
	"'REFRESH'",
	"'REFERENCES'",
	"'REGEXP'",
	"'RELEASE'",
	"'RENAME'",
	"'REPAIR'",
	"'REPEATABLE'",
	"'REPLACE'",
	"'REPLACE_IF_NOT_NULL'",
	"'REPLICA'",
	"'REPOSITORIES'",
	"'REPOSITORY'",
	"'RESOURCE'",
	"'RESOURCES'",
	"'RESTORE'",
	"'RESTRICTIVE'",
	"'RESUME'",
	"'RETURNS'",
	"'REVOKE'",
	"'REWRITTEN'",
	"'RIGHT'",
	"'RLIKE'",
	"'ROLE'",
	"'ROLES'",
	"'ROLLBACK'",
	"'ROLLUP'",
	"'ROUTINE'",
	"'ROW'",
	"'ROWS'",
	"'S3'",
	"'SAMPLE'",
	"'SCHEDULE'",
	"'SCHEDULER'",
	"'SCHEMA'",
	"'SCHEMAS'",
	"'SECOND'",
	"'SELECT'",
	"'SEMI'",
	"'SEQUENCE'",
	"'SERIALIZABLE'",
	"'SESSION'",
	"'SET'",
	"'SETS'",
	"'SHAPE'",
	"'SHOW'",
	"'SIGNED'",
	"'SKEW'",
	"'SMALLINT'",
	"'SNAPSHOT'",
	"'SONAME'",
	"'SPLIT'",
	"'SQL'",
	"'SQL_BLOCK_RULE'",
	"'STAGES'",
	"'START'",
	"'STARTS'",
	"'STATS'",
	"'STATUS'",
	"'STOP'",
	"'STORAGE'",
	"'STREAM'",
	"'STREAMING'",
	"'STRING'",
	"'STRUCT'",
	"'SUBDATE'",
	"'SUM'",
	"'SUPERUSER'",
	"'SWITCH'",
	"'SYNC'",
	"'SYSTEM'",
	"'TABLE'",
	"'TABLES'",
	"'TABLESAMPLE'",
	"'TABLET'",
	"'TABLETS'",
	"'TASK'",
	"'TASKS'",
	"'TEMPORARY'",
	"'TERMINATED'",
	"'TEXT'",
	"'THAN'",
	"'THEN'",
	"'TIME'",
	"'TIMESTAMP'",
	"'TIMESTAMPADD'",
	"'TIMESTAMPDIFF'",
	"'TINYINT'",
	"'TO'",
	"'TRANSACTION'",
	"'TRASH'",
	"'TREE'",
	"'TRIGGERS'",
	"'TRIM'",
	"'TRUE'",
	"'TRUNCATE'",
	"'TYPE'",
	"'TYPE_CAST'",
	"'TYPES'",
	"'UNBOUNDED'",
	"'UNCOMMITTED'",
	"'UNINSTALL'",
	"'UNION'",
	"'UNIQUE'",
	"'UNLOCK'",
	"'UNSIGNED'",
	"'UP'",
	"'UPDATE'",
	"'USE'",
	"'USER'",
	"'USING'",
	"'VALUE'",
	"'VALUES'",
	"'VARCHAR'",
	"'VARIABLES'",
	"'VARIANT'",
	"'VAULT'",
	"'VERBOSE'",
	"'VERSION'",
	"'VIEW'",
	"'WARM'",
	"'WARNINGS'",
	"'WEEK'",
	"'WHEN'",
	"'WHERE'",
	"'WHITELIST'",
	"'WITH'",
	"'WORK'",
	"'WORKLOAD'",
	"'WRITE'",
	"'XOR'",
	"'YEAR'",
	null,
	"'<=>'",
	null,
	"'<'",
	null,
	"'>'",
	null,
	"'+'",
	"'-'",
	"'*'",
	"'/'",
	"'%'",
	"'~'",
	"'&'",
	"'&&'",
	"'!'",
	"'|'",
	"'||'",
	"'^'",
	"':'",
	"'->'",
	"'/*+'",
	"'*/'",
	"'@'",
	"'@@'"
];
DorisParser.symbolicNames = [
	null,
	'SEMICOLON',
	'LEFT_PAREN',
	'RIGHT_PAREN',
	'COMMA',
	'DOT',
	'LEFT_BRACKET',
	'RIGHT_BRACKET',
	'LEFT_BRACE',
	'RIGHT_BRACE',
	'ACCOUNT_LOCK',
	'ACCOUNT_UNLOCK',
	'ADD',
	'ADDDATE',
	'ADMIN',
	'AFTER',
	'AGG_STATE',
	'AGGREGATE',
	'ALIAS',
	'ALL',
	'ALTER',
	'ANALYZE',
	'ANALYZED',
	'AND',
	'ANTI',
	'APPEND',
	'ARRAY',
	'ARRAY_RANGE',
	'AS',
	'ASC',
	'AT',
	'AUTHORS',
	'AUTO',
	'AUTO_INCREMENT',
	'BACKEND',
	'BACKENDS',
	'BACKUP',
	'BEGIN',
	'BELONG',
	'BETWEEN',
	'BIGINT',
	'BIN',
	'BINARY',
	'BINLOG',
	'BITAND',
	'BITMAP',
	'BITMAP_UNION',
	'BITOR',
	'BITXOR',
	'BLOB',
	'BOOLEAN',
	'BRIEF',
	'BROKER',
	'BUCKETS',
	'BUILD',
	'BUILTIN',
	'BULK',
	'BY',
	'CACHE',
	'CACHED',
	'CALL',
	'CANCEL',
	'CASE',
	'CAST',
	'CATALOG',
	'CATALOGS',
	'CHAIN',
	'CHAR',
	'CHARSET',
	'CHECK',
	'CLEAN',
	'CLUSTER',
	'CLUSTERS',
	'COLLATE',
	'COLLATION',
	'COLLECT',
	'COLOCATE',
	'COLUMN',
	'COLUMNS',
	'COMMENT',
	'COMMIT',
	'COMMITTED',
	'COMPACT',
	'COMPLETE',
	'COMPRESS_TYPE',
	'CONFIG',
	'CONNECTION',
	'CONNECTION_ID',
	'CONSISTENT',
	'CONSTRAINT',
	'CONSTRAINTS',
	'CONVERT',
	'CONVERT_LSC',
	'COPY',
	'COUNT',
	'CREATE',
	'CREATION',
	'CRON',
	'CROSS',
	'CUBE',
	'CURRENT',
	'CURRENT_CATALOG',
	'CURRENT_DATE',
	'CURRENT_TIME',
	'CURRENT_TIMESTAMP',
	'CURRENT_USER',
	'DATA',
	'DATABASE',
	'DATABASES',
	'DATE',
	'DATE_ADD',
	'DATE_CEIL',
	'DATE_DIFF',
	'DATE_FLOOR',
	'DATE_SUB',
	'DATEADD',
	'DATEDIFF',
	'DATETIME',
	'DATETIMEV2',
	'DATEV2',
	'DATETIMEV1',
	'DATEV1',
	'DAY',
	'DAYS_ADD',
	'DAYS_SUB',
	'DECIMAL',
	'DECIMALV2',
	'DECIMALV3',
	'DECOMMISSION',
	'DEFAULT',
	'DEFERRED',
	'DELETE',
	'DEMAND',
	'DESC',
	'DESCRIBE',
	'DIAGNOSE',
	'DISK',
	'DISTINCT',
	'DISTINCTPC',
	'DISTINCTPCSA',
	'DISTRIBUTED',
	'DISTRIBUTION',
	'DIV',
	'DO',
	'DORIS_INTERNAL_TABLE_ID',
	'DOUBLE',
	'DROP',
	'DROPP',
	'DUAL',
	'DUPLICATE',
	'DYNAMIC',
	'ELSE',
	'ENABLE',
	'ENCRYPTKEY',
	'ENCRYPTKEYS',
	'END',
	'ENDS',
	'ENGINE',
	'ENGINES',
	'ENTER',
	'ERRORS',
	'EVENTS',
	'EVERY',
	'EXCEPT',
	'EXCLUDE',
	'EXECUTE',
	'EXISTS',
	'EXPIRED',
	'EXPLAIN',
	'EXPORT',
	'EXTENDED',
	'EXTERNAL',
	'EXTRACT',
	'FAILED_LOGIN_ATTEMPTS',
	'FALSE',
	'FAST',
	'FEATURE',
	'FIELDS',
	'FILE',
	'FILTER',
	'FIRST',
	'FLOAT',
	'FOLLOWER',
	'FOLLOWING',
	'FOR',
	'FOREIGN',
	'FORCE',
	'FORMAT',
	'FREE',
	'FROM',
	'FRONTEND',
	'FRONTENDS',
	'FULL',
	'FUNCTION',
	'FUNCTIONS',
	'GENERIC',
	'GLOBAL',
	'GRANT',
	'GRANTS',
	'GRAPH',
	'GROUP',
	'GROUPING',
	'GROUPS',
	'HASH',
	'HAVING',
	'HDFS',
	'HELP',
	'HISTOGRAM',
	'HLL',
	'HLL_UNION',
	'HOSTNAME',
	'HOTSPOT',
	'HOUR',
	'HUB',
	'IDENTIFIED',
	'IF',
	'IGNORE',
	'IMMEDIATE',
	'IN',
	'INCREMENTAL',
	'INDEX',
	'INDEXES',
	'INFILE',
	'INNER',
	'INSERT',
	'INSTALL',
	'INT',
	'INTEGER',
	'INTERMEDIATE',
	'INTERSECT',
	'INTERVAL',
	'INTO',
	'INVERTED',
	'IPV4',
	'IPV6',
	'IS',
	'IS_NOT_NULL_PRED',
	'IS_NULL_PRED',
	'ISNULL',
	'ISOLATION',
	'JOB',
	'JOBS',
	'JOIN',
	'JSON',
	'JSONB',
	'KEY',
	'KEYS',
	'KILL',
	'LABEL',
	'LARGEINT',
	'LAST',
	'LATERAL',
	'LDAP',
	'LDAP_ADMIN_PASSWORD',
	'LEFT',
	'LESS',
	'LEVEL',
	'LIKE',
	'LIMIT',
	'LINES',
	'LINK',
	'LIST',
	'LOAD',
	'LOCAL',
	'LOCALTIME',
	'LOCALTIMESTAMP',
	'LOCATION',
	'LOCK',
	'LOGICAL',
	'LOW_PRIORITY',
	'MANUAL',
	'MAP',
	'MATCH',
	'MATCH_ALL',
	'MATCH_ANY',
	'MATCH_PHRASE',
	'MATCH_PHRASE_EDGE',
	'MATCH_PHRASE_PREFIX',
	'MATCH_REGEXP',
	'MATERIALIZED',
	'MAX',
	'MAXVALUE',
	'MEMO',
	'MERGE',
	'MIGRATE',
	'MIGRATIONS',
	'MIN',
	'MINUS',
	'MINUTE',
	'MODIFY',
	'MONTH',
	'MTMV',
	'NAME',
	'NAMES',
	'NATURAL',
	'NEGATIVE',
	'NEVER',
	'NEXT',
	'NGRAM_BF',
	'NO',
	'NON_NULLABLE',
	'NOT',
	'NULL',
	'NULLS',
	'OBSERVER',
	'OF',
	'OFFSET',
	'ON',
	'ONLY',
	'OPEN',
	'OPTIMIZED',
	'OR',
	'ORDER',
	'OUTER',
	'OUTFILE',
	'OVER',
	'OVERWRITE',
	'PARAMETER',
	'PARSED',
	'PARTITION',
	'PARTITIONS',
	'PASSWORD',
	'PASSWORD_EXPIRE',
	'PASSWORD_HISTORY',
	'PASSWORD_LOCK_TIME',
	'PASSWORD_REUSE',
	'PATH',
	'PAUSE',
	'PERCENT',
	'PERIOD',
	'PERMISSIVE',
	'PHYSICAL',
	'PLACEHOLDER',
	'PLAN',
	'PRIVILEGES',
	'PROCESS',
	'PLUGIN',
	'PLUGINS',
	'POLICY',
	'PRECEDING',
	'PREPARE',
	'PRIMARY',
	'PROC',
	'PROCEDURE',
	'PROCESSLIST',
	'PROFILE',
	'PROPERTIES',
	'PROPERTY',
	'QUANTILE_STATE',
	'QUANTILE_UNION',
	'QUERY',
	'QUOTA',
	'RANDOM',
	'RANGE',
	'READ',
	'REAL',
	'REBALANCE',
	'RECENT',
	'RECOVER',
	'RECYCLE',
	'REFRESH',
	'REFERENCES',
	'REGEXP',
	'RELEASE',
	'RENAME',
	'REPAIR',
	'REPEATABLE',
	'REPLACE',
	'REPLACE_IF_NOT_NULL',
	'REPLICA',
	'REPOSITORIES',
	'REPOSITORY',
	'RESOURCE',
	'RESOURCES',
	'RESTORE',
	'RESTRICTIVE',
	'RESUME',
	'RETURNS',
	'REVOKE',
	'REWRITTEN',
	'RIGHT',
	'RLIKE',
	'ROLE',
	'ROLES',
	'ROLLBACK',
	'ROLLUP',
	'ROUTINE',
	'ROW',
	'ROWS',
	'S3',
	'SAMPLE',
	'SCHEDULE',
	'SCHEDULER',
	'SCHEMA',
	'SCHEMAS',
	'SECOND',
	'SELECT',
	'SEMI',
	'SEQUENCE',
	'SERIALIZABLE',
	'SESSION',
	'SET',
	'SETS',
	'SHAPE',
	'SHOW',
	'SIGNED',
	'SKEW',
	'SMALLINT',
	'SNAPSHOT',
	'SONAME',
	'SPLIT',
	'SQL',
	'SQL_BLOCK_RULE',
	'STAGES',
	'START',
	'STARTS',
	'STATS',
	'STATUS',
	'STOP',
	'STORAGE',
	'STREAM',
	'STREAMING',
	'STRING',
	'STRUCT',
	'SUBDATE',
	'SUM',
	'SUPERUSER',
	'SWITCH',
	'SYNC',
	'SYSTEM',
	'TABLE',
	'TABLES',
	'TABLESAMPLE',
	'TABLET',
	'TABLETS',
	'TASK',
	'TASKS',
	'TEMPORARY',
	'TERMINATED',
	'TEXT',
	'THAN',
	'THEN',
	'TIME',
	'TIMESTAMP',
	'TIMESTAMPADD',
	'TIMESTAMPDIFF',
	'TINYINT',
	'TO',
	'TRANSACTION',
	'TRASH',
	'TREE',
	'TRIGGERS',
	'TRIM',
	'TRUE',
	'TRUNCATE',
	'TYPE',
	'TYPECAST',
	'TYPES',
	'UNBOUNDED',
	'UNCOMMITTED',
	'UNINSTALL',
	'UNION',
	'UNIQUE',
	'UNLOCK',
	'UNSIGNED',
	'UP',
	'UPDATE',
	'USE',
	'USER',
	'USING',
	'VALUE',
	'VALUES',
	'VARCHAR',
	'VARIABLES',
	'VARIANT',
	'VAULT',
	'VERBOSE',
	'VERSION',
	'VIEW',
	'WARM',
	'WARNINGS',
	'WEEK',
	'WHEN',
	'WHERE',
	'WHITELIST',
	'WITH',
	'WORK',
	'WORKLOAD',
	'WRITE',
	'XOR',
	'YEAR',
	'EQ',
	'NSEQ',
	'NEQ',
	'LT',
	'LTE',
	'GT',
	'GTE',
	'PLUS',
	'SUBTRACT',
	'ASTERISK',
	'SLASH',
	'MOD',
	'TILDE',
	'AMPERSAND',
	'LOGICALAND',
	'LOGICALNOT',
	'PIPE',
	'DOUBLEPIPES',
	'HAT',
	'COLON',
	'ARROW',
	'HINT_START',
	'HINT_END',
	'ATSIGN',
	'DOUBLEATSIGN',
	'STRING_LITERAL',
	'LEADING_STRING',
	'BIGINT_LITERAL',
	'SMALLINT_LITERAL',
	'TINYINT_LITERAL',
	'INTEGER_VALUE',
	'EXPONENT_VALUE',
	'DECIMAL_VALUE',
	'BIGDECIMAL_LITERAL',
	'IDENTIFIER',
	'BACKQUOTED_IDENTIFIER',
	'SIMPLE_COMMENT',
	'BRACKETED_COMMENT',
	'FROM_DUAL',
	'WS',
	'UNRECOGNIZED'
];
DorisParser.ruleNames = [
	'program',
	'multiStatements',
	'singleStatement',
	'statement',
	'statementBase',
	'unsupportedStatement',
	'variable',
	'transactionAccessMode',
	'isolationLevel',
	'constraint',
	'partitionSpec',
	'partitionTable',
	'identityOrFunctionList',
	'identityOrFunction',
	'dataDesc',
	'buildMode',
	'refreshTrigger',
	'refreshSchedule',
	'refreshMethod',
	'mvPartition',
	'identifierOrStringLiteral',
	'identifierOrText',
	'userIdentify',
	'explain',
	'planType',
	'mergeType',
	'preFilterClause',
	'deleteOnClause',
	'sequenceColClause',
	'colFromPath',
	'colMappingList',
	'mappingExpr',
	'withRemoteStorageSystem',
	'resourceDesc',
	'mysqlDataDesc',
	'skipLines',
	'outFileClause',
	'query',
	'queryTerm',
	'setQuantifier',
	'queryPrimary',
	'querySpecification',
	'cte',
	'aliasQuery',
	'columnAliases',
	'selectClause',
	'selectColumnClause',
	'whereClause',
	'fromClause',
	'intoClause',
	'bulkCollectClause',
	'tableRow',
	'relations',
	'relation',
	'joinRelation',
	'distributeType',
	'relationHint',
	'aggClause',
	'groupingElement',
	'groupingSet',
	'havingClause',
	'selectHint',
	'hintStatement',
	'hintAssignment',
	'updateAssignment',
	'updateAssignmentSeq',
	'lateralView',
	'queryOrganization',
	'sortClause',
	'sortItem',
	'limitClause',
	'partitionClause',
	'joinType',
	'joinCriteria',
	'identifierList',
	'identifierSeq',
	'optScanParams',
	'relationPrimary',
	'materializedViewName',
	'propertyClause',
	'propertyItemList',
	'propertyItem',
	'propertyKey',
	'propertyValue',
	'tableAlias',
	'multipartIdentifier',
	'simpleColumnDefs',
	'simpleColumnDef',
	'columnDefs',
	'columnDef',
	'indexDefs',
	'indexDef',
	'partitionsDef',
	'partitionDef',
	'lessThanPartitionDef',
	'fixedPartitionDef',
	'stepPartitionDef',
	'inPartitionDef',
	'constantSeq',
	'partitionValueDef',
	'rollupDefs',
	'rollupDef',
	'aggTypeDef',
	'tabletList',
	'inlineTable',
	'namedExpression',
	'namedExpressionSeq',
	'expression',
	'lambdaExpression',
	'booleanExpression',
	'rowConstructor',
	'rowConstructorItem',
	'predicate',
	'valueExpression',
	'datetimeUnit',
	'primaryExpression',
	'castDataType',
	'functionCallExpression',
	'functionIdentifier',
	'functionNameIdentifier',
	'windowSpec',
	'windowFrame',
	'frameUnits',
	'frameBoundary',
	'qualifiedName',
	'specifiedPartition',
	'constant',
	'comparisonOperator',
	'booleanValue',
	'whenClause',
	'interval',
	'unitIdentifier',
	'dataTypeWithNullable',
	'dataType',
	'primitiveColType',
	'complexColTypeList',
	'complexColType',
	'commentSpec',
	'sample',
	'sampleMethod',
	'tableSnapshot',
	'errorCapturingIdentifier',
	'errorCapturingIdentifierExtra',
	'identifier',
	'strictIdentifier',
	'quotedIdentifier',
	'number',
	'nonReserved'
];
DorisParser._serializedATN = [
	4, 1, 531, 2857, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6,
	7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
	13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
	7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2,
	27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33,
	2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7,
	40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47,
	7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2,
	54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60,
	2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7,
	67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74,
	7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2,
	81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87,
	2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7,
	94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2,
	101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2,
	107, 7, 107, 2, 108, 7, 108, 2, 109, 7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2,
	113, 7, 113, 2, 114, 7, 114, 2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2,
	119, 7, 119, 2, 120, 7, 120, 2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2,
	125, 7, 125, 2, 126, 7, 126, 2, 127, 7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2,
	131, 7, 131, 2, 132, 7, 132, 2, 133, 7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136, 2,
	137, 7, 137, 2, 138, 7, 138, 2, 139, 7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142, 7, 142, 2,
	143, 7, 143, 2, 144, 7, 144, 2, 145, 7, 145, 2, 146, 7, 146, 2, 147, 7, 147, 1, 0, 5, 0, 298, 8,
	0, 10, 0, 12, 0, 301, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 5, 1, 307, 8, 1, 10, 1, 12, 1, 310, 9, 1, 4,
	1, 312, 8, 1, 11, 1, 12, 1, 313, 1, 1, 1, 1, 1, 2, 1, 2, 5, 2, 320, 8, 2, 10, 2, 12, 2, 323, 9,
	2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 334, 8, 3, 10, 3, 12, 3, 337, 9,
	3, 3, 3, 339, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 347, 8, 3, 1, 3, 3, 3, 350, 8, 3,
	1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 356, 8, 3, 10, 3, 12, 3, 359, 9, 3, 1, 3, 1, 3, 5, 3, 363, 8, 3,
	10, 3, 12, 3, 366, 9, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 372, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3,
	1, 3, 1, 3, 3, 3, 381, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 387, 8, 3, 1, 4, 3, 4, 390, 8, 4, 1,
	4, 1, 4, 3, 4, 394, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 402, 8, 4, 1, 4, 1, 4, 1, 4,
	1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 413, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
	3, 4, 422, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 428, 8, 4, 1, 4, 1, 4, 3, 4, 432, 8, 4, 1, 4, 1,
	4, 1, 4, 1, 4, 3, 4, 438, 8, 4, 1, 4, 3, 4, 441, 8, 4, 1, 4, 1, 4, 3, 4, 445, 8, 4, 1, 4, 1, 4,
	1, 4, 3, 4, 450, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 458, 8, 4, 3, 4, 460, 8, 4, 1,
	4, 1, 4, 3, 4, 464, 8, 4, 1, 4, 3, 4, 467, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 474, 8, 4,
	1, 4, 1, 4, 1, 4, 3, 4, 479, 8, 4, 3, 4, 481, 8, 4, 3, 4, 483, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
	4, 3, 4, 490, 8, 4, 1, 4, 3, 4, 493, 8, 4, 1, 4, 1, 4, 3, 4, 497, 8, 4, 1, 4, 1, 4, 3, 4, 501,
	8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 508, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 515, 8,
	4, 1, 4, 1, 4, 3, 4, 519, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3,
	4, 531, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 538, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 544,
	8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 552, 8, 4, 3, 4, 554, 8, 4, 1, 4, 3, 4, 557, 8,
	4, 1, 4, 3, 4, 560, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 566, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
	3, 4, 573, 8, 4, 1, 4, 3, 4, 576, 8, 4, 1, 4, 1, 4, 1, 4, 3, 4, 581, 8, 4, 1, 4, 3, 4, 584, 8,
	4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 590, 8, 4, 1, 4, 1, 4, 3, 4, 594, 8, 4, 1, 4, 3, 4, 597, 8, 4,
	1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 605, 8, 4, 1, 4, 3, 4, 608, 8, 4, 1, 4, 3, 4, 611, 8,
	4, 1, 4, 3, 4, 614, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 620, 8, 4, 1, 4, 1, 4, 1, 4, 3, 4, 625,
	8, 4, 1, 4, 3, 4, 628, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 637, 8, 4, 10, 4,
	12, 4, 640, 9, 4, 1, 4, 1, 4, 3, 4, 644, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 651, 8, 4, 1,
	4, 3, 4, 654, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 663, 8, 4, 1, 4, 3, 4, 666,
	8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 673, 8, 4, 1, 4, 3, 4, 676, 8, 4, 1, 4, 1, 4, 1, 4, 3,
	4, 681, 8, 4, 1, 4, 3, 4, 684, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 692, 8, 4, 1, 4,
	1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 699, 8, 4, 1, 4, 3, 4, 702, 8, 4, 1, 4, 1, 4, 3, 4, 706, 8, 4, 1,
	4, 3, 4, 709, 8, 4, 3, 4, 711, 8, 4, 1, 4, 3, 4, 714, 8, 4, 1, 4, 1, 4, 3, 4, 718, 8, 4, 1, 4,
	1, 4, 3, 4, 722, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 730, 8, 4, 1, 4, 1, 4, 1, 4, 1,
	4, 1, 4, 3, 4, 737, 8, 4, 1, 4, 1, 4, 3, 4, 741, 8, 4, 3, 4, 743, 8, 4, 1, 4, 3, 4, 746, 8, 4,
	1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 758, 8, 4, 1, 4, 1, 4, 1, 4,
	1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 772, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4,
	1, 4, 3, 4, 779, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 786, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
	4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
	4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
	4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 836, 8, 4, 1, 5, 1,
	5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 849, 8, 5, 1, 5, 1, 5, 1, 5, 3,
	5, 854, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 860, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5,
	868, 8, 5, 1, 5, 1, 5, 3, 5, 872, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 880, 8, 5, 1,
	5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 893, 8, 5, 1, 5, 1, 5, 1,
	5, 1, 5, 3, 5, 899, 8, 5, 1, 5, 1, 5, 1, 5, 3, 5, 904, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 910,
	8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 918, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5,
	1, 5, 1, 5, 3, 5, 928, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 934, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1,
	5, 3, 5, 941, 8, 5, 1, 5, 3, 5, 944, 8, 5, 1, 5, 1, 5, 3, 5, 948, 8, 5, 1, 6, 1, 6, 1, 6, 3, 6,
	953, 8, 6, 3, 6, 955, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 961, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
	6, 3, 6, 968, 8, 6, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3,
	8, 982, 8, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3, 9, 996,
	8, 9, 1, 10, 3, 10, 999, 8, 10, 1, 10, 1, 10, 1, 10, 3, 10, 1004, 8, 10, 1, 10, 1, 10, 1, 10, 1,
	10, 1, 10, 1, 10, 3, 10, 1012, 8, 10, 1, 11, 3, 11, 1015, 8, 11, 1, 11, 1, 11, 1, 11, 3, 11,
	1020, 8, 11, 1, 11, 1, 11, 1, 11, 3, 11, 1025, 8, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12,
	5, 12, 1033, 8, 12, 10, 12, 12, 12, 1036, 9, 12, 1, 12, 1, 12, 1, 13, 1, 13, 3, 13, 1042, 8, 13,
	1, 14, 3, 14, 1045, 8, 14, 1, 14, 3, 14, 1048, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14,
	5, 14, 1056, 8, 14, 10, 14, 12, 14, 1059, 9, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3,
	14, 1067, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 1073, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3,
	14, 1079, 8, 14, 1, 14, 1, 14, 1, 14, 3, 14, 1084, 8, 14, 1, 14, 3, 14, 1087, 8, 14, 1, 14, 3,
	14, 1090, 8, 14, 1, 14, 3, 14, 1093, 8, 14, 1, 14, 3, 14, 1096, 8, 14, 1, 14, 3, 14, 1099, 8,
	14, 1, 14, 3, 14, 1102, 8, 14, 1, 14, 3, 14, 1105, 8, 14, 1, 14, 3, 14, 1108, 8, 14, 1, 14, 3,
	14, 1111, 8, 14, 1, 14, 3, 14, 1114, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1,
	14, 1, 14, 3, 14, 1125, 8, 14, 1, 14, 3, 14, 1128, 8, 14, 1, 14, 3, 14, 1131, 8, 14, 1, 14, 3,
	14, 1134, 8, 14, 1, 14, 3, 14, 1137, 8, 14, 3, 14, 1139, 8, 14, 1, 15, 1, 15, 1, 15, 1, 16, 1,
	16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 1151, 8, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3,
	17, 1158, 8, 17, 1, 18, 1, 18, 1, 19, 1, 19, 3, 19, 1164, 8, 19, 1, 20, 1, 20, 3, 20, 1168, 8,
	20, 1, 21, 1, 21, 1, 21, 3, 21, 1173, 8, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 3,
	22, 1182, 8, 22, 3, 22, 1184, 8, 22, 1, 23, 1, 23, 3, 23, 1188, 8, 23, 1, 23, 1, 23, 3, 23,
	1192, 8, 23, 1, 23, 3, 23, 1195, 8, 23, 1, 23, 3, 23, 1198, 8, 23, 1, 24, 1, 24, 1, 25, 1, 25,
	1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 29, 1,
	29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 5, 30, 1227, 8, 30, 10, 30,
	12, 30, 1230, 9, 30, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1,
	32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32,
	1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 1264, 8, 32, 3, 32, 1266, 8, 32,
	1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 3, 33, 1275, 8, 33, 1, 34, 1, 34, 1, 34, 3, 34,
	1280, 8, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 3, 34, 1289, 8, 34, 1, 34, 1, 34,
	1, 34, 1, 34, 3, 34, 1295, 8, 34, 1, 34, 1, 34, 1, 34, 1, 34, 3, 34, 1301, 8, 34, 1, 34, 3, 34,
	1304, 8, 34, 1, 34, 3, 34, 1307, 8, 34, 1, 34, 3, 34, 1310, 8, 34, 1, 34, 3, 34, 1313, 8, 34, 1,
	35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 1321, 8, 35, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1,
	36, 3, 36, 1329, 8, 36, 1, 36, 3, 36, 1332, 8, 36, 1, 37, 3, 37, 1335, 8, 37, 1, 37, 1, 37, 1,
	37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38, 1346, 8, 38, 1, 38, 5, 38, 1349, 8, 38, 10,
	38, 12, 38, 1352, 9, 38, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 1362, 8,
	40, 1, 41, 1, 41, 3, 41, 1366, 8, 41, 1, 41, 3, 41, 1369, 8, 41, 1, 41, 3, 41, 1372, 8, 41, 1,
	41, 3, 41, 1375, 8, 41, 1, 41, 3, 41, 1378, 8, 41, 1, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 1,
	42, 5, 42, 1387, 8, 42, 10, 42, 12, 42, 1390, 9, 42, 1, 43, 1, 43, 3, 43, 1394, 8, 43, 1, 43, 1,
	43, 1, 43, 1, 43, 1, 43, 1, 44, 1, 44, 1, 44, 1, 44, 5, 44, 1405, 8, 44, 10, 44, 12, 44, 1408,
	9, 44, 1, 44, 1, 44, 1, 45, 1, 45, 3, 45, 1414, 8, 45, 1, 45, 3, 45, 1417, 8, 45, 1, 45, 1, 45,
	1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3, 46, 1428, 8, 46, 1, 47, 1, 47, 1, 47, 1, 48,
	1, 48, 1, 48, 1, 49, 3, 49, 1437, 8, 49, 1, 49, 1, 49, 1, 49, 3, 49, 1442, 8, 49, 1, 49, 1, 49,
	1, 49, 3, 49, 1447, 8, 49, 5, 49, 1449, 8, 49, 10, 49, 12, 49, 1452, 9, 49, 1, 50, 1, 50, 1, 50,
	1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 5, 52, 1465, 8, 52, 10, 52, 12, 52,
	1468, 9, 52, 1, 53, 1, 53, 5, 53, 1472, 8, 53, 10, 53, 12, 53, 1475, 9, 53, 1, 54, 1, 54, 1, 54,
	3, 54, 1480, 8, 54, 1, 54, 1, 54, 3, 54, 1484, 8, 54, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55,
	1, 55, 1, 55, 3, 55, 1494, 8, 55, 1, 56, 1, 56, 1, 56, 1, 56, 5, 56, 1500, 8, 56, 10, 56, 12,
	56, 1503, 9, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 5, 56, 1511, 8, 56, 10, 56, 12, 56,
	1514, 9, 56, 1, 56, 1, 56, 3, 56, 1518, 8, 56, 1, 57, 1, 57, 1, 57, 1, 57, 1, 58, 1, 58, 1, 58,
	1, 58, 1, 58, 5, 58, 1529, 8, 58, 10, 58, 12, 58, 1532, 9, 58, 3, 58, 1534, 8, 58, 1, 58, 1, 58,
	1, 58, 1, 58, 1, 58, 1, 58, 5, 58, 1542, 8, 58, 10, 58, 12, 58, 1545, 9, 58, 3, 58, 1547, 8, 58,
	1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 5, 58, 1556, 8, 58, 10, 58, 12, 58, 1559, 9,
	58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 5, 58, 1566, 8, 58, 10, 58, 12, 58, 1569, 9, 58, 3, 58,
	1571, 8, 58, 1, 59, 1, 59, 1, 59, 1, 59, 5, 59, 1577, 8, 59, 10, 59, 12, 59, 1580, 9, 59, 3, 59,
	1582, 8, 59, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 3, 61, 1592, 8, 61, 1, 61,
	5, 61, 1595, 8, 61, 10, 61, 12, 61, 1598, 9, 61, 1, 61, 1, 61, 1, 62, 1, 62, 1, 62, 1, 62, 3,
	62, 1606, 8, 62, 1, 62, 5, 62, 1609, 8, 62, 10, 62, 12, 62, 1612, 9, 62, 1, 62, 1, 62, 3, 62,
	1616, 8, 62, 1, 63, 1, 63, 1, 63, 1, 63, 3, 63, 1622, 8, 63, 3, 63, 1624, 8, 63, 1, 64, 1, 64,
	1, 64, 1, 64, 3, 64, 1630, 8, 64, 1, 65, 1, 65, 1, 65, 5, 65, 1635, 8, 65, 10, 65, 12, 65, 1638,
	9, 65, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 5, 66, 1647, 8, 66, 10, 66, 12, 66,
	1650, 9, 66, 3, 66, 1652, 8, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 5, 66, 1660, 8, 66,
	10, 66, 12, 66, 1663, 9, 66, 1, 67, 3, 67, 1666, 8, 67, 1, 67, 3, 67, 1669, 8, 67, 1, 68, 1, 68,
	1, 68, 1, 68, 1, 68, 5, 68, 1676, 8, 68, 10, 68, 12, 68, 1679, 9, 68, 1, 69, 1, 69, 3, 69, 1683,
	8, 69, 1, 69, 1, 69, 3, 69, 1687, 8, 69, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70,
	1, 70, 1, 70, 3, 70, 1699, 8, 70, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 5, 71, 1706, 8, 71, 10, 71,
	12, 71, 1709, 9, 71, 1, 72, 3, 72, 1712, 8, 72, 1, 72, 1, 72, 1, 72, 3, 72, 1717, 8, 72, 1, 72,
	1, 72, 3, 72, 1721, 8, 72, 1, 72, 1, 72, 3, 72, 1725, 8, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72,
	1, 72, 1, 72, 1, 72, 3, 72, 1735, 8, 72, 1, 73, 1, 73, 1, 73, 1, 73, 3, 73, 1741, 8, 73, 1, 74,
	1, 74, 1, 74, 1, 74, 1, 75, 1, 75, 1, 75, 5, 75, 1750, 8, 75, 10, 75, 12, 75, 1753, 9, 75, 1,
	76, 1, 76, 1, 76, 1, 76, 3, 76, 1759, 8, 76, 1, 76, 1, 76, 1, 77, 1, 77, 3, 77, 1765, 8, 77, 1,
	77, 3, 77, 1768, 8, 77, 1, 77, 3, 77, 1771, 8, 77, 1, 77, 3, 77, 1774, 8, 77, 1, 77, 1, 77, 3,
	77, 1778, 8, 77, 1, 77, 3, 77, 1781, 8, 77, 1, 77, 3, 77, 1784, 8, 77, 1, 77, 5, 77, 1787, 8,
	77, 10, 77, 12, 77, 1790, 9, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 5, 77, 1797, 8, 77, 10, 77,
	12, 77, 1800, 9, 77, 1, 77, 1, 77, 1, 77, 3, 77, 1805, 8, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77,
	1, 77, 1, 77, 3, 77, 1814, 8, 77, 1, 78, 1, 78, 1, 78, 1, 79, 1, 79, 1, 79, 1, 79, 1, 79, 1, 80,
	1, 80, 1, 80, 5, 80, 1827, 8, 80, 10, 80, 12, 80, 1830, 9, 80, 1, 81, 1, 81, 1, 81, 1, 81, 1,
	82, 1, 82, 3, 82, 1838, 8, 82, 1, 83, 1, 83, 3, 83, 1842, 8, 83, 1, 84, 3, 84, 1845, 8, 84, 1,
	84, 1, 84, 3, 84, 1849, 8, 84, 3, 84, 1851, 8, 84, 1, 85, 1, 85, 1, 85, 5, 85, 1856, 8, 85, 10,
	85, 12, 85, 1859, 9, 85, 1, 86, 1, 86, 1, 86, 5, 86, 1864, 8, 86, 10, 86, 12, 86, 1867, 9, 86,
	1, 87, 1, 87, 1, 87, 3, 87, 1872, 8, 87, 1, 88, 1, 88, 1, 88, 5, 88, 1877, 8, 88, 10, 88, 12,
	88, 1880, 9, 88, 1, 89, 1, 89, 1, 89, 3, 89, 1885, 8, 89, 1, 89, 3, 89, 1888, 8, 89, 1, 89, 3,
	89, 1891, 8, 89, 1, 89, 3, 89, 1894, 8, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 3, 89, 1901, 8,
	89, 3, 89, 1903, 8, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1,
	89, 3, 89, 1916, 8, 89, 3, 89, 1918, 8, 89, 3, 89, 1920, 8, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1,
	89, 1, 89, 1, 89, 3, 89, 1929, 8, 89, 3, 89, 1931, 8, 89, 1, 89, 1, 89, 3, 89, 1935, 8, 89, 1,
	90, 1, 90, 1, 90, 5, 90, 1940, 8, 90, 10, 90, 12, 90, 1943, 9, 90, 1, 91, 1, 91, 1, 91, 1, 91,
	1, 91, 3, 91, 1950, 8, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 3, 91, 1957, 8, 91, 1, 91, 1, 91,
	3, 91, 1961, 8, 91, 1, 92, 1, 92, 1, 92, 5, 92, 1966, 8, 92, 10, 92, 12, 92, 1969, 9, 92, 1, 93,
	1, 93, 1, 93, 1, 93, 3, 93, 1975, 8, 93, 1, 93, 1, 93, 1, 93, 1, 93, 3, 93, 1981, 8, 93, 1, 94,
	1, 94, 1, 94, 1, 94, 3, 94, 1987, 8, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 3, 94, 1995,
	8, 94, 1, 95, 1, 95, 1, 95, 1, 95, 3, 95, 2001, 8, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95,
	1, 95, 1, 95, 1, 96, 1, 96, 1, 96, 1, 96, 1, 96, 1, 96, 1, 96, 3, 96, 2018, 8, 96, 1, 97, 1, 97,
	1, 97, 1, 97, 3, 97, 2024, 8, 97, 1, 97, 1, 97, 1, 97, 1, 97, 1, 97, 1, 97, 1, 97, 5, 97, 2033,
	8, 97, 10, 97, 12, 97, 2036, 9, 97, 1, 97, 1, 97, 1, 97, 3, 97, 2041, 8, 97, 3, 97, 2043, 8, 97,
	1, 98, 1, 98, 1, 98, 1, 98, 5, 98, 2049, 8, 98, 10, 98, 12, 98, 2052, 9, 98, 1, 98, 1, 98, 1,
	99, 1, 99, 1, 100, 1, 100, 1, 100, 5, 100, 2061, 8, 100, 10, 100, 12, 100, 2064, 9, 100, 1, 101,
	1, 101, 1, 101, 1, 101, 1, 101, 3, 101, 2071, 8, 101, 1, 101, 3, 101, 2074, 8, 101, 1, 102, 1,
	102, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 5, 103, 2083, 8, 103, 10, 103, 12, 103, 2086, 9,
	103, 1, 103, 1, 103, 1, 104, 1, 104, 1, 104, 1, 104, 5, 104, 2094, 8, 104, 10, 104, 12, 104,
	2097, 9, 104, 1, 105, 1, 105, 3, 105, 2101, 8, 105, 1, 105, 3, 105, 2104, 8, 105, 1, 106, 1,
	106, 1, 106, 5, 106, 2109, 8, 106, 10, 106, 12, 106, 2112, 9, 106, 1, 107, 1, 107, 3, 107, 2116,
	8, 107, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 1, 108, 4, 108, 2126, 8, 108,
	11, 108, 12, 108, 2127, 1, 108, 1, 108, 1, 108, 1, 108, 3, 108, 2134, 8, 108, 1, 109, 1, 109, 1,
	109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1,
	109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 3, 109, 2156, 8, 109, 3, 109, 2158, 8, 109, 1, 109,
	1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 5, 109,
	2172, 8, 109, 10, 109, 12, 109, 2175, 9, 109, 1, 110, 1, 110, 1, 110, 1, 110, 5, 110, 2181, 8,
	110, 10, 110, 12, 110, 2184, 9, 110, 3, 110, 2186, 8, 110, 1, 110, 1, 110, 1, 111, 1, 111, 3,
	111, 2192, 8, 111, 1, 112, 3, 112, 2195, 8, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112,
	3, 112, 2203, 8, 112, 1, 112, 1, 112, 1, 112, 3, 112, 2208, 8, 112, 1, 112, 1, 112, 1, 112, 3,
	112, 2213, 8, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 3, 112, 2221, 8, 112, 1, 112,
	1, 112, 1, 112, 1, 112, 1, 112, 5, 112, 2228, 8, 112, 10, 112, 12, 112, 2231, 9, 112, 1, 112, 1,
	112, 1, 112, 1, 112, 3, 112, 2237, 8, 112, 1, 112, 3, 112, 2240, 8, 112, 1, 113, 1, 113, 1, 113,
	1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 3, 113, 2253, 8, 113, 1, 113, 1,
	113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 5, 113, 2265, 8, 113, 10,
	113, 12, 113, 2268, 9, 113, 1, 114, 1, 114, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 3, 115, 2300, 8,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 3,
	115, 2313, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 3, 115, 2326, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 3, 115, 2339, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 3, 115, 2354, 8, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 4, 115, 2366, 8, 115, 11,
	115, 12, 115, 2367, 1, 115, 1, 115, 3, 115, 2372, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 4, 115, 2379, 8, 115, 11, 115, 12, 115, 2380, 1, 115, 1, 115, 3, 115, 2385, 8, 115, 1, 115,
	1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115,
	1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 5, 115, 2408, 8, 115, 10, 115,
	12, 115, 2411, 9, 115, 1, 115, 1, 115, 3, 115, 2415, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 3, 115, 2443, 8,
	115, 1, 115, 1, 115, 3, 115, 2447, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 3, 115, 2458, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 3,
	115, 2466, 8, 115, 1, 115, 1, 115, 1, 115, 3, 115, 2471, 8, 115, 1, 115, 1, 115, 1, 115, 1, 115,
	1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 3, 115, 2483, 8, 115, 1, 115, 1, 115, 1, 115, 1,
	115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 1, 115, 3, 115, 2495, 8, 115, 5, 115, 2497, 8, 115,
	10, 115, 12, 115, 2500, 9, 115, 1, 116, 1, 116, 1, 116, 3, 116, 2505, 8, 116, 3, 116, 2507, 8,
	116, 1, 117, 1, 117, 1, 117, 3, 117, 2512, 8, 117, 1, 117, 1, 117, 1, 117, 5, 117, 2517, 8, 117,
	10, 117, 12, 117, 2520, 9, 117, 1, 117, 1, 117, 1, 117, 1, 117, 1, 117, 5, 117, 2527, 8, 117,
	10, 117, 12, 117, 2530, 9, 117, 3, 117, 2532, 8, 117, 3, 117, 2534, 8, 117, 1, 117, 1, 117, 1,
	117, 3, 117, 2539, 8, 117, 1, 118, 1, 118, 1, 118, 3, 118, 2544, 8, 118, 1, 118, 1, 118, 1, 119,
	1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119,
	1, 119, 1, 119, 3, 119, 2563, 8, 119, 1, 120, 1, 120, 3, 120, 2567, 8, 120, 1, 120, 3, 120,
	2570, 8, 120, 1, 120, 3, 120, 2573, 8, 120, 1, 120, 1, 120, 1, 121, 1, 121, 1, 121, 1, 121, 1,
	121, 1, 121, 1, 121, 1, 121, 1, 121, 3, 121, 2586, 8, 121, 1, 122, 1, 122, 1, 123, 1, 123, 1,
	123, 1, 123, 1, 123, 1, 123, 1, 123, 3, 123, 2597, 8, 123, 1, 124, 1, 124, 1, 124, 5, 124, 2602,
	8, 124, 10, 124, 12, 124, 2605, 9, 124, 1, 125, 3, 125, 2608, 8, 125, 1, 125, 1, 125, 1, 125, 3,
	125, 2613, 8, 125, 1, 125, 3, 125, 2616, 8, 125, 1, 125, 1, 125, 3, 125, 2620, 8, 125, 1, 126,
	1, 126, 1, 126, 1, 126, 1, 126, 1, 126, 3, 126, 2628, 8, 126, 1, 126, 1, 126, 1, 126, 3, 126,
	2633, 8, 126, 1, 126, 1, 126, 5, 126, 2637, 8, 126, 10, 126, 12, 126, 2640, 9, 126, 1, 126, 1,
	126, 1, 126, 1, 126, 1, 126, 1, 126, 3, 126, 2648, 8, 126, 1, 126, 1, 126, 1, 126, 1, 126, 1,
	126, 5, 126, 2655, 8, 126, 10, 126, 12, 126, 2658, 9, 126, 1, 126, 1, 126, 1, 126, 1, 126, 1,
	126, 5, 126, 2665, 8, 126, 10, 126, 12, 126, 2668, 9, 126, 1, 126, 1, 126, 1, 126, 3, 126, 2673,
	8, 126, 1, 127, 1, 127, 1, 128, 1, 128, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 130, 1, 130,
	1, 130, 1, 130, 1, 131, 1, 131, 1, 132, 1, 132, 3, 132, 2692, 8, 132, 1, 132, 3, 132, 2695, 8,
	132, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1,
	133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1,
	133, 5, 133, 2721, 8, 133, 10, 133, 12, 133, 2724, 9, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1,
	133, 1, 133, 1, 133, 1, 133, 5, 133, 2734, 8, 133, 10, 133, 12, 133, 2737, 9, 133, 1, 133, 3,
	133, 2740, 8, 133, 3, 133, 2742, 8, 133, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134,
	1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134,
	1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134,
	1, 134, 1, 134, 3, 134, 2777, 8, 134, 1, 135, 1, 135, 1, 135, 5, 135, 2782, 8, 135, 10, 135, 12,
	135, 2785, 9, 135, 1, 136, 1, 136, 1, 136, 1, 136, 3, 136, 2791, 8, 136, 1, 137, 1, 137, 1, 137,
	1, 138, 1, 138, 1, 138, 3, 138, 2799, 8, 138, 1, 138, 1, 138, 1, 138, 3, 138, 2804, 8, 138, 1,
	139, 1, 139, 1, 139, 1, 139, 3, 139, 2810, 8, 139, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1,
	140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 2822, 8, 140, 1, 141, 1, 141, 1, 141, 1, 142, 1,
	142, 4, 142, 2829, 8, 142, 11, 142, 12, 142, 2830, 1, 142, 3, 142, 2834, 8, 142, 1, 143, 1, 143,
	1, 144, 1, 144, 1, 144, 3, 144, 2841, 8, 144, 1, 145, 1, 145, 1, 146, 3, 146, 2846, 8, 146, 1,
	146, 1, 146, 3, 146, 2850, 8, 146, 1, 146, 3, 146, 2853, 8, 146, 1, 147, 1, 147, 1, 147, 2, 357,
	364, 4, 76, 218, 226, 230, 148, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,
	34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
	82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122,
	124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160,
	162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198,
	200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236,
	238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274,
	276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 0, 47, 1, 0, 342, 343, 2, 0, 330, 330, 375,
	375, 3, 0, 17, 17, 149, 149, 462, 462, 2, 0, 32, 32, 521, 521, 3, 0, 196, 196, 263, 263, 400,
	400, 2, 0, 308, 308, 488, 488, 1, 0, 319, 320, 2, 0, 261, 261, 353, 353, 2, 0, 130, 130, 217,
	217, 2, 0, 32, 32, 83, 83, 4, 0, 199, 199, 333, 333, 450, 450, 476, 476, 9, 0, 19, 19, 22, 22,
	268, 268, 282, 282, 310, 310, 318, 318, 331, 331, 379, 379, 403, 403, 3, 0, 25, 25, 131, 131,
	283, 283, 4, 0, 163, 163, 229, 229, 287, 287, 461, 461, 2, 0, 19, 19, 137, 137, 2, 0, 29, 29,
	133, 133, 2, 0, 180, 180, 250, 250, 3, 0, 45, 45, 232, 232, 298, 298, 4, 0, 281, 281, 302, 302,
	516, 516, 521, 521, 8, 0, 46, 46, 195, 195, 209, 209, 280, 280, 286, 286, 349, 349, 367, 368,
	425, 425, 2, 0, 301, 301, 506, 506, 1, 0, 237, 238, 2, 0, 23, 23, 505, 505, 3, 0, 257, 257, 362,
	362, 381, 381, 1, 0, 272, 278, 2, 0, 498, 499, 503, 503, 2, 0, 44, 44, 47, 48, 2, 0, 142, 142,
	500, 502, 4, 0, 498, 499, 504, 504, 507, 507, 509, 509, 7, 0, 122, 122, 212, 212, 288, 288, 290,
	290, 395, 395, 481, 481, 490, 490, 2, 0, 116, 116, 445, 445, 2, 0, 115, 115, 444, 444, 3, 0, 13,
	13, 110, 110, 123, 123, 3, 0, 114, 114, 124, 124, 424, 424, 2, 0, 27, 27, 398, 398, 2, 0, 196,
	196, 400, 400, 2, 0, 109, 109, 443, 443, 2, 0, 405, 405, 464, 464, 1, 0, 226, 227, 2, 0, 353,
	353, 388, 388, 2, 0, 183, 183, 339, 339, 4, 0, 109, 109, 119, 119, 121, 121, 443, 443, 1, 0,
	491, 497, 2, 0, 174, 174, 453, 453, 2, 0, 500, 500, 521, 521, 1, 0, 522, 523, 95, 0, 8, 9, 13,
	13, 15, 18, 22, 22, 26, 27, 30, 31, 33, 33, 35, 38, 41, 41, 44, 56, 58, 60, 64, 69, 71, 72, 74,
	76, 78, 88, 90, 94, 96, 97, 101, 106, 109, 127, 130, 130, 132, 132, 135, 135, 138, 139, 143,
	144, 148, 148, 150, 150, 152, 158, 160, 162, 164, 164, 167, 167, 171, 171, 173, 173, 175, 180,
	187, 188, 191, 191, 193, 193, 195, 196, 199, 199, 201, 203, 205, 207, 209, 214, 216, 217, 219,
	219, 221, 221, 232, 234, 236, 241, 243, 244, 248, 248, 250, 250, 252, 253, 255, 256, 259, 260,
	263, 268, 270, 271, 273, 280, 282, 286, 288, 293, 295, 300, 303, 303, 305, 306, 308, 310, 317,
	318, 320, 331, 333, 338, 342, 342, 344, 352, 357, 360, 366, 368, 370, 377, 379, 379, 381, 381,
	384, 386, 389, 393, 395, 395, 398, 400, 403, 403, 406, 406, 408, 411, 413, 425, 431, 431, 435,
	437, 439, 440, 442, 445, 448, 448, 450, 451, 454, 455, 457, 457, 459, 459, 463, 463, 465, 465,
	468, 468, 470, 470, 472, 481, 486, 486, 490, 490, 3256, 0, 299, 1, 0, 0, 0, 2, 311, 1, 0, 0, 0,
	4, 317, 1, 0, 0, 0, 6, 386, 1, 0, 0, 0, 8, 835, 1, 0, 0, 0, 10, 947, 1, 0, 0, 0, 12, 967, 1, 0,
	0, 0, 14, 969, 1, 0, 0, 0, 16, 972, 1, 0, 0, 0, 18, 995, 1, 0, 0, 0, 20, 1011, 1, 0, 0, 0, 22,
	1014, 1, 0, 0, 0, 24, 1028, 1, 0, 0, 0, 26, 1041, 1, 0, 0, 0, 28, 1138, 1, 0, 0, 0, 30, 1140, 1,
	0, 0, 0, 32, 1150, 1, 0, 0, 0, 34, 1152, 1, 0, 0, 0, 36, 1159, 1, 0, 0, 0, 38, 1163, 1, 0, 0, 0,
	40, 1167, 1, 0, 0, 0, 42, 1172, 1, 0, 0, 0, 44, 1174, 1, 0, 0, 0, 46, 1191, 1, 0, 0, 0, 48,
	1199, 1, 0, 0, 0, 50, 1201, 1, 0, 0, 0, 52, 1203, 1, 0, 0, 0, 54, 1207, 1, 0, 0, 0, 56, 1211, 1,
	0, 0, 0, 58, 1215, 1, 0, 0, 0, 60, 1221, 1, 0, 0, 0, 62, 1233, 1, 0, 0, 0, 64, 1265, 1, 0, 0, 0,
	66, 1267, 1, 0, 0, 0, 68, 1276, 1, 0, 0, 0, 70, 1320, 1, 0, 0, 0, 72, 1322, 1, 0, 0, 0, 74,
	1334, 1, 0, 0, 0, 76, 1339, 1, 0, 0, 0, 78, 1353, 1, 0, 0, 0, 80, 1361, 1, 0, 0, 0, 82, 1363, 1,
	0, 0, 0, 84, 1382, 1, 0, 0, 0, 86, 1391, 1, 0, 0, 0, 88, 1400, 1, 0, 0, 0, 90, 1411, 1, 0, 0, 0,
	92, 1427, 1, 0, 0, 0, 94, 1429, 1, 0, 0, 0, 96, 1432, 1, 0, 0, 0, 98, 1436, 1, 0, 0, 0, 100,
	1453, 1, 0, 0, 0, 102, 1456, 1, 0, 0, 0, 104, 1461, 1, 0, 0, 0, 106, 1469, 1, 0, 0, 0, 108,
	1476, 1, 0, 0, 0, 110, 1493, 1, 0, 0, 0, 112, 1517, 1, 0, 0, 0, 114, 1519, 1, 0, 0, 0, 116,
	1570, 1, 0, 0, 0, 118, 1572, 1, 0, 0, 0, 120, 1585, 1, 0, 0, 0, 122, 1588, 1, 0, 0, 0, 124,
	1601, 1, 0, 0, 0, 126, 1617, 1, 0, 0, 0, 128, 1625, 1, 0, 0, 0, 130, 1631, 1, 0, 0, 0, 132,
	1639, 1, 0, 0, 0, 134, 1665, 1, 0, 0, 0, 136, 1670, 1, 0, 0, 0, 138, 1680, 1, 0, 0, 0, 140,
	1698, 1, 0, 0, 0, 142, 1700, 1, 0, 0, 0, 144, 1734, 1, 0, 0, 0, 146, 1740, 1, 0, 0, 0, 148,
	1742, 1, 0, 0, 0, 150, 1746, 1, 0, 0, 0, 152, 1754, 1, 0, 0, 0, 154, 1813, 1, 0, 0, 0, 156,
	1815, 1, 0, 0, 0, 158, 1818, 1, 0, 0, 0, 160, 1823, 1, 0, 0, 0, 162, 1831, 1, 0, 0, 0, 164,
	1837, 1, 0, 0, 0, 166, 1841, 1, 0, 0, 0, 168, 1850, 1, 0, 0, 0, 170, 1852, 1, 0, 0, 0, 172,
	1860, 1, 0, 0, 0, 174, 1868, 1, 0, 0, 0, 176, 1873, 1, 0, 0, 0, 178, 1881, 1, 0, 0, 0, 180,
	1936, 1, 0, 0, 0, 182, 1944, 1, 0, 0, 0, 184, 1962, 1, 0, 0, 0, 186, 1974, 1, 0, 0, 0, 188,
	1982, 1, 0, 0, 0, 190, 1996, 1, 0, 0, 0, 192, 2010, 1, 0, 0, 0, 194, 2019, 1, 0, 0, 0, 196,
	2044, 1, 0, 0, 0, 198, 2055, 1, 0, 0, 0, 200, 2057, 1, 0, 0, 0, 202, 2065, 1, 0, 0, 0, 204,
	2075, 1, 0, 0, 0, 206, 2077, 1, 0, 0, 0, 208, 2089, 1, 0, 0, 0, 210, 2098, 1, 0, 0, 0, 212,
	2105, 1, 0, 0, 0, 214, 2115, 1, 0, 0, 0, 216, 2133, 1, 0, 0, 0, 218, 2157, 1, 0, 0, 0, 220,
	2176, 1, 0, 0, 0, 222, 2191, 1, 0, 0, 0, 224, 2239, 1, 0, 0, 0, 226, 2252, 1, 0, 0, 0, 228,
	2269, 1, 0, 0, 0, 230, 2470, 1, 0, 0, 0, 232, 2506, 1, 0, 0, 0, 234, 2508, 1, 0, 0, 0, 236,
	2543, 1, 0, 0, 0, 238, 2562, 1, 0, 0, 0, 240, 2564, 1, 0, 0, 0, 242, 2585, 1, 0, 0, 0, 244,
	2587, 1, 0, 0, 0, 246, 2596, 1, 0, 0, 0, 248, 2598, 1, 0, 0, 0, 250, 2619, 1, 0, 0, 0, 252,
	2672, 1, 0, 0, 0, 254, 2674, 1, 0, 0, 0, 256, 2676, 1, 0, 0, 0, 258, 2678, 1, 0, 0, 0, 260,
	2683, 1, 0, 0, 0, 262, 2687, 1, 0, 0, 0, 264, 2689, 1, 0, 0, 0, 266, 2741, 1, 0, 0, 0, 268,
	2776, 1, 0, 0, 0, 270, 2778, 1, 0, 0, 0, 272, 2786, 1, 0, 0, 0, 274, 2792, 1, 0, 0, 0, 276,
	2795, 1, 0, 0, 0, 278, 2809, 1, 0, 0, 0, 280, 2821, 1, 0, 0, 0, 282, 2823, 1, 0, 0, 0, 284,
	2833, 1, 0, 0, 0, 286, 2835, 1, 0, 0, 0, 288, 2840, 1, 0, 0, 0, 290, 2842, 1, 0, 0, 0, 292,
	2852, 1, 0, 0, 0, 294, 2854, 1, 0, 0, 0, 296, 298, 3, 4, 2, 0, 297, 296, 1, 0, 0, 0, 298, 301,
	1, 0, 0, 0, 299, 297, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 300, 302, 1, 0, 0, 0, 301, 299, 1, 0, 0,
	0, 302, 303, 5, 0, 0, 1, 303, 1, 1, 0, 0, 0, 304, 308, 3, 6, 3, 0, 305, 307, 5, 1, 0, 0, 306,
	305, 1, 0, 0, 0, 307, 310, 1, 0, 0, 0, 308, 306, 1, 0, 0, 0, 308, 309, 1, 0, 0, 0, 309, 312, 1,
	0, 0, 0, 310, 308, 1, 0, 0, 0, 311, 304, 1, 0, 0, 0, 312, 313, 1, 0, 0, 0, 313, 311, 1, 0, 0, 0,
	313, 314, 1, 0, 0, 0, 314, 315, 1, 0, 0, 0, 315, 316, 5, 0, 0, 1, 316, 3, 1, 0, 0, 0, 317, 321,
	3, 6, 3, 0, 318, 320, 5, 1, 0, 0, 319, 318, 1, 0, 0, 0, 320, 323, 1, 0, 0, 0, 321, 319, 1, 0, 0,
	0, 321, 322, 1, 0, 0, 0, 322, 324, 1, 0, 0, 0, 323, 321, 1, 0, 0, 0, 324, 325, 5, 0, 0, 1, 325,
	5, 1, 0, 0, 0, 326, 387, 3, 8, 4, 0, 327, 328, 5, 60, 0, 0, 328, 329, 3, 170, 85, 0, 329, 338,
	5, 2, 0, 0, 330, 335, 3, 214, 107, 0, 331, 332, 5, 4, 0, 0, 332, 334, 3, 214, 107, 0, 333, 331,
	1, 0, 0, 0, 334, 337, 1, 0, 0, 0, 335, 333, 1, 0, 0, 0, 335, 336, 1, 0, 0, 0, 336, 339, 1, 0, 0,
	0, 337, 335, 1, 0, 0, 0, 338, 330, 1, 0, 0, 0, 338, 339, 1, 0, 0, 0, 339, 340, 1, 0, 0, 0, 340,
	341, 5, 3, 0, 0, 341, 387, 1, 0, 0, 0, 342, 350, 5, 20, 0, 0, 343, 346, 5, 95, 0, 0, 344, 345,
	5, 311, 0, 0, 345, 347, 5, 367, 0, 0, 346, 344, 1, 0, 0, 0, 346, 347, 1, 0, 0, 0, 347, 350, 1,
	0, 0, 0, 348, 350, 5, 367, 0, 0, 349, 342, 1, 0, 0, 0, 349, 343, 1, 0, 0, 0, 349, 348, 1, 0, 0,
	0, 350, 351, 1, 0, 0, 0, 351, 352, 7, 0, 0, 0, 352, 353, 3, 170, 85, 0, 353, 357, 5, 2, 0, 0,
	354, 356, 9, 0, 0, 0, 355, 354, 1, 0, 0, 0, 356, 359, 1, 0, 0, 0, 357, 358, 1, 0, 0, 0, 357,
	355, 1, 0, 0, 0, 358, 360, 1, 0, 0, 0, 359, 357, 1, 0, 0, 0, 360, 364, 5, 3, 0, 0, 361, 363, 9,
	0, 0, 0, 362, 361, 1, 0, 0, 0, 363, 366, 1, 0, 0, 0, 364, 365, 1, 0, 0, 0, 364, 362, 1, 0, 0, 0,
	365, 387, 1, 0, 0, 0, 366, 364, 1, 0, 0, 0, 367, 368, 5, 146, 0, 0, 368, 371, 7, 0, 0, 0, 369,
	370, 5, 215, 0, 0, 370, 372, 5, 166, 0, 0, 371, 369, 1, 0, 0, 0, 371, 372, 1, 0, 0, 0, 372, 373,
	1, 0, 0, 0, 373, 387, 3, 170, 85, 0, 374, 375, 5, 404, 0, 0, 375, 376, 5, 343, 0, 0, 376, 380,
	5, 417, 0, 0, 377, 378, 5, 257, 0, 0, 378, 381, 3, 226, 113, 0, 379, 381, 3, 94, 47, 0, 380,
	377, 1, 0, 0, 0, 380, 379, 1, 0, 0, 0, 380, 381, 1, 0, 0, 0, 381, 387, 1, 0, 0, 0, 382, 383, 5,
	404, 0, 0, 383, 384, 5, 95, 0, 0, 384, 385, 5, 343, 0, 0, 385, 387, 3, 170, 85, 0, 386, 326, 1,
	0, 0, 0, 386, 327, 1, 0, 0, 0, 386, 349, 1, 0, 0, 0, 386, 367, 1, 0, 0, 0, 386, 374, 1, 0, 0, 0,
	386, 382, 1, 0, 0, 0, 387, 7, 1, 0, 0, 0, 388, 390, 3, 46, 23, 0, 389, 388, 1, 0, 0, 0, 389,
	390, 1, 0, 0, 0, 390, 391, 1, 0, 0, 0, 391, 393, 3, 74, 37, 0, 392, 394, 3, 72, 36, 0, 393, 392,
	1, 0, 0, 0, 393, 394, 1, 0, 0, 0, 394, 836, 1, 0, 0, 0, 395, 396, 5, 95, 0, 0, 396, 397, 5, 387,
	0, 0, 397, 401, 5, 338, 0, 0, 398, 399, 5, 215, 0, 0, 399, 400, 5, 301, 0, 0, 400, 402, 5, 166,
	0, 0, 401, 398, 1, 0, 0, 0, 401, 402, 1, 0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 404, 3, 286, 143,
	0, 404, 405, 5, 307, 0, 0, 405, 406, 3, 170, 85, 0, 406, 407, 5, 28, 0, 0, 407, 408, 7, 1, 0, 0,
	408, 412, 5, 447, 0, 0, 409, 413, 3, 44, 22, 0, 410, 411, 5, 382, 0, 0, 411, 413, 3, 286, 143,
	0, 412, 409, 1, 0, 0, 0, 412, 410, 1, 0, 0, 0, 413, 414, 1, 0, 0, 0, 414, 415, 5, 469, 0, 0,
	415, 416, 5, 2, 0, 0, 416, 417, 3, 218, 109, 0, 417, 418, 5, 3, 0, 0, 418, 836, 1, 0, 0, 0, 419,
	421, 5, 95, 0, 0, 420, 422, 5, 171, 0, 0, 421, 420, 1, 0, 0, 0, 421, 422, 1, 0, 0, 0, 422, 423,
	1, 0, 0, 0, 423, 427, 5, 430, 0, 0, 424, 425, 5, 215, 0, 0, 425, 426, 5, 301, 0, 0, 426, 428, 5,
	166, 0, 0, 427, 424, 1, 0, 0, 0, 427, 428, 1, 0, 0, 0, 428, 429, 1, 0, 0, 0, 429, 444, 3, 170,
	85, 0, 430, 432, 3, 148, 74, 0, 431, 430, 1, 0, 0, 0, 431, 432, 1, 0, 0, 0, 432, 445, 1, 0, 0,
	0, 433, 434, 5, 2, 0, 0, 434, 437, 3, 176, 88, 0, 435, 436, 5, 4, 0, 0, 436, 438, 3, 180, 90, 0,
	437, 435, 1, 0, 0, 0, 437, 438, 1, 0, 0, 0, 438, 440, 1, 0, 0, 0, 439, 441, 5, 4, 0, 0, 440,
	439, 1, 0, 0, 0, 440, 441, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442, 443, 5, 3, 0, 0, 443, 445, 1,
	0, 0, 0, 444, 431, 1, 0, 0, 0, 444, 433, 1, 0, 0, 0, 445, 449, 1, 0, 0, 0, 446, 447, 5, 157, 0,
	0, 447, 448, 5, 491, 0, 0, 448, 450, 3, 286, 143, 0, 449, 446, 1, 0, 0, 0, 449, 450, 1, 0, 0, 0,
	450, 459, 1, 0, 0, 0, 451, 452, 7, 2, 0, 0, 452, 453, 5, 245, 0, 0, 453, 457, 3, 148, 74, 0,
	454, 455, 5, 71, 0, 0, 455, 456, 5, 57, 0, 0, 456, 458, 3, 148, 74, 0, 457, 454, 1, 0, 0, 0,
	457, 458, 1, 0, 0, 0, 458, 460, 1, 0, 0, 0, 459, 451, 1, 0, 0, 0, 459, 460, 1, 0, 0, 0, 460,
	463, 1, 0, 0, 0, 461, 462, 5, 79, 0, 0, 462, 464, 5, 516, 0, 0, 463, 461, 1, 0, 0, 0, 463, 464,
	1, 0, 0, 0, 464, 466, 1, 0, 0, 0, 465, 467, 3, 22, 11, 0, 466, 465, 1, 0, 0, 0, 466, 467, 1, 0,
	0, 0, 467, 482, 1, 0, 0, 0, 468, 469, 5, 140, 0, 0, 469, 473, 5, 57, 0, 0, 470, 471, 5, 203, 0,
	0, 471, 474, 3, 148, 74, 0, 472, 474, 5, 352, 0, 0, 473, 470, 1, 0, 0, 0, 473, 472, 1, 0, 0, 0,
	474, 480, 1, 0, 0, 0, 475, 478, 5, 53, 0, 0, 476, 479, 5, 521, 0, 0, 477, 479, 5, 32, 0, 0, 478,
	476, 1, 0, 0, 0, 478, 477, 1, 0, 0, 0, 479, 481, 1, 0, 0, 0, 480, 475, 1, 0, 0, 0, 480, 481, 1,
	0, 0, 0, 481, 483, 1, 0, 0, 0, 482, 468, 1, 0, 0, 0, 482, 483, 1, 0, 0, 0, 483, 489, 1, 0, 0, 0,
	484, 485, 5, 385, 0, 0, 485, 486, 5, 2, 0, 0, 486, 487, 3, 200, 100, 0, 487, 488, 5, 3, 0, 0,
	488, 490, 1, 0, 0, 0, 489, 484, 1, 0, 0, 0, 489, 490, 1, 0, 0, 0, 490, 492, 1, 0, 0, 0, 491,
	493, 3, 158, 79, 0, 492, 491, 1, 0, 0, 0, 492, 493, 1, 0, 0, 0, 493, 496, 1, 0, 0, 0, 494, 495,
	5, 52, 0, 0, 495, 497, 3, 158, 79, 0, 496, 494, 1, 0, 0, 0, 496, 497, 1, 0, 0, 0, 497, 500, 1,
	0, 0, 0, 498, 499, 5, 28, 0, 0, 499, 501, 3, 74, 37, 0, 500, 498, 1, 0, 0, 0, 500, 501, 1, 0, 0,
	0, 501, 836, 1, 0, 0, 0, 502, 503, 5, 95, 0, 0, 503, 507, 5, 478, 0, 0, 504, 505, 5, 215, 0, 0,
	505, 506, 5, 301, 0, 0, 506, 508, 5, 166, 0, 0, 507, 504, 1, 0, 0, 0, 507, 508, 1, 0, 0, 0, 508,
	509, 1, 0, 0, 0, 509, 514, 3, 170, 85, 0, 510, 511, 5, 2, 0, 0, 511, 512, 3, 172, 86, 0, 512,
	513, 5, 3, 0, 0, 513, 515, 1, 0, 0, 0, 514, 510, 1, 0, 0, 0, 514, 515, 1, 0, 0, 0, 515, 518, 1,
	0, 0, 0, 516, 517, 5, 79, 0, 0, 517, 519, 5, 516, 0, 0, 518, 516, 1, 0, 0, 0, 518, 519, 1, 0, 0,
	0, 519, 520, 1, 0, 0, 0, 520, 521, 5, 28, 0, 0, 521, 522, 3, 74, 37, 0, 522, 836, 1, 0, 0, 0,
	523, 524, 5, 20, 0, 0, 524, 525, 5, 478, 0, 0, 525, 530, 3, 170, 85, 0, 526, 527, 5, 2, 0, 0,
	527, 528, 3, 172, 86, 0, 528, 529, 5, 3, 0, 0, 529, 531, 1, 0, 0, 0, 530, 526, 1, 0, 0, 0, 530,
	531, 1, 0, 0, 0, 531, 532, 1, 0, 0, 0, 532, 533, 5, 28, 0, 0, 533, 534, 3, 74, 37, 0, 534, 836,
	1, 0, 0, 0, 535, 537, 5, 95, 0, 0, 536, 538, 5, 171, 0, 0, 537, 536, 1, 0, 0, 0, 537, 538, 1, 0,
	0, 0, 538, 539, 1, 0, 0, 0, 539, 543, 5, 430, 0, 0, 540, 541, 5, 215, 0, 0, 541, 542, 5, 301, 0,
	0, 542, 544, 5, 166, 0, 0, 543, 540, 1, 0, 0, 0, 543, 544, 1, 0, 0, 0, 544, 545, 1, 0, 0, 0,
	545, 546, 3, 170, 85, 0, 546, 547, 5, 257, 0, 0, 547, 553, 3, 170, 85, 0, 548, 549, 5, 485, 0,
	0, 549, 551, 5, 385, 0, 0, 550, 552, 3, 148, 74, 0, 551, 550, 1, 0, 0, 0, 551, 552, 1, 0, 0, 0,
	552, 554, 1, 0, 0, 0, 553, 548, 1, 0, 0, 0, 553, 554, 1, 0, 0, 0, 554, 836, 1, 0, 0, 0, 555,
	557, 3, 46, 23, 0, 556, 555, 1, 0, 0, 0, 556, 557, 1, 0, 0, 0, 557, 559, 1, 0, 0, 0, 558, 560,
	3, 84, 42, 0, 559, 558, 1, 0, 0, 0, 559, 560, 1, 0, 0, 0, 560, 561, 1, 0, 0, 0, 561, 565, 5,
	224, 0, 0, 562, 566, 5, 231, 0, 0, 563, 564, 5, 316, 0, 0, 564, 566, 5, 430, 0, 0, 565, 562, 1,
	0, 0, 0, 565, 563, 1, 0, 0, 0, 566, 572, 1, 0, 0, 0, 567, 573, 3, 170, 85, 0, 568, 569, 5, 144,
	0, 0, 569, 570, 5, 2, 0, 0, 570, 571, 5, 521, 0, 0, 571, 573, 5, 3, 0, 0, 572, 567, 1, 0, 0, 0,
	572, 568, 1, 0, 0, 0, 573, 575, 1, 0, 0, 0, 574, 576, 3, 20, 10, 0, 575, 574, 1, 0, 0, 0, 575,
	576, 1, 0, 0, 0, 576, 580, 1, 0, 0, 0, 577, 578, 5, 485, 0, 0, 578, 579, 5, 248, 0, 0, 579, 581,
	3, 286, 143, 0, 580, 577, 1, 0, 0, 0, 580, 581, 1, 0, 0, 0, 581, 583, 1, 0, 0, 0, 582, 584, 3,
	148, 74, 0, 583, 582, 1, 0, 0, 0, 583, 584, 1, 0, 0, 0, 584, 589, 1, 0, 0, 0, 585, 586, 5, 6, 0,
	0, 586, 587, 3, 150, 75, 0, 587, 588, 5, 7, 0, 0, 588, 590, 1, 0, 0, 0, 589, 585, 1, 0, 0, 0,
	589, 590, 1, 0, 0, 0, 590, 591, 1, 0, 0, 0, 591, 836, 3, 74, 37, 0, 592, 594, 3, 46, 23, 0, 593,
	592, 1, 0, 0, 0, 593, 594, 1, 0, 0, 0, 594, 596, 1, 0, 0, 0, 595, 597, 3, 84, 42, 0, 596, 595,
	1, 0, 0, 0, 596, 597, 1, 0, 0, 0, 597, 598, 1, 0, 0, 0, 598, 599, 5, 466, 0, 0, 599, 600, 3,
	170, 85, 0, 600, 601, 3, 168, 84, 0, 601, 602, 5, 401, 0, 0, 602, 604, 3, 130, 65, 0, 603, 605,
	3, 96, 48, 0, 604, 603, 1, 0, 0, 0, 604, 605, 1, 0, 0, 0, 605, 607, 1, 0, 0, 0, 606, 608, 3, 94,
	47, 0, 607, 606, 1, 0, 0, 0, 607, 608, 1, 0, 0, 0, 608, 836, 1, 0, 0, 0, 609, 611, 3, 46, 23, 0,
	610, 609, 1, 0, 0, 0, 610, 611, 1, 0, 0, 0, 611, 613, 1, 0, 0, 0, 612, 614, 3, 84, 42, 0, 613,
	612, 1, 0, 0, 0, 613, 614, 1, 0, 0, 0, 614, 615, 1, 0, 0, 0, 615, 616, 5, 131, 0, 0, 616, 617,
	5, 189, 0, 0, 617, 619, 3, 170, 85, 0, 618, 620, 3, 20, 10, 0, 619, 618, 1, 0, 0, 0, 619, 620,
	1, 0, 0, 0, 620, 621, 1, 0, 0, 0, 621, 624, 3, 168, 84, 0, 622, 623, 5, 469, 0, 0, 623, 625, 3,
	104, 52, 0, 624, 622, 1, 0, 0, 0, 624, 625, 1, 0, 0, 0, 625, 627, 1, 0, 0, 0, 626, 628, 3, 94,
	47, 0, 627, 626, 1, 0, 0, 0, 627, 628, 1, 0, 0, 0, 628, 836, 1, 0, 0, 0, 629, 630, 5, 262, 0, 0,
	630, 631, 5, 248, 0, 0, 631, 632, 3, 286, 143, 0, 632, 633, 5, 2, 0, 0, 633, 638, 3, 28, 14, 0,
	634, 635, 5, 4, 0, 0, 635, 637, 3, 28, 14, 0, 636, 634, 1, 0, 0, 0, 637, 640, 1, 0, 0, 0, 638,
	636, 1, 0, 0, 0, 638, 639, 1, 0, 0, 0, 639, 641, 1, 0, 0, 0, 640, 638, 1, 0, 0, 0, 641, 643, 5,
	3, 0, 0, 642, 644, 3, 64, 32, 0, 643, 642, 1, 0, 0, 0, 643, 644, 1, 0, 0, 0, 644, 650, 1, 0, 0,
	0, 645, 646, 5, 346, 0, 0, 646, 647, 5, 2, 0, 0, 647, 648, 3, 160, 80, 0, 648, 649, 5, 3, 0, 0,
	649, 651, 1, 0, 0, 0, 650, 645, 1, 0, 0, 0, 650, 651, 1, 0, 0, 0, 651, 653, 1, 0, 0, 0, 652,
	654, 3, 274, 137, 0, 653, 652, 1, 0, 0, 0, 653, 654, 1, 0, 0, 0, 654, 836, 1, 0, 0, 0, 655, 656,
	5, 262, 0, 0, 656, 662, 3, 68, 34, 0, 657, 658, 5, 346, 0, 0, 658, 659, 5, 2, 0, 0, 659, 660, 3,
	160, 80, 0, 660, 661, 5, 3, 0, 0, 661, 663, 1, 0, 0, 0, 662, 657, 1, 0, 0, 0, 662, 663, 1, 0, 0,
	0, 663, 665, 1, 0, 0, 0, 664, 666, 3, 274, 137, 0, 665, 664, 1, 0, 0, 0, 665, 666, 1, 0, 0, 0,
	666, 836, 1, 0, 0, 0, 667, 668, 5, 169, 0, 0, 668, 669, 5, 430, 0, 0, 669, 672, 3, 170, 85, 0,
	670, 671, 5, 319, 0, 0, 671, 673, 3, 148, 74, 0, 672, 670, 1, 0, 0, 0, 672, 673, 1, 0, 0, 0,
	673, 675, 1, 0, 0, 0, 674, 676, 3, 94, 47, 0, 675, 674, 1, 0, 0, 0, 675, 676, 1, 0, 0, 0, 676,
	677, 1, 0, 0, 0, 677, 678, 5, 447, 0, 0, 678, 680, 5, 516, 0, 0, 679, 681, 3, 158, 79, 0, 680,
	679, 1, 0, 0, 0, 680, 681, 1, 0, 0, 0, 681, 683, 1, 0, 0, 0, 682, 684, 3, 64, 32, 0, 683, 682,
	1, 0, 0, 0, 683, 684, 1, 0, 0, 0, 684, 836, 1, 0, 0, 0, 685, 686, 5, 95, 0, 0, 686, 687, 5, 279,
	0, 0, 687, 691, 5, 478, 0, 0, 688, 689, 5, 215, 0, 0, 689, 690, 5, 301, 0, 0, 690, 692, 5, 166,
	0, 0, 691, 688, 1, 0, 0, 0, 691, 692, 1, 0, 0, 0, 692, 693, 1, 0, 0, 0, 693, 698, 3, 170, 85, 0,
	694, 695, 5, 2, 0, 0, 695, 696, 3, 172, 86, 0, 696, 697, 5, 3, 0, 0, 697, 699, 1, 0, 0, 0, 698,
	694, 1, 0, 0, 0, 698, 699, 1, 0, 0, 0, 699, 701, 1, 0, 0, 0, 700, 702, 3, 30, 15, 0, 701, 700,
	1, 0, 0, 0, 701, 702, 1, 0, 0, 0, 702, 710, 1, 0, 0, 0, 703, 705, 5, 360, 0, 0, 704, 706, 3, 36,
	18, 0, 705, 704, 1, 0, 0, 0, 705, 706, 1, 0, 0, 0, 706, 708, 1, 0, 0, 0, 707, 709, 3, 32, 16, 0,
	708, 707, 1, 0, 0, 0, 708, 709, 1, 0, 0, 0, 709, 711, 1, 0, 0, 0, 710, 703, 1, 0, 0, 0, 710,
	711, 1, 0, 0, 0, 711, 717, 1, 0, 0, 0, 712, 714, 5, 149, 0, 0, 713, 712, 1, 0, 0, 0, 713, 714,
	1, 0, 0, 0, 714, 715, 1, 0, 0, 0, 715, 716, 5, 245, 0, 0, 716, 718, 3, 148, 74, 0, 717, 713, 1,
	0, 0, 0, 717, 718, 1, 0, 0, 0, 718, 721, 1, 0, 0, 0, 719, 720, 5, 79, 0, 0, 720, 722, 5, 516, 0,
	0, 721, 719, 1, 0, 0, 0, 721, 722, 1, 0, 0, 0, 722, 729, 1, 0, 0, 0, 723, 724, 5, 319, 0, 0,
	724, 725, 5, 57, 0, 0, 725, 726, 5, 2, 0, 0, 726, 727, 3, 38, 19, 0, 727, 728, 5, 3, 0, 0, 728,
	730, 1, 0, 0, 0, 729, 723, 1, 0, 0, 0, 729, 730, 1, 0, 0, 0, 730, 742, 1, 0, 0, 0, 731, 732, 5,
	140, 0, 0, 732, 736, 5, 57, 0, 0, 733, 734, 5, 203, 0, 0, 734, 737, 3, 148, 74, 0, 735, 737, 5,
	352, 0, 0, 736, 733, 1, 0, 0, 0, 736, 735, 1, 0, 0, 0, 737, 740, 1, 0, 0, 0, 738, 739, 5, 53, 0,
	0, 739, 741, 7, 3, 0, 0, 740, 738, 1, 0, 0, 0, 740, 741, 1, 0, 0, 0, 741, 743, 1, 0, 0, 0, 742,
	731, 1, 0, 0, 0, 742, 743, 1, 0, 0, 0, 743, 745, 1, 0, 0, 0, 744, 746, 3, 158, 79, 0, 745, 744,
	1, 0, 0, 0, 745, 746, 1, 0, 0, 0, 746, 747, 1, 0, 0, 0, 747, 748, 5, 28, 0, 0, 748, 749, 3, 74,
	37, 0, 749, 836, 1, 0, 0, 0, 750, 751, 5, 360, 0, 0, 751, 752, 5, 279, 0, 0, 752, 753, 5, 478,
	0, 0, 753, 757, 3, 170, 85, 0, 754, 758, 3, 20, 10, 0, 755, 758, 5, 83, 0, 0, 756, 758, 5, 32,
	0, 0, 757, 754, 1, 0, 0, 0, 757, 755, 1, 0, 0, 0, 757, 756, 1, 0, 0, 0, 758, 836, 1, 0, 0, 0,
	759, 760, 5, 20, 0, 0, 760, 761, 5, 279, 0, 0, 761, 762, 5, 478, 0, 0, 762, 778, 3, 170, 85, 0,
	763, 764, 5, 364, 0, 0, 764, 779, 3, 286, 143, 0, 765, 771, 5, 360, 0, 0, 766, 772, 3, 36, 18,
	0, 767, 772, 3, 32, 16, 0, 768, 769, 3, 36, 18, 0, 769, 770, 3, 32, 16, 0, 770, 772, 1, 0, 0, 0,
	771, 766, 1, 0, 0, 0, 771, 767, 1, 0, 0, 0, 771, 768, 1, 0, 0, 0, 772, 779, 1, 0, 0, 0, 773,
	774, 5, 401, 0, 0, 774, 775, 5, 2, 0, 0, 775, 776, 3, 160, 80, 0, 776, 777, 5, 3, 0, 0, 777,
	779, 1, 0, 0, 0, 778, 763, 1, 0, 0, 0, 778, 765, 1, 0, 0, 0, 778, 773, 1, 0, 0, 0, 779, 836, 1,
	0, 0, 0, 780, 781, 5, 146, 0, 0, 781, 782, 5, 279, 0, 0, 782, 785, 5, 478, 0, 0, 783, 784, 5,
	215, 0, 0, 784, 786, 5, 166, 0, 0, 785, 783, 1, 0, 0, 0, 785, 786, 1, 0, 0, 0, 786, 787, 1, 0,
	0, 0, 787, 836, 3, 170, 85, 0, 788, 789, 5, 327, 0, 0, 789, 790, 5, 279, 0, 0, 790, 791, 5, 478,
	0, 0, 791, 792, 5, 240, 0, 0, 792, 793, 5, 307, 0, 0, 793, 836, 3, 170, 85, 0, 794, 795, 5, 376,
	0, 0, 795, 796, 5, 279, 0, 0, 796, 797, 5, 478, 0, 0, 797, 798, 5, 240, 0, 0, 798, 799, 5, 307,
	0, 0, 799, 836, 3, 170, 85, 0, 800, 801, 5, 61, 0, 0, 801, 802, 5, 279, 0, 0, 802, 803, 5, 478,
	0, 0, 803, 804, 5, 435, 0, 0, 804, 805, 5, 521, 0, 0, 805, 806, 5, 307, 0, 0, 806, 836, 3, 170,
	85, 0, 807, 808, 5, 20, 0, 0, 808, 809, 5, 430, 0, 0, 809, 810, 3, 170, 85, 0, 810, 811, 5, 12,
	0, 0, 811, 812, 5, 89, 0, 0, 812, 813, 3, 282, 141, 0, 813, 814, 3, 18, 9, 0, 814, 836, 1, 0, 0,
	0, 815, 816, 5, 20, 0, 0, 816, 817, 5, 430, 0, 0, 817, 818, 3, 170, 85, 0, 818, 819, 5, 146, 0,
	0, 819, 820, 5, 89, 0, 0, 820, 821, 3, 282, 141, 0, 821, 836, 1, 0, 0, 0, 822, 823, 5, 404, 0,
	0, 823, 824, 5, 90, 0, 0, 824, 825, 5, 189, 0, 0, 825, 836, 3, 170, 85, 0, 826, 827, 5, 146, 0,
	0, 827, 828, 5, 64, 0, 0, 828, 829, 5, 359, 0, 0, 829, 830, 5, 41, 0, 0, 830, 831, 5, 483, 0, 0,
	831, 832, 5, 516, 0, 0, 832, 833, 5, 491, 0, 0, 833, 836, 5, 521, 0, 0, 834, 836, 3, 10, 5, 0,
	835, 389, 1, 0, 0, 0, 835, 395, 1, 0, 0, 0, 835, 419, 1, 0, 0, 0, 835, 502, 1, 0, 0, 0, 835,
	523, 1, 0, 0, 0, 835, 535, 1, 0, 0, 0, 835, 556, 1, 0, 0, 0, 835, 593, 1, 0, 0, 0, 835, 610, 1,
	0, 0, 0, 835, 629, 1, 0, 0, 0, 835, 655, 1, 0, 0, 0, 835, 667, 1, 0, 0, 0, 835, 685, 1, 0, 0, 0,
	835, 750, 1, 0, 0, 0, 835, 759, 1, 0, 0, 0, 835, 780, 1, 0, 0, 0, 835, 788, 1, 0, 0, 0, 835,
	794, 1, 0, 0, 0, 835, 800, 1, 0, 0, 0, 835, 807, 1, 0, 0, 0, 835, 815, 1, 0, 0, 0, 835, 822, 1,
	0, 0, 0, 835, 826, 1, 0, 0, 0, 835, 834, 1, 0, 0, 0, 836, 9, 1, 0, 0, 0, 837, 838, 5, 401, 0, 0,
	838, 839, 3, 286, 143, 0, 839, 840, 5, 28, 0, 0, 840, 841, 5, 129, 0, 0, 841, 842, 5, 419, 0, 0,
	842, 843, 5, 475, 0, 0, 843, 948, 1, 0, 0, 0, 844, 845, 5, 401, 0, 0, 845, 848, 5, 347, 0, 0,
	846, 847, 5, 184, 0, 0, 847, 849, 3, 42, 21, 0, 848, 846, 1, 0, 0, 0, 848, 849, 1, 0, 0, 0, 849,
	850, 1, 0, 0, 0, 850, 948, 3, 160, 80, 0, 851, 853, 5, 401, 0, 0, 852, 854, 7, 4, 0, 0, 853,
	852, 1, 0, 0, 0, 853, 854, 1, 0, 0, 0, 854, 855, 1, 0, 0, 0, 855, 856, 3, 286, 143, 0, 856, 859,
	5, 491, 0, 0, 857, 860, 3, 214, 107, 0, 858, 860, 5, 129, 0, 0, 859, 857, 1, 0, 0, 0, 859, 858,
	1, 0, 0, 0, 860, 948, 1, 0, 0, 0, 861, 862, 5, 401, 0, 0, 862, 948, 3, 12, 6, 0, 863, 867, 5,
	401, 0, 0, 864, 865, 5, 67, 0, 0, 865, 868, 5, 401, 0, 0, 866, 868, 5, 68, 0, 0, 867, 864, 1, 0,
	0, 0, 867, 866, 1, 0, 0, 0, 868, 871, 1, 0, 0, 0, 869, 872, 3, 42, 21, 0, 870, 872, 5, 129, 0,
	0, 871, 869, 1, 0, 0, 0, 871, 870, 1, 0, 0, 0, 872, 948, 1, 0, 0, 0, 873, 874, 5, 401, 0, 0,
	874, 875, 5, 293, 0, 0, 875, 876, 5, 491, 0, 0, 876, 948, 3, 214, 107, 0, 877, 879, 5, 401, 0,
	0, 878, 880, 7, 4, 0, 0, 879, 878, 1, 0, 0, 0, 879, 880, 1, 0, 0, 0, 880, 881, 1, 0, 0, 0, 881,
	892, 5, 448, 0, 0, 882, 893, 3, 14, 7, 0, 883, 893, 3, 16, 8, 0, 884, 885, 3, 14, 7, 0, 885,
	886, 5, 4, 0, 0, 886, 887, 3, 16, 8, 0, 887, 893, 1, 0, 0, 0, 888, 889, 3, 16, 8, 0, 889, 890,
	5, 4, 0, 0, 890, 891, 3, 14, 7, 0, 891, 893, 1, 0, 0, 0, 892, 882, 1, 0, 0, 0, 892, 883, 1, 0,
	0, 0, 892, 884, 1, 0, 0, 0, 892, 888, 1, 0, 0, 0, 893, 948, 1, 0, 0, 0, 894, 895, 5, 401, 0, 0,
	895, 898, 5, 293, 0, 0, 896, 899, 3, 42, 21, 0, 897, 899, 5, 129, 0, 0, 898, 896, 1, 0, 0, 0,
	898, 897, 1, 0, 0, 0, 899, 903, 1, 0, 0, 0, 900, 901, 5, 73, 0, 0, 901, 904, 3, 42, 21, 0, 902,
	904, 5, 129, 0, 0, 903, 900, 1, 0, 0, 0, 903, 902, 1, 0, 0, 0, 903, 904, 1, 0, 0, 0, 904, 948,
	1, 0, 0, 0, 905, 906, 5, 401, 0, 0, 906, 909, 5, 321, 0, 0, 907, 908, 5, 184, 0, 0, 908, 910, 3,
	44, 22, 0, 909, 907, 1, 0, 0, 0, 909, 910, 1, 0, 0, 0, 910, 911, 1, 0, 0, 0, 911, 917, 5, 491,
	0, 0, 912, 918, 5, 516, 0, 0, 913, 914, 5, 321, 0, 0, 914, 915, 5, 2, 0, 0, 915, 916, 5, 516, 0,
	0, 916, 918, 5, 3, 0, 0, 917, 912, 1, 0, 0, 0, 917, 913, 1, 0, 0, 0, 918, 948, 1, 0, 0, 0, 919,
	920, 5, 401, 0, 0, 920, 921, 5, 253, 0, 0, 921, 927, 5, 491, 0, 0, 922, 928, 5, 516, 0, 0, 923,
	924, 5, 321, 0, 0, 924, 925, 5, 2, 0, 0, 925, 926, 5, 516, 0, 0, 926, 928, 5, 3, 0, 0, 927, 922,
	1, 0, 0, 0, 927, 923, 1, 0, 0, 0, 928, 948, 1, 0, 0, 0, 929, 933, 5, 467, 0, 0, 930, 931, 3,
	286, 143, 0, 931, 932, 5, 5, 0, 0, 932, 934, 1, 0, 0, 0, 933, 930, 1, 0, 0, 0, 933, 934, 1, 0,
	0, 0, 934, 935, 1, 0, 0, 0, 935, 948, 3, 286, 143, 0, 936, 943, 5, 467, 0, 0, 937, 938, 3, 286,
	143, 0, 938, 939, 5, 5, 0, 0, 939, 941, 1, 0, 0, 0, 940, 937, 1, 0, 0, 0, 940, 941, 1, 0, 0, 0,
	941, 942, 1, 0, 0, 0, 942, 944, 3, 286, 143, 0, 943, 940, 1, 0, 0, 0, 943, 944, 1, 0, 0, 0, 944,
	945, 1, 0, 0, 0, 945, 946, 5, 514, 0, 0, 946, 948, 3, 286, 143, 0, 947, 837, 1, 0, 0, 0, 947,
	844, 1, 0, 0, 0, 947, 851, 1, 0, 0, 0, 947, 861, 1, 0, 0, 0, 947, 863, 1, 0, 0, 0, 947, 873, 1,
	0, 0, 0, 947, 877, 1, 0, 0, 0, 947, 894, 1, 0, 0, 0, 947, 905, 1, 0, 0, 0, 947, 919, 1, 0, 0, 0,
	947, 929, 1, 0, 0, 0, 947, 936, 1, 0, 0, 0, 948, 11, 1, 0, 0, 0, 949, 950, 5, 514, 0, 0, 950,
	952, 5, 514, 0, 0, 951, 953, 7, 4, 0, 0, 952, 951, 1, 0, 0, 0, 952, 953, 1, 0, 0, 0, 953, 955,
	1, 0, 0, 0, 954, 949, 1, 0, 0, 0, 954, 955, 1, 0, 0, 0, 955, 956, 1, 0, 0, 0, 956, 957, 3, 286,
	143, 0, 957, 960, 5, 491, 0, 0, 958, 961, 3, 214, 107, 0, 959, 961, 5, 129, 0, 0, 960, 958, 1,
	0, 0, 0, 960, 959, 1, 0, 0, 0, 961, 968, 1, 0, 0, 0, 962, 963, 5, 514, 0, 0, 963, 964, 3, 286,
	143, 0, 964, 965, 5, 491, 0, 0, 965, 966, 3, 214, 107, 0, 966, 968, 1, 0, 0, 0, 967, 954, 1, 0,
	0, 0, 967, 962, 1, 0, 0, 0, 968, 13, 1, 0, 0, 0, 969, 970, 5, 354, 0, 0, 970, 971, 7, 5, 0, 0,
	971, 15, 1, 0, 0, 0, 972, 973, 5, 239, 0, 0, 973, 981, 5, 256, 0, 0, 974, 975, 5, 354, 0, 0,
	975, 982, 5, 459, 0, 0, 976, 977, 5, 354, 0, 0, 977, 982, 5, 81, 0, 0, 978, 979, 5, 366, 0, 0,
	979, 982, 5, 354, 0, 0, 980, 982, 5, 399, 0, 0, 981, 974, 1, 0, 0, 0, 981, 976, 1, 0, 0, 0, 981,
	978, 1, 0, 0, 0, 981, 980, 1, 0, 0, 0, 982, 17, 1, 0, 0, 0, 983, 984, 5, 341, 0, 0, 984, 985, 5,
	245, 0, 0, 985, 996, 3, 148, 74, 0, 986, 987, 5, 462, 0, 0, 987, 996, 3, 148, 74, 0, 988, 989,
	5, 185, 0, 0, 989, 990, 5, 245, 0, 0, 990, 991, 3, 148, 74, 0, 991, 992, 5, 361, 0, 0, 992, 993,
	3, 170, 85, 0, 993, 994, 3, 148, 74, 0, 994, 996, 1, 0, 0, 0, 995, 983, 1, 0, 0, 0, 995, 986, 1,
	0, 0, 0, 995, 988, 1, 0, 0, 0, 996, 19, 1, 0, 0, 0, 997, 999, 5, 437, 0, 0, 998, 997, 1, 0, 0,
	0, 998, 999, 1, 0, 0, 0, 999, 1000, 1, 0, 0, 0, 1000, 1001, 7, 6, 0, 0, 1001, 1012, 3, 148, 74,
	0, 1002, 1004, 5, 437, 0, 0, 1003, 1002, 1, 0, 0, 0, 1003, 1004, 1, 0, 0, 0, 1004, 1005, 1, 0,
	0, 0, 1005, 1006, 5, 319, 0, 0, 1006, 1012, 3, 282, 141, 0, 1007, 1008, 7, 6, 0, 0, 1008, 1009,
	5, 2, 0, 0, 1009, 1010, 5, 500, 0, 0, 1010, 1012, 5, 3, 0, 0, 1011, 998, 1, 0, 0, 0, 1011, 1003,
	1, 0, 0, 0, 1011, 1007, 1, 0, 0, 0, 1012, 21, 1, 0, 0, 0, 1013, 1015, 5, 32, 0, 0, 1014, 1013,
	1, 0, 0, 0, 1014, 1015, 1, 0, 0, 0, 1015, 1016, 1, 0, 0, 0, 1016, 1017, 5, 319, 0, 0, 1017,
	1019, 5, 57, 0, 0, 1018, 1020, 7, 7, 0, 0, 1019, 1018, 1, 0, 0, 0, 1019, 1020, 1, 0, 0, 0, 1020,
	1021, 1, 0, 0, 0, 1021, 1022, 3, 24, 12, 0, 1022, 1024, 5, 2, 0, 0, 1023, 1025, 3, 184, 92, 0,
	1024, 1023, 1, 0, 0, 0, 1024, 1025, 1, 0, 0, 0, 1025, 1026, 1, 0, 0, 0, 1026, 1027, 5, 3, 0, 0,
	1027, 23, 1, 0, 0, 0, 1028, 1029, 5, 2, 0, 0, 1029, 1034, 3, 26, 13, 0, 1030, 1031, 5, 4, 0, 0,
	1031, 1033, 3, 26, 13, 0, 1032, 1030, 1, 0, 0, 0, 1033, 1036, 1, 0, 0, 0, 1034, 1032, 1, 0, 0,
	0, 1034, 1035, 1, 0, 0, 0, 1035, 1037, 1, 0, 0, 0, 1036, 1034, 1, 0, 0, 0, 1037, 1038, 5, 3, 0,
	0, 1038, 25, 1, 0, 0, 0, 1039, 1042, 3, 286, 143, 0, 1040, 1042, 3, 234, 117, 0, 1041, 1039, 1,
	0, 0, 0, 1041, 1040, 1, 0, 0, 0, 1042, 27, 1, 0, 0, 0, 1043, 1045, 5, 485, 0, 0, 1044, 1043, 1,
	0, 0, 0, 1044, 1045, 1, 0, 0, 0, 1045, 1046, 1, 0, 0, 0, 1046, 1048, 3, 50, 25, 0, 1047, 1044,
	1, 0, 0, 0, 1047, 1048, 1, 0, 0, 0, 1048, 1049, 1, 0, 0, 0, 1049, 1050, 5, 106, 0, 0, 1050,
	1051, 5, 222, 0, 0, 1051, 1052, 5, 2, 0, 0, 1052, 1057, 5, 516, 0, 0, 1053, 1054, 5, 4, 0, 0,
	1054, 1056, 5, 516, 0, 0, 1055, 1053, 1, 0, 0, 0, 1056, 1059, 1, 0, 0, 0, 1057, 1055, 1, 0, 0,
	0, 1057, 1058, 1, 0, 0, 0, 1058, 1060, 1, 0, 0, 0, 1059, 1057, 1, 0, 0, 0, 1060, 1061, 5, 3, 0,
	0, 1061, 1062, 5, 231, 0, 0, 1062, 1063, 5, 430, 0, 0, 1063, 1066, 3, 170, 85, 0, 1064, 1065, 5,
	319, 0, 0, 1065, 1067, 3, 148, 74, 0, 1066, 1064, 1, 0, 0, 0, 1066, 1067, 1, 0, 0, 0, 1067,
	1072, 1, 0, 0, 0, 1068, 1069, 5, 78, 0, 0, 1069, 1070, 5, 438, 0, 0, 1070, 1071, 5, 57, 0, 0,
	1071, 1073, 5, 516, 0, 0, 1072, 1068, 1, 0, 0, 0, 1072, 1073, 1, 0, 0, 0, 1073, 1078, 1, 0, 0,
	0, 1074, 1075, 5, 259, 0, 0, 1075, 1076, 5, 438, 0, 0, 1076, 1077, 5, 57, 0, 0, 1077, 1079, 5,
	516, 0, 0, 1078, 1074, 1, 0, 0, 0, 1078, 1079, 1, 0, 0, 0, 1079, 1083, 1, 0, 0, 0, 1080, 1081,
	5, 187, 0, 0, 1081, 1082, 5, 28, 0, 0, 1082, 1084, 3, 40, 20, 0, 1083, 1080, 1, 0, 0, 0, 1083,
	1084, 1, 0, 0, 0, 1084, 1086, 1, 0, 0, 0, 1085, 1087, 3, 148, 74, 0, 1086, 1085, 1, 0, 0, 0,
	1086, 1087, 1, 0, 0, 0, 1087, 1089, 1, 0, 0, 0, 1088, 1090, 3, 58, 29, 0, 1089, 1088, 1, 0, 0,
	0, 1089, 1090, 1, 0, 0, 0, 1090, 1092, 1, 0, 0, 0, 1091, 1093, 3, 60, 30, 0, 1092, 1091, 1, 0,
	0, 0, 1092, 1093, 1, 0, 0, 0, 1093, 1095, 1, 0, 0, 0, 1094, 1096, 3, 52, 26, 0, 1095, 1094, 1,
	0, 0, 0, 1095, 1096, 1, 0, 0, 0, 1096, 1098, 1, 0, 0, 0, 1097, 1099, 3, 94, 47, 0, 1098, 1097,
	1, 0, 0, 0, 1098, 1099, 1, 0, 0, 0, 1099, 1101, 1, 0, 0, 0, 1100, 1102, 3, 54, 27, 0, 1101,
	1100, 1, 0, 0, 0, 1101, 1102, 1, 0, 0, 0, 1102, 1104, 1, 0, 0, 0, 1103, 1105, 3, 56, 28, 0,
	1104, 1103, 1, 0, 0, 0, 1104, 1105, 1, 0, 0, 0, 1105, 1107, 1, 0, 0, 0, 1106, 1108, 3, 158, 79,
	0, 1107, 1106, 1, 0, 0, 0, 1107, 1108, 1, 0, 0, 0, 1108, 1139, 1, 0, 0, 0, 1109, 1111, 5, 485,
	0, 0, 1110, 1109, 1, 0, 0, 0, 1110, 1111, 1, 0, 0, 0, 1111, 1112, 1, 0, 0, 0, 1112, 1114, 3, 50,
	25, 0, 1113, 1110, 1, 0, 0, 0, 1113, 1114, 1, 0, 0, 0, 1114, 1115, 1, 0, 0, 0, 1115, 1116, 5,
	106, 0, 0, 1116, 1117, 5, 189, 0, 0, 1117, 1118, 5, 430, 0, 0, 1118, 1119, 3, 170, 85, 0, 1119,
	1120, 5, 231, 0, 0, 1120, 1121, 5, 430, 0, 0, 1121, 1124, 3, 170, 85, 0, 1122, 1123, 5, 319, 0,
	0, 1123, 1125, 3, 148, 74, 0, 1124, 1122, 1, 0, 0, 0, 1124, 1125, 1, 0, 0, 0, 1125, 1127, 1, 0,
	0, 0, 1126, 1128, 3, 60, 30, 0, 1127, 1126, 1, 0, 0, 0, 1127, 1128, 1, 0, 0, 0, 1128, 1130, 1,
	0, 0, 0, 1129, 1131, 3, 94, 47, 0, 1130, 1129, 1, 0, 0, 0, 1130, 1131, 1, 0, 0, 0, 1131, 1133,
	1, 0, 0, 0, 1132, 1134, 3, 54, 27, 0, 1133, 1132, 1, 0, 0, 0, 1133, 1134, 1, 0, 0, 0, 1134,
	1136, 1, 0, 0, 0, 1135, 1137, 3, 158, 79, 0, 1136, 1135, 1, 0, 0, 0, 1136, 1137, 1, 0, 0, 0,
	1137, 1139, 1, 0, 0, 0, 1138, 1047, 1, 0, 0, 0, 1138, 1113, 1, 0, 0, 0, 1139, 29, 1, 0, 0, 0,
	1140, 1141, 5, 54, 0, 0, 1141, 1142, 7, 8, 0, 0, 1142, 31, 1, 0, 0, 0, 1143, 1144, 5, 307, 0, 0,
	1144, 1151, 5, 270, 0, 0, 1145, 1146, 5, 307, 0, 0, 1146, 1147, 5, 391, 0, 0, 1147, 1151, 3, 34,
	17, 0, 1148, 1149, 5, 307, 0, 0, 1149, 1151, 5, 80, 0, 0, 1150, 1143, 1, 0, 0, 0, 1150, 1145, 1,
	0, 0, 0, 1150, 1148, 1, 0, 0, 0, 1151, 33, 1, 0, 0, 0, 1152, 1153, 5, 162, 0, 0, 1153, 1154, 5,
	521, 0, 0, 1154, 1157, 3, 286, 143, 0, 1155, 1156, 5, 415, 0, 0, 1156, 1158, 5, 516, 0, 0, 1157,
	1155, 1, 0, 0, 0, 1157, 1158, 1, 0, 0, 0, 1158, 35, 1, 0, 0, 0, 1159, 1160, 7, 9, 0, 0, 1160,
	37, 1, 0, 0, 0, 1161, 1164, 3, 286, 143, 0, 1162, 1164, 3, 234, 117, 0, 1163, 1161, 1, 0, 0, 0,
	1163, 1162, 1, 0, 0, 0, 1164, 39, 1, 0, 0, 0, 1165, 1168, 3, 286, 143, 0, 1166, 1168, 5, 516, 0,
	0, 1167, 1165, 1, 0, 0, 0, 1167, 1166, 1, 0, 0, 0, 1168, 41, 1, 0, 0, 0, 1169, 1173, 3, 282,
	141, 0, 1170, 1173, 5, 516, 0, 0, 1171, 1173, 5, 517, 0, 0, 1172, 1169, 1, 0, 0, 0, 1172, 1170,
	1, 0, 0, 0, 1172, 1171, 1, 0, 0, 0, 1173, 43, 1, 0, 0, 0, 1174, 1183, 3, 42, 21, 0, 1175, 1181,
	5, 514, 0, 0, 1176, 1182, 3, 42, 21, 0, 1177, 1178, 5, 2, 0, 0, 1178, 1179, 3, 42, 21, 0, 1179,
	1180, 5, 3, 0, 0, 1180, 1182, 1, 0, 0, 0, 1181, 1176, 1, 0, 0, 0, 1181, 1177, 1, 0, 0, 0, 1182,
	1184, 1, 0, 0, 0, 1183, 1175, 1, 0, 0, 0, 1183, 1184, 1, 0, 0, 0, 1184, 45, 1, 0, 0, 0, 1185,
	1187, 5, 168, 0, 0, 1186, 1188, 3, 48, 24, 0, 1187, 1186, 1, 0, 0, 0, 1187, 1188, 1, 0, 0, 0,
	1188, 1192, 1, 0, 0, 0, 1189, 1192, 5, 133, 0, 0, 1190, 1192, 5, 134, 0, 0, 1191, 1185, 1, 0, 0,
	0, 1191, 1189, 1, 0, 0, 0, 1191, 1190, 1, 0, 0, 0, 1192, 1194, 1, 0, 0, 0, 1193, 1195, 7, 10, 0,
	0, 1194, 1193, 1, 0, 0, 0, 1194, 1195, 1, 0, 0, 0, 1195, 1197, 1, 0, 0, 0, 1196, 1198, 5, 335,
	0, 0, 1197, 1196, 1, 0, 0, 0, 1197, 1198, 1, 0, 0, 0, 1198, 47, 1, 0, 0, 0, 1199, 1200, 7, 11,
	0, 0, 1200, 49, 1, 0, 0, 0, 1201, 1202, 7, 12, 0, 0, 1202, 51, 1, 0, 0, 0, 1203, 1204, 5, 339,
	0, 0, 1204, 1205, 5, 179, 0, 0, 1205, 1206, 3, 214, 107, 0, 1206, 53, 1, 0, 0, 0, 1207, 1208, 5,
	131, 0, 0, 1208, 1209, 5, 307, 0, 0, 1209, 1210, 3, 214, 107, 0, 1210, 55, 1, 0, 0, 0, 1211,
	1212, 5, 312, 0, 0, 1212, 1213, 5, 57, 0, 0, 1213, 1214, 3, 286, 143, 0, 1214, 57, 1, 0, 0, 0,
	1215, 1216, 5, 78, 0, 0, 1216, 1217, 5, 189, 0, 0, 1217, 1218, 5, 326, 0, 0, 1218, 1219, 5, 28,
	0, 0, 1219, 1220, 3, 148, 74, 0, 1220, 59, 1, 0, 0, 0, 1221, 1222, 5, 401, 0, 0, 1222, 1223, 5,
	2, 0, 0, 1223, 1228, 3, 62, 31, 0, 1224, 1225, 5, 4, 0, 0, 1225, 1227, 3, 62, 31, 0, 1226, 1224,
	1, 0, 0, 0, 1227, 1230, 1, 0, 0, 0, 1228, 1226, 1, 0, 0, 0, 1228, 1229, 1, 0, 0, 0, 1229, 1231,
	1, 0, 0, 0, 1230, 1228, 1, 0, 0, 0, 1231, 1232, 5, 3, 0, 0, 1232, 61, 1, 0, 0, 0, 1233, 1234, 3,
	286, 143, 0, 1234, 1235, 5, 491, 0, 0, 1235, 1236, 3, 214, 107, 0, 1236, 63, 1, 0, 0, 0, 1237,
	1266, 3, 66, 33, 0, 1238, 1239, 5, 485, 0, 0, 1239, 1240, 5, 389, 0, 0, 1240, 1241, 5, 2, 0, 0,
	1241, 1242, 3, 160, 80, 0, 1242, 1243, 5, 3, 0, 0, 1243, 1266, 1, 0, 0, 0, 1244, 1245, 5, 485,
	0, 0, 1245, 1246, 5, 205, 0, 0, 1246, 1247, 5, 2, 0, 0, 1247, 1248, 3, 160, 80, 0, 1248, 1249,
	5, 3, 0, 0, 1249, 1266, 1, 0, 0, 0, 1250, 1251, 5, 485, 0, 0, 1251, 1252, 5, 263, 0, 0, 1252,
	1253, 5, 2, 0, 0, 1253, 1254, 3, 160, 80, 0, 1254, 1255, 5, 3, 0, 0, 1255, 1266, 1, 0, 0, 0,
	1256, 1257, 5, 485, 0, 0, 1257, 1258, 5, 52, 0, 0, 1258, 1263, 3, 42, 21, 0, 1259, 1260, 5, 2,
	0, 0, 1260, 1261, 3, 160, 80, 0, 1261, 1262, 5, 3, 0, 0, 1262, 1264, 1, 0, 0, 0, 1263, 1259, 1,
	0, 0, 0, 1263, 1264, 1, 0, 0, 0, 1264, 1266, 1, 0, 0, 0, 1265, 1237, 1, 0, 0, 0, 1265, 1238, 1,
	0, 0, 0, 1265, 1244, 1, 0, 0, 0, 1265, 1250, 1, 0, 0, 0, 1265, 1256, 1, 0, 0, 0, 1266, 65, 1, 0,
	0, 0, 1267, 1268, 5, 485, 0, 0, 1268, 1269, 5, 372, 0, 0, 1269, 1274, 3, 42, 21, 0, 1270, 1271,
	5, 2, 0, 0, 1271, 1272, 3, 160, 80, 0, 1272, 1273, 5, 3, 0, 0, 1273, 1275, 1, 0, 0, 0, 1274,
	1270, 1, 0, 0, 0, 1274, 1275, 1, 0, 0, 0, 1275, 67, 1, 0, 0, 0, 1276, 1279, 5, 106, 0, 0, 1277,
	1278, 5, 263, 0, 0, 1278, 1280, 3, 256, 128, 0, 1279, 1277, 1, 0, 0, 0, 1279, 1280, 1, 0, 0, 0,
	1280, 1281, 1, 0, 0, 0, 1281, 1282, 5, 222, 0, 0, 1282, 1283, 5, 516, 0, 0, 1283, 1284, 5, 231,
	0, 0, 1284, 1285, 5, 430, 0, 0, 1285, 1288, 3, 170, 85, 0, 1286, 1287, 5, 319, 0, 0, 1287, 1289,
	3, 148, 74, 0, 1288, 1286, 1, 0, 0, 0, 1288, 1289, 1, 0, 0, 0, 1289, 1294, 1, 0, 0, 0, 1290,
	1291, 5, 78, 0, 0, 1291, 1292, 5, 438, 0, 0, 1292, 1293, 5, 57, 0, 0, 1293, 1295, 5, 516, 0, 0,
	1294, 1290, 1, 0, 0, 0, 1294, 1295, 1, 0, 0, 0, 1295, 1300, 1, 0, 0, 0, 1296, 1297, 5, 259, 0,
	0, 1297, 1298, 5, 438, 0, 0, 1298, 1299, 5, 57, 0, 0, 1299, 1301, 5, 516, 0, 0, 1300, 1296, 1,
	0, 0, 0, 1300, 1301, 1, 0, 0, 0, 1301, 1303, 1, 0, 0, 0, 1302, 1304, 3, 70, 35, 0, 1303, 1302,
	1, 0, 0, 0, 1303, 1304, 1, 0, 0, 0, 1304, 1306, 1, 0, 0, 0, 1305, 1307, 3, 148, 74, 0, 1306,
	1305, 1, 0, 0, 0, 1306, 1307, 1, 0, 0, 0, 1307, 1309, 1, 0, 0, 0, 1308, 1310, 3, 60, 30, 0,
	1309, 1308, 1, 0, 0, 0, 1309, 1310, 1, 0, 0, 0, 1310, 1312, 1, 0, 0, 0, 1311, 1313, 3, 158, 79,
	0, 1312, 1311, 1, 0, 0, 0, 1312, 1313, 1, 0, 0, 0, 1313, 69, 1, 0, 0, 0, 1314, 1315, 5, 216, 0,
	0, 1315, 1316, 5, 521, 0, 0, 1316, 1321, 5, 259, 0, 0, 1317, 1318, 5, 216, 0, 0, 1318, 1319, 5,
	521, 0, 0, 1319, 1321, 5, 388, 0, 0, 1320, 1314, 1, 0, 0, 0, 1320, 1317, 1, 0, 0, 0, 1321, 71,
	1, 0, 0, 0, 1322, 1323, 5, 231, 0, 0, 1323, 1324, 5, 314, 0, 0, 1324, 1328, 3, 252, 126, 0,
	1325, 1326, 5, 187, 0, 0, 1326, 1327, 5, 28, 0, 0, 1327, 1329, 3, 286, 143, 0, 1328, 1325, 1, 0,
	0, 0, 1328, 1329, 1, 0, 0, 0, 1329, 1331, 1, 0, 0, 0, 1330, 1332, 3, 158, 79, 0, 1331, 1330, 1,
	0, 0, 0, 1331, 1332, 1, 0, 0, 0, 1332, 73, 1, 0, 0, 0, 1333, 1335, 3, 84, 42, 0, 1334, 1333, 1,
	0, 0, 0, 1334, 1335, 1, 0, 0, 0, 1335, 1336, 1, 0, 0, 0, 1336, 1337, 3, 76, 38, 0, 1337, 1338,
	3, 134, 67, 0, 1338, 75, 1, 0, 0, 0, 1339, 1340, 6, 38, -1, 0, 1340, 1341, 3, 80, 40, 0, 1341,
	1350, 1, 0, 0, 0, 1342, 1343, 10, 1, 0, 0, 1343, 1345, 7, 13, 0, 0, 1344, 1346, 3, 78, 39, 0,
	1345, 1344, 1, 0, 0, 0, 1345, 1346, 1, 0, 0, 0, 1346, 1347, 1, 0, 0, 0, 1347, 1349, 3, 76, 38,
	2, 1348, 1342, 1, 0, 0, 0, 1349, 1352, 1, 0, 0, 0, 1350, 1348, 1, 0, 0, 0, 1350, 1351, 1, 0, 0,
	0, 1351, 77, 1, 0, 0, 0, 1352, 1350, 1, 0, 0, 0, 1353, 1354, 7, 14, 0, 0, 1354, 79, 1, 0, 0, 0,
	1355, 1362, 3, 82, 41, 0, 1356, 1357, 5, 2, 0, 0, 1357, 1358, 3, 74, 37, 0, 1358, 1359, 5, 3, 0,
	0, 1359, 1362, 1, 0, 0, 0, 1360, 1362, 3, 208, 104, 0, 1361, 1355, 1, 0, 0, 0, 1361, 1356, 1, 0,
	0, 0, 1361, 1360, 1, 0, 0, 0, 1362, 81, 1, 0, 0, 0, 1363, 1365, 3, 90, 45, 0, 1364, 1366, 3, 98,
	49, 0, 1365, 1364, 1, 0, 0, 0, 1365, 1366, 1, 0, 0, 0, 1366, 1368, 1, 0, 0, 0, 1367, 1369, 3,
	96, 48, 0, 1368, 1367, 1, 0, 0, 0, 1368, 1369, 1, 0, 0, 0, 1369, 1371, 1, 0, 0, 0, 1370, 1372,
	3, 94, 47, 0, 1371, 1370, 1, 0, 0, 0, 1371, 1372, 1, 0, 0, 0, 1372, 1374, 1, 0, 0, 0, 1373,
	1375, 3, 114, 57, 0, 1374, 1373, 1, 0, 0, 0, 1374, 1375, 1, 0, 0, 0, 1375, 1377, 1, 0, 0, 0,
	1376, 1378, 3, 120, 60, 0, 1377, 1376, 1, 0, 0, 0, 1377, 1378, 1, 0, 0, 0, 1378, 1379, 1, 0, 0,
	0, 1379, 1380, 4, 41, 1, 0, 1380, 1381, 3, 134, 67, 0, 1381, 83, 1, 0, 0, 0, 1382, 1383, 5, 485,
	0, 0, 1383, 1388, 3, 86, 43, 0, 1384, 1385, 5, 4, 0, 0, 1385, 1387, 3, 86, 43, 0, 1386, 1384, 1,
	0, 0, 0, 1387, 1390, 1, 0, 0, 0, 1388, 1386, 1, 0, 0, 0, 1388, 1389, 1, 0, 0, 0, 1389, 85, 1, 0,
	0, 0, 1390, 1388, 1, 0, 0, 0, 1391, 1393, 3, 286, 143, 0, 1392, 1394, 3, 88, 44, 0, 1393, 1392,
	1, 0, 0, 0, 1393, 1394, 1, 0, 0, 0, 1394, 1395, 1, 0, 0, 0, 1395, 1396, 5, 28, 0, 0, 1396, 1397,
	5, 2, 0, 0, 1397, 1398, 3, 74, 37, 0, 1398, 1399, 5, 3, 0, 0, 1399, 87, 1, 0, 0, 0, 1400, 1401,
	5, 2, 0, 0, 1401, 1406, 3, 286, 143, 0, 1402, 1403, 5, 4, 0, 0, 1403, 1405, 3, 286, 143, 0,
	1404, 1402, 1, 0, 0, 0, 1405, 1408, 1, 0, 0, 0, 1406, 1404, 1, 0, 0, 0, 1406, 1407, 1, 0, 0, 0,
	1407, 1409, 1, 0, 0, 0, 1408, 1406, 1, 0, 0, 0, 1409, 1410, 5, 3, 0, 0, 1410, 89, 1, 0, 0, 0,
	1411, 1413, 5, 396, 0, 0, 1412, 1414, 3, 122, 61, 0, 1413, 1412, 1, 0, 0, 0, 1413, 1414, 1, 0,
	0, 0, 1414, 1416, 1, 0, 0, 0, 1415, 1417, 7, 14, 0, 0, 1416, 1415, 1, 0, 0, 0, 1416, 1417, 1, 0,
	0, 0, 1417, 1418, 1, 0, 0, 0, 1418, 1419, 3, 92, 46, 0, 1419, 91, 1, 0, 0, 0, 1420, 1428, 3,
	212, 106, 0, 1421, 1422, 5, 500, 0, 0, 1422, 1423, 5, 163, 0, 0, 1423, 1424, 5, 2, 0, 0, 1424,
	1425, 3, 212, 106, 0, 1425, 1426, 5, 3, 0, 0, 1426, 1428, 1, 0, 0, 0, 1427, 1420, 1, 0, 0, 0,
	1427, 1421, 1, 0, 0, 0, 1428, 93, 1, 0, 0, 0, 1429, 1430, 5, 483, 0, 0, 1430, 1431, 3, 218, 109,
	0, 1431, 95, 1, 0, 0, 0, 1432, 1433, 5, 189, 0, 0, 1433, 1434, 3, 104, 52, 0, 1434, 97, 1, 0, 0,
	0, 1435, 1437, 3, 100, 50, 0, 1436, 1435, 1, 0, 0, 0, 1436, 1437, 1, 0, 0, 0, 1437, 1438, 1, 0,
	0, 0, 1438, 1441, 5, 231, 0, 0, 1439, 1442, 3, 102, 51, 0, 1440, 1442, 3, 286, 143, 0, 1441,
	1439, 1, 0, 0, 0, 1441, 1440, 1, 0, 0, 0, 1442, 1450, 1, 0, 0, 0, 1443, 1446, 5, 4, 0, 0, 1444,
	1447, 3, 102, 51, 0, 1445, 1447, 3, 286, 143, 0, 1446, 1444, 1, 0, 0, 0, 1446, 1445, 1, 0, 0, 0,
	1447, 1449, 1, 0, 0, 0, 1448, 1443, 1, 0, 0, 0, 1449, 1452, 1, 0, 0, 0, 1450, 1448, 1, 0, 0, 0,
	1450, 1451, 1, 0, 0, 0, 1451, 99, 1, 0, 0, 0, 1452, 1450, 1, 0, 0, 0, 1453, 1454, 5, 56, 0, 0,
	1454, 1455, 5, 75, 0, 0, 1455, 101, 1, 0, 0, 0, 1456, 1457, 3, 286, 143, 0, 1457, 1458, 5, 2, 0,
	0, 1458, 1459, 5, 521, 0, 0, 1459, 1460, 5, 3, 0, 0, 1460, 103, 1, 0, 0, 0, 1461, 1466, 3, 106,
	53, 0, 1462, 1463, 5, 4, 0, 0, 1463, 1465, 3, 106, 53, 0, 1464, 1462, 1, 0, 0, 0, 1465, 1468, 1,
	0, 0, 0, 1466, 1464, 1, 0, 0, 0, 1466, 1467, 1, 0, 0, 0, 1467, 105, 1, 0, 0, 0, 1468, 1466, 1,
	0, 0, 0, 1469, 1473, 3, 154, 77, 0, 1470, 1472, 3, 108, 54, 0, 1471, 1470, 1, 0, 0, 0, 1472,
	1475, 1, 0, 0, 0, 1473, 1471, 1, 0, 0, 0, 1473, 1474, 1, 0, 0, 0, 1474, 107, 1, 0, 0, 0, 1475,
	1473, 1, 0, 0, 0, 1476, 1477, 3, 144, 72, 0, 1477, 1479, 5, 242, 0, 0, 1478, 1480, 3, 110, 55,
	0, 1479, 1478, 1, 0, 0, 0, 1479, 1480, 1, 0, 0, 0, 1480, 1481, 1, 0, 0, 0, 1481, 1483, 3, 154,
	77, 0, 1482, 1484, 3, 146, 73, 0, 1483, 1482, 1, 0, 0, 0, 1483, 1484, 1, 0, 0, 0, 1484, 109, 1,
	0, 0, 0, 1485, 1486, 5, 6, 0, 0, 1486, 1487, 3, 286, 143, 0, 1487, 1488, 5, 7, 0, 0, 1488, 1494,
	1, 0, 0, 0, 1489, 1490, 5, 512, 0, 0, 1490, 1491, 3, 286, 143, 0, 1491, 1492, 5, 513, 0, 0,
	1492, 1494, 1, 0, 0, 0, 1493, 1485, 1, 0, 0, 0, 1493, 1489, 1, 0, 0, 0, 1494, 111, 1, 0, 0, 0,
	1495, 1496, 5, 6, 0, 0, 1496, 1501, 3, 286, 143, 0, 1497, 1498, 5, 4, 0, 0, 1498, 1500, 3, 286,
	143, 0, 1499, 1497, 1, 0, 0, 0, 1500, 1503, 1, 0, 0, 0, 1501, 1499, 1, 0, 0, 0, 1501, 1502, 1,
	0, 0, 0, 1502, 1504, 1, 0, 0, 0, 1503, 1501, 1, 0, 0, 0, 1504, 1505, 5, 7, 0, 0, 1505, 1518, 1,
	0, 0, 0, 1506, 1507, 5, 512, 0, 0, 1507, 1512, 3, 286, 143, 0, 1508, 1509, 5, 4, 0, 0, 1509,
	1511, 3, 286, 143, 0, 1510, 1508, 1, 0, 0, 0, 1511, 1514, 1, 0, 0, 0, 1512, 1510, 1, 0, 0, 0,
	1512, 1513, 1, 0, 0, 0, 1513, 1515, 1, 0, 0, 0, 1514, 1512, 1, 0, 0, 0, 1515, 1516, 5, 513, 0,
	0, 1516, 1518, 1, 0, 0, 0, 1517, 1495, 1, 0, 0, 0, 1517, 1506, 1, 0, 0, 0, 1518, 113, 1, 0, 0,
	0, 1519, 1520, 5, 200, 0, 0, 1520, 1521, 5, 57, 0, 0, 1521, 1522, 3, 116, 58, 0, 1522, 115, 1,
	0, 0, 0, 1523, 1524, 5, 385, 0, 0, 1524, 1533, 5, 2, 0, 0, 1525, 1530, 3, 214, 107, 0, 1526,
	1527, 5, 4, 0, 0, 1527, 1529, 3, 214, 107, 0, 1528, 1526, 1, 0, 0, 0, 1529, 1532, 1, 0, 0, 0,
	1530, 1528, 1, 0, 0, 0, 1530, 1531, 1, 0, 0, 0, 1531, 1534, 1, 0, 0, 0, 1532, 1530, 1, 0, 0, 0,
	1533, 1525, 1, 0, 0, 0, 1533, 1534, 1, 0, 0, 0, 1534, 1535, 1, 0, 0, 0, 1535, 1571, 5, 3, 0, 0,
	1536, 1537, 5, 99, 0, 0, 1537, 1546, 5, 2, 0, 0, 1538, 1543, 3, 214, 107, 0, 1539, 1540, 5, 4,
	0, 0, 1540, 1542, 3, 214, 107, 0, 1541, 1539, 1, 0, 0, 0, 1542, 1545, 1, 0, 0, 0, 1543, 1541, 1,
	0, 0, 0, 1543, 1544, 1, 0, 0, 0, 1544, 1547, 1, 0, 0, 0, 1545, 1543, 1, 0, 0, 0, 1546, 1538, 1,
	0, 0, 0, 1546, 1547, 1, 0, 0, 0, 1547, 1548, 1, 0, 0, 0, 1548, 1571, 5, 3, 0, 0, 1549, 1550, 5,
	201, 0, 0, 1550, 1551, 5, 402, 0, 0, 1551, 1552, 5, 2, 0, 0, 1552, 1557, 3, 118, 59, 0, 1553,
	1554, 5, 4, 0, 0, 1554, 1556, 3, 118, 59, 0, 1555, 1553, 1, 0, 0, 0, 1556, 1559, 1, 0, 0, 0,
	1557, 1555, 1, 0, 0, 0, 1557, 1558, 1, 0, 0, 0, 1558, 1560, 1, 0, 0, 0, 1559, 1557, 1, 0, 0, 0,
	1560, 1561, 5, 3, 0, 0, 1561, 1571, 1, 0, 0, 0, 1562, 1567, 3, 214, 107, 0, 1563, 1564, 5, 4, 0,
	0, 1564, 1566, 3, 214, 107, 0, 1565, 1563, 1, 0, 0, 0, 1566, 1569, 1, 0, 0, 0, 1567, 1565, 1, 0,
	0, 0, 1567, 1568, 1, 0, 0, 0, 1568, 1571, 1, 0, 0, 0, 1569, 1567, 1, 0, 0, 0, 1570, 1523, 1, 0,
	0, 0, 1570, 1536, 1, 0, 0, 0, 1570, 1549, 1, 0, 0, 0, 1570, 1562, 1, 0, 0, 0, 1571, 117, 1, 0,
	0, 0, 1572, 1581, 5, 2, 0, 0, 1573, 1578, 3, 214, 107, 0, 1574, 1575, 5, 4, 0, 0, 1575, 1577, 3,
	214, 107, 0, 1576, 1574, 1, 0, 0, 0, 1577, 1580, 1, 0, 0, 0, 1578, 1576, 1, 0, 0, 0, 1578, 1579,
	1, 0, 0, 0, 1579, 1582, 1, 0, 0, 0, 1580, 1578, 1, 0, 0, 0, 1581, 1573, 1, 0, 0, 0, 1581, 1582,
	1, 0, 0, 0, 1582, 1583, 1, 0, 0, 0, 1583, 1584, 5, 3, 0, 0, 1584, 119, 1, 0, 0, 0, 1585, 1586,
	5, 204, 0, 0, 1586, 1587, 3, 218, 109, 0, 1587, 121, 1, 0, 0, 0, 1588, 1589, 5, 512, 0, 0, 1589,
	1596, 3, 124, 62, 0, 1590, 1592, 5, 4, 0, 0, 1591, 1590, 1, 0, 0, 0, 1591, 1592, 1, 0, 0, 0,
	1592, 1593, 1, 0, 0, 0, 1593, 1595, 3, 124, 62, 0, 1594, 1591, 1, 0, 0, 0, 1595, 1598, 1, 0, 0,
	0, 1596, 1594, 1, 0, 0, 0, 1596, 1597, 1, 0, 0, 0, 1597, 1599, 1, 0, 0, 0, 1598, 1596, 1, 0, 0,
	0, 1599, 1600, 5, 513, 0, 0, 1600, 123, 1, 0, 0, 0, 1601, 1615, 3, 286, 143, 0, 1602, 1603, 5,
	2, 0, 0, 1603, 1610, 3, 126, 63, 0, 1604, 1606, 5, 4, 0, 0, 1605, 1604, 1, 0, 0, 0, 1605, 1606,
	1, 0, 0, 0, 1606, 1607, 1, 0, 0, 0, 1607, 1609, 3, 126, 63, 0, 1608, 1605, 1, 0, 0, 0, 1609,
	1612, 1, 0, 0, 0, 1610, 1608, 1, 0, 0, 0, 1610, 1611, 1, 0, 0, 0, 1611, 1613, 1, 0, 0, 0, 1612,
	1610, 1, 0, 0, 0, 1613, 1614, 5, 3, 0, 0, 1614, 1616, 1, 0, 0, 0, 1615, 1602, 1, 0, 0, 0, 1615,
	1616, 1, 0, 0, 0, 1616, 125, 1, 0, 0, 0, 1617, 1623, 3, 42, 21, 0, 1618, 1621, 5, 491, 0, 0,
	1619, 1622, 3, 252, 126, 0, 1620, 1622, 3, 286, 143, 0, 1621, 1619, 1, 0, 0, 0, 1621, 1620, 1,
	0, 0, 0, 1622, 1624, 1, 0, 0, 0, 1623, 1618, 1, 0, 0, 0, 1623, 1624, 1, 0, 0, 0, 1624, 127, 1,
	0, 0, 0, 1625, 1626, 3, 170, 85, 0, 1626, 1629, 5, 491, 0, 0, 1627, 1630, 3, 214, 107, 0, 1628,
	1630, 5, 129, 0, 0, 1629, 1627, 1, 0, 0, 0, 1629, 1628, 1, 0, 0, 0, 1630, 129, 1, 0, 0, 0, 1631,
	1636, 3, 128, 64, 0, 1632, 1633, 5, 4, 0, 0, 1633, 1635, 3, 128, 64, 0, 1634, 1632, 1, 0, 0, 0,
	1635, 1638, 1, 0, 0, 0, 1636, 1634, 1, 0, 0, 0, 1636, 1637, 1, 0, 0, 0, 1637, 131, 1, 0, 0, 0,
	1638, 1636, 1, 0, 0, 0, 1639, 1640, 5, 251, 0, 0, 1640, 1641, 5, 478, 0, 0, 1641, 1642, 3, 286,
	143, 0, 1642, 1651, 5, 2, 0, 0, 1643, 1648, 3, 214, 107, 0, 1644, 1645, 5, 4, 0, 0, 1645, 1647,
	3, 214, 107, 0, 1646, 1644, 1, 0, 0, 0, 1647, 1650, 1, 0, 0, 0, 1648, 1646, 1, 0, 0, 0, 1648,
	1649, 1, 0, 0, 0, 1649, 1652, 1, 0, 0, 0, 1650, 1648, 1, 0, 0, 0, 1651, 1643, 1, 0, 0, 0, 1651,
	1652, 1, 0, 0, 0, 1652, 1653, 1, 0, 0, 0, 1653, 1654, 5, 3, 0, 0, 1654, 1655, 3, 286, 143, 0,
	1655, 1656, 5, 28, 0, 0, 1656, 1661, 3, 286, 143, 0, 1657, 1658, 5, 4, 0, 0, 1658, 1660, 3, 286,
	143, 0, 1659, 1657, 1, 0, 0, 0, 1660, 1663, 1, 0, 0, 0, 1661, 1659, 1, 0, 0, 0, 1661, 1662, 1,
	0, 0, 0, 1662, 133, 1, 0, 0, 0, 1663, 1661, 1, 0, 0, 0, 1664, 1666, 3, 136, 68, 0, 1665, 1664,
	1, 0, 0, 0, 1665, 1666, 1, 0, 0, 0, 1666, 1668, 1, 0, 0, 0, 1667, 1669, 3, 140, 70, 0, 1668,
	1667, 1, 0, 0, 0, 1668, 1669, 1, 0, 0, 0, 1669, 135, 1, 0, 0, 0, 1670, 1671, 5, 312, 0, 0, 1671,
	1672, 5, 57, 0, 0, 1672, 1677, 3, 138, 69, 0, 1673, 1674, 5, 4, 0, 0, 1674, 1676, 3, 138, 69, 0,
	1675, 1673, 1, 0, 0, 0, 1676, 1679, 1, 0, 0, 0, 1677, 1675, 1, 0, 0, 0, 1677, 1678, 1, 0, 0, 0,
	1678, 137, 1, 0, 0, 0, 1679, 1677, 1, 0, 0, 0, 1680, 1682, 3, 214, 107, 0, 1681, 1683, 7, 15, 0,
	0, 1682, 1681, 1, 0, 0, 0, 1682, 1683, 1, 0, 0, 0, 1683, 1686, 1, 0, 0, 0, 1684, 1685, 5, 303,
	0, 0, 1685, 1687, 7, 16, 0, 0, 1686, 1684, 1, 0, 0, 0, 1686, 1687, 1, 0, 0, 0, 1687, 139, 1, 0,
	0, 0, 1688, 1689, 5, 258, 0, 0, 1689, 1699, 5, 521, 0, 0, 1690, 1691, 5, 258, 0, 0, 1691, 1692,
	5, 521, 0, 0, 1692, 1693, 5, 306, 0, 0, 1693, 1699, 5, 521, 0, 0, 1694, 1695, 5, 258, 0, 0,
	1695, 1696, 5, 521, 0, 0, 1696, 1697, 5, 4, 0, 0, 1697, 1699, 5, 521, 0, 0, 1698, 1688, 1, 0, 0,
	0, 1698, 1690, 1, 0, 0, 0, 1698, 1694, 1, 0, 0, 0, 1699, 141, 1, 0, 0, 0, 1700, 1701, 5, 319, 0,
	0, 1701, 1702, 5, 57, 0, 0, 1702, 1707, 3, 214, 107, 0, 1703, 1704, 5, 4, 0, 0, 1704, 1706, 3,
	214, 107, 0, 1705, 1703, 1, 0, 0, 0, 1706, 1709, 1, 0, 0, 0, 1707, 1705, 1, 0, 0, 0, 1707, 1708,
	1, 0, 0, 0, 1708, 143, 1, 0, 0, 0, 1709, 1707, 1, 0, 0, 0, 1710, 1712, 5, 223, 0, 0, 1711, 1710,
	1, 0, 0, 0, 1711, 1712, 1, 0, 0, 0, 1712, 1735, 1, 0, 0, 0, 1713, 1735, 5, 98, 0, 0, 1714, 1716,
	5, 254, 0, 0, 1715, 1717, 5, 313, 0, 0, 1716, 1715, 1, 0, 0, 0, 1716, 1717, 1, 0, 0, 0, 1717,
	1735, 1, 0, 0, 0, 1718, 1720, 5, 380, 0, 0, 1719, 1721, 5, 313, 0, 0, 1720, 1719, 1, 0, 0, 0,
	1720, 1721, 1, 0, 0, 0, 1721, 1735, 1, 0, 0, 0, 1722, 1724, 5, 192, 0, 0, 1723, 1725, 5, 313, 0,
	0, 1724, 1723, 1, 0, 0, 0, 1724, 1725, 1, 0, 0, 0, 1725, 1735, 1, 0, 0, 0, 1726, 1727, 5, 254,
	0, 0, 1727, 1735, 5, 397, 0, 0, 1728, 1729, 5, 380, 0, 0, 1729, 1735, 5, 397, 0, 0, 1730, 1731,
	5, 254, 0, 0, 1731, 1735, 5, 24, 0, 0, 1732, 1733, 5, 380, 0, 0, 1733, 1735, 5, 24, 0, 0, 1734,
	1711, 1, 0, 0, 0, 1734, 1713, 1, 0, 0, 0, 1734, 1714, 1, 0, 0, 0, 1734, 1718, 1, 0, 0, 0, 1734,
	1722, 1, 0, 0, 0, 1734, 1726, 1, 0, 0, 0, 1734, 1728, 1, 0, 0, 0, 1734, 1730, 1, 0, 0, 0, 1734,
	1732, 1, 0, 0, 0, 1735, 145, 1, 0, 0, 0, 1736, 1737, 5, 307, 0, 0, 1737, 1741, 3, 218, 109, 0,
	1738, 1739, 5, 469, 0, 0, 1739, 1741, 3, 148, 74, 0, 1740, 1736, 1, 0, 0, 0, 1740, 1738, 1, 0,
	0, 0, 1741, 147, 1, 0, 0, 0, 1742, 1743, 5, 2, 0, 0, 1743, 1744, 3, 150, 75, 0, 1744, 1745, 5,
	3, 0, 0, 1745, 149, 1, 0, 0, 0, 1746, 1751, 3, 282, 141, 0, 1747, 1748, 5, 4, 0, 0, 1748, 1750,
	3, 282, 141, 0, 1749, 1747, 1, 0, 0, 0, 1750, 1753, 1, 0, 0, 0, 1751, 1749, 1, 0, 0, 0, 1751,
	1752, 1, 0, 0, 0, 1752, 151, 1, 0, 0, 0, 1753, 1751, 1, 0, 0, 0, 1754, 1755, 5, 514, 0, 0, 1755,
	1756, 3, 286, 143, 0, 1756, 1758, 5, 2, 0, 0, 1757, 1759, 3, 160, 80, 0, 1758, 1757, 1, 0, 0, 0,
	1758, 1759, 1, 0, 0, 0, 1759, 1760, 1, 0, 0, 0, 1760, 1761, 5, 3, 0, 0, 1761, 153, 1, 0, 0, 0,
	1762, 1764, 3, 170, 85, 0, 1763, 1765, 3, 152, 76, 0, 1764, 1763, 1, 0, 0, 0, 1764, 1765, 1, 0,
	0, 0, 1765, 1767, 1, 0, 0, 0, 1766, 1768, 3, 156, 78, 0, 1767, 1766, 1, 0, 0, 0, 1767, 1768, 1,
	0, 0, 0, 1768, 1770, 1, 0, 0, 0, 1769, 1771, 3, 250, 125, 0, 1770, 1769, 1, 0, 0, 0, 1770, 1771,
	1, 0, 0, 0, 1771, 1773, 1, 0, 0, 0, 1772, 1774, 3, 206, 103, 0, 1773, 1772, 1, 0, 0, 0, 1773,
	1774, 1, 0, 0, 0, 1774, 1775, 1, 0, 0, 0, 1775, 1777, 3, 168, 84, 0, 1776, 1778, 3, 276, 138, 0,
	1777, 1776, 1, 0, 0, 0, 1777, 1778, 1, 0, 0, 0, 1778, 1780, 1, 0, 0, 0, 1779, 1781, 3, 280, 140,
	0, 1780, 1779, 1, 0, 0, 0, 1780, 1781, 1, 0, 0, 0, 1781, 1783, 1, 0, 0, 0, 1782, 1784, 3, 112,
	56, 0, 1783, 1782, 1, 0, 0, 0, 1783, 1784, 1, 0, 0, 0, 1784, 1788, 1, 0, 0, 0, 1785, 1787, 3,
	132, 66, 0, 1786, 1785, 1, 0, 0, 0, 1787, 1790, 1, 0, 0, 0, 1788, 1786, 1, 0, 0, 0, 1788, 1789,
	1, 0, 0, 0, 1789, 1814, 1, 0, 0, 0, 1790, 1788, 1, 0, 0, 0, 1791, 1792, 5, 2, 0, 0, 1792, 1793,
	3, 74, 37, 0, 1793, 1794, 5, 3, 0, 0, 1794, 1798, 3, 168, 84, 0, 1795, 1797, 3, 132, 66, 0,
	1796, 1795, 1, 0, 0, 0, 1797, 1800, 1, 0, 0, 0, 1798, 1796, 1, 0, 0, 0, 1798, 1799, 1, 0, 0, 0,
	1799, 1814, 1, 0, 0, 0, 1800, 1798, 1, 0, 0, 0, 1801, 1802, 3, 286, 143, 0, 1802, 1804, 5, 2, 0,
	0, 1803, 1805, 3, 160, 80, 0, 1804, 1803, 1, 0, 0, 0, 1804, 1805, 1, 0, 0, 0, 1805, 1806, 1, 0,
	0, 0, 1806, 1807, 5, 3, 0, 0, 1807, 1808, 3, 168, 84, 0, 1808, 1814, 1, 0, 0, 0, 1809, 1810, 5,
	2, 0, 0, 1810, 1811, 3, 104, 52, 0, 1811, 1812, 5, 3, 0, 0, 1812, 1814, 1, 0, 0, 0, 1813, 1762,
	1, 0, 0, 0, 1813, 1791, 1, 0, 0, 0, 1813, 1801, 1, 0, 0, 0, 1813, 1809, 1, 0, 0, 0, 1814, 155,
	1, 0, 0, 0, 1815, 1816, 5, 220, 0, 0, 1816, 1817, 3, 286, 143, 0, 1817, 157, 1, 0, 0, 0, 1818,
	1819, 5, 346, 0, 0, 1819, 1820, 5, 2, 0, 0, 1820, 1821, 3, 160, 80, 0, 1821, 1822, 5, 3, 0, 0,
	1822, 159, 1, 0, 0, 0, 1823, 1828, 3, 162, 81, 0, 1824, 1825, 5, 4, 0, 0, 1825, 1827, 3, 162,
	81, 0, 1826, 1824, 1, 0, 0, 0, 1827, 1830, 1, 0, 0, 0, 1828, 1826, 1, 0, 0, 0, 1828, 1829, 1, 0,
	0, 0, 1829, 161, 1, 0, 0, 0, 1830, 1828, 1, 0, 0, 0, 1831, 1832, 3, 164, 82, 0, 1832, 1833, 5,
	491, 0, 0, 1833, 1834, 3, 166, 83, 0, 1834, 163, 1, 0, 0, 0, 1835, 1838, 3, 286, 143, 0, 1836,
	1838, 3, 252, 126, 0, 1837, 1835, 1, 0, 0, 0, 1837, 1836, 1, 0, 0, 0, 1838, 165, 1, 0, 0, 0,
	1839, 1842, 3, 286, 143, 0, 1840, 1842, 3, 252, 126, 0, 1841, 1839, 1, 0, 0, 0, 1841, 1840, 1,
	0, 0, 0, 1842, 167, 1, 0, 0, 0, 1843, 1845, 5, 28, 0, 0, 1844, 1843, 1, 0, 0, 0, 1844, 1845, 1,
	0, 0, 0, 1845, 1846, 1, 0, 0, 0, 1846, 1848, 3, 288, 144, 0, 1847, 1849, 3, 148, 74, 0, 1848,
	1847, 1, 0, 0, 0, 1848, 1849, 1, 0, 0, 0, 1849, 1851, 1, 0, 0, 0, 1850, 1844, 1, 0, 0, 0, 1850,
	1851, 1, 0, 0, 0, 1851, 169, 1, 0, 0, 0, 1852, 1857, 3, 282, 141, 0, 1853, 1854, 5, 5, 0, 0,
	1854, 1856, 3, 282, 141, 0, 1855, 1853, 1, 0, 0, 0, 1856, 1859, 1, 0, 0, 0, 1857, 1855, 1, 0, 0,
	0, 1857, 1858, 1, 0, 0, 0, 1858, 171, 1, 0, 0, 0, 1859, 1857, 1, 0, 0, 0, 1860, 1865, 3, 174,
	87, 0, 1861, 1862, 5, 4, 0, 0, 1862, 1864, 3, 174, 87, 0, 1863, 1861, 1, 0, 0, 0, 1864, 1867, 1,
	0, 0, 0, 1865, 1863, 1, 0, 0, 0, 1865, 1866, 1, 0, 0, 0, 1866, 173, 1, 0, 0, 0, 1867, 1865, 1,
	0, 0, 0, 1868, 1871, 3, 286, 143, 0, 1869, 1870, 5, 79, 0, 0, 1870, 1872, 5, 516, 0, 0, 1871,
	1869, 1, 0, 0, 0, 1871, 1872, 1, 0, 0, 0, 1872, 175, 1, 0, 0, 0, 1873, 1878, 3, 178, 89, 0,
	1874, 1875, 5, 4, 0, 0, 1875, 1877, 3, 178, 89, 0, 1876, 1874, 1, 0, 0, 0, 1877, 1880, 1, 0, 0,
	0, 1878, 1876, 1, 0, 0, 0, 1878, 1879, 1, 0, 0, 0, 1879, 177, 1, 0, 0, 0, 1880, 1878, 1, 0, 0,
	0, 1881, 1882, 3, 286, 143, 0, 1882, 1884, 3, 266, 133, 0, 1883, 1885, 5, 245, 0, 0, 1884, 1883,
	1, 0, 0, 0, 1884, 1885, 1, 0, 0, 0, 1885, 1887, 1, 0, 0, 0, 1886, 1888, 3, 204, 102, 0, 1887,
	1886, 1, 0, 0, 0, 1887, 1888, 1, 0, 0, 0, 1888, 1893, 1, 0, 0, 0, 1889, 1891, 5, 301, 0, 0,
	1890, 1889, 1, 0, 0, 0, 1890, 1891, 1, 0, 0, 0, 1891, 1892, 1, 0, 0, 0, 1892, 1894, 5, 302, 0,
	0, 1893, 1890, 1, 0, 0, 0, 1893, 1894, 1, 0, 0, 0, 1894, 1902, 1, 0, 0, 0, 1895, 1900, 5, 33, 0,
	0, 1896, 1897, 5, 2, 0, 0, 1897, 1898, 3, 292, 146, 0, 1898, 1899, 5, 3, 0, 0, 1899, 1901, 1, 0,
	0, 0, 1900, 1896, 1, 0, 0, 0, 1900, 1901, 1, 0, 0, 0, 1901, 1903, 1, 0, 0, 0, 1902, 1895, 1, 0,
	0, 0, 1902, 1903, 1, 0, 0, 0, 1903, 1919, 1, 0, 0, 0, 1904, 1917, 5, 129, 0, 0, 1905, 1918, 5,
	302, 0, 0, 1906, 1918, 5, 521, 0, 0, 1907, 1918, 5, 523, 0, 0, 1908, 1918, 5, 516, 0, 0, 1909,
	1918, 5, 102, 0, 0, 1910, 1915, 5, 104, 0, 0, 1911, 1912, 5, 2, 0, 0, 1912, 1913, 3, 292, 146,
	0, 1913, 1914, 5, 3, 0, 0, 1914, 1916, 1, 0, 0, 0, 1915, 1911, 1, 0, 0, 0, 1915, 1916, 1, 0, 0,
	0, 1916, 1918, 1, 0, 0, 0, 1917, 1905, 1, 0, 0, 0, 1917, 1906, 1, 0, 0, 0, 1917, 1907, 1, 0, 0,
	0, 1917, 1908, 1, 0, 0, 0, 1917, 1909, 1, 0, 0, 0, 1917, 1910, 1, 0, 0, 0, 1918, 1920, 1, 0, 0,
	0, 1919, 1904, 1, 0, 0, 0, 1919, 1920, 1, 0, 0, 0, 1920, 1930, 1, 0, 0, 0, 1921, 1922, 5, 307,
	0, 0, 1922, 1923, 5, 466, 0, 0, 1923, 1928, 5, 104, 0, 0, 1924, 1925, 5, 2, 0, 0, 1925, 1926, 3,
	292, 146, 0, 1926, 1927, 5, 3, 0, 0, 1927, 1929, 1, 0, 0, 0, 1928, 1924, 1, 0, 0, 0, 1928, 1929,
	1, 0, 0, 0, 1929, 1931, 1, 0, 0, 0, 1930, 1921, 1, 0, 0, 0, 1930, 1931, 1, 0, 0, 0, 1931, 1934,
	1, 0, 0, 0, 1932, 1933, 5, 79, 0, 0, 1933, 1935, 5, 516, 0, 0, 1934, 1932, 1, 0, 0, 0, 1934,
	1935, 1, 0, 0, 0, 1935, 179, 1, 0, 0, 0, 1936, 1941, 3, 182, 91, 0, 1937, 1938, 5, 4, 0, 0,
	1938, 1940, 3, 182, 91, 0, 1939, 1937, 1, 0, 0, 0, 1940, 1943, 1, 0, 0, 0, 1941, 1939, 1, 0, 0,
	0, 1941, 1942, 1, 0, 0, 0, 1942, 181, 1, 0, 0, 0, 1943, 1941, 1, 0, 0, 0, 1944, 1945, 5, 220, 0,
	0, 1945, 1946, 3, 286, 143, 0, 1946, 1949, 3, 148, 74, 0, 1947, 1948, 5, 469, 0, 0, 1948, 1950,
	7, 17, 0, 0, 1949, 1947, 1, 0, 0, 0, 1949, 1950, 1, 0, 0, 0, 1950, 1956, 1, 0, 0, 0, 1951, 1952,
	5, 346, 0, 0, 1952, 1953, 5, 2, 0, 0, 1953, 1954, 3, 160, 80, 0, 1954, 1955, 5, 3, 0, 0, 1955,
	1957, 1, 0, 0, 0, 1956, 1951, 1, 0, 0, 0, 1956, 1957, 1, 0, 0, 0, 1957, 1960, 1, 0, 0, 0, 1958,
	1959, 5, 79, 0, 0, 1959, 1961, 5, 516, 0, 0, 1960, 1958, 1, 0, 0, 0, 1960, 1961, 1, 0, 0, 0,
	1961, 183, 1, 0, 0, 0, 1962, 1967, 3, 186, 93, 0, 1963, 1964, 5, 4, 0, 0, 1964, 1966, 3, 186,
	93, 0, 1965, 1963, 1, 0, 0, 0, 1966, 1969, 1, 0, 0, 0, 1967, 1965, 1, 0, 0, 0, 1967, 1968, 1, 0,
	0, 0, 1968, 185, 1, 0, 0, 0, 1969, 1967, 1, 0, 0, 0, 1970, 1975, 3, 188, 94, 0, 1971, 1975, 3,
	190, 95, 0, 1972, 1975, 3, 192, 96, 0, 1973, 1975, 3, 194, 97, 0, 1974, 1970, 1, 0, 0, 0, 1974,
	1971, 1, 0, 0, 0, 1974, 1972, 1, 0, 0, 0, 1974, 1973, 1, 0, 0, 0, 1975, 1980, 1, 0, 0, 0, 1976,
	1977, 5, 2, 0, 0, 1977, 1978, 3, 160, 80, 0, 1978, 1979, 5, 3, 0, 0, 1979, 1981, 1, 0, 0, 0,
	1980, 1976, 1, 0, 0, 0, 1980, 1981, 1, 0, 0, 0, 1981, 187, 1, 0, 0, 0, 1982, 1986, 5, 319, 0, 0,
	1983, 1984, 5, 215, 0, 0, 1984, 1985, 5, 301, 0, 0, 1985, 1987, 5, 166, 0, 0, 1986, 1983, 1, 0,
	0, 0, 1986, 1987, 1, 0, 0, 0, 1987, 1988, 1, 0, 0, 0, 1988, 1989, 3, 286, 143, 0, 1989, 1990, 5,
	471, 0, 0, 1990, 1991, 5, 255, 0, 0, 1991, 1994, 5, 440, 0, 0, 1992, 1995, 5, 281, 0, 0, 1993,
	1995, 3, 196, 98, 0, 1994, 1992, 1, 0, 0, 0, 1994, 1993, 1, 0, 0, 0, 1995, 189, 1, 0, 0, 0,
	1996, 2000, 5, 319, 0, 0, 1997, 1998, 5, 215, 0, 0, 1998, 1999, 5, 301, 0, 0, 1999, 2001, 5,
	166, 0, 0, 2000, 1997, 1, 0, 0, 0, 2000, 2001, 1, 0, 0, 0, 2001, 2002, 1, 0, 0, 0, 2002, 2003,
	3, 286, 143, 0, 2003, 2004, 5, 471, 0, 0, 2004, 2005, 5, 6, 0, 0, 2005, 2006, 3, 196, 98, 0,
	2006, 2007, 5, 4, 0, 0, 2007, 2008, 3, 196, 98, 0, 2008, 2009, 5, 3, 0, 0, 2009, 191, 1, 0, 0,
	0, 2010, 2011, 5, 189, 0, 0, 2011, 2012, 3, 196, 98, 0, 2012, 2013, 5, 447, 0, 0, 2013, 2014, 3,
	196, 98, 0, 2014, 2015, 5, 230, 0, 0, 2015, 2017, 5, 521, 0, 0, 2016, 2018, 3, 228, 114, 0,
	2017, 2016, 1, 0, 0, 0, 2017, 2018, 1, 0, 0, 0, 2018, 193, 1, 0, 0, 0, 2019, 2023, 5, 319, 0, 0,
	2020, 2021, 5, 215, 0, 0, 2021, 2022, 5, 301, 0, 0, 2022, 2024, 5, 166, 0, 0, 2023, 2020, 1, 0,
	0, 0, 2023, 2024, 1, 0, 0, 0, 2024, 2025, 1, 0, 0, 0, 2025, 2042, 3, 286, 143, 0, 2026, 2027, 5,
	471, 0, 0, 2027, 2040, 5, 218, 0, 0, 2028, 2029, 5, 2, 0, 0, 2029, 2034, 3, 196, 98, 0, 2030,
	2031, 5, 4, 0, 0, 2031, 2033, 3, 196, 98, 0, 2032, 2030, 1, 0, 0, 0, 2033, 2036, 1, 0, 0, 0,
	2034, 2032, 1, 0, 0, 0, 2034, 2035, 1, 0, 0, 0, 2035, 2037, 1, 0, 0, 0, 2036, 2034, 1, 0, 0, 0,
	2037, 2038, 5, 3, 0, 0, 2038, 2041, 1, 0, 0, 0, 2039, 2041, 3, 196, 98, 0, 2040, 2028, 1, 0, 0,
	0, 2040, 2039, 1, 0, 0, 0, 2041, 2043, 1, 0, 0, 0, 2042, 2026, 1, 0, 0, 0, 2042, 2043, 1, 0, 0,
	0, 2043, 195, 1, 0, 0, 0, 2044, 2045, 5, 2, 0, 0, 2045, 2050, 3, 198, 99, 0, 2046, 2047, 5, 4,
	0, 0, 2047, 2049, 3, 198, 99, 0, 2048, 2046, 1, 0, 0, 0, 2049, 2052, 1, 0, 0, 0, 2050, 2048, 1,
	0, 0, 0, 2050, 2051, 1, 0, 0, 0, 2051, 2053, 1, 0, 0, 0, 2052, 2050, 1, 0, 0, 0, 2053, 2054, 5,
	3, 0, 0, 2054, 197, 1, 0, 0, 0, 2055, 2056, 7, 18, 0, 0, 2056, 199, 1, 0, 0, 0, 2057, 2062, 3,
	202, 101, 0, 2058, 2059, 5, 4, 0, 0, 2059, 2061, 3, 202, 101, 0, 2060, 2058, 1, 0, 0, 0, 2061,
	2064, 1, 0, 0, 0, 2062, 2060, 1, 0, 0, 0, 2062, 2063, 1, 0, 0, 0, 2063, 201, 1, 0, 0, 0, 2064,
	2062, 1, 0, 0, 0, 2065, 2066, 3, 286, 143, 0, 2066, 2070, 3, 148, 74, 0, 2067, 2068, 5, 149, 0,
	0, 2068, 2069, 5, 245, 0, 0, 2069, 2071, 3, 148, 74, 0, 2070, 2067, 1, 0, 0, 0, 2070, 2071, 1,
	0, 0, 0, 2071, 2073, 1, 0, 0, 0, 2072, 2074, 3, 158, 79, 0, 2073, 2072, 1, 0, 0, 0, 2073, 2074,
	1, 0, 0, 0, 2074, 203, 1, 0, 0, 0, 2075, 2076, 7, 19, 0, 0, 2076, 205, 1, 0, 0, 0, 2077, 2078,
	5, 433, 0, 0, 2078, 2079, 5, 2, 0, 0, 2079, 2084, 5, 521, 0, 0, 2080, 2081, 5, 4, 0, 0, 2081,
	2083, 5, 521, 0, 0, 2082, 2080, 1, 0, 0, 0, 2083, 2086, 1, 0, 0, 0, 2084, 2082, 1, 0, 0, 0,
	2084, 2085, 1, 0, 0, 0, 2085, 2087, 1, 0, 0, 0, 2086, 2084, 1, 0, 0, 0, 2087, 2088, 5, 3, 0, 0,
	2088, 207, 1, 0, 0, 0, 2089, 2090, 5, 471, 0, 0, 2090, 2095, 3, 220, 110, 0, 2091, 2092, 5, 4,
	0, 0, 2092, 2094, 3, 220, 110, 0, 2093, 2091, 1, 0, 0, 0, 2094, 2097, 1, 0, 0, 0, 2095, 2093, 1,
	0, 0, 0, 2095, 2096, 1, 0, 0, 0, 2096, 209, 1, 0, 0, 0, 2097, 2095, 1, 0, 0, 0, 2098, 2103, 3,
	214, 107, 0, 2099, 2101, 5, 28, 0, 0, 2100, 2099, 1, 0, 0, 0, 2100, 2101, 1, 0, 0, 0, 2101,
	2102, 1, 0, 0, 0, 2102, 2104, 3, 42, 21, 0, 2103, 2100, 1, 0, 0, 0, 2103, 2104, 1, 0, 0, 0,
	2104, 211, 1, 0, 0, 0, 2105, 2110, 3, 210, 105, 0, 2106, 2107, 5, 4, 0, 0, 2107, 2109, 3, 210,
	105, 0, 2108, 2106, 1, 0, 0, 0, 2109, 2112, 1, 0, 0, 0, 2110, 2108, 1, 0, 0, 0, 2110, 2111, 1,
	0, 0, 0, 2111, 213, 1, 0, 0, 0, 2112, 2110, 1, 0, 0, 0, 2113, 2116, 3, 218, 109, 0, 2114, 2116,
	3, 216, 108, 0, 2115, 2113, 1, 0, 0, 0, 2115, 2114, 1, 0, 0, 0, 2116, 215, 1, 0, 0, 0, 2117,
	2118, 3, 282, 141, 0, 2118, 2119, 5, 511, 0, 0, 2119, 2120, 3, 218, 109, 0, 2120, 2134, 1, 0, 0,
	0, 2121, 2122, 5, 2, 0, 0, 2122, 2125, 3, 282, 141, 0, 2123, 2124, 5, 4, 0, 0, 2124, 2126, 3,
	282, 141, 0, 2125, 2123, 1, 0, 0, 0, 2126, 2127, 1, 0, 0, 0, 2127, 2125, 1, 0, 0, 0, 2127, 2128,
	1, 0, 0, 0, 2128, 2129, 1, 0, 0, 0, 2129, 2130, 5, 3, 0, 0, 2130, 2131, 5, 511, 0, 0, 2131,
	2132, 3, 218, 109, 0, 2132, 2134, 1, 0, 0, 0, 2133, 2117, 1, 0, 0, 0, 2133, 2121, 1, 0, 0, 0,
	2134, 217, 1, 0, 0, 0, 2135, 2136, 6, 109, -1, 0, 2136, 2137, 7, 20, 0, 0, 2137, 2158, 3, 218,
	109, 9, 2138, 2139, 5, 166, 0, 0, 2139, 2140, 5, 2, 0, 0, 2140, 2141, 3, 74, 37, 0, 2141, 2142,
	5, 3, 0, 0, 2142, 2158, 1, 0, 0, 0, 2143, 2144, 7, 21, 0, 0, 2144, 2145, 5, 2, 0, 0, 2145, 2146,
	3, 226, 113, 0, 2146, 2147, 5, 3, 0, 0, 2147, 2158, 1, 0, 0, 0, 2148, 2149, 5, 236, 0, 0, 2149,
	2150, 5, 2, 0, 0, 2150, 2151, 3, 226, 113, 0, 2151, 2152, 5, 3, 0, 0, 2152, 2158, 1, 0, 0, 0,
	2153, 2155, 3, 226, 113, 0, 2154, 2156, 3, 224, 112, 0, 2155, 2154, 1, 0, 0, 0, 2155, 2156, 1,
	0, 0, 0, 2156, 2158, 1, 0, 0, 0, 2157, 2135, 1, 0, 0, 0, 2157, 2138, 1, 0, 0, 0, 2157, 2143, 1,
	0, 0, 0, 2157, 2148, 1, 0, 0, 0, 2157, 2153, 1, 0, 0, 0, 2158, 2173, 1, 0, 0, 0, 2159, 2160, 10,
	4, 0, 0, 2160, 2161, 7, 22, 0, 0, 2161, 2172, 3, 218, 109, 5, 2162, 2163, 10, 3, 0, 0, 2163,
	2164, 5, 489, 0, 0, 2164, 2172, 3, 218, 109, 4, 2165, 2166, 10, 2, 0, 0, 2166, 2167, 5, 311, 0,
	0, 2167, 2172, 3, 218, 109, 3, 2168, 2169, 10, 1, 0, 0, 2169, 2170, 5, 508, 0, 0, 2170, 2172, 3,
	218, 109, 2, 2171, 2159, 1, 0, 0, 0, 2171, 2162, 1, 0, 0, 0, 2171, 2165, 1, 0, 0, 0, 2171, 2168,
	1, 0, 0, 0, 2172, 2175, 1, 0, 0, 0, 2173, 2171, 1, 0, 0, 0, 2173, 2174, 1, 0, 0, 0, 2174, 219,
	1, 0, 0, 0, 2175, 2173, 1, 0, 0, 0, 2176, 2185, 5, 2, 0, 0, 2177, 2182, 3, 222, 111, 0, 2178,
	2179, 5, 4, 0, 0, 2179, 2181, 3, 222, 111, 0, 2180, 2178, 1, 0, 0, 0, 2181, 2184, 1, 0, 0, 0,
	2182, 2180, 1, 0, 0, 0, 2182, 2183, 1, 0, 0, 0, 2183, 2186, 1, 0, 0, 0, 2184, 2182, 1, 0, 0, 0,
	2185, 2177, 1, 0, 0, 0, 2185, 2186, 1, 0, 0, 0, 2186, 2187, 1, 0, 0, 0, 2187, 2188, 5, 3, 0, 0,
	2188, 221, 1, 0, 0, 0, 2189, 2192, 3, 210, 105, 0, 2190, 2192, 5, 129, 0, 0, 2191, 2189, 1, 0,
	0, 0, 2191, 2190, 1, 0, 0, 0, 2192, 223, 1, 0, 0, 0, 2193, 2195, 5, 301, 0, 0, 2194, 2193, 1, 0,
	0, 0, 2194, 2195, 1, 0, 0, 0, 2195, 2196, 1, 0, 0, 0, 2196, 2197, 5, 39, 0, 0, 2197, 2198, 3,
	226, 113, 0, 2198, 2199, 5, 23, 0, 0, 2199, 2200, 3, 226, 113, 0, 2200, 2240, 1, 0, 0, 0, 2201,
	2203, 5, 301, 0, 0, 2202, 2201, 1, 0, 0, 0, 2202, 2203, 1, 0, 0, 0, 2203, 2204, 1, 0, 0, 0,
	2204, 2205, 7, 23, 0, 0, 2205, 2240, 3, 226, 113, 0, 2206, 2208, 5, 301, 0, 0, 2207, 2206, 1, 0,
	0, 0, 2207, 2208, 1, 0, 0, 0, 2208, 2209, 1, 0, 0, 0, 2209, 2210, 7, 24, 0, 0, 2210, 2240, 3,
	226, 113, 0, 2211, 2213, 5, 301, 0, 0, 2212, 2211, 1, 0, 0, 0, 2212, 2213, 1, 0, 0, 0, 2213,
	2214, 1, 0, 0, 0, 2214, 2215, 5, 218, 0, 0, 2215, 2216, 5, 2, 0, 0, 2216, 2217, 3, 74, 37, 0,
	2217, 2218, 5, 3, 0, 0, 2218, 2240, 1, 0, 0, 0, 2219, 2221, 5, 301, 0, 0, 2220, 2219, 1, 0, 0,
	0, 2220, 2221, 1, 0, 0, 0, 2221, 2222, 1, 0, 0, 0, 2222, 2223, 5, 218, 0, 0, 2223, 2224, 5, 2,
	0, 0, 2224, 2229, 3, 214, 107, 0, 2225, 2226, 5, 4, 0, 0, 2226, 2228, 3, 214, 107, 0, 2227,
	2225, 1, 0, 0, 0, 2228, 2231, 1, 0, 0, 0, 2229, 2227, 1, 0, 0, 0, 2229, 2230, 1, 0, 0, 0, 2230,
	2232, 1, 0, 0, 0, 2231, 2229, 1, 0, 0, 0, 2232, 2233, 5, 3, 0, 0, 2233, 2240, 1, 0, 0, 0, 2234,
	2236, 5, 235, 0, 0, 2235, 2237, 5, 301, 0, 0, 2236, 2235, 1, 0, 0, 0, 2236, 2237, 1, 0, 0, 0,
	2237, 2238, 1, 0, 0, 0, 2238, 2240, 5, 302, 0, 0, 2239, 2194, 1, 0, 0, 0, 2239, 2202, 1, 0, 0,
	0, 2239, 2207, 1, 0, 0, 0, 2239, 2212, 1, 0, 0, 0, 2239, 2220, 1, 0, 0, 0, 2239, 2234, 1, 0, 0,
	0, 2240, 225, 1, 0, 0, 0, 2241, 2242, 6, 113, -1, 0, 2242, 2253, 3, 230, 115, 0, 2243, 2244, 7,
	25, 0, 0, 2244, 2253, 3, 226, 113, 5, 2245, 2246, 7, 26, 0, 0, 2246, 2247, 5, 2, 0, 0, 2247,
	2248, 3, 226, 113, 0, 2248, 2249, 5, 4, 0, 0, 2249, 2250, 3, 226, 113, 0, 2250, 2251, 5, 3, 0,
	0, 2251, 2253, 1, 0, 0, 0, 2252, 2241, 1, 0, 0, 0, 2252, 2243, 1, 0, 0, 0, 2252, 2245, 1, 0, 0,
	0, 2253, 2266, 1, 0, 0, 0, 2254, 2255, 10, 4, 0, 0, 2255, 2256, 7, 27, 0, 0, 2256, 2265, 3, 226,
	113, 5, 2257, 2258, 10, 3, 0, 0, 2258, 2259, 7, 28, 0, 0, 2259, 2265, 3, 226, 113, 4, 2260,
	2261, 10, 2, 0, 0, 2261, 2262, 3, 254, 127, 0, 2262, 2263, 3, 226, 113, 3, 2263, 2265, 1, 0, 0,
	0, 2264, 2254, 1, 0, 0, 0, 2264, 2257, 1, 0, 0, 0, 2264, 2260, 1, 0, 0, 0, 2265, 2268, 1, 0, 0,
	0, 2266, 2264, 1, 0, 0, 0, 2266, 2267, 1, 0, 0, 0, 2267, 227, 1, 0, 0, 0, 2268, 2266, 1, 0, 0,
	0, 2269, 2270, 7, 29, 0, 0, 2270, 229, 1, 0, 0, 0, 2271, 2272, 6, 115, -1, 0, 2272, 2273, 7, 30,
	0, 0, 2273, 2274, 5, 2, 0, 0, 2274, 2275, 3, 228, 114, 0, 2275, 2276, 5, 4, 0, 0, 2276, 2277, 3,
	226, 113, 0, 2277, 2278, 5, 4, 0, 0, 2278, 2279, 3, 226, 113, 0, 2279, 2280, 5, 3, 0, 0, 2280,
	2471, 1, 0, 0, 0, 2281, 2282, 7, 31, 0, 0, 2282, 2283, 5, 2, 0, 0, 2283, 2284, 3, 228, 114, 0,
	2284, 2285, 5, 4, 0, 0, 2285, 2286, 3, 226, 113, 0, 2286, 2287, 5, 4, 0, 0, 2287, 2288, 3, 226,
	113, 0, 2288, 2289, 5, 3, 0, 0, 2289, 2471, 1, 0, 0, 0, 2290, 2291, 7, 32, 0, 0, 2291, 2292, 5,
	2, 0, 0, 2292, 2293, 3, 226, 113, 0, 2293, 2299, 5, 4, 0, 0, 2294, 2295, 5, 230, 0, 0, 2295,
	2296, 3, 226, 113, 0, 2296, 2297, 3, 228, 114, 0, 2297, 2300, 1, 0, 0, 0, 2298, 2300, 3, 226,
	113, 0, 2299, 2294, 1, 0, 0, 0, 2299, 2298, 1, 0, 0, 0, 2300, 2301, 1, 0, 0, 0, 2301, 2302, 5,
	3, 0, 0, 2302, 2471, 1, 0, 0, 0, 2303, 2304, 7, 33, 0, 0, 2304, 2305, 5, 2, 0, 0, 2305, 2306, 3,
	226, 113, 0, 2306, 2312, 5, 4, 0, 0, 2307, 2308, 5, 230, 0, 0, 2308, 2309, 3, 226, 113, 0, 2309,
	2310, 3, 228, 114, 0, 2310, 2313, 1, 0, 0, 0, 2311, 2313, 3, 226, 113, 0, 2312, 2307, 1, 0, 0,
	0, 2312, 2311, 1, 0, 0, 0, 2313, 2314, 1, 0, 0, 0, 2314, 2315, 5, 3, 0, 0, 2315, 2471, 1, 0, 0,
	0, 2316, 2317, 5, 113, 0, 0, 2317, 2318, 5, 2, 0, 0, 2318, 2319, 3, 226, 113, 0, 2319, 2325, 5,
	4, 0, 0, 2320, 2321, 5, 230, 0, 0, 2321, 2322, 3, 226, 113, 0, 2322, 2323, 3, 228, 114, 0, 2323,
	2326, 1, 0, 0, 0, 2324, 2326, 3, 226, 113, 0, 2325, 2320, 1, 0, 0, 0, 2325, 2324, 1, 0, 0, 0,
	2326, 2327, 1, 0, 0, 0, 2327, 2328, 5, 3, 0, 0, 2328, 2471, 1, 0, 0, 0, 2329, 2330, 5, 111, 0,
	0, 2330, 2331, 5, 2, 0, 0, 2331, 2332, 3, 226, 113, 0, 2332, 2338, 5, 4, 0, 0, 2333, 2334, 5,
	230, 0, 0, 2334, 2335, 3, 226, 113, 0, 2335, 2336, 3, 228, 114, 0, 2336, 2339, 1, 0, 0, 0, 2337,
	2339, 3, 226, 113, 0, 2338, 2333, 1, 0, 0, 0, 2338, 2337, 1, 0, 0, 0, 2339, 2340, 1, 0, 0, 0,
	2340, 2341, 5, 3, 0, 0, 2341, 2471, 1, 0, 0, 0, 2342, 2343, 7, 34, 0, 0, 2343, 2344, 5, 2, 0, 0,
	2344, 2345, 3, 226, 113, 0, 2345, 2346, 5, 4, 0, 0, 2346, 2347, 3, 226, 113, 0, 2347, 2353, 5,
	4, 0, 0, 2348, 2349, 5, 230, 0, 0, 2349, 2350, 3, 226, 113, 0, 2350, 2351, 3, 228, 114, 0, 2351,
	2354, 1, 0, 0, 0, 2352, 2354, 3, 226, 113, 0, 2353, 2348, 1, 0, 0, 0, 2353, 2352, 1, 0, 0, 0,
	2354, 2355, 1, 0, 0, 0, 2355, 2356, 5, 3, 0, 0, 2356, 2471, 1, 0, 0, 0, 2357, 2471, 5, 102, 0,
	0, 2358, 2471, 5, 103, 0, 0, 2359, 2471, 5, 104, 0, 0, 2360, 2471, 5, 264, 0, 0, 2361, 2471, 5,
	265, 0, 0, 2362, 2471, 5, 105, 0, 0, 2363, 2365, 5, 62, 0, 0, 2364, 2366, 3, 258, 129, 0, 2365,
	2364, 1, 0, 0, 0, 2366, 2367, 1, 0, 0, 0, 2367, 2365, 1, 0, 0, 0, 2367, 2368, 1, 0, 0, 0, 2368,
	2371, 1, 0, 0, 0, 2369, 2370, 5, 151, 0, 0, 2370, 2372, 3, 214, 107, 0, 2371, 2369, 1, 0, 0, 0,
	2371, 2372, 1, 0, 0, 0, 2372, 2373, 1, 0, 0, 0, 2373, 2374, 5, 155, 0, 0, 2374, 2471, 1, 0, 0,
	0, 2375, 2376, 5, 62, 0, 0, 2376, 2378, 3, 214, 107, 0, 2377, 2379, 3, 258, 129, 0, 2378, 2377,
	1, 0, 0, 0, 2379, 2380, 1, 0, 0, 0, 2380, 2378, 1, 0, 0, 0, 2380, 2381, 1, 0, 0, 0, 2381, 2384,
	1, 0, 0, 0, 2382, 2383, 5, 151, 0, 0, 2383, 2385, 3, 214, 107, 0, 2384, 2382, 1, 0, 0, 0, 2384,
	2385, 1, 0, 0, 0, 2385, 2386, 1, 0, 0, 0, 2386, 2387, 5, 155, 0, 0, 2387, 2471, 1, 0, 0, 0,
	2388, 2389, 5, 63, 0, 0, 2389, 2390, 5, 2, 0, 0, 2390, 2391, 3, 214, 107, 0, 2391, 2392, 5, 28,
	0, 0, 2392, 2393, 3, 232, 116, 0, 2393, 2394, 5, 3, 0, 0, 2394, 2471, 1, 0, 0, 0, 2395, 2471, 3,
	252, 126, 0, 2396, 2471, 3, 260, 130, 0, 2397, 2471, 5, 500, 0, 0, 2398, 2399, 3, 248, 124, 0,
	2399, 2400, 5, 5, 0, 0, 2400, 2401, 5, 500, 0, 0, 2401, 2471, 1, 0, 0, 0, 2402, 2403, 5, 67, 0,
	0, 2403, 2404, 5, 2, 0, 0, 2404, 2409, 3, 214, 107, 0, 2405, 2406, 5, 4, 0, 0, 2406, 2408, 3,
	214, 107, 0, 2407, 2405, 1, 0, 0, 0, 2408, 2411, 1, 0, 0, 0, 2409, 2407, 1, 0, 0, 0, 2409, 2410,
	1, 0, 0, 0, 2410, 2414, 1, 0, 0, 0, 2411, 2409, 1, 0, 0, 0, 2412, 2413, 5, 469, 0, 0, 2413,
	2415, 3, 42, 21, 0, 2414, 2412, 1, 0, 0, 0, 2414, 2415, 1, 0, 0, 0, 2415, 2416, 1, 0, 0, 0,
	2416, 2417, 5, 3, 0, 0, 2417, 2471, 1, 0, 0, 0, 2418, 2419, 5, 91, 0, 0, 2419, 2420, 5, 2, 0, 0,
	2420, 2421, 3, 214, 107, 0, 2421, 2422, 5, 469, 0, 0, 2422, 2423, 3, 42, 21, 0, 2423, 2424, 5,
	3, 0, 0, 2424, 2471, 1, 0, 0, 0, 2425, 2426, 5, 91, 0, 0, 2426, 2427, 5, 2, 0, 0, 2427, 2428, 3,
	214, 107, 0, 2428, 2429, 5, 4, 0, 0, 2429, 2430, 3, 232, 116, 0, 2430, 2431, 5, 3, 0, 0, 2431,
	2471, 1, 0, 0, 0, 2432, 2471, 3, 234, 117, 0, 2433, 2434, 5, 2, 0, 0, 2434, 2435, 3, 74, 37, 0,
	2435, 2436, 5, 3, 0, 0, 2436, 2471, 1, 0, 0, 0, 2437, 2438, 5, 514, 0, 0, 2438, 2471, 3, 42, 21,
	0, 2439, 2442, 5, 515, 0, 0, 2440, 2441, 7, 35, 0, 0, 2441, 2443, 5, 5, 0, 0, 2442, 2440, 1, 0,
	0, 0, 2442, 2443, 1, 0, 0, 0, 2443, 2444, 1, 0, 0, 0, 2444, 2471, 3, 286, 143, 0, 2445, 2447, 5,
	42, 0, 0, 2446, 2445, 1, 0, 0, 0, 2446, 2447, 1, 0, 0, 0, 2447, 2448, 1, 0, 0, 0, 2448, 2471, 3,
	286, 143, 0, 2449, 2450, 5, 2, 0, 0, 2450, 2451, 3, 214, 107, 0, 2451, 2452, 5, 3, 0, 0, 2452,
	2471, 1, 0, 0, 0, 2453, 2457, 5, 245, 0, 0, 2454, 2455, 3, 286, 143, 0, 2455, 2456, 5, 5, 0, 0,
	2456, 2458, 1, 0, 0, 0, 2457, 2454, 1, 0, 0, 0, 2457, 2458, 1, 0, 0, 0, 2458, 2459, 1, 0, 0, 0,
	2459, 2471, 3, 286, 143, 0, 2460, 2461, 5, 172, 0, 0, 2461, 2462, 5, 2, 0, 0, 2462, 2463, 3,
	286, 143, 0, 2463, 2465, 5, 189, 0, 0, 2464, 2466, 7, 36, 0, 0, 2465, 2464, 1, 0, 0, 0, 2465,
	2466, 1, 0, 0, 0, 2466, 2467, 1, 0, 0, 0, 2467, 2468, 3, 226, 113, 0, 2468, 2469, 5, 3, 0, 0,
	2469, 2471, 1, 0, 0, 0, 2470, 2271, 1, 0, 0, 0, 2470, 2281, 1, 0, 0, 0, 2470, 2290, 1, 0, 0, 0,
	2470, 2303, 1, 0, 0, 0, 2470, 2316, 1, 0, 0, 0, 2470, 2329, 1, 0, 0, 0, 2470, 2342, 1, 0, 0, 0,
	2470, 2357, 1, 0, 0, 0, 2470, 2358, 1, 0, 0, 0, 2470, 2359, 1, 0, 0, 0, 2470, 2360, 1, 0, 0, 0,
	2470, 2361, 1, 0, 0, 0, 2470, 2362, 1, 0, 0, 0, 2470, 2363, 1, 0, 0, 0, 2470, 2375, 1, 0, 0, 0,
	2470, 2388, 1, 0, 0, 0, 2470, 2395, 1, 0, 0, 0, 2470, 2396, 1, 0, 0, 0, 2470, 2397, 1, 0, 0, 0,
	2470, 2398, 1, 0, 0, 0, 2470, 2402, 1, 0, 0, 0, 2470, 2418, 1, 0, 0, 0, 2470, 2425, 1, 0, 0, 0,
	2470, 2432, 1, 0, 0, 0, 2470, 2433, 1, 0, 0, 0, 2470, 2437, 1, 0, 0, 0, 2470, 2439, 1, 0, 0, 0,
	2470, 2446, 1, 0, 0, 0, 2470, 2449, 1, 0, 0, 0, 2470, 2453, 1, 0, 0, 0, 2470, 2460, 1, 0, 0, 0,
	2471, 2498, 1, 0, 0, 0, 2472, 2473, 10, 11, 0, 0, 2473, 2474, 5, 6, 0, 0, 2474, 2475, 3, 226,
	113, 0, 2475, 2476, 5, 7, 0, 0, 2476, 2497, 1, 0, 0, 0, 2477, 2478, 10, 10, 0, 0, 2478, 2479, 5,
	6, 0, 0, 2479, 2480, 3, 226, 113, 0, 2480, 2482, 5, 510, 0, 0, 2481, 2483, 3, 226, 113, 0, 2482,
	2481, 1, 0, 0, 0, 2482, 2483, 1, 0, 0, 0, 2483, 2484, 1, 0, 0, 0, 2484, 2485, 5, 7, 0, 0, 2485,
	2497, 1, 0, 0, 0, 2486, 2487, 10, 5, 0, 0, 2487, 2488, 5, 5, 0, 0, 2488, 2497, 3, 286, 143, 0,
	2489, 2490, 10, 1, 0, 0, 2490, 2494, 5, 73, 0, 0, 2491, 2495, 3, 286, 143, 0, 2492, 2495, 5,
	516, 0, 0, 2493, 2495, 5, 129, 0, 0, 2494, 2491, 1, 0, 0, 0, 2494, 2492, 1, 0, 0, 0, 2494, 2493,
	1, 0, 0, 0, 2495, 2497, 1, 0, 0, 0, 2496, 2472, 1, 0, 0, 0, 2496, 2477, 1, 0, 0, 0, 2496, 2486,
	1, 0, 0, 0, 2496, 2489, 1, 0, 0, 0, 2497, 2500, 1, 0, 0, 0, 2498, 2496, 1, 0, 0, 0, 2498, 2499,
	1, 0, 0, 0, 2499, 231, 1, 0, 0, 0, 2500, 2498, 1, 0, 0, 0, 2501, 2507, 3, 266, 133, 0, 2502,
	2504, 7, 37, 0, 0, 2503, 2505, 7, 38, 0, 0, 2504, 2503, 1, 0, 0, 0, 2504, 2505, 1, 0, 0, 0,
	2505, 2507, 1, 0, 0, 0, 2506, 2501, 1, 0, 0, 0, 2506, 2502, 1, 0, 0, 0, 2507, 233, 1, 0, 0, 0,
	2508, 2509, 3, 236, 118, 0, 2509, 2533, 5, 2, 0, 0, 2510, 2512, 7, 14, 0, 0, 2511, 2510, 1, 0,
	0, 0, 2511, 2512, 1, 0, 0, 0, 2512, 2513, 1, 0, 0, 0, 2513, 2518, 3, 214, 107, 0, 2514, 2515, 5,
	4, 0, 0, 2515, 2517, 3, 214, 107, 0, 2516, 2514, 1, 0, 0, 0, 2517, 2520, 1, 0, 0, 0, 2518, 2516,
	1, 0, 0, 0, 2518, 2519, 1, 0, 0, 0, 2519, 2531, 1, 0, 0, 0, 2520, 2518, 1, 0, 0, 0, 2521, 2522,
	5, 312, 0, 0, 2522, 2523, 5, 57, 0, 0, 2523, 2528, 3, 138, 69, 0, 2524, 2525, 5, 4, 0, 0, 2525,
	2527, 3, 138, 69, 0, 2526, 2524, 1, 0, 0, 0, 2527, 2530, 1, 0, 0, 0, 2528, 2526, 1, 0, 0, 0,
	2528, 2529, 1, 0, 0, 0, 2529, 2532, 1, 0, 0, 0, 2530, 2528, 1, 0, 0, 0, 2531, 2521, 1, 0, 0, 0,
	2531, 2532, 1, 0, 0, 0, 2532, 2534, 1, 0, 0, 0, 2533, 2511, 1, 0, 0, 0, 2533, 2534, 1, 0, 0, 0,
	2534, 2535, 1, 0, 0, 0, 2535, 2538, 5, 3, 0, 0, 2536, 2537, 5, 315, 0, 0, 2537, 2539, 3, 240,
	120, 0, 2538, 2536, 1, 0, 0, 0, 2538, 2539, 1, 0, 0, 0, 2539, 235, 1, 0, 0, 0, 2540, 2541, 3,
	286, 143, 0, 2541, 2542, 5, 5, 0, 0, 2542, 2544, 1, 0, 0, 0, 2543, 2540, 1, 0, 0, 0, 2543, 2544,
	1, 0, 0, 0, 2544, 2545, 1, 0, 0, 0, 2545, 2546, 3, 238, 119, 0, 2546, 237, 1, 0, 0, 0, 2547,
	2563, 3, 286, 143, 0, 2548, 2563, 5, 12, 0, 0, 2549, 2563, 5, 87, 0, 0, 2550, 2563, 5, 101, 0,
	0, 2551, 2563, 5, 105, 0, 0, 2552, 2563, 5, 107, 0, 0, 2553, 2563, 5, 215, 0, 0, 2554, 2563, 5,
	254, 0, 0, 2555, 2563, 5, 257, 0, 0, 2556, 2563, 5, 321, 0, 0, 2557, 2563, 5, 362, 0, 0, 2558,
	2563, 5, 380, 0, 0, 2559, 2563, 5, 393, 0, 0, 2560, 2563, 5, 452, 0, 0, 2561, 2563, 5, 468, 0,
	0, 2562, 2547, 1, 0, 0, 0, 2562, 2548, 1, 0, 0, 0, 2562, 2549, 1, 0, 0, 0, 2562, 2550, 1, 0, 0,
	0, 2562, 2551, 1, 0, 0, 0, 2562, 2552, 1, 0, 0, 0, 2562, 2553, 1, 0, 0, 0, 2562, 2554, 1, 0, 0,
	0, 2562, 2555, 1, 0, 0, 0, 2562, 2556, 1, 0, 0, 0, 2562, 2557, 1, 0, 0, 0, 2562, 2558, 1, 0, 0,
	0, 2562, 2559, 1, 0, 0, 0, 2562, 2560, 1, 0, 0, 0, 2562, 2561, 1, 0, 0, 0, 2563, 239, 1, 0, 0,
	0, 2564, 2566, 5, 2, 0, 0, 2565, 2567, 3, 142, 71, 0, 2566, 2565, 1, 0, 0, 0, 2566, 2567, 1, 0,
	0, 0, 2567, 2569, 1, 0, 0, 0, 2568, 2570, 3, 136, 68, 0, 2569, 2568, 1, 0, 0, 0, 2569, 2570, 1,
	0, 0, 0, 2570, 2572, 1, 0, 0, 0, 2571, 2573, 3, 242, 121, 0, 2572, 2571, 1, 0, 0, 0, 2572, 2573,
	1, 0, 0, 0, 2573, 2574, 1, 0, 0, 0, 2574, 2575, 5, 3, 0, 0, 2575, 241, 1, 0, 0, 0, 2576, 2577,
	3, 244, 122, 0, 2577, 2578, 3, 246, 123, 0, 2578, 2586, 1, 0, 0, 0, 2579, 2580, 3, 244, 122, 0,
	2580, 2581, 5, 39, 0, 0, 2581, 2582, 3, 246, 123, 0, 2582, 2583, 5, 23, 0, 0, 2583, 2584, 3,
	246, 123, 0, 2584, 2586, 1, 0, 0, 0, 2585, 2576, 1, 0, 0, 0, 2585, 2579, 1, 0, 0, 0, 2586, 243,
	1, 0, 0, 0, 2587, 2588, 7, 39, 0, 0, 2588, 245, 1, 0, 0, 0, 2589, 2590, 5, 458, 0, 0, 2590,
	2597, 7, 40, 0, 0, 2591, 2592, 5, 100, 0, 0, 2592, 2597, 5, 387, 0, 0, 2593, 2594, 3, 214, 107,
	0, 2594, 2595, 7, 40, 0, 0, 2595, 2597, 1, 0, 0, 0, 2596, 2589, 1, 0, 0, 0, 2596, 2591, 1, 0, 0,
	0, 2596, 2593, 1, 0, 0, 0, 2597, 247, 1, 0, 0, 0, 2598, 2603, 3, 286, 143, 0, 2599, 2600, 5, 5,
	0, 0, 2600, 2602, 3, 286, 143, 0, 2601, 2599, 1, 0, 0, 0, 2602, 2605, 1, 0, 0, 0, 2603, 2601, 1,
	0, 0, 0, 2603, 2604, 1, 0, 0, 0, 2604, 249, 1, 0, 0, 0, 2605, 2603, 1, 0, 0, 0, 2606, 2608, 5,
	437, 0, 0, 2607, 2606, 1, 0, 0, 0, 2607, 2608, 1, 0, 0, 0, 2608, 2609, 1, 0, 0, 0, 2609, 2612,
	5, 319, 0, 0, 2610, 2613, 3, 286, 143, 0, 2611, 2613, 3, 148, 74, 0, 2612, 2610, 1, 0, 0, 0,
	2612, 2611, 1, 0, 0, 0, 2613, 2620, 1, 0, 0, 0, 2614, 2616, 5, 437, 0, 0, 2615, 2614, 1, 0, 0,
	0, 2615, 2616, 1, 0, 0, 0, 2616, 2617, 1, 0, 0, 0, 2617, 2618, 5, 320, 0, 0, 2618, 2620, 3, 148,
	74, 0, 2619, 2607, 1, 0, 0, 0, 2619, 2615, 1, 0, 0, 0, 2620, 251, 1, 0, 0, 0, 2621, 2673, 5,
	302, 0, 0, 2622, 2623, 7, 41, 0, 0, 2623, 2673, 5, 516, 0, 0, 2624, 2673, 3, 292, 146, 0, 2625,
	2673, 3, 256, 128, 0, 2626, 2628, 5, 42, 0, 0, 2627, 2626, 1, 0, 0, 0, 2627, 2628, 1, 0, 0, 0,
	2628, 2629, 1, 0, 0, 0, 2629, 2673, 5, 516, 0, 0, 2630, 2632, 5, 6, 0, 0, 2631, 2633, 3, 252,
	126, 0, 2632, 2631, 1, 0, 0, 0, 2632, 2633, 1, 0, 0, 0, 2633, 2638, 1, 0, 0, 0, 2634, 2635, 5,
	4, 0, 0, 2635, 2637, 3, 252, 126, 0, 2636, 2634, 1, 0, 0, 0, 2637, 2640, 1, 0, 0, 0, 2638, 2636,
	1, 0, 0, 0, 2638, 2639, 1, 0, 0, 0, 2639, 2641, 1, 0, 0, 0, 2640, 2638, 1, 0, 0, 0, 2641, 2673,
	5, 7, 0, 0, 2642, 2647, 5, 8, 0, 0, 2643, 2644, 3, 252, 126, 0, 2644, 2645, 5, 510, 0, 0, 2645,
	2646, 3, 252, 126, 0, 2646, 2648, 1, 0, 0, 0, 2647, 2643, 1, 0, 0, 0, 2647, 2648, 1, 0, 0, 0,
	2648, 2656, 1, 0, 0, 0, 2649, 2650, 5, 4, 0, 0, 2650, 2651, 3, 252, 126, 0, 2651, 2652, 5, 510,
	0, 0, 2652, 2653, 3, 252, 126, 0, 2653, 2655, 1, 0, 0, 0, 2654, 2649, 1, 0, 0, 0, 2655, 2658, 1,
	0, 0, 0, 2656, 2654, 1, 0, 0, 0, 2656, 2657, 1, 0, 0, 0, 2657, 2659, 1, 0, 0, 0, 2658, 2656, 1,
	0, 0, 0, 2659, 2673, 5, 9, 0, 0, 2660, 2661, 5, 8, 0, 0, 2661, 2666, 3, 252, 126, 0, 2662, 2663,
	5, 4, 0, 0, 2663, 2665, 3, 252, 126, 0, 2664, 2662, 1, 0, 0, 0, 2665, 2668, 1, 0, 0, 0, 2666,
	2664, 1, 0, 0, 0, 2666, 2667, 1, 0, 0, 0, 2667, 2669, 1, 0, 0, 0, 2668, 2666, 1, 0, 0, 0, 2669,
	2670, 5, 9, 0, 0, 2670, 2673, 1, 0, 0, 0, 2671, 2673, 5, 332, 0, 0, 2672, 2621, 1, 0, 0, 0,
	2672, 2622, 1, 0, 0, 0, 2672, 2624, 1, 0, 0, 0, 2672, 2625, 1, 0, 0, 0, 2672, 2627, 1, 0, 0, 0,
	2672, 2630, 1, 0, 0, 0, 2672, 2642, 1, 0, 0, 0, 2672, 2660, 1, 0, 0, 0, 2672, 2671, 1, 0, 0, 0,
	2673, 253, 1, 0, 0, 0, 2674, 2675, 7, 42, 0, 0, 2675, 255, 1, 0, 0, 0, 2676, 2677, 7, 43, 0, 0,
	2677, 257, 1, 0, 0, 0, 2678, 2679, 5, 482, 0, 0, 2679, 2680, 3, 214, 107, 0, 2680, 2681, 5, 441,
	0, 0, 2681, 2682, 3, 214, 107, 0, 2682, 259, 1, 0, 0, 0, 2683, 2684, 5, 230, 0, 0, 2684, 2685,
	3, 214, 107, 0, 2685, 2686, 3, 262, 131, 0, 2686, 261, 1, 0, 0, 0, 2687, 2688, 7, 29, 0, 0,
	2688, 263, 1, 0, 0, 0, 2689, 2694, 3, 266, 133, 0, 2690, 2692, 5, 301, 0, 0, 2691, 2690, 1, 0,
	0, 0, 2691, 2692, 1, 0, 0, 0, 2692, 2693, 1, 0, 0, 0, 2693, 2695, 5, 302, 0, 0, 2694, 2691, 1,
	0, 0, 0, 2694, 2695, 1, 0, 0, 0, 2695, 265, 1, 0, 0, 0, 2696, 2697, 5, 26, 0, 0, 2697, 2698, 5,
	494, 0, 0, 2698, 2699, 3, 266, 133, 0, 2699, 2700, 5, 496, 0, 0, 2700, 2742, 1, 0, 0, 0, 2701,
	2702, 5, 271, 0, 0, 2702, 2703, 5, 494, 0, 0, 2703, 2704, 3, 266, 133, 0, 2704, 2705, 5, 4, 0,
	0, 2705, 2706, 3, 266, 133, 0, 2706, 2707, 5, 496, 0, 0, 2707, 2742, 1, 0, 0, 0, 2708, 2709, 5,
	423, 0, 0, 2709, 2710, 5, 494, 0, 0, 2710, 2711, 3, 270, 135, 0, 2711, 2712, 5, 496, 0, 0, 2712,
	2742, 1, 0, 0, 0, 2713, 2714, 5, 16, 0, 0, 2714, 2715, 5, 494, 0, 0, 2715, 2716, 3, 238, 119, 0,
	2716, 2717, 5, 2, 0, 0, 2717, 2722, 3, 264, 132, 0, 2718, 2719, 5, 4, 0, 0, 2719, 2721, 3, 264,
	132, 0, 2720, 2718, 1, 0, 0, 0, 2721, 2724, 1, 0, 0, 0, 2722, 2720, 1, 0, 0, 0, 2722, 2723, 1,
	0, 0, 0, 2723, 2725, 1, 0, 0, 0, 2724, 2722, 1, 0, 0, 0, 2725, 2726, 5, 3, 0, 0, 2726, 2727, 5,
	496, 0, 0, 2727, 2742, 1, 0, 0, 0, 2728, 2739, 3, 268, 134, 0, 2729, 2730, 5, 2, 0, 0, 2730,
	2735, 7, 44, 0, 0, 2731, 2732, 5, 4, 0, 0, 2732, 2734, 5, 521, 0, 0, 2733, 2731, 1, 0, 0, 0,
	2734, 2737, 1, 0, 0, 0, 2735, 2733, 1, 0, 0, 0, 2735, 2736, 1, 0, 0, 0, 2736, 2738, 1, 0, 0, 0,
	2737, 2735, 1, 0, 0, 0, 2738, 2740, 5, 3, 0, 0, 2739, 2729, 1, 0, 0, 0, 2739, 2740, 1, 0, 0, 0,
	2740, 2742, 1, 0, 0, 0, 2741, 2696, 1, 0, 0, 0, 2741, 2701, 1, 0, 0, 0, 2741, 2708, 1, 0, 0, 0,
	2741, 2713, 1, 0, 0, 0, 2741, 2728, 1, 0, 0, 0, 2742, 267, 1, 0, 0, 0, 2743, 2777, 1, 0, 0, 0,
	2744, 2777, 5, 446, 0, 0, 2745, 2777, 5, 407, 0, 0, 2746, 2777, 7, 38, 0, 0, 2747, 2777, 5, 40,
	0, 0, 2748, 2777, 5, 249, 0, 0, 2749, 2777, 5, 50, 0, 0, 2750, 2777, 5, 181, 0, 0, 2751, 2777,
	5, 145, 0, 0, 2752, 2777, 5, 109, 0, 0, 2753, 2777, 5, 117, 0, 0, 2754, 2777, 5, 442, 0, 0,
	2755, 2777, 5, 119, 0, 0, 2756, 2777, 5, 118, 0, 0, 2757, 2777, 5, 121, 0, 0, 2758, 2777, 5,
	120, 0, 0, 2759, 2777, 5, 45, 0, 0, 2760, 2777, 5, 348, 0, 0, 2761, 2777, 5, 208, 0, 0, 2762,
	2777, 5, 16, 0, 0, 2763, 2777, 5, 422, 0, 0, 2764, 2777, 5, 243, 0, 0, 2765, 2777, 5, 244, 0, 0,
	2766, 2777, 5, 439, 0, 0, 2767, 2777, 5, 472, 0, 0, 2768, 2777, 5, 67, 0, 0, 2769, 2777, 5, 125,
	0, 0, 2770, 2777, 5, 126, 0, 0, 2771, 2777, 5, 127, 0, 0, 2772, 2777, 5, 233, 0, 0, 2773, 2777,
	5, 234, 0, 0, 2774, 2777, 5, 474, 0, 0, 2775, 2777, 5, 19, 0, 0, 2776, 2743, 1, 0, 0, 0, 2776,
	2744, 1, 0, 0, 0, 2776, 2745, 1, 0, 0, 0, 2776, 2746, 1, 0, 0, 0, 2776, 2747, 1, 0, 0, 0, 2776,
	2748, 1, 0, 0, 0, 2776, 2749, 1, 0, 0, 0, 2776, 2750, 1, 0, 0, 0, 2776, 2751, 1, 0, 0, 0, 2776,
	2752, 1, 0, 0, 0, 2776, 2753, 1, 0, 0, 0, 2776, 2754, 1, 0, 0, 0, 2776, 2755, 1, 0, 0, 0, 2776,
	2756, 1, 0, 0, 0, 2776, 2757, 1, 0, 0, 0, 2776, 2758, 1, 0, 0, 0, 2776, 2759, 1, 0, 0, 0, 2776,
	2760, 1, 0, 0, 0, 2776, 2761, 1, 0, 0, 0, 2776, 2762, 1, 0, 0, 0, 2776, 2763, 1, 0, 0, 0, 2776,
	2764, 1, 0, 0, 0, 2776, 2765, 1, 0, 0, 0, 2776, 2766, 1, 0, 0, 0, 2776, 2767, 1, 0, 0, 0, 2776,
	2768, 1, 0, 0, 0, 2776, 2769, 1, 0, 0, 0, 2776, 2770, 1, 0, 0, 0, 2776, 2771, 1, 0, 0, 0, 2776,
	2772, 1, 0, 0, 0, 2776, 2773, 1, 0, 0, 0, 2776, 2774, 1, 0, 0, 0, 2776, 2775, 1, 0, 0, 0, 2777,
	269, 1, 0, 0, 0, 2778, 2783, 3, 272, 136, 0, 2779, 2780, 5, 4, 0, 0, 2780, 2782, 3, 272, 136, 0,
	2781, 2779, 1, 0, 0, 0, 2782, 2785, 1, 0, 0, 0, 2783, 2781, 1, 0, 0, 0, 2783, 2784, 1, 0, 0, 0,
	2784, 271, 1, 0, 0, 0, 2785, 2783, 1, 0, 0, 0, 2786, 2787, 3, 286, 143, 0, 2787, 2788, 5, 510,
	0, 0, 2788, 2790, 3, 266, 133, 0, 2789, 2791, 3, 274, 137, 0, 2790, 2789, 1, 0, 0, 0, 2790,
	2791, 1, 0, 0, 0, 2791, 273, 1, 0, 0, 0, 2792, 2793, 5, 79, 0, 0, 2793, 2794, 5, 516, 0, 0,
	2794, 275, 1, 0, 0, 0, 2795, 2796, 5, 432, 0, 0, 2796, 2798, 5, 2, 0, 0, 2797, 2799, 3, 278,
	139, 0, 2798, 2797, 1, 0, 0, 0, 2798, 2799, 1, 0, 0, 0, 2799, 2800, 1, 0, 0, 0, 2800, 2803, 5,
	3, 0, 0, 2801, 2802, 5, 366, 0, 0, 2802, 2804, 5, 521, 0, 0, 2803, 2801, 1, 0, 0, 0, 2803, 2804,
	1, 0, 0, 0, 2804, 277, 1, 0, 0, 0, 2805, 2806, 5, 521, 0, 0, 2806, 2810, 5, 328, 0, 0, 2807,
	2808, 5, 521, 0, 0, 2808, 2810, 5, 388, 0, 0, 2809, 2805, 1, 0, 0, 0, 2809, 2807, 1, 0, 0, 0,
	2810, 279, 1, 0, 0, 0, 2811, 2812, 5, 184, 0, 0, 2812, 2813, 5, 477, 0, 0, 2813, 2814, 5, 28, 0,
	0, 2814, 2815, 5, 305, 0, 0, 2815, 2822, 5, 521, 0, 0, 2816, 2817, 5, 184, 0, 0, 2817, 2818, 5,
	442, 0, 0, 2818, 2819, 5, 28, 0, 0, 2819, 2820, 5, 305, 0, 0, 2820, 2822, 5, 516, 0, 0, 2821,
	2811, 1, 0, 0, 0, 2821, 2816, 1, 0, 0, 0, 2822, 281, 1, 0, 0, 0, 2823, 2824, 3, 286, 143, 0,
	2824, 2825, 3, 284, 142, 0, 2825, 283, 1, 0, 0, 0, 2826, 2827, 5, 499, 0, 0, 2827, 2829, 3, 286,
	143, 0, 2828, 2826, 1, 0, 0, 0, 2829, 2830, 1, 0, 0, 0, 2830, 2828, 1, 0, 0, 0, 2830, 2831, 1,
	0, 0, 0, 2831, 2834, 1, 0, 0, 0, 2832, 2834, 1, 0, 0, 0, 2833, 2828, 1, 0, 0, 0, 2833, 2832, 1,
	0, 0, 0, 2834, 285, 1, 0, 0, 0, 2835, 2836, 3, 288, 144, 0, 2836, 287, 1, 0, 0, 0, 2837, 2841,
	5, 525, 0, 0, 2838, 2841, 3, 290, 145, 0, 2839, 2841, 3, 294, 147, 0, 2840, 2837, 1, 0, 0, 0,
	2840, 2838, 1, 0, 0, 0, 2840, 2839, 1, 0, 0, 0, 2841, 289, 1, 0, 0, 0, 2842, 2843, 5, 526, 0, 0,
	2843, 291, 1, 0, 0, 0, 2844, 2846, 5, 499, 0, 0, 2845, 2844, 1, 0, 0, 0, 2845, 2846, 1, 0, 0, 0,
	2846, 2847, 1, 0, 0, 0, 2847, 2853, 5, 521, 0, 0, 2848, 2850, 5, 499, 0, 0, 2849, 2848, 1, 0, 0,
	0, 2849, 2850, 1, 0, 0, 0, 2850, 2851, 1, 0, 0, 0, 2851, 2853, 7, 45, 0, 0, 2852, 2845, 1, 0, 0,
	0, 2852, 2849, 1, 0, 0, 0, 2853, 293, 1, 0, 0, 0, 2854, 2855, 7, 46, 0, 0, 2855, 295, 1, 0, 0,
	0, 376, 299, 308, 313, 321, 335, 338, 346, 349, 357, 364, 371, 380, 386, 389, 393, 401, 412,
	421, 427, 431, 437, 440, 444, 449, 457, 459, 463, 466, 473, 478, 480, 482, 489, 492, 496, 500,
	507, 514, 518, 530, 537, 543, 551, 553, 556, 559, 565, 572, 575, 580, 583, 589, 593, 596, 604,
	607, 610, 613, 619, 624, 627, 638, 643, 650, 653, 662, 665, 672, 675, 680, 683, 691, 698, 701,
	705, 708, 710, 713, 717, 721, 729, 736, 740, 742, 745, 757, 771, 778, 785, 835, 848, 853, 859,
	867, 871, 879, 892, 898, 903, 909, 917, 927, 933, 940, 943, 947, 952, 954, 960, 967, 981, 995,
	998, 1003, 1011, 1014, 1019, 1024, 1034, 1041, 1044, 1047, 1057, 1066, 1072, 1078, 1083, 1086,
	1089, 1092, 1095, 1098, 1101, 1104, 1107, 1110, 1113, 1124, 1127, 1130, 1133, 1136, 1138, 1150,
	1157, 1163, 1167, 1172, 1181, 1183, 1187, 1191, 1194, 1197, 1228, 1263, 1265, 1274, 1279, 1288,
	1294, 1300, 1303, 1306, 1309, 1312, 1320, 1328, 1331, 1334, 1345, 1350, 1361, 1365, 1368, 1371,
	1374, 1377, 1388, 1393, 1406, 1413, 1416, 1427, 1436, 1441, 1446, 1450, 1466, 1473, 1479, 1483,
	1493, 1501, 1512, 1517, 1530, 1533, 1543, 1546, 1557, 1567, 1570, 1578, 1581, 1591, 1596, 1605,
	1610, 1615, 1621, 1623, 1629, 1636, 1648, 1651, 1661, 1665, 1668, 1677, 1682, 1686, 1698, 1707,
	1711, 1716, 1720, 1724, 1734, 1740, 1751, 1758, 1764, 1767, 1770, 1773, 1777, 1780, 1783, 1788,
	1798, 1804, 1813, 1828, 1837, 1841, 1844, 1848, 1850, 1857, 1865, 1871, 1878, 1884, 1887, 1890,
	1893, 1900, 1902, 1915, 1917, 1919, 1928, 1930, 1934, 1941, 1949, 1956, 1960, 1967, 1974, 1980,
	1986, 1994, 2000, 2017, 2023, 2034, 2040, 2042, 2050, 2062, 2070, 2073, 2084, 2095, 2100, 2103,
	2110, 2115, 2127, 2133, 2155, 2157, 2171, 2173, 2182, 2185, 2191, 2194, 2202, 2207, 2212, 2220,
	2229, 2236, 2239, 2252, 2264, 2266, 2299, 2312, 2325, 2338, 2353, 2367, 2371, 2380, 2384, 2409,
	2414, 2442, 2446, 2457, 2465, 2470, 2482, 2494, 2496, 2498, 2504, 2506, 2511, 2518, 2528, 2531,
	2533, 2538, 2543, 2562, 2566, 2569, 2572, 2585, 2596, 2603, 2607, 2612, 2615, 2619, 2627, 2632,
	2638, 2647, 2656, 2666, 2672, 2691, 2694, 2722, 2735, 2739, 2741, 2776, 2783, 2790, 2798, 2803,
	2809, 2821, 2830, 2833, 2840, 2845, 2849, 2852
];
DorisParser.vocabulary = new antlr.Vocabulary(
	DorisParser.literalNames,
	DorisParser.symbolicNames,
	[]
);
DorisParser.decisionsToDFA = DorisParser._ATN.decisionToState.map(
	(ds, index) => new antlr.DFA(ds, index)
);
export { DorisParser };
export class ProgramContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EOF() {
		return this.getToken(DorisParser.EOF, 0);
	}
	singleStatement(i) {
		if (i === undefined) {
			return this.getRuleContexts(SingleStatementContext);
		}
		return this.getRuleContext(i, SingleStatementContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_program;
	}
	enterRule(listener) {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	exitRule(listener) {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	accept(visitor) {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiStatementsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EOF() {
		return this.getToken(DorisParser.EOF, 0);
	}
	statement(i) {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		}
		return this.getRuleContext(i, StatementContext);
	}
	SEMICOLON(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.SEMICOLON);
		} else {
			return this.getToken(DorisParser.SEMICOLON, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_multiStatements;
	}
	enterRule(listener) {
		if (listener.enterMultiStatements) {
			listener.enterMultiStatements(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMultiStatements) {
			listener.exitMultiStatements(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMultiStatements) {
			return visitor.visitMultiStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleStatementContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	statement() {
		return this.getRuleContext(0, StatementContext);
	}
	EOF() {
		return this.getToken(DorisParser.EOF, 0);
	}
	SEMICOLON(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.SEMICOLON);
		} else {
			return this.getToken(DorisParser.SEMICOLON, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_singleStatement;
	}
	enterRule(listener) {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSingleStatement) {
			listener.exitSingleStatement(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_statement;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class ShowCreateProcedureContext extends StatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SHOW() {
		return this.getToken(DorisParser.SHOW, 0);
	}
	CREATE() {
		return this.getToken(DorisParser.CREATE, 0);
	}
	PROCEDURE() {
		return this.getToken(DorisParser.PROCEDURE, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterShowCreateProcedure) {
			listener.enterShowCreateProcedure(this);
		}
	}
	exitRule(listener) {
		if (listener.exitShowCreateProcedure) {
			listener.exitShowCreateProcedure(this);
		}
	}
	accept(visitor) {
		if (visitor.visitShowCreateProcedure) {
			return visitor.visitShowCreateProcedure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementBaseAliasContext extends StatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	statementBase() {
		return this.getRuleContext(0, StatementBaseContext);
	}
	enterRule(listener) {
		if (listener.enterStatementBaseAlias) {
			listener.enterStatementBaseAlias(this);
		}
	}
	exitRule(listener) {
		if (listener.exitStatementBaseAlias) {
			listener.exitStatementBaseAlias(this);
		}
	}
	accept(visitor) {
		if (visitor.visitStatementBaseAlias) {
			return visitor.visitStatementBaseAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowProcedureStatusContext extends StatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SHOW() {
		return this.getToken(DorisParser.SHOW, 0);
	}
	PROCEDURE() {
		return this.getToken(DorisParser.PROCEDURE, 0);
	}
	STATUS() {
		return this.getToken(DorisParser.STATUS, 0);
	}
	LIKE() {
		return this.getToken(DorisParser.LIKE, 0);
	}
	whereClause() {
		return this.getRuleContext(0, WhereClauseContext);
	}
	valueExpression() {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterShowProcedureStatus) {
			listener.enterShowProcedureStatus(this);
		}
	}
	exitRule(listener) {
		if (listener.exitShowProcedureStatus) {
			listener.exitShowProcedureStatus(this);
		}
	}
	accept(visitor) {
		if (visitor.visitShowProcedureStatus) {
			return visitor.visitShowProcedureStatus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateProcedureContext extends StatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	PROCEDURE() {
		return this.getToken(DorisParser.PROCEDURE, 0);
	}
	PROC() {
		return this.getToken(DorisParser.PROC, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	ALTER() {
		return this.getToken(DorisParser.ALTER, 0);
	}
	CREATE() {
		return this.getToken(DorisParser.CREATE, 0);
	}
	REPLACE() {
		return this.getToken(DorisParser.REPLACE, 0);
	}
	OR() {
		return this.getToken(DorisParser.OR, 0);
	}
	enterRule(listener) {
		if (listener.enterCreateProcedure) {
			listener.enterCreateProcedure(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCreateProcedure) {
			listener.exitCreateProcedure(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCreateProcedure) {
			return visitor.visitCreateProcedure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallProcedureContext extends StatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CALL() {
		return this.getToken(DorisParser.CALL, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	enterRule(listener) {
		if (listener.enterCallProcedure) {
			listener.enterCallProcedure(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCallProcedure) {
			listener.exitCallProcedure(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCallProcedure) {
			return visitor.visitCallProcedure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropProcedureContext extends StatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	DROP() {
		return this.getToken(DorisParser.DROP, 0);
	}
	PROCEDURE() {
		return this.getToken(DorisParser.PROCEDURE, 0);
	}
	PROC() {
		return this.getToken(DorisParser.PROC, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	enterRule(listener) {
		if (listener.enterDropProcedure) {
			listener.enterDropProcedure(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDropProcedure) {
			listener.exitDropProcedure(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDropProcedure) {
			return visitor.visitDropProcedure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementBaseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_statementBase;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class RefreshMTMVContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	REFRESH() {
		return this.getToken(DorisParser.REFRESH, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	partitionSpec() {
		return this.getRuleContext(0, PartitionSpecContext);
	}
	COMPLETE() {
		return this.getToken(DorisParser.COMPLETE, 0);
	}
	AUTO() {
		return this.getToken(DorisParser.AUTO, 0);
	}
	enterRule(listener) {
		if (listener.enterRefreshMTMV) {
			listener.enterRefreshMTMV(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRefreshMTMV) {
			listener.exitRefreshMTMV(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRefreshMTMV) {
			return visitor.visitRefreshMTMV(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CREATE() {
		return this.getToken(DorisParser.CREATE, 0);
	}
	TABLE() {
		return this.getToken(DorisParser.TABLE, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	EXTERNAL() {
		return this.getToken(DorisParser.EXTERNAL, 0);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	ENGINE() {
		return this.getToken(DorisParser.ENGINE, 0);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	KEY() {
		return this.getToken(DorisParser.KEY, 0);
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	DISTRIBUTED() {
		return this.getToken(DorisParser.DISTRIBUTED, 0);
	}
	BY(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.BY);
		} else {
			return this.getToken(DorisParser.BY, i);
		}
	}
	ROLLUP() {
		return this.getToken(DorisParser.ROLLUP, 0);
	}
	LEFT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.LEFT_PAREN);
		} else {
			return this.getToken(DorisParser.LEFT_PAREN, i);
		}
	}
	rollupDefs() {
		return this.getRuleContext(0, RollupDefsContext);
	}
	RIGHT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.RIGHT_PAREN);
		} else {
			return this.getToken(DorisParser.RIGHT_PAREN, i);
		}
	}
	BROKER() {
		return this.getToken(DorisParser.BROKER, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	columnDefs() {
		return this.getRuleContext(0, ColumnDefsContext);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	AGGREGATE() {
		return this.getToken(DorisParser.AGGREGATE, 0);
	}
	UNIQUE() {
		return this.getToken(DorisParser.UNIQUE, 0);
	}
	DUPLICATE() {
		return this.getToken(DorisParser.DUPLICATE, 0);
	}
	identifierList(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		}
		return this.getRuleContext(i, IdentifierListContext);
	}
	partitionTable() {
		return this.getRuleContext(0, PartitionTableContext);
	}
	propertyClause(i) {
		if (i === undefined) {
			return this.getRuleContexts(PropertyClauseContext);
		}
		return this.getRuleContext(i, PropertyClauseContext);
	}
	HASH() {
		return this.getToken(DorisParser.HASH, 0);
	}
	RANDOM() {
		return this.getToken(DorisParser.RANDOM, 0);
	}
	CLUSTER() {
		return this.getToken(DorisParser.CLUSTER, 0);
	}
	BUCKETS() {
		return this.getToken(DorisParser.BUCKETS, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	indexDefs() {
		return this.getRuleContext(0, IndexDefsContext);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	AUTO() {
		return this.getToken(DorisParser.AUTO, 0);
	}
	enterRule(listener) {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterMTMVContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	ALTER() {
		return this.getToken(DorisParser.ALTER, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	RENAME() {
		return this.getToken(DorisParser.RENAME, 0);
	}
	REFRESH() {
		return this.getToken(DorisParser.REFRESH, 0);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	refreshMethod() {
		return this.getRuleContext(0, RefreshMethodContext);
	}
	refreshTrigger() {
		return this.getRuleContext(0, RefreshTriggerContext);
	}
	enterRule(listener) {
		if (listener.enterAlterMTMV) {
			listener.enterAlterMTMV(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAlterMTMV) {
			listener.exitAlterMTMV(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAlterMTMV) {
			return visitor.visitAlterMTMV(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertTableContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	INSERT() {
		return this.getToken(DorisParser.INSERT, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	INTO() {
		return this.getToken(DorisParser.INTO, 0);
	}
	OVERWRITE() {
		return this.getToken(DorisParser.OVERWRITE, 0);
	}
	TABLE() {
		return this.getToken(DorisParser.TABLE, 0);
	}
	DORIS_INTERNAL_TABLE_ID() {
		return this.getToken(DorisParser.DORIS_INTERNAL_TABLE_ID, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	explain() {
		return this.getRuleContext(0, ExplainContext);
	}
	cte() {
		return this.getRuleContext(0, CteContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	partitionSpec() {
		return this.getRuleContext(0, PartitionSpecContext);
	}
	WITH() {
		return this.getToken(DorisParser.WITH, 0);
	}
	LABEL() {
		return this.getToken(DorisParser.LABEL, 0);
	}
	LEFT_BRACKET() {
		return this.getToken(DorisParser.LEFT_BRACKET, 0);
	}
	RIGHT_BRACKET() {
		return this.getToken(DorisParser.RIGHT_BRACKET, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	identifierSeq() {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	enterRule(listener) {
		if (listener.enterInsertTable) {
			listener.enterInsertTable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitInsertTable) {
			listener.exitInsertTable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitInsertTable) {
			return visitor.visitInsertTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropConstraintContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	ALTER() {
		return this.getToken(DorisParser.ALTER, 0);
	}
	TABLE() {
		return this.getToken(DorisParser.TABLE, 0);
	}
	DROP() {
		return this.getToken(DorisParser.DROP, 0);
	}
	CONSTRAINT() {
		return this.getToken(DorisParser.CONSTRAINT, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	errorCapturingIdentifier() {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterDropConstraint) {
			listener.enterDropConstraint(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDropConstraint) {
			listener.exitDropConstraint(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDropConstraint) {
			return visitor.visitDropConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddConstraintContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	ALTER() {
		return this.getToken(DorisParser.ALTER, 0);
	}
	TABLE() {
		return this.getToken(DorisParser.TABLE, 0);
	}
	ADD() {
		return this.getToken(DorisParser.ADD, 0);
	}
	CONSTRAINT() {
		return this.getToken(DorisParser.CONSTRAINT, 0);
	}
	constraint() {
		return this.getRuleContext(0, ConstraintContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	errorCapturingIdentifier() {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterAddConstraint) {
			listener.enterAddConstraint(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAddConstraint) {
			listener.exitAddConstraint(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAddConstraint) {
			return visitor.visitAddConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableLikeContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CREATE() {
		return this.getToken(DorisParser.CREATE, 0);
	}
	TABLE() {
		return this.getToken(DorisParser.TABLE, 0);
	}
	LIKE() {
		return this.getToken(DorisParser.LIKE, 0);
	}
	multipartIdentifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		}
		return this.getRuleContext(i, MultipartIdentifierContext);
	}
	EXTERNAL() {
		return this.getToken(DorisParser.EXTERNAL, 0);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	WITH() {
		return this.getToken(DorisParser.WITH, 0);
	}
	ROLLUP() {
		return this.getToken(DorisParser.ROLLUP, 0);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	enterRule(listener) {
		if (listener.enterCreateTableLike) {
			listener.enterCreateTableLike(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCreateTableLike) {
			listener.exitCreateTableLike(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCreateTableLike) {
			return visitor.visitCreateTableLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	UPDATE() {
		return this.getToken(DorisParser.UPDATE, 0);
	}
	tableAlias() {
		return this.getRuleContext(0, TableAliasContext);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	updateAssignmentSeq() {
		return this.getRuleContext(0, UpdateAssignmentSeqContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	explain() {
		return this.getRuleContext(0, ExplainContext);
	}
	cte() {
		return this.getRuleContext(0, CteContext);
	}
	fromClause() {
		return this.getRuleContext(0, FromClauseContext);
	}
	whereClause() {
		return this.getRuleContext(0, WhereClauseContext);
	}
	enterRule(listener) {
		if (listener.enterUpdate) {
			listener.enterUpdate(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUpdate) {
			listener.exitUpdate(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUpdate) {
			return visitor.visitUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PauseMTMVContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	PAUSE() {
		return this.getToken(DorisParser.PAUSE, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	JOB() {
		return this.getToken(DorisParser.JOB, 0);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterPauseMTMV) {
			listener.enterPauseMTMV(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPauseMTMV) {
			listener.exitPauseMTMV(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPauseMTMV) {
			return visitor.visitPauseMTMV(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropMTMVContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	DROP() {
		return this.getToken(DorisParser.DROP, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	enterRule(listener) {
		if (listener.enterDropMTMV) {
			listener.enterDropMTMV(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDropMTMV) {
			listener.exitDropMTMV(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDropMTMV) {
			return visitor.visitDropMTMV(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	DELETE() {
		return this.getToken(DorisParser.DELETE, 0);
	}
	FROM() {
		return this.getToken(DorisParser.FROM, 0);
	}
	tableAlias() {
		return this.getRuleContext(0, TableAliasContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	explain() {
		return this.getRuleContext(0, ExplainContext);
	}
	cte() {
		return this.getRuleContext(0, CteContext);
	}
	partitionSpec() {
		return this.getRuleContext(0, PartitionSpecContext);
	}
	USING() {
		return this.getToken(DorisParser.USING, 0);
	}
	relations() {
		return this.getRuleContext(0, RelationsContext);
	}
	whereClause() {
		return this.getRuleContext(0, WhereClauseContext);
	}
	enterRule(listener) {
		if (listener.enterDelete) {
			listener.enterDelete(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDelete) {
			listener.exitDelete(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDelete) {
			return visitor.visitDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateRowPolicyContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CREATE() {
		return this.getToken(DorisParser.CREATE, 0);
	}
	ROW() {
		return this.getToken(DorisParser.ROW, 0);
	}
	POLICY() {
		return this.getToken(DorisParser.POLICY, 0);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	TO() {
		return this.getToken(DorisParser.TO, 0);
	}
	USING() {
		return this.getToken(DorisParser.USING, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	booleanExpression() {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	RESTRICTIVE() {
		return this.getToken(DorisParser.RESTRICTIVE, 0);
	}
	PERMISSIVE() {
		return this.getToken(DorisParser.PERMISSIVE, 0);
	}
	ROLE() {
		return this.getToken(DorisParser.ROLE, 0);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	userIdentify() {
		return this.getRuleContext(0, UserIdentifyContext);
	}
	enterRule(listener) {
		if (listener.enterCreateRowPolicy) {
			listener.enterCreateRowPolicy(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCreateRowPolicy) {
			listener.exitCreateRowPolicy(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCreateRowPolicy) {
			return visitor.visitCreateRowPolicy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MysqlLoadContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LOAD() {
		return this.getToken(DorisParser.LOAD, 0);
	}
	mysqlDataDesc() {
		return this.getRuleContext(0, MysqlDataDescContext);
	}
	PROPERTIES() {
		return this.getToken(DorisParser.PROPERTIES, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	commentSpec() {
		return this.getRuleContext(0, CommentSpecContext);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	enterRule(listener) {
		if (listener.enterMysqlLoad) {
			listener.enterMysqlLoad(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMysqlLoad) {
			listener.exitMysqlLoad(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMysqlLoad) {
			return visitor.visitMysqlLoad(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowConstraintContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SHOW() {
		return this.getToken(DorisParser.SHOW, 0);
	}
	CONSTRAINTS() {
		return this.getToken(DorisParser.CONSTRAINTS, 0);
	}
	FROM() {
		return this.getToken(DorisParser.FROM, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterShowConstraint) {
			listener.enterShowConstraint(this);
		}
	}
	exitRule(listener) {
		if (listener.exitShowConstraint) {
			listener.exitShowConstraint(this);
		}
	}
	accept(visitor) {
		if (visitor.visitShowConstraint) {
			return visitor.visitShowConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterViewContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	ALTER() {
		return this.getToken(DorisParser.ALTER, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	simpleColumnDefs() {
		return this.getRuleContext(0, SimpleColumnDefsContext);
	}
	enterRule(listener) {
		if (listener.enterAlterView) {
			listener.enterAlterView(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAlterView) {
			listener.exitAlterView(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAlterView) {
			return visitor.visitAlterView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsupportedContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	unsupportedStatement() {
		return this.getRuleContext(0, UnsupportedStatementContext);
	}
	enterRule(listener) {
		if (listener.enterUnsupported) {
			listener.enterUnsupported(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUnsupported) {
			listener.exitUnsupported(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUnsupported) {
			return visitor.visitUnsupported(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LoadContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		this._dataDescs = [];
		super.copyFrom(ctx);
	}
	LOAD() {
		return this.getToken(DorisParser.LOAD, 0);
	}
	LABEL() {
		return this.getToken(DorisParser.LABEL, 0);
	}
	LEFT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.LEFT_PAREN);
		} else {
			return this.getToken(DorisParser.LEFT_PAREN, i);
		}
	}
	RIGHT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.RIGHT_PAREN);
		} else {
			return this.getToken(DorisParser.RIGHT_PAREN, i);
		}
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	dataDesc(i) {
		if (i === undefined) {
			return this.getRuleContexts(DataDescContext);
		}
		return this.getRuleContext(i, DataDescContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	withRemoteStorageSystem() {
		return this.getRuleContext(0, WithRemoteStorageSystemContext);
	}
	PROPERTIES() {
		return this.getToken(DorisParser.PROPERTIES, 0);
	}
	commentSpec() {
		return this.getRuleContext(0, CommentSpecContext);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	enterRule(listener) {
		if (listener.enterLoad) {
			listener.enterLoad(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLoad) {
			listener.exitLoad(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLoad) {
			return visitor.visitLoad(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementDefaultContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	explain() {
		return this.getRuleContext(0, ExplainContext);
	}
	outFileClause() {
		return this.getRuleContext(0, OutFileClauseContext);
	}
	enterRule(listener) {
		if (listener.enterStatementDefault) {
			listener.enterStatementDefault(this);
		}
	}
	exitRule(listener) {
		if (listener.exitStatementDefault) {
			listener.exitStatementDefault(this);
		}
	}
	accept(visitor) {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateMTMVContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CREATE() {
		return this.getToken(DorisParser.CREATE, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	LEFT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.LEFT_PAREN);
		} else {
			return this.getToken(DorisParser.LEFT_PAREN, i);
		}
	}
	RIGHT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.RIGHT_PAREN);
		} else {
			return this.getToken(DorisParser.RIGHT_PAREN, i);
		}
	}
	buildMode() {
		return this.getRuleContext(0, BuildModeContext);
	}
	REFRESH() {
		return this.getToken(DorisParser.REFRESH, 0);
	}
	KEY() {
		return this.getToken(DorisParser.KEY, 0);
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	BY(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.BY);
		} else {
			return this.getToken(DorisParser.BY, i);
		}
	}
	mvPartition() {
		return this.getRuleContext(0, MvPartitionContext);
	}
	DISTRIBUTED() {
		return this.getToken(DorisParser.DISTRIBUTED, 0);
	}
	propertyClause() {
		return this.getRuleContext(0, PropertyClauseContext);
	}
	simpleColumnDefs() {
		return this.getRuleContext(0, SimpleColumnDefsContext);
	}
	identifierList(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		}
		return this.getRuleContext(i, IdentifierListContext);
	}
	HASH() {
		return this.getToken(DorisParser.HASH, 0);
	}
	RANDOM() {
		return this.getToken(DorisParser.RANDOM, 0);
	}
	refreshMethod() {
		return this.getRuleContext(0, RefreshMethodContext);
	}
	refreshTrigger() {
		return this.getRuleContext(0, RefreshTriggerContext);
	}
	DUPLICATE() {
		return this.getToken(DorisParser.DUPLICATE, 0);
	}
	BUCKETS() {
		return this.getToken(DorisParser.BUCKETS, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	AUTO() {
		return this.getToken(DorisParser.AUTO, 0);
	}
	enterRule(listener) {
		if (listener.enterCreateMTMV) {
			listener.enterCreateMTMV(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCreateMTMV) {
			listener.exitCreateMTMV(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCreateMTMV) {
			return visitor.visitCreateMTMV(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResumeMTMVContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	RESUME() {
		return this.getToken(DorisParser.RESUME, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	JOB() {
		return this.getToken(DorisParser.JOB, 0);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterResumeMTMV) {
			listener.enterResumeMTMV(this);
		}
	}
	exitRule(listener) {
		if (listener.exitResumeMTMV) {
			listener.exitResumeMTMV(this);
		}
	}
	accept(visitor) {
		if (visitor.visitResumeMTMV) {
			return visitor.visitResumeMTMV(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CancelMTMVTaskContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CANCEL() {
		return this.getToken(DorisParser.CANCEL, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	TASK() {
		return this.getToken(DorisParser.TASK, 0);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterCancelMTMVTask) {
			listener.enterCancelMTMVTask(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCancelMTMVTask) {
			listener.exitCancelMTMVTask(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCancelMTMVTask) {
			return visitor.visitCancelMTMVTask(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateViewContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CREATE() {
		return this.getToken(DorisParser.CREATE, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	simpleColumnDefs() {
		return this.getRuleContext(0, SimpleColumnDefsContext);
	}
	enterRule(listener) {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCreateView) {
			listener.exitCreateView(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropCatalogRecycleBinContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	DROP() {
		return this.getToken(DorisParser.DROP, 0);
	}
	CATALOG() {
		return this.getToken(DorisParser.CATALOG, 0);
	}
	RECYCLE() {
		return this.getToken(DorisParser.RECYCLE, 0);
	}
	BIN() {
		return this.getToken(DorisParser.BIN, 0);
	}
	WHERE() {
		return this.getToken(DorisParser.WHERE, 0);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	enterRule(listener) {
		if (listener.enterDropCatalogRecycleBin) {
			listener.enterDropCatalogRecycleBin(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDropCatalogRecycleBin) {
			listener.exitDropCatalogRecycleBin(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDropCatalogRecycleBin) {
			return visitor.visitDropCatalogRecycleBin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExportContext extends StatementBaseContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	EXPORT() {
		return this.getToken(DorisParser.EXPORT, 0);
	}
	TABLE() {
		return this.getToken(DorisParser.TABLE, 0);
	}
	TO() {
		return this.getToken(DorisParser.TO, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	whereClause() {
		return this.getRuleContext(0, WhereClauseContext);
	}
	propertyClause() {
		return this.getRuleContext(0, PropertyClauseContext);
	}
	withRemoteStorageSystem() {
		return this.getRuleContext(0, WithRemoteStorageSystemContext);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	enterRule(listener) {
		if (listener.enterExport) {
			listener.enterExport(this);
		}
	}
	exitRule(listener) {
		if (listener.exitExport) {
			listener.exitExport(this);
		}
	}
	accept(visitor) {
		if (visitor.visitExport) {
			return visitor.visitExport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsupportedStatementContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_unsupportedStatement;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class SetTransactionContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	TRANSACTION() {
		return this.getToken(DorisParser.TRANSACTION, 0);
	}
	transactionAccessMode() {
		return this.getRuleContext(0, TransactionAccessModeContext);
	}
	isolationLevel() {
		return this.getRuleContext(0, IsolationLevelContext);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	GLOBAL() {
		return this.getToken(DorisParser.GLOBAL, 0);
	}
	LOCAL() {
		return this.getToken(DorisParser.LOCAL, 0);
	}
	SESSION() {
		return this.getToken(DorisParser.SESSION, 0);
	}
	enterRule(listener) {
		if (listener.enterSetTransaction) {
			listener.enterSetTransaction(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetTransaction) {
			listener.exitSetTransaction(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetTransaction) {
			return visitor.visitSetTransaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseCloudClusterContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	USE() {
		return this.getToken(DorisParser.USE, 0);
	}
	ATSIGN() {
		return this.getToken(DorisParser.ATSIGN, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	DOT() {
		return this.getToken(DorisParser.DOT, 0);
	}
	enterRule(listener) {
		if (listener.enterUseCloudCluster) {
			listener.enterUseCloudCluster(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUseCloudCluster) {
			listener.exitUseCloudCluster(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUseCloudCluster) {
			return visitor.visitUseCloudCluster(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetCharsetContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.SET);
		} else {
			return this.getToken(DorisParser.SET, i);
		}
	}
	CHAR() {
		return this.getToken(DorisParser.CHAR, 0);
	}
	CHARSET() {
		return this.getToken(DorisParser.CHARSET, 0);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	enterRule(listener) {
		if (listener.enterSetCharset) {
			listener.enterSetCharset(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetCharset) {
			listener.exitSetCharset(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetCharset) {
			return visitor.visitSetCharset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetNamesContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	NAMES() {
		return this.getToken(DorisParser.NAMES, 0);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterSetNames) {
			listener.enterSetNames(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetNames) {
			listener.exitSetNames(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetNames) {
			return visitor.visitSetNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetCollateContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	NAMES() {
		return this.getToken(DorisParser.NAMES, 0);
	}
	DEFAULT(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.DEFAULT);
		} else {
			return this.getToken(DorisParser.DEFAULT, i);
		}
	}
	identifierOrText(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierOrTextContext);
		}
		return this.getRuleContext(i, IdentifierOrTextContext);
	}
	COLLATE() {
		return this.getToken(DorisParser.COLLATE, 0);
	}
	enterRule(listener) {
		if (listener.enterSetCollate) {
			listener.enterSetCollate(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetCollate) {
			listener.exitSetCollate(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetCollate) {
			return visitor.visitSetCollate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetPasswordContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	PASSWORD(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.PASSWORD);
		} else {
			return this.getToken(DorisParser.PASSWORD, i);
		}
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	FOR() {
		return this.getToken(DorisParser.FOR, 0);
	}
	userIdentify() {
		return this.getRuleContext(0, UserIdentifyContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterSetPassword) {
			listener.enterSetPassword(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetPassword) {
			listener.exitSetPassword(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetPassword) {
			return visitor.visitSetPassword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSystemVariableWithTypeContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	GLOBAL() {
		return this.getToken(DorisParser.GLOBAL, 0);
	}
	LOCAL() {
		return this.getToken(DorisParser.LOCAL, 0);
	}
	SESSION() {
		return this.getToken(DorisParser.SESSION, 0);
	}
	enterRule(listener) {
		if (listener.enterSetSystemVariableWithType) {
			listener.enterSetSystemVariableWithType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetSystemVariableWithType) {
			listener.exitSetSystemVariableWithType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetSystemVariableWithType) {
			return visitor.visitSetSystemVariableWithType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetUserPropertiesContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	PROPERTY() {
		return this.getToken(DorisParser.PROPERTY, 0);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	FOR() {
		return this.getToken(DorisParser.FOR, 0);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	enterRule(listener) {
		if (listener.enterSetUserProperties) {
			listener.enterSetUserProperties(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetUserProperties) {
			listener.exitSetUserProperties(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetUserProperties) {
			return visitor.visitSetUserProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseDatabaseContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	USE() {
		return this.getToken(DorisParser.USE, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	DOT() {
		return this.getToken(DorisParser.DOT, 0);
	}
	enterRule(listener) {
		if (listener.enterUseDatabase) {
			listener.enterUseDatabase(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUseDatabase) {
			listener.exitUseDatabase(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUseDatabase) {
			return visitor.visitUseDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSystemVariableWithoutTypeContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	variable() {
		return this.getRuleContext(0, VariableContext);
	}
	enterRule(listener) {
		if (listener.enterSetSystemVariableWithoutType) {
			listener.enterSetSystemVariableWithoutType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetSystemVariableWithoutType) {
			listener.exitSetSystemVariableWithoutType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetSystemVariableWithoutType) {
			return visitor.visitSetSystemVariableWithoutType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetDefaultStorageVaultContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	STORAGE() {
		return this.getToken(DorisParser.STORAGE, 0);
	}
	VAULT() {
		return this.getToken(DorisParser.VAULT, 0);
	}
	enterRule(listener) {
		if (listener.enterSetDefaultStorageVault) {
			listener.enterSetDefaultStorageVault(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetDefaultStorageVault) {
			listener.exitSetDefaultStorageVault(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetDefaultStorageVault) {
			return visitor.visitSetDefaultStorageVault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetLdapAdminPasswordContext extends UnsupportedStatementContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	LDAP_ADMIN_PASSWORD() {
		return this.getToken(DorisParser.LDAP_ADMIN_PASSWORD, 0);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	PASSWORD() {
		return this.getToken(DorisParser.PASSWORD, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterSetLdapAdminPassword) {
			listener.enterSetLdapAdminPassword(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetLdapAdminPassword) {
			listener.exitSetLdapAdminPassword(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetLdapAdminPassword) {
			return visitor.visitSetLdapAdminPassword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_variable;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class SetUserVariableContext extends VariableContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	ATSIGN() {
		return this.getToken(DorisParser.ATSIGN, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterSetUserVariable) {
			listener.enterSetUserVariable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetUserVariable) {
			listener.exitSetUserVariable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetUserVariable) {
			return visitor.visitSetUserVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSystemVariableContext extends VariableContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	ATSIGN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.ATSIGN);
		} else {
			return this.getToken(DorisParser.ATSIGN, i);
		}
	}
	GLOBAL() {
		return this.getToken(DorisParser.GLOBAL, 0);
	}
	LOCAL() {
		return this.getToken(DorisParser.LOCAL, 0);
	}
	SESSION() {
		return this.getToken(DorisParser.SESSION, 0);
	}
	enterRule(listener) {
		if (listener.enterSetSystemVariable) {
			listener.enterSetSystemVariable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetSystemVariable) {
			listener.exitSetSystemVariable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetSystemVariable) {
			return visitor.visitSetSystemVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TransactionAccessModeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	READ() {
		return this.getToken(DorisParser.READ, 0);
	}
	ONLY() {
		return this.getToken(DorisParser.ONLY, 0);
	}
	WRITE() {
		return this.getToken(DorisParser.WRITE, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_transactionAccessMode;
	}
	enterRule(listener) {
		if (listener.enterTransactionAccessMode) {
			listener.enterTransactionAccessMode(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTransactionAccessMode) {
			listener.exitTransactionAccessMode(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTransactionAccessMode) {
			return visitor.visitTransactionAccessMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsolationLevelContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ISOLATION() {
		return this.getToken(DorisParser.ISOLATION, 0);
	}
	LEVEL() {
		return this.getToken(DorisParser.LEVEL, 0);
	}
	READ() {
		return this.getToken(DorisParser.READ, 0);
	}
	UNCOMMITTED() {
		return this.getToken(DorisParser.UNCOMMITTED, 0);
	}
	COMMITTED() {
		return this.getToken(DorisParser.COMMITTED, 0);
	}
	REPEATABLE() {
		return this.getToken(DorisParser.REPEATABLE, 0);
	}
	SERIALIZABLE() {
		return this.getToken(DorisParser.SERIALIZABLE, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_isolationLevel;
	}
	enterRule(listener) {
		if (listener.enterIsolationLevel) {
			listener.enterIsolationLevel(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIsolationLevel) {
			listener.exitIsolationLevel(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIsolationLevel) {
			return visitor.visitIsolationLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstraintContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PRIMARY() {
		return this.getToken(DorisParser.PRIMARY, 0);
	}
	KEY() {
		return this.getToken(DorisParser.KEY, 0);
	}
	identifierList(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		}
		return this.getRuleContext(i, IdentifierListContext);
	}
	UNIQUE() {
		return this.getToken(DorisParser.UNIQUE, 0);
	}
	FOREIGN() {
		return this.getToken(DorisParser.FOREIGN, 0);
	}
	REFERENCES() {
		return this.getToken(DorisParser.REFERENCES, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_constraint;
	}
	enterRule(listener) {
		if (listener.enterConstraint) {
			listener.enterConstraint(this);
		}
	}
	exitRule(listener) {
		if (listener.exitConstraint) {
			listener.exitConstraint(this);
		}
	}
	accept(visitor) {
		if (visitor.visitConstraint) {
			return visitor.visitConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionSpecContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	PARTITIONS() {
		return this.getToken(DorisParser.PARTITIONS, 0);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	TEMPORARY() {
		return this.getToken(DorisParser.TEMPORARY, 0);
	}
	errorCapturingIdentifier() {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	ASTERISK() {
		return this.getToken(DorisParser.ASTERISK, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_partitionSpec;
	}
	enterRule(listener) {
		if (listener.enterPartitionSpec) {
			listener.enterPartitionSpec(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPartitionSpec) {
			listener.exitPartitionSpec(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPartitionSpec) {
			return visitor.visitPartitionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionTableContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	BY() {
		return this.getToken(DorisParser.BY, 0);
	}
	identityOrFunctionList() {
		return this.getRuleContext(0, IdentityOrFunctionListContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	AUTO() {
		return this.getToken(DorisParser.AUTO, 0);
	}
	RANGE() {
		return this.getToken(DorisParser.RANGE, 0);
	}
	LIST() {
		return this.getToken(DorisParser.LIST, 0);
	}
	partitionsDef() {
		return this.getRuleContext(0, PartitionsDefContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_partitionTable;
	}
	enterRule(listener) {
		if (listener.enterPartitionTable) {
			listener.enterPartitionTable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPartitionTable) {
			listener.exitPartitionTable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPartitionTable) {
			return visitor.visitPartitionTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentityOrFunctionListContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._partitions = [];
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	identityOrFunction(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentityOrFunctionContext);
		}
		return this.getRuleContext(i, IdentityOrFunctionContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_identityOrFunctionList;
	}
	enterRule(listener) {
		if (listener.enterIdentityOrFunctionList) {
			listener.enterIdentityOrFunctionList(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIdentityOrFunctionList) {
			listener.exitIdentityOrFunctionList(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIdentityOrFunctionList) {
			return visitor.visitIdentityOrFunctionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentityOrFunctionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	functionCallExpression() {
		return this.getRuleContext(0, FunctionCallExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_identityOrFunction;
	}
	enterRule(listener) {
		if (listener.enterIdentityOrFunction) {
			listener.enterIdentityOrFunction(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIdentityOrFunction) {
			listener.exitIdentityOrFunction(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIdentityOrFunction) {
			return visitor.visitIdentityOrFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataDescContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._filePaths = [];
		this._filePath = [];
	}
	DATA() {
		return this.getToken(DorisParser.DATA, 0);
	}
	INFILE() {
		return this.getToken(DorisParser.INFILE, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	INTO() {
		return this.getToken(DorisParser.INTO, 0);
	}
	TABLE(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.TABLE);
		} else {
			return this.getToken(DorisParser.TABLE, i);
		}
	}
	STRING_LITERAL(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.STRING_LITERAL);
		} else {
			return this.getToken(DorisParser.STRING_LITERAL, i);
		}
	}
	multipartIdentifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(MultipartIdentifierContext);
		}
		return this.getRuleContext(i, MultipartIdentifierContext);
	}
	mergeType() {
		return this.getRuleContext(0, MergeTypeContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	COLUMNS() {
		return this.getToken(DorisParser.COLUMNS, 0);
	}
	TERMINATED(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.TERMINATED);
		} else {
			return this.getToken(DorisParser.TERMINATED, i);
		}
	}
	BY(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.BY);
		} else {
			return this.getToken(DorisParser.BY, i);
		}
	}
	LINES() {
		return this.getToken(DorisParser.LINES, 0);
	}
	FORMAT() {
		return this.getToken(DorisParser.FORMAT, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	propertyClause() {
		return this.getRuleContext(0, PropertyClauseContext);
	}
	identifierList(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		}
		return this.getRuleContext(i, IdentifierListContext);
	}
	identifierOrStringLiteral() {
		return this.getRuleContext(0, IdentifierOrStringLiteralContext);
	}
	colFromPath() {
		return this.getRuleContext(0, ColFromPathContext);
	}
	colMappingList() {
		return this.getRuleContext(0, ColMappingListContext);
	}
	preFilterClause() {
		return this.getRuleContext(0, PreFilterClauseContext);
	}
	whereClause() {
		return this.getRuleContext(0, WhereClauseContext);
	}
	deleteOnClause() {
		return this.getRuleContext(0, DeleteOnClauseContext);
	}
	sequenceColClause() {
		return this.getRuleContext(0, SequenceColClauseContext);
	}
	WITH() {
		return this.getToken(DorisParser.WITH, 0);
	}
	FROM() {
		return this.getToken(DorisParser.FROM, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_dataDesc;
	}
	enterRule(listener) {
		if (listener.enterDataDesc) {
			listener.enterDataDesc(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDataDesc) {
			listener.exitDataDesc(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDataDesc) {
			return visitor.visitDataDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BuildModeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	BUILD() {
		return this.getToken(DorisParser.BUILD, 0);
	}
	IMMEDIATE() {
		return this.getToken(DorisParser.IMMEDIATE, 0);
	}
	DEFERRED() {
		return this.getToken(DorisParser.DEFERRED, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_buildMode;
	}
	enterRule(listener) {
		if (listener.enterBuildMode) {
			listener.enterBuildMode(this);
		}
	}
	exitRule(listener) {
		if (listener.exitBuildMode) {
			listener.exitBuildMode(this);
		}
	}
	accept(visitor) {
		if (visitor.visitBuildMode) {
			return visitor.visitBuildMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshTriggerContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	MANUAL() {
		return this.getToken(DorisParser.MANUAL, 0);
	}
	SCHEDULE() {
		return this.getToken(DorisParser.SCHEDULE, 0);
	}
	refreshSchedule() {
		return this.getRuleContext(0, RefreshScheduleContext);
	}
	COMMIT() {
		return this.getToken(DorisParser.COMMIT, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_refreshTrigger;
	}
	enterRule(listener) {
		if (listener.enterRefreshTrigger) {
			listener.enterRefreshTrigger(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRefreshTrigger) {
			listener.exitRefreshTrigger(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRefreshTrigger) {
			return visitor.visitRefreshTrigger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshScheduleContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EVERY() {
		return this.getToken(DorisParser.EVERY, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	STARTS() {
		return this.getToken(DorisParser.STARTS, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_refreshSchedule;
	}
	enterRule(listener) {
		if (listener.enterRefreshSchedule) {
			listener.enterRefreshSchedule(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRefreshSchedule) {
			listener.exitRefreshSchedule(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRefreshSchedule) {
			return visitor.visitRefreshSchedule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefreshMethodContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	COMPLETE() {
		return this.getToken(DorisParser.COMPLETE, 0);
	}
	AUTO() {
		return this.getToken(DorisParser.AUTO, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_refreshMethod;
	}
	enterRule(listener) {
		if (listener.enterRefreshMethod) {
			listener.enterRefreshMethod(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRefreshMethod) {
			listener.exitRefreshMethod(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRefreshMethod) {
			return visitor.visitRefreshMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MvPartitionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	functionCallExpression() {
		return this.getRuleContext(0, FunctionCallExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_mvPartition;
	}
	enterRule(listener) {
		if (listener.enterMvPartition) {
			listener.enterMvPartition(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMvPartition) {
			listener.exitMvPartition(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMvPartition) {
			return visitor.visitMvPartition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierOrStringLiteralContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_identifierOrStringLiteral;
	}
	enterRule(listener) {
		if (listener.enterIdentifierOrStringLiteral) {
			listener.enterIdentifierOrStringLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIdentifierOrStringLiteral) {
			listener.exitIdentifierOrStringLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIdentifierOrStringLiteral) {
			return visitor.visitIdentifierOrStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierOrTextContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	errorCapturingIdentifier() {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	LEADING_STRING() {
		return this.getToken(DorisParser.LEADING_STRING, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_identifierOrText;
	}
	enterRule(listener) {
		if (listener.enterIdentifierOrText) {
			listener.enterIdentifierOrText(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIdentifierOrText) {
			listener.exitIdentifierOrText(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIdentifierOrText) {
			return visitor.visitIdentifierOrText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UserIdentifyContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifierOrText(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierOrTextContext);
		}
		return this.getRuleContext(i, IdentifierOrTextContext);
	}
	ATSIGN() {
		return this.getToken(DorisParser.ATSIGN, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_userIdentify;
	}
	enterRule(listener) {
		if (listener.enterUserIdentify) {
			listener.enterUserIdentify(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUserIdentify) {
			listener.exitUserIdentify(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUserIdentify) {
			return visitor.visitUserIdentify(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EXPLAIN() {
		return this.getToken(DorisParser.EXPLAIN, 0);
	}
	DESC() {
		return this.getToken(DorisParser.DESC, 0);
	}
	DESCRIBE() {
		return this.getToken(DorisParser.DESCRIBE, 0);
	}
	PROCESS() {
		return this.getToken(DorisParser.PROCESS, 0);
	}
	planType() {
		return this.getRuleContext(0, PlanTypeContext);
	}
	VERBOSE() {
		return this.getToken(DorisParser.VERBOSE, 0);
	}
	TREE() {
		return this.getToken(DorisParser.TREE, 0);
	}
	GRAPH() {
		return this.getToken(DorisParser.GRAPH, 0);
	}
	PLAN() {
		return this.getToken(DorisParser.PLAN, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_explain;
	}
	enterRule(listener) {
		if (listener.enterExplain) {
			listener.enterExplain(this);
		}
	}
	exitRule(listener) {
		if (listener.exitExplain) {
			listener.exitExplain(this);
		}
	}
	accept(visitor) {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PlanTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PARSED() {
		return this.getToken(DorisParser.PARSED, 0);
	}
	ANALYZED() {
		return this.getToken(DorisParser.ANALYZED, 0);
	}
	REWRITTEN() {
		return this.getToken(DorisParser.REWRITTEN, 0);
	}
	LOGICAL() {
		return this.getToken(DorisParser.LOGICAL, 0);
	}
	OPTIMIZED() {
		return this.getToken(DorisParser.OPTIMIZED, 0);
	}
	PHYSICAL() {
		return this.getToken(DorisParser.PHYSICAL, 0);
	}
	SHAPE() {
		return this.getToken(DorisParser.SHAPE, 0);
	}
	MEMO() {
		return this.getToken(DorisParser.MEMO, 0);
	}
	ALL() {
		return this.getToken(DorisParser.ALL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_planType;
	}
	enterRule(listener) {
		if (listener.enterPlanType) {
			listener.enterPlanType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPlanType) {
			listener.exitPlanType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPlanType) {
			return visitor.visitPlanType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MergeTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	APPEND() {
		return this.getToken(DorisParser.APPEND, 0);
	}
	DELETE() {
		return this.getToken(DorisParser.DELETE, 0);
	}
	MERGE() {
		return this.getToken(DorisParser.MERGE, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_mergeType;
	}
	enterRule(listener) {
		if (listener.enterMergeType) {
			listener.enterMergeType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMergeType) {
			listener.exitMergeType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMergeType) {
			return visitor.visitMergeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreFilterClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PRECEDING() {
		return this.getToken(DorisParser.PRECEDING, 0);
	}
	FILTER() {
		return this.getToken(DorisParser.FILTER, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_preFilterClause;
	}
	enterRule(listener) {
		if (listener.enterPreFilterClause) {
			listener.enterPreFilterClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPreFilterClause) {
			listener.exitPreFilterClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPreFilterClause) {
			return visitor.visitPreFilterClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteOnClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	DELETE() {
		return this.getToken(DorisParser.DELETE, 0);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_deleteOnClause;
	}
	enterRule(listener) {
		if (listener.enterDeleteOnClause) {
			listener.enterDeleteOnClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDeleteOnClause) {
			listener.exitDeleteOnClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDeleteOnClause) {
			return visitor.visitDeleteOnClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SequenceColClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ORDER() {
		return this.getToken(DorisParser.ORDER, 0);
	}
	BY() {
		return this.getToken(DorisParser.BY, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_sequenceColClause;
	}
	enterRule(listener) {
		if (listener.enterSequenceColClause) {
			listener.enterSequenceColClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSequenceColClause) {
			listener.exitSequenceColClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSequenceColClause) {
			return visitor.visitSequenceColClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColFromPathContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	COLUMNS() {
		return this.getToken(DorisParser.COLUMNS, 0);
	}
	FROM() {
		return this.getToken(DorisParser.FROM, 0);
	}
	PATH() {
		return this.getToken(DorisParser.PATH, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_colFromPath;
	}
	enterRule(listener) {
		if (listener.enterColFromPath) {
			listener.enterColFromPath(this);
		}
	}
	exitRule(listener) {
		if (listener.exitColFromPath) {
			listener.exitColFromPath(this);
		}
	}
	accept(visitor) {
		if (visitor.visitColFromPath) {
			return visitor.visitColFromPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColMappingListContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._mappingSet = [];
	}
	SET() {
		return this.getToken(DorisParser.SET, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	mappingExpr(i) {
		if (i === undefined) {
			return this.getRuleContexts(MappingExprContext);
		}
		return this.getRuleContext(i, MappingExprContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_colMappingList;
	}
	enterRule(listener) {
		if (listener.enterColMappingList) {
			listener.enterColMappingList(this);
		}
	}
	exitRule(listener) {
		if (listener.exitColMappingList) {
			listener.exitColMappingList(this);
		}
	}
	accept(visitor) {
		if (visitor.visitColMappingList) {
			return visitor.visitColMappingList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MappingExprContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_mappingExpr;
	}
	enterRule(listener) {
		if (listener.enterMappingExpr) {
			listener.enterMappingExpr(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMappingExpr) {
			listener.exitMappingExpr(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMappingExpr) {
			return visitor.visitMappingExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WithRemoteStorageSystemContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	resourceDesc() {
		return this.getRuleContext(0, ResourceDescContext);
	}
	WITH() {
		return this.getToken(DorisParser.WITH, 0);
	}
	S3() {
		return this.getToken(DorisParser.S3, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	HDFS() {
		return this.getToken(DorisParser.HDFS, 0);
	}
	LOCAL() {
		return this.getToken(DorisParser.LOCAL, 0);
	}
	BROKER() {
		return this.getToken(DorisParser.BROKER, 0);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_withRemoteStorageSystem;
	}
	enterRule(listener) {
		if (listener.enterWithRemoteStorageSystem) {
			listener.enterWithRemoteStorageSystem(this);
		}
	}
	exitRule(listener) {
		if (listener.exitWithRemoteStorageSystem) {
			listener.exitWithRemoteStorageSystem(this);
		}
	}
	accept(visitor) {
		if (visitor.visitWithRemoteStorageSystem) {
			return visitor.visitWithRemoteStorageSystem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResourceDescContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	WITH() {
		return this.getToken(DorisParser.WITH, 0);
	}
	RESOURCE() {
		return this.getToken(DorisParser.RESOURCE, 0);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_resourceDesc;
	}
	enterRule(listener) {
		if (listener.enterResourceDesc) {
			listener.enterResourceDesc(this);
		}
	}
	exitRule(listener) {
		if (listener.exitResourceDesc) {
			listener.exitResourceDesc(this);
		}
	}
	accept(visitor) {
		if (visitor.visitResourceDesc) {
			return visitor.visitResourceDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MysqlDataDescContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	DATA() {
		return this.getToken(DorisParser.DATA, 0);
	}
	INFILE() {
		return this.getToken(DorisParser.INFILE, 0);
	}
	INTO() {
		return this.getToken(DorisParser.INTO, 0);
	}
	TABLE() {
		return this.getToken(DorisParser.TABLE, 0);
	}
	STRING_LITERAL(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.STRING_LITERAL);
		} else {
			return this.getToken(DorisParser.STRING_LITERAL, i);
		}
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	LOCAL() {
		return this.getToken(DorisParser.LOCAL, 0);
	}
	booleanValue() {
		return this.getRuleContext(0, BooleanValueContext);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	COLUMNS() {
		return this.getToken(DorisParser.COLUMNS, 0);
	}
	TERMINATED(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.TERMINATED);
		} else {
			return this.getToken(DorisParser.TERMINATED, i);
		}
	}
	BY(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.BY);
		} else {
			return this.getToken(DorisParser.BY, i);
		}
	}
	LINES() {
		return this.getToken(DorisParser.LINES, 0);
	}
	skipLines() {
		return this.getRuleContext(0, SkipLinesContext);
	}
	colMappingList() {
		return this.getRuleContext(0, ColMappingListContext);
	}
	propertyClause() {
		return this.getRuleContext(0, PropertyClauseContext);
	}
	identifierList(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		}
		return this.getRuleContext(i, IdentifierListContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_mysqlDataDesc;
	}
	enterRule(listener) {
		if (listener.enterMysqlDataDesc) {
			listener.enterMysqlDataDesc(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMysqlDataDesc) {
			listener.exitMysqlDataDesc(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMysqlDataDesc) {
			return visitor.visitMysqlDataDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SkipLinesContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	IGNORE() {
		return this.getToken(DorisParser.IGNORE, 0);
	}
	LINES() {
		return this.getToken(DorisParser.LINES, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	ROWS() {
		return this.getToken(DorisParser.ROWS, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_skipLines;
	}
	enterRule(listener) {
		if (listener.enterSkipLines) {
			listener.enterSkipLines(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSkipLines) {
			listener.exitSkipLines(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSkipLines) {
			return visitor.visitSkipLines(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OutFileClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	INTO() {
		return this.getToken(DorisParser.INTO, 0);
	}
	OUTFILE() {
		return this.getToken(DorisParser.OUTFILE, 0);
	}
	constant() {
		return this.getRuleContext(0, ConstantContext);
	}
	FORMAT() {
		return this.getToken(DorisParser.FORMAT, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	propertyClause() {
		return this.getRuleContext(0, PropertyClauseContext);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_outFileClause;
	}
	enterRule(listener) {
		if (listener.enterOutFileClause) {
			listener.enterOutFileClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitOutFileClause) {
			listener.exitOutFileClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitOutFileClause) {
			return visitor.visitOutFileClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	queryTerm() {
		return this.getRuleContext(0, QueryTermContext);
	}
	queryOrganization() {
		return this.getRuleContext(0, QueryOrganizationContext);
	}
	cte() {
		return this.getRuleContext(0, CteContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_query;
	}
	enterRule(listener) {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	exitRule(listener) {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	accept(visitor) {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryTermContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_queryTerm;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	queryPrimary() {
		return this.getRuleContext(0, QueryPrimaryContext);
	}
	enterRule(listener) {
		if (listener.enterQueryTermDefault) {
			listener.enterQueryTermDefault(this);
		}
	}
	exitRule(listener) {
		if (listener.exitQueryTermDefault) {
			listener.exitQueryTermDefault(this);
		}
	}
	accept(visitor) {
		if (visitor.visitQueryTermDefault) {
			return visitor.visitQueryTermDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetOperationContext extends QueryTermContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	queryTerm(i) {
		if (i === undefined) {
			return this.getRuleContexts(QueryTermContext);
		}
		return this.getRuleContext(i, QueryTermContext);
	}
	UNION() {
		return this.getToken(DorisParser.UNION, 0);
	}
	EXCEPT() {
		return this.getToken(DorisParser.EXCEPT, 0);
	}
	MINUS() {
		return this.getToken(DorisParser.MINUS, 0);
	}
	INTERSECT() {
		return this.getToken(DorisParser.INTERSECT, 0);
	}
	setQuantifier() {
		return this.getRuleContext(0, SetQuantifierContext);
	}
	enterRule(listener) {
		if (listener.enterSetOperation) {
			listener.enterSetOperation(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetOperation) {
			listener.exitSetOperation(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetQuantifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	DISTINCT() {
		return this.getToken(DorisParser.DISTINCT, 0);
	}
	ALL() {
		return this.getToken(DorisParser.ALL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_setQuantifier;
	}
	enterRule(listener) {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSetQuantifier) {
			listener.exitSetQuantifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_queryPrimary;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterSubquery) {
			listener.enterSubquery(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSubquery) {
			listener.exitSubquery(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValuesTableContext extends QueryPrimaryContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	inlineTable() {
		return this.getRuleContext(0, InlineTableContext);
	}
	enterRule(listener) {
		if (listener.enterValuesTable) {
			listener.enterValuesTable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitValuesTable) {
			listener.exitValuesTable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitValuesTable) {
			return visitor.visitValuesTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	querySpecification() {
		return this.getRuleContext(0, QuerySpecificationContext);
	}
	enterRule(listener) {
		if (listener.enterQueryPrimaryDefault) {
			listener.enterQueryPrimaryDefault(this);
		}
	}
	exitRule(listener) {
		if (listener.exitQueryPrimaryDefault) {
			listener.exitQueryPrimaryDefault(this);
		}
	}
	accept(visitor) {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuerySpecificationContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_querySpecification;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class RegularQuerySpecificationContext extends QuerySpecificationContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	selectClause() {
		return this.getRuleContext(0, SelectClauseContext);
	}
	queryOrganization() {
		return this.getRuleContext(0, QueryOrganizationContext);
	}
	intoClause() {
		return this.getRuleContext(0, IntoClauseContext);
	}
	fromClause() {
		return this.getRuleContext(0, FromClauseContext);
	}
	whereClause() {
		return this.getRuleContext(0, WhereClauseContext);
	}
	aggClause() {
		return this.getRuleContext(0, AggClauseContext);
	}
	havingClause() {
		return this.getRuleContext(0, HavingClauseContext);
	}
	enterRule(listener) {
		if (listener.enterRegularQuerySpecification) {
			listener.enterRegularQuerySpecification(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRegularQuerySpecification) {
			listener.exitRegularQuerySpecification(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRegularQuerySpecification) {
			return visitor.visitRegularQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CteContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	WITH() {
		return this.getToken(DorisParser.WITH, 0);
	}
	aliasQuery(i) {
		if (i === undefined) {
			return this.getRuleContexts(AliasQueryContext);
		}
		return this.getRuleContext(i, AliasQueryContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_cte;
	}
	enterRule(listener) {
		if (listener.enterCte) {
			listener.enterCte(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCte) {
			listener.exitCte(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCte) {
			return visitor.visitCte(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasQueryContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	columnAliases() {
		return this.getRuleContext(0, ColumnAliasesContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_aliasQuery;
	}
	enterRule(listener) {
		if (listener.enterAliasQuery) {
			listener.enterAliasQuery(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAliasQuery) {
			listener.exitAliasQuery(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAliasQuery) {
			return visitor.visitAliasQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnAliasesContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_columnAliases;
	}
	enterRule(listener) {
		if (listener.enterColumnAliases) {
			listener.enterColumnAliases(this);
		}
	}
	exitRule(listener) {
		if (listener.exitColumnAliases) {
			listener.exitColumnAliases(this);
		}
	}
	accept(visitor) {
		if (visitor.visitColumnAliases) {
			return visitor.visitColumnAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	SELECT() {
		return this.getToken(DorisParser.SELECT, 0);
	}
	selectColumnClause() {
		return this.getRuleContext(0, SelectColumnClauseContext);
	}
	selectHint() {
		return this.getRuleContext(0, SelectHintContext);
	}
	DISTINCT() {
		return this.getToken(DorisParser.DISTINCT, 0);
	}
	ALL() {
		return this.getToken(DorisParser.ALL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_selectClause;
	}
	enterRule(listener) {
		if (listener.enterSelectClause) {
			listener.enterSelectClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSelectClause) {
			listener.exitSelectClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSelectClause) {
			return visitor.visitSelectClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectColumnClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	namedExpressionSeq() {
		return this.getRuleContext(0, NamedExpressionSeqContext);
	}
	ASTERISK() {
		return this.getToken(DorisParser.ASTERISK, 0);
	}
	EXCEPT() {
		return this.getToken(DorisParser.EXCEPT, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_selectColumnClause;
	}
	enterRule(listener) {
		if (listener.enterSelectColumnClause) {
			listener.enterSelectColumnClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSelectColumnClause) {
			listener.exitSelectColumnClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSelectColumnClause) {
			return visitor.visitSelectColumnClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhereClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	WHERE() {
		return this.getToken(DorisParser.WHERE, 0);
	}
	booleanExpression() {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_whereClause;
	}
	enterRule(listener) {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FromClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	FROM() {
		return this.getToken(DorisParser.FROM, 0);
	}
	relations() {
		return this.getRuleContext(0, RelationsContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_fromClause;
	}
	enterRule(listener) {
		if (listener.enterFromClause) {
			listener.enterFromClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFromClause) {
			listener.exitFromClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFromClause) {
			return visitor.visitFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntoClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	INTO() {
		return this.getToken(DorisParser.INTO, 0);
	}
	tableRow(i) {
		if (i === undefined) {
			return this.getRuleContexts(TableRowContext);
		}
		return this.getRuleContext(i, TableRowContext);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	bulkCollectClause() {
		return this.getRuleContext(0, BulkCollectClauseContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_intoClause;
	}
	enterRule(listener) {
		if (listener.enterIntoClause) {
			listener.enterIntoClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIntoClause) {
			listener.exitIntoClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIntoClause) {
			return visitor.visitIntoClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BulkCollectClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	BULK() {
		return this.getToken(DorisParser.BULK, 0);
	}
	COLLECT() {
		return this.getToken(DorisParser.COLLECT, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_bulkCollectClause;
	}
	enterRule(listener) {
		if (listener.enterBulkCollectClause) {
			listener.enterBulkCollectClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitBulkCollectClause) {
			listener.exitBulkCollectClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitBulkCollectClause) {
			return visitor.visitBulkCollectClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableRowContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_tableRow;
	}
	enterRule(listener) {
		if (listener.enterTableRow) {
			listener.enterTableRow(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTableRow) {
			listener.exitTableRow(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTableRow) {
			return visitor.visitTableRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	relation(i) {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		}
		return this.getRuleContext(i, RelationContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_relations;
	}
	enterRule(listener) {
		if (listener.enterRelations) {
			listener.enterRelations(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRelations) {
			listener.exitRelations(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRelations) {
			return visitor.visitRelations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	relationPrimary() {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	joinRelation(i) {
		if (i === undefined) {
			return this.getRuleContexts(JoinRelationContext);
		}
		return this.getRuleContext(i, JoinRelationContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_relation;
	}
	enterRule(listener) {
		if (listener.enterRelation) {
			listener.enterRelation(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRelation) {
			listener.exitRelation(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRelation) {
			return visitor.visitRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinRelationContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	JOIN() {
		return this.getToken(DorisParser.JOIN, 0);
	}
	relationPrimary() {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	joinType() {
		return this.getRuleContext(0, JoinTypeContext);
	}
	distributeType() {
		return this.getRuleContext(0, DistributeTypeContext);
	}
	joinCriteria() {
		return this.getRuleContext(0, JoinCriteriaContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_joinRelation;
	}
	enterRule(listener) {
		if (listener.enterJoinRelation) {
			listener.enterJoinRelation(this);
		}
	}
	exitRule(listener) {
		if (listener.exitJoinRelation) {
			listener.exitJoinRelation(this);
		}
	}
	accept(visitor) {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistributeTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_distributeType;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class CommentDistributeTypeContext extends DistributeTypeContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	HINT_START() {
		return this.getToken(DorisParser.HINT_START, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	HINT_END() {
		return this.getToken(DorisParser.HINT_END, 0);
	}
	enterRule(listener) {
		if (listener.enterCommentDistributeType) {
			listener.enterCommentDistributeType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCommentDistributeType) {
			listener.exitCommentDistributeType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCommentDistributeType) {
			return visitor.visitCommentDistributeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketDistributeTypeContext extends DistributeTypeContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_BRACKET() {
		return this.getToken(DorisParser.LEFT_BRACKET, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	RIGHT_BRACKET() {
		return this.getToken(DorisParser.RIGHT_BRACKET, 0);
	}
	enterRule(listener) {
		if (listener.enterBracketDistributeType) {
			listener.enterBracketDistributeType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitBracketDistributeType) {
			listener.exitBracketDistributeType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitBracketDistributeType) {
			return visitor.visitBracketDistributeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationHintContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_relationHint;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class BracketRelationHintContext extends RelationHintContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_BRACKET() {
		return this.getToken(DorisParser.LEFT_BRACKET, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	RIGHT_BRACKET() {
		return this.getToken(DorisParser.RIGHT_BRACKET, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	enterRule(listener) {
		if (listener.enterBracketRelationHint) {
			listener.enterBracketRelationHint(this);
		}
	}
	exitRule(listener) {
		if (listener.exitBracketRelationHint) {
			listener.exitBracketRelationHint(this);
		}
	}
	accept(visitor) {
		if (visitor.visitBracketRelationHint) {
			return visitor.visitBracketRelationHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentRelationHintContext extends RelationHintContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	HINT_START() {
		return this.getToken(DorisParser.HINT_START, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	HINT_END() {
		return this.getToken(DorisParser.HINT_END, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	enterRule(listener) {
		if (listener.enterCommentRelationHint) {
			listener.enterCommentRelationHint(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCommentRelationHint) {
			listener.exitCommentRelationHint(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCommentRelationHint) {
			return visitor.visitCommentRelationHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AggClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	GROUP() {
		return this.getToken(DorisParser.GROUP, 0);
	}
	BY() {
		return this.getToken(DorisParser.BY, 0);
	}
	groupingElement() {
		return this.getRuleContext(0, GroupingElementContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_aggClause;
	}
	enterRule(listener) {
		if (listener.enterAggClause) {
			listener.enterAggClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAggClause) {
			listener.exitAggClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAggClause) {
			return visitor.visitAggClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupingElementContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ROLLUP() {
		return this.getToken(DorisParser.ROLLUP, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	CUBE() {
		return this.getToken(DorisParser.CUBE, 0);
	}
	GROUPING() {
		return this.getToken(DorisParser.GROUPING, 0);
	}
	SETS() {
		return this.getToken(DorisParser.SETS, 0);
	}
	groupingSet(i) {
		if (i === undefined) {
			return this.getRuleContexts(GroupingSetContext);
		}
		return this.getRuleContext(i, GroupingSetContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_groupingElement;
	}
	enterRule(listener) {
		if (listener.enterGroupingElement) {
			listener.enterGroupingElement(this);
		}
	}
	exitRule(listener) {
		if (listener.exitGroupingElement) {
			listener.exitGroupingElement(this);
		}
	}
	accept(visitor) {
		if (visitor.visitGroupingElement) {
			return visitor.visitGroupingElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupingSetContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_groupingSet;
	}
	enterRule(listener) {
		if (listener.enterGroupingSet) {
			listener.enterGroupingSet(this);
		}
	}
	exitRule(listener) {
		if (listener.exitGroupingSet) {
			listener.exitGroupingSet(this);
		}
	}
	accept(visitor) {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HavingClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	HAVING() {
		return this.getToken(DorisParser.HAVING, 0);
	}
	booleanExpression() {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_havingClause;
	}
	enterRule(listener) {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitHavingClause) {
			listener.exitHavingClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectHintContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._hintStatements = [];
	}
	HINT_START() {
		return this.getToken(DorisParser.HINT_START, 0);
	}
	HINT_END() {
		return this.getToken(DorisParser.HINT_END, 0);
	}
	hintStatement(i) {
		if (i === undefined) {
			return this.getRuleContexts(HintStatementContext);
		}
		return this.getRuleContext(i, HintStatementContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_selectHint;
	}
	enterRule(listener) {
		if (listener.enterSelectHint) {
			listener.enterSelectHint(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSelectHint) {
			listener.exitSelectHint(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSelectHint) {
			return visitor.visitSelectHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HintStatementContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._parameters = [];
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	hintAssignment(i) {
		if (i === undefined) {
			return this.getRuleContexts(HintAssignmentContext);
		}
		return this.getRuleContext(i, HintAssignmentContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_hintStatement;
	}
	enterRule(listener) {
		if (listener.enterHintStatement) {
			listener.enterHintStatement(this);
		}
	}
	exitRule(listener) {
		if (listener.exitHintStatement) {
			listener.exitHintStatement(this);
		}
	}
	accept(visitor) {
		if (visitor.visitHintStatement) {
			return visitor.visitHintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HintAssignmentContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	constant() {
		return this.getRuleContext(0, ConstantContext);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_hintAssignment;
	}
	enterRule(listener) {
		if (listener.enterHintAssignment) {
			listener.enterHintAssignment(this);
		}
	}
	exitRule(listener) {
		if (listener.exitHintAssignment) {
			listener.exitHintAssignment(this);
		}
	}
	accept(visitor) {
		if (visitor.visitHintAssignment) {
			return visitor.visitHintAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateAssignmentContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_updateAssignment;
	}
	enterRule(listener) {
		if (listener.enterUpdateAssignment) {
			listener.enterUpdateAssignment(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUpdateAssignment) {
			listener.exitUpdateAssignment(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUpdateAssignment) {
			return visitor.visitUpdateAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpdateAssignmentSeqContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._assignments = [];
	}
	updateAssignment(i) {
		if (i === undefined) {
			return this.getRuleContexts(UpdateAssignmentContext);
		}
		return this.getRuleContext(i, UpdateAssignmentContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_updateAssignmentSeq;
	}
	enterRule(listener) {
		if (listener.enterUpdateAssignmentSeq) {
			listener.enterUpdateAssignmentSeq(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUpdateAssignmentSeq) {
			listener.exitUpdateAssignmentSeq(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUpdateAssignmentSeq) {
			return visitor.visitUpdateAssignmentSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LateralViewContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._columnNames = [];
	}
	LATERAL() {
		return this.getToken(DorisParser.LATERAL, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_lateralView;
	}
	enterRule(listener) {
		if (listener.enterLateralView) {
			listener.enterLateralView(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLateralView) {
			listener.exitLateralView(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLateralView) {
			return visitor.visitLateralView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryOrganizationContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	sortClause() {
		return this.getRuleContext(0, SortClauseContext);
	}
	limitClause() {
		return this.getRuleContext(0, LimitClauseContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_queryOrganization;
	}
	enterRule(listener) {
		if (listener.enterQueryOrganization) {
			listener.enterQueryOrganization(this);
		}
	}
	exitRule(listener) {
		if (listener.exitQueryOrganization) {
			listener.exitQueryOrganization(this);
		}
	}
	accept(visitor) {
		if (visitor.visitQueryOrganization) {
			return visitor.visitQueryOrganization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SortClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ORDER() {
		return this.getToken(DorisParser.ORDER, 0);
	}
	BY() {
		return this.getToken(DorisParser.BY, 0);
	}
	sortItem(i) {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		}
		return this.getRuleContext(i, SortItemContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_sortClause;
	}
	enterRule(listener) {
		if (listener.enterSortClause) {
			listener.enterSortClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSortClause) {
			listener.exitSortClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSortClause) {
			return visitor.visitSortClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SortItemContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	NULLS() {
		return this.getToken(DorisParser.NULLS, 0);
	}
	FIRST() {
		return this.getToken(DorisParser.FIRST, 0);
	}
	LAST() {
		return this.getToken(DorisParser.LAST, 0);
	}
	ASC() {
		return this.getToken(DorisParser.ASC, 0);
	}
	DESC() {
		return this.getToken(DorisParser.DESC, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_sortItem;
	}
	enterRule(listener) {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSortItem) {
			listener.exitSortItem(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LimitClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	LIMIT() {
		return this.getToken(DorisParser.LIMIT, 0);
	}
	INTEGER_VALUE(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.INTEGER_VALUE);
		} else {
			return this.getToken(DorisParser.INTEGER_VALUE, i);
		}
	}
	OFFSET() {
		return this.getToken(DorisParser.OFFSET, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_limitClause;
	}
	enterRule(listener) {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	BY() {
		return this.getToken(DorisParser.BY, 0);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_partitionClause;
	}
	enterRule(listener) {
		if (listener.enterPartitionClause) {
			listener.enterPartitionClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPartitionClause) {
			listener.exitPartitionClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPartitionClause) {
			return visitor.visitPartitionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	INNER() {
		return this.getToken(DorisParser.INNER, 0);
	}
	CROSS() {
		return this.getToken(DorisParser.CROSS, 0);
	}
	LEFT() {
		return this.getToken(DorisParser.LEFT, 0);
	}
	OUTER() {
		return this.getToken(DorisParser.OUTER, 0);
	}
	RIGHT() {
		return this.getToken(DorisParser.RIGHT, 0);
	}
	FULL() {
		return this.getToken(DorisParser.FULL, 0);
	}
	SEMI() {
		return this.getToken(DorisParser.SEMI, 0);
	}
	ANTI() {
		return this.getToken(DorisParser.ANTI, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_joinType;
	}
	enterRule(listener) {
		if (listener.enterJoinType) {
			listener.enterJoinType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitJoinType) {
			listener.exitJoinType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinCriteriaContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	booleanExpression() {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	USING() {
		return this.getToken(DorisParser.USING, 0);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_joinCriteria;
	}
	enterRule(listener) {
		if (listener.enterJoinCriteria) {
			listener.enterJoinCriteria(this);
		}
	}
	exitRule(listener) {
		if (listener.exitJoinCriteria) {
			listener.exitJoinCriteria(this);
		}
	}
	accept(visitor) {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierListContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	identifierSeq() {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_identifierList;
	}
	enterRule(listener) {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierSeqContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._ident = [];
	}
	errorCapturingIdentifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(ErrorCapturingIdentifierContext);
		}
		return this.getRuleContext(i, ErrorCapturingIdentifierContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_identifierSeq;
	}
	enterRule(listener) {
		if (listener.enterIdentifierSeq) {
			listener.enterIdentifierSeq(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIdentifierSeq) {
			listener.exitIdentifierSeq(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIdentifierSeq) {
			return visitor.visitIdentifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptScanParamsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ATSIGN() {
		return this.getToken(DorisParser.ATSIGN, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_optScanParams;
	}
	enterRule(listener) {
		if (listener.enterOptScanParams) {
			listener.enterOptScanParams(this);
		}
	}
	exitRule(listener) {
		if (listener.exitOptScanParams) {
			listener.exitOptScanParams(this);
		}
	}
	accept(visitor) {
		if (visitor.visitOptScanParams) {
			return visitor.visitOptScanParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationPrimaryContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_relationPrimary;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class TableValuedFunctionContext extends RelationPrimaryContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	tableAlias() {
		return this.getRuleContext(0, TableAliasContext);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	enterRule(listener) {
		if (listener.enterTableValuedFunction) {
			listener.enterTableValuedFunction(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTableValuedFunction) {
			listener.exitTableValuedFunction(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTableValuedFunction) {
			return visitor.visitTableValuedFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationListContext extends RelationPrimaryContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	relations() {
		return this.getRuleContext(0, RelationsContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterRelationList) {
			listener.enterRelationList(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRelationList) {
			listener.exitRelationList(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRelationList) {
			return visitor.visitRelationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AliasedQueryContext extends RelationPrimaryContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	tableAlias() {
		return this.getRuleContext(0, TableAliasContext);
	}
	lateralView(i) {
		if (i === undefined) {
			return this.getRuleContexts(LateralViewContext);
		}
		return this.getRuleContext(i, LateralViewContext);
	}
	enterRule(listener) {
		if (listener.enterAliasedQuery) {
			listener.enterAliasedQuery(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAliasedQuery) {
			listener.exitAliasedQuery(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAliasedQuery) {
			return visitor.visitAliasedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableNameContext extends RelationPrimaryContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	multipartIdentifier() {
		return this.getRuleContext(0, MultipartIdentifierContext);
	}
	tableAlias() {
		return this.getRuleContext(0, TableAliasContext);
	}
	optScanParams() {
		return this.getRuleContext(0, OptScanParamsContext);
	}
	materializedViewName() {
		return this.getRuleContext(0, MaterializedViewNameContext);
	}
	specifiedPartition() {
		return this.getRuleContext(0, SpecifiedPartitionContext);
	}
	tabletList() {
		return this.getRuleContext(0, TabletListContext);
	}
	sample() {
		return this.getRuleContext(0, SampleContext);
	}
	tableSnapshot() {
		return this.getRuleContext(0, TableSnapshotContext);
	}
	relationHint() {
		return this.getRuleContext(0, RelationHintContext);
	}
	lateralView(i) {
		if (i === undefined) {
			return this.getRuleContexts(LateralViewContext);
		}
		return this.getRuleContext(i, LateralViewContext);
	}
	enterRule(listener) {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTableName) {
			listener.exitTableName(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MaterializedViewNameContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	INDEX() {
		return this.getToken(DorisParser.INDEX, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_materializedViewName;
	}
	enterRule(listener) {
		if (listener.enterMaterializedViewName) {
			listener.enterMaterializedViewName(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMaterializedViewName) {
			listener.exitMaterializedViewName(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMaterializedViewName) {
			return visitor.visitMaterializedViewName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PROPERTIES() {
		return this.getToken(DorisParser.PROPERTIES, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_propertyClause;
	}
	enterRule(listener) {
		if (listener.enterPropertyClause) {
			listener.enterPropertyClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPropertyClause) {
			listener.exitPropertyClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPropertyClause) {
			return visitor.visitPropertyClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyItemListContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._properties = [];
	}
	propertyItem(i) {
		if (i === undefined) {
			return this.getRuleContexts(PropertyItemContext);
		}
		return this.getRuleContext(i, PropertyItemContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_propertyItemList;
	}
	enterRule(listener) {
		if (listener.enterPropertyItemList) {
			listener.enterPropertyItemList(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPropertyItemList) {
			listener.exitPropertyItemList(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPropertyItemList) {
			return visitor.visitPropertyItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyItemContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	propertyKey() {
		return this.getRuleContext(0, PropertyKeyContext);
	}
	propertyValue() {
		return this.getRuleContext(0, PropertyValueContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_propertyItem;
	}
	enterRule(listener) {
		if (listener.enterPropertyItem) {
			listener.enterPropertyItem(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPropertyItem) {
			listener.exitPropertyItem(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPropertyItem) {
			return visitor.visitPropertyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyKeyContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	constant() {
		return this.getRuleContext(0, ConstantContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_propertyKey;
	}
	enterRule(listener) {
		if (listener.enterPropertyKey) {
			listener.enterPropertyKey(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPropertyKey) {
			listener.exitPropertyKey(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPropertyKey) {
			return visitor.visitPropertyKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyValueContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	constant() {
		return this.getRuleContext(0, ConstantContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_propertyValue;
	}
	enterRule(listener) {
		if (listener.enterPropertyValue) {
			listener.enterPropertyValue(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPropertyValue) {
			listener.exitPropertyValue(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPropertyValue) {
			return visitor.visitPropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableAliasContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	strictIdentifier() {
		return this.getRuleContext(0, StrictIdentifierContext);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_tableAlias;
	}
	enterRule(listener) {
		if (listener.enterTableAlias) {
			listener.enterTableAlias(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTableAlias) {
			listener.exitTableAlias(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTableAlias) {
			return visitor.visitTableAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultipartIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._parts = [];
	}
	errorCapturingIdentifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(ErrorCapturingIdentifierContext);
		}
		return this.getRuleContext(i, ErrorCapturingIdentifierContext);
	}
	DOT(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.DOT);
		} else {
			return this.getToken(DorisParser.DOT, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_multipartIdentifier;
	}
	enterRule(listener) {
		if (listener.enterMultipartIdentifier) {
			listener.enterMultipartIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMultipartIdentifier) {
			listener.exitMultipartIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMultipartIdentifier) {
			return visitor.visitMultipartIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleColumnDefsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._cols = [];
	}
	simpleColumnDef(i) {
		if (i === undefined) {
			return this.getRuleContexts(SimpleColumnDefContext);
		}
		return this.getRuleContext(i, SimpleColumnDefContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_simpleColumnDefs;
	}
	enterRule(listener) {
		if (listener.enterSimpleColumnDefs) {
			listener.enterSimpleColumnDefs(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSimpleColumnDefs) {
			listener.exitSimpleColumnDefs(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSimpleColumnDefs) {
			return visitor.visitSimpleColumnDefs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleColumnDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_simpleColumnDef;
	}
	enterRule(listener) {
		if (listener.enterSimpleColumnDef) {
			listener.enterSimpleColumnDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSimpleColumnDef) {
			listener.exitSimpleColumnDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSimpleColumnDef) {
			return visitor.visitSimpleColumnDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnDefsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._cols = [];
	}
	columnDef(i) {
		if (i === undefined) {
			return this.getRuleContexts(ColumnDefContext);
		}
		return this.getRuleContext(i, ColumnDefContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_columnDefs;
	}
	enterRule(listener) {
		if (listener.enterColumnDefs) {
			listener.enterColumnDefs(this);
		}
	}
	exitRule(listener) {
		if (listener.exitColumnDefs) {
			listener.exitColumnDefs(this);
		}
	}
	accept(visitor) {
		if (visitor.visitColumnDefs) {
			return visitor.visitColumnDefs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	dataType() {
		return this.getRuleContext(0, DataTypeContext);
	}
	KEY() {
		return this.getToken(DorisParser.KEY, 0);
	}
	AUTO_INCREMENT() {
		return this.getToken(DorisParser.AUTO_INCREMENT, 0);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	ON() {
		return this.getToken(DorisParser.ON, 0);
	}
	UPDATE() {
		return this.getToken(DorisParser.UPDATE, 0);
	}
	CURRENT_TIMESTAMP(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.CURRENT_TIMESTAMP);
		} else {
			return this.getToken(DorisParser.CURRENT_TIMESTAMP, i);
		}
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	aggTypeDef() {
		return this.getRuleContext(0, AggTypeDefContext);
	}
	NULL(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.NULL);
		} else {
			return this.getToken(DorisParser.NULL, i);
		}
	}
	STRING_LITERAL(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.STRING_LITERAL);
		} else {
			return this.getToken(DorisParser.STRING_LITERAL, i);
		}
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	DECIMAL_VALUE() {
		return this.getToken(DorisParser.DECIMAL_VALUE, 0);
	}
	CURRENT_DATE() {
		return this.getToken(DorisParser.CURRENT_DATE, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	LEFT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.LEFT_PAREN);
		} else {
			return this.getToken(DorisParser.LEFT_PAREN, i);
		}
	}
	RIGHT_PAREN(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.RIGHT_PAREN);
		} else {
			return this.getToken(DorisParser.RIGHT_PAREN, i);
		}
	}
	number_(i) {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		}
		return this.getRuleContext(i, NumberContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_columnDef;
	}
	enterRule(listener) {
		if (listener.enterColumnDef) {
			listener.enterColumnDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitColumnDef) {
			listener.exitColumnDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitColumnDef) {
			return visitor.visitColumnDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexDefsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._indexes = [];
	}
	indexDef(i) {
		if (i === undefined) {
			return this.getRuleContexts(IndexDefContext);
		}
		return this.getRuleContext(i, IndexDefContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_indexDefs;
	}
	enterRule(listener) {
		if (listener.enterIndexDefs) {
			listener.enterIndexDefs(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIndexDefs) {
			listener.exitIndexDefs(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIndexDefs) {
			return visitor.visitIndexDefs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	INDEX() {
		return this.getToken(DorisParser.INDEX, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	USING() {
		return this.getToken(DorisParser.USING, 0);
	}
	PROPERTIES() {
		return this.getToken(DorisParser.PROPERTIES, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	BITMAP() {
		return this.getToken(DorisParser.BITMAP, 0);
	}
	INVERTED() {
		return this.getToken(DorisParser.INVERTED, 0);
	}
	NGRAM_BF() {
		return this.getToken(DorisParser.NGRAM_BF, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_indexDef;
	}
	enterRule(listener) {
		if (listener.enterIndexDef) {
			listener.enterIndexDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIndexDef) {
			listener.exitIndexDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIndexDef) {
			return visitor.visitIndexDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionsDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._partitions = [];
	}
	partitionDef(i) {
		if (i === undefined) {
			return this.getRuleContexts(PartitionDefContext);
		}
		return this.getRuleContext(i, PartitionDefContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_partitionsDef;
	}
	enterRule(listener) {
		if (listener.enterPartitionsDef) {
			listener.enterPartitionsDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPartitionsDef) {
			listener.exitPartitionsDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPartitionsDef) {
			return visitor.visitPartitionsDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	lessThanPartitionDef() {
		return this.getRuleContext(0, LessThanPartitionDefContext);
	}
	fixedPartitionDef() {
		return this.getRuleContext(0, FixedPartitionDefContext);
	}
	stepPartitionDef() {
		return this.getRuleContext(0, StepPartitionDefContext);
	}
	inPartitionDef() {
		return this.getRuleContext(0, InPartitionDefContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	propertyItemList() {
		return this.getRuleContext(0, PropertyItemListContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_partitionDef;
	}
	enterRule(listener) {
		if (listener.enterPartitionDef) {
			listener.enterPartitionDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPartitionDef) {
			listener.exitPartitionDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPartitionDef) {
			return visitor.visitPartitionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanPartitionDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	VALUES() {
		return this.getToken(DorisParser.VALUES, 0);
	}
	LESS() {
		return this.getToken(DorisParser.LESS, 0);
	}
	THAN() {
		return this.getToken(DorisParser.THAN, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	MAXVALUE() {
		return this.getToken(DorisParser.MAXVALUE, 0);
	}
	constantSeq() {
		return this.getRuleContext(0, ConstantSeqContext);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_lessThanPartitionDef;
	}
	enterRule(listener) {
		if (listener.enterLessThanPartitionDef) {
			listener.enterLessThanPartitionDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLessThanPartitionDef) {
			listener.exitLessThanPartitionDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLessThanPartitionDef) {
			return visitor.visitLessThanPartitionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FixedPartitionDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	VALUES() {
		return this.getToken(DorisParser.VALUES, 0);
	}
	LEFT_BRACKET() {
		return this.getToken(DorisParser.LEFT_BRACKET, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	constantSeq(i) {
		if (i === undefined) {
			return this.getRuleContexts(ConstantSeqContext);
		}
		return this.getRuleContext(i, ConstantSeqContext);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_fixedPartitionDef;
	}
	enterRule(listener) {
		if (listener.enterFixedPartitionDef) {
			listener.enterFixedPartitionDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFixedPartitionDef) {
			listener.exitFixedPartitionDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFixedPartitionDef) {
			return visitor.visitFixedPartitionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StepPartitionDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	FROM() {
		return this.getToken(DorisParser.FROM, 0);
	}
	TO() {
		return this.getToken(DorisParser.TO, 0);
	}
	INTERVAL() {
		return this.getToken(DorisParser.INTERVAL, 0);
	}
	constantSeq(i) {
		if (i === undefined) {
			return this.getRuleContexts(ConstantSeqContext);
		}
		return this.getRuleContext(i, ConstantSeqContext);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_stepPartitionDef;
	}
	enterRule(listener) {
		if (listener.enterStepPartitionDef) {
			listener.enterStepPartitionDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitStepPartitionDef) {
			listener.exitStepPartitionDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitStepPartitionDef) {
			return visitor.visitStepPartitionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InPartitionDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._constantSeqs = [];
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	VALUES() {
		return this.getToken(DorisParser.VALUES, 0);
	}
	IN() {
		return this.getToken(DorisParser.IN, 0);
	}
	constantSeq(i) {
		if (i === undefined) {
			return this.getRuleContexts(ConstantSeqContext);
		}
		return this.getRuleContext(i, ConstantSeqContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_inPartitionDef;
	}
	enterRule(listener) {
		if (listener.enterInPartitionDef) {
			listener.enterInPartitionDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitInPartitionDef) {
			listener.exitInPartitionDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitInPartitionDef) {
			return visitor.visitInPartitionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantSeqContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._values = [];
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	partitionValueDef(i) {
		if (i === undefined) {
			return this.getRuleContexts(PartitionValueDefContext);
		}
		return this.getRuleContext(i, PartitionValueDefContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_constantSeq;
	}
	enterRule(listener) {
		if (listener.enterConstantSeq) {
			listener.enterConstantSeq(this);
		}
	}
	exitRule(listener) {
		if (listener.exitConstantSeq) {
			listener.exitConstantSeq(this);
		}
	}
	accept(visitor) {
		if (visitor.visitConstantSeq) {
			return visitor.visitConstantSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PartitionValueDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	MAXVALUE() {
		return this.getToken(DorisParser.MAXVALUE, 0);
	}
	NULL() {
		return this.getToken(DorisParser.NULL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_partitionValueDef;
	}
	enterRule(listener) {
		if (listener.enterPartitionValueDef) {
			listener.enterPartitionValueDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPartitionValueDef) {
			listener.exitPartitionValueDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPartitionValueDef) {
			return visitor.visitPartitionValueDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollupDefsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._rollups = [];
	}
	rollupDef(i) {
		if (i === undefined) {
			return this.getRuleContexts(RollupDefContext);
		}
		return this.getRuleContext(i, RollupDefContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_rollupDefs;
	}
	enterRule(listener) {
		if (listener.enterRollupDefs) {
			listener.enterRollupDefs(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRollupDefs) {
			listener.exitRollupDefs(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRollupDefs) {
			return visitor.visitRollupDefs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollupDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	identifierList(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		}
		return this.getRuleContext(i, IdentifierListContext);
	}
	DUPLICATE() {
		return this.getToken(DorisParser.DUPLICATE, 0);
	}
	KEY() {
		return this.getToken(DorisParser.KEY, 0);
	}
	propertyClause() {
		return this.getRuleContext(0, PropertyClauseContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_rollupDef;
	}
	enterRule(listener) {
		if (listener.enterRollupDef) {
			listener.enterRollupDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRollupDef) {
			listener.exitRollupDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRollupDef) {
			return visitor.visitRollupDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AggTypeDefContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	MAX() {
		return this.getToken(DorisParser.MAX, 0);
	}
	MIN() {
		return this.getToken(DorisParser.MIN, 0);
	}
	SUM() {
		return this.getToken(DorisParser.SUM, 0);
	}
	REPLACE() {
		return this.getToken(DorisParser.REPLACE, 0);
	}
	REPLACE_IF_NOT_NULL() {
		return this.getToken(DorisParser.REPLACE_IF_NOT_NULL, 0);
	}
	HLL_UNION() {
		return this.getToken(DorisParser.HLL_UNION, 0);
	}
	BITMAP_UNION() {
		return this.getToken(DorisParser.BITMAP_UNION, 0);
	}
	QUANTILE_UNION() {
		return this.getToken(DorisParser.QUANTILE_UNION, 0);
	}
	GENERIC() {
		return this.getToken(DorisParser.GENERIC, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_aggTypeDef;
	}
	enterRule(listener) {
		if (listener.enterAggTypeDef) {
			listener.enterAggTypeDef(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAggTypeDef) {
			listener.exitAggTypeDef(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAggTypeDef) {
			return visitor.visitAggTypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TabletListContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._tabletIdList = [];
	}
	TABLET() {
		return this.getToken(DorisParser.TABLET, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	INTEGER_VALUE(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.INTEGER_VALUE);
		} else {
			return this.getToken(DorisParser.INTEGER_VALUE, i);
		}
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_tabletList;
	}
	enterRule(listener) {
		if (listener.enterTabletList) {
			listener.enterTabletList(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTabletList) {
			listener.exitTabletList(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTabletList) {
			return visitor.visitTabletList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	VALUES() {
		return this.getToken(DorisParser.VALUES, 0);
	}
	rowConstructor(i) {
		if (i === undefined) {
			return this.getRuleContexts(RowConstructorContext);
		}
		return this.getRuleContext(i, RowConstructorContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_inlineTable;
	}
	enterRule(listener) {
		if (listener.enterInlineTable) {
			listener.enterInlineTable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitInlineTable) {
			listener.exitInlineTable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitInlineTable) {
			return visitor.visitInlineTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedExpressionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_namedExpression;
	}
	enterRule(listener) {
		if (listener.enterNamedExpression) {
			listener.enterNamedExpression(this);
		}
	}
	exitRule(listener) {
		if (listener.exitNamedExpression) {
			listener.exitNamedExpression(this);
		}
	}
	accept(visitor) {
		if (visitor.visitNamedExpression) {
			return visitor.visitNamedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedExpressionSeqContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	namedExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(NamedExpressionContext);
		}
		return this.getRuleContext(i, NamedExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_namedExpressionSeq;
	}
	enterRule(listener) {
		if (listener.enterNamedExpressionSeq) {
			listener.enterNamedExpressionSeq(this);
		}
	}
	exitRule(listener) {
		if (listener.exitNamedExpressionSeq) {
			listener.exitNamedExpressionSeq(this);
		}
	}
	accept(visitor) {
		if (visitor.visitNamedExpressionSeq) {
			return visitor.visitNamedExpressionSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	booleanExpression() {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	lambdaExpression() {
		return this.getRuleContext(0, LambdaExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_expression;
	}
	enterRule(listener) {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	exitRule(listener) {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	accept(visitor) {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaExpressionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._args = [];
	}
	ARROW() {
		return this.getToken(DorisParser.ARROW, 0);
	}
	errorCapturingIdentifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(ErrorCapturingIdentifierContext);
		}
		return this.getRuleContext(i, ErrorCapturingIdentifierContext);
	}
	booleanExpression() {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_lambdaExpression;
	}
	enterRule(listener) {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExpressionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_booleanExpression;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class ExistContext extends BooleanExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	EXISTS() {
		return this.getToken(DorisParser.EXISTS, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterExist) {
			listener.enterExist(this);
		}
	}
	exitRule(listener) {
		if (listener.exitExist) {
			listener.exitExist(this);
		}
	}
	accept(visitor) {
		if (visitor.visitExist) {
			return visitor.visitExist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	booleanExpression() {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	LOGICALNOT() {
		return this.getToken(DorisParser.LOGICALNOT, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	enterRule(listener) {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	valueExpression() {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	predicate() {
		return this.getRuleContext(0, PredicateContext);
	}
	enterRule(listener) {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsnullContext extends BooleanExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	valueExpression() {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	ISNULL() {
		return this.getToken(DorisParser.ISNULL, 0);
	}
	IS_NULL_PRED() {
		return this.getToken(DorisParser.IS_NULL_PRED, 0);
	}
	enterRule(listener) {
		if (listener.enterIsnull) {
			listener.enterIsnull(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIsnull) {
			listener.exitIsnull(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIsnull) {
			return visitor.visitIsnull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Is_not_null_predContext extends BooleanExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	IS_NOT_NULL_PRED() {
		return this.getToken(DorisParser.IS_NOT_NULL_PRED, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	valueExpression() {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterIs_not_null_pred) {
			listener.enterIs_not_null_pred(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIs_not_null_pred) {
			listener.exitIs_not_null_pred(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIs_not_null_pred) {
			return visitor.visitIs_not_null_pred(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	booleanExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		}
		return this.getRuleContext(i, BooleanExpressionContext);
	}
	AND() {
		return this.getToken(DorisParser.AND, 0);
	}
	LOGICALAND() {
		return this.getToken(DorisParser.LOGICALAND, 0);
	}
	XOR() {
		return this.getToken(DorisParser.XOR, 0);
	}
	OR() {
		return this.getToken(DorisParser.OR, 0);
	}
	enterRule(listener) {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoublePipesContext extends BooleanExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	booleanExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		}
		return this.getRuleContext(i, BooleanExpressionContext);
	}
	DOUBLEPIPES() {
		return this.getToken(DorisParser.DOUBLEPIPES, 0);
	}
	enterRule(listener) {
		if (listener.enterDoublePipes) {
			listener.enterDoublePipes(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDoublePipes) {
			listener.exitDoublePipes(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDoublePipes) {
			return visitor.visitDoublePipes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	rowConstructorItem(i) {
		if (i === undefined) {
			return this.getRuleContexts(RowConstructorItemContext);
		}
		return this.getRuleContext(i, RowConstructorItemContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_rowConstructor;
	}
	enterRule(listener) {
		if (listener.enterRowConstructor) {
			listener.enterRowConstructor(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRowConstructor) {
			listener.exitRowConstructor(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRowConstructor) {
			return visitor.visitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorItemContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	namedExpression() {
		return this.getRuleContext(0, NamedExpressionContext);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_rowConstructorItem;
	}
	enterRule(listener) {
		if (listener.enterRowConstructorItem) {
			listener.enterRowConstructorItem(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRowConstructorItem) {
			listener.exitRowConstructorItem(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRowConstructorItem) {
			return visitor.visitRowConstructorItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicateContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	AND() {
		return this.getToken(DorisParser.AND, 0);
	}
	BETWEEN() {
		return this.getToken(DorisParser.BETWEEN, 0);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	LIKE() {
		return this.getToken(DorisParser.LIKE, 0);
	}
	REGEXP() {
		return this.getToken(DorisParser.REGEXP, 0);
	}
	RLIKE() {
		return this.getToken(DorisParser.RLIKE, 0);
	}
	MATCH() {
		return this.getToken(DorisParser.MATCH, 0);
	}
	MATCH_ANY() {
		return this.getToken(DorisParser.MATCH_ANY, 0);
	}
	MATCH_ALL() {
		return this.getToken(DorisParser.MATCH_ALL, 0);
	}
	MATCH_PHRASE() {
		return this.getToken(DorisParser.MATCH_PHRASE, 0);
	}
	MATCH_PHRASE_PREFIX() {
		return this.getToken(DorisParser.MATCH_PHRASE_PREFIX, 0);
	}
	MATCH_REGEXP() {
		return this.getToken(DorisParser.MATCH_REGEXP, 0);
	}
	MATCH_PHRASE_EDGE() {
		return this.getToken(DorisParser.MATCH_PHRASE_EDGE, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	IN() {
		return this.getToken(DorisParser.IN, 0);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	IS() {
		return this.getToken(DorisParser.IS, 0);
	}
	NULL() {
		return this.getToken(DorisParser.NULL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_predicate;
	}
	enterRule(listener) {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueExpressionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_valueExpression;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	primaryExpression() {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	exitRule(listener) {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	accept(visitor) {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonContext extends ValueExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	comparisonOperator() {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	exitRule(listener) {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	accept(visitor) {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOperationContext extends ValueExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	BITAND() {
		return this.getToken(DorisParser.BITAND, 0);
	}
	BITOR() {
		return this.getToken(DorisParser.BITOR, 0);
	}
	BITXOR() {
		return this.getToken(DorisParser.BITXOR, 0);
	}
	enterRule(listener) {
		if (listener.enterBitOperation) {
			listener.enterBitOperation(this);
		}
	}
	exitRule(listener) {
		if (listener.exitBitOperation) {
			listener.exitBitOperation(this);
		}
	}
	accept(visitor) {
		if (visitor.visitBitOperation) {
			return visitor.visitBitOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	ASTERISK() {
		return this.getToken(DorisParser.ASTERISK, 0);
	}
	SLASH() {
		return this.getToken(DorisParser.SLASH, 0);
	}
	MOD() {
		return this.getToken(DorisParser.MOD, 0);
	}
	DIV() {
		return this.getToken(DorisParser.DIV, 0);
	}
	PLUS() {
		return this.getToken(DorisParser.PLUS, 0);
	}
	SUBTRACT() {
		return this.getToken(DorisParser.SUBTRACT, 0);
	}
	HAT() {
		return this.getToken(DorisParser.HAT, 0);
	}
	PIPE() {
		return this.getToken(DorisParser.PIPE, 0);
	}
	AMPERSAND() {
		return this.getToken(DorisParser.AMPERSAND, 0);
	}
	enterRule(listener) {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	exitRule(listener) {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	accept(visitor) {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	valueExpression() {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	SUBTRACT() {
		return this.getToken(DorisParser.SUBTRACT, 0);
	}
	PLUS() {
		return this.getToken(DorisParser.PLUS, 0);
	}
	TILDE() {
		return this.getToken(DorisParser.TILDE, 0);
	}
	enterRule(listener) {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	exitRule(listener) {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	accept(visitor) {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DatetimeUnitContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	YEAR() {
		return this.getToken(DorisParser.YEAR, 0);
	}
	MONTH() {
		return this.getToken(DorisParser.MONTH, 0);
	}
	WEEK() {
		return this.getToken(DorisParser.WEEK, 0);
	}
	DAY() {
		return this.getToken(DorisParser.DAY, 0);
	}
	HOUR() {
		return this.getToken(DorisParser.HOUR, 0);
	}
	MINUTE() {
		return this.getToken(DorisParser.MINUTE, 0);
	}
	SECOND() {
		return this.getToken(DorisParser.SECOND, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_datetimeUnit;
	}
	enterRule(listener) {
		if (listener.enterDatetimeUnit) {
			listener.enterDatetimeUnit(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDatetimeUnit) {
			listener.exitDatetimeUnit(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDatetimeUnit) {
			return visitor.visitDatetimeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryExpressionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_primaryExpression;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class DateCeilContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	DATE_CEIL() {
		return this.getToken(DorisParser.DATE_CEIL, 0);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	INTERVAL() {
		return this.getToken(DorisParser.INTERVAL, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	enterRule(listener) {
		if (listener.enterDateCeil) {
			listener.enterDateCeil(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDateCeil) {
			listener.exitDateCeil(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDateCeil) {
			return visitor.visitDateCeil(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	DOT() {
		return this.getToken(DorisParser.DOT, 0);
	}
	primaryExpression() {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentDateContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CURRENT_DATE() {
		return this.getToken(DorisParser.CURRENT_DATE, 0);
	}
	enterRule(listener) {
		if (listener.enterCurrentDate) {
			listener.enterCurrentDate(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCurrentDate) {
			listener.exitCurrentDate(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCurrentDate) {
			return visitor.visitCurrentDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimestampaddContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	TIMESTAMPADD() {
		return this.getToken(DorisParser.TIMESTAMPADD, 0);
	}
	DATEADD() {
		return this.getToken(DorisParser.DATEADD, 0);
	}
	enterRule(listener) {
		if (listener.enterTimestampadd) {
			listener.enterTimestampadd(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTimestampadd) {
			listener.exitTimestampadd(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTimestampadd) {
			return visitor.visitTimestampadd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Date_subContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	SUBDATE() {
		return this.getToken(DorisParser.SUBDATE, 0);
	}
	DAYS_SUB() {
		return this.getToken(DorisParser.DAYS_SUB, 0);
	}
	DATE_SUB() {
		return this.getToken(DorisParser.DATE_SUB, 0);
	}
	INTERVAL() {
		return this.getToken(DorisParser.INTERVAL, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	enterRule(listener) {
		if (listener.enterDate_sub) {
			listener.enterDate_sub(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDate_sub) {
			listener.exitDate_sub(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDate_sub) {
			return visitor.visitDate_sub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	castDataType() {
		return this.getRuleContext(0, CastDataTypeContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	CAST() {
		return this.getToken(DorisParser.CAST, 0);
	}
	enterRule(listener) {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	exitRule(listener) {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	accept(visitor) {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UserVariableContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	ATSIGN() {
		return this.getToken(DorisParser.ATSIGN, 0);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	enterRule(listener) {
		if (listener.enterUserVariable) {
			listener.enterUserVariable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUserVariable) {
			listener.exitUserVariable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUserVariable) {
			return visitor.visitUserVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ElementAtContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_BRACKET() {
		return this.getToken(DorisParser.LEFT_BRACKET, 0);
	}
	RIGHT_BRACKET() {
		return this.getToken(DorisParser.RIGHT_BRACKET, 0);
	}
	primaryExpression() {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	valueExpression() {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterElementAt) {
			listener.enterElementAt(this);
		}
	}
	exitRule(listener) {
		if (listener.exitElementAt) {
			listener.exitElementAt(this);
		}
	}
	accept(visitor) {
		if (visitor.visitElementAt) {
			return visitor.visitElementAt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalTimestampContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LOCALTIMESTAMP() {
		return this.getToken(DorisParser.LOCALTIMESTAMP, 0);
	}
	enterRule(listener) {
		if (listener.enterLocalTimestamp) {
			listener.enterLocalTimestamp(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLocalTimestamp) {
			listener.exitLocalTimestamp(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLocalTimestamp) {
			return visitor.visitLocalTimestamp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharFunctionContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		this._arguments = [];
		super.copyFrom(ctx);
	}
	CHAR() {
		return this.getToken(DorisParser.CHAR, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	USING() {
		return this.getToken(DorisParser.USING, 0);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	enterRule(listener) {
		if (listener.enterCharFunction) {
			listener.enterCharFunction(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCharFunction) {
			listener.exitCharFunction(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCharFunction) {
			return visitor.visitCharFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	interval() {
		return this.getRuleContext(0, IntervalContext);
	}
	enterRule(listener) {
		if (listener.enterIntervalLiteral) {
			listener.enterIntervalLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIntervalLiteral) {
			listener.exitIntervalLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayRangeContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	ARRAY_RANGE() {
		return this.getToken(DorisParser.ARRAY_RANGE, 0);
	}
	SEQUENCE() {
		return this.getToken(DorisParser.SEQUENCE, 0);
	}
	INTERVAL() {
		return this.getToken(DorisParser.INTERVAL, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	enterRule(listener) {
		if (listener.enterArrayRange) {
			listener.enterArrayRange(this);
		}
	}
	exitRule(listener) {
		if (listener.exitArrayRange) {
			listener.exitArrayRange(this);
		}
	}
	accept(visitor) {
		if (visitor.visitArrayRange) {
			return visitor.visitArrayRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CASE() {
		return this.getToken(DorisParser.CASE, 0);
	}
	END() {
		return this.getToken(DorisParser.END, 0);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	whenClause(i) {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		}
		return this.getRuleContext(i, WhenClauseContext);
	}
	ELSE() {
		return this.getToken(DorisParser.ELSE, 0);
	}
	enterRule(listener) {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	BINARY() {
		return this.getToken(DorisParser.BINARY, 0);
	}
	enterRule(listener) {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	exitRule(listener) {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	accept(visitor) {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	ASTERISK() {
		return this.getToken(DorisParser.ASTERISK, 0);
	}
	qualifiedName() {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	DOT() {
		return this.getToken(DorisParser.DOT, 0);
	}
	enterRule(listener) {
		if (listener.enterStar) {
			listener.enterStar(this);
		}
	}
	exitRule(listener) {
		if (listener.exitStar) {
			listener.exitStar(this);
		}
	}
	accept(visitor) {
		if (visitor.visitStar) {
			return visitor.visitStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConvertTypeContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CONVERT() {
		return this.getToken(DorisParser.CONVERT, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	castDataType() {
		return this.getRuleContext(0, CastDataTypeContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterConvertType) {
			listener.enterConvertType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitConvertType) {
			listener.exitConvertType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitConvertType) {
			return visitor.visitConvertType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimestampdiffContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	TIMESTAMPDIFF() {
		return this.getToken(DorisParser.TIMESTAMPDIFF, 0);
	}
	DATEDIFF() {
		return this.getToken(DorisParser.DATEDIFF, 0);
	}
	enterRule(listener) {
		if (listener.enterTimestampdiff) {
			listener.enterTimestampdiff(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTimestampdiff) {
			listener.exitTimestampdiff(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTimestampdiff) {
			return visitor.visitTimestampdiff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConvertCharSetContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CONVERT() {
		return this.getToken(DorisParser.CONVERT, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	USING() {
		return this.getToken(DorisParser.USING, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	identifierOrText() {
		return this.getRuleContext(0, IdentifierOrTextContext);
	}
	enterRule(listener) {
		if (listener.enterConvertCharSet) {
			listener.enterConvertCharSet(this);
		}
	}
	exitRule(listener) {
		if (listener.exitConvertCharSet) {
			listener.exitConvertCharSet(this);
		}
	}
	accept(visitor) {
		if (visitor.visitConvertCharSet) {
			return visitor.visitConvertCharSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	query() {
		return this.getRuleContext(0, QueryContext);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	enterRule(listener) {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EncryptKeyContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	KEY() {
		return this.getToken(DorisParser.KEY, 0);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	DOT() {
		return this.getToken(DorisParser.DOT, 0);
	}
	enterRule(listener) {
		if (listener.enterEncryptKey) {
			listener.enterEncryptKey(this);
		}
	}
	exitRule(listener) {
		if (listener.exitEncryptKey) {
			listener.exitEncryptKey(this);
		}
	}
	accept(visitor) {
		if (visitor.visitEncryptKey) {
			return visitor.visitEncryptKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Date_addContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	ADDDATE() {
		return this.getToken(DorisParser.ADDDATE, 0);
	}
	DAYS_ADD() {
		return this.getToken(DorisParser.DAYS_ADD, 0);
	}
	DATE_ADD() {
		return this.getToken(DorisParser.DATE_ADD, 0);
	}
	INTERVAL() {
		return this.getToken(DorisParser.INTERVAL, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	enterRule(listener) {
		if (listener.enterDate_add) {
			listener.enterDate_add(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDate_add) {
			listener.exitDate_add(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDate_add) {
			return visitor.visitDate_add(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentTimeContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CURRENT_TIME() {
		return this.getToken(DorisParser.CURRENT_TIME, 0);
	}
	enterRule(listener) {
		if (listener.enterCurrentTime) {
			listener.enterCurrentTime(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCurrentTime) {
			listener.exitCurrentTime(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCurrentTime) {
			return visitor.visitCurrentTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalTimeContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LOCALTIME() {
		return this.getToken(DorisParser.LOCALTIME, 0);
	}
	enterRule(listener) {
		if (listener.enterLocalTime) {
			listener.enterLocalTime(this);
		}
	}
	exitRule(listener) {
		if (listener.exitLocalTime) {
			listener.exitLocalTime(this);
		}
	}
	accept(visitor) {
		if (visitor.visitLocalTime) {
			return visitor.visitLocalTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SystemVariableContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	DOUBLEATSIGN() {
		return this.getToken(DorisParser.DOUBLEATSIGN, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	DOT() {
		return this.getToken(DorisParser.DOT, 0);
	}
	GLOBAL() {
		return this.getToken(DorisParser.GLOBAL, 0);
	}
	SESSION() {
		return this.getToken(DorisParser.SESSION, 0);
	}
	enterRule(listener) {
		if (listener.enterSystemVariable) {
			listener.enterSystemVariable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSystemVariable) {
			listener.exitSystemVariable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSystemVariable) {
			return visitor.visitSystemVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CollateContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	primaryExpression() {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	COLLATE() {
		return this.getToken(DorisParser.COLLATE, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	DEFAULT() {
		return this.getToken(DorisParser.DEFAULT, 0);
	}
	enterRule(listener) {
		if (listener.enterCollate) {
			listener.enterCollate(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCollate) {
			listener.exitCollate(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCollate) {
			return visitor.visitCollate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentUserContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CURRENT_USER() {
		return this.getToken(DorisParser.CURRENT_USER, 0);
	}
	enterRule(listener) {
		if (listener.enterCurrentUser) {
			listener.enterCurrentUser(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCurrentUser) {
			listener.exitCurrentUser(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCurrentUser) {
			return visitor.visitCurrentUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	constant() {
		return this.getRuleContext(0, ConstantContext);
	}
	enterRule(listener) {
		if (listener.enterConstantDefault) {
			listener.enterConstantDefault(this);
		}
	}
	exitRule(listener) {
		if (listener.exitConstantDefault) {
			listener.exitConstantDefault(this);
		}
	}
	accept(visitor) {
		if (visitor.visitConstantDefault) {
			return visitor.visitConstantDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	EXTRACT() {
		return this.getToken(DorisParser.EXTRACT, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	FROM() {
		return this.getToken(DorisParser.FROM, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	valueExpression() {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	DATE() {
		return this.getToken(DorisParser.DATE, 0);
	}
	TIMESTAMP() {
		return this.getToken(DorisParser.TIMESTAMP, 0);
	}
	enterRule(listener) {
		if (listener.enterExtract) {
			listener.enterExtract(this);
		}
	}
	exitRule(listener) {
		if (listener.exitExtract) {
			listener.exitExtract(this);
		}
	}
	accept(visitor) {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentTimestampContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CURRENT_TIMESTAMP() {
		return this.getToken(DorisParser.CURRENT_TIMESTAMP, 0);
	}
	enterRule(listener) {
		if (listener.enterCurrentTimestamp) {
			listener.enterCurrentTimestamp(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCurrentTimestamp) {
			listener.exitCurrentTimestamp(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCurrentTimestamp) {
			return visitor.visitCurrentTimestamp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	functionCallExpression() {
		return this.getRuleContext(0, FunctionCallExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArraySliceContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_BRACKET() {
		return this.getToken(DorisParser.LEFT_BRACKET, 0);
	}
	COLON() {
		return this.getToken(DorisParser.COLON, 0);
	}
	RIGHT_BRACKET() {
		return this.getToken(DorisParser.RIGHT_BRACKET, 0);
	}
	primaryExpression() {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterArraySlice) {
			listener.enterArraySlice(this);
		}
	}
	exitRule(listener) {
		if (listener.exitArraySlice) {
			listener.exitArraySlice(this);
		}
	}
	accept(visitor) {
		if (visitor.visitArraySlice) {
			return visitor.visitArraySlice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateFloorContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	DATE_FLOOR() {
		return this.getToken(DorisParser.DATE_FLOOR, 0);
	}
	valueExpression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		}
		return this.getRuleContext(i, ValueExpressionContext);
	}
	INTERVAL() {
		return this.getToken(DorisParser.INTERVAL, 0);
	}
	datetimeUnit() {
		return this.getRuleContext(0, DatetimeUnitContext);
	}
	enterRule(listener) {
		if (listener.enterDateFloor) {
			listener.enterDateFloor(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDateFloor) {
			listener.exitDateFloor(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDateFloor) {
			return visitor.visitDateFloor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	CASE() {
		return this.getToken(DorisParser.CASE, 0);
	}
	END() {
		return this.getToken(DorisParser.END, 0);
	}
	whenClause(i) {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		}
		return this.getRuleContext(i, WhenClauseContext);
	}
	ELSE() {
		return this.getToken(DorisParser.ELSE, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	enterRule(listener) {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastDataTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	dataType() {
		return this.getRuleContext(0, DataTypeContext);
	}
	SIGNED() {
		return this.getToken(DorisParser.SIGNED, 0);
	}
	UNSIGNED() {
		return this.getToken(DorisParser.UNSIGNED, 0);
	}
	INT() {
		return this.getToken(DorisParser.INT, 0);
	}
	INTEGER() {
		return this.getToken(DorisParser.INTEGER, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_castDataType;
	}
	enterRule(listener) {
		if (listener.enterCastDataType) {
			listener.enterCastDataType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCastDataType) {
			listener.exitCastDataType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCastDataType) {
			return visitor.visitCastDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
		this._arguments = [];
	}
	functionIdentifier() {
		return this.getRuleContext(0, FunctionIdentifierContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	OVER() {
		return this.getToken(DorisParser.OVER, 0);
	}
	windowSpec() {
		return this.getRuleContext(0, WindowSpecContext);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	ORDER() {
		return this.getToken(DorisParser.ORDER, 0);
	}
	BY() {
		return this.getToken(DorisParser.BY, 0);
	}
	sortItem(i) {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		}
		return this.getRuleContext(i, SortItemContext);
	}
	DISTINCT() {
		return this.getToken(DorisParser.DISTINCT, 0);
	}
	ALL() {
		return this.getToken(DorisParser.ALL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_functionCallExpression;
	}
	enterRule(listener) {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	functionNameIdentifier() {
		return this.getRuleContext(0, FunctionNameIdentifierContext);
	}
	DOT() {
		return this.getToken(DorisParser.DOT, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_functionIdentifier;
	}
	enterRule(listener) {
		if (listener.enterFunctionIdentifier) {
			listener.enterFunctionIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFunctionIdentifier) {
			listener.exitFunctionIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFunctionIdentifier) {
			return visitor.visitFunctionIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionNameIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	ADD() {
		return this.getToken(DorisParser.ADD, 0);
	}
	CONNECTION_ID() {
		return this.getToken(DorisParser.CONNECTION_ID, 0);
	}
	CURRENT_CATALOG() {
		return this.getToken(DorisParser.CURRENT_CATALOG, 0);
	}
	CURRENT_USER() {
		return this.getToken(DorisParser.CURRENT_USER, 0);
	}
	DATABASE() {
		return this.getToken(DorisParser.DATABASE, 0);
	}
	IF() {
		return this.getToken(DorisParser.IF, 0);
	}
	LEFT() {
		return this.getToken(DorisParser.LEFT, 0);
	}
	LIKE() {
		return this.getToken(DorisParser.LIKE, 0);
	}
	PASSWORD() {
		return this.getToken(DorisParser.PASSWORD, 0);
	}
	REGEXP() {
		return this.getToken(DorisParser.REGEXP, 0);
	}
	RIGHT() {
		return this.getToken(DorisParser.RIGHT, 0);
	}
	SCHEMA() {
		return this.getToken(DorisParser.SCHEMA, 0);
	}
	TRIM() {
		return this.getToken(DorisParser.TRIM, 0);
	}
	USER() {
		return this.getToken(DorisParser.USER, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_functionNameIdentifier;
	}
	enterRule(listener) {
		if (listener.enterFunctionNameIdentifier) {
			listener.enterFunctionNameIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFunctionNameIdentifier) {
			listener.exitFunctionNameIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFunctionNameIdentifier) {
			return visitor.visitFunctionNameIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WindowSpecContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	partitionClause() {
		return this.getRuleContext(0, PartitionClauseContext);
	}
	sortClause() {
		return this.getRuleContext(0, SortClauseContext);
	}
	windowFrame() {
		return this.getRuleContext(0, WindowFrameContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_windowSpec;
	}
	enterRule(listener) {
		if (listener.enterWindowSpec) {
			listener.enterWindowSpec(this);
		}
	}
	exitRule(listener) {
		if (listener.exitWindowSpec) {
			listener.exitWindowSpec(this);
		}
	}
	accept(visitor) {
		if (visitor.visitWindowSpec) {
			return visitor.visitWindowSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WindowFrameContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	frameUnits() {
		return this.getRuleContext(0, FrameUnitsContext);
	}
	frameBoundary(i) {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundaryContext);
		}
		return this.getRuleContext(i, FrameBoundaryContext);
	}
	BETWEEN() {
		return this.getToken(DorisParser.BETWEEN, 0);
	}
	AND() {
		return this.getToken(DorisParser.AND, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_windowFrame;
	}
	enterRule(listener) {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	exitRule(listener) {
		if (listener.exitWindowFrame) {
			listener.exitWindowFrame(this);
		}
	}
	accept(visitor) {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FrameUnitsContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ROWS() {
		return this.getToken(DorisParser.ROWS, 0);
	}
	RANGE() {
		return this.getToken(DorisParser.RANGE, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_frameUnits;
	}
	enterRule(listener) {
		if (listener.enterFrameUnits) {
			listener.enterFrameUnits(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFrameUnits) {
			listener.exitFrameUnits(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFrameUnits) {
			return visitor.visitFrameUnits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FrameBoundaryContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	UNBOUNDED() {
		return this.getToken(DorisParser.UNBOUNDED, 0);
	}
	PRECEDING() {
		return this.getToken(DorisParser.PRECEDING, 0);
	}
	FOLLOWING() {
		return this.getToken(DorisParser.FOLLOWING, 0);
	}
	ROW() {
		return this.getToken(DorisParser.ROW, 0);
	}
	CURRENT() {
		return this.getToken(DorisParser.CURRENT, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_frameBoundary;
	}
	enterRule(listener) {
		if (listener.enterFrameBoundary) {
			listener.enterFrameBoundary(this);
		}
	}
	exitRule(listener) {
		if (listener.exitFrameBoundary) {
			listener.exitFrameBoundary(this);
		}
	}
	accept(visitor) {
		if (visitor.visitFrameBoundary) {
			return visitor.visitFrameBoundary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QualifiedNameContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	DOT(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.DOT);
		} else {
			return this.getToken(DorisParser.DOT, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_qualifiedName;
	}
	enterRule(listener) {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	exitRule(listener) {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	accept(visitor) {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecifiedPartitionContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	PARTITION() {
		return this.getToken(DorisParser.PARTITION, 0);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	identifierList() {
		return this.getRuleContext(0, IdentifierListContext);
	}
	TEMPORARY() {
		return this.getToken(DorisParser.TEMPORARY, 0);
	}
	PARTITIONS() {
		return this.getToken(DorisParser.PARTITIONS, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_specifiedPartition;
	}
	enterRule(listener) {
		if (listener.enterSpecifiedPartition) {
			listener.enterSpecifiedPartition(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSpecifiedPartition) {
			listener.exitSpecifiedPartition(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSpecifiedPartition) {
			return visitor.visitSpecifiedPartition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_constant;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class StructLiteralContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		this._items = [];
		super.copyFrom(ctx);
	}
	LEFT_BRACE() {
		return this.getToken(DorisParser.LEFT_BRACE, 0);
	}
	RIGHT_BRACE() {
		return this.getToken(DorisParser.RIGHT_BRACE, 0);
	}
	constant(i) {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		}
		return this.getRuleContext(i, ConstantContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	enterRule(listener) {
		if (listener.enterStructLiteral) {
			listener.enterStructLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitStructLiteral) {
			listener.exitStructLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitStructLiteral) {
			return visitor.visitStructLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	NULL() {
		return this.getToken(DorisParser.NULL, 0);
	}
	enterRule(listener) {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	BINARY() {
		return this.getToken(DorisParser.BINARY, 0);
	}
	enterRule(listener) {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	DATE() {
		return this.getToken(DorisParser.DATE, 0);
	}
	DATEV1() {
		return this.getToken(DorisParser.DATEV1, 0);
	}
	DATEV2() {
		return this.getToken(DorisParser.DATEV2, 0);
	}
	TIMESTAMP() {
		return this.getToken(DorisParser.TIMESTAMP, 0);
	}
	enterRule(listener) {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTypeConstructor) {
			listener.exitTypeConstructor(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		this._items = [];
		super.copyFrom(ctx);
	}
	LEFT_BRACKET() {
		return this.getToken(DorisParser.LEFT_BRACKET, 0);
	}
	RIGHT_BRACKET() {
		return this.getToken(DorisParser.RIGHT_BRACKET, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	constant(i) {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		}
		return this.getRuleContext(i, ConstantContext);
	}
	enterRule(listener) {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PlaceholderContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	PLACEHOLDER() {
		return this.getToken(DorisParser.PLACEHOLDER, 0);
	}
	enterRule(listener) {
		if (listener.enterPlaceholder) {
			listener.enterPlaceholder(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPlaceholder) {
			listener.exitPlaceholder(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPlaceholder) {
			return visitor.visitPlaceholder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MapLiteralContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		this._items = [];
		super.copyFrom(ctx);
	}
	LEFT_BRACE() {
		return this.getToken(DorisParser.LEFT_BRACE, 0);
	}
	RIGHT_BRACE() {
		return this.getToken(DorisParser.RIGHT_BRACE, 0);
	}
	COLON(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COLON);
		} else {
			return this.getToken(DorisParser.COLON, i);
		}
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	constant(i) {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		}
		return this.getRuleContext(i, ConstantContext);
	}
	enterRule(listener) {
		if (listener.enterMapLiteral) {
			listener.enterMapLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitMapLiteral) {
			listener.exitMapLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitMapLiteral) {
			return visitor.visitMapLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	number() {
		return this.getRuleContext(0, NumberContext);
	}
	enterRule(listener) {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends ConstantContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	booleanValue() {
		return this.getRuleContext(0, BooleanValueContext);
	}
	enterRule(listener) {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonOperatorContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	EQ() {
		return this.getToken(DorisParser.EQ, 0);
	}
	NEQ() {
		return this.getToken(DorisParser.NEQ, 0);
	}
	LT() {
		return this.getToken(DorisParser.LT, 0);
	}
	LTE() {
		return this.getToken(DorisParser.LTE, 0);
	}
	GT() {
		return this.getToken(DorisParser.GT, 0);
	}
	GTE() {
		return this.getToken(DorisParser.GTE, 0);
	}
	NSEQ() {
		return this.getToken(DorisParser.NSEQ, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_comparisonOperator;
	}
	enterRule(listener) {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	exitRule(listener) {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	accept(visitor) {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanValueContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	TRUE() {
		return this.getToken(DorisParser.TRUE, 0);
	}
	FALSE() {
		return this.getToken(DorisParser.FALSE, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_booleanValue;
	}
	enterRule(listener) {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	exitRule(listener) {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	accept(visitor) {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhenClauseContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	WHEN() {
		return this.getToken(DorisParser.WHEN, 0);
	}
	THEN() {
		return this.getToken(DorisParser.THEN, 0);
	}
	expression(i) {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		}
		return this.getRuleContext(i, ExpressionContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_whenClause;
	}
	enterRule(listener) {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	exitRule(listener) {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	accept(visitor) {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	INTERVAL() {
		return this.getToken(DorisParser.INTERVAL, 0);
	}
	expression() {
		return this.getRuleContext(0, ExpressionContext);
	}
	unitIdentifier() {
		return this.getRuleContext(0, UnitIdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_interval;
	}
	enterRule(listener) {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	exitRule(listener) {
		if (listener.exitInterval) {
			listener.exitInterval(this);
		}
	}
	accept(visitor) {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	YEAR() {
		return this.getToken(DorisParser.YEAR, 0);
	}
	MONTH() {
		return this.getToken(DorisParser.MONTH, 0);
	}
	WEEK() {
		return this.getToken(DorisParser.WEEK, 0);
	}
	DAY() {
		return this.getToken(DorisParser.DAY, 0);
	}
	HOUR() {
		return this.getToken(DorisParser.HOUR, 0);
	}
	MINUTE() {
		return this.getToken(DorisParser.MINUTE, 0);
	}
	SECOND() {
		return this.getToken(DorisParser.SECOND, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_unitIdentifier;
	}
	enterRule(listener) {
		if (listener.enterUnitIdentifier) {
			listener.enterUnitIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUnitIdentifier) {
			listener.exitUnitIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUnitIdentifier) {
			return visitor.visitUnitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataTypeWithNullableContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	dataType() {
		return this.getRuleContext(0, DataTypeContext);
	}
	NULL() {
		return this.getToken(DorisParser.NULL, 0);
	}
	NOT() {
		return this.getToken(DorisParser.NOT, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_dataTypeWithNullable;
	}
	enterRule(listener) {
		if (listener.enterDataTypeWithNullable) {
			listener.enterDataTypeWithNullable(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDataTypeWithNullable) {
			listener.exitDataTypeWithNullable(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDataTypeWithNullable) {
			return visitor.visitDataTypeWithNullable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_dataType;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class ComplexDataTypeContext extends DataTypeContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	LT() {
		return this.getToken(DorisParser.LT, 0);
	}
	dataType(i) {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		}
		return this.getRuleContext(i, DataTypeContext);
	}
	GT() {
		return this.getToken(DorisParser.GT, 0);
	}
	ARRAY() {
		return this.getToken(DorisParser.ARRAY, 0);
	}
	COMMA() {
		return this.getToken(DorisParser.COMMA, 0);
	}
	MAP() {
		return this.getToken(DorisParser.MAP, 0);
	}
	complexColTypeList() {
		return this.getRuleContext(0, ComplexColTypeListContext);
	}
	STRUCT() {
		return this.getToken(DorisParser.STRUCT, 0);
	}
	enterRule(listener) {
		if (listener.enterComplexDataType) {
			listener.enterComplexDataType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitComplexDataType) {
			listener.exitComplexDataType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitComplexDataType) {
			return visitor.visitComplexDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AggStateDataTypeContext extends DataTypeContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		this._dataTypes = [];
		super.copyFrom(ctx);
	}
	AGG_STATE() {
		return this.getToken(DorisParser.AGG_STATE, 0);
	}
	LT() {
		return this.getToken(DorisParser.LT, 0);
	}
	functionNameIdentifier() {
		return this.getRuleContext(0, FunctionNameIdentifierContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	GT() {
		return this.getToken(DorisParser.GT, 0);
	}
	dataTypeWithNullable(i) {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeWithNullableContext);
		}
		return this.getRuleContext(i, DataTypeWithNullableContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	enterRule(listener) {
		if (listener.enterAggStateDataType) {
			listener.enterAggStateDataType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitAggStateDataType) {
			listener.exitAggStateDataType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitAggStateDataType) {
			return visitor.visitAggStateDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimitiveDataTypeContext extends DataTypeContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	primitiveColType() {
		return this.getRuleContext(0, PrimitiveColTypeContext);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	INTEGER_VALUE(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.INTEGER_VALUE);
		} else {
			return this.getToken(DorisParser.INTEGER_VALUE, i);
		}
	}
	ASTERISK() {
		return this.getToken(DorisParser.ASTERISK, 0);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	enterRule(listener) {
		if (listener.enterPrimitiveDataType) {
			listener.enterPrimitiveDataType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPrimitiveDataType) {
			listener.exitPrimitiveDataType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPrimitiveDataType) {
			return visitor.visitPrimitiveDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimitiveColTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	TINYINT() {
		return this.getToken(DorisParser.TINYINT, 0);
	}
	SMALLINT() {
		return this.getToken(DorisParser.SMALLINT, 0);
	}
	INT() {
		return this.getToken(DorisParser.INT, 0);
	}
	INTEGER() {
		return this.getToken(DorisParser.INTEGER, 0);
	}
	BIGINT() {
		return this.getToken(DorisParser.BIGINT, 0);
	}
	LARGEINT() {
		return this.getToken(DorisParser.LARGEINT, 0);
	}
	BOOLEAN() {
		return this.getToken(DorisParser.BOOLEAN, 0);
	}
	FLOAT() {
		return this.getToken(DorisParser.FLOAT, 0);
	}
	DOUBLE() {
		return this.getToken(DorisParser.DOUBLE, 0);
	}
	DATE() {
		return this.getToken(DorisParser.DATE, 0);
	}
	DATETIME() {
		return this.getToken(DorisParser.DATETIME, 0);
	}
	TIME() {
		return this.getToken(DorisParser.TIME, 0);
	}
	DATEV2() {
		return this.getToken(DorisParser.DATEV2, 0);
	}
	DATETIMEV2() {
		return this.getToken(DorisParser.DATETIMEV2, 0);
	}
	DATEV1() {
		return this.getToken(DorisParser.DATEV1, 0);
	}
	DATETIMEV1() {
		return this.getToken(DorisParser.DATETIMEV1, 0);
	}
	BITMAP() {
		return this.getToken(DorisParser.BITMAP, 0);
	}
	QUANTILE_STATE() {
		return this.getToken(DorisParser.QUANTILE_STATE, 0);
	}
	HLL() {
		return this.getToken(DorisParser.HLL, 0);
	}
	AGG_STATE() {
		return this.getToken(DorisParser.AGG_STATE, 0);
	}
	STRING() {
		return this.getToken(DorisParser.STRING, 0);
	}
	JSON() {
		return this.getToken(DorisParser.JSON, 0);
	}
	JSONB() {
		return this.getToken(DorisParser.JSONB, 0);
	}
	TEXT() {
		return this.getToken(DorisParser.TEXT, 0);
	}
	VARCHAR() {
		return this.getToken(DorisParser.VARCHAR, 0);
	}
	CHAR() {
		return this.getToken(DorisParser.CHAR, 0);
	}
	DECIMAL() {
		return this.getToken(DorisParser.DECIMAL, 0);
	}
	DECIMALV2() {
		return this.getToken(DorisParser.DECIMALV2, 0);
	}
	DECIMALV3() {
		return this.getToken(DorisParser.DECIMALV3, 0);
	}
	IPV4() {
		return this.getToken(DorisParser.IPV4, 0);
	}
	IPV6() {
		return this.getToken(DorisParser.IPV6, 0);
	}
	VARIANT() {
		return this.getToken(DorisParser.VARIANT, 0);
	}
	ALL() {
		return this.getToken(DorisParser.ALL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_primitiveColType;
	}
	enterRule(listener) {
		if (listener.enterPrimitiveColType) {
			listener.enterPrimitiveColType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitPrimitiveColType) {
			listener.exitPrimitiveColType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitPrimitiveColType) {
			return visitor.visitPrimitiveColType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComplexColTypeListContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	complexColType(i) {
		if (i === undefined) {
			return this.getRuleContexts(ComplexColTypeContext);
		}
		return this.getRuleContext(i, ComplexColTypeContext);
	}
	COMMA(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.COMMA);
		} else {
			return this.getToken(DorisParser.COMMA, i);
		}
	}
	get ruleIndex() {
		return DorisParser.RULE_complexColTypeList;
	}
	enterRule(listener) {
		if (listener.enterComplexColTypeList) {
			listener.enterComplexColTypeList(this);
		}
	}
	exitRule(listener) {
		if (listener.exitComplexColTypeList) {
			listener.exitComplexColTypeList(this);
		}
	}
	accept(visitor) {
		if (visitor.visitComplexColTypeList) {
			return visitor.visitComplexColTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComplexColTypeContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	COLON() {
		return this.getToken(DorisParser.COLON, 0);
	}
	dataType() {
		return this.getRuleContext(0, DataTypeContext);
	}
	commentSpec() {
		return this.getRuleContext(0, CommentSpecContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_complexColType;
	}
	enterRule(listener) {
		if (listener.enterComplexColType) {
			listener.enterComplexColType(this);
		}
	}
	exitRule(listener) {
		if (listener.exitComplexColType) {
			listener.exitComplexColType(this);
		}
	}
	accept(visitor) {
		if (visitor.visitComplexColType) {
			return visitor.visitComplexColType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentSpecContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_commentSpec;
	}
	enterRule(listener) {
		if (listener.enterCommentSpec) {
			listener.enterCommentSpec(this);
		}
	}
	exitRule(listener) {
		if (listener.exitCommentSpec) {
			listener.exitCommentSpec(this);
		}
	}
	accept(visitor) {
		if (visitor.visitCommentSpec) {
			return visitor.visitCommentSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	TABLESAMPLE() {
		return this.getToken(DorisParser.TABLESAMPLE, 0);
	}
	LEFT_PAREN() {
		return this.getToken(DorisParser.LEFT_PAREN, 0);
	}
	RIGHT_PAREN() {
		return this.getToken(DorisParser.RIGHT_PAREN, 0);
	}
	sampleMethod() {
		return this.getRuleContext(0, SampleMethodContext);
	}
	REPEATABLE() {
		return this.getToken(DorisParser.REPEATABLE, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_sample;
	}
	enterRule(listener) {
		if (listener.enterSample) {
			listener.enterSample(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSample) {
			listener.exitSample(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSample) {
			return visitor.visitSample(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleMethodContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_sampleMethod;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class SampleByRowsContext extends SampleMethodContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	ROWS() {
		return this.getToken(DorisParser.ROWS, 0);
	}
	enterRule(listener) {
		if (listener.enterSampleByRows) {
			listener.enterSampleByRows(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSampleByRows) {
			listener.exitSampleByRows(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSampleByRows) {
			return visitor.visitSampleByRows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SampleByPercentileContext extends SampleMethodContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	PERCENT() {
		return this.getToken(DorisParser.PERCENT, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	enterRule(listener) {
		if (listener.enterSampleByPercentile) {
			listener.enterSampleByPercentile(this);
		}
	}
	exitRule(listener) {
		if (listener.exitSampleByPercentile) {
			listener.exitSampleByPercentile(this);
		}
	}
	accept(visitor) {
		if (visitor.visitSampleByPercentile) {
			return visitor.visitSampleByPercentile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableSnapshotContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	FOR() {
		return this.getToken(DorisParser.FOR, 0);
	}
	VERSION() {
		return this.getToken(DorisParser.VERSION, 0);
	}
	AS() {
		return this.getToken(DorisParser.AS, 0);
	}
	OF() {
		return this.getToken(DorisParser.OF, 0);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	TIME() {
		return this.getToken(DorisParser.TIME, 0);
	}
	STRING_LITERAL() {
		return this.getToken(DorisParser.STRING_LITERAL, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_tableSnapshot;
	}
	enterRule(listener) {
		if (listener.enterTableSnapshot) {
			listener.enterTableSnapshot(this);
		}
	}
	exitRule(listener) {
		if (listener.exitTableSnapshot) {
			listener.exitTableSnapshot(this);
		}
	}
	accept(visitor) {
		if (visitor.visitTableSnapshot) {
			return visitor.visitTableSnapshot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	identifier() {
		return this.getRuleContext(0, IdentifierContext);
	}
	errorCapturingIdentifierExtra() {
		return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_errorCapturingIdentifier;
	}
	enterRule(listener) {
		if (listener.enterErrorCapturingIdentifier) {
			listener.enterErrorCapturingIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitErrorCapturingIdentifier) {
			listener.exitErrorCapturingIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitErrorCapturingIdentifier) {
			return visitor.visitErrorCapturingIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_errorCapturingIdentifierExtra;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	SUBTRACT(i) {
		if (i === undefined) {
			return this.getTokens(DorisParser.SUBTRACT);
		} else {
			return this.getToken(DorisParser.SUBTRACT, i);
		}
	}
	identifier(i) {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		}
		return this.getRuleContext(i, IdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterErrorIdent) {
			listener.enterErrorIdent(this);
		}
	}
	exitRule(listener) {
		if (listener.exitErrorIdent) {
			listener.exitErrorIdent(this);
		}
	}
	accept(visitor) {
		if (visitor.visitErrorIdent) {
			return visitor.visitErrorIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	enterRule(listener) {
		if (listener.enterRealIdent) {
			listener.enterRealIdent(this);
		}
	}
	exitRule(listener) {
		if (listener.exitRealIdent) {
			listener.exitRealIdent(this);
		}
	}
	accept(visitor) {
		if (visitor.visitRealIdent) {
			return visitor.visitRealIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	strictIdentifier() {
		return this.getRuleContext(0, StrictIdentifierContext);
	}
	get ruleIndex() {
		return DorisParser.RULE_identifier;
	}
	enterRule(listener) {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StrictIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_strictIdentifier;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	quotedIdentifier() {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	enterRule(listener) {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	exitRule(listener) {
		if (listener.exitQuotedIdentifierAlternative) {
			listener.exitQuotedIdentifierAlternative(this);
		}
	}
	accept(visitor) {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnquotedIdentifierContext extends StrictIdentifierContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	IDENTIFIER() {
		return this.getToken(DorisParser.IDENTIFIER, 0);
	}
	nonReserved() {
		return this.getRuleContext(0, NonReservedContext);
	}
	enterRule(listener) {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	BACKQUOTED_IDENTIFIER() {
		return this.getToken(DorisParser.BACKQUOTED_IDENTIFIER, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_quotedIdentifier;
	}
	enterRule(listener) {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	exitRule(listener) {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	accept(visitor) {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	get ruleIndex() {
		return DorisParser.RULE_number;
	}
	copyFrom(ctx) {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	EXPONENT_VALUE() {
		return this.getToken(DorisParser.EXPONENT_VALUE, 0);
	}
	DECIMAL_VALUE() {
		return this.getToken(DorisParser.DECIMAL_VALUE, 0);
	}
	SUBTRACT() {
		return this.getToken(DorisParser.SUBTRACT, 0);
	}
	enterRule(listener) {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	constructor(ctx) {
		super(ctx.parent, ctx.invokingState);
		super.copyFrom(ctx);
	}
	INTEGER_VALUE() {
		return this.getToken(DorisParser.INTEGER_VALUE, 0);
	}
	SUBTRACT() {
		return this.getToken(DorisParser.SUBTRACT, 0);
	}
	enterRule(listener) {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	exitRule(listener) {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	accept(visitor) {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonReservedContext extends antlr.ParserRuleContext {
	constructor(parent, invokingState) {
		super(parent, invokingState);
	}
	ADDDATE() {
		return this.getToken(DorisParser.ADDDATE, 0);
	}
	AFTER() {
		return this.getToken(DorisParser.AFTER, 0);
	}
	AGG_STATE() {
		return this.getToken(DorisParser.AGG_STATE, 0);
	}
	AGGREGATE() {
		return this.getToken(DorisParser.AGGREGATE, 0);
	}
	ALIAS() {
		return this.getToken(DorisParser.ALIAS, 0);
	}
	ANALYZED() {
		return this.getToken(DorisParser.ANALYZED, 0);
	}
	ARRAY() {
		return this.getToken(DorisParser.ARRAY, 0);
	}
	ARRAY_RANGE() {
		return this.getToken(DorisParser.ARRAY_RANGE, 0);
	}
	AT() {
		return this.getToken(DorisParser.AT, 0);
	}
	AUTHORS() {
		return this.getToken(DorisParser.AUTHORS, 0);
	}
	AUTO_INCREMENT() {
		return this.getToken(DorisParser.AUTO_INCREMENT, 0);
	}
	BACKENDS() {
		return this.getToken(DorisParser.BACKENDS, 0);
	}
	BACKUP() {
		return this.getToken(DorisParser.BACKUP, 0);
	}
	BEGIN() {
		return this.getToken(DorisParser.BEGIN, 0);
	}
	BELONG() {
		return this.getToken(DorisParser.BELONG, 0);
	}
	BIN() {
		return this.getToken(DorisParser.BIN, 0);
	}
	BITAND() {
		return this.getToken(DorisParser.BITAND, 0);
	}
	BITMAP() {
		return this.getToken(DorisParser.BITMAP, 0);
	}
	BITMAP_UNION() {
		return this.getToken(DorisParser.BITMAP_UNION, 0);
	}
	BITOR() {
		return this.getToken(DorisParser.BITOR, 0);
	}
	BITXOR() {
		return this.getToken(DorisParser.BITXOR, 0);
	}
	BLOB() {
		return this.getToken(DorisParser.BLOB, 0);
	}
	BOOLEAN() {
		return this.getToken(DorisParser.BOOLEAN, 0);
	}
	BRIEF() {
		return this.getToken(DorisParser.BRIEF, 0);
	}
	BROKER() {
		return this.getToken(DorisParser.BROKER, 0);
	}
	BUCKETS() {
		return this.getToken(DorisParser.BUCKETS, 0);
	}
	BUILD() {
		return this.getToken(DorisParser.BUILD, 0);
	}
	BUILTIN() {
		return this.getToken(DorisParser.BUILTIN, 0);
	}
	BULK() {
		return this.getToken(DorisParser.BULK, 0);
	}
	CACHE() {
		return this.getToken(DorisParser.CACHE, 0);
	}
	CACHED() {
		return this.getToken(DorisParser.CACHED, 0);
	}
	CALL() {
		return this.getToken(DorisParser.CALL, 0);
	}
	CATALOG() {
		return this.getToken(DorisParser.CATALOG, 0);
	}
	CATALOGS() {
		return this.getToken(DorisParser.CATALOGS, 0);
	}
	CHAIN() {
		return this.getToken(DorisParser.CHAIN, 0);
	}
	CHAR() {
		return this.getToken(DorisParser.CHAR, 0);
	}
	CHARSET() {
		return this.getToken(DorisParser.CHARSET, 0);
	}
	CHECK() {
		return this.getToken(DorisParser.CHECK, 0);
	}
	CLUSTER() {
		return this.getToken(DorisParser.CLUSTER, 0);
	}
	CLUSTERS() {
		return this.getToken(DorisParser.CLUSTERS, 0);
	}
	COLLATION() {
		return this.getToken(DorisParser.COLLATION, 0);
	}
	COLLECT() {
		return this.getToken(DorisParser.COLLECT, 0);
	}
	COLOCATE() {
		return this.getToken(DorisParser.COLOCATE, 0);
	}
	COLUMNS() {
		return this.getToken(DorisParser.COLUMNS, 0);
	}
	COMMENT() {
		return this.getToken(DorisParser.COMMENT, 0);
	}
	COMMIT() {
		return this.getToken(DorisParser.COMMIT, 0);
	}
	COMMITTED() {
		return this.getToken(DorisParser.COMMITTED, 0);
	}
	COMPACT() {
		return this.getToken(DorisParser.COMPACT, 0);
	}
	COMPLETE() {
		return this.getToken(DorisParser.COMPLETE, 0);
	}
	COMPRESS_TYPE() {
		return this.getToken(DorisParser.COMPRESS_TYPE, 0);
	}
	CONFIG() {
		return this.getToken(DorisParser.CONFIG, 0);
	}
	CONNECTION() {
		return this.getToken(DorisParser.CONNECTION, 0);
	}
	CONNECTION_ID() {
		return this.getToken(DorisParser.CONNECTION_ID, 0);
	}
	CONSISTENT() {
		return this.getToken(DorisParser.CONSISTENT, 0);
	}
	CONSTRAINTS() {
		return this.getToken(DorisParser.CONSTRAINTS, 0);
	}
	CONVERT() {
		return this.getToken(DorisParser.CONVERT, 0);
	}
	CONVERT_LSC() {
		return this.getToken(DorisParser.CONVERT_LSC, 0);
	}
	COPY() {
		return this.getToken(DorisParser.COPY, 0);
	}
	COUNT() {
		return this.getToken(DorisParser.COUNT, 0);
	}
	CREATION() {
		return this.getToken(DorisParser.CREATION, 0);
	}
	CRON() {
		return this.getToken(DorisParser.CRON, 0);
	}
	CURRENT_CATALOG() {
		return this.getToken(DorisParser.CURRENT_CATALOG, 0);
	}
	CURRENT_DATE() {
		return this.getToken(DorisParser.CURRENT_DATE, 0);
	}
	CURRENT_TIME() {
		return this.getToken(DorisParser.CURRENT_TIME, 0);
	}
	CURRENT_TIMESTAMP() {
		return this.getToken(DorisParser.CURRENT_TIMESTAMP, 0);
	}
	CURRENT_USER() {
		return this.getToken(DorisParser.CURRENT_USER, 0);
	}
	DATA() {
		return this.getToken(DorisParser.DATA, 0);
	}
	DATE() {
		return this.getToken(DorisParser.DATE, 0);
	}
	DATE_ADD() {
		return this.getToken(DorisParser.DATE_ADD, 0);
	}
	DATE_CEIL() {
		return this.getToken(DorisParser.DATE_CEIL, 0);
	}
	DATE_DIFF() {
		return this.getToken(DorisParser.DATE_DIFF, 0);
	}
	DATE_FLOOR() {
		return this.getToken(DorisParser.DATE_FLOOR, 0);
	}
	DATE_SUB() {
		return this.getToken(DorisParser.DATE_SUB, 0);
	}
	DATEADD() {
		return this.getToken(DorisParser.DATEADD, 0);
	}
	DATEDIFF() {
		return this.getToken(DorisParser.DATEDIFF, 0);
	}
	DATETIME() {
		return this.getToken(DorisParser.DATETIME, 0);
	}
	DATETIMEV1() {
		return this.getToken(DorisParser.DATETIMEV1, 0);
	}
	DATETIMEV2() {
		return this.getToken(DorisParser.DATETIMEV2, 0);
	}
	DATEV1() {
		return this.getToken(DorisParser.DATEV1, 0);
	}
	DATEV2() {
		return this.getToken(DorisParser.DATEV2, 0);
	}
	DAY() {
		return this.getToken(DorisParser.DAY, 0);
	}
	DAYS_ADD() {
		return this.getToken(DorisParser.DAYS_ADD, 0);
	}
	DAYS_SUB() {
		return this.getToken(DorisParser.DAYS_SUB, 0);
	}
	DECIMAL() {
		return this.getToken(DorisParser.DECIMAL, 0);
	}
	DECIMALV2() {
		return this.getToken(DorisParser.DECIMALV2, 0);
	}
	DECIMALV3() {
		return this.getToken(DorisParser.DECIMALV3, 0);
	}
	DEFERRED() {
		return this.getToken(DorisParser.DEFERRED, 0);
	}
	DEMAND() {
		return this.getToken(DorisParser.DEMAND, 0);
	}
	DIAGNOSE() {
		return this.getToken(DorisParser.DIAGNOSE, 0);
	}
	DISTINCTPC() {
		return this.getToken(DorisParser.DISTINCTPC, 0);
	}
	DISTINCTPCSA() {
		return this.getToken(DorisParser.DISTINCTPCSA, 0);
	}
	DO() {
		return this.getToken(DorisParser.DO, 0);
	}
	DORIS_INTERNAL_TABLE_ID() {
		return this.getToken(DorisParser.DORIS_INTERNAL_TABLE_ID, 0);
	}
	DUAL() {
		return this.getToken(DorisParser.DUAL, 0);
	}
	DYNAMIC() {
		return this.getToken(DorisParser.DYNAMIC, 0);
	}
	ENABLE() {
		return this.getToken(DorisParser.ENABLE, 0);
	}
	ENCRYPTKEY() {
		return this.getToken(DorisParser.ENCRYPTKEY, 0);
	}
	ENCRYPTKEYS() {
		return this.getToken(DorisParser.ENCRYPTKEYS, 0);
	}
	END() {
		return this.getToken(DorisParser.END, 0);
	}
	ENDS() {
		return this.getToken(DorisParser.ENDS, 0);
	}
	ENGINE() {
		return this.getToken(DorisParser.ENGINE, 0);
	}
	ENGINES() {
		return this.getToken(DorisParser.ENGINES, 0);
	}
	ERRORS() {
		return this.getToken(DorisParser.ERRORS, 0);
	}
	EVENTS() {
		return this.getToken(DorisParser.EVENTS, 0);
	}
	EVERY() {
		return this.getToken(DorisParser.EVERY, 0);
	}
	EXCLUDE() {
		return this.getToken(DorisParser.EXCLUDE, 0);
	}
	EXPIRED() {
		return this.getToken(DorisParser.EXPIRED, 0);
	}
	EXTERNAL() {
		return this.getToken(DorisParser.EXTERNAL, 0);
	}
	FAILED_LOGIN_ATTEMPTS() {
		return this.getToken(DorisParser.FAILED_LOGIN_ATTEMPTS, 0);
	}
	FAST() {
		return this.getToken(DorisParser.FAST, 0);
	}
	FEATURE() {
		return this.getToken(DorisParser.FEATURE, 0);
	}
	FIELDS() {
		return this.getToken(DorisParser.FIELDS, 0);
	}
	FILE() {
		return this.getToken(DorisParser.FILE, 0);
	}
	FILTER() {
		return this.getToken(DorisParser.FILTER, 0);
	}
	FIRST() {
		return this.getToken(DorisParser.FIRST, 0);
	}
	FORMAT() {
		return this.getToken(DorisParser.FORMAT, 0);
	}
	FREE() {
		return this.getToken(DorisParser.FREE, 0);
	}
	FRONTENDS() {
		return this.getToken(DorisParser.FRONTENDS, 0);
	}
	FUNCTION() {
		return this.getToken(DorisParser.FUNCTION, 0);
	}
	GENERIC() {
		return this.getToken(DorisParser.GENERIC, 0);
	}
	GLOBAL() {
		return this.getToken(DorisParser.GLOBAL, 0);
	}
	GRAPH() {
		return this.getToken(DorisParser.GRAPH, 0);
	}
	GROUPING() {
		return this.getToken(DorisParser.GROUPING, 0);
	}
	GROUPS() {
		return this.getToken(DorisParser.GROUPS, 0);
	}
	HASH() {
		return this.getToken(DorisParser.HASH, 0);
	}
	HDFS() {
		return this.getToken(DorisParser.HDFS, 0);
	}
	HELP() {
		return this.getToken(DorisParser.HELP, 0);
	}
	HISTOGRAM() {
		return this.getToken(DorisParser.HISTOGRAM, 0);
	}
	HLL_UNION() {
		return this.getToken(DorisParser.HLL_UNION, 0);
	}
	HOSTNAME() {
		return this.getToken(DorisParser.HOSTNAME, 0);
	}
	HOTSPOT() {
		return this.getToken(DorisParser.HOTSPOT, 0);
	}
	HOUR() {
		return this.getToken(DorisParser.HOUR, 0);
	}
	HUB() {
		return this.getToken(DorisParser.HUB, 0);
	}
	IDENTIFIED() {
		return this.getToken(DorisParser.IDENTIFIED, 0);
	}
	IGNORE() {
		return this.getToken(DorisParser.IGNORE, 0);
	}
	IMMEDIATE() {
		return this.getToken(DorisParser.IMMEDIATE, 0);
	}
	INCREMENTAL() {
		return this.getToken(DorisParser.INCREMENTAL, 0);
	}
	INDEXES() {
		return this.getToken(DorisParser.INDEXES, 0);
	}
	INVERTED() {
		return this.getToken(DorisParser.INVERTED, 0);
	}
	IPV4() {
		return this.getToken(DorisParser.IPV4, 0);
	}
	IPV6() {
		return this.getToken(DorisParser.IPV6, 0);
	}
	IS_NOT_NULL_PRED() {
		return this.getToken(DorisParser.IS_NOT_NULL_PRED, 0);
	}
	IS_NULL_PRED() {
		return this.getToken(DorisParser.IS_NULL_PRED, 0);
	}
	ISNULL() {
		return this.getToken(DorisParser.ISNULL, 0);
	}
	ISOLATION() {
		return this.getToken(DorisParser.ISOLATION, 0);
	}
	JOB() {
		return this.getToken(DorisParser.JOB, 0);
	}
	JOBS() {
		return this.getToken(DorisParser.JOBS, 0);
	}
	JSON() {
		return this.getToken(DorisParser.JSON, 0);
	}
	JSONB() {
		return this.getToken(DorisParser.JSONB, 0);
	}
	LABEL() {
		return this.getToken(DorisParser.LABEL, 0);
	}
	LAST() {
		return this.getToken(DorisParser.LAST, 0);
	}
	LDAP() {
		return this.getToken(DorisParser.LDAP, 0);
	}
	LDAP_ADMIN_PASSWORD() {
		return this.getToken(DorisParser.LDAP_ADMIN_PASSWORD, 0);
	}
	LEFT_BRACE() {
		return this.getToken(DorisParser.LEFT_BRACE, 0);
	}
	LESS() {
		return this.getToken(DorisParser.LESS, 0);
	}
	LEVEL() {
		return this.getToken(DorisParser.LEVEL, 0);
	}
	LINES() {
		return this.getToken(DorisParser.LINES, 0);
	}
	LINK() {
		return this.getToken(DorisParser.LINK, 0);
	}
	LOCAL() {
		return this.getToken(DorisParser.LOCAL, 0);
	}
	LOCALTIME() {
		return this.getToken(DorisParser.LOCALTIME, 0);
	}
	LOCALTIMESTAMP() {
		return this.getToken(DorisParser.LOCALTIMESTAMP, 0);
	}
	LOCATION() {
		return this.getToken(DorisParser.LOCATION, 0);
	}
	LOCK() {
		return this.getToken(DorisParser.LOCK, 0);
	}
	LOGICAL() {
		return this.getToken(DorisParser.LOGICAL, 0);
	}
	MANUAL() {
		return this.getToken(DorisParser.MANUAL, 0);
	}
	MAP() {
		return this.getToken(DorisParser.MAP, 0);
	}
	MATCH_ALL() {
		return this.getToken(DorisParser.MATCH_ALL, 0);
	}
	MATCH_ANY() {
		return this.getToken(DorisParser.MATCH_ANY, 0);
	}
	MATCH_PHRASE() {
		return this.getToken(DorisParser.MATCH_PHRASE, 0);
	}
	MATCH_PHRASE_EDGE() {
		return this.getToken(DorisParser.MATCH_PHRASE_EDGE, 0);
	}
	MATCH_PHRASE_PREFIX() {
		return this.getToken(DorisParser.MATCH_PHRASE_PREFIX, 0);
	}
	MATCH_REGEXP() {
		return this.getToken(DorisParser.MATCH_REGEXP, 0);
	}
	MATERIALIZED() {
		return this.getToken(DorisParser.MATERIALIZED, 0);
	}
	MAX() {
		return this.getToken(DorisParser.MAX, 0);
	}
	MEMO() {
		return this.getToken(DorisParser.MEMO, 0);
	}
	MERGE() {
		return this.getToken(DorisParser.MERGE, 0);
	}
	MIGRATE() {
		return this.getToken(DorisParser.MIGRATE, 0);
	}
	MIGRATIONS() {
		return this.getToken(DorisParser.MIGRATIONS, 0);
	}
	MIN() {
		return this.getToken(DorisParser.MIN, 0);
	}
	MINUTE() {
		return this.getToken(DorisParser.MINUTE, 0);
	}
	MODIFY() {
		return this.getToken(DorisParser.MODIFY, 0);
	}
	MONTH() {
		return this.getToken(DorisParser.MONTH, 0);
	}
	MTMV() {
		return this.getToken(DorisParser.MTMV, 0);
	}
	NAME() {
		return this.getToken(DorisParser.NAME, 0);
	}
	NAMES() {
		return this.getToken(DorisParser.NAMES, 0);
	}
	NEGATIVE() {
		return this.getToken(DorisParser.NEGATIVE, 0);
	}
	NEVER() {
		return this.getToken(DorisParser.NEVER, 0);
	}
	NEXT() {
		return this.getToken(DorisParser.NEXT, 0);
	}
	NGRAM_BF() {
		return this.getToken(DorisParser.NGRAM_BF, 0);
	}
	NO() {
		return this.getToken(DorisParser.NO, 0);
	}
	NON_NULLABLE() {
		return this.getToken(DorisParser.NON_NULLABLE, 0);
	}
	NULLS() {
		return this.getToken(DorisParser.NULLS, 0);
	}
	OF() {
		return this.getToken(DorisParser.OF, 0);
	}
	OFFSET() {
		return this.getToken(DorisParser.OFFSET, 0);
	}
	ONLY() {
		return this.getToken(DorisParser.ONLY, 0);
	}
	OPEN() {
		return this.getToken(DorisParser.OPEN, 0);
	}
	OPTIMIZED() {
		return this.getToken(DorisParser.OPTIMIZED, 0);
	}
	PARAMETER() {
		return this.getToken(DorisParser.PARAMETER, 0);
	}
	PARSED() {
		return this.getToken(DorisParser.PARSED, 0);
	}
	PASSWORD() {
		return this.getToken(DorisParser.PASSWORD, 0);
	}
	PASSWORD_EXPIRE() {
		return this.getToken(DorisParser.PASSWORD_EXPIRE, 0);
	}
	PASSWORD_HISTORY() {
		return this.getToken(DorisParser.PASSWORD_HISTORY, 0);
	}
	PASSWORD_LOCK_TIME() {
		return this.getToken(DorisParser.PASSWORD_LOCK_TIME, 0);
	}
	PASSWORD_REUSE() {
		return this.getToken(DorisParser.PASSWORD_REUSE, 0);
	}
	PARTITIONS() {
		return this.getToken(DorisParser.PARTITIONS, 0);
	}
	PATH() {
		return this.getToken(DorisParser.PATH, 0);
	}
	PAUSE() {
		return this.getToken(DorisParser.PAUSE, 0);
	}
	PERCENT() {
		return this.getToken(DorisParser.PERCENT, 0);
	}
	PERIOD() {
		return this.getToken(DorisParser.PERIOD, 0);
	}
	PERMISSIVE() {
		return this.getToken(DorisParser.PERMISSIVE, 0);
	}
	PHYSICAL() {
		return this.getToken(DorisParser.PHYSICAL, 0);
	}
	PLAN() {
		return this.getToken(DorisParser.PLAN, 0);
	}
	PLUGIN() {
		return this.getToken(DorisParser.PLUGIN, 0);
	}
	PLUGINS() {
		return this.getToken(DorisParser.PLUGINS, 0);
	}
	POLICY() {
		return this.getToken(DorisParser.POLICY, 0);
	}
	PRIVILEGES() {
		return this.getToken(DorisParser.PRIVILEGES, 0);
	}
	PROC() {
		return this.getToken(DorisParser.PROC, 0);
	}
	PROCESS() {
		return this.getToken(DorisParser.PROCESS, 0);
	}
	PROCESSLIST() {
		return this.getToken(DorisParser.PROCESSLIST, 0);
	}
	PROFILE() {
		return this.getToken(DorisParser.PROFILE, 0);
	}
	PROPERTIES() {
		return this.getToken(DorisParser.PROPERTIES, 0);
	}
	PROPERTY() {
		return this.getToken(DorisParser.PROPERTY, 0);
	}
	QUANTILE_STATE() {
		return this.getToken(DorisParser.QUANTILE_STATE, 0);
	}
	QUANTILE_UNION() {
		return this.getToken(DorisParser.QUANTILE_UNION, 0);
	}
	QUERY() {
		return this.getToken(DorisParser.QUERY, 0);
	}
	QUOTA() {
		return this.getToken(DorisParser.QUOTA, 0);
	}
	RANDOM() {
		return this.getToken(DorisParser.RANDOM, 0);
	}
	RECENT() {
		return this.getToken(DorisParser.RECENT, 0);
	}
	RECOVER() {
		return this.getToken(DorisParser.RECOVER, 0);
	}
	RECYCLE() {
		return this.getToken(DorisParser.RECYCLE, 0);
	}
	REFRESH() {
		return this.getToken(DorisParser.REFRESH, 0);
	}
	REPEATABLE() {
		return this.getToken(DorisParser.REPEATABLE, 0);
	}
	REPLACE() {
		return this.getToken(DorisParser.REPLACE, 0);
	}
	REPLACE_IF_NOT_NULL() {
		return this.getToken(DorisParser.REPLACE_IF_NOT_NULL, 0);
	}
	REPOSITORIES() {
		return this.getToken(DorisParser.REPOSITORIES, 0);
	}
	REPOSITORY() {
		return this.getToken(DorisParser.REPOSITORY, 0);
	}
	RESOURCE() {
		return this.getToken(DorisParser.RESOURCE, 0);
	}
	RESOURCES() {
		return this.getToken(DorisParser.RESOURCES, 0);
	}
	RESTORE() {
		return this.getToken(DorisParser.RESTORE, 0);
	}
	RESTRICTIVE() {
		return this.getToken(DorisParser.RESTRICTIVE, 0);
	}
	RESUME() {
		return this.getToken(DorisParser.RESUME, 0);
	}
	RETURNS() {
		return this.getToken(DorisParser.RETURNS, 0);
	}
	REWRITTEN() {
		return this.getToken(DorisParser.REWRITTEN, 0);
	}
	RIGHT_BRACE() {
		return this.getToken(DorisParser.RIGHT_BRACE, 0);
	}
	RLIKE() {
		return this.getToken(DorisParser.RLIKE, 0);
	}
	ROLLBACK() {
		return this.getToken(DorisParser.ROLLBACK, 0);
	}
	ROLLUP() {
		return this.getToken(DorisParser.ROLLUP, 0);
	}
	ROUTINE() {
		return this.getToken(DorisParser.ROUTINE, 0);
	}
	S3() {
		return this.getToken(DorisParser.S3, 0);
	}
	SAMPLE() {
		return this.getToken(DorisParser.SAMPLE, 0);
	}
	SCHEDULE() {
		return this.getToken(DorisParser.SCHEDULE, 0);
	}
	SCHEDULER() {
		return this.getToken(DorisParser.SCHEDULER, 0);
	}
	SCHEMA() {
		return this.getToken(DorisParser.SCHEMA, 0);
	}
	SECOND() {
		return this.getToken(DorisParser.SECOND, 0);
	}
	SERIALIZABLE() {
		return this.getToken(DorisParser.SERIALIZABLE, 0);
	}
	SEQUENCE() {
		return this.getToken(DorisParser.SEQUENCE, 0);
	}
	SESSION() {
		return this.getToken(DorisParser.SESSION, 0);
	}
	SHAPE() {
		return this.getToken(DorisParser.SHAPE, 0);
	}
	SKEW() {
		return this.getToken(DorisParser.SKEW, 0);
	}
	SNAPSHOT() {
		return this.getToken(DorisParser.SNAPSHOT, 0);
	}
	SONAME() {
		return this.getToken(DorisParser.SONAME, 0);
	}
	SPLIT() {
		return this.getToken(DorisParser.SPLIT, 0);
	}
	SQL() {
		return this.getToken(DorisParser.SQL, 0);
	}
	STAGES() {
		return this.getToken(DorisParser.STAGES, 0);
	}
	START() {
		return this.getToken(DorisParser.START, 0);
	}
	STARTS() {
		return this.getToken(DorisParser.STARTS, 0);
	}
	STATS() {
		return this.getToken(DorisParser.STATS, 0);
	}
	STATUS() {
		return this.getToken(DorisParser.STATUS, 0);
	}
	STOP() {
		return this.getToken(DorisParser.STOP, 0);
	}
	STORAGE() {
		return this.getToken(DorisParser.STORAGE, 0);
	}
	STREAM() {
		return this.getToken(DorisParser.STREAM, 0);
	}
	STREAMING() {
		return this.getToken(DorisParser.STREAMING, 0);
	}
	STRING() {
		return this.getToken(DorisParser.STRING, 0);
	}
	STRUCT() {
		return this.getToken(DorisParser.STRUCT, 0);
	}
	SUBDATE() {
		return this.getToken(DorisParser.SUBDATE, 0);
	}
	SUM() {
		return this.getToken(DorisParser.SUM, 0);
	}
	TABLES() {
		return this.getToken(DorisParser.TABLES, 0);
	}
	TASK() {
		return this.getToken(DorisParser.TASK, 0);
	}
	TASKS() {
		return this.getToken(DorisParser.TASKS, 0);
	}
	TEMPORARY() {
		return this.getToken(DorisParser.TEMPORARY, 0);
	}
	TEXT() {
		return this.getToken(DorisParser.TEXT, 0);
	}
	THAN() {
		return this.getToken(DorisParser.THAN, 0);
	}
	TIME() {
		return this.getToken(DorisParser.TIME, 0);
	}
	TIMESTAMP() {
		return this.getToken(DorisParser.TIMESTAMP, 0);
	}
	TIMESTAMPADD() {
		return this.getToken(DorisParser.TIMESTAMPADD, 0);
	}
	TIMESTAMPDIFF() {
		return this.getToken(DorisParser.TIMESTAMPDIFF, 0);
	}
	TRANSACTION() {
		return this.getToken(DorisParser.TRANSACTION, 0);
	}
	TREE() {
		return this.getToken(DorisParser.TREE, 0);
	}
	TRIGGERS() {
		return this.getToken(DorisParser.TRIGGERS, 0);
	}
	TRUNCATE() {
		return this.getToken(DorisParser.TRUNCATE, 0);
	}
	TYPE() {
		return this.getToken(DorisParser.TYPE, 0);
	}
	TYPES() {
		return this.getToken(DorisParser.TYPES, 0);
	}
	UNCOMMITTED() {
		return this.getToken(DorisParser.UNCOMMITTED, 0);
	}
	UNLOCK() {
		return this.getToken(DorisParser.UNLOCK, 0);
	}
	UP() {
		return this.getToken(DorisParser.UP, 0);
	}
	USER() {
		return this.getToken(DorisParser.USER, 0);
	}
	VALUE() {
		return this.getToken(DorisParser.VALUE, 0);
	}
	VARCHAR() {
		return this.getToken(DorisParser.VARCHAR, 0);
	}
	VARIABLES() {
		return this.getToken(DorisParser.VARIABLES, 0);
	}
	VARIANT() {
		return this.getToken(DorisParser.VARIANT, 0);
	}
	VAULT() {
		return this.getToken(DorisParser.VAULT, 0);
	}
	VERBOSE() {
		return this.getToken(DorisParser.VERBOSE, 0);
	}
	VERSION() {
		return this.getToken(DorisParser.VERSION, 0);
	}
	VIEW() {
		return this.getToken(DorisParser.VIEW, 0);
	}
	WARM() {
		return this.getToken(DorisParser.WARM, 0);
	}
	WARNINGS() {
		return this.getToken(DorisParser.WARNINGS, 0);
	}
	WEEK() {
		return this.getToken(DorisParser.WEEK, 0);
	}
	WORK() {
		return this.getToken(DorisParser.WORK, 0);
	}
	YEAR() {
		return this.getToken(DorisParser.YEAR, 0);
	}
	get ruleIndex() {
		return DorisParser.RULE_nonReserved;
	}
	enterRule(listener) {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	exitRule(listener) {
		if (listener.exitNonReserved) {
			listener.exitNonReserved(this);
		}
	}
	accept(visitor) {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
