import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {

  constructor(public userService: UserServiceService) { }

  ngOnInit() {
  }

}
