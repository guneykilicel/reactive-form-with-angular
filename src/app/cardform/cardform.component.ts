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
    cardNumber: new FormControl(null),
    expiration: new FormControl(null),
    securityCode: new FormControl(null),
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
