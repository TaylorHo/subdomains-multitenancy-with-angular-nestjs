import { IsArray, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTenantDto {
  @IsNotEmpty({
    message: 'ID cannot be empty',
  })
  @MaxLength(100, {
    message: 'ID must have max 100 characters',
  })
  id: string;

  @IsArray()
  @IsString({ each: true })
  child: string[];
}
