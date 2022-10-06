import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  pageTitle = 'Conversor';
  isNotHome = true;
  constructor() { }

  ngOnInit() {
  }

}
