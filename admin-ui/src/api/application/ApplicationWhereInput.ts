import { StringFilter } from "../../util/StringFilter";
import { QuestionnaireListRelationFilter } from "../questionnaire/QuestionnaireListRelationFilter";

export type ApplicationWhereInput = {
  id?: StringFilter;
  questionnaires?: QuestionnaireListRelationFilter;
};
