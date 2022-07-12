import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { Question } from 'src/app/Models/Question';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input()
  questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getAnswer(answers: Answer[], fromUser: boolean): string|any{
    if(fromUser)
    {
      return answers.find(x=> x.isChecked)?.text;
    }else{
      return answers.find(x=> x.isCorrect)?.text;
    }
  }

  isCorrect(answers: Answer[]): boolean{
    return answers.find(x=> x.isChecked)?.index 
            == answers.find(x=> x.isCorrect)?.index;
  }
}
