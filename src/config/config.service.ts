import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        // 1. Define el entorno (development por defecto)
        const env = process.env.NODE_ENV || 'development';
        
        // 2. Construye la ruta apuntando siempre a la raíz del proyecto
        const envFilePath = `${process.cwd()}/.env.${env}`;
        
        // 4. Verifica si el archivo realmente existe
        const existsPath = fs.existsSync(envFilePath);
        
        if (!existsPath) {
            console.log(`.env.${env} no existe en la ruta especificada.`);

            process.exit(0); // Detiene el servidor si no encuentra las credenciales
        }
        
        // 5. Lee el archivo y guarda las variables en el objeto envConfig
        this.envConfig = parse(fs.readFileSync(envFilePath));
    }

    // Método para obtener cualquier variable por su nombre
    get(key: string): string {
        return this.envConfig[key];
    }
}