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
import { ISurveyService } from '../service/survey.service.interface';
import {
  CreateSurveyCommand,
  CreateSurveyDto,
  DeleteSurveyCommand,
  GetAllSurveyQuery,
  GetOneSurveyQuery,
  UpdateSurveyCommand,
  UpdateSurveyDto
} from '../dto/survey.dto';
import { SortType } from 'src/common/types';
import { SURVEY_SERVICE } from '../service/survey.service';

@Controller('survey')
export class SurveyController {
  constructor(
    @Inject(SURVEY_SERVICE) private readonly surveyService: ISurveyService
  ) {}

  @Get()
  getAll(
    @Query('limit', ParseIntPipe) limit = 100,
    @Query('skip', ParseIntPipe) skip = 0,
    @Query('sortField') sortField = 'id',
    @Query('sortType') sortType: SortType = 'desc'
  ) {
    const getAllSurveyQuery = new GetAllSurveyQuery(
      limit,
      skip,
      sortField,
      sortType
    );
    return this.surveyService.getAll(getAllSurveyQuery);
  }

  @Get(':surveyId')
  getOne(@Param('surveyId') surveyId: string) {
    const getOneSurveyQuery = new GetOneSurveyQuery(surveyId);
    return this.surveyService.getOne(getOneSurveyQuery);
  }

  @Post()
  createOne(@Body() { subject, answer }: CreateSurveyDto) {
    const createSurveyCommand = new CreateSurveyCommand(subject, answer);
    return this.surveyService.createOne(createSurveyCommand);
  }

  @Put(':surveyId')
  updateOne(
    @Param('surveyId') surveyId: string,
    @Body() { subject, answer }: UpdateSurveyDto
  ) {
    const updateSuveryCommand = new UpdateSurveyCommand(
      surveyId,
      subject,
      answer
    );
    return this.surveyService.updateOne(updateSuveryCommand);
  }

  @Delete(':surveyId')
  deleteOne(@Param('surveyId') surveyId: string) {
    const deleteSurveyCommand = new DeleteSurveyCommand(surveyId);
    return this.surveyService.deleteOne(deleteSurveyCommand);
  }
}
