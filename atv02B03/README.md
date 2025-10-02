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