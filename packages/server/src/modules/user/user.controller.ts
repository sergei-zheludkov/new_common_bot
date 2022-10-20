import {
  Controller,
  NotFoundException,
  Get,
  Post,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { API_VERSION_ROUTES } from '../../constants';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from './dto';

@Controller(`${API_VERSION_ROUTES.v1}/user`)
class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.getOneUser(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Post()
  async postUser(
    @Body('who_invited') who_invited: string,
    @Body() body: UserCreateDto,
  ) {
    const user = who_invited
      ? await this.userService.createUserWithReferral(body)
      : await this.userService.createUser(body);

    return user;
  }

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
