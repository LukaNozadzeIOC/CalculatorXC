import { Component } from '@angular/core';
import { ELEMENTS_MOCK } from './element.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  imports: [CommonModule],
  standalone: true
})
export class ListComponent {
  elements = ELEMENTS_MOCK;
}