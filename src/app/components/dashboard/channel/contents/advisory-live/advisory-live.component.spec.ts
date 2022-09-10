import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryLiveComponent } from './advisory-live.component';

describe('AdvisoryLiveComponent', () => {
  let component: AdvisoryLiveComponent;
  let fixture: ComponentFixture<AdvisoryLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisoryLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
