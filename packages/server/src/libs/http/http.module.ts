import { Module, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule.register({})],
  exports: [HttpModule],
})
class GlobalHttpModule {}

export { GlobalHttpModule };
