import { Component, OnInit } from '@angular/core';
import { NewIdeaQuestion } from '../models/discussion-new-idea.model';

@Component({
  selector: 'app-discussion-new-idea',
  templateUrl: './discussion-new-idea.component.html',
  styleUrls: ['./discussion-new-idea.component.scss']
})
export class DiscussionNewIdeaComponent implements OnInit {
  public questionData: NewIdeaQuestion[] = [
    {
      title: '1. What is your idea that you wish you could implement?',
      description: 'Brief description of the idea'
    },
    {
      title: '2. What is your question you wish to collaborate on?',
      note: `(i.e. who is the user that you would help most with your idea and how would this benefit them, as an example “How might we help our frontline team deliver better customer service?”)`,
      description: `Label`
    },
    {
      title: '3. Who are your extreme users?',
      note: '(i.e. who is most experienced and inexperienced with my topic)',
      description: 'Label'
    }
  ]
  constructor() { }

  ngOnInit(): void { }
}
