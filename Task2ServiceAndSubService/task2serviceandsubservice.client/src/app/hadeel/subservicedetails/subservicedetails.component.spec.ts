import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubservicedetailsComponent } from './subservicedetails.component';

describe('SubservicedetailsComponent', () => {
  let component: SubservicedetailsComponent;
  let fixture: ComponentFixture<SubservicedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubservicedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubservicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
