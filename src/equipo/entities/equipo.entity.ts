import { InscripcionEvento } from "../../inscripcion_eventos/entities/inscripcion_evento.entity";
import { Clube } from "../../clubes/entities/clube.entity";
import { Column, Entity, ManyToOne, JoinTable, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import { Programacion } from "../../programacion/entities/programacion.entity";
import { Resultado } from "../../resultados/entities/resultado.entity";

@Entity()
export class Equipo {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false})
    nombre_equipo: string;
    @Column({nullable: false})
    categoria: string;
    @Column({nullable: false})
    estado: string;
    @Column({nullable: false})
    fecha_creacion: Date;
    //relacion de muchos equipos a 1 club
    @ManyToOne(()=> Clube, clubes => clubes.equipo)
    club: Clube;

    @OneToMany(() => InscripcionEvento, inscripcion => inscripcion.equipo)
    inscripcion_evento: InscripcionEvento[];

    @OneToMany(() => Programacion, programacion => programacion.equipoA)
    programacionA: Programacion[];

    @OneToMany(() => Programacion, programacion => programacion.equipoB)
    programacionB: Programacion[];

    @OneToMany(()=> Resultado, resultado => resultado.equipoA)
    resultadoA: Resultado[];

    @OneToMany(()=> Resultado, resultado => resultado.equipoB)
    resultadoB: Resultado[];
    

    
}
