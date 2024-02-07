import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListaComponent } from './heroes/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
