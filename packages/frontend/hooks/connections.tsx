import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

import { GetConnectionsResponseDTO } from '@proffy/shared/apiDTOs';

import { useApi } from './api';

interface ConnectionsContext {
  connections: number;
  createNewConnection: (teacherId: number) => void;
}

const Context = createContext<ConnectionsContext>({} as ConnectionsContext);

export function useConnections(): ConnectionsContext {
  const context = useContext(Context);
  
  if (!context) {
    throw new Error('useConnections must be used within an ConnectionsProvider');
  }

  return context;
}

export const ConnectionsProvider: React.FC = ({ children }) => {
  const [connections, setConnections] = useState(0);
  const { api } = useApi();

  const createNewConnection = useCallback((teacherId: number) => {
    api.post('connections', { user_id: teacherId })
      .then(() => setConnections(old => old + 1));
  }, []);

  useEffect(() => {
    api.get<GetConnectionsResponseDTO>('/connections').then(response => {
      setConnections(response.data.total);
    });
  }, []);

  return (
    <Context.Provider value={{ connections, createNewConnection }}>
      {children}
    </Context.Provider>
  );
};
