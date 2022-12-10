import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageloader',
  templateUrl: './pageloader.page.html',
  styleUrls: ['./pageloader.page.scss'],
})
export class PageloaderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }

}
