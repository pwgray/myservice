import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
};
