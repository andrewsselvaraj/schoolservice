import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl = 'http://efreelearndb.cfapps.io/api/v1/schools';

  constructor(private http: HttpClient) { }
   getSchoolsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}