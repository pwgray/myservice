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
import { RiskWhereInput } from "./RiskWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RiskCountArgs {
  @ApiProperty({
    required: false,
    type: () => RiskWhereInput,
  })
  @Field(() => RiskWhereInput, { nullable: true })
  @Type(() => RiskWhereInput)
  where?: RiskWhereInput;
}

export { RiskCountArgs as RiskCountArgs };
