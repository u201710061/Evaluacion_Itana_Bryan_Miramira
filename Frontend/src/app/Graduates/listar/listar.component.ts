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
  graduatesListByYear : Graduates[] = new Array<Graduates>();

  quantityArray : number[] = new Array<number>();
  coursesArray : string[] = new Array<string>(); 

  years : number[] = new Array<number>();

  yearSelected: number = 2014;
  constructor(private service:ServiceService, private router:Router) { }

  emptyResults : boolean = false;

  ngOnInit(): void {

    for (let i = 1901; i < 2020; i++) {
      this.years.push(i);
      
    }
    this.yearSelected = 2014;
    this.service.getGraduates()
    .subscribe(data=>{this.graduatesList = data})


    this.service.getGraduatesByYear(this.yearSelected).subscribe(data=>{
      this.graduatesListByYear = data; 
      for (let index = 0; index < this.graduatesListByYear.length; index++) {
        const element = this.graduatesListByYear[index];
        if(this.coursesArray.includes(element.type_of_course))
        {
          let indice = this.coursesArray.indexOf(element.type_of_course) 
          this.quantityArray[indice] += element.quantity;
          continue;
        }
        this.quantityArray.push(this.graduatesListByYear[index].quantity);
        this.coursesArray.push(this.graduatesListByYear[index].type_of_course);

      }
      this.chartDatasets =  [
        { data: this.quantityArray, label: 'Graduates From University First Degree Courses By Type Of Course in' + this.yearSelected }
      ];
      this.chartLabels = this.coursesArray;
      })


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

  ReDrawChart(){


    this.coursesArray = [];
    this.quantityArray = [];

    this.service.getGraduatesByYear(this.yearSelected).subscribe(data=>{
      this.graduatesListByYear = data; 
      for (let index = 0; index < this.graduatesListByYear.length; index++) {
        const element = this.graduatesListByYear[index];
        if(this.coursesArray.includes(element.type_of_course))
        {
          let indice = this.coursesArray.indexOf(element.type_of_course) 
          this.quantityArray[indice] += element.quantity;
          continue;
        }
        this.quantityArray.push(this.graduatesListByYear[index].quantity);
        this.coursesArray.push(this.graduatesListByYear[index].type_of_course);

      }
      this.chartDatasets =  [
        { data: this.quantityArray, label: 'Graduates From University First Degree Courses By Type Of Course in' + this.yearSelected }
      ];
      this.chartLabels = this.coursesArray;

      if(this.graduatesListByYear.length > 0){
        this.emptyResults = false;
      }
      else{
        this.emptyResults = true;
      }  
    })


  }
  
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  

}
