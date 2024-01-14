import { LinkedCard } from "types/payment-card";
import { LinkNewCardOrBank, LinkedBankOrCardItem } from "./components";
import { BankAccount } from "types/bank-account";
import { LinkedBankAndCardsListContainer } from "./styled-components";


const linkedBankOrCardItems: (LinkedCard | BankAccount)[] = [
    {
        id:"123453463",
        balance: 500,
        cardNumber: "1234567890123334",
        cardStatus: "inactive",
        paymentSystem: "visa",
        xepptCard: false,
        title: "Signature RBC visa"
    },
    {
        id:"42341234",
        accountNumber: "1234567890123124",
        title: "TD Bank Debit"
    }
];

export function LinkedBankAndCardsList(){
    return (
        <LinkedBankAndCardsListContainer>
            {linkedBankOrCardItems.map((linkedBankOrCard: LinkedCard | BankAccount) => 
                <LinkedBankOrCardItem cardOrBankAccount={linkedBankOrCard} key={linkedBankOrCard.id}/>)
            }
            <LinkNewCardOrBank/>
        </LinkedBankAndCardsListContainer>
    );
};