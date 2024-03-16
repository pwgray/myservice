import { AssessmentUpdateManyWithoutApplicationsInput } from "./AssessmentUpdateManyWithoutApplicationsInput";
import { QuestionnaireUpdateManyWithoutApplicationsInput } from "./QuestionnaireUpdateManyWithoutApplicationsInput";

export type ApplicationUpdateInput = {
  ait?: string | null;
  assessments?: AssessmentUpdateManyWithoutApplicationsInput;
  description?: string | null;
  name?: string | null;
  questionnaires?: QuestionnaireUpdateManyWithoutApplicationsInput;
};
