import { Transaction } from "types/transaction";
import { TransactionAmount, TransactionIconContainer, TransactionInfo, TransactionInfoContainer, TransactionItemContainer, TransactionTitle, TransactionTitleContainer } from "./styled-components";
import { getTransactionIcon } from "./utils/getTransactionIcon";
import dayjs from "dayjs";
import { getTransactionMethodTitle } from "./utils/getTransactionMethodTitle";

interface TransactionItemProps {
    transaction: Transaction;

}

export function TransactionItem({transaction}:TransactionItemProps){
    return (<TransactionItemContainer>
        <TransactionInfoContainer>
            <TransactionIconContainer transactionType={transaction.type}>{getTransactionIcon(transaction)}</TransactionIconContainer>
            <TransactionTitleContainer>
                <TransactionTitle>
                    {transaction.beneficiary}
                </TransactionTitle>
                <TransactionInfo>
                    {dayjs(transaction.date).format("MMM DD")}, {getTransactionMethodTitle(transaction)}
                </TransactionInfo>
            </TransactionTitleContainer>
        </TransactionInfoContainer> 
        <TransactionAmount transactionType={transaction.type}>
            ${transaction.type === "expense" ? "-" : "+"}{(Math.floor(transaction.amount * 100) / 100).toFixed(2)}
        </TransactionAmount>
    </TransactionItemContainer>);
}