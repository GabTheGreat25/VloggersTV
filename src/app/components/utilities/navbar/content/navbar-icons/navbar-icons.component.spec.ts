import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIconsComponent } from './navbar-icons.component';

describe('NavbarIconsComponent', () => {
  let component: NavbarIconsComponent;
  let fixture: ComponentFixture<NavbarIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
