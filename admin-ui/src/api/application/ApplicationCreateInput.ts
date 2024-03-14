import { QuestionnaireCreateNestedManyWithoutApplicationsInput } from "./QuestionnaireCreateNestedManyWithoutApplicationsInput";

export type ApplicationCreateInput = {
  questionnaires?: QuestionnaireCreateNestedManyWithoutApplicationsInput;
};
