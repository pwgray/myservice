import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RiskService } from "./risk.service";
import { RiskControllerBase } from "./base/risk.controller.base";

@swagger.ApiTags("risks")
@common.Controller("risks")
export class RiskController extends RiskControllerBase {
  constructor(
    protected readonly service: RiskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
