import { AppelOffre } from 'src/appel-offre/entities/appel-offre.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,OneToMany,ManyToOne, JoinColumn} from 'typeorm';
@Entity('Commision')
export class Commision{
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "id directeur", nullable: true, unique: true })
    titre: number;
    @Column("text", { name: "date", nullable: true })
    description: string ;
    @Column("date", { name: "dateCommissions", nullable: true })
    dateCommission: Date ;
    @Column("integer", { name: "NomberJury", nullable: true })
    nomberJury: number ;
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
    @ManyToOne(() => User, (user:User) => user.id)
    @JoinColumn({ name: "UserId" })
    userId: number;
    @ManyToOne(() =>AppelOffre, (AppelOffre: AppelOffre) => AppelOffre.id)
    @JoinColumn({ name: "offerId" })
    offerId: number | null;
    @BeforeInsert()
  eventCreatedAt() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  eventUpdatedAt() {
    this.updatedAt = new Date();
  }
}

