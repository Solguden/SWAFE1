import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../credit-card.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/models/creditcard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {

  newCreditCard!: CreditCard
  
  creditCardForm = this.formbuilder.group({
    card_number: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(16), Validators.required]],
    cardholder_name: ['', Validators.required],
    csc_code: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(3), Validators.required]],
    expiration_date_month: ['',[Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12), Validators.required]],
    expiration_date_year: ['', [Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(31), Validators.required]],
    issuer: ['']
  })

  constructor(
    private cardService: CreditCardService,
    private formbuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.cardService.getCreditCards().subscribe(res => {
      console.log(res)
    })
  }

	onSubmit() { 
    if(this.creditCardForm.valid){
      this.newCreditCard = this.creditCardForm.value
      console.log(this.newCreditCard)

      let newCard: CreditCard = {
        card_number: +this.creditCardForm.get('card_number')?.value,
        cardholder_name: this.creditCardForm.get('cardholder_name')?.value,
        csc_code: +this.creditCardForm.get('csc_code')?.value,
        expiration_date_month: +this.creditCardForm.get('expiration_date_month')?.value,
        expiration_date_year: +this.creditCardForm.get('expiration_date_year')?.value,
        issuer: this.creditCardForm.get('issuer')?.value
      }

      console.log(newCard)
      this.cardService.postCreditCards(newCard).subscribe(res => {
        this.router.navigate(['/'])
      })
    }
    else {
      this.creditCardForm.markAllAsTouched()
    }
	} 

  get card_number(): FormControl {
    return this.creditCardForm.get('card_number') as FormControl
  }

  get cardholder_name(): FormControl {
    return this.creditCardForm.get('cardholder_name') as FormControl
  }

  get csc_code(): FormControl {
    return this.creditCardForm.get('csc_code') as FormControl
  }

  get expiration_date_month(): FormControl {
    return this.creditCardForm.get('expiration_date_month') as FormControl
  }

  get expiration_date_year(): FormControl {
    return this.creditCardForm.get('expiration_date_year') as FormControl
  }
}
