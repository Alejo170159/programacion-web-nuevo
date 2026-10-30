import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { DetalleVenta } from "./detalle-venta.entity";

@Entity('ventas')
export class Venta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20, unique: true })
    folio: string;

    @CreateDateColumn({ type: 'timestamp' })
    fecha_venta: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @ManyToOne(() => User, (usuario) => usuario.ventas)
    usuario: User;

    @OneToMany(() => DetalleVenta, (detalle) => detalle.venta, { cascade: true })
    detalles: DetalleVenta[];
}