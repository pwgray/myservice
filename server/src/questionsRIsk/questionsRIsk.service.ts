import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestionsRIskServiceBase } from "./base/questionsRIsk.service.base";

@Injectable()
export class QuestionsRIskService extends QuestionsRIskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
