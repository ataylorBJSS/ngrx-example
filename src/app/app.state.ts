import { IFault } from './models/fault.model';

export interface AppState {
  readonly faults: IFault[];
}

