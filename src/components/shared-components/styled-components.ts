import styled from "styled-components";

export const  DashboardContentContainer = styled('div')({
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1420px',

    "@media (max-width: 1024px)": {
        maxWidth: 'none',
    },

    "@media (max-width: 768px)": {
        maxWidth: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px 32px 32px',
    },

    "@media (max-width: 360px)": {
        padding: '0 24px 20px 24px',
    },
}); 

export const DashboardContainer = styled('div')({
    position: 'relative',
    width: '100%',
    minHeight: 'calc(100vh - 136px)',

    "@media (max-width: 1024px)": {
        minHeight: 'calc(100vh - 96px)',
    }
});