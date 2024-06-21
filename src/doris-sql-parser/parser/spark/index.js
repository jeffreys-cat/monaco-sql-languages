import { SparkSqlLexer } from '../../lib/spark/SparkSqlLexer';
import { SparkSqlParser } from '../../lib/spark/SparkSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { EntityContextType } from '../common/types';
import { SparkSqlSplitListener } from './sparkSplitListener';
import { SparkEntityCollector } from './sparkEntityCollector';
export { SparkSqlSplitListener, SparkEntityCollector };
export class SparkSQL extends BasicSQL {
	constructor() {
		super(...arguments);
		this.preferredRules = new Set([
			SparkSqlParser.RULE_namespaceName,
			SparkSqlParser.RULE_namespaceNameCreate,
			SparkSqlParser.RULE_tableName,
			SparkSqlParser.RULE_tableNameCreate,
			SparkSqlParser.RULE_viewName,
			SparkSqlParser.RULE_viewNameCreate,
			SparkSqlParser.RULE_functionName,
			SparkSqlParser.RULE_functionNameCreate,
			SparkSqlParser.RULE_columnName,
			SparkSqlParser.RULE_columnNameCreate
		]);
	}
	createLexerFromCharStream(charStreams) {
		return new SparkSqlLexer(charStreams);
	}
	createParserFromTokenStream(tokenStream) {
		return new SparkSqlParser(tokenStream);
	}
	get splitListener() {
		return new SparkSqlSplitListener();
	}
	createEntityCollector(input, caretTokenIndex) {
		return new SparkEntityCollector(input, caretTokenIndex);
	}
	processCandidates(candidates, allTokens, caretTokenIndex, tokenIndexOffset) {
		const originalSyntaxSuggestions = [];
		const keywords = [];
		for (const candidate of candidates.rules) {
			const [ruleType, candidateRule] = candidate;
			const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
			const tokenRanges = allTokens.slice(
				startTokenIndex,
				caretTokenIndex + tokenIndexOffset + 1
			);
			let syntaxContextType = void 0;
			switch (ruleType) {
				case SparkSqlParser.RULE_namespaceName: {
					syntaxContextType = EntityContextType.DATABASE;
					break;
				}
				case SparkSqlParser.RULE_namespaceNameCreate: {
					syntaxContextType = EntityContextType.DATABASE_CREATE;
					break;
				}
				case SparkSqlParser.RULE_tableName: {
					syntaxContextType = EntityContextType.TABLE;
					break;
				}
				case SparkSqlParser.RULE_tableNameCreate: {
					syntaxContextType = EntityContextType.TABLE_CREATE;
					break;
				}
				case SparkSqlParser.RULE_viewName: {
					syntaxContextType = EntityContextType.VIEW;
					break;
				}
				case SparkSqlParser.RULE_viewNameCreate: {
					syntaxContextType = EntityContextType.VIEW_CREATE;
					break;
				}
				case SparkSqlParser.RULE_functionName: {
					syntaxContextType = EntityContextType.FUNCTION;
					break;
				}
				case SparkSqlParser.RULE_functionNameCreate: {
					syntaxContextType = EntityContextType.FUNCTION_CREATE;
					break;
				}
				case SparkSqlParser.RULE_columnName: {
					syntaxContextType = EntityContextType.COLUMN;
					break;
				}
				case SparkSqlParser.RULE_columnNameCreate: {
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
		for (const candidate of candidates.tokens) {
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
