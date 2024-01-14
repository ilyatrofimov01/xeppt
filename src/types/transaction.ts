export type TransactionType = "expense" | "income";
export type TransactionMethod = "card" | "transfer" ;

export interface Transaction {
    type: TransactionType;
    amount: number;
    date: Date;
    method: TransactionMethod;
    id: string;
    beneficiary: string;
    xxeptCard?: boolean;
};