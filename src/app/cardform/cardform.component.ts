import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

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
    expiration: new DateFormControl(null, [
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

  ResetForm() {
    this.cardForm.reset();
  }

  get nameControl() {
    return this.cardForm.get('name') as FormControl;
  }
  get cardNumberControl() {
    return this.cardForm.get('cardNumber') as FormControl;
  }
  get expirationControl(): DateFormControl {
    const control = this.cardForm.get('expiration');
    if (control instanceof DateFormControl) {
      return control;
    } else {
      throw new Error('Expiration control is not an instance of DateFormControl');
    }
  }
  get securityCodeControl() {
    return this.cardForm.get('securityCode') as FormControl;
  }


}
