import { ActiveFilter } from "../../../../types";

interface FilterOption {
    label: string;
    value: ActiveFilter;
};
export const filterOptions:FilterOption[] = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "XEPPT Card",
        value: "xxeptCard",
    },
];
