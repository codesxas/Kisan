// import { Contact } from "../../contacts/entities";
// import { Entity, Column, ManyToOne } from "typeorm";
// import { BaseEntity } from "../../common/entities";

// @Entity({ name: "history" })
// export class History extends BaseEntity {
//   @Column({ type: "varchar", length: 300 })
//   public message: string;

//   @Column("date")
//   public receivedDate: Date;

//   @ManyToOne(() => Contact, (contact) => contact.history)
//   contacts: Contact;
// }

// /*
// create table history(
//   id uuid NOT NULL DEFAULT uuid_generate_v4(), 
//   message varchar(255),
//   receivedDate DATE NOT NULL, 

//   primary key(id)
// );
// */
