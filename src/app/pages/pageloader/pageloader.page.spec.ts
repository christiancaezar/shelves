import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { PageloaderPage } from './pageloader.page';

describe('PageloaderPage', () => {
  let component: PageloaderPage;
  let fixture: ComponentFixture<PageloaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageloaderPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PageloaderPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to login page after selection', fakeAsync(() => {
    spyOn(router, 'navigate');
    
    component.ngOnInit();
    
    tick(1500);

    expect(router.navigate).toHaveBeenCalledWith(['selection']);
  }))
});
