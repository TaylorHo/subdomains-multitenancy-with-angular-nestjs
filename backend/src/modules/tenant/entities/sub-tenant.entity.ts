import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity()
export class SubTenant extends BaseEntity {
  @PrimaryColumn({ nullable: false, length: 100, type: 'varchar' })
  id: string;

  @Column({ nullable: false, length: 100, type: 'varchar' })
  parent: string;
}
