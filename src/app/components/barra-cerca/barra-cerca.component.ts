import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-cerca',
  templateUrl: './barra-cerca.component.html',
  standalone: true,
})
export class BarraCercaComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }
}