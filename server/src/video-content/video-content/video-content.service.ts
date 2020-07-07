import { Injectable, BadRequestException } from '@nestjs/common';
import { VideoContent } from './dto/video-content.dto';
import { Items } from './feed.json';

@Injectable()
export class VideoContentService {
  private videoContents: VideoContent[];

  constructor() {
    this.videoContents = Items.map(item => new VideoContent(item));
  }

  findAll(): VideoContent[] {
    return this.videoContents;
  }

  findOne(id: string): VideoContent {
    return this.videoContents.find(item => item.Id === id);
  }

  create(videoContent: VideoContent): void {
    this.videoContents.push(videoContent);
  }

  destroy(id: string): void {
    const index = this.videoContents.findIndex(item => item.Id === id);

    if (index < 0) {
      throw new BadRequestException('Id is not found');
    }

    this.videoContents.splice(index, 1);
  }
}
