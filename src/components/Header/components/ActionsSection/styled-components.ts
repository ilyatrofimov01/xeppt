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
});

export const HeaderButton = styled('div')({
    fontSize: "16px",
    width: "40px",
    padding: "8px 0",
    backgroundColor: "#FDF1DC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    cursor: "pointer",
});

export const SectionText = styled('p')({
    color: "#F5CC82",
    whiteSpace: "nowrap",
});

export const ProfileName = styled(SectionText)({
    cursor: "pointer",
});

export const ExpandIcon = styled('img')<ExpandIconProps>(({expanded})=> ({
    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
    transition: "0.5s"
}));