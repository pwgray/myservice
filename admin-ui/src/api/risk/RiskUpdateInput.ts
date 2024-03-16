import { AssessmentWhereUniqueInput } from "../assessment/AssessmentWhereUniqueInput";
import { QuestionsRIskUpdateManyWithoutRisksInput } from "./QuestionsRIskUpdateManyWithoutRisksInput";

export type RiskUpdateInput = {
  assessment?: AssessmentWhereUniqueInput | null;
  mitigationPlan?: string | null;
  owner?: string | null;
  questions?: QuestionsRIskUpdateManyWithoutRisksInput;
  summary?: string | null;
};
