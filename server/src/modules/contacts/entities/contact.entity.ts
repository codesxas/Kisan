import { History } from "../../history/entities";
import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/entities";

@Entity({ name: "contact" })
export class Contact extends BaseEntity {
  @Column({ type: "varchar", length: 50 })
  public name: string;

  @Column({ type: "varchar", length: 3 })
  public area_code: number;

  @Column({ type: "varchar", length: 10 })
  public phone_number: number;

  @Column({ type: "varchar", length: 50 })
  public status: string;

  @Column({ type: "varchar", length: 300 })
  public organization: string;

  @OneToMany(() => History, (history) => history.contacts)
  history: History[];
}

/*
create table contact(
  id uuid NOT NULL DEFAULT uuid_generate_v4(), 
  first_name varchar(50), 
  last_name varchar(50),
  area_code varchar(4),
  phone_number bigint,
  status varchar(50),
  organization varchar(255),

  primary key(id),

  constraint valid_number 
    check (phoneNumber <= 9999999999)
);

ALTER TABLE contact
  RENAME COLUMN areaCode TO area_code;

ALTER TABLE contact
  ALTER COLUMN phoneNumber integer TYPE bigint;
*/