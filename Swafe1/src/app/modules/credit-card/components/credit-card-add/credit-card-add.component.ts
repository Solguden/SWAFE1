import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../credit-card.service';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {

  constructor(private cardService:CreditCardService) { }

  ngOnInit(): void {
    this.cardService.getCreditCards().subscribe(res => {
      console.log(res)
    })
  }

}
