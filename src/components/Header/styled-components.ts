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

    "@media (max-width: 1024px)": {
        paddingLeft: "16px",
        paddingRight: "24px"
    }
});