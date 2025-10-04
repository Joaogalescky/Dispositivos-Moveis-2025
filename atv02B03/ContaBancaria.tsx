import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from "react-native";

interface Errors {
  nome?: string;
  idade?: string;
  sexo?: string;
}

interface State {
  nome: string;
  idade: string;
  sexo: string;
  limite: number;
  estudante: boolean;
  enviado: boolean;
  erros: Errors;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      limite: 2500,
      estudante: false,
      enviado: false,
      erros: {},
    };
  }

  validar = (): Errors => {
    const { nome, idade, sexo } = this.state;
    const erros: Errors = {};

    if (!nome.trim()) {
      erros.nome = "Por favor, informe o nome";
    }

    if (!idade) {
      erros.idade = "Por favor, informe a idade";
    } else {
      const idadeNum = parseInt(idade, 10);
      if (isNaN(idadeNum)) {
        erros.idade = "Cuidado, idade deve ser um número válido";
      } else if (idadeNum < 18) {
        erros.idade = "Idade mínima: 18 anos";
      }
    }

    if (!sexo) {
      erros.sexo = "Por favor, selecione um sexo";
    }

    return erros;
  };

  atualizarCampo = <K extends keyof State>(campo: K, valor: State[K]) => {
    this.setState(
      { [campo]: valor } as Pick<State, K>,
      () => {
        const erros = this.validar();
        this.setState({ erros });
      }
    );
  };


  validarDados = () => {
    const erros = this.validar();
    this.setState({ erros });

    if (Object.keys(erros).length > 0) {
      const primeiroErro = Object.values(erros)[0];
      Alert.alert("Erro de validação", primeiroErro as string);
      return;
    }

    const { nome, idade, sexo, limite, estudante } = this.state;

    Alert.alert(
      "Conta criada com sucesso!",
      `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$ ${limite.toFixed(2)}\nEstudante: ${estudante ? 'Sim' : 'Não'}`
    );

    this.setState({ enviado: true });
  };

  render() {
    const { nome, idade, sexo, limite, estudante, erros, enviado } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>App Abrir Conta Bancária</Text>

        <Text style={{ color: '#666', fontSize: 22 }}>*</Text>
        {erros.nome && <Text style={styles.error}>{erros.nome}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          value={nome}
          onChangeText={(texto) => this.atualizarCampo("nome", texto)}
        />

        {/* Idade */}
        <Text style={{ color: '#666', fontSize: 22 }}>*</Text>
        {erros.idade && <Text style={styles.error}>{erros.idade}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade..."
          keyboardType="numeric"
          value={idade}
          onChangeText={(texto) => this.atualizarCampo("idade", texto.replace(/\D/g, ""))}
          maxLength={3}
        />

        {/* Gênero */}
        <Text style={{ color: '#666', fontSize: 22 }}>*</Text>
        {erros.sexo && <Text style={styles.error}>{erros.sexo}</Text>}
        <Picker
          style={styles.input}
          selectedValue={sexo}
          onValueChange={(valor) => this.atualizarCampo("sexo", valor)}
        >
          <Picker.Item label="Selecione um sexo" value="" enabled={false} />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro" value="Outro" />
        </Picker>

        {/* Limite da conta */}
        <Text style={styles.label}>Limite da Conta: R$ {limite.toFixed(2)}</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={500}
          maximumValue={10000}
          step={100}
          value={limite}
          onValueChange={(valor) => this.atualizarCampo("limite", Math.round(valor))}
          minimumTrackTintColor="#1E90FF"
          maximumTrackTintColor="#000000"
        />

        {/* Estudante */}
        <Text style={styles.label}>Estudante?</Text>
        <View style={styles.containerSwitch}>
          <Switch
            value={estudante}
            onValueChange={(valor) => this.atualizarCampo("estudante", valor)}
          />
        </View>

        {/* Botão */}
        <Button
          title="Abrir Conta"
          onPress={this.validarDados}
          disabled={Object.keys(erros).length > 0}
        />

        {/* Resultado*/}
        {enviado && (
          <View style={styles.containerResult}>
            <Text style={styles.subtitle}>Dados Informados:</Text>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Sexo: {sexo}</Text>
            <Text>Limite: R$ {limite.toFixed(2)}</Text>
            <Text>Estudante: {estudante ? 'Sim' : 'Não'}</Text>
          </View>
        )}

        <Text style={{ marginTop: 24, color: '#666' }}>
          Observação: campos com * são obrigatórios.
        </Text>

      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    height: 40,
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  containerResult: {
    marginTop: 24,
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginBottom: 6,
  },
});
