import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.css']
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction!: Transaction

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOverview(e: string | undefined) {
    this.router.navigate([`transaction/overview/${e}`])
  }

}
