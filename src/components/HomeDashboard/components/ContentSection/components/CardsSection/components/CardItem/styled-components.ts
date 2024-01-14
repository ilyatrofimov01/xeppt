import styled from 'styled-components';
import {xepptCardBackground} from "assets/img"
interface PaymentCardContainerProps {
    xepptCard: boolean;
}

export const PaymentCardContainer = styled('div')<PaymentCardContainerProps>(({xepptCard}) => ({
    width: "312px",
    height: "196px",
    boxSizing: "border-box",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "23px",
    background: !xepptCard ? "#000" : `url(${xepptCardBackground})`,
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.05)",
        transition: "0.3s ease-in-out",
    }
}));

export const CardStatus = styled('div')({
    color: "#BE8317",
    backgroundColor: "#FDF1DC",
    padding: "4px 16px",
    width: "fit-content",
    borderRadius: "20px",
    textTransform: "capitalize",
});

export const CardBalanceContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    gap: "5px"
});
export const CurrentCardBalance = styled('span')({
    fontSize: "24px",
    color: "#F5F5F5",
    fontWeight: 700

});
export const CardBalanceTitle = styled('span')({
    color: "#FFF",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
});

export const CardNumber = styled('span')({
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#FFF"
});