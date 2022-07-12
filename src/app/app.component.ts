import { Component, OnInit } from '@angular/core';
import { Question } from './Models/Question';
import data from 'src/app/questions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  ngOnInit(): void {
    this.questions
  }
  
  title = 'AppAngularNST';
  currentQuestion: number = 1;
  newGame: boolean = true;
  gameOver: boolean = false;
  startTimer: boolean = false;

  questions: Question[] = data as Question[];

  getQuestion(): Question|any{
    return this.questions.find(x=> x.index === this.currentQuestion);
  }

  getQuestionIndexes(): number[]{
    return this.questions.map(question => question.index);
  }

  nextQuestion(){
    if (!this.isLastQuestion())
      this.currentQuestion += 1;
  }

  public isLastQuestion() {
    return this.currentQuestion == this.questions.length;
  }

  previousQuestion(){
    if (this.isFirstQuestion())
    this.currentQuestion -= 1;
  }

  public isFirstQuestion(){
    return this.currentQuestion > 1
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
