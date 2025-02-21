import { Juez } from "../../juez/entities/juez.entity";
import { DirTecnico } from "../../dir-tecnico/entities/dir-tecnico.entity";
import { Role } from "../../roles/entities/role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Deportista } from "../../deportista/entities/deportista.entity";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    tipo_documento: string;

    @Column({unique: true, nullable: false})
    numero_documento: string;

    @Column({nullable: false})
    fecha_exp_doc: Date;

    @Column({nullable: false})
    lugar_exp_doc: string;

    @Column({nullable: false})
    fecha_nacimiento: Date;

    
    @Column({nullable: false})
    primer_nombre: string;

    @Column({nullable: false})
    segundo_nombre: string;

    @Column({nullable: false})
    primer_apellido: string;

    @Column({nullable: false})
    segundo_apellido: string;

    @Column({nullable: false})
    tipo_sangre: string;

    @Column({nullable: false})
    sexo: string;

    @Column({nullable: false})
    edad: number;

    

    @Column({nullable: false})
    nacionalidad: string;

    @Column({nullable: false})
    telefono: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @ManyToOne(() => Role, (role) => role.id)
    role: Role

    @OneToMany(()=> DirTecnico, director_tecnico => director_tecnico.persona, { cascade: true })  
    directortec: DirTecnico[];

    @OneToMany(()=> Juez, juez => juez.persona, { cascade: true })  
    juez: Juez[];

    @OneToMany(()=> Deportista, deportista => deportista.persona, { cascade: true })  
    deportista: Deportista[];

}
