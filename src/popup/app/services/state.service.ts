import { Injectable } from '@angular/core';
import { UtilsService } from '../../../services/abstractions/utils.service';
import ConstantsService from '../../../services/constants.service';

@Injectable()
export class StateService {
    private state: any = {};

    constructor(private utilsService: UtilsService) {}

    async init() {
        const faviconsDisabled = await this.utilsService
            .getObjFromStorage<boolean>(ConstantsService.disableFaviconKey);

        this.saveState('faviconEnabled', !faviconsDisabled);
    }

    saveState(key: string, data: any) {
        this.state[key] = data;
    }

    getState(key: string): any {
        if (key in this.state) {
            return this.state[key];
        }

        return null;
    }

    removeState(key: string) {
        delete this.state[key];
    }

    purgeState() {
        this.state = {};
    }
}
