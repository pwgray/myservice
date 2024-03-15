import { Question } from "../question/Question";

export type Answer = {
  createdAt: Date;
  id: string;
  question?: Question | null;
  sortOrder: string | null;
  updatedAt: Date;
  value: string | null;
};
