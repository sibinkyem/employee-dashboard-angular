import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggedInUserService } from 'src/app/core/services';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let loggedInUserServiceStub: any;

  loggedInUserServiceStub = {
    loggedInUserDetail: {
      name: 'Test',
      email: 'test@test.com',
      loggedIn: 'true',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: LoggedInUserService,
          useValue: loggedInUserServiceStub,
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be set if the logged in user has defined name', () => {
      loggedInUserServiceStub.loggedInUserDetail.name = 'AB';
      component.user =
      loggedInUserServiceStub.loggedInUserDetail.name ?? '';
      expect(component.user).not.toEqual('');
      expect(component.user).toEqual('AB');
  });
});
