import styled from "styled-components";

export const BalanceCardContainer = styled('div')({
    borderRadius: '10px',
    boxSizing: 'border-box',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: "8px",
    border: '1px solid #F5CC82',
    backgroundColor: '#FFF8EC',
    width: "230px",
    height: "130px",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",

    "&:hover": {
        transform: "scale(1.1)",
    },

    "@media (max-width: 360px)": {
        gap: "15px",
    },
})

export const CardImage = styled('img')({
    width: '50px',
    height: '50px',
})

export const AmountTitle = styled('div')({
    fontSize: '20px',
    fontWeight: '700',
    color: '#000000',

    "@media (max-width: 360px)": {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '160%',
    },
});