import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from "../targeta-element/targeta-element.component";

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  @Input() elements: Element[] = []; 
  trackById(index: number, item: any): number {
  return item.id;
}
}
