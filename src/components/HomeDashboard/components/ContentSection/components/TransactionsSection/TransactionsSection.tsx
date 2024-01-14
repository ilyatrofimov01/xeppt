import { useState } from "react";
import { ActionsSection, TransactionList } from "./components";
import { TransactionsSectionContainer } from "./styled-components";
import { ActiveFilter } from "./types";
import { SubsectionTitle } from "../../styled-components";

export function TransactionsSection(){
    const [activeFilter, setFilter] = useState<ActiveFilter>("all");

    const handleFilterChange = (filter:ActiveFilter) => {
        setFilter(filter);
    }

    return(<TransactionsSectionContainer>
        <SubsectionTitle>XEPPT Prepaid Card</SubsectionTitle>
        <ActionsSection activeFilter={activeFilter} handleFilterChange={handleFilterChange}/>
        <TransactionList activeFilter={activeFilter}/>
    </TransactionsSectionContainer>);
}