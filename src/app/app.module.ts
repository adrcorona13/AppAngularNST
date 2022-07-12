import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './Components/question/question.component';
import { TimerComponent } from './Components/timer/timer.component';
import { StepBarComponent } from './Components/step-bar/step-bar.component';
import { AnswerComponent } from './Components/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TimerComponent,
    StepBarComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
