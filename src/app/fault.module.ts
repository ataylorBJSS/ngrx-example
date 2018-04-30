import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/fault.reducer';

/**
 * Module defining fault features for the faults store
 */
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('faults', reducer)
  ],
  declarations: []
})
export class FaultModule { }

