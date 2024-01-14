import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
    active?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>(({active})=>({
    color: "#F5CC82",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "30px",
    textDecoration: "none",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    "&:hover": {
        padding: "16px 32px",
        transition: "0.3s ease-in-out",

        backgroundColor: "#282828"
    },
    backgroundColor: active ? "#282828" : "transparent",
    padding: active ? "16px 32px" : "0",

    "@media (max-width: 1024px)": {
        padding: active ? "8px 24px" : "0",
    }
}));

export const LinksContainer = styled('div')({
    display: "flex",
    gap: "48px",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "0 32px 0 0",
    marginLeft: "114px",
    "@media (max-width: 1024px)": {
        marginLeft: "46px"
    }
});