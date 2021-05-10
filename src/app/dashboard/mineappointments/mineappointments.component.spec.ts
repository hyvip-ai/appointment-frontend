import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineappointmentsComponent } from './mineappointments.component';

describe('MineappointmentsComponent', () => {
  let component: MineappointmentsComponent;
  let fixture: ComponentFixture<MineappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineappointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
