import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomessayComponent } from './customessay.component';

describe('CustomessayComponent', () => {
  let component: CustomessayComponent;
  let fixture: ComponentFixture<CustomessayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomessayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomessayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
