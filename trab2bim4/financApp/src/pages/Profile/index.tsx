import React from 'react';
import {
  Container,
  Message,
  Name,
  NewLink,
  NewText,
  LogoutButton,
  LogoutText
} from './styles'

import { useAuth } from '../../hooks/useAuth';

import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      <Message>
        Hey, bem vindo de volta!
      </Message>

      <Name numberOfLines={1} >
        {user && user.name}
      </Name>

      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}