import { Injectable, BadRequestException } from '@nestjs/common';
import { VideoContentDto } from './dto/video-content.dto';
import { CreateOrUpdateVideoContentDto } from './dto/create-or-update-video-content.dto';
import { Items } from './feed.json';
import * as uuid from 'uuid';

@Injectable()
export class VideoContentService {
  private videoContents: VideoContentDto[];

  constructor() {
    this.videoContents = Items.map(item => new VideoContentDto(item));
  }

  findAll({ category = null, name = null } = {}): VideoContentDto[] {
    let retVal = [...this.videoContents];
    if (category) {
      retVal = retVal.filter(content => content.Category === category);
    }

    if (name) {
      retVal = retVal.filter(content => content.Name.match(name));
    }
    return retVal;
  }

  findOne(id: string): VideoContentDto {
    return this.videoContents.find(item => item.Id === id);
  }

  create(
    videoContent: Partial<CreateOrUpdateVideoContentDto>,
  ): VideoContentDto {
    const newItem = new VideoContentDto(videoContent);
    newItem.Id = uuid.v4();

    this.videoContents.push(newItem);
    return newItem;
  }

  update(
    videoContent: Partial<CreateOrUpdateVideoContentDto>,
  ): VideoContentDto {
    const index = this.videoContents.findIndex(
      item => item.Id === videoContent.Id,
    );

    if (index < 0) {
      throw new BadRequestException('Item with Id is not found');
    }

    this.videoContents[index] = {
      ...this.videoContents[index],
      ...videoContent,
    };
    return this.videoContents[index];
  }

  destroy(id: string): void {
    const index = this.videoContents.findIndex(item => item.Id === id);

    if (index < 0) {
      throw new BadRequestException('Id is not found');
    }
    this.videoContents.splice(index, 1);
  }
}
