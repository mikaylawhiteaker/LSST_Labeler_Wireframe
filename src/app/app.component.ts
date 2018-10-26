import { Component } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LSST-Labeler';
  yesLabel : boolean = false;
  noLabel : boolean = false;
  imageCount : int = 0;


  LabeledYes(){
    this.yesLabel = true;
    this.noLabel = false;
  }

  LabeledNo(){
    this.noLabel = true;
    this.yesLabel = false;
  }

  NextImage(){
    this.noLabel = false;
    this.yesLabel = false;
    imageCount++;
  }
}
