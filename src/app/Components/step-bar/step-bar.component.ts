import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.css']
})
export class StepBarComponent implements OnInit {

  @Input()
  questionIndexes: number[]|any;

  @Input()
  currentQuestion: number|any;

  @Output()
  currentQuestionChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.questionIndexes);
  }

  onClick(index: number){
    console.log(index);
    
    this.currentQuestion = index;
    this.currentQuestionChange.emit(this.currentQuestion);
  }
}
