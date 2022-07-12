import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input()
  timeLeft: number|any = 5;
  interval: any;

  constructor() { }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(){
    this.interval = setInterval(() => {     
      if(this.timeLeft === 0) {
        clearInterval(this.interval);
        alert("Time over!!!");
      } else {
        this.timeLeft -= 1;
      }
    },1000)
  }

  finishTimer(){
    clearInterval(this.interval);
  }
}
