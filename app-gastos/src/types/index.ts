// Define um tipo chamado ExpenseCategory que representa as categorias de despesas possíveis
// É um tipo union que só pode ter um dos valores string especificados
export type ExpenseCategory = 'mercado' | 'combustivel' | 'lazer' | 'alimentacao' | 'outros';

// Define uma interface chamada Expense que representa a estrutura de uma despesa
export interface Expense {
  id: string;           // Identificador único da despesa
  description: string;  // Descrição textual da despesa
  amount: number;      // Valor monetário da despesa
  category: ExpenseCategory; // Categoria da despesa, usando o tipo definido acima
  date: Date;          // Data em que a despesa foi realizada
}

// Define um tipo chamado ExpenseContextType que representa o formato do contexto de despesas
// Este tipo será usado em um React Context para gerenciamento de estado global
export type ExpenseContextType = {
  expenses: Expense[];  // Array contendo todas as despesas registradas
  
  // Função para adicionar uma nova despesa
  // Recebe um objeto do tipo Expense sem o campo id (Omit<Expense, 'id'>)
  // O id será gerado automaticamente na implementação
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  
  // Função para remover uma despesa existente
  // Recebe o id da despesa que deve ser removida
  removeExpense: (id: string) => void;
};