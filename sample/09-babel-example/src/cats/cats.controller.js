import {
  Controller,
  Get,
  Post,
  Body,
  Bind,
  Dependencies,
  Param,
} from '@fily-cloud/common';
import { CatsService } from './cats.service';

@Controller('cats')
@Dependencies(CatsService)
export class CatsController {
  constructor(catsService) {
    this.catsService = catsService;
  }

  @Post()
  @Bind(Body())
  async create(createCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  @Bind(Param('id'))
  findOne(id) {
    // logic
  }
}
