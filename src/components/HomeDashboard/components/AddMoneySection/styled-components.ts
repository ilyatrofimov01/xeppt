import styled from "styled-components";

export const AddMoneySectionContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    padding: "72px 32px 0 32px",
    width: "360px", 
    gap: "48px",
    
    "@media (max-width: 1024px)": {
        padding: "32px 16px 0 16px",
        width: "316px",
        boxSizing: "border-box",
    },

    "@media (max-width: 768px)": {
        width: "100%",
        padding: "32px 0 0 0",
        gap: "16px",
        flexDirection: "column-reverse",
    },

    "@media (max-width: 360px)": {
        gap: "72px",
    }
});