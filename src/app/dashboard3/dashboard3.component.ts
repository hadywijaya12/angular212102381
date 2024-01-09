import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit{
  constructor(private renderer: Renderer2){
    this.renderer.removeClass(document.body,'sidebar-open');
    document.getElementById('dashboard-script')?.remove();

    let scriptEl = document.createElement('script');
    scriptEl.id = 'dashboard-script';
    scriptEl.src = 'assets/dist/js/pages/dashboard3.js';
    this.renderer.appendChild(document.body, scriptEl);
  }
   
  ngOnInit(): void {
      
  }
}
