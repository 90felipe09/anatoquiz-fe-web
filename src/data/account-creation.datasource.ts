import axios from 'axios';
import { currentEndpoint, endpoints, defaultConfig, headers } from './endpoints';
import { GenericResponse, ErrorResponse } from './response-types.datasource';
import { exception } from 'console';

export interface createAccountArguments {
  email: string;
  username: string;
  password: string;
}

export interface validateAccountArguments {
  token: string;
}

export const test = async (): Promise<GenericResponse> => {
  try {
    const endpoint = 'https://ilifut6dcc.execute-api.us-east-2.amazonaws.com/prod/findu';

    const result = await axios.get<GenericResponse>(endpoint, defaultConfig);
    if (!result.data) {
      throw new Error(result.data);
    }
    const data = result.data;
    return data;
  } catch (e) {
    return {
      message: e.message,
    };
  }
};

export const createAccount = async (
  accountCreationArguments: createAccountArguments,
): Promise<GenericResponse | ErrorResponse> => {
  try {
    const endpoint = currentEndpoint + endpoints.account.createAccount;

    const result = await axios.post<GenericResponse>(endpoint, accountCreationArguments, defaultConfig);
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

export const validateAccount = async (
  accountValidationArguments: validateAccountArguments,
): Promise<GenericResponse | ErrorResponse> => {
  try {
    const endpoint = currentEndpoint + endpoints.account.createAccount;
    const result = await axios.put<GenericResponse>(endpoint, accountValidationArguments, defaultConfig);
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
