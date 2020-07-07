import { Module } from '@nestjs/common';
import { VideoContentController } from './video-content/video-content.controller';
import { VideoContentService } from './video-content/video-content.service';

@Module({
  controllers: [VideoContentController],
  providers: [VideoContentService]
})
export class VideoContentModule {}
