import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/Models/Question';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question|any;

  @Output()
  questionChange = new EventEmitter<Question>();

  constructor() { }

  ngOnInit(){
  }
}
