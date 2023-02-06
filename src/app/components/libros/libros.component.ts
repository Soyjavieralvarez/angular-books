import { ILibro } from './../../../models/ilibro';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})


export class LibrosComponent {

  @Input() public libros!: ILibro[];
  @Input() public librosFiltered!: ILibro[];

  buscar(value: string) {

    this.librosFiltered = this.libros.filter((libro: ILibro) => libro.titulo.toLowerCase().includes(value.toLowerCase()));
  }
}
