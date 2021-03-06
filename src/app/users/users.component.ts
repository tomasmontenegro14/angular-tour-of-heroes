import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  usuarios: User[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }



  getUsuarios(): void {
    this.usuarioService.getUsuarios()
        .subscribe(usuarios => this.usuarios = usuarios);
  }
}
