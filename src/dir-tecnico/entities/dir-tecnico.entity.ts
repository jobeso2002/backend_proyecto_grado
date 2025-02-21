import { Persona } from "../../persona/entities/persona.entity";
import { Clube } from "../../clubes/entities/clube.entity";
import { Column, Entity, ManyToOne, JoinTable, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DirTecnico {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false})
    fecha_ingreso: Date;
    @Column({nullable: false})
    experiencia: string;
    @Column({nullable: false})
    licencia:string;

    //relacion de muchos a 1 de director_tecnico a club
    @ManyToOne(()=> Clube, clubes => clubes.directortec, { onDelete: 'CASCADE' })
    club: Clube;

    @ManyToOne(()=> Persona, persona => persona.directortec, { onDelete: 'CASCADE' })
    persona: Persona;
    
}
