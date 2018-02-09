import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USUARIOS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  usuario: User = {
    nombres: 'Windend',
    apellidos: 'Storm',
    email: 'windstrom@gmail.com'
  };

  usuarios: User[] = USUARIOS;

  selectedUsuario : User;

  constructor() { }

  ngOnInit() {
  }

  onSelect(usuario: User): void {
    this.selectedUsuario = usuario;
  };
}
