import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  loading = signal(false);

  show() {
    this.loading.set(true);
  }

  hide() {
    setTimeout(() => {
      this.loading.set(false);
    }, 1000)
  }
}
