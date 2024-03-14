import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  description?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  questionnaire?: QuestionnaireWhereUniqueInput | null;
  text?: string | null;
};
