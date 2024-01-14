import { getTransactionsMock } from "mock/transactions-mock";
import { useEffect, useState } from "react";
import { Transaction } from "types/transaction";
import { ActiveFilter } from "../../../types";

interface UseLoadTransactions {
    isLoading: boolean;
    transactions: Transaction[];
    isError: boolean;
    errorMessage: string;
}

export function useLoadTransactions(activeFilter: ActiveFilter):UseLoadTransactions{
    const [isLoading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

   
    useEffect(()=> {
        const loadTransactions = async () => {
            setIsError(false);
            setLoading(true);
            
            const res = await getTransactionsMock(activeFilter);
            setTransactions(res);
            setLoading(false);
            if (res.length === 0) {
                setIsError(true);
                setErrorMessage("No transactions found");
            }
        }

        loadTransactions();
    },[activeFilter])

    return {    
        isLoading,
        transactions,
        isError,
        errorMessage
    }
}