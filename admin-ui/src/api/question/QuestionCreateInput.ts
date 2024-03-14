import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  description?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  questionnaire?: QuestionnaireWhereUniqueInput | null;
  text?: string | null;
};
