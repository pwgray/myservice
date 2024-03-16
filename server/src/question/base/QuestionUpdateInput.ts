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
import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/base/QuestionnaireWhereUniqueInput";
import { QuestionsRIskUpdateManyWithoutQuestionsInput } from "./QuestionsRIskUpdateManyWithoutQuestionsInput";

@InputType()
class QuestionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => AnswerUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  answers?: AnswerUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  owner?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestionnaireWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionnaireWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestionnaireWhereUniqueInput, {
    nullable: true,
  })
  questionnaire?: QuestionnaireWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestionsRIskUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => QuestionsRIskUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => QuestionsRIskUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  Risks?: QuestionsRIskUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;
}

export { QuestionUpdateInput as QuestionUpdateInput };
