import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MessageService } from '../message.service';

@Component({
    selector: 'demo2',
    templateUrl: './demo2.component.html',
    styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

    public todos$ = new BehaviorSubject<string[]>([]);

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        const observable = new Observable((observer) => {
            try {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                observer.complete();
            } catch (err) {
                observer.error(new Error(err));
            }
        });
        observable.subscribe((value: any) => {
            this.messageService.addMessage(`subscribe receive value: ${value}`);
        });
    }

    addTodo(title: string) {
        this.todos$.next([title]);
    }

}
