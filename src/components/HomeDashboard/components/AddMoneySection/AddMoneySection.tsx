import { AddMoneyButton, BankAccountAndCards } from "./components";
import { AddMoneySectionContainer } from "./styled-components";

export function AddMoneySection(){
    return (
        <AddMoneySectionContainer>
            <AddMoneyButton/>
            <BankAccountAndCards/>
        </AddMoneySectionContainer>
    );
}