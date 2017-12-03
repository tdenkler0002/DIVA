import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.scss']
})
export class BiometricsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  base64String: any
  ngOnInit() {
  }

}
