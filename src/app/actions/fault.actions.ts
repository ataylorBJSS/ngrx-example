import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IFault } from './../models/fault.model';

export enum actionType {
  ADD_FAULT = '[FAULT] Add',
  REMOVE_FAULT = '[FAULT] Remove'
}

export class AddFault implements Action {
  readonly type = actionType.ADD_FAULT;

  constructor(public payload: IFault) { }
}

export class RemoveFauilt implements Action {
  readonly type = actionType.REMOVE_FAULT;

  constructor(public payload: string) { }
}

export type Actions = AddFault | RemoveFauilt;
