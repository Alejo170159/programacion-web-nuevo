import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Movimiento } from '../../movimientos/entities/movimiento.entity';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { Disciplina } from '../../disciplinas/entities/disciplina.entity';
import { DetalleVenta } from '../../ventas/entities/detalle-venta.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  stock: number;

  // 👇 Relación con Movimientos (La que arreglamos antes)
  @OneToMany(() => Movimiento, (movimiento) => movimiento.producto)
  movimientos: Movimiento[];

  // 👇 Relación con Categorías (Arregla el error 1)
  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  categoria: Categoria;

  // 👇 Relación con Disciplinas (Arregla el error 2)
  @ManyToOne(() => Disciplina, (disciplina) => disciplina.productos)
  disciplina: Disciplina;

  // 👇 Relación con Detalle Ventas (Arregla el error 3)
  @OneToMany(() => DetalleVenta, (detalle) => detalle.producto)
  detallesVenta: DetalleVenta[];
}