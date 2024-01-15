import styled from 'styled-components';

export const OrderCardContainer = styled('div')({
    width: "312px",
    height: "196px",
    boxSizing: "border-box",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "21px",
    paddingTop: "27px",
    gap: "22px",
    backgroundColor: "#F8F6F1",
    border: "1px solid #E1DCD0", 
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    
    "&:hover": {
        transform: "scale(1.05)",
    },

    "@media (max-width: 1024px)": {
        width: "280px",
        height: "176px",
    },

    "@media (max-width: 360px)": {
        width: "256px",
        height: "160px",
        
        "&:hover": {
            transform: "none",
        },
    },

});

export const PlusIconContainer = styled.div`
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 8px;
    background-color: #3D3D3D;
    transition: transform 0.3s ease-in-out;

    ${OrderCardContainer}:hover & {
        transform: scale(1.1);
    }
`;

export const OrderCardTitle = styled('span')({
    color: "#000",
    fontSize: "20px",
    fontWeight: 700,
});

export const OrderCardWrapper= styled('div')({
    display: "inline-block",

    width: "312px",
    height: "196px",

    "@media (max-width: 1024px)": {
        width: "280px",
        height: "176px",

    },

    "@media (max-width: 360px)": {
        width: "256px",
        height: "160px",
    },
});