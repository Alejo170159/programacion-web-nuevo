import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { DisciplinasModule } from './modules/disciplinas/disciplinas.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { ProductosModule } from './modules/productos/productos.module';
import { MovimientosModule } from './modules/movimientos/movimientos.module';
import { VentasModule } from './modules/ventas/ventas.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, DisciplinasModule, CategoriasModule, ProductosModule, MovimientosModule, VentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
