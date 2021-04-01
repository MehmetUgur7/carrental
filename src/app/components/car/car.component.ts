import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car1: any = { carId: 1, carName: 'Serçe', brandId: 1, modelYear: 1990 };
  car2: any = { carId: 2, carName: 'Doğan', brandId: 2, modelYear: 1990 };
  car3: any = { carId: 3, carName: 'Şahin', brandId: 3, modelYear: 1990 };
  car4: any = { carId: 4, carName: 'Toros', brandId: 4, modelYear: 1990 };
  car5: any = { carId: 5, carName: 'Renault', brandId: 5, modelYear: 1990 };

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5];

  constructor() {}

  ngOnInit(): void {}
}
