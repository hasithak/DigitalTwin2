import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpLineComponent } from './pump-line.component';

describe('PumpLineComponent', () => {
  let component: PumpLineComponent;
  let fixture: ComponentFixture<PumpLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumpLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
