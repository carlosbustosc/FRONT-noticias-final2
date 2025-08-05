import { Component } from '@angular/core';

/*---conectar servicio---*/
import { NoticiasService } from './servicios/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'noticias';
  
  resultadoNoticias:any[] = []

  
  constructor(private conectarServicio: NoticiasService){
  }

  buscarNoticias(parametrosSeleccionados:any){
      
    console.log( parametrosSeleccionados );
    
    this.conectarServicio.getBuscarNoticia( parametrosSeleccionados )
        .subscribe( (resp:any) => {
          console.log(resp.articles);

          this.resultadoNoticias = resp.articles;

        },)

  }

}

