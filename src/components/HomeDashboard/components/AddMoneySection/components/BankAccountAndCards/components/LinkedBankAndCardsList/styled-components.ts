import styled from "styled-components";

export const LinkedBankAndCardsListContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    gap:"16px",
    marginTop: "16px",

    "@media (max-width: 360px)": {
        gap: "8px",
    },
});