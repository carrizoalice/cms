import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-card',
  templateUrl: './cms-card.component.html',
})
export class CmsCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() textContent: string;
  @Input() contenidoactions: boolean;
}
