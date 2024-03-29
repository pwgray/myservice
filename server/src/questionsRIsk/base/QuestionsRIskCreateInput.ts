/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { RiskWhereUniqueInput } from "../../risk/base/RiskWhereUniqueInput";

@InputType()
class QuestionsRIskCreateInput {
  @ApiProperty({
    required: false,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestionWhereUniqueInput, {
    nullable: true,
  })
  question?: QuestionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RiskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RiskWhereUniqueInput)
  @IsOptional()
  @Field(() => RiskWhereUniqueInput, {
    nullable: true,
  })
  risk?: RiskWhereUniqueInput | null;
}

export { QuestionsRIskCreateInput as QuestionsRIskCreateInput };
