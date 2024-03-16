import { SortOrder } from "../../util/SortOrder";

export type RiskOrderByInput = {
  assessmentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mitigationPlan?: SortOrder;
  owner?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
