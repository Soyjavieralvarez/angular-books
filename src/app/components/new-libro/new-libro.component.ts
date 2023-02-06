import { ILibro } from './../../../models/ilibro';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-libro',
  templateUrl: './new-libro.component.html',
  styleUrls: ['./new-libro.component.scss']
})
export class NewLibroComponent implements OnInit {

  @Output() public altavoz = new EventEmitter<ILibro>();

  constructor () { }

  ngOnInit(): void {
  }

  public libro!: ILibro;

  crearNuevoLibro(titulo:string, autor:string, imagen:string,): void {
    
    this.libro = {
      titulo:titulo,
      autor: autor,
      imagen: imagen,
    }

    this.altavoz.emit(this.libro);

  }
}
