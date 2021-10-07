import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'credit-card',
    loadChildren: () => import('./modules/credit-card/credit-card.module').then(m => m.CreditCardModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./modules/transaction/transaction.module').then(m => m.TransactionModule)
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
