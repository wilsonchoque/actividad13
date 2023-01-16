import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name !: string;
  currency !: number;
  tipo = ""; 
  element = false;  
  users = [
    {
      "Apellido" : "Arcilla",
      "Casado" : false,
      "Direccion" : "Calle 35 # 43 28",
      "Nombre" : "Diego",
      "Telefono" : 3859720
    },
    {
      "Apellido" : "Bueno",
      "Casado" : false,
      "Direccion" : "CR 16A # 53 28",
      "Nombre" : "Kevin",
      "Telefono" : 31485579954
    },
    {
      "Apellido" : "Palomino",
      "Casado" : false,
      "Direccion" : "CR 25 # 52 33",
      "Nombre" : "Natalia",
      "Telefono" : 32255945555
    }
  ]
  cambioUSD(){
    this.tipo = "USD";
    this.element=true;
  }
  cambioEUR(){
    this.tipo="EUR";
    this.element=true
  }

  condicion = false;

  mostrar(){
    this.condicion = true;
    
  }
  
}
