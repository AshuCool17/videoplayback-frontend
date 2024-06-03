import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isAuthenticated:  boolean = false;

  constructor(private oidcSecurityService: OidcSecurityService){
    
  }
ngOnInit: void{
  this.oidcSecurityService.isAuthenticated.subscribe(({isAuthenticated})=>){
    this.isAuthenticated = isAuthenticated;
  }
}
}
