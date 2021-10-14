import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../credit-card.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/models/creditcard';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {

  newCreditCard!: CreditCard
  
  creditCardForm = this.formbuilder.group({
    card_number: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(16), Validators.required]], //
    cardholder_name: ['', Validators.required],
    csc_code: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(3), Validators.required]],
    expiration_date_month: ['', [Validators.min(1), Validators.max(12), Validators.required]],
    expiration_date_year: ['', [Validators.min(1), Validators.max(31), Validators.required]],
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

    this.newCreditCard = this.creditCardForm.value
    console.log(this.newCreditCard)

    this.cardService.postCreditCards(this.newCreditCard)
	} 
}
