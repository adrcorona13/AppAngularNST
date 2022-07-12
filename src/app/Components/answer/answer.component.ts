import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input()
  answers: Answer[] = [];

  @Output()
  answersChange = new EventEmitter<Answer[]>();

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option: Answer){
    this.answers.map(x=> {
      if(x.index === option.index){
        x.isChecked = true;
      } else{
        x.isChecked = false;
      }
    })
    this.answersChange.emit(this.answers);
  }

}
