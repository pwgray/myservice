import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";
import { QuestionsRIskUpdateManyWithoutQuestionsInput } from "./QuestionsRIskUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  description?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  questionnaire?: QuestionnaireWhereUniqueInput | null;
  Risks?: QuestionsRIskUpdateManyWithoutQuestionsInput;
  text?: string | null;
};
