import { useLocation } from "react-router-dom";
import { LinksContainer, StyledLink } from "./styled-compoents";
import { links } from "../../constants";

export function HeaderLinks() {
    const location = useLocation();

    return (
        <LinksContainer>
            {links.map((link) => { 
                return (
                <StyledLink 
                    to={link.path} 
                    active={location.pathname === link.path}
                >
                    {link.label}
                </StyledLink>)
            })}
        </LinksContainer>
    );
}