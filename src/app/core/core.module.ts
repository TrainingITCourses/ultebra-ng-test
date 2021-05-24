import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataModule } from '../shared/data/data.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, DataModule, HttpClientModule],
})
export class CoreModule {}
