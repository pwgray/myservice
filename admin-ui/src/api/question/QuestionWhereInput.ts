import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";

export type QuestionWhereInput = {
  answers?: AnswerListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  questionnaire?: QuestionnaireWhereUniqueInput;
  text?: StringNullableFilter;
};
