import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  templateUrl: './targeta-element.component.html',
  standalone: true,
})
export class TargetaElementComponent {
  @Input() element!: Element;
}