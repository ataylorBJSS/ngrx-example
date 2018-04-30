import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

import { AppState } from '../../app.state';
import { Item } from '../../models/item.model';
import * as ItemActions from '../../actions/item.actions';

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

  addItem(name, size) {
    const id = this.generateUUID();
    this.store.dispatch(new ItemActions.AddItem({ item: { id, name, size, qty: 1 } }));
  }

}
