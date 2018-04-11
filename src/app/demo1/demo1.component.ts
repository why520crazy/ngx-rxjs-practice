import { Component, OnInit } from '@angular/core';
import { AddTodo, RemoveTodo, TodoState, SetPrefix, TodosState, FetchTodo } from '../todo.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'demo1',
    templateUrl: './demo1.component.html',
    styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

    @Select(TodoState) todos$: Observable<string[]>;

    @Select((state) => state.todos) todos$$: Observable<string[]>;

    constructor(private store: Store) { }

    addTodo(todo: string) {
        this.store.dispatch(new AddTodo(todo));
    }

    removeTodo(index: number) {
        this.store.dispatch(new RemoveTodo(index)).subscribe(() => {
            console.log('Removed!');
        });
    }

    ngOnInit(): void {
        this.store.dispatch(new FetchTodo(['任务一', '任务二']));
        // forkJoin(this.todos$, this.todos$$);
    }

}
