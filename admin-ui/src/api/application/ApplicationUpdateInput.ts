import { QuestionnaireUpdateManyWithoutApplicationsInput } from "./QuestionnaireUpdateManyWithoutApplicationsInput";

export type ApplicationUpdateInput = {
  ait?: string | null;
  description?: string | null;
  name?: string | null;
  questionnaires?: QuestionnaireUpdateManyWithoutApplicationsInput;
};
