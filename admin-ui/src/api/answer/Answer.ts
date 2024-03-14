import { Question } from "../question/Question";

export type Answer = {
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
};
