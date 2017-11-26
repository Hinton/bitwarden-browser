import * as angular from 'angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setAngularLib, UpgradeModule } from '@angular/upgrade/static';

import { CipherItemsComponent } from './components/cipher-items.component';
import { IconComponent, IconDirective } from './components/icon.component';
import { StateService } from './services/state.service';
import { ActionButtonsDirective } from './components/action-buttons.component';

setAngularLib(angular);

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
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
        StateService,
    ],
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['bit']);
    }
}
