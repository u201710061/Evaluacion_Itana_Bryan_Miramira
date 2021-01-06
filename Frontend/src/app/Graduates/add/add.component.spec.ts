import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddComponent } from './add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      declarations: [AddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should quantity have a value 0', () => {
    const title = fixture.debugElement.query(By.css('#quantity')).nativeElement;
    expect(title.innerHTML).toBe('');
  });*/
});