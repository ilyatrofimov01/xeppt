import { useState } from "react";
import { ExpandIcon, HeaderButton, ProfileName, SectionContainer, SectionText } from "./styled-components";
import { expandArrowIcon, notificationsIcon } from "assets/icons";

export function HeaderButtonsSection(){
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    return (
        <SectionContainer>
            <SectionText>FR</SectionText>
            <HeaderButton>
                <img src={notificationsIcon} alt="notifications icon"/>
            </HeaderButton>
            <HeaderButton> PM </HeaderButton>
            <ProfileName onClick={()=> setIsMenuExpanded((prev) => !prev)}> Peter Morgan </ProfileName>
            <ExpandIcon expanded={isMenuExpanded} src={expandArrowIcon} alt="avatar"/>
        </SectionContainer>
    );
};