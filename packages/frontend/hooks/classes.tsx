import React, { createContext, useContext, useState, useCallback } from 'react';

import { GetClassesResponseDTO, GetClassesQueryDTO, PostClassesBodyDTO, PostClassesResponseDTO } from '@proffy/shared/apiDTOs';

import { useApi } from './api';

interface ClassInfo extends Omit<Omit<PostClassesBodyDTO, 'cost'>, 'schedule'> {
  cost: string;
  schedule: Array<{
    week_day: string;
    from: string;
    to: string;  
  }>;
}

interface ClassesContext {
  teachers: GetClassesResponseDTO;
  searchTeachers: (filter: GetClassesQueryDTO) => void;
  createClasses: (classInfo: ClassInfo) => Promise<void>;
}

const Context = createContext<ClassesContext>({} as ClassesContext);

export function useClasses(): ClassesContext {
  const context = useContext(Context);
  
  if (!context) {
    throw new Error('useClasses must be used within an ClassesProvider');
  }

  return context;
}

export const ClassesProvider: React.FC = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const { api } = useApi();

  const searchTeachers = useCallback(
    ({ subject, time, week_day }: GetClassesQueryDTO) => {
      api.get<GetClassesResponseDTO>('classes', {
        params: { subject, time, week_day }
      }).then(
        ({data}) => setTeachers(data)
      ).catch(
        () => setTeachers([])
      );
    },
    []
  );

  const createClasses = useCallback(async (classInfo: ClassInfo) => {
    const { data } = await api.post<PostClassesResponseDTO>('classes', {
      ...classInfo,
      cost: Number(classInfo.cost),
      schedule: classInfo.schedule.map(item => ({
        ...item,
        week_day: Number(item.week_day),
      })),
    });
    setTeachers(old => [
      ...old,
      data,
    ]);
  }, []);
  
  return (
    <Context.Provider value={{ teachers, searchTeachers, createClasses }}>
      {children}
    </Context.Provider>
  );
};
