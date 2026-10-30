import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Producto } from "../../productos/entities/producto.entity";

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @OneToMany(() => Producto, (producto) => producto.categoria)
    productos: Producto[];
}