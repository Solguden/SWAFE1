import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';



@NgModule({
  declarations: [
    TransactionListItemComponent,
    TransactionListComponent,
    TransactionOverviewComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
