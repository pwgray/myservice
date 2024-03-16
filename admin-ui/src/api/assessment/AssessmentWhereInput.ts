import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RiskListRelationFilter } from "../risk/RiskListRelationFilter";

export type AssessmentWhereInput = {
  application?: ApplicationWhereUniqueInput;
  assessor?: UserWhereUniqueInput;
  id?: StringFilter;
  risks?: RiskListRelationFilter;
};
