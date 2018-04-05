import { DoCheck, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppContextService, SplitViewComponent } from '../../../../angular';
import { EnvironmentModuleEntryPoint } from '../../../../core';
import { ShellService } from '../../../shell.service';
import { ShellCanDeactivateTool } from '../tools-guard-base.service';
export interface ToolMenuItem {
    entryPoint: EnvironmentModuleEntryPoint;
    fontIcon: string;
    urlIcon: string;
    link: string;
}
export declare class MultiToolComponent implements OnInit, OnDestroy, DoCheck, ShellCanDeactivateTool {
    private appContext;
    private shellService;
    private route;
    router: Router;
    strings: {
        launchTitle: string;
        menuTitle: string;
        homeTitle: string;
        connectionsTitle: string;
        generalTitle: string;
        sideLoadWarning: string;
        connectionOverviewTitle: string;
        toolsTitle: string;
        expand: string;
        collapse: string;
        searchPlaceholder: string;
        Nav: {
            Landmark: {
                Secondary: {
                    aria: {
                        label: string;
                    };
                };
            };
        };
        Aria: {
            selected: string;
            nonSelected: string;
        };
    };
    filter: string;
    keywordMatches: MsftSme.StringMap<string>;
    filteredTools: ToolMenuItem[];
    baseUrl: string;
    layers: string[];
    navigationContainer: ElementRef;
    navigation: ElementRef;
    splitView: SplitViewComponent;
    searchTextBox: ElementRef;
    private shouldCollapseWhenSearchBoxBlured;
    private tools;
    private paramsChangedSubscription;
    private diffFilter;
    private routingParams;
    private moduleSubscription;
    constructor(appContext: AppContextService, shellService: ShellService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    canDeactivateTool(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean>;
    expandToolsByClickSearchBox(): void;
    onSearchBoxFocused(): void;
    onSearchBoxBlured(): void;
    onOverlayClick(id: string): void;
    private initializeToolsList();
    private getIcon(item);
    private filterTools();
    getToolRoute(entryPoint: EnvironmentModuleEntryPoint, baseUrl: string): string;
}
