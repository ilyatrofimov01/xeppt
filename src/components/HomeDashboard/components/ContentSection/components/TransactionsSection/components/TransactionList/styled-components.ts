import styled from 'styled-components';

export const TransactionListContainer = styled('div')({
    marginTop: "21px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    "@media (max-width: 360px)": {
        marginTop: "17px",

    },
});

export const TransactionLoaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '21px',
});