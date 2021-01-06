
import {TestBed} from '@angular/core/testing'
import {ServiceService} from './service.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ServiceService', () => {

  const URL = 'http://localhost:8080/';

  const graduateInfo = {
    id: 14,
    year:'2014',
    sex: 'Males',
    type_of_course:'Algebra',
    quantity: 20 
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    })  
  });;

  it('shoud get profile data of graduate by id',()=>{
      const service = TestBed.inject(ServiceService)
      const http = TestBed.inject(HttpTestingController)
      let graduatesResponse:any;

      service.getGraduatesById(1).subscribe((response)=>{
        graduatesResponse = response;
      })
      http.expectOne(URL + "graduatesById/1").flush(graduateInfo);
      expect(graduatesResponse).toEqual(graduateInfo);
  })
});

