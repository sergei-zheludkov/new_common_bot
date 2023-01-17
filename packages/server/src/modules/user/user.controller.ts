import {
  Controller,
  NotFoundException,
  Get,
  Post,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { API_VERSION_ROUTES } from '../../constants';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserCreateDto, UserUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/user`)
class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: 'User has been found.',
    type: UserEntity,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({ operationId: 'getOneUser' })
  @Get(':id')
  async getOneUser(@Param('id') id: string) {
    const user = await this.userService.getOneUser(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @ApiCreatedResponse({
    description: 'User has been successfully created.',
    type: UserEntity,
  })
  @ApiOperation({ operationId: 'postUser' })
  @Post()
  async postUser(
    @Body('who_invited_id') who_invited_id: string,
    @Body() body: UserCreateDto,
  ) {
    const user = who_invited_id
      ? await this.userService.createUserWithReferral(body)
      : await this.userService.createUser(body);

    return user;
  }

  @ApiOkResponse({
    description: 'User has been updated.',
    type: UserEntity,
  })
  @ApiNotFoundResponse({
    description: 'User not found.',
  })
  @ApiOperation({ operationId: 'patchUser' })
  @Patch()
  async patchUser(@Body() data: UserUpdateDto) {
    const user = await this.userService.updateUser(data);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}

export { UserController };
