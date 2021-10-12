import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from 'src/app/models/creditcard';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.css']
})
export class CreditCardDetailComponent implements OnInit {

  creditCard!: CreditCard

  constructor(private activatedRoute: ActivatedRoute, private cardService:CreditCardService) { } //@Inject(CREDITCARDS) private creditCards

  ngOnInit(): void {
    var number = Number(this.activatedRoute.snapshot.paramMap.get('card_number'))
    console.log(number)
    this.cardService.getCreditCards().subscribe(res => {
      var list = res
      var gaming = list.find(c => c.card_number === number)
      if(gaming){
        this.creditCard = gaming
        console.log(this.creditCard)
      }
    })
    
    // this.activatedRoute.data.subscribe(d => console.log(d))
    // let x = this.activatedRoute.snapshot.paramMap.get('data')
    //this.activatedRoute.paramMap.subscribe(d =>console.log(d))
    
    // this.activatedRoute.queryParams.subscribe(params => console.log(params))

    // this.state$ = this.activatedRoute.paramMap
    // .pipe(map(() => window.history.state))
    // let x = this.activatedRoute.snapshot.params.get()
    // console.log(x)
  }

}
