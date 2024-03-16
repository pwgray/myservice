import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { RiskWhereUniqueInput } from "../risk/RiskWhereUniqueInput";

export type QuestionsRIskCreateInput = {
  question?: QuestionWhereUniqueInput | null;
  risk?: RiskWhereUniqueInput | null;
};
