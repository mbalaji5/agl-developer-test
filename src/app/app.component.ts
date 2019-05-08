import { Component, OnInit } from '@angular/core';
import { PeopleService } from './service/people.service';
import { People } from './service/people.model';
import { Pet } from './service/pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getpeople().subscribe();
  }
}
