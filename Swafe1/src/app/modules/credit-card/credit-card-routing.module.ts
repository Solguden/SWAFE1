import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CreditCardAddComponent } from './components/credit-card-add/credit-card-add.component';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardAddComponent
  },
  {
    path: 'detail',
    component: CreditCardDetailComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
