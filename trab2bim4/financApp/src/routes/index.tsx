import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../hooks/useAuth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F4FF'
        }}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    )
  }

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}

export default Routes;