import { Assessment } from "../assessment/Assessment";
import { QuestionsRIsk } from "../questionsRIsk/QuestionsRIsk";

export type Risk = {
  assessment?: Assessment | null;
  createdAt: Date;
  id: string;
  mitigationPlan: string | null;
  owner: string | null;
  questions?: Array<QuestionsRIsk>;
  summary: string | null;
  updatedAt: Date;
};
