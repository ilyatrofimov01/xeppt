import { menuIcon } from "assets/icons";
import { useState } from "react";
import { BurgerButton, CloseButton, MenuList } from "./styled-components";
import { links } from "components/Header/constants";
import { Link } from "react-router-dom";

export function BurgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen((prev) => !prev);
    };
   
    return (
        <>
            <BurgerButton onClick={handleBurgerClick}>
                <img src={menuIcon} alt="menu icon"/>
            </BurgerButton>
            <MenuList isOpen={isMenuOpen} >
                <CloseButton onClick={handleBurgerClick}>X</CloseButton>
                {links.map((link) => <li><Link to={link.path}>{link.label}</Link></li>)}
            </MenuList>

        </>
    );
}