import { Answer as TAnswer } from "../api/answer/Answer";

export const ANSWER_TITLE_FIELD = "sortOrder";

export const AnswerTitle = (record: TAnswer): string => {
  return record.sortOrder?.toString() || String(record.id);
};
