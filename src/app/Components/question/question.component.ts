import { Component, Input } from '@angular/core';
import { Question } from 'src/app/Models/Question';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  @Input()
  question: Question|any;
  constructor() { }
}
