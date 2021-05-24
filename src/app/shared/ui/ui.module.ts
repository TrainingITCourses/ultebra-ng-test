import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplate } from './page/page.template';
import { NoDataYetComponent } from './no-data-yet/no-data-yet.component';
import { LabelValueComponent } from './label-value/label-value.component';



@NgModule({
  declarations: [
    PageTemplate,
    NoDataYetComponent,
    LabelValueComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTemplate,
    NoDataYetComponent,
    LabelValueComponent
  ]
})
export class UiModule { }
