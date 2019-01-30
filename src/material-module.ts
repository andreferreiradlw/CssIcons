import { NgModule } from '@angular/core';

import {
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  exports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
