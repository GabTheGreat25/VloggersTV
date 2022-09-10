import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingComponent } from './app-setting.component';

describe('AppSettingComponent', () => {
  let component: AppSettingComponent;
  let fixture: ComponentFixture<AppSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
