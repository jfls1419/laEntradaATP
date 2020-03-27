import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data1 = 'Inserte por favor';
  data2 = 'Inserte por favor';
  title = 'PruebaTPJuanFelipe';
  dato1 = [this.data1];
  datos;
  headers = ["documento", "nombre", "fechaI", "fechaF", "horaI", "horaF", "horaIE", "horaFE"];

  constructor() {
    fetch('datas/info').then(response => response.json())
      .then(datos => {
        console.log(datos);
        this.datos = datos;
      });
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert("llene todos los campos");
    }
    else {
      let dat = form.value;
      this.datos.push(dat);
      fetch('datas/nuevo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dat),
      }).then(response => response.json())
        .then(datos => {
          console.log(datos);
        });
    }
  }

}
