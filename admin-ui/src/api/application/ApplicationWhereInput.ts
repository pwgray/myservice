import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssessmentListRelationFilter } from "../assessment/AssessmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionnaireListRelationFilter } from "../questionnaire/QuestionnaireListRelationFilter";

export type ApplicationWhereInput = {
  ait?: StringNullableFilter;
  assessments?: AssessmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  questionnaires?: QuestionnaireListRelationFilter;
};
