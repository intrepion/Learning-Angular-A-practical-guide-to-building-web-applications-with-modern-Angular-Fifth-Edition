import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data with waitForAsync', waitForAsync(async() => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const itemDisplay: HTMLElement[] = fixture.nativeElement.querySelectorAll('p');
    expect(itemDisplay.length).toBe(2);
  }));

  it('should get items with fakeAsync', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    tick(500);
    fixture.detectChanges();

    const itemDisplay: HTMLElement[] = fixture.nativeElement.
    querySelectorAll('p');
    expect(itemDisplay.length).toBe(2);
  }));
});
