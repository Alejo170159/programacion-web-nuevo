import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT_DB') || 5434, // Tu puerto 5434
        username: config.get('USERNAME') || 'postgres',
        password: config.get('PASSWORD') || '1701',
        database: config.get('DATABASE'),
        entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'], // Carga tus entidades
        
        // 👇 ESTA ES LA CLAVE: Cambia a true para que cree las tablas solo con guardar
        synchronize: true, 
      });

      return await dataSource.initialize();
    },
  },
];