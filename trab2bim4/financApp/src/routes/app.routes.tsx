import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

export type AppStackParamList = {
  Home: undefined;
  Registrar: undefined;
  Perfil: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#3b3dbf',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Início' }}
      />

      <AppStack.Screen
        name="Registrar"
        component={New}
        options={{ title: 'Nova Transação' }}
      />

      <AppStack.Screen
        name="Perfil"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
    </AppStack.Navigator>
  )
}

export default AppRoutes;