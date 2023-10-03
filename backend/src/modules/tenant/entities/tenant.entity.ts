import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity()
export class Tenant extends BaseEntity {
  @PrimaryColumn({ nullable: false, length: 100, type: 'varchar' })
  id: string;

  @Column({ type: 'varchar', array: true, default: [] })
  // @Column('varchar', { array: true, default: [] })
  child: string[];
}
