import styled from "styled-components";

export const TransactionsSectionContainer = styled('div')({
    marginTop: "64px",
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 1024px)": {
        marginTop: "32px"
    },
});