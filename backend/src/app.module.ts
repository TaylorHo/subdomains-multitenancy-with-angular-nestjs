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
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [Tenant, SubTenant],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
