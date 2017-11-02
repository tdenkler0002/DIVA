import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BiometricsComponent} from '../biometrics/biometrics.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open( ) {
    this.modalService.open(BiometricsComponent);
  }

  ngOnInit() {
  }

}
