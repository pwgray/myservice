import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  QuestionId?: SortOrder;
  updatedAt?: SortOrder;
};
