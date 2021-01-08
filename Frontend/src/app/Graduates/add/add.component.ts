import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  
  matcher = new MyErrorStateMatcher();

  graduates: Graduates = new Graduates;
  graduatesListByYear : Graduates[] = new Array<Graduates>();
  selectedCourse: string = "" ;
  selectedSex: string = "";
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
    this.courses.sort(((a, b) => a.value < b.value ? -1 : (a.value > b.value ? 1 : 0)))
    this.selectedCourse = this.courses[0].value;
    this.selectedSex = this.genres[0].value;
    this.graduates.quantity = 0;

  }

  Guardar(){
    this.graduates.type_of_course = this.selectedCourse;
    this.graduates.sex = this.selectedSex;
    if( parseInt(this.graduates.year) <1901 || parseInt(this.graduates.year)> 2020)
    {
      alert("El año debe estar entre 1901 y 2020")
      return;
    }
    console.log(this.graduatesListByYear)
    console.log(this.graduates)
    this.service.getGraduatesByYear(parseInt(this.graduates.year))
    .subscribe(data=>{
      this.graduatesListByYear = data
      for (let index = 0; index < this.graduatesListByYear.length; index++) {
        const element = this.graduatesListByYear[index];
        if(element.type_of_course == this.graduates.type_of_course && element.sex == this.graduates.sex)
        {
          alert("Ya existen datos en el año, curso y sexo indicado, por favor use la opcion de actualizar")
          return;
        }
      }

      console.log(this.graduates);
      this.service.createGraduates(this.graduates)
      .subscribe(data=>{
        alert("Se agrego con exito!!")
        this.router.navigate(["listar"])
      })
    })
    
    
  }
}
