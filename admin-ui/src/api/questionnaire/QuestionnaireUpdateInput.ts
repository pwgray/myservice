import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { QuestionUpdateManyWithoutQuestionnairesInput } from "./QuestionUpdateManyWithoutQuestionnairesInput";

export type QuestionnaireUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  name?: string | null;
  questions?: QuestionUpdateManyWithoutQuestionnairesInput;
};
