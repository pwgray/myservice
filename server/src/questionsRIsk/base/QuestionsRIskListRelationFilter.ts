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
import { QuestionsRIskWhereInput } from "./QuestionsRIskWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QuestionsRIskListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QuestionsRIskWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionsRIskWhereInput)
  @IsOptional()
  @Field(() => QuestionsRIskWhereInput, {
    nullable: true,
  })
  every?: QuestionsRIskWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestionsRIskWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionsRIskWhereInput)
  @IsOptional()
  @Field(() => QuestionsRIskWhereInput, {
    nullable: true,
  })
  some?: QuestionsRIskWhereInput;

  @ApiProperty({
    required: false,
    type: () => QuestionsRIskWhereInput,
  })
  @ValidateNested()
  @Type(() => QuestionsRIskWhereInput)
  @IsOptional()
  @Field(() => QuestionsRIskWhereInput, {
    nullable: true,
  })
  none?: QuestionsRIskWhereInput;
}
export { QuestionsRIskListRelationFilter as QuestionsRIskListRelationFilter };
