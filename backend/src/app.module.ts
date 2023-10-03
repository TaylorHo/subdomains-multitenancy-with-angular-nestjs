import { Module } from '@nestjs/common';
import { TenantModule } from './modules/tenant/tenant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './modules/tenant/entities/tenant.entity';
import { SubTenant } from './modules/tenant/entities/sub-tenant.entity';

@Module({
  imports: [
    TenantModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Tenant, SubTenant],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
