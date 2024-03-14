import { Question } from "../question/Question";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  questions?: Question | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
