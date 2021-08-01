import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {

  @IsAlpha()
  @Field()
  name: string

  @IsAlpha()
  @Field()
  breed:string

}