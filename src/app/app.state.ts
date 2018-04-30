import { IFault } from './models/fault.model';

/**
 * Global AppState Interface
 */
export interface AppState {
  readonly faults: IFault[];
}

