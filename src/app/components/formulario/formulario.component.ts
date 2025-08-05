import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    
  /*---de un componente hijo a padre------*/
  @Output() parametrosSeleccionados = new EventEmitter();
/*---de un componente hijo a padre------*/


  categoriaSeleccionada = "health";
  paisSeleccionado = 'co'

  datosCategoria:any[] = [
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
    { value: 'entertainment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'technology', nombre: 'Tecnología'},

  ]

  datosPais:any[] = [
    { value: 'ar', nombre: 'Argentina'},
    { value: 'br', nombre: 'Brasil'}, 
    { value: 'fr', nombre: 'Francia'},
    { value: 'hu', nombre: 'Hungria'},
    { value: 'mx', nombre: 'Mexico'},
    { value: 'gb', nombre: 'Reino Unido'},
    { value: 'co', nombre: 'Colombia'},


  ]

  constructor() { }

  ngOnInit(): void {

  }

  verNoticia(){
    
  



    const Parametros:any = {
      
      categoria : this.categoriaSeleccionada,
      pais:       this.paisSeleccionado
      
    }
  

    this.parametrosSeleccionados.emit( Parametros );
    
  }

}
