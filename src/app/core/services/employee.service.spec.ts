import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';
import { environment } from 'src/environments/environment';
import { HttpEmployeeTaskResponse, HttpUserResponse } from '../interfaces';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.baseAPI}/users`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve getEmployees API via GET', () => {
    const responseData: HttpUserResponse[] = [{
      id: 10,
      name: 'Test',
      username: 'testName',
      email: 'test@gmail.com',
      address: {
        street: 'street',
        suite: 'string',
        city: 'string',
        zipcode: 'string',
        geo: {
          lat: 'string',
          lng: 'string'
        },
      },
      phone: '1544-5487-54',
      website: 'string',
      company: {
        name: 'Company',
        catchPhrase: 'string',
        bs: 'string'
      }
    }];
    service.getEmployees().subscribe((data) => {
      expect(data).toEqual(responseData);
      expect(data.length).toBe(1);
    });
    const request = httpMock.expectOne(apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(responseData);
  });

  it('should retrieve getTasksByEmployee API via GET', () => {
    const reqUserId = 10;
    const responseData: HttpEmployeeTaskResponse[] = [{
      id: 101,
      userId: reqUserId,
      title: 'Task title',
      completed: false,
    }];
    service.getTasksByEmployee(reqUserId).subscribe((data) => {
      expect(data).toEqual(responseData);
      expect(data.length).toBe(1);
    });
    const taskAPIUrl = `${apiUrl}/${reqUserId}/todos`
    const request = httpMock.expectOne(taskAPIUrl);
    expect(request.request.method).toBe('GET');
    request.flush(responseData);
  });
});
