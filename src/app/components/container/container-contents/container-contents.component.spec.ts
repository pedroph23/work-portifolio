import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerContentsComponent } from './container-contents.component';

describe('ContainerContentsComponent', () => {
  let component: ContainerContentsComponent;
  let fixture: ComponentFixture<ContainerContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
