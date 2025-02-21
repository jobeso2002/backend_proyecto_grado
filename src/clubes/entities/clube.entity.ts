import { DirTecnico } from "../../dir-tecnico/entities/dir-tecnico.entity";
import { Deportista } from "../../deportista/entities/deportista.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Equipo } from "../../equipo/entities/equipo.entity";
import { Transferencia } from "../../transferencia/entities/transferencia.entity";

@Entity()
export class Clube {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: false})
    nombre_club: string;

    @OneToMany(()=> Deportista, deportista => deportista.club)
    deportista: Deportista[];

    @OneToMany(()=> DirTecnico, director_tecnico => director_tecnico.club, { cascade: true })  
    directortec: DirTecnico[];

    @OneToMany(()=> Equipo, equipo => equipo.club)
    equipo: Equipo[];

    @OneToMany(() => Transferencia, transferencia => transferencia.club_origen)
    transferencia_origen: Transferencia[];

    @OneToMany(() => Transferencia, transferencia => transferencia.club_destino)
    transferencia_destino: Transferencia[];
}
