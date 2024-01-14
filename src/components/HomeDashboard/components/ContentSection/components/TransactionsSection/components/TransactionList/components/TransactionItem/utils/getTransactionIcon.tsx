import { Transaction } from "types/transaction";
import {cardIcon, bankTransfer} from "assets/icons/transactionTypeIcons"
import { TransactionIcon } from "../styled-components";

export function getTransactionIcon(transaction: Transaction): JSX.Element {
  switch (transaction.method) {
    case "card":
      return <TransactionIcon src={cardIcon} alt="Card icon"/>;
    case "transfer":
      return <TransactionIcon src={bankTransfer} alt="Transfer icon"/>;
    default:
      return <TransactionIcon src={cardIcon} alt="Card icon"/>;
  }
}