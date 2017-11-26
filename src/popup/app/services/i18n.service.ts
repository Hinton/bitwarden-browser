import { Injectable } from '@angular/core';
import { i18nService } from './background.service';

@Injectable()
export class I18nService {
    createInstance(): any {
        return i18nService();
    }
}
