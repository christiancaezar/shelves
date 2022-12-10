import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async success() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      subHeader: 'You created a Shelves account!',
      buttons: ['Nice! Let me log-in.'],
    });

    this.router.navigate(['login-main']);

    await alert.present();
  }
}
