import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Spaces')
@Controller('spaces')
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Post()
  create(@Body() createSpaceDto: CreateSpaceDto) {
    return this.spacesService.createSpace(createSpaceDto);
  }

  @Get()
  findAll() {
    return this.spacesService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spacesService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSpaceDto: UpdateSpaceDto) {
  //   return this.spacesService.update(+id, updateSpaceDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spacesService.removeById(id);
  }
}
