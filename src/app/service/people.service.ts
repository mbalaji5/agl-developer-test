import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, pipe, throwError} from 'rxjs';
import { People } from './people.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  getpeople(): Observable<People[]>
  { 
    var url="http://agl-developer-test.azurewebsites.net/people.json"
    return this.http.get<People[]>(url)
    .pipe(
      catchError(
        err=>{
          return throwError(err);  
        })
      );    
  }

}
