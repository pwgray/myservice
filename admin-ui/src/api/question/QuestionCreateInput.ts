import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";
import { QuestionsRIskCreateNestedManyWithoutQuestionsInput } from "./QuestionsRIskCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  description?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  questionnaire?: QuestionnaireWhereUniqueInput | null;
  RIsks?: QuestionsRIskCreateNestedManyWithoutQuestionsInput;
  text?: string | null;
};
