import { Risk as TRisk } from "../api/risk/Risk";

export const RISK_TITLE_FIELD = "mitigationPlan";

export const RiskTitle = (record: TRisk): string => {
  return record.mitigationPlan?.toString() || String(record.id);
};
