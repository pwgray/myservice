import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  QuestionId?: SortOrder;
  sortOrder?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
