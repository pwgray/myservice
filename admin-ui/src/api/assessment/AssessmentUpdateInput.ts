import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RiskUpdateManyWithoutAssessmentsInput } from "./RiskUpdateManyWithoutAssessmentsInput";

export type AssessmentUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  assessor?: UserWhereUniqueInput | null;
  risks?: RiskUpdateManyWithoutAssessmentsInput;
};
