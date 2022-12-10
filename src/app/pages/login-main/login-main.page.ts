import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.page.html',
  styleUrls: ['./login-main.page.scss'],
})

export class LoginMainPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {
  }
  
  login(){
    this.router.navigate(['home-page']);
  }
  forgotPassword(){
    this.router.navigate(['forgot-password']);
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
