import { BankAccount } from "types/bank-account";
import { LinkedCard } from "types/payment-card";
import { LinkedBankOrCardItemContainer, LinkedBankOrCardItemTitle } from "./styled-components";
import { getCardOrAccountLastNumbers } from "./utils";

interface LinkedBankOrCardItemProps {
    cardOrBankAccount: LinkedCard | BankAccount;

}

export function LinkedBankOrCardItem({cardOrBankAccount}:LinkedBankOrCardItemProps) {
    const handleLinkedBankOrCardClick = ():void => {
        console.log("Linked bank or card clicked");
    }

    return (
        <LinkedBankOrCardItemContainer onClick={handleLinkedBankOrCardClick}>
            <LinkedBankOrCardItemTitle>{cardOrBankAccount.title} (****{getCardOrAccountLastNumbers(cardOrBankAccount)})</LinkedBankOrCardItemTitle>
        </LinkedBankOrCardItemContainer>
    );
};
