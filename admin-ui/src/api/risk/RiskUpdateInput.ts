import { QuestionsRIskUpdateManyWithoutRisksInput } from "./QuestionsRIskUpdateManyWithoutRisksInput";

export type RiskUpdateInput = {
  mitigationPlan?: string | null;
  owner?: string | null;
  questions?: QuestionsRIskUpdateManyWithoutRisksInput;
  summary?: string | null;
};
