import { QuestionsRIsk as TQuestionsRIsk } from "../api/questionsRIsk/QuestionsRIsk";

export const QUESTIONSRISK_TITLE_FIELD = "id";

export const QuestionsRIskTitle = (record: TQuestionsRIsk): string => {
  return record.id?.toString() || String(record.id);
};
