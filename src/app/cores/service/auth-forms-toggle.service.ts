import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthFormsToggleService {
  formFlag: boolean = false;
  constructor() { }

  show() {
    this.formFlag = true
  }

  hide() {
    this.formFlag = false
  }
}
