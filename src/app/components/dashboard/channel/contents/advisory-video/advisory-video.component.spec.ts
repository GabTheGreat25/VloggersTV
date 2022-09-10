import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryVideoComponent } from './advisory-video.component';

describe('AdvisoryVideoComponent', () => {
  let component: AdvisoryVideoComponent;
  let fixture: ComponentFixture<AdvisoryVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisoryVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
