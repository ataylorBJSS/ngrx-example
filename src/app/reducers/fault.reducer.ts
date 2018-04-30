import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { IFault } from '../models/fault.model';
import * as FaultActions from '../actions/fault.actions';

export interface State extends EntityState<IFault> { }

export const faultAdapter: EntityAdapter<IFault> = createEntityAdapter<IFault>();

export const initialState: State = faultAdapter.getInitialState();

export function reducer(state: State = initialState, action: FaultActions.Actions) {
  switch (action.type) {
    case FaultActions.actionType.ADD_FAULT:
      return faultAdapter.addOne(action.payload, state);
    case FaultActions.actionType.REMOVE_FAULT:
      return faultAdapter.removeOne(action.payload, state);
    default:
      return state;
  }
}

