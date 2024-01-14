import { currencyImgCad } from "assets/img";
import { AmountTitle, BalanceCardContainer, CardImage } from "./styled-components";

export function BalanceCard(){
    return (
        <BalanceCardContainer>
            <CardImage src={currencyImgCad}/>
            <AmountTitle>$191.00</AmountTitle>
        </BalanceCardContainer>
    );
}