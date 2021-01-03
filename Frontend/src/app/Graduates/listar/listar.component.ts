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

  graduatesList: Graduates[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getGraduates()
    .subscribe(data=>{this.graduatesList = data})
  }

}
