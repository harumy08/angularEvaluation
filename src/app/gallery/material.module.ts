import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
