import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-avatar',
  templateUrl: 'cms-avatar.component.html',
  styleUrls: ['cms-avatar.component.scss'],
})
export class CmsAvatarComponent {
  @Input() photo: string;
}
