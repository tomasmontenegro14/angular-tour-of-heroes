import { Component, OnInit , Input } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  @Input() usuario : User; 

  constructor() { }

  ngOnInit() {
  }

}
