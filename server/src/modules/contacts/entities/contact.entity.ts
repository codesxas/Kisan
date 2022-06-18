import { History } from "../../history/entities";
import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/entities";

@Entity({ name: "contact" })
export class Contact extends BaseEntity {
  @Column({ type: "varchar", length: 50 })
  public name: string;

  @Column({ type: "varchar", length: 3 })
  public areaCode: number;

  @Column({ type: "varchar", length: 10 })
  public phoneNumber: number;

  @Column({ type: "varchar", length: 50 })
  public status: string;

  @Column({ type: "varchar", length: 300 })
  public organization: string;

  @OneToMany(() => History, (history) => history.contacts)
  history: History[];
}
