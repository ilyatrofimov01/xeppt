import styled from "styled-components";

export const ContentSectionContainer = styled('div')({
    minWidth: "66%",
    backgroundColor: "#FFFDFA",
    padding: '0 24px 32px 24px',
    boxSizing: "border-box",

    "@media (max-width: 1024px)": {
        padding: '0 16px 54px 16px',
    },
    
    "@media (max-width: 768px)": {
       padding: '0',
       width: "100%"
    }
});

export const SubsectionTitle = styled('p')({
    color: "#000",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "120%", 
    marginBottom: "24px",

    "@media (max-width: 1024px)": {
        marginBottom: "16px",
    },

    "@media (max-width: 360px)": {
        fontSize: "16px",
    },
});
