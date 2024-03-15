import { RiskWhereUniqueInput } from "./RiskWhereUniqueInput";
import { RiskUpdateInput } from "./RiskUpdateInput";

export type UpdateRiskArgs = {
  where: RiskWhereUniqueInput;
  data: RiskUpdateInput;
};
