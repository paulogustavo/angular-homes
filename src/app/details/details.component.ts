import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

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
    this.housingService.getHousingLocationById(id)
      .then(location => this.housingLocation = location);
  }

  goBack() {
    this.location.back();
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
