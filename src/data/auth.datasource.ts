import axios from 'axios';
import { currentEndpoint, endpoints, defaultConfig, headers } from './endpoints';
import { GenericResponse, ResponseWithContent, GenericPacket, PacketWithContent } from './response-types.datasource';

export interface LoginArguments {
  password: string;
}

export interface LoginWithEmailArguments extends LoginArguments {
  email: string;
}

export interface LoginWithUsernameArguments extends LoginArguments {
  username: string;
}

export interface LogoffArguments {
  token: string;
}

export interface LoginResponse extends GenericResponse {
  content: TokenContentType;
}

export interface TokenContentType {
  token: string;
}

export const login = async (
  loginArguments: LoginWithEmailArguments | LoginWithUsernameArguments,
): Promise<LoginResponse> => {
  try {
    const endpoint = currentEndpoint + endpoints.account.loginAuth;
    const result = await axios.post<PacketWithContent>(endpoint, loginArguments, defaultConfig);
    if (!result.data) {
      throw new Error(result.data);
    }
    const data = result.data.data;
    return data;
  } catch (e) {
    throw {
      message: e.response.data.message,
      error: e.response.data.error,
    };
  }
};

export const logout = async (logoffArguments: LogoffArguments): Promise<GenericResponse> => {
  try {
    const endpoint = currentEndpoint + endpoints.account.loginDeAuth;
    const result = await axios.post<GenericResponse>(endpoint, logoffArguments, defaultConfig);
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
