import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Graduates } from 'src/app/Model/Graduates';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  graduates : Graduates = new Graduates();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getGraduatesById(Number(id))
    .subscribe(data=>{
      //console.log(data);
      this.graduates = data;
    })
  }

  Actualizar(){
    this.service.updateGraduates(this.graduates)
    .subscribe(data => {
      this.graduates = data;
      alert("Se actualizo exitosamente!!");
      this.router.navigate(["listar"]);
    })
  }
}
