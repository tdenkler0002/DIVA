import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BiometricsComponent} from '../biometrics/biometrics.component';
import {UserServiceService} from '../services/user-service.service';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import {FormsModule}   from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private userService: UserServiceService
  ) {}

  user: User = new User();
  submitted = false;

  // Opens the biometrics modal
  open( ) {
    this.modalService.open(BiometricsComponent);
  }

  // Form submission button
  onSubmit() {
    this.submitted = true;
    this.addUser(this.user);
  }

  // Calls the User Service to add a user through API
  addUser(user: User) {
    let res = this.userService.addUser(user).then(
      result => res = result);
  }

  // Input field subscribes to keypress & only allows integers.
 numbersOnly(event: any) {
   const regEx = /[0-9\+\-\ ]/;
   let inputChar = String.fromCharCode(event.charCode);

   if (!regEx.test(inputChar)) {
     // invalid character, prevent input
     event.preventDefault();
   }
 }

  ngOnInit() {
  }

}
