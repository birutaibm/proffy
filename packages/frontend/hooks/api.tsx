import React, { createContext, useContext, useCallback, useState } from 'react';
import axios, { AxiosInstance } from 'axios';

interface ApiContext {
  api: AxiosInstance;
  setURL: (url: string) => void;
}

const Context = createContext<ApiContext>({} as ApiContext);
let initialURL = 'http://localhost:3333';

export function useApi(url?: string): ApiContext {
  const context = useContext(Context);
  if (url) {
    initialURL = url;
  }
  
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }

  return context;
}

export const ApiProvider: React.FC = ({ children }) => {
  const [api, setApi] = useState(() => axios.create({
    baseURL: initialURL,
  }));

  const setURL = useCallback((url: string) => {
    setApi(old => axios.create({
      baseURL: 'http://localhost:3333'
    }));
  }, []);

  return (
    <Context.Provider value={{ api, setURL }}>
      {children}
    </Context.Provider>
  );
};
