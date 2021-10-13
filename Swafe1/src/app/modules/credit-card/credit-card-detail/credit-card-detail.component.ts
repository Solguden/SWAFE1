import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from 'src/app/models/creditcard';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from '../../transaction/transaction.service';
import { CreditCardService } from '../credit-card.service';
import { filter } from 'rxjs/operators'
@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.css']
})
export class CreditCardDetailComponent implements OnInit {

  creditCard!: CreditCard
  transactionList!: Transaction[]

  constructor(
    private activatedRoute: ActivatedRoute, 
    private cardService: CreditCardService,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    var number = Number(this.activatedRoute.snapshot.paramMap.get('card_number'))
    console.log(number)
    this.cardService.getCreditCards().subscribe(res => {
      var list = res
      var specificCard = list.find(c => c.card_number === number)
      if(specificCard){
        this.creditCard = specificCard
        console.log(this.creditCard)
        this.getTransactions(this.creditCard)
      }
    })
 
    // this.activatedRoute.data.subscribe(d => console.log(d))
    // let x = this.activatedRoute.snapshot.paramMap.get('data')
    //this.activatedRoute.paramMap.subscribe(d =>console.log(d))
    
    // this.activatedRoute.queryParams.subscribe(params => console.log(params))

    // this.state$ = this.activatedRoute.paramMap
    // .pipe(map(() => window.history.state))
    // let x = this.activatedRoute.snapshot.params.get()
    // console.log(x)
  }

  getTransactions(card: CreditCard) {
    this.transactionService.getTransactions().subscribe(res => {
      var list = res
      var specificTransactions = list.filter(c => c.credit_card.card_number === card.card_number) //(c => c.credit_card === card)
      // console.log(specificTransactions)
      if(specificTransactions) {
        this.transactionList = specificTransactions
        console.log(this.transactionList)
      }
    })
  }

  deleteCard(card: CreditCard) {
    console.log(card)
    this.cardService.deleteCreditCards(card.card_number).subscribe(res => {
      console.log(res)
      // Lav pop-up vindue?
      // Redirect til home?
    })
  }
}
