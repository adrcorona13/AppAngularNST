import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input()
  timeLeft: number|any = 5;
  interval: any;

  @Output()
  timerEnds = new EventEmitter<boolean>();

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
        alert("Time Over!!");
        this.timerEnds.emit(true);
      } else {
        this.timeLeft -= 1;
      }
    },1000)
  }

  finishTimer(){
    clearInterval(this.interval);
  }
}
