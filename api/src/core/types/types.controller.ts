import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TypesService } from './types.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTypeDto } from './dto/create-type.dto';
import { TypeEntity } from './entities/type.entity';
import { UpdateTypeDto } from './dto/update-type.dto';

@ApiTags('Types')
@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @ApiOperation({
    summary: 'Creates a new types',
  })
  @ApiBody({
    type: CreateTypeDto,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Created type',
    type: [TypeEntity],
  })
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieves a list of all types',
  })
  async findAll(): Promise<TypeEntity[]> {
    return await this.typesService.find();
  }

  @Get(':id')
  findTypeById(@Param('id') id: string) {
    return this.typesService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Updates an existing type by its ID',
  })
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.updateById(id, updateTypeDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletes a type by its ID',
  })
  remove(@Param('id') id: string) {
    return this.typesService.removeById(id);
  }
}
