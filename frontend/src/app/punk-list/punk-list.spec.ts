import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PunkListComponent } from './punk-list';

describe('PunkListComponent', () => {
  let component: PunkListComponent;
  let fixture: ComponentFixture<PunkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunkListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
