import { Equipo } from "../../equipo/entities/equipo.entity";
import { Programacion } from "../../programacion/entities/programacion.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Resultado {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false})
    sets_jugados: string;
    @Column({nullable: false})
    estado: string;

    @ManyToOne(() => Equipo, equipo => equipo.resultadoA)
    equipoA: Equipo;

    @ManyToOne(() => Equipo, equipo => equipo.resultadoB)
    equipoB: Equipo;

    @ManyToOne(() => Programacion, equipo => equipo.resultado)
    programacion: Programacion;

    
}
