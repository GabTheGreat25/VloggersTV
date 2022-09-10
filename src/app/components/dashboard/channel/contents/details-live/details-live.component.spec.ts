import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLiveComponent } from './details-live.component';

describe('DetailsLiveComponent', () => {
  let component: DetailsLiveComponent;
  let fixture: ComponentFixture<DetailsLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
