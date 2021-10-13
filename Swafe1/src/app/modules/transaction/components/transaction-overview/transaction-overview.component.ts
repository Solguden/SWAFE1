import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/creditcard';
import { Transaction } from 'src/app/models/transaction';
import { CreditCardService } from 'src/app/modules/credit-card/credit-card.service';
import { TransactionService } from '../../transaction.service';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css']
})
export class TransactionOverviewComponent implements OnInit {

  id: string | null = ""
  newTransaction: boolean = true
  transaction!: Transaction
  creditCards$!: Observable<CreditCard[]>

  transactionForm = this.formBuilder.group({
    credit_card: ['-1'],
    amount: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
    currency: ['', Validators.required],
    comment: [''],
    date: ['', Validators.required]
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CreditCardService,
    private transactionService: TransactionService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('uid')
    this.transactionService.getTransactions().subscribe(res => {
      var specificTransaction = res.find(t => t.uid === this.id)
      if(specificTransaction) {
        this.newTransaction = false
        this.transaction = specificTransaction
        var convertedDate = new Date(this.transaction.date).toString
        this.transactionForm.patchValue({
          credit_card: this.transaction.credit_card.card_number,
          amount: this.transaction.amount.toFixed(2),
          currency: this.transaction.currency,
          comment: this.transaction.comment
        })
      }
    })

    this.creditCards$ = this.cardService.getCreditCards()
  }

  deleteTransaction(transaction: Transaction) {

  }

  saveTransaction(transaction: Transaction) {
    
  }

}
