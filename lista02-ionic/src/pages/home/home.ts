import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

// por enquanto, nao farei outras abas
  constructor(public navCtrl: NavController) {
    
  }

dice = 4;
result = 0;

 resultRoll(n : number){
  // Rolo prum valor aleatorio
  this.dice = n;

  this.result = Math.floor(Math.random() * n) + 1; 

  console.log(this.result);

return this.result;
};

}
