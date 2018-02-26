import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { USUARIOS } from './mock-users'
import { MessageService } from './message.service';

@Injectable()
export class UsuarioService {

  constructor(private messageService: MessageService) { }

  getUsuarios(): Observable<User[]> {
    this.messageService.add('Usuario service: fetched usuarios');
    return of(USUARIOS);
  }

  getUsuario(name: string): Observable<User> {
    this.messageService.add(`UsuarioService: carga usuario nombre=${name}`);
    return of(USUARIOS.find(usuario => usuario.nombres === name));
  }


  getUsuarioById(id: number): Observable<User> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`UsuarioService: fetched User id=${id}`);
    return of(USUARIOS.find(hero => hero.id === id));
  }

}
