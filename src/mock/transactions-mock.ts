import { ActiveFilter } from "components/HomeDashboard/components/ContentSection/components/TransactionsSection/types";
import { Transaction } from "types/transaction";

export const transactionsMock: Transaction[] = [
    {
        id: "a123213fd", 
        amount: 42.50,
        beneficiary: "Cineplex Inc.",
        date: new Date(), 
        method: "card", 
        type: "expense",
        xxeptCard: true
    },
    {
        id: "a123213fd", 
        amount: 500.00,
        beneficiary: "RBC Royal Bank",
        date: new Date(), 
        method: "transfer", 
        type: "income"
    },
    {
        id: "a123213fd", 
        amount: 110.45,
        beneficiary: "Skyline Restaurant",
        date: new Date(), 
        method: "card", 
        type: "expense",
        xxeptCard: true
    }
];

// mock api call 
export  function getTransactionsMock(activeFilter: ActiveFilter): Promise<Transaction[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(transactionsMock.filter((transaction) => {
            if(activeFilter === "all"){
                 return true;
            } if(activeFilter === "xxeptCard"){
                return transaction.xxeptCard;
            }
            return false;
        }));
      }, 2000);
    });
}