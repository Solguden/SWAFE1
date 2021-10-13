import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponent } from './components/credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './components/credit-card-list-item/credit-card-list-item.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
    CreditCardDetailComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreditCardListComponent
  ]
})
export class CreditCardModule { }
