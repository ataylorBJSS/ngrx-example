import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';
import * as fault from './fault.reducer';

export const reducers: ActionReducerMap<any> = {
  fault: fault.reducer
};

export const selectFaultState = createFeatureSelector<fault.State>('faults');

export const { selectAll: selectAllFaults } = fault.faultAdapter.getSelectors(selectFaultState);

