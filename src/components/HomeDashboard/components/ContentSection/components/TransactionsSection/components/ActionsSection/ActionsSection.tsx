import { ActiveFilter } from "../../types";
import { FiltersButtons, ShowMoreButton } from "./components";

import { ActionsSectionContainer } from "./styled-components";

interface ActionsSectionProps {
    activeFilter: ActiveFilter;
    handleFilterChange: (filter:ActiveFilter) => void;
}

export function ActionsSection({activeFilter, handleFilterChange}:ActionsSectionProps) {
    return (<ActionsSectionContainer>
           <FiltersButtons activeFilter={activeFilter} handleFilterChange={handleFilterChange}/>
           <ShowMoreButton/>
        </ActionsSectionContainer>);
}