import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate,ManyToOne,JoinColumn,OneToMany} from 'typeorm';
import { Unit } from '../unit/entities/unit.entity';
import { Mark } from '../mark/entities/mark.entity';
import { Category } from '../category/entities/category.entity';
import { Prix } from '../prix/entities/prix.entity';
import { Article } from 'src/article/entities/article.entity';
@Entity('Product ')
export class Product {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @Column("text", { name: "name", nullable: true, unique: true })
    name: string | null;
    @Column("text", { name: "description", nullable: true })
    description: string | null;
    @Column("integer", { name: "quantity", nullable: true })
    quantity: number | null;
    @ManyToOne(() => Article, (article: Article) => article.id)
    @JoinColumn({ name: "articleId" })
    articleId: number 
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



    @BeforeInsert()
  eventCreatedAt() {
    this.createdAt = new Date();
  }
  @BeforeUpdate()
  eventUpdatedAt() {
    this.updatedAt = new Date();
  }

    @Column("integer", { name: "prix", nullable: true })
    prix: number;
}



