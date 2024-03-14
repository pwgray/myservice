import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "name";

export const QuestionTitle = (record: TQuestion): string => {
  return record.name?.toString() || String(record.id);
};
