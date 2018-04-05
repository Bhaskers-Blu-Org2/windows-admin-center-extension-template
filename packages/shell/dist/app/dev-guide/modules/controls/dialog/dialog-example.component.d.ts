import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService, DialogService } from '../../../../../angular';
export declare class DialogExampleComponent {
    private dialogService;
    static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string;
    /**
     * Initializes a new instance of the DialogExampleComponent class.
     *
     * @param dialogService The dialog service provider.
     */
    constructor(dialogService: DialogService);
    /**
     * The method to run when the message dialog button is clicked.
     */
    onClickMessageDialog(): void;
    /**
     * The method to run when the message dialog button is clicked.
     */
    onClickMessageDialogWithLink(): void;
    /**
     * The method called when the message dialog with checkbox button is clicked.
     */
    onClickMessageDialogWithCheckbox(): void;
    /**
     * The method to run when the confirmation dialog button is clicked.
     */
    onClickConfirmationDialog(): void;
    /**
     * The method to run when the double check confirmation dialog button is clicked.
     */
    onClickDoubleCheckConfirmationDialog(): void;
    /**
     * The method to run when the alert confirmation dialog button is clicked.
     */
    onClickAlertConfirmationDialog(severity: string): void;
    /**
     * The method to run when the alert confirmation dialog button is clicked.
     */
    onClickConfirmationDialogWithAlertStyleButton(severity: string): void;
    /**
     * The method to run when the confirmation dialog button is clicked.
     */
    onClickConfirmationListDialog(listT?: string): void;
    /**
     * The method to run when the full screen dialog button is clicked.
     */
    onClickFullScreenDialog(): void;
    /**
     * The method to run when the confirmation dialog button is clicked.
     */
    onClickConfirmationDialogChain(): void;
}
