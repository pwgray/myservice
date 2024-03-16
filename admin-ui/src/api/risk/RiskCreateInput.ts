import { AssessmentWhereUniqueInput } from "../assessment/AssessmentWhereUniqueInput";
import { QuestionsRIskCreateNestedManyWithoutRisksInput } from "./QuestionsRIskCreateNestedManyWithoutRisksInput";

export type RiskCreateInput = {
  assessment?: AssessmentWhereUniqueInput | null;
  mitigationPlan?: string | null;
  owner?: string | null;
  questions?: QuestionsRIskCreateNestedManyWithoutRisksInput;
  summary?: string | null;
};
