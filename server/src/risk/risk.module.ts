import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RiskModuleBase } from "./base/risk.module.base";
import { RiskService } from "./risk.service";
import { RiskController } from "./risk.controller";
import { RiskResolver } from "./risk.resolver";

@Module({
  imports: [RiskModuleBase, forwardRef(() => AuthModule)],
  controllers: [RiskController],
  providers: [RiskService, RiskResolver],
  exports: [RiskService],
})
export class RiskModule {}
