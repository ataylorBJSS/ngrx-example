import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Item } from '../models/item.model';
import * as ItemActions from '../actions/item.actions';

// Create state interface for faults
export interface State extends EntityState<Item> { }

// Create an adapter based on the Fault interface
export const itemAdapter: EntityAdapter<Item> = createEntityAdapter<Item>();

// Create initial state for faults
export const initialState: State = itemAdapter.getInitialState();

export function reducer(state: State = initialState, action: ItemActions.Actions) {
  switch (action.type) {
    case ItemActions.actionType.ADD_ITEM:
      return itemAdapter.addOne(action.payload, state);
    case ItemActions.actionType.REMOVE_ITEM:
      return itemAdapter.removeOne(action.payload, state);
    default:
      return state;
  }
}

