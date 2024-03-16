import { AssessmentWhereUniqueInput } from "../assessment/AssessmentWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  assessments?: AssessmentWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  questions?: QuestionWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
