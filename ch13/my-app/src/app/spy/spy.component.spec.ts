import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyComponent } from './spy.component';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
