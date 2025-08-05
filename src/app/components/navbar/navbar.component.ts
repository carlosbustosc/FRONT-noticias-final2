import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() buscador:string; 

  constructor() { 
  
    this.buscador = "";

  }

  ngOnInit(): void {
  }

}
