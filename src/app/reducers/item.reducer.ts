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
      const newItem = action.payload.item;
      // Find matching item
      const id = Object.keys(state.entities).filter(key =>
        state.entities[key].name === newItem.name
        && state.entities[key].size === newItem.size
      )[0];

      // handle duplicate entry
      if (id) {
        const qty = state.entities[id].qty + 1;
        return itemAdapter.upsertOne({ id, changes: { qty } }, state);
      }
      return itemAdapter.addOne(action.payload.item, state);
    case ItemActions.actionType.REMOVE_ITEM:
      return itemAdapter.removeOne(action.payload.id, state);
    case ItemActions.actionType.UPDATE_ITEM:
      return itemAdapter.updateOne(action.payload.item, state);
    default:
      return state;
  }
}

