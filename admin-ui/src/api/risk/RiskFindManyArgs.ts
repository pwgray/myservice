import { RiskWhereInput } from "./RiskWhereInput";
import { RiskOrderByInput } from "./RiskOrderByInput";

export type RiskFindManyArgs = {
  where?: RiskWhereInput;
  orderBy?: Array<RiskOrderByInput>;
  skip?: number;
  take?: number;
};
