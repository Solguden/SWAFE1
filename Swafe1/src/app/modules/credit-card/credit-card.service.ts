import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from 'src/app/models/creditcard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  rootUrl = `http://localhost:3000`
  
  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<CreditCard[]>{
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`)
  }

  postCreditCards(card:CreditCard): Observable<CreditCard[]>{
    return this.http.post<CreditCard[]>(`${this.rootUrl}/credit_cards`,{
      Card_Number: card.Card_Number,
      Csc_Code: card.Csc_Code,
      Cardholder_Name: card.Cardholder_Name,
      Expiration_Date_Month: card.Expiration_Date_Month,
      Expiration_Date_Year: card.Expiration_Date_Year,
      Issuer: card.Issuer
    })
  }

  deleteCreditCards(cardnumber:number): Observable<CreditCard[]>{
    return this.http.delete<CreditCard[]>(`${this.rootUrl}/credit_cards/${cardnumber}`)
  }

}
