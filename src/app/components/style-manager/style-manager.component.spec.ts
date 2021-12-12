import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleManagerComponent } from './style-manager.component';

describe('StyleManagerComponent', () => {
  let component: StyleManagerComponent;
  let fixture: ComponentFixture<StyleManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
