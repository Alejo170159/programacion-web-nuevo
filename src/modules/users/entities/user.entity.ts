import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Movimiento } from '../../movimientos/entities/movimiento.entity';
import { Venta } from '../../ventas/entities/venta.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // 👇 Relación con Movimientos
  @OneToMany(() => Movimiento, (movimiento) => movimiento.usuario)
  movimientos: Movimiento[];

  // 👇 Relación con Ventas (Arregla el error 4)
  @OneToMany(() => Venta, (venta) => venta.usuario)
  ventas: Venta[];
}