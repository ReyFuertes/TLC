import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../models/question.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input()
  public answer: Answer;

  constructor() { }

  ngOnInit(): void { 
    console.log('answers', this.answer);
  }
}
