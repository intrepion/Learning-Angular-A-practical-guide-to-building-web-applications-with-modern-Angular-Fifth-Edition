import { Component, OnInit } from '@angular/core';
import { StubService } from '../stub.service';

@Component({
  selector: 'app-stub',
  imports: [],
  templateUrl: './stub.component.html',
  styleUrl: './stub.component.css'
})
export class StubComponent implements OnInit {
  msg = '';

  constructor(private stubService: StubService) {}

  ngOnInit(): void {
    this.msg = this.stubService.isBusy
      ? this.stubService.name + ' is on mission'
      : this.stubService.name + ' is available';
  }
}
