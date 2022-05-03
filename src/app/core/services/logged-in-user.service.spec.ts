import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoggedInUserService } from './logged-in-user.service';

describe('LoggedInUserService', () => {
  let service: LoggedInUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
    });
    service = TestBed.inject(LoggedInUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('object should be created', () => {
    expect(service.loggedInUserDetail).toBeDefined();
    expect(service.isLoggedIn).toBeDefined();
  });
});
