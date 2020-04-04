import axios from 'axios';
import { currentEndpoint, endpoints } from './endpoints';

export interface getHorariosArgumentType {
  idSemana: number;
  idMedico: string;
}

export interface getHorariosReturnType {
  deAte: HorarioDeAteType;
  diaSemana: number;
  idSemana: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  idMedico: string;
  status: string;
  idAgendamento: string;
  idPaciente: string;
}

export interface HorarioDeAteType {
  de: string;
  ate: string;
}

export const getHorarios = async (getHorariosArguments: getHorariosArgumentType): Promise<getHorariosReturnType[]> => {
  const idSemanaParameter = `idSemana=${getHorariosArguments.idSemana}`;
  const idMedicoParameter = `idMedico=${getHorariosArguments.idMedico}`;
  const queryParameters = `/?${idSemanaParameter}&${idMedicoParameter}`;
  const endpoint = currentEndpoint + endpoints.horarios + queryParameters;
  const result = await axios.get<getHorariosReturnType[]>(endpoint);
  const data = result.data;
  return data;
};
