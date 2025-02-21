import { Role } from "../../roles/entities/role.entity";
import { Permison } from "../../common/enums/permiso.enum";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Permision {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column({
        type: 'enum',
        enum: Permison
    })
    name: Permison
    @ManyToMany(()=> Role, (role)=> (role.permisions))
    roles: Role[] 
}
