import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerUpdateInput = {
  question?: QuestionWhereUniqueInput | null;
  sortOrder?: string | null;
  value?: string | null;
};
