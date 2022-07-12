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
  currentQuestionIndex: number = 1;
  
  newGame: boolean = true;
  gameOver: boolean = false;
  startTimer: boolean = false;

  questions: Question[] = data as Question[];

  getQuestion(): Question|any{
    return this.questions.find(x=> x.index === this.currentQuestionIndex);
  }

  getQuestionIndexes(): number[]{
    return this.questions.map(question => question.index);
  }

  nextQuestion(){
    if (!this.isLastQuestion())
      this.currentQuestionIndex += 1;
  }

  public isLastQuestion() {
    return this.currentQuestionIndex == this.questions.length;
  }

  previousQuestion(){
    if (this.isFirstQuestion())
    this.currentQuestionIndex -= 1;
  }

  public isFirstQuestion(){
    return this.currentQuestionIndex > 1
  }

  startGame(){
    this.startTimer = true;
    this.newGame = false;
    this.gameOver = false;
  }

  finishGame(){
    this.startTimer = false;
    this.newGame = true;
    this.gameOver = true;
  }

  displayResults(){
    this.gameOver = true;
    this.newGame = false;
    this.startTimer = false;
  }

  printQuestions(){
    console.log("preguntas", this.questions)
  }
  
}
