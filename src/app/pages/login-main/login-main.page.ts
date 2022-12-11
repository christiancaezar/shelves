import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Router } from '@angular/router';
import { AlertController, isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.page.html',
  styleUrls: ['./login-main.page.scss'],
})

export class LoginMainPage implements OnInit {
  user: any;

  constructor(private alertController: AlertController, private router: Router) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  async signIn(){
    this.user = await GoogleAuth.signIn();
    this.router.navigate(['home-page']);
  }

  async signOut(){
    await GoogleAuth.signOut();
    this.user = null;
  }

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


