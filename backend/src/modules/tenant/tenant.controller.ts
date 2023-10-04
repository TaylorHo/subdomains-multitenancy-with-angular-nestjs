/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { TenantService } from './tenant.service';
import { Tenant } from './entities/tenant.entity';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post('/')
  async createTenant(@Body() createTenantDto: CreateTenantDto): Promise<Tenant> {
    return await this.tenantService.createTenant(createTenantDto);
  }

  @Get('/')
  async getAllTenants(): Promise<Tenant[]> {
    return await this.tenantService.getManyTenants();
  }

  @Get(':id')
  async getTenant(@Param('id') id: string): Promise<Tenant> {
    return await this.tenantService.getTenant(id);
  }
}
