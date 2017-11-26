import * as angular from 'angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { setAngularLib, UpgradeModule } from '@angular/upgrade/static';

import { ActionButtonsDirective } from './components/action-buttons.component';
import { CipherItemsComponent } from './components/cipher-items.component';
import { ComponentsModule } from './components/components.module';
import { IconComponent, IconDirective } from './components/icon.component';
import { utilsServiceProvider } from './services/background.service';
import { I18nService } from './services/i18n.service';
import { StateService } from './services/state.service';

setAngularLib(angular);

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        ComponentsModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [
        utilsServiceProvider,
        StateService,
        I18nService,
    ],
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['bit']);
    }
}
