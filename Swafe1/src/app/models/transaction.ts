import {CreditCard} from './creditcard'

export interface Transaction{
    credit_card: CreditCard,
    uid: string,
    amount: number,
    comment: string,
    date: number,
    currency: string
}