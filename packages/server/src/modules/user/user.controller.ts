import {
  Controller,
  NotFoundException,
  Get,
  Post,
  // Patch,
  Param,
  Body,
} from '@nestjs/common';
import { API_VERSION_ROUTES } from '../../constants';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from './dto';

// interface PatchUserBody {
//   id: string;
//   data: UserUpdateDto;
// }

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
  postUser(
    @Body('who_invited') who_invited: string,
    @Body() body: UserCreateDto,
  ) {
    return who_invited
      ? this.userService.createUserWithReferral(body)
      : this.userService.createUser(body);
  }

  // @Patch()
  // patchUser(@Body() { id, data }: PatchUserBody) {
  //   return this.userService.updateUser(id, data);
  // }
}

export { UserController };
