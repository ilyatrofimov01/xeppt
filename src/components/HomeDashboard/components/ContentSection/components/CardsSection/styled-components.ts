import styled from "styled-components";

export const CardsSectionContainer = styled('div')({
    marginTop: "64px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1024px)": {
        marginTop: "32px"
    }
});

export const CardsList = styled('div')({
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    flexWrap: "wrap",

    "@media (max-width: 360px)": {
        flexWrap: "nowrap",
        overflow: "auto",
        
    },
});

