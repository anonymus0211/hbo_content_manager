import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
  ValidationPipe,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { VideoContentService } from './video-content.service';
import { VideoContent } from './dto/video-content.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('video-content')
@ApiTags('Video Content')
export class VideoContentController {
  constructor(private readonly videoContentService: VideoContentService) {}

  @Get()
  @ApiOkResponse({ type: [VideoContent] })
  @UseInterceptors(ClassSerializerInterceptor)
  findAll(): VideoContent[] {
    return this.videoContentService.findAll();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  findOne(@Param('id', new ParseUUIDPipe()) id: string): VideoContent {
    return this.videoContentService.findOne(id);
  }
}
