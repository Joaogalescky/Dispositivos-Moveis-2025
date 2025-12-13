export interface User {
    id: string;
    name: string;
    email: string;
    balance: number;
}

export interface Movement {
    id: string;
    description: string;
    value: number;
    type: 'receita' | 'despesa';
    date: string;
    user_id: string;
}

export interface Balance {
    tag: 'saldo' | 'receita' | 'despesa';
    saldo: number;
}

export interface LoginResponse {
    id: string;
    name: string;
    token: string;
}