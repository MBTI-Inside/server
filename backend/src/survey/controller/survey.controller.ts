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
import { GetAllCompatibilityQuery } from './query/get-all-compatibility.query';
import { GetOneCompatibilityQuery } from './query/get-one-compatibility.query';
import { CreateCompatibilityCommand } from './command/create-compatibility.command';
import { UpdateCompatibilityCommand } from './command/update-compatibility.command';
import { DeleteCompatibilityCommand } from './command/delete-compatibility.command';
import {
  CreateCompatibilityDto,
  UpdateCompatibilityDto
} from './dto/compatibility.dto';
import { ICompatibilityService } from '../service/compatibility.interface';
import { COMPATIBILITY_SERVICE } from '../service/compatibility.service';

@Controller('survey')
export class SurveyController {
  constructor(
    @Inject(SURVEY_SERVICE) private readonly surveyService: ISurveyService,
    @Inject(SURVEY_RESULT_SERVICE)
    private readonly surveyResultService: ISurveyResultService,
    @Inject(COMPATIBILITY_SERVICE)
    private readonly compatibilityService: ICompatibilityService
  ) {}

  @Get('questions')
  getAllQuestions(
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

  @Get('questions/:surveyId')
  getOneQuestion(@Param('surveyId') surveyId: string) {
    const getOneSurveyQuery = new GetOneSurveyQuery(surveyId);
    return this.surveyService.getOne(getOneSurveyQuery);
  }

  @Post('questions')
  createOneQuestion(@Body() { subject, answer, mbtiType }: CreateSurveyDto) {
    const createSurveyCommand = new CreateSurveyCommand(
      subject,
      answer,
      mbtiType
    );
    return this.surveyService.createOne(createSurveyCommand);
  }

  @Put('questions/:surveyId')
  updateOneQuestion(
    @Param('surveyId') surveyId: string,
    @Body() { subject, answer, mbtiType }: UpdateSurveyDto
  ) {
    const updateSuveryCommand = new UpdateSurveyCommand(
      surveyId,
      subject,
      answer,
      mbtiType
    );
    return this.surveyService.updateOne(updateSuveryCommand);
  }

  @Delete('questions/:surveyId')
  deleteOneQuestion(@Param('surveyId') surveyId: string) {
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
    {
      userId,
      mbti,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId,
      energy,
      awareness,
      judgement,
      life
    }: CreateSurveyResultDto
  ) {
    const createSurveyResultCommand = new CreateSurveyResultCommand(
      userId,
      mbti,
      tags,
      description,
      goodCompatibilityId,
      badCompatibilityId,
      energy,
      awareness,
      judgement,
      life
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

  @Get('compatibilities')
  getAllCompatibilities(
    @Query('limit', ParseIntPipe) limit = 100,
    @Query('skip', ParseIntPipe) skip = 0,
    @Query('sortField') sortField = 'id',
    @Query('sortType') sortType: SortType = 'desc'
  ) {
    const getAllCompatibilitiesQuery = new GetAllCompatibilityQuery(
      limit,
      skip,
      sortField,
      sortType
    );
    return this.compatibilityService.getAll(getAllCompatibilitiesQuery);
  }

  @Get('compatibilities/:compatibilityId')
  getCompatibilityOne(@Param('compatibilityId') compatibilityId: string) {
    const getOneCompatibilityQuery = new GetOneCompatibilityQuery(
      compatibilityId
    );
    return this.compatibilityService.getOne(getOneCompatibilityQuery);
  }

  @Post('compatibilities')
  createCompatibility(
    @Body() { type, mbti, targetMbti, description }: CreateCompatibilityDto
  ) {
    const createCompatibilityCommand = new CreateCompatibilityCommand(
      type,
      mbti,
      targetMbti,
      description
    );
    return this.compatibilityService.createOne(createCompatibilityCommand);
  }

  @Put('compatibilities/:compatibilityId')
  updateCompatibility(
    @Param('compatibilityId') compatibilityId: string,
    @Body() { type, mbti, targetMbti, description }: UpdateCompatibilityDto
  ) {
    const updateCompatibilityCommand = new UpdateCompatibilityCommand(
      compatibilityId,
      type,
      mbti,
      targetMbti,
      description
    );

    return this.compatibilityService.updateOne(updateCompatibilityCommand);
  }

  @Delete('compatibilities/:compatibilityId')
  deleteCompatibility(@Param('compatibilityId') compatibilityId: string) {
    const deleteCompatibilityCommand = new DeleteCompatibilityCommand(
      compatibilityId
    );

    return this.compatibilityService.deleteOne(deleteCompatibilityCommand);
  }
}
