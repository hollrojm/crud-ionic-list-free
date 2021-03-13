import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];

  constructor() { }

  guardarDatos() {
    // Agregando datos a la base de datos en memoria
    this.usuarios.push({
      nombre: this.nombre,
      apellido: this.apellido,
      celular: this.celular,
      email: this.email

    })
    console.log(this.usuarios);

    // Limpiando datos
    this.nombre = "";
    this.apellido = "";
    this.celular= "";
    this.email="";
  }

  editarDato(index){
    let item = this.usuarios.findIndex(index)





};



  eliminarDatos(index){

    this.usuarios.splice(index, 1)
    console.log(this.usuarios);

}

  }

