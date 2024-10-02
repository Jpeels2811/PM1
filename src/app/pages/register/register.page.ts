import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(private navCtrl: NavController) { }


  goToMainPage(){
    this.navCtrl.navigateRoot('/main-page');
  }  
}


