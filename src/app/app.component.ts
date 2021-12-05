import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineGrocery';

  ngOnInit(): void {

    if(navigator.onLine == false)
    {
      alert("Please turn on network connection");    
    }


  }
}
