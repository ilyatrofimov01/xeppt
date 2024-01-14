import styled from "styled-components";

interface FilterOptionProps{
    selected: boolean;
}

export const FiltersButtonsContainer = styled('div')({
    display: "flex",
    flexDirection: "row",
    gap: "16px",
});

export const FilterButton = styled('button')<FilterOptionProps>(({selected}) => ({
    backgroundColor: selected ? "#DB9E2F" : "transparent",
    borderRadius: "100px",
    padding: "10px 24px",
    cursor: "pointer",
    color: selected ? "#fff" : "#DB9E2F",
    fontWeight: 500,
    border: "1px solid #DB9E2F",
    boxSizing: "border-box",
    fontSize: "16px",
    lineHeight: "20px",
    "&:hover": {
        backgroundColor: "#F6E7CB",
        transition: "0.3s ease-in-out",
    }
}));
