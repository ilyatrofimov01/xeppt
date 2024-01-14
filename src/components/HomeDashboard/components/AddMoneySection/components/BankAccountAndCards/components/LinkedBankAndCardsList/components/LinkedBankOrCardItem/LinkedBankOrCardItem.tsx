import { BankAccount } from "types/bank-account";
import { LinkedCard } from "types/payment-card";
import { LinkedBankOrCardItemContainer, LinkedBankOrCardItemTitle } from "./styled-components";
import { getCardOrAccountLastNumbers } from "./utils";

interface LinkedBankOrCardItemProps {
    cardOrBankAccount: LinkedCard | BankAccount;

}

export function LinkedBankOrCardItem({cardOrBankAccount}:LinkedBankOrCardItemProps) {
    return (
        <LinkedBankOrCardItemContainer>
            <LinkedBankOrCardItemTitle>{cardOrBankAccount.title} (****{getCardOrAccountLastNumbers(cardOrBankAccount)})</LinkedBankOrCardItemTitle>
        </LinkedBankOrCardItemContainer>
    );
};
