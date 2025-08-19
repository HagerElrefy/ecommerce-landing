import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  loading = signal(false);

  show() {
    setTimeout(() => {
      this.loading.set(true);
    }, 2000)
  }

  hide() {
    setTimeout(() => {
      this.loading.set(false);
    }, 2000)
  }
}
