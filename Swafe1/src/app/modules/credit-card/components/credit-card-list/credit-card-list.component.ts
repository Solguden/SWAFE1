import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {

  constructor(private cardService:CreditCardService) { }

  ngOnInit(): void {
    this.cardService.getCreditCards().subscribe(res => {
      console.log(res)
    })
  }

}
