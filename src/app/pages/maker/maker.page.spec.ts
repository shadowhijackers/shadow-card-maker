import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakerPage } from './maker.page';

describe('MakerPage', () => {
  let component: MakerPage;
  let fixture: ComponentFixture<MakerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
