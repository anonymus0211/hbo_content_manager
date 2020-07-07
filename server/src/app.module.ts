import { Module } from '@nestjs/common';
import { VideoContentModule } from './video-content/video-content.module';

@Module({
  imports: [VideoContentModule],
})
export class AppModule {}
