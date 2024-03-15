import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RiskWhereInput = {
  id?: StringFilter;
  mitigationPlan?: StringNullableFilter;
  owner?: StringNullableFilter;
  summary?: StringNullableFilter;
};
