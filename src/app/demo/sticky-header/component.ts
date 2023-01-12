import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 *  @for $i from 0 through 24 {
 *    .sticky-header-#{$i*2} {
 *      @include sticky-header(#{$i * 2}px);
 *    }
 *  }
 */

@Component({
  template: `
    <h1>Sticky Header</h1>
    <div class="h-200 fancy-scrollbar" style="overflow:scroll">
      <div class="h-100 bg-b-5"></div>
      <div class="bg-b-2 sticky-header-0">
        Sticky Header
      </div>
      <div class="bg-b-5" style="height:1000px"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StickyHeaderComponent {}
