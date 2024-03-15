import { SortOrder } from "../../util/SortOrder";

export type RiskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mitigationPlan?: SortOrder;
  owner?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
