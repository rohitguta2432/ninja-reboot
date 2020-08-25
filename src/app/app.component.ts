import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits = ['apple','banana','pineapple','guva']
  onSubmit(data){
      console.log(data)
  }
}
