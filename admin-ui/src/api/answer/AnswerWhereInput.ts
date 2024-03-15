import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnswerWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  sortOrder?: StringNullableFilter;
  value?: StringNullableFilter;
};
