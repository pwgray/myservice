import { Questionnaire } from "../questionnaire/Questionnaire";

export type Application = {
  ait: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  questionnaires?: Array<Questionnaire>;
  updatedAt: Date;
};
