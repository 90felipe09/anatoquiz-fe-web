import { GetHorariosReturnType, HorarioDeAteType } from 'data/horarios.datasource';
import {
  ScheduleDataType,
  scheduleInitializer,
  TimeHourInterface,
  ScheduledTimeHourInterface,
  weekDayCodeToEnum,
} from 'models/horarios.usecase';

export enum statusEnum {
  PENDENTE = 'unavailable',
  CONFIRMADO = 'occupied',
  CANCELADO = 'cancelled',
}

export const deAteToTimeHourInterface = (deAte: HorarioDeAteType): TimeHourInterface => {
  const deAteSplit = deAte.de.split(':');
  const result: TimeHourInterface = {
    hour: +deAteSplit[0],
    minutes: deAteSplit[1],
  };
  return result;
};

export const adaptHorarios = (datasource: GetHorariosReturnType[]): ScheduleDataType => {
  const result: ScheduleDataType = scheduleInitializer;

  const translateTimeItem = (timeItem: GetHorariosReturnType) => {
    const weekDay = weekDayCodeToEnum[timeItem.idSemana];
    if (timeItem.status === statusEnum.CONFIRMADO) {
      const timeHour = deAteToTimeHourInterface(timeItem.deAte);
      const scheduledTime: ScheduledTimeHourInterface = {
        idAgendamento: timeItem.idAgendamento,
        idPaciente: timeItem.idPaciente,
        time: timeHour,
      };
      result[weekDay].ocupado.push(scheduledTime);
    }
  };

  datasource.forEach(translateTimeItem);

  return result;
};
