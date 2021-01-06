import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Graduates } from 'src/app/Model/Graduates';
import { ServiceService } from 'src/app/Service/service.service';


interface Course{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {

  graduates: Graduates = new Graduates;
  selectedCourse: String = "";
  
  courses: Course[] = [
    {value: 'Engineering Sciences', viewValue: 'Engineering Sciences'},
    {value: 'Humanities & Social Sciences', viewValue: 'Humanities & Social Sciences'},
    {value: 'Natural, Physical & Mathematical Sciences', viewValue: 'Natural, Physical & Mathematical Sciences'}
  ];

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.graduates.quantity = 0
  }

  Guardar(){
    this.graduates.type_of_course = this.selectedCourse;
    this.service.createGraduates(this.graduates)
    .subscribe(data=>{
      alert("Se agrego con exito!!")
      this.router.navigate(["listar"])
    })
  }

}
