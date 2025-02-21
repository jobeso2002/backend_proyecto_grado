import { Clube } from "../../clubes/entities/clube.entity";
import { Deportista } from "../../deportista/entities/deportista.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transferencia {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false})
    fecha_solicitud: Date;
    @Column({nullable: false})
    estado_transgerencia: string;
    @Column({nullable: false})
    fecha_aceptacion: Date;
    @Column({nullable: false})
    motivo_transferencia: string;
    
    @ManyToOne(() => Deportista, deportista => deportista.transferencia)
    deportista: Deportista;

    @ManyToOne(() => Clube, club_origen => club_origen.transferencia_origen)
    club_origen: Clube;

    @ManyToOne(() => Clube, club_destino => club_destino.transferencia_destino)
    club_destino: Clube;

}
