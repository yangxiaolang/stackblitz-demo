import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  templateUrl: 'template.html',
  styleUrls: ['styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangEnComponent {
  private readonly htmlEl: HTMLHtmlElement;
  locale = 'zh';

  constructor(private readonly cdr: ChangeDetectorRef) {
    this.htmlEl = document.querySelector('html')!;

    switch (this.htmlEl.getAttribute('lang')) {
      case 'en':
        this.locale = 'en';
        break;
      case 'zh':
        this.locale = 'zh';
        break;
      default:
        this.locale = 'zh';
    }
  }

  changeLocale() {
    this.locale = this.locale === 'en' ? 'zh' : 'en';
    this.htmlEl.setAttribute('lang', this.locale);
    this.cdr.markForCheck();
  }
}
