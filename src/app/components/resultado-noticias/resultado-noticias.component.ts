import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-noticias',
  templateUrl: './resultado-noticias.component.html',
  styleUrls: ['./resultado-noticias.component.css']
})
export class ResultadoNoticiasComponent implements OnInit {
  
  @Input() listNoticiasHijo:any

  constructor() { }

  ngOnInit(): void {
  }

}
