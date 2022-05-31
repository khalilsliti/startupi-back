import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { StartupService } from './startup.service';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { Startup } from './startup.entity';
import { ClientKafka } from '@nestjs/microservices';
;


@Controller('startup')
export class StartupController implements OnModuleInit {
  constructor(private readonly startupService: StartupService,
    @Inject('STARTUP_SERVICE') private readonly startupClient: ClientKafka,) {}

  @Post()
  async create(@Body() createStartupDto: CreateStartupDto) {
    console.log("im here in controller")
    return await this.startupService.create(createStartupDto);
  }

  @Get()
  findAll() {
    return this.startupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.startupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStartupDto: UpdateStartupDto,
  ) {
    return this.startupService.update(+id, updateStartupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.startupService.remove(+id);
  }

  onModuleInit() {
    this.startupClient.subscribeToResponseOf('find_all_startup')
    this.startupClient.subscribeToResponseOf('create_startup')
    this.startupClient.subscribeToResponseOf('find_one_startup')
    this.startupClient.subscribeToResponseOf('update_startup')
    this.startupClient.subscribeToResponseOf('delete_startup')
  }

 
}
