import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpEmployeeTaskResponse, HttpUserResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private selectedEmployeeState = new BehaviorSubject({} as HttpUserResponse);
  readonly selectedEmployee$ = this.selectedEmployeeState.asObservable();

  set selectedEmployee(user: HttpUserResponse) {
    this.selectedEmployeeState.next(user);
  }

  get selectedEmployee(): HttpUserResponse {
    return this.selectedEmployeeState.getValue();
  }

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<HttpUserResponse[]> {
    return this.http.get<HttpUserResponse[]>(`${environment.baseAPI}/users`);
  }

  getTasksByEmployee(userId: number): Observable<HttpEmployeeTaskResponse[]> {
    return this.http.get<HttpEmployeeTaskResponse[]>(
      `${environment.baseAPI}/users/${userId}/todos`
    );
  }
}
