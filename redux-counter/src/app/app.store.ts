import { compose, StoreEnhancer, createStore, Store } from "redux";
import { InjectionToken } from "@angular/core";
import { AppState } from "./app.state";
import { counterReducer } from "./counter.reducer";

// const devtools: StoreEnhancer<AppState> =  
//     window['devToolsExtension'] ?  
//     window['devToolsExtension']() : f => f;

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
    return createStore(
        counterReducer  
        // counterReducer,
        // compose(devtools)
    );
}

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore } 
];




