import { Questionnaire } from "../questionnaire/Questionnaire";

export type Application = {
  createdAt: Date;
  id: string;
  questionnaires?: Array<Questionnaire>;
  updatedAt: Date;
};
