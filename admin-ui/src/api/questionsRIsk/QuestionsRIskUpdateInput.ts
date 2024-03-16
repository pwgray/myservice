import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { RiskWhereUniqueInput } from "../risk/RiskWhereUniqueInput";

export type QuestionsRIskUpdateInput = {
  question?: QuestionWhereUniqueInput | null;
  risk?: RiskWhereUniqueInput | null;
};
