import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'video-playback';

  constructor(private oidcSecurityService: OidcSecurityService){
    
  }
  ngOnInit(): void {
    this.oidcSecurityService.checkAuth()
      .subscribe(({ isAuthenticated})=>{
        console.log('app is authenticated', isAuthenticated);
      });
  }
}
