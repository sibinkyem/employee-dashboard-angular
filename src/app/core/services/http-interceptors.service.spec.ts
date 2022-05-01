import { TestBed } from '@angular/core/testing';

import { HttpInterceptorsService } from './http-interceptors.service';

describe('HttpInterceptorsService', () => {
  let service: HttpInterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
