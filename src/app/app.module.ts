import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoClientesComponent } from './body/listado-clientes/listado-clientes.component';
import { TablaComponent } from './tabla/tabla.component';
import { ListaSucursalComponent } from './body/lista-sucursal/lista-sucursal.component';
import { ArbolNavidadComponent } from './body/arbol-navidad/arbol-navidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListadoClientesComponent,
    TablaComponent,
    ListaSucursalComponent,
    ArbolNavidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
