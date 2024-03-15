/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ApplicationService } from "../application.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ApplicationCreateInput } from "./ApplicationCreateInput";
import { Application } from "./Application";
import { ApplicationFindManyArgs } from "./ApplicationFindManyArgs";
import { ApplicationWhereUniqueInput } from "./ApplicationWhereUniqueInput";
import { ApplicationUpdateInput } from "./ApplicationUpdateInput";
import { QuestionnaireFindManyArgs } from "../../questionnaire/base/QuestionnaireFindManyArgs";
import { Questionnaire } from "../../questionnaire/base/Questionnaire";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/base/QuestionnaireWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ApplicationControllerBase {
  constructor(
    protected readonly service: ApplicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Application })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createApplication(
    @common.Body() data: ApplicationCreateInput
  ): Promise<Application> {
    return await this.service.createApplication({
      data: data,
      select: {
        ait: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Application] })
  @ApiNestedQuery(ApplicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async applications(@common.Req() request: Request): Promise<Application[]> {
    const args = plainToClass(ApplicationFindManyArgs, request.query);
    return this.service.applications({
      ...args,
      select: {
        ait: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Application })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async application(
    @common.Param() params: ApplicationWhereUniqueInput
  ): Promise<Application | null> {
    const result = await this.service.application({
      where: params,
      select: {
        ait: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Application })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateApplication(
    @common.Param() params: ApplicationWhereUniqueInput,
    @common.Body() data: ApplicationUpdateInput
  ): Promise<Application | null> {
    try {
      return await this.service.updateApplication({
        where: params,
        data: data,
        select: {
          ait: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Application })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteApplication(
    @common.Param() params: ApplicationWhereUniqueInput
  ): Promise<Application | null> {
    try {
      return await this.service.deleteApplication({
        where: params,
        select: {
          ait: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questionnaires")
  @ApiNestedQuery(QuestionnaireFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Questionnaire",
    action: "read",
    possession: "any",
  })
  async findQuestionnaires(
    @common.Req() request: Request,
    @common.Param() params: ApplicationWhereUniqueInput
  ): Promise<Questionnaire[]> {
    const query = plainToClass(QuestionnaireFindManyArgs, request.query);
    const results = await this.service.findQuestionnaires(params.id, {
      ...query,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questionnaires")
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "update",
    possession: "any",
  })
  async connectQuestionnaires(
    @common.Param() params: ApplicationWhereUniqueInput,
    @common.Body() body: QuestionnaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionnaires: {
        connect: body,
      },
    };
    await this.service.updateApplication({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questionnaires")
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "update",
    possession: "any",
  })
  async updateQuestionnaires(
    @common.Param() params: ApplicationWhereUniqueInput,
    @common.Body() body: QuestionnaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionnaires: {
        set: body,
      },
    };
    await this.service.updateApplication({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questionnaires")
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "update",
    possession: "any",
  })
  async disconnectQuestionnaires(
    @common.Param() params: ApplicationWhereUniqueInput,
    @common.Body() body: QuestionnaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questionnaires: {
        disconnect: body,
      },
    };
    await this.service.updateApplication({
      where: params,
      data,
      select: { id: true },
    });
  }
}
