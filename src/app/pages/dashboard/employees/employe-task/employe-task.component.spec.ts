import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeTaskComponent } from './employe-task.component';

describe('EmployeTaskComponent', () => {
  let component: EmployeTaskComponent;
  let fixture: ComponentFixture<EmployeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeTaskComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [HttpClient],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
