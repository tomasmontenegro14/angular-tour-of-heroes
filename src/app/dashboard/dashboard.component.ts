import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios: User[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }


  getUsuarios(): void {
    this.usuarioService.getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios.slice(1,5));
  }

}
