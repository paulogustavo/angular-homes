import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  housingLocationList: HousingLocation[]

  constructor(private housingService: HousingService) {
    this.housingLocationList = housingService.getAllHousingLoucations();
   }

  ngOnInit(): void {
  }

}
