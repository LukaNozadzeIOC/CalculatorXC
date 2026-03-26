import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';
import { UpperCasePipe } from '@angular/common'; 
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-targeta-element',
  templateUrl: './targeta-element.component.html',
  standalone: true,
  imports: [UpperCasePipe, DecimalPipe]
})
export class TargetaElementComponent {
  @Input() element!: Element;
}