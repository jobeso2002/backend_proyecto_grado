import { Deportista } from "../../deportista/entities/deportista.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contacto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    parentesco: string;

    @Column({nullable: false})
    direccion_residencia: string;

    @Column({nullable: false})
    barrio: string;

    
     // Relación Many-to-One con Deportista
    @ManyToOne(() => Deportista, deportista => deportista.contactos)
    deportista: Deportista; // Esto creará la columna `deportistaId` en la tabla Contacto
    
}
