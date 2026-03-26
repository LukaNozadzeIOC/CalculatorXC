import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  templateUrl: './barra-cerca.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./barra-cerca.component.scss']
})
export class BarraCercaComponent {
  @Output() searchEvent = new EventEmitter<string>();
  search: string = '';
  onSearch() {
    this.searchEvent.emit(this.search);
  }
}