import styled from 'styled-components';
import {xepptCardBackgroundBig, xepptCardBackgroundMedium, xepptCardBackgroundSmall} from "assets/img"
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
    background: !xepptCard ? "#000" : `url(${xepptCardBackgroundBig})`,
    cursor: "pointer",
    transition: "0.3s ease",

    "&:hover": {
        transform: "scale(1.05)",
    },

    "@media (max-width: 1024px)": {
        width: "280px",
        height: "176px",
        background: !xepptCard ? "#000" : `url(${xepptCardBackgroundMedium})`,

    },

    "@media (max-width: 360px)": {
        display: "inline-block",
        width: "256px",
        height: "160px",
        background: !xepptCard ? "#000" : `url(${xepptCardBackgroundSmall})`,

        "&:hover": {
            transform: "none",
        },
    },
}));


export const CardStatus = styled('div')({
    color: "#BE8317",
    backgroundColor: "#FDF1DC",
    padding: "4px 16px",
    width: "fit-content",
    borderRadius: "20px",
    textTransform: "capitalize",
    fontSize: "12px",
    lineHeight: "18px",

    "@media (max-width: 1024px)": {
       fontSize: "10px",
       lineHeight: "15px",
    }
});

export const CardBalanceContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    marginTop: "23px",

    "@media (max-width: 1024px)": {
        marginTop: "26.5px",
    },

    "@media (max-width: 768px)": {
        marginTop: "26.5px",
    },

    "@media (max-width: 360px)": {
        marginTop: "16px",
    }
});

export const CurrentCardBalance = styled('span')({
    fontSize: "24px",
    color: "#F5F5F5",
    fontWeight: 700,

    "@media (max-width: 1024px)": {
        fontSize: "20px",
    }

});
export const CardBalanceTitle = styled('span')({
    color: "#FFF",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",

    "@media (max-width: 1024px)": {
        fontSize: "14px",
        lineHeight: "21px",
    }
});

export const CardNumber = styled('p')({
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#FFF",
    marginTop: "23px",
    
    "@media (max-width: 1024px)": {
        fontSize: "14px",
        lineHeight: "21px",
        marginTop: "20.5px",
    },

    "@media (max-width: 768px)": {
        marginTop: "20.5px",
    },

    "@media (max-width: 360px)": {
        marginTop: "16px",
    }
});

export const CardItemWrapper = styled('div')({
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