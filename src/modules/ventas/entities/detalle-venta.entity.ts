import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Venta } from "./venta.entity";
import { Producto } from "../../productos/entities/producto.entity";

@Entity('detalles_venta')
export class DetalleVenta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    cantidad: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio_unitario: number;

    @ManyToOne(() => Venta, (venta) => venta.detalles, { onDelete: 'CASCADE' })
    venta: Venta;

    @ManyToOne(() => Producto, (producto) => producto.detallesVenta)
    producto: Producto;
}