import { compose } from "redux";
import { AppState } from "./app.state";

const devtools: StoreEnhancer<AppState> =  
    window['devToolsExtension'] ?  
    window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore<AppState>(
        reducer,
        compose(devtools)
    );
}

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore } 
];

export const AppStore = new InjectionToken('App.store');


