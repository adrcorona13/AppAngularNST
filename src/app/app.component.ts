import { Component } from '@angular/core';
import { Question } from './Models/Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppAngularNST';

  questions: Question[] = [
    {
      index: 1,
      text: 'Question 1',
      answers: [
        {
          index: 1,
          text: 'Answer 1',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 2,
          text: 'Answer 2',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 3,
          text: 'Answer 3',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 4,
          text: 'Answer 4',
          isChecked: false,
          isCorrect: false
        },
      ]
    },
    {
      index: 2,
      text: 'Question 2',
      answers: [
        {
          index: 1,
          text: 'Answer 1',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 2,
          text: 'Answer 2',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 3,
          text: 'Answer 3',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 4,
          text: 'Answer 4',
          isChecked: false,
          isCorrect: false
        },
      ]
    },
    {
      index: 3,
      text: 'Question 3',
      answers: [
        {
          index: 1,
          text: 'Answer 1',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 2,
          text: 'Answer 2',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 3,
          text: 'Answer 3',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 4,
          text: 'Answer 4',
          isChecked: false,
          isCorrect: false
        },
      ]
    },
    {
      index: 4,
      text: 'Question 4',
      answers: [
        {
          index: 1,
          text: 'Answer 1',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 2,
          text: 'Answer 2',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 3,
          text: 'Answer 3',
          isChecked: false,
          isCorrect: false
        },
        {
          index: 4,
          text: 'Answer 4',
          isChecked: false,
          isCorrect: false
        },
      ]
    },
  ]
}
