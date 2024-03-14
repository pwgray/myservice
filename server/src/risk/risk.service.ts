import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RiskServiceBase } from "./base/risk.service.base";

@Injectable()
export class RiskService extends RiskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
