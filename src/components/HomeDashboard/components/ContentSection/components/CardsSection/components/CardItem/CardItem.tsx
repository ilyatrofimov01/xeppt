import { PaymentCard } from "types/payment-card";
import { CardBalanceContainer, CardBalanceTitle, CardNumber, CardStatus, CurrentCardBalance, PaymentCardContainer } from "./styled-components";
import { getDisplayCardNumber } from "./utils/getDisplayCardNumber";

interface CardItemProps {
    card: PaymentCard;
}

export function CardItem({card}:CardItemProps){
    const handleCardClick = ():void => {
        console.log("Card clicked");
    }
    return (
        <PaymentCardContainer onClick={handleCardClick} xepptCard={card.xepptCard}>
            <CardStatus>{card.cardStatus}</CardStatus>
            <CardBalanceContainer>
                <CurrentCardBalance>${card.balance}</CurrentCardBalance>
                <CardBalanceTitle>Available Balance</CardBalanceTitle>
            </CardBalanceContainer>
            <CardNumber>{getDisplayCardNumber(card.cardNumber)}</CardNumber>
        </PaymentCardContainer>
    )
};