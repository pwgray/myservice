import { Application } from "../application/Application";
import { Question } from "../question/Question";

export type Questionnaire = {
  application?: Application | null;
  createdAt: Date;
  id: string;
  name: string | null;
  questions?: Array<Question>;
  updatedAt: Date;
};
