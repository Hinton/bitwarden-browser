import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cipher } from '../../../models/domain/cipher';

import * as template from './cipher-items.component.html';

@Component({
    selector: 'cipher-items',
    template,
})
export class CipherItemsComponent {
    onView: Function;

    i18n: any;

    @Input() ciphers: Cipher[];
    @Output() onSelected = new EventEmitter<Cipher>();

    constructor() {
        // this.i18n = i18nService;
    }

    view(cipher: any) {
        return this.onView({cipher});
    }

    select(cipher: any) {
        return this.onSelected.emit(cipher);
    }
}

/*
export const CipherItemsComponent = {
    bindings: {
        ciphers: '<',
        selectionTitle: '<',
        onSelected: '&',
        onView: '&',
    },
    controller: CipherItemsController,
    template,
};
*/
