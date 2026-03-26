import { Component } from '@angular/core';
import { ELEMENTS_MOCK } from '../mocks/element.mock';
import { ListComponent } from '../mocks/mock.component';
import { Element } from '../models/element.model';
import { RouterOutlet } from '@angular/router';
import { BarraCercaComponent } from './barra-cerca/barra-cerca.component';
import { LlistaElementsComponent } from './llista-elements/llista-elements.component';
import { TargetaElementComponent } from './targeta-element/targeta-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:  [ListComponent, RouterOutlet, BarraCercaComponent, LlistaElementsComponent],
  standalone: true
})
export class AppComponent {
  elements: Element[] = ELEMENTS_MOCK;
  filteredElements: Element[] = ELEMENTS_MOCK;
  title: any;

  onSearch(term: string) {
    this.filteredElements = this.elements.filter(el =>
      el.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}