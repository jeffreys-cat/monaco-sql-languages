import { HiveSqlLexer } from '../../lib/hive/HiveSqlLexer';
import { HiveSqlParser } from '../../lib/hive/HiveSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { EntityContextType } from '../common/types';
import { HiveSqlSplitListener } from './hiveSplitListener';
import { HiveEntityCollector } from './hiveEntityCollector';
export { HiveEntityCollector, HiveSqlSplitListener };
export class HiveSQL extends BasicSQL {
	constructor() {
		super(...arguments);
		this.preferredRules = new Set([
			HiveSqlParser.RULE_dbSchemaName,
			HiveSqlParser.RULE_dbSchemaNameCreate,
			HiveSqlParser.RULE_tableName,
			HiveSqlParser.RULE_tableNameCreate,
			HiveSqlParser.RULE_viewName,
			HiveSqlParser.RULE_viewNameCreate,
			HiveSqlParser.RULE_functionNameForDDL,
			HiveSqlParser.RULE_functionNameForInvoke,
			HiveSqlParser.RULE_functionNameCreate,
			HiveSqlParser.RULE_columnName,
			HiveSqlParser.RULE_columnNameCreate
		]);
	}
	createLexerFromCharStream(charStreams) {
		return new HiveSqlLexer(charStreams);
	}
	createParserFromTokenStream(tokenStream) {
		return new HiveSqlParser(tokenStream);
	}
	get splitListener() {
		return new HiveSqlSplitListener();
	}
	createEntityCollector(input, caretTokenIndex) {
		return new HiveEntityCollector(input, caretTokenIndex);
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
				case HiveSqlParser.RULE_dbSchemaName: {
					syntaxContextType = EntityContextType.DATABASE;
					break;
				}
				case HiveSqlParser.RULE_dbSchemaNameCreate: {
					syntaxContextType = EntityContextType.DATABASE_CREATE;
					break;
				}
				case HiveSqlParser.RULE_tableName: {
					syntaxContextType = EntityContextType.TABLE;
					break;
				}
				case HiveSqlParser.RULE_tableNameCreate: {
					syntaxContextType = EntityContextType.TABLE_CREATE;
					break;
				}
				case HiveSqlParser.RULE_viewName: {
					syntaxContextType = EntityContextType.VIEW;
					break;
				}
				case HiveSqlParser.RULE_viewNameCreate: {
					syntaxContextType = EntityContextType.VIEW_CREATE;
					break;
				}
				case HiveSqlParser.RULE_functionNameForDDL:
				case HiveSqlParser.RULE_functionNameForInvoke: {
					syntaxContextType = EntityContextType.FUNCTION;
					break;
				}
				case HiveSqlParser.RULE_functionNameCreate: {
					syntaxContextType = EntityContextType.FUNCTION_CREATE;
					break;
				}
				case HiveSqlParser.RULE_columnName: {
					syntaxContextType = EntityContextType.COLUMN;
					break;
				}
				case HiveSqlParser.RULE_columnNameCreate: {
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
