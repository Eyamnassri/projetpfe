import { Demande } from 'src/demande/entities/demande.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,OneToMany,ManyToOne, JoinColumn} from 'typeorm';
@Entity('etat')
export class Etat {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "libelleEtat", nullable: true, unique: true })
    libelleEtat: number;
    @Column("text", { name: "codeEtat ", nullable: true })
    codeEtat: string ;
    @Column("date", { name: "dateEtat", nullable: true })
    dateEtat: Date 
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
///relation
    @ManyToOne(() => User, (user:User) => user.id)
    @JoinColumn({ name: "UserId" })
    userId: number;
    @ManyToOne(() => Demande, (demande:Demande) => demande.id)
    @JoinColumn({ name: "demandeId" })
    demandeId: number;
    @BeforeInsert()
    eventCreatedAt() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  eventUpdatedAt() {
    this.updatedAt = new Date();
  }
}

