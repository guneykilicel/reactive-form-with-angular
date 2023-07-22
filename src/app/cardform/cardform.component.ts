import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent {
  cardForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    cardNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2]\/\d{2}$)/),
    ]),
    securityCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  onSubmit() {
    
  }

  get nameControl() {
    return this.cardForm.get('name') as FormControl;
  }
  get cardNumberControl() {
    return this.cardForm.get('cardNumber') as FormControl;
  }
  get expirationControl() {
    return this.cardForm.get('expiration') as FormControl;
  }
  get securityCodeControl() {
    return this.cardForm.get('securityCode') as FormControl;
  }


}
