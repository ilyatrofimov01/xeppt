import { plusIcon } from "assets/icons";
import { LinkNewCardOrBankContainer, LinkTitle, PlusIconContainer } from "./styled-components";
import { SyntheticEvent } from "react";

export function LinkNewCardOrBank(){

    const handleLinkCardOrBankClick = (e: SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Link new card or bank");
    };

    return (
        <LinkNewCardOrBankContainer onClick={handleLinkCardOrBankClick}>
            <PlusIconContainer onClick={handleLinkCardOrBankClick}>
                <img src={plusIcon} alt="Add new card icon"/>
            </PlusIconContainer>
            <LinkTitle>
                Link a card or bank
            </LinkTitle>
        </LinkNewCardOrBankContainer>
    );
};