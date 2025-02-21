import { Programacion } from "../../programacion/entities/programacion.entity";
import { Evento } from "../../evento/entities/evento.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../../persona/entities/persona.entity";

@Entity()
export class Juez {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false})
    nombre_juez: string;
    @Column({nullable: false})
    estado: string;
    @Column({nullable: false})
    especialidad: string;

    @ManyToOne(() => Evento, evento => evento.jueces, {
        cascade: true, // Opcional: Si deseas que se propaguen las operaciones
    })
    @JoinColumn({ name: 'id_evento' }) // Especifica la columna de la relación
    evento: Evento;

    @OneToMany(() => Programacion, programacion => programacion.juez)
    programacion: Programacion[];

    @ManyToOne(() => Persona, persona => persona.juez)
    persona: Persona;

    



}
