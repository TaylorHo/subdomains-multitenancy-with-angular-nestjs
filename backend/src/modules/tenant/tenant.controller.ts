/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { CreateSubTenantDto } from './dto/create-sub-tenant.dto';
import { TenantService } from './tenant.service';
import { Tenant } from './entities/tenant.entity';
import { SubTenant } from './entities/sub-tenant.entity';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post('/')
  async createTenant(@Body() createTenantDto: CreateTenantDto): Promise<Tenant> {
    return await this.tenantService.createTenant(createTenantDto);
  }

  @Post('/sub')
  async createSubTenant(@Body() createSubTenantDto: CreateSubTenantDto): Promise<SubTenant>{
    return await this.tenantService.createSubTenant(createSubTenantDto);
  }

  @Get(':id')
  async getTenant(@Param() { id }: { id: string }): Promise<Tenant> {
    return await this.tenantService.getTenant(id);
  }

  @Get('/sub/:id')
  async getSubTenant(@Param() { id }: { id: string }): Promise<SubTenant> {
    return await this.tenantService.getSubTenant(id);
  }
}
