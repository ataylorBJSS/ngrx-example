import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/item.reducer';

/**
 * Module defining fault features for the faults store
 */
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('items', reducer)
  ],
  declarations: []
})
export class ItemModule { }

