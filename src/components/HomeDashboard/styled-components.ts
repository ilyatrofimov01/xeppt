import styled from "styled-components";

export const GlobeImage = styled('img')({
    position: "absolute",
    bottom: "0px",
    right: "0px",
    width: "536px",
    height: "529px",
    "@media (max-width: 1024px)": {
        width: "300px",
        height: "296px"
    },
    "@media (max-width: 768px)": {
       display: "none"
    }
});