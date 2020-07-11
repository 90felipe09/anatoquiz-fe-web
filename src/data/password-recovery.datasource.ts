import axios from 'axios';
import { currentEndpoint, endpoints, defaultConfig, headers } from './endpoints';
import { GenericResponse } from './response-types.datasource';

export interface RequestPasswordRecoveryArguments {
  email: string;
}

export interface ChangePasswordArguments {
  token: string;
  newPassword: string;
}

export const requestPasswordRecovery = async (
  requestPasswordRecoveryArguments: RequestPasswordRecoveryArguments,
): Promise<GenericResponse> => {
  try {
    const endpoint = currentEndpoint + endpoints.account.passRec;
    const result = await axios.post<GenericResponse>(endpoint, requestPasswordRecoveryArguments, defaultConfig);
    if (!result.data) {
      throw new Error(result.data);
    }
    const data = result.data;
    return data;
  } catch (e) {
    throw {
      message: e.response.data.message,
      error: e.response.data.error,
    };
  }
};

export const changePassword = async (changePasswordArguments: ChangePasswordArguments): Promise<GenericResponse> => {
  try {
    const endpoint = currentEndpoint + endpoints.account.passChange;
    const result = await axios.post<GenericResponse>(endpoint, changePasswordArguments, defaultConfig);
    if (!result.data) {
      throw new Error(result.data);
    }
    const data = result.data;
    return data;
  } catch (e) {
    throw {
      message: e.response.data.message,
      error: e.response.data.error,
    };
  }
};
