import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';   
import Routes from './src/routes';

type AppProps = Record<string, never>;
type AppState = Record<string, never>;

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#F0F4FF" translucent/>
        <Routes />
      </NavigationContainer>
    );
  }
}