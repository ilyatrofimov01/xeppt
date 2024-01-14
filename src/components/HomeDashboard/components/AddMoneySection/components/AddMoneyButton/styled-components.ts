import styled from "styled-components";

export const AddMoneyButtonComponent = styled('button')({
    padding: "10px 24px",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "center",
    color: "#F5CC82",
    backgroundColor: "#353535",
    borderRadius: "100px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#F5CC82",
        color:"#353535",
        transition: "0.3s ease-in-out",
    }
});