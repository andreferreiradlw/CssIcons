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
  MatPaginatorModule,
  MatProgressSpinnerModule
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
    MatPaginatorModule,
    MatProgressSpinnerModule
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
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
