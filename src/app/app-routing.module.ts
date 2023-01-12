import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicolorIconComponent } from './demo/bicolor-icon/component';
import { ColorfulIconComponent } from './demo/colorful-icon/component';
import { LangEnComponent } from './demo/lang-en/component';
import { LayoutComponent } from './demo/layout/component';
import { MarginAndPaddingComponent } from './demo/margin-padding/component';
import { ScaleComponent } from './demo/scale-state/component';
import { SingleIconComponent } from './demo/single-icon/component';
import { FoldingCubeComponent } from './demo/sk-folding-cube/component';
import { StickyHeaderComponent } from './demo/sticky-header/component';
import { TextOverflowComponent } from './demo/text-overflow/component';
import { TooltipHostComponent } from './demo/tooltip-host/component';
import { ListComponent } from './demo/list/component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'layout' },
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: 'margin-padding',
    component: MarginAndPaddingComponent,
  },
  {
    path: 'folding-cube',
    component: FoldingCubeComponent,
  },
  {
    path: 'text-overflow',
    component: TextOverflowComponent,
  },
  {
    path: 'sticky-header',
    component: StickyHeaderComponent,
  },
  {
    path: 'tooltip-host',
    component: TooltipHostComponent,
  },
  {
    path: 'bicolor-icon',
    component: BicolorIconComponent,
  },
  {
    path: 'single-icon',
    component: SingleIconComponent,
  },
  {
    path: 'colorful-icon',
    component: ColorfulIconComponent,
  },
  {
    path: 'lang-en',
    component: LangEnComponent,
  },
  {
    path: 'scale',
    component: ScaleComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    MarginAndPaddingComponent,
    FoldingCubeComponent,
    TextOverflowComponent,
    StickyHeaderComponent,
    TooltipHostComponent,
    LangEnComponent,
    ColorfulIconComponent,
    ScaleComponent,
    SingleIconComponent,
    ListComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
