import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  publicKey: number;
}
export const UserSchema = SchemaFactory.createForClass(User);
