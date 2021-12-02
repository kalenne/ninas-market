import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoguinhosComponent } from './doguinhos.component';

describe('DoguinhosComponent', () => {
  let component: DoguinhosComponent;
  let fixture: ComponentFixture<DoguinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoguinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoguinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
