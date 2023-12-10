import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  publickey: number;
}
export const UserSchema = SchemaFactory.createForClass(User);
