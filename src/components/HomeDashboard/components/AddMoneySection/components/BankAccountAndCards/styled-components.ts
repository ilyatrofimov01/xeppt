import styled from 'styled-components';

export const SectionTitle = styled('div')({
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '30px',

    "@media (max-width: 768px)": {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '120%',
    },

    "@media (max-width: 360px)": {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '120%',
    }
});

export const SectionContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
});