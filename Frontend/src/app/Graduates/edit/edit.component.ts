import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Graduates } from 'src/app/Model/Graduates';
import { ServiceService } from 'src/app/Service/service.service';
interface Course{
  value: string;
  viewValue: string;
}

interface Sex{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  graduates: Graduates = new Graduates;
  selectedCourse: string = "";
  selectedSex: string = "Males";
  //selectedYearDate: Date;

  courses: Course[] = [
    {value: 'Engineering Sciences', viewValue: 'Engineering Sciences'},
    {value: 'Humanities & Social Sciences', viewValue: 'Humanities & Social Sciences'},
    {value: 'Natural, Physical & Mathematical Sciences', viewValue: 'Natural, Physical & Mathematical Sciences'},
    {value: 'Business & Administration', viewValue: 'Business & Administration'},
    {value: 'Information Technology', viewValue: 'Information Technology'},
    {value: 'Education', viewValue: 'Education'},
    {value: 'Health Sciences', viewValue: 'Health Sciences'},
    {value: 'Architecture & Building', viewValue: 'Architecture & Building'},
    {value: 'Applied Arts', viewValue: 'Applied Arts'},
    {value: 'Law', viewValue: 'Law'},
    {value: 'Medicine', viewValue: 'Medicine'},
    {value: 'Mass Communication', viewValue: 'Mass Communication'},
    {value: 'Dentistry', viewValue: 'Dentistry'}
  ];

  genres: Sex[] = [
    {value: 'Males', viewValue: 'Males'},
    {value: 'Females', viewValue: 'Females'},
  ]

  constructor(private router:Router, private service:ServiceService) { 
  }

  ngOnInit(): void {
    this.graduates.quantity = 0;
    this.courses.sort(((a, b) => a.value < b.value ? -1 : (a.value > b.value ? 1 : 0)))
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getGraduatesById(Number(id))
    .subscribe(data=>{
      //console.log(data);
      this.graduates = data;
      this.selectedSex = data.sex;
      this.selectedCourse = data.type_of_course;
    })
  }

  Actualizar(){
    this.graduates.sex = this.selectedSex;
    this.graduates.type_of_course = this.selectedCourse;
    
    this.service.updateGraduates(this.graduates)
    .subscribe(data => {
      this.graduates = data;
      alert("Se actualizo exitosamente!!");
      this.router.navigate(["listar"]);
    })
  }
}
