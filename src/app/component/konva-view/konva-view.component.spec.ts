import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonvaViewComponent } from './konva-view.component';

describe('KonvaViewComponent', () => {
  let component: KonvaViewComponent;
  let fixture: ComponentFixture<KonvaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KonvaViewComponent]
    });
    fixture = TestBed.createComponent(KonvaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
