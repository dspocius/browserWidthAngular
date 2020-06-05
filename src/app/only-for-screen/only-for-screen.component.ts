import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigComponent } from '../config/config.component';

@Directive({
  selector: '[onlyForScreen]'
})

export class OnlyForScreenComponent {
  private viewportWidth;
  private config = new ConfigComponent();
  private added = false;
  private eventListenerFunction;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
	this.config.setValues(400,600);
  }

  onResizing(device) {
	  return function(e) {
		this.onResize(device);
	  }.bind(this);
  }

  onResize(device) {
	this.viewportWidth = Math.min(document.documentElement.clientWidth || 0, window.innerWidth || 0);

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
	console.log("add event listener");
	this.eventListenerFunction = this.onResizing(device);
	window.addEventListener('resize', this.eventListenerFunction);
	
	this.onResize(device);
  }
  
  ngOnDestroy() {
	  console.log("remove event listener");
	window.removeEventListener("resize", this.eventListenerFunction);
  }

}