import { Commision } from 'src/commisions/entities/commision.entity';
import { Demande } from 'src/demande/entities/demande.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,OneToMany,ManyToOne, JoinColumn} from 'typeorm';
@Entity('AppelOffre')
export class AppelOffre {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "titre", nullable: true, unique: true })
    titre: string
    @Column("text", { name: "description", nullable: true })
    description: string ;
    
    @Column("text", { name: "ResponsableDemandeOffre", nullable: true })
    ResponsableDemandeOffre: string ;
    @Column("text", { name: "PrixTotale", nullable: true })
    PrixTotale: string ;
    @Column("text", { name: "EstimationAchat", nullable: true })
    EstimationAchat: string ;
    @Column("text", { name: "DossierAchat", nullable: true })
    DossierAchat: string ;

    @Column("boolean", { name: "isValide", nullable: true })
    isValide: boolean ;
    @Column("date", { name: "dateOuverture", nullable: true })
    dateOuverture: Date 
    @Column("date", { name: "dateLimite", nullable: true })
    dateLimite: Date 

    @Column("date", { name: "createdAt", nullable: true })
    createdAt: Date |null
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
    @Column("date", { name: "updatedat", nullable: true })
    updatedAt: Date|null;
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    @Column("boolean", { name: "active", nullable: true, default: true })
    active: boolean | false;
   
    @ManyToOne(() =>Demande, ( demande: Demande) => demande.id)
    @JoinColumn({ name: "demandeId" })
    demandeId: Demande | null;
    @OneToMany(() => Commision, ( commision:  Commision) => commision.offerId, { cascade: true })
    Commisions?: Commision[];
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
