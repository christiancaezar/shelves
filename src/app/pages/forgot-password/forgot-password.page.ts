import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async success() {
    const alert = await this.alertController.create({
      header: 'Email has been Sent!',
      subHeader: 'Try to log-in again using the temporary password.',
      buttons: ['Okay!'],
    });

    this.router.navigate(['login-main']);

    await alert.present();
  }

}
