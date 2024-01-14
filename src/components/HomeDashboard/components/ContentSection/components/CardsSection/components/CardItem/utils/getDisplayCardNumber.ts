export function getDisplayCardNumber(cardNumber: string):string{
    if(cardNumber.length < 16){
        return "Card Number Unavailable"
    }

    const encryptedCardNumber = cardNumber.slice(0,4) + cardNumber.slice(4,12).replace(/\d/g, "•") + cardNumber.slice(12,16);
    return  encryptedCardNumber.slice(0,4) +" " + encryptedCardNumber.slice(4,8) + " " + encryptedCardNumber.slice(8,12) + " " + encryptedCardNumber.slice(12,16)
}