import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerSystemComponent } from './fertilizer-system.component';

describe('FertilizerSystemComponent', () => {
  let component: FertilizerSystemComponent;
  let fixture: ComponentFixture<FertilizerSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizerSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
