import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuestionsRIskListRelationFilter } from "../questionsRIsk/QuestionsRIskListRelationFilter";

export type RiskWhereInput = {
  id?: StringFilter;
  mitigationPlan?: StringNullableFilter;
  owner?: StringNullableFilter;
  questions?: QuestionsRIskListRelationFilter;
  summary?: StringNullableFilter;
};
