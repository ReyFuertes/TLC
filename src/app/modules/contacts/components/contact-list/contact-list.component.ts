import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { Store, select } from '@ngrx/store';
import { ContactState } from '../../store/reducers/contacts.reducer';
import { getContactSelector } from '../../store/selectors/contacts.selector';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts$: Observable<Contact[]>;

  constructor(private store: Store<ContactState>) {
    this.contacts$ = this.store.pipe(select(getContactSelector));
    this.contacts$.subscribe(res => console.log(res));
  }


  ngOnInit(): void { }
}
