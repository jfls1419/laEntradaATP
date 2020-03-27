import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datosrequeridos',
  templateUrl: './datosrequeridos.component.html',
  styleUrls: ['./datosrequeridos.component.scss']
})
export class DatosrequeridosComponent implements OnInit {
  headers ;
  datos;
  constructor() { 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(datos => {
        console.log(datos);
        this.datos=datos;
        this.headers = Object.getOwnPropertyNames(datos[0]);
        console.log(this.headers)
      })
  }

  ngOnInit() {
  }

}
