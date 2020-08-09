import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppContext from '@proffy/frontend/hooks';
import { useApi } from '@proffy/frontend/hooks/api';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const initApi = useCallback(() => {
    useApi('http://192.168.100.5:3333');
    return null;
  }, []);

  return fontsLoaded ? (
    <>
      <AppContext>
        {initApi()}
        <AppStack />
      </AppContext>
      <StatusBar style="light" />
    </>
  ) : <AppLoading />;
}
