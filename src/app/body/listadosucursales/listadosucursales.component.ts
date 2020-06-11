import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../classes/sucursal';
import { Mes } from '../../classes/mes';
@Component({
  selector: 'app-listadosucursales',
  templateUrl: './listadosucursales.component.html',
  styleUrls: ['./listadosucursales.component.css']
})
export class ListadosucursalesComponent implements OnInit {
  public listadoSucursales: Array<Sucursal>;
  public Sucursal1: Sucursal;
  public Sucursal2: Sucursal;
  public Sucursal3: Sucursal;
  public Sucursal4: Sucursal;
  public Sucursal5: Sucursal;
  public Meses: Array<Mes>;
  constructor() {
  }
  ngOnInit(): void {
    this.Meses = new Array(
                           new Mes('Enero', 31),
                           new Mes('Febrero', 28),
                           new Mes('Marzo', 31),
                           new Mes('Abril', 30),
                           new Mes('Mayo', 31),
                           new Mes('Junio', 30),
                           new Mes('Julio', 31),
                           new Mes('Agosto', 31),
                           new Mes('Septiembre', 30),
                           new Mes('Octubre', 31),
                           new Mes('Noviembre', 30),
                           new Mes('Diciembre', 31));

    this.Sucursal1 = new Sucursal('Casa matriz', 'Santa Fe', this.add12RandomNumber(new Array));
    this.Sucursal2 = new Sucursal('Sucursal Norte', 'Reconquista', this.add12RandomNumber(new Array));
    this.Sucursal3 = new Sucursal('Sucursal Sur', 'Rosario', this.add12RandomNumber(new Array));
    this.Sucursal4 = new Sucursal('Sucursal Oeste', 'Rafael', this.add12RandomNumber(new Array));
    this.Sucursal5 = new Sucursal('Sucursal Sur 2', 'Rufino', this.add12RandomNumber(new Array));
    this.listadoSucursales = new Array(this.Sucursal1, this.Sucursal2, this.Sucursal3, this.Sucursal4, this.Sucursal5);
  }
  // retorna un numero aleatorio entre 0-200
  randomNumber() {
    return Math.floor(Math.random() * 201);
    }
  // añade 12 elemtentos random a un array
add12RandomNumber(a: number[]) {
    for (let i = 0; i < 12; i++) {
      a.push(this.randomNumber());
    }
    return a;
  }
}
