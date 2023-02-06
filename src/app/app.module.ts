import { LibrosComponent } from './components/libros/libros.component';
import { NewLibroComponent } from './components/new-libro/new-libro.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    NewLibroComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
