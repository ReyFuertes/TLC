import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactState } from '../store/reducers/contacts.reducer';
import { Loadcontacts } from '../store/actions/contacts.actions';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent implements OnInit {
  
  constructor(private store: Store<ContactState>) {
    this.store.dispatch(new Loadcontacts());
  }


  ngOnInit(): void { }
}
