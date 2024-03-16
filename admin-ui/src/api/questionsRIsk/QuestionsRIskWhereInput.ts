import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { RiskWhereUniqueInput } from "../risk/RiskWhereUniqueInput";

export type QuestionsRIskWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  risk?: RiskWhereUniqueInput;
};
