import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})

export class UsuarioDetalleComponent implements OnInit {

  @Input() usuario: User;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) {}  

  ngOnInit() {
    this.getUsuario();
    // this.getHero();
  }

  getUsuario(): void {
    const nombre :string = this.route.snapshot.paramMap.get('nombre');
    this.usuarioService.getUsuario(nombre).subscribe(user => this.usuario= user);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuarioById(id)
      .subscribe(hero => this.usuario = hero);
  }

  goBack(): void{
    this.location.back();
  }
}







