import styled from 'styled-components';

interface ExpandIconProps {
    expanded?: boolean;
}


export const SectionContainer = styled('div')({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    gap: "18px",
    height: "100%",
    marginLeft: "auto",
    fontSize: "18px",
    textTransform: "uppercase",

    "@media (max-width: 768px)": {
        gap: "16px",
    },

    "@media (max-width: 360px)": {
        gap: "8px",
    },
});

export const IconButton = styled('button')({
    fontSize: "16px",
    width: "40px",
    padding: "8px 0",
    backgroundColor: "#FDF1DC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    cursor: "pointer",
    transition: ".3s ease",

    "&:hover": {
        transform: "scale(1.1)",
    },
});

export const ProfileIconButton = styled(IconButton)({
    "@media (max-width: 360px)": {
        display: "none"
    }
});

export const SectionText = styled('p')({
    color: "#F5CC82",
    whiteSpace: "nowrap",
});

export const AppLanguage = styled(SectionText)({
    cursor: "pointer",

    "@media (max-width: 360px)": {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "150%",
    }
});

export const ProfileName = styled(SectionText)({
    cursor: "pointer",

    "@media (max-width: 768px)": {
       display: "none",
    },
});

export const ExpandIcon = styled('img')<ExpandIconProps>(({expanded})=> ({
    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
    transition: "0.5s",

    "@media (max-width: 360px)": {
        display: "none"
    }
}));