import { ShowMoreActionButton } from "./styled-components";

export function ShowMoreButton() {
    const handleShowMore = () => {
        console.log("Show more");
    }
    
    return (
        <ShowMoreActionButton onClick={handleShowMore}>
            Show more
        </ShowMoreActionButton>
    );
}