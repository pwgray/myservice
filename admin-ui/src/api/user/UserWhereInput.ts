import { AssessmentWhereUniqueInput } from "../assessment/AssessmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type UserWhereInput = {
  assessments?: AssessmentWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  questions?: QuestionWhereUniqueInput;
  username?: StringFilter;
};
