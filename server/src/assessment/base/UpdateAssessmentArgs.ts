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
import { AssessmentWhereUniqueInput } from "./AssessmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AssessmentUpdateInput } from "./AssessmentUpdateInput";

@ArgsType()
class UpdateAssessmentArgs {
  @ApiProperty({
    required: true,
    type: () => AssessmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssessmentWhereUniqueInput)
  @Field(() => AssessmentWhereUniqueInput, { nullable: false })
  where!: AssessmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AssessmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => AssessmentUpdateInput)
  @Field(() => AssessmentUpdateInput, { nullable: false })
  data!: AssessmentUpdateInput;
}

export { UpdateAssessmentArgs as UpdateAssessmentArgs };
