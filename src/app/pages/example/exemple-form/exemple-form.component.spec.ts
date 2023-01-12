import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleFormComponent } from './exemple-form.component';

describe('ExempleFormComponent', () => {
  let component: ExempleFormComponent;
  let fixture: ComponentFixture<ExempleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
