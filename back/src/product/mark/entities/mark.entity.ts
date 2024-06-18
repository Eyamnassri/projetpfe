import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert ,BeforeUpdate} from 'typeorm';
@Entity('Mark')
export class Mark {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column("text", { name: "name", nullable: true, unique: true })
    name: string | null;

    @Column("text", { name: "description", nullable: true })
    description: string | null;

    @Column("integer", { name: "quantity", nullable: true })
    quantityInit: number;

    @Column("integer", { name: "prix", nullable: true })
    prix: number;

    @Column("text", { name: "marque", nullable: true })
    marque: string | null; // Ajout de l'attribut marque

    @Column("date", { name: "createdat", nullable: true })
    createdAt: Date | null;

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
}
