import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestionsRIskModuleBase } from "./base/questionsRIsk.module.base";
import { QuestionsRIskService } from "./questionsRIsk.service";
import { QuestionsRIskController } from "./questionsRIsk.controller";
import { QuestionsRIskResolver } from "./questionsRIsk.resolver";

@Module({
  imports: [QuestionsRIskModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestionsRIskController],
  providers: [QuestionsRIskService, QuestionsRIskResolver],
  exports: [QuestionsRIskService],
})
export class QuestionsRIskModule {}
