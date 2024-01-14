import { Transaction } from "types/transaction";

export function getTransactionMethodTitle(transaction: Transaction): string {
    switch (transaction.method) {
        case "card":
            return "Payment";
        case "transfer":
            return `Transfer ${transaction.type === "income" ? "from" : "to"} bank`;
        default:
            return "Operation unknown ";
    }
}