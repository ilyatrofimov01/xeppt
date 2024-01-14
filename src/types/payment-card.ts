export interface PaymentCard {
    id:string;
    balance: number;
    cardNumber: string;
    paymentSystem: "visa" | "mastercard";
    cardStatus: "active" | "inactive";
    xepptCard: boolean;
}

export interface LinkedCard extends PaymentCard{
    title: string;
}