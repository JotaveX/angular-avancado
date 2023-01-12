import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleListComponent } from './exemple-list.component';

describe('ExempleListComponent', () => {
  let component: ExempleListComponent;
  let fixture: ComponentFixture<ExempleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
