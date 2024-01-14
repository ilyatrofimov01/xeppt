import styled from "styled-components";

export const LinkNewCardOrBankContainer = styled('div')({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    gap: "16px",
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
    ${LinkNewCardOrBankContainer}:hover & {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
    }
`;

export const LinkTitle = styled.p ` 

        color: #282828;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        position: relative;
        transition: .3s ease;

        &::after {
            content: "";
            width: 0;
            height: 2px;
            background-color: #282828;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            transition: .3s;
        }

        &:hover:after {
            width: 100%;
            
        }

`;