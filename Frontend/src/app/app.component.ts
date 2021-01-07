import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  title: string='Graduates From University First Degree Courses By Type Of Course';
  constructor(private router:Router){}

  ngOnInit(): void {
    //this.router.navigate(["listar"]);
  }

  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
}
