import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/creditcard';

@Component({
  selector: 'app-credit-card-list-item',
  templateUrl: './credit-card-list-item.component.html',
  styleUrls: ['./credit-card-list-item.component.css']
})
export class CreditCardListItemComponent implements OnInit {
  @Input() creditCard!: CreditCard
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goToDetails(e:number){
    console.log(e)
    this.router.navigate([`/detail/${e}`])
  }
}
