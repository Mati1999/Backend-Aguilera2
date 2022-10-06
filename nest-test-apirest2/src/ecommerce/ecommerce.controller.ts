import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EcommerceService } from './ecommerce.service';
import { EcommerceDTO } from './ecommerce.types';

@Controller('ecommerce')
export class EcommerceController {
  constructor(private readonly ecommerceService: EcommerceService) {}
  @Get()
  getProds() {
    return this.ecommerceService.getProds();
  }

  @Post()
  addProd(@Body() body: EcommerceDTO) {
    return this.ecommerceService.addProd(body);
  }
  @Put()
  updateProd(@Body() body: EcommerceDTO) {
    return this.ecommerceService.updateProd(body);
  }
  @Delete()
  deleteProd(@Body() body: EcommerceDTO) {
    return this.ecommerceService.deleteProd(body.id);
  }
}
