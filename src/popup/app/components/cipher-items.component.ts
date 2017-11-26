import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cipher } from '../../../models/domain/cipher';
import { I18nService } from '../services/i18n.service';

import * as template from './cipher-items.component.html';

@Component({
    selector: 'cipher-items',
    template,
})
export class CipherItemsComponent {
    i18n: any;

    @Input() ciphers: Cipher[];
    @Input() selectionTitle: string;

    @Output() onSelected = new EventEmitter<Cipher>();
    @Output() onView = new EventEmitter<Cipher>();

    constructor(i18nService: I18nService) {
        this.i18n = i18nService.createInstance();
    }

    view(cipher: any) {
        return this.onView.emit(cipher);
    }

    select(cipher: any) {
        return this.onSelected.emit(cipher);
    }
}
