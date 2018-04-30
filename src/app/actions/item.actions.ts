import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Item } from './../models/item.model';
import { Update } from "@ngrx/entity";

export enum actionType {
  ADD_ITEM = '[ITEM] Add',
  REMOVE_ITEM = '[ITEM] Remove',
  UPDATE_ITEM = '[ITEM] Update'
}

export class AddItem implements Action {
  readonly type = actionType.ADD_ITEM;

  constructor(public payload: { item: Item }) { }
}

export class UpdateItem implements Action {
  readonly type = actionType.UPDATE_ITEM;

  constructor(public payload: { item: Update<Item> }) { }
}
export class RemoveItem implements Action {
  readonly type = actionType.REMOVE_ITEM;

  constructor(public payload: { id: string }) { }
}

export type Actions = AddItem | UpdateItem | RemoveItem;
