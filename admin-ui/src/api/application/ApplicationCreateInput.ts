import { QuestionnaireCreateNestedManyWithoutApplicationsInput } from "./QuestionnaireCreateNestedManyWithoutApplicationsInput";

export type ApplicationCreateInput = {
  ait?: string | null;
  description?: string | null;
  name?: string | null;
  questionnaires?: QuestionnaireCreateNestedManyWithoutApplicationsInput;
};
