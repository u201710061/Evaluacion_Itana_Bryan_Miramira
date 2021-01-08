import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent, MyErrorStateMatcher } from './Graduates/add/add.component';
import { EditComponent } from './Graduates/edit/edit.component';
import { ListarComponent } from './Graduates/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ServiceService } from '../app/Service/service.service'
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/material/material.module';
import { ChartsModule, WavesModule,MDBBootstrapModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
    AppComponent,

    AddComponent,
    EditComponent,
    ListarComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

