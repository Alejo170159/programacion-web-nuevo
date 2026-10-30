import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
import { User } from '../../users/entities/user.entity';

@Entity('movimientos_inventario')
export class Movimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'producto_id' })
  productoId: number;

  @ManyToOne(() => Producto, (producto) => producto.movimientos)
  @JoinColumn({ name: 'producto_id' })
  producto: Producto;

  @Column({ name: 'tipo_movimiento', length: 50 })
  tipoMovimiento: string;

  @Column()
  cantidad: number;

  @Column({ length: 255 })
  motivo: string;

  @CreateDateColumn({ name: 'fecha_movimiento', type: 'timestamp' })
  fechaMovimiento: Date;

  // 👇 Deben existir estas tres líneas juntas:
  @Column({ name: 'usuario_id' })
  usuarioId: number;

  @ManyToOne(() => User, (user) => user.movimientos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: User; // 👈 Esto es lo que busca el archivo de usuarios
}