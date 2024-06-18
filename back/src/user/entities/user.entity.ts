
import { Commision } from 'src/commisions/entities/commision.entity';
import { Demande } from 'src/demande/entities/demande.entity';
import { Etat } from 'src/etat/entities/etat.entity';
import { Specification } from 'src/specifications/entities/specification.entity';
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,OneToMany} from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "email", nullable: true, unique: true })
    email: string | null;
    @Column("text", { name: "name", nullable: true })
    name: string | null;
    @Column("text", { name: "password", nullable: true })
    password: string | null;
    @Column("text", { name: "resToken", nullable: true ,unique: true })
    resToken: string | null
    @Column("text", { name: "role", nullable: true })
    role: string | null;
    @Column("text", { name: "picture", nullable: true })
    picture: string | null;
    @Column("date", { name: "createAT", nullable: true })
    createdAt: Date 
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    ///relation
    @OneToMany(() =>  Demande, ( demande: Demande) => demande.userId)
    demandes?:Demande[];
    @OneToMany(() => Specification, (specification:Specification) =>specification.userId)
    specifications?:Specification[];
    @OneToMany(() =>  Commision, ( commision: Commision) => commision.userId)
    Commisions?: Commision[];
    @OneToMany(() =>  Etat, ( etat:Etat) => etat.userId)
    etats?:Etat[];
    @Column("boolean", { name: "active", nullable: true, default: true })
    active: boolean | false;
    @BeforeInsert()
  eventCreatedAt() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  eventUpdatedAt() {
    this.updatedAt = new Date();
  }

}



