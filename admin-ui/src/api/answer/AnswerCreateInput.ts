import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerCreateInput = {
  question?: QuestionWhereUniqueInput | null;
  sortOrder?: string | null;
  value?: string | null;
};
