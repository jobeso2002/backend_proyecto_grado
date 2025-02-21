import { Programacion } from "../../programacion/entities/programacion.entity";
import { Juez } from "../../juez/entities/juez.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: false})
    nombre_evento: string;
    @Column({nullable: false})
    fecha_evento: Date;
    @Column({ type: 'time', nullable: false })
    hora: string;
    @Column({nullable: false})
    lugar: string;
    @Column({nullable: false})
    categoria: string;
    @Column({nullable: false})
    estado: string;
    @Column({nullable: false})
    cantidad_equipos: number;
    
    @OneToMany(() => Juez, juez => juez.evento)
    jueces: Juez[];

    @OneToMany(() => Programacion, programacion => programacion.evento)
    programacion: Programacion[];
    
}
