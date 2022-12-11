import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-seleccion',
  templateUrl: './menu-seleccion.page.html',
  styleUrls: ['./menu-seleccion.page.scss'],
})
export class MenuSeleccionPage implements OnInit {

  pageTitle = 'TellevoApp';
  isNotHome = true;
  constructor() { }

  ngOnInit() {
  }

}
