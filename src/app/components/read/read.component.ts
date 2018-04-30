import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Item } from '../../models/item.model';
import { selectAllItems } from '../../reducers';
import * as ItemActions from '../../actions/item.actions';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  items$: any;

  constructor(private store: Store<AppState>) {
  }

  delItem(id) {
    this.store.dispatch(new ItemActions.RemoveItem(id));
  }

  ngOnInit() {
    this.items$ = this.store.select(selectAllItems);
  }

}
