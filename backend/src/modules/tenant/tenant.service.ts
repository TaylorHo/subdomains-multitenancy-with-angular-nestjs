/* eslint-disable prettier/prettier */
import { BadGatewayException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { CreateSubTenantDto } from './dto/create-sub-tenant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entity';
import { Repository } from 'typeorm';
import { SubTenant } from './entities/sub-tenant.entity';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant) private tenantRepository: Repository<Tenant>,
    @InjectRepository(SubTenant) private subTenantRepository: Repository<SubTenant>,
  ) {}

  async createTenant(createTenantDto: CreateTenantDto): Promise<Tenant> {
    try {
      const foundTenant = await this.tenantRepository.findOneBy({ id: createTenantDto.id });
      if (foundTenant) throw new ConflictException();

      const tenant =  this.tenantRepository.create();
      tenant.child = [];
      tenant.id = createTenantDto.id;
      tenant.save();
  
      return tenant;

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException();
      }
      throw new BadGatewayException(error.message);
    }
  }

  async createSubTenant(createSubTenantDto: CreateSubTenantDto): Promise<SubTenant> {
    try {
      const foundSubTenant = await this.subTenantRepository.findOneBy({ id: createSubTenantDto.id });
      if (foundSubTenant) throw new ConflictException();

      const subTenant =  this.subTenantRepository.create();
      subTenant.id = createSubTenantDto.id;
      subTenant.parent = createSubTenantDto.parent;
      subTenant.save();
  
      return subTenant;

    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException();
      }
      throw new BadGatewayException(error.message);
    }
  }

  async getTenant(id: string): Promise<Tenant | null> {
    try {
      const tenant = await this.tenantRepository.findOneBy({ id });

      if (tenant) return tenant;
      throw new NotFoundException();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async getSubTenant(id: string): Promise<SubTenant | null> {
    try {
      const tenant = await this.subTenantRepository.findOneBy({ id });

      if (tenant) return tenant;
      throw new NotFoundException();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async getManySubTenants(id: string): Promise<SubTenant[] | null> {
    try {
      const tenant = await this.subTenantRepository.find({
        where: {
          parent: id,
        }
      });

      if (tenant) return tenant;
      throw new NotFoundException();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async getManyTenants(): Promise<Tenant[] | null> {
    try {
      const tenant = await this.tenantRepository.find();

      if (tenant) return tenant;
      throw new NotFoundException();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
