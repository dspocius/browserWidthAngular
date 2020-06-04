import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  private mobile;
  private tablet;
  
  constructor() {
  }

  setValues(mobile, tablet) {
	this.mobile = mobile;
	this.tablet = tablet;
  }

  getMobile() {
	  return this.mobile;
  }
  
  getTablet() {
	  return this.tablet;
  }
  
  ngOnInit() {
  }

}
