import { ApiProperty } from '@nestjs/swagger';

export enum CATEGORIES {
  SERIES = 'SERIES',
  MOVIE = 'MOVIE',
}
export class VideoContent {
  @ApiProperty({ example: '604b537a-5ddb-2cd4-9c4e-8cccd248831d' })
  Id: string;

  @ApiProperty()
  Abstract: string;

  @ApiProperty({ example: 12 })
  AgeRating: number;

  @ApiProperty({ example: '2019-12-21T23:00:00Z' })
  AvailabilityFromUtcIso: string;

  @ApiProperty()
  BackgroundUrl: string;

  @ApiProperty()
  Cast: string;

  @ApiProperty()
  Category: string;

  @ApiProperty()
  Director: string;

  @ApiProperty()
  EditedAbstract: string;

  @ApiProperty()
  Genre: string;

  @ApiProperty()
  Name: string;

  @ApiProperty()
  ProductionYear: number;

  constructor(params: Partial<VideoContent>) {
    Object.assign(this, params);
  }
}
