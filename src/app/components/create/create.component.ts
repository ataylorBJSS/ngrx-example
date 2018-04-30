import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

import { AppState } from '../../app.state';
import { IFault } from '../../models/fault.model';
import * as FaultActions from '../../actions/fault.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private store: Store<AppState>) { }

  generateUUID() {
    return UUID.UUID();
  }

  addFault(section, name) {
    const id = this.generateUUID();
    this.store.dispatch(new FaultActions.AddFault({ id, section, name }));
  }

}
