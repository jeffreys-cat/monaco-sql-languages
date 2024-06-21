import { FlinkSqlLexer } from '../../lib/flink/FlinkSqlLexer';
import { FlinkSqlParser } from '../../lib/flink/FlinkSqlParser';
import { EntityContextType } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { FlinkSqlSplitListener } from './flinkSplitListener';
import { FlinkEntityCollector } from './flinkEntityCollector';
export { FlinkSqlSplitListener, FlinkEntityCollector };
export class FlinkSQL extends BasicSQL {
	constructor() {
		super(...arguments);
		this.preferredRules = new Set([
			FlinkSqlParser.RULE_catalogPath,
			FlinkSqlParser.RULE_databasePath,
			FlinkSqlParser.RULE_databasePathCreate,
			FlinkSqlParser.RULE_tablePath,
			FlinkSqlParser.RULE_tablePathCreate,
			FlinkSqlParser.RULE_viewPath,
			FlinkSqlParser.RULE_viewPathCreate,
			FlinkSqlParser.RULE_functionName,
			FlinkSqlParser.RULE_functionNameCreate,
			FlinkSqlParser.RULE_columnName,
			FlinkSqlParser.RULE_columnNameCreate
		]);
	}
	createLexerFromCharStream(charStreams) {
		return new FlinkSqlLexer(charStreams);
	}
	createParserFromTokenStream(tokenStream) {
		return new FlinkSqlParser(tokenStream);
	}
	get splitListener() {
		return new FlinkSqlSplitListener();
	}
	createEntityCollector(input, caretTokenIndex) {
		return new FlinkEntityCollector(input, caretTokenIndex);
	}
	processCandidates(candidates, allTokens, caretTokenIndex, tokenIndexOffset) {
		const originalSyntaxSuggestions = [];
		const keywords = [];
		for (let candidate of candidates.rules) {
			const [ruleType, candidateRule] = candidate;
			const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
			const tokenRanges = allTokens.slice(
				startTokenIndex,
				caretTokenIndex + tokenIndexOffset + 1
			);
			let syntaxContextType = void 0;
			switch (ruleType) {
				case FlinkSqlParser.RULE_catalogPath: {
					syntaxContextType = EntityContextType.CATALOG;
					break;
				}
				case FlinkSqlParser.RULE_databasePath: {
					syntaxContextType = EntityContextType.DATABASE;
					break;
				}
				case FlinkSqlParser.RULE_databasePathCreate: {
					syntaxContextType = EntityContextType.DATABASE_CREATE;
					break;
				}
				case FlinkSqlParser.RULE_tablePath: {
					syntaxContextType = EntityContextType.TABLE;
					break;
				}
				case FlinkSqlParser.RULE_tablePathCreate: {
					syntaxContextType = EntityContextType.TABLE_CREATE;
					break;
				}
				case FlinkSqlParser.RULE_viewPath: {
					syntaxContextType = EntityContextType.VIEW;
					break;
				}
				case FlinkSqlParser.RULE_viewPathCreate: {
					syntaxContextType = EntityContextType.VIEW_CREATE;
					break;
				}
				case FlinkSqlParser.RULE_functionName: {
					syntaxContextType = EntityContextType.FUNCTION;
					break;
				}
				case FlinkSqlParser.RULE_functionNameCreate: {
					syntaxContextType = EntityContextType.FUNCTION_CREATE;
					break;
				}
				case FlinkSqlParser.RULE_columnName: {
					syntaxContextType = EntityContextType.COLUMN;
					break;
				}
				case FlinkSqlParser.RULE_columnNameCreate: {
					syntaxContextType = EntityContextType.COLUMN_CREATE;
					break;
				}
				default:
					break;
			}
			if (syntaxContextType) {
				originalSyntaxSuggestions.push({
					syntaxContextType,
					wordRanges: tokenRanges
				});
			}
		}
		for (let candidate of candidates.tokens) {
			const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
			const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
			if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
				const keyword =
					displayName.startsWith("'") && displayName.endsWith("'")
						? displayName.slice(1, -1)
						: displayName;
				keywords.push(keyword);
			}
		}
		return {
			syntax: originalSyntaxSuggestions,
			keywords
		};
	}
}
