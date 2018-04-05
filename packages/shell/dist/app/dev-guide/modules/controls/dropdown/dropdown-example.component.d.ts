import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '../../../../../angular';
export declare class DropdownExampleComponent {
    data: {
        name: string;
        value: number;
    }[];
    static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string;
}
