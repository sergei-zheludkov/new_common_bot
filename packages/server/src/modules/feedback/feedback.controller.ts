import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiQuery,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { FeedbackStatusEnum } from '@common_bot/shared';
import type { Order } from '@common_bot/shared';
import { API_VERSION_ROUTES } from '../../constants';
import { FeedbackService } from './feedback.service';
import { FeedbackEntity } from './feedback.entity';
import { FeedbackCreateDto, FeedbackUpdateDto, FeedbackCountResponseDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/feedback_notes`)
class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @ApiOkResponse({
    description: 'Feedback daily limits by user has been calculated.',
    type: Number,
  })
  @ApiOperation({
    tags: ['Feedback'],
    operationId: 'getFeedbackDailyLimits',
    summary: 'Returning information about feedback daily limits by user',
  })
  @Get('daily_limits/:id')
  getFeedbackDailyLimits(@Param('id') user_id: string) {
    return this.feedbackService.getDailyLimitByUser(user_id);
  }

  @ApiOkResponse({
    description: 'Feedback count by status.',
    type: FeedbackCountResponseDto,
  })
  @ApiOperation({
    tags: ['Feedback'],
    operationId: 'getFeedbackCount',
    summary: 'Returning information about feedback count by feedback status',
  })
  @ApiQuery({ name: 'status', required: false, type: String })
  @ApiQuery({ name: 'start', required: false, type: Date })
  @ApiQuery({ name: 'end', required: false, type: Date })
  @Get('count')
  getFeedbackCount(
    @Query('start') start?: Date,
    @Query('end') end?: Date,
    @Query('status') status: FeedbackStatusEnum | 'all' = 'all',
  ) {
    const period = { start, end };

    return this.feedbackService.getFeedbackCount(status, period);
  }

  @ApiOkResponse({
    description: 'Feedback note has been found.',
    type: FeedbackEntity,
  })
  @ApiNotFoundResponse({
    description: 'Feedback note not found.',
  })
  @ApiOperation({
    tags: ['Feedback'],
    operationId: 'getOneFeedbackNote',
    summary: 'Returning information about feedback note',
  })
  @Get(':id')
  async getOneFeedbackNote(@Param('id') id: string) {
    const feedback = await this.feedbackService.getOneFeedback(id);

    if (!feedback) {
      throw new NotFoundException();
    }

    return feedback;
  }

  @ApiOkResponse({
    description: 'Feedback notes has been found.',
    type: [FeedbackEntity],
  })
  @ApiOperation({
    tags: ['Feedback'],
    operationId: 'getFeedbackNotes',
    summary: 'Returning information about feedback notes',
  })
  @ApiQuery({ name: 'order', required: false, type: String })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'status', required: false, type: String })
  @ApiQuery({ name: 'user_id', required: false, type: String })
  @ApiQuery({ name: 'support_id', required: false, type: String })
  @ApiQuery({ name: 'size', required: false, type: String })
  @Get()
  getFeedbackNotes(
    @Query('order') order?: Order,
    @Query('status') status?: FeedbackStatusEnum,
    @Query('user_id') user_id?: string,
    @Query('support_id') support_id?: string,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('size') size: 'short' | 'full' = 'full',
  ) {
    const query = {
      order, limit, offset, status, user_id, support_id,
    };

    return size === 'short'
      ? this.feedbackService.getShortFeedbacks(query)
      : this.feedbackService.getFullFeedbacks(query);
  }

  @ApiCreatedResponse({
    description: 'Feedback note has been successfully created.',
    type: FeedbackEntity,
  })
  @ApiOperation({
    tags: ['Feedback'],
    operationId: 'postFeedbackNote',
    summary: 'Creating new feedback note in db',
  })
  @Post()
  postFeedbackNote(@Body() body: FeedbackCreateDto) {
    return this.feedbackService.createFeedback(body);
  }

  @ApiOkResponse({
    description: 'Feedback note has been updated.',
    type: FeedbackEntity,
  })
  @ApiNotFoundResponse({
    description: 'Feedback note not found.',
  })
  @ApiOperation({
    tags: ['Feedback'],
    operationId: 'patchFeedbackNote',
    summary: 'Updating feedback note data',
  })
  @Patch()
  async patchFeedbackNote(@Body() data: FeedbackUpdateDto) {
    const feedback = await this.feedbackService.updateFeedback(data);

    if (!feedback) {
      throw new NotFoundException();
    }

    return feedback;
  }
}

export { FeedbackController };
