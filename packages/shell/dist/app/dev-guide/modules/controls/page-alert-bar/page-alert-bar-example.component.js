import { Component } from '@angular/core';
import { HealthAlertSeverity } from '../../../../../angular';
var PageAlertbarExampleComponent = /** @class */ (function () {
    function PageAlertbarExampleComponent() {
    }
    PageAlertbarExampleComponent.navigationTitle = function (appContextService, snapshot) {
        return 'sme-page-bar-alert';
    };
    PageAlertbarExampleComponent.prototype.ngOnInit = function () {
        this.criticalAlert = {
            severity: HealthAlertSeverity.Critical,
            message: 'A sample critical Alert',
            detailsCommand: function (event) { return alert('alert details: critical'); },
            detailsCaption: 'alert Details'
        };
        this.errorAlert = {
            severity: HealthAlertSeverity.Major,
            message: 'A sample Error Alert',
            detailsCommand: function (event) { return alert('alert details: error'); },
            detailsCaption: 'alert Details',
            detailsLabel: 'Error Details'
        };
        this.warningAlert = {
            severity: HealthAlertSeverity.Minor,
            message: 'A sample Warning Alert',
            detailsCommand: function (event) { return alert('alert details: warning'); },
            detailsLabel: 'Warning Details'
        };
        this.informationalAlert = {
            severity: HealthAlertSeverity.Cosmetic,
            message: 'A sample Info Alert',
            detailsCommand: function (event) { return alert('alert details: Informational'); }
        };
    };
    PageAlertbarExampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sme-ng2-controls-page-alert-bar-example',
                    template: "\n      <sme-page-alert-bar [alert]=\"criticalAlert\"></sme-page-alert-bar>\n      <sme-page-alert-bar [alert]=\"errorAlert\"></sme-page-alert-bar>\n      <sme-page-alert-bar [alert]=\"warningAlert\"></sme-page-alert-bar>\n      <sme-page-alert-bar [alert]=\"informationalAlert\"></sme-page-alert-bar>\n    "
                },] },
    ];
    /** @nocollapse */
    PageAlertbarExampleComponent.ctorParameters = function () { return []; };
    return PageAlertbarExampleComponent;
}());
export { PageAlertbarExampleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXYtZ3VpZGUvbW9kdWxlcy9jb250cm9scy9wYWdlLWFsZXJ0LWJhci9wYWdlLWFsZXJ0LWJhci1leGFtcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBQSxFQUE2QixNQUFPLGVBQUEsQ0FBZ0I7QUFFN0QsT0FBTyxFQUVILG1CQUFtQixFQUd0QixNQUFNLHdCQUFBLENBQXlCO0FBR2hDO0lBQUE7SUFtREEsQ0FBQztJQTdDaUIsNENBQWUsR0FBN0IsVUFBOEIsaUJBQW9DLEVBQUUsUUFBZ0M7UUFDaEcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0lBQ2hDLENBQUM7SUFFTSwrQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBZTtZQUM3QixRQUFRLEVBQUUsbUJBQW1CLENBQUMsUUFBUTtZQUN0QyxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLGNBQWMsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxFQUFoQyxDQUFnQztZQUN6RCxjQUFjLEVBQUUsZUFBZTtTQUNsQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBZTtZQUMxQixRQUFRLEVBQUUsbUJBQW1CLENBQUMsS0FBSztZQUNuQyxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLGNBQWMsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUE3QixDQUE2QjtZQUN0RCxjQUFjLEVBQUUsZUFBZTtZQUMvQixZQUFZLEVBQUUsZUFBZTtTQUNoQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBZTtZQUM1QixRQUFRLEVBQUUsbUJBQW1CLENBQUMsS0FBSztZQUNuQyxPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLGNBQWMsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxFQUEvQixDQUErQjtZQUN4RCxZQUFZLEVBQUUsaUJBQWlCO1NBQ2xDLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQWU7WUFDbEMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFFBQVE7WUFDdEMsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixjQUFjLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsOEJBQThCLENBQUMsRUFBckMsQ0FBcUM7U0FDakUsQ0FBQztJQUNOLENBQUM7SUFDRSx1Q0FBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELFFBQVEsRUFBRSxxVEFLVDtpQkFDSixFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsMkNBQWMsR0FBbUUsY0FBTSxPQUFBLEVBQzdGLEVBRDZGLENBQzdGLENBQUM7SUFDRixtQ0FBQztDQW5ERCxBQW1EQyxJQUFBO1NBbkRZLDRCQUE0QiIsImZpbGUiOiJwYWdlLWFsZXJ0LWJhci1leGFtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9CQS80NDcvcy9pbmxpbmVTcmMvIn0=