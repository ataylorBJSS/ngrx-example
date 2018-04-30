import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';
import * as fault from './fault.reducer';

// Create reducer map for consumption by app.modules and feature setup
export const reducers: ActionReducerMap<any> = {
  fault: fault.reducer
};

// Select part of the state on which to create feature selectors
export const selectFaultState = createFeatureSelector<fault.State>('faults');

// Define feature selectors on part of selected state
export const { selectAll: selectAllFaults } = fault.faultAdapter.getSelectors(selectFaultState);

