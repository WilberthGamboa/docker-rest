import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';

@Module({
  imports: [AlumnoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
