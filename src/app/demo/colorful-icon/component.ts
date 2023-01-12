import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  templateUrl: 'template.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorfulIconComponent {
  private readonly htmlEl: HTMLHtmlElement;
  theme = 'light';

  constructor(private readonly cdr: ChangeDetectorRef) {
    this.htmlEl = document.querySelector('html')!;

    switch (this.htmlEl.getAttribute('aui-theme-mode')) {
      case 'light':
        this.theme = 'light';
        break;
      case 'dark':
        this.theme = 'dark';
        break;
      default:
        this.theme = 'light';
    }
  }

  changeTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.htmlEl.setAttribute('aui-theme-mode', this.theme);
    this.cdr.markForCheck();
  }
}
