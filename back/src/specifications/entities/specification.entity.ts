import { Demande } from 'src/demande/entities/demande.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,OneToMany,ManyToOne, JoinColumn} from 'typeorm';
@Entity('specification')
export class Specification {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "titre", nullable: true, unique: true })
    titre: string
    @Column("text", { name: "description", nullable: true })
    description: string ;
    @Column("text", { name: "type", nullable: true })
    typeDocument: string ;
    @Column("boolean", { name: "isValide", nullable: true })
    isValide: boolean ;
    @Column("text", { name: "documentName", nullable: true })
    documentName: string ;
    @Column("text", { name: "documentNameCC", nullable: true })
    documentNameCC:string;
    @Column("text", { name: "reference", nullable: true })
    reference: string ;
    @Column("text", { name: "etat", nullable: true })
    etat: string ;
    @Column("text", { name: "autorisation1", nullable: true })
    autorisation1: string ;
    @Column("text", { name: "autorisation2", nullable: true })
    autorisation2: string ;


    @Column("date", { name: "createdAt", nullable: true })
    createdAt: Date 
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
    @Column("date", { name: "updatedat", nullable: true })
    updatedAt: Date;
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    @Column("boolean", { name: "active", nullable: true, default: true })
    active: boolean | false;
    // @OneToMany(() =>  Demande, ( demande: Demande) => demande.specificationId)
    // demandes?:Demande[];
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
  @ManyToOne(() =>  Demande, ( demande: Demande) => demande.id,{cascade:true})
  @JoinColumn({ name: "demandeId" })
  demandeId: number&Demande | null;
}
