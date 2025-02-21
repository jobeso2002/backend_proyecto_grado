import { InscripcionEvento } from "../../inscripcion_eventos/entities/inscripcion_evento.entity";
import { Clube } from "../../clubes/entities/clube.entity";
import { Contacto } from "../../contacto/entities/contacto.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transferencia } from "../../transferencia/entities/transferencia.entity";
import { Persona } from "src/persona/entities/persona.entity";

@Entity()
export class Deportista {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    posicion: string;

    @Column({unique: true, nullable: false})
    estado: string;

    @Column({nullable: false})
    numero_camisa: number;

    // Relación One-to-Many con Contacto
    @OneToMany(() => Contacto, contacto => contacto.deportista)
    contactos: Contacto[];

    //relacion de many-to-one con club
    @ManyToOne(()=> Clube, clubes => clubes.deportista)
    @JoinTable()
    club: Clube;

    @OneToMany(() => InscripcionEvento, inscripcion => inscripcion.deportista)
    inscripcion_evento: InscripcionEvento[];
    
    @OneToMany(() => Transferencia, transferencia => transferencia.deportista)
    transferencia: Transferencia[];

    @ManyToOne(()=> Persona, persona => persona.deportista)
    persona: Persona;

}

