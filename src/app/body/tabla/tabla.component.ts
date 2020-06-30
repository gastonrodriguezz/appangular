

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  sf: Array<number> = [];
  pa: Array<number> = [];
  st: Array<number> = [];
  totalTotal = 0; totalMes = []; totalSf = 0;
  totalPa = 0; totalSt = 0;
  months: Array<string> = [];
constructor() {
  const sf = this.add12RandomNumber(this.sf);
  const pa = this.add12RandomNumber(this.pa);
  const st = this.add12RandomNumber(this.st);
  const months = ['Enero',
                  'Febrero',
                  'Marzo',
                  'Abril',
                  'Mayo',
                  'Junio',
                  'Julio',
                  'Agosto',
                  'Septiembre',
                  'Octubre',
                  'Noviembre',
                  'Diciembre'];
  for (let i = 0; i < months.length; i++) {
    this.totalMes[i] = sf[i] + pa[i] + st[i];
    this.totalSf  = this.totalSf + sf[i];
    this.totalPa = this.totalPa + pa[i];
    this.totalSt = this.totalSt + st[i];
    this.totalTotal = this.totalTotal + this.totalMes [i];
  }
  }
ngOnInit(): void {
  }
  // numero random del 0 al 500
randomNumber() {
    return Math.floor(Math.random() * 501);
    }
  // añade 12 elemtentos random a un array
add12RandomNumber(a: number[]) {
    for (let i = 0; i < 12; i++) {
      a.push(this.randomNumber());
    }
    return a;
  }

}
