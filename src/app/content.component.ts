import { Component, OnInit } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-content',
  template:'<router-outlet></router-outlet>',

})
export class ContentComponent  {
  constructor() { }


}
