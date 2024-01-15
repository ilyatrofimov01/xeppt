import styled from "styled-components";

export const ShowMoreMobileButtonComponent = styled('button')({
    display: "none",
    margin: "16px auto 0 auto",
    padding: "10px 24px",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "16px",
    borderRadius: "100px",
    color: "#F5CC82",
    backgroundColor: "#201E1B",
    transition: "0.3s ease",
    cursor: "pointer",


    "&:hover": {
        backgroundColor: "#F5CC82",
        color: "#201E1B",
    },

    "@media (max-width: 360px)": {
        display: "block"
    }
});