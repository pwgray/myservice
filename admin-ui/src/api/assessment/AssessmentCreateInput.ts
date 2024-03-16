import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RiskCreateNestedManyWithoutAssessmentsInput } from "./RiskCreateNestedManyWithoutAssessmentsInput";

export type AssessmentCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  assessor?: UserWhereUniqueInput | null;
  risks?: RiskCreateNestedManyWithoutAssessmentsInput;
};
