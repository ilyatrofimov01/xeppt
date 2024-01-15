import styled from "styled-components";

export const LinkedBankOrCardItemContainer = styled('div')({
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#FFFDFA",
    border: "1px solid #E1DCD0",
    borderRadius: "8px",
    padding: "8px 16px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    
    "&:hover": {
        backgroundColor: "#F6E7CB",
    }
});

export const LinkedBankOrCardItemTitle = styled('span')({
    color: "#282828",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "27px",
    "@media (max-width: 1024px)": {
        fontSize: "16px",
        lineHeight: "24px",
    }
});