import { AssessmentCreateNestedManyWithoutApplicationsInput } from "./AssessmentCreateNestedManyWithoutApplicationsInput";
import { QuestionnaireCreateNestedManyWithoutApplicationsInput } from "./QuestionnaireCreateNestedManyWithoutApplicationsInput";

export type ApplicationCreateInput = {
  ait?: string | null;
  assessments?: AssessmentCreateNestedManyWithoutApplicationsInput;
  description?: string | null;
  name?: string | null;
  questionnaires?: QuestionnaireCreateNestedManyWithoutApplicationsInput;
};
