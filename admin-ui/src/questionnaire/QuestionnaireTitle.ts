import { Questionnaire as TQuestionnaire } from "../api/questionnaire/Questionnaire";

export const QUESTIONNAIRE_TITLE_FIELD = "name";

export const QuestionnaireTitle = (record: TQuestionnaire): string => {
  return record.name?.toString() || String(record.id);
};
