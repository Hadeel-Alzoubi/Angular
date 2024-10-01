import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigestrationUserComponent } from './rigestration-user.component';

describe('RigestrationUserComponent', () => {
  let component: RigestrationUserComponent;
  let fixture: ComponentFixture<RigestrationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RigestrationUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigestrationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
