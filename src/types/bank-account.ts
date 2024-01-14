import { LinkedCard } from "./payment-card";

export interface BankAccount {
    id: string;
    accountNumber: string;
    title: string;
}

export function isAccount(account: BankAccount | LinkedCard): account is BankAccount {
    return (account as BankAccount).accountNumber !== undefined;
}