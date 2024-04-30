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
import { CreateSurveyDto, UpdateSurveyDto } from './dto/survey.dto';
import { SortType } from 'src/common/types';
import { SURVEY_SERVICE } from '../service/survey.service';
import { SURVEY_RESULT_SERVICE } from '../service/survey-result.service';
import { ISurveyResultService } from '../service/survey-result.interface';
import { GetAllSurveyQuery } from './query/get-all-survey.query';
import { GetOneSurveyQuery } from './query/get-one-survey.query';
import { CreateSurveyCommand } from './command/create-survey.command';
import { UpdateSurveyCommand } from './command/update-survey.command';
import { DeleteSurveyCommand } from './command/delete-survey.command';
import { GetAllSurveyResultsQuery } from './query/get-all-survey-result.query';
import { GetOneSurveyResultQuery } from './query/get-one-survey-result.query';
import { CreateSurveyResultDto } from './dto/survey-result.dto';
import { CreateSurveyResultCommand } from './command/create-survey-result.command';
import { DeleteSurveyResultCommand } from './command/delete-survey-result.command';

@Controller('survey')
export class SurveyController {
  constructor(
    @Inject(SURVEY_SERVICE) private readonly surveyService: ISurveyService,
    @Inject(SURVEY_RESULT_SERVICE)
    private readonly surveyResultService: ISurveyResultService
  ) {}

  @Get('test')
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

  @Get('test/:surveyId')
  getOne(@Param('surveyId') surveyId: string) {
    const getOneSurveyQuery = new GetOneSurveyQuery(surveyId);
    return this.surveyService.getOne(getOneSurveyQuery);
  }

  @Post('test')
  createOne(@Body() { subject, answer }: CreateSurveyDto) {
    const createSurveyCommand = new CreateSurveyCommand(subject, answer);
    return this.surveyService.createOne(createSurveyCommand);
  }

  @Put('test/:surveyId')
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

  @Delete('test/:surveyId')
  deleteOne(@Param('surveyId') surveyId: string) {
    const deleteSurveyCommand = new DeleteSurveyCommand(surveyId);
    return this.surveyService.deleteOne(deleteSurveyCommand);
  }

  @Get('results')
  getAllResults(
    @Query('userId') userId: string,
    @Query('limit', ParseIntPipe) limit = 100,
    @Query('skip', ParseIntPipe) skip = 0,
    @Query('sortField') sortField = 'id',
    @Query('sortType') sortType: SortType = 'desc'
  ) {
    const getAllSurveyResultsQuery = new GetAllSurveyResultsQuery(
      limit,
      skip,
      sortField,
      sortType,
      userId
    );

    return this.surveyResultService.getAll(getAllSurveyResultsQuery);
  }

  @Get('results/:surveyResultId')
  getOneResult(@Param('surveyResultId') surveyResultId: string) {
    const getOneSurveyResultQuery = new GetOneSurveyResultQuery(surveyResultId);

    return this.surveyResultService.getOne(getOneSurveyResultQuery);
  }

  @Post('results')
  createOneResult(
    @Body()
    { results, finalType, finalTypeProportion, userId }: CreateSurveyResultDto
  ) {
    const createSurveyResultCommand = new CreateSurveyResultCommand(
      results,
      finalType,
      finalTypeProportion,
      userId
    );

    return this.surveyResultService.createOne(createSurveyResultCommand);
  }

  @Delete('results/:surveyResultId')
  deleteOneResult(@Param('surveyResultId') surveyResultId: string) {
    const deleteSurveyResultCommand = new DeleteSurveyResultCommand(
      surveyResultId
    );
    return this.surveyResultService.deleteOne(deleteSurveyResultCommand);
  }
}
