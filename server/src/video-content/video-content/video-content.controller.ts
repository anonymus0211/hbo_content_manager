import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
  ValidationPipe,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { VideoContentService } from './video-content.service';
import { VideoContentDto } from './dto/video-content.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrUpdateVideoContentDto } from './dto/create-or-update-video-content.dto';

@Controller('video-content')
@ApiTags('Video Content')
export class VideoContentController {
  constructor(private readonly videoContentService: VideoContentService) {}

  @Get()
  @ApiOkResponse({ type: [VideoContentDto] })
  @UseInterceptors(ClassSerializerInterceptor)
  findAll(
    @Query('Category') category: string,
    @Query('Name') name: string,
  ): VideoContentDto[] {
    Logger.log('Find all called');
    return this.videoContentService.findAll({ category, name });
  }

  @ApiOkResponse({ type: VideoContentDto })
  @Get(':id')
  @UsePipes(new ValidationPipe())
  findOne(@Param('id', new ParseUUIDPipe()) id: string): VideoContentDto {
    Logger.log('Find One called');
    return this.videoContentService.findOne(id);
  }

  @ApiOkResponse({ type: VideoContentDto })
  @Post()
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  createVideoContent(
    @Body() createVideoContent: CreateOrUpdateVideoContentDto,
  ) {
    Logger.log(
      `Create new VideoContent with payload(${JSON.stringify(
        createVideoContent,
      )})`,
    );
    return this.videoContentService.create(createVideoContent);
  }

  @ApiOkResponse({ type: VideoContentDto })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateVideoContent(
    @Body() updateContent: CreateOrUpdateVideoContentDto,
  ): VideoContentDto {
    Logger.log(
      `Update VideoContent called with payload(${JSON.stringify(
        updateContent,
      )})`,
    );
    return this.videoContentService.update(updateContent);
  }

  @Delete(':id')
  deleteVideoContent(@Param('id', new ParseUUIDPipe()) id: string) {
    Logger.log(`Delete VideoContent with id: ${id}`);
    this.videoContentService.destroy(id);

    return;
  }
}
