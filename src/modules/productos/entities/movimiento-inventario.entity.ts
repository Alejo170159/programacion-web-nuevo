import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('movimientos_inventario')
export class MovimientoInventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'producto_id' })
  productoId: number;

  @Column({ name: 'tipo_movimiento', length: 50 })
  tipoMovimiento: string; // 'ENTRADA' o 'SALIDA'

  @Column()
  cantidad: number;

  @Column({ length: 255 })
  motivo: string;

  @CreateDateColumn({ name: 'fecha_movimiento', type: 'timestamp' })
  fechaMovimiento: Date;

  @Column({ name: 'usuario_id' })
  usuarioId: number;
}