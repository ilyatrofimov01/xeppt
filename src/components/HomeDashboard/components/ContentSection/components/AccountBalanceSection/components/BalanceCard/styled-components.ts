import styled from "styled-components";

export const BalanceCardContainer = styled('div')({
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: "8px",
    border: '1px solid #F5CC82',
    backgroundColor: '#FFF8EC',
    width: "230px",
    height: "130px",
})

export const CardImage = styled('img')({
    width: '50px',
    height: '50px',
    marginBottom: '8px'
})

export const AmountTitle = styled('div')({
    fontSize: '20px',
    fontWeight: '700',
    color: '#000000',
});