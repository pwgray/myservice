/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Questionnaire } from "./Questionnaire";
import { QuestionnaireCountArgs } from "./QuestionnaireCountArgs";
import { QuestionnaireFindManyArgs } from "./QuestionnaireFindManyArgs";
import { QuestionnaireFindUniqueArgs } from "./QuestionnaireFindUniqueArgs";
import { CreateQuestionnaireArgs } from "./CreateQuestionnaireArgs";
import { UpdateQuestionnaireArgs } from "./UpdateQuestionnaireArgs";
import { DeleteQuestionnaireArgs } from "./DeleteQuestionnaireArgs";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { Application } from "../../application/base/Application";
import { QuestionnaireService } from "../questionnaire.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Questionnaire)
export class QuestionnaireResolverBase {
  constructor(
    protected readonly service: QuestionnaireService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "read",
    possession: "any",
  })
  async _questionnairesMeta(
    @graphql.Args() args: QuestionnaireCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Questionnaire])
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "read",
    possession: "any",
  })
  async questionnaires(
    @graphql.Args() args: QuestionnaireFindManyArgs
  ): Promise<Questionnaire[]> {
    return this.service.questionnaires(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Questionnaire, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "read",
    possession: "own",
  })
  async questionnaire(
    @graphql.Args() args: QuestionnaireFindUniqueArgs
  ): Promise<Questionnaire | null> {
    const result = await this.service.questionnaire(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Questionnaire)
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "create",
    possession: "any",
  })
  async createQuestionnaire(
    @graphql.Args() args: CreateQuestionnaireArgs
  ): Promise<Questionnaire> {
    return await this.service.createQuestionnaire({
      ...args,
      data: {
        ...args.data,

        application: args.data.application
          ? {
              connect: args.data.application,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Questionnaire)
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "update",
    possession: "any",
  })
  async updateQuestionnaire(
    @graphql.Args() args: UpdateQuestionnaireArgs
  ): Promise<Questionnaire | null> {
    try {
      return await this.service.updateQuestionnaire({
        ...args,
        data: {
          ...args.data,

          application: args.data.application
            ? {
                connect: args.data.application,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Questionnaire)
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "delete",
    possession: "any",
  })
  async deleteQuestionnaire(
    @graphql.Args() args: DeleteQuestionnaireArgs
  ): Promise<Questionnaire | null> {
    try {
      return await this.service.deleteQuestionnaire(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Question], { name: "questions" })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async findQuestions(
    @graphql.Parent() parent: Questionnaire,
    @graphql.Args() args: QuestionFindManyArgs
  ): Promise<Question[]> {
    const results = await this.service.findQuestions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Application, {
    nullable: true,
    name: "application",
  })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  async getApplication(
    @graphql.Parent() parent: Questionnaire
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
