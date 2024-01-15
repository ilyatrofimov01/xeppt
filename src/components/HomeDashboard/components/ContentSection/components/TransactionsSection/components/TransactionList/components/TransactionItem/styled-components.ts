import styled from 'styled-components';
import { TransactionType } from 'types/transaction';

interface TransactionIconContainerProps{
    transactionType: TransactionType;
}

interface TransactionAmountProps {
    transactionType: TransactionType;
}

export const TransactionItemContainer = styled('div')({
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FDFDFD",
    border: "1px solid #E1DCD0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: ".3s ease",

    "&:hover": {
        backgroundColor: "#F6E7CB",
    },

    "@media (max-width: 360px)": {
        padding: "16px 8px",
    },
});

export const TransactionIconContainer = styled('div')<TransactionIconContainerProps>(({transactionType}) => ({
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "50px",
    maxWidth: "50px",
    maxHeight: "50px",
    backgroundColor: transactionType === "expense" ? "#F5CC82" : "#FDF1DC",
    boxSizing: "border-box",

    "@media (max-width: 360px)": {
        maxWidth: "40px",
        maxHeight: "40px",

    },
}));

export const TransactionIcon = styled('img')({
    width: "34px",
    height: "34px",

    "@media (max-width: 360px)": {
        width: "20px",
        height: "20px",
    },
});

export const TransactionTitleContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",

    "@media (max-width: 360px)": {
        gap: "0px",
    },
});

export const TransactionTitle = styled('span')({
    color: "#282828",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "30px",

    "@media (max-width: 360px)": {
        fontSize: "16px",
        lineHeight: "150%",
    },
});

export const TransactionInfo = styled('span')({
    color: "#282828",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",

    "@media (max-width: 360px)": {
        fontSize: "12px",
        lineHeight: "100%",
    },
});

export const TransactionInfoContainer = styled('div')({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "24px",

    "@media (max-width: 360px)": {
        gap: "8px",
    },
});

export const TransactionAmount = styled('span')<TransactionAmountProps>(({transactionType}) => ({
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "30px",
    color: transactionType === "expense" ? "#4E4C47" : "#0F9D58",


    "@media (max-width: 360px)": {
        fontSize: "16px",
        lineHeight: "100%",
    },
}));