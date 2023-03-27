import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('800ms',
        keyframes([
          style({transform: 'rotate(0deg)',offset:'0'}),
          style({transform: 'rotate(1turn)',offset:'1'})
        ])
        )
      ])
    ])

    
  ]
})
export class SidenavComponent implements OnInit {
  collapsed = false;
  navData =navbarData; 

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth= 0;

  closeSidenav():void {
    this.collapsed =false;
    this.onToggleSideNav.emit({collapsed: this.collapsed , screenWidth: this.screenWidth})
  }

  @HostListener ( 'window:resize', ['$event'])
  onResize (event: any) {
    this. screenWidth= window.innerWidth;
    if(this.screenWidth <= 768) {
        this.collapsed =false;
        this.onToggleSideNav.emit({collapsed: this.collapsed , screenWidth: this.screenWidth})
      }

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed , screenWidth: this.screenWidth})
   }
}
