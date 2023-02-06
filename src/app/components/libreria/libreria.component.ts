import { ILibro } from './../../../models/ilibro';
import { Component } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent {

  public listadoLibros: ILibro[] = [
    {
      titulo:"La Colina de Wathership",
      autor:"Richard Adams",
      imagen:"https://m.media-amazon.com/images/I/71oMZjIb0eL.jpg",
    },

    {
      titulo:"Solo una cosa",
      autor:"Gary Keller",
      imagen:"https://m.media-amazon.com/images/I/61NF5rYY9fL.jpg",
    },
    {
      titulo:"El libro de la memoria",
      autor:"Hilde Ostby y Ylva Otsby",
      imagen:"https://imagessl6.casadellibro.com/a/l/t5/96/9788434429796.jpg",
    },
    {
      titulo:"La interrupción",
      autor:"Tony Segarra",
      imagen:"https://imagessl7.casadellibro.com/a/l/t5/97/9788423433797.jpg",
    },
    {
      titulo:"Ágilmente",
      autor:"Estanislao Bachrach",
      imagen:"https://m.media-amazon.com/images/I/41S3ZiQGtTL.jpg",
    },
    {
      titulo:"Fuera de Serie",
      autor:"Malcolm GladWell",
      imagen:"https://m.media-amazon.com/images/I/41016cGioAL.jpg",
    },
    {
      titulo:"El Regalo",
      autor:"Eloy Moreno",
      imagen:"https://m.media-amazon.com/images/I/71Qz2HLSPhL.jpg",
    },
    {
      titulo:"Gestión del tiempo para mortales",
      autor:"Oliver Burkeman",
      imagen:"https://m.media-amazon.com/images/I/71yZK7YMm9L.jpg",
    },
    {
      titulo:"El equilibrio del desequilibrio",
      autor:"Patricia Galdón",
      imagen:"https://m.media-amazon.com/images/I/71FDDBkj0KL.jpg",
    },
    {
      titulo:"Expert Secrets",
      autor:"Russell Brunson",
      imagen:"https://m.media-amazon.com/images/I/51Zb0vYVQYL._SX321_BO1,204,203,200_.jpg",
    },

  ];


  aceptarLibro(libro: ILibro): void {
    this.listadoLibros.push(libro);
    
  }

}
