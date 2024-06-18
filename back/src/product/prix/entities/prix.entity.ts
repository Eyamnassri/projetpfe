import { Product } from 'src/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,JoinColumn,ManyToOne} from 'typeorm';
@Entity("Prix")
export class Prix {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "name", nullable: true, unique: true })
    name: string | null;
    @Column("text", { name: "description", nullable: true })
    description: string | null;
    @Column("decimal",{ name: "prixHorsTax", nullable: true })
    prixHorsTax: number;
    @Column("decimal", { name: "prixTTC", nullable: true })
    prixTTC: number;
    @Column("decimal", { name: "tva", nullable: true })
    tva: number;
    @Column("date", { name: "createdat", nullable: true })
    createdAt: Date | null
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;
    @Column("date", { name: "updatedat", nullable: true })
    updatedAt: Date | null;
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    @Column("boolean", { name: "active", nullable: true, default: true })
    active: boolean | false;
  static active: boolean;
    // @ManyToOne(() => Product, (product: Product) => product.id)
    // @JoinColumn({ name: "productid" })
    // productId: number  | null;

    @BeforeInsert()
  eventCreatedAt() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  eventUpdatedAt() {
    this.updatedAt = new Date();
  }
    
}
