import React from 'react';

import { ApiProvider } from './api';
import { ConnectionsProvider } from './connections';
import { ClassesProvider } from './classes';

const AppContext: React.FC = ({ children }) => {
  return (
    <ApiProvider>
      <ConnectionsProvider>
        <ClassesProvider>
          {children}
        </ClassesProvider>
      </ConnectionsProvider>
    </ApiProvider>
  );
}

export default AppContext;