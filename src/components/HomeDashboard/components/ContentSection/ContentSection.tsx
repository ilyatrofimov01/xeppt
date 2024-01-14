import { AccountBalanceSection, CardsSection, TransactionsSection } from "./components";
import { ContentSectionContainer } from "./styled-components";

export function ContentSection(){
    return (
        <ContentSectionContainer>
            <AccountBalanceSection/>
            <CardsSection/>
            <TransactionsSection/>
        </ContentSectionContainer>
    );
}