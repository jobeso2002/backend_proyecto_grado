import { Deportista } from "../../deportista/entities/deportista.entity";
import { Equipo } from "../../equipo/entities/equipo.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InscripcionEvento {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: false})
    fecha_inscripcion: Date;
    @Column({nullable: false})
    estado: string;

    @ManyToOne(()=> Equipo, equipo => equipo.inscripcion_evento)
    equipo: Equipo;

    @ManyToOne(()=> Deportista, deportista => deportista.inscripcion_evento)
    deportista: Deportista;


}
