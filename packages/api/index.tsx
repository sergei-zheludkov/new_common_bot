import React, { createContext, useContext } from 'react';
import { DefaultService } from './generated';

const ApiContext = createContext(DefaultService);

type ApiProviderProps = {
  children: React.ReactNode;
};

const ApiProvider = ({ children }: ApiProviderProps) => (
  <ApiContext.Provider value={DefaultService}>
    {children}
  </ApiContext.Provider>
);

const useApi = () => useContext(ApiContext);

export { ApiProvider, useApi };
