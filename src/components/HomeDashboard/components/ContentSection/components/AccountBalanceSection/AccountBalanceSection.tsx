import { SubsectionTitle } from "../../styled-components";
import { BalanceCard } from "./components";
import { AccountBalanceContainer } from "./styled-components";

export function AccountBalanceSection(){
    return (
        <AccountBalanceContainer>
            <SubsectionTitle>XEPPT Account Balance</SubsectionTitle>
            <BalanceCard />
        </AccountBalanceContainer>
    );
}