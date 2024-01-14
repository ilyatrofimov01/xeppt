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
    marginTop: "21px",
    borderRadius: "8px",
})
export const TransactionIconContainer = styled('div')<TransactionIconContainerProps>(({transactionType}) => ({
    padding: "8px",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "50px",
    maxHeight: "50px",
    backgroundColor: transactionType === "expense" ? "#F5CC82" : "#FDF1DC",
    boxSize: "border-box",
}));

export const TransactionIcon = styled('img')({
    width: "34px",
    height: "34px",
});

export const TransactionTitleContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px"
});

export const TransactionTitle = styled('span')({
    color: "#282828",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "30px",
});

export const TransactionInfo = styled('span')({
    color: "#282828",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
});

export const TransactionInfoContainer = styled('div')({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "24px"
});

export const TransactionAmount = styled('span')<TransactionAmountProps>(({transactionType}) => ({
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "30px",
    color: transactionType === "expense" ? "#4E4C47" : "#0F9D58",
}));