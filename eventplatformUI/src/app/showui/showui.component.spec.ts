import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowuiComponent } from './showui.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ShowuiComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShowuiComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'showservice'`, () => {
    const fixture = TestBed.createComponent(ShowuiComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('showservice');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ShowuiComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to showservice!');
  });
});
