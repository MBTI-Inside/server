import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { MBTI_SERVICE } from '../service/mbti.service';
import { IMbtiService } from '../service/mbti.interface';
import { SortType } from 'src/common/types';
import { GetAllMbtiQuery } from './query/get-all-mbti.query';
import { GetOneMbtiQuery } from './query/get-one-mbti.query';
import { CreateMbtiDto, UpdateMbtiDto } from './dto/mbti.dto';
import { CreateMbtiCommand } from './command/create-mbti.command';
import { UpdateMbtiCommand } from './command/update-mbti.command';
import { DeleteMbtiCommand } from './command/delete-mbti.command';

@Controller('mbti')
export class MbtiController {
  constructor(
    @Inject(MBTI_SERVICE) private readonly mbtiService: IMbtiService
  ) {}

  @Get()
  getAll(
    @Query('limit', ParseIntPipe) limit = 100,
    @Query('skip', ParseIntPipe) skip = 0,
    @Query('sortField') sortField = 'id',
    @Query('sortType') sortType: SortType = 'desc'
  ) {
    const query = new GetAllMbtiQuery(limit, skip, sortField, sortType);
    return this.mbtiService.getAll(query);
  }

  @Get(':mbtiId')
  getOne(@Param('mbtiID') mbtiId: string) {
    const query = new GetOneMbtiQuery(mbtiId);
    return this.mbtiService.getOne(query);
  }

  @Post()
  createOne(
    @Body()
    {
      mbti,
      summary,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId
    }: CreateMbtiDto
  ) {
    const command = new CreateMbtiCommand(
      mbti,
      summary,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId
    );
    return this.mbtiService.createOne(command);
  }

  @Put(':mbtiId')
  updateOne(
    @Param('mbtiId') mbtiId: string,
    @Body()
    {
      mbti,
      summary,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId
    }: UpdateMbtiDto
  ) {
    const command = new UpdateMbtiCommand(
      mbtiId,
      mbti,
      summary,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId
    );

    return this.mbtiService.updateOne(command);
  }

  @Delete(':mbtiId')
  deleteOne(@Param('mbtiID') mbtiId: string) {
    const command = new DeleteMbtiCommand(mbtiId);

    return this.mbtiService.deleteOne(command);
  }
}
