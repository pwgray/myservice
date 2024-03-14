import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { QuestionCreateNestedManyWithoutQuestionnairesInput } from "./QuestionCreateNestedManyWithoutQuestionnairesInput";

export type QuestionnaireCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  name?: string | null;
  questions?: QuestionCreateNestedManyWithoutQuestionnairesInput;
};
