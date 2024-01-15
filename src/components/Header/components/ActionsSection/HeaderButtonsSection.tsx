import { useState } from "react";
import { AppLanguage, ExpandIcon, IconButton, ProfileIconButton, ProfileName, SectionContainer } from "./styled-components";
import { expandArrowIcon, notificationsIcon } from "assets/icons";

export function HeaderButtonsSection(){
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const handleMenuExpandClick = () => {
        setIsMenuExpanded((prev) => !prev);
    }
    return (
        <SectionContainer>
            <AppLanguage>FR</AppLanguage>
            <IconButton>
                <img src={notificationsIcon} alt="notifications icon"/>
            </IconButton>
            <ProfileIconButton> PM </ProfileIconButton>
            <ProfileName onClick={handleMenuExpandClick}> Peter Morgan </ProfileName>
            <ExpandIcon onClick={handleMenuExpandClick} expanded={isMenuExpanded} src={expandArrowIcon} alt="avatar"/>
        </SectionContainer>
    );
};