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
import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/base/QuestionnaireWhereUniqueInput";
import { QuestionsRIskCreateNestedManyWithoutQuestionsInput } from "./QuestionsRIskCreateNestedManyWithoutQuestionsInput";

@InputType()
class QuestionCreateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerCreateNestedManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerCreateNestedManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => AnswerCreateNestedManyWithoutQuestionsInput, {
    nullable: true,
  })
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;

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
    type: () => QuestionsRIskCreateNestedManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => QuestionsRIskCreateNestedManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => QuestionsRIskCreateNestedManyWithoutQuestionsInput, {
    nullable: true,
  })
  RIsks?: QuestionsRIskCreateNestedManyWithoutQuestionsInput;

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

export { QuestionCreateInput as QuestionCreateInput };
