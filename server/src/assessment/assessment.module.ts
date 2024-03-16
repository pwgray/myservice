import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssessmentModuleBase } from "./base/assessment.module.base";
import { AssessmentService } from "./assessment.service";
import { AssessmentController } from "./assessment.controller";
import { AssessmentResolver } from "./assessment.resolver";

@Module({
  imports: [AssessmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssessmentController],
  providers: [AssessmentService, AssessmentResolver],
  exports: [AssessmentService],
})
export class AssessmentModule {}
