import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Graduates } from 'src/app/Model/Graduates';
import {ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  graduatesList: Graduates[] = new Array<Graduates>();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getGraduates()
    .subscribe(data=>{this.graduatesList = data})
  }

  Editar(graduates: Graduates){
    localStorage.setItem("id", graduates.id.toString());
    this.router.navigate(["edit"])
  } 

  Delete(graduates: Graduates){
    if(confirm("Esta seguro que desea eliminar el dato con ID = "+ graduates.id)) {
      this.service.deleteGraduates(graduates)
      .subscribe(data =>{
        this.graduatesList = this.graduatesList.filter(p=>p!=graduates)
        alert("Se ha eliminado exitosamente...");
      })
    }
  }

}
