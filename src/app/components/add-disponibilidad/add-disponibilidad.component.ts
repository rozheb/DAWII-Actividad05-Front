import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibildad } from 'src/app/models/disponibildad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  listaCiclo: Ciclo[] = [];

  listaUsuario: Usuario[] = [];

  disponibilidad : Disponibildad ={
    horaInicio: "HH:mm:ss",
    horaFin: "HH:mm:ss", 
    dia: "dia de la semana",
    ciclo:{
      idCiclo:0
    },
    usuario:{
      idUsuario:0
    }
  }

  constructor(
    private cicloService: CicloService,
    private usuarioService: UsuarioService,
    private disponibilidadService: DisponibilidadService 
  ) {
    this.cicloService.listaCiclo().subscribe(
      ciclo => {
        this.listaCiclo = ciclo;
      }
    );
    this.usuarioService.listaUsuario().subscribe(
      usuario =>{
        this.listaUsuario = usuario;
      }
    );
    }

  registraDisponibilidad(){
    console.log(" >>> registraDisponiblidad()");
    console.log(this.disponibilidad)

    this.disponibilidadService.resgistrarDisponibilidad(this.disponibilidad).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
