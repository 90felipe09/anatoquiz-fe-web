import { createContext } from 'react';

export interface GlobalStateInterface {
  token: string;
}

export const defaultGlobalState: GlobalStateInterface = {
  token: '',
};

export const GlobalState = createContext<GlobalStateInterface>(defaultGlobalState);
