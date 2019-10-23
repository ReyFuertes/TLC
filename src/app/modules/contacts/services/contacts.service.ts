import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  public getContacts(): Observable<Contact[]> {
    return of([
      {
        img: 'ci-1.png',
        name: 'Jenny and Lucy!'
      },
      {
        img: 'ci-2.png',
        name: 'Francis Paramore'
      },
      {
        img: 'ci-3.png',
        name: 'Timika Morris'
      },
      {
        img: 'ci-1.png',
        name: 'Wen Rochin'
      },
      {
        img: 'ci-2.png',
        name: 'Socorro Quinton'
      },
      {
        img: 'ci-3.png',
        name: 'Domonique Constante'
      },
      {
        img: 'ci-1.png',
        name: 'Marilynn Blalock'
      }
    ])
  }


}