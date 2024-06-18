import { Demande } from 'src/demande/entities/demande.entity';
import { Product } from 'src/product/entities/product.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('article')
export class Article {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "titre", nullable: true, unique: true })
    titre: string
    @Column("text", { name: "description", nullable: true })
    description: string ;
    @Column("text", { name: "type", nullable: true })
    type: string ;
    @Column("text", { name: "reference", nullable: true })
    reference: string ;
    @Column("text", { name: "content", nullable: true })
    content: string ;
    @Column("text", { name: "cautionType", nullable: true })
    cautionType: string ;
    @Column("integer", { name: "quantity", nullable: true })
    quantity: string ; 
    @Column("text", { name: "unit", nullable: true })
    unit: string ; 
    @Column("integer", { name: "numberDays", nullable: true })
    numberDays: string ;
    @ManyToOne(() => Demande, (demande: Demande) => demande.id)
    @JoinColumn({ name: "demandeId" })
    demandeId: number | null;
    @OneToMany(() => Product, (product) => product.articleId)
    products: Product[];
    @Column("date", { name: "createdat", nullable: true })
    createdAt: Date 
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
    @Column("date", { name: "updatedat", nullable: true })
    updatedAt: Date;
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
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


