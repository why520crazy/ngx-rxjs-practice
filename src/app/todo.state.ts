import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class FetchTodo {
    static type = 'FetchTodo';

    constructor(public readonly payload: string[]) { }
}


export class AddTodo {
    static type = 'AddTodo';

    constructor(public readonly payload: string) { }
}

export class RemoveTodo {
    static type = 'RemoveTodo';

    constructor(public readonly payload: number) { }
}

export class TodoStateModel {
    todo: string[];
    pizza: { model: any };
}

@State<string[]>({
    name: 'todo',
    defaults: []
})
export class TodoState {
    constructor(private http: HttpClient) { }

    @Selector()
    static pandas(state: string[]) {
        return state.filter(s => s.indexOf('panda') > -1);
    }

    @Action(FetchTodo)
    fetchTodo({ getState, setState }: StateContext<string[]>, { payload }: FetchTodo) {
        setState([...getState(), ...payload]);
    }

    @Action(AddTodo)
    addTodo({ getState, setState }: StateContext<string[]>, { payload }: AddTodo) {
        setState([...getState(), payload]);
    }

    @Action(RemoveTodo)
    removeTodo({ getState, setState }: StateContext<string[]>, { payload }: RemoveTodo) {
        return this.http.get('/api/xxx').pipe(
            tap((item) => {
                throw new Error(`sss`);
                // setState(getState().filter((_, i) => i !== payload));
            })
        );
    }
}

export class SetPrefix {
    static type = 'SetPrefix';
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todo: [],
        pizza: { model: undefined }
    },
    children: [TodoState]
})
export class TodosState {
    @Selector()
    static pizza(state: TodoStateModel) {
        return state.pizza;
    }

    @Action(SetPrefix)
    setPrefix({ getState, setState, patchState }) {
        const state = getState();
        const pizza1 = state.pizza.model.toppings;
        patchState({ pizza: { model: { toppings: 'Mr. ' + pizza1 } } });
    }
}
