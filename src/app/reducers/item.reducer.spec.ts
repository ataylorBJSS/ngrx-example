import { reducer } from "./item.reducer";
import * as fromItems from "./item.reducer";
import { AddItem, RemoveItem, UpdateItem } from "../actions/item.actions";
import { Item, generateMockItem } from "../models/item.model";

describe('ItemReducer', () => {

  const item1 = generateMockItem();
  const item2 = { ...item1, id: '2' };
  const item3 = { ...item1, id: '3' };

  const initialState: fromItems.State = {
    ids: [item1.id, item2.id],
    entities: {
      [item1.id]: item1,
      [item2.id]: item2,
    }
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = reducer(undefined, {} as any);

    });
  });


});
