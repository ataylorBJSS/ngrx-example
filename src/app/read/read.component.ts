import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { IFault } from './../models/fault.model';
import { selectAllFaults } from './../reducers';
import * as FaultActions from './../actions/fault.actions';
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  faults$: any;

  constructor(private store: Store<AppState>) {
  }

  delFault(id) {
    this.store.dispatch(new FaultActions.RemoveFauilt(id));
  }

  ngOnInit() {
    this.faults$ = this.store.select(selectAllFaults);
  }

}
