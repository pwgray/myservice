/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestionsRIskWhereUniqueInput } from "../../questionsRIsk/base/QuestionsRIskWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestionsRIskUpdateManyWithoutRisksInput {
  @Field(() => [QuestionsRIskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestionsRIskWhereUniqueInput],
  })
  connect?: Array<QuestionsRIskWhereUniqueInput>;

  @Field(() => [QuestionsRIskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestionsRIskWhereUniqueInput],
  })
  disconnect?: Array<QuestionsRIskWhereUniqueInput>;

  @Field(() => [QuestionsRIskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestionsRIskWhereUniqueInput],
  })
  set?: Array<QuestionsRIskWhereUniqueInput>;
}

export { QuestionsRIskUpdateManyWithoutRisksInput as QuestionsRIskUpdateManyWithoutRisksInput };
