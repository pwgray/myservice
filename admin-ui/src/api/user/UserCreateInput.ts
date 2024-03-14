import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  questions?: QuestionWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
