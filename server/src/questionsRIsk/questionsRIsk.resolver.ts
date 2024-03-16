import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QuestionsRIskResolverBase } from "./base/questionsRIsk.resolver.base";
import { QuestionsRIsk } from "./base/QuestionsRIsk";
import { QuestionsRIskService } from "./questionsRIsk.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QuestionsRIsk)
export class QuestionsRIskResolver extends QuestionsRIskResolverBase {
  constructor(
    protected readonly service: QuestionsRIskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
