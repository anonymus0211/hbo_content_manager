import { Test, TestingModule } from '@nestjs/testing';
import { VideoContentService } from './video-content.service';
import * as uuid from 'uuid';
import { Items } from './feed.json';

describe('VideoContentService', () => {
  let service: VideoContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoContentService],
    }).compile();

    service = module.get<VideoContentService>(VideoContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return element with id', async () => {
      const Id = Items[0].Id;

      const result = await service.findOne(Id);

      expect(result.Id).toBe(Id);
      expect(result.Name).toBe(Items[0].Name);
    });
  });

  describe('create', () => {
    it('should create a new Item', async () => {
      const Id = Items[0].Id;

      const Name = `Test${new Date().toISOString()}`;

      const result = await service.create({
        Name,
      });

      expect(result.Id).toBeDefined;
      expect(result.Name).toBe(Name);
    });
  });
});
