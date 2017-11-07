import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BiometricsComponent} from '../biometrics/biometrics.component';
import {UserServiceService} from '../services/user-service.service';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(
    private modalService: NgbModal,
    private userService: UserServiceService
  ) {}

  open( ) {
    this.modalService.open(BiometricsComponent);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    this.addUser(this.user);
  }

  addUser(user: User) {
    let res = this.userService.addUser(user).then(
      result => res = result);
  }

  ngOnInit() {
  }

}
