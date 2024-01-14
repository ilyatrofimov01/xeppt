import { ActiveFilter } from "../../../../types";
import { filterOptions } from "./constants";
import { FilterButton, FiltersButtonsContainer } from "./styled-components";

interface FiltersButtonsProps {
    activeFilter: ActiveFilter;
    handleFilterChange: (filter:ActiveFilter) => void;
}
export function FiltersButtons({activeFilter, handleFilterChange}:FiltersButtonsProps) {
    return (<FiltersButtonsContainer>
            {filterOptions.map((filterOption) => <FilterButton 
                selected={activeFilter === filterOption.value}
                onClick={() => handleFilterChange(filterOption.value)}
            >{filterOption.label}</FilterButton>)}
        </FiltersButtonsContainer>);
}