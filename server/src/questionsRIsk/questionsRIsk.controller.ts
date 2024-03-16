import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestionsRIskService } from "./questionsRIsk.service";
import { QuestionsRIskControllerBase } from "./base/questionsRIsk.controller.base";

@swagger.ApiTags("questionsRIsks")
@common.Controller("questionsRIsks")
export class QuestionsRIskController extends QuestionsRIskControllerBase {
  constructor(
    protected readonly service: QuestionsRIskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
