import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Graduates } from 'src/app/Model/Graduates';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  graduates: Graduates = new Graduates;
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createGraduates(this.graduates)
    .subscribe(data=>{
      alert("Se agrego con exito!!")
      this.router.navigate(["listar"])
    })
  }

}
