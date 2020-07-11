import { createContext } from 'react';

export interface GlobalStateInterface {
  token: string;
  openedMenu: boolean
}

export const defaultGlobalState: GlobalStateInterface = {
  token: '',
  openedMenu: false,
};

export const GlobalState = createContext<GlobalStateInterface>(defaultGlobalState);
