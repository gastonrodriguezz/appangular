
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
  crearTabla(): void {
  let sf: Array<number>;
  sf = add12RandomNumber(sf);
  let pa: Array<number>;
  pa = add12RandomNumber(pa);
  let st: Array<number>;
  st = add12RandomNumber(st);
  let totalTotal = 0; let totalMes = 0; let totalSf = 0;
  let totalPa = 0; let totalSt = 0;
  const months: string[] = ['Enero',
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
  // numero random del 0 al 500
  function randomNumber() {
      return Math.floor(Math.random() * 501);
    }
  // añade 12 elemtentos random a un array
  function add12RandomNumber(a: number[]) {
    for (let i = 0; i < 12; i++) {
      a.push(randomNumber());
    }
    return a;
  }
  // crear tabla
  function myTable() {
    // tslint:disable-next-line: no-shadowed-variable
    let myTable = '<table><tr><thead><th>Mes</th>';
    myTable += '<th>Santa Fe</th>';
    myTable += '<th>Paraná</th>';
    myTable += '<th>Santo Tomé</th>';
    myTable += '<th>Total</th></thead></tr>';
    for (let i = 0; i < months.length; i++) {
        totalMes = sf[i] + pa[i] + st[i];
        myTable += '<tr><td>' + months[i] + '</td>';
        myTable += '<td>' + sf[i] + '</td>';
        myTable += '<td>' + pa[i] + '</td>';
        myTable += '<td>' + st[i] + '</td>';
        myTable += '<td>' + totalMes + '</td></tr>';
        totalSf = totalSf + sf[i];
        totalPa = totalPa + pa[i];
        totalSt = totalSt + st[i];
        totalTotal = totalTotal + totalMes;
    }
    myTable += '<tr><td style=\'font-size:18px;font-weight:lighter;\'>Total</td>';
    myTable += '<td>' + totalSf + '</td>';
    myTable += '<td>' + totalPa + '</td>';
    myTable += '<td>' + totalSt + '</td>';
    myTable += '<td>' + totalTotal + '</td></tr>';
    myTable += '</table>';

    document.write(myTable);
    }

}
}
