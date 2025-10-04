# Atividade 02 - 3º Bimestre
Data de entrega: 05 de Outubro de 2025, as 23:59

## Objetivo
### App “Abrir Conta Bancária”
Praticar criação de formulários com TextInput, Picker, Slider e Switch, validação de dados e exibição de resultados via Alert ou renderização na tela.

## Requisitos funcionais

### 01 - Campos
* Nome (TextInput, obrigatório)
* Idade (TextInput numérico, obrigatório, ≥ 18)
* Sexo (Picker: “Masculino”, “Feminino”, “Outro”, obrigatório)
* Limite da conta (Slider: 500 a 10.000; valor inicial 2.500; obrigatório)
* Estudante? (Switch: true/false; obrigatório)

### 02 — Botão "Abrir Conta"
* Ao tocar: validar todos os campos; se houver erro, exibir mensagem clara.
* Se estiver tudo ok: exibir um Alert com o resumo ou mostrar os dados na tela (escolha do aluno — vale implementar os dois).

### 03 — UX
* Mostrar o valor atual do Slider.
* Desabilitar o botão enquanto houver erro de validação (opcional, vale ponto extra).

### 04 — Organização
* Componentizar se preferir, mas um único App.tsx também é aceito.

### Forma de entrega
* O projeto deve ser criado no Expo.
* Cada aluno ou grupo deverá publicar o código no GitHub e enviar o link do repositório para avaliação.
* O repositório deve conter:  Código completo do app e arquivo README.md com instruções de execução (npx expo start).

## Instruções de execução
### Acessar o repositório
#### Clonar de repositório
Pode acessar o repositório pelo comando _git clone_ via link HTTPS.
```bash
git clone https://github.com/Joaogalescky/Dispositivos-Moveis-2025.git
```
Após clonado o repositório, faça o acesso ao caminho de diretório: Dispositivos-Moveis-2025/atv02B03

#### _Download_ ZIP do repositório
Além da opção de comando de clonagem, há também a opção de realizar o _download_ do repositório em formato ZIP.
Selecione o local para realizar o donwload, após isso, extrai-a o arquivo e acesse o seguinte caminho de diretório: Dispositivos-Moveis-2025/atv02B03

### Instalar dependências
```bash
npm install
```
```bash
npx expo install react-dom react-native-web
```
```bash
expo install @react-native-community/slider @react-native-picker/picker
```

### Executar o projeto 
Para executar o projeto, será necessário realizar o download das dependências do React Native
```bash
npx expo start
```