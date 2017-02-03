/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KhapiService } from '../../services/khapi.service';
import { CharacterDataViewerComponent } from './character-data-viewer.component';
import { HttpModule } from '@angular/http';

describe('CharacterDataViewerComponent', () => {
  let component: CharacterDataViewerComponent;
  let fixture: ComponentFixture<CharacterDataViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [CharacterDataViewerComponent],
      providers: [KhapiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDataViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
