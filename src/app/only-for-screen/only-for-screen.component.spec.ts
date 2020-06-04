import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyForScreenComponent } from './only-for-screen.component';

describe('OnlyForScreenComponent', () => {
  let component: OnlyForScreenComponent;
  let fixture: ComponentFixture<OnlyForScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyForScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyForScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
