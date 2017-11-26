import * as angular from 'angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { ActionButtonsComponent, ActionButtonsDirective } from './action-buttons.component';
import { CipherItemsComponent } from './cipher-items.component';
import { IconComponent, IconDirective } from './icon.component';
import { PopOutComponent } from './pop-out.component';

export default angular
    .module('bit.components', [])
    .directive('cipherItems', downgradeComponent({
        component: CipherItemsComponent,
    }))
    .component('icon', IconComponent)
    .component('actionButtons', ActionButtonsComponent)
    .component('popOut', PopOutComponent)
    .name;

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CipherItemsComponent,
        IconDirective,
        ActionButtonsDirective,
    ],
    entryComponents: [
        CipherItemsComponent,
    ],
    providers: [
    ],
})
export class ComponentsModule {
}
