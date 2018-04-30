import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Item } from './../models/item.model';

export enum actionType {
  ADD_ITEM = '[ITEM] Add',
  REMOVE_ITEM = '[ITEM] Remove'
}

export class AddItem implements Action {
  readonly type = actionType.ADD_ITEM;

  constructor(public payload: Item) { }
}

export class RemoveItem implements Action {
  readonly type = actionType.REMOVE_ITEM;

  constructor(public payload: string) { }
}

export type Actions = AddItem | RemoveItem;
