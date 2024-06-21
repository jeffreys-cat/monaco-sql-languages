import { TrinoSqlLexer } from '../../lib/trino/TrinoSqlLexer';
import { TrinoSqlParser } from '../../lib/trino/TrinoSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { EntityContextType } from '../common/types';
import { TrinoSqlSplitListener } from './trinoSplitListener';
import { TrinoEntityCollector } from './trinoEntityCollector';
export { TrinoSqlSplitListener, TrinoEntityCollector };
export class TrinoSQL extends BasicSQL {
	constructor() {
		super(...arguments);
		this.preferredRules = new Set([
			TrinoSqlParser.RULE_catalogName,
			TrinoSqlParser.RULE_catalogNameCreate,
			TrinoSqlParser.RULE_schemaName,
			TrinoSqlParser.RULE_schemaNameCreate,
			TrinoSqlParser.RULE_tableName,
			TrinoSqlParser.RULE_tableNameCreate,
			TrinoSqlParser.RULE_viewName,
			TrinoSqlParser.RULE_viewNameCreate,
			TrinoSqlParser.RULE_functionName,
			TrinoSqlParser.RULE_columnName,
			TrinoSqlParser.RULE_columnNameCreate
		]);
	}
	createLexerFromCharStream(charStreams) {
		return new TrinoSqlLexer(charStreams);
	}
	createParserFromTokenStream(tokenStream) {
		return new TrinoSqlParser(tokenStream);
	}
	get splitListener() {
		return new TrinoSqlSplitListener();
	}
	createEntityCollector(input, caretTokenIndex) {
		return new TrinoEntityCollector(input, caretTokenIndex);
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
				case TrinoSqlParser.RULE_catalogName: {
					syntaxContextType = EntityContextType.CATALOG;
					break;
				}
				case TrinoSqlParser.RULE_schemaName: {
					syntaxContextType = EntityContextType.DATABASE;
					break;
				}
				case TrinoSqlParser.RULE_schemaNameCreate: {
					syntaxContextType = EntityContextType.DATABASE_CREATE;
					break;
				}
				case TrinoSqlParser.RULE_tableName: {
					syntaxContextType = EntityContextType.TABLE;
					break;
				}
				case TrinoSqlParser.RULE_tableNameCreate: {
					syntaxContextType = EntityContextType.TABLE_CREATE;
					break;
				}
				case TrinoSqlParser.RULE_viewName: {
					syntaxContextType = EntityContextType.VIEW;
					break;
				}
				case TrinoSqlParser.RULE_viewNameCreate: {
					syntaxContextType = EntityContextType.VIEW_CREATE;
					break;
				}
				case TrinoSqlParser.RULE_functionName: {
					syntaxContextType = EntityContextType.FUNCTION;
					break;
				}
				case TrinoSqlParser.RULE_columnNameCreate: {
					syntaxContextType = EntityContextType.COLUMN_CREATE;
					break;
				}
				case TrinoSqlParser.RULE_columnName: {
					syntaxContextType = EntityContextType.COLUMN;
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
