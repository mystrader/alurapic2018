import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://img.etsystatic.com/il/e0e117/876045093/il_570xN.876045093_hec7.jpg?version=0',
      description: 'leão macho'
    },
    {
      url:'http://images.redetv.uol.com.br/public/jornalismo/redetvinoticias/20151007100530opbHhNXQXn.jpg',
      description: 'Leão fêmea' 
  }
];



}

