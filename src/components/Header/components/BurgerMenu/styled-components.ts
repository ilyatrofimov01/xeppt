import styled from 'styled-components';

interface MenuListProps {
    isOpen: boolean;
}

export const BurgerButton = styled('button')({
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: ".3s ease",

    "&:hover": {
        transform: "scale(1.1)",
    },

    "@media (max-width: 360px)": {
        display: "flex"
    }
});

export const MenuList = styled('ul')<MenuListProps>(({isOpen}) => ({
    display: isOpen ? "inline" : "none",
    zIndex: 100,
    position: "absolute",
    width: "100vw",
    top: -16,
    left: 0,
    backgroundColor: "#3D3D3D",
    color: "#F5CC82",

    "& li": {
        listStyle: "none",
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "16px",

        "& a": {
            textDecoration: "none",
            color: "#F5CC82",
        },
        "& a:visited": {
            backgroundColor: "transparent",
            textDecoration: "none"
          }
    }
}));

export const CloseButton = styled('button')({
    position: "absolute",
    color: "#F5CC82",
    right: "60px",
    top: 0,
    fontSize: "20px",
    fontWeight: 700,
    cursor: "pointer",
});