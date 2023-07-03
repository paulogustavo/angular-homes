import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  housingLocation: HousingLocation | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private housingService: HousingService
  ) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(id);
  }

}
