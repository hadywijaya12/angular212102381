import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private renderer: Renderer2){
    this.renderer.removeClass(document.body,"login-page");
    this.renderer.addClass(document.body,"layout-fixed");
  }
  ngOnInit(): void {
      
  }
  nim="212102381";
  nama="Hady Wijaya";
}
