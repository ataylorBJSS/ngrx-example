import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';
import * as fromItem from './item.reducer';

// Create reducer map for consumption by app.modules and feature setup
export const reducers: ActionReducerMap<any> = {
  item: fromItem.reducer
};

// Select part of the state on which to create feature selectors
export const selectItemState = createFeatureSelector<fromItem.State>('items');

// Define feature selectors on part of selected state
export const { selectAll: selectAllItems } = fromItem.itemAdapter.getSelectors(selectItemState);

