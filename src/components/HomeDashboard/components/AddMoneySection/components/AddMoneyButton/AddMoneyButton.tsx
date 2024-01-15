import { AddMoneyButtonComponent } from "./styled-components";

export function AddMoneyButton(){

    const handleAddMoneyClick = () => {
        console.log("Add money")
    };

    return (
        <AddMoneyButtonComponent onClick={handleAddMoneyClick}>Add money</AddMoneyButtonComponent>
    );
};