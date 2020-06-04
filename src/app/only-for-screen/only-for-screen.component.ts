import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigComponent } from '../config/config.component';

@Directive({
  selector: '[onlyForScreen]'
})

export class OnlyForScreenComponent {
  private viewportWidth;
  private config = new ConfigComponent();
  private added = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
	const vw = Math.min(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	this.viewportWidth = vw;
	this.config.setValues(400,600);
  }

  onResize(device) {
	const allow = (device === "mobile" && this.viewportWidth < this.config.getMobile()) || 
	(device === "tablet" && this.viewportWidth >= this.config.getMobile() && this.viewportWidth < this.config.getTablet()) || 
	(device === "desktop" && this.viewportWidth >= this.config.getTablet());

    if (allow && !this.added) {
      // If condition is true add template to DOM
	  this.added = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
		if (!allow && this.added) {
			// Else remove template from DOM
			this.added = false;
			this.viewContainer.clear();
		}
    }	  
  }

  @Input() set onlyForScreen(device){
	window.addEventListener('resize', function(){
		this.onResize(device);
	}.bind(this));
	
	this.onResize(device);
  }

}