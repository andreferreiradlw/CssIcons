import { NgModule } from '@angular/core';

import {
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
