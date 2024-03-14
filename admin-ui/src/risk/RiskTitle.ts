import { Risk as TRisk } from "../api/risk/Risk";

export const RISK_TITLE_FIELD = "id";

export const RiskTitle = (record: TRisk): string => {
  return record.id?.toString() || String(record.id);
};
