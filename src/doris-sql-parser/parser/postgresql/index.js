import { PostgreSqlLexer } from '../../lib/postgresql/PostgreSqlLexer';
import { PostgreSqlParser } from '../../lib/postgresql/PostgreSqlParser';
import { EntityContextType } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { PostgreSqlEntityCollector } from './postgreEntityCollector';
import { PostgreSqlSplitListener } from './postgreSplitListener';
export { PostgreSqlEntityCollector, PostgreSqlSplitListener };
export class PostgreSQL extends BasicSQL {
	constructor() {
		super(...arguments);
		this.preferredRules = new Set([
			PostgreSqlParser.RULE_table_name_create,
			PostgreSqlParser.RULE_table_name,
			PostgreSqlParser.RULE_function_name,
			PostgreSqlParser.RULE_function_name_create,
			PostgreSqlParser.RULE_schema_name_create,
			PostgreSqlParser.RULE_schema_name,
			PostgreSqlParser.RULE_view_name_create,
			PostgreSqlParser.RULE_view_name,
			PostgreSqlParser.RULE_database_name_create,
			PostgreSqlParser.RULE_database_name,
			PostgreSqlParser.RULE_procedure_name_create,
			PostgreSqlParser.RULE_procedure_name,
			PostgreSqlParser.RULE_column_name_create,
			PostgreSqlParser.RULE_column_name // column name
		]);
	}
	createLexerFromCharStream(charStreams) {
		return new PostgreSqlLexer(charStreams);
	}
	createParserFromTokenStream(tokenStream) {
		return new PostgreSqlParser(tokenStream);
	}
	get splitListener() {
		return new PostgreSqlSplitListener();
	}
	createEntityCollector(input, caretTokenIndex) {
		return new PostgreSqlEntityCollector(input, caretTokenIndex);
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
				case PostgreSqlParser.RULE_table_name_create: {
					syntaxContextType = EntityContextType.TABLE_CREATE;
					break;
				}
				case PostgreSqlParser.RULE_table_name: {
					syntaxContextType = EntityContextType.TABLE;
					break;
				}
				case PostgreSqlParser.RULE_function_name_create: {
					syntaxContextType = EntityContextType.FUNCTION_CREATE;
					break;
				}
				case PostgreSqlParser.RULE_function_name: {
					syntaxContextType = EntityContextType.FUNCTION;
					break;
				}
				case PostgreSqlParser.RULE_schema_name_create: {
					syntaxContextType = EntityContextType.DATABASE_CREATE;
					break;
				}
				case PostgreSqlParser.RULE_schema_name: {
					syntaxContextType = EntityContextType.DATABASE;
					break;
				}
				case PostgreSqlParser.RULE_view_name_create: {
					syntaxContextType = EntityContextType.VIEW_CREATE;
					break;
				}
				case PostgreSqlParser.RULE_view_name: {
					syntaxContextType = EntityContextType.VIEW;
					break;
				}
				case PostgreSqlParser.RULE_database_name_create: {
					syntaxContextType = EntityContextType.DATABASE_CREATE;
					break;
				}
				case PostgreSqlParser.RULE_database_name: {
					syntaxContextType = EntityContextType.DATABASE;
					break;
				}
				case PostgreSqlParser.RULE_procedure_name_create: {
					syntaxContextType = EntityContextType.PROCEDURE_CREATE;
					break;
				}
				case PostgreSqlParser.RULE_procedure_name: {
					syntaxContextType = EntityContextType.PROCEDURE;
					break;
				}
				case PostgreSqlParser.RULE_column_name_create: {
					syntaxContextType = EntityContextType.COLUMN_CREATE;
					break;
				}
				case PostgreSqlParser.RULE_column_name: {
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
