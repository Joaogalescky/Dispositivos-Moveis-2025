import React from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type Props = StackScreenProps<AuthStackParamList, 'SignUp'>;

type State = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
};

export default class SignUp extends React.Component<Props, State> {
  state: State = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    loading: false,
  };

  handleSignUp = () => {
    const { name, email, password, confirmPassword } = this.state;

    if (name.trim().length < 3) {
      Alert.alert('Atenção', 'O nome deve ter pelo menos 3 caracteres');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Atenção', 'Digite um e-mail válido');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Atenção', 'As senhas não coincidem')
      return;
    }

    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      this.props.navigation.navigate('SignIn');
    }, 1500);
  };

  render() {
    const { navigation } = this.props;
    const { name, email, password, confirmPassword, loading } = this.state;

    const isFormValid =
      name.trim().length >= 3 &&
      email.includes('@') &&
      password.length >= 6 &&
      password === confirmPassword;

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Background>
          <Container>
            <AreaInput>
              <Input
                placeholder="Nome"
                autoCapitalize="words"
                value={name}
                autoCorrect={false}
                onChangeText={(text) => this.setState({ name: text })}
                returnKeyType="next"
              />
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="Seu email"
                autoCapitalize="none"
                value={email}
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => this.setState({ email: text })}
                returnKeyType="next"
              />
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="Sua senha"
                secureTextEntry
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => this.setState({ password: text })}
                returnKeyType="go"
              />
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="Confirme sua senha"
                secureTextEntry
                value={confirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => this.setState({ confirmPassword: text })}
                returnKeyType="go"
              />
            </AreaInput>

            <SubmitButton activeOpacity={0.8} disabled={!isFormValid || loading}
              onPress={this.handleSignUp}>
              <SubmitText >{loading ? 'Cadastrando...' : 'Cadastrar'}</SubmitText>
            </SubmitButton>

            <Link onPress={() => navigation.navigate('SignIn')}>
              <LinkText>Já tem uma conta? Entrar</LinkText>
            </Link>
          </Container>
        </Background>
      </KeyboardAvoidingView>
    )
  }
}