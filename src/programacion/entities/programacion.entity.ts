import { Juez } from "../../juez/entities/juez.entity";
import { Evento } from "../../evento/entities/evento.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Equipo } from "../../equipo/entities/equipo.entity";
import { Resultado } from "src/resultados/entities/resultado.entity";

@Entity()
export class Programacion {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'time', nullable: false })
    hora: string;
    @Column({nullable: false})
    fecha_inscripcion: Date;
    @Column({nullable: false})
    nombre_cancha: string;
    @Column({nullable: false})
    marcador: string;
    @Column({nullable: false})
    estado: string;

    @ManyToOne(() => Evento, evento => evento)
    evento: Evento;

    @ManyToOne(() => Equipo, equipo => equipo.programacionA)
    equipoA: Equipo;

    @ManyToOne(() => Equipo, equipo => equipo.programacionB)
    equipoB: Equipo;

    @ManyToOne(() => Juez, juez=> juez.programacion)
    juez: Evento;

    @OneToMany(() => Resultado, resultado => resultado.programacion)
    resultado: Resultado[];

}
