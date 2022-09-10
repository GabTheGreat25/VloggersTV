import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVideoComponent } from './details-video.component';

describe('DetailsVideoComponent', () => {
  let component: DetailsVideoComponent;
  let fixture: ComponentFixture<DetailsVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
