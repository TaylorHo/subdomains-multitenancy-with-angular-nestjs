import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSubTenantDto {
  @IsNotEmpty({
    message: 'ID cannot be empty',
  })
  @MaxLength(100, {
    message: 'ID must have max 100 characters',
  })
  id: string;

  @IsNotEmpty({
    message: 'parent cannot be empty',
  })
  @MaxLength(100, {
    message: 'parent must have max 100 characters',
  })
  parent: string;
}
