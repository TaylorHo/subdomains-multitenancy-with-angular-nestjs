import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entity';
import { SubTenant } from './entities/sub-tenant.entity';

@Module({
  controllers: [TenantController],
  providers: [TenantService],
  imports: [TypeOrmModule.forFeature([Tenant, SubTenant])],
})
export class TenantModule {}
