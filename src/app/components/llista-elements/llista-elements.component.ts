import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  @Input() elements: Element[] = []; 
}
