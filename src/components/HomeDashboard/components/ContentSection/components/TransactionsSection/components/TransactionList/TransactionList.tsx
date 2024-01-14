import { TransactionListContainer, TransactionLoaderContainer } from "./styled-components";
import { useLoadTransactions } from "./hooks/useLoadTransactions";
import { TransactionItem } from "./components";
import { ActiveFilter } from "../../types";
import { MoonLoader } from "react-spinners";


interface TransactionListProps {
    activeFilter: ActiveFilter
}

export function TransactionList({activeFilter}:TransactionListProps){
    const { isLoading, transactions, isError, errorMessage} = useLoadTransactions(activeFilter);

    if(isLoading){
        return (
            <TransactionLoaderContainer>
                <MoonLoader size="60px" color="#DB9E2F" />
            </TransactionLoaderContainer>
        );
    }

    if(isError){
        return <div>Error on Loading transactions: {errorMessage}</div>
    }

    return (
        <TransactionListContainer>
            {transactions.map((transaction) => <TransactionItem transaction={transaction} key={transaction.id}/>)}
        </TransactionListContainer>
    );
}