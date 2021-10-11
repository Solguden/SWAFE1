import {CreditCard} from './creditcard'

export interface Transaction{
    Credit_Card: CreditCard,
    Uid: string,
    Amount: number,
    Comment: string,
    Date: number,
    Currency: string
}