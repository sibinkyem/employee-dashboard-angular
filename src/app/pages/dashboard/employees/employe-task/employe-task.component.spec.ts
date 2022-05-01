import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeTaskComponent } from './employe-task.component';

describe('EmployeTaskComponent', () => {
  let component: EmployeTaskComponent;
  let fixture: ComponentFixture<EmployeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeTaskComponent ]
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
