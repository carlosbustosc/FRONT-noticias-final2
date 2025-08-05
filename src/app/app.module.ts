import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/*----usar http----*/
import { HttpClientModule } from "@angular/common/http"


/*---formularios template----*/
import { FormsModule } from "@angular/forms"



/*-------componentes------*/
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ResultadoNoticiasComponent } from './components/resultado-noticias/resultado-noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    SpinnerComponent,
    ResultadoNoticiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
