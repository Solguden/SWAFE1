import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  rootUrl = `http://localhost:3000`
  constructor(private http:HttpClient) { }

  getTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`)
  }

  postTransaction(transaction:Transaction): Observable<Transaction[]>{
    return this.http.post<Transaction[]>(`${this.rootUrl}/transactions`,{
      credit_card: transaction.credit_card,
      uid: transaction.uid,
      amount: transaction.amount,
      comment: transaction.comment,
      date: transaction.date,
      currency: transaction.currency
    })
  }

  deleteTransaction(transaction_uid:number): Observable<Transaction[]>{
    return this.http.delete<Transaction[]>(`${this.rootUrl}/transactions/${transaction_uid}`)
  }

  generateTransaction(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions/generate`)
  }
}
