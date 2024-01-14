import { BankAccount, isAccount } from "types/bank-account";
import { LinkedCard } from "types/payment-card";

export function getCardOrAccountLastNumbers(ankAccountOrCard: LinkedCard | BankAccount): string {
    let number = '';

    if(isAccount(ankAccountOrCard)) {
        number = ankAccountOrCard.accountNumber;
    } else {
        number = ankAccountOrCard.cardNumber;
    }

    return number.slice(number.length - 4, number.length);
}