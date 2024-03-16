import { Answer } from "../answer/Answer";
import { User } from "../user/User";
import { Questionnaire } from "../questionnaire/Questionnaire";
import { QuestionsRIsk } from "../questionsRIsk/QuestionsRIsk";

export type Question = {
  answers?: Array<Answer>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner?: User | null;
  questionnaire?: Questionnaire | null;
  Risks?: Array<QuestionsRIsk>;
  text: string | null;
  updatedAt: Date;
};
