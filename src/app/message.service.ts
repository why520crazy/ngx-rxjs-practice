import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    public items: any[] = [];

    constructor() { }

    addMessage(message: string) {
        console.log(`add message ${message}`);
        this.items.push({
            message: message,
            dateTime: new Date()
        });
    }

    clear() {
        this.items = [];
    }
}
