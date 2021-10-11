import { Component, OnInit, Input } from '@angular/core';
import { CreditCard } from 'src/app/models/creditcard';

@Component({
  selector: 'app-credit-card-list-item',
  templateUrl: './credit-card-list-item.component.html',
  styleUrls: ['./credit-card-list-item.component.css']
})
export class CreditCardListItemComponent implements OnInit {
  @Input() creditCard!: CreditCard
  constructor() { }

  ngOnInit(): void {
    console.log(this.creditCard)
  }

  goToDetails(e:number){
    console.log(e)
  }
}
