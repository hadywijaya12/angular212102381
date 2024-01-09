import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(private renderer: Renderer2){
    this.renderer.removeClass(document.body,"login-page");
    this.renderer.addClass(document.body,"layout-fixed");
  }
  ngOnInit(): void {
      
  }
}
