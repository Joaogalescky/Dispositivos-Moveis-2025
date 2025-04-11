import React, {
    createContext,
    useState,
    useContext,
    ReactNode
} from 'react';

import {
    Expense, 
    ExpenseContextType
} from 'types';

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{children:ReactNode}> = ({children}) => {
    const [expenses, setExpenses] = useState<Expense[]> ([]);
}