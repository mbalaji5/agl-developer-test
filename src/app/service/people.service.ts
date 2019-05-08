import { Injectable, OnInit } from '@angular/core';
import { HttpClient   } from '@angular/common/http';
import { Observable, pipe, throwError} from 'rxjs';
import { People } from './people.model';
import { catchError, map, filter } from 'rxjs/operators';
import { AGLUrl } from '../../agl.conf';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private URL = '';
  maleOwnerCat: Array<string>;
  femaleOnerCat: Array<string>;

  constructor(private http: HttpClient) {
    this.URL = AGLUrl.PeopleURL;
    this.maleOwnerCat = new Array<string>();
    this.femaleOnerCat = new Array<string>();
   }

  getpeople(): Observable<People[]> {
    return this.http.get<People[]>(this.URL)
    .pipe(
      map((peopleData: People[] ) => {
          peopleData.forEach(people => {
              if (people.pets) {
                  if (people.gender === 'Male') {
                    people.pets.forEach(pet => {
                        if ( pet.type === 'Cat') {
                        this.maleOwnerCat.push(pet.name);
                        }
                    });
                  } else if (people.gender === 'Female') {
                      people.pets.forEach(
                        pet => {
                          if ( pet.type === 'Cat' ) {
                            this.femaleOnerCat.push(pet.name);
                          }
                      });
                  }
              }
          });
          this.maleOwnerCat.sort();
          this.femaleOnerCat.sort();

          return peopleData;
        }),
      catchError(
        err => {
        return throwError(err);
        })
      );
  }
}
