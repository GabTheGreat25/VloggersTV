import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerContentComponent } from './influencer-content.component';

describe('InfluencerContentComponent', () => {
  let component: InfluencerContentComponent;
  let fixture: ComponentFixture<InfluencerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
