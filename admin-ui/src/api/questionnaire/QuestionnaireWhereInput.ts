import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type QuestionnaireWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  questions?: QuestionListRelationFilter;
};
