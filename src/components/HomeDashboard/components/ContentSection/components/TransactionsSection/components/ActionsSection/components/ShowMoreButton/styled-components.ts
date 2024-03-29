import styled from "styled-components";

export const ShowMoreActionButton = styled('button')({
    backgroundColor: "#201E1B",
    color: "#F5CC82",
    padding: "10px 24px",
    borderRadius: "100px",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",

    "&:hover": {
        backgroundColor: "#F5CC82",
        color: "#201E1B",
    },

    "@media (max-width: 360px)": {
        display: "none"
    }
});