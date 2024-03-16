import { Question } from "../question/Question";
import { Risk } from "../risk/Risk";

export type QuestionsRIsk = {
  createdAt: Date;
  id: string;
  question?: Question | null;
  risk?: Risk | null;
  updatedAt: Date;
};
