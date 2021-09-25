import { Ciclo } from "./ciclo.model";
import { Usuario } from "./usuario.model";

export class Disponibildad {
    idDisponibilidad? : number;
    horaInicio? : Date | "HH:mm:ss"; 
    horaFin? : Date | "HH:mm:ss";
    dia? : string;
    ciclo? : Ciclo;
    usuario? : Usuario;
}
