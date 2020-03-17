import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, Country } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string = '../../assets/users.json';

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countryUrl:string = '../../assets/countries.json';

  constructor(private http:HttpClient) { }

  getCountries():Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }
}
