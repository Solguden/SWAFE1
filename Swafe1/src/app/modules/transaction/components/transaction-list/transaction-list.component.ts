import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/creditcard';
import { Transaction } from 'src/app/models/transaction';
import { CreditCardService } from 'src/app/modules/credit-card/credit-card.service';
import { TransactionService } from '../../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor(
    private transactionService: TransactionService,
    private creditCardService: CreditCardService,
    private router: Router) { }

  transactionList!: Array<Transaction>
  filteredTransactions!: Array<Transaction>
  creditCards!: Array<CreditCard>

  selectedOption: number = -1;

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(res => {
      this.transactionList = res
      this.filteredTransactions = res
    })
    this.creditCardService.getCreditCards().subscribe(res => {
      this.creditCards = res
    })
  }

  filter() {
    if(Number(this.selectedOption) === -1) {
      this.filteredTransactions = this.transactionList
    }
    else {
      this.filteredTransactions = this.transactionList.filter(trans => trans.credit_card.card_number === Number(this.selectedOption))
    }
  }

  goToOverview(e: string | undefined) {
    this.router.navigate([`transaction/overview/${e}`])
  }

}
