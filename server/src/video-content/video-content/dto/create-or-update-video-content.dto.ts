import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsDateString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateOrUpdateVideoContentDto {
  @ApiPropertyOptional()
  @IsOptional({ groups: ['create'] })
  @IsUUID()
  Id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Abstract: string;

  @ApiPropertyOptional({ example: 12 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(99)
  @Transform(rating => parseInt(rating, 10))
  AgeRating: number;

  @ApiPropertyOptional({ example: '2019-12-21T23:00:00Z' })
  @IsOptional()
  @IsDateString()
  AvailabilityFromUtcIso: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  BackgroundUrl: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Cast: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Category: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Director: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  EditedAbstract: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Genre: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Transform(year => parseInt(year, 10))
  ProductionYear: number;

  constructor(params) {
    Object.assign(this, params);
  }
}
