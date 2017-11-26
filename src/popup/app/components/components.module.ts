import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { ActionButtonsComponent } from './action-buttons.component';
import { CipherItemsComponent } from './cipher-items.component';
import { IconComponent } from './icon.component';
import { PopOutComponent } from './pop-out.component';

export default angular
    .module('bit.components', [])
    .directive('cipherItems', downgradeComponent({
        component: CipherItemsComponent
    }))
    .component('icon', IconComponent)
    .component('actionButtons', ActionButtonsComponent)
    .component('popOut', PopOutComponent)
    .name;
