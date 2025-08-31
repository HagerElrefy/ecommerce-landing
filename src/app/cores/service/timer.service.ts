import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timeLeft = signal(0);
  private intervalId?: any;
  constructor() { }

  start(seconds: number) {
    // this.stop();

    this.timeLeft.set(seconds);

    this.intervalId = setInterval(() => {
      const current = this.timeLeft();
      if (current > 0) {
        this.timeLeft.set(current - 1);
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    this.timeLeft.set(0);
  }

}
