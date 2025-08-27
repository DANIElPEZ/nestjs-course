import { IsEmail, IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {//this class is used to validate the data, not need regex
  @IsNotEmpty()
  @IsString()
  id: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  name: string;
}