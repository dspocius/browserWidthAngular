import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'browserWidth';
  candestroy=true
  destroyed=false
  
  constructor(){
	  window.addEventListener('resize', function(){
		 const viewportWidth = Math.min(document.documentElement.clientWidth || 0, window.innerWidth || 0);

		 if(viewportWidth < 400 && !this.destroyed) {
			 this.candestroy = false;
			 this.destroyed = true;
		 }else{
			 if (this.destroyed) {
				 this.candestroy = true;
			 }
		 }
	  }.bind(this));
  }
}
