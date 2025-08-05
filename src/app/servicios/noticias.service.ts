import { Injectable } from '@angular/core';

/*---usar http----*/
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient ) { }


  getBuscarNoticia( parametros:any ){
  
  console.log(parametros)

    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=${ parametros.categoria }&apiKey=abe71fc6f2fa4ddea9c0b5ca21fcb020`)


    //return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=abe71fc6f2fa4ddea9c0b5ca21fcb020`)


   



  }
}
