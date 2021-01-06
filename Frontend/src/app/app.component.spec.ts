import {TestBed, async} from '@angular/core/testing'
import { Router } from '@angular/router';
import {AppComponent} from './app.component'

describe('AppCompomnent', ()=>{
  
  let app: AppComponent;
  let router: Router;
  beforeEach(async(()=>{
    app = new AppComponent(router);
  }))

  it('El titulo debe ser Graduates From University First Degree Courses By Type Of Course', async(()=>{
      expect(app.title).toEqual('Graduates From University First Degree Courses By Type Of Course');
  }))
})

