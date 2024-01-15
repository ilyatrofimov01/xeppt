import styled from "styled-components";

export const HeaderContainer = styled('div')({
    backgroundColor: '#3D3D3D',
    width: '100%',
});

export const HeaderContent = styled('div')({
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '1420px',
    height: "136px",
    boxSizing: "border-box",

    "@media (max-width: 1024px)": {
        paddingLeft: "16px",
        paddingRight: "24px",
        height: "96px",
    },

    "@media (max-width: 768px)": {
        height: "72px",
        padding:"16px 27px"
    },
});

export const LogoImage = styled('img')({
    display: "block",
    width: "140px",
    height: "48.5px",

    "@media (max-width: 768px)": {
        width: "100px",
        height: "34.6px",
    },
    
    "@media (max-width: 360px)": {
        position: "absolute",
        left: 0,
        right: 0,
        margin: "0 auto"
    }
});