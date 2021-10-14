import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from 'src/app/models/creditcard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  rootUrl = `http://localhost:3000`

  public selectedCard!: CreditCard
  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<CreditCard[]>{
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`)
  }

  postCreditCards(card:CreditCard): Observable<CreditCard[]>{
    console.log(card)
    return this.http.post<CreditCard[]>(`${this.rootUrl}/credit_cards`,{
      Card_Number: card.card_number,
      Csc_Code: card.csc_code,
      Cardholder_Name: card.cardholder_name,
      Expiration_Date_Month: card.expiration_date_month,
      Expiration_Date_Year: card.expiration_date_year,
      Issuer: card.issuer
    })
  }

  deleteCreditCards(cardnumber:number): Observable<CreditCard[]>{
    return this.http.delete<CreditCard[]>(`${this.rootUrl}/credit_cards/${cardnumber}`)
  }
}
