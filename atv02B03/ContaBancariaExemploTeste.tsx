/* Exemplo - Teste
Funções + Hooks
*/

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useMemo, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, } from 'react-native';

type Errors = {
  nome?: string;
  idade?: string;
  sexo?: string;
};

function App2() {
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [sexo, setSexo] = useState<string>('');
  const [limite, setLimite] = useState<number>(2500);
  const [estudante, setEstudante] = useState<boolean>(false);

  const [erros, setErros] = useState<Errors>({});
  const [enviar, setEnviar] = useState<boolean>(false);

  const validar = (): Errors => {
    const e: Errors = {};
    if (!nome.trim()) e.nome = 'Por favor, informe o nome';
    if (!idade) {
      e.idade = 'Por favor, informe a idade.';
    } else {
      const n = Number(idade);
      if (Number.isNaN(n) || !Number.isInteger(n)) {
        e.idade = 'Por favor, informe a idade em um valor númerico inteiro';
      } else if (n < 18) {
        e.idade = 'Idade mínima: 18 anos';
      }
    }
    if (!sexo) e.sexo = 'Selecione o sexo';
    return e;
  };

  useEffect(() => {
    setErros(validar());
  }, [nome, idade, sexo, limite, estudante]);

  const hasErrors = useMemo(() => Object.keys(erros).length > 0, [erros]);

  const formatCurrency = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleSubmit = () => {
    const e = validar();
    setErros(e);
    if (Object.keys(e).length > 0) {
      const first = Object.values(e)[0];
      Alert.alert('Erro de validação', first as string);
      return;
    }

    const resumo = `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: ${formatCurrency(limite)}\nEstudante: ${estudante ? 'Sim' : 'Não'}`;
    Alert.alert('Conta criada', resumo);
    setEnviar(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>App Abrir Conta Bancária (versão alternativa)</Text>

        <Text style={styles.label}>Nome *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo..."
          value={nome}
          onChangeText={t => setNome(t)}
          accessibilityLabel="Nome"
        />
        {erros.nome ? <Text style={styles.error}>{erros.nome}</Text> : null}

        <Text style={styles.label}>Idade *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade..."
          keyboardType="numeric"
          value={idade}
          onChangeText={t => setIdade(t.replace(/\D/g, ''))}
          maxLength={3}
          accessibilityLabel="Idade"
        />
        {erros.idade ? <Text style={styles.error}>{erros.idade}</Text> : null}

        <Text style={styles.label}>Sexo *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={sexo}
            onValueChange={(value) => setSexo(value)}
            accessibilityLabel="Sexo"
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
        </View>
        {erros.sexo ? <Text style={styles.error}>{erros.sexo}</Text> : null}

        <Text style={styles.label}>Limite da conta: R$ {formatCurrency(limite)}</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={500}
          maximumValue={10000}
          step={100}
          value={limite}
          onValueChange={(v) => setLimite(Math.round(v))}
          minimumTrackTintColor="#1E90FF"
          maximumTrackTintColor="#000000"
        />

        <View style={styles.switchRow}>
          <Text style={styles.label}>Estudante?</Text>
          <Switch value={estudante} onValueChange={v => setEstudante(v)} />
        </View>

        <TouchableOpacity
          style={[styles.button, hasErrors ? styles.buttonDisabled : null]}
          onPress={handleSubmit}
          disabled={hasErrors}
        >
          <Text style={styles.buttonText}>{hasErrors ? 'Por favor, corrija os erros' : 'Abrir Conta'}</Text>
        </TouchableOpacity>

        {enviar && (
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Dados informados:</Text>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Sexo: {sexo}</Text>
            <Text>Limite: R$ {formatCurrency(limite)}</Text>
            <Text>Estudante: {estudante ? 'Sim' : 'Não'}</Text>
          </View>
        )}

        <Text style={{ marginTop: 24, color: '#666' }}>
          Observação: campos com * são obrigatórios.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App2;

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 60 },
  title: { fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  label: { fontSize: 16, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 6,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    marginTop: 6,
  },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  button: {
    marginTop: 18,
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A9CCE3',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  error: { color: '#C00', marginTop: 4 },
  summary: { marginTop: 18, padding: 12, borderTopWidth: 1, borderColor: '#ddd' },
  summaryTitle: { fontWeight: '700', marginBottom: 8 },
});
