import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  OwnerId?: SortOrder;
  QuestionnaireId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
