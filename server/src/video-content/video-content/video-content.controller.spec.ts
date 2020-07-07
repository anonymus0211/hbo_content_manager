import { Test, TestingModule } from '@nestjs/testing';
import { VideoContentController } from './video-content.controller';
import { VideoContentService } from './video-content.service';
import { VideoContentDto } from './dto/video-content.dto';
import * as uuid from 'uuid';

describe('VideoContent Controller', () => {
  let videoContentController: VideoContentController;
  let videoContentService: VideoContentService;

  beforeEach(async () => {
    videoContentService = new VideoContentService();
    videoContentController = new VideoContentController(videoContentService);
  });

  it('should be defined', () => {
    expect(videoContentController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of videoContents', async () => {
      const result = [
        new VideoContentDto({
          Id: uuid.v4(),
          Name: 'Test',
        }),
      ];

      jest
        .spyOn(videoContentService, 'findAll')
        .mockImplementation(() => result);

      expect(await videoContentController.findAll(null, null)).toBe(result);
    });

    it('should return filtered result', async () => {
      const result = [
        new VideoContentDto({
          Id: uuid.v4(),
          Name: 'Test',
        }),
      ];

      jest
        .spyOn(videoContentService, 'findAll')
        .mockImplementation(() => result);

      expect(await videoContentController.findAll('SERIES', 'Hi')).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return an item', async () => {
      const Id = uuid.v4();
      const result = new VideoContentDto({
        Id,
        Name: 'Test',
      });

      jest
        .spyOn(videoContentService, 'findOne')
        .mockImplementation(() => result);

      expect(await videoContentController.findOne(Id)).toBe(result);
    });
  });
});
