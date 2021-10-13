import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionOverviewComponent } from './components/transaction-overview/transaction-overview.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransactionListItemComponent,
    TransactionListComponent,
    TransactionOverviewComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }
