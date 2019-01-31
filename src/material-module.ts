import { NgModule } from '@angular/core';

import {
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
