import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBodyComponent } from './register-body.component';

describe('RegisterBodyComponent', () => {
  let component: RegisterBodyComponent;
  let fixture: ComponentFixture<RegisterBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
