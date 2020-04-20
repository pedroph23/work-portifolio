import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOptionsComponent } from './nav-bar-options.component';

describe('NavBarOptionsComponent', () => {
  let component: NavBarOptionsComponent;
  let fixture: ComponentFixture<NavBarOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
