import { QuestionsRIskCreateNestedManyWithoutRisksInput } from "./QuestionsRIskCreateNestedManyWithoutRisksInput";

export type RiskCreateInput = {
  mitigationPlan?: string | null;
  owner?: string | null;
  questions?: QuestionsRIskCreateNestedManyWithoutRisksInput;
  summary?: string | null;
};
