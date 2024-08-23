import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanColumnHeaderComponent } from './kanban-column-header.component';

describe('KanbanColumnHeaderComponent', () => {
  let component: KanbanColumnHeaderComponent;
  let fixture: ComponentFixture<KanbanColumnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanColumnHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
