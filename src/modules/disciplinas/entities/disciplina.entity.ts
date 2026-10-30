import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Producto } from "../../productos/entities/producto.entity";

@Entity('disciplinas')
export class Disciplina {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ type: 'text', nullable: true })
    descripcion: string;

    @OneToMany(() => Producto, (producto) => producto.disciplina)
    productos: Producto[];
}