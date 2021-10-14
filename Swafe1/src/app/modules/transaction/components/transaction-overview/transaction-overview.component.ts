import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  creditCardError: boolean = false
  newTransaction: boolean = true
  transaction!: Transaction
  creditCard!: CreditCard
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
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('uid')
    this.transactionService.getTransactions().subscribe(res => {
      let specificTransaction = res.find(t => t.uid === this.id)
      if(specificTransaction) {
        this.newTransaction = false
        this.transaction = specificTransaction
        let convertedDate = new Date(this.transaction.date).toString
        this.transactionForm.patchValue({
          credit_card: this.transaction.credit_card.card_number,
          amount: this.transaction.amount.toFixed(2),
          currency: this.transaction.currency,
          comment: this.transaction.comment
        })
        this.transactionForm.get('credit_card')?.disable()
        this.transactionForm.get('amount')?.disable()
        this.transactionForm.get('currency')?.disable()
        this.transactionForm.get('comment')?.disable()
        this.transactionForm.get('date')?.disable()
      }
    })

    this.creditCards$ = this.cardService.getCreditCards()
  }

  deleteTransaction(transaction: Transaction) {
    if(transaction.uid) {
      this.transactionService.deleteTransaction(transaction.uid).subscribe()
    }

    this.router.navigate(['transaction/'])
  }

  saveTransaction() {
    if(this.transactionForm.get('credit_card')?.value === '-1') {
      this.creditCardError = true
      this.transactionForm.markAllAsTouched()
      return
    }

    if(this.transactionForm.valid) {
      let cardNumber = +this.transactionForm.get('credit_card')?.value
      this.cardService.getCreditCards().subscribe(res => {
        let specificCard = res.find(c => c.card_number === cardNumber)
        if(specificCard) {
          this.creditCard = specificCard

          let transaction: Transaction = {
            credit_card: this.creditCard,
            amount: +this.transactionForm.get('amount')?.value,
            comment: this.transactionForm.get('comment')?.value,
            date: new Date(this.transactionForm.get('date')?.value).getTime(),
            currency: this.transactionForm.get('currency')?.value
          }
    
          this.transactionService.postTransaction(transaction).subscribe(t => {
            this.router.navigate(['transaction/'])
          })
        }
      })
    }
    else {
      this.transactionForm.markAllAsTouched()
    }
  }

  get amount(): FormControl {
    return this.transactionForm.get('amount') as FormControl
  }

  get currency(): FormControl {
    return this.transactionForm.get('currency') as FormControl
  }

  get date(): FormControl {
    return this.transactionForm.get('date') as FormControl
  }

  checkCreditCardValue() {
    if(this.transactionForm.get('credit_card')?.value !== '-1') {
      this.creditCardError = false
    }
  }

}
