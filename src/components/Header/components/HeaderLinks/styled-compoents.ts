import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
    active?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>(({active})=>({
    color: "#F5CC82",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "30px",
    fontStyle: "normal",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    transition: "0.3s ease-in-out",
    backgroundColor: active ? "#282828" : "transparent",
    padding: active ? "16px 32px" : "0",

    "&:hover": {
        padding: "16px 32px",
        backgroundColor: "#282828"
    },
   
    "@media (max-width: 1024px)": {
        padding: active ? "8px 24px" : "0",
        fontSize: "18px",
        lineHeight: "27px",

        "&:hover": {
            padding: "8px 24px",
        },
    },

    "@media (max-width: 768px)": {
        "&:hover": {
            padding: "8px 24px",
        },
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
    },

    "@media (max-width: 768px)": {
        gap: "24px",
    },

    "@media (max-width: 360px)": {
        display: "none"
    }
});