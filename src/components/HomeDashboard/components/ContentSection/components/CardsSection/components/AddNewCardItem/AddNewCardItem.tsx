import { SyntheticEvent } from "react";
import {  OrderCardContainer, OrderCardTitle, PlusIconContainer } from "./styled-components";
import {plusIcon} from "assets/icons";

export function AddNewCardItem(){
    const handleAddCardClick = (e: SyntheticEvent):void => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Card clicked");
    }
    return (
        <OrderCardContainer onClick={handleAddCardClick}>
            <PlusIconContainer onClick={handleAddCardClick}>
                <img src={plusIcon} alt="Add new card icon"/>
            </PlusIconContainer>
            <OrderCardTitle>Order a new card</OrderCardTitle>
        </OrderCardContainer>
    )
};