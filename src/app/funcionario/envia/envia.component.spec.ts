import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaComponent } from './envia.component';

describe('EnviaComponent', () => {
  let component: EnviaComponent;
  let fixture: ComponentFixture<EnviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
