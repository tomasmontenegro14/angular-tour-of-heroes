import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { USUARIOS } from './mock-users'
import {MessageService } from './message.service';

@Injectable()
export class UsuarioService {

  constructor(private messageService : MessageService) { }

  getUsuarios(): Observable<User[]> {
    this.messageService.add('Usuario service: fetched usuarios');
    return of(USUARIOS);
  }

}
