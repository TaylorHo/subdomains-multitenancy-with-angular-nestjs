/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateSubTenantDto } from './dto/create-sub-tenant.dto';
import { TenantService } from './tenant.service';
import { SubTenant } from './entities/sub-tenant.entity';

@Controller('sub')
export class SubTenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post('/')
  async createSubTenant(@Body() createSubTenantDto: CreateSubTenantDto): Promise<SubTenant>{
    return await this.tenantService.createSubTenant(createSubTenantDto);
  }

  @Get('/')
  async getAllSubTenants(@Req() req): Promise<SubTenant[]> {
    const parent = req.hostname.split('.')[0];
    return await this.tenantService.getManySubTenants(parent);
  }

  @Get('/:id')
  async getSubTenant(@Param('id') id: string ): Promise<SubTenant> {    
    return await this.tenantService.getSubTenant(id);
  }
}
