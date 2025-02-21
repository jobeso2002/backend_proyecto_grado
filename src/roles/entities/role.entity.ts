import { Permision } from "../../permision/entities/permision.entity";
import { RoleType } from "../../common/enums/tiporole.enum";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'enum', enum:RoleType})
    name: RoleType;

    @ManyToMany(() => Permision, (permision)=> permision.roles, 
    {
        cascade:true

    })
    @JoinTable()
    permisions: Permision[]
}
