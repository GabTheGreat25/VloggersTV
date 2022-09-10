import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidVideoComponent } from './paid-video.component';

describe('PaidVideoComponent', () => {
  let component: PaidVideoComponent;
  let fixture: ComponentFixture<PaidVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
