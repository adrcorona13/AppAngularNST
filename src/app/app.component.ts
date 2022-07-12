import { Component, OnInit } from '@angular/core';
import { Question } from './Models/Question';
import * as data from 'src/app/questions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.questions);
    console.log(this.questions[0]);
  }
  
  title = 'AppAngularNST';
  currentQuestion: number = 0;
  newGame: boolean = true;
  gameOver: boolean = false;
  startTimer: boolean = false;

  questions: Question[] = (data as Question[]);

  getQuestion(): Question{
    return this.questions[this.currentQuestion];
  }

  nextQuestion(){
    if (this.currentQuestion + 1 < this.questions.length)
      this.currentQuestion += 1;
  }

  previousQuestion(){
    console.log(this.currentQuestion)
    if (this.currentQuestion > 0)
    this.currentQuestion -= 1;
  }

  startGame(){
    this.startTimer = true;
    this.newGame = false;
  }

  finishGame(){
    this.startTimer = false;
    this.newGame = true;
  }
}
