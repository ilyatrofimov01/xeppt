import { PaymentCard } from "types/payment-card";
import { SubsectionTitle } from "../../styled-components";
import { AddNewCardItem, CardItem } from "./components";
import { CardsList, CardsSectionContainer } from "./styled-components";

export function CardsSection(){
    const cards:PaymentCard[] = [{id:"123sdjfgl", balance: 100, cardNumber: "1234567890123456", cardStatus: "inactive",paymentSystem: "visa",xepptCard:true}];
    return (
        <CardsSectionContainer>
            <SubsectionTitle>XEPPT Prepaid Card</SubsectionTitle>
            <CardsList>
                {cards.map((card) => <CardItem
                    card={card}
                    key={card.id}
                />)}
                <AddNewCardItem/>
            </CardsList>
            
        </CardsSectionContainer>
    );
}