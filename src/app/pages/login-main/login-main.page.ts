import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.page.html',
  styleUrls: ['./login-main.page.scss'],
})

export class LoginMainPage implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Email or Password Error',
      subHeader: 'Hey, your email or password might be wrong.',
      message: 'You can try again though.',
      buttons: ['Ok, thank you.'],
    });

    await alert.present();
  }

}
