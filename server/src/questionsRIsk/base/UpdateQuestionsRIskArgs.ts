/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestionsRIskWhereUniqueInput } from "./QuestionsRIskWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuestionsRIskUpdateInput } from "./QuestionsRIskUpdateInput";

@ArgsType()
class UpdateQuestionsRIskArgs {
  @ApiProperty({
    required: true,
    type: () => QuestionsRIskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionsRIskWhereUniqueInput)
  @Field(() => QuestionsRIskWhereUniqueInput, { nullable: false })
  where!: QuestionsRIskWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuestionsRIskUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuestionsRIskUpdateInput)
  @Field(() => QuestionsRIskUpdateInput, { nullable: false })
  data!: QuestionsRIskUpdateInput;
}

export { UpdateQuestionsRIskArgs as UpdateQuestionsRIskArgs };
