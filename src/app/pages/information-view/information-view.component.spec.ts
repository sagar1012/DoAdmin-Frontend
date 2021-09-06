import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationViewComponent } from './information-view.component';

describe('InformationViewComponent', () => {
  let component: InformationViewComponent;
  let fixture: ComponentFixture<InformationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
