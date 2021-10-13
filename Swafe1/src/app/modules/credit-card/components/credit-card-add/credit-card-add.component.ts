import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../credit-card.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {

  
  creditCardForm = this.formbuilder.group({
    card_number: [''],
    cardholder_name: [''],
    csc_code: [''],
    expiration_date_month: [''],
    expiration_date_year: [''],
    issuer: ['']
  })

  constructor(
    private cardService: CreditCardService,
    private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cardService.getCreditCards().subscribe(res => {
      console.log(res)
    })
  }

  	
	onSubmit() { 
		console.log(this.creditCardForm.value)
	} 

}
