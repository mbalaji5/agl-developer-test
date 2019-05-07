import { Component, OnInit } from '@angular/core';
import { PeopleService } from './service/people.service';
import { People } from './service/people.model';
import { Pet } from './service/pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  maleCat:Array<string>;
  femaleCat:Array<string>;
  peopleData:Array<People>;
  
  constructor(private peopleService:PeopleService){
    this.maleCat=new Array<string>();
    this.femaleCat=new Array<string>();
    this.peopleData=new Array<People>();
  }

  ngOnInit()
  {
    this.peopleService.getpeople().subscribe(response=>{
      if(response){
        this.peopleData=response;
        this.formData();
      }
    });
  }

  formData(){
    this.peopleData.forEach(people=>{
      if(people.pets){
        if(people.gender=="Male")
          { 
            people.pets.forEach(pet=>{ pet.type=="Cat"?this.maleCat.push(pet.name):""});
        
          }else if(people.gender=="Female")
          {
            people.pets.forEach(
              pet=>{
              pet.type=="Cat"?this.femaleCat.push(pet.name):"";
            });
          }
      }
    });
  this.maleCat.sort();
  this.femaleCat.sort();
  }
  
}
