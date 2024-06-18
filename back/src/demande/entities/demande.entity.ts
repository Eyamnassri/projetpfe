
import { AppelOffre } from 'src/appel-offre/entities/appel-offre.entity';
import { Article } from 'src/article/entities/article.entity';
import { Etat } from 'src/etat/entities/etat.entity';
import { Specification } from 'src/specifications/entities/specification.entity';
import { User } from 'src/user/entities/user.entity';

import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,OneToMany,ManyToOne, JoinColumn} from 'typeorm';
@Entity('demande')
export class Demande {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "titre", nullable: true, unique: true })
    titre: string
    @Column("text", { name: "description", nullable: true })
    description: string ;
    @Column("text", { name: "type", nullable: true })
    type: string ;

  
    @Column("text", { name: "price", nullable: true })
    price: string ; 
    
    @Column("text", { name: "responsable", nullable: true })
    responsable: string ; 
    @Column("text", { name: "fichierCPT", nullable: true })
    fichierCPT: string ;
    @Column("date", { name: "createdat", nullable: true })
    createdAt: Date 
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
    @Column("date", { name: "updatedat", nullable: true })
    updatedAt: Date;
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    @Column("text", { name: "active", nullable: true, default: 'au cours'})
    active: string;
    @OneToMany(() =>  Etat, ( etat:Etat) => etat.demandeId)
    etats?:Etat[];
    @ManyToOne(() => Specification, (specification:Specification) => specification.demandeId)
    @JoinColumn({ name: "specificationId" })
    // specificationId: number;
    @OneToMany(() => AppelOffre,(appelOffre:AppelOffre) => appelOffre.demandeId)
    appleOffre?:AppelOffre[];
    @ManyToOne(() => User, (user:User) => user.id)
    @JoinColumn({ name: "UserId" })
    userId: number;
    @BeforeInsert()
    eventCreatedAt() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  eventUpdatedAt() {
    this.updatedAt = new Date();
  }
}







