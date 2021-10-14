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
    cardholder_name: [''],
    csc_code: [''],
    expiration_date: [''],
    // expiration_date_month: [''],
    // expiration_date_year: [''],
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

    let CC = this.creditCardForm.value
    console.log(CC)

    let newCreditCard: CreditCard = {
      card_number : CC.card_number, 
      cardholder_name : CC.cardholder_name,
      csc_code: CC.csc_code,
      expiration_date_month: CC.expiration_date.month,
      expiration_date_year: CC.expiration_date.year,
      issuer: CC.issuer}

      console.log(newCreditCard)

    // let CC: CreditCard = {card_number = this.creditCardForm}

    // this.cardService.postCreditCards()
	} 



}
