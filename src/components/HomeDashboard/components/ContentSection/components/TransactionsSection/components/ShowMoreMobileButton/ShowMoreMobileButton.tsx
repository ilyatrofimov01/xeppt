import { ShowMoreMobileButtonComponent } from "./styled-components";

export function ShowMoreMobileButton() {
    const handleShowMore = () => {
        console.log("Show more");
    };
    return (
        <ShowMoreMobileButtonComponent onClick={handleShowMore}>
            Show more
        </ShowMoreMobileButtonComponent>
    );
}