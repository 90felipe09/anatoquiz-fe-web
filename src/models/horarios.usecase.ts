import { GetHorariosArgumentType, getHorarios } from 'data/horarios.datasource';
import { adaptHorarios } from 'pipe/horarios.adapter';

export enum TimeBoxStateEnum {
  unavailable = 'unavailable',
  available = 'available',
  occupied = 'occupied',
  cancelled = 'cancelled',
}

export enum weekDayEnum {
  dom = 'dom',
  seg = 'seg',
  ter = 'ter',
  qua = 'qua',
  qui = 'qui',
  sex = 'sex',
  sab = 'sab',
}

export const weekDayCodeToEnum = {
  '0': weekDayEnum.dom,
  '1': weekDayEnum.seg,
  '2': weekDayEnum.ter,
  '3': weekDayEnum.qua,
  '4': weekDayEnum.qui,
  '5': weekDayEnum.sex,
  '6': weekDayEnum.sab,
};

export interface TimeHourInterface {
  hour: number;
  minutes: string;
}

export interface ScheduledTimeHourInterface {
  time: TimeHourInterface;
  idAgendamento: string;
  idPaciente: string;
}

export type ScheduleDataType = {
  dom: {
    indisponivel: TimeHourInterface[];
    ocupado: ScheduledTimeHourInterface[];
  };
  seg: {
    indisponivel: TimeHourInterface[];
    ocupado: ScheduledTimeHourInterface[];
  };
  ter: {
    indisponivel: TimeHourInterface[];
    ocupado: ScheduledTimeHourInterface[];
  };
  qua: {
    indisponivel: TimeHourInterface[];
    ocupado: ScheduledTimeHourInterface[];
  };
  qui: {
    indisponivel: TimeHourInterface[];
    ocupado: ScheduledTimeHourInterface[];
  };
  sex: {
    indisponivel: TimeHourInterface[];
    ocupado: ScheduledTimeHourInterface[];
  };
  sab: {
    indisponivel: TimeHourInterface[];
    ocupado: ScheduledTimeHourInterface[];
  };
};

export const scheduleInitializer: ScheduleDataType = {
  dom: {
    indisponivel: [],
    ocupado: [],
  },
  seg: {
    indisponivel: [],
    ocupado: [],
  },
  ter: {
    indisponivel: [],
    ocupado: [],
  },
  qua: {
    indisponivel: [],
    ocupado: [],
  },
  qui: {
    indisponivel: [],
    ocupado: [],
  },
  sex: {
    indisponivel: [],
    ocupado: [],
  },
  sab: {
    indisponivel: [],
    ocupado: [],
  },
};

export const horariosUseCase = async (getHorariosArgumento: GetHorariosArgumentType): Promise<ScheduleDataType> => {
  const datasource = await getHorarios(getHorariosArgumento);
  const translated = adaptHorarios(datasource);
  return translated;
};
