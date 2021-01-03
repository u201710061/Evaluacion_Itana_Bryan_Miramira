import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Graduates/add/add.component';
import { EditComponent } from './Graduates/edit/edit.component';
import { ListarComponent } from './Graduates/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
